/* Exam 10 · Topic 1 · 현재 수록 범위: 451~500번 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam10",
  title: "Exam 10",
  note: "Topic 1 · #451–500",
  questions: [
  {
    id: "exam10-451", number: 451, tags: ["Shared Responsibility Model", "Amazon ECS", "Amazon RDS", "AWS Direct Connect", "Choose three"],
    question: { en: "A company is migrating its applications and databases to AWS. The company uses Amazon ECS, AWS Direct Connect, and Amazon RDS. Which three activities are managed by the company's operations team? (Choose three.)", ko: "회사에서 애플리케이션과 데이터베이스를 AWS 클라우드로 마이그레이션하고 있습니다. 이 회사는 Amazon Elastic Container Service(Amazon ECS), AWS Direct Connect 및 Amazon RDS를 사용합니다. 회사의 운영 팀에서 어떤 활동을 관리합니까? (3개 선택)" },
    options: [
      { k: "A", en: "Management of the Amazon RDS infrastructure layer, operating system, and platform", ko: "Amazon RDS 인프라 계층, 운영 체제 및 플랫폼 관리" },
      { k: "B", en: "Creation of Amazon RDS DB instances and configuration of reserved maintenance windows", ko: "Amazon RDS DB 인스턴스 생성 및 예약된 유지 관리 기간 구성" },
      { k: "C", en: "Configuration of additional Amazon ECS software components for monitoring, patch management, log management, and host intrusion detection", ko: "모니터링, 패치 관리, 로그 관리 및 호스트 침입 탐지를 위한 Amazon ECS의 추가 소프트웨어 구성 요소 구성" },
      { k: "D", en: "Installation of patches for all minor and major database versions in Amazon RDS", ko: "Amazon RDS의 모든 마이너 및 메이저 데이터베이스 버전에 대한 패치 설치" },
      { k: "E", en: "Physical security of the Amazon RDS infrastructure in the data center", ko: "데이터 센터에서 Amazon RDS 인프라의 물리적 보안 보장" },
      { k: "F", en: "Encryption of data that moves through the Direct Connect connection", ko: "Direct Connect를 통해 이동하는 데이터의 암호화" }
    ],
    answer: ["B", "C", "F"],
    explanation: { en: "Under the shared responsibility model, the customer creates and configures RDS resources, configures workload-level monitoring and security components for ECS, and protects data in transit. Direct Connect does not encrypt traffic by itself. AWS manages the underlying RDS infrastructure and physical facilities.", ko: "공동 책임 모델에서 고객은 RDS 리소스를 생성·구성하고 ECS 워크로드 수준의 모니터링 및 보안 구성 요소를 설정하며 전송 중 데이터를 보호합니다. Direct Connect 자체는 트래픽을 암호화하지 않습니다. 기반 RDS 인프라와 물리적 시설은 AWS가 관리합니다." },
    why_wrong: {
      A: { en: "AWS manages the infrastructure, operating system, and managed-service platform beneath Amazon RDS.", ko: "Amazon RDS의 기반 인프라, 운영 체제 및 관리형 서비스 플랫폼은 AWS가 관리합니다." },
      D: { en: "AWS performs the underlying RDS patch installation; customers choose versions and maintenance timing where applicable.", ko: "기반 RDS 패치 설치는 AWS가 수행하며 고객은 해당되는 경우 버전과 유지 관리 시점을 선택합니다." },
      E: { en: "AWS is responsible for physical security of its data centers and managed-service infrastructure.", ko: "AWS 데이터 센터와 관리형 서비스 인프라의 물리적 보안은 AWS의 책임입니다." }
    }
  },
  {
    id: "exam10-452", number: 452, tags: ["AWS Lambda", "Amazon EventBridge", "Serverless", "Cost Optimization", "Scheduled Workload"],
    question: { en: "A company runs a Java-based job on an Amazon EC2 instance. The job runs every hour, takes 10 seconds, and uses 1 GB of memory. CPU usage is low except for brief moments when the job uses the maximum available CPU. The company wants to optimize the cost of running the job. Which solution meets these requirements?", ko: "회사는 Amazon EC2 인스턴스에서 Java 기반 작업을 실행합니다. 작업은 매시간 실행되며 실행하는 데 10초가 걸립니다. 작업은 예약된 간격으로 실행되며 1GB의 메모리를 사용합니다. 작업이 사용 가능한 최대 CPU를 사용하는 짧은 순간을 제외하고 인스턴스의 CPU 사용률은 낮습니다. 회사는 작업 실행 비용을 최적화하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS App2Container to containerize the job. Run it as an Amazon ECS task on AWS Fargate with 0.5 vCPU and 1 GB of memory.", ko: "AWS App2Container(A2C)를 사용하여 작업을 컨테이너화합니다. 0.5 vCPU 및 1GB 메모리를 사용하여 AWS Fargate에서 Amazon ECS 작업으로 실행합니다." },
      { k: "B", en: "Copy the code to an AWS Lambda function with 1 GB of memory. Create an Amazon EventBridge scheduled rule to run the code every hour.", ko: "메모리가 1GB인 AWS Lambda 함수에 코드를 복사합니다. Amazon EventBridge 예약 규칙을 생성하여 매시간 코드를 실행합니다." },
      { k: "C", en: "Use AWS App2Container to containerize the job and install the container in the existing AMI. Configure the scheduler to stop the container when the task completes.", ko: "AWS App2Container(A2C)를 사용하여 작업을 컨테이너화합니다. 기존 Amazon Machine Image(AMI)에 컨테이너를 설치합니다. 태스크가 완료되면 스케줄러가 컨테이너를 중지하는지 확인합니다." },
      { k: "D", en: "Configure the existing schedule to stop the EC2 instance when the job completes and restart it when the next job begins.", ko: "작업 완료 시 EC2 인스턴스를 중지하고 다음 작업이 시작될 때 EC2 인스턴스를 다시 시작하도록 기존 일정을 구성합니다." }
    ],
    answer: ["B"],
    explanation: { en: "Lambda is well suited to a short, periodic task and charges only for invocations and execution duration. EventBridge Scheduler or a scheduled rule can invoke the function every hour without an idle server.", ko: "Lambda는 짧고 주기적인 작업에 적합하며 호출과 실제 실행 시간에 대해서만 비용이 발생합니다. EventBridge Scheduler 또는 예약 규칙으로 유휴 서버 없이 매시간 함수를 호출할 수 있습니다." },
    why_wrong: {
      A: { en: "Fargate can run the task, but containerization and task startup add more cost and operational work than Lambda for a 10-second job.", ko: "Fargate도 작업을 실행할 수 있지만 10초 작업에는 컨테이너화와 태스크 시작으로 Lambda보다 비용과 운영 작업이 늘어납니다." },
      C: { en: "Running a container in the existing EC2 environment leaves the instance and its idle cost in place.", ko: "기존 EC2 환경에서 컨테이너를 실행하면 인스턴스와 유휴 비용이 그대로 남습니다." },
      D: { en: "Starting and stopping EC2 hourly creates management overhead and startup delay, and is inefficient for a 10-second task.", ko: "EC2를 매시간 시작하고 중지하면 관리 부담과 시작 지연이 생기며 10초 작업에는 비효율적입니다." }
    }
  },
  {
    id: "exam10-453", number: 453, tags: ["AWS Backup", "Backup Vault Lock", "Compliance", "Amazon EC2", "Amazon S3"],
    question: { en: "A company wants to implement a backup strategy for Amazon EC2 data and multiple Amazon S3 buckets. Regulations require the backup files to be retained for a specified period and prevent modification during that period. Which solution meets these requirements?", ko: "회사에서 Amazon EC2 데이터 및 여러 Amazon S3 버킷에 대한 백업 전략을 구현하려고 합니다. 규정 요구 사항으로 인해 회사는 특정 기간 동안 백업 파일을 보존해야 합니다. 회사는 보유기간 동안 파일을 변조해서는 안됩니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS Backup to create a backup vault with Vault Lock in governance mode. Create the required backup plans.", ko: "AWS Backup을 사용하여 거버넌스 모드에서 볼트 잠금이 있는 백업 볼트를 생성합니다. 필요한 백업 계획을 생성합니다." },
      { k: "B", en: "Use Amazon Data Lifecycle Manager to create the required automated snapshot policies.", ko: "Amazon Data Lifecycle Manager를 사용하여 필요한 자동 스냅샷 정책을 생성합니다." },
      { k: "C", en: "Use Amazon S3 File Gateway to create backups and configure suitable S3 lifecycle management.", ko: "Amazon S3 파일 게이트웨이를 사용하여 백업을 생성합니다. 적절한 S3 수명 주기 관리를 구성합니다." },
      { k: "D", en: "Use AWS Backup to create a backup vault with Vault Lock in compliance mode. Create the required backup plans.", ko: "AWS Backup을 사용하여 규정 준수 모드에서 볼트 잠금이 있는 백업 볼트를 생성합니다. 필요한 백업 계획을 생성합니다." }
    ],
    answer: ["D"],
    explanation: { en: "AWS Backup centrally protects supported resources, including EC2 and S3. Vault Lock compliance mode enforces write-once, read-many retention so that even privileged users cannot alter or delete recovery points before retention expires.", ko: "AWS Backup은 EC2와 S3를 포함한 지원 리소스를 중앙에서 보호합니다. Vault Lock 규정 준수 모드는 WORM 보존을 적용하여 권한 있는 사용자도 보존 기간이 끝나기 전에 복구 지점을 변경하거나 삭제할 수 없게 합니다." },
    why_wrong: {
      A: { en: "Governance mode can be overridden by users with sufficient permissions, so it does not provide the required immutable compliance control.", ko: "거버넌스 모드는 충분한 권한이 있는 사용자가 우회할 수 있으므로 요구되는 불변 규정 준수 제어를 제공하지 않습니다." },
      B: { en: "Data Lifecycle Manager automates EBS snapshots and AMIs but does not provide one immutable backup policy for both EC2 and S3.", ko: "Data Lifecycle Manager는 EBS 스냅샷과 AMI를 자동화하지만 EC2와 S3 모두에 대한 단일 불변 백업 정책을 제공하지 않습니다." },
      C: { en: "S3 File Gateway is a hybrid file interface and is not the central immutable backup service required here.", ko: "S3 File Gateway는 하이브리드 파일 인터페이스이며 여기서 필요한 중앙 집중식 불변 백업 서비스가 아닙니다." }
    }
  },
  {
    id: "exam10-454", number: 454, tags: ["Workload Discovery on AWS", "AWS Migration Hub", "Architecture Diagram", "Inventory", "Operational Excellence"],
    question: { en: "A company has resources across multiple AWS Regions and accounts. A newly hired solutions architect discovers that the previous employee did not provide detailed resource inventory information. The architect must build and map relationship details for diverse workloads in every account. Which solution meets these requirements in the most operationally efficient way?", ko: "회사는 여러 AWS 리전 및 계정에 걸쳐 리소스를 보유하고 있습니다. 새로 고용된 솔루션 설계자는 이전 직원이 리소스 인벤토리에 대한 세부 정보를 제공하지 않은 것을 발견했습니다. 솔루션 설계자는 모든 계정에서 다양한 워크로드의 관계 세부 정보를 구축하고 매핑해야 합니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS Systems Manager Inventory to create map views in detailed reports.", ko: "AWS Systems Manager Inventory를 사용하여 상세 보기 보고서에서 맵 보기를 생성합니다." },
      { k: "B", en: "Use AWS Step Functions to collect workload details and manually create architecture diagrams.", ko: "AWS Step Functions를 사용하여 워크로드 세부 정보를 수집합니다. 워크로드의 아키텍처 다이어그램을 수동으로 작성합니다." },
      { k: "C", en: "Use Workload Discovery on AWS to generate architecture diagrams for the workloads.", ko: "Workload Discovery on AWS를 사용하여 워크로드의 아키텍처 다이어그램을 생성합니다." },
      { k: "D", en: "Use AWS X-Ray to connect workload details and build architecture diagrams from the relationships.", ko: "AWS X-Ray를 사용하여 워크로드 세부 정보를 붙입니다. 관계를 사용하여 아키텍처 다이어그램을 구축합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Workload Discovery on AWS, formerly AWS Perspective, inventories AWS resources across accounts and Regions, discovers relationships, and produces visual architecture diagrams with minimal manual effort.", ko: "이전에 AWS Perspective로 불린 Workload Discovery on AWS는 여러 계정과 리전의 AWS 리소스를 인벤토리화하고 관계를 검색하여 최소한의 수작업으로 시각적 아키텍처 다이어그램을 생성합니다." },
    why_wrong: {
      A: { en: "Systems Manager Inventory gathers managed-node metadata but does not automatically map all cross-account resource relationships into architecture diagrams.", ko: "Systems Manager Inventory는 관리형 노드 메타데이터를 수집하지만 모든 교차 계정 리소스 관계를 아키텍처 다이어그램으로 자동 매핑하지 않습니다." },
      B: { en: "Step Functions orchestrates workflows; manually building diagrams creates substantial operational overhead.", ko: "Step Functions는 워크플로를 오케스트레이션하며 다이어그램을 수동으로 작성하면 운영 오버헤드가 큽니다." },
      D: { en: "X-Ray traces supported distributed applications and requests rather than inventorying and mapping all AWS resources.", ko: "X-Ray는 지원되는 분산 애플리케이션과 요청을 추적하며 모든 AWS 리소스를 인벤토리화하고 매핑하는 도구가 아닙니다." }
    }
  },
  {
    id: "exam10-455", number: 455, tags: ["AWS Organizations", "AWS Budgets", "IAM Role", "Service Control Policy", "Cost Management", "Choose three"],
    question: { en: "A company uses AWS Organizations and plans to operate some AWS accounts under different budgets. The company wants notifications when an allocated budget threshold is reached during a specified period and wants to automatically prevent additional resource provisioning in the accounts. Which three actions meet these requirements? (Choose three.)", ko: "회사에서 AWS Organizations를 사용합니다. 회사는 다른 예산으로 일부 AWS 계정을 운영하려고 합니다. 회사는 특정 기간 동안 할당된 예산 임계값에 도달하면 알림을 받고 AWS 계정에 추가 리소스 프로비저닝을 자동으로 방지하려고 합니다. 이러한 요구 사항을 충족하는 솔루션 조합은 무엇입니까? (3개 선택)" },
    options: [
      { k: "A", en: "Use AWS Budgets to create a budget and set the budget amount in the Cost and Usage Reports section of the required accounts.", ko: "AWS 예산을 사용하여 예산을 생성합니다. 필요한 AWS 계정의 비용 및 사용 보고서 섹션에서 예산 금액을 설정합니다." },
      { k: "B", en: "Use AWS Budgets to create a budget and set the budget amount from the Billing dashboard for the required accounts.", ko: "AWS 예산을 사용하여 예산을 생성합니다. 필요한 AWS 계정의 결제 대시보드에서 예산 금액을 설정합니다." },
      { k: "C", en: "Create an IAM user with the permissions required to perform AWS Budgets actions.", ko: "필요한 권한으로 예산 작업을 실행하기 위해 AWS 예산에 대한 IAM 사용자를 생성합니다." },
      { k: "D", en: "Create an IAM role with the permissions required to perform AWS Budgets actions.", ko: "필요한 권한으로 예산 작업을 실행하기 위해 AWS 예산에 대한 IAM 역할을 생성합니다." },
      { k: "E", en: "Add an alert for each account and add a budget action that selects IAM credentials generated by an appropriate AWS Config rule to prevent provisioning.", ko: "각 계정이 예산 임계값을 충족할 때 회사에 알리는 경고를 추가합니다. 추가 리소스의 프로비저닝을 방지하기 위해 적절한 구성 규칙으로 생성된 IAM 자격 증명을 선택하는 예산 작업을 추가합니다." },
      { k: "F", en: "Add an alert for each account and add a budget action that uses the appropriate service control policy (SCP) through the IAM role to prevent additional resource provisioning.", ko: "각 계정이 예산 임계값을 충족할 때 회사에 알리는 경고를 추가합니다. 추가 리소스의 프로비저닝을 방지하기 위해 적절한 SCP(서비스 제어 정책)를 적용하도록 생성된 IAM 역할을 선택하는 예산 작업을 추가합니다." }
    ],
    answer: ["B", "D", "F"],
    explanation: { en: "Create per-account budgets in AWS Billing, configure alerts, and provide AWS Budgets with an IAM role for automated actions. A budget action can apply an SCP that denies provisioning actions when the threshold is reached.", ko: "AWS Billing에서 계정별 예산과 경고를 만들고 자동 작업을 수행할 IAM 역할을 AWS Budgets에 제공합니다. 임계값에 도달하면 예산 작업이 프로비저닝 작업을 거부하는 SCP를 적용할 수 있습니다." },
    why_wrong: {
      A: { en: "Cost and Usage Reports provide detailed billing data but are not where budget amounts and thresholds are configured.", ko: "비용 및 사용 보고서는 상세 결제 데이터를 제공하지만 예산 금액과 임계값을 구성하는 위치가 아닙니다." },
      C: { en: "AWS Budgets actions assume an IAM role; long-lived IAM user credentials are not the correct mechanism.", ko: "AWS Budgets 작업은 IAM 역할을 수임하며 장기 IAM 사용자 자격 증명은 올바른 방식이 아닙니다." },
      E: { en: "AWS Config evaluates configuration compliance and does not generate credentials for AWS Budgets actions or directly prevent provisioning this way.", ko: "AWS Config는 구성 규정 준수를 평가하며 AWS Budgets 작업용 자격 증명을 생성하거나 이 방식으로 프로비저닝을 직접 방지하지 않습니다." }
    }
  },
  {
    id: "exam10-456", number: 456, tags: ["AWS Backup", "Cross-Region Backup", "Amazon EC2", "Disaster Recovery", "Centralized Management"],
    question: { en: "A company runs an application on Amazon EC2 instances in one AWS Region. The company wants to back up the instances to a second Region, provision EC2 resources there, and centrally manage the backups from one AWS account. Which solution meets these requirements most cost-effectively?", ko: "한 회사가 한 AWS 리전의 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 회사는 EC2 인스턴스를 두 번째 리전에 백업하려고 합니다. 또한 회사는 두 번째 리전에서 EC2 리소스를 프로비저닝하고 하나의 AWS 계정에서 중앙에서 EC2 인스턴스를 관리하기를 원합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create a disaster recovery plan with a similar number of EC2 instances in the second Region and configure data replication.", ko: "두 번째 리전에 비슷한 수의 EC2 인스턴스가 있는 재해 복구(DR) 계획을 만듭니다. 데이터 복제를 구성합니다." },
      { k: "B", en: "Create point-in-time Amazon EBS snapshots of the EC2 instances and periodically copy the snapshots to the second Region.", ko: "EC2 인스턴스의 특정 시점 Amazon Elastic Block Store(Amazon EBS) 스냅샷을 생성합니다. 주기적으로 스냅샷을 두 번째 리전에 복사합니다." },
      { k: "C", en: "Use AWS Backup to create a backup plan and configure cross-Region backups of the EC2 instances to the second Region.", ko: "AWS Backup을 사용하여 백업 계획을 생성합니다. EC2 인스턴스의 두 번째 리전에 대한 교차 리전 백업을 구성합니다." },
      { k: "D", en: "Deploy a similar number of EC2 instances in the second Region and use AWS DataSync to transfer data from the original Region.", ko: "두 번째 리전에 비슷한 수의 EC2 인스턴스를 배포합니다. AWS DataSync를 사용하여 원본 리전에서 두 번째 리전으로 데이터를 전송합니다." }
    ],
    answer: ["C"],
    explanation: { en: "AWS Backup provides centrally managed backup plans and native cross-Region copy for EC2 recovery points. Resources can be restored in the second Region when needed, avoiding the cost of continuously running duplicate instances.", ko: "AWS Backup은 중앙 관리형 백업 계획과 EC2 복구 지점의 기본 교차 리전 복사를 제공합니다. 필요할 때 두 번째 리전에서 리소스를 복원할 수 있어 중복 인스턴스를 계속 실행하는 비용을 피합니다." },
    why_wrong: {
      A: { en: "Keeping a full duplicate fleet running is more expensive and requires custom replication management.", ko: "전체 중복 인스턴스 집합을 계속 실행하면 비용이 더 들고 사용자 지정 복제 관리가 필요합니다." },
      B: { en: "Manual snapshot creation and copying lacks the centralized policy, scheduling, retention, and monitoring of AWS Backup.", ko: "수동 스냅샷 생성과 복사는 AWS Backup의 중앙 정책, 일정, 보존 및 모니터링 기능이 없습니다." },
      D: { en: "DataSync is not an EC2 instance backup and recovery service, and a continuously deployed duplicate fleet increases cost.", ko: "DataSync는 EC2 인스턴스 백업·복구 서비스가 아니며 중복 인스턴스를 계속 배포하면 비용이 증가합니다." }
    }
  },
  {
    id: "exam10-457", number: 457, tags: ["AWS Transfer Family", "AS2", "Custom Identity Provider", "AWS Lambda", "B2B Integration"],
    question: { en: "A company is building an application on AWS to transfer data to product manufacturers. The company has its own identity provider (IdP) and wants the IdP to authenticate application users while they transfer data. The company must use the Applicability Statement 2 (AS2) protocol. Which solution meets these requirements?", ko: "AWS를 사용하는 회사는 제품 제조업체에 데이터를 전송하는 애플리케이션을 구축하고 있습니다. 회사에는 자체 ID 공급자(IdP)가 있습니다. 회사는 사용자가 애플리케이션을 사용하여 데이터를 전송하는 동안 IdP가 애플리케이션 사용자를 인증하기를 원합니다. 회사는 AS2(Applicability Statement 2) 프로토콜을 사용해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS DataSync to transfer the data and create an AWS Lambda function for IdP authentication.", ko: "AWS DataSync를 사용하여 데이터를 전송하십시오. IdP 인증을 위한 AWS Lambda 함수를 생성합니다." },
      { k: "B", en: "Use an Amazon AppFlow flow to transfer the data and create an Amazon ECS task for IdP authentication.", ko: "Amazon AppFlow 흐름을 사용하여 데이터를 전송합니다. IdP 인증을 위한 Amazon Elastic Container Service(Amazon ECS) 작업을 생성합니다." },
      { k: "C", en: "Use AWS Transfer Family to transfer the data and create an AWS Lambda function for IdP authentication.", ko: "AWS Transfer Family를 사용하여 데이터를 전송합니다. IdP 인증을 위한 AWS Lambda 함수를 생성합니다." },
      { k: "D", en: "Use AWS Storage Gateway to transfer the data and create an Amazon Cognito user pool for IdP authentication.", ko: "AWS Storage Gateway를 사용하여 데이터를 전송합니다. IdP 인증을 위한 Amazon Cognito 자격 증명 풀을 생성합니다." }
    ],
    answer: ["C"],
    explanation: { en: "AWS Transfer Family supports managed AS2 endpoints and custom identity providers. A Lambda-backed custom IdP integration can call the company's existing identity system and return user access details.", ko: "AWS Transfer Family는 관리형 AS2 엔드포인트와 사용자 지정 자격 증명 공급자를 지원합니다. Lambda 기반 사용자 지정 IdP 통합은 회사의 기존 자격 증명 시스템을 호출하고 사용자 액세스 정보를 반환할 수 있습니다." },
    why_wrong: {
      A: { en: "DataSync transfers files between storage systems but does not provide an AS2 business-to-business endpoint.", ko: "DataSync는 스토리지 시스템 간 파일을 전송하지만 AS2 기업 간 엔드포인트를 제공하지 않습니다." },
      B: { en: "AppFlow integrates supported SaaS applications and does not implement AS2 transfers or require an ECS authentication task.", ko: "AppFlow는 지원되는 SaaS 애플리케이션을 통합하며 AS2 전송을 구현하거나 ECS 인증 태스크를 요구하지 않습니다." },
      D: { en: "Storage Gateway provides hybrid storage interfaces and does not support AS2 managed transfers.", ko: "Storage Gateway는 하이브리드 스토리지 인터페이스를 제공하며 AS2 관리형 전송을 지원하지 않습니다." }
    }
  },
  {
    id: "exam10-458", number: 458, tags: ["Amazon API Gateway", "AWS Lambda", "Amazon RDS", "Serverless", "Relational Database", "Choose two"],
    question: { en: "A solutions architect is designing a REST API in Amazon API Gateway for a payment collection service. The application needs 1 GB of memory and 2 GB of storage for compute resources, and its data must use a relational format. Which two additional AWS services meet these requirements with the least management effort? (Choose two.)", ko: "솔루션 설계자는 현금 회수 서비스를 위해 Amazon API Gateway에서 REST API를 설계하고 있습니다. 응용 프로그램에는 컴퓨팅 리소스를 위해 1GB의 메모리와 2GB의 스토리지가 필요합니다. 애플리케이션은 데이터가 관계형 형식이어야 합니다. 최소한의 관리 노력으로 이러한 요구 사항을 충족하는 추가 AWS 서비스 조합은 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Amazon EC2", ko: "Amazon EC2" },
      { k: "B", en: "AWS Lambda", ko: "AWS Lambda" },
      { k: "C", en: "Amazon RDS", ko: "Amazon RDS" },
      { k: "D", en: "Amazon DynamoDB", ko: "Amazon DynamoDB" },
      { k: "E", en: "Amazon Elastic Kubernetes Service (Amazon EKS)", ko: "Amazon Elastic Kubernetes Service(Amazon EKS)" }
    ],
    answer: ["B", "C"],
    explanation: { en: "API Gateway integrates directly with Lambda, which supplies the required memory and ephemeral storage without server management. Amazon RDS supplies a managed relational database, so the combination minimizes operational effort.", ko: "API Gateway는 Lambda와 직접 통합되며 Lambda는 서버 관리 없이 필요한 메모리와 임시 스토리지를 제공합니다. Amazon RDS는 관리형 관계형 데이터베이스를 제공하므로 이 조합이 운영 노력을 최소화합니다." },
    why_wrong: {
      A: { en: "EC2 could run the application but requires instance provisioning, patching, scaling, and availability management.", ko: "EC2도 애플리케이션을 실행할 수 있지만 인스턴스 프로비저닝, 패치, 확장 및 가용성 관리가 필요합니다." },
      D: { en: "DynamoDB is a NoSQL key-value and document database, not the required relational data store.", ko: "DynamoDB는 NoSQL 키 값 및 문서 데이터베이스이며 요구되는 관계형 데이터 저장소가 아닙니다." },
      E: { en: "EKS adds cluster and container orchestration management that is unnecessary for this small API workload.", ko: "EKS는 이 소규모 API 워크로드에 불필요한 클러스터 및 컨테이너 오케스트레이션 관리를 추가합니다." }
    }
  },
  {
    id: "exam10-459", number: 459, tags: ["AWS Organizations", "Cost Allocation Tags", "AWS Cost Explorer", "Billing", "Cost Management"],
    question: { en: "A company runs workloads across multiple AWS accounts by using AWS Organizations. Its tagging policy adds a department tag to AWS resources when the company creates the tags. The accounting team must determine departmental Amazon EC2 spending independently of AWS account and needs access to all Cost Explorer reports across the organization. Which solution meets these requirements in the most operationally efficient way?", ko: "회사는 AWS Organizations를 사용하여 여러 AWS 계정 내에서 워크로드를 실행합니다. 태깅 정책은 회사에서 태그를 생성할 때 부서 태그를 AWS 리소스에 추가합니다. 회계 팀은 Amazon EC2 소비에 대한 지출을 결정해야 합니다. 회계팀은 AWS 계정과 관계없이 비용을 담당하는 부서를 결정해야 합니다. 회계 팀은 조직 내 모든 AWS 계정에 대해 AWS Cost Explorer에 액세스할 수 있으며 Cost Explorer의 모든 보고서에 액세스해야 합니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "In the organization management account Billing console, activate the user-defined cost allocation tag named department. In Cost Explorer, group by the tag name in one cost report and filter by EC2.", ko: "조직 관리 계정 청구 콘솔에서 부서라는 사용자 정의 비용 할당 태그를 활성화합니다. 비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 EC2별로 필터링합니다." },
      { k: "B", en: "In the Organizations management account Billing console, activate an AWS-defined cost allocation tag named department. Group by the tag in Cost Explorer and filter by EC2.", ko: "Organizations 마스터 계정 결제 콘솔에서 부서라는 AWS 정의 비용 할당 태그를 활성화합니다. 비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 EC2별로 필터링합니다." },
      { k: "C", en: "In each organization member account Billing console, activate the user-defined cost allocation tag named department. Group by the tag in Cost Explorer and filter by EC2.", ko: "조직 회원 계정 청구 콘솔에서 부서라는 사용자 정의 비용 할당 태그를 활성화합니다. 비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 EC2별로 필터링합니다." },
      { k: "D", en: "In each Organizations member account Billing console, activate an AWS-defined cost allocation tag named department. Group by the tag in Cost Explorer and filter by EC2.", ko: "Organizations 회원 계정 결제 콘솔에서 부서라는 AWS 정의 비용 할당 태그를 활성화합니다. 비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 EC2별로 필터링합니다." }
    ],
    answer: ["A"],
    explanation: { en: "A company-created department tag is a user-defined cost allocation tag. Activating it centrally in the Organizations management account makes it available for organization-wide cost grouping and filtering in Cost Explorer.", ko: "회사가 만든 부서 태그는 사용자 정의 비용 할당 태그입니다. Organizations 관리 계정에서 중앙 활성화하면 Cost Explorer에서 조직 전체 비용을 그룹화하고 필터링할 수 있습니다." },
    why_wrong: {
      B: { en: "The department tag was created by the company, so it is user-defined rather than an AWS-generated tag.", ko: "부서 태그는 회사가 생성했으므로 AWS 생성 태그가 아니라 사용자 정의 태그입니다." },
      C: { en: "Activating the tag separately in member accounts is unnecessary and does not provide the most efficient organization-wide setup.", ko: "회원 계정마다 태그를 별도로 활성화할 필요가 없으며 가장 효율적인 조직 전체 설정이 아닙니다." },
      D: { en: "This uses both the wrong tag type and unnecessary per-member-account configuration.", ko: "이 방식은 태그 유형이 잘못되었고 회원 계정별 불필요한 구성이 필요합니다." }
    }
  },
  {
    id: "exam10-460", number: 460, tags: ["Amazon AppFlow", "Salesforce", "Amazon S3", "AWS KMS", "SaaS Integration", "Encryption"],
    question: { en: "A company wants to securely exchange data between a Salesforce SaaS account and Amazon S3. The company must encrypt stored data with an AWS KMS customer managed key and encrypt data in transit. API access to the Salesforce account is enabled. Which solution meets these requirements with the least development effort?", ko: "회사는 SaaS(Software as a Service) 애플리케이션 Salesforce 계정과 Amazon S3 간에 데이터를 안전하게 교환하려고 합니다. 회사는 AWS Key Management Service(AWS KMS) 고객 관리형 키(CMK)를 사용하여 저장된 데이터를 암호화해야 합니다. 또한 회사는 전송 중인 데이터를 암호화해야 합니다. 회사에서 Salesforce 계정에 대한 API 액세스를 활성화했습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create an AWS Lambda function that securely transfers data from Salesforce to Amazon S3.", ko: "Salesforce에서 Amazon S3로 안전하게 데이터를 전송하는 AWS Lambda 함수를 생성합니다." },
      { k: "B", en: "Create an AWS Step Functions workflow with a task that securely transfers data from Salesforce to Amazon S3.", ko: "AWS Step Functions 워크플로를 생성합니다. Salesforce에서 Amazon S3로 안전하게 데이터를 전송하는 작업을 정의합니다." },
      { k: "C", en: "Create an Amazon AppFlow flow to securely transfer data from Salesforce to Amazon S3.", ko: "Amazon AppFlow 흐름을 생성하여 Salesforce에서 Amazon S3로 데이터를 안전하게 전송합니다." },
      { k: "D", en: "Create a custom Salesforce connector to securely transfer data from Salesforce to Amazon S3.", ko: "Salesforce 용 사용자 지정 커넥터를 만들어 Salesforce에서 Amazon S3로 데이터를 안전하게 전송합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Amazon AppFlow is a fully managed integration service with native Salesforce and Amazon S3 connectors. It supports TLS for data in transit and customer managed KMS keys for data at rest, meeting the requirements with minimal code.", ko: "Amazon AppFlow는 Salesforce와 Amazon S3용 기본 커넥터를 제공하는 완전관리형 통합 서비스입니다. 전송 중 데이터에 TLS를 사용하고 저장 데이터에 고객 관리형 KMS 키를 지원하므로 최소한의 개발 노력으로 요구 사항을 충족합니다." },
    why_wrong: {
      A: { en: "A custom Lambda integration requires code, connector logic, retries, monitoring, and security handling that AppFlow already manages.", ko: "사용자 지정 Lambda 통합은 AppFlow가 관리해 주는 코드, 커넥터 로직, 재시도, 모니터링 및 보안 처리를 직접 구현해야 합니다." },
      B: { en: "Step Functions orchestrates tasks but does not itself provide the Salesforce data connector, so custom integration code is still required.", ko: "Step Functions는 작업을 오케스트레이션하지만 Salesforce 데이터 커넥터를 직접 제공하지 않아 사용자 지정 통합 코드가 여전히 필요합니다." },
      D: { en: "Building a custom connector adds unnecessary development and maintenance when AppFlow already supports Salesforce and S3.", ko: "AppFlow가 Salesforce와 S3를 이미 지원하므로 사용자 지정 커넥터를 만들면 불필요한 개발과 유지 관리가 추가됩니다." }
    }
  },
  {
    id: "exam10-461", number: 461, tags: ["AWS Global Accelerator", "Network Load Balancer", "Amazon EC2 Auto Scaling", "TCP", "UDP", "Global Users"],
    question: { en: "A company is developing a mobile gaming application in one AWS Region. The application runs on multiple Amazon EC2 instances in an Auto Scaling group and stores data in Amazon DynamoDB. It communicates between users and servers over both TCP and UDP and is used globally. The company wants the lowest possible latency for all users. Which solution meets these requirements?", ko: "회사가 단일 AWS 리전에서 모바일 게임 앱을 개발하고 있습니다. 앱은 Auto Scaling 그룹의 여러 Amazon EC2 인스턴스에서 실행됩니다. 회사는 앱 데이터를 Amazon DynamoDB에 저장합니다. 앱은 사용자와 서버 간에 TCP 트래픽과 UDP 트래픽을 사용하여 통신합니다. 응용 프로그램은 전 세계적으로 사용됩니다. 회사는 모든 사용자에게 가능한 가장 낮은 대기 시간을 보장하고자 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create an AWS Global Accelerator accelerator. Place an Application Load Balancer that listens on the TCP and UDP ports behind the accelerator endpoint, and register the Auto Scaling instances with the ALB.", ko: "AWS Global Accelerator를 사용하여 가속기를 생성합니다. Global Accelerator 통합을 사용하고 TCP 및 UDP 포트에서 수신 대기하는 가속기 엔드포인트 뒤에 Application Load Balancer(ALB)를 생성합니다. Auto Scaling 그룹을 업데이트하여 ALB에 인스턴스를 등록합니다." },
      { k: "B", en: "Create an AWS Global Accelerator accelerator. Place a Network Load Balancer that listens on the TCP and UDP ports behind the accelerator endpoint, and register the Auto Scaling instances with the NLB.", ko: "AWS Global Accelerator를 사용하여 가속기를 생성합니다. Global Accelerator 통합을 사용하고 TCP 및 UDP 포트에서 수신 대기하는 가속기 엔드포인트 뒤에 NLB(Network Load Balancer)를 생성합니다. Auto Scaling 그룹을 업데이트하여 NLB에 인스턴스를 등록합니다." },
      { k: "C", en: "Create an Amazon CloudFront distribution with an NLB origin that listens on the TCP and UDP ports, and register the Auto Scaling instances with the NLB.", ko: "Amazon CloudFront 콘텐츠 전송 네트워크(CDN) 엔드포인트를 생성합니다. 엔드포인트 뒤에 NLB(Network Load Balancer)를 생성하고 TCP 및 UDP 포트에서 수신 대기합니다. Auto Scaling 그룹을 업데이트하여 NLB에 인스턴스를 등록합니다. NLB를 오리진으로 사용하도록 CloudFront를 업데이트합니다." },
      { k: "D", en: "Create an Amazon CloudFront distribution with an ALB origin that listens on the TCP and UDP ports, and register the Auto Scaling instances with the ALB.", ko: "Amazon CloudFront 콘텐츠 전송 네트워크(CDN) 엔드포인트를 생성합니다. 엔드포인트 뒤에 Application Load Balancer(ALB)를 생성하고 TCP 및 UDP 포트에서 수신 대기합니다. Auto Scaling 그룹을 업데이트하여 ALB에 인스턴스를 등록합니다. ALB를 오리진으로 사용하도록 CloudFront를 업데이트합니다." }
    ],
    answer: ["B"],
    explanation: { en: "Global Accelerator routes users onto the AWS global network through nearby edge locations and supports TCP and UDP endpoints. An NLB handles both protocols and integrates with an EC2 Auto Scaling group.", ko: "Global Accelerator는 가까운 엣지 로케이션을 통해 사용자를 AWS 글로벌 네트워크로 라우팅하고 TCP 및 UDP 엔드포인트를 지원합니다. NLB는 두 프로토콜을 모두 처리하며 EC2 Auto Scaling 그룹과 통합됩니다." },
    why_wrong: {
      A: { en: "An ALB operates at Layer 7 for HTTP and HTTPS and does not listen for arbitrary UDP traffic.", ko: "ALB는 HTTP와 HTTPS를 위한 계층 7에서 작동하며 임의의 UDP 트래픽을 수신하지 않습니다." },
      C: { en: "CloudFront is an HTTP-based content delivery service and is not a general TCP and UDP accelerator for game traffic.", ko: "CloudFront는 HTTP 기반 콘텐츠 전송 서비스이며 게임용 일반 TCP 및 UDP 가속기가 아닙니다." },
      D: { en: "CloudFront does not proxy arbitrary TCP or UDP, and an ALB does not support UDP listeners.", ko: "CloudFront는 임의의 TCP 또는 UDP를 프록시하지 않으며 ALB는 UDP 리스너를 지원하지 않습니다." }
    }
  },
  {
    id: "exam10-462", number: 462, tags: ["Amazon SQS", "Amazon EC2 Auto Scaling", "Application Load Balancer", "Decoupling", "Amazon Aurora", "Scalability"],
    question: { en: "A company has an application that processes customer orders. The application runs on Amazon EC2 instances and stores orders in Amazon Aurora. During traffic spikes, the workload cannot process orders quickly enough. What should a solutions architect do to record orders reliably as quickly as possible?", ko: "회사에 고객 주문을 처리하는 애플리케이션이 있습니다. 회사는 주문을 Amazon Aurora 데이터베이스에 저장하는 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. 때때로 트래픽이 높을 때 워크로드가 주문을 충분히 빠르게 처리하지 못합니다. 가능한 한 빨리 데이터베이스에 주문을 안정적으로 기록하려면 솔루션 설계자가 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Increase the EC2 instance size during high traffic. Publish orders to an Amazon SNS topic and subscribe the database endpoint to the topic.", ko: "트래픽이 많을 때 EC2 인스턴스의 인스턴스 크기를 늘립니다. Amazon SNS에 주문을 작성합니다. SNS 주제에 데이터베이스 엔드포인트를 구독합니다." },
      { k: "B", en: "Write orders to an Amazon SQS queue. Use EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the queue and process orders into the database.", ko: "Amazon SQS 대기열에 주문을 씁니다. Application Load Balancer 뒤의 Auto Scaling 그룹에서 EC2 인스턴스를 사용하여 SQS 대기열에서 읽고 주문을 데이터베이스로 처리합니다." },
      { k: "C", en: "Publish orders to an Amazon SNS topic, subscribe the database endpoint, and use EC2 instances in an Auto Scaling group to read from the topic.", ko: "Amazon SNS에 주문을 작성합니다. SNS 주제에 데이터베이스 엔드포인트를 구독합니다. Application Load Balancer 뒤의 Auto Scaling 그룹에서 EC2 인스턴스를 사용하여 SNS 주제에서 읽습니다." },
      { k: "D", en: "Only when an EC2 CPU threshold is reached, write orders to an SQS queue and use reserved EC2 capacity behind an ALB to process them.", ko: "EC2 인스턴스가 CPU 임계값 제한에 도달하면 Amazon SQS 대기열에 주문을 씁니다. Application Load Balancer 뒤의 Auto Scaling 그룹에서 EC2 인스턴스의 예약된 조정을 사용하여 SQS 대기열에서 읽고 데이터베이스로 주문을 처리합니다." }
    ],
    answer: ["B"],
    explanation: { en: "SQS durably buffers every order and decouples ingestion from database processing. Consumers can scale independently with queue depth and process orders at a sustainable rate without losing a traffic burst.", ko: "SQS는 모든 주문을 내구성 있게 버퍼링하고 수집과 데이터베이스 처리를 분리합니다. 소비자는 대기열 깊이에 따라 독립적으로 확장하고 트래픽 급증 시 주문을 잃지 않으면서 지속 가능한 속도로 처리할 수 있습니다." },
    why_wrong: {
      A: { en: "SNS cannot directly make an Aurora database endpoint a message subscriber, and vertical scaling does not provide durable buffering.", ko: "Aurora 데이터베이스 엔드포인트를 SNS 메시지 구독자로 직접 만들 수 없으며 수직 확장은 내구성 있는 버퍼를 제공하지 않습니다." },
      C: { en: "SNS is push-based and an Aurora endpoint is not a valid direct subscriber; it also does not give workers queue-style backlog control.", ko: "SNS는 푸시 방식이고 Aurora 엔드포인트는 유효한 직접 구독자가 아니며 작업자에게 대기열 방식의 백로그 제어를 제공하지 않습니다." },
      D: { en: "Orders must always be queued, not only after CPU reaches a threshold, or a sudden burst can still be lost or delayed.", ko: "주문은 CPU 임계값에 도달한 뒤에만이 아니라 항상 대기열에 기록해야 하며 그렇지 않으면 갑작스러운 급증에서 여전히 손실되거나 지연될 수 있습니다." }
    }
  },
  {
    id: "exam10-463", number: 463, tags: ["AWS Lambda", "Amazon S3", "Serverless", "IoT", "Event-Driven Architecture", "Cost Optimization"],
    question: { en: "An IoT company is launching a mattress with sensors that collect sleep data and send it to an Amazon S3 bucket. Each mattress collects about 2 MB nightly. The company must process and summarize each mattress's data as quickly as possible. Processing requires 1 GB of memory and completes within 30 seconds. Which solution is most cost-effective?", ko: "IoT 회사는 사용자의 수면에 대한 데이터를 수집하는 센서가 있는 매트리스를 출시하고 있습니다. 센서는 데이터를 Amazon S3 버킷으로 보냅니다. 센서는 각 매트리스에 대해 매일 밤 약 2MB의 데이터를 수집합니다. 회사는 각 매트리스에 대한 데이터를 처리하고 요약해야 합니다. 결과는 가능한 한 빨리 제공되어야 합니다. 데이터 처리에는 1GB의 메모리가 필요하며 30초 이내에 완료됩니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS Glue with a Scala job.", ko: "Scala 작업에 AWS Glue 사용" },
      { k: "B", en: "Use Amazon EMR with an Apache Spark script.", ko: "Apache Spark 스크립트와 함께 Amazon EMR 사용" },
      { k: "C", en: "Use AWS Lambda with a Python script.", ko: "Python 스크립트와 함께 AWS Lambda 사용" },
      { k: "D", en: "Use AWS Glue with a PySpark job.", ko: "PySpark 작업과 함께 AWS Glue 사용" }
    ],
    answer: ["C"],
    explanation: { en: "An S3 object-created event can invoke Lambda immediately. The workload is small, finishes well within Lambda's execution limit, and pays only for brief execution instead of a data-processing cluster.", ko: "S3 객체 생성 이벤트로 Lambda를 즉시 호출할 수 있습니다. 작업량이 작고 Lambda 실행 제한 안에 충분히 완료되며 데이터 처리 클러스터 대신 짧은 실행 시간에 대해서만 비용을 지불합니다." },
    why_wrong: {
      A: { en: "Glue job startup and minimum billing are excessive for a 2 MB, 30-second event-driven task.", ko: "2MB, 30초 이벤트 기반 작업에는 Glue 작업 시작 시간과 최소 과금이 과도합니다." },
      B: { en: "An EMR cluster adds provisioning time, administration, and cost for this tiny workload.", ko: "이 작은 워크로드에 EMR 클러스터를 사용하면 프로비저닝 시간, 관리 및 비용이 추가됩니다." },
      D: { en: "A PySpark Glue job is designed for larger ETL workloads and has unnecessary startup overhead here.", ko: "PySpark Glue 작업은 더 큰 ETL 워크로드용이며 여기서는 불필요한 시작 오버헤드가 있습니다." }
    }
  },
  {
    id: "exam10-464", number: 464, tags: ["Amazon RDS for PostgreSQL", "Multi-AZ", "High Availability", "Database", "Failover"],
    question: { en: "A company hosts an online shopping application that stores all orders in a single-AZ Amazon RDS for PostgreSQL DB instance. Management wants to remove the single point of failure and minimize database downtime without changing application code. Which solution meets these requirements?", ko: "회사는 PostgreSQL 단일 AZ DB 인스턴스용 Amazon RDS에 모든 주문을 저장하는 온라인 쇼핑 애플리케이션을 호스팅합니다. 경영진은 단일 실패 지점을 제거하기를 원하며 솔루션 설계자에게 애플리케이션 코드를 변경하지 않고도 데이터베이스 다운타임을 최소화할 수 있는 접근 방식을 권장하도록 요청했습니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Modify the existing DB instance and enable the Multi-AZ option to convert it to a Multi-AZ deployment.", ko: "데이터베이스 인스턴스를 수정하고 다중 AZ 옵션을 지정하여 기존 데이터베이스 인스턴스를 다중 AZ 배포로 변환합니다." },
      { k: "B", en: "Create a new RDS Multi-AZ deployment, take a snapshot of the current instance, and restore the snapshot into the new deployment.", ko: "새로운 RDS 다중 AZ 배포를 생성합니다. 현재 RDS 인스턴스의 스냅샷을 만들고 스냅샷으로 새 다중 AZ 배포를 복원합니다." },
      { k: "C", en: "Create a read replica in another Availability Zone and use a Route 53 weighted record set to distribute requests across both databases.", ko: "다른 가용 영역에서 PostgreSQL 데이터베이스의 읽기 전용 복제본을 생성합니다. Amazon Route 53 가중 레코드 세트를 사용하여 데이터베이스 전체에 요청을 분산합니다." },
      { k: "D", en: "Place RDS for PostgreSQL databases in an EC2 Auto Scaling group with a minimum size of two and use Route 53 weighted records.", ko: "최소 그룹 크기가 2인 Amazon EC2 Auto Scaling 그룹에 RDS for PostgreSQL 데이터베이스를 배치합니다. Amazon Route 53 가중 레코드 세트를 사용하여 인스턴스 간에 요청을 분산합니다." }
    ],
    answer: ["A"],
    explanation: { en: "RDS can convert an existing single-AZ DB instance to Multi-AZ by modifying the instance. The endpoint remains the same, and RDS manages synchronous standby replication and automatic failover without application changes.", ko: "RDS는 기존 단일 AZ DB 인스턴스를 수정하여 다중 AZ로 전환할 수 있습니다. 엔드포인트는 그대로 유지되며 RDS가 애플리케이션 변경 없이 동기식 대기 복제와 자동 장애 조치를 관리합니다." },
    why_wrong: {
      B: { en: "Creating and restoring a separate deployment introduces migration work and endpoint changes that are unnecessary.", ko: "별도 배포를 생성하고 복원하면 불필요한 마이그레이션 작업과 엔드포인트 변경이 발생합니다." },
      C: { en: "A read replica is asynchronous and read-only; Route 53 cannot safely distribute order writes across it.", ko: "읽기 전용 복제본은 비동기식이며 읽기 전용이므로 Route 53이 주문 쓰기를 안전하게 분산할 수 없습니다." },
      D: { en: "RDS DB instances cannot be members of an EC2 Auto Scaling group.", ko: "RDS DB 인스턴스는 EC2 Auto Scaling 그룹의 구성원이 될 수 없습니다." }
    }
  },
  {
    id: "exam10-465", number: 465, tags: ["Amazon EBS", "EBS Multi-Attach", "Provisioned IOPS SSD", "io2", "High Availability", "Nitro System"],
    question: { en: "A company is developing an application for customer requests. It will deploy the application to multiple Nitro-based Amazon EC2 instances in the same Availability Zone and wants higher availability by allowing the instances to write simultaneously to multiple block storage volumes. Which solution meets these requirements?", ko: "회사에서 고객 요구를 지원하기 위해 애플리케이션을 개발하고 있습니다. 회사는 동일한 가용 영역 내의 여러 Amazon EC2 Nitro 기반 인스턴스에 애플리케이션을 배포하려고 합니다. 또한 이 회사는 더 높은 애플리케이션 가용성을 달성하기 위해 여러 EC2 Nitro 기반 인스턴스의 여러 블록 스토리지 볼륨에 동시에 쓸 수 있는 기능을 애플리케이션에 제공하고자 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use General Purpose SSD (gp3) EBS volumes with Amazon EBS Multi-Attach.", ko: "Amazon Elastic Block Store(Amazon EBS) 다중 연결에 범용 SSD(gp3) EBS 볼륨 사용" },
      { k: "B", en: "Use Throughput Optimized HDD (st1) EBS volumes with Amazon EBS Multi-Attach.", ko: "Amazon Elastic Block Store(Amazon EBS) 다중 연결과 함께 처리량 최적화 HDD(st1) EBS 볼륨 사용" },
      { k: "C", en: "Use Provisioned IOPS SSD (io2) EBS volumes with Amazon EBS Multi-Attach.", ko: "Amazon Elastic Block Store(Amazon EBS) 다중 연결과 함께 프로비저닝된 IOPS SSD(io2) EBS 볼륨 사용" },
      { k: "D", en: "Use General Purpose SSD (gp2) EBS volumes with Amazon EBS Multi-Attach.", ko: "Amazon Elastic Block Store(Amazon EBS) 다중 연결에 범용 SSD(gp2) EBS 볼륨 사용" }
    ],
    answer: ["C"],
    explanation: { en: "EBS Multi-Attach lets a Provisioned IOPS io2 volume attach to multiple Nitro instances in the same Availability Zone. The application must coordinate concurrent writes with a cluster-aware file system or locking mechanism.", ko: "EBS Multi-Attach를 사용하면 프로비저닝된 IOPS io2 볼륨을 동일한 가용 영역의 여러 Nitro 인스턴스에 연결할 수 있습니다. 애플리케이션은 클러스터 인식 파일 시스템이나 잠금 메커니즘으로 동시 쓰기를 조정해야 합니다." },
    why_wrong: {
      A: { en: "General Purpose gp3 volumes do not support Multi-Attach.", ko: "범용 gp3 볼륨은 Multi-Attach를 지원하지 않습니다." },
      B: { en: "Throughput Optimized HDD st1 volumes do not support Multi-Attach.", ko: "처리량 최적화 HDD st1 볼륨은 Multi-Attach를 지원하지 않습니다." },
      D: { en: "General Purpose gp2 volumes do not support Multi-Attach.", ko: "범용 gp2 볼륨은 Multi-Attach를 지원하지 않습니다." }
    }
  },
  {
    id: "exam10-466", number: 466, tags: ["Amazon EC2 Auto Scaling", "Application Load Balancer", "Multi-AZ", "Amazon RDS Multi-AZ", "High Availability"],
    question: { en: "A company designed a stateful two-tier application that uses Amazon EC2 in a single Availability Zone and an Amazon RDS Multi-AZ DB instance. New management wants to increase application availability. What should a solutions architect do?", ko: "한 회사에서 단일 가용 영역과 Amazon RDS 다중 AZ DB 인스턴스에서 Amazon EC2를 사용하는 상태 비저장 2계층 애플리케이션을 설계했습니다. 새로운 회사 경영진은 애플리케이션의 가용성을 높이려고 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Configure the application to use EC2 Auto Scaling across multiple Availability Zones and create an Application Load Balancer.", ko: "다중 AZ EC2 Auto Scaling을 사용하도록 애플리케이션을 구성하고 Application Load Balancer를 생성합니다." },
      { k: "B", en: "Take snapshots of the EC2 instances and configure the application to send them to another AWS Region.", ko: "EC2 인스턴스의 스냅샷을 찍어 다른 AWS 리전으로 보내도록 애플리케이션을 구성합니다." },
      { k: "C", en: "Configure the application to use Amazon Route 53 latency-based routing to serve requests.", ko: "Amazon Route 53 대기 시간 기반 라우팅을 사용하여 애플리케이션에 요청을 제공하도록 애플리케이션을 구성합니다." },
      { k: "D", en: "Configure an Amazon Route 53 rule to process incoming requests and create a Multi-AZ application load balancer.", ko: "들어오는 요청을 처리하고 다중 AZ 애플리케이션 로드 밸런서를 생성하도록 Amazon Route 53 규칙을 구성합니다." }
    ],
    answer: ["A"],
    explanation: { en: "A load balancer and an Auto Scaling group spanning multiple AZs remove the single-AZ failure point in the application tier and replace unhealthy instances. The database already uses RDS Multi-AZ.", ko: "여러 AZ에 걸친 로드 밸런서와 Auto Scaling 그룹은 애플리케이션 계층의 단일 AZ 장애 지점을 제거하고 비정상 인스턴스를 교체합니다. 데이터베이스는 이미 RDS 다중 AZ를 사용합니다." },
    why_wrong: {
      B: { en: "Snapshots in another Region are backups and do not provide automatic, continuously available application capacity.", ko: "다른 리전의 스냅샷은 백업이며 자동으로 계속 사용 가능한 애플리케이션 용량을 제공하지 않습니다." },
      C: { en: "Latency routing selects among endpoints but does not create redundant application instances or replace failures.", ko: "지연 시간 라우팅은 엔드포인트를 선택하지만 중복 애플리케이션 인스턴스를 만들거나 장애를 교체하지 않습니다." },
      D: { en: "Route 53 does not create or manage an application load balancer, and the option omits multi-AZ compute scaling.", ko: "Route 53은 애플리케이션 로드 밸런서를 생성하거나 관리하지 않으며 이 선택지는 다중 AZ 컴퓨팅 확장을 누락합니다." }
    }
  },
  {
    id: "exam10-467", number: 467, tags: ["AWS Organizations", "Compute Savings Plans", "Discount Sharing", "Billing", "Cost Optimization"],
    question: { en: "A company uses AWS Organizations. A member account purchased a Compute Savings Plan, but workload changes mean the account now uses less than 50% of the purchased commitment. What should the company do to maximize use of the discount?", ko: "회사에서 AWS Organizations를 사용합니다. 멤버 계정이 Compute Savings Plan을 구입했습니다. 멤버 계정 내부의 워크로드 변경으로 인해 해당 계정은 더 이상 Compute Savings Plan 약정의 전체 혜택을 받지 못합니다. 이 회사는 구매한 컴퓨팅 성능의 50% 미만을 사용합니다." },
    options: [
      { k: "A", en: "Turn on discount sharing in the Billing preferences of the member account that purchased the Compute Savings Plan.", ko: "Compute Savings Plan을 구매한 멤버 계정의 계정 콘솔에 있는 청구 기본 설정 섹션에서 할인 공유를 켭니다." },
      { k: "B", en: "Turn on discount sharing in the Billing preferences of the organization's management account.", ko: "회사의 조직 관리 계정에 있는 계정 콘솔의 청구 기본 설정 섹션에서 할인 공유를 켭니다." },
      { k: "C", en: "Migrate additional compute workloads from another AWS account into the account that owns the Compute Savings Plan.", ko: "다른 AWS 계정에서 Compute Savings Plan이 있는 계정으로 추가 컴퓨팅 워크로드를 마이그레이션합니다." },
      { k: "D", en: "Sell the unused Savings Plan commitment on the Reserved Instance Marketplace.", ko: "예약 인스턴스 마켓플레이스에서 초과된 Savings Plan 약정을 판매합니다." }
    ],
    answer: ["B"],
    explanation: { en: "The Organizations management account controls discount sharing. When enabled, eligible unused Savings Plans benefits can apply across linked member accounts, improving commitment utilization without moving workloads.", ko: "Organizations 관리 계정이 할인 공유를 제어합니다. 활성화하면 사용하지 않은 적격 Savings Plans 혜택을 연결된 회원 계정 전체에 적용하여 워크로드 이동 없이 약정 사용률을 높일 수 있습니다." },
    why_wrong: {
      A: { en: "A member account cannot control organization-wide discount sharing; the management account controls it.", ko: "회원 계정은 조직 전체 할인 공유를 제어할 수 없으며 관리 계정에서 제어합니다." },
      C: { en: "Moving workloads between accounts creates unnecessary operational risk when billing discount sharing solves the issue.", ko: "결제 할인 공유로 해결할 수 있는데 계정 간 워크로드를 이동하면 불필요한 운영 위험이 생깁니다." },
      D: { en: "Savings Plans cannot be resold on the Reserved Instance Marketplace.", ko: "Savings Plans는 예약 인스턴스 마켓플레이스에서 재판매할 수 없습니다." }
    }
  },
  {
    id: "exam10-468", number: 468, tags: ["Amazon API Gateway", "REST API", "VPC Link", "Amazon ECS", "Private Subnet", "Microservices"],
    question: { en: "A company is developing a microservices application that provides a search catalog. A REST API must present the frontend to users and access a backend service hosted in containers in a private VPC subnet. Which solution meets these requirements?", ko: "회사에서 고객을 위한 검색 카탈로그를 제공할 마이크로서비스 애플리케이션을 개발하고 있습니다. 회사는 REST API를 사용하여 애플리케이션의 프런트엔드를 사용자에게 제시해야 합니다. REST API는 회사가 프라이빗 VPC 서브넷의 컨테이너에서 호스팅하는 백엔드 서비스에 액세스해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create a WebSocket API in API Gateway, host the application on Amazon ECS in the private subnet, and create a private VPC link for API Gateway to access ECS.", ko: "Amazon API Gateway를 사용하여 WebSocket API를 설계합니다. 프라이빗 서브넷의 Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS에 액세스하기 위해 API Gateway용 프라이빗 VPC 링크를 생성합니다." },
      { k: "B", en: "Create a REST API in API Gateway, host the application on Amazon ECS in the private subnet, and create a private VPC link for API Gateway to access ECS.", ko: "Amazon API Gateway를 사용하여 REST API를 설계합니다. 프라이빗 서브넷의 Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS에 액세스하기 위해 API Gateway용 프라이빗 VPC 링크를 생성합니다." },
      { k: "C", en: "Create a WebSocket API in API Gateway, host the application on Amazon ECS in the private subnet, and create a security group for API Gateway to access ECS.", ko: "Amazon API Gateway를 사용하여 WebSocket API를 설계합니다. 프라이빗 서브넷의 Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS에 액세스하기 위해 API Gateway에 대한 보안 그룹을 생성합니다." },
      { k: "D", en: "Create a REST API in API Gateway, host the application on Amazon ECS in the private subnet, and create a security group for API Gateway to access ECS.", ko: "Amazon API Gateway를 사용하여 REST API를 설계합니다. 프라이빗 서브넷의 Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS에 액세스하기 위해 API Gateway에 대한 보안 그룹을 생성합니다." }
    ],
    answer: ["B"],
    explanation: { en: "API Gateway REST APIs use a VPC Link private integration to reach services behind supported private VPC endpoints such as load balancers or Cloud Map services. This exposes the API while keeping ECS tasks private.", ko: "API Gateway REST API는 VPC Link 프라이빗 통합을 사용하여 로드 밸런서나 Cloud Map 서비스 같은 지원되는 프라이빗 VPC 엔드포인트에 도달합니다. 이를 통해 ECS 태스크를 비공개로 유지하면서 API를 공개할 수 있습니다." },
    why_wrong: {
      A: { en: "The requirement is a REST API, not a stateful WebSocket API.", ko: "요구 사항은 상태 유지 WebSocket API가 아니라 REST API입니다." },
      C: { en: "This uses the wrong API type, and a security group alone does not establish API Gateway private integration.", ko: "잘못된 API 유형을 사용하며 보안 그룹만으로 API Gateway 프라이빗 통합을 설정할 수 없습니다." },
      D: { en: "API Gateway does not reach a private ECS backend merely by assigning a security group; a VPC Link integration is required.", ko: "API Gateway에 보안 그룹을 할당하는 것만으로 프라이빗 ECS 백엔드에 도달할 수 없으며 VPC Link 통합이 필요합니다." }
    }
  },
  {
    id: "exam10-469", number: 469, tags: ["Amazon S3", "S3 Intelligent-Tiering", "S3 Lifecycle", "Unpredictable Access", "Cost Optimization"],
    question: { en: "A company stores collected raw data in an Amazon S3 bucket for different customer analytics. Access patterns depend on the requested analysis and cannot be predicted or controlled. The company wants to reduce S3 costs. Which solution meets these requirements?", ko: "회사는 수집된 원시 데이터를 Amazon S3 버킷에 저장합니다. 이 데이터는 회사 고객을 대신하여 여러 유형의 분석에 사용됩니다. 요청된 분석 유형에 따라 S3 객체에 대한 액세스 패턴이 결정됩니다. 회사는 접속 패턴을 예측하거나 통제할 수 없습니다. 회사는 S3 비용을 줄이고자 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use S3 replication to transition infrequently accessed objects to S3 Standard-IA.", ko: "S3 복제를 사용하여 자주 액세스하지 않는 개체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다." },
      { k: "B", en: "Use an S3 Lifecycle rule to transition objects from S3 Standard to S3 Standard-IA.", ko: "S3 수명 주기 규칙을 사용하여 객체를 S3 Standard에서 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다." },
      { k: "C", en: "Use an S3 Lifecycle rule to transition objects from S3 Standard to S3 Intelligent-Tiering.", ko: "S3 수명 주기 규칙을 사용하여 객체를 S3 Standard에서 S3 Intelligent-Tiering으로 전환합니다." },
      { k: "D", en: "Use S3 Inventory to identify objects that are not accessed and transition them from S3 Standard to S3 Intelligent-Tiering.", ko: "S3 Inventory를 사용하여 S3 Standard에서 S3 Intelligent-Tiering으로 액세스하지 않은 개체를 식별하고 전환합니다." }
    ],
    answer: ["C"],
    explanation: { en: "S3 Intelligent-Tiering automatically moves objects among access tiers as access patterns change. A lifecycle rule can transition the existing objects into this class without predicting which objects will be hot or cold.", ko: "S3 Intelligent-Tiering은 액세스 패턴 변화에 따라 객체를 액세스 계층 간 자동 이동합니다. 수명 주기 규칙으로 어떤 객체가 자주 또는 드물게 사용될지 예측하지 않고 기존 객체를 이 클래스로 전환할 수 있습니다." },
    why_wrong: {
      A: { en: "Replication copies objects for resilience and does not classify them by access frequency or perform a storage-class lifecycle transition.", ko: "복제는 복원력을 위해 객체를 복사하며 액세스 빈도로 분류하거나 스토리지 클래스 수명 주기 전환을 수행하지 않습니다." },
      B: { en: "Standard-IA has retrieval charges and a minimum storage duration, so blindly moving objects is unsuitable when access can become frequent again.", ko: "Standard-IA에는 검색 요금과 최소 저장 기간이 있으므로 액세스가 다시 빈번해질 수 있는 객체를 일괄 이동하기에 부적합합니다." },
      D: { en: "S3 Inventory reports object metadata rather than real-time access frequency, and manually analyzing it adds overhead.", ko: "S3 Inventory는 실시간 액세스 빈도가 아니라 객체 메타데이터를 보고하며 수동 분석에는 운영 부담이 추가됩니다." }
    }
  },
  {
    id: "exam10-470", number: 470, tags: ["Amazon VPC", "IPv6", "Egress-Only Internet Gateway", "Route Table", "Security"],
    question: { en: "A company has an application hosted on Amazon EC2 instances using IPv6 addresses. The application must initiate communication with an external application over the internet, but company policy prohibits the external service from initiating connections to the EC2 instances. What should a solutions architect recommend?", ko: "한 회사에 IPv6 주소를 사용하여 Amazon EC2 인스턴스에서 호스팅되는 애플리케이션이 있습니다. 애플리케이션은 인터넷을 사용하여 다른 외부 애플리케이션과의 통신을 시작해야 합니다. 그러나 회사의 보안 정책에 따르면 외부 서비스는 EC2 인스턴스에 대한 연결을 시작할 수 없습니다. 솔루션 설계자는 이 문제를 해결하기 위해 무엇을 권장해야 합니까?" },
    options: [
      { k: "A", en: "Create a NAT gateway and make it the target in the subnet route table.", ko: "NAT 게이트웨이를 생성하고 이를 서브넷 라우팅 테이블의 대상으로 만듭니다." },
      { k: "B", en: "Create an internet gateway and make it the target in the subnet route table.", ko: "인터넷 게이트웨이를 만들고 이를 서브넷의 라우팅 테이블 대상으로 만듭니다." },
      { k: "C", en: "Create a virtual private gateway and make it the target in the subnet route table.", ko: "가상 프라이빗 게이트웨이를 만들고 이를 서브넷의 라우팅 테이블 대상으로 만듭니다." },
      { k: "D", en: "Create an egress-only internet gateway and make it the target in the subnet route table.", ko: "외부 전용 인터넷 게이트웨이를 만들고 이를 서브넷 라우팅 테이블의 대상으로 만듭니다." }
    ],
    answer: ["D"],
    explanation: { en: "An egress-only internet gateway allows IPv6 instances to initiate outbound internet connections while preventing unsolicited inbound IPv6 connections. The subnet route table sends ::/0 traffic to this gateway.", ko: "송신 전용 인터넷 게이트웨이는 IPv6 인스턴스가 아웃바운드 인터넷 연결을 시작하도록 허용하면서 요청하지 않은 인바운드 IPv6 연결을 차단합니다. 서브넷 라우팅 테이블은 ::/0 트래픽을 이 게이트웨이로 보냅니다." },
    why_wrong: {
      A: { en: "A NAT gateway is used primarily for IPv4 address translation and is not the IPv6 egress-only control requested here.", ko: "NAT 게이트웨이는 주로 IPv4 주소 변환에 사용되며 여기서 요구되는 IPv6 송신 전용 제어가 아닙니다." },
      B: { en: "A regular internet gateway permits routable inbound IPv6 traffic when security rules allow it and does not itself enforce egress-only behavior.", ko: "일반 인터넷 게이트웨이는 보안 규칙이 허용할 때 라우팅 가능한 인바운드 IPv6 트래픽을 허용하며 자체적으로 송신 전용 동작을 강제하지 않습니다." },
      C: { en: "A virtual private gateway terminates VPN or Direct Connect connectivity and does not provide internet egress.", ko: "가상 프라이빗 게이트웨이는 VPN 또는 Direct Connect 연결을 종료하며 인터넷 송신을 제공하지 않습니다." }
    }
  },
  {
    id: "exam10-471", number: 471, tags: ["Amazon S3", "Gateway VPC Endpoint", "Amazon VPC", "Private Connectivity", "Cost Optimization"],
    question: { en: "A company is building an application that runs in containers in a VPC. During development, the application stores and accesses 1 TB of data in Amazon S3 every day. The company wants to minimize cost and prevent the traffic from traversing the internet. Which solution meets these requirements?", ko: "회사에서 VPC의 컨테이너에서 실행되는 애플리케이션을 만들고 있습니다. 애플리케이션은 Amazon S3 버킷에 데이터를 저장하고 액세스합니다. 개발 단계에서 애플리케이션은 매일 Amazon S3에 1TB의 데이터를 저장하고 액세스합니다. 회사는 비용을 최소화하고 가능한 한 트래픽이 인터넷을 통과하지 못하도록 막고자 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Enable S3 Intelligent-Tiering for the S3 bucket.", ko: "S3 버킷에 대해 S3 Intelligent-Tiering을 활성화합니다." },
      { k: "B", en: "Enable S3 Transfer Acceleration for the S3 bucket.", ko: "S3 버킷에 대해 S3 Transfer Acceleration을 활성화합니다." },
      { k: "C", en: "Create a gateway VPC endpoint for Amazon S3 and associate it with all VPC route tables.", ko: "Amazon S3용 게이트웨이 VPC 엔드포인트를 생성합니다. 이 엔드포인트를 VPC의 모든 라우팅 테이블과 연결합니다." },
      { k: "D", en: "Create an interface VPC endpoint for Amazon S3 and associate it with all VPC route tables.", ko: "VPC에서 Amazon S3에 대한 인터페이스 엔드포인트를 생성합니다. 이 엔드포인트를 VPC의 모든 라우팅 테이블과 연결합니다." }
    ],
    answer: ["C"],
    explanation: { en: "An S3 gateway endpoint routes S3 traffic privately over the AWS network without a NAT gateway or internet gateway. Gateway endpoints have no hourly charge and are associated with route tables, making this the lowest-cost option.", ko: "S3 게이트웨이 엔드포인트는 NAT 게이트웨이나 인터넷 게이트웨이 없이 AWS 네트워크를 통해 S3 트래픽을 비공개로 라우팅합니다. 게이트웨이 엔드포인트는 시간당 요금이 없고 라우팅 테이블에 연결되므로 가장 저렴합니다." },
    why_wrong: {
      A: { en: "Intelligent-Tiering optimizes storage-class cost but does not provide private network connectivity.", ko: "Intelligent-Tiering은 스토리지 클래스 비용을 최적화하지만 비공개 네트워크 연결을 제공하지 않습니다." },
      B: { en: "Transfer Acceleration uses edge locations to speed internet transfers and adds cost rather than avoiding internet paths.", ko: "Transfer Acceleration은 인터넷 전송 가속에 엣지 로케이션을 사용하고 비용을 추가하므로 인터넷 경로를 피하지 않습니다." },
      D: { en: "Interface endpoints use subnet ENIs and private DNS rather than route-table associations and incur hourly and data-processing charges.", ko: "인터페이스 엔드포인트는 라우팅 테이블 연결이 아니라 서브넷 ENI와 프라이빗 DNS를 사용하며 시간당 및 데이터 처리 요금이 발생합니다." }
    }
  },
  {
    id: "exam10-472", number: 472, tags: ["Amazon DynamoDB", "DynamoDB Accelerator", "DAX", "Caching", "Performance"],
    question: { en: "A mobile chat application uses Amazon DynamoDB as its data store. Users want to read new messages with the lowest possible latency. A solutions architect must choose an optimal solution requiring minimal application changes. What should the architect do?", ko: "회사에 Amazon DynamoDB 기반 데이터 저장소가 있는 모바일 채팅 애플리케이션이 있습니다. 사용자는 가능한 한 짧은 대기 시간으로 새 메시지를 읽기를 원합니다. 솔루션 설계자는 최소한의 애플리케이션 변경이 필요한 최적의 솔루션을 설계해야 합니다. 솔루션 설계자는 어떤 방법을 선택해야 합니까?" },
    options: [
      { k: "A", en: "Configure Amazon DynamoDB Accelerator (DAX) for the new-messages table and update the code to use the DAX endpoint.", ko: "새 메시지 테이블에 대해 Amazon DynamoDB Accelerator(DAX)를 구성합니다. DAX 끝점을 사용하도록 코드를 업데이트합니다." },
      { k: "B", en: "Add DynamoDB read replicas for increased read load and update the application to use a replica endpoint.", ko: "증가된 읽기 로드를 처리하기 위해 DynamoDB 읽기 복제본을 추가합니다. 읽기 전용 복제본의 읽기 엔드포인트를 가리키도록 애플리케이션을 업데이트합니다." },
      { k: "C", en: "Double the read capacity units for the DynamoDB table and continue using the existing endpoint.", ko: "DynamoDB의 새 메시지 테이블에 대한 읽기 용량 단위 수를 두 배로 늘립니다. 기존 DynamoDB 엔드포인트를 계속 사용합니다." },
      { k: "D", en: "Add Amazon ElastiCache for Redis and update the application to use Redis instead of DynamoDB.", ko: "Redis 캐시용 Amazon ElastiCache를 애플리케이션 스택에 추가합니다. DynamoDB 대신 Redis 캐시 엔드포인트를 가리키도록 애플리케이션을 업데이트합니다." }
    ],
    answer: ["A"],
    explanation: { en: "DAX is a DynamoDB-compatible, fully managed in-memory cache that provides microsecond read latency. The application generally needs only to use the DAX client and endpoint, so changes are minimal.", ko: "DAX는 마이크로초 읽기 지연 시간을 제공하는 DynamoDB 호환 완전관리형 인메모리 캐시입니다. 애플리케이션은 대체로 DAX 클라이언트와 엔드포인트만 사용하면 되므로 변경이 최소화됩니다." },
    why_wrong: {
      B: { en: "DynamoDB does not provide same-Region read replicas with separate read endpoints in this manner.", ko: "DynamoDB는 이 방식의 별도 읽기 엔드포인트가 있는 동일 리전 읽기 복제본을 제공하지 않습니다." },
      C: { en: "More read capacity improves throughput but does not provide DAX's microsecond cache latency.", ko: "읽기 용량 증가는 처리량을 높이지만 DAX의 마이크로초 캐시 지연 시간을 제공하지 않습니다." },
      D: { en: "A custom Redis cache requires substantial application logic and cache-consistency management.", ko: "사용자 지정 Redis 캐시는 상당한 애플리케이션 로직과 캐시 일관성 관리가 필요합니다." }
    }
  },
  {
    id: "exam10-473", number: 473, tags: ["Amazon CloudFront", "Application Load Balancer", "Static Content", "Caching", "Cost Optimization"],
    question: { en: "A company hosts a website on Amazon EC2 instances behind an Application Load Balancer. The website serves static content. Traffic is increasing, and the company is concerned about rising costs. Which solution should be used?", ko: "회사는 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스에서 웹 사이트를 호스팅합니다. 웹 사이트는 정적 콘텐츠를 제공합니다. 웹 사이트 트래픽이 증가하고 있으며 회사는 잠재적인 비용 증가에 대해 우려하고 있습니다." },
    options: [
      { k: "A", en: "Create an Amazon CloudFront distribution to cache static files at edge locations.", ko: "Amazon CloudFront 배포를 생성하여 엣지 로케이션에서 정적 파일을 캐시합니다." },
      { k: "B", en: "Create an Amazon ElastiCache cluster and connect the ALB to it to serve cached files.", ko: "Amazon ElastiCache 클러스터를 생성합니다. ALB를 ElastiCache 클러스터에 연결하여 캐시된 파일을 제공합니다." },
      { k: "C", en: "Create an AWS WAF web ACL, associate it with the ALB, and add rules to cache static files.", ko: "AWS WAF 웹 ACL을 생성하고 ALB와 연결합니다. 웹 ACL에 규칙을 추가하여 정적 파일을 캐시합니다." },
      { k: "D", en: "Create a second ALB in another Region and route users to the closest Region to minimize transfer cost.", ko: "대체 AWS 리전에서 두 번째 ALB를 생성합니다. 사용자 트래픽을 가장 가까운 리전으로 라우팅하여 데이터 전송 비용을 최소화합니다." }
    ],
    answer: ["A"],
    explanation: { en: "CloudFront caches static objects near users, reducing requests and outbound transfer from the ALB and EC2 origin while improving latency.", ko: "CloudFront는 사용자 가까이에서 정적 객체를 캐시하여 ALB와 EC2 오리진의 요청 및 아웃바운드 전송을 줄이고 지연 시간을 개선합니다." },
    why_wrong: {
      B: { en: "ElastiCache is a database/application data cache and an ALB cannot use it as a static-file origin in this way.", ko: "ElastiCache는 데이터베이스 및 애플리케이션 데이터 캐시이며 ALB가 이 방식으로 정적 파일 오리진으로 사용할 수 없습니다." },
      C: { en: "AWS WAF filters web requests and does not cache content.", ko: "AWS WAF는 웹 요청을 필터링하며 콘텐츠를 캐시하지 않습니다." },
      D: { en: "Duplicating the stack in another Region adds infrastructure cost and does not provide edge caching.", ko: "다른 리전에 스택을 복제하면 인프라 비용이 추가되고 엣지 캐싱을 제공하지 않습니다." }
    }
  },
  {
    id: "exam10-474", number: 474, tags: ["AWS Transit Gateway", "Transit Gateway Peering", "Amazon VPC", "Multi-Region", "Networking"],
    question: { en: "A company has multiple VPCs across AWS Regions to run isolated workloads. A new application requires every VPC to communicate with every other VPC in all Regions. Which solution meets this requirement with the least management effort?", ko: "회사는 다른 리전의 워크로드와 격리된 워크로드를 지원하고 실행하기 위해 AWS 리전에 여러 VPC를 보유하고 있습니다. 최근 애플리케이션 시작 요구 사항으로 인해 회사의 VPC는 모든 지역의 다른 모든 VPC와 통신해야 합니다. 최소한의 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use VPC peering within each Region and inter-Region VPC peering between every VPC.", ko: "VPC 피어링을 사용하여 단일 리전에서 VPC 통신을 관리합니다. 리전 간 VPC 피어링을 사용하여 VPC 통신을 관리합니다." },
      { k: "B", en: "Use AWS Direct Connect gateways in every Region to connect the VPCs and manage VPC communication.", ko: "모든 지역에서 AWS Direct Connect 게이트웨이를 사용하여 여러 지역에서 VPC를 연결하고 VPC 통신을 관리합니다." },
      { k: "C", en: "Use AWS Transit Gateway within each Region and inter-Region Transit Gateway peering to connect the Regions.", ko: "AWS Transit Gateway를 사용하여 단일 리전에서 VPC 통신을 관리하고 리전 간 Transit Gateway 피어링을 사용하여 VPC 통신을 관리합니다." },
      { k: "D", en: "Use AWS PrivateLink in every Region to connect the VPCs and manage VPC communication.", ko: "모든 지역에서 AWS PrivateLink를 사용하여 여러 지역에서 VPC를 연결하고 VPC 통신을 관리합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Transit Gateway provides hub-and-spoke connectivity for many VPCs in a Region, and Transit Gateway peering extends that connectivity across Regions. This avoids a large mesh of individual peering connections.", ko: "Transit Gateway는 한 리전의 여러 VPC에 허브 앤 스포크 연결을 제공하고 Transit Gateway 피어링은 연결을 리전 간으로 확장합니다. 따라서 대규모 개별 피어링 메시를 피할 수 있습니다." },
    why_wrong: {
      A: { en: "Full-mesh VPC peering grows rapidly and requires many connections and route updates because peering is not transitive.", ko: "VPC 피어링은 전이적이지 않으므로 전체 메시 피어링은 연결과 경로 업데이트 수가 빠르게 증가합니다." },
      B: { en: "Direct Connect is intended for private connectivity from external networks to AWS, not as the simplest VPC-to-VPC mesh.", ko: "Direct Connect는 외부 네트워크에서 AWS로의 비공개 연결용이며 가장 간단한 VPC 간 메시가 아닙니다." },
      D: { en: "PrivateLink exposes specific services privately and does not provide general any-to-any VPC routing.", ko: "PrivateLink는 특정 서비스를 비공개로 노출하며 일반적인 모든 VPC 간 라우팅을 제공하지 않습니다." }
    }
  },
  {
    id: "exam10-475", number: 475, tags: ["Amazon EFS", "AWS Backup", "Cross-Region Backup", "Amazon ECS", "Multi-AZ", "Disaster Recovery"],
    question: { en: "A company is designing a durable containerized application on Amazon ECS. It needs a shared file system with mount targets in each Availability Zone in the Region and must recover data in another AWS Region with an RPO of 8 hours. The architect will manage replication through AWS Backup. Which solution meets these requirements?", ko: "회사에서 Amazon Elastic Container Service(Amazon ECS)를 사용할 컨테이너화된 애플리케이션을 설계하고 있습니다. 애플리케이션은 내구성이 뛰어나고 RPO(복구 지점 목표)가 8시간인 다른 AWS 리전에 데이터를 복구할 수 있는 공유 파일 시스템에 액세스해야 합니다. 파일 시스템은 리전 내의 각 가용 영역에 탑재 대상을 제공해야 합니다. 솔루션 설계자는 AWS Backup을 사용하여 다른 리전에 대한 복제를 관리하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Amazon FSx for Windows File Server with a Multi-AZ deployment", ko: "다중 AZ 배포가 있는 Windows 파일 서버용 Amazon FSx" },
      { k: "B", en: "Amazon FSx for NetApp ONTAP with a Multi-AZ deployment", ko: "다중 AZ 배포가 있는 NetApp ONTAP용 Amazon FSx" },
      { k: "C", en: "Amazon Elastic File System (Amazon EFS) with the Standard storage class", ko: "표준 스토리지 클래스가 있는 Amazon Elastic File System(Amazon EFS)" },
      { k: "D", en: "Amazon FSx for OpenZFS", ko: "OpenZFS용 Amazon FSx" }
    ],
    answer: ["C"],
    explanation: { en: "Regional EFS Standard stores data across multiple AZs and provides a mount target in each selected AZ for ECS tasks. AWS Backup supports scheduled EFS backups and cross-Region copy to meet the RPO.", ko: "리전 EFS Standard는 여러 AZ에 데이터를 저장하고 ECS 태스크를 위해 선택한 각 AZ에 탑재 대상을 제공합니다. AWS Backup은 예약 EFS 백업과 교차 리전 복사를 지원하여 RPO를 충족합니다." },
    why_wrong: {
      A: { en: "FSx for Windows provides SMB rather than the broadly supported Linux NFS shared file system expected for this ECS design.", ko: "FSx for Windows는 이 ECS 설계에서 기대하는 Linux NFS 공유 파일 시스템 대신 SMB를 제공합니다." },
      B: { en: "FSx for ONTAP can be highly available, but it is more complex and does not match the simple regional mount-target requirement as directly as EFS.", ko: "FSx for ONTAP도 고가용성을 제공할 수 있지만 더 복잡하고 EFS만큼 단순한 리전 탑재 대상 요구에 직접 부합하지 않습니다." },
      D: { en: "FSx for OpenZFS does not provide the same regional multi-AZ mount-target model as EFS Standard.", ko: "FSx for OpenZFS는 EFS Standard와 같은 리전 다중 AZ 탑재 대상 모델을 제공하지 않습니다." }
    }
  },
  {
    id: "exam10-476", number: 476, tags: ["AWS IAM", "IAM Policy", "IAM Group", "Least Privilege", "Security"],
    question: { en: "A company expects rapid growth and must configure existing users and grant permissions to new AWS users. A solutions architect will create IAM groups based on departments. What is the most secure additional action for granting permissions to new users?", ko: "회사는 가까운 장래에 급속한 성장을 기대하고 있습니다. 솔루션 설계자는 기존 사용자를 구성하고 AWS에서 새 사용자에게 권한을 부여해야 합니다. 솔루션 설계자는 IAM 그룹을 만들기로 결정했습니다. 솔루션 설계자는 부서를 기반으로 IAM 그룹에 새 사용자를 추가합니다. 새 사용자에게 권한을 부여하는 가장 안전한 추가 작업은 무엇입니까?" },
    options: [
      { k: "A", en: "Apply service control policies (SCPs) to manage access permissions.", ko: "서비스 제어 정책(SCP)을 적용하여 액세스 권한을 관리합니다." },
      { k: "B", en: "Create a least-privilege IAM role and attach the role to the IAM group.", ko: "최소 권한이 있는 IAM 역할을 생성합니다. 역할을 IAM 그룹에 연결합니다." },
      { k: "C", en: "Create a least-privilege IAM policy and attach the policy to the IAM group.", ko: "최소 권한을 부여하는 IAM 정책을 생성합니다. 정책을 IAM 그룹에 연결합니다." },
      { k: "D", en: "Create an IAM role and attach a permissions boundary that defines the maximum permissions.", ko: "IAM 역할을 생성합니다. 최대 권한을 정의하는 권한 경계와 역할을 연결합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Attach a least-privilege identity policy to each department group. Users added to the group inherit only the permissions required for that department, which is secure and simple to administer.", ko: "각 부서 그룹에 최소 권한 자격 증명 정책을 연결합니다. 그룹에 추가된 사용자는 해당 부서에 필요한 권한만 상속하므로 안전하고 관리가 간단합니다." },
    why_wrong: {
      A: { en: "SCPs set organization-wide permission guardrails and do not directly grant permissions to IAM users or groups.", ko: "SCP는 조직 전체 권한 가드레일을 설정하며 IAM 사용자나 그룹에 직접 권한을 부여하지 않습니다." },
      B: { en: "IAM roles cannot be attached to IAM groups; policies are attached to groups.", ko: "IAM 역할은 IAM 그룹에 연결할 수 없으며 정책을 그룹에 연결합니다." },
      D: { en: "A permissions boundary limits an identity's maximum permissions but does not grant the department permissions itself.", ko: "권한 경계는 자격 증명의 최대 권한을 제한하지만 부서 권한 자체를 부여하지 않습니다." }
    }
  },
  {
    id: "exam10-477", number: 477, tags: ["AWS IAM", "Amazon S3", "IAM Policy", "Least Privilege", "Resource ARN"],
    question: { en: "A group needs permission to list an Amazon S3 bucket and delete objects from it. An administrator attached a policy that allows s3:ListBucket and s3:DeleteObject on arn:aws:s3:::bucket-name, but the group cannot delete objects. Following least privilege, which statement should be added to fix object deletion?", ko: "그룹에는 Amazon S3 버킷을 나열하고 해당 버킷에서 객체를 삭제할 수 있는 권한이 필요합니다. 관리자는 버킷에 대한 액세스 권한을 제공하기 위해 s3:ListBucket 및 s3:DeleteObject를 버킷 ARN에 허용하는 IAM 정책을 생성하고 해당 정책을 그룹에 적용했습니다. 그룹은 버킷의 객체를 삭제할 수 없습니다. 회사는 최소 권한 액세스 규칙을 따릅니다. 버킷 액세스를 수정하기 위해 솔루션 설계자가 정책에 추가해야 하는 설명은 무엇입니까?" },
    options: [
      { k: "A", en: "Allow s3:*Object on arn:aws:s3:::bucket-name/*.", ko: "arn:aws:s3:::bucket-name/* 리소스에 대해 s3:*Object 작업을 허용합니다." },
      { k: "B", en: "Allow s3:* on arn:aws:s3:::bucket-name/*.", ko: "arn:aws:s3:::bucket-name/* 리소스에 대해 s3:* 작업을 허용합니다." },
      { k: "C", en: "Allow s3:DeleteObject on arn:aws:s3:::bucket-name*.", ko: "arn:aws:s3:::bucket-name* 리소스에 대해 s3:DeleteObject 작업을 허용합니다." },
      { k: "D", en: "Allow s3:DeleteObject on arn:aws:s3:::bucket-name/*.", ko: "arn:aws:s3:::bucket-name/* 리소스에 대해 s3:DeleteObject 작업을 허용합니다." }
    ],
    answer: ["D"],
    explanation: { en: "ListBucket applies to the bucket ARN, but DeleteObject applies to object resources. The object ARN must include /* after the bucket name, and granting only DeleteObject follows least privilege.", ko: "ListBucket은 버킷 ARN에 적용되지만 DeleteObject는 객체 리소스에 적용됩니다. 객체 ARN은 버킷 이름 뒤에 /*를 포함해야 하며 DeleteObject만 허용하는 것이 최소 권한 원칙에 맞습니다." },
    why_wrong: {
      A: { en: "The wildcard action grants additional object operations beyond the required DeleteObject permission.", ko: "와일드카드 작업은 필요한 DeleteObject 외의 추가 객체 작업까지 허용합니다." },
      B: { en: "s3:* grants all S3 actions on the objects and violates least privilege.", ko: "s3:*는 객체에 대한 모든 S3 작업을 허용하여 최소 권한을 위반합니다." },
      C: { en: "The object resource ARN must use a slash before the object wildcard: bucket-name/*.", ko: "객체 리소스 ARN은 객체 와일드카드 앞에 슬래시를 사용한 bucket-name/* 형식이어야 합니다." }
    }
  },
  {
    id: "exam10-478", number: 478, tags: ["Amazon S3", "S3 Object Lock", "S3 Versioning", "Static Website", "Compliance", "Public Read"],
    question: { en: "A public forum must share hundreds of publicly readable files. No one may modify or delete a file before a specified future date. Which solution meets these requirements most securely?", ko: "포럼은 대중과 정보를 공유해야 합니다. 이 정보에는 공개적으로 읽을 수 있어야 하는 수백 개의 파일이 포함됩니다. 지정된 미래 날짜 이전에 누구든지 파일을 수정하거나 삭제하는 것은 금지됩니다. 가장 안전한 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Upload all files to an S3 static website bucket and grant read-only IAM permissions to all AWS principals until the date.", ko: "정적 웹 사이트 호스팅용으로 구성된 Amazon S3 버킷에 모든 파일을 업로드합니다. 지정된 날짜까지 S3 버킷에 액세스하는 모든 AWS 보안 주체에게 읽기 전용 IAM 권한을 부여합니다." },
      { k: "B", en: "Create a new versioned S3 bucket, apply S3 Object Lock retention until the specified date, configure static website hosting, and use a bucket policy for public read access.", ko: "S3 버전 관리가 활성화된 새 Amazon S3 버킷을 생성합니다. 지정된 날짜에 따라 보존 기간이 있는 S3 Object Lock을 사용하십시오. 정적 웹 사이트 호스팅을 위해 S3 버킷을 구성합니다. 객체에 대한 읽기 전용 액세스를 허용하도록 S3 버킷 정책을 설정합니다." },
      { k: "C", en: "Create a versioned S3 bucket and invoke Lambda on modifications or deletions to replace objects with their original versions from a private bucket.", ko: "S3 버전 관리가 활성화된 새 Amazon S3 버킷을 생성합니다. 객체 수정 또는 삭제 시 AWS Lambda 함수를 실행하도록 이벤트 트리거를 구성합니다. 객체를 프라이빗 S3 버킷의 원래 버전으로 바꾸도록 Lambda 함수를 구성합니다." },
      { k: "D", en: "Upload files to an S3 static website bucket, place them in a folder, apply S3 Object Lock to that folder, and grant read-only IAM permissions to all principals.", ko: "정적 웹 사이트 호스팅용으로 구성된 Amazon S3 버킷에 모든 파일을 업로드합니다. 파일이 포함된 폴더를 선택합니다. 지정된 날짜에 따라 보존 기간이 있는 S3 Object Lock을 사용하십시오. S3 버킷에 액세스하는 모든 AWS 보안 주체에게 읽기 전용 IAM 권한을 부여합니다." }
    ],
    answer: ["B"],
    explanation: { en: "S3 Object Lock requires versioning and enforces WORM retention for each protected object version until its retain-until date. A bucket policy can provide public read access while Object Lock prevents premature modification or deletion.", ko: "S3 Object Lock은 버전 관리를 요구하며 보호된 각 객체 버전에 대해 보존 종료일까지 WORM 보존을 강제합니다. 버킷 정책으로 공개 읽기 액세스를 제공하면서 Object Lock으로 조기 수정이나 삭제를 방지할 수 있습니다." },
    why_wrong: {
      A: { en: "Read-only public permissions do not prevent privileged administrators from deleting or replacing objects.", ko: "공개 읽기 전용 권한만으로는 권한 있는 관리자가 객체를 삭제하거나 교체하는 것을 방지하지 못합니다." },
      C: { en: "A Lambda restoration is reactive and leaves a window in which objects are missing or modified; it is not immutable retention.", ko: "Lambda 복원은 사후 대응이므로 객체가 누락되거나 변경된 상태의 시간이 생기며 불변 보존이 아닙니다." },
      D: { en: "S3 Object Lock is configured for versioned objects and bucket retention settings, not by selecting an S3 folder.", ko: "S3 Object Lock은 버전 관리된 객체와 버킷 보존 설정에 구성하며 S3 폴더를 선택하여 적용하지 않습니다." }
    }
  },
  {
    id: "exam10-479", number: 479, tags: ["AWS CloudFormation", "Infrastructure as Code", "Amazon EC2 Auto Scaling", "Application Load Balancer", "Amazon RDS", "Multi-AZ"],
    question: { en: "A company manually provisioned a prototype website infrastructure containing an Auto Scaling group, an Application Load Balancer, and an Amazon RDS database. After validation, it wants automated and immediate deployment of development and production infrastructure across two Availability Zones. What should a solutions architect recommend?", ko: "회사에서 필요한 인프라를 수동으로 프로비저닝하여 새 웹 사이트의 인프라 프로토타입을 만들고 있습니다. 이 인프라에는 Auto Scaling 그룹, Application Load Balancer 및 Amazon RDS 데이터베이스가 포함됩니다. 구성이 철저히 검증된 후 회사는 자동화된 방식으로 두 가용 영역에서 개발 및 프로덕션 사용을 위한 인프라를 즉시 배포할 수 있는 기능을 원합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?" },
    options: [
      { k: "A", en: "Use AWS Systems Manager to clone and provision the prototype infrastructure in two Availability Zones.", ko: "AWS Systems Manager를 사용하여 2개의 가용 영역에서 프로토타입 인프라를 복제하고 프로비저닝합니다." },
      { k: "B", en: "Use the prototype as a guide to define the infrastructure in an AWS CloudFormation template and deploy it with CloudFormation.", ko: "프로토타입 인프라를 가이드로 사용하여 인프라를 템플릿으로 정의합니다. AWS CloudFormation으로 인프라를 배포하십시오." },
      { k: "C", en: "Use AWS Config to record the prototype resource inventory and deploy the infrastructure to two Availability Zones.", ko: "AWS Config를 사용하여 프로토타입 인프라에서 사용되는 리소스 인벤토리를 기록합니다. AWS Config를 사용하여 프로토타입 인프라를 두 개의 가용 영역에 배포합니다." },
      { k: "D", en: "Use AWS Elastic Beanstalk automatic creation to configure and deploy a new environment in two Availability Zones.", ko: "AWS Elastic Beanstalk를 사용하고 프로토타입 인프라에 대한 자동 창조를 사용하도록 구성하여 2개의 가용 영역에 새 환경을 자동으로 배포합니다." }
    ],
    answer: ["B"],
    explanation: { en: "CloudFormation models the complete, validated infrastructure as code and repeatedly deploys consistent stacks for development and production across Availability Zones.", ko: "CloudFormation은 검증된 전체 인프라를 코드로 모델링하고 개발 및 프로덕션용 일관된 스택을 여러 가용 영역에 반복 배포합니다." },
    why_wrong: {
      A: { en: "Systems Manager manages and automates operations on resources but does not clone an arbitrary architecture as an infrastructure template.", ko: "Systems Manager는 리소스 운영을 관리하고 자동화하지만 임의의 아키텍처를 인프라 템플릿으로 복제하지 않습니다." },
      C: { en: "AWS Config records configurations and evaluates compliance; it does not deploy the recorded resources.", ko: "AWS Config는 구성을 기록하고 규정 준수를 평가하며 기록된 리소스를 배포하지 않습니다." },
      D: { en: "Elastic Beanstalk is an application platform and does not directly reproduce an arbitrary validated stack including all requested resources and settings.", ko: "Elastic Beanstalk는 애플리케이션 플랫폼이며 요청된 모든 리소스와 설정을 포함한 임의의 검증 스택을 그대로 재현하지 않습니다." }
    }
  },
  {
    id: "exam10-480", number: 480, tags: ["Amazon S3", "VPC Endpoint", "Private Connectivity", "Amazon EC2", "Compliance"],
    question: { en: "A business application is hosted on Amazon EC2 and uses Amazon S3 for encrypted object storage. The chief information security officer requires that application traffic between the two services must not traverse the public internet. Which feature should a solutions architect use?", ko: "비즈니스 애플리케이션은 Amazon EC2에서 호스팅되며 암호화된 객체 스토리지에 Amazon S3를 사용합니다. 최고 정보 보안 책임자는 두 서비스 간의 애플리케이션 트래픽이 공용 인터넷을 통과해서는 안 된다고 지시했습니다. 규정 준수 요구 사항을 충족하기 위해 솔루션 설계자가 사용해야 하는 기능은 무엇입니까?" },
    options: [
      { k: "A", en: "AWS Key Management Service (AWS KMS)", ko: "AWS 키 관리 서비스(AWS KMS)" },
      { k: "B", en: "VPC endpoint", ko: "VPC 엔드포인트" },
      { k: "C", en: "Private subnet", ko: "사설 서브넷" },
      { k: "D", en: "Virtual private gateway", ko: "가상 프라이빗 게이트웨이" }
    ],
    answer: ["B"],
    explanation: { en: "A VPC endpoint provides private connectivity from the VPC to Amazon S3 over the AWS network, so EC2-to-S3 traffic does not traverse the public internet.", ko: "VPC 엔드포인트는 VPC에서 Amazon S3로 AWS 네트워크를 통한 비공개 연결을 제공하므로 EC2와 S3 간 트래픽이 공용 인터넷을 통과하지 않습니다." },
    why_wrong: {
      A: { en: "KMS manages encryption keys but does not create the private network path.", ko: "KMS는 암호화 키를 관리하지만 비공개 네트워크 경로를 만들지 않습니다." },
      C: { en: "A private subnet alone does not provide connectivity to S3; it still needs an endpoint or a routed egress path.", ko: "프라이빗 서브넷만으로는 S3 연결을 제공하지 않으며 엔드포인트나 라우팅된 송신 경로가 필요합니다." },
      D: { en: "A virtual private gateway provides VPN or Direct Connect connectivity to external networks, not private access to S3.", ko: "가상 프라이빗 게이트웨이는 외부 네트워크에 VPN 또는 Direct Connect 연결을 제공하며 S3 비공개 액세스용이 아닙니다." }
    }
  },
  {
    id: "exam10-481", number: 481, tags: ["Amazon ElastiCache", "Amazon RDS", "Write-Through Cache", "Caching"],
    question: { en: "A company hosts a three-tier web application in AWS. A Multi-AZ Amazon RDS for MySQL database forms the database tier, and Amazon ElastiCache forms the cache tier. The company wants a caching strategy that adds or updates cached data whenever a customer adds an item to the database. Cached data must always match the database. Which caching strategy meets these requirements?", ko: "회사는 AWS 클라우드에서 3계층 웹 애플리케이션을 호스팅합니다. MySQL용 다중 AZ Amazon RDS 서버는 데이터베이스 계층을 형성하고 Amazon ElastiCache는 캐시 계층을 형성합니다. 회사는 고객이 데이터베이스에 항목을 추가할 때 캐시의 데이터를 추가하거나 업데이트하는 캐싱 전략을 원합니다. 캐시의 데이터는 항상 데이터베이스의 데이터와 일치해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Implement a lazy-loading caching strategy.", ko: "지연 로딩 캐싱 전략을 구현합니다." },
      { k: "B", en: "Implement a write-through caching strategy.", ko: "write-through 캐싱 전략을 구현합니다." },
      { k: "C", en: "Implement a caching strategy with an additional TTL.", ko: "추가 TTL 캐싱 전략을 구현합니다." },
      { k: "D", en: "Implement an AWS AppConfig caching strategy.", ko: "AWS AppConfig 캐싱 전략을 구현합니다." }
    ],
    answer: ["B"],
    explanation: { en: "With write-through caching, the application updates the cache whenever it writes to the database. This keeps cached records current and makes newly written data immediately available from ElastiCache.", ko: "Write-through 캐싱에서는 애플리케이션이 데이터베이스에 쓸 때마다 캐시도 업데이트합니다. 따라서 캐시된 레코드가 최신 상태로 유지되고 새로 기록된 데이터를 ElastiCache에서 즉시 사용할 수 있습니다." },
    why_wrong: {
      A: { en: "Lazy loading populates the cache only after a cache miss, so newly written database data is not immediately placed in the cache.", ko: "지연 로딩은 캐시 미스가 발생한 뒤에만 캐시를 채우므로 새로 기록된 데이터가 즉시 캐시에 추가되지 않습니다." },
      C: { en: "A TTL eventually expires entries but does not ensure that every database write immediately updates the cached value.", ko: "TTL은 항목을 나중에 만료시키지만 모든 데이터베이스 쓰기가 캐시 값을 즉시 갱신하도록 보장하지 않습니다." },
      D: { en: "AWS AppConfig deploys and validates application configuration; it is not a database caching strategy.", ko: "AWS AppConfig는 애플리케이션 구성을 배포하고 검증하는 서비스이며 데이터베이스 캐싱 전략이 아닙니다." }
    }
  },
  {
    id: "exam10-482", number: 482, tags: ["AWS DataSync", "Amazon S3", "Data Migration", "Encryption", "Operational Excellence"],
    question: { en: "A company wants to migrate 100 GB of log data from an on-premises location to an Amazon S3 bucket. The company has a 100 Mbps internet connection on premises. Data transferred to S3 must be encrypted, and new data will be stored directly in S3. Which solution meets these requirements with the least operational overhead?", ko: "회사는 온프레미스 위치에서 Amazon S3 버킷으로 100GB의 기록 데이터를 마이그레이션하려고 합니다. 이 회사는 온프레미스에 100Mbps 인터넷 연결이 있습니다. 회사는 S3 버킷으로 전송되는 데이터를 암호화해야 합니다. 회사는 새로운 데이터를 Amazon S3에 직접 저장합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use the AWS CLI s3 sync command to move the data directly to the S3 bucket.", ko: "AWS CLI에서 s3 sync 명령을 사용하여 데이터를 S3 버킷으로 직접 이동합니다." },
      { k: "B", en: "Use AWS DataSync to migrate the data from the on-premises location to the S3 bucket.", ko: "AWS DataSync를 사용하여 온프레미스 위치에서 S3 버킷으로 데이터를 마이그레이션합니다." },
      { k: "C", en: "Use AWS Snowball to move the data to the S3 bucket.", ko: "AWS Snowball을 사용하여 데이터를 S3 버킷으로 이동합니다." },
      { k: "D", en: "Configure an IPsec VPN from the on-premises location to AWS. Use the AWS CLI s3 cp command to move the data directly to the S3 bucket.", ko: "온프레미스 위치에서 AWS로 IPsec VPN을 설정합니다. AWS CLI에서 s3 cp 명령을 사용하여 데이터를 S3 버킷으로 직접 이동합니다." }
    ],
    answer: ["B"],
    explanation: { en: "AWS DataSync is a managed online data-transfer service that encrypts data in transit with TLS and automates scheduling, monitoring, integrity verification, and retries. A 100 Mbps connection is sufficient for this 100 GB one-time migration.", ko: "AWS DataSync는 TLS로 전송 중 데이터를 암호화하고 일정, 모니터링, 무결성 검증 및 재시도를 자동화하는 관리형 온라인 데이터 전송 서비스입니다. 100Mbps 연결은 이 100GB 일회성 마이그레이션에 충분합니다." },
    why_wrong: {
      A: { en: "The CLI can copy the data but requires the company to operate, monitor, validate, and retry the transfer itself.", ko: "CLI로 데이터를 복사할 수 있지만 전송 운영, 모니터링, 검증 및 재시도를 회사가 직접 관리해야 합니다." },
      C: { en: "Snowball adds device-ordering and shipping overhead that is unnecessary for only 100 GB over a 100 Mbps link.", ko: "100Mbps 연결로 100GB만 전송하는 경우 Snowball의 장치 주문과 배송 오버헤드는 불필요합니다." },
      D: { en: "A VPN and manual CLI copy add configuration and operational overhead; S3 transfers already support TLS.", ko: "VPN과 수동 CLI 복사는 구성 및 운영 오버헤드를 늘리며 S3 전송은 이미 TLS를 지원합니다." }
    }
  },
  {
    id: "exam10-483", number: 483, tags: ["Amazon ECS", "AWS Fargate", "Scheduled Tasks", "Windows Containers", "Cost Optimization"],
    question: { en: "A company containerized a Windows job that runs on .NET 6 in a Windows container. The job must run in AWS every 10 minutes and takes 1 to 3 minutes to complete. Which solution meets these requirements most cost-effectively?", ko: "회사에서 Windows 컨테이너 아래의 .NET 6 Framework에서 실행되는 Windows 작업을 컨테이너화했습니다. 회사는 AWS 클라우드에서 이 작업을 실행하려고 합니다. 작업은 10분마다 실행됩니다. 작업의 실행 시간은 1분에서 3분 사이입니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create an AWS Lambda function from the job's container image and configure Amazon EventBridge to invoke it every 10 minutes.", ko: "작업의 컨테이너 이미지를 기반으로 AWS Lambda 함수를 생성합니다. 10분마다 함수를 호출하도록 Amazon EventBridge를 구성합니다." },
      { k: "B", en: "Use AWS Batch to create a job that uses AWS Fargate resources. Schedule the job to run every 10 minutes.", ko: "AWS Batch를 사용하여 AWS Fargate 리소스를 사용하는 작업을 생성합니다. 10분마다 실행되도록 작업 일정을 구성합니다." },
      { k: "C", en: "Run the job with Amazon ECS on AWS Fargate. Create a scheduled task from the job's container image to run every 10 minutes.", ko: "AWS Fargate에서 Amazon Elastic Container Service(Amazon ECS)를 사용하여 작업을 실행합니다. 10분마다 실행할 작업의 컨테이너 이미지를 기반으로 예약된 작업을 만듭니다." },
      { k: "D", en: "Run the job with Amazon ECS on AWS Fargate as a standalone task and use Windows Task Scheduler to run it every 10 minutes.", ko: "AWS Fargate에서 Amazon Elastic Container Service(Amazon ECS)를 사용하여 작업을 실행합니다. 작업의 컨테이너 이미지를 기반으로 독립 실행형 작업을 생성합니다. Windows 작업 스케줄러를 사용하여 10분마다 작업을 실행합니다." }
    ],
    answer: ["C"],
    explanation: { en: "An ECS scheduled task on Fargate runs the existing Windows container only when needed and incurs compute charges for the task duration, without maintaining servers or an always-running container.", ko: "Fargate의 ECS 예약 태스크는 필요할 때만 기존 Windows 컨테이너를 실행하고 태스크 실행 시간만큼 비용이 발생하므로 서버나 상시 실행 컨테이너를 유지할 필요가 없습니다." },
    why_wrong: {
      A: { en: "Lambda container images must use a Lambda-compatible runtime and Lambda does not run arbitrary Windows container images.", ko: "Lambda 컨테이너 이미지는 Lambda 호환 런타임을 사용해야 하며 임의의 Windows 컨테이너 이미지를 실행하지 않습니다." },
      B: { en: "AWS Batch adds a batch scheduling layer that is unnecessary for a simple periodic task and is less direct than an ECS scheduled task.", ko: "AWS Batch는 단순 주기 작업에 불필요한 배치 스케줄링 계층을 추가하며 ECS 예약 태스크보다 직접적이지 않습니다." },
      D: { en: "A standalone task would need to remain running for Windows Task Scheduler to trigger the job, increasing cost and operational effort.", ko: "Windows 작업 스케줄러가 작업을 실행하려면 독립 실행형 태스크가 계속 실행되어야 하므로 비용과 운영 부담이 늘어납니다." }
    }
  },
  {
    id: "exam10-484", number: 484, tags: ["AWS Organizations", "AWS IAM Identity Center", "AWS Directory Service", "Multi-Account", "Choose two"],
    question: { en: "A company is moving from many independently operated AWS accounts to an integrated multi-account architecture. It plans to create many new AWS accounts for different business units and must authenticate access to those accounts by using a centralized corporate directory service. Which combination of actions should a solutions architect recommend? (Choose two.)", ko: "한 회사가 많은 독립 실행형 AWS 계정에서 통합된 다중 계정 아키텍처로 이동하려고 합니다. 이 회사는 다양한 사업부에 대해 많은 새 AWS 계정을 생성할 계획입니다. 회사는 중앙 집중식 회사 디렉터리 서비스를 사용하여 이러한 AWS 계정에 대한 액세스를 인증해야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자가 권장해야 하는 작업 조합은 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Create a new organization in AWS Organizations with all features enabled. Create the new AWS accounts in the organization.", ko: "모든 기능을 켠 상태에서 AWS Organizations에 새 조직을 만듭니다. 조직에서 새 AWS 계정을 생성합니다." },
      { k: "B", en: "Set up an Amazon Cognito identity pool. Configure AWS IAM Identity Center to accept Amazon Cognito authentication.", ko: "Amazon Cognito 자격 증명 풀을 설정합니다. Amazon Cognito 인증을 수락하도록 AWS IAM Identity Center(AWS Single Sign-On)를 구성합니다." },
      { k: "C", en: "Configure service control policies (SCPs) to manage the AWS accounts. Add AWS IAM Identity Center to AWS Directory Service.", ko: "AWS 계정을 관리하기 위해 서비스 제어 정책(SCP)을 구성합니다. AWS IAM Identity Center(AWS Single Sign-On)를 AWS Directory Service에 추가합니다." },
      { k: "D", en: "Create a new organization in AWS Organizations. Configure the organization's authentication mechanism to use AWS Directory Service directly.", ko: "AWS Organizations에서 새 조직을 생성합니다. AWS Directory Service를 직접 사용하도록 조직의 인증 메커니즘을 구성합니다." },
      { k: "E", en: "Set up AWS IAM Identity Center in the organization and integrate it with the company's corporate directory service.", ko: "조직에서 AWS IAM Identity Center(AWS Single Sign-On)를 설정합니다. IAM Identity Center를 구성하고 회사의 회사 디렉터리 서비스와 통합합니다." }
    ],
    answer: ["A", "E"],
    explanation: { en: "AWS Organizations centrally creates and governs the member accounts. IAM Identity Center integrates with the corporate directory and provides centralized single sign-on and permission assignments across those accounts.", ko: "AWS Organizations는 멤버 계정을 중앙에서 생성하고 관리합니다. IAM Identity Center는 회사 디렉터리와 통합되어 해당 계정 전체에 중앙 집중식 Single Sign-On과 권한 할당을 제공합니다." },
    why_wrong: {
      B: { en: "Amazon Cognito is intended primarily for application end-user identities and is not the corporate workforce directory integration for multi-account access.", ko: "Amazon Cognito는 주로 애플리케이션 최종 사용자 자격 증명용이며 다중 계정 접근을 위한 기업 인력 디렉터리 통합이 아닙니다." },
      C: { en: "SCPs set permission guardrails but do not authenticate workforce users, and IAM Identity Center is integrated with a directory rather than added to Directory Service in this manner.", ko: "SCP는 권한 가드레일을 설정하지만 인력 사용자를 인증하지 않으며 IAM Identity Center를 이런 방식으로 Directory Service에 추가하지 않습니다." },
      D: { en: "AWS Organizations does not directly use Directory Service as its authentication mechanism; IAM Identity Center provides that integration.", ko: "AWS Organizations는 Directory Service를 인증 메커니즘으로 직접 사용하지 않으며 해당 통합은 IAM Identity Center가 제공합니다." }
    }
  },
  {
    id: "exam10-485", number: 485, tags: ["Amazon S3 Glacier", "Archive", "Expedited Retrieval", "Cost Optimization"],
    question: { en: "A company needs an AWS storage solution for archived videos from old news footage. It must minimize cost, almost never needs to restore the files, and must be able to access a file within 5 minutes when required. Which solution is most cost-effective?", ko: "회사는 오래된 뉴스 영상에서 AWS에 비디오 아카이브를 저장할 수 있는 솔루션을 찾고 있습니다. 회사는 비용을 최소화해야 하며 이러한 파일을 복원할 필요가 거의 없습니다. 파일이 필요할 때 최대 5분 내에 사용할 수 있어야 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Store the video archives in Amazon S3 Glacier and use expedited retrievals.", ko: "비디오 아카이브를 Amazon S3 Glacier에 저장하고 긴급 검색을 사용합니다." },
      { k: "B", en: "Store the video archives in Amazon S3 Glacier and use standard retrievals.", ko: "비디오 아카이브를 Amazon S3 Glacier에 저장하고 표준 검색을 사용합니다." },
      { k: "C", en: "Store the video archives in S3 Standard-Infrequent Access (S3 Standard-IA).", ko: "비디오 아카이브를 Amazon S3 Standard-Infrequent Access(S3 Standard-IA)에 저장합니다." },
      { k: "D", en: "Store the video archives in S3 One Zone-Infrequent Access (S3 One Zone-IA).", ko: "비디오 아카이브를 Amazon S3 One Zone-Infrequent Access(S3 One Zone-IA)에 저장합니다." }
    ],
    answer: ["A"],
    explanation: { en: "S3 Glacier is designed for very low-cost archival storage, and expedited retrieval provides access in approximately 1 to 5 minutes when the rarely requested file is needed.", ko: "S3 Glacier는 매우 저렴한 아카이브 스토리지용이며 긴급 검색은 드물게 필요한 파일을 요청할 때 약 1~5분 내에 제공합니다." },
    why_wrong: {
      B: { en: "Standard Glacier retrieval normally takes several hours and cannot meet the 5-minute requirement.", ko: "Glacier 표준 검색은 일반적으로 몇 시간이 걸리므로 5분 요구 사항을 충족하지 못합니다." },
      C: { en: "S3 Standard-IA provides millisecond access but has higher storage cost than Glacier for data that is almost never retrieved.", ko: "S3 Standard-IA는 밀리초 액세스를 제공하지만 거의 검색하지 않는 데이터에는 Glacier보다 저장 비용이 높습니다." },
      D: { en: "S3 One Zone-IA has higher storage cost than archival storage and stores data in only one Availability Zone.", ko: "S3 One Zone-IA는 아카이브 스토리지보다 저장 비용이 높고 하나의 가용 영역에만 데이터를 저장합니다." }
    }
  },
  {
    id: "exam10-486", number: 486, tags: ["Amazon S3", "Amazon ECS", "AWS Fargate", "Amazon RDS", "Three-Tier Architecture", "Cost Optimization"],
    question: { en: "A company is building a three-tier application on AWS. The presentation tier serves a static website, the logic tier is a containerized application, and the application stores data in a relational database. The company wants to simplify deployment and reduce operational costs. Which solution meets these requirements?", ko: "한 회사가 AWS에서 3계층 애플리케이션을 구축하고 있습니다. 프레젠테이션 계층은 정적 웹 사이트를 제공합니다. 논리 계층은 컨테이너화된 애플리케이션입니다. 이 응용 프로그램은 관계형 데이터베이스에 데이터를 저장합니다. 이 회사는 배포를 단순화하고 운영 비용을 절감하기를 원합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Host static content on Amazon S3. Run Amazon ECS on AWS Fargate for compute. Use a managed Amazon RDS database cluster.", ko: "Amazon S3를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 위해 AWS Fargate와 함께 Amazon Elastic Container Service(Amazon ECS)를 사용합니다. 데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다." },
      { k: "B", en: "Host static content on Amazon CloudFront. Run Amazon ECS on Amazon EC2 for compute. Use a managed Amazon RDS database cluster.", ko: "Amazon CloudFront를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 위해 Amazon EC2와 함께 Amazon Elastic Container Service(Amazon ECS)를 사용합니다. 데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다." },
      { k: "C", en: "Host static content on Amazon S3. Run Amazon EKS on AWS Fargate for compute. Use a managed Amazon RDS database cluster.", ko: "Amazon S3를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 위해 AWS Fargate와 함께 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용합니다. 데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다." },
      { k: "D", en: "Host static content on Amazon EC2 Reserved Instances. Run Amazon EKS on Amazon EC2 for compute. Use a managed Amazon RDS database cluster.", ko: "Amazon EC2 예약 인스턴스를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 위해 Amazon EC2와 함께 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용합니다. 데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다." }
    ],
    answer: ["A"],
    explanation: { en: "S3 provides managed, low-cost static website storage; ECS on Fargate runs containers without managing servers; and RDS manages the relational database. Together they minimize infrastructure operations for all three tiers.", ko: "S3는 관리형 저비용 정적 웹 사이트 스토리지를 제공하고 ECS on Fargate는 서버 관리 없이 컨테이너를 실행하며 RDS는 관계형 데이터베이스를 관리합니다. 이 조합은 세 계층 모두의 인프라 운영을 최소화합니다." },
    why_wrong: {
      B: { en: "CloudFront is a CDN and still requires an origin, while ECS on EC2 requires instance management.", ko: "CloudFront는 CDN이므로 여전히 오리진이 필요하고 ECS on EC2는 인스턴스 관리가 필요합니다." },
      C: { en: "EKS adds Kubernetes control and administration that is unnecessary when the goal is the simplest container deployment.", ko: "EKS는 가장 단순한 컨테이너 배포가 목표인 경우 불필요한 Kubernetes 제어와 관리 부담을 추가합니다." },
      D: { en: "Using EC2 for static content and Kubernetes worker capacity creates the greatest server-management overhead.", ko: "정적 콘텐츠와 Kubernetes 작업 용량에 EC2를 사용하면 서버 관리 부담이 가장 커집니다." }
    }
  },
  {
    id: "exam10-487", number: 487, tags: ["Amazon EFS", "Multi-AZ", "Linux", "Hybrid Connectivity", "Shared File System"],
    question: { en: "A company needs a highly available and scalable storage solution that works as a file system with no minimum size requirement and can be mounted by multiple Linux instances in AWS and on premises using standard protocols. A site-to-site VPN connects the on-premises network to the VPC. Which storage solution meets these requirements?", ko: "회사에서 해당 애플리케이션을 위한 스토리지 솔루션을 찾고 있습니다. 솔루션은 가용성과 확장성이 높아야 합니다. 또한 솔루션은 기본 프로토콜을 통해 AWS 및 온프레미스의 여러 Linux 인스턴스에 의해 마운트될 수 있고 최소 크기 요구 사항이 없는 파일 시스템으로 작동해야 합니다. 회사는 온프레미스 네트워크에서 VPC로 액세스하기 위해 사이트 간 VPN을 설정했습니다. 이러한 요구 사항을 충족하는 스토리지 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "A Multi-AZ Amazon FSx deployment", ko: "Amazon FSx 다중 AZ 배포" },
      { k: "B", en: "An Amazon EBS Multi-Attach volume", ko: "Amazon Elastic Block Store(Amazon EBS) 다중 연결 볼륨" },
      { k: "C", en: "Amazon EFS with multiple mount targets", ko: "탑재 대상이 여러 개인 Amazon Elastic File System(Amazon EFS)" },
      { k: "D", en: "Amazon EFS with a single mount target and multiple access points", ko: "단일 탑재 대상 및 여러 액세스 지점이 있는 Amazon Elastic File System(Amazon EFS)" }
    ],
    answer: ["C"],
    explanation: { en: "Amazon EFS is an elastic NFS file system that supports concurrent mounting from multiple Linux clients, including on-premises clients over VPN. Mount targets in multiple Availability Zones provide regional availability.", ko: "Amazon EFS는 VPN을 통한 온프레미스 클라이언트를 포함하여 여러 Linux 클라이언트의 동시 NFS 마운트를 지원하는 탄력적 파일 시스템입니다. 여러 가용 영역의 탑재 대상이 리전 수준 가용성을 제공합니다." },
    why_wrong: {
      A: { en: "The generic FSx choice does not specify a file-system type matching the Linux NFS and elastic-capacity requirements as directly as EFS.", ko: "일반적인 FSx 선택지는 Linux NFS와 탄력적 용량 요구 사항에 맞는 파일 시스템 유형을 지정하지 않아 EFS만큼 직접적이지 않습니다." },
      B: { en: "EBS is block storage, Multi-Attach is limited to supported instances in one Availability Zone, and it is not an NFS service for on-premises clients.", ko: "EBS는 블록 스토리지이고 Multi-Attach는 한 가용 영역의 지원 인스턴스로 제한되며 온프레미스 클라이언트용 NFS 서비스가 아닙니다." },
      D: { en: "Multiple access points manage application access but a single mount target creates an Availability Zone dependency and does not provide the requested availability.", ko: "여러 액세스 지점은 애플리케이션 액세스를 관리하지만 단일 탑재 대상은 특정 가용 영역에 의존하여 요구된 가용성을 제공하지 못합니다." }
    }
  },
  {
    id: "exam10-488", number: 488, tags: ["AWS Organizations", "Service Control Policies", "Billing", "Security", "Root User"],
    question: { en: "A media company uses an AWS Organizations organization with all features enabled. The finance team requires that nobody, including a member account's root user, can access member-account billing information. Which solution meets this requirement?", ko: "미디어 회사는 AWS 계정을 구성하기 위해 AWS Organizations 모든 기능 기능 세트를 사용하고 있습니다. 회사의 재무 팀에 따르면 회원 계정의 청구 정보는 회원 계정의 루트 사용자를 포함하여 누구도 액세스할 수 없어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Add all finance users to an IAM group and attach an AWS managed policy named Billing to the group.", ko: "모든 재무 팀 사용자를 IAM 그룹에 추가합니다. Billing이라는 AWS 관리형 정책을 그룹에 연결합니다." },
      { k: "B", en: "Attach an identity-based policy that denies access to billing information for all users, including the root user.", ko: "루트 사용자를 포함한 모든 사용자의 청구 정보에 대한 액세스를 거부하는 자격 증명 기반 정책을 첨부합니다." },
      { k: "C", en: "Create a service control policy (SCP) that denies access to billing information. Attach the SCP to the root organizational unit (OU).", ko: "청구 정보에 대한 액세스를 거부하는 서비스 제어 정책(SCP)을 만듭니다. 루트 조직 단위(OU)에 SCP를 연결합니다." },
      { k: "D", en: "Change the organization from the all-features feature set to the consolidated billing feature set.", ko: "조직의 모든 기능 기능 집합에서 조직 통합 결제 기능 집합으로 변환합니다." }
    ],
    answer: ["C"],
    explanation: { en: "An SCP attached at the organization root establishes a centralized maximum-permissions guardrail for every member account beneath it, including actions taken with member-account root credentials. Explicitly denying billing actions satisfies the requirement.", ko: "조직 루트에 연결한 SCP는 그 아래 모든 멤버 계정에 중앙 집중식 최대 권한 가드레일을 설정하며 멤버 계정 루트 자격 증명의 작업도 포함합니다. 청구 작업을 명시적으로 거부하면 요구 사항을 충족합니다." },
    why_wrong: {
      A: { en: "Granting a Billing policy to a finance group provides access rather than preventing all access.", ko: "재무 그룹에 Billing 정책을 부여하면 모든 접근을 차단하는 대신 접근 권한을 제공합니다." },
      B: { en: "IAM identity policies are attached to IAM identities and cannot be attached to or constrain the account root user in this way.", ko: "IAM 자격 증명 정책은 IAM 자격 증명에 연결되며 이런 방식으로 계정 루트 사용자에 연결하거나 제한할 수 없습니다." },
      D: { en: "Consolidated billing alone does not create a permission guardrail that denies member-account billing access.", ko: "통합 결제만으로는 멤버 계정의 청구 접근을 거부하는 권한 가드레일이 만들어지지 않습니다." }
    }
  },
  {
    id: "exam10-489", number: 489, tags: ["Amazon SNS", "Amazon SQS", "Dead-Letter Queue", "Hybrid Architecture", "Message Retention"],
    question: { en: "An ecommerce company runs an application in AWS integrated with an on-premises warehouse solution. Amazon SNS sends order messages to an on-premises HTTPS endpoint, but the data center team reports that some messages are not received. A solutions architect must retain undelivered messages and allow analysis for up to 14 days with minimal development effort. Which solution meets these requirements?", ko: "전자상거래 회사는 온프레미스 웨어하우스 솔루션과 통합된 AWS 클라우드에서 애플리케이션을 실행합니다. 이 회사는 Amazon Simple Notification Service(Amazon SNS)를 사용하여 주문 메시지를 온프레미스 HTTPS 엔드포인트로 보내 창고 애플리케이션이 주문을 처리할 수 있도록 합니다. 로컬 데이터 센터 팀에서 일부 주문 메시지가 수신되지 않은 것을 감지했습니다. 솔루션 설계자는 전달되지 않은 메시지를 보관하고 최대 14일 동안 메시지를 분석해야 합니다. 최소한의 개발 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Configure an Amazon SNS dead-letter queue with an Amazon Kinesis Data Stream target and a retention period of 14 days.", ko: "보존 기간이 14일인 Amazon Kinesis Data Stream 대상이 있는 Amazon SNS 배달 못한 편지 대기열을 구성합니다." },
      { k: "B", en: "Add an Amazon SQS queue with a 14-day retention period between the application and Amazon SNS.", ko: "애플리케이션과 Amazon SNS 사이에 보존 기간이 14일인 Amazon Simple Queue Service(Amazon SQS) 대기열을 추가합니다." },
      { k: "C", en: "Configure an Amazon SNS dead-letter queue with an Amazon SQS target and a retention period of 14 days.", ko: "보존 기간이 14일인 Amazon Simple Queue Service(Amazon SQS) 대상이 있는 Amazon SNS 데드 레터 대기열을 구성합니다." },
      { k: "D", en: "Configure an Amazon SNS dead-letter queue with an Amazon DynamoDB target whose TTL is set to 14 days.", ko: "보존 기간이 14일로 설정된 TTL 속성이 있는 Amazon DynamoDB 대상이 있는 Amazon SNS 데드 레터 대기열을 구성합니다." }
    ],
    answer: ["C"],
    explanation: { en: "An SNS subscription can use an SQS queue as its dead-letter queue. Messages that SNS cannot deliver to the HTTPS endpoint are retained in SQS, whose message retention can be configured for the maximum of 14 days.", ko: "SNS 구독은 SQS 대기열을 데드 레터 대기열로 사용할 수 있습니다. SNS가 HTTPS 엔드포인트에 전달하지 못한 메시지는 SQS에 보관되며 메시지 보존 기간은 최대 14일로 설정할 수 있습니다." },
    why_wrong: {
      A: { en: "SNS dead-letter queues use Amazon SQS queues, not Kinesis Data Streams.", ko: "SNS 데드 레터 대기열은 Kinesis Data Streams가 아니라 Amazon SQS 대기열을 사용합니다." },
      B: { en: "A queue before SNS does not capture failures that occur when SNS delivers to the HTTPS subscription.", ko: "SNS 앞의 대기열은 SNS가 HTTPS 구독으로 전달할 때 발생한 실패를 포착하지 못합니다." },
      D: { en: "DynamoDB is not a supported SNS dead-letter queue target; an SQS queue is required.", ko: "DynamoDB는 SNS 데드 레터 대기열 대상으로 지원되지 않으며 SQS 대기열이 필요합니다." }
    }
  },
  {
    id: "exam10-490", number: 490, tags: ["Amazon DynamoDB", "Point-in-Time Recovery", "Export to Amazon S3", "Backup", "Serverless"],
    question: { en: "A game company stores user information such as geographic location, player data, and leaderboards in Amazon DynamoDB. It must configure continuous backups to an Amazon S3 bucket with minimal coding. The backup must not affect application availability or the table's provisioned read capacity units (RCUs). Which solution meets these requirements?", ko: "게임 회사는 Amazon DynamoDB를 사용하여 지리적 위치, 플레이어 데이터 및 순위표와 같은 사용자 정보를 저장합니다. 회사는 최소한의 코딩으로 Amazon S3 버킷에 대한 지속적인 백업을 구성해야 합니다. 백업은 애플리케이션의 가용성에 영향을 미치지 않아야 하며 테이블에 대해 정의된 읽기 용량 단위(RCU)에 영향을 주지 않아야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Use an Amazon EMR cluster and create an Apache Hive job to back up the data to Amazon S3.", ko: "Amazon EMR 클러스터를 사용하십시오. Apache Hive 작업을 생성하여 Amazon S3에 데이터를 백업합니다." },
      { k: "B", en: "Enable continuous backups for DynamoDB and export the data directly to Amazon S3. Configure point-in-time recovery for the table.", ko: "연속 백업을 통해 DynamoDB에서 Amazon S3로 직접 데이터를 내보냅니다. 테이블에 대해 지정 시간 복구를 설정합니다." },
      { k: "C", en: "Configure DynamoDB Streams and create an AWS Lambda function that writes stream records to an Amazon S3 bucket.", ko: "Amazon DynamoDB 스트림을 구성합니다. 스트림을 사용하고 데이터를 Amazon S3 버킷으로 내보내는 AWS Lambda 함수를 생성합니다." },
      { k: "D", en: "Create an AWS Lambda function that periodically exports data from the table to Amazon S3. Configure point-in-time recovery for the table.", ko: "정기적으로 데이터베이스 테이블에서 Amazon S3로 데이터를 내보내는 AWS Lambda 함수를 생성합니다. 테이블에 대해 지정 시간 복구를 설정합니다." }
    ],
    answer: ["B"],
    explanation: { en: "DynamoDB point-in-time recovery provides continuous backups, and export to S3 can export a full or incremental recovery point without consuming RCUs or affecting table availability. Both are managed capabilities that require little code.", ko: "DynamoDB 지정 시간 복구는 지속적인 백업을 제공하며 S3로 내보내기는 RCU를 소비하거나 테이블 가용성에 영향을 주지 않고 전체 또는 증분 복구 시점 데이터를 내보낼 수 있습니다. 두 기능 모두 코딩이 거의 필요 없는 관리형 기능입니다." },
    why_wrong: {
      A: { en: "An EMR and Hive export requires cluster operations and reads table data, adding cost, code, and capacity impact.", ko: "EMR과 Hive 내보내기는 클러스터 운영이 필요하고 테이블 데이터를 읽으므로 비용, 코드 및 용량 영향을 추가합니다." },
      C: { en: "Streams and Lambda require custom code and ongoing processing, and do not provide the simplest managed continuous-backup and recovery solution.", ko: "Streams와 Lambda는 사용자 지정 코드와 지속적인 처리가 필요하며 가장 단순한 관리형 지속 백업 및 복구 솔루션이 아닙니다." },
      D: { en: "A periodic Lambda scan or export requires custom scheduling and code and can consume table read capacity.", ko: "주기적인 Lambda 스캔 또는 내보내기는 사용자 지정 일정과 코드가 필요하며 테이블 읽기 용량을 소비할 수 있습니다." }
    }
  },
  {
    id: "exam10-491", number: 491, tags: ["AWS Lambda", "Amazon SQS", "SSE-KMS", "Event Source Mapping", "Security"],
    question: { en: "A solutions architect is designing an asynchronous application to process credit card data-validation requests for a bank. The application must be secure and must be able to process each request more than once. Which solution meets these requirements most cost-effectively?", ko: "솔루션 설계자는 은행에 대한 신용 카드 데이터 유효성 검사 요청을 처리하기 위해 비동기식 애플리케이션을 설계하고 있습니다. 애플리케이션은 안전해야 하며 각 요청을 한 번 이상 처리할 수 있어야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use an AWS Lambda event source mapping with an Amazon SQS standard queue. Encrypt the queue with an AWS KMS key (SSE-KMS), and add kms:Decrypt permission to the Lambda execution role.", ko: "AWS Lambda 이벤트 소스 매핑을 사용합니다. Amazon Simple Queue Service(Amazon SQS) 표준 대기열을 이벤트 소스로 설정합니다. 암호화에 AWS Key Management Service(SSE-KMS)를 사용합니다. Lambda 실행 역할에 대한 kms:Decrypt 권한을 추가합니다." },
      { k: "B", en: "Use an AWS Lambda event source mapping with an Amazon SQS FIFO queue. Encrypt with an SQS managed encryption key (SSE-SQS), and add encryption-key invocation permission to the Lambda function.", ko: "AWS Lambda 이벤트 소스 매핑을 사용합니다. Amazon Simple Queue Service(Amazon SQS) FIFO 대기열을 이벤트 소스로 사용합니다. 암호화에 SQS 관리형 암호화 키(SSE-SQS)를 사용합니다. Lambda 함수에 대한 암호화 키 호출 권한을 추가합니다." },
      { k: "C", en: "Use an AWS Lambda event source mapping with an Amazon SQS FIFO queue. Encrypt with an AWS KMS key (SSE-KMS), and add kms:Decrypt permission to the Lambda execution role.", ko: "AWS Lambda 이벤트 소스 매핑을 사용합니다. Amazon Simple Queue Service(Amazon SQS) FIFO 대기열을 이벤트 소스로 설정합니다. AWS KMS 키(SSE-KMS)를 사용합니다. Lambda 실행 역할에 대한 kms:Decrypt 권한을 추가합니다." },
      { k: "D", en: "Use an AWS Lambda event source mapping with an Amazon SQS standard queue. Encrypt with an AWS KMS key (SSE-KMS), and add encryption-key invocation permission to the Lambda function.", ko: "AWS Lambda 이벤트 소스 매핑을 사용합니다. Amazon Simple Queue Service(Amazon SQS) 표준 대기열을 이벤트 소스로 설정합니다. 암호화에 AWS KMS 키(SSE-KMS)를 사용합니다. Lambda 함수에 대한 암호화 키 호출 권한을 추가합니다." }
    ],
    answer: ["A"],
    explanation: { en: "SQS standard queues provide at-least-once delivery and are cost-effective for asynchronous processing. SSE-KMS protects the queue data, and the Lambda execution role needs kms:Decrypt permission to consume messages encrypted with the customer managed KMS key.", ko: "SQS 표준 대기열은 비동기 처리에 적합한 최소 한 번 전달을 비용 효율적으로 제공합니다. SSE-KMS는 대기열 데이터를 보호하며 고객 관리형 KMS 키로 암호화된 메시지를 소비하려면 Lambda 실행 역할에 kms:Decrypt 권한이 필요합니다." },
    why_wrong: {
      B: { en: "SSE-SQS does not require KMS key permissions, and a FIFO queue is intended for ordering and deduplication rather than the requested at-least-once behavior.", ko: "SSE-SQS에는 KMS 키 권한이 필요하지 않으며 FIFO 대기열은 요청된 최소 한 번 처리보다 순서 보장과 중복 제거를 위한 것입니다." },
      C: { en: "A FIFO queue emphasizes exactly-once processing and ordering and costs more than a standard queue when those features are not required.", ko: "FIFO 대기열은 정확히 한 번 처리와 순서 보장을 강조하며 해당 기능이 필요하지 않을 때 표준 대기열보다 비용이 높습니다." },
      D: { en: "KMS permissions must be granted to the Lambda execution role, not directly to the function as an invocation permission.", ko: "KMS 권한은 함수에 호출 권한으로 직접 추가하는 것이 아니라 Lambda 실행 역할에 부여해야 합니다." }
    }
  },
  {
    id: "exam10-492", number: 492, tags: ["AWS Organizations", "Service Control Policies", "Amazon EC2", "Governance", "Cost Control"],
    question: { en: "A company has multiple AWS accounts for development. Some employees continually use large Amazon EC2 instances, causing the company to exceed the annual budget for the development accounts. The company wants to centrally restrict AWS resource creation in these accounts with the least development effort. Which solution meets these requirements?", ko: "회사에 개발 작업을 위한 여러 AWS 계정이 있습니다. 일부 직원은 지속적으로 대형 Amazon EC2 인스턴스를 사용하므로 회사가 개발 계정에 대한 연간 예산을 초과하게 됩니다. 회사는 이러한 계정에서 AWS 리소스 생성을 중앙에서 제한하려고 합니다. 최소한의 개발 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Develop AWS Systems Manager templates that use an approved EC2 creation process. Provision EC2 instances only from approved templates.", ko: "승인된 EC2 생성 프로세스를 사용하는 AWS Systems Manager 템플릿을 개발합니다. 승인된 Systems Manager 템플릿을 사용하여 EC2 인스턴스를 프로비저닝합니다." },
      { k: "B", en: "Use AWS Organizations to arrange the accounts into organizational units (OUs). Define and attach a service control policy (SCP) that controls the allowed EC2 instance types.", ko: "AWS Organizations를 사용하여 계정을 조직 단위(OU)로 구성합니다. 서비스 제어 정책(SCP)을 정의하고 연결하여 EC2 인스턴스 유형의 사용을 제어합니다." },
      { k: "C", en: "Create an Amazon EventBridge rule that invokes AWS Lambda when an EC2 instance is created. Terminate disallowed EC2 instance types.", ko: "EC2 인스턴스가 생성될 때 AWS Lambda 함수를 호출하는 Amazon EventBridge 규칙을 구성합니다. 허용되지 않는 EC2 인스턴스 유형을 중지합니다." },
      { k: "D", en: "Create AWS Service Catalog products for allowed EC2 instance types and require employees to deploy instances only through those products.", ko: "직원이 허용되는 EC2 인스턴스 유형을 생성할 수 있도록 AWS Service Catalog 제품을 설정합니다. 직원이 서비스 카탈로그 제품을 사용해야만 EC2 인스턴스를 배포할 수 있는지 확인하십시오." }
    ],
    answer: ["B"],
    explanation: { en: "AWS Organizations and SCPs provide centrally managed preventive guardrails across development accounts. An SCP can deny RunInstances requests for disallowed instance types before resources are created, with little custom development.", ko: "AWS Organizations와 SCP는 개발 계정 전체에 중앙 관리형 예방 가드레일을 제공합니다. SCP는 허용되지 않은 인스턴스 유형의 RunInstances 요청을 리소스 생성 전에 거부하며 사용자 지정 개발이 거의 필요하지 않습니다." },
    why_wrong: {
      A: { en: "Systems Manager templates do not by themselves prevent users from launching instances through other APIs or the console.", ko: "Systems Manager 템플릿만으로는 사용자가 다른 API나 콘솔을 통해 인스턴스를 시작하는 것을 막지 못합니다." },
      C: { en: "The reactive Lambda approach creates the resource first and requires custom code, monitoring, and cleanup.", ko: "사후 대응 Lambda 방식은 리소스를 먼저 생성하며 사용자 지정 코드, 모니터링 및 정리가 필요합니다." },
      D: { en: "Service Catalog supplies approved products, but additional IAM restrictions are required to prevent direct EC2 launches outside the catalog.", ko: "Service Catalog는 승인된 제품을 제공하지만 카탈로그 외부에서 직접 EC2를 시작하지 못하게 하려면 추가 IAM 제한이 필요합니다." }
    }
  },
  {
    id: "exam10-493", number: 493, tags: ["Amazon Transcribe", "Amazon Translate", "Amazon Comprehend", "Machine Learning", "Choose three"],
    question: { en: "A company wants to use AI to assess the quality of customer-service calls. It currently handles calls in four languages, including English, and will add languages later. The company has no resources to maintain machine-learning models. It must create written sentiment-analysis reports from call recordings, with the call text translated into English. Which combination of steps meets these requirements? (Choose three.)", ko: "한 회사에서 AI(인공 지능)를 사용하여 고객 서비스 통화 품질을 확인하려고 합니다. 회사는 현재 영어를 포함하여 4개 언어로 통화를 관리합니다. 회사는 앞으로 새로운 언어를 제공할 것입니다. 회사는 기계 학습(ML) 모델을 정기적으로 유지 관리할 리소스가 없습니다. 회사는 고객 서비스 통화 녹음에서 서면 감정 분석 보고서를 작성해야 합니다. 고객 서비스 통화 녹음 텍스트는 영어로 번역되어야 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개 선택)" },
    options: [
      { k: "A", en: "Use Amazon Comprehend to translate the audio recordings into English.", ko: "Amazon Comprehend를 사용하여 오디오 녹음을 영어로 번역합니다." },
      { k: "B", en: "Use Amazon Lex to generate written sentiment-analysis reports.", ko: "Amazon Lex를 사용하여 작성된 감정 분석 보고서를 생성합니다." },
      { k: "C", en: "Use Amazon Polly to convert the audio recordings to text.", ko: "Amazon Polly를 사용하여 오디오 녹음을 텍스트로 변환합니다." },
      { k: "D", en: "Use Amazon Transcribe to convert the audio recordings in all languages to text.", ko: "Amazon Transcribe를 사용하여 모든 언어의 오디오 녹음을 텍스트로 변환합니다." },
      { k: "E", en: "Use Amazon Translate to translate text in all languages into English.", ko: "Amazon Translate를 사용하여 모든 언어의 텍스트를 영어로 번역합니다." },
      { k: "F", en: "Use Amazon Comprehend to generate sentiment-analysis reports.", ko: "Amazon Comprehend를 사용하여 감정 분석 보고서를 생성합니다." }
    ],
    answer: ["D", "E", "F"],
    explanation: { en: "Amazon Transcribe converts multilingual speech to text, Amazon Translate converts the transcripts to English, and Amazon Comprehend performs managed sentiment analysis. All three are managed AI services that do not require the company to train or maintain models.", ko: "Amazon Transcribe는 다국어 음성을 텍스트로 변환하고 Amazon Translate는 기록을 영어로 번역하며 Amazon Comprehend는 관리형 감정 분석을 수행합니다. 세 서비스 모두 회사가 모델을 훈련하거나 유지 관리할 필요가 없는 관리형 AI 서비스입니다." },
    why_wrong: {
      A: { en: "Comprehend analyzes text; it does not transcribe or translate audio.", ko: "Comprehend는 텍스트를 분석하며 오디오를 기록하거나 번역하지 않습니다." },
      B: { en: "Amazon Lex builds conversational interfaces and is not the service for sentiment reports from transcripts.", ko: "Amazon Lex는 대화형 인터페이스를 구축하는 서비스이며 기록의 감정 보고서를 만드는 서비스가 아닙니다." },
      C: { en: "Amazon Polly converts text to speech, which is the opposite direction from the requirement.", ko: "Amazon Polly는 텍스트를 음성으로 변환하므로 요구 사항과 반대 방향입니다." }
    }
  },
  {
    id: "exam10-494", number: 494, tags: ["AWS IAM", "Amazon EC2", "Explicit Deny", "Source IP", "Policy Evaluation"],
    question: { en: "A company hosts an internal system on Amazon EC2. During part of a deployment, an administrator uses the AWS CLI to terminate an EC2 instance but receives a 403 Access Denied error. The administrator assumes an IAM role whose policy allows ec2:TerminateInstances on all resources but explicitly denies that action when aws:SourceIp is not in 192.0.2.0/24 or 203.0.113.0/24. What caused the failed request?", ko: "회사는 Amazon EC2 인스턴스를 사용하여 내부 시스템을 호스팅합니다. 배포 작업의 일부로 관리자는 AWS CLI를 사용하여 EC2 인스턴스를 종료하려고 합니다. 그러나 관리자는 403(액세스 거부) 오류 메시지를 받습니다. 관리자는 ec2:TerminateInstances를 모든 리소스에 허용하지만 aws:SourceIp가 192.0.2.0/24 또는 203.0.113.0/24가 아닌 경우 명시적으로 거부하는 IAM 정책이 연결된 IAM 역할을 사용하고 있습니다. 실패한 요청의 원인은 무엇입니까?" },
    options: [
      { k: "A", en: "The EC2 instance has a resource-based policy containing a Deny statement.", ko: "EC2 인스턴스에는 Deny 문이 포함된 리소스 기반 정책이 있습니다." },
      { k: "B", en: "The policy statement does not specify a principal.", ko: "정책 설명에 주체가 지정되지 않았습니다." },
      { k: "C", en: "The Action field does not grant the action required to terminate EC2 instances.", ko: "Action 필드는 EC2 인스턴스를 종료하는 데 필요한 조치를 부여하지 않습니다." },
      { k: "D", en: "The EC2 termination request did not originate from CIDR block 192.0.2.0/24 or 203.0.113.0/24.", ko: "EC2 인스턴스 종료 요청은 CIDR 블록 192.0.2.0/24 또는 203.0.113.0/24에서 시작되지 않습니다." }
    ],
    answer: ["D"],
    explanation: { en: "The explicit Deny with the NotIpAddress condition overrides the Allow whenever the request source IP is outside both permitted CIDR ranges. IAM evaluation always gives an applicable explicit deny precedence.", ko: "NotIpAddress 조건의 명시적 Deny는 요청 원본 IP가 두 허용 CIDR 범위 밖에 있을 때 Allow를 재정의합니다. IAM 정책 평가에서는 적용되는 명시적 거부가 항상 우선합니다." },
    why_wrong: {
      A: { en: "EC2 instances do not use a resource-based policy for this termination authorization scenario.", ko: "EC2 인스턴스는 이 종료 권한 부여 시나리오에서 리소스 기반 정책을 사용하지 않습니다." },
      B: { en: "An identity-based policy attached to a role does not include a Principal element because the attached identity is the principal.", ko: "역할에 연결된 자격 증명 기반 정책은 연결된 자격 증명이 주체이므로 Principal 요소를 포함하지 않습니다." },
      C: { en: "The policy explicitly includes ec2:TerminateInstances, so the required action is granted before the conditional deny is evaluated.", ko: "정책에 ec2:TerminateInstances가 명시되어 있으므로 조건부 거부를 평가하기 전 필요한 작업은 허용되어 있습니다." }
    }
  },
  {
    id: "exam10-495", number: 495, tags: ["Amazon Macie", "Amazon S3", "AWS Lake Formation", "Sensitive Data Discovery", "Security"],
    question: { en: "A company is conducting an internal audit. It wants to ensure that data in Amazon S3 buckets connected to its AWS Lake Formation data lake does not contain sensitive customer or employee data. The company wants to search for personally identifiable information (PII), passport numbers, and credit card numbers. Which solution meets these requirements?", ko: "회사에서 내부 감사를 실시하고 있습니다. 회사는 회사의 AWS Lake Formation 데이터 레이크와 연결된 Amazon S3 버킷의 데이터에 민감한 고객 또는 직원 데이터가 포함되지 않도록 하려고 합니다. 회사는 개인 식별 정보(PII) 또는 여권 번호 및 신용 카드 번호를 포함한 금융 정보를 검색하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Configure AWS Audit Manager and select the PCI DSS framework for the audit.", ko: "계정에서 AWS Audit Manager를 구성합니다. 감사를 위해 PCI DSS(Payment Card Industry Data Security Standards)를 선택합니다." },
      { k: "B", en: "Configure Amazon S3 Inventory on the buckets and use Amazon Athena to query the inventory.", ko: "S3 버킷에서 Amazon S3 인벤토리 구성을 구성합니다. 인벤토리를 쿼리하도록 Amazon Athena를 구성합니다." },
      { k: "C", en: "Configure Amazon Macie to run sensitive-data discovery jobs that use managed data identifiers for the required data types.", ko: "필요한 데이터 유형에 대해 관리형 식별자를 사용하는 데이터 검색 작업을 실행하도록 Amazon Macie를 구성합니다." },
      { k: "D", en: "Use Amazon S3 Select to run reports against the S3 buckets.", ko: "Amazon S3 Select를 사용하여 S3 버킷에서 보고서를 실행합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Amazon Macie is a managed data-security and privacy service that discovers and reports sensitive data in S3. Its managed data identifiers recognize common PII and financial data such as passport and credit card numbers.", ko: "Amazon Macie는 S3에서 민감한 데이터를 검색하고 보고하는 관리형 데이터 보안 및 개인 정보 보호 서비스입니다. 관리형 데이터 식별자는 여권 번호와 신용 카드 번호 같은 일반적인 PII와 금융 데이터를 인식합니다." },
    why_wrong: {
      A: { en: "Audit Manager gathers compliance evidence but does not inspect S3 object contents to discover PII.", ko: "Audit Manager는 규정 준수 증거를 수집하지만 PII를 찾기 위해 S3 객체 내용을 검사하지 않습니다." },
      B: { en: "S3 Inventory reports object metadata and configuration, not sensitive values inside object contents.", ko: "S3 Inventory는 객체 메타데이터와 구성을 보고하며 객체 내용 안의 민감한 값을 검색하지 않습니다." },
      D: { en: "S3 Select queries known fields in individual objects and does not provide managed sensitive-data discovery across buckets.", ko: "S3 Select는 개별 객체의 알려진 필드를 쿼리하며 버킷 전체에 관리형 민감 데이터 검색을 제공하지 않습니다." }
    }
  },
  {
    id: "exam10-496", number: 496, tags: ["AWS Storage Gateway", "File Gateway", "Volume Gateway", "Hybrid Storage", "Choose two"],
    question: { en: "A company hosts an application on on-premises servers and is running out of storage capacity. The application uses both block storage and NFS storage. The company needs a high-performance solution with local caching without redesigning the application. Which combination of actions should a solutions architect take? (Choose two.)", ko: "회사는 온프레미스 서버를 사용하여 애플리케이션을 호스팅합니다. 회사의 저장 용량이 부족합니다. 애플리케이션은 블록 스토리지와 NFS 스토리지를 모두 사용합니다. 회사는 기존 애플리케이션을 재설계하지 않고 로컬 캐싱을 지원하는 고성능 솔루션이 필요합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 작업 조합을 수행해야 합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Mount Amazon S3 as a file system on the on-premises servers.", ko: "Amazon S3를 온프레미스 서버에 파일 시스템으로 탑재합니다." },
      { k: "B", en: "Deploy an AWS Storage Gateway file gateway to replace the NFS storage.", ko: "NFS 스토리지를 대체할 AWS Storage Gateway 파일 게이트웨이를 배포합니다." },
      { k: "C", en: "Deploy AWS Snowball Edge to provision NFS mounts on the on-premises servers.", ko: "AWS Snowball Edge를 배포하여 온프레미스 서버에 NFS 마운트를 프로비저닝합니다." },
      { k: "D", en: "Deploy an AWS Storage Gateway volume gateway to replace the block storage.", ko: "블록 스토리지를 대체할 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다." },
      { k: "E", en: "Deploy an Amazon EFS file system and mount it on the on-premises servers.", ko: "Amazon Elastic File System(Amazon EFS) 볼륨을 배포하고 온프레미스 서버에 탑재합니다." }
    ],
    answer: ["B", "D"],
    explanation: { en: "File Gateway provides cached NFS or SMB access backed by Amazon S3, while Volume Gateway provides locally cached iSCSI block volumes backed by AWS storage. Together they preserve the application's file and block interfaces and provide local low-latency caching.", ko: "File Gateway는 Amazon S3를 기반으로 로컬 캐시된 NFS 또는 SMB 액세스를 제공하고 Volume Gateway는 AWS 스토리지를 기반으로 로컬 캐시된 iSCSI 블록 볼륨을 제공합니다. 두 서비스를 함께 사용하면 애플리케이션의 파일 및 블록 인터페이스를 유지하면서 지연 시간이 짧은 로컬 캐싱을 제공합니다." },
    why_wrong: {
      A: { en: "Amazon S3 is object storage and is not natively mounted as a traditional NFS file system for this application.", ko: "Amazon S3는 객체 스토리지이며 이 애플리케이션에서 기존 NFS 파일 시스템처럼 기본 탑재되지 않습니다." },
      C: { en: "Snowball Edge is primarily a data-transfer and edge-compute device, not the durable hybrid storage replacement for both interfaces.", ko: "Snowball Edge는 주로 데이터 전송 및 엣지 컴퓨팅 장치이며 두 인터페이스를 위한 지속적인 하이브리드 스토리지 대체제가 아닙니다." },
      E: { en: "EFS can be mounted over network connectivity but does not provide the requested on-premises local cache and does not address block storage.", ko: "EFS는 네트워크 연결을 통해 탑재할 수 있지만 요청된 온프레미스 로컬 캐시를 제공하지 않고 블록 스토리지도 해결하지 않습니다." }
    }
  },
  {
    id: "exam10-497", number: 497, tags: ["Amazon S3", "Gateway VPC Endpoint", "NAT Gateway", "Cost Optimization", "Private Connectivity"],
    question: { en: "A service reads and writes large amounts of data in Amazon S3 in the same AWS Region. It runs on Amazon EC2 instances in private VPC subnets and currently communicates with S3 through a NAT gateway in a public subnet. The company wants to reduce data-transfer costs. Which solution meets these requirements most cost-effectively?", ko: "회사에는 동일한 AWS 리전의 Amazon S3 버킷에서 대량의 데이터를 읽고 쓰는 서비스가 있습니다. 이 서비스는 VPC의 프라이빗 서브넷 내 Amazon EC2 인스턴스에 배포됩니다. 이 서비스는 퍼블릭 서브넷의 NAT 게이트웨이를 통해 Amazon S3와 통신합니다. 그러나 회사는 데이터 출력 비용을 줄일 수 있는 솔루션을 원합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Provision a dedicated EC2 NAT instance in the public subnet and route all S3 traffic through its elastic network interface.", ko: "퍼블릭 서브넷에서 전용 EC2 NAT 인스턴스를 프로비저닝합니다. 이 인스턴스의 탄력적 네트워크 인터페이스를 모든 S3 트래픽의 대상으로 사용하도록 프라이빗 서브넷에 대한 라우팅 테이블을 구성합니다." },
      { k: "B", en: "Provision a dedicated EC2 NAT instance in the private subnet and route public-subnet S3 traffic through its elastic network interface.", ko: "프라이빗 서브넷에서 전용 EC2 NAT 인스턴스를 프로비저닝합니다. 이 인스턴스의 탄력적 네트워크 인터페이스를 모든 S3 트래픽의 대상으로 사용하도록 퍼블릭 서브넷에 대한 라우팅 테이블을 구성합니다." },
      { k: "C", en: "Provision a gateway VPC endpoint and configure the private-subnet route tables to use it for all S3 traffic.", ko: "VPC 게이트웨이 엔드포인트를 프로비저닝합니다. 게이트웨이 엔드포인트를 모든 S3 트래픽의 경로로 사용하도록 프라이빗 서브넷에 대한 경로 테이블을 구성합니다." },
      { k: "D", en: "Provision a second NAT gateway and configure the private-subnet route tables to use it for all S3 traffic.", ko: "두 번째 NAT 게이트웨이를 프로비저닝합니다. 이 NAT 게이트웨이를 모든 S3 트래픽의 대상으로 사용하도록 프라이빗 서브넷에 대한 라우팅 테이블을 구성합니다." }
    ],
    answer: ["C"],
    explanation: { en: "An S3 gateway endpoint provides private VPC-to-S3 connectivity without NAT gateway hourly or data-processing charges. Routing S3 traffic through the endpoint avoids the existing NAT cost.", ko: "S3 게이트웨이 엔드포인트는 NAT 게이트웨이 시간당 요금이나 데이터 처리 요금 없이 VPC에서 S3로 비공개 연결을 제공합니다. S3 트래픽을 엔드포인트로 라우팅하면 기존 NAT 비용을 피할 수 있습니다." },
    why_wrong: {
      A: { en: "A NAT instance still requires instance operation and processing capacity and is less managed than a free S3 gateway endpoint.", ko: "NAT 인스턴스는 여전히 인스턴스 운영과 처리 용량이 필요하며 무료 S3 게이트웨이 엔드포인트보다 관리 부담이 큽니다." },
      B: { en: "A NAT device requires a public-subnet route to an internet gateway; placing it in a private subnet does not provide the proposed path.", ko: "NAT 장치에는 인터넷 게이트웨이로의 퍼블릭 서브넷 경로가 필요하므로 프라이빗 서브넷에 배치하면 제안된 경로를 제공하지 못합니다." },
      D: { en: "Another NAT gateway adds hourly and data-processing charges rather than reducing them.", ko: "두 번째 NAT 게이트웨이는 비용을 줄이는 대신 시간당 요금과 데이터 처리 요금을 추가합니다." }
    }
  },
  {
    id: "exam10-498", number: 498, tags: ["Amazon S3", "S3 Lifecycle", "Versioning", "Cost Optimization", "Noncurrent Versions"],
    question: { en: "A company stores high-resolution photos in a versioned Amazon S3 bucket. To minimize application changes, it saves each update as the latest version of the S3 object. Only the two most recent versions must be retained. The bucket is a major cost. Which solution reduces S3 costs with the least operational overhead?", ko: "회사는 Amazon S3를 사용하여 고해상도 사진을 S3 버킷에 저장합니다. 애플리케이션 변경을 최소화하기 위해 회사는 사진을 S3 객체의 최신 버전으로 저장합니다. 회사는 사진의 가장 최근 버전 두 개만 유지하면 됩니다. 회사는 비용을 줄이고 싶어합니다. 회사는 S3 버킷을 큰 비용으로 식별했습니다. 최소한의 운영 오버헤드로 S3 비용을 줄이는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use an S3 Lifecycle rule to delete expired object versions while retaining the two most recent noncurrent versions.", ko: "S3 수명 주기를 사용하여 만료된 객체 버전을 삭제하고 가장 최근 버전 2개를 유지합니다." },
      { k: "B", en: "Use an AWS Lambda function to inspect previous versions and delete all but the two most recent versions.", ko: "AWS Lambda 함수를 사용하여 이전 버전을 확인하고 가장 최근 버전 2개를 제외한 모든 버전을 삭제합니다." },
      { k: "C", en: "Use an S3 Batch Operations job to delete noncurrent versions while retaining only the two most recent versions.", ko: "S3 배치 작업을 사용하여 최신이 아닌 객체 버전을 삭제하고 가장 최근 버전 2개만 유지합니다." },
      { k: "D", en: "Disable versioning on the S3 bucket and retain the two most recent versions.", ko: "S3 버킷에서 버전 관리를 비활성화하고 가장 최근 버전 2개를 유지합니다." }
    ],
    answer: ["A"],
    explanation: { en: "An S3 Lifecycle rule can permanently delete noncurrent versions and specify how many newer noncurrent versions to retain. It applies automatically and has less operational overhead than custom code or repeated batch jobs.", ko: "S3 수명 주기 규칙은 최신이 아닌 버전을 영구 삭제하면서 유지할 최신 비현재 버전 수를 지정할 수 있습니다. 규칙이 자동으로 적용되므로 사용자 지정 코드나 반복 배치 작업보다 운영 부담이 적습니다." },
    why_wrong: {
      B: { en: "A Lambda cleanup requires custom code, scheduling, error handling, and ongoing operations.", ko: "Lambda 정리에는 사용자 지정 코드, 일정, 오류 처리 및 지속적인 운영이 필요합니다." },
      C: { en: "S3 Batch Operations is a manually or periodically managed bulk job rather than the lowest-overhead ongoing policy.", ko: "S3 Batch Operations는 운영 부담이 가장 낮은 지속 정책이 아니라 수동 또는 주기적으로 관리하는 대량 작업입니다." },
      D: { en: "Suspending versioning does not delete existing versions and does not retain exactly two versions automatically.", ko: "버전 관리를 중지해도 기존 버전은 삭제되지 않으며 정확히 두 버전을 자동으로 유지하지도 않습니다." }
    }
  },
  {
    id: "exam10-499", number: 499, tags: ["AWS Direct Connect", "Hosted Connection", "Cost Optimization", "Networking"],
    question: { en: "A company must minimize the cost of a 1 Gbps AWS Direct Connect connection. Its average connection utilization is below 10%. A solutions architect must recommend a solution that reduces cost without compromising security. Which solution meets these requirements?", ko: "회사는 1Gbps AWS Direct Connect 연결 비용을 최소화해야 합니다. 회사의 평균 연결 사용률은 10% 미만입니다. 솔루션 설계자는 보안을 손상시키지 않으면서 비용을 절감할 솔루션을 추천해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Set up a new 1 Gbps dedicated Direct Connect connection and share it with another AWS account.", ko: "새로운 1Gbps Direct Connect 연결을 설정합니다. 다른 AWS 계정과 연결을 공유합니다." },
      { k: "B", en: "Set up a new 200 Mbps dedicated Direct Connect connection in the AWS Management Console.", ko: "AWS Management Console에서 새로운 200Mbps Direct Connect 연결을 설정합니다." },
      { k: "C", en: "Contact an AWS Direct Connect Partner to order a 1 Gbps connection and share it with another AWS account.", ko: "1Gbps 연결을 주문하려면 AWS Direct Connect 파트너에게 문의하십시오. 다른 AWS 계정과 연결을 공유합니다." },
      { k: "D", en: "Contact an AWS Direct Connect Partner to order a 200 Mbps hosted connection for the existing AWS account.", ko: "기존 AWS 계정에 대한 200Mbps 호스팅 연결을 주문하려면 AWS Direct Connect 파트너에게 문의하십시오." }
    ],
    answer: ["D"],
    explanation: { en: "Direct Connect hosted connections from a Direct Connect Partner support sub-gigabit capacities such as 200 Mbps. Rightsizing to a hosted connection reduces cost while preserving a private dedicated connectivity service for the account.", ko: "Direct Connect 파트너의 호스팅 연결은 200Mbps 같은 1Gbps 미만 용량을 지원합니다. 호스팅 연결로 적정 규모를 선택하면 계정의 비공개 전용 연결 서비스를 유지하면서 비용을 줄일 수 있습니다." },
    why_wrong: {
      A: { en: "A new 1 Gbps connection does not rightsize the underused capacity, and sharing does not directly solve the company's requirement.", ko: "새 1Gbps 연결은 사용률이 낮은 용량을 적정화하지 않으며 공유도 회사 요구 사항을 직접 해결하지 않습니다." },
      B: { en: "Dedicated connections ordered through AWS are offered at fixed port speeds such as 1, 10, or 100 Gbps, not 200 Mbps.", ko: "AWS에서 주문하는 전용 연결은 1, 10 또는 100Gbps 같은 고정 포트 속도로 제공되며 200Mbps 전용 연결은 제공되지 않습니다." },
      C: { en: "A 1 Gbps hosted connection remains much larger than the observed demand and does not maximize savings.", ko: "1Gbps 호스팅 연결은 관찰된 수요보다 여전히 훨씬 크므로 비용 절감을 극대화하지 못합니다." }
    }
  },
  {
    id: "exam10-500", number: 500, tags: ["AWS DataSync", "Amazon FSx for Windows File Server", "AWS Snowcone", "Data Migration", "Choose two"],
    question: { en: "A company has several on-premises Windows file servers. It wants to migrate and consolidate the files into Amazon FSx for Windows File Server while preserving file permissions so that access permissions do not change. Which two solutions meet these requirements? (Choose two.)", ko: "회사에는 온프레미스에 여러 Windows 파일 서버가 있습니다. 이 회사는 파일을 Windows File Server 파일 시스템용 Amazon FSx로 마이그레이션하고 통합하려고 합니다. 액세스 권한이 변경되지 않도록 하려면 파일 권한을 보존해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Deploy an AWS DataSync agent on premises and schedule a DataSync task to transfer data directly to the FSx for Windows File Server file system.", ko: "온프레미스에 AWS DataSync 에이전트를 배포합니다. 데이터를 FSx for Windows 파일 서버 파일 시스템으로 전송하도록 DataSync 작업을 예약합니다." },
      { k: "B", en: "Use the AWS CLI to copy each file-server share to Amazon S3, then schedule DataSync to transfer the data to FSx for Windows File Server.", ko: "AWS CLI를 사용하여 각 파일 서버의 공유를 Amazon S3 버킷에 복사합니다. 데이터를 FSx for Windows File Server 파일 시스템으로 전송하도록 AWS DataSync 작업을 예약합니다." },
      { k: "C", en: "Remove the drives from each file server and ship them to AWS for import into Amazon S3, then use DataSync to transfer the data to FSx for Windows File Server.", ko: "각 파일 서버에서 드라이브를 제거합니다. Amazon S3로 가져오기 위해 드라이브를 AWS로 배송합니다. 데이터를 FSx for Windows File Server 파일 시스템으로 전송하도록 AWS DataSync 작업을 예약합니다." },
      { k: "D", en: "Order AWS Snowcone devices, connect them to the on-premises network, start the DataSync agent on the devices, and schedule DataSync tasks to transfer data to FSx for Windows File Server.", ko: "AWS Snowcone 디바이스를 주문합니다. 장치를 온프레미스 네트워크에 연결합니다. 디바이스에서 AWS DataSync 에이전트를 시작합니다. 데이터를 FSx for Windows 파일 서버 파일 시스템으로 전송하도록 DataSync 작업을 예약합니다." },
      { k: "E", en: "Order AWS Snowball Edge Storage Optimized devices, copy data to the devices with the AWS CLI, return the devices for import into S3, and then use DataSync to transfer it to FSx for Windows File Server.", ko: "AWS Snowball Edge Storage Optimized 디바이스를 주문합니다. 장치를 온프레미스 네트워크에 연결합니다. AWS CLI를 사용하여 디바이스에 데이터를 복사합니다. Amazon S3로 가져오기 위해 디바이스를 AWS로 반송합니다. 데이터를 FSx for Windows File Server 파일 시스템으로 전송하도록 AWS DataSync 작업을 예약합니다." }
    ],
    answer: ["A", "D"],
    explanation: { en: "DataSync supports SMB sources and Amazon FSx for Windows File Server destinations while preserving Windows file metadata, including ACLs. The agent can run on premises or on a Snowcone device, so both direct online approaches preserve permissions without staging through S3.", ko: "DataSync는 SMB 소스와 Amazon FSx for Windows File Server 대상을 지원하며 ACL을 포함한 Windows 파일 메타데이터를 보존합니다. 에이전트는 온프레미스 또는 Snowcone 디바이스에서 실행할 수 있으므로 두 직접 온라인 방식 모두 S3에 중간 저장하지 않고 권한을 보존합니다." },
    why_wrong: {
      B: { en: "Staging files in S3 with the AWS CLI does not preserve NTFS ACLs and Windows file metadata end to end.", ko: "AWS CLI로 파일을 S3에 중간 저장하면 NTFS ACL과 Windows 파일 메타데이터가 종단 간 보존되지 않습니다." },
      C: { en: "AWS does not accept customer hard drives for direct S3 import, and this workflow would not preserve permissions as described.", ko: "AWS는 고객 하드 드라이브를 직접 S3로 가져오기 위해 접수하지 않으며 이 워크플로는 설명된 권한도 보존하지 못합니다." },
      E: { en: "The S3 staging workflow with CLI copy does not preserve the Windows ACL metadata needed by the destination file system.", ko: "CLI 복사로 S3에 중간 저장하는 워크플로는 대상 파일 시스템에 필요한 Windows ACL 메타데이터를 보존하지 못합니다." }
    }
  }
  ]
});
