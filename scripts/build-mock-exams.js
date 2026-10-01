#!/usr/bin/env node
/*
 * Build 11 deterministic SAA-C03 mock exams from the source question dump.
 *
 * AWS publishes four scored-content weights (30/26/24/20) and an exam format
 * of 65 questions in 130 minutes. The 15 unscored questions are not identified,
 * so each practice set applies the published ratio to all 65 questions:
 * 20 secure, 17 resilient, 15 high-performing, and 13 cost-optimized.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
const sourceFiles = fs.readdirSync(path.join(root, "data"))
  .filter((filename) => /^exam\d+\.js$/.test(filename))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
for (const sourceFile of sourceFiles) {
  const filename = path.join(root, "data", sourceFile);
  vm.runInContext(fs.readFileSync(filename, "utf8"), context, { filename });
}

const sourceExams = context.window.SAA_EXAMS || [];
const questions = sourceExams.flatMap((exam) => (exam.questions || []).map((question) => ({
  ...question,
  sourceExamId: exam.id,
})));

const domains = [
  { id: "secure", name: "보안 아키텍처", shortName: "보안", weight: 30, perExam: 20 },
  { id: "resilient", name: "복원력 있는 아키텍처", shortName: "복원력", weight: 26, perExam: 17 },
  { id: "performance", name: "고성능 아키텍처", shortName: "고성능", weight: 24, perExam: 15 },
  { id: "cost", name: "비용 최적화 아키텍처", shortName: "비용", weight: 20, perExam: 13 },
];
const examCount = 11;
const skipCount = questions.length - domains.reduce((sum, domain) => sum + domain.perExam * examCount, 0);
if (skipCount < 0) throw new Error("Not enough source questions to build the requested mock exams.");

const rules = {
  secure: {
    tags: [
      "security", "iam", "least privilege", "encryption", "kms", "secrets manager",
      "security group", "network acl", "waf", "shield", "ddos", "firewall", "macie",
      "guardduty", "security hub", "inspector", "compliance", "audit", "cloudtrail",
      "organizations", "scp", "identity", "cognito", "authentication", "authorization",
      "certificate", "acm", "tls", "cross-account access", "bucket policy", "data protection",
    ],
    body: [
      "secure", "security", "encrypt", "permission", "least privilege", "access control",
      "credential", "certificate", "authentication", "authorization", "compliance",
      "sensitive", "public access", "attack", "threat", "identity",
    ],
  },
  resilient: {
    tags: [
      "high availability", "multi-az", "disaster recovery", "backup", "restore", "rpo", "rto",
      "failover", "fault tolerance", "resilience", "health check", "multi-region", "replication",
      "auto scaling", "load balancer", "alb", "nlb", "route 53", "decoupling", "sqs", "sns",
      "eventbridge", "dead-letter queue", "warm standby", "pilot light", "read replica",
    ],
    body: [
      "highly available", "availability", "failure", "failover", "recover", "recovery",
      "backup", "restore", "fault tolerant", "resilien", "disaster", "decouple",
      "single point of failure", "multiple availability zones", "rpo", "rto",
    ],
  },
  performance: {
    tags: [
      "performance", "low latency", "scalability", "high throughput", "network throughput", "iops",
      "provisioned iops", "caching", "cloudfront", "global accelerator", "elasticache", "dax",
      "hpc", "high performance computing", "cluster placement group", "kinesis", "streaming",
      "read scaling", "dynamodb accelerator", "batch processing", "parallel processing",
      "compute optimized", "memory optimized", "provisioned concurrency", "connection pooling",
    ],
    body: [
      "performance", "latency", "throughput", "iops", "cache", "faster", "speed",
      "scale", "scaling", "high-performance", "high performance", "concurrent",
      "connections", "traffic spike", "millisecond", "microsecond",
    ],
  },
  cost: {
    tags: [
      "cost optimization", "cost", "billing", "cost management", "cost explorer", "budgets",
      "savings plans", "reserved instances", "reserved db instances", "spot", "requester pays",
      "s3 lifecycle", "lifecycle policy", "storage class", "standard-ia", "intelligent-tiering",
      "glacier", "deep archive", "on-demand capacity", "cost allocation", "right sizing",
    ],
    body: [
      "cost-effective", "cost effective", "lowest cost", "reduce cost", "minimize cost",
      "save cost", "cost savings", "least expensive", "billing", "budget", "infrequent",
      "archive", "reserved", "spot instance", "pay only", "price",
    ],
  },
};

function occurrences(haystack, needle) {
  let count = 0;
  let cursor = 0;
  while ((cursor = haystack.indexOf(needle, cursor)) >= 0) {
    count += 1;
    cursor += needle.length;
  }
  return count;
}

function score(question, domainId) {
  const tags = (question.tags || []).map((tag) => String(tag).toLowerCase());
  const body = [
    question.question && question.question.en,
    question.question && question.question.ko,
    question.explanation && question.explanation.en,
    question.explanation && question.explanation.ko,
  ].filter(Boolean).join(" ").toLowerCase();
  const rule = rules[domainId];
  let value = 1;
  rule.tags.forEach((keyword) => {
    tags.forEach((tag) => {
      if (tag === keyword) value += 28;
      else if (tag.includes(keyword) || keyword.includes(tag)) value += 12;
    });
  });
  rule.body.forEach((keyword) => { value += Math.min(occurrences(body, keyword), 3) * 3; });

  // Strong labels in the curated source data take precedence over incidental words.
  if (domainId === "secure" && tags.includes("security")) value += 45;
  if (domainId === "resilient" && (tags.includes("high availability") || tags.includes("disaster recovery"))) value += 45;
  if (domainId === "performance" && tags.includes("performance")) value += 45;
  if (domainId === "cost" && tags.includes("cost optimization")) value += 60;
  return value;
}

// Min-cost max-flow gives every domain its exact capacity while maximizing
// the total semantic fit of all assigned questions. Ten low-fit questions stay
// in the category practice pool only.
function assignDomains() {
  const source = 0;
  const questionStart = 1;
  const domainStart = questionStart + questions.length;
  const skipNode = domainStart + domains.length;
  const sink = skipNode + 1;
  const graph = Array.from({ length: sink + 1 }, () => []);
  const addEdge = (from, to, capacity, cost) => {
    graph[from].push({ to, capacity, cost, rev: graph[to].length, original: capacity });
    graph[to].push({ to: from, capacity: 0, cost: -cost, rev: graph[from].length - 1, original: 0 });
  };
  questions.forEach((question, index) => {
    const node = questionStart + index;
    addEdge(source, node, 1, 0);
    domains.forEach((domain, domainIndex) => addEdge(node, domainStart + domainIndex, 1, -score(question, domain.id)));
    addEdge(node, skipNode, 1, 0);
  });
  domains.forEach((domain, index) => addEdge(domainStart + index, sink, domain.perExam * examCount, 0));
  addEdge(skipNode, sink, skipCount, 0);

  for (let flow = 0; flow < questions.length; flow += 1) {
    const dist = Array(graph.length).fill(Infinity);
    const previousNode = Array(graph.length).fill(-1);
    const previousEdge = Array(graph.length).fill(-1);
    const queued = Array(graph.length).fill(false);
    const queue = [source];
    dist[source] = 0;
    queued[source] = true;
    while (queue.length) {
      const node = queue.shift();
      queued[node] = false;
      graph[node].forEach((edge, edgeIndex) => {
        if (edge.capacity <= 0 || dist[edge.to] <= dist[node] + edge.cost) return;
        dist[edge.to] = dist[node] + edge.cost;
        previousNode[edge.to] = node;
        previousEdge[edge.to] = edgeIndex;
        if (!queued[edge.to]) { queue.push(edge.to); queued[edge.to] = true; }
      });
    }
    if (!Number.isFinite(dist[sink])) throw new Error("Could not assign every source question.");
    for (let node = sink; node !== source; node = previousNode[node]) {
      const edge = graph[previousNode[node]][previousEdge[node]];
      edge.capacity -= 1;
      graph[node][edge.rev].capacity += 1;
    }
  }

  return questions.map((question, index) => {
    const edges = graph[questionStart + index];
    const used = edges.find((edge) => edge.original === 1 && edge.capacity === 0 && edge.to >= domainStart);
    if (!used || used.to === skipNode) return { question, domain: null };
    return { question, domain: domains[used.to - domainStart].id };
  });
}

function hash(value) {
  let output = 2166136261;
  for (const character of String(value)) {
    output ^= character.charCodeAt(0);
    output = Math.imul(output, 16777619);
  }
  return output >>> 0;
}

const assigned = assignDomains();
const sets = Array.from({ length: examCount }, (_, index) => ({
  id: `mock${index + 1}`,
  title: `실전 모의고사 ${index + 1}`,
  note: "공식 구성 · 65문항",
  questions: [],
}));

domains.forEach((domain) => {
  const pool = assigned
    .filter((row) => row.domain === domain.id)
    .sort((a, b) => {
      const multiA = (a.question.answer || []).length > 1 ? 1 : 0;
      const multiB = (b.question.answer || []).length > 1 ? 1 : 0;
      return multiB - multiA || hash(`${domain.id}:${a.question.id}`) - hash(`${domain.id}:${b.question.id}`);
    });
  pool.forEach((row) => {
    const candidates = sets
      .map((set, index) => ({
        set,
        index,
        domainCount: set.questions.filter((item) => item.domain === domain.id).length,
        multiCount: set.questions.filter((item) => item.multi).length,
        total: set.questions.length,
      }))
      .filter((candidate) => candidate.domainCount < domain.perExam)
      .sort((a, b) => {
        const isMulti = (row.question.answer || []).length > 1;
        if (isMulti && a.multiCount !== b.multiCount) return a.multiCount - b.multiCount;
        return a.domainCount - b.domainCount || a.total - b.total || a.index - b.index;
      });
    const target = candidates[0].set;
    target.questions.push({
      id: row.question.id,
      domain: domain.id,
      multi: (row.question.answer || []).length > 1,
    });
  });
});

sets.forEach((set) => {
  set.questions.sort((a, b) => hash(`${set.id}:${a.id}`) - hash(`${set.id}:${b.id}`));
  set.questions = set.questions.map(({ id, domain }) => ({ id, domain }));
});

const output = `/* Generated by scripts/build-mock-exams.js. */\nwindow.SAA_MOCK_DOMAINS = ${JSON.stringify(domains, null, 2)};\nwindow.SAA_MOCK_EXAMS = ${JSON.stringify(sets, null, 2)};\n`;
fs.writeFileSync(path.join(root, "data", "mock-exams.js"), output);

const summary = sets.map((set) => ({
  id: set.id,
  questions: set.questions.length,
  multi: set.questions.filter((item) => {
    const question = questions.find((candidate) => candidate.id === item.id);
    return (question.answer || []).length > 1;
  }).length,
  ...Object.fromEntries(domains.map((domain) => [domain.id, set.questions.filter((item) => item.domain === domain.id).length])),
}));
console.table(summary);
console.log(`Practice-only questions: ${assigned.filter((row) => !row.domain).map((row) => row.question.number).join(", ")}`);
