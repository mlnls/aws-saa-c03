/* Exam 8 · Topic 1 · 현재 수록 범위: 351~400번 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam8",
  title: "Exam 8",
  note: "Topic 1 · #351–400",
  questions: [
  {
    id: "exam8-351", number: 351, tags: ["AWS Step Functions", "AWS Lambda", "Serverless", "Workflow", "Event-Driven"],
    question: { en: "A company is migrating a data-management application to AWS. It wants a distributed, event-driven, serverless workflow with minimal operational overhead. Which solution meets these requirements?", ko: "회사는 데이터 관리 애플리케이션을 AWS로 이전하며 분산 이벤트 기반 서버리스 워크플로와 최소 운영 오버헤드를 원합니다. 어떤 솔루션이 요구사항을 충족합니까?" },
    options: [
      { k: "A", en: "Build the workflow in AWS Glue and use Glue to invoke Lambda for each step.", ko: "AWS Glue에서 워크플로를 만들고 각 단계에서 Lambda를 호출합니다." },
      { k: "B", en: "Build a Step Functions workflow but run the application and workflow steps on EC2 instances.", ko: "Step Functions 워크플로를 만들고 애플리케이션과 단계를 EC2에서 실행합니다." },
      { k: "C", en: "Build the workflow in EventBridge and invoke Lambda functions on a schedule.", ko: "EventBridge에서 워크플로를 만들고 일정에 따라 Lambda를 호출합니다." },
      { k: "D", en: "Build an AWS Step Functions state machine that invokes Lambda functions for the workflow steps.", ko: "AWS Step Functions 상태 머신을 만들고 워크플로 단계에서 Lambda 함수를 호출합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "Step Functions는 상태 머신으로 작업 순서, 분기, 재시도와 오류 처리를 관리하고 Lambda와 결합해 서버리스 워크플로를 구성합니다.", en: "Step Functions manages sequencing, branching, retries, and errors through a state machine and combines with Lambda for a serverless workflow." },
    why_wrong: {
      A: { ko: "Glue 워크플로는 주로 데이터 통합 작업용이며 범용 애플리케이션 오케스트레이션에는 Step Functions가 적합합니다.", en: "Glue workflows focus on data integration jobs; Step Functions is the general application orchestrator." },
      B: { ko: "EC2 실행은 서버 프로비저닝과 관리가 필요해 서버리스 요구에 맞지 않습니다.", en: "EC2 execution requires server provisioning and management and is not serverless." },
      C: { ko: "EventBridge는 이벤트 라우팅과 예약에 적합하지만 복잡한 상태 기반 워크플로를 직접 관리하지 않습니다.", en: "EventBridge routes and schedules events but does not directly manage complex stateful workflows." }
    }
  },

  {
    id: "exam8-352", number: 352, tags: ["AWS Global Accelerator", "UDP", "Gaming", "Multi-Region", "Low Latency"],
    question: { en: "An online multiplayer game uses UDP and is deployed in eight AWS Regions. The network must minimize latency and packet loss for end users. Which solution meets the requirements?", ko: "UDP를 사용하는 온라인 멀티플레이어 게임이 8개 AWS 리전에 배포됩니다. 최종 사용자의 지연 시간과 패킷 손실을 최소화하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create transit gateways in every Region and peer them across Regions.", ko: "각 리전에 전송 게이트웨이를 만들고 리전 간 피어링합니다." },
      { k: "B", en: "Configure AWS Global Accelerator with UDP listeners and endpoint groups in each Region.", ko: "각 리전에 UDP 리스너와 엔드포인트 그룹이 있는 AWS Global Accelerator를 구성합니다." },
      { k: "C", en: "Configure CloudFront with UDP enabled and an origin in each Region.", ko: "UDP를 켠 CloudFront와 리전별 오리진을 구성합니다." },
      { k: "D", en: "Create a VPC peering mesh among all Regions and enable UDP for every VPC.", ko: "모든 리전 간 VPC 피어링 메시를 만들고 각 VPC에서 UDP를 활성화합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Global Accelerator는 UDP를 지원하고 사용자를 최적의 정상 리전 엔드포인트로 AWS 글로벌 네트워크를 통해 라우팅하여 지연과 패킷 손실을 줄입니다.", en: "Global Accelerator supports UDP and routes users over the AWS global network to an optimal healthy Regional endpoint, reducing latency and packet loss." },
    why_wrong: {
      A: { ko: "Transit Gateway 피어링은 사용자 인터넷 트래픽을 가장 가까운 게임 엔드포인트로 가속하지 않습니다.", en: "Transit Gateway peering does not accelerate user internet traffic to the nearest game endpoint." },
      C: { ko: "CloudFront는 일반 UDP 게임 트래픽 배포를 지원하지 않습니다.", en: "CloudFront does not distribute arbitrary UDP gaming traffic." },
      D: { ko: "VPC 피어링은 백엔드 VPC 연결용이며 글로벌 사용자 라우팅 서비스가 아닙니다.", en: "VPC peering connects backend VPCs and is not a global user-routing service." }
    }
  },
  {
    id: "exam8-353", number: 353, tags: ["Amazon RDS for MySQL", "Multi-AZ", "General Purpose SSD", "Amazon EBS", "High Availability"],
    question: { en: "A three-tier application runs in one AZ and uses self-managed MySQL on EC2 with a 1 TB io2 EBS volume. Peak demand needs 1,000 read and write IOPS. The company wants a highly available, durable, fully managed database while retaining twice the required IOPS and reducing cost. Which solution is most cost-effective?", ko: "단일 AZ의 3계층 애플리케이션이 EC2의 자체 관리 MySQL과 1TB io2 EBS를 사용하며 피크 시 읽기·쓰기 각각 1,000 IOPS가 필요합니다. 필요한 IOPS의 두 배를 유지하면서 고가용성·내구성의 완전 관리형 DB로 이동하고 비용을 줄이는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use Amazon RDS for MySQL Multi-AZ with an io2 Block Express volume.", ko: "io2 Block Express 볼륨을 사용하는 RDS for MySQL Multi-AZ를 사용합니다." },
      { k: "B", en: "Use Amazon RDS for MySQL Multi-AZ with a General Purpose SSD (gp2) volume.", ko: "범용 SSD(gp2) 볼륨을 사용하는 RDS for MySQL Multi-AZ를 사용합니다." },
      { k: "C", en: "Use the S3 Intelligent-Tiering access tier.", ko: "S3 Intelligent-Tiering 액세스 계층을 사용합니다." },
      { k: "D", en: "Host MySQL in active-passive mode on two large EC2 instances.", ko: "두 대의 대형 EC2에서 MySQL을 활성-수동 모드로 호스팅합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "1TB gp2는 크기에 비례한 기준 IOPS가 요구치의 두 배를 넘고, RDS Multi-AZ는 관리형 고가용성과 내구성을 제공하면서 프로비저닝 IOPS보다 비용이 낮습니다.", en: "A 1 TB gp2 volume provides size-based baseline IOPS above twice the requirement, while RDS Multi-AZ adds managed availability and durability at lower cost than provisioned IOPS." },
    why_wrong: {
      A: { ko: "io2 Block Express는 이 낮은 IOPS 요구에 비해 과도하고 비용이 높습니다.", en: "io2 Block Express is excessive and more expensive for this modest IOPS requirement." },
      C: { ko: "S3는 관계형 MySQL 데이터베이스 스토리지가 아닙니다.", en: "S3 is not storage for a relational MySQL database." },
      D: { ko: "EC2 자체 관리 방식은 완전 관리형 요구를 충족하지 않고 운영 비용도 높습니다.", en: "Self-managed EC2 does not meet the fully managed requirement and increases operations." }
    }
  },
  {
    id: "exam8-354", number: 354, tags: ["Amazon RDS Proxy", "AWS Lambda", "Amazon API Gateway", "PostgreSQL", "Connection Pooling"],
    question: { en: "A serverless application uses API Gateway, Lambda, and Amazon RDS for PostgreSQL. During peak or unpredictable traffic, database connection timeouts increase application errors. Which solution reduces errors with minimal code changes?", ko: "API Gateway, Lambda, RDS for PostgreSQL을 사용하는 서버리스 애플리케이션에서 피크 또는 예측 불가 트래픽 시 DB 연결 시간 초과로 오류가 증가합니다. 최소 코드 변경으로 오류를 줄이는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Reduce Lambda concurrency.", ko: "Lambda 동시성 비율을 줄입니다." },
      { k: "B", en: "Enable RDS Proxy for the RDS DB instance.", ko: "RDS DB 인스턴스에 RDS Proxy를 활성화합니다." },
      { k: "C", en: "Resize the RDS DB instance class to allow more connections.", ko: "더 많은 연결을 허용하도록 RDS DB 인스턴스 클래스를 조정합니다." },
      { k: "D", en: "Migrate the database to DynamoDB with on-demand scaling.", ko: "온디맨드 확장을 사용하여 DynamoDB로 마이그레이션합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "RDS Proxy는 Lambda의 데이터베이스 연결을 풀링하고 재사용하여 연결 급증으로 인한 메모리·CPU 부담과 연결 고갈을 줄입니다.", en: "RDS Proxy pools and reuses Lambda database connections, reducing connection exhaustion and database CPU and memory overhead during bursts." },
    why_wrong: {
      A: { ko: "동시성을 줄이면 오류를 일부 제한할 수 있지만 처리량과 확장성을 낮춥니다.", en: "Reducing concurrency may limit errors but also reduces throughput and scalability." },
      C: { ko: "크기 증가는 비용이 들고 연결 생성 급증의 근본 문제를 효율적으로 해결하지 않습니다.", en: "Upsizing costs more and does not efficiently address bursts of connection creation." },
      D: { ko: "DynamoDB 이전은 데이터 모델과 코드를 크게 변경해야 합니다.", en: "Migrating to DynamoDB requires substantial data-model and application changes." }
    }
  },
  {
    id: "exam8-355", number: 355, tags: ["Amazon RDS Proxy", "AWS Lambda", "Amazon API Gateway", "PostgreSQL", "Connection Pooling"],
    question: { en: "A company hosts a serverless application on AWS. The application uses Amazon API Gateway, AWS Lambda, and an Amazon RDS for PostgreSQL database. During peak or unpredictable traffic, database connection timeouts increase application errors. Which solution reduces the errors with the least amount of code change?", ko: "회사는 AWS에서 서버리스 애플리케이션을 호스팅합니다. 이 애플리케이션은 Amazon API Gateway, AWS Lambda 및 Amazon RDS for PostgreSQL 데이터베이스를 사용합니다. 최대 트래픽 또는 예측할 수 없는 트래픽 시간 동안 데이터베이스 연결 시간 초과로 인해 애플리케이션 오류가 증가합니다. 최소한의 코드 변경으로 애플리케이션 오류를 줄이는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Reduce the Lambda concurrency rate.", ko: "Lambda 동시성 비율을 줄입니다." },
      { k: "B", en: "Enable RDS Proxy for the RDS DB instance.", ko: "RDS DB 인스턴스에서 RDS Proxy를 활성화합니다." },
      { k: "C", en: "Resize the RDS DB instance class to accept more connections.", ko: "더 많은 연결을 허용하도록 RDS DB 인스턴스 클래스의 크기를 조정합니다." },
      { k: "D", en: "Migrate the database to Amazon DynamoDB with on-demand scaling.", ko: "온디맨드 확장을 통해 데이터베이스를 Amazon DynamoDB로 마이그레이션합니다." }
    ],
    answer: ["B"],
    explanation: { en: "RDS Proxy pools and reuses database connections. It allows a Lambda-based serverless application to handle bursts of concurrent requests without exhausting the PostgreSQL connection limit and requires only changing the application to use the proxy endpoint.", ko: "RDS Proxy는 데이터베이스 연결을 풀링하고 재사용합니다. Lambda 기반 서버리스 애플리케이션이 PostgreSQL 연결 한도를 고갈시키지 않고 동시 요청 급증을 처리하도록 하며 애플리케이션이 프록시 엔드포인트를 사용하도록 연결 설정만 변경하면 됩니다." },
    why_wrong: {
      A: { en: "Reducing concurrency can lower connection pressure but also throttles valid requests and reduces application scalability.", ko: "동시성을 줄이면 연결 부하는 낮출 수 있지만 정상 요청도 제한하고 애플리케이션 확장성을 떨어뜨립니다." },
      C: { en: "A larger DB instance costs more and does not address inefficient connection creation and reuse as directly as RDS Proxy.", ko: "더 큰 DB 인스턴스는 비용이 증가하며 RDS Proxy만큼 직접적으로 비효율적인 연결 생성과 재사용 문제를 해결하지 못합니다." },
      D: { en: "Migrating from PostgreSQL to DynamoDB requires substantial changes to the data model and application code.", ko: "PostgreSQL에서 DynamoDB로 이전하려면 데이터 모델과 애플리케이션 코드를 크게 변경해야 합니다." }
    }
  },
  {
    id: "exam8-356", number: 356, tags: ["Amazon S3", "S3 Standard-IA", "Lifecycle Policy", "Cost Optimization", "High Availability"],
    question: { en: "A company stores objects in S3 Standard. Seventy-five percent are rarely accessed after 30 days, but all data must remain immediately accessible with the same high availability and resilience. Which storage solution meets the requirements?", ko: "회사는 S3 Standard에 객체를 저장하며 75%는 30일 후 거의 접근되지 않습니다. 모든 데이터는 동일한 고가용성과 복원력으로 즉시 접근 가능해야 합니다. 어떤 스토리지 솔루션이 적합합니까?" },
    options: [
      { k: "A", en: "Move objects to S3 Glacier Deep Archive after 30 days.", ko: "30일 후 객체를 S3 Glacier Deep Archive로 이동합니다." },
      { k: "B", en: "Move objects to S3 Standard-IA after 30 days.", ko: "30일 후 객체를 S3 Standard-IA로 이동합니다." },
      { k: "C", en: "Move objects to S3 One Zone-IA after 30 days.", ko: "30일 후 객체를 S3 One Zone-IA로 이동합니다." },
      { k: "D", en: "Move objects to S3 One Zone-IA immediately.", ko: "객체를 즉시 S3 One Zone-IA로 이동합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "S3 Standard-IA는 여러 AZ에 저장되어 높은 복원력과 밀리초 접근을 유지하면서 자주 접근하지 않는 데이터의 저장 비용을 낮춥니다.", en: "S3 Standard-IA retains multi-AZ resilience and millisecond access while lowering storage cost for infrequently accessed data." },
    why_wrong: {
      A: { ko: "Deep Archive는 즉시 접근할 수 없고 복원 시간이 필요합니다.", en: "Deep Archive is not immediately accessible and requires restoration time." },
      C: { ko: "One Zone-IA는 단일 AZ에 저장되어 동일한 가용성과 복원력을 제공하지 않습니다.", en: "One Zone-IA stores data in one AZ and does not provide the same availability and resilience." },
      D: { ko: "단일 AZ 위험에 더해 처음 30일의 빈번한 접근에도 부적합합니다.", en: "Besides single-AZ risk, this is unsuitable for frequent access during the first 30 days." }
    }
  },
  {
    id: "exam8-357", number: 357, tags: ["Amazon S3", "Amazon CloudFront", "Amazon FSx for Windows File Server", "Windows", "High Availability", "Choose two"],
    question: { en: "A gaming company is moving a public leaderboard from its data center to AWS. The company runs a dynamic application on Amazon EC2 Windows Server instances behind an Application Load Balancer. The application consists of static files and dynamic server-side code. Which combination provides highly available storage? (Choose two.)", ko: "게임 회사는 공개 점수판을 데이터 센터에서 AWS로 이전합니다. Application Load Balancer 뒤의 Amazon EC2 Windows Server 인스턴스에서 정적 파일과 동적 서버 측 코드로 구성된 애플리케이션을 실행합니다. 어떤 조합이 고가용성 스토리지를 제공합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Store static files in Amazon S3 and use CloudFront to cache objects at edge locations.", ko: "정적 파일을 Amazon S3에 저장하고 CloudFront로 엣지 위치에 객체를 캐싱합니다." },
      { k: "B", en: "Store static files in Amazon S3 and use ElastiCache to cache objects at edge locations.", ko: "정적 파일을 Amazon S3에 저장하고 ElastiCache로 엣지 위치에 객체를 캐싱합니다." },
      { k: "C", en: "Store server-side code in Amazon EFS and mount it on each EC2 instance.", ko: "서버 측 코드를 Amazon EFS에 저장하고 각 EC2 인스턴스에 탑재합니다." },
      { k: "D", en: "Store server-side code in Amazon FSx for Windows File Server and mount it on each EC2 instance.", ko: "서버 측 코드를 FSx for Windows File Server에 저장하고 각 EC2 인스턴스에 탑재합니다." },
      { k: "E", en: "Store server-side code on a gp2 EBS volume and mount it on each EC2 instance.", ko: "서버 측 코드를 gp2 EBS 볼륨에 저장하고 각 EC2 인스턴스에 탑재합니다." }
    ],
    answer: ["A", "D"],
    explanation: { en: "S3 and CloudFront provide durable static-object storage and global edge caching. FSx for Windows File Server supplies a managed, highly available shared SMB file system for the Windows application servers.", ko: "S3와 CloudFront는 내구성 높은 정적 객체 스토리지와 글로벌 엣지 캐싱을 제공합니다. FSx for Windows File Server는 Windows 애플리케이션 서버에 관리형 고가용성 공유 SMB 파일 시스템을 제공합니다." },
    why_wrong: {
      B: { en: "ElastiCache is an in-memory database cache, not an edge CDN for S3 objects.", ko: "ElastiCache는 인메모리 데이터베이스 캐시이며 S3 객체용 엣지 CDN이 아닙니다." },
      C: { en: "EFS exposes NFS and is intended primarily for Linux workloads, not native Windows file sharing.", ko: "EFS는 NFS를 제공하며 주로 Linux 워크로드용이므로 Windows 기본 파일 공유에 적합하지 않습니다." },
      E: { en: "A standard EBS volume cannot serve as a shared, managed highly available file system for all instances.", ko: "일반 EBS 볼륨은 모든 인스턴스가 공유하는 관리형 고가용성 파일 시스템 역할을 할 수 없습니다." }
    }
  },
  {
    id: "exam8-358", number: 358, tags: ["Lambda@Edge", "Amazon CloudFront", "Amazon S3", "Image Processing", "User-Agent"],
    question: { en: "A social media application runs on EC2 behind an ALB that is a CloudFront origin. More than 1 billion images are stored in S3, and thousands are processed each second. The company wants to resize images dynamically and return the proper format based on the User-Agent header with the least operational overhead. Which solution meets the requirements?", ko: "소셜 미디어 애플리케이션은 CloudFront 오리진인 ALB 뒤의 EC2에서 실행됩니다. S3에는 10억 개 이상의 이미지가 저장되어 있고 초당 수천 개가 처리됩니다. 최소 운영 오버헤드로 이미지를 동적으로 조정하고 User-Agent 헤더에 맞는 형식을 반환하려면 어떻게 해야 합니까?" },
    options: [
      { k: "A", en: "Install an external image library on the EC2 instances and process images there.", ko: "EC2 인스턴스에 외부 이미지 라이브러리를 설치하여 이미지를 처리합니다." },
      { k: "B", en: "Create a CloudFront origin request policy that automatically resizes and formats images.", ko: "이미지 크기와 형식을 자동 조정하는 CloudFront 오리진 요청 정책을 생성합니다." },
      { k: "C", en: "Use a Lambda@Edge function with an external image library and associate it with the CloudFront behavior that serves images.", ko: "외부 이미지 라이브러리가 포함된 Lambda@Edge 함수를 이미지 제공 CloudFront 동작과 연결합니다." },
      { k: "D", en: "Create a CloudFront response headers policy that automatically resizes and formats images.", ko: "이미지 크기와 형식을 자동 조정하는 CloudFront 응답 헤더 정책을 생성합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Lambda@Edge can inspect User-Agent and run image transformation code close to viewers in the CloudFront request flow, reducing origin load and operations.", ko: "Lambda@Edge는 User-Agent를 검사하고 CloudFront 요청 흐름에서 사용자 가까이 이미지 변환 코드를 실행하여 오리진 부하와 운영 작업을 줄입니다." },
    why_wrong: {
      A: { en: "EC2 processing adds scaling and maintenance overhead at the origin.", ko: "EC2 처리는 오리진의 확장 및 유지 관리 오버헤드를 늘립니다." },
      B: { en: "An origin request policy controls forwarded request values; it does not resize images.", ko: "오리진 요청 정책은 전달할 요청 값을 제어할 뿐 이미지를 조정하지 않습니다." },
      D: { en: "A response headers policy changes HTTP headers, not image content.", ko: "응답 헤더 정책은 HTTP 헤더를 변경할 뿐 이미지 콘텐츠를 변환하지 않습니다." }
    }
  },
  {
    id: "exam8-359", number: 359, tags: ["Amazon S3", "AWS KMS", "SSE-KMS", "TLS", "PHI", "Compliance"],
    question: { en: "A hospital must store patient records in Amazon S3. All protected health information must be encrypted in transit and at rest, and the compliance team must manage the at-rest encryption keys. Which solution meets the requirements?", ko: "병원은 환자 기록을 Amazon S3에 저장해야 합니다. 모든 보호 건강 정보(PHI)는 전송 및 저장 중 암호화되어야 하고 규정 준수 팀이 저장 암호화 키를 관리해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Create an ACM public certificate for S3. Configure SSE-KMS and let the compliance team manage the KMS key.", ko: "S3용 ACM 퍼블릭 인증서를 생성합니다. SSE-KMS를 구성하고 규정 준수 팀이 KMS 키를 관리합니다." },
      { k: "B", en: "Enforce aws:SecureTransport in the bucket policy. Configure SSE-S3 and let the compliance team manage the SSE-S3 keys.", ko: "버킷 정책에서 aws:SecureTransport를 강제합니다. SSE-S3를 구성하고 규정 준수 팀이 SSE-S3 키를 관리합니다." },
      { k: "C", en: "Enforce aws:SecureTransport in the bucket policy. Configure SSE-KMS and let the compliance team manage the KMS key.", ko: "버킷 정책에서 aws:SecureTransport를 강제합니다. SSE-KMS를 구성하고 규정 준수 팀이 KMS 키를 관리합니다." },
      { k: "D", en: "Enforce aws:SecureTransport and use Amazon Macie to protect the sensitive data.", ko: "aws:SecureTransport를 강제하고 Amazon Macie로 민감한 데이터를 보호합니다." }
    ],
    answer: ["C"],
    explanation: { en: "aws:SecureTransport enforces TLS for data in transit. SSE-KMS encrypts objects at rest with KMS keys whose policies, permissions, rotation, and audit trail the compliance team can control.", ko: "aws:SecureTransport는 전송 중 TLS를 강제합니다. SSE-KMS는 규정 준수 팀이 정책, 권한, 교체 및 감사 기록을 제어할 수 있는 KMS 키로 객체를 저장 중 암호화합니다." },
    why_wrong: {
      A: { en: "S3 already provides TLS endpoints; an ACM certificate is not attached directly to a bucket to enforce secure transport.", ko: "S3는 이미 TLS 엔드포인트를 제공하며 보안 전송 강제를 위해 ACM 인증서를 버킷에 직접 연결하지 않습니다." },
      B: { en: "AWS manages SSE-S3 keys, so the compliance team cannot manage them as required.", ko: "SSE-S3 키는 AWS가 관리하므로 규정 준수 팀이 요구대로 관리할 수 없습니다." },
      D: { en: "Macie discovers and classifies sensitive data; it does not manage at-rest encryption keys.", ko: "Macie는 민감한 데이터를 탐지하고 분류하지만 저장 암호화 키를 관리하지 않습니다." }
    }
  },
  {
    id: "exam8-360", number: 360, tags: ["Amazon API Gateway", "VPC Interface Endpoint", "AWS PrivateLink", "Private API", "REST API"],
    question: { en: "A company runs two private API Gateway REST APIs in the same VPC. BuyStock calls CheckFunds before a stock purchase, but VPC Flow Logs show the call traverses the internet. The APIs must communicate through the VPC with the least code changes. Which solution meets the requirements?", ko: "회사는 동일한 VPC에서 두 개의 프라이빗 API Gateway REST API를 실행합니다. BuyStock은 주식 구매 전에 CheckFunds를 호출하지만 VPC 흐름 로그에는 호출이 인터넷을 통과하는 것으로 나타납니다. 코드를 가장 적게 변경하여 API가 VPC를 통해 통신하게 하려면 어떻게 해야 합니까?" },
    options: [
      { k: "A", en: "Add an X-API-Key header for authentication.", ko: "인증을 위해 X-API-Key 헤더를 추가합니다." },
      { k: "B", en: "Use interface endpoints.", ko: "인터페이스 엔드포인트를 사용합니다." },
      { k: "C", en: "Use gateway endpoints.", ko: "게이트웨이 엔드포인트를 사용합니다." },
      { k: "D", en: "Add an Amazon SQS queue between the two REST APIs.", ko: "두 REST API 사이에 Amazon SQS 대기열을 추가합니다." }
    ],
    answer: ["B"],
    explanation: { en: "An API Gateway interface VPC endpoint uses AWS PrivateLink and ENIs in the VPC so private API traffic remains on the AWS network without application redesign.", ko: "API Gateway 인터페이스 VPC 엔드포인트는 AWS PrivateLink와 VPC 내 ENI를 사용하므로 애플리케이션 재설계 없이 프라이빗 API 트래픽이 AWS 네트워크에 머뭅니다." },
    why_wrong: {
      A: { en: "An API key affects access control, not the network route.", ko: "API 키는 접근 제어에 영향을 주지만 네트워크 경로를 바꾸지 않습니다." },
      C: { en: "Gateway endpoints support S3 and DynamoDB, not API Gateway private APIs.", ko: "게이트웨이 엔드포인트는 S3와 DynamoDB용이며 API Gateway 프라이빗 API용이 아닙니다." },
      D: { en: "SQS introduces asynchronous behavior and code changes rather than a direct private API path.", ko: "SQS는 직접적인 프라이빗 API 경로 대신 비동기 동작과 코드 변경을 도입합니다." }
    }
  },
  {
    id: "exam8-361", number: 361, tags: ["Amazon DynamoDB", "DynamoDB Accelerator", "Amazon S3", "Amazon Athena", "Gaming", "Analytics"],
    question: { en: "A company hosts a multiplayer gaming application on AWS. The company wants the application to read data with sub-millisecond latency and run one-time queries on historical data. Which solution will meet these requirements with the LEAST operational overhead?", ko: "회사는 AWS에서 멀티플레이어 게임 애플리케이션을 호스팅합니다. 애플리케이션은 1밀리초 미만의 지연 시간으로 데이터를 읽고 과거 데이터에 대해 일회성 쿼리를 실행해야 합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use Amazon RDS for frequently accessed data. Run a periodic custom script to export data to Amazon S3.", ko: "자주 액세스하는 데이터에는 Amazon RDS를 사용하고 정기적인 사용자 지정 스크립트로 Amazon S3에 내보냅니다." },
      { k: "B", en: "Store data directly in Amazon S3, archive older data to S3 Glacier Deep Archive, and query S3 with Athena.", ko: "데이터를 Amazon S3에 직접 저장하고 오래된 데이터는 S3 Glacier Deep Archive로 이동하며 Athena로 S3 데이터를 쿼리합니다." },
      { k: "C", en: "Use DynamoDB with DynamoDB Accelerator (DAX) for frequently accessed data. Export the table to Amazon S3 and run one-time queries with Athena.", ko: "자주 액세스하는 데이터에 DynamoDB와 DynamoDB Accelerator(DAX)를 사용합니다. 테이블을 Amazon S3로 내보내고 Athena로 일회성 쿼리를 실행합니다." },
      { k: "D", en: "Use DynamoDB for frequently accessed data. Stream changes through Kinesis Data Streams and Kinesis Data Firehose to Amazon S3.", ko: "자주 액세스하는 데이터에 DynamoDB를 사용하고 변경 사항을 Kinesis Data Streams와 Kinesis Data Firehose를 통해 Amazon S3로 전송합니다." }
    ],
    answer: ["C"],
    explanation: { en: "DAX provides an in-memory cache for DynamoDB with microsecond response times. Native DynamoDB export to S3 avoids custom ETL, and Athena can query exported historical data without managing servers.", ko: "DAX는 DynamoDB용 인메모리 캐시로 마이크로초 응답 시간을 제공합니다. DynamoDB의 S3 내보내기는 사용자 지정 ETL이 필요 없고 Athena는 서버 관리 없이 내보낸 과거 데이터를 쿼리합니다." },
    why_wrong: {
      A: { en: "RDS does not inherently provide sub-millisecond reads, and a custom export script adds operations.", ko: "RDS는 본질적으로 1밀리초 미만 읽기를 제공하지 않으며 사용자 지정 내보내기 스크립트는 운영 부담을 늘립니다." },
      B: { en: "S3 is object storage and cannot provide sub-millisecond application reads; Deep Archive data also requires restoration.", ko: "S3는 객체 스토리지이므로 애플리케이션에 1밀리초 미만 읽기를 제공하지 못하며 Deep Archive 데이터는 복원도 필요합니다." },
      D: { en: "This lacks DAX for sub-millisecond reads and introduces a multi-service streaming pipeline that is unnecessary for one-time queries.", ko: "1밀리초 미만 읽기를 위한 DAX가 없고 일회성 쿼리에 불필요한 다중 서비스 스트리밍 파이프라인을 도입합니다." }
    }
  },
  {
    id: "exam8-362", number: 362, tags: ["Amazon Kinesis Data Streams", "Amazon SQS FIFO", "Ordering", "Partition Key", "Message Group", "Choose two"],
    question: { en: "A payment-processing system must receive messages for a specific payment ID in the order in which they were sent. Otherwise, payments could be processed incorrectly. Which two actions meet this requirement? (Choose two.)", ko: "결제 처리 시스템은 특정 결제 ID에 대한 메시지를 전송된 순서대로 수신해야 합니다. 그렇지 않으면 결제가 잘못 처리될 수 있습니다. 이 요구 사항을 충족하는 두 가지 조치는 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Write messages to DynamoDB using the payment ID as the partition key.", ko: "결제 ID를 파티션 키로 사용하여 DynamoDB 테이블에 메시지를 씁니다." },
      { k: "B", en: "Write messages to Kinesis Data Streams using the payment ID as the partition key.", ko: "결제 ID를 파티션 키로 사용하여 Kinesis Data Streams에 메시지를 씁니다." },
      { k: "C", en: "Write messages to ElastiCache for Memcached using the payment ID as the key.", ko: "결제 ID를 키로 사용하여 ElastiCache for Memcached에 메시지를 씁니다." },
      { k: "D", en: "Write messages to a standard SQS queue and set a message attribute to the payment ID.", ko: "표준 SQS 대기열에 메시지를 쓰고 결제 ID를 메시지 속성으로 설정합니다." },
      { k: "E", en: "Write messages to an SQS FIFO queue and set the message group ID to the payment ID.", ko: "SQS FIFO 대기열에 메시지를 쓰고 메시지 그룹 ID를 결제 ID로 설정합니다." }
    ],
    answer: ["B", "E"],
    explanation: { en: "Kinesis preserves record order within a shard, so the same payment ID as partition key maintains ordering. SQS FIFO preserves strict order within each message group, so using payment ID as the group ID provides per-payment ordering.", ko: "Kinesis는 샤드 내 레코드 순서를 보장하므로 결제 ID를 파티션 키로 사용하면 순서가 유지됩니다. SQS FIFO는 메시지 그룹 내 엄격한 순서를 보장하므로 결제 ID를 그룹 ID로 사용하면 결제별 순서가 유지됩니다." },
    why_wrong: {
      A: { en: "DynamoDB partition keys distribute and identify items but do not provide a message-consumption ordering guarantee.", ko: "DynamoDB 파티션 키는 항목을 분산하고 식별하지만 메시지 소비 순서를 보장하지 않습니다." },
      C: { en: "Memcached is a cache and does not provide durable ordered messaging.", ko: "Memcached는 캐시이며 내구성 있는 순서 보장 메시징을 제공하지 않습니다." },
      D: { en: "Standard SQS queues provide best-effort ordering, and a message attribute does not create FIFO semantics.", ko: "표준 SQS 대기열은 최선형 순서만 제공하며 메시지 속성으로 FIFO 의미가 생기지 않습니다." }
    }
  },
  {
    id: "exam8-363", number: 363, tags: ["Amazon SNS FIFO", "Fanout", "Ordering", "Messaging", "Gaming"],
    question: { en: "A company is building a gaming system that must send unique events concurrently to separate leaderboard, matchmaking, and authentication services. The event-driven system must preserve event order. Which solution meets these requirements?", ko: "회사는 고유한 이벤트를 별도의 리더보드, 매치메이킹 및 인증 서비스로 동시에 전송하는 게임 시스템을 구축하고 있습니다. 이벤트 기반 시스템은 이벤트 순서를 보장해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "An Amazon EventBridge event bus", ko: "Amazon EventBridge 이벤트 버스" },
      { k: "B", en: "An Amazon SNS FIFO topic", ko: "Amazon SNS FIFO 주제" },
      { k: "C", en: "An Amazon SNS standard topic", ko: "Amazon SNS 표준 주제" },
      { k: "D", en: "An Amazon SQS FIFO queue", ko: "Amazon SQS FIFO 대기열" }
    ],
    answer: ["B"],
    explanation: { en: "An SNS FIFO topic provides ordered, deduplicated fanout to multiple subscribers, fitting concurrent delivery to several downstream services while retaining message order.", ko: "SNS FIFO 주제는 여러 구독자에게 순서와 중복 제거가 보장된 팬아웃을 제공하므로 메시지 순서를 유지하면서 여러 다운스트림 서비스에 동시에 전달할 수 있습니다." },
    why_wrong: {
      A: { en: "EventBridge does not provide the strict FIFO ordering required here.", ko: "EventBridge는 여기서 요구하는 엄격한 FIFO 순서를 제공하지 않습니다." },
      C: { en: "SNS standard topics provide fanout but only best-effort ordering.", ko: "SNS 표준 주제는 팬아웃을 제공하지만 순서는 최선형으로만 보장됩니다." },
      D: { en: "A single SQS FIFO queue preserves order but distributes messages among consumers instead of broadcasting each event to all services.", ko: "단일 SQS FIFO 대기열은 순서를 보장하지만 각 이벤트를 모든 서비스에 브로드캐스트하지 않고 소비자 사이에 분배합니다." }
    }
  },
  {
    id: "exam8-364", number: 364, tags: ["Amazon SQS", "Amazon SNS", "AWS KMS", "TLS", "Encryption", "Choose two"],
    question: { en: "A hospital is designing an application that collects patient symptoms and will use Amazon SQS and Amazon SNS. Data must be encrypted at rest and in transit, and only authorized hospital employees may access it. Which combination of steps meets the requirements? (Choose two.)", ko: "병원은 환자 증상을 수집하는 애플리케이션을 설계하며 Amazon SQS와 Amazon SNS를 사용합니다. 데이터는 저장 및 전송 중 암호화되어야 하고 승인된 병원 직원만 접근할 수 있어야 합니다. 어떤 단계 조합이 요구 사항을 충족합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Enable server-side encryption for SQS and update the default key policy to restrict key use to authorized security principals.", ko: "SQS에서 서버 측 암호화를 켜고 기본 키 정책을 업데이트하여 승인된 보안 주체로 키 사용을 제한합니다." },
      { k: "B", en: "Enable SNS server-side encryption with a customer managed KMS key and restrict key use to authorized security principals in the key policy.", ko: "고객 관리형 KMS 키로 SNS 서버 측 암호화를 켜고 키 정책에서 승인된 보안 주체로 키 사용을 제한합니다." },
      { k: "C", en: "Enable SNS encryption, update the default key policy, and require TLS in the topic policy.", ko: "SNS 암호화를 켜고 기본 키 정책을 업데이트하며 주제 정책에서 TLS를 요구합니다." },
      { k: "D", en: "Enable SQS server-side encryption with a customer managed KMS key, restrict key use in the key policy, and require TLS in the queue policy.", ko: "고객 관리형 KMS 키로 SQS 서버 측 암호화를 켜고 키 정책에서 사용을 제한하며 대기열 정책에서 TLS를 요구합니다." },
      { k: "E", en: "Enable SQS server-side encryption with a customer managed KMS key, restrict key use with an IAM policy, and require TLS in the queue policy.", ko: "고객 관리형 KMS 키로 SQS 서버 측 암호화를 켜고 IAM 정책으로 키 사용을 제한하며 대기열 정책에서 TLS를 요구합니다." }
    ],
    answer: ["B", "D"],
    explanation: { en: "Customer managed KMS keys provide controllable key policies for SNS and SQS encryption at rest. Restricting principals in those policies controls access, and the SQS queue policy can require secure TLS transport.", ko: "고객 관리형 KMS 키는 SNS와 SQS의 저장 중 암호화를 위한 제어 가능한 키 정책을 제공합니다. 키 정책에서 보안 주체를 제한해 접근을 통제하고 SQS 대기열 정책에서 안전한 TLS 전송을 요구할 수 있습니다." },
    why_wrong: {
      A: { en: "The default AWS managed key policy cannot be customized to impose the stated principal restrictions.", ko: "기본 AWS 관리형 키 정책은 명시된 보안 주체 제한을 적용하도록 사용자 지정할 수 없습니다." },
      C: { en: "The default managed key policy cannot be edited as described; a customer managed KMS key is required for this control.", ko: "기본 관리형 키 정책은 설명대로 편집할 수 없으므로 이 제어에는 고객 관리형 KMS 키가 필요합니다." },
      E: { en: "The KMS key policy is the required resource-level control for authorizing use of the customer managed key; an IAM policy alone is insufficient.", ko: "고객 관리형 키 사용 권한에는 KMS 키 정책이라는 리소스 수준 제어가 필요하며 IAM 정책만으로는 충분하지 않습니다." }
    }
  },
  {
    id: "exam8-365", number: 365, tags: ["Amazon RDS", "Automated Backups", "Point-in-Time Recovery", "Recovery", "Database"],
    question: { en: "A company runs an RDS-backed web application. An administrator accidentally edited a database table and caused data loss. The company wants to restore the database to its state 5 minutes before a change that occurred at any time during the previous 30 days. Which feature should be included?", ko: "회사는 Amazon RDS 기반 웹 애플리케이션을 실행합니다. 관리자가 실수로 데이터베이스 테이블을 편집하여 데이터 손실이 발생했습니다. 회사는 지난 30일 동안 발생한 변경의 5분 전 상태로 데이터베이스를 복원할 수 있기를 원합니다. 어떤 기능을 포함해야 합니까?" },
    options: [
      { k: "A", en: "Read replica", ko: "읽기 전용 복제본" },
      { k: "B", en: "Manual snapshots", ko: "수동 스냅샷" },
      { k: "C", en: "Automated backups", ko: "자동 백업" },
      { k: "D", en: "Multi-AZ deployment", ko: "다중 AZ 배포" }
    ],
    answer: ["C"],
    explanation: { en: "RDS automated backups support point-in-time recovery to any second within the configured retention period, which can be set to 30 days and allows restoration to approximately five minutes before the unwanted change.", ko: "RDS 자동 백업은 설정된 보존 기간 내 임의의 초 단위 시점 복구를 지원합니다. 보존 기간을 30일로 설정하면 원치 않는 변경 약 5분 전으로 복원할 수 있습니다." },
    why_wrong: {
      A: { en: "A read replica also receives logical data changes and is not a point-in-time recovery mechanism.", ko: "읽기 전용 복제본에도 논리적 데이터 변경이 복제되며 시점 복구 수단이 아닙니다." },
      B: { en: "Manual snapshots restore only to snapshot creation times, not arbitrary points such as five minutes before a change.", ko: "수동 스냅샷은 생성 시점으로만 복원하며 변경 5분 전 같은 임의 시점으로 복원하지 못합니다." },
      D: { en: "Multi-AZ provides failover for infrastructure failures but replicates accidental data changes to the standby.", ko: "다중 AZ는 인프라 장애 시 장애 조치를 제공하지만 실수로 변경된 데이터도 대기 인스턴스에 복제합니다." }
    }
  },
  {
    id: "exam8-366", number: 366, tags: ["Amazon API Gateway", "API Keys", "Usage Plans", "Amazon Cognito", "Premium Access"],
    question: { en: "A web application uses an API Gateway API, Lambda functions, DynamoDB, and a Cognito user pool. The application must be updated so that only subscribed users can access premium content. Which solution meets the requirement with the least operational overhead?", ko: "웹 애플리케이션은 API Gateway API, Lambda 함수, DynamoDB 및 Cognito 사용자 풀을 사용합니다. 구독 사용자만 프리미엄 콘텐츠에 액세스하도록 업데이트해야 합니다. 최소 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Enable API caching and throttling on the API Gateway API.", ko: "API Gateway API에서 API 캐싱 및 제한을 활성화합니다." },
      { k: "B", en: "Configure AWS WAF on the API and create a rule that filters subscribed users.", ko: "API에 AWS WAF를 설정하고 구독 사용자를 필터링하는 규칙을 만듭니다." },
      { k: "C", en: "Apply fine-grained IAM permissions to premium content in DynamoDB.", ko: "DynamoDB의 프리미엄 콘텐츠에 세분화된 IAM 권한을 적용합니다." },
      { k: "D", en: "Implement API usage plans and API keys to restrict access for users who are not subscribed.", ko: "구독하지 않은 사용자의 접근을 제한하도록 API 사용 계획과 API 키를 구현합니다." }
    ],
    answer: ["D"],
    explanation: { en: "API Gateway usage plans and API keys define separate access and quotas for subscription tiers with little infrastructure to operate.", ko: "API Gateway 사용 계획과 API 키는 별도 인프라 운영 없이 구독 계층별 접근 및 할당량을 정의합니다." },
    why_wrong: {
      A: { en: "Caching and throttling do not distinguish subscribed users.", ko: "캐싱과 제한은 구독 사용자를 구분하지 않습니다." },
      B: { en: "WAF filters web requests and is not a subscription entitlement mechanism.", ko: "WAF는 웹 요청 필터이며 구독 권한 관리 수단이 아닙니다." },
      C: { en: "DynamoDB IAM permissions alone do not provide API-level subscription plans.", ko: "DynamoDB IAM 권한만으로는 API 수준 구독 계획을 제공하지 못합니다." }
    }
  },
  {
    id: "exam8-367", number: 367, tags: ["AWS Global Accelerator", "Network Load Balancer", "UDP", "Multi-Region", "Hybrid", "Low Latency"],
    question: { en: "A company uses Route 53 latency-based routing for a UDP application hosted on duplicate servers in on-premises data centers in the United States, Asia, and Europe. Compliance requires the application to remain on premises. Which solution improves performance and availability?", ko: "회사는 Route 53 지연 시간 기반 라우팅을 사용하여 미국, 아시아 및 유럽의 온프레미스 데이터 센터에 있는 중복 서버에서 UDP 애플리케이션을 호스팅합니다. 규정 준수상 애플리케이션은 온프레미스에 유지되어야 합니다. 어떤 솔루션이 성능과 가용성을 개선합니까?" },
    options: [
      { k: "A", en: "Create NLBs in three AWS Regions to front the on-premises endpoints. Register the NLBs with AWS Global Accelerator and point a CNAME to the accelerator DNS name.", ko: "3개 AWS 리전에 NLB를 구성하여 온프레미스 엔드포인트를 처리합니다. NLB를 AWS Global Accelerator에 등록하고 CNAME이 가속기 DNS를 가리키게 합니다." },
      { k: "B", en: "Create ALBs in three Regions to front the on-premises endpoints and register them with Global Accelerator.", ko: "3개 리전에 ALB를 구성하여 온프레미스 엔드포인트를 처리하고 Global Accelerator에 등록합니다." },
      { k: "C", en: "Create NLBs in three Regions and use Route 53 latency records for them as CloudFront origins.", ko: "3개 리전에 NLB를 만들고 Route 53 지연 시간 레코드로 CloudFront 오리진에 사용합니다." },
      { k: "D", en: "Create ALBs in three Regions and use Route 53 latency records for them as CloudFront origins.", ko: "3개 리전에 ALB를 만들고 Route 53 지연 시간 레코드로 CloudFront 오리진에 사용합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Global Accelerator supports UDP and routes users over the AWS global network to healthy Regional NLB endpoints. NLBs can target on-premises IP addresses while the application remains on premises.", ko: "Global Accelerator는 UDP를 지원하고 AWS 글로벌 네트워크를 통해 사용자를 정상 리전 NLB 엔드포인트로 라우팅합니다. NLB는 온프레미스 IP 주소를 대상으로 지정할 수 있어 애플리케이션은 온프레미스에 유지됩니다." },
    why_wrong: {
      B: { en: "ALBs do not support UDP traffic.", ko: "ALB는 UDP 트래픽을 지원하지 않습니다." },
      C: { en: "CloudFront does not proxy arbitrary UDP traffic and does not replace Global Accelerator here.", ko: "CloudFront는 임의 UDP 트래픽을 프록시하지 않으며 여기서 Global Accelerator를 대체하지 못합니다." },
      D: { en: "Neither ALB nor CloudFront is appropriate for this UDP workload.", ko: "ALB와 CloudFront 모두 이 UDP 워크로드에 적합하지 않습니다." }
    }
  },
  {
    id: "exam8-368", number: 368, tags: ["AWS IAM", "Password Policy", "Security", "Account"],
    question: { en: "A solutions architect wants every new IAM user to have specific password complexity requirements and a mandatory password rotation period. What should the solutions architect do?", ko: "솔루션 설계자는 모든 신규 IAM 사용자가 특정 암호 복잡성 요구 사항과 필수 암호 교체 기간을 갖기를 원합니다. 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Set an account-wide password policy for the entire AWS account.", ko: "전체 AWS 계정에 전반적인 암호 정책을 설정합니다." },
      { k: "B", en: "Set a password policy for each IAM user.", ko: "각 IAM 사용자에 대한 암호 정책을 설정합니다." },
      { k: "C", en: "Use third-party software to set the password requirements.", ko: "타사 소프트웨어로 암호 요구 사항을 설정합니다." },
      { k: "D", en: "Connect a CloudWatch rule to a Create_newuser event to set password requirements.", ko: "CloudWatch 규칙을 Create_newuser 이벤트에 연결하여 암호 요구 사항을 설정합니다." }
    ],
    answer: ["A"],
    explanation: { en: "An IAM account password policy applies complexity, length, reuse prevention, and expiration requirements to all IAM users, including new users.", ko: "IAM 계정 암호 정책은 복잡성, 길이, 재사용 방지 및 만료 요구 사항을 신규 사용자를 포함한 모든 IAM 사용자에게 적용합니다." },
    why_wrong: {
      B: { en: "IAM password policies are configured at account level, not per user.", ko: "IAM 암호 정책은 사용자별이 아니라 계정 수준에서 구성합니다." },
      C: { en: "IAM provides this capability natively, so third-party software is unnecessary.", ko: "IAM이 이 기능을 기본 제공하므로 타사 소프트웨어가 필요하지 않습니다." },
      D: { en: "A CloudWatch rule cannot define or modify an IAM password policy.", ko: "CloudWatch 규칙은 IAM 암호 정책을 정의하거나 수정할 수 없습니다." }
    }
  },
  {
    id: "exam8-369", number: 369, tags: ["AWS Batch", "Amazon EventBridge", "Batch Processing", "Scheduling", "Auto Scaling"],
    question: { en: "An EC2 Linux instance runs several scheduled one-hour jobs written by different teams in different programming languages. The company is concerned about performance and scalability while all jobs run on one instance. Which solution meets the requirements with the least operational overhead?", ko: "EC2 Linux 인스턴스가 여러 팀이 서로 다른 언어로 작성한 여러 개의 예약된 1시간 작업을 실행합니다. 회사는 모든 작업이 한 인스턴스에서 실행될 때의 성능과 확장성을 우려합니다. 최소 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Run the jobs as AWS Batch jobs and schedule them with Amazon EventBridge.", ko: "AWS Batch로 작업을 실행하고 Amazon EventBridge로 예약합니다." },
      { k: "B", en: "Convert the instance to containers and use AWS App Runner to create on-demand containers for the jobs.", ko: "인스턴스를 컨테이너로 변환하고 AWS App Runner로 작업용 온디맨드 컨테이너를 생성합니다." },
      { k: "C", en: "Copy the jobs into Lambda functions and schedule them with EventBridge.", ko: "작업을 Lambda 함수로 복사하고 EventBridge로 예약합니다." },
      { k: "D", en: "Create an AMI and an Auto Scaling group that runs multiple copies of the instance.", ko: "AMI와 여러 인스턴스 복사본을 실행하는 Auto Scaling 그룹을 생성합니다." }
    ],
    answer: ["A"],
    explanation: { en: "AWS Batch schedules and scales compute for containerized batch jobs, and EventBridge can trigger them on a schedule without a permanently sized fleet.", ko: "AWS Batch는 컨테이너형 배치 작업의 컴퓨팅을 예약하고 확장하며 EventBridge는 고정 크기 플릿 없이 일정에 따라 작업을 시작합니다." },
    why_wrong: {
      B: { en: "App Runner is intended for web applications and APIs, not scheduled batch jobs.", ko: "App Runner는 웹 애플리케이션과 API용이며 예약 배치 작업용이 아닙니다." },
      C: { en: "One-hour jobs exceed Lambda's maximum execution duration.", ko: "1시간 작업은 Lambda 최대 실행 시간을 초과합니다." },
      D: { en: "Duplicating the whole instance requires more capacity and job-placement management than AWS Batch.", ko: "전체 인스턴스 복제는 AWS Batch보다 용량 및 작업 배치 관리가 더 필요합니다." }
    }
  },
  {
    id: "exam8-370", number: 370, tags: ["Amazon VPC", "NAT Gateway", "Private Subnet", "Internet Access", "Managed Service"],
    question: { en: "A public three-tier web application runs on EC2 instances across multiple Availability Zones. Instances in private subnets must communicate with an internet license server. The company needs a managed solution with minimal maintenance. Which solution meets the requirements?", ko: "여러 가용 영역의 EC2에서 공용 3계층 웹 애플리케이션이 실행됩니다. 프라이빗 서브넷의 인스턴스는 인터넷의 라이선스 서버와 통신해야 합니다. 유지 보수를 최소화하는 관리형 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Provision a NAT instance in a public subnet and route each private subnet's default route to it.", ko: "퍼블릭 서브넷에 NAT 인스턴스를 배치하고 각 프라이빗 서브넷의 기본 경로가 이를 가리키게 합니다." },
      { k: "B", en: "Provision a NAT instance in a private subnet and route each private subnet's default route to it.", ko: "프라이빗 서브넷에 NAT 인스턴스를 배치하고 각 프라이빗 서브넷의 기본 경로가 이를 가리키게 합니다." },
      { k: "C", en: "Provision a NAT gateway in a public subnet and route each private subnet's default route to it.", ko: "퍼블릭 서브넷에 NAT 게이트웨이를 배치하고 각 프라이빗 서브넷의 기본 경로가 이를 가리키게 합니다." },
      { k: "D", en: "Provision a NAT gateway in a private subnet and route each private subnet's default route to it.", ko: "프라이빗 서브넷에 NAT 게이트웨이를 배치하고 각 프라이빗 서브넷의 기본 경로가 이를 가리키게 합니다." }
    ],
    answer: ["C"],
    explanation: { en: "A public NAT gateway is a managed, scalable outbound internet path for private-subnet instances. Private route tables send default traffic to it, and it reaches the internet through the public subnet's internet gateway route.", ko: "퍼블릭 NAT 게이트웨이는 프라이빗 서브넷 인스턴스를 위한 관리형 확장 가능 아웃바운드 인터넷 경로입니다. 프라이빗 라우팅 테이블의 기본 트래픽을 NAT 게이트웨이로 보내면 퍼블릭 서브넷의 인터넷 게이트웨이 경로를 통해 인터넷에 연결됩니다." },
    why_wrong: {
      A: { en: "A NAT instance requires patching, scaling, and availability management.", ko: "NAT 인스턴스는 패치, 확장 및 가용성 관리가 필요합니다." },
      B: { en: "An internet-facing NAT instance must be in a public subnet and still has higher operational overhead.", ko: "인터넷 송신 NAT 인스턴스는 퍼블릭 서브넷에 있어야 하며 운영 오버헤드도 더 큽니다." },
      D: { en: "A private NAT gateway does not provide the required internet egress path.", ko: "프라이빗 NAT 게이트웨이는 필요한 인터넷 송신 경로를 제공하지 않습니다." }
    }
  },
  {
    id: "exam8-371", number: 371, tags: ["Amazon EKS", "Amazon EBS", "AWS KMS", "Encryption", "IAM", "Choose two"],
    question: { en: "A company must create an Amazon EKS cluster for a digital media streaming application. The cluster uses a managed node group with EBS volumes. The company must encrypt all data at rest with a customer managed KMS key. Which two actions meet the requirement with the least operational overhead? (Choose two.)", ko: "회사는 디지털 미디어 스트리밍 애플리케이션을 위한 Amazon EKS 클러스터를 생성해야 합니다. 클러스터는 EBS 볼륨을 지원하는 관리형 노드 그룹을 사용합니다. 고객 관리형 KMS 키로 모든 저장 데이터를 암호화해야 합니다. 최소 운영 오버헤드로 요구 사항을 충족하는 두 가지 조치는 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Use a Kubernetes plugin that uses the customer managed key to encrypt data.", ko: "고객 관리형 키를 사용하는 Kubernetes 플러그인으로 데이터를 암호화합니다." },
      { k: "B", en: "After creating the EKS cluster, identify the EBS volumes and enable encryption with the customer managed key.", ko: "EKS 클러스터 생성 후 EBS 볼륨을 찾아 고객 관리형 키로 암호화를 활성화합니다." },
      { k: "C", en: "Enable EBS encryption by default in the Region and select the customer managed key as the default key.", ko: "EKS 클러스터가 생성될 리전에서 기본 EBS 암호화를 활성화하고 고객 관리형 키를 기본 키로 선택합니다." },
      { k: "D", en: "Create an IAM role with a policy that grants permissions to the customer managed key and associate the role with the EKS cluster.", ko: "고객 관리형 키에 대한 권한을 부여하는 정책이 있는 IAM 역할을 생성하고 EKS 클러스터와 연결합니다." },
      { k: "E", en: "Store the customer managed key as a Kubernetes secret in the EKS cluster and use it to encrypt EBS volumes.", ko: "고객 관리형 키를 EKS 클러스터의 Kubernetes 보안 정보로 저장하고 EBS 볼륨 암호화에 사용합니다." }
    ],
    answer: ["B", "D"],
    explanation: { en: "The EBS volumes can be encrypted with the customer managed KMS key, and the EKS-related IAM role must be allowed to use that key. This uses native EBS and KMS integration without custom encryption software or storing key material in Kubernetes.", ko: "EBS 볼륨을 고객 관리형 KMS 키로 암호화하고 EKS 관련 IAM 역할에 해당 키 사용 권한을 부여할 수 있습니다. 사용자 지정 암호화 소프트웨어나 Kubernetes 내 키 저장 없이 EBS와 KMS의 기본 통합을 사용합니다." },
    why_wrong: {
      A: { en: "A custom Kubernetes encryption plugin adds unnecessary deployment and maintenance overhead.", ko: "사용자 지정 Kubernetes 암호화 플러그인은 불필요한 배포 및 유지 관리 부담을 추가합니다." },
      C: { en: "Changing the Region-wide default affects all new EBS volumes and is broader than the cluster-specific requirement.", ko: "리전 전체 기본값 변경은 모든 신규 EBS 볼륨에 영향을 주어 클러스터 한정 요구보다 범위가 넓습니다." },
      E: { en: "KMS key material is not stored as a Kubernetes secret; services call KMS under IAM authorization.", ko: "KMS 키 자료는 Kubernetes 보안 정보로 저장하지 않으며 서비스가 IAM 권한으로 KMS를 호출합니다." }
    }
  },
  {
    id: "exam8-372", number: 372, tags: ["Amazon S3", "Amazon DynamoDB", "GIS", "Scalability", "Cost Optimization"],
    question: { en: "A company wants to migrate an Oracle database that has a single table containing millions of high-resolution GIS images identified by geographic code. During a natural disaster, tens of thousands of images are updated every few minutes, with one image or row for each code. Which solution provides high availability and scalability most cost-effectively?", ko: "회사는 지리 코드로 식별되는 수백만 개의 고해상도 GIS 이미지가 단일 테이블에 있는 Oracle 데이터베이스를 AWS로 이전하려고 합니다. 자연재해 발생 시 몇 분마다 수만 개의 이미지가 업데이트되며 각 지리 코드에는 하나의 이미지 또는 행이 있습니다. 가장 비용 효율적으로 높은 가용성과 확장성을 제공하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Store images and geographic codes in an Oracle database on an RDS Multi-AZ DB instance.", ko: "이미지와 지리 코드를 RDS 다중 AZ DB 인스턴스의 Oracle 데이터베이스에 저장합니다." },
      { k: "B", en: "Store images in Amazon S3. Use DynamoDB with geographic code as the key and the image S3 URL as the value.", ko: "이미지를 Amazon S3에 저장합니다. 지리 코드를 키로, 이미지 S3 URL을 값으로 사용하는 DynamoDB를 사용합니다." },
      { k: "C", en: "Store images and geographic codes in DynamoDB and configure DAX during high-load periods.", ko: "이미지와 지리 코드를 DynamoDB에 저장하고 부하가 높은 시간에 DAX를 구성합니다." },
      { k: "D", en: "Store images in Amazon S3 and geographic codes and image URLs in Oracle on an RDS Multi-AZ DB instance.", ko: "이미지를 Amazon S3에 저장하고 지리 코드와 이미지 URL을 RDS 다중 AZ Oracle DB에 저장합니다." }
    ],
    answer: ["B"],
    explanation: { en: "S3 provides massively scalable, durable, low-cost object storage for the images. DynamoDB provides low-latency, highly available key-value lookups and automatic scaling for geographic-code metadata and S3 URLs.", ko: "S3는 이미지를 위한 대규모 확장성, 내구성 및 저비용 객체 스토리지를 제공합니다. DynamoDB는 지리 코드 메타데이터와 S3 URL에 대해 짧은 지연 시간의 고가용성 키-값 조회와 자동 확장을 제공합니다." },
    why_wrong: {
      A: { en: "Storing large image binaries in Oracle is less scalable and more expensive than S3 object storage.", ko: "대형 이미지 바이너리를 Oracle에 저장하는 것은 S3 객체 스토리지보다 확장성이 낮고 비용이 높습니다." },
      C: { en: "DynamoDB is not the cost-effective location for millions of large image objects, and DAX is unnecessary for durable image storage.", ko: "DynamoDB는 수백만 개 대형 이미지 객체를 위한 비용 효율적 저장소가 아니며 DAX도 내구성 있는 이미지 저장에 필요하지 않습니다." },
      D: { en: "S3 is appropriate for images, but RDS Oracle adds licensing, scaling, and administration overhead for simple key-value metadata.", ko: "S3는 이미지에 적합하지만 단순 키-값 메타데이터에 RDS Oracle을 사용하면 라이선스, 확장 및 관리 부담이 추가됩니다." }
    }
  },
  {
    id: "exam8-373", number: 373, tags: ["Amazon S3", "S3 Lifecycle", "S3 Standard-IA", "S3 Glacier Deep Archive", "Cost Optimization"],
    question: { en: "An application streams vehicle IoT sensor data through Amazon Kinesis Data Streams into Amazon S3, creating hundreds of objects each year. Every morning, the company retrains ML models with the previous 30 days of data. Four times a year it analyzes the previous 12 months. Data must have minimum latency for up to 1 year and be retained for archival purposes afterward. Which storage solution is most cost-effective?", ko: "애플리케이션은 차량 IoT 센서 데이터를 Kinesis Data Streams를 통해 Amazon S3로 스트리밍하며 매년 수조 개의 객체를 생성합니다. 회사는 매일 아침 지난 30일 데이터로 ML 모델을 재교육하고 매년 네 번 이전 12개월 데이터를 분석합니다. 데이터는 최대 1년간 최소 지연 시간으로 사용 가능해야 하며 이후에는 보관해야 합니다. 가장 비용 효율적인 스토리지 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use S3 Intelligent-Tiering and a lifecycle policy to transition objects to S3 Glacier Deep Archive after 1 year.", ko: "S3 Intelligent-Tiering을 사용하고 1년 후 S3 Glacier Deep Archive로 전환하는 수명 주기 정책을 생성합니다." },
      { k: "B", en: "Use S3 Intelligent-Tiering and configure it to move objects automatically to S3 Glacier Deep Archive after 1 year.", ko: "S3 Intelligent-Tiering을 사용하고 1년 후 객체를 S3 Glacier Deep Archive로 자동 이동하도록 구성합니다." },
      { k: "C", en: "Use S3 Standard-IA and transition objects to S3 Glacier Deep Archive after 1 year.", ko: "S3 Standard-IA를 사용하고 1년 후 객체를 S3 Glacier Deep Archive로 전환합니다." },
      { k: "D", en: "Use S3 Standard, transition objects to S3 Standard-IA after 30 days, and transition them to S3 Glacier Deep Archive after 1 year.", ko: "S3 Standard를 사용하고 30일 후 S3 Standard-IA로, 1년 후 S3 Glacier Deep Archive로 전환합니다." }
    ],
    answer: ["D"],
    explanation: { en: "The first 30 days are accessed daily, so S3 Standard is appropriate. Months 2 through 12 are accessed only quarterly and fit Standard-IA while retaining millisecond access. After one year, Deep Archive minimizes long-term retention cost.", ko: "첫 30일은 매일 액세스하므로 S3 Standard가 적합합니다. 2~12개월 데이터는 분기별로만 액세스하므로 밀리초 접근을 유지하는 Standard-IA가 적합하며 1년 이후에는 Deep Archive가 장기 보관 비용을 최소화합니다." },
    why_wrong: {
      A: { en: "Intelligent-Tiering charges per-object monitoring fees, which is costly for the extremely large number of objects with known access patterns.", ko: "Intelligent-Tiering은 객체별 모니터링 비용이 있어 액세스 패턴이 알려진 매우 많은 객체에는 비용이 커집니다." },
      B: { en: "This has the same per-object monitoring overhead and does not express the known 30-day transition as cost-effectively.", ko: "객체별 모니터링 부담이 같으며 알려진 30일 전환 패턴을 비용 효율적으로 활용하지 못합니다." },
      C: { en: "New data is accessed every day for 30 days, making Standard-IA retrieval charges inefficient during that period.", ko: "신규 데이터는 30일간 매일 액세스되므로 이 기간의 Standard-IA 검색 비용이 비효율적입니다." }
    }
  },
  {
    id: "exam8-374", number: 374, tags: ["AWS Direct Connect", "AWS Transit Gateway", "Amazon VPC", "Hybrid", "Networking", "Cost Optimization"],
    question: { en: "A company runs applications in three separate VPCs in us-east-1. The applications must communicate across VPCs and continuously send hundreds of gigabytes of latency-sensitive data each day to an application in one on-premises data center. Which network connectivity solution maximizes cost efficiency?", ko: "회사는 us-east-1의 서로 다른 3개 VPC에서 애플리케이션을 실행합니다. 애플리케이션은 VPC 간 통신이 가능해야 하며 하나의 온프레미스 데이터 센터 애플리케이션으로 매일 수백 GB의 지연 시간 민감 데이터를 지속적으로 보내야 합니다. 비용 효율성을 극대화하는 네트워크 연결 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create three Site-to-Site VPN connections from the data center, one to each VPC.", ko: "데이터 센터에서 각 VPC로 하나씩 3개의 Site-to-Site VPN 연결을 생성합니다." },
      { k: "B", en: "Launch a third-party virtual network appliance in each VPC and create IPsec tunnels from the data center.", ko: "각 VPC에 타사 가상 네트워크 어플라이언스를 시작하고 데이터 센터와 IPsec VPN 터널을 구성합니다." },
      { k: "C", en: "Create three Direct Connect connections to a Direct Connect gateway, assigning one connection to each VPC.", ko: "Direct Connect 게이트웨이에 3개의 Direct Connect 연결을 만들고 각 VPC에 하나씩 할당합니다." },
      { k: "D", en: "Create one Direct Connect connection, attach all VPCs to a transit gateway, and connect Direct Connect to the transit gateway.", ko: "하나의 Direct Connect 연결을 만들고 모든 VPC를 전송 게이트웨이에 연결한 뒤 Direct Connect와 전송 게이트웨이를 연결합니다." }
    ],
    answer: ["D"],
    explanation: { en: "One Direct Connect connection provides consistent private throughput for the high-volume, latency-sensitive transfer. Transit Gateway acts as a regional hub for all VPCs and the Direct Connect gateway, avoiding duplicate dedicated connections.", ko: "하나의 Direct Connect 연결은 대용량 지연 시간 민감 전송에 일관된 사설 처리량을 제공합니다. Transit Gateway는 모든 VPC와 Direct Connect 게이트웨이의 리전 허브 역할을 하여 중복 전용 연결을 피합니다." },
    why_wrong: {
      A: { en: "Separate internet-based VPNs add connections and do not provide Direct Connect's consistent performance for this volume.", ko: "별도 인터넷 기반 VPN은 연결 수를 늘리고 이 데이터량에 Direct Connect의 일관된 성능을 제공하지 못합니다." },
      B: { en: "Third-party appliances add licensing, instance, scaling, and maintenance overhead.", ko: "타사 어플라이언스는 라이선스, 인스턴스, 확장 및 유지 관리 부담을 추가합니다." },
      C: { en: "Three Direct Connect connections are unnecessarily expensive when a transit gateway can share one connection among the VPCs.", ko: "Transit Gateway로 하나의 연결을 VPC 간 공유할 수 있으므로 3개의 Direct Connect 연결은 불필요하게 비쌉니다." }
    }
  },
  {
    id: "exam8-375", number: 375, tags: ["AWS Step Functions", "AWS Lambda", "Workflow", "Manual Approval", "Serverless", "Orchestration"],
    question: { en: "An ecommerce company is building a distributed order-processing application with several serverless functions and AWS services. The workflow needs manual approval and must combine multiple Lambda functions into a responsive serverless application while orchestrating data and services on EC2, containers, or on-premises servers. Which solution meets the requirements with the least operational overhead?", ko: "전자상거래 회사는 여러 서버리스 기능과 AWS 서비스를 포함하는 분산 주문 처리 애플리케이션을 구축합니다. 워크플로에는 수동 승인이 필요하며 여러 Lambda 함수를 반응형 서버리스 애플리케이션으로 결합하고 EC2, 컨테이너 또는 온프레미스 서버의 데이터와 서비스를 오케스트레이션해야 합니다. 최소 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Build the application with AWS Step Functions.", ko: "AWS Step Functions를 사용하여 애플리케이션을 구축합니다." },
      { k: "B", en: "Integrate all components in an AWS Glue job.", ko: "AWS Glue 작업에서 모든 애플리케이션 구성 요소를 통합합니다." },
      { k: "C", en: "Build the application with Amazon SQS.", ko: "Amazon SQS를 사용하여 애플리케이션을 구축합니다." },
      { k: "D", en: "Build the application with Lambda functions and EventBridge events only.", ko: "Lambda 함수와 EventBridge 이벤트만 사용하여 애플리케이션을 구축합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Step Functions is a managed workflow orchestrator that coordinates Lambda and other AWS or external workloads, models state and errors, and supports callback patterns for manual approval.", ko: "Step Functions는 Lambda와 다른 AWS 또는 외부 워크로드를 조정하고 상태와 오류를 모델링하며 수동 승인을 위한 콜백 패턴을 지원하는 관리형 워크플로 오케스트레이터입니다." },
    why_wrong: {
      B: { en: "Glue jobs are intended for data integration and ETL, not general order workflow orchestration.", ko: "Glue 작업은 데이터 통합과 ETL용이며 일반 주문 워크플로 오케스트레이션용이 아닙니다." },
      C: { en: "SQS decouples components but does not model the full workflow, branching, or manual approval.", ko: "SQS는 구성 요소를 분리하지만 전체 워크플로, 분기 또는 수동 승인을 모델링하지 않습니다." },
      D: { en: "Lambda and EventBridge can invoke work but require custom state, sequencing, retry, and approval logic.", ko: "Lambda와 EventBridge는 작업을 호출할 수 있지만 상태, 순서, 재시도 및 승인 로직을 직접 구현해야 합니다." }
    }
  },
  {
    id: "exam8-376", number: 376, tags: ["Amazon RDS Proxy", "Amazon RDS for MySQL", "Serverless", "Connection Pooling", "Scalability"],
    question: { en: "A company launched Amazon RDS for MySQL. Most database connections come from serverless applications, and traffic changes dramatically at arbitrary intervals. During high demand, users report database connection refusal errors. Which solution resolves the problem with the least operational overhead?", ko: "회사는 MySQL용 Amazon RDS를 출시했습니다. 대부분의 데이터베이스 연결은 서버리스 애플리케이션에서 발생하고 트래픽은 임의의 간격으로 크게 변합니다. 수요가 많을 때 사용자는 데이터베이스 연결 거부 오류를 보고합니다. 최소 운영 오버헤드로 문제를 해결하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create an RDS Proxy and configure the applications to access the DB instance through it.", ko: "RDS Proxy를 생성하고 애플리케이션이 이를 통해 DB 인스턴스에 액세스하도록 구성합니다." },
      { k: "B", en: "Deploy ElastiCache for Memcached between the applications and the DB instance.", ko: "애플리케이션과 DB 인스턴스 사이에 ElastiCache for Memcached를 배포합니다." },
      { k: "C", en: "Migrate the DB instance to a class with higher I/O capacity.", ko: "DB 인스턴스를 I/O 용량이 더 큰 인스턴스 클래스로 마이그레이션합니다." },
      { k: "D", en: "Configure Multi-AZ and make applications switch between DB instances.", ko: "다중 AZ를 구성하고 애플리케이션이 DB 인스턴스 간 전환하도록 구성합니다." }
    ],
    answer: ["A"],
    explanation: { en: "RDS Proxy pools and reuses database connections, absorbing abrupt serverless concurrency changes and preventing connection exhaustion without manually operating a proxy fleet.", ko: "RDS Proxy는 데이터베이스 연결을 풀링하고 재사용하여 갑작스러운 서버리스 동시성 변화를 흡수하고 프록시 플릿을 직접 운영하지 않고 연결 고갈을 방지합니다." },
    why_wrong: {
      B: { en: "A cache can reduce repeated reads but does not pool or control database connections.", ko: "캐시는 반복 읽기를 줄일 수 있지만 데이터베이스 연결을 풀링하거나 제어하지 않습니다." },
      C: { en: "Higher I/O does not directly solve connection exhaustion and increases steady cost.", ko: "더 높은 I/O는 연결 고갈을 직접 해결하지 못하며 고정 비용을 늘립니다." },
      D: { en: "Multi-AZ provides failover availability, not connection pooling or horizontal connection capacity.", ko: "다중 AZ는 장애 조치 가용성을 제공하지만 연결 풀링이나 수평 연결 용량을 제공하지 않습니다." }
    }
  },
  {
    id: "exam8-377", number: 377, tags: ["Amazon EC2 Auto Scaling", "Lifecycle Hooks", "User Data", "Audit", "Automation"],
    question: { en: "A company deployed an audit system to centralize information about operating system versions, patches, and installed software for EC2 instances. Every instance provisioned through an EC2 Auto Scaling group must report successfully to the audit system immediately when it starts and terminates. Which solution achieves this most efficiently?", ko: "회사는 EC2 인스턴스의 운영 체제 버전, 패치 및 설치된 소프트웨어 정보를 중앙 집중화하는 감사 시스템을 배포했습니다. EC2 Auto Scaling 그룹을 통해 프로비저닝된 모든 인스턴스는 시작 및 종료 즉시 감사 시스템에 성공적으로 보고해야 합니다. 가장 효율적인 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use a scheduled Lambda function to run scripts remotely on all EC2 instances and send data to the audit system.", ko: "예약 Lambda 함수로 모든 EC2 인스턴스에서 원격 스크립트를 실행하여 감사 시스템으로 데이터를 보냅니다." },
      { k: "B", en: "Use EC2 Auto Scaling lifecycle hooks to run a custom script that sends data when instances launch and terminate.", ko: "EC2 Auto Scaling 수명 주기 후크로 인스턴스 시작 및 종료 시 데이터를 보내는 사용자 지정 스크립트를 실행합니다." },
      { k: "C", en: "Use the Auto Scaling launch configuration and user data to run a script both when instances launch and terminate.", ko: "Auto Scaling 시작 구성과 사용자 데이터로 인스턴스 시작 및 종료 시 스크립트를 실행합니다." },
      { k: "D", en: "Run a script in the operating system and configure the Auto Scaling group to call it at launch and termination.", ko: "운영 체제에서 스크립트를 실행하고 Auto Scaling 그룹이 시작 및 종료 시 호출하도록 구성합니다." }
    ],
    answer: ["B"],
    explanation: { en: "Auto Scaling lifecycle hooks pause instances during launch or termination so custom reporting can complete before the lifecycle proceeds. This reliably ties audit collection to both events.", ko: "Auto Scaling 수명 주기 후크는 시작 또는 종료 과정에서 인스턴스를 일시 중지하여 수명 주기가 계속되기 전에 사용자 지정 보고를 완료하게 합니다. 따라서 두 이벤트 모두에 감사 수집을 안정적으로 연결합니다." },
    why_wrong: {
      A: { en: "A schedule is not synchronized with launch and termination and can miss short-lived instances.", ko: "예약 방식은 시작 및 종료와 동기화되지 않아 수명이 짧은 인스턴스를 놓칠 수 있습니다." },
      C: { en: "User data runs at launch and does not provide a reliable termination hook.", ko: "사용자 데이터는 시작 시 실행되며 신뢰할 수 있는 종료 후크를 제공하지 않습니다." },
      D: { en: "An Auto Scaling group does not directly invoke arbitrary operating-system scripts at both lifecycle events without lifecycle hooks.", ko: "수명 주기 후크 없이 Auto Scaling 그룹이 두 수명 주기 이벤트에서 임의 운영 체제 스크립트를 직접 호출하지는 않습니다." }
    }
  },
  {
    id: "exam8-378", number: 378, tags: ["Network Load Balancer", "UDP", "Amazon DynamoDB", "On-Demand Capacity", "Gaming", "Auto Scaling"],
    question: { en: "A company is developing a real-time multiplayer game that uses UDP between clients and servers in an Auto Scaling group. Demand is expected to spike during the day, and the platform must adapt. The developers want a database that scales without intervention for player scores and other non-relational data. Which solution should be recommended?", ko: "회사는 Auto Scaling 그룹의 클라이언트와 서버 간 통신에 UDP를 사용하는 실시간 멀티플레이어 게임을 개발합니다. 하루 동안 수요가 급증할 것으로 예상되며 플랫폼은 이에 맞게 적응해야 합니다. 개발자는 게이머 점수와 기타 비관계형 데이터를 개입 없이 확장되는 데이터베이스에 저장하려고 합니다. 어떤 솔루션을 권장해야 합니까?" },
    options: [
      { k: "A", en: "Use Route 53 for traffic distribution and Aurora Serverless for data storage.", ko: "트래픽 분산에 Route 53을 사용하고 데이터 저장에 Aurora Serverless를 사용합니다." },
      { k: "B", en: "Use a Network Load Balancer for traffic distribution and DynamoDB on-demand capacity for data storage.", ko: "트래픽 분산에 Network Load Balancer를 사용하고 데이터 저장에 DynamoDB 온디맨드 용량을 사용합니다." },
      { k: "C", en: "Use a Network Load Balancer and Aurora Global Database.", ko: "Network Load Balancer와 Aurora Global Database를 사용합니다." },
      { k: "D", en: "Use an Application Load Balancer and DynamoDB global tables.", ko: "Application Load Balancer와 DynamoDB 글로벌 테이블을 사용합니다." }
    ],
    answer: ["B"],
    explanation: { en: "NLB operates at Layer 4 and supports high-throughput UDP traffic to Auto Scaling targets. DynamoDB on-demand automatically accommodates unpredictable request volume for non-relational game data without capacity planning.", ko: "NLB는 계층 4에서 동작하며 Auto Scaling 대상에 대한 고처리량 UDP 트래픽을 지원합니다. DynamoDB 온디맨드는 용량 계획 없이 비관계형 게임 데이터의 예측 불가능한 요청량을 자동 수용합니다." },
    why_wrong: {
      A: { en: "Route 53 is DNS routing, not a Layer 4 UDP load balancer, and Aurora is relational.", ko: "Route 53은 DNS 라우팅이며 계층 4 UDP 로드 밸런서가 아니고 Aurora는 관계형 데이터베이스입니다." },
      C: { en: "The NLB fits UDP, but Aurora Global Database is relational and adds unnecessary cross-Region complexity.", ko: "NLB는 UDP에 적합하지만 Aurora Global Database는 관계형이며 불필요한 교차 리전 복잡성을 추가합니다." },
      D: { en: "ALB does not support UDP traffic, and global tables are unnecessary when multi-Region storage is not required.", ko: "ALB는 UDP 트래픽을 지원하지 않으며 다중 리전 저장 요구가 없으므로 글로벌 테이블도 불필요합니다." }
    }
  },
  {
    id: "exam8-379", number: 379, tags: ["AWS Lambda", "Provisioned Concurrency", "Amazon API Gateway", "Amazon RDS", "Latency", "Serverless"],
    question: { en: "A frontend application uses an API Gateway backend integrated with Lambda. For each request, Lambda loads many libraries, connects to Amazon RDS, processes data, and returns it. The company wants to minimize response latency for all users while minimizing operational changes. Which solution meets the requirement?", ko: "프런트엔드 애플리케이션은 Lambda와 통합된 API Gateway 백엔드를 사용합니다. 요청마다 Lambda는 많은 라이브러리를 로드하고 Amazon RDS에 연결해 데이터를 처리한 뒤 반환합니다. 회사는 운영 변경을 최소화하면서 모든 사용자의 응답 지연 시간을 낮추려고 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Bypass the API and connect the frontend application directly to the database.", ko: "API를 우회하여 프런트엔드 애플리케이션과 데이터베이스를 직접 연결합니다." },
      { k: "B", en: "Configure provisioned concurrency for the Lambda function that processes requests.", ko: "요청을 처리하는 Lambda 함수에 프로비저닝된 동시성을 구성합니다." },
      { k: "C", en: "Cache query results in Amazon S3 to retrieve similar datasets faster.", ko: "유사한 데이터 세트를 더 빠르게 검색하도록 쿼리 결과를 Amazon S3에 캐시합니다." },
      { k: "D", en: "Increase the database size to increase the number of connections Lambda can establish at once.", ko: "Lambda가 한 번에 설정할 수 있는 연결 수를 늘리도록 데이터베이스 크기를 늘립니다." }
    ],
    answer: ["B"],
    explanation: { en: "Provisioned concurrency keeps initialized Lambda execution environments ready, avoiding cold-start work such as loading libraries and reducing request latency with minimal architecture change.", ko: "프로비저닝된 동시성은 초기화된 Lambda 실행 환경을 준비 상태로 유지하여 라이브러리 로드 같은 콜드 스타트 작업을 피하고 최소한의 아키텍처 변경으로 요청 지연을 줄입니다." },
    why_wrong: {
      A: { en: "Direct database access from a frontend is insecure and requires a major architectural change.", ko: "프런트엔드의 직접 데이터베이스 접근은 안전하지 않고 큰 아키텍처 변경이 필요합니다." },
      C: { en: "S3 caching does not remove Lambda initialization latency and is unsuitable for general dynamic query caching.", ko: "S3 캐싱은 Lambda 초기화 지연을 제거하지 못하며 일반 동적 쿼리 캐싱에 적합하지 않습니다." },
      D: { en: "A larger database does not reduce Lambda cold starts or library initialization time.", ko: "데이터베이스 크기 증가는 Lambda 콜드 스타트나 라이브러리 초기화 시간을 줄이지 않습니다." }
    }
  },
  {
    id: "exam8-380", number: 380, tags: ["AWS Lambda", "Amazon EventBridge", "Amazon EC2", "Amazon RDS", "Scheduling", "Cost Optimization"],
    question: { en: "A company is migrating on-premises workloads to AWS and already uses multiple EC2 and RDS DB instances. It wants to start and stop the instances automatically outside business hours while minimizing cost and infrastructure maintenance. Which solution meets the requirements?", ko: "회사는 온프레미스 워크로드를 AWS로 마이그레이션하고 있으며 이미 여러 EC2 인스턴스와 RDS DB 인스턴스를 사용합니다. 업무 시간 외에 인스턴스를 자동으로 시작하고 중지하면서 비용과 인프라 유지 관리를 최소화하려고 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Use Elastic Scaling for EC2 and scale DB instances to zero outside business hours.", ko: "탄력적 크기 조정으로 EC2를 확장하고 업무 시간 외에는 DB 인스턴스를 0으로 조정합니다." },
      { k: "B", en: "Find an AWS Marketplace partner solution that starts and stops EC2 and DB instances on a schedule.", ko: "일정에 따라 EC2 및 DB 인스턴스를 시작하고 중지하는 AWS Marketplace 파트너 솔루션을 사용합니다." },
      { k: "C", en: "Launch another EC2 instance and configure cron to run shell scripts that start and stop the existing instances.", ko: "다른 EC2 인스턴스를 시작하고 기존 인스턴스를 시작 및 중지하는 셸 스크립트를 cron으로 실행합니다." },
      { k: "D", en: "Create Lambda functions to start and stop the EC2 and DB instances and invoke them on a schedule with EventBridge.", ko: "EC2 및 DB 인스턴스를 시작하고 중지하는 Lambda 함수를 만들고 EventBridge 일정으로 호출합니다." }
    ],
    answer: ["D"],
    explanation: { en: "EventBridge schedules serverless Lambda functions that call the EC2 and RDS APIs. The solution has no always-on management server and uses native services, minimizing cost and maintenance.", ko: "EventBridge는 EC2와 RDS API를 호출하는 서버리스 Lambda 함수를 예약합니다. 상시 실행 관리 서버가 없고 기본 서비스를 사용하므로 비용과 유지 관리가 최소화됩니다." },
    why_wrong: {
      A: { en: "A standard provisioned RDS DB instance cannot be scaled to zero, so this cannot meet the requirement.", ko: "표준 프로비저닝 RDS DB 인스턴스는 0으로 확장할 수 없으므로 요구 사항을 충족하지 못합니다." },
      B: { en: "A partner solution can add licensing or subscription cost when native serverless automation is sufficient.", ko: "기본 서버리스 자동화로 충분한 상황에서 파트너 솔루션은 라이선스 또는 구독 비용을 추가할 수 있습니다." },
      C: { en: "A dedicated scheduler EC2 instance adds unnecessary infrastructure, patching, monitoring, and availability work.", ko: "전용 스케줄러 EC2 인스턴스는 불필요한 인프라, 패치, 모니터링 및 가용성 관리 작업을 추가합니다." }
    }
  },
  {
    id: "exam8-381", number: 381, tags: ["Amazon Aurora PostgreSQL", "Aurora Replicas", "Read Scaling", "Reporting", "Database"],
    question: { en: "A company hosts a three-tier web application with a PostgreSQL database that stores document metadata. Documents are stored in Amazon S3 and are written once but updated frequently. A monthly report searches metadata for key terms and takes hours. Reporting must be faster without blocking document updates, with minimal application changes. Which solution meets the requirements?", ko: "회사는 문서 메타데이터를 저장하는 PostgreSQL 데이터베이스가 포함된 3계층 웹 애플리케이션을 호스팅합니다. 문서는 Amazon S3에 저장되고 일반적으로 한 번 작성되지만 자주 업데이트됩니다. 월별 보고서는 핵심 용어의 메타데이터를 검색하며 몇 시간이 걸립니다. 문서 업데이트를 방해하지 않고 최소한의 코드 변경으로 보고 속도를 높여야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Create a DocumentDB cluster with read replicas and run reports on the replicas.", ko: "읽기 복제본이 포함된 DocumentDB 클러스터를 만들고 복제본에서 보고서를 실행합니다." },
      { k: "B", en: "Create an Aurora PostgreSQL cluster with Aurora Replicas and run report queries on the replicas.", ko: "Aurora 복제본이 포함된 Aurora PostgreSQL 클러스터를 만들고 복제본에서 보고서 쿼리를 실행합니다." },
      { k: "C", en: "Create an RDS for PostgreSQL Multi-AZ DB instance and configure reports to query the standby node.", ko: "RDS for PostgreSQL 다중 AZ DB 인스턴스를 만들고 대기 노드에서 보고서를 쿼리합니다." },
      { k: "D", en: "Create a DynamoDB table for the documents with provisioned writes and auto scaled reads.", ko: "문서용 DynamoDB 테이블을 만들고 프로비저닝된 쓰기와 자동 확장 읽기를 사용합니다." }
    ],
    answer: ["B"],
    explanation: { en: "Aurora PostgreSQL preserves PostgreSQL compatibility while Aurora Replicas offload long-running report queries from the writer. Replicas can scale read capacity without blocking document metadata updates.", ko: "Aurora PostgreSQL은 PostgreSQL 호환성을 유지하고 Aurora 복제본이 장시간 보고 쿼리를 작성자에서 분리합니다. 복제본은 문서 메타데이터 업데이트를 막지 않고 읽기 용량을 확장합니다." },
    why_wrong: {
      A: { en: "Moving to DocumentDB changes the database model and application code unnecessarily.", ko: "DocumentDB로 이전하면 데이터베이스 모델과 애플리케이션 코드를 불필요하게 변경해야 합니다." },
      C: { en: "A traditional Multi-AZ standby is for failover and cannot serve read queries.", ko: "기존 다중 AZ 대기 인스턴스는 장애 조치용이며 읽기 쿼리를 처리할 수 없습니다." },
      D: { en: "Migrating relational metadata queries to DynamoDB requires substantial redesign and does not minimize code changes.", ko: "관계형 메타데이터 쿼리를 DynamoDB로 이전하면 상당한 재설계가 필요해 코드 변경을 최소화하지 못합니다." }
    }
  },
  {
    id: "exam8-382", number: 382, tags: ["Network Load Balancer", "TLS", "Certificate", "Encryption in Transit", "Amazon EC2"],
    question: { en: "A three-tier application collects sensor data from user devices. Traffic passes through a Network Load Balancer to web-tier EC2 instances and then application-tier instances that call a database. What should a solutions architect do to improve security for data in transit?", ko: "3계층 애플리케이션이 사용자 장치에서 센서 데이터를 수집합니다. 트래픽은 Network Load Balancer를 거쳐 웹 계층 EC2 인스턴스로, 이후 데이터베이스를 호출하는 애플리케이션 계층으로 이동합니다. 전송 중 데이터 보안을 개선하려면 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Configure a TLS listener and deploy a server certificate on the NLB.", ko: "TLS 수신기를 구성하고 NLB에 서버 인증서를 배포합니다." },
      { k: "B", en: "Configure AWS Shield Advanced and enable AWS WAF on the NLB.", ko: "AWS Shield Advanced를 구성하고 NLB에서 AWS WAF를 활성화합니다." },
      { k: "C", en: "Change to an Application Load Balancer and enable AWS WAF.", ko: "로드 밸런서를 ALB로 변경하고 AWS WAF를 활성화합니다." },
      { k: "D", en: "Use AWS KMS to encrypt the EBS volumes on the EC2 instances.", ko: "AWS KMS로 EC2 인스턴스의 EBS 볼륨을 암호화합니다." }
    ],
    answer: ["A"],
    explanation: { en: "An NLB TLS listener with a server certificate encrypts client traffic in transit and can terminate TLS at the load balancer. This directly addresses network transport protection.", ko: "서버 인증서가 있는 NLB TLS 수신기는 클라이언트 트래픽을 전송 중 암호화하고 로드 밸런서에서 TLS를 종료할 수 있습니다. 이는 네트워크 전송 보호 요구를 직접 충족합니다." },
    why_wrong: {
      B: { en: "Shield protects against DDoS, and WAF is not attached to an NLB; neither configuration encrypts traffic.", ko: "Shield는 DDoS를 방어하고 WAF는 NLB에 연결되지 않으며 어느 구성도 트래픽을 암호화하지 않습니다." },
      C: { en: "WAF filters application requests but does not itself encrypt data in transit; replacing the NLB is unnecessary.", ko: "WAF는 애플리케이션 요청을 필터링하지만 전송 데이터를 직접 암호화하지 않으며 NLB 교체도 불필요합니다." },
      D: { en: "EBS encryption protects data at rest, not data moving across the network.", ko: "EBS 암호화는 저장 데이터를 보호하며 네트워크 전송 데이터를 보호하지 않습니다." }
    }
  },
  {
    id: "exam8-383", number: 383, tags: ["Amazon EC2", "Dedicated Hosts", "Reserved Hosts", "BYOL", "Licensing", "Cost Optimization"],
    question: { en: "A company plans to migrate a commercial off-the-shelf application from its data center to AWS. The software has predictable capacity and uptime needs and a socket- and core-based license. The company wants to use existing licenses purchased earlier this year. Which EC2 pricing option is most cost-effective?", ko: "회사는 상용 기성 애플리케이션을 온프레미스 데이터 센터에서 AWS로 마이그레이션합니다. 소프트웨어는 예측 가능한 용량과 가동 시간 요구 사항 및 소켓·코어 기반 라이선스 모델을 사용합니다. 회사는 올해 초 구매한 기존 라이선스를 사용하려고 합니다. 가장 비용 효율적인 EC2 요금 옵션은 무엇입니까?" },
    options: [
      { k: "A", en: "Dedicated Reserved Hosts", ko: "전용 예약 호스트" },
      { k: "B", en: "Dedicated On-Demand Hosts", ko: "전용 온디맨드 호스트" },
      { k: "C", en: "Dedicated Reserved Instances", ko: "전용 예약 인스턴스" },
      { k: "D", en: "Dedicated On-Demand Instances", ko: "전용 온디맨드 인스턴스" }
    ],
    answer: ["A"],
    explanation: { en: "Dedicated Hosts expose physical sockets and cores for eligible BYOL licensing. A reservation provides the greatest discount for predictable, long-running host capacity.", ko: "전용 호스트는 적격 BYOL 라이선스에 필요한 물리적 소켓과 코어 정보를 제공합니다. 예약은 예측 가능한 장기 호스트 용량에 가장 큰 할인을 제공합니다." },
    why_wrong: {
      B: { en: "An On-Demand Dedicated Host supports licensing but costs more for predictable continuous use.", ko: "온디맨드 전용 호스트도 라이선스를 지원하지만 예측 가능한 지속 사용에는 비용이 더 높습니다." },
      C: { en: "Dedicated Instances do not provide host-level socket and core visibility or placement control required for this licensing model.", ko: "전용 인스턴스는 이 라이선스 모델에 필요한 호스트 수준 소켓·코어 가시성과 배치 제어를 제공하지 않습니다." },
      D: { en: "This lacks both the required host-level licensing control and reservation savings.", ko: "필요한 호스트 수준 라이선스 제어와 예약 할인 모두 제공하지 않습니다." }
    }
  },
  {
    id: "exam8-384", number: 384, tags: ["Amazon EFS", "EFS Standard-IA", "POSIX", "Multi-AZ", "Lifecycle Management", "Cost Optimization"],
    question: { en: "An application runs on EC2 Linux instances across multiple Availability Zones. It needs a highly available, POSIX-compatible storage tier that maximizes durability and can be shared across instances. Data is accessed frequently for 30 days and rarely afterward. Which solution is most cost-effective?", ko: "애플리케이션은 여러 가용 영역의 EC2 Linux 인스턴스에서 실행됩니다. 고가용성 POSIX 호환 스토리지가 필요하며 내구성을 극대화하고 인스턴스 간 공유할 수 있어야 합니다. 데이터는 처음 30일 동안 자주 액세스되고 이후에는 드물게 액세스됩니다. 가장 비용 효율적인 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use S3 Standard and transition infrequently accessed data to S3 Glacier.", ko: "S3 Standard를 사용하고 자주 액세스하지 않는 데이터를 S3 Glacier로 이동합니다." },
      { k: "B", en: "Use S3 Standard and transition infrequently accessed data to S3 Standard-IA.", ko: "S3 Standard를 사용하고 자주 액세스하지 않는 데이터를 S3 Standard-IA로 이동합니다." },
      { k: "C", en: "Use EFS Standard and a lifecycle policy that moves infrequently accessed data to EFS Standard-IA.", ko: "EFS Standard를 사용하고 자주 액세스하지 않는 데이터를 EFS Standard-IA로 이동하는 수명 주기 정책을 만듭니다." },
      { k: "D", en: "Use EFS One Zone and transition infrequently accessed data to EFS One Zone-IA.", ko: "EFS One Zone을 사용하고 자주 액세스하지 않는 데이터를 EFS One Zone-IA로 이동합니다." }
    ],
    answer: ["C"],
    explanation: { en: "EFS provides a shared POSIX file system for Linux instances. EFS Standard stores data redundantly across Availability Zones, and lifecycle management moves colder files to Standard-IA to reduce cost.", ko: "EFS는 Linux 인스턴스를 위한 공유 POSIX 파일 시스템을 제공합니다. EFS Standard는 여러 가용 영역에 데이터를 중복 저장하고 수명 주기 관리가 비활성 파일을 Standard-IA로 이동해 비용을 줄입니다." },
    why_wrong: {
      A: { en: "S3 is object storage and does not provide a mountable POSIX shared file system.", ko: "S3는 객체 스토리지이며 탑재 가능한 POSIX 공유 파일 시스템을 제공하지 않습니다." },
      B: { en: "S3 Standard-IA still does not satisfy the POSIX shared-file requirement.", ko: "S3 Standard-IA도 POSIX 공유 파일 요구를 충족하지 않습니다." },
      D: { en: "EFS One Zone stores data in one Availability Zone and does not maximize multi-AZ durability or availability.", ko: "EFS One Zone은 하나의 가용 영역에 저장되어 다중 AZ 내구성과 가용성을 극대화하지 못합니다." }
    }
  },
  {
    id: "exam8-385", number: 385, tags: ["Amazon VPC", "Security Groups", "Application Load Balancer", "Amazon RDS for MySQL", "Least Privilege"],
    question: { en: "A new VPC design has two public subnets for load balancers, two private subnets for web servers, and two private subnets for MySQL. The web servers use HTTPS only, and a load balancer security group already allows port 443 from 0.0.0.0/0. Company policy requires least-privilege access. Which additional configuration should be used?", ko: "새 VPC 설계에는 로드 밸런서용 퍼블릭 서브넷 2개, 웹 서버용 프라이빗 서브넷 2개, MySQL용 프라이빗 서브넷 2개가 있습니다. 웹 서버는 HTTPS만 사용하며 로드 밸런서 보안 그룹은 이미 0.0.0.0/0에서 포트 443을 허용합니다. 회사 정책은 최소 권한을 요구합니다. 어떤 추가 구성을 사용해야 합니까?" },
    options: [
      { k: "A", en: "Allow port 443 from 0.0.0.0/0 to the web security group and port 3306 from that group to the MySQL security group.", ko: "웹 보안 그룹에 0.0.0.0/0의 포트 443을 허용하고 MySQL 보안 그룹에 해당 그룹의 포트 3306을 허용합니다." },
      { k: "B", en: "Use network ACLs for both tiers, allowing port 443 from 0.0.0.0/0 and port 3306 from the web security group.", ko: "두 계층에 네트워크 ACL을 사용하여 0.0.0.0/0의 포트 443과 웹 보안 그룹의 포트 3306을 허용합니다." },
      { k: "C", en: "Allow port 443 from the load balancer security group to the web server security group, and port 3306 from the web server security group to the MySQL security group.", ko: "웹 서버 보안 그룹에 로드 밸런서 보안 그룹의 포트 443을 허용하고 MySQL 보안 그룹에 웹 서버 보안 그룹의 포트 3306을 허용합니다." },
      { k: "D", en: "Use network ACLs for both tiers and allow ports 443 and 3306 from the corresponding security groups.", ko: "두 계층에 네트워크 ACL을 사용하고 해당 보안 그룹에서 포트 443과 3306을 허용합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Security-group references allow only load-balancer members to reach web servers on 443 and only web-tier members to reach MySQL on 3306. The stateful rules remain valid as instances and IP addresses change.", ko: "보안 그룹 참조를 사용하면 로드 밸런서 구성원만 웹 서버의 443에, 웹 계층 구성원만 MySQL의 3306에 접근할 수 있습니다. 상태 저장 규칙은 인스턴스와 IP가 변경되어도 유효합니다." },
    why_wrong: {
      A: { en: "Allowing the internet directly to private web servers violates least privilege and bypasses the load balancer restriction.", ko: "인터넷에서 프라이빗 웹 서버로 직접 접근을 허용하면 최소 권한을 위반하고 로드 밸런서 제한을 우회합니다." },
      B: { en: "Network ACL rules cannot use security groups as sources and are stateless.", ko: "네트워크 ACL 규칙은 보안 그룹을 소스로 사용할 수 없고 상태 비저장입니다." },
      D: { en: "Network ACLs cannot reference security groups, so this configuration is not valid.", ko: "네트워크 ACL은 보안 그룹을 참조할 수 없으므로 이 구성은 유효하지 않습니다." }
    }
  },
  {
    id: "exam8-386", number: 386, tags: ["Amazon ElastiCache", "Amazon RDS for MySQL", "Caching", "Performance", "Database"],
    question: { en: "An ecommerce company runs a multi-tier application on AWS. The frontend and backend tiers run on Amazon EC2, and the database runs on Amazon RDS for MySQL. The backend frequently requests the same datasets from the database, which is degrading performance. What should the company do to improve backend performance?", ko: "전자상거래 회사가 AWS에서 다중 계층 애플리케이션을 실행합니다. 프런트엔드와 백엔드 계층은 Amazon EC2에서 실행되고 데이터베이스는 Amazon RDS for MySQL에서 실행됩니다. 백엔드가 데이터베이스에서 동일한 데이터 세트를 자주 요청하여 성능이 저하되고 있습니다. 백엔드 성능을 개선하려면 어떻게 해야 합니까?" },
    options: [
      { k: "A", en: "Implement Amazon SNS to store the database calls.", ko: "Amazon SNS를 구현하여 데이터베이스 호출을 저장합니다." },
      { k: "B", en: "Implement Amazon ElastiCache to cache the large datasets.", ko: "Amazon ElastiCache를 구현하여 대규모 데이터 세트를 캐시합니다." },
      { k: "C", en: "Implement an RDS for MySQL read replica to cache the database calls.", ko: "데이터베이스 호출을 캐시하기 위해 RDS for MySQL 읽기 전용 복제본을 구현합니다." },
      { k: "D", en: "Implement Amazon Kinesis Data Firehose to stream the calls to the database.", ko: "Amazon Kinesis Data Firehose를 구현하여 호출을 데이터베이스로 스트리밍합니다." }
    ],
    answer: ["B"],
    explanation: { en: "ElastiCache keeps frequently accessed datasets in memory, providing low-latency retrieval while reducing load on RDS.", ko: "ElastiCache는 자주 액세스하는 데이터 세트를 메모리에 보관하여 짧은 지연 시간으로 결과를 제공하고 RDS 부하를 줄입니다." },
    why_wrong: {
      A: { en: "SNS is a messaging service and does not cache query results.", ko: "SNS는 메시징 서비스이며 쿼리 결과를 캐시하지 않습니다." },
      C: { en: "A read replica scales reads but is not an in-memory cache for repeated datasets.", ko: "읽기 전용 복제본은 읽기를 확장하지만 반복 데이터 세트를 위한 인메모리 캐시는 아닙니다." },
      D: { en: "Kinesis Data Firehose is a streaming delivery service, not a database cache.", ko: "Kinesis Data Firehose는 스트리밍 전송 서비스이며 데이터베이스 캐시가 아닙니다." }
    }
  },
  {
    id: "exam8-387", number: 387, tags: ["AWS CloudFormation", "AWS IAM", "Least Privilege", "Service Role", "Choose two"],
    question: { en: "A new deployment engineer uses AWS CloudFormation templates to create AWS resources. A solutions architect wants the engineer to work according to the principle of least privilege. Which combination of actions should the solutions architect take? (Choose two.)", ko: "신입 배포 엔지니어가 AWS CloudFormation 템플릿을 사용하여 여러 AWS 리소스를 생성합니다. 솔루션스 아키텍트는 배포 엔지니어가 최소 권한 원칙에 따라 작업하기를 원합니다. 어떤 작업 조합을 수행해야 합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Have the engineer use the AWS account root user credentials for CloudFormation stack operations.", ko: "엔지니어가 CloudFormation 스택 작업에 AWS 계정 루트 사용자 자격 증명을 사용하도록 합니다." },
      { k: "B", en: "Create an IAM user for the engineer and add the user to a group with the PowerUserAccess policy.", ko: "엔지니어용 IAM 사용자를 생성하고 PowerUserAccess 정책이 연결된 그룹에 추가합니다." },
      { k: "C", en: "Create an IAM user for the engineer and add the user to a group with the AdministratorAccess policy.", ko: "엔지니어용 IAM 사용자를 생성하고 AdministratorAccess 정책이 연결된 그룹에 추가합니다." },
      { k: "D", en: "Create an IAM user for the engineer and add the user to a group whose policy allows only the required CloudFormation operations.", ko: "엔지니어용 IAM 사용자를 생성하고 필요한 CloudFormation 작업만 허용하는 정책이 있는 그룹에 추가합니다." },
      { k: "E", en: "Create an IAM role for CloudFormation and explicitly grant only the permissions required to create and manage the stacks and nested stacks.", ko: "CloudFormation용 IAM 역할을 생성하고 스택과 중첩 스택을 생성하고 관리하는 데 필요한 권한만 명시적으로 부여합니다." }
    ],
    answer: ["D", "E"],
    explanation: { en: "Give the engineer only the required CloudFormation API permissions and use a scoped CloudFormation service role for stack resource operations. This enforces least privilege for both the human and the service.", ko: "엔지니어에게 필요한 CloudFormation API 권한만 부여하고 스택 리소스 작업에는 범위가 제한된 CloudFormation 서비스 역할을 사용합니다. 사람과 서비스 모두에 최소 권한을 적용할 수 있습니다." },
    why_wrong: {
      A: { en: "Root credentials provide unrestricted access and should not be used for routine work.", ko: "루트 자격 증명은 제한 없는 액세스를 제공하므로 일반 작업에 사용하면 안 됩니다." },
      B: { en: "PowerUserAccess grants broad permissions beyond the required CloudFormation work.", ko: "PowerUserAccess는 필요한 CloudFormation 작업보다 광범위한 권한을 부여합니다." },
      C: { en: "AdministratorAccess grants full administrative permissions and violates least privilege.", ko: "AdministratorAccess는 전체 관리자 권한을 부여하여 최소 권한을 위반합니다." }
    }
  },
  {
    id: "exam8-388", number: 388, tags: ["Amazon VPC", "Security Groups", "Amazon RDS for MySQL", "Amazon EC2", "Connectivity"],
    question: { en: "A company deploys a two-tier web application in a VPC. The web tier uses an EC2 Auto Scaling group across public subnets. The database tier is an RDS for MySQL DB instance in private subnets. The web application cannot connect to the available database. Network ACLs, security groups, and route tables are still in their default state. What should a solutions architect recommend?", ko: "회사가 VPC에 2계층 웹 애플리케이션을 배포합니다. 웹 계층은 퍼블릭 서브넷의 EC2 Auto Scaling 그룹을 사용하고 데이터베이스 계층은 프라이빗 서브넷의 RDS for MySQL DB 인스턴스를 사용합니다. 데이터베이스는 사용 가능하지만 웹 애플리케이션에서 연결할 수 없습니다. 네트워크 ACL, 보안 그룹 및 라우팅 테이블은 기본 상태입니다. 무엇을 권장해야 합니까?" },
    options: [
      { k: "A", en: "Add an explicit rule to the private subnet network ACL to allow inbound traffic from the web-tier EC2 instances.", ko: "프라이빗 서브넷 네트워크 ACL에 웹 계층 EC2 인스턴스의 인바운드 트래픽을 허용하는 규칙을 추가합니다." },
      { k: "B", en: "Add a route to the VPC route table to allow traffic between the web tier and database tier.", ko: "웹 계층과 데이터베이스 계층 간 트래픽을 허용하도록 VPC 라우팅 테이블에 경로를 추가합니다." },
      { k: "C", en: "Deploy the web and database tiers in separate VPCs and configure VPC peering.", ko: "웹 계층과 데이터베이스 계층을 별도 VPC에 배포하고 VPC 피어링을 구성합니다." },
      { k: "D", en: "Add an inbound rule to the RDS security group that allows traffic from the web-tier security group.", ko: "RDS 보안 그룹에 웹 계층 보안 그룹의 트래픽을 허용하는 인바운드 규칙을 추가합니다." }
    ],
    answer: ["D"],
    explanation: { en: "Security groups are stateful and can reference another security group in the same VPC. Allowing the web-tier security group on the MySQL port grants the required access without relying on changing IP addresses.", ko: "보안 그룹은 상태를 저장하며 동일한 VPC의 다른 보안 그룹을 참조할 수 있습니다. MySQL 포트에서 웹 계층 보안 그룹을 허용하면 변경되는 IP 주소에 의존하지 않고 필요한 액세스를 부여할 수 있습니다." },
    why_wrong: {
      A: { en: "The default network ACL already allows all traffic; the missing permission is in the RDS security group.", ko: "기본 네트워크 ACL은 이미 모든 트래픽을 허용하며 누락된 권한은 RDS 보안 그룹에 있습니다." },
      B: { en: "Subnets in the same VPC already communicate through the automatic local route.", ko: "동일한 VPC의 서브넷은 자동 로컬 경로를 통해 이미 통신할 수 있습니다." },
      C: { en: "Separate VPCs and peering add unnecessary complexity and do not fix the missing security-group rule.", ko: "별도 VPC와 피어링은 불필요한 복잡성을 추가하며 누락된 보안 그룹 규칙을 해결하지 않습니다." }
    }
  },
  {
    id: "exam8-389", number: 389, tags: ["Amazon RDS for MySQL", "Read Replica", "Reporting", "Read Scaling", "Database"],
    question: { en: "A company has a large dataset for an online advertising business in a single-AZ Amazon RDS for MySQL DB instance. The company wants to run business reporting queries without affecting write operations on the production DB instance. Which solution meets these requirements?", ko: "회사는 단일 가용 영역의 Amazon RDS for MySQL DB 인스턴스에 온라인 광고 비즈니스용 대규모 데이터 세트를 보유하고 있습니다. 프로덕션 DB 인스턴스의 쓰기 작업에 영향을 주지 않고 비즈니스 보고 쿼리를 실행하려고 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Deploy an RDS read replica and process the business reporting queries on the replica.", ko: "RDS 읽기 전용 복제본을 배포하고 복제본에서 비즈니스 보고 쿼리를 처리합니다." },
      { k: "B", en: "Place the DB instance behind an Elastic Load Balancer to scale it horizontally.", ko: "DB 인스턴스를 Elastic Load Balancer 뒤에 배치하여 수평으로 확장합니다." },
      { k: "C", en: "Scale the DB instance to a larger instance type to process writes and reporting queries.", ko: "DB 인스턴스를 더 큰 인스턴스 유형으로 확장하여 쓰기와 보고 쿼리를 처리합니다." },
      { k: "D", en: "Deploy the DB instance across multiple Availability Zones to process the reporting queries.", ko: "보고 쿼리를 처리하도록 여러 가용 영역에 DB 인스턴스를 배포합니다." }
    ],
    answer: ["A"],
    explanation: { en: "An RDS read replica provides a separate read-only endpoint. Reporting SELECT queries can run there, offloading reads from the primary so production writes are not affected.", ko: "RDS 읽기 전용 복제본은 별도의 읽기 전용 엔드포인트를 제공합니다. 보고용 SELECT 쿼리를 복제본에서 실행하여 기본 인스턴스의 읽기 부하를 분산하므로 프로덕션 쓰기에 미치는 영향을 줄입니다." },
    why_wrong: {
      B: { en: "Elastic Load Balancing does not distribute SQL queries across RDS DB instances.", ko: "Elastic Load Balancing은 RDS DB 인스턴스 간에 SQL 쿼리를 분산하지 않습니다." },
      C: { en: "A larger primary still runs reporting and writes together, so the workloads can interfere.", ko: "더 큰 기본 인스턴스에서도 보고와 쓰기가 함께 실행되므로 워크로드가 서로 영향을 줄 수 있습니다." },
      D: { en: "RDS Multi-AZ provides high availability; its standby is not a readable reporting endpoint.", ko: "RDS 다중 AZ는 고가용성을 제공하며 대기 인스턴스는 읽기 가능한 보고 엔드포인트가 아닙니다." }
    }
  },
  {
    id: "exam8-390", number: 390, tags: ["Application Load Balancer", "Sticky Sessions", "Amazon ElastiCache for Redis", "Session Management", "Amazon EC2 Auto Scaling", "Choose two"],
    question: { en: "A company hosts a three-tier ecommerce application on an Amazon EC2 fleet in an Auto Scaling group behind an Application Load Balancer (ALB). Data is stored in an RDS for MariaDB Multi-AZ DB instance. The company wants to optimize customer session management during transactions, and the application must persistently store session data. Which two solutions meet these requirements? (Choose two.)", ko: "회사는 Application Load Balancer(ALB) 뒤의 Auto Scaling 그룹에 있는 Amazon EC2 플릿에서 3계층 전자상거래 애플리케이션을 호스팅합니다. 데이터는 MariaDB 다중 AZ DB 인스턴스용 RDS에 저장됩니다. 트랜잭션 중 고객 세션 관리를 최적화하고 세션 데이터를 지속적으로 저장해야 합니다. 어떤 두 솔루션이 요구 사항을 충족합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Turn on sticky sessions (session affinity) on the ALB.", ko: "ALB에서 고정 세션 기능(세션 선호도)을 켭니다." },
      { k: "B", en: "Use an Amazon DynamoDB table to store customer session information.", ko: "Amazon DynamoDB 테이블을 사용하여 고객 세션 정보를 저장합니다." },
      { k: "C", en: "Deploy an Amazon Cognito user pool to manage user session information.", ko: "Amazon Cognito 사용자 풀을 배포하여 사용자 세션 정보를 관리합니다." },
      { k: "D", en: "Deploy an Amazon ElastiCache for Redis cluster to store customer session information.", ko: "Amazon ElastiCache for Redis 클러스터를 배포하여 고객 세션 정보를 저장합니다." },
      { k: "E", en: "Use AWS Systems Manager Application Manager to manage user session information.", ko: "AWS Systems Manager Application Manager를 사용하여 사용자 세션 정보를 관리합니다." }
    ],
    answer: ["A", "D"],
    explanation: { en: "ALB sticky sessions keep a customer's requests on the same target during a transaction. ElastiCache for Redis provides a shared, low-latency session store for all Auto Scaling instances and supports data persistence.", ko: "ALB 고정 세션은 트랜잭션 중 고객 요청을 동일한 대상으로 전달합니다. ElastiCache for Redis는 모든 Auto Scaling 인스턴스를 위한 공유 저지연 세션 저장소를 제공하고 데이터 지속성을 지원합니다." },
    why_wrong: {
      B: { en: "DynamoDB can store session records, but Redis is the purpose-built low-latency session store in the best answer combination for this scenario.", ko: "DynamoDB도 세션 레코드를 저장할 수 있지만 이 시나리오의 최적 조합에서는 Redis가 세션용으로 설계된 저지연 저장소입니다." },
      C: { en: "Cognito manages identity, authentication, and tokens, not the application's shared transactional session data.", ko: "Cognito는 자격 증명, 인증 및 토큰을 관리하며 애플리케이션의 공유 트랜잭션 세션 데이터를 저장하지 않습니다." },
      E: { en: "Application Manager is used to view and operate application resources, not to store runtime sessions.", ko: "Application Manager는 애플리케이션 리소스를 보고 운영하는 데 사용되며 런타임 세션을 저장하지 않습니다." }
    }
  },
  {
    id: "exam8-391", number: 391, tags: ["Amazon EC2", "Amazon RDS", "AMI", "Automated Backups", "Disaster Recovery", "RPO"],
    question: { en: "A company needs a backup strategy for a three-tier stateless web application. The web tier runs on EC2 instances in an Auto Scaling group, the database tier runs on Amazon RDS for PostgreSQL, and the application needs no temporary local storage. The RPO is 2 hours. The strategy must maximize scalability and optimize resource use. Which solution meets these requirements?", ko: "회사는 3계층 상태 비저장 웹 애플리케이션을 위한 백업 전략이 필요합니다. 웹 계층은 Auto Scaling 그룹의 EC2 인스턴스에서, 데이터베이스 계층은 Amazon RDS for PostgreSQL에서 실행되며 임시 로컬 스토리지는 필요하지 않습니다. RPO는 2시간입니다. 확장성을 최대화하고 리소스 활용을 최적화하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create snapshots of the EBS volumes for the EC2 instances and database every 2 hours.", ko: "2시간마다 EC2 인스턴스와 데이터베이스의 EBS 볼륨 스냅샷을 생성합니다." },
      { k: "B", en: "Configure an EBS snapshot lifecycle policy and enable RDS automated backups.", ko: "EBS 스냅샷 수명 주기 정책을 구성하고 RDS 자동 백업을 활성화합니다." },
      { k: "C", en: "Maintain current AMIs for the web and application tiers. Enable RDS automated backups and use point-in-time recovery to meet the RPO.", ko: "웹 및 애플리케이션 계층의 최신 AMI를 유지합니다. RDS 자동 백업을 활성화하고 지정 시간 복구를 사용하여 RPO를 충족합니다." },
      { k: "D", en: "Create EBS snapshots of the EC2 instances every 2 hours and use RDS automated backups with point-in-time recovery.", ko: "2시간마다 EC2 인스턴스의 EBS 스냅샷을 생성하고 RDS 자동 백업과 지정 시간 복구를 사용합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Stateless EC2 tiers can be recreated from current AMIs and Auto Scaling. RDS automated backups provide point-in-time recovery within the retention period, meeting a 2-hour RPO without continuously snapshotting disposable instances.", ko: "상태 비저장 EC2 계층은 최신 AMI와 Auto Scaling으로 다시 생성할 수 있습니다. RDS 자동 백업은 보존 기간 내 지정 시간 복구를 제공하므로 일회성 인스턴스를 계속 스냅샷하지 않고도 2시간 RPO를 충족합니다." },
    why_wrong: {
      A: { en: "RDS storage is managed by the service, and snapshotting every stateless EC2 instance wastes resources.", ko: "RDS 스토리지는 서비스가 관리하며 상태 비저장 EC2 인스턴스를 모두 스냅샷하면 리소스가 낭비됩니다." },
      B: { en: "An EBS snapshot lifecycle is unnecessary for stateless tiers that can be recreated from an AMI.", ko: "AMI에서 재생성할 수 있는 상태 비저장 계층에는 EBS 스냅샷 수명 주기가 불필요합니다." },
      D: { en: "Frequent snapshots of stateless Auto Scaling instances add management and storage overhead without improving recoverability.", ko: "상태 비저장 Auto Scaling 인스턴스의 잦은 스냅샷은 복구성을 높이지 않으면서 관리 및 스토리지 부담을 추가합니다." }
    }
  },
  {
    id: "exam8-392", number: 392, tags: ["Amazon VPC", "Security Groups", "Amazon EC2", "Amazon RDS for MySQL", "Least Privilege"],
    question: { en: "A company will deploy a public web application on AWS with an EC2 web tier and an RDS for MySQL database tier. Global customers with dynamic IP addresses must access the application securely. How should the security groups be configured?", ko: "회사는 EC2 웹 계층과 RDS for MySQL 데이터베이스 계층이 있는 퍼블릭 웹 애플리케이션을 AWS에 배포하려고 합니다. 동적 IP 주소를 사용하는 글로벌 고객이 애플리케이션에 안전하게 액세스해야 합니다. 보안 그룹을 어떻게 구성해야 합니까?" },
    options: [
      { k: "A", en: "Allow inbound HTTPS on port 443 from 0.0.0.0/0 to the web security group. Allow inbound MySQL on port 3306 from the web security group to the DB security group.", ko: "웹 보안 그룹에 0.0.0.0/0의 포트 443 인바운드를 허용하고 DB 보안 그룹에 웹 보안 그룹의 포트 3306 인바운드를 허용합니다." },
      { k: "B", en: "Allow port 443 only from each customer's current IP address, and allow port 3306 from the web security group.", ko: "각 고객의 현재 IP 주소에서만 포트 443을 허용하고 웹 보안 그룹에서 포트 3306을 허용합니다." },
      { k: "C", en: "Allow port 443 from customer IP addresses and allow port 3306 directly from customer IP addresses to the DB.", ko: "고객 IP 주소에서 포트 443을 허용하고 고객 IP 주소에서 DB로 포트 3306을 직접 허용합니다." },
      { k: "D", en: "Allow ports 443 and 3306 from 0.0.0.0/0 to the web and DB security groups respectively.", ko: "웹 및 DB 보안 그룹에 각각 0.0.0.0/0의 포트 443과 3306을 허용합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Public HTTPS must accept changing customer addresses, while the database should accept MySQL traffic only from members of the web-tier security group.", ko: "퍼블릭 HTTPS는 변경되는 고객 주소를 허용해야 하며 데이터베이스는 웹 계층 보안 그룹의 구성원에게서 오는 MySQL 트래픽만 허용해야 합니다." },
    why_wrong: {
      B: { en: "Maintaining rules for dynamic customer addresses is impractical and will interrupt access.", ko: "동적으로 변하는 고객 주소별 규칙을 유지하는 것은 비현실적이며 액세스가 중단될 수 있습니다." },
      C: { en: "Customers should not receive direct network access to the database.", ko: "고객에게 데이터베이스로 직접 연결되는 네트워크 액세스를 부여하면 안 됩니다." },
      D: { en: "Opening MySQL to the entire internet exposes the database unnecessarily.", ko: "MySQL을 전체 인터넷에 개방하면 데이터베이스가 불필요하게 노출됩니다." }
    }
  },
  {
    id: "exam8-393", number: 393, tags: ["Amazon Transcribe", "Amazon S3", "AWS Lambda", "PII", "Redaction", "Analytics"],
    question: { en: "A payment processing company records customer voice communications and stores the audio files in Amazon S3. The company must extract text from the audio and remove all customer PII from the text. What should a solutions architect do?", ko: "결제 처리 회사는 고객과의 음성 통신을 녹음하여 오디오 파일을 Amazon S3에 저장합니다. 오디오에서 텍스트를 추출하고 텍스트에서 모든 고객 PII를 제거해야 합니다. 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Process the audio with Kinesis Video Streams and use Lambda to scan known PII patterns.", ko: "Kinesis Video Streams로 오디오를 처리하고 Lambda로 알려진 PII 패턴을 스캔합니다." },
      { k: "B", en: "Invoke Lambda on upload and start an Amazon Textract job to analyze the call recording.", ko: "업로드 시 Lambda를 호출하고 Amazon Textract 작업을 시작하여 통화 녹음을 분석합니다." },
      { k: "C", en: "Configure an Amazon Transcribe transcription job with PII redaction. Invoke it with Lambda when an audio file is uploaded to S3, and store the output in another S3 bucket.", ko: "PII 수정을 활성화한 Amazon Transcribe 전사 작업을 구성합니다. 오디오 파일이 S3에 업로드되면 Lambda로 전사 작업을 시작하고 출력을 별도 S3 버킷에 저장합니다." },
      { k: "D", en: "Create an Amazon Connect flow with transcription and Lambda pattern scanning, and start it with EventBridge after S3 uploads.", ko: "전사 및 Lambda 패턴 스캔이 포함된 Amazon Connect 흐름을 만들고 S3 업로드 후 EventBridge로 시작합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Amazon Transcribe converts speech to text and can automatically redact identified PII from transcription output. An S3 event can invoke Lambda to start the asynchronous job.", ko: "Amazon Transcribe는 음성을 텍스트로 변환하고 전사 출력에서 식별된 PII를 자동으로 수정할 수 있습니다. S3 이벤트로 Lambda를 호출하여 비동기 작업을 시작할 수 있습니다." },
    why_wrong: {
      A: { en: "Kinesis Video Streams does not provide managed transcription and PII redaction for stored audio files.", ko: "Kinesis Video Streams는 저장된 오디오 파일에 대한 관리형 전사와 PII 수정 기능을 제공하지 않습니다." },
      B: { en: "Textract extracts text from documents and images, not speech from audio.", ko: "Textract는 문서와 이미지에서 텍스트를 추출하며 오디오 음성을 전사하지 않습니다." },
      D: { en: "Amazon Connect is unnecessary for processing existing S3 audio and adds avoidable workflow complexity.", ko: "기존 S3 오디오를 처리하는 데 Amazon Connect는 불필요하며 피할 수 있는 워크플로 복잡성을 추가합니다." }
    }
  },
  {
    id: "exam8-394", number: 394, tags: ["Amazon RDS for MySQL", "gp3", "Provisioned IOPS", "Storage Performance", "Database"],
    question: { en: "A multi-tier ecommerce application uses a current-generation Amazon RDS for MySQL Multi-AZ DB instance with 2,000 GiB of General Purpose SSD (gp3) storage. Performance degrades during peak demand when read and write IOPS exceed 20,000. What should a solutions architect do to improve performance?", ko: "다중 계층 전자상거래 애플리케이션은 2,000GiB 범용 SSD(gp3) 스토리지를 사용하는 최신 세대 Amazon RDS for MySQL 다중 AZ DB 인스턴스를 사용합니다. 수요가 많은 기간에 읽기 및 쓰기 IOPS가 20,000을 넘으면 성능이 저하됩니다. 성능을 개선하려면 어떻게 해야 합니까?" },
    options: [
      { k: "A", en: "Replace the volume with a magnetic volume.", ko: "볼륨을 마그네틱 볼륨으로 교체합니다." },
      { k: "B", en: "Increase the provisioned IOPS for the gp3 storage.", ko: "gp3 스토리지의 프로비저닝된 IOPS를 늘립니다." },
      { k: "C", en: "Replace the volume with Provisioned IOPS SSD (io2) storage.", ko: "볼륨을 프로비저닝된 IOPS SSD(io2) 스토리지로 교체합니다." },
      { k: "D", en: "Replace the 2,000 GiB gp3 volume with two 1,000 GiB gp3 volumes.", ko: "2,000GiB gp3 볼륨을 두 개의 1,000GiB gp3 볼륨으로 교체합니다." }
    ],
    answer: ["B"],
    explanation: { en: "Amazon RDS gp3 storage lets administrators provision IOPS independently from storage capacity. Raising the configured IOPS directly addresses the observed I/O bottleneck without changing storage type.", ko: "Amazon RDS gp3 스토리지는 스토리지 용량과 별도로 IOPS를 프로비저닝할 수 있습니다. 구성된 IOPS를 높이면 스토리지 유형을 변경하지 않고 관찰된 I/O 병목을 직접 해결할 수 있습니다." },
    why_wrong: {
      A: { en: "Magnetic storage provides lower performance and is unsuitable for this I/O-intensive workload.", ko: "마그네틱 스토리지는 성능이 더 낮아 I/O 집약적 워크로드에 적합하지 않습니다." },
      C: { en: "io2 can provide high IOPS but changing storage type is unnecessary when gp3 can be provisioned for the required IOPS.", ko: "io2도 높은 IOPS를 제공하지만 gp3에서 필요한 IOPS를 프로비저닝할 수 있으므로 스토리지 유형 변경은 불필요합니다." },
      D: { en: "RDS for MySQL does not let the customer replace its managed storage with two independently configured data volumes.", ko: "RDS for MySQL에서는 고객이 관리형 스토리지를 독립적으로 구성한 두 데이터 볼륨으로 교체할 수 없습니다." }
    }
  },
  {
    id: "exam8-395", number: 395, tags: ["AWS CloudTrail", "AWS IAM", "Audit", "Security Groups", "Governance"],
    question: { en: "An IAM user changed AWS resource configurations during a production deployment, and several security group rules are no longer configured as intended. A solutions architect wants to identify which IAM user made the changes. Which service should be used?", ko: "IAM 사용자가 프로덕션 배포 중 AWS 리소스 구성을 변경했고 여러 보안 그룹 규칙이 의도한 대로 구성되지 않았습니다. 어떤 IAM 사용자가 변경했는지 확인하려면 어떤 서비스를 사용해야 합니까?" },
    options: [
      { k: "A", en: "Amazon GuardDuty", ko: "Amazon GuardDuty" },
      { k: "B", en: "Amazon Inspector", ko: "Amazon Inspector" },
      { k: "C", en: "AWS CloudTrail", ko: "AWS CloudTrail" },
      { k: "D", en: "AWS Config", ko: "AWS Config" }
    ],
    answer: ["C"],
    explanation: { en: "CloudTrail records AWS API activity, including the principal, time, source, and request details. Its event history can identify the IAM user who changed the security group rules.", ko: "CloudTrail은 주체, 시간, 소스 및 요청 세부 정보를 포함한 AWS API 활동을 기록합니다. 이벤트 기록에서 보안 그룹 규칙을 변경한 IAM 사용자를 확인할 수 있습니다." },
    why_wrong: {
      A: { en: "GuardDuty detects threats from logs but is not the authoritative API audit history.", ko: "GuardDuty는 로그에서 위협을 탐지하지만 API 감사 기록의 원본은 아닙니다." },
      B: { en: "Inspector assesses workloads for vulnerabilities and exposure; it does not identify the user behind an API change.", ko: "Inspector는 워크로드의 취약점과 노출을 평가하며 API 변경 사용자를 식별하지 않습니다." },
      D: { en: "AWS Config records resource configuration history, but CloudTrail is used to determine who called the change API.", ko: "AWS Config는 리소스 구성 기록을 제공하지만 변경 API를 누가 호출했는지는 CloudTrail에서 확인합니다." }
    }
  },
  {
    id: "exam8-396", number: 396, tags: ["AWS Shield Advanced", "AWS Global Accelerator", "Amazon EC2", "DDoS", "Security"],
    question: { en: "A company implements a self-managed DNS service on AWS using EC2 instances in different Regions and standard AWS Global Accelerator endpoints. The company wants protection from DDoS attacks. What should a solutions architect do?", ko: "회사는 서로 다른 AWS 리전의 EC2 인스턴스와 AWS Global Accelerator 표준 가속기 엔드포인트를 사용하여 AWS에 자체 관리형 DNS 서비스를 구현했습니다. DDoS 공격으로부터 보호하려면 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Subscribe to AWS Shield Advanced and add the accelerator as a protected resource.", ko: "AWS Shield Advanced에 가입하고 가속기를 보호 대상 리소스로 추가합니다." },
      { k: "B", en: "Subscribe to AWS Shield Advanced and add the EC2 instances as protected resources.", ko: "AWS Shield Advanced에 가입하고 EC2 인스턴스를 보호 대상 리소스로 추가합니다." },
      { k: "C", en: "Create an AWS WAF web ACL with rate-based rules and associate it with the accelerator.", ko: "속도 기반 규칙이 있는 AWS WAF 웹 ACL을 만들고 가속기와 연결합니다." },
      { k: "D", en: "Create an AWS WAF web ACL with rate-based rules and associate it with the EC2 instances.", ko: "속도 기반 규칙이 있는 AWS WAF 웹 ACL을 만들고 EC2 인스턴스와 연결합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Shield Advanced supports Global Accelerator as a protected resource and provides enhanced DDoS detection and mitigation at the application's global entry point.", ko: "Shield Advanced는 Global Accelerator를 보호 대상 리소스로 지원하며 애플리케이션의 글로벌 진입점에서 향상된 DDoS 탐지 및 완화를 제공합니다." },
    why_wrong: {
      B: { en: "Protecting only regional instances does not protect the accelerator entry point as directly or comprehensively.", ko: "리전 인스턴스만 보호하면 가속기 진입점을 직접적이고 포괄적으로 보호하지 못합니다." },
      C: { en: "AWS WAF cannot be associated directly with Global Accelerator and applies to HTTP-layer resources, not a DNS service.", ko: "AWS WAF는 Global Accelerator에 직접 연결할 수 없으며 DNS 서비스가 아닌 HTTP 계층 리소스에 적용됩니다." },
      D: { en: "AWS WAF cannot be associated directly with EC2 instances and is not designed for DNS protocol protection.", ko: "AWS WAF는 EC2 인스턴스에 직접 연결할 수 없으며 DNS 프로토콜 보호용이 아닙니다." }
    }
  },
  {
    id: "exam8-397", number: 397, tags: ["Amazon ECS", "AWS Fargate", "Amazon EventBridge", "Scheduled Tasks", "Containers"],
    question: { en: "An ecommerce company must run a scheduled daily job to aggregate and filter sales records stored in Amazon S3. Objects are up to 10 GB, a job can run for up to 1 hour, and CPU and memory needs are consistent and known. Which solution minimizes operational effort?", ko: "전자상거래 회사는 Amazon S3에 저장된 판매 기록을 집계하고 필터링하는 예약 일일 작업을 실행해야 합니다. 객체는 최대 10GB이고 작업은 최대 1시간 실행되며 CPU와 메모리 요구량은 일정하고 알려져 있습니다. 운영 노력을 최소화하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create a Lambda function and schedule it once per day with EventBridge.", ko: "Lambda 함수를 만들고 EventBridge로 하루에 한 번 예약합니다." },
      { k: "B", en: "Create a Lambda function behind API Gateway and schedule EventBridge to invoke the API.", ko: "API Gateway 뒤에 Lambda 함수를 만들고 EventBridge가 API를 호출하도록 예약합니다." },
      { k: "C", en: "Create an Amazon ECS cluster using AWS Fargate and schedule an ECS task with EventBridge.", ko: "AWS Fargate 시작 유형의 Amazon ECS 클러스터를 만들고 EventBridge로 ECS 작업을 예약합니다." },
      { k: "D", en: "Create an EC2-backed ECS cluster and Auto Scaling group, and schedule an ECS task with EventBridge.", ko: "EC2 기반 ECS 클러스터와 Auto Scaling 그룹을 만들고 EventBridge로 ECS 작업을 예약합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Fargate runs the hour-long container task with defined CPU and memory without managing servers. EventBridge Scheduler can start the ECS task daily.", ko: "Fargate는 서버 관리 없이 정의된 CPU와 메모리로 1시간짜리 컨테이너 작업을 실행합니다. EventBridge Scheduler로 ECS 작업을 매일 시작할 수 있습니다." },
    why_wrong: {
      A: { en: "The job can run longer than Lambda's maximum execution duration.", ko: "작업 시간이 Lambda의 최대 실행 시간을 초과할 수 있습니다." },
      B: { en: "API Gateway is unnecessary and Lambda still cannot run for an hour.", ko: "API Gateway는 불필요하며 Lambda는 여전히 1시간 동안 실행할 수 없습니다." },
      D: { en: "An EC2-backed cluster requires instance capacity and patch management, adding operational effort.", ko: "EC2 기반 클러스터는 인스턴스 용량 및 패치 관리가 필요하여 운영 노력이 증가합니다." }
    }
  },
  {
    id: "exam8-398", number: 398, tags: ["AWS Snowball Edge", "AWS Snow Family", "Amazon S3", "Data Transfer", "Migration"],
    question: { en: "A company must transfer 600 TB of sensitive data from an on-premises NAS to AWS within 2 weeks. The data must be encrypted in transit, and the internet connection supports 100 Mbps uploads. Which solution is most cost-effective?", ko: "회사는 온프레미스 NAS에서 AWS로 600TB의 민감한 데이터를 2주 이내에 전송해야 합니다. 데이터는 전송 중 암호화되어야 하며 인터넷 업로드 속도는 100Mbps입니다. 가장 비용 효율적인 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use Amazon S3 multipart upload to transfer the files over HTTPS.", ko: "Amazon S3 멀티파트 업로드를 사용하여 HTTPS로 파일을 전송합니다." },
      { k: "B", en: "Create a VPN connection to the nearest AWS Region and transfer the data through the VPN.", ko: "가장 가까운 AWS 리전에 VPN 연결을 만들고 VPN을 통해 데이터를 전송합니다." },
      { k: "C", en: "Order multiple AWS Snowball Edge Storage Optimized devices and use them to transfer the data to Amazon S3.", ko: "여러 AWS Snowball Edge Storage Optimized 디바이스를 주문하고 이를 사용하여 데이터를 Amazon S3로 전송합니다." },
      { k: "D", en: "Set up a 10 Gbps Direct Connect connection and use a VPN to transfer the data to Amazon S3.", ko: "10Gbps Direct Connect 연결을 설정하고 VPN을 사용하여 데이터를 Amazon S3로 전송합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Snowball Edge Storage Optimized provides encrypted, petabyte-scale offline transfer. Multiple devices can move 600 TB within the deadline without waiting for a new network circuit.", ko: "Snowball Edge Storage Optimized는 암호화된 페타바이트 규모 오프라인 전송을 제공합니다. 여러 디바이스를 사용하면 새 네트워크 회선을 기다리지 않고 600TB를 기한 내 이동할 수 있습니다." },
    why_wrong: {
      A: { en: "At 100 Mbps, transferring 600 TB over the internet would take far longer than 2 weeks.", ko: "100Mbps로 600TB를 인터넷 전송하면 2주보다 훨씬 오래 걸립니다." },
      B: { en: "A VPN encrypts traffic but does not increase the 100 Mbps internet capacity.", ko: "VPN은 트래픽을 암호화하지만 100Mbps 인터넷 용량을 늘리지 않습니다." },
      D: { en: "Provisioning a new Direct Connect circuit for a one-time transfer is slower to arrange and less cost-effective.", ko: "일회성 전송을 위해 새 Direct Connect 회선을 구축하는 것은 준비 시간이 길고 비용 효율적이지 않습니다." }
    }
  },
  {
    id: "exam8-399", number: 399, tags: ["AWS WAF", "Amazon API Gateway", "Rate-Based Rules", "HTTP Flood", "Security"],
    question: { en: "A financial company hosts a web application that uses an Amazon API Gateway Regional API endpoint. Increased request volume could cause an HTTP flood attack and make the application unavailable. Which solution protects the application with the least operational overhead?", ko: "금융 회사는 Amazon API Gateway 리전 API 엔드포인트를 사용하는 웹 애플리케이션을 호스팅합니다. 증가한 요청 수로 HTTP 플러드 공격이 발생하여 애플리케이션이 오프라인 상태가 될 수 있습니다. 최소 운영 오버헤드로 보호하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create a CloudFront distribution with a maximum TTL of 24 hours in front of the Regional API.", ko: "리전 API 앞에 최대 TTL이 24시간인 CloudFront 배포를 생성합니다." },
      { k: "B", en: "Create a Regional AWS WAF web ACL with a rate-based rule and associate the web ACL with the API Gateway stage.", ko: "속도 기반 규칙이 있는 리전 AWS WAF 웹 ACL을 만들고 API Gateway 단계와 연결합니다." },
      { k: "C", en: "Monitor a count metric with CloudWatch and notify the security team when a threshold is reached.", ko: "CloudWatch로 개수 지표를 모니터링하고 임계값 도달 시 보안 팀에 알립니다." },
      { k: "D", en: "Put Lambda@Edge and CloudFront in front of the Regional API to block IP addresses that exceed a predefined rate.", ko: "리전 API 앞에 Lambda@Edge와 CloudFront를 배치하여 사전 정의된 속도를 초과하는 IP 주소를 차단합니다." }
    ],
    answer: ["B"],
    explanation: { en: "An AWS WAF rate-based rule automatically tracks request rates per source and blocks requests that exceed the threshold. It can be associated directly with an API Gateway Regional stage.", ko: "AWS WAF 속도 기반 규칙은 소스별 요청 속도를 자동으로 추적하고 임계값을 초과한 요청을 차단합니다. API Gateway 리전 단계에 직접 연결할 수 있습니다." },
    why_wrong: {
      A: { en: "Caching does not reliably prevent abusive dynamic API requests or enforce per-source request rates.", ko: "캐싱은 악의적인 동적 API 요청을 안정적으로 방지하거나 소스별 요청 속도를 제한하지 않습니다." },
      C: { en: "An alert detects the condition but does not automatically block the attack.", ko: "알림은 상태를 탐지하지만 공격을 자동으로 차단하지 않습니다." },
      D: { en: "Custom Lambda@Edge logic and CloudFront add more components and operational overhead than a managed WAF rule.", ko: "사용자 지정 Lambda@Edge 로직과 CloudFront는 관리형 WAF 규칙보다 구성 요소와 운영 부담을 더 많이 추가합니다." }
    }
  },
  {
    id: "exam8-400", number: 400, tags: ["Amazon DynamoDB Streams", "Amazon SNS", "AWS Lambda", "Event-Driven", "Fanout"],
    question: { en: "A weather startup stores new weather events in Amazon DynamoDB and wants to alert four internal team managers whenever an event is recorded. The new service must not affect the performance of the existing application and should have the least operational overhead. What should a solutions architect do?", ko: "기상 스타트업은 새 날씨 이벤트를 Amazon DynamoDB에 저장하며 이벤트가 기록될 때마다 4명의 내부 팀 관리자에게 경고를 보내려고 합니다. 새 서비스는 기존 애플리케이션 성능에 영향을 주지 않아야 하며 운영 오버헤드가 최소여야 합니다. 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Use a DynamoDB transaction to write the event and notify the internal teams.", ko: "DynamoDB 트랜잭션으로 이벤트를 쓰고 내부 팀에 알립니다." },
      { k: "B", en: "Have the application publish messages to four SNS topics, one subscribed to by each team.", ko: "애플리케이션이 4개의 SNS 주제에 메시지를 게시하고 각 팀이 하나의 주제를 구독하도록 합니다." },
      { k: "C", en: "Enable DynamoDB Streams. Use a trigger to publish changes to a single SNS topic that all teams subscribe to.", ko: "DynamoDB Streams를 활성화하고 트리거를 사용하여 모든 팀이 구독하는 단일 SNS 주제에 변경 사항을 게시합니다." },
      { k: "D", en: "Add a flag to each item, scan the table every minute, and notify an SQS queue with a cron job.", ko: "각 항목에 플래그를 추가하고 매분 테이블을 스캔한 후 cron 작업으로 SQS 대기열에 알립니다." }
    ],
    answer: ["C"],
    explanation: { en: "DynamoDB Streams captures table changes without synchronous work in the application request path. A Lambda trigger can publish each event to one SNS topic, which fans it out to all four subscribers.", ko: "DynamoDB Streams는 애플리케이션 요청 경로에 동기 작업을 추가하지 않고 테이블 변경을 캡처합니다. Lambda 트리거가 각 이벤트를 하나의 SNS 주제에 게시하면 네 구독자 모두에게 팬아웃할 수 있습니다." },
    why_wrong: {
      A: { en: "A transaction couples notification work to the application's write path and does not provide managed fanout.", ko: "트랜잭션은 알림 작업을 애플리케이션 쓰기 경로와 결합하며 관리형 팬아웃을 제공하지 않습니다." },
      B: { en: "Changing the application to publish four messages adds coupling and more work to every write.", ko: "애플리케이션이 네 메시지를 게시하도록 변경하면 결합도와 쓰기당 작업이 증가합니다." },
      D: { en: "Frequent full-table scans are inefficient, delayed, and operationally heavier than DynamoDB Streams.", ko: "빈번한 전체 테이블 스캔은 비효율적이고 지연이 있으며 DynamoDB Streams보다 운영 부담이 큽니다." }
    }
  }
  ]
});
