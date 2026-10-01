/* Exam 3
 * ExamTopics Topic 1 / Exam C 의 101~150번
 * 수록 범위: 101~150번
 * 스키마는 README.md 참고.
 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam3",
  title: "Exam 3",
  note: "Topic 1 · #101–150",
  questions: [
  {
    id: "exam3-101", number: 101, tags: ["VPC", "NAT Gateway", "High Availability"],
    question: {
      en: "A solutions architect is designing a VPC with public and private subnets. The VPC and subnets use IPv4 CIDR blocks. There is one public subnet and one private subnet in each of three Availability Zones (AZs) for high availability. An internet gateway is used to provide internet access for the public subnets. The private subnets require access to the internet to allow Amazon EC2 instances to download software updates.\nWhat should the solutions architect do to enable internet access for the private subnets?",
      ko: "솔루션스 아키텍트가 퍼블릭 및 프라이빗 서브넷이 있는 VPC를 설계합니다. VPC와 서브넷은 IPv4 CIDR 블록을 사용합니다. 고가용성을 위해 3개 가용 영역마다 퍼블릭 서브넷과 프라이빗 서브넷이 하나씩 있으며, 퍼블릭 서브넷은 인터넷 게이트웨이를 사용합니다. 프라이빗 서브넷의 EC2 인스턴스도 소프트웨어 업데이트를 다운로드하기 위해 인터넷에 접근해야 합니다.\n프라이빗 서브넷의 인터넷 접근을 활성화하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create three NAT gateways, one for each public subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ.", ko: "각 AZ의 퍼블릭 서브넷마다 NAT 게이트웨이를 하나씩 총 3개 생성한다. 각 AZ별 프라이빗 라우팅 테이블에서 VPC 외부 트래픽을 같은 AZ의 NAT 게이트웨이로 전달한다." },
      { k: "B", en: "Create three NAT instances, one for each private subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT instance in its AZ.", ko: "각 AZ의 프라이빗 서브넷마다 NAT 인스턴스를 하나씩 생성하고 각 AZ의 외부 트래픽을 해당 NAT 인스턴스로 전달한다." },
      { k: "C", en: "Create a second internet gateway on one of the private subnets. Update the route table for the private subnets that forward non-VPC traffic to the private internet gateway.", ko: "프라이빗 서브넷 중 하나에 두 번째 인터넷 게이트웨이를 만들고 프라이빗 서브넷의 외부 트래픽을 해당 게이트웨이로 전달한다." },
      { k: "D", en: "Create an egress-only internet gateway on one of the public subnets. Update the route table for the private subnets that forward non-VPC traffic to the egress-only Internet gateway.", ko: "퍼블릭 서브넷 중 하나에 송신 전용 인터넷 게이트웨이를 만들고 프라이빗 서브넷의 외부 트래픽을 해당 게이트웨이로 전달한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "NAT 게이트웨이는 인터넷 게이트웨이 경로가 있는 **퍼블릭 서브넷**에 배치해야 합니다. 각 AZ에 하나씩 배치하고 프라이빗 서브넷이 같은 AZ의 NAT 게이트웨이를 사용하게 하면 한 AZ 장애가 다른 AZ의 인터넷 송신 경로에 영향을 주지 않으며 AZ 간 데이터 전송도 피할 수 있습니다.",
      en: "Place one managed NAT gateway in each AZ's public subnet and route each private subnet through its local NAT gateway. This avoids a cross-AZ dependency and provides highly available IPv4 outbound internet access."
    },
    why_wrong: {
      B: { ko: "NAT 인스턴스는 인터넷 경로를 위해 퍼블릭 서브넷에 있어야 하며 패치·확장·장애 조치를 직접 관리해야 합니다.", en: "NAT instances must be in public subnets and require self-managed patching, scaling, and failover." },
      C: { ko: "인터넷 게이트웨이는 서브넷이 아니라 VPC에 연결하며 한 VPC에 두 번째 인터넷 게이트웨이를 연결할 수 없습니다.", en: "An internet gateway attaches to a VPC rather than a subnet, and a VPC cannot have a second attached internet gateway." },
      D: { ko: "송신 전용 인터넷 게이트웨이는 IPv6 전용이며 이 VPC는 IPv4를 사용합니다.", en: "An egress-only internet gateway supports IPv6, while this design uses IPv4." }
    }
  }
  ,{
    id: "exam3-102", number: 102, tags: ["DataSync", "EFS", "Migration"],
    question: {
      en: "A company wants to migrate an on-premises data center to AWS. The data center hosts an SFTP server that stores its data on an NFS-based file system. The server holds 200 GB of data that needs to be transferred. The server must be hosted on an Amazon EC2 instance that uses an Amazon Elastic File System (Amazon EFS) file system.\nWhich combination of steps should a solutions architect take to automate this task? (Choose two.)",
      ko: "회사는 온프레미스 데이터 센터를 AWS로 이전하려 합니다. 데이터 센터에는 NFS 기반 파일 시스템에 데이터를 저장하는 SFTP 서버가 있고, 전송할 데이터는 200GB입니다. 이전 후 서버는 EFS 파일 시스템을 사용하는 EC2 인스턴스에서 실행되어야 합니다.\n이 작업을 자동화하기 위해 어떤 단계 조합을 수행해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Launch the EC2 instance into the same Availability Zone as the EFS file system.", ko: "EFS 파일 시스템과 같은 가용 영역에 EC2 인스턴스를 시작한다." },
      { k: "B", en: "Install an AWS DataSync agent in the on-premises data center.", ko: "온프레미스 데이터 센터에 AWS DataSync 에이전트를 설치한다." },
      { k: "C", en: "Create a secondary Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instance for the data.", ko: "데이터용 보조 EBS 볼륨을 EC2 인스턴스에 생성한다." },
      { k: "D", en: "Manually use an operating system copy command to push the data to the EC2 instance.", ko: "운영 체제 복사 명령을 수동으로 사용해 데이터를 EC2 인스턴스로 전송한다." },
      { k: "E", en: "Use AWS DataSync to create a suitable location configuration for the on-premises SFTP server.", ko: "AWS DataSync에서 온프레미스 SFTP 서버에 적합한 위치 구성을 생성한다." }
    ],
    answer: ["B", "E"],
    explanation: {
      ko: "온프레미스에 DataSync 에이전트를 배포하고(B), SFTP 서버가 사용하는 NFS 파일 시스템을 소스 위치로 구성해(E) 대상 EFS로 전송 작업을 만들면 반복 가능한 관리형 마이그레이션이 됩니다. DataSync가 복사, 재시도, 검증을 자동으로 처리합니다.",
      en: "Deploy a DataSync agent on premises and configure the source location for the file system used by the SFTP server. DataSync then automates transfer, retries, and verification into EFS."
    },
    why_wrong: {
      A: { ko: "EFS는 리전 서비스로 여러 AZ의 마운트 대상을 통해 접근하므로 EC2를 특정 한 AZ에 묶을 필요가 없습니다.", en: "EFS is Regional and is accessed through mount targets across AZs, so EC2 need not be constrained to one AZ." },
      C: { ko: "최종 저장소는 EFS이며 중간 EBS 볼륨은 필요하지 않습니다.", en: "EFS is the destination, so a secondary EBS staging volume is unnecessary." },
      D: { ko: "수동 복사는 작업 자동화 요구와 맞지 않으며 DataSync의 재시도와 무결성 검증도 잃습니다.", en: "A manual copy does not automate the migration and lacks DataSync's retry and verification capabilities." }
    }
  }
  ,{
    id: "exam3-103", number: 103, tags: ["AWS Glue", "Job Bookmarks", "ETL"],
    question: {
      en: "A company has an AWS Glue extract, transform, and load (ETL) job that runs every day at the same time. The job processes XML data that is in an Amazon S3 bucket. New data is added to the S3 bucket every day. A solutions architect notices that AWS Glue is processing all the data during each run.\nWhat should the solutions architect do to prevent AWS Glue from reprocessing old data?",
      ko: "회사는 매일 같은 시간에 실행되는 AWS Glue ETL 작업을 보유하고 있습니다. 이 작업은 S3 버킷의 XML 데이터를 처리하고 버킷에는 매일 새 데이터가 추가됩니다. Glue가 실행될 때마다 모든 데이터를 다시 처리하고 있습니다.\n이전 데이터를 재처리하지 않게 하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Edit the job to use job bookmarks.", ko: "작업에서 작업 북마크를 사용하도록 수정한다." },
      { k: "B", en: "Edit the job to delete data after the data is processed.", ko: "데이터 처리 후 삭제하도록 작업을 수정한다." },
      { k: "C", en: "Edit the job by setting the NumberOfWorkers field to 1.", ko: "작업의 NumberOfWorkers 필드를 1로 설정한다." },
      { k: "D", en: "Use a FindMatches machine learning (ML) transform.", ko: "FindMatches 머신러닝 변환을 사용한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "Glue 작업 북마크는 이전 실행에서 처리한 데이터의 상태를 기록합니다. 다음 실행에서는 새로 추가되거나 변경된 데이터만 식별해 처리하므로 기존 객체의 반복 처리를 방지합니다.",
      en: "Glue job bookmarks track data already processed by previous runs. Subsequent runs can process only new or changed input instead of rereading the entire dataset."
    },
    why_wrong: {
      B: { ko: "처리 후 원본 데이터를 삭제하면 보존과 재처리 가능성을 잃으며 북마크로 해결할 문제입니다.", en: "Deleting source data sacrifices retention and replay capability and is unnecessary when bookmarks solve the problem." },
      C: { ko: "작업자 수는 처리 용량만 바꾸며 어떤 데이터가 이미 처리됐는지 추적하지 않습니다.", en: "Worker count changes processing capacity but does not track previously processed input." },
      D: { ko: "FindMatches는 중복 레코드 식별·연결용이며 증분 ETL 상태 추적 기능이 아닙니다.", en: "FindMatches identifies matching records and is not an incremental ETL state mechanism." }
    }
  }
  ,{
    id: "exam3-104", number: 104, tags: ["Shield Advanced", "CloudFront", "DDoS"],
    question: {
      en: "A solutions architect must design a highly available infrastructure for a website. The website is powered by Windows web servers that run on Amazon EC2 instances. The solutions architect must implement a solution that can mitigate a large-scale DDoS attack that originates from thousands of IP addresses. Downtime is not acceptable for the website.\nWhich actions should the solutions architect take to protect the website from such an attack? (Choose two.)",
      ko: "솔루션스 아키텍트는 EC2의 Windows 웹 서버로 구동되는 웹사이트의 고가용성 인프라를 설계해야 합니다. 수천 개 IP 주소에서 발생하는 대규모 DDoS 공격을 완화해야 하며 다운타임은 허용되지 않습니다.\n웹사이트를 보호하기 위해 어떤 조치를 수행해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Use AWS Shield Advanced to stop the DDoS attack.", ko: "AWS Shield Advanced를 사용해 DDoS 공격을 차단한다." },
      { k: "B", en: "Configure Amazon GuardDuty to automatically block the attackers.", ko: "공격자를 자동 차단하도록 Amazon GuardDuty를 구성한다." },
      { k: "C", en: "Configure the website to use Amazon CloudFront for both static and dynamic content.", ko: "웹사이트가 정적 및 동적 콘텐츠 모두에 CloudFront를 사용하도록 구성한다." },
      { k: "D", en: "Use an AWS Lambda function to automatically add attacker IP addresses to VPC network ACLs.", ko: "Lambda 함수로 공격자 IP 주소를 VPC 네트워크 ACL에 자동 추가한다." },
      { k: "E", en: "Use EC2 Spot Instances in an Auto Scaling group with a target tracking scaling policy that is set to 80% CPU utilization.", ko: "CPU 사용률 80%의 대상 추적 정책이 있는 Auto Scaling 그룹에서 EC2 스팟 인스턴스를 사용한다." }
    ],
    answer: ["A", "C"],
    explanation: {
      ko: "CloudFront는 전 세계 엣지 네트워크에서 정적·동적 요청을 흡수하고 오리진 노출과 부하를 줄입니다(C). Shield Advanced는 대규모 DDoS 탐지·완화, DDoS Response Team 지원, 비용 보호를 제공하므로 중단이 허용되지 않는 중요 사이트에 적합합니다(A).",
      en: "CloudFront distributes both static and dynamic traffic across the global edge network, reducing origin exposure and load. Shield Advanced adds enhanced DDoS detection, mitigation, response support, and cost protection."
    },
    why_wrong: {
      B: { ko: "GuardDuty는 위협 탐지 서비스이며 공격 트래픽을 자동 차단하는 DDoS 완화 서비스가 아닙니다.", en: "GuardDuty detects threats but is not an automatic DDoS traffic-blocking service." },
      D: { ko: "수천 개로 계속 변하는 IP를 NACL에 추가하는 방식은 확장성과 규칙 한계 때문에 대규모 DDoS 대응에 부적합합니다.", en: "Adding thousands of changing IPs to NACLs does not scale and is constrained by rule limits." },
      E: { ko: "스팟 인스턴스는 중단될 수 있고 단순 확장은 공격 트래픽을 완화하지 않으며 비용만 증가시킬 수 있습니다.", en: "Spot instances can be interrupted, and scaling the origin does not mitigate attack traffic and can increase cost." }
    }
  }
  ,{
    id: "exam3-105", number: 105, tags: ["Lambda", "EventBridge", "IAM", "Resource Policy"],
    question: {
      en: "A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function.\nWhich solution meets these requirements?",
      ko: "회사는 새 서버리스 워크로드를 배포할 예정입니다. 최소 권한 원칙에 따라 Lambda 함수 실행 권한을 구성해야 하며 EventBridge 규칙이 함수를 호출합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Add an execution role to the function with lambda:InvokeFunction as the action and * as the principal.", ko: "`lambda:InvokeFunction` 작업과 `*` 보안 주체를 가진 실행 역할을 함수에 추가한다." },
      { k: "B", en: "Add an execution role to the function with lambda:InvokeFunction as the action and Service: lambda.amazonaws.com as the principal.", ko: "`lambda:InvokeFunction` 작업과 `lambda.amazonaws.com` 서비스 보안 주체를 가진 실행 역할을 함수에 추가한다." },
      { k: "C", en: "Add a resource-based policy to the function with lambda:* as the action and Service: events.amazonaws.com as the principal.", ko: "`lambda:*` 작업과 `events.amazonaws.com` 서비스 보안 주체를 가진 리소스 기반 정책을 함수에 추가한다." },
      { k: "D", en: "Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service: events.amazonaws.com as the principal.", ko: "`lambda:InvokeFunction` 작업과 `events.amazonaws.com` 서비스 보안 주체를 가진 리소스 기반 정책을 함수에 추가한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "AWS 서비스가 Lambda를 호출하도록 허용할 때는 함수의 **리소스 기반 정책**에 권한을 추가합니다. EventBridge 서비스 보안 주체 `events.amazonaws.com`에 필요한 작업인 `lambda:InvokeFunction`만 허용하면 최소 권한을 충족합니다.",
      en: "Service invocation permission belongs in the Lambda function's resource-based policy. Grant only lambda:InvokeFunction to the EventBridge service principal events.amazonaws.com."
    },
    why_wrong: {
      A: { ko: "실행 역할은 Lambda 함수가 다른 AWS 리소스에 접근할 때 사용하며 호출자 권한을 부여하는 곳이 아닙니다. `*` 보안 주체도 과도합니다.", en: "The execution role controls what the function can access, not who can invoke it, and a wildcard principal is excessive." },
      B: { ko: "Lambda 서비스 보안 주체는 실행 역할 신뢰 정책에 사용되지만 EventBridge의 함수 호출 권한을 부여하지 않습니다.", en: "The Lambda service principal belongs in the execution-role trust policy and does not authorize EventBridge invocation." },
      C: { ko: "정책 유형과 보안 주체는 맞지만 `lambda:*`는 호출에 필요한 권한보다 훨씬 넓습니다.", en: "The policy type and principal are correct, but lambda:* is broader than the required invocation permission." }
    }
  }
  ,{
    id: "exam3-106", number: 106, tags: ["S3", "SSE-KMS", "Key Rotation", "CloudTrail"],
    question: {
      en: "A company is preparing to store confidential data in Amazon S3. For compliance reasons, the data must be encrypted at rest. Encryption key usage must be logged for auditing purposes. Keys must be rotated every year.\nWhich solution meets these requirements and is the MOST operationally efficient?",
      ko: "회사는 기밀 데이터를 S3에 저장하려 합니다. 규정 준수를 위해 저장 데이터 암호화가 필요하고, 감사 목적으로 암호화 키 사용을 기록해야 하며 키는 매년 교체해야 합니다.\n가장 운영 효율적으로 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Server-side encryption with customer-provided keys (SSE-C)", ko: "고객 제공 키를 사용한 서버 측 암호화(SSE-C)" },
      { k: "B", en: "Server-side encryption with Amazon S3 managed keys (SSE-S3)", ko: "Amazon S3 관리형 키를 사용한 서버 측 암호화(SSE-S3)" },
      { k: "C", en: "Server-side encryption with AWS KMS keys (SSE-KMS) with manual rotation", ko: "수동 교체하는 AWS KMS 키를 사용한 서버 측 암호화(SSE-KMS)" },
      { k: "D", en: "Server-side encryption with AWS KMS keys (SSE-KMS) with automatic rotation", ko: "자동 교체하는 AWS KMS 키를 사용한 서버 측 암호화(SSE-KMS)" }
    ],
    answer: ["D"],
    explanation: {
      ko: "SSE-KMS는 KMS 키 사용을 CloudTrail에 기록해 감사할 수 있으며 고객 관리형 KMS 키의 자동 교체를 활성화할 수 있습니다. AWS가 매년 키 재료 교체를 관리하므로 감사·교체 요구를 가장 적은 운영 부담으로 충족합니다.",
      en: "SSE-KMS provides auditable KMS API usage through CloudTrail, and automatic rotation of a customer managed KMS key handles annual key rotation with minimal operations."
    },
    why_wrong: {
      A: { ko: "SSE-C는 키 저장·제공·교체를 회사가 직접 관리해야 하며 KMS 수준의 키 사용 감사 기록을 제공하지 않습니다.", en: "SSE-C requires the company to store, supply, and rotate keys and does not provide KMS-level key-use audit logs." },
      B: { ko: "SSE-S3는 키를 AWS가 관리하지만 개별 키 사용을 감사할 KMS API 기록과 고객 제어 교체 구성을 제공하지 않습니다.", en: "SSE-S3 lacks customer-controlled KMS audit events and rotation configuration." },
      C: { ko: "감사 요구는 충족하지만 매년 수동 교체해야 하므로 자동 교체보다 운영 부담이 큽니다.", en: "It supports auditing but creates more annual operational work than automatic rotation." }
    }
  }
  ,{
    id: "exam3-107", number: 107, tags: ["API Gateway", "Lambda", "REST API"],
    question: {
      en: "A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak operating hours. The company wants to use these data points in its existing analytics platform. A solutions architect must determine the most viable multi-tier option to support this architecture. The data points must be accessible from the REST API.\nWhich action meets these requirements for storing and retrieving location data?",
      ko: "자전거 공유 회사가 피크 운영 시간에 자전거 위치를 추적하는 다계층 아키텍처를 개발합니다. 위치 데이터는 기존 분석 플랫폼에서 사용되며 REST API로 접근할 수 있어야 합니다.\n위치 데이터를 저장하고 검색하는 요구를 충족하는 조치는 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use Amazon Athena with Amazon S3.", ko: "Amazon S3와 Amazon Athena를 사용한다." },
      { k: "B", en: "Use Amazon API Gateway with AWS Lambda.", ko: "Amazon API Gateway와 AWS Lambda를 사용한다." },
      { k: "C", en: "Use Amazon QuickSight with Amazon Redshift.", ko: "Amazon QuickSight와 Amazon Redshift를 사용한다." },
      { k: "D", en: "Use Amazon API Gateway with Amazon Kinesis Data Analytics.", ko: "Amazon API Gateway와 Amazon Kinesis Data Analytics를 사용한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "API Gateway는 위치 데이터에 대한 REST 엔드포인트를 제공하고 Lambda는 요청 검증, 데이터 저장·조회, 기존 분석 계층 연동 로직을 실행할 수 있습니다. 두 서비스 모두 요청량에 따라 자동 확장되어 피크 시간의 다계층 API에 적합합니다.",
      en: "API Gateway exposes the REST endpoints, while Lambda implements the storage, retrieval, validation, and analytics-integration logic. Both scale automatically for peak demand."
    },
    why_wrong: {
      A: { ko: "Athena와 S3는 분석에는 적합하지만 실시간 저장·검색 REST API 계층을 직접 제공하지 않습니다.", en: "Athena and S3 support analytics but do not directly provide the required real-time REST application tier." },
      C: { ko: "QuickSight와 Redshift는 시각화·분석 조합이며 애플리케이션 REST API가 아닙니다.", en: "QuickSight and Redshift are an analytics and visualization stack, not an application REST API." },
      D: { ko: "Kinesis Data Analytics는 스트림 분석 서비스이며 일반적인 REST 요청의 저장·검색 백엔드가 아닙니다.", en: "Kinesis Data Analytics analyzes streams and is not a general storage and retrieval backend for REST requests." }
    }
  }
  ,{
    id: "exam3-108", number: 108, tags: ["SNS", "SQS", "Lambda", "Fanout"],
    question: {
      en: "A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target systems.\nWhich design should a solutions architect recommend?",
      ko: "회사의 자동차 판매 웹사이트는 RDS 데이터베이스에 매물 정보를 저장합니다. 자동차가 판매되면 웹사이트에서 매물을 제거하고 데이터를 여러 대상 시스템에 보내야 합니다.\n어떤 설계를 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.", ko: "RDS 데이터베이스가 업데이트되면 Lambda가 정보를 하나의 SQS 큐로 보내 여러 대상이 소비하게 한다." },
      { k: "B", en: "Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) FIFO queue for the targets to consume.", ko: "RDS 데이터베이스가 업데이트되면 Lambda가 정보를 하나의 SQS FIFO 큐로 보내 여러 대상이 소비하게 한다." },
      { k: "C", en: "Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue fanned out to multiple Amazon Simple Notification Service (Amazon SNS) topics. Use AWS Lambda functions to update the targets.", ko: "RDS 이벤트 알림을 구독해 하나의 SQS 큐에서 여러 SNS 토픽으로 팬아웃하고 Lambda 함수로 대상을 업데이트한다." },
      { k: "D", en: "Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets.", ko: "RDS 이벤트 알림을 구독해 하나의 SNS 토픽에서 여러 SQS 큐로 팬아웃하고 Lambda 함수로 각 대상을 업데이트한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "여러 대상 시스템에 같은 이벤트를 전달하려면 SNS 토픽에서 대상별 SQS 큐로 **팬아웃**하는 패턴이 적합합니다. 각 대상은 독립된 큐와 Lambda 소비자를 사용하므로 한 대상의 지연이나 장애가 다른 대상을 막지 않고 이벤트도 내구성 있게 보관됩니다.",
      en: "Fan out one event through SNS to a separate SQS queue for each target. Independent queues and Lambda consumers isolate target failures and durably retain each target's copy of the event."
    },
    why_wrong: {
      A: { ko: "여러 소비자가 하나의 SQS 큐를 공유하면 메시지는 그중 한 소비자에게만 처리되어 모든 대상에 전달되지 않습니다.", en: "Competing consumers on one SQS queue divide messages rather than delivering a copy to every target." },
      B: { ko: "FIFO 큐도 하나의 메시지를 여러 대상 각각에 복제하지 않으므로 팬아웃 요구를 충족하지 못합니다.", en: "A single FIFO queue still does not create one copy for each target." },
      C: { ko: "팬아웃 방향이 반대입니다. SNS가 여러 SQS 구독으로 메시지를 복제해야 합니다.", en: "The fanout direction is reversed; SNS should publish copies to multiple SQS subscriptions." }
    }
  }
  ,{
    id: "exam3-109", number: 109, tags: ["S3", "Object Lock", "Legal Hold", "Governance"],
    question: {
      en: "A company needs to store data in Amazon S3 and must prevent the data from being changed. The company wants new objects that are uploaded to Amazon S3 to remain unchangeable for a nonspecific amount of time until the company decides to modify the objects. Only specific users in the company's AWS account can have the ability to delete the objects.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 S3에 데이터를 저장하고 변경을 방지해야 합니다. 새 객체는 회사가 수정하기로 결정할 때까지 정해지지 않은 기간 동안 변경 불가능해야 하며, 회사 AWS 계정의 특정 사용자만 객체를 삭제할 수 있어야 합니다.\n이 요구사항을 충족하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an S3 Glacier vault. Apply a write-once, read-many (WORM) vault lock policy to the objects.", ko: "S3 Glacier 볼트를 만들고 객체에 WORM 볼트 잠금 정책을 적용한다." },
      { k: "B", en: "Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Set a retention period of 100 years. Use governance mode as the S3 bucket's default retention mode for new objects.", ko: "S3 Object Lock과 버전 관리를 활성화한 버킷을 만든다. 보존 기간을 100년으로 설정하고 새 객체의 기본 보존 모드로 거버넌스 모드를 사용한다." },
      { k: "C", en: "Create an S3 bucket. Use AWS CloudTrail to track any S3 API events that modify the objects. Upon notification, restore the modified objects from any backup versions that the company has.", ko: "S3 버킷을 만들고 CloudTrail로 객체 수정 API 이벤트를 추적한다. 알림을 받으면 회사가 보유한 백업 버전에서 수정된 객체를 복원한다." },
      { k: "D", en: "Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Add a legal hold to the objects. Add the s3:PutObjectLegalHold permission to the IAM policies of users who need to delete the objects.", ko: "S3 Object Lock과 버전 관리를 활성화한 버킷을 만들고 객체에 법적 보존을 추가한다. 객체를 삭제할 필요가 있는 사용자의 IAM 정책에 `s3:PutObjectLegalHold` 권한을 추가한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "Object Lock의 **법적 보존(legal hold)** 은 종료 날짜 없이 객체 버전을 변경·삭제할 수 없게 하므로 기간이 정해지지 않은 요구에 맞습니다. `s3:PutObjectLegalHold` 권한이 있는 특정 사용자만 보존을 해제할 수 있고, 해제 후 객체를 수정하거나 삭제할 수 있습니다.",
      en: "An Object Lock legal hold has no fixed expiration and keeps an object version immutable until explicitly removed. Only selected users with s3:PutObjectLegalHold can remove the hold before authorized modification or deletion."
    },
    why_wrong: {
      A: { ko: "Glacier Vault Lock은 아카이브 볼트 정책용이며 일반 S3 객체를 필요할 때 선택적으로 수정하는 요구에 적합하지 않습니다.", en: "Glacier Vault Lock governs archive vaults and is not the flexible object-level mechanism required here." },
      B: { ko: "100년은 임의의 고정 기간이며 회사가 더 일찍 수정하기로 결정할 수 있다는 요구를 정확히 표현하지 못합니다.", en: "A fixed 100-year retention period does not represent an indefinite hold that ends when the company decides." },
      C: { ko: "CloudTrail은 변경을 탐지할 뿐 변경 자체를 방지하지 않으며 백업 복원도 사후 대응입니다.", en: "CloudTrail detects changes but does not prevent them; restoring backups is reactive." }
    }
  }
  ,{
    id: "exam3-110", number: 110, tags: ["S3", "Presigned URL", "Lambda", "Event-Driven"],
    question: {
      en: "A social media company allows users to upload images to its website. The website runs on Amazon EC2 instances. During upload requests, the website resizes the images to a standard size and stores the resized images in Amazon S3. Users are experiencing slow upload requests to the website. The company needs to reduce coupling within the application and improve website performance. A solutions architect must design the most operationally efficient process for image uploads.\nWhich combination of actions should the solutions architect take to meet these requirements? (Choose two.)",
      ko: "소셜 미디어 회사의 사용자는 웹사이트에 이미지를 업로드합니다. 웹사이트는 EC2에서 실행되며 업로드 요청 중 이미지를 표준 크기로 조정해 S3에 저장합니다. 사용자는 업로드가 느리다고 보고합니다. 애플리케이션 결합도를 낮추고 성능을 개선하는 가장 운영 효율적인 이미지 업로드 절차가 필요합니다.\n어떤 조치 조합을 수행해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Configure the application to upload images to S3 Glacier.", ko: "애플리케이션이 이미지를 S3 Glacier에 업로드하도록 구성한다." },
      { k: "B", en: "Configure the web server to upload the original images to Amazon S3.", ko: "웹 서버가 원본 이미지를 S3에 업로드하도록 구성한다." },
      { k: "C", en: "Configure the application to upload images directly from each user's browser to Amazon S3 through the use of a presigned URL.", ko: "미리 서명된 URL을 사용해 각 사용자의 브라우저에서 S3로 이미지를 직접 업로드하도록 애플리케이션을 구성한다." },
      { k: "D", en: "Configure S3 Event Notifications to invoke an AWS Lambda function when an image is uploaded. Use the function to resize the image.", ko: "이미지가 업로드되면 S3 이벤트 알림이 Lambda 함수를 호출하도록 구성하고 함수로 이미지 크기를 조정한다." },
      { k: "E", en: "Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function on a schedule to resize uploaded images.", ko: "예약된 시간에 Lambda 함수를 호출해 업로드된 이미지 크기를 조정하는 EventBridge 규칙을 만든다." }
    ],
    answer: ["C", "D"],
    explanation: {
      ko: "미리 서명된 URL을 사용하면 브라우저가 웹 서버를 거치지 않고 S3로 직접 업로드해 EC2 부하와 요청 시간을 줄입니다(C). S3 객체 생성 이벤트로 Lambda를 즉시 호출해 비동기로 크기를 조정하면 업로드와 처리 단계가 분리되고 서버를 운영할 필요도 없습니다(D).",
      en: "A presigned URL lets the browser upload directly to S3, removing the EC2 server from the data path. An S3 event then invokes Lambda to resize the image asynchronously, decoupling upload from processing."
    },
    why_wrong: {
      A: { ko: "Glacier는 아카이브 계층이므로 즉시 이미지 처리와 웹 제공에 적합하지 않습니다.", en: "Glacier is an archive tier and is unsuitable for immediate image processing and web delivery." },
      B: { ko: "웹 서버를 업로드 경로에 계속 두므로 서버 부하와 결합도를 충분히 줄이지 못합니다.", en: "Keeping the web server in the upload data path retains load and coupling." },
      E: { ko: "예약 처리하면 업로드 후 크기 조정이 지연되고 새 객체를 추적하는 추가 로직이 필요합니다.", en: "Scheduled processing delays resizing and requires extra logic to discover new objects." }
    }
  }
  ,{
    id: "exam3-111", number: 111, tags: ["Amazon MQ", "Auto Scaling", "RDS", "High Availability"],
    question: {
      en: "A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity.\nWhich architecture offers the HIGHEST availability?",
      ko: "회사는 최근 메시지 처리 시스템을 AWS로 이전했습니다. EC2에서 실행되는 ActiveMQ 큐가 메시지를 받고, 다른 EC2의 소비자 애플리케이션이 메시지를 처리해 EC2의 MySQL 데이터베이스에 결과를 기록합니다. 회사는 운영 복잡성을 낮게 유지하면서 애플리케이션의 고가용성을 확보하려 합니다.\n가장 높은 가용성을 제공하는 아키텍처는 무엇입니까?"
    },
    options: [
      { k: "A", en: "Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.", ko: "다른 AZ에 두 번째 ActiveMQ 서버와 추가 소비자 EC2 인스턴스를 배치하고 MySQL 데이터베이스를 다른 AZ로 복제한다." },
      { k: "B", en: "Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.", ko: "두 AZ에 활성/대기 브로커로 구성된 Amazon MQ를 사용한다. 다른 AZ에 소비자 EC2 인스턴스를 추가하고 MySQL 데이터베이스를 다른 AZ로 복제한다." },
      { k: "C", en: "Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled.", ko: "두 AZ에 활성/대기 브로커로 구성된 Amazon MQ를 사용한다. 다른 AZ에 소비자 EC2 인스턴스를 추가하고 다중 AZ가 활성화된 RDS for MySQL을 사용한다." },
      { k: "D", en: "Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an Auto Scaling group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with Multi-AZ enabled.", ko: "두 AZ에 활성/대기 브로커로 구성된 Amazon MQ를 사용한다. 소비자 EC2 인스턴스를 두 AZ의 Auto Scaling 그룹으로 구성하고 다중 AZ가 활성화된 RDS for MySQL을 사용한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "Amazon MQ 활성/대기 브로커는 두 AZ에서 관리형 장애 조치를 제공합니다. 소비자를 다중 AZ Auto Scaling 그룹에 두면 장애 인스턴스 교체와 용량 유지가 자동화되고, RDS for MySQL 다중 AZ는 동기식 대기 복제본과 자동 DB 장애 조치를 제공합니다. 모든 계층에서 관리형 고가용성을 갖춘 D가 가장 강합니다.",
      en: "Active/standby Amazon MQ provides managed broker failover across AZs, a Multi-AZ Auto Scaling group replaces failed consumers, and RDS Multi-AZ provides managed synchronous database standby and failover."
    },
    why_wrong: {
      A: { ko: "ActiveMQ와 MySQL의 복제·장애 조치를 직접 구성하고 운영해야 합니다.", en: "The company must design and operate ActiveMQ and MySQL replication and failover itself." },
      B: { ko: "브로커 외의 소비자와 데이터베이스 계층은 여전히 수동 복제·복구가 필요합니다.", en: "The consumer and database tiers still rely on manually managed replication and recovery." },
      C: { ko: "관리형 브로커와 DB는 적합하지만 고정된 소비자 두 대는 Auto Scaling 그룹처럼 자동 교체되지 않습니다.", en: "The brokers and database are managed, but two fixed consumers lack Auto Scaling health replacement." }
    }
  }
  ,{
    id: "exam3-112", number: 112, tags: ["ECS", "Fargate", "ALB", "Auto Scaling"],
    question: {
      en: "A company hosts a containerized web application on a fleet of on-premises servers that process incoming requests. The number of requests is growing quickly. The on-premises servers cannot handle the increased number of requests. The company wants to move the application to AWS with minimum code changes and minimum development effort.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사는 수신 요청을 처리하는 온프레미스 서버 집합에서 컨테이너 웹 애플리케이션을 운영합니다. 요청이 빠르게 증가해 기존 서버가 처리하지 못하고 있습니다. 코드 변경과 개발 노력을 최소화하여 AWS로 이전하려 합니다.\n운영 부담이 가장 적은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use AWS Fargate on Amazon Elastic Container Service (Amazon ECS) to run the containerized web application with Service Auto Scaling. Use an Application Load Balancer to distribute the incoming requests.", ko: "ECS의 AWS Fargate에서 컨테이너 웹 애플리케이션을 Service Auto Scaling으로 실행하고 ALB로 수신 요청을 분산한다." },
      { k: "B", en: "Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer to distribute the incoming requests.", ko: "두 EC2 인스턴스에서 컨테이너 애플리케이션을 호스팅하고 ALB로 요청을 분산한다." },
      { k: "C", en: "Use AWS Lambda with a new code that uses one of the supported languages. Create multiple Lambda functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.", ko: "지원 언어로 코드를 새로 작성해 여러 Lambda 함수를 만들고 API Gateway를 진입점으로 사용한다." },
      { k: "D", en: "Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster that can process the incoming requests at the appropriate scale.", ko: "AWS ParallelCluster 같은 HPC 솔루션으로 수신 요청을 적절한 규모에서 처리하는 HPC 클러스터를 구성한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "기존 컨테이너 이미지를 ECS로 거의 그대로 이전할 수 있고, Fargate가 서버 프로비저닝과 패치를 관리합니다. Service Auto Scaling이 요청량에 따라 작업 수를 조절하고 ALB가 HTTP 트래픽을 분산하므로 코드 변경과 운영 부담이 가장 적습니다.",
      en: "ECS on Fargate runs the existing container without managing servers. Service Auto Scaling adjusts task count and an ALB distributes web traffic, minimizing code changes and operations."
    },
    why_wrong: {
      B: { ko: "고정된 EC2 두 대는 빠르게 증가하는 요청에 자동 확장되지 않고 서버 운영 부담도 남습니다.", en: "Two fixed EC2 instances do not scale with rapid growth and still require server management." },
      C: { ko: "컨테이너 애플리케이션을 Lambda 함수로 다시 작성해야 하므로 코드 변경과 개발 노력이 큽니다.", en: "Rewriting the container application as Lambda functions requires substantial code and development changes." },
      D: { ko: "ParallelCluster는 배치형 HPC 워크로드용이며 일반 웹 요청 처리에 적합하지 않습니다.", en: "ParallelCluster targets HPC batch workloads, not ordinary scalable web request handling." }
    }
  }
  ,{
    id: "exam3-113", number: 113, tags: ["Snowball Edge", "Migration", "EC2"],
    question: {
      en: "A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A custom application in the company's data center runs a weekly data transformation job. The company plans to pause the application until the data transfer is complete and needs to begin the transfer process as soon as possible. The data center does not have any available network bandwidth for additional workloads. A solutions architect must transfer the data and must configure the transformation job to continue to run in the AWS Cloud.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사는 보고에 사용하는 50TB 데이터를 온프레미스에서 AWS로 이전하려 합니다. 데이터 센터의 사용자 지정 애플리케이션이 매주 데이터 변환 작업을 실행합니다. 전송이 완료될 때까지 애플리케이션을 중지할 예정이며 가능한 한 빨리 전송을 시작해야 합니다. 데이터 센터에는 추가 워크로드에 사용할 네트워크 대역폭이 없습니다. 데이터 전송 후 변환 작업을 AWS 클라우드에서 계속 실행해야 합니다.\n운영 부담이 가장 적은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue.", ko: "DataSync로 데이터를 이전하고 AWS Glue로 사용자 지정 변환 작업을 만든다." },
      { k: "B", en: "Order an AWS Snowcone device to move the data. Deploy the transformation application to the device.", ko: "AWS Snowcone 디바이스로 데이터를 이전하고 변환 애플리케이션을 디바이스에 배포한다." },
      { k: "C", en: "Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue.", ko: "Snowball Edge Storage Optimized 디바이스를 주문해 데이터를 복사하고 AWS Glue로 사용자 지정 변환 작업을 만든다." },
      { k: "D", en: "Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application.", ko: "Amazon EC2 컴퓨팅이 포함된 Snowball Edge Storage Optimized 디바이스를 주문해 데이터를 복사하고 AWS에 새 EC2 인스턴스를 만들어 변환 애플리케이션을 실행한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "가용 네트워크 대역폭이 없고 데이터가 50TB이므로 오프라인 Snowball Edge 전송이 적합합니다. 기존 사용자 지정 변환 애플리케이션은 AWS의 EC2로 옮겨 계속 실행할 수 있어 Glue 작업으로 다시 작성할 필요가 없습니다. Snowcone 한 대의 용량으로는 50TB를 담을 수 없습니다.",
      en: "With no spare bandwidth, a Snowball Edge provides offline transfer for 50 TB. Moving the existing transformation application to EC2 avoids rewriting it as a Glue job, while Snowcone capacity is insufficient."
    },
    why_wrong: {
      A: { ko: "DataSync는 네트워크 대역폭을 사용하므로 현재 환경에서 전송할 수 없습니다.", en: "DataSync requires network bandwidth that the data center does not have available." },
      B: { ko: "Snowcone의 저장 용량은 50TB 전체 전송에 충분하지 않습니다.", en: "A Snowcone device does not have enough usable capacity for the full 50 TB transfer." },
      C: { ko: "데이터 이전은 가능하지만 기존 사용자 지정 애플리케이션을 Glue 작업으로 다시 구현해야 합니다.", en: "The transfer works, but recreating the custom application as a Glue job adds development and operations." }
    }
  }
  ,{
    id: "exam3-114", number: 114, tags: ["Lambda", "S3", "DynamoDB", "Serverless"],
    question: {
      en: "A company has created an image analysis application in which users can upload photos and add photo frames to their images. The users upload images and metadata to indicate which photo frames they want to add to their images. The application uses a single Amazon EC2 instance and Amazon DynamoDB to store the metadata. The application is becoming more popular, and the number of users is increasing. The company expects the number of concurrent users to vary significantly depending on the time of day and day of week. The company must ensure that the application can scale to meet the needs of the growing user base.\nWhich solution meets these requirements?",
      ko: "회사는 사용자가 사진을 업로드하고 프레임을 추가하는 이미지 분석 애플리케이션을 만들었습니다. 사용자는 이미지와 원하는 프레임을 나타내는 메타데이터를 업로드합니다. 현재 단일 EC2 인스턴스를 사용하며 메타데이터는 DynamoDB에 저장합니다. 사용자가 늘고 동시 사용자 수가 시간과 요일에 따라 크게 달라질 것으로 예상됩니다.\n증가하는 수요에 맞춰 확장할 수 있는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use AWS Lambda to process the photos. Store the photos and metadata in DynamoDB.", ko: "Lambda로 사진을 처리하고 사진과 메타데이터를 DynamoDB에 저장한다." },
      { k: "B", en: "Use Amazon Kinesis Data Firehose to process the photos and to store the photos and metadata.", ko: "Kinesis Data Firehose로 사진을 처리하고 사진과 메타데이터를 저장한다." },
      { k: "C", en: "Use AWS Lambda to process the photos. Store the photos in Amazon S3. Retain DynamoDB to store the metadata.", ko: "Lambda로 사진을 처리하고 사진은 S3에 저장하며 메타데이터는 계속 DynamoDB에 저장한다." },
      { k: "D", en: "Increase the number of EC2 instances to three. Use Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volumes to store the photos and metadata.", ko: "EC2 인스턴스를 3대로 늘리고 Provisioned IOPS SSD(io2) EBS 볼륨에 사진과 메타데이터를 저장한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "Lambda는 변동이 큰 동시 처리량에 맞춰 자동 확장됩니다. 이미지 객체는 대규모로 확장되는 S3에 저장하고 작은 구조화 메타데이터는 DynamoDB에 유지하면 각 데이터 유형에 적합한 서버리스 스토리지를 사용하게 됩니다.",
      en: "Lambda scales photo processing with variable concurrency. S3 is the appropriate scalable object store for images, while DynamoDB remains a scalable store for structured metadata."
    },
    why_wrong: {
      A: { ko: "DynamoDB 항목 최대 크기는 400KB이므로 일반 사진 객체 저장에 적합하지 않습니다.", en: "DynamoDB's 400 KB item limit makes it unsuitable for storing image objects." },
      B: { ko: "Firehose는 스트리밍 데이터를 대상으로 전달하는 서비스이며 이미지 편집 처리·저장 플랫폼이 아닙니다.", en: "Firehose delivers streaming records and is not an image-processing and storage platform." },
      D: { ko: "고정된 EC2 세 대는 큰 수요 변동에 자동 확장되지 않고 EBS도 여러 인스턴스용 객체 저장소가 아닙니다.", en: "Three fixed EC2 instances do not adapt to large demand swings, and EBS is not shared scalable object storage." }
    }
  }
  ,{
    id: "exam3-115", number: 115, tags: ["S3", "VPC Endpoint", "Private Subnet"],
    question: {
      en: "A medical records company is hosting an application on Amazon EC2 instances. The application processes customer data files that are stored on Amazon S3. The EC2 instances are hosted in public subnets. The EC2 instances access Amazon S3 over the internet, but they do not require any other network access. A new requirement mandates that the network traffic for file transfers take a private route and not be sent over the internet.\nWhich change to the network architecture should a solutions architect recommend to meet this requirement?",
      ko: "의료 기록 회사는 EC2 인스턴스에서 애플리케이션을 호스팅하고 S3의 고객 데이터 파일을 처리합니다. EC2는 퍼블릭 서브넷에서 인터넷을 통해 S3에 접근하지만 그 외 네트워크 접근은 필요하지 않습니다. 새 요구사항에 따라 파일 전송 트래픽은 인터넷이 아닌 프라이빗 경로를 사용해야 합니다.\n어떤 네트워크 아키텍처 변경을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Create a NAT gateway. Configure the route table for the public subnets to send traffic to Amazon S3 through the NAT gateway.", ko: "NAT 게이트웨이를 만들고 퍼블릭 서브넷 라우팅 테이블에서 S3 트래픽을 NAT 게이트웨이로 보낸다." },
      { k: "B", en: "Configure the security group for the EC2 instances to restrict outbound traffic so that only traffic to the S3 prefix list is permitted.", ko: "EC2 보안 그룹의 아웃바운드 트래픽을 S3 접두사 목록으로만 제한한다." },
      { k: "C", en: "Move the EC2 instances to private subnets. Create a VPC endpoint for Amazon S3, and link the endpoint to the route table for the private subnets.", ko: "EC2 인스턴스를 프라이빗 서브넷으로 옮기고 S3용 VPC 엔드포인트를 생성해 프라이빗 서브넷 라우팅 테이블에 연결한다." },
      { k: "D", en: "Remove the internet gateway from the VPC. Set up an AWS Direct Connect connection, and route traffic to Amazon S3 over the Direct Connect connection.", ko: "VPC에서 인터넷 게이트웨이를 제거하고 Direct Connect 연결을 설정해 S3 트래픽을 해당 연결로 라우팅한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "EC2를 프라이빗 서브넷으로 옮기고 S3 게이트웨이 VPC 엔드포인트를 라우팅 테이블에 연결하면 인터넷 게이트웨이·NAT 없이 AWS 네트워크로 S3에 접근합니다. 애플리케이션에 필요한 유일한 네트워크 경로만 남길 수 있습니다.",
      en: "Private subnets remove direct internet exposure, and an S3 gateway VPC endpoint routes file transfers over the AWS network without an internet gateway or NAT."
    },
    why_wrong: {
      A: { ko: "NAT 게이트웨이는 인터넷 송신 경로이므로 프라이빗 S3 전송 요구를 충족하지 않습니다.", en: "A NAT gateway provides internet egress and does not create the required private S3 path." },
      B: { ko: "보안 그룹은 대상을 제한하지만 트래픽이 인터넷 경로를 사용하는지 바꾸지 않습니다.", en: "A security group restricts destinations but does not change the network path from internet to private." },
      D: { ko: "AWS 내부 VPC-to-S3 접근에 전용 회선인 Direct Connect를 추가하는 것은 불필요하고 비용과 운영 부담이 큽니다.", en: "Direct Connect is unnecessary and costly for private VPC-to-S3 connectivity within AWS." }
    }
  }
  ,{
    id: "exam3-116", number: 116, tags: ["S3", "CloudFront", "Static Website", "Security"],
    question: {
      en: "A company uses a popular content management system (CMS) for its corporate website. However, the required patching and maintenance are burdensome. The company is redesigning its website and wants a new solution. The website will be updated four times a year and does not need to have any dynamic content available. The solution must provide high scalability and enhanced security.\nWhich combination of changes will meet these requirements with the LEAST operational overhead? (Choose two.)",
      ko: "회사는 기업 웹사이트에 CMS를 사용하지만 패치와 유지 관리가 부담스럽습니다. 웹사이트를 새로 설계하며 연 4회만 업데이트하고 동적 콘텐츠는 필요하지 않습니다. 높은 확장성과 강화된 보안을 운영 부담을 최소화해 제공해야 합니다.\n어떤 변경 조합이 요구사항을 충족합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Configure Amazon CloudFront in front of the website to use HTTPS functionality.", ko: "웹사이트 앞에 CloudFront를 구성해 HTTPS 기능을 사용한다." },
      { k: "B", en: "Deploy an AWS WAF web ACL in front of the website to provide HTTPS functionality.", ko: "웹사이트 앞에 AWS WAF 웹 ACL을 배포해 HTTPS 기능을 제공한다." },
      { k: "C", en: "Create and deploy an AWS Lambda function to manage and serve the website content.", ko: "웹사이트 콘텐츠를 관리하고 제공하는 Lambda 함수를 생성·배포한다." },
      { k: "D", en: "Create the new website and an Amazon S3 bucket. Deploy the website on the S3 bucket with static website hosting enabled.", ko: "새 웹사이트와 S3 버킷을 만들고 정적 웹사이트 호스팅을 활성화해 배포한다." },
      { k: "E", en: "Create the new website. Deploy the website by using an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer.", ko: "새 웹사이트를 만들고 ALB 뒤의 EC2 Auto Scaling 그룹으로 배포한다." }
    ],
    answer: ["A", "D"],
    explanation: {
      ko: "동적 콘텐츠가 없고 업데이트가 드물므로 S3 정적 웹사이트 호스팅이 서버 패치 없이 자동 확장됩니다(D). 앞에 CloudFront를 두면 HTTPS, 엣지 캐시, 오리진 접근 제어 등의 보안·성능 기능을 제공할 수 있습니다(A).",
      en: "S3 static website hosting removes server and CMS maintenance while scaling automatically. CloudFront adds HTTPS and edge delivery, with controls that improve origin security."
    },
    why_wrong: {
      B: { ko: "WAF는 웹 요청을 필터링하지만 TLS 인증서와 HTTPS 연결을 종료하는 서비스가 아닙니다.", en: "WAF filters web requests but does not terminate TLS or provide HTTPS by itself." },
      C: { ko: "정적 콘텐츠 제공에 Lambda 코드를 운영할 이유가 없습니다.", en: "There is no need to operate Lambda code merely to serve static content." },
      E: { ko: "EC2, 운영 체제, 웹 서버, ALB를 계속 패치·관리해야 하므로 운영 부담이 큽니다.", en: "EC2, operating systems, web servers, and the ALB retain substantial maintenance overhead." }
    }
  }
  ,{
    id: "exam3-117", number: 117, tags: ["CloudWatch Logs", "OpenSearch", "Subscription Filter"],
    question: {
      en: "A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real time.\nWhich solution will meet this requirement with the LEAST operational overhead?",
      ko: "회사는 애플리케이션 로그를 CloudWatch Logs 로그 그룹에 저장합니다. 새 정책에 따라 모든 애플리케이션 로그를 준실시간으로 OpenSearch Service에 저장해야 합니다.\n운영 부담이 가장 적은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).", ko: "CloudWatch Logs 구독을 구성해 로그를 OpenSearch Service로 스트리밍한다." },
      { k: "B", en: "Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).", ko: "Lambda 함수를 만들고 로그 그룹이 함수를 호출해 OpenSearch Service에 로그를 기록하게 한다." },
      { k: "C", en: "Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery stream's source. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream's destination.", ko: "Kinesis Data Firehose 전송 스트림을 만들고 로그 그룹을 소스, OpenSearch Service를 대상으로 구성한다." },
      { k: "D", en: "Install and configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).", ko: "각 애플리케이션 서버에 Kinesis Agent를 설치해 Kinesis Data Streams로 로그를 전달하고 OpenSearch Service로 보내도록 구성한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "CloudWatch Logs의 구독 필터를 사용하면 로그 이벤트가 도착할 때 OpenSearch 대상 통합으로 준실시간 스트리밍할 수 있습니다. 기존 로그 수집 경로를 유지하면서 서버 에이전트나 별도 사용자 지정 파이프라인 운영을 최소화합니다.",
      en: "A CloudWatch Logs subscription filter streams matching events to the OpenSearch integration in near-real time while preserving the existing logging path and minimizing custom infrastructure."
    },
    why_wrong: {
      B: { ko: "구독 통합이 제공하는 전달 구성을 Lambda 코드로 직접 만들고 유지할 필요가 없습니다.", en: "This manually rebuilds the delivery integration with custom Lambda code." },
      C: { ko: "CloudWatch Logs 로그 그룹을 Firehose의 직접 소스로 지정하는 설명은 올바른 구성 흐름이 아닙니다.", en: "A CloudWatch Logs group is not configured as a direct Firehose source in the manner described." },
      D: { ko: "이미 CloudWatch Logs에 수집된 로그를 위해 각 서버에 새 에이전트와 스트림을 운영하는 것은 불필요합니다.", en: "Installing agents and operating a new stream is unnecessary because the logs already arrive in CloudWatch Logs." }
    }
  }
  ,{
    id: "exam3-118", number: 118, tags: ["S3", "Storage", "Cost Optimization", "Scalability"],
    question: {
      en: "A company is building a web-based application running on Amazon EC2 instances in multiple Availability Zones. The web application will provide access to a repository of text documents totaling about 900 TB in size. The company anticipates that the web application will experience periods of high demand. A solutions architect must ensure that the storage component for the text documents can scale to meet the demand of the application at all times. The company is concerned about the overall cost of the solution.\nWhich storage solution meets these requirements MOST cost-effectively?",
      ko: "회사는 여러 AZ의 EC2 인스턴스에서 웹 애플리케이션을 구축합니다. 웹 애플리케이션은 총 약 900TB의 텍스트 문서 저장소에 접근하며 수요가 높은 기간이 예상됩니다. 스토리지는 항상 애플리케이션 수요에 맞춰 확장되어야 하고 전체 비용도 중요합니다.\n가장 비용 효율적인 스토리지 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Amazon Elastic Block Store (Amazon EBS)", ko: "Amazon EBS" },
      { k: "B", en: "Amazon Elastic File System (Amazon EFS)", ko: "Amazon EFS" },
      { k: "C", en: "Amazon OpenSearch Service (Amazon Elasticsearch Service)", ko: "Amazon OpenSearch Service" },
      { k: "D", en: "Amazon S3", ko: "Amazon S3" }
    ],
    answer: ["D"],
    explanation: {
      ko: "S3는 900TB 규모의 객체를 용량 프로비저닝 없이 저장하고 높은 요청량에 자동 확장합니다. 여러 AZ에 내구성 있게 저장되며 GB당 비용도 EBS·EFS나 분석 클러스터보다 낮아 대규모 문서 저장소에 가장 비용 효율적입니다.",
      en: "S3 stores 900 TB of documents without capacity provisioning, automatically scales request throughput, and provides multi-AZ durability at a lower storage cost than block, file, or search-cluster alternatives."
    },
    why_wrong: {
      A: { ko: "EBS는 AZ에 속하는 블록 스토리지로 여러 AZ의 웹 서버가 공유하기 어렵고 대규모 용량 비용도 높습니다.", en: "EBS is AZ-scoped block storage, difficult to share across the fleet and costly at this scale." },
      B: { ko: "EFS는 공유 파일 인터페이스가 꼭 필요할 때 적합하지만 900TB 정적 문서 저장에는 S3보다 비쌉니다.", en: "EFS is useful when POSIX file semantics are required but costs more than S3 for a 900 TB document repository." },
      C: { ko: "OpenSearch는 검색·분석 서비스이며 원본 문서의 비용 효율적인 대규모 저장소로 쓰기에는 과도합니다.", en: "OpenSearch is a search and analytics service and is excessive as the primary 900 TB document store." }
    }
  }
  ,{
    id: "exam3-119", number: 119, tags: ["Firewall Manager", "AWS WAF", "Multi-Account", "Security"],
    question: {
      en: "A global company is using Amazon API Gateway to design REST APIs for its loyalty club users in the us-east-1 Region and the ap-southeast-2 Region. A solutions architect must design a solution to protect these API Gateway managed REST APIs across multiple accounts from SQL injection and cross-site scripting attacks.\nWhich solution will meet these requirements with the LEAST amount of administrative effort?",
      ko: "글로벌 회사가 us-east-1과 ap-southeast-2 리전에서 충성 고객용 API Gateway REST API를 운영합니다. 여러 계정의 API를 SQL 삽입과 교차 사이트 스크립팅 공격으로부터 보호해야 합니다.\n관리 작업을 가장 적게 하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Set up AWS WAF in both Regions. Associate Regional web ACLs with an API stage.", ko: "두 리전에 AWS WAF를 설정하고 리전 웹 ACL을 API 스테이지에 연결한다." },
      { k: "B", en: "Set up AWS Firewall Manager in both Regions. Centrally configure AWS WAF rules.", ko: "두 리전에 AWS Firewall Manager를 설정하고 AWS WAF 규칙을 중앙에서 구성한다." },
      { k: "C", en: "Set up AWS Shield in both Regions. Associate Regional web ACLs with an API stage.", ko: "두 리전에 AWS Shield를 설정하고 리전 웹 ACL을 API 스테이지에 연결한다." },
      { k: "D", en: "Set up AWS Shield in one of the Regions. Associate Regional web ACLs with an API stage.", ko: "한 리전에 AWS Shield를 설정하고 리전 웹 ACL을 API 스테이지에 연결한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "AWS WAF 규칙은 SQL 삽입과 XSS를 검사할 수 있습니다. Firewall Manager를 AWS Organizations와 함께 사용하면 여러 계정과 리전의 API Gateway 스테이지에 WAF 정책을 중앙 배포하고 준수 상태를 관리할 수 있어 관리 부담이 가장 낮습니다.",
      en: "AWS WAF rules inspect SQL injection and XSS patterns. Firewall Manager centrally deploys and enforces WAF policies across accounts and Regions through AWS Organizations."
    },
    why_wrong: {
      A: { ko: "보호 자체는 가능하지만 각 계정·리전의 웹 ACL과 연결을 개별 관리해야 합니다.", en: "It can provide protection, but every account and Regional web ACL must be managed separately." },
      C: { ko: "Shield는 DDoS 보호 서비스이며 SQL 삽입·XSS 같은 애플리케이션 계층 패턴 검사는 WAF 기능입니다.", en: "Shield protects against DDoS attacks; SQL injection and XSS inspection are AWS WAF functions." },
      D: { ko: "Shield의 서비스 역할도 맞지 않고 한 리전 구성으로 두 리전 API를 보호할 수도 없습니다.", en: "Shield is the wrong control, and a one-Region setup would not cover both Regional APIs." }
    }
  }
  ,{
    id: "exam3-120", number: 120, tags: ["Global Accelerator", "NLB", "DNS", "Multi-Region"],
    question: {
      en: "A company has implemented a self-managed DNS solution on three Amazon EC2 instances behind a Network Load Balancer (NLB) in the us-west-2 Region. Most of the company's users are located in the United States and Europe. The company wants to improve the performance and availability of the solution. The company launches and configures three EC2 instances in the eu-west-1 Region and adds the EC2 instances as targets for a new NLB.\nWhich solution can the company use to route traffic to all the EC2 instances?",
      ko: "회사는 us-west-2 리전에서 NLB 뒤의 EC2 인스턴스 3대로 자체 관리 DNS 솔루션을 운영합니다. 사용자는 주로 미국과 유럽에 있으며 성능과 가용성을 개선하려 합니다. eu-west-1에도 EC2 인스턴스 3대와 새 NLB를 구성했습니다.\n모든 EC2 인스턴스로 트래픽을 라우팅하려면 어떤 솔루션을 사용할 수 있습니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon Route 53 geolocation routing policy to route requests to one of the two NLBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution's origin.", ko: "Route 53 지리 위치 라우팅으로 두 NLB 중 하나에 요청을 보내고 Route 53 레코드를 오리진으로 사용하는 CloudFront 배포를 만든다." },
      { k: "B", en: "Create a standard accelerator in AWS Global Accelerator. Create endpoint groups in us-west-2 and eu-west-1. Add the two NLBs as endpoints for the endpoint groups.", ko: "AWS Global Accelerator 표준 액셀러레이터를 만들고 us-west-2와 eu-west-1에 엔드포인트 그룹을 생성해 두 NLB를 각각 엔드포인트로 추가한다." },
      { k: "C", en: "Attach Elastic IP addresses to the six EC2 instances. Create an Amazon Route 53 geolocation routing policy to route requests to one of the six EC2 instances. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution's origin.", ko: "6개 EC2 인스턴스에 Elastic IP를 연결하고 Route 53 지리 위치 라우팅으로 인스턴스에 요청을 보낸다. 해당 레코드를 오리진으로 사용하는 CloudFront 배포를 만든다." },
      { k: "D", en: "Replace the two NLBs with two Application Load Balancers (ALBs). Create an Amazon Route 53 latency routing policy to route requests to one of the two ALBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution's origin.", ko: "두 NLB를 ALB로 교체하고 Route 53 지연 시간 라우팅으로 두 ALB 중 하나에 요청을 보낸다. 해당 레코드를 오리진으로 사용하는 CloudFront 배포를 만든다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "Global Accelerator는 두 리전의 NLB를 엔드포인트로 등록하고 사용자를 정상 상태이며 가까운 엔드포인트로 AWS 글로벌 네트워크를 통해 라우팅합니다. TCP와 UDP를 지원하므로 DNS 워크로드에 적합하고 리전 장애 시 빠른 상태 기반 장애 조치를 제공합니다.",
      en: "Global Accelerator supports TCP and UDP, accepts both Regional NLBs as endpoints, and routes users over the AWS global network to a healthy nearby endpoint with fast failover."
    },
    why_wrong: {
      A: { ko: "CloudFront는 DNS의 UDP/TCP 트래픽을 프록시하는 서비스가 아니며 Route 53 레코드를 이런 방식의 오리진으로 둘 수 없습니다.", en: "CloudFront does not proxy DNS UDP/TCP traffic and a Route 53 record is not used as this kind of origin." },
      C: { ko: "로드 밸런서를 우회하면 상태 확인과 분산 기능을 잃고 CloudFront도 DNS 프로토콜에 맞지 않습니다.", en: "Bypassing the load balancers loses their distribution and health features, and CloudFront does not support DNS protocols." },
      D: { ko: "ALB는 HTTP/HTTPS 계층용이므로 DNS의 TCP/UDP 트래픽을 처리할 수 없습니다.", en: "ALBs operate at the HTTP/HTTPS application layer and cannot handle general DNS TCP/UDP traffic." }
    }
  }
  ,{
    id: "exam3-121", number: 121, tags: ["RDS", "Encryption", "Snapshot", "KMS"],
    question: {
      en: "A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this instance.\nWhat should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?",
      ko: "회사는 AWS에서 OLTP 워크로드를 실행합니다. 이 워크로드는 암호화되지 않은 다중 AZ RDS DB 인스턴스를 사용하며 매일 데이터베이스 스냅샷을 생성합니다.\n앞으로 데이터베이스와 스냅샷을 항상 암호화하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Encrypt a copy of the latest DB snapshot. Replace existing DB instance by restoring the encrypted snapshot.", ko: "최신 DB 스냅샷의 암호화된 복사본을 만들고 암호화된 스냅샷을 복원하여 기존 DB 인스턴스를 교체한다." },
      { k: "B", en: "Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it. Enable encryption on the DB instance.", ko: "새 암호화 EBS 볼륨을 만들고 스냅샷을 복사한 뒤 DB 인스턴스에서 암호화를 활성화한다." },
      { k: "C", en: "Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS). Restore encrypted snapshot to an existing DB instance.", ko: "스냅샷을 복사하면서 KMS 암호화를 활성화하고 암호화된 스냅샷을 기존 DB 인스턴스에 복원한다." },
      { k: "D", en: "Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key Management Service (AWS KMS) managed keys (SSE-KMS).", ko: "스냅샷을 SSE-KMS로 암호화된 S3 버킷에 복사한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "기존의 암호화되지 않은 RDS DB 인스턴스에서 암호화를 직접 활성화할 수 없습니다. 최신 스냅샷을 복사할 때 KMS 암호화를 적용하고, 그 암호화된 복사본에서 새 DB 인스턴스를 복원해 전환해야 합니다. 새 인스턴스의 이후 자동·수동 스냅샷도 암호화됩니다.",
      en: "Encryption cannot be enabled in place on an unencrypted RDS instance. Copy the latest snapshot with KMS encryption, restore a new encrypted DB instance from it, and replace the old instance; subsequent snapshots remain encrypted."
    },
    why_wrong: {
      B: { ko: "RDS의 기반 EBS 볼륨은 사용자가 직접 만들거나 스냅샷을 복사하는 방식으로 관리하지 않습니다.", en: "Customers do not manage RDS backing EBS volumes or copy RDS snapshots to them." },
      C: { ko: "암호화된 스냅샷은 기존 DB 인스턴스에 덮어 복원할 수 없으며 새 인스턴스를 생성해야 합니다.", en: "An encrypted snapshot cannot be restored over an existing DB instance; restoration creates a new one." },
      D: { ko: "RDS 스냅샷을 일반 S3 객체처럼 버킷에 복사하는 방식이 아니며 DB 인스턴스 자체도 암호화되지 않습니다.", en: "RDS snapshots are not copied to a normal S3 bucket this way, and the DB instance would remain unencrypted." }
    }
  }
  ,{
    id: "exam3-122", number: 122, tags: ["KMS", "Encryption", "Key Management"],
    question: {
      en: "A company wants to build a scalable key management infrastructure to support developers who need to encrypt data in their applications.\nWhat should a solutions architect do to reduce the operational burden?",
      ko: "회사는 애플리케이션 데이터를 암호화해야 하는 개발자를 지원하기 위해 확장 가능한 키 관리 인프라를 구축하려 합니다.\n운영 부담을 줄이려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use multi-factor authentication (MFA) to protect the encryption keys.", ko: "MFA를 사용해 암호화 키를 보호한다." },
      { k: "B", en: "Use AWS Key Management Service (AWS KMS) to protect the encryption keys.", ko: "AWS KMS를 사용해 암호화 키를 보호한다." },
      { k: "C", en: "Use AWS Certificate Manager (ACM) to create, store, and assign the encryption keys.", ko: "ACM으로 암호화 키를 생성·저장·할당한다." },
      { k: "D", en: "Use an IAM policy to limit the scope of users who have access permissions to protect the encryption keys.", ko: "IAM 정책으로 암호화 키 보호 권한을 가진 사용자 범위를 제한한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "AWS KMS는 확장 가능하고 고가용성인 관리형 키 저장소와 암호화 API를 제공합니다. 키 자료 보호, 권한, 감사, 교체를 AWS가 관리하므로 개발자가 자체 키 관리 인프라를 구축할 필요가 없습니다.",
      en: "AWS KMS provides scalable, highly available managed key storage and cryptographic APIs, including authorization, auditing, and rotation, without operating custom key infrastructure."
    },
    why_wrong: {
      A: { ko: "MFA는 인증을 강화하지만 키의 생성·저장·확장·교체 인프라를 제공하지 않습니다.", en: "MFA strengthens authentication but does not provide key creation, storage, scaling, or rotation infrastructure." },
      C: { ko: "ACM은 TLS 인증서 관리 서비스이며 범용 애플리케이션 데이터 암호화 키 관리 용도가 아닙니다.", en: "ACM manages TLS certificates rather than general application data-encryption keys." },
      D: { ko: "IAM은 접근을 제어하지만 암호화 키를 안전하게 생성·저장하는 관리형 인프라는 KMS가 제공합니다.", en: "IAM controls access but does not provide the managed key generation and storage infrastructure." }
    }
  }
  ,{
    id: "exam3-123", number: 123, tags: ["ALB", "ACM", "TLS Termination"],
    question: {
      en: "A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination. There has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit.\nWhat should a solutions architect do to increase the application's performance?",
      ko: "회사는 두 EC2 인스턴스에서 동적 웹 애플리케이션을 호스팅하며 각 인스턴스에 자체 SSL 인증서를 설치해 SSL 종료를 수행합니다. 최근 트래픽이 증가했고 SSL 암호화·복호화 때문에 웹 서버 컴퓨팅 용량이 한계에 도달했습니다.\n애플리케이션 성능을 높이려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create a new SSL certificate using AWS Certificate Manager (ACM). Install the ACM certificate on each instance.", ko: "ACM에서 새 SSL 인증서를 만들고 각 인스턴스에 설치한다." },
      { k: "B", en: "Create an Amazon S3 bucket. Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination.", ko: "S3 버킷을 만들고 SSL 인증서를 옮긴 뒤 EC2 인스턴스가 SSL 종료에 버킷을 참조하게 한다." },
      { k: "C", en: "Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure it to direct connections to the existing EC2 instances.", ko: "프록시 서버용 EC2 인스턴스를 추가하고 SSL 인증서를 옮겨 기존 EC2 인스턴스로 연결을 전달하게 한다." },
      { k: "D", en: "Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM.", ko: "SSL 인증서를 ACM으로 가져오고 ACM 인증서를 사용하는 HTTPS 리스너가 있는 ALB를 생성한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "ALB의 HTTPS 리스너에서 TLS를 종료하면 웹 서버의 암호화·복호화 CPU 부하가 제거됩니다. 기존 외부 인증서는 ACM에 가져와 ALB에 안전하게 연결할 수 있으며 로드 밸런서가 두 인스턴스에 요청을 분산합니다.",
      en: "Terminating TLS at an ALB offloads encryption work from the web servers. Import the existing certificate into ACM and attach it to the ALB's HTTPS listener."
    },
    why_wrong: {
      A: { ko: "ACM 퍼블릭 인증서는 EC2 인스턴스에 직접 설치할 수 없고 서버에서 TLS를 계속 종료하면 CPU 부하도 남습니다.", en: "ACM public certificates cannot be installed directly on EC2, and instance-side TLS would retain the CPU load." },
      B: { ko: "S3는 TLS 종료 서비스가 아니며 인증서 키를 웹 서버가 이런 방식으로 참조하지 않습니다.", en: "S3 does not terminate TLS, and web servers do not use certificates from a bucket in this manner." },
      C: { ko: "단일 자체 관리 프록시는 새 병목과 장애 지점이 되며 패치·확장도 직접 해야 합니다.", en: "A single self-managed proxy creates another bottleneck and failure point and requires maintenance." }
    }
  }
  ,{
    id: "exam3-124", number: 124, tags: ["EC2 Spot", "Batch Processing", "Cost Optimization"],
    question: {
      en: "A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and cost-effective solution that meets the requirements of the job.\nWhat should the solutions architect recommend?",
      ko: "회사는 많은 EC2 인스턴스를 사용하는 매우 동적인 배치 처리 작업을 실행합니다. 작업은 상태 비저장이며 언제든 중단·재시작해도 문제가 없고 보통 완료까지 60분 이상 걸립니다. 확장 가능하고 비용 효율적인 솔루션이 필요합니다.\n무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Implement EC2 Spot Instances.", ko: "EC2 스팟 인스턴스를 사용한다." },
      { k: "B", en: "Purchase EC2 Reserved Instances.", ko: "EC2 예약 인스턴스를 구매한다." },
      { k: "C", en: "Implement EC2 On-Demand Instances.", ko: "EC2 온디맨드 인스턴스를 사용한다." },
      { k: "D", en: "Implement the processing on AWS Lambda.", ko: "AWS Lambda에서 처리하도록 구현한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "중단을 허용하는 상태 비저장 배치 작업은 스팟 인스턴스의 회수 가능성과 잘 맞습니다. 많은 인스턴스를 저렴하게 확장할 수 있고, 중단되면 작업을 다시 시작하면 되므로 온디맨드보다 비용을 크게 줄일 수 있습니다.",
      en: "An interruptible stateless batch job is an ideal Spot workload. It can scale across many discounted instances and restart after interruption without business impact."
    },
    why_wrong: {
      B: { ko: "동적으로 변하는 배치 용량에 장기 약정 RI를 구매하면 유휴 비용이 발생할 수 있습니다.", en: "Long-term RI commitments can leave paid capacity idle for a highly dynamic batch workload." },
      C: { ko: "온디맨드는 중단 위험은 낮지만 이 작업은 중단을 허용하므로 스팟보다 비용 효율이 떨어집니다.", en: "On-Demand is more expensive even though this workload can tolerate Spot interruptions." },
      D: { ko: "Lambda의 최대 실행 시간은 15분이므로 60분 이상 걸리는 작업을 한 번에 처리할 수 없습니다.", en: "Lambda's maximum invocation duration is 15 minutes, shorter than this 60-plus-minute job." }
    }
  }
  ,{
    id: "exam3-125", number: 125, tags: ["VPC", "NAT Gateway", "ALB", "RDS Multi-AZ"],
    question: {
      en: "A company runs its two-tier ecommerce website on AWS. The web tier consists of a load balancer that sends traffic to Amazon EC2 instances. The database tier uses an Amazon RDS DB instance. The EC2 instances and the RDS DB instance should not be exposed to the public internet. The EC2 instances require internet access to complete payment processing of orders through a third-party web service. The application must be highly available.\nWhich combination of configuration options will meet these requirements? (Choose two.)",
      ko: "회사는 AWS에서 2계층 전자상거래 웹사이트를 운영합니다. 웹 계층은 로드 밸런서와 EC2 인스턴스로 구성되고 데이터베이스 계층은 RDS DB 인스턴스를 사용합니다. EC2와 RDS는 퍼블릭 인터넷에 노출되면 안 되지만 EC2는 서드파티 결제 웹 서비스를 사용하기 위해 인터넷 접근이 필요합니다. 애플리케이션은 고가용성이어야 합니다.\n어떤 구성 조합이 요구사항을 충족합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Use an Auto Scaling group to launch the EC2 instances in private subnets. Deploy an RDS Multi-AZ DB instance in private subnets.", ko: "Auto Scaling 그룹으로 프라이빗 서브넷에 EC2 인스턴스를 시작하고 프라이빗 서브넷에 RDS 다중 AZ DB 인스턴스를 배포한다." },
      { k: "B", en: "Configure a VPC with two private subnets and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the private subnets.", ko: "두 AZ에 프라이빗 서브넷 2개와 NAT 게이트웨이 2개를 구성하고 프라이빗 서브넷에 ALB를 배포한다." },
      { k: "C", en: "Use an Auto Scaling group to launch the EC2 instances in public subnets across two Availability Zones. Deploy an RDS Multi-AZ DB instance in private subnets.", ko: "두 AZ의 퍼블릭 서브넷에 Auto Scaling 그룹 EC2를 시작하고 프라이빗 서브넷에 RDS 다중 AZ DB를 배포한다." },
      { k: "D", en: "Configure a VPC with one public subnet, one private subnet, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnet.", ko: "퍼블릭 서브넷 1개, 프라이빗 서브넷 1개, 두 AZ의 NAT 게이트웨이 2개를 구성하고 퍼블릭 서브넷에 ALB를 배포한다." },
      { k: "E", en: "Configure a VPC with two public subnets, two private subnets, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnets.", ko: "두 AZ에 퍼블릭 서브넷 2개, 프라이빗 서브넷 2개, NAT 게이트웨이 2개를 구성하고 퍼블릭 서브넷에 ALB를 배포한다." }
    ],
    answer: ["A", "E"],
    explanation: {
      ko: "인터넷 대면 ALB와 NAT 게이트웨이는 각 AZ의 퍼블릭 서브넷에 배치하고, 애플리케이션 EC2와 RDS는 프라이빗 서브넷에 둡니다(E, A). EC2는 같은 AZ의 NAT를 통해 결제 서비스로 송신하고, 다중 AZ Auto Scaling·RDS 구성으로 고가용성을 확보합니다.",
      en: "Place the internet-facing ALB and one NAT gateway per AZ in public subnets, while running Auto Scaling EC2 instances and Multi-AZ RDS in private subnets. EC2 reaches the payment service outbound through NAT without public exposure."
    },
    why_wrong: {
      B: { ko: "NAT 게이트웨이와 인터넷 대면 ALB는 프라이빗 서브넷에 배치할 수 없습니다.", en: "NAT gateways and an internet-facing ALB must be placed in public subnets." },
      C: { ko: "EC2 인스턴스를 퍼블릭 서브넷에 두면 퍼블릭 인터넷에 노출하지 말라는 요구와 맞지 않습니다.", en: "Placing EC2 instances in public subnets conflicts with the requirement to avoid public exposure." },
      D: { ko: "하나의 퍼블릭·프라이빗 서브넷은 두 AZ 고가용성을 제공하지 못하며 NAT 게이트웨이도 실제 서브넷 없이 두 AZ에 둘 수 없습니다.", en: "One public and one private subnet cannot provide two-AZ availability or host one NAT per AZ." }
    }
  }
  ,{
    id: "exam3-126", number: 126, tags: ["S3 Lifecycle", "Glacier Deep Archive", "Retention"],
    question: {
      en: "A solutions architect needs to implement a solution to reduce a company's storage costs. All the company's data is in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the most recent 2 years must be highly available and immediately retrievable.\nWhich solution will meet these requirements?",
      ko: "솔루션스 아키텍트는 회사의 스토리지 비용을 줄여야 합니다. 모든 데이터는 S3 Standard에 있고 최소 25년 동안 보관해야 합니다. 최근 2년 데이터는 고가용성이며 즉시 검색 가능해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.", ko: "객체를 즉시 S3 Glacier Deep Archive로 전환하는 수명 주기 정책을 설정한다." },
      { k: "B", en: "Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years.", ko: "2년 후 객체를 S3 Glacier Deep Archive로 전환하는 수명 주기 정책을 설정한다." },
      { k: "C", en: "Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep Archive.", ko: "S3 Intelligent-Tiering을 사용하고 아카이브 옵션을 활성화해 데이터를 S3 Glacier Deep Archive에 보관한다." },
      { k: "D", en: "Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years.", ko: "객체를 즉시 S3 One Zone-IA로 전환하고 2년 후 S3 Glacier Deep Archive로 전환하는 수명 주기 정책을 설정한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "최근 2년은 S3 Standard에서 다중 AZ 고가용성과 즉시 접근성을 유지하고, 이후 접근 요구가 낮은 장기 데이터만 Glacier Deep Archive로 전환하면 25년 보존 비용을 크게 줄일 수 있습니다.",
      en: "Keep the newest two years in S3 Standard for multi-AZ availability and immediate access, then transition older data to Glacier Deep Archive for low-cost long-term retention."
    },
    why_wrong: {
      A: { ko: "최근 데이터도 즉시 아카이브하면 2년간의 즉시 검색 요구를 충족하지 못합니다.", en: "Immediate archival violates the requirement for immediate retrieval during the first two years." },
      C: { ko: "접근 패턴에 따라 최근 2년 데이터도 아카이브 계층으로 이동할 수 있어 필수 즉시 접근을 보장하지 못합니다.", en: "Optional archive tiers can move recent infrequently accessed data out of immediate access, violating the fixed two-year requirement." },
      D: { ko: "One Zone-IA는 단일 AZ에 저장되어 최근 데이터의 고가용성 요구를 충족하지 못합니다.", en: "One Zone-IA stores data in one AZ and does not meet the high-availability requirement for recent data." }
    }
  }
  ,{
    id: "exam3-127", number: 127, tags: ["Instance Store", "S3", "Glacier", "Storage"],
    question: {
      en: "A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable storage for storing media content, and 900 TB of storage to meet requirements for archived media that is not in use anymore.\nWhich set of services should a solutions architect recommend to meet these requirements?",
      ko: "미디어 회사가 시스템을 AWS 클라우드로 이전하려 합니다. 비디오 처리에는 최대 I/O 성능을 갖춘 최소 10TB 스토리지, 미디어 콘텐츠에는 내구성이 매우 높은 300TB 스토리지, 더 이상 사용하지 않는 아카이브 미디어에는 900TB 스토리지가 필요합니다.\n어떤 서비스 조합을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage", ko: "최대 성능에는 EBS, 내구성 있는 저장에는 S3, 아카이브에는 S3 Glacier" },
      { k: "B", en: "Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for archival storage", ko: "최대 성능에는 EBS, 내구성 있는 저장에는 EFS, 아카이브에는 S3 Glacier" },
      { k: "C", en: "Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon S3 for archival storage", ko: "최대 성능에는 EC2 인스턴스 스토어, 내구성 있는 저장에는 EFS, 아카이브에는 S3" },
      { k: "D", en: "Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage", ko: "최대 성능에는 EC2 인스턴스 스토어, 내구성 있는 저장에는 S3, 아카이브에는 S3 Glacier" }
    ],
    answer: ["D"],
    explanation: {
      ko: "EC2 인스턴스 스토어는 호스트에 직접 연결된 NVMe 장치를 통해 임시 비디오 처리 작업에 가장 높은 I/O 성능을 제공합니다. 영구 미디어는 높은 내구성의 S3에, 사용하지 않는 900TB 아카이브는 저비용 S3 Glacier에 저장하는 조합이 각 요구에 맞습니다.",
      en: "EC2 instance store offers the highest local I/O for temporary video-processing data, S3 provides highly durable media storage, and S3 Glacier provides low-cost archival capacity."
    },
    why_wrong: {
      A: { ko: "EBS도 고성능이지만 최대 가능한 로컬 I/O에는 호스트 직접 연결 인스턴스 스토어가 더 적합합니다.", en: "EBS can be fast, but direct-attached instance store is the choice for maximum local I/O." },
      B: { ko: "최대 성능 선택이 아니며 대규모 객체 콘텐츠 저장에도 EFS보다 S3가 더 적합합니다.", en: "It misses the maximum-I/O choice, and S3 is more suitable than EFS for large durable media objects." },
      C: { ko: "S3 Standard는 장기 미사용 아카이브에 Glacier보다 비싸고 EFS도 300TB 객체 저장에 불필요하게 비쌉니다.", en: "S3 Standard costs more than Glacier for unused archives, and EFS is unnecessarily costly for the durable object tier." }
    }
  }
  ,{
    id: "exam3-128", number: 128, tags: ["EC2 Spot", "Containers", "Auto Scaling", "Cost Optimization"],
    question: {
      en: "A company wants to run applications in containers in the AWS Cloud. These applications are stateless and can tolerate disruptions within the underlying infrastructure. The company needs a solution that minimizes cost and operational overhead.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 AWS 클라우드의 컨테이너에서 애플리케이션을 실행하려 합니다. 애플리케이션은 상태 비저장이며 기반 인프라의 중단을 허용합니다. 비용과 운영 부담을 최소화해야 합니다.\n무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use Spot Instances in an Amazon EC2 Auto Scaling group to run the application containers.", ko: "EC2 Auto Scaling 그룹의 스팟 인스턴스에서 애플리케이션 컨테이너를 실행한다." },
      { k: "B", en: "Use Spot Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.", ko: "Amazon EKS 관리형 노드 그룹의 스팟 인스턴스를 사용한다." },
      { k: "C", en: "Use On-Demand Instances in an Amazon EC2 Auto Scaling group to run the application containers.", ko: "EC2 Auto Scaling 그룹의 온디맨드 인스턴스에서 애플리케이션 컨테이너를 실행한다." },
      { k: "D", en: "Use On-Demand Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.", ko: "Amazon EKS 관리형 노드 그룹의 온디맨드 인스턴스를 사용한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "중단을 허용하는 상태 비저장 컨테이너는 저렴한 스팟 인스턴스에 적합합니다. EC2 Auto Scaling 그룹은 용량과 장애 인스턴스 교체를 자동화하며, 요구되지 않은 Kubernetes 제어 계층을 추가하지 않아 EKS보다 비용과 복잡성이 낮습니다.",
      en: "Interruptible stateless containers are well suited to discounted Spot Instances. An EC2 Auto Scaling group manages capacity and replacement without adding an unnecessary Kubernetes control plane."
    },
    why_wrong: {
      B: { ko: "스팟 비용 이점은 있지만 Kubernetes가 필요하다는 요구가 없으므로 EKS 클러스터 비용과 관리 복잡성이 추가됩니다.", en: "Spot saves compute cost, but EKS adds control-plane cost and Kubernetes complexity that is not required." },
      C: { ko: "중단 허용 워크로드에 온디맨드를 사용하면 스팟의 비용 절감 기회를 놓칩니다.", en: "On-Demand misses the Spot savings available to an interruption-tolerant workload." },
      D: { ko: "온디맨드 비용과 EKS 복잡성을 모두 추가합니다.", en: "This adds both On-Demand cost and unnecessary EKS complexity." }
    }
  }
  ,{
    id: "exam3-129", number: 129, tags: ["Aurora", "ECS", "Fargate", "Migration"],
    question: {
      en: "A company is running a multi-tier web application on premises. The web application is containerized and runs on a number of Linux hosts connected to a PostgreSQL database that contains user records. The operational overhead of maintaining the infrastructure and capacity planning is limiting the company's growth. A solutions architect must improve the application's infrastructure.\nWhich combination of actions should the solutions architect take to accomplish this? (Choose two.)",
      ko: "회사는 온프레미스에서 다계층 웹 애플리케이션을 운영합니다. 컨테이너화된 웹 애플리케이션은 여러 Linux 호스트에서 실행되며 사용자 레코드가 있는 PostgreSQL 데이터베이스에 연결됩니다. 인프라 유지 관리와 용량 계획의 운영 부담이 성장을 제한하고 있습니다.\n인프라를 개선하려면 어떤 조치 조합을 수행해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Migrate the PostgreSQL database to Amazon Aurora.", ko: "PostgreSQL 데이터베이스를 Amazon Aurora로 마이그레이션한다." },
      { k: "B", en: "Migrate the web application to be hosted on Amazon EC2 instances.", ko: "웹 애플리케이션을 EC2 인스턴스에서 호스팅하도록 마이그레이션한다." },
      { k: "C", en: "Set up an Amazon CloudFront distribution for the web application content.", ko: "웹 애플리케이션 콘텐츠용 CloudFront 배포를 구성한다." },
      { k: "D", en: "Set up Amazon ElastiCache between the web application and the PostgreSQL database.", ko: "웹 애플리케이션과 PostgreSQL 데이터베이스 사이에 ElastiCache를 구성한다." },
      { k: "E", en: "Migrate the web application to be hosted on AWS Fargate with Amazon Elastic Container Service (Amazon ECS).", ko: "웹 애플리케이션을 ECS와 AWS Fargate에서 호스팅하도록 마이그레이션한다." }
    ],
    answer: ["A", "E"],
    explanation: {
      ko: "Aurora PostgreSQL 호환 에디션은 데이터베이스 서버의 패치, 백업, 복제, 용량 운영을 관리형으로 제공합니다(A). 기존 컨테이너는 ECS on Fargate로 옮기면 호스트 프로비저닝과 용량 계획 없이 실행하고 자동 확장할 수 있습니다(E).",
      en: "Aurora PostgreSQL removes database server, backup, and replication operations. ECS on Fargate runs the existing containers without provisioning hosts or planning cluster capacity."
    },
    why_wrong: {
      B: { ko: "EC2로 이전하면 Linux 호스트 패치와 용량 계획 책임이 계속 남습니다.", en: "Moving to EC2 retains Linux host patching and capacity-planning work." },
      C: { ko: "CloudFront는 콘텐츠 전달 성능을 개선하지만 서버·데이터베이스 운영 부담을 해결하지 않습니다.", en: "CloudFront improves delivery but does not solve server and database operational overhead." },
      D: { ko: "캐시는 성능을 높일 수 있지만 기존 PostgreSQL과 호스트의 유지 관리·용량 계획 부담은 그대로입니다.", en: "A cache can improve performance but leaves the existing host and database operations unchanged." }
    }
  }
  ,{
    id: "exam3-130", number: 130, tags: ["Auto Scaling", "Target Tracking", "CloudWatch"],
    question: {
      en: "An application runs on Amazon EC2 instances across multiple Availability Zones. The instances run in an Amazon EC2 Auto Scaling group behind an Application Load Balancer. The application performs best when the CPU utilization of the EC2 instances is at or near 40%.\nWhat should a solutions architect do to maintain the desired performance across all instances in the group?",
      ko: "애플리케이션이 여러 AZ의 EC2 인스턴스에서 실행되며 인스턴스는 ALB 뒤 Auto Scaling 그룹에 속합니다. EC2 인스턴스의 CPU 사용률이 40%에 가깝게 유지될 때 성능이 가장 좋습니다.\n그룹의 모든 인스턴스에서 원하는 성능을 유지하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use a simple scaling policy to dynamically scale the Auto Scaling group.", ko: "단순 조정 정책을 사용해 Auto Scaling 그룹을 동적으로 확장한다." },
      { k: "B", en: "Use a target tracking policy to dynamically scale the Auto Scaling group.", ko: "대상 추적 정책을 사용해 Auto Scaling 그룹을 동적으로 확장한다." },
      { k: "C", en: "Use an AWS Lambda function to update the desired Auto Scaling group capacity.", ko: "Lambda 함수로 Auto Scaling 그룹의 원하는 용량을 업데이트한다." },
      { k: "D", en: "Use scheduled scaling actions to scale up and scale down the Auto Scaling group.", ko: "예약된 조정 작업으로 Auto Scaling 그룹을 확장·축소한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "대상 추적 조정 정책에서 평균 CPU 사용률 목표를 40%로 지정하면 Auto Scaling이 CloudWatch 지표에 따라 인스턴스를 자동으로 추가·제거하여 목표값 근처를 유지합니다.",
      en: "Set a target tracking scaling policy with average CPU utilization at 40%. Auto Scaling then adds or removes instances automatically to keep the metric near that target."
    },
    why_wrong: {
      A: { ko: "단순 조정은 임계값 위반 시 고정 조정을 수행하며 특정 목표값을 지속적으로 유지하는 데 대상 추적보다 부정확합니다.", en: "Simple scaling makes fixed adjustments on threshold breaches rather than continuously managing a target value." },
      C: { ko: "Auto Scaling이 기본 제공하는 기능을 Lambda 코드로 직접 구현할 필요가 없습니다.", en: "There is no need to recreate native Auto Scaling behavior with custom Lambda code." },
      D: { ko: "예약 조정은 시간 기반 패턴용이며 실시간 CPU 변화에 따라 40%를 유지하지 못합니다.", en: "Scheduled scaling follows time-based patterns and cannot maintain 40% under changing real-time load." }
    }
  }
  ,{
    id: "exam3-131", number: 131, tags: ["CloudFront", "S3", "Origin Access Identity"],
    question: {
      en: "A company is developing a file-sharing application that will use an Amazon S3 bucket for storage. The company wants to serve all the files through an Amazon CloudFront distribution. The company does not want the files to be accessible through direct navigation to the S3 URL.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 S3 버킷을 스토리지로 사용하는 파일 공유 애플리케이션을 개발합니다. 모든 파일을 CloudFront 배포를 통해 제공하고 S3 URL로 직접 접근하지 못하게 하려 합니다.\n이 요구사항을 충족하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Write individual policies for each S3 bucket to grant read permission for only CloudFront access.", ko: "각 S3 버킷에 CloudFront 접근만 읽기를 허용하는 개별 정책을 작성한다." },
      { k: "B", en: "Create an IAM user. Grant the user read permission to objects in the S3 bucket. Assign the user to CloudFront.", ko: "IAM 사용자를 만들고 S3 객체 읽기 권한을 부여한 뒤 CloudFront에 할당한다." },
      { k: "C", en: "Write an S3 bucket policy that assigns the CloudFront distribution ID as the Principal and assigns the target S3 bucket as the Amazon Resource Name (ARN).", ko: "CloudFront 배포 ID를 보안 주체로, 대상 S3 버킷을 ARN으로 지정한 버킷 정책을 작성한다." },
      { k: "D", en: "Create an origin access identity (OAI). Assign the OAI to the CloudFront distribution. Configure the S3 bucket permissions so that only the OAI has read permission.", ko: "오리진 액세스 아이덴티티(OAI)를 만들고 CloudFront 배포에 할당한다. OAI만 읽을 수 있도록 S3 버킷 권한을 구성한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "CloudFront OAI를 S3 오리진에 연결하고 버킷 정책에서 해당 OAI만 `GetObject`를 허용하면 S3 퍼블릭 접근을 차단한 채 CloudFront를 통해서만 파일을 제공할 수 있습니다. 현재 신규 구성에는 OAC가 권장되지만 선택지 중 요구를 정확히 충족하는 것은 OAI입니다.",
      en: "Attach an OAI to the S3 origin and grant only that identity GetObject access in the bucket policy. Direct S3 access remains blocked while CloudFront can serve the files."
    },
    why_wrong: {
      A: { ko: "CloudFront를 식별할 구체적인 오리진 접근 주체가 없어 안전한 정책 구성이 완성되지 않습니다.", en: "This does not define the specific CloudFront origin identity that the bucket should trust." },
      B: { ko: "CloudFront에 IAM 사용자를 할당하는 방식은 지원되지 않으며 장기 자격 증명도 불필요합니다.", en: "CloudFront is not assigned an IAM user, and long-term user credentials are unnecessary." },
      C: { ko: "배포 ID 자체는 버킷 정책의 IAM 보안 주체가 아닙니다.", en: "A CloudFront distribution ID is not itself an IAM principal for this bucket policy." }
    }
  }
  ,{
    id: "exam3-132", number: 132, tags: ["CloudFront", "S3", "Global Delivery"],
    question: {
      en: "A company's website provides users with downloadable historical performance reports. The website needs a solution that will scale to meet the company's website demands globally. The solution should be cost-effective, limit the provisioning of infrastructure resources, and provide the fastest possible response time.\nWhich combination should a solutions architect recommend to meet these requirements?",
      ko: "회사의 웹사이트는 사용자가 과거 성능 보고서를 다운로드할 수 있게 합니다. 전 세계 수요에 맞춰 확장되고, 비용 효율적이며, 인프라 프로비저닝을 최소화하고, 가능한 가장 빠른 응답 시간을 제공해야 합니다.\n어떤 조합을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Amazon CloudFront and Amazon S3", ko: "Amazon CloudFront와 Amazon S3" },
      { k: "B", en: "AWS Lambda and Amazon DynamoDB", ko: "AWS Lambda와 Amazon DynamoDB" },
      { k: "C", en: "Application Load Balancer with Amazon EC2 Auto Scaling", ko: "Application Load Balancer와 EC2 Auto Scaling" },
      { k: "D", en: "Amazon Route 53 with internal Application Load Balancers", ko: "Amazon Route 53과 내부 Application Load Balancer" }
    ],
    answer: ["A"],
    explanation: {
      ko: "다운로드 보고서는 S3에 저렴하고 내구성 있게 저장할 수 있고, CloudFront가 전 세계 엣지에서 캐시해 사용자와 가까운 위치에서 빠르게 제공합니다. 두 서비스 모두 서버 프로비저닝 없이 자동 확장됩니다.",
      en: "S3 provides durable, low-cost report storage, while CloudFront caches downloads at global edge locations. Both scale without server provisioning and provide fast global responses."
    },
    why_wrong: {
      B: { ko: "DynamoDB는 다운로드 파일 저장소가 아니며 Lambda도 정적 보고서 제공에 필요하지 않습니다.", en: "DynamoDB is not a download-file store, and Lambda is unnecessary for static reports." },
      C: { ko: "EC2와 ALB는 서버 용량·패치 운영이 필요하고 정적 다운로드에는 비용이 더 큽니다.", en: "EC2 and ALB require capacity and patch management and cost more for static downloads." },
      D: { ko: "내부 ALB는 인터넷 사용자에게 공개되지 않으며 보고서 저장·글로벌 캐싱도 제공하지 않습니다.", en: "Internal ALBs are not internet-facing and provide neither report storage nor global caching." }
    }
  }
  ,{
    id: "exam3-133", number: 133, tags: ["RDS Custom", "Oracle", "Disaster Recovery", "Read Replica"],
    question: {
      en: "A company runs an Oracle database on premises. As part of the company's migration to AWS, the company wants to upgrade the database to the most recent available version. The company also wants to set up disaster recovery (DR) for the database. The company needs to minimize the operational overhead for normal operations and DR setup. The company also needs to maintain access to the database's underlying operating system.\nWhich solution will meet these requirements?",
      ko: "회사는 온프레미스에서 Oracle 데이터베이스를 운영합니다. AWS로 이전하면서 최신 버전으로 업그레이드하고 재해 복구를 구성하려 합니다. 정상 운영과 DR 구성의 운영 부담을 최소화해야 하지만 데이터베이스 기반 운영 체제에 대한 접근은 유지해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.", ko: "Oracle 데이터베이스를 EC2로 이전하고 다른 AWS 리전으로 데이터베이스 복제를 구성한다." },
      { k: "B", en: "Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.", ko: "Oracle 데이터베이스를 RDS for Oracle로 이전하고 교차 리전 자동 백업을 활성화해 스냅샷을 다른 리전에 복제한다." },
      { k: "C", en: "Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in another AWS Region.", ko: "Oracle 데이터베이스를 Amazon RDS Custom for Oracle로 이전하고 다른 AWS 리전에 읽기 전용 복제본을 생성한다." },
      { k: "D", en: "Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone.", ko: "Oracle 데이터베이스를 RDS for Oracle로 이전하고 다른 AZ에 대기 데이터베이스를 생성한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "RDS Custom for Oracle은 관리형 자동화의 이점을 제공하면서 기반 운영 체제와 데이터베이스 환경에 대한 관리 접근을 허용합니다. 다른 리전의 읽기 전용 복제본은 운영 부담이 낮은 교차 리전 DR 대상을 제공합니다.",
      en: "RDS Custom for Oracle retains administrative access to the underlying OS while providing managed database automation. A cross-Region read replica supplies a low-operations DR target."
    },
    why_wrong: {
      A: { ko: "OS 접근은 가능하지만 EC2의 Oracle 패치, 백업, 복제, 장애 조치를 모두 직접 관리해야 합니다.", en: "EC2 provides OS access but leaves patching, backups, replication, and failover to the company." },
      B: { ko: "일반 RDS for Oracle은 기반 운영 체제에 대한 고객 접근을 허용하지 않습니다.", en: "Standard RDS for Oracle does not provide customer access to the underlying operating system." },
      D: { ko: "일반 RDS의 OS 접근 요구를 충족하지 못하고 다른 AZ의 대기는 리전 재해 복구도 아닙니다.", en: "It lacks OS access, and an in-Region standby is not cross-Region disaster recovery." }
    }
  }
  ,{
    id: "exam3-134", number: 134, tags: ["S3", "Athena", "Cross-Region Replication", "Encryption"],
    question: {
      en: "A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing and new data by using SQL. The company stores the data in an Amazon S3 bucket. The data requires encryption and must be replicated to a different AWS Region.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사는 애플리케이션을 서버리스 솔루션으로 이전하려 합니다. 기존 데이터와 새 데이터를 SQL로 분석해야 합니다. 데이터는 S3 버킷에 저장되어 있으며 암호화하고 다른 AWS 리전으로 복제해야 합니다.\n운영 부담이 가장 적은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon Athena to query the data.", ko: "새 S3 버킷으로 데이터를 옮기고 CRR로 다른 리전 버킷에 복제한다. KMS 다중 리전 키의 SSE-KMS를 사용하고 Athena로 데이터를 쿼리한다." },
      { k: "B", en: "Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.", ko: "새 S3 버킷으로 데이터를 옮기고 CRR 및 KMS 다중 리전 키의 SSE-KMS를 사용한다. Amazon RDS로 데이터를 쿼리한다." },
      { k: "C", en: "Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon Athena to query the data.", ko: "기존 S3 버킷에 데이터를 저장하고 CRR로 암호화된 객체를 다른 리전 버킷에 복제한다. SSE-S3를 사용하고 Athena로 데이터를 쿼리한다." },
      { k: "D", en: "Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon RDS to query the data.", ko: "기존 S3 버킷에 데이터를 저장하고 CRR 및 SSE-S3를 사용한다. Amazon RDS로 데이터를 쿼리한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "Athena는 S3의 기존·신규 데이터를 SQL로 직접 분석하는 서버리스 서비스입니다. 기존 버킷에 SSE-S3 기본 암호화를 적용하고 CRR을 구성하면 별도 키나 서버를 관리하지 않고 암호화와 교차 리전 복제를 충족합니다.",
      en: "Athena queries existing and new S3 data directly with serverless SQL. Using the existing bucket with SSE-S3 and CRR meets encryption and replication requirements without managing servers or KMS keys."
    },
    why_wrong: {
      A: { ko: "기능상 가능하지만 새 버킷으로 데이터를 옮기고 다중 리전 KMS 키를 관리하는 추가 작업이 필요합니다.", en: "It can work but adds unnecessary data movement and multi-Region KMS key administration." },
      B: { ko: "추가 작업에 더해 RDS는 S3 데이터를 제자리에서 쿼리하는 서버리스 분석 서비스가 아닙니다.", en: "It adds migration work, and RDS is not a serverless in-place query service for S3 data." },
      D: { ko: "RDS를 프로비저닝하고 S3 데이터를 적재해야 하므로 서버리스 및 최소 운영 부담 요구에 맞지 않습니다.", en: "RDS requires provisioning and data loading, contrary to the serverless, low-operations requirement." }
    }
  }
  ,{
    id: "exam3-135", number: 135, tags: ["PrivateLink", "VPC Endpoint Service", "Private Connectivity"],
    question: {
      en: "A company runs workloads on AWS. The company needs to connect to a service from an external provider. The service is hosted in the provider's VPC. According to the company's security team, the connectivity must be private and must be restricted to the target service. The connection must be initiated only from the company's VPC.\nWhich solution will meet these requirements?",
      ko: "회사는 AWS에서 워크로드를 실행하며 외부 공급자의 VPC에 호스팅된 서비스에 연결해야 합니다. 연결은 비공개이고 대상 서비스로만 제한되어야 하며 회사 VPC에서만 시작할 수 있어야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Create a VPC peering connection between the company's VPC and the provider's VPC. Update the route table to connect to the target service.", ko: "회사 VPC와 공급자 VPC 사이에 VPC 피어링을 만들고 대상 서비스로 연결하도록 라우팅 테이블을 갱신한다." },
      { k: "B", en: "Ask the provider to create a virtual private gateway in its VPC. Use AWS PrivateLink to connect to the target service.", ko: "공급자에게 VPC에 가상 프라이빗 게이트웨이를 생성하도록 요청하고 PrivateLink로 대상 서비스에 연결한다." },
      { k: "C", en: "Create a NAT gateway in a public subnet of the company's VPC. Update the route table to connect to the target service.", ko: "회사 VPC의 퍼블릭 서브넷에 NAT 게이트웨이를 만들고 대상 서비스로 연결하도록 라우팅 테이블을 갱신한다." },
      { k: "D", en: "Ask the provider to create a VPC endpoint for the target service. Use AWS PrivateLink to connect to the target service.", ko: "공급자에게 대상 서비스용 VPC 엔드포인트를 생성하도록 요청하고 AWS PrivateLink로 대상 서비스에 연결한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "공급자가 서비스를 PrivateLink 엔드포인트 서비스로 게시하고 회사 VPC가 인터페이스 엔드포인트로 연결하면 VPC 전체 라우팅을 공유하지 않고 해당 서비스만 비공개로 사용할 수 있습니다. 연결은 소비자인 회사 측에서 시작됩니다.",
      en: "The provider publishes the target through a PrivateLink endpoint service, and the company connects through an interface endpoint. Only the service is exposed privately, without broad bidirectional VPC routing."
    },
    why_wrong: {
      A: { ko: "VPC 피어링은 두 VPC의 네트워크 경로를 광범위하게 연결해 대상 서비스로만 제한한다는 요구에 덜 적합합니다.", en: "VPC peering provides broader routed connectivity rather than exposing only the target service." },
      B: { ko: "가상 프라이빗 게이트웨이는 VPN·Direct Connect에 사용하며 PrivateLink 서비스 게시 구성 요소가 아닙니다.", en: "A virtual private gateway is used for VPN or Direct Connect, not to publish a PrivateLink service." },
      C: { ko: "NAT 게이트웨이는 인터넷 송신용이며 공급자 VPC 서비스로의 전용 비공개 연결을 만들지 않습니다.", en: "A NAT gateway provides internet egress and does not create private service-specific connectivity to another VPC." }
    }
  }
  ,{
    id: "exam3-136", number: 136, tags: ["DMS", "Aurora PostgreSQL", "Migration", "CDC"],
    question: {
      en: "A company is migrating its on-premises PostgreSQL database to Amazon Aurora PostgreSQL. The on-premises database must remain online and accessible during the migration. The Aurora database must remain synchronized with the on-premises database.\nWhich combination of actions must a solutions architect take to meet these requirements? (Choose two.)",
      ko: "회사는 온프레미스 PostgreSQL 데이터베이스를 Aurora PostgreSQL로 이전합니다. 마이그레이션 중에도 온프레미스 데이터베이스는 온라인 상태로 접근 가능해야 하며 Aurora 데이터베이스는 원본과 동기화되어야 합니다.\n어떤 조치 조합을 수행해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Create an ongoing replication task.", ko: "지속적 복제 작업을 생성한다." },
      { k: "B", en: "Create a database backup of the on-premises database.", ko: "온프레미스 데이터베이스의 백업을 생성한다." },
      { k: "C", en: "Create an AWS Database Migration Service (AWS DMS) replication server.", ko: "AWS DMS 복제 서버를 생성한다." },
      { k: "D", en: "Convert the database schema by using the AWS Schema Conversion Tool (AWS SCT).", ko: "AWS SCT로 데이터베이스 스키마를 변환한다." },
      { k: "E", en: "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor the database synchronization.", ko: "데이터베이스 동기화를 모니터링하는 EventBridge 규칙을 생성한다." }
    ],
    answer: ["A", "C"],
    explanation: {
      ko: "DMS 복제 인스턴스(서버)가 원본과 대상 사이의 데이터 이동을 수행하고(C), 전체 로드 후 지속적 복제(CDC) 작업을 사용하면(A) 원본이 온라인인 동안 발생하는 변경 사항이 Aurora에 계속 반영됩니다. PostgreSQL 호환 대상이므로 별도의 스키마 변환은 필수가 아닙니다.",
      en: "A DMS replication instance performs the transfer, and an ongoing replication task uses change data capture to keep Aurora synchronized while the source remains online."
    },
    why_wrong: {
      B: { ko: "일회성 백업은 마이그레이션 중 새 변경 사항을 지속적으로 동기화하지 않습니다.", en: "A one-time backup does not synchronize changes made during migration." },
      D: { ko: "PostgreSQL에서 호환되는 Aurora PostgreSQL로 이동하므로 이 요구에 스키마 변환이 핵심 단계가 아닙니다.", en: "For PostgreSQL to compatible Aurora PostgreSQL, schema conversion is not the required synchronization step." },
      E: { ko: "EventBridge 모니터링은 실제 데이터 복제와 동기화를 수행하지 않습니다.", en: "EventBridge monitoring does not perform database replication or synchronization." }
    }
  }
  ,{
    id: "exam3-137", number: 137, tags: ["AWS Organizations", "Alternate Contacts", "Account Management"],
    question: {
      en: "A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each business unit's account independently upon request. The root email recipient missed a notification that was sent to the root user email address of one account. The company wants to ensure that all future notifications are not missed. Future notifications must be limited to account administrators.\nWhich solution will meet these requirements?",
      ko: "회사는 AWS Organizations로 각 사업부 전용 AWS 계정을 만들고 요청 시 독립적으로 관리하게 합니다. 한 계정의 루트 사용자 이메일로 전송된 알림을 수신자가 놓쳤습니다. 앞으로 모든 알림을 놓치지 않아야 하며 알림 수신자는 계정 관리자로 제한해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Configure the company's email server to forward notification email messages that are sent to the AWS account root user email address to all users in the organization.", ko: "AWS 계정 루트 이메일로 오는 알림을 조직의 모든 사용자에게 전달하도록 회사 이메일 서버를 구성한다." },
      { k: "B", en: "Configure all AWS account root user email addresses as distribution lists that go to a few administrators who can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.", ko: "모든 AWS 계정의 루트 사용자 이메일을 알림 대응 관리자 몇 명에게 전달되는 배포 목록으로 구성한다. Organizations 콘솔 또는 프로그래밍 방식으로 AWS 계정 대체 연락처를 구성한다." },
      { k: "C", en: "Configure all AWS account root user email messages to be sent to one administrator who is responsible for monitoring alerts and forwarding those alerts to the appropriate groups.", ko: "모든 계정의 루트 이메일 알림을 한 명의 관리자가 받아 모니터링하고 적절한 그룹으로 전달하게 한다." },
      { k: "D", en: "Configure all existing AWS accounts and all newly created accounts to use the same root user email address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.", ko: "모든 기존 및 신규 AWS 계정이 같은 루트 사용자 이메일 주소를 사용하도록 하고 Organizations에서 대체 연락처를 구성한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "계정별 고유 루트 이메일을 관리자 전용 배포 목록으로 만들면 여러 관리자가 중요한 루트 알림을 받아 단일 수신자 누락 위험을 줄일 수 있습니다. Organizations에서 보안·운영·결제 대체 연락처도 중앙 구성하면 적절한 관리자에게 알림을 보냅니다.",
      en: "Use a unique administrator distribution list for each account's root email and centrally configure alternate security, operations, and billing contacts through Organizations. This avoids a single-recipient failure while limiting delivery to administrators."
    },
    why_wrong: {
      A: { ko: "조직의 모든 사용자에게 전달하면 알림을 계정 관리자로 제한해야 한다는 요구를 위반합니다.", en: "Forwarding to every user violates the requirement to limit notifications to account administrators." },
      C: { ko: "한 명의 관리자는 다시 단일 실패 지점이 되며 부재 시 알림을 놓칠 수 있습니다.", en: "One administrator remains a single point of failure for missed notifications." },
      D: { ko: "AWS 계정마다 고유한 루트 이메일 주소가 필요하므로 모든 계정이 동일 주소를 사용할 수 없습니다.", en: "Each AWS account requires a unique root email address, so all accounts cannot share one address." }
    }
  }
  ,{
    id: "exam3-138", number: 138, tags: ["Amazon MQ", "RabbitMQ", "RDS Multi-AZ", "Auto Scaling"],
    question: {
      en: "A company runs its ecommerce application on AWS. Every new order is published as a message in a RabbitMQ queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL database on another EC2 instance. All the EC2 instances are in the same Availability Zone. The company needs to redesign its architecture to provide the highest availability with the least operational overhead.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사의 전자상거래 애플리케이션은 새 주문을 단일 AZ의 EC2 RabbitMQ 큐에 게시합니다. 별도 EC2 애플리케이션이 메시지를 처리하고 또 다른 EC2의 PostgreSQL 데이터베이스에 저장하며 모든 인스턴스가 같은 AZ에 있습니다. 운영 부담을 최소화하면서 가장 높은 가용성을 제공하도록 재설계해야 합니다.\n무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.", ko: "큐를 Amazon MQ의 활성/대기 RabbitMQ 쌍으로 이전하고 애플리케이션과 PostgreSQL 데이터베이스용 EC2를 각각 다중 AZ Auto Scaling 그룹으로 구성한다." },
      { k: "B", en: "Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.", ko: "큐를 Amazon MQ의 활성/대기 RabbitMQ 쌍으로 이전하고 애플리케이션 EC2를 다중 AZ Auto Scaling 그룹으로 구성한다. 데이터베이스를 다중 AZ RDS for PostgreSQL로 이전한다." },
      { k: "C", en: "Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.", ko: "RabbitMQ 큐와 애플리케이션을 각각 다중 AZ EC2 Auto Scaling 그룹으로 구성하고 데이터베이스를 다중 AZ RDS for PostgreSQL로 이전한다." },
      { k: "D", en: "Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.", ko: "RabbitMQ 큐, 애플리케이션, PostgreSQL 데이터베이스를 각각 다중 AZ EC2 Auto Scaling 그룹으로 구성한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "Amazon MQ의 활성/대기 RabbitMQ 브로커는 메시징 계층의 관리형 다중 AZ 장애 조치를 제공합니다. 애플리케이션은 다중 AZ Auto Scaling으로 자동 복구하고, 데이터베이스는 RDS for PostgreSQL 다중 AZ로 이전해 동기 복제와 자동 장애 조치를 사용하면 모든 계층의 가용성과 운영 효율이 가장 높습니다.",
      en: "Active/standby RabbitMQ on Amazon MQ provides managed broker failover, Multi-AZ Auto Scaling protects the application tier, and RDS PostgreSQL Multi-AZ supplies managed synchronous standby and database failover."
    },
    why_wrong: {
      A: { ko: "상태 저장 PostgreSQL을 일반 Auto Scaling 그룹에서 운영하면 복제·일관성·장애 조치를 직접 구현해야 합니다.", en: "Running stateful PostgreSQL in a standard Auto Scaling group requires custom replication, consistency, and failover." },
      C: { ko: "RabbitMQ를 EC2 Auto Scaling 그룹에 넣는 것만으로 브로커 상태와 메시지 복제·장애 조치가 자동 구성되지 않습니다.", en: "An EC2 Auto Scaling group alone does not configure RabbitMQ state, message replication, or broker failover." },
      D: { ko: "메시지 브로커와 데이터베이스를 모두 직접 관리해야 하므로 운영 부담이 가장 큽니다.", en: "Self-managing both the broker and database creates the highest operational overhead." }
    }
  }
  ,{
    id: "exam3-139", number: 139, tags: ["S3 Replication", "EventBridge", "Lambda", "SageMaker Pipelines"],
    question: {
      en: "A reporting team receives files each day in an Amazon S3 bucket. The reporting team manually reviews and copies the files from this initial S3 bucket to an analysis S3 bucket each day at the same time to use with Amazon QuickSight. Additional teams are starting to send more files in larger sizes to the initial S3 bucket. The reporting team wants to move the files automatically to the analysis S3 bucket as the files enter the initial S3 bucket. The reporting team also wants to use AWS Lambda functions to run pattern-matching code on the copied data. In addition, the reporting team wants to send the data files to a pipeline in Amazon SageMaker Pipelines.\nWhat should a solutions architect do to meet these requirements with the LEAST operational overhead?",
      ko: "보고 팀은 매일 초기 S3 버킷으로 파일을 받고 정해진 시간에 수동 검토 후 QuickSight 분석용 S3 버킷으로 복사합니다. 더 많은 팀이 더 큰 파일을 보내기 시작했습니다. 파일이 초기 버킷에 들어오는 즉시 분석 버킷으로 자동 이동하고, 복사된 데이터에 Lambda 패턴 일치 코드를 실행하며, SageMaker Pipelines에도 파일을 전달하려 합니다.\n운영 부담이 가장 적은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create a Lambda function to copy the files to the analysis S3 bucket. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.", ko: "Lambda로 분석 버킷에 파일을 복사한다. 분석 버킷의 S3 이벤트 알림 대상으로 Lambda와 SageMaker Pipelines를 지정하고 이벤트 유형을 `s3:ObjectCreated:Put`으로 구성한다." },
      { k: "B", en: "Create a Lambda function to copy the files to the analysis S3 bucket. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.", ko: "Lambda로 분석 버킷에 파일을 복사한다. 분석 버킷이 EventBridge로 이벤트 알림을 보내게 하고 ObjectCreated 규칙의 대상으로 Lambda와 SageMaker Pipelines를 구성한다." },
      { k: "C", en: "Configure S3 replication between the S3 buckets. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.", ko: "두 버킷 사이에 S3 복제를 구성한다. 분석 버킷의 S3 이벤트 알림 대상으로 Lambda와 SageMaker Pipelines를 지정하고 이벤트 유형을 `s3:ObjectCreated:Put`으로 구성한다." },
      { k: "D", en: "Configure S3 replication between the S3 buckets. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.", ko: "두 버킷 사이에 S3 복제를 구성한다. 분석 버킷이 EventBridge로 이벤트 알림을 보내게 하고 ObjectCreated 규칙의 대상으로 Lambda와 SageMaker Pipelines를 구성한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "S3 복제는 파일 크기와 수량 증가에 맞춰 원본에서 분석 버킷으로 자동 복사하므로 사용자 지정 복사 코드가 필요 없습니다. 분석 버킷의 ObjectCreated 이벤트를 EventBridge로 보내면 하나의 규칙에서 Lambda와 SageMaker Pipelines 등 여러 대상으로 유연하게 전달할 수 있습니다.",
      en: "S3 replication automatically copies growing files without custom copy code. EventBridge receives ObjectCreated events from the analysis bucket and can fan them out to both Lambda and SageMaker Pipelines."
    },
    why_wrong: {
      A: { ko: "복사 Lambda를 직접 운영해야 하고 S3 이벤트 알림은 SageMaker Pipelines를 직접 대상으로 지원하지 않습니다.", en: "It requires custom copy code, and native S3 notifications do not directly target SageMaker Pipelines." },
      B: { ko: "EventBridge 팬아웃은 적합하지만 관리형 S3 복제 대신 파일 복사 Lambda를 유지해야 합니다.", en: "EventBridge fanout is suitable, but custom Lambda copying is more operational work than S3 replication." },
      C: { ko: "복제는 적합하지만 S3 이벤트 알림 대상에는 SageMaker Pipelines를 직접 지정할 수 없습니다.", en: "Replication is appropriate, but S3 event notifications cannot directly invoke SageMaker Pipelines." }
    }
  }
  ,{
    id: "exam3-140", number: 140, tags: ["EC2 Spot", "Compute Savings Plans", "Fargate", "Lambda"],
    question: {
      en: "A solutions architect needs to help a company optimize the cost of running an application on AWS. The application will use Amazon EC2 instances, AWS Fargate, and AWS Lambda for compute within the architecture. The EC2 instances will run the data ingestion layer of the application. EC2 usage will be sporadic and unpredictable. Workloads that run on EC2 instances can be interrupted at any time. The application front end will run on Fargate, and Lambda will serve the API layer. The front-end utilization and API layer utilization will be predictable over the course of the next year.\nWhich combination of purchasing options will provide the MOST cost-effective solution for hosting this application? (Choose two.)",
      ko: "솔루션스 아키텍트는 EC2, Fargate, Lambda를 사용하는 애플리케이션의 비용을 최적화해야 합니다. 데이터 수집 계층의 EC2 사용량은 간헐적이고 예측 불가능하며 언제든 중단될 수 있습니다. 프런트엔드는 Fargate, API 계층은 Lambda에서 실행되고 두 계층의 사용량은 향후 1년간 예측 가능합니다.\n가장 비용 효율적인 구매 옵션 조합은 무엇입니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Use Spot Instances for the data ingestion layer", ko: "데이터 수집 계층에 스팟 인스턴스를 사용한다." },
      { k: "B", en: "Use On-Demand Instances for the data ingestion layer", ko: "데이터 수집 계층에 온디맨드 인스턴스를 사용한다." },
      { k: "C", en: "Purchase a 1-year Compute Savings Plan for the front end and API layer.", ko: "프런트엔드와 API 계층에 1년 Compute Savings Plan을 구매한다." },
      { k: "D", en: "Purchase 1-year All Upfront Reserved Instances for the data ingestion layer.", ko: "데이터 수집 계층에 1년 전체 선결제 예약 인스턴스를 구매한다." },
      { k: "E", en: "Purchase a 1-year EC2 Instance Savings Plan for the front end and API layer.", ko: "프런트엔드와 API 계층에 1년 EC2 Instance Savings Plan을 구매한다." }
    ],
    answer: ["A", "C"],
    explanation: {
      ko: "중단을 허용하고 사용량이 예측 불가능한 EC2 수집 계층에는 약정 없는 스팟 인스턴스가 가장 저렴합니다(A). 사용량이 예측 가능한 Fargate와 Lambda에는 두 서비스를 모두 지원하는 1년 Compute Savings Plan이 적합합니다(C).",
      en: "Use Spot for the sporadic interruption-tolerant EC2 ingestion layer. A one-year Compute Savings Plan covers the predictable Fargate and Lambda usage across both services."
    },
    why_wrong: {
      B: { ko: "중단을 허용하는 작업에 온디맨드를 사용하면 스팟 절감 효과를 놓칩니다.", en: "On-Demand misses the Spot discount available to an interruption-tolerant workload." },
      D: { ko: "간헐적이고 예측 불가능한 수집 계층에 장기 RI를 구매하면 미사용 약정 비용이 발생합니다.", en: "A long-term RI commitment is inefficient for sporadic, unpredictable ingestion usage." },
      E: { ko: "EC2 Instance Savings Plans는 Fargate와 Lambda 사용량에 적용되지 않습니다.", en: "EC2 Instance Savings Plans do not cover Fargate or Lambda usage." }
    }
  }
  ,{
    id: "exam3-141", number: 141, tags: ["CloudFront", "ALB", "Global Performance"],
    question: {
      en: "A company runs a web-based portal that provides users with global breaking news, local alerts, and weather updates. The portal delivers each user a personalized view by using mixture of static and dynamic content. Content is served over HTTPS through an API server running on an Amazon EC2 instance behind an Application Load Balancer (ALB). The company wants the portal to provide this content to its users across the world as quickly as possible.\nHow should a solutions architect design the application to ensure the LEAST amount of latency for all users?",
      ko: "회사는 전 세계 속보, 지역 알림, 날씨 업데이트를 제공하는 웹 포털을 운영합니다. 포털은 정적·동적 콘텐츠를 섞어 사용자별 화면을 제공하며, 콘텐츠는 ALB 뒤 EC2 API 서버에서 HTTPS로 전달됩니다. 전 세계 사용자에게 가능한 한 빠르게 콘텐츠를 제공해야 합니다.\n모든 사용자의 지연 시간을 최소화하려면 어떻게 설계해야 합니까?"
    },
    options: [
      { k: "A", en: "Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve all static and dynamic content by specifying the ALB as an origin.", ko: "애플리케이션 스택을 단일 리전에 배포하고 ALB를 오리진으로 지정한 CloudFront로 정적·동적 콘텐츠를 모두 제공한다." },
      { k: "B", en: "Deploy the application stack in two AWS Regions. Use an Amazon Route 53 latency routing policy to serve all content from the ALB in the closest Region.", ko: "애플리케이션 스택을 두 리전에 배포하고 Route 53 지연 시간 라우팅으로 가장 가까운 리전의 ALB에서 모든 콘텐츠를 제공한다." },
      { k: "C", en: "Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve the static content. Serve the dynamic content directly from the ALB.", ko: "애플리케이션 스택을 단일 리전에 배포하고 정적 콘텐츠는 CloudFront, 동적 콘텐츠는 ALB에서 직접 제공한다." },
      { k: "D", en: "Deploy the application stack in two AWS Regions. Use an Amazon Route 53 geolocation routing policy to serve all content from the ALB in the closest Region.", ko: "애플리케이션 스택을 두 리전에 배포하고 Route 53 지리 위치 라우팅으로 가장 가까운 리전의 ALB에서 모든 콘텐츠를 제공한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "CloudFront는 정적 콘텐츠를 엣지에 캐시하고, 캐시하지 않는 동적 요청도 엣지 접속과 AWS 글로벌 네트워크를 이용해 ALB 오리진까지 최적화합니다. 하나의 배포로 전 세계 사용자에게 두 콘텐츠 유형을 모두 빠르게 제공할 수 있습니다.",
      en: "CloudFront caches static content at the edge and accelerates uncacheable dynamic requests over optimized connections and the AWS global network to the ALB origin."
    },
    why_wrong: {
      B: { ko: "다중 리전은 복잡성을 크게 높이며 Route 53 DNS 라우팅만으로 CloudFront의 엣지 캐시와 연결 최적화를 제공하지 않습니다.", en: "Multi-Region deployment adds major complexity, and DNS routing alone lacks CloudFront edge caching and connection optimization." },
      C: { ko: "동적 콘텐츠를 ALB에서 직접 제공하면 먼 사용자가 장거리 인터넷 경로를 사용해 지연이 커집니다.", en: "Serving dynamic content directly from the ALB leaves distant users on long public-internet paths." },
      D: { ko: "지리 위치 라우팅은 사용자 위치 기반 정책이며 실제 최저 지연 리전을 측정하는 기능이 아니고 엣지 전달도 제공하지 않습니다.", en: "Geolocation routing is policy-based rather than latency-based and does not provide edge delivery." }
    }
  }
  ,{
    id: "exam3-142", number: 142, tags: ["Global Accelerator", "NLB", "UDP", "Auto Scaling"],
    question: {
      en: "A gaming company is designing a highly available architecture. The application runs on a modified Linux kernel and supports only UDP-based traffic. The company needs the front-end tier to provide the best possible user experience. That tier must have low latency, route traffic to the nearest edge location, and provide static IP addresses for entry into the application endpoints.\nWhat should a solutions architect do to meet these requirements?",
      ko: "게임 회사가 고가용성 아키텍처를 설계합니다. 애플리케이션은 수정된 Linux 커널에서 실행되며 UDP 트래픽만 지원합니다. 프런트엔드 계층은 낮은 지연 시간, 가장 가까운 엣지 위치로의 라우팅, 애플리케이션 진입점용 고정 IP 주소를 제공해야 합니다.\n무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Configure Amazon Route 53 to forward requests to an Application Load Balancer. Use AWS Lambda for the application in AWS Application Auto Scaling.", ko: "Route 53에서 ALB로 요청을 전달하고 Application Auto Scaling의 Lambda에서 애플리케이션을 실행한다." },
      { k: "B", en: "Configure Amazon CloudFront to forward requests to a Network Load Balancer. Use AWS Lambda for the application in an AWS Application Auto Scaling group.", ko: "CloudFront에서 NLB로 요청을 전달하고 Application Auto Scaling 그룹의 Lambda에서 애플리케이션을 실행한다." },
      { k: "C", en: "Configure AWS Global Accelerator to forward requests to a Network Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.", ko: "AWS Global Accelerator에서 NLB로 요청을 전달하고 EC2 Auto Scaling 그룹의 EC2 인스턴스에서 애플리케이션을 실행한다." },
      { k: "D", en: "Configure Amazon API Gateway to forward requests to an Application Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.", ko: "API Gateway에서 ALB로 요청을 전달하고 EC2 Auto Scaling 그룹에서 애플리케이션을 실행한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "Global Accelerator는 고정 Anycast IP 주소를 제공하고 사용자를 가장 가까운 AWS 엣지로 받아 글로벌 네트워크를 통해 정상 NLB 엔드포인트로 전달합니다. NLB와 EC2는 UDP 및 사용자 지정 Linux 커널 워크로드를 지원하며 Auto Scaling으로 가용성을 높일 수 있습니다.",
      en: "Global Accelerator provides static anycast IPs and routes users through the nearest AWS edge over the global network. NLB and EC2 support UDP and the custom Linux kernel, with Auto Scaling for availability."
    },
    why_wrong: {
      A: { ko: "ALB는 UDP를 지원하지 않고 Lambda에서 사용자 지정 Linux 커널을 실행할 수 없습니다.", en: "ALB does not support UDP, and Lambda cannot run a custom Linux kernel." },
      B: { ko: "CloudFront는 일반 UDP 트래픽을 전달하지 않으며 Lambda도 수정된 커널 요구에 맞지 않습니다.", en: "CloudFront does not proxy general UDP traffic, and Lambda cannot satisfy the modified-kernel requirement." },
      D: { ko: "API Gateway와 ALB는 이 UDP 전용 애플리케이션의 프런트엔드가 될 수 없습니다.", en: "API Gateway and ALB cannot serve as the required general UDP front end." }
    }
  }
  ,{
    id: "exam3-143", number: 143, tags: ["ECS", "ALB", "Microservices", "Migration"],
    question: {
      en: "A company wants to migrate its existing on-premises monolithic application to AWS. The company wants to keep as much of the front-end code and the backend code as possible. However, the company wants to break the application into smaller applications. A different team will manage each application. The company needs a highly scalable solution that minimizes operational overhead.\nWhich solution will meet these requirements?",
      ko: "회사는 기존 온프레미스 모놀리식 애플리케이션을 AWS로 이전하려 합니다. 프런트엔드와 백엔드 코드를 가능한 한 많이 유지하면서 애플리케이션을 작은 단위로 나누고 각각 다른 팀이 관리하게 하려 합니다. 높은 확장성과 낮은 운영 부담이 필요합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Host the application on AWS Lambda. Integrate the application with Amazon API Gateway.", ko: "Lambda에서 애플리케이션을 호스팅하고 API Gateway와 통합한다." },
      { k: "B", en: "Host the application with AWS Amplify. Connect the application to an Amazon API Gateway API that is integrated with AWS Lambda.", ko: "AWS Amplify로 애플리케이션을 호스팅하고 Lambda와 통합된 API Gateway API에 연결한다." },
      { k: "C", en: "Host the application on Amazon EC2 instances. Set up an Application Load Balancer with EC2 instances in an Auto Scaling group as targets.", ko: "EC2 인스턴스에서 애플리케이션을 호스팅하고 Auto Scaling 그룹의 EC2를 대상으로 하는 ALB를 구성한다." },
      { k: "D", en: "Host the application on Amazon Elastic Container Service (Amazon ECS). Set up an Application Load Balancer with Amazon ECS as the target.", ko: "Amazon ECS에서 애플리케이션을 호스팅하고 ECS를 대상으로 하는 ALB를 구성한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "기존 코드를 서비스별 컨테이너로 패키징하면 큰 재작성 없이 모놀리스를 작은 애플리케이션으로 분리할 수 있습니다. ECS가 배포와 확장을 관리하고 ALB의 경로 기반 라우팅이 각 서비스로 요청을 전달하므로 팀별 독립 운영에 적합합니다.",
      en: "Packaging existing code into service-specific containers enables decomposition with limited rewrites. ECS manages deployment and scaling, while ALB path routing directs requests to independently managed services."
    },
    why_wrong: {
      A: { ko: "Lambda로 이전하려면 실행 모델과 코드를 상당 부분 다시 설계해야 합니다.", en: "Moving the monolith to Lambda requires substantial redesign for the function execution model." },
      B: { ko: "Amplify는 주로 프런트엔드 개발·호스팅 플랫폼이며 기존 백엔드 코드를 그대로 분리하는 컨테이너 플랫폼이 아닙니다.", en: "Amplify primarily supports front-end development and hosting rather than lift-and-decompose backend containers." },
      C: { ko: "EC2 Auto Scaling은 확장되지만 서비스별 배포·격리와 서버 운영 부담 면에서 ECS보다 불리합니다.", en: "EC2 Auto Scaling can scale, but it offers less service-level isolation and leaves more server operations than ECS." }
    }
  }
  ,{
    id: "exam3-144", number: 144, tags: ["Aurora", "Aurora Replica", "Reporting"],
    question: {
      en: "A company recently started using Amazon Aurora as the data store for its global ecommerce application. When large reports are run, developers report that the ecommerce application is performing poorly. After reviewing metrics in Amazon CloudWatch, a solutions architect finds that the ReadIOPS and CPUUtilization metrics are spiking when monthly reports run.\nWhat is the MOST cost-effective solution?",
      ko: "회사는 글로벌 전자상거래 애플리케이션의 데이터 저장소로 Aurora를 사용하기 시작했습니다. 대규모 월간 보고서를 실행할 때 애플리케이션 성능이 저하되고 CloudWatch의 ReadIOPS와 CPUUtilization 지표가 급증합니다.\n가장 비용 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Migrate the monthly reporting to Amazon Redshift.", ko: "월간 보고를 Amazon Redshift로 마이그레이션한다." },
      { k: "B", en: "Migrate the monthly reporting to an Aurora Replica.", ko: "월간 보고를 Aurora 복제본으로 이전한다." },
      { k: "C", en: "Migrate the Aurora database to a larger instance class.", ko: "Aurora 데이터베이스를 더 큰 인스턴스 클래스로 이전한다." },
      { k: "D", en: "Increase the Provisioned IOPS on the Aurora instance.", ko: "Aurora 인스턴스의 프로비저닝된 IOPS를 늘린다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "월간 보고서는 읽기 중심 워크로드이므로 Aurora 복제본의 리더 엔드포인트로 보내면 기본 쓰기 인스턴스의 CPU와 읽기 I/O 경합을 제거할 수 있습니다. 전체 클러스터나 별도 분석 플랫폼을 확장하는 것보다 비용 효율적입니다.",
      en: "Run the read-heavy reports against an Aurora Replica to offload CPU and read I/O from the writer. This is cheaper and simpler than resizing the primary or operating a separate warehouse."
    },
    why_wrong: {
      A: { ko: "월 1회 보고를 위해 Redshift 데이터 파이프라인과 웨어하우스를 추가하면 비용과 운영 복잡성이 커집니다.", en: "A Redshift warehouse and data pipeline add cost and complexity for a monthly report." },
      C: { ko: "더 큰 기본 인스턴스는 보고서가 실행되지 않는 기간에도 계속 비용이 들고 읽기와 쓰기를 분리하지 않습니다.", en: "A larger writer costs more continuously and does not separate reporting reads from writes." },
      D: { ko: "Aurora 스토리지는 전통적인 RDS처럼 인스턴스별 프로비저닝 IOPS를 조정하는 방식이 아닙니다.", en: "Aurora storage is not tuned by increasing per-instance Provisioned IOPS in this manner." }
    }
  }
  ,{
    id: "exam3-145", number: 145, tags: ["Aurora", "Auto Scaling", "Spot Fleet", "ALB"],
    question: {
      en: "A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics software is written in PHP and uses a MySQL database. The analytics software, the web server that provides PHP, and the database server are all hosted on the EC2 instance. The application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly.\nWhich solution will meet these requirements MOST cost-effectively?",
      ko: "회사는 단일 EC2 온디맨드 인스턴스에서 PHP 기반 웹사이트 분석 애플리케이션과 웹 서버, MySQL 데이터베이스를 모두 실행합니다. 사용량이 많은 시간에 성능이 저하되고 5xx 오류가 발생합니다. 애플리케이션이 원활하게 확장되어야 합니다.\n가장 비용 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load to each EC2 instance.", ko: "DB를 RDS for MySQL로 이전하고 웹 애플리케이션 AMI로 두 번째 온디맨드 EC2를 시작해 ALB로 분산한다." },
      { k: "B", en: "Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.", ko: "DB를 RDS for MySQL로 이전하고 웹 애플리케이션 AMI로 두 번째 온디맨드 EC2를 시작해 Route 53 가중치 라우팅으로 분산한다." },
      { k: "C", en: "Migrate the database to an Amazon Aurora MySQL DB instance. Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization surpasses 75%.", ko: "DB를 Aurora MySQL로 이전하고 CPU가 75%를 넘으면 EC2를 중지해 인스턴스 유형을 바꾸는 Lambda를 CloudWatch 경보로 호출한다." },
      { k: "D", en: "Migrate the database to an Amazon Aurora MySQL DB instance. Create an AMI of the web application. Apply the AMI to a launch template. Create an Auto Scaling group with the launch template. Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group.", ko: "DB를 Aurora MySQL로 이전하고 웹 애플리케이션 AMI로 시작 템플릿을 만든다. 스팟 플릿을 사용하는 Auto Scaling 그룹을 구성하고 ALB를 연결한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "데이터베이스를 관리형 Aurora로 분리하고 상태 비저장 웹 계층을 시작 템플릿 기반 Auto Scaling 그룹으로 구성하면 부하에 따라 자동 확장됩니다. ALB가 정상 인스턴스로 요청을 분산하고 스팟 플릿이 컴퓨팅 비용을 줄여 선택지 중 가장 비용 효율적인 자동 확장 구조입니다.",
      en: "Separating the database into managed Aurora and placing the web tier in an ALB-backed Auto Scaling group enables seamless horizontal scaling. A diversified Spot Fleet reduces compute cost."
    },
    why_wrong: {
      A: { ko: "고정된 EC2 두 대는 부하 변화에 따라 원활하게 자동 확장되지 않습니다.", en: "Two fixed EC2 instances do not scale seamlessly with changing demand." },
      B: { ko: "고정 용량 문제에 더해 DNS 가중치 라우팅은 ALB 상태 기반 요청 분산을 대체하기 어렵습니다.", en: "It retains fixed capacity, and DNS weighting is not a substitute for ALB request-level health-aware balancing." },
      C: { ko: "인스턴스를 중지하고 유형을 바꾸는 동안 다운타임이 발생하며 수직 확장은 원활한 확장이 아닙니다.", en: "Stopping and resizing causes downtime and vertical scaling is not seamless." }
    }
  }
  ,{
    id: "exam3-146", number: 146, tags: ["Reserved Instances", "EC2 Spot", "Cost Optimization", "High Availability"],
    question: {
      en: "A company runs a stateless web application in production on a group of Amazon EC2 On-Demand Instances behind an Application Load Balancer. The application experiences heavy usage during an 8-hour period each business day. Application usage is moderate and steady overnight. Application usage is low during weekends. The company wants to minimize its EC2 costs without affecting the availability of the application.\nWhich solution will meet these requirements?",
      ko: "회사는 ALB 뒤 여러 EC2 온디맨드 인스턴스에서 상태 비저장 프로덕션 웹 애플리케이션을 운영합니다. 평일 8시간은 사용량이 많고 밤에는 보통 수준으로 일정하며 주말에는 낮습니다. 가용성에 영향을 주지 않으면서 EC2 비용을 최소화하려 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Use Spot Instances for the entire workload.", ko: "전체 워크로드에 스팟 인스턴스를 사용한다." },
      { k: "B", en: "Use Reserved Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.", ko: "기본 사용량에는 예약 인스턴스를, 추가 용량에는 스팟 인스턴스를 사용한다." },
      { k: "C", en: "Use On-Demand Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.", ko: "기본 사용량에는 온디맨드 인스턴스를, 추가 용량에는 스팟 인스턴스를 사용한다." },
      { k: "D", en: "Use Dedicated Instances for the baseline level of usage. Use On-Demand Instances for any additional capacity that the application needs.", ko: "기본 사용량에는 전용 인스턴스를, 추가 용량에는 온디맨드 인스턴스를 사용한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "밤과 주말에도 존재하는 안정적인 기본 사용량은 RI 할인으로 충당하고, 평일 피크의 추가 상태 비저장 용량은 저렴한 스팟으로 확장하는 것이 가장 비용 효율적입니다. 스팟이 회수되어도 RI 기반 용량이 남아 가용성을 유지합니다.",
      en: "Cover the steady baseline with Reserved Instances and burst above it with low-cost Spot capacity. If Spot is interrupted, the reserved baseline remains available."
    },
    why_wrong: {
      A: { ko: "전체를 스팟으로 구성하면 동시 회수 시 프로덕션 가용성이 영향을 받을 수 있습니다.", en: "An all-Spot fleet can lose too much capacity during interruptions and affect production availability." },
      C: { ko: "가용성은 유지할 수 있지만 안정적인 기본 부하에 온디맨드를 사용하면 RI 할인보다 비쌉니다.", en: "It can preserve availability, but On-Demand is more expensive than an RI for steady baseline usage." },
      D: { ko: "전용 인스턴스 요구가 없으며 가장 비용이 높은 구성입니다.", en: "There is no dedicated-hardware requirement, and this is the most expensive option." }
    }
  }
  ,{
    id: "exam3-147", number: 147, tags: ["S3 Lifecycle", "Glacier Deep Archive", "Logs", "Retention"],
    question: {
      en: "A company needs to retain application log files for a critical application for 10 years. The application team regularly accesses logs from the past month for troubleshooting, but logs older than 1 month are rarely accessed. The application generates more than 10 TB of logs per month.\nWhich storage option meets these requirements MOST cost-effectively?",
      ko: "회사는 중요 애플리케이션 로그를 10년 동안 보존해야 합니다. 애플리케이션 팀은 문제 해결을 위해 최근 1개월 로그에는 자주 접근하지만 그보다 오래된 로그에는 거의 접근하지 않습니다. 매월 10TB가 넘는 로그가 생성됩니다.\n가장 비용 효율적인 스토리지 옵션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Store the logs in Amazon S3. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.", ko: "로그를 S3에 저장하고 AWS Backup으로 1개월이 지난 로그를 S3 Glacier Deep Archive로 이동한다." },
      { k: "B", en: "Store the logs in Amazon S3. Use S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.", ko: "로그를 S3에 저장하고 S3 수명 주기 정책으로 1개월이 지난 로그를 S3 Glacier Deep Archive로 이동한다." },
      { k: "C", en: "Store the logs in Amazon CloudWatch Logs. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.", ko: "로그를 CloudWatch Logs에 저장하고 AWS Backup으로 1개월이 지난 로그를 S3 Glacier Deep Archive로 이동한다." },
      { k: "D", en: "Store the logs in Amazon CloudWatch Logs. Use Amazon S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.", ko: "로그를 CloudWatch Logs에 저장하고 S3 수명 주기 정책으로 1개월이 지난 로그를 S3 Glacier Deep Archive로 이동한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "로그를 S3에 저장하면 10TB/월 규모를 저렴하게 확장할 수 있습니다. 생성 1개월 후 Glacier Deep Archive로 전환하고 10년 후 만료하는 수명 주기 정책을 사용하면 별도 작업 없이 접근 패턴과 보존 기간에 맞게 비용을 최소화합니다.",
      en: "S3 scales cost-effectively for more than 10 TB per month. A lifecycle policy automatically transitions logs to Glacier Deep Archive after one month and can expire them after ten years."
    },
    why_wrong: {
      A: { ko: "S3 객체 계층 전환은 AWS Backup보다 S3 수명 주기 정책이 직접적이고 운영 부담이 낮습니다.", en: "S3 lifecycle policies are the native lower-overhead mechanism for object transitions, rather than AWS Backup." },
      C: { ko: "장기 대용량 로그를 CloudWatch Logs에 유지하면 S3보다 비싸고 AWS Backup으로 이런 계층 전환을 하지 않습니다.", en: "Keeping long-term high-volume logs in CloudWatch Logs costs more, and AWS Backup does not provide this transition flow." },
      D: { ko: "S3 수명 주기 정책은 CloudWatch Logs의 로그 그룹에 직접 적용할 수 없습니다.", en: "S3 lifecycle policies cannot be applied directly to CloudWatch Logs log groups." }
    }
  }
  ,{
    id: "exam3-148", number: 148, tags: ["SNS", "SQS", "Lambda", "Failure Destination"],
    question: {
      en: "A company has a data ingestion workflow that includes the following components:\nAn Amazon Simple Notification Service (Amazon SNS) topic that receives notifications about new data deliveries\nAn AWS Lambda function that processes and stores the data\nThe ingestion workflow occasionally fails because of network connectivity issues. When failure occurs, the corresponding data is not ingested unless the company manually reruns the job.\nWhat should a solutions architect do to ensure that all notifications are eventually processed?",
      ko: "회사의 데이터 수집 워크플로에는 새 데이터 전달 알림을 받는 SNS 토픽과 데이터를 처리·저장하는 Lambda 함수가 있습니다. 네트워크 연결 문제로 워크플로가 가끔 실패하며 수동으로 작업을 재실행하지 않으면 해당 데이터가 수집되지 않습니다.\n모든 알림이 결국 처리되도록 하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Configure the Lambda function for deployment across multiple Availability Zones.", ko: "Lambda 함수를 여러 가용 영역에 배포하도록 구성한다." },
      { k: "B", en: "Modify the Lambda function's configuration to increase the CPU and memory allocations for the function.", ko: "Lambda 함수의 CPU와 메모리 할당량을 늘린다." },
      { k: "C", en: "Configure the SNS topic's retry strategy to increase both the number of retries and the wait time between retries.", ko: "SNS 토픽 재시도 전략에서 재시도 횟수와 재시도 사이 대기 시간을 늘린다." },
      { k: "D", en: "Configure an Amazon Simple Queue Service (Amazon SQS) queue as the on-failure destination. Modify the Lambda function to process messages in the queue.", ko: "SQS 큐를 실패 시 대상으로 구성하고 Lambda 함수가 큐의 메시지를 처리하도록 수정한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "비동기 Lambda 호출이 재시도 후에도 실패하면 실패 대상을 SQS로 지정해 이벤트를 내구성 있게 보존할 수 있습니다. Lambda가 이 큐를 다시 처리하게 하면 일시적 네트워크 문제가 해결된 뒤에도 모든 알림을 재시도할 수 있습니다.",
      en: "An SQS on-failure destination durably retains asynchronous invocation events after retries are exhausted. Processing that queue lets Lambda retry every notification after transient connectivity recovers."
    },
    why_wrong: {
      A: { ko: "Lambda는 기본적으로 리전 내 여러 AZ에서 관리되며 사용자가 AZ별 배포를 구성하지 않습니다.", en: "Lambda is already managed across AZs; customers do not configure per-AZ function deployment." },
      B: { ko: "원인이 네트워크 연결 실패이므로 CPU와 메모리 증가는 이벤트 유실을 막지 못합니다.", en: "More CPU and memory do not preserve events lost after network-related processing failures." },
      C: { ko: "SNS 재시도만 늘려도 모든 재시도가 실패할 수 있으며 최종 실패 이벤트를 내구성 있게 보관하지 못합니다.", en: "More SNS retries can still all fail and do not durably retain the final failed event for later processing." }
    }
  }
  ,{
    id: "exam3-149", number: 149, tags: ["SQS FIFO", "Lambda", "Ordering", "Event Processing"],
    question: {
      en: "A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead.\nHow should a solutions architect accomplish this?",
      ko: "회사의 서비스가 이벤트 데이터를 생성합니다. 데이터가 수신되는 대로 AWS에서 처리해야 하며 작성된 특정 순서를 처리 전체에서 유지해야 합니다. 운영 부담을 최소화하려 합니다.\n어떻게 구현해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue.", ko: "메시지를 보관할 SQS FIFO 큐를 만들고 Lambda 함수가 큐의 메시지를 처리하게 한다." },
      { k: "B", en: "Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.", ko: "처리할 페이로드를 전달하는 SNS 토픽을 만들고 Lambda를 구독자로 구성한다." },
      { k: "C", en: "Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.", ko: "SQS 표준 큐에 메시지를 저장하고 Lambda 함수가 독립적으로 처리하게 한다." },
      { k: "D", en: "Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.", ko: "페이로드 알림용 SNS 토픽을 만들고 SQS 큐를 구독자로 구성한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "SQS FIFO 큐는 메시지 그룹 안의 엄격한 순서와 중복 제거를 제공하며 Lambda 이벤트 소스 통합으로 서버 없이 처리할 수 있습니다. 순서를 유지하면서 수신 즉시 확장 처리하는 가장 단순한 관리형 조합입니다.",
      en: "SQS FIFO preserves strict ordering within a message group and supports deduplication. Its managed Lambda event-source integration processes messages without operating consumers."
    },
    why_wrong: {
      B: { ko: "일반 SNS 토픽은 여러 동시 전달에서 처리 순서를 보장하지 않습니다.", en: "A standard SNS topic does not guarantee ordered processing across deliveries." },
      C: { ko: "SQS 표준 큐는 최선 노력 순서만 제공하므로 엄격한 순서를 보장하지 않습니다.", en: "SQS standard queues provide only best-effort ordering." },
      D: { ko: "큐 유형이 FIFO로 명시되지 않았고 실제 처리 소비자도 구성하지 않았습니다.", en: "The queue is not specified as FIFO, and no processing consumer is configured." }
    }
  }
  ,{
    id: "exam3-150", number: 150, tags: ["CloudWatch", "Composite Alarm", "Monitoring"],
    question: {
      en: "A company is migrating an application from on-premises servers to Amazon EC2 instances. As part of the migration design requirements, a solutions architect must implement infrastructure metric alarms. The company does not need to take action if CPU utilization increases to more than 50% for a short burst of time. However, if the CPU utilization increases to more than 50% and read IOPS on the disk are high at the same time, the company needs to act as soon as possible. The solutions architect also must reduce false alarms.\nWhat should the solutions architect do to meet these requirements?",
      ko: "회사는 온프레미스 애플리케이션을 EC2로 이전하며 인프라 지표 경보를 구현해야 합니다. CPU 사용률이 짧은 시간 동안 50%를 넘는 것만으로는 조치하지 않아도 되지만, CPU가 50%를 넘고 동시에 디스크 읽기 IOPS가 높으면 가능한 한 빨리 대응해야 합니다. 오경보도 줄여야 합니다.\n무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create Amazon CloudWatch composite alarms where possible.", ko: "가능한 경우 CloudWatch 복합 경보를 생성한다." },
      { k: "B", en: "Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly.", ko: "CloudWatch 대시보드로 지표를 시각화하고 문제에 빠르게 대응한다." },
      { k: "C", en: "Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm.", ko: "CloudWatch Synthetics 카나리로 애플리케이션을 모니터링하고 경보를 발생시킨다." },
      { k: "D", en: "Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible.", ko: "가능한 경우 여러 지표 임계값이 있는 단일 CloudWatch 지표 경보를 생성한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "CPU와 읽기 IOPS 각각에 지표 경보를 만들고 `CPU 경보 AND IOPS 경보` 조건의 복합 경보를 구성하면 두 문제가 동시에 발생할 때만 조치할 수 있습니다. 짧은 CPU 급증만으로 발생하는 알림을 억제해 오경보를 줄입니다.",
      en: "Create separate CPU and read-IOPS alarms, then combine them with an AND rule in a composite alarm. Action occurs only when both conditions are true, reducing noise from brief CPU-only spikes."
    },
    why_wrong: {
      B: { ko: "대시보드는 시각화만 제공하며 두 지표 조건을 자동 평가해 조치하지 않습니다.", en: "A dashboard visualizes metrics but does not automatically evaluate both conditions and trigger action." },
      C: { ko: "Synthetics는 외부 동작과 엔드포인트를 검사하며 CPU와 디스크 지표의 복합 조건용이 아닙니다.", en: "Synthetics tests endpoints and user flows rather than combining infrastructure metric states." },
      D: { ko: "일반 단일 지표 경보는 하나의 지표를 평가합니다. 여러 경보 상태를 논리적으로 결합하는 기능은 복합 경보입니다.", en: "A standard metric alarm evaluates one metric; composite alarms logically combine multiple alarm states." }
    }
  }
]
});
