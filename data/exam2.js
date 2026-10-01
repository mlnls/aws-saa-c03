/* Exam 2
 * ExamTopics Topic 1 / Exam B 의 51~100번
 * 수록 범위: 51~100번
 * 스키마는 README.md 참고.
 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam2",
  title: "Exam 2",
  note: "Topic 1 · #51–100",
  questions: [
  {
    id: "exam2-51", number: 51, tags: ["EventBridge", "Lambda", "SES"],
    question: {
      en: "A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning.\nWhich combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
      ko: "회사는 REST API를 통해 주문 배송 통계를 제공하는 애플리케이션을 개발하고 있습니다. 매일 아침 같은 시간에 배송 통계를 추출하고, 데이터를 읽기 쉬운 HTML 형식으로 구성하여 여러 이메일 주소로 보고서를 보내려고 합니다.\n이 요구사항을 충족하기 위해 솔루션스 아키텍트가 수행해야 할 단계 조합은 무엇입니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Configure the application to send the data to Amazon Kinesis Data Firehose.", ko: "애플리케이션이 데이터를 Amazon Kinesis Data Firehose로 보내도록 구성한다." },
      { k: "B", en: "Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.", ko: "Amazon Simple Email Service(Amazon SES)를 사용해 데이터 형식을 구성하고 보고서를 이메일로 전송한다." },
      { k: "C", en: "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data.", ko: "애플리케이션 API에서 데이터를 조회하는 AWS Glue 작업을 호출하도록 Amazon EventBridge(Amazon CloudWatch Events) 예약 이벤트를 생성한다." },
      { k: "D", en: "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data.", ko: "애플리케이션 API에서 데이터를 조회하는 AWS Lambda 함수를 호출하도록 Amazon EventBridge(Amazon CloudWatch Events) 예약 이벤트를 생성한다." },
      { k: "E", en: "Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email.", ko: "애플리케이션 데이터를 Amazon S3에 저장한다. 보고서를 이메일로 보내기 위해 S3 이벤트 대상으로 Amazon Simple Notification Service(Amazon SNS) 토픽을 생성한다." }
    ],
    answer: ["B", "D"],
    explanation: {
      ko: "**정해진 시각에 REST API 호출**은 EventBridge 예약 규칙과 Lambda의 조합이 적합합니다. Lambda가 API에서 통계를 가져와 HTML 보고서를 만들고, **여러 수신자에게 HTML 이메일을 발송**하는 작업은 SES로 처리할 수 있습니다. 따라서 D와 B의 조합이 요구사항을 가장 단순하게 충족합니다.",
      en: "An EventBridge schedule invokes Lambda every morning. Lambda retrieves the statistics from the REST API and prepares the HTML report, and Amazon SES sends the HTML email to multiple recipients."
    },
    why_wrong: {
      A: { ko: "Kinesis Data Firehose는 스트리밍 데이터를 대상으로 하는 전송 서비스이며, 정해진 시간의 API 조회와 이메일 보고서 발송에는 필요하지 않습니다.", en: "Kinesis Data Firehose delivers streaming data and is unnecessary for a scheduled API query and email report." },
      C: { ko: "AWS Glue는 ETL과 대규모 데이터 처리에 적합합니다. 단순한 REST API 호출과 보고서 작성에는 Lambda보다 운영 부담이 큽니다.", en: "AWS Glue is intended for ETL and large-scale data processing; it adds overhead for a simple API call and report." },
      E: { ko: "S3 이벤트는 객체 변경 때 발생하며 매일 정해진 시각을 보장하지 않습니다. SNS 이메일도 읽기 쉬운 HTML 보고서를 구성하는 용도가 아닙니다.", en: "S3 events are driven by object changes rather than a daily schedule, and SNS is not designed to compose formatted HTML reports." }
    }
  }
  ,{
    id: "exam2-52", number: 52, tags: ["EC2", "Auto Scaling", "EFS"],
    question: {
      en: "A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically, is highly available, and requires minimum operational overhead.\nWhich solution will meet these requirements?",
      ko: "회사는 온프레미스 애플리케이션을 AWS로 마이그레이션하려 합니다. 애플리케이션이 생성하는 출력 파일의 크기는 수십 GB에서 수백 TB까지 다양합니다. 애플리케이션 데이터는 표준 파일 시스템 구조로 저장되어야 합니다. 회사는 자동으로 확장되고 고가용성을 제공하며 운영 부담이 최소인 솔루션을 원합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage.", ko: "애플리케이션을 Amazon ECS 컨테이너로 마이그레이션하고 Amazon S3를 스토리지로 사용한다." },
      { k: "B", en: "Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage.", ko: "애플리케이션을 Amazon EKS 컨테이너로 마이그레이션하고 Amazon EBS를 스토리지로 사용한다." },
      { k: "C", en: "Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage.", ko: "애플리케이션을 다중 AZ Auto Scaling 그룹의 EC2 인스턴스로 마이그레이션하고 Amazon EFS를 스토리지로 사용한다." },
      { k: "D", en: "Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage.", ko: "애플리케이션을 다중 AZ Auto Scaling 그룹의 EC2 인스턴스로 마이그레이션하고 Amazon EBS를 스토리지로 사용한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "다중 AZ Auto Scaling 그룹은 컴퓨팅 계층의 자동 확장과 고가용성을 제공합니다. EFS는 표준 NFS 파일 시스템 인터페이스를 제공하고 여러 AZ의 EC2 인스턴스가 동시에 마운트할 수 있으며, 저장 용량도 자동으로 늘고 줄어듭니다. 파일 크기 범위가 매우 크고 운영 부담을 줄여야 하는 요구에 가장 잘 맞습니다.",
      en: "A Multi-AZ Auto Scaling group provides scalable, highly available compute. EFS supplies a shared standard file system across AZs and automatically scales storage capacity with minimal administration."
    },
    why_wrong: {
      A: { ko: "S3는 객체 스토리지이므로 애플리케이션이 요구하는 표준 파일 시스템 구조를 직접 제공하지 않습니다.", en: "S3 is object storage and does not directly provide the required standard file system semantics." },
      B: { ko: "EKS는 관리 복잡성을 추가하고 EBS는 기본적으로 한 AZ에 속하는 블록 스토리지라 다중 AZ 공유 파일 시스템 요구에 맞지 않습니다.", en: "EKS adds operational complexity, and EBS is AZ-scoped block storage rather than a shared Multi-AZ file system." },
      D: { ko: "EBS 볼륨은 AZ에 종속되고 여러 AZ의 인스턴스가 하나의 표준 파일 시스템으로 함께 사용하는 데 적합하지 않습니다.", en: "EBS volumes are AZ-scoped and do not provide a shared file system across the Auto Scaling group." }
    }
  }
  ,{
    id: "exam2-53", number: 53, tags: ["S3", "Object Lock", "Glacier"],
    question: {
      en: "A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency.\nWhich solution will meet these requirements?",
      ko: "회사는 회계 기록을 Amazon S3에 저장해야 합니다. 기록은 1년 동안 즉시 접근할 수 있어야 하고, 이후 9년 동안 보관되어야 합니다. 관리자와 루트 사용자를 포함하여 회사의 누구도 전체 10년 동안 기록을 삭제할 수 없어야 합니다. 기록은 최대 복원력으로 저장되어야 합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years.", ko: "전체 10년 동안 기록을 S3 Glacier에 저장하고 액세스 제어 정책으로 10년간 삭제를 거부한다." },
      { k: "B", en: "Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion.", ko: "S3 Intelligent-Tiering으로 기록을 저장하고 IAM 정책으로 삭제를 거부한다. 10년 후 IAM 정책을 변경해 삭제를 허용한다." },
      { k: "C", en: "Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years.", ko: "S3 수명 주기 정책으로 1년 후 기록을 S3 Standard에서 S3 Glacier Deep Archive로 전환한다. S3 Object Lock 규정 준수 모드를 10년 동안 사용한다." },
      { k: "D", en: "Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years.", ko: "S3 수명 주기 정책으로 1년 후 기록을 S3 Standard에서 S3 One Zone-IA로 전환한다. S3 Object Lock 거버넌스 모드를 10년 동안 사용한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "첫 1년은 S3 Standard로 즉시 접근성을 확보하고, 이후 수명 주기 정책으로 비용이 낮은 Glacier Deep Archive에 보관합니다. **Object Lock 규정 준수(compliance) 모드**에서는 보호 기간 동안 루트 사용자를 포함한 누구도 객체 버전을 삭제하거나 보존 기간을 줄일 수 없습니다. 두 스토리지 클래스 모두 여러 AZ에 데이터를 저장하므로 높은 복원력도 충족합니다.",
      en: "S3 Standard provides immediate access for the first year, and a lifecycle rule transitions records to Glacier Deep Archive for the remaining nine years. Object Lock compliance mode prevents deletion even by the root user throughout the retention period."
    },
    why_wrong: {
      A: { ko: "Glacier 아카이브 계층은 첫 1년의 즉시 접근 요구를 충족하지 못하며, 일반 액세스 정책은 루트 사용자까지 절대적으로 막는 WORM 보호가 아닙니다.", en: "An archive tier does not meet the first year's immediate-access requirement, and an access policy is not immutable WORM retention against root." },
      B: { ko: "IAM 정책은 권한 있는 관리자가 변경할 수 있어 10년간 누구도 삭제할 수 없다는 요구를 보장하지 못합니다.", en: "An authorized administrator can change an IAM policy, so it cannot guarantee immutable retention." },
      D: { ko: "거버넌스 모드는 특별 권한이 있는 사용자가 우회할 수 있고, One Zone-IA는 단일 AZ에 저장되어 최대 복원력을 제공하지 않습니다.", en: "Governance mode can be bypassed by privileged users, and One Zone-IA does not provide maximum resiliency." }
    }
  }
  ,{
    id: "exam2-54", number: 54, tags: ["FSx for Windows", "File Storage", "High Availability"],
    question: {
      en: "A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 AWS에서 여러 Windows 워크로드를 실행합니다. 직원들은 두 EC2 인스턴스에서 호스팅되는 Windows 파일 공유를 사용하며, 이 파일 공유들은 서로 데이터를 동기화해 복제본을 유지합니다. 회사는 사용자의 현재 파일 접근 방식을 유지하면서 고가용성과 내구성을 갖춘 스토리지 솔루션을 원합니다.\n이 요구사항을 충족하려면 솔루션스 아키텍트가 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.", ko: "모든 데이터를 Amazon S3로 마이그레이션하고 사용자의 파일 접근을 위해 IAM 인증을 설정한다." },
      { k: "B", en: "Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.", ko: "Amazon S3 File Gateway를 설정하고 기존 EC2 인스턴스에 마운트한다." },
      { k: "C", en: "Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server.", ko: "파일 공유 환경을 다중 AZ 구성의 Amazon FSx for Windows File Server로 확장하고 모든 데이터를 FSx for Windows File Server로 마이그레이션한다." },
      { k: "D", en: "Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS.", ko: "파일 공유 환경을 다중 AZ 구성의 Amazon EFS로 확장하고 모든 데이터를 Amazon EFS로 마이그레이션한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "Amazon FSx for Windows File Server는 Windows 사용자가 기존과 같은 **SMB 파일 공유**로 접근할 수 있는 완전관리형 Windows 파일 시스템입니다. 다중 AZ 배포는 자동 장애 조치와 데이터 복제를 제공하므로 고가용성과 내구성을 충족하면서 접근 방식도 유지합니다.",
      en: "Amazon FSx for Windows File Server provides managed SMB shares, preserving the users' existing Windows access method. A Multi-AZ deployment supplies replication and automatic failover."
    },
    why_wrong: {
      A: { ko: "S3는 객체 스토리지이며 기존 Windows SMB 파일 공유 방식과 호환되지 않습니다.", en: "S3 is object storage and does not preserve the existing SMB file-share experience." },
      B: { ko: "S3 File Gateway는 온프레미스 애플리케이션이 S3를 파일 인터페이스로 사용하도록 하는 하이브리드 서비스입니다. AWS 내부 Windows 공유의 대체재로는 FSx가 적합합니다.", en: "S3 File Gateway is primarily a hybrid bridge to S3; FSx is the native managed replacement for Windows shares on AWS." },
      D: { ko: "EFS는 NFS 기반으로 Linux 워크로드에 적합하며 Windows의 기존 SMB 접근 방식을 보존하지 못합니다.", en: "EFS uses NFS and is intended for Linux workloads, so it does not preserve Windows SMB access." }
    }
  }
  ,{
    id: "exam2-55", number: 55, tags: ["VPC", "Security Groups", "RDS"],
    question: {
      en: "A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases.\nWhich solution will meet these requirements?",
      ko: "솔루션스 아키텍트가 여러 서브넷을 포함하는 VPC 아키텍처를 설계하고 있습니다. 이 아키텍처는 EC2 인스턴스와 RDS DB 인스턴스를 사용하는 애플리케이션을 호스팅합니다. 두 가용 영역에 총 6개 서브넷이 있으며, 각 가용 영역에는 퍼블릭 서브넷, 프라이빗 서브넷, 데이터베이스 전용 서브넷이 있습니다. 프라이빗 서브넷에서 실행되는 EC2 인스턴스만 RDS 데이터베이스에 접근할 수 있어야 합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets.", ko: "퍼블릭 서브넷의 CIDR 블록으로 향하는 경로를 제외한 새 라우팅 테이블을 만들어 데이터베이스 서브넷과 연결한다." },
      { k: "B", en: "Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances.", ko: "퍼블릭 서브넷 인스턴스에 할당된 보안 그룹의 인바운드 트래픽을 거부하는 보안 그룹을 생성해 DB 인스턴스에 연결한다." },
      { k: "C", en: "Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances.", ko: "프라이빗 서브넷 인스턴스에 할당된 보안 그룹에서 오는 인바운드 트래픽을 허용하는 보안 그룹을 생성해 DB 인스턴스에 연결한다." },
      { k: "D", en: "Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets.", ko: "퍼블릭 서브넷과 프라이빗 서브넷 사이에 새 피어링 연결을 생성하고, 프라이빗 서브넷과 데이터베이스 서브넷 사이에도 별도의 피어링 연결을 생성한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "RDS에 연결한 보안 그룹의 인바운드 규칙에서 **프라이빗 EC2 인스턴스의 보안 그룹을 소스**로 지정하면, 해당 보안 그룹이 붙은 인스턴스만 데이터베이스 포트로 접근할 수 있습니다. IP 주소 변경과 관계없이 의도한 애플리케이션 계층만 허용하는 방식입니다.",
      en: "Attach a security group to the DB instances that permits the database port only from the private instances' security group. Security-group referencing restricts access to the intended application tier regardless of changing IP addresses."
    },
    why_wrong: {
      A: { ko: "같은 VPC의 서브넷 간 통신은 로컬 경로를 사용하므로 개별 퍼블릭 서브넷 경로를 빼는 것으로 접근을 차단할 수 없습니다.", en: "Subnets in the same VPC communicate through the local route, so omitting individual public-subnet routes does not enforce this restriction." },
      B: { ko: "보안 그룹 규칙은 허용 규칙만 지원하며 명시적 거부 규칙을 만들 수 없습니다.", en: "Security groups support allow rules only; they cannot express an explicit deny rule." },
      D: { ko: "같은 VPC의 서브넷은 이미 서로 라우팅할 수 있으며 서브넷 사이에 VPC 피어링을 생성하지 않습니다.", en: "Subnets in one VPC already have local routing, and VPC peering is not created between subnets." }
    }
  }
  ,{
    id: "exam2-56", number: 56, tags: ["API Gateway", "Route 53", "ACM"],
    question: {
      en: "A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS.\nWhich solution will meet these requirements?",
      ko: "회사는 Amazon Route 53에 도메인 이름을 등록했습니다. ca-central-1 리전의 Amazon API Gateway를 백엔드 마이크로서비스 API의 퍼블릭 인터페이스로 사용하며, 서드파티 서비스가 API를 안전하게 사용합니다. 서드파티 서비스가 HTTPS를 사용할 수 있도록 회사 도메인 이름과 해당 인증서로 API Gateway URL을 구성하려 합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create stage variables in API Gateway with Name=\"Endpoint-URL\" and Value=\"Company Domain Name\" to overwrite the default URL. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM).", ko: "API Gateway에 Name=\"Endpoint-URL\", Value=\"Company Domain Name\"인 스테이지 변수를 만들어 기본 URL을 덮어쓴다. 회사 도메인의 퍼블릭 인증서를 ACM으로 가져온다." },
      { k: "B", en: "Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.", ko: "회사 도메인 이름으로 Route 53 DNS 레코드를 만들고 별칭 레코드를 리전 API Gateway 스테이지 엔드포인트로 지정한다. 회사 도메인의 퍼블릭 인증서를 us-east-1 리전의 ACM으로 가져온다." },
      { k: "C", en: "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint.", ko: "리전 API Gateway 엔드포인트를 생성하고 회사 도메인 이름과 연결한다. 같은 리전의 ACM으로 회사 도메인의 퍼블릭 인증서를 가져와 API Gateway 엔드포인트에 연결한다. Route 53이 트래픽을 API Gateway 엔드포인트로 라우팅하도록 구성한다." },
      { k: "D", en: "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name.", ko: "리전 API Gateway 엔드포인트를 생성해 회사 도메인과 연결한다. 회사 도메인의 퍼블릭 인증서를 us-east-1 리전의 ACM으로 가져와 API Gateway API에 연결한다. 회사 도메인으로 Route 53 DNS 레코드를 만들고 A 레코드를 회사 도메인으로 지정한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "API Gateway의 리전 사용자 지정 도메인에는 **API와 같은 리전의 ACM 인증서**가 필요합니다. ca-central-1에 리전 엔드포인트와 사용자 지정 도메인을 만들고 같은 리전의 인증서를 연결한 뒤, Route 53 별칭 레코드로 해당 API Gateway 도메인에 라우팅하면 HTTPS 요구를 충족합니다.",
      en: "A Regional API Gateway custom domain requires an ACM certificate in the same Region as the API. Create the custom domain in ca-central-1, attach the regional certificate, and route the Route 53 alias to that API Gateway endpoint."
    },
    why_wrong: {
      A: { ko: "스테이지 변수는 API Gateway 기본 URL을 사용자 지정 도메인으로 바꾸지 않습니다.", en: "Stage variables do not replace the API Gateway hostname with a custom domain." },
      B: { ko: "DNS 별칭만으로 사용자 지정 도메인과 TLS 연결이 구성되지 않으며, 리전 엔드포인트의 인증서는 us-east-1이 아니라 API와 같은 리전에 있어야 합니다.", en: "A DNS alias alone does not configure the custom domain or TLS, and a Regional endpoint certificate must be in the API's Region rather than us-east-1." },
      D: { ko: "us-east-1 인증서는 엣지 최적화 사용자 지정 도메인에 사용하는 방식입니다. 또한 A 레코드가 자기 도메인을 가리키는 구성도 올바른 대상 지정이 아닙니다.", en: "A us-east-1 certificate is associated with edge-optimized custom domains, and pointing an A record back to the same domain is not a valid target configuration." }
    }
  }
  ,{
    id: "exam2-57", number: 57, tags: ["Rekognition", "Machine Learning", "Human Review"],
    question: {
      en: "A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 인기 있는 소셜 미디어 웹사이트를 운영합니다. 사용자는 이미지를 업로드해 다른 사용자와 공유할 수 있습니다. 회사는 이미지에 부적절한 콘텐츠가 포함되지 않도록 해야 하며 개발 노력을 최소화하는 솔루션이 필요합니다.\n이 요구사항을 충족하려면 솔루션스 아키텍트가 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions.", ko: "Amazon Comprehend로 부적절한 콘텐츠를 탐지하고 신뢰도가 낮은 예측에는 인적 검토를 사용한다." },
      { k: "B", en: "Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions.", ko: "Amazon Rekognition으로 부적절한 콘텐츠를 탐지하고 신뢰도가 낮은 예측에는 인적 검토를 사용한다." },
      { k: "C", en: "Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions.", ko: "Amazon SageMaker로 부적절한 콘텐츠를 탐지하고 Ground Truth로 신뢰도가 낮은 예측에 레이블을 지정한다." },
      { k: "D", en: "Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions.", ko: "AWS Fargate에 사용자 지정 머신러닝 모델을 배포해 부적절한 콘텐츠를 탐지하고 Ground Truth로 신뢰도가 낮은 예측에 레이블을 지정한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "Amazon Rekognition은 이미지와 비디오의 유해하거나 부적절한 콘텐츠를 탐지하는 완전관리형 콘텐츠 조정 API를 제공합니다. 사전 학습된 모델을 바로 사용할 수 있고, 신뢰도가 낮은 결과만 사람이 검토하게 하여 개발 노력을 최소화할 수 있습니다.",
      en: "Amazon Rekognition provides a managed, pretrained content-moderation API for images and video. Low-confidence results can be routed to human review, minimizing custom development."
    },
    why_wrong: {
      A: { ko: "Amazon Comprehend는 자연어 텍스트 분석 서비스이며 이미지 콘텐츠를 분석하지 않습니다.", en: "Amazon Comprehend analyzes natural-language text, not images." },
      C: { ko: "SageMaker로 직접 모델을 개발·학습·운영하면 Rekognition의 사전 학습 API보다 개발 노력이 큽니다.", en: "Building and operating a model in SageMaker requires more development than using Rekognition's pretrained API." },
      D: { ko: "Fargate에 사용자 지정 모델을 배포하는 방식은 모델과 인프라 통합을 직접 구현해야 하므로 개발 부담이 가장 큽니다.", en: "Deploying a custom model on Fargate requires custom model and infrastructure integration, creating the most development work." }
    }
  }
  ,{
    id: "exam2-58", number: 58, tags: ["ECS", "Fargate", "Containers"],
    question: {
      en: "A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 확장성과 가용성 요구를 충족하기 위해 중요 애플리케이션을 컨테이너에서 실행하려 합니다. 회사는 중요 애플리케이션 유지 관리에 집중하고, 컨테이너 워크로드를 실행하는 기반 인프라의 프로비저닝과 관리를 담당하고 싶지 않습니다.\n이 요구사항을 충족하려면 솔루션스 아키텍트가 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon EC2 instances, and install Docker on the instances.", ko: "Amazon EC2 인스턴스를 사용하고 인스턴스에 Docker를 설치한다." },
      { k: "B", en: "Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes.", ko: "Amazon EC2 워커 노드에서 Amazon ECS를 사용한다." },
      { k: "C", en: "Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.", ko: "AWS Fargate에서 Amazon ECS를 사용한다." },
      { k: "D", en: "Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI).", ko: "Amazon ECS 최적화 AMI로 Amazon EC2 인스턴스를 사용한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "AWS Fargate는 컨테이너용 서버리스 컴퓨팅 엔진입니다. ECS 작업에 필요한 CPU와 메모리만 지정하면 AWS가 서버 프로비저닝, 패치, 클러스터 용량 관리를 담당하므로 회사는 애플리케이션에 집중할 수 있습니다.",
      en: "AWS Fargate is serverless compute for containers. With ECS on Fargate, AWS provisions and manages the underlying capacity, allowing the company to focus on its applications."
    },
    why_wrong: {
      A: { ko: "회사가 EC2 인스턴스와 Docker 설치, 패치, 용량을 모두 직접 관리해야 합니다.", en: "The company would manage the EC2 instances, Docker installation, patching, and capacity." },
      B: { ko: "ECS를 사용해도 EC2 시작 유형이면 워커 노드의 프로비저닝과 운영 책임이 남습니다.", en: "With the ECS EC2 launch type, the company still provisions and manages worker nodes." },
      D: { ko: "ECS 최적화 AMI는 설정을 줄여 주지만 기반 EC2 인스턴스 관리는 여전히 회사 책임입니다.", en: "An ECS-optimized AMI simplifies setup but leaves the underlying EC2 management with the company." }
    }
  }
  ,{
    id: "exam2-59", number: 59, tags: ["Kinesis", "S3", "Redshift"],
    question: {
      en: "A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day.\nWhat should a solutions architect do to transmit and process the clickstream data?",
      ko: "회사는 전 세계에서 300개가 넘는 웹사이트와 애플리케이션을 호스팅합니다. 매일 30TB가 넘는 클릭스트림 데이터를 분석할 플랫폼이 필요합니다.\n솔루션스 아키텍트는 클릭스트림 데이터를 전송하고 처리하기 위해 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.", ko: "AWS Data Pipeline을 설계해 데이터를 S3 버킷에 보관하고 Amazon EMR 클러스터에서 데이터를 실행해 분석 결과를 생성한다." },
      { k: "B", en: "Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.", ko: "EC2 Auto Scaling 그룹을 생성해 데이터를 처리하고 Amazon Redshift 분석용 S3 데이터 레이크로 전송한다." },
      { k: "C", en: "Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket, run an AWS Lambda function to process the data for analysis.", ko: "데이터를 Amazon CloudFront에 캐시하고 S3 버킷에 저장한다. S3 버킷에 객체가 추가되면 Lambda 함수를 실행해 분석용 데이터를 처리한다." },
      { k: "D", en: "Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis.", ko: "Amazon Kinesis Data Streams로 데이터를 수집하고 Amazon Kinesis Data Firehose로 S3 데이터 레이크에 전송한다. 데이터를 Amazon Redshift에 적재해 분석한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "대규모 실시간 클릭스트림 수집에는 Kinesis Data Streams가 적합하고, Kinesis Data Firehose는 데이터를 자동 확장하며 S3로 안정적으로 전달합니다. S3는 데이터 레이크 역할을 하고 Redshift는 대용량 분석 쿼리를 수행합니다. 관리형 서비스 조합이므로 하루 30TB 이상에도 확장할 수 있습니다.",
      en: "Kinesis Data Streams ingests the high-volume clickstream, and Kinesis Data Firehose scales delivery into an S3 data lake. Redshift then provides large-scale analytics over the loaded data."
    },
    why_wrong: {
      A: { ko: "Data Pipeline과 EMR 중심의 배치 구조는 지속적으로 들어오는 클릭스트림의 전송·처리에 적합한 관리형 스트리밍 경로가 아닙니다.", en: "A Data Pipeline and EMR batch design is less suitable than managed streaming services for continuous clickstream ingestion." },
      B: { ko: "EC2 처리 계층을 직접 프로비저닝하고 확장·복구해야 하므로 관리형 Kinesis 조합보다 운영 부담이 큽니다.", en: "A custom EC2 processing tier requires provisioning, scaling, and recovery management." },
      C: { ko: "CloudFront는 콘텐츠 전송 캐시이지 클릭스트림 수집 서비스가 아니며, 대규모 지속 스트림을 객체별 Lambda로 처리하는 구조도 적합하지 않습니다.", en: "CloudFront is a content-delivery cache, not a clickstream ingestion service, and per-object Lambda processing is unsuitable for this sustained volume." }
    }
  }
  ,{
    id: "exam2-60", number: 60, tags: ["ALB", "HTTPS", "Load Balancing"],
    question: {
      en: "A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS.\nWhat should a solutions architect do to meet this requirement?",
      ko: "회사는 AWS에서 웹사이트를 호스팅합니다. 웹사이트는 HTTP와 HTTPS를 별도로 처리하도록 구성된 Application Load Balancer(ALB) 뒤에 있습니다. 회사는 웹사이트로 들어오는 모든 요청이 HTTPS를 사용하도록 전달하려 합니다.\n이 요구사항을 충족하려면 솔루션스 아키텍트가 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Update the ALB's network ACL to accept only HTTPS traffic.", ko: "HTTPS 트래픽만 허용하도록 ALB의 네트워크 ACL을 업데이트한다." },
      { k: "B", en: "Create a rule that replaces the HTTP in the URL with HTTPS.", ko: "URL의 HTTP를 HTTPS로 바꾸는 규칙을 생성한다." },
      { k: "C", en: "Create a listener rule on the ALB to redirect HTTP traffic to HTTPS.", ko: "ALB에 HTTP 트래픽을 HTTPS로 리디렉션하는 리스너 규칙을 생성한다." },
      { k: "D", en: "Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI).", ko: "ALB를 Server Name Indication(SNI)을 사용하도록 구성된 Network Load Balancer로 교체한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "ALB의 HTTP 리스너에 **HTTPS로 리디렉션하는 규칙**을 추가하면 HTTP 요청에 301 또는 302 응답을 보내 클라이언트가 HTTPS URL로 다시 요청하게 할 수 있습니다. ALB가 기본 제공하는 리디렉션 동작이므로 애플리케이션 변경이 필요 없습니다.",
      en: "Configure the ALB's HTTP listener with a redirect action to the HTTPS protocol and port. The ALB returns an HTTP redirect so clients repeat every request over HTTPS."
    },
    why_wrong: {
      A: { ko: "네트워크 ACL로 HTTP를 차단하면 요청이 실패할 뿐 HTTPS로 전달되지 않습니다. 또한 ACL은 ALB 자체가 아니라 서브넷 수준에 적용됩니다.", en: "Blocking HTTP with a network ACL causes requests to fail rather than redirect, and network ACLs apply at the subnet level." },
      B: { ko: "막연한 URL 치환 규칙이 아니라 ALB HTTP 리스너의 공식 리디렉션 동작을 구성해야 합니다.", en: "The supported implementation is an ALB listener redirect action, not an unspecified URL replacement rule." },
      D: { ko: "ALB가 HTTP 리디렉션을 기본 지원하므로 NLB로 교체할 이유가 없습니다. SNI는 여러 인증서를 선택하는 TLS 기능이지 HTTP 리디렉션 기능이 아닙니다.", en: "The ALB already supports HTTP redirects. SNI selects certificates during TLS negotiation and does not redirect HTTP to HTTPS." }
    }
  }
  ,{
    id: "exam2-61", number: 61, tags: ["Secrets Manager", "RDS", "IAM"],
    question: {
      en: "A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사는 AWS에서 2계층 웹 애플리케이션을 개발하고 있습니다. 개발자들은 백엔드 Amazon RDS 데이터베이스에 직접 연결하는 EC2 인스턴스에 애플리케이션을 배포했습니다. 데이터베이스 자격 증명을 애플리케이션에 하드코딩해서는 안 되며, 자격 증명을 정기적으로 자동 교체해야 합니다.\n운영 부담을 가장 적게 하면서 이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time.", ko: "데이터베이스 자격 증명을 인스턴스 메타데이터에 저장한다. EventBridge 예약 규칙으로 Lambda 함수를 실행하여 RDS 자격 증명과 인스턴스 메타데이터를 동시에 업데이트한다." },
      { k: "B", en: "Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values.", ko: "암호화된 S3 버킷의 구성 파일에 데이터베이스 자격 증명을 저장한다. EventBridge 예약 규칙으로 Lambda를 실행하여 RDS 자격 증명과 구성 파일의 자격 증명을 동시에 업데이트한다. 이전 값으로 복구할 수 있도록 S3 버전 관리를 사용한다." },
      { k: "C", en: "Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.", ko: "데이터베이스 자격 증명을 AWS Secrets Manager의 보안 암호로 저장하고 자동 교체를 활성화한다. 보안 암호 접근에 필요한 권한을 EC2 역할에 연결한다." },
      { k: "D", en: "Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters.", ko: "데이터베이스 자격 증명을 Systems Manager Parameter Store의 암호화된 파라미터로 저장하고 자동 교체를 활성화한다. 암호화된 파라미터 접근에 필요한 권한을 EC2 역할에 연결한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "Secrets Manager는 RDS 자격 증명을 안전하게 저장하고 **자동 교체**하는 관리형 기능을 제공합니다. 애플리케이션은 EC2 인스턴스 역할로 보안 암호를 읽으므로 자격 증명을 코드에 넣을 필요가 없습니다. 별도의 예약 작업을 직접 운영하지 않아도 되어 운영 부담이 가장 낮습니다.",
      en: "Secrets Manager securely stores RDS credentials and provides managed automatic rotation. The application retrieves the secret through its EC2 role, avoiding hardcoded credentials and custom rotation workflows."
    },
    why_wrong: {
      A: { ko: "인스턴스 메타데이터는 애플리케이션 비밀을 저장하는 서비스가 아니며 교체 로직도 직접 구현해야 합니다.", en: "Instance metadata is not a secret store, and this design requires custom rotation logic." },
      B: { ko: "S3 파일과 데이터베이스 값을 동기화하는 Lambda를 직접 개발·운영해야 하며 이전 자격 증명 보관은 보안 위험도 만듭니다.", en: "This requires custom synchronization and rotation code, while retaining old credentials also creates risk." },
      D: { ko: "Parameter Store의 SecureString은 암호화 저장은 지원하지만 데이터베이스 자격 증명의 기본 자동 교체 기능은 제공하지 않습니다.", en: "Parameter Store SecureString encrypts values but does not provide native automatic database credential rotation." }
    }
  }
  ,{
    id: "exam2-62", number: 62, tags: ["ACM", "ALB", "TLS"],
    question: {
      en: "A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 AWS에 새로운 퍼블릭 웹 애플리케이션을 배포하며 애플리케이션은 ALB 뒤에서 실행됩니다. 외부 인증 기관(CA)이 발급한 SSL/TLS 인증서로 엣지에서 암호화해야 하며, 인증서가 만료되기 전에 매년 교체해야 합니다.\n이 요구사항을 충족하려면 솔루션스 아키텍트가 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.", ko: "ACM에서 SSL/TLS 인증서를 발급해 ALB에 적용하고 관리형 갱신 기능으로 자동 교체한다." },
      { k: "B", en: "Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.", ko: "ACM에서 SSL/TLS 인증서를 발급하고 인증서의 키 자료를 가져온다. 인증서를 ALB에 적용하고 관리형 갱신 기능으로 자동 교체한다." },
      { k: "C", en: "Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.", ko: "ACM Private CA의 루트 CA에서 SSL/TLS 인증서를 발급해 ALB에 적용하고 관리형 갱신 기능으로 자동 교체한다." },
      { k: "D", en: "Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually.", ko: "외부 SSL/TLS 인증서를 ACM으로 가져와 ALB에 적용한다. 인증서 만료가 가까워지면 EventBridge로 알림을 보내고 인증서를 수동으로 교체한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "외부 CA가 발급한 인증서는 ACM에 **가져오기(import)** 해야 합니다. 가져온 인증서는 ACM 관리형 갱신 대상이 아니므로 만료 이벤트를 EventBridge로 알리고 새 인증서를 다시 가져와 수동 교체해야 합니다.",
      en: "A certificate issued by an external CA must be imported into ACM. Imported certificates are not eligible for ACM managed renewal, so EventBridge expiration notifications and manual replacement are required."
    },
    why_wrong: {
      A: { ko: "ACM이 직접 발급한 인증서이므로 외부 CA 발급 요구와 맞지 않습니다.", en: "This uses an ACM-issued certificate rather than one issued by the required external CA." },
      B: { ko: "ACM 발급 인증서의 프라이빗 키는 내보낼 수 없으며 외부 키 자료를 가져오는 절차와도 맞지 않습니다.", en: "The private key of an ACM-issued public certificate cannot be exported, and this does not describe a valid import flow." },
      C: { ko: "ACM Private CA는 사설 인증서를 발급하며 요구된 외부 CA의 퍼블릭 인증서를 사용하지 않습니다.", en: "ACM Private CA issues private certificates and does not use the required external public CA certificate." }
    }
  }
  ,{
    id: "exam2-63", number: 63, tags: ["S3", "Lambda", "Event-Driven"],
    question: {
      en: "A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document management application. The company intends to create a product that converts large .pdf files to .jpg image files. The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time.\nWhich solution meets these requirements MOST cost-effectively?",
      ko: "회사는 AWS에서 문서 관리 애플리케이션을 운영하며 등록 사용자가 70만 명입니다. 평균 5MB 크기의 PDF 파일을 JPG 이미지로 변환하는 제품을 만들려고 합니다. 원본 파일과 변환된 파일을 모두 저장해야 하며, 시간이 지나며 빠르게 증가할 수요를 처리할 확장 가능한 솔루션이 필요합니다.\n이 요구사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert the files to .jpg format and store them back in Amazon S3.", ko: "PDF 파일을 S3에 저장한다. S3 PUT 이벤트가 Lambda 함수를 호출해 파일을 JPG로 변환하고 다시 S3에 저장하도록 구성한다." },
      { k: "B", en: "Save the .pdf files to Amazon DynamoDB. Use the DynamoDB Streams feature to invoke an AWS Lambda function to convert the files to .jpg format and store them back in DynamoDB.", ko: "PDF 파일을 DynamoDB에 저장하고 DynamoDB Streams로 Lambda를 호출해 JPG로 변환한 뒤 다시 DynamoDB에 저장한다." },
      { k: "C", en: "Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store.", ko: "EC2, EBS, Auto Scaling 그룹으로 구성된 Elastic Beanstalk 애플리케이션에 PDF를 업로드한다. EC2의 프로그램으로 JPG로 변환하고 PDF와 JPG를 EBS에 저장한다." },
      { k: "D", en: "Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store.", ko: "EC2, EFS, Auto Scaling 그룹으로 구성된 Elastic Beanstalk 애플리케이션에 PDF를 업로드한다. EC2의 프로그램으로 JPG로 변환하고 PDF와 JPG를 EBS에 저장한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "S3는 원본과 변환 파일을 사실상 무제한으로 확장해 저장하고, 객체 업로드 이벤트로 Lambda를 자동 호출할 수 있습니다. Lambda도 요청량에 따라 자동 확장되며 실행한 만큼만 과금되므로 빠르게 증가하는 간헐적 변환 작업에 비용 효율적입니다.",
      en: "S3 durably stores both originals and converted files at virtually unlimited scale. S3 events invoke Lambda on demand, and both services scale automatically with pay-per-use pricing."
    },
    why_wrong: {
      B: { ko: "DynamoDB의 항목 최대 크기는 400KB이므로 평균 5MB 파일을 저장할 수 없습니다.", en: "DynamoDB items are limited to 400 KB, so they cannot hold the average 5 MB files." },
      C: { ko: "EC2와 Auto Scaling을 운영해야 하고 EBS는 인스턴스·AZ에 묶여 공유 파일 저장과 대규모 확장에 부적합합니다.", en: "This requires managing EC2 capacity, and EBS is not suitable as massively scalable shared object storage." },
      D: { ko: "서버 계층을 직접 운영해야 하며 선택지 안에서 EFS와 EBS 저장 설명도 일관되지 않습니다.", en: "This requires managing servers, and the option is internally inconsistent about EFS versus EBS storage." }
    }
  }
  ,{
    id: "exam2-64", number: 64, tags: ["FSx for Windows", "FSx File Gateway", "Hybrid Storage"],
    question: {
      en: "A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day. The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 온프레미스 Windows 파일 서버에 5TB가 넘는 데이터를 보유하고 있으며 사용자와 애플리케이션이 매일 접근합니다. Windows 워크로드를 AWS로 이전하는 동안 AWS와 온프레미스 모두에서 파일 스토리지에 최소 지연 시간으로 접근해야 합니다. 운영 부담을 최소화하고 기존 파일 접근 패턴을 크게 바꾸지 않아야 하며, AWS 연결에는 Site-to-Site VPN을 사용합니다.\n이 요구사항을 충족하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.", ko: "AWS에 FSx for Windows File Server를 배포하고 온프레미스 파일을 이전한다. 모든 워크로드가 AWS의 FSx를 사용하도록 재구성한다." },
      { k: "B", en: "Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway.", ko: "온프레미스에 S3 File Gateway를 배포하고 파일을 게이트웨이로 이전한다. 온프레미스와 클라우드 워크로드가 S3 File Gateway를 사용하도록 재구성한다." },
      { k: "C", en: "Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway, depending on each workload's location.", ko: "온프레미스에 S3 File Gateway를 배포하고 파일을 S3로 이전한다. 위치에 따라 S3 직접 접근 또는 S3 File Gateway를 사용하도록 워크로드를 재구성한다." },
      { k: "D", en: "Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway.", ko: "AWS에 FSx for Windows File Server를 배포하고 온프레미스에 FSx File Gateway를 배포한다. 온프레미스 파일을 FSx File Gateway로 이전한다. 클라우드 워크로드는 AWS의 FSx를 사용하고 온프레미스 워크로드는 FSx File Gateway를 사용하도록 구성한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "FSx for Windows File Server는 기존 Windows SMB 접근 방식을 유지하는 관리형 파일 시스템입니다. 온프레미스의 FSx File Gateway는 자주 쓰는 데이터를 로컬 캐시에 두어 VPN 왕복 지연을 줄이면서 AWS의 같은 파일 시스템에 접근하게 합니다. 클라우드 워크로드는 FSx에 직접 연결하므로 양쪽 모두 낮은 지연 시간을 얻습니다.",
      en: "FSx for Windows File Server preserves SMB access for cloud workloads. An on-premises FSx File Gateway caches frequently used data locally while presenting the same file shares, minimizing latency on both sides."
    },
    why_wrong: {
      A: { ko: "온프레미스 워크로드가 VPN을 통해 매번 AWS의 FSx에 직접 접근하므로 최소 지연 시간 요구를 충족하기 어렵습니다.", en: "On-premises workloads would traverse the VPN for every file access, increasing latency." },
      B: { ko: "AWS 워크로드가 온프레미스 게이트웨이로 역방향 접근하게 되어 지연과 가용성이 나빠집니다.", en: "Cloud workloads would reach back through the VPN to an on-premises gateway, adding latency and dependency." },
      C: { ko: "S3 직접 접근은 기존 SMB 파일 시스템 접근 패턴을 크게 변경합니다.", en: "Direct S3 access changes the existing SMB file-access pattern significantly." }
    }
  }
  ,{
    id: "exam2-65", number: 65, tags: ["Textract", "Comprehend Medical", "PHI"],
    question: {
      en: "A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "병원은 최근 API Gateway와 Lambda로 RESTful API를 배포했습니다. 이 API로 PDF 및 JPEG 형식의 보고서를 업로드합니다. 병원은 보고서에서 보호 대상 건강 정보(PHI)를 식별하도록 Lambda 코드를 수정해야 합니다.\n운영 부담을 가장 적게 하면서 이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.", ko: "기존 Python 라이브러리로 보고서의 텍스트를 추출하고 추출된 텍스트에서 PHI를 식별한다." },
      { k: "B", en: "Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.", ko: "Amazon Textract로 보고서의 텍스트를 추출하고 Amazon SageMaker로 PHI를 식별한다." },
      { k: "C", en: "Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.", ko: "Amazon Textract로 보고서의 텍스트를 추출하고 Amazon Comprehend Medical로 PHI를 식별한다." },
      { k: "D", en: "Use Amazon Rekognition to extract text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.", ko: "Amazon Rekognition으로 보고서의 텍스트를 추출하고 Amazon Comprehend Medical로 PHI를 식별한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "Textract는 PDF와 이미지 문서에서 텍스트를 추출하는 관리형 OCR 서비스입니다. Comprehend Medical은 추출된 의료 텍스트에서 PHI를 탐지하는 전용 관리형 기능을 제공합니다. 사용자 지정 OCR이나 머신러닝 모델 없이 두 API를 연결하면 되므로 운영 부담이 가장 낮습니다.",
      en: "Textract is the managed OCR service for PDFs and images, while Comprehend Medical provides purpose-built PHI detection in medical text. Combining the two avoids custom OCR and model operations."
    },
    why_wrong: {
      A: { ko: "OCR와 PHI 탐지 로직을 라이브러리로 직접 조합하고 유지해야 하므로 운영 부담이 큽니다.", en: "Custom extraction and PHI detection code creates significant development and maintenance work." },
      B: { ko: "SageMaker에서는 PHI 탐지 모델을 직접 학습하고 배포·운영해야 합니다.", en: "SageMaker would require building, deploying, and operating a custom PHI model." },
      D: { ko: "Rekognition은 일반 이미지 분석 서비스이며 문서의 구조화된 텍스트 추출에는 Textract가 적합합니다.", en: "Rekognition is a general image-analysis service; Textract is purpose-built for document text extraction." }
    }
  }
  ,{
    id: "exam2-66", number: 66, tags: ["S3 Lifecycle", "S3 Standard-IA", "Durability"],
    question: {
      en: "A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days.\nWhich storage solution is MOST cost-effective?",
      ko: "회사의 애플리케이션은 각각 약 5MB인 파일을 대량으로 생성해 S3에 저장합니다. 회사 정책상 파일은 삭제하기 전 4년 동안 보관해야 합니다. 파일은 재생성하기 어려운 중요 비즈니스 데이터이므로 항상 즉시 접근할 수 있어야 합니다. 생성 후 첫 30일에는 자주 접근하지만 그 이후에는 거의 접근하지 않습니다.\n가장 비용 효율적인 스토리지 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation.", ko: "S3 수명 주기 정책으로 생성 30일 후 S3 Standard에서 S3 Glacier로 이동하고 생성 4년 후 삭제한다." },
      { k: "B", en: "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation.", ko: "S3 수명 주기 정책으로 생성 30일 후 S3 Standard에서 S3 One Zone-IA로 이동하고 생성 4년 후 삭제한다." },
      { k: "C", en: "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation.", ko: "S3 수명 주기 정책으로 생성 30일 후 S3 Standard에서 S3 Standard-IA로 이동하고 생성 4년 후 삭제한다." },
      { k: "D", en: "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation.", ko: "S3 수명 주기 정책으로 생성 30일 후 S3 Standard에서 S3 Standard-IA로 이동하고 생성 4년 후 S3 Glacier로 이동한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "첫 30일은 자주 접근하므로 S3 Standard가 적합하고, 이후에는 드물게 접근하지만 **즉시 접근성**과 여러 AZ에 걸친 높은 내구성이 필요하므로 S3 Standard-IA가 알맞습니다. 정확히 4년 보관 후 삭제하는 수명 주기 정책이 불필요한 추가 저장 비용도 막습니다.",
      en: "Use S3 Standard during the frequent-access period, then transition to S3 Standard-IA for infrequent access with millisecond retrieval and multi-AZ resilience. Delete objects when the four-year retention period ends."
    },
    why_wrong: {
      A: { ko: "S3 Glacier는 복원 절차와 지연이 있어 항상 즉시 접근해야 한다는 요구에 맞지 않습니다.", en: "S3 Glacier requires restoration and does not provide the required immediate access." },
      B: { ko: "One Zone-IA는 단일 AZ에 저장되므로 재생성하기 어려운 중요 데이터에 권장되지 않습니다.", en: "One Zone-IA stores data in one AZ and is unsuitable for critical, hard-to-reproduce data." },
      D: { ko: "정책상 4년 후 삭제할 수 있는데 Glacier로 더 보관하면 불필요한 저장 비용이 발생합니다.", en: "Moving data to Glacier after the required four years retains it unnecessarily and adds cost." }
    }
  }
  ,{
    id: "exam2-67", number: 67, tags: ["SQS", "Visibility Timeout", "RDS"],
    question: {
      en: "A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages.\nWhat should a solutions architect do to ensure messages are being processed once only?",
      ko: "회사는 여러 EC2 인스턴스에서 애플리케이션을 실행합니다. 애플리케이션은 SQS 큐의 메시지를 처리해 RDS 테이블에 쓰고 큐에서 메시지를 삭제합니다. SQS 큐 자체에는 중복 메시지가 없지만 RDS 테이블에서 가끔 중복 레코드가 발견됩니다.\n메시지가 한 번만 처리되도록 하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use the CreateQueue API call to create a new queue.", ko: "CreateQueue API 호출로 새 큐를 생성한다." },
      { k: "B", en: "Use the AddPermission API call to add appropriate permissions.", ko: "AddPermission API 호출로 적절한 권한을 추가한다." },
      { k: "C", en: "Use the ReceiveMessage API call to set an appropriate wait time.", ko: "ReceiveMessage API 호출로 적절한 대기 시간을 설정한다." },
      { k: "D", en: "Use the ChangeMessageVisibility API call to increase the visibility timeout.", ko: "ChangeMessageVisibility API 호출로 가시성 제한 시간을 늘린다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "처리가 끝나 메시지를 삭제하기 전에 **가시성 제한 시간**이 만료되면 같은 메시지가 다시 큐에 나타나 다른 EC2 인스턴스가 처리할 수 있습니다. 처리 시간이 예상보다 길어질 때 ChangeMessageVisibility로 제한 시간을 연장하면 처리 중 재노출을 막을 수 있습니다.",
      en: "If the visibility timeout expires before processing and deletion finish, the message becomes available to another worker. Extending it with ChangeMessageVisibility prevents that in-flight redelivery."
    },
    why_wrong: {
      A: { ko: "새 큐를 만들어도 처리 시간보다 짧은 가시성 제한 시간 문제는 그대로입니다.", en: "A new queue does not fix a visibility timeout that is shorter than processing time." },
      B: { ko: "큐 권한은 메시지가 처리 중 다시 노출되는 현상과 관계없습니다.", en: "Queue permissions do not affect in-flight message redelivery." },
      C: { ko: "대기 시간은 롱 폴링 동작을 정할 뿐 메시지가 처리 중 숨겨지는 시간을 늘리지 않습니다.", en: "Wait time controls long polling, not how long a received message remains hidden." }
    }
  }
  ,{
    id: "exam2-68", number: 68, tags: ["Direct Connect", "Site-to-Site VPN", "Hybrid Network"],
    question: {
      en: "A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The company needs to minimize costs and is willing to accept slower traffic if the primary connection fails.\nWhat should the solutions architect do to meet these requirements?",
      ko: "솔루션스 아키텍트가 온프레미스 인프라를 AWS로 확장하는 하이브리드 아키텍처를 설계하고 있습니다. 회사는 AWS 리전까지 일관된 낮은 지연 시간과 고가용성 연결이 필요합니다. 비용을 최소화해야 하며 기본 연결 장애 시 더 느린 트래픽을 허용할 수 있습니다.\n이 요구사항을 충족하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails.", ko: "리전에 AWS Direct Connect 연결을 프로비저닝하고 기본 Direct Connect 연결 장애 시 사용할 VPN 연결을 백업으로 구성한다." },
      { k: "B", en: "Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails.", ko: "프라이빗 연결을 위해 리전에 VPN 터널을 구성하고 기본 VPN 장애 시 백업으로 사용할 두 번째 VPN 터널을 구성한다." },
      { k: "C", en: "Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails.", ko: "리전에 Direct Connect 연결을 구성하고 기본 연결 장애 시 백업으로 사용할 두 번째 Direct Connect 연결을 같은 리전에 구성한다." },
      { k: "D", en: "Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails.", ko: "리전에 Direct Connect 연결을 구성하고 AWS CLI의 Direct Connect 장애 조치 속성으로 기본 연결 장애 시 백업 연결을 자동 생성한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "Direct Connect는 인터넷 기반 VPN보다 일관된 네트워크 성능과 낮은 지연 시간을 제공합니다. 별도의 Site-to-Site VPN을 백업 경로로 두면 고가용성을 확보하면서 두 번째 전용 회선 비용을 피할 수 있습니다. 장애 시 느린 경로를 허용한다는 조건에도 맞습니다.",
      en: "Direct Connect provides the consistent low-latency primary path. A Site-to-Site VPN supplies a lower-cost backup over the internet, matching the willingness to accept slower failover traffic."
    },
    why_wrong: {
      B: { ko: "두 VPN 터널 모두 인터넷을 사용하므로 정상 상태에서 일관된 낮은 지연 시간을 보장하지 못합니다.", en: "Both VPN tunnels use the internet and do not provide consistently low latency for the primary path." },
      C: { ko: "두 번째 Direct Connect는 성능은 유지하지만 VPN 백업보다 비용이 높아 비용 최소화 요구에 맞지 않습니다.", en: "A second Direct Connect preserves performance but costs more than the acceptable VPN backup." },
      D: { ko: "장애 시 물리적 Direct Connect 연결을 자동 생성하는 CLI 장애 조치 속성은 존재하지 않습니다.", en: "There is no CLI failover attribute that automatically provisions a new physical Direct Connect connection." }
    }
  }
  ,{
    id: "exam2-69", number: 69, tags: ["Auto Scaling", "Aurora", "RDS Proxy", "High Availability"],
    question: {
      en: "A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone. The company wants the application to be highly available with minimum downtime and minimum loss of data.\nWhich solution will meet these requirements with the LEAST operational effort?",
      ko: "회사는 ALB 뒤 Auto Scaling 그룹의 EC2 인스턴스에서 비즈니스 핵심 웹 애플리케이션을 실행합니다. 애플리케이션은 단일 가용 영역에 배포된 Aurora PostgreSQL 데이터베이스를 사용합니다. 회사는 다운타임과 데이터 손실을 최소화하면서 애플리케이션의 고가용성을 확보하려 합니다.\n운영 노력이 가장 적은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication.", ko: "EC2 인스턴스를 서로 다른 AWS 리전에 배치하고 Route 53 상태 확인으로 트래픽을 전환한다. Aurora PostgreSQL 교차 리전 복제를 사용한다." },
      { k: "B", en: "Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.", ko: "Auto Scaling 그룹이 여러 가용 영역을 사용하도록 구성하고 데이터베이스를 다중 AZ로 구성한다. 데이터베이스에 Amazon RDS Proxy를 구성한다." },
      { k: "C", en: "Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.", ko: "Auto Scaling 그룹을 하나의 가용 영역에서 사용하고 데이터베이스의 시간별 스냅샷을 생성한다. 장애가 발생하면 스냅샷에서 데이터베이스를 복구한다." },
      { k: "D", en: "Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database.", ko: "Auto Scaling 그룹을 여러 AWS 리전에서 사용하고 애플리케이션 데이터를 S3에 쓴다. S3 이벤트 알림으로 Lambda를 실행해 데이터를 데이터베이스에 기록한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "Auto Scaling 그룹을 여러 AZ에 걸치면 애플리케이션 서버 장애에 자동 대응할 수 있고, 데이터베이스의 다중 AZ 구성은 동기 복제와 자동 장애 조치로 다운타임과 데이터 손실을 줄입니다. RDS Proxy는 장애 조치 시 연결을 관리하고 재사용해 애플리케이션의 복구 시간을 줄입니다.",
      en: "A Multi-AZ Auto Scaling group protects the compute tier, while a Multi-AZ database provides replication and automatic failover. RDS Proxy manages pooled connections and helps applications recover more quickly during database failover."
    },
    why_wrong: {
      A: { ko: "다중 리전 설계는 복잡성과 비용이 크며 교차 리전 복제는 비동기식이라 데이터 손실 가능성도 더 큽니다.", en: "A multi-Region design adds substantial complexity and cost, and asynchronous cross-Region replication can lose more recent data." },
      C: { ko: "단일 AZ는 고가용성이 아니며 시간별 스냅샷 복구에는 긴 다운타임과 최대 1시간의 데이터 손실이 발생할 수 있습니다.", en: "A single AZ is not highly available, and hourly snapshot recovery causes downtime and potentially an hour of data loss." },
      D: { ko: "Auto Scaling 그룹은 리전 단위 리소스이며 여러 리전에 걸쳐 구성할 수 없습니다. S3와 Lambda를 쓰기 경로에 추가하는 것도 불필요하게 복잡합니다.", en: "An Auto Scaling group cannot span Regions, and adding S3 and Lambda to the write path is unnecessarily complex." }
    }
  }
  ,{
    id: "exam2-70", number: 70, tags: ["ALB", "Health Checks", "Auto Scaling"],
    question: {
      en: "A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service. The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual restart of the EC2 instances that run the web service. The company needs to improve the application's availability without writing custom scripts or code.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사의 HTTP 애플리케이션은 NLB 뒤에 있습니다. NLB 대상 그룹은 웹 서비스를 실행하는 여러 EC2 인스턴스의 Auto Scaling 그룹을 사용합니다. NLB가 애플리케이션의 HTTP 오류를 탐지하지 못하고 있으며, 오류가 발생하면 웹 서비스를 실행하는 EC2 인스턴스를 수동으로 다시 시작해야 합니다. 사용자 지정 스크립트나 코드 없이 애플리케이션 가용성을 개선해야 합니다.\n이 요구사항을 충족하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Enable HTTP health checks on the NLB, supplying the URL of the company's application.", ko: "회사 애플리케이션의 URL을 지정하여 NLB에서 HTTP 상태 확인을 활성화한다." },
      { k: "B", en: "Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are detected, the application will restart.", ko: "EC2 인스턴스에 cron 작업을 추가해 매분 로컬 애플리케이션 로그를 확인하고 HTTP 오류가 탐지되면 애플리케이션을 다시 시작한다." },
      { k: "C", en: "Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances.", ko: "NLB를 ALB로 교체한다. 회사 애플리케이션의 URL을 지정해 HTTP 상태 확인을 활성화하고 비정상 인스턴스를 교체하도록 Auto Scaling 작업을 구성한다." },
      { k: "D", en: "Create an Amazon CloudWatch alarm that monitors the UnhealthyHostCount metric for the NLB. Configure an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state.", ko: "NLB의 UnhealthyHostCount 지표를 모니터링하는 CloudWatch 경보를 만들고 경보 상태일 때 비정상 인스턴스를 교체하도록 Auto Scaling 작업을 구성한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "ALB는 HTTP 애플리케이션 계층에서 특정 경로와 성공 상태 코드를 기준으로 상태를 확인할 수 있습니다. Auto Scaling이 로드 밸런서 상태 확인을 사용하도록 구성하면 HTTP 오류로 비정상 판정된 인스턴스를 자동 교체하므로 사용자 지정 복구 코드가 필요 없습니다.",
      en: "An ALB performs application-aware HTTP health checks against a configured path. When the Auto Scaling group uses load balancer health checks, instances that fail those checks are replaced automatically without custom recovery code."
    },
    why_wrong: {
      A: { ko: "HTTP 상태 확인만 활성화해도 인스턴스를 자동 복구하도록 Auto Scaling과 연결한다는 요구까지 충족하지 않습니다.", en: "Enabling an HTTP health check alone does not state that Auto Scaling will replace the failed instance." },
      B: { ko: "cron 기반 로그 검사와 재시작 로직은 회사가 원하지 않는 사용자 지정 스크립트입니다.", en: "A cron-based log check and restart mechanism is custom scripting, which the company wants to avoid." },
      D: { ko: "집계된 UnhealthyHostCount 경보의 조정 작업은 어떤 개별 인스턴스가 비정상인지 정확히 식별해 교체하는 방식이 아닙니다.", en: "A scaling action on the aggregate UnhealthyHostCount metric does not directly identify and replace the specific unhealthy instance." }
    }
  }
  ,{
    id: "exam2-71", number: 71, tags: ["DynamoDB", "Point-in-Time Recovery", "Disaster Recovery"],
    question: {
      en: "A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour.\nWhat should the solutions architect recommend to meet these requirements?",
      ko: "회사는 DynamoDB에 고객 정보를 저장하는 쇼핑 애플리케이션을 운영합니다. 데이터 손상에 대비해 RPO 15분과 RTO 1시간을 충족하는 솔루션을 설계해야 합니다.\n이 요구사항을 충족하기 위해 무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.", ko: "DynamoDB 글로벌 테이블을 구성하고 복구 시 애플리케이션이 다른 AWS 리전을 가리키도록 한다." },
      { k: "B", en: "Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.", ko: "DynamoDB 시점 복구(PITR)를 구성하고 복구 시 원하는 시점으로 복원한다." },
      { k: "C", en: "Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB.", ko: "DynamoDB 데이터를 매일 S3 Glacier로 내보내고 복구 시 S3 Glacier에서 DynamoDB로 가져온다." },
      { k: "D", en: "Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot.", ko: "DynamoDB 테이블에 대해 15분마다 EBS 스냅샷을 예약하고 복구 시 EBS 스냅샷으로 테이블을 복원한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "DynamoDB PITR은 테이블을 지속적으로 백업하고 보존 기간 내에서 초 단위의 원하는 시점으로 새 테이블을 복원할 수 있습니다. 따라서 15분 RPO를 충분히 만족하며 별도의 백업 작업 없이 1시간 RTO 내 복구하기에 적합합니다.",
      en: "DynamoDB point-in-time recovery continuously backs up the table and can restore it to a selected second within the retention window, satisfying the 15-minute RPO with minimal recovery work."
    },
    why_wrong: {
      A: { ko: "글로벌 테이블은 변경 사항을 다른 리전에도 복제하므로 논리적 데이터 손상까지 함께 복제될 수 있습니다.", en: "Global tables can replicate logical data corruption to the other Region." },
      C: { ko: "하루 한 번 내보내기는 최대 24시간의 데이터 손실이 발생해 15분 RPO를 충족하지 못하며 Glacier 복원도 느립니다.", en: "Daily exports provide up to a 24-hour RPO, and Glacier retrieval makes recovery too slow." },
      D: { ko: "DynamoDB는 EBS 기반 스냅샷을 사용자가 생성하거나 복원하는 서비스가 아닙니다.", en: "Customers cannot create or restore EBS snapshots for a DynamoDB table." }
    }
  }
  ,{
    id: "exam2-72", number: 72, tags: ["S3", "VPC Endpoint", "Cost Optimization"],
    question: {
      en: "A company runs a photo processing application that needs to frequently upload and download pictures from Amazon S3 buckets that are located in the same AWS Region. A solutions architect has noticed an increased cost in data transfer fees and needs to implement a solution to reduce these costs.\nHow can the solutions architect meet this requirement?",
      ko: "회사는 같은 AWS 리전에 있는 S3 버킷으로 사진을 자주 업로드하고 다운로드하는 이미지 처리 애플리케이션을 운영합니다. 데이터 전송 비용이 증가하여 이를 줄이는 솔루션이 필요합니다.\n솔루션스 아키텍트는 이 요구사항을 어떻게 충족할 수 있습니까?"
    },
    options: [
      { k: "A", en: "Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through it.", ko: "퍼블릭 서브넷에 API Gateway를 배포하고 S3 호출이 이를 통과하도록 라우팅 테이블을 조정한다." },
      { k: "B", en: "Deploy a NAT gateway into a public subnet and attach an endpoint policy that allows access to the S3 buckets.", ko: "퍼블릭 서브넷에 NAT 게이트웨이를 배포하고 S3 버킷 접근을 허용하는 엔드포인트 정책을 연결한다." },
      { k: "C", en: "Deploy the application into a public subnet and allow it to route through an internet gateway to access the S3 buckets.", ko: "애플리케이션을 퍼블릭 서브넷에 배포하고 인터넷 게이트웨이를 통해 S3 버킷에 접근하게 한다." },
      { k: "D", en: "Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets.", ko: "VPC에 S3 게이트웨이 VPC 엔드포인트를 배포하고 S3 버킷 접근을 허용하는 엔드포인트 정책을 연결한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "S3 게이트웨이 VPC 엔드포인트는 VPC에서 S3로 가는 트래픽을 AWS 네트워크로 직접 라우팅하며 엔드포인트 자체 사용 요금이 없습니다. NAT 게이트웨이의 시간당 요금과 데이터 처리 요금을 피할 수 있어 같은 리전의 빈번한 전송 비용을 줄입니다.",
      en: "An S3 gateway VPC endpoint routes VPC-to-S3 traffic directly over the AWS network and has no endpoint usage charge, avoiding NAT gateway data-processing costs."
    },
    why_wrong: {
      A: { ko: "API Gateway는 서브넷에 배포하는 라우터가 아니며 S3 데이터 전송 경로로 사용할 필요가 없습니다.", en: "API Gateway is not deployed as a subnet router and is unnecessary for S3 data transfer." },
      B: { ko: "NAT 게이트웨이에는 엔드포인트 정책을 연결하지 않으며 시간당·데이터 처리 비용이 발생합니다.", en: "NAT gateways do not use endpoint policies and incur hourly and per-GB processing charges." },
      C: { ko: "인터넷 게이트웨이 경로를 위해 애플리케이션을 퍼블릭 서브넷으로 옮기는 것은 불필요하며 비용 최적화 방법도 아닙니다.", en: "Moving the application to a public subnet is unnecessary and does not provide the intended cost optimization." }
    }
  }
  ,{
    id: "exam2-73", number: 73, tags: ["Bastion Host", "Security Groups", "SSH"],
    question: {
      en: "A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC. A solutions architect needs to connect from the on-premises network, through the company's internet connection, to the bastion host, and to the application servers. The solutions architect must make sure that the security groups of all the EC2 instances will allow that access.\nWhich combination of steps should the solutions architect take to meet these requirements? (Choose two.)",
      ko: "회사는 VPC의 프라이빗 서브넷에 Linux 기반 EC2 애플리케이션 인스턴스를, 퍼블릭 서브넷에 Linux 기반 EC2 배스천 호스트를 배포했습니다. 온프레미스 네트워크에서 회사의 인터넷 연결을 통해 배스천 호스트와 애플리케이션 서버에 접속해야 하며 모든 EC2 보안 그룹이 이를 허용해야 합니다.\n어떤 단계 조합을 수행해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Replace the current security group of the bastion host with one that only allows inbound access from the application instances.", ko: "애플리케이션 인스턴스에서 오는 인바운드 접근만 허용하는 보안 그룹으로 배스천 호스트의 현재 보안 그룹을 교체한다." },
      { k: "B", en: "Replace the current security group of the bastion host with one that only allows inbound access from the internal IP range for the company.", ko: "회사의 내부 IP 범위에서 오는 인바운드 접근만 허용하는 보안 그룹으로 배스천 호스트의 현재 보안 그룹을 교체한다." },
      { k: "C", en: "Replace the current security group of the bastion host with one that only allows inbound access from the external IP range for the company.", ko: "회사의 외부 공인 IP 범위에서 오는 인바운드 접근만 허용하는 보안 그룹으로 배스천 호스트의 현재 보안 그룹을 교체한다." },
      { k: "D", en: "Replace the current security group of the application instances with one that allows inbound SSH access from only the private IP address of the bastion host.", ko: "배스천 호스트의 프라이빗 IP 주소에서 오는 SSH 인바운드 접근만 허용하는 보안 그룹으로 애플리케이션 인스턴스의 현재 보안 그룹을 교체한다." },
      { k: "E", en: "Replace the current security group of the application instances with one that allows inbound SSH access from only the public IP address of the bastion host.", ko: "배스천 호스트의 퍼블릭 IP 주소에서 오는 SSH 인바운드 접근만 허용하는 보안 그룹으로 애플리케이션 인스턴스의 현재 보안 그룹을 교체한다." }
    ],
    answer: ["C", "D"],
    explanation: {
      ko: "인터넷을 통해 배스천에 들어오는 SSH 연결은 NAT 변환 후 보이는 회사의 **외부 공인 IP 범위**로 제한해야 합니다(C). 배스천에서 같은 VPC의 프라이빗 애플리케이션 인스턴스로 연결할 때는 배스천의 **프라이빗 IP**가 소스이므로 해당 주소만 SSH 인바운드로 허용합니다(D).",
      en: "The bastion must allow SSH from the company's external public IP range because the connection arrives over the internet. The private application instances see the bastion's private VPC address, so their SSH rule should allow only that private address."
    },
    why_wrong: {
      A: { ko: "연결 방향이 반대입니다. 온프레미스 사용자가 먼저 배스천 호스트에 접속해야 합니다.", en: "This reverses the required direction; on-premises users must initiate access to the bastion." },
      B: { ko: "인터넷을 통과한 연결의 소스는 회사 내부 사설 주소가 아니라 NAT를 거친 외부 공인 주소입니다.", en: "Across the internet, the source is the company's translated public range, not its internal private range." },
      E: { ko: "같은 VPC 안에서 배스천이 애플리케이션 서버에 연결할 때 소스는 배스천의 프라이빗 IP입니다.", en: "Traffic from the bastion to a target in the same VPC uses the bastion's private IP." }
    }
  }
  ,{
    id: "exam2-74", number: 74, tags: ["Security Groups", "HTTPS", "SQL Server"],
    question: {
      en: "A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company.\nHow should security groups be configured in this situation? (Choose two.)",
      ko: "솔루션스 아키텍트가 2계층 웹 애플리케이션을 설계합니다. 퍼블릭 웹 계층은 퍼블릭 서브넷의 EC2에서 실행되고, 데이터베이스 계층은 프라이빗 서브넷의 EC2에서 Microsoft SQL Server로 실행됩니다. 보안이 매우 중요합니다.\n보안 그룹을 어떻게 구성해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0.", ko: "웹 계층 보안 그룹에서 0.0.0.0/0의 포트 443 인바운드 트래픽을 허용한다." },
      { k: "B", en: "Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0.", ko: "웹 계층 보안 그룹에서 0.0.0.0/0의 포트 443 아웃바운드 트래픽을 허용한다." },
      { k: "C", en: "Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier.", ko: "데이터베이스 계층 보안 그룹에서 웹 계층 보안 그룹으로부터 포트 1433 인바운드 트래픽을 허용한다." },
      { k: "D", en: "Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier.", ko: "데이터베이스 계층 보안 그룹에서 웹 계층 보안 그룹으로 포트 443과 1433 아웃바운드 트래픽을 허용한다." },
      { k: "E", en: "Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier.", ko: "데이터베이스 계층 보안 그룹에서 웹 계층 보안 그룹으로부터 포트 443과 1433 인바운드 트래픽을 허용한다." }
    ],
    answer: ["A", "C"],
    explanation: {
      ko: "퍼블릭 웹 계층은 인터넷 사용자의 HTTPS 요청을 받아야 하므로 443 인바운드를 허용합니다(A). SQL Server의 기본 포트는 1433이며 데이터베이스 보안 그룹은 인터넷이 아니라 **웹 계층 보안 그룹만 소스**로 허용해야 합니다(C). 보안 그룹은 상태 저장 방식이므로 응답 트래픽 규칙을 별도로 만들 필요가 없습니다.",
      en: "Allow public HTTPS ingress to the web tier on port 443, and allow SQL Server ingress on port 1433 to the database tier only from the web tier security group. Security groups are stateful, so return traffic is automatically allowed."
    },
    why_wrong: {
      B: { ko: "아웃바운드 규칙의 소스를 0.0.0.0/0으로 표현하지 않으며 외부 사용자의 요청을 받으려면 인바운드 443이 필요합니다.", en: "Public client requests require inbound 443; an outbound rule with 0.0.0.0/0 as a source is not the requirement." },
      D: { ko: "웹 계층이 데이터베이스 연결을 시작하므로 필요한 규칙은 DB 계층의 인바운드 1433입니다.", en: "The web tier initiates database connections, so the needed rule is inbound 1433 on the database tier." },
      E: { ko: "데이터베이스에는 SQL Server 포트 1433만 필요하며 443까지 열면 최소 권한 원칙에 어긋납니다.", en: "Only SQL Server port 1433 is required; opening 443 to the database violates least privilege." }
    }
  }
  ,{
    id: "exam2-75", number: 75, tags: ["API Gateway", "Lambda", "SQS", "Modernization"],
    question: {
      en: "A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the application's performance. The application consists of application tiers that communicate with each other by way of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must design a solution that resolves these issues and modernizes the application.\nWhich solution meets these requirements and is the MOST operationally efficient?",
      ko: "회사는 애플리케이션 성능을 높이기 위해 다계층 애플리케이션을 온프레미스에서 AWS로 이전하려 합니다. 각 계층은 RESTful 서비스로 통신하며 한 계층이 과부하되면 트랜잭션이 유실됩니다. 이 문제를 해결하고 애플리케이션을 현대화해야 합니다.\n가장 운영 효율적으로 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services.", ko: "API Gateway를 사용해 트랜잭션을 애플리케이션 계층의 Lambda 함수로 전달한다. 애플리케이션 서비스 사이의 통신 계층으로 SQS를 사용한다." },
      { k: "B", en: "Use Amazon CloudWatch metrics to analyze the application performance history to determine the servers' peak utilization during the performance failures. Increase the size of the application server's Amazon EC2 instances to meet the peak requirements.", ko: "CloudWatch 지표로 성능 장애 당시 서버의 최대 사용량을 분석하고 최대 요구량에 맞게 애플리케이션 EC2 인스턴스 크기를 늘린다." },
      { k: "C", en: "Use Amazon Simple Notification Service (Amazon SNS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length and scale up and down as required.", ko: "Auto Scaling 그룹의 EC2 애플리케이션 서버 간 메시징에 SNS를 사용한다. CloudWatch로 SNS 큐 길이를 모니터링하고 필요에 따라 확장·축소한다." },
      { k: "D", en: "Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length and scale up when communication failures are detected.", ko: "Auto Scaling 그룹의 EC2 애플리케이션 서버 간 메시징에 SQS를 사용한다. CloudWatch로 SQS 큐 길이를 모니터링하고 통신 장애가 감지되면 확장한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "API Gateway와 Lambda는 서버를 직접 관리하지 않는 확장 가능한 애플리케이션 계층을 제공합니다. 서비스 사이에 SQS를 두면 부하 급증 시 메시지를 내구성 있게 버퍼링해 트랜잭션 유실을 막고 각 계층을 독립적으로 확장할 수 있습니다. 현대화와 운영 효율을 모두 가장 잘 충족합니다.",
      en: "API Gateway and Lambda provide an automatically scaling, serverless application layer. SQS durably buffers transactions between services, preventing overload loss and decoupling each tier."
    },
    why_wrong: {
      B: { ko: "최대 부하에 맞춘 수직 확장은 비용이 비효율적이고 계층 간 결합이나 트랜잭션 유실 문제를 해결하지 못합니다.", en: "Sizing servers for peak load is inefficient and does not decouple tiers or prevent dropped transactions." },
      C: { ko: "SNS는 큐가 아니므로 큐 길이를 모니터링할 수 없고 소비자가 과부하될 때 내구성 있는 백로그를 제공하지 않습니다.", en: "SNS is not a queue, has no queue length to scale on, and does not provide the durable backlog described." },
      D: { ko: "SQS는 유실 문제를 줄이지만 EC2와 Auto Scaling 인프라를 계속 운영해야 하므로 서버리스 조합보다 운영 효율이 낮습니다.", en: "SQS helps with loss, but the company must still operate EC2 and Auto Scaling capacity, making it less efficient than the serverless option." }
    }
  }
  ,{
    id: "exam2-76", number: 76, tags: ["DataSync", "Direct Connect", "S3"],
    question: {
      en: "A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The data consists of JSON files stored on a storage area network (SAN) in an on-premises data center located within the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional systems that provide critical near-real-time analytics. A secure transfer is important because the data is considered sensitive.\nWhich solution offers the MOST reliable data transfer?",
      ko: "회사는 한 공장의 여러 장비에서 매일 10TB의 계측 데이터를 받습니다. 데이터는 공장 내 온프레미스 데이터 센터의 SAN에 JSON 파일로 저장됩니다. 중요 준실시간 분석 시스템들이 접근할 수 있도록 이 데이터를 S3로 전송하려 하며 민감한 데이터이므로 안전한 전송이 중요합니다.\n가장 안정적인 데이터 전송 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "AWS DataSync over public internet", ko: "퍼블릭 인터넷을 통한 AWS DataSync" },
      { k: "B", en: "AWS DataSync over AWS Direct Connect", ko: "AWS Direct Connect를 통한 AWS DataSync" },
      { k: "C", en: "AWS Database Migration Service (AWS DMS) over public internet", ko: "퍼블릭 인터넷을 통한 AWS DMS" },
      { k: "D", en: "AWS Database Migration Service (AWS DMS) over AWS Direct Connect", ko: "AWS Direct Connect를 통한 AWS DMS" }
    ],
    answer: ["B"],
    explanation: {
      ko: "DataSync는 온프레미스 파일 스토리지에서 S3로 대용량 파일을 자동 전송하며 재시도, 무결성 검증, 병렬 전송을 제공합니다. Direct Connect의 전용 연결을 사용하면 대규모 일일 전송에 더 일관된 대역폭과 안정적인 프라이빗 경로를 확보할 수 있습니다.",
      en: "DataSync is purpose-built for reliable large-scale file transfer with parallelism, retries, and integrity verification. Direct Connect provides a dedicated, consistent private path for the daily 10 TB workload."
    },
    why_wrong: {
      A: { ko: "DataSync 자체는 적합하지만 퍼블릭 인터넷은 Direct Connect보다 대역폭과 지연 시간이 가변적입니다.", en: "DataSync is appropriate, but public internet connectivity is less consistent than Direct Connect." },
      C: { ko: "DMS는 데이터베이스 마이그레이션 서비스이며 SAN의 JSON 파일 전송에 적합하지 않습니다.", en: "DMS migrates databases and is not intended for JSON files on a SAN." },
      D: { ko: "Direct Connect를 사용해도 DMS는 파일 기반 데이터 전송에 맞는 서비스가 아닙니다.", en: "Direct Connect does not make DMS suitable for file-based SAN data." }
    }
  }
  ,{
    id: "exam2-77", number: 77, tags: ["API Gateway", "Kinesis", "Lambda", "S3"],
    question: {
      en: "A company needs to configure a real-time data ingestion architecture for its application. The company needs an API, a process that transforms data as the data is streamed, and a storage solution for the data.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사는 애플리케이션을 위한 실시간 데이터 수집 아키텍처를 구성해야 합니다. API, 스트리밍 중 데이터를 변환하는 처리 과정, 데이터 저장 솔루션이 필요합니다.\n운영 부담을 가장 적게 하면서 이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.", ko: "EC2에 API를 호스팅해 Kinesis 데이터 스트림으로 데이터를 전송한다. Kinesis 스트림을 소스로 사용하는 Kinesis Data Firehose 전송 스트림을 만들고 Lambda로 데이터를 변환한 뒤 Firehose로 S3에 저장한다." },
      { k: "B", en: "Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3.", ko: "EC2에 AWS Glue로 데이터를 보내는 API를 호스팅한다. EC2의 소스/대상 확인을 중지하고 Glue로 데이터를 변환해 S3에 전송한다." },
      { k: "C", en: "Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.", ko: "API Gateway API가 Kinesis 데이터 스트림으로 데이터를 보내도록 구성한다. Kinesis 스트림을 소스로 사용하는 Kinesis Data Firehose 전송 스트림을 만들고 Lambda로 데이터를 변환한 뒤 Firehose로 S3에 저장한다." },
      { k: "D", en: "Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform the data. Use AWS Glue to send the data to Amazon S3.", ko: "API Gateway API가 AWS Glue로 데이터를 보내도록 구성한다. Lambda로 데이터를 변환하고 Glue로 S3에 전송한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "API Gateway는 서버리스 API 계층을 제공하고 Kinesis Data Streams는 실시간 데이터를 수집합니다. Firehose는 Lambda 변환을 적용하면서 데이터를 S3로 자동 전송합니다. 모든 구성 요소가 관리형으로 확장되므로 서버 운영 없이 전체 실시간 파이프라인을 구성할 수 있습니다.",
      en: "API Gateway provides the managed API, Kinesis Data Streams ingests the real-time stream, and Firehose applies Lambda transformation while delivering to S3. The entire path scales without server management."
    },
    why_wrong: {
      A: { ko: "데이터 파이프라인은 적합하지만 API용 EC2 인스턴스를 직접 운영해야 하므로 API Gateway보다 운영 부담이 큽니다.", en: "The pipeline works, but hosting the API on EC2 adds more operations than API Gateway." },
      B: { ko: "Glue는 이 방식의 실시간 API 수집 대상이 아니며 소스/대상 확인 중지는 NAT·라우팅 인스턴스에 필요한 설정입니다.", en: "Glue is not a real-time API ingestion target in this design, and disabling source/destination checks is irrelevant." },
      D: { ko: "API Gateway에서 Glue로 직접 실시간 데이터를 보내는 구성은 적절하지 않으며 Firehose의 관리형 전송 기능도 빠져 있습니다.", en: "Direct API Gateway-to-Glue streaming is not the appropriate integration and omits managed Firehose delivery." }
    }
  }
  ,{
    id: "exam2-78", number: 78, tags: ["DynamoDB", "AWS Backup", "Retention"],
    question: {
      en: "A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data for 7 years.\nWhat is the MOST operationally efficient solution that meets these requirements?",
      ko: "회사는 DynamoDB 테이블의 사용자 거래 데이터를 7년 동안 보존해야 합니다.\n이 요구사항을 가장 운영 효율적으로 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use DynamoDB point-in-time recovery to back up the table continuously.", ko: "DynamoDB 시점 복구로 테이블을 지속적으로 백업한다." },
      { k: "B", en: "Use AWS Backup to create backup schedules and retention policies for the table.", ko: "AWS Backup으로 테이블의 백업 일정과 보존 정책을 생성한다." },
      { k: "C", en: "Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.", ko: "DynamoDB 콘솔에서 테이블의 온디맨드 백업을 생성해 S3 버킷에 저장하고 S3 수명 주기 구성을 설정한다." },
      { k: "D", en: "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.", ko: "EventBridge 규칙으로 Lambda를 호출해 테이블을 백업하고 S3 버킷에 저장하도록 구성한다. S3 수명 주기 구성을 설정한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "AWS Backup은 DynamoDB 백업 일정, 장기 보존 기간, 수명 주기를 중앙 정책으로 관리하는 완전관리형 서비스입니다. 7년 보존을 자동화할 수 있어 사용자 지정 코드나 수동 작업이 필요 없습니다.",
      en: "AWS Backup centrally manages automated DynamoDB backup schedules and long-term retention policies, providing seven-year retention without custom code or manual backups."
    },
    why_wrong: {
      A: { ko: "DynamoDB PITR의 복구 가능 기간은 장기 7년 보존 요구를 충족하지 못합니다.", en: "DynamoDB PITR's recovery window does not provide seven-year retention." },
      C: { ko: "DynamoDB 온디맨드 백업은 서비스가 관리하며 일반 S3 버킷에 직접 저장하는 방식이 아닙니다. 수동 생성도 운영 효율이 낮습니다.", en: "DynamoDB on-demand backups are service-managed rather than stored in a customer S3 bucket, and manual creation is inefficient." },
      D: { ko: "AWS Backup이 제공하는 기능을 Lambda로 직접 개발하고 유지할 필요가 없습니다.", en: "This rebuilds AWS Backup scheduling and retention with custom Lambda code." }
    }
  }
  ,{
    id: "exam2-79", number: 79, tags: ["DynamoDB", "On-Demand Capacity", "Cost Optimization"],
    question: {
      en: "A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be unpredictable. When traffic spikes occur, they will happen very quickly.\nWhat should a solutions architect recommend?",
      ko: "회사는 데이터 저장에 DynamoDB 테이블을 사용할 계획이며 비용 최적화를 고려하고 있습니다. 대부분의 오전에는 테이블을 사용하지 않고 저녁에는 읽기·쓰기 트래픽을 예측하기 어려우며 트래픽 급증도 매우 빠르게 발생합니다.\n솔루션스 아키텍트는 무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Create a DynamoDB table in on-demand capacity mode.", ko: "DynamoDB 테이블을 온디맨드 용량 모드로 생성한다." },
      { k: "B", en: "Create a DynamoDB table with a global secondary index.", ko: "글로벌 보조 인덱스가 있는 DynamoDB 테이블을 생성한다." },
      { k: "C", en: "Create a DynamoDB table with provisioned capacity and auto scaling.", ko: "프로비저닝된 용량과 Auto Scaling을 사용하는 DynamoDB 테이블을 생성한다." },
      { k: "D", en: "Create a DynamoDB table in provisioned capacity mode, and configure it as a global table.", ko: "DynamoDB 테이블을 프로비저닝된 용량 모드로 생성하고 글로벌 테이블로 구성한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "온디맨드 용량 모드는 읽기·쓰기 요청당 과금되고 트래픽에 맞춰 자동 확장됩니다. 유휴 시간이 길고 사용량을 예측하기 어려우며 갑작스러운 급증이 있는 워크로드에 적합해 미사용 프로비저닝 용량 비용을 피할 수 있습니다.",
      en: "On-demand capacity charges per request and automatically accommodates variable traffic, making it ideal for long idle periods and sudden unpredictable spikes."
    },
    why_wrong: {
      B: { ko: "GSI는 추가 조회 패턴을 지원하는 기능이며 용량 모드나 트래픽 급증 대응책이 아닙니다.", en: "A GSI supports additional query patterns and does not address capacity or unpredictable spikes." },
      C: { ko: "Auto Scaling은 반응에 시간이 걸릴 수 있어 매우 빠른 급증에 스로틀링이 발생할 수 있고 유휴 용량 비용도 남습니다.", en: "Provisioned auto scaling can lag sudden spikes and retains baseline idle-capacity cost." },
      D: { ko: "글로벌 테이블은 다중 리전 복제용이며 요구되지 않은 비용과 복잡성을 추가합니다.", en: "Global tables provide multi-Region replication, adding cost and complexity unrelated to this requirement." }
    }
  }
  ,{
    id: "exam2-80", number: 80, tags: ["AMI", "KMS", "Cross-Account Sharing"],
    question: {
      en: "A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs to share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt EBS volume snapshots.\nWhat is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?",
      ko: "회사는 애플리케이션 마이그레이션 지원을 위해 AWS MSP 파트너와 계약했습니다. 기존 AWS 계정의 AMI를 MSP 파트너 계정과 공유해야 합니다. AMI는 EBS 기반이며 EBS 볼륨 스냅샷은 KMS 고객 관리형 키로 암호화되어 있습니다.\nAMI를 MSP 파트너 계정과 공유하는 가장 안전한 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Make the encrypted AMI and snapshots publicly available. Modify the key policy to allow the MSP Partner's AWS account to use the key.", ko: "암호화된 AMI와 스냅샷을 공개하고 키 정책을 수정해 MSP 파트너 계정의 키 사용을 허용한다." },
      { k: "B", en: "Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to allow the MSP Partner's AWS account to use the key.", ko: "AMI의 launchPermission 속성을 수정해 MSP 파트너 AWS 계정에만 AMI를 공유한다. 파트너 계정이 키를 사용할 수 있도록 키 정책을 수정한다." },
      { k: "C", en: "Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to trust a new KMS key that is owned by the MSP Partner for encryption.", ko: "AMI의 launchPermission 속성을 수정해 MSP 파트너 계정에만 AMI를 공유한다. 암호화를 위해 MSP 파트너 소유의 새 KMS 키를 신뢰하도록 키 정책을 수정한다." },
      { k: "D", en: "Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's account. Encrypt the S3 bucket with a new KMS key that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account.", ko: "원본 계정에서 MSP 파트너 계정의 S3 버킷으로 AMI를 내보낸다. 파트너 소유의 새 KMS 키로 버킷을 암호화하고 파트너 계정에서 AMI를 복사해 실행한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "AMI의 시작 권한을 특정 파트너 계정에만 부여하면 공개 노출 없이 계정 간 공유할 수 있습니다. 암호화된 EBS 스냅샷을 사용하려면 원본 고객 관리형 KMS 키 정책에서도 파트너 계정에 필요한 키 사용 권한을 부여해야 합니다.",
      en: "Grant launchPermission only to the partner account, and update the customer managed KMS key policy so that account can use the key for the encrypted backing snapshots. This keeps access explicitly scoped."
    },
    why_wrong: {
      A: { ko: "AMI와 스냅샷을 공개하면 특정 파트너에게만 공유한다는 최소 권한 원칙을 위반하며 암호화된 AMI는 공개 공유할 수도 없습니다.", en: "Public sharing violates least privilege, and encrypted AMIs cannot be made public." },
      C: { ko: "원본 키 정책이 다른 계정의 새 키를 신뢰하게 하는 것으로 기존 스냅샷의 암호화 키 접근 권한이 생기지 않습니다.", en: "Making the source key policy trust another key does not grant access to decrypt snapshots encrypted under the source key." },
      D: { ko: "EBS 기반 AMI를 이런 방식으로 다른 계정의 S3 버킷에 내보내 복사하는 것은 표준 계정 간 AMI 공유 절차가 아니며 불필요하게 복잡합니다.", en: "Exporting the AMI to another account's S3 bucket is not the standard cross-account sharing flow and adds unnecessary complexity." }
    }
  }
  ,{
    id: "exam2-81", number: 81, tags: ["SQS", "Auto Scaling", "Launch Template"],
    question: {
      en: "A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel while adding and removing application nodes as needed based on the number of jobs to be processed. The processor application is stateless. The solutions architect must ensure that the application is loosely coupled and the job items are durably stored.\nWhich design should the solutions architect use?",
      ko: "솔루션스 아키텍트가 AWS에 배포할 새 애플리케이션의 클라우드 아키텍처를 설계합니다. 처리할 작업 수에 따라 애플리케이션 노드를 추가하거나 제거하면서 작업을 병렬 실행해야 합니다. 처리 애플리케이션은 상태 비저장이며, 애플리케이션을 느슨하게 결합하고 작업 항목을 내구성 있게 저장해야 합니다.\n어떤 설계를 사용해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.", ko: "처리할 작업을 보내는 SNS 토픽을 만든다. 처리 애플리케이션이 포함된 AMI와 이를 사용하는 시작 구성을 만들고 Auto Scaling 그룹을 구성한다. CPU 사용량을 기준으로 노드를 추가·제거한다." },
      { k: "B", en: "Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage.", ko: "처리할 작업을 보관하는 SQS 큐를 만든다. 처리 애플리케이션이 포함된 AMI와 이를 사용하는 시작 구성을 만들고 Auto Scaling 그룹을 구성한다. 네트워크 사용량을 기준으로 노드를 추가·제거한다." },
      { k: "C", en: "Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue.", ko: "처리할 작업을 보관하는 SQS 큐를 만든다. 처리 애플리케이션이 포함된 AMI와 이를 사용하는 시작 템플릿을 만들고 Auto Scaling 그룹을 구성한다. SQS 큐의 항목 수를 기준으로 노드를 추가·제거한다." },
      { k: "D", en: "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic.", ko: "처리할 작업을 보내는 SNS 토픽을 만든다. 처리 애플리케이션이 포함된 AMI와 이를 사용하는 시작 템플릿을 만들고 Auto Scaling 그룹을 구성한다. SNS 토픽에 게시된 메시지 수를 기준으로 노드를 추가·제거한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "SQS는 작업을 내구성 있게 보관하면서 생산자와 상태 비저장 처리 노드를 분리합니다. Auto Scaling 그룹을 **큐의 메시지 수**에 맞춰 확장하면 실제 미처리 작업량에 따라 병렬 처리 용량을 정확하게 조절할 수 있습니다. 새 구성에는 시작 템플릿 사용이 권장됩니다.",
      en: "SQS durably stores jobs and decouples producers from stateless workers. Scaling an Auto Scaling group from queue depth matches worker capacity directly to the outstanding workload, and a launch template defines the workers."
    },
    why_wrong: {
      A: { ko: "SNS는 작업을 소비될 때까지 큐처럼 보관하지 않으며 CPU 사용량은 대기 작업 수를 직접 나타내지 않습니다.", en: "SNS does not durably queue jobs until workers consume them, and CPU usage does not directly represent backlog." },
      B: { ko: "SQS 선택은 맞지만 네트워크 사용량보다 큐 깊이가 실제 처리 대기량을 나타내는 적절한 확장 지표입니다.", en: "SQS is appropriate, but network usage is a poor proxy for outstanding work compared with queue depth." },
      D: { ko: "SNS는 내구성 있는 작업 백로그와 큐 길이 기반 확장을 제공하지 않습니다.", en: "SNS does not provide a durable work backlog or a queue-depth scaling signal." }
    }
  }
  ,{
    id: "exam2-82", number: 82, tags: ["ACM", "AWS Config", "EventBridge", "SNS"],
    question: {
      en: "A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate.\nWhat should a solutions architect recommend to meet this requirement?",
      ko: "회사는 AWS 클라우드에서 웹 애플리케이션을 호스팅하며 Elastic Load Balancer에 ACM으로 가져온 인증서를 사용합니다. 보안 팀은 각 인증서가 만료되기 30일 전에 알림을 받아야 합니다.\n이 요구사항을 충족하기 위해 무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire.", ko: "인증서 만료 30일 전부터 매일 SNS 토픽에 사용자 지정 메시지를 게시하도록 ACM 규칙을 추가한다." },
      { k: "B", en: "Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource.", ko: "30일 이내 만료되는 인증서를 확인하는 AWS Config 규칙을 만든다. Config가 미준수 리소스를 보고하면 EventBridge를 통해 SNS 사용자 지정 알림을 보내도록 구성한다." },
      { k: "C", en: "Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).", ko: "Trusted Advisor로 30일 이내 만료되는 인증서를 확인한다. Trusted Advisor 검사 상태 변경 지표를 기반으로 CloudWatch 경보를 만들고 SNS 사용자 지정 알림을 전송한다." },
      { k: "D", en: "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).", ko: "30일 이내 만료되는 인증서를 탐지하는 EventBridge 규칙을 만든다. 규칙이 Lambda를 호출하고 Lambda가 SNS 사용자 지정 알림을 보내도록 구성한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "AWS Config의 관리형 규칙 `acm-certificate-expiration-check`는 지정한 기간 안에 만료되는 ACM 인증서를 미준수로 표시합니다. 기준을 30일로 설정하고 Config 준수 상태 변경 이벤트를 EventBridge와 SNS로 전달하면 가져온 인증서의 갱신 알림을 자동화할 수 있습니다.",
      en: "The AWS Config managed rule acm-certificate-expiration-check marks ACM certificates that expire within the configured number of days as noncompliant. EventBridge can route that compliance change to SNS."
    },
    why_wrong: {
      A: { ko: "ACM에는 임의의 일일 SNS 메시지를 게시하는 사용자 정의 규칙 기능이 없습니다.", en: "ACM does not provide custom rules that publish arbitrary daily SNS messages." },
      C: { ko: "Trusted Advisor 검사와 CloudWatch 지표 조합보다 Config의 전용 관리형 규칙이 이 요구를 직접 충족합니다.", en: "The dedicated AWS Config managed rule addresses this requirement directly and does not depend on Trusted Advisor metric integration." },
      D: { ko: "EventBridge 자체는 남은 유효 기간을 계산하는 규칙 엔진이 아니므로 별도의 정기 조회 로직이 필요합니다.", en: "EventBridge alone does not evaluate remaining certificate lifetime; this design requires custom polling logic." }
    }
  }
  ,{
    id: "exam2-83", number: 83, tags: ["CloudFront", "Custom Origin", "Performance"],
    question: {
      en: "A company's dynamic website is hosted using on-premises servers in the United States. The company is launching its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must remain in the United States. The product is being launched in a few days, and an immediate solution is needed.\nWhat should the solutions architect recommend?",
      ko: "회사의 동적 웹사이트는 미국의 온프레미스 서버에서 호스팅됩니다. 유럽에 제품을 출시하면서 유럽 사용자의 사이트 로딩 시간을 개선하려 하지만 백엔드는 미국에 유지해야 합니다. 출시가 며칠 남지 않아 즉시 적용 가능한 솔루션이 필요합니다.\n무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Launch an Amazon EC2 instance in us-east-1 and migrate the site to it.", ko: "us-east-1에 EC2 인스턴스를 시작하고 사이트를 마이그레이션한다." },
      { k: "B", en: "Move the website to Amazon S3. Use Cross-Region Replication between Regions.", ko: "웹사이트를 S3로 이전하고 리전 간 복제를 사용한다." },
      { k: "C", en: "Use Amazon CloudFront with a custom origin pointing to the on-premises servers.", ko: "온프레미스 서버를 사용자 지정 오리진으로 지정한 CloudFront를 사용한다." },
      { k: "D", en: "Use an Amazon Route 53 geoproximity routing policy pointing to on-premises servers.", ko: "온프레미스 서버를 가리키는 Route 53 지리 근접 라우팅 정책을 사용한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "CloudFront는 온프레미스의 공개 HTTP 서버도 사용자 지정 오리진으로 사용할 수 있습니다. 유럽 엣지 로케이션에서 캐시 가능한 콘텐츠를 제공하고 연결을 최적화하면서 백엔드는 미국에 그대로 둘 수 있어 빠르게 적용 가능합니다.",
      en: "CloudFront can use the public on-premises servers as a custom origin. European edge locations cache eligible content and optimize delivery while the backend remains in the United States."
    },
    why_wrong: {
      A: { ko: "백엔드를 미국에 유지하더라도 유럽과의 거리 문제를 해결하지 못하고 며칠 안에 마이그레이션하는 부담도 있습니다.", en: "A US EC2 migration does not solve the geographic latency and adds migration work before launch." },
      B: { ko: "동적 웹사이트를 S3 정적 호스팅으로 그대로 이전할 수 없으며 백엔드 유지 요구와도 맞지 않습니다.", en: "A dynamic site cannot simply move to S3 static hosting, and this changes the backend architecture." },
      D: { ko: "모든 대상이 같은 미국 온프레미스 서버라면 DNS 라우팅 정책은 콘텐츠 전달 지연을 줄이지 못합니다.", en: "DNS geoproximity routing does not reduce delivery latency when the only backend remains the same US server." }
    }
  }
  ,{
    id: "exam2-84", number: 84, tags: ["EC2", "Reserved Instances", "On-Demand", "Cost Optimization"],
    question: {
      en: "A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2 instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours. The production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours each day. The company plans to implement automation to stop the development and test EC2 instances when they are not in use.\nWhich EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?",
      ko: "회사는 개발·테스트·프로덕션 환경의 웹, 애플리케이션, 데이터베이스 서버를 EC2에서 실행하는 기존 3계층 아키텍처의 비용을 줄이려 합니다. 피크 시간 평균 CPU는 30%, 비피크 시간은 10%입니다. 프로덕션 인스턴스는 하루 24시간 실행되고 개발·테스트 인스턴스는 하루 최소 8시간 실행됩니다. 사용하지 않을 때 개발·테스트 인스턴스를 중지하는 자동화를 도입할 예정입니다.\n가장 비용 효율적인 EC2 구매 방식은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.", ko: "프로덕션에는 스팟 인스턴스를, 개발·테스트에는 예약 인스턴스를 사용한다." },
      { k: "B", en: "Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development and test EC2 instances.", ko: "프로덕션에는 예약 인스턴스를, 개발·테스트에는 온디맨드 인스턴스를 사용한다." },
      { k: "C", en: "Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.", ko: "프로덕션에는 스팟 블록을, 개발·테스트에는 예약 인스턴스를 사용한다." },
      { k: "D", en: "Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test EC2 instances.", ko: "프로덕션에는 온디맨드 인스턴스를, 개발·테스트에는 스팟 블록을 사용한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "24시간 계속 실행되는 안정적인 프로덕션 사용량에는 장기 약정 할인인 예약 인스턴스가 비용 효율적입니다. 개발·테스트는 필요할 때만 실행하고 중지하므로 약정 없이 실행 시간만 지불하는 온디맨드가 적합합니다.",
      en: "Reserved Instances reduce cost for the steady 24/7 production baseline. Development and test instances are stopped when idle, so On-Demand pricing avoids paying for a long-term commitment during stopped periods."
    },
    why_wrong: {
      A: { ko: "프로덕션을 스팟으로만 구성하면 용량 회수로 서비스가 중단될 수 있고, 간헐적인 개발·테스트에 RI 약정은 비효율적입니다.", en: "Spot interruption risk is inappropriate for the production baseline, and RI commitments are inefficient for intermittent development usage." },
      C: { ko: "스팟 블록은 지속적인 24시간 프로덕션 용량 구매 방식이 아니며 개발·테스트 RI도 과도합니다.", en: "Spot blocks are not a steady 24/7 production purchase model, and RIs overcommit development and test." },
      D: { ko: "항상 실행되는 프로덕션에 온디맨드를 사용하면 예약 할인 기회를 놓칩니다.", en: "On-Demand pricing for an always-running production fleet misses the available commitment discount." }
    }
  }
  ,{
    id: "exam2-85", number: 85, tags: ["S3", "Object Lock", "Versioning", "Compliance"],
    question: {
      en: "A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement, new documents cannot be modified or deleted after they are stored.\nWhat should a solutions architect do to meet this requirement?",
      ko: "회사의 프로덕션 웹 애플리케이션에서 사용자는 웹 인터페이스나 모바일 앱으로 문서를 업로드합니다. 새로운 규정에 따라 새 문서는 저장된 후 수정하거나 삭제할 수 없어야 합니다.\n이 요구사항을 충족하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled.", ko: "S3 버전 관리와 S3 Object Lock을 활성화한 S3 버킷에 업로드 문서를 저장한다." },
      { k: "B", en: "Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically.", ko: "업로드 문서를 S3 버킷에 저장하고 주기적으로 보관하도록 S3 수명 주기 정책을 구성한다." },
      { k: "C", en: "Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only.", ko: "S3 버전 관리를 활성화한 버킷에 문서를 저장하고 모든 접근을 읽기 전용으로 제한하는 ACL을 구성한다." },
      { k: "D", en: "Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in read-only mode.", ko: "문서를 EFS 볼륨에 저장하고 볼륨을 읽기 전용으로 마운트해 접근한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "S3 Object Lock은 버전 관리된 객체에 WORM(한 번 쓰고 여러 번 읽기) 보호를 적용해 지정된 보존 기간 동안 덮어쓰기와 삭제를 막습니다. 규정 준수 모드를 사용하면 권한 있는 사용자도 보호를 우회할 수 없습니다.",
      en: "S3 Object Lock applies WORM protection to versioned objects, preventing overwrite or deletion for the configured retention period. Compliance mode can enforce this even against privileged users."
    },
    why_wrong: {
      B: { ko: "수명 주기 정책은 스토리지 계층 전환과 만료를 자동화하지만 객체 변경·삭제를 금지하지 않습니다.", en: "Lifecycle policies manage transitions and expiration but do not prevent modification or deletion." },
      C: { ko: "ACL은 권한 있는 사용자가 변경할 수 있으며 Object Lock과 같은 불변성 보장을 제공하지 않습니다.", en: "ACLs can be changed by authorized users and do not provide immutable retention." },
      D: { ko: "읽기 전용 마운트는 해당 클라이언트의 접근 방식일 뿐 다른 마운트나 관리 권한을 통한 변경을 막지 못합니다.", en: "A read-only mount limits one client but does not enforce storage-level immutability against other mounts or administrators." }
    }
  }
  ,{
    id: "exam2-86", number: 86, tags: ["Secrets Manager", "RDS", "Credential Rotation"],
    question: {
      en: "A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently.\nWhich solution meets these requirements?",
      ko: "회사의 여러 웹 서버가 공통 RDS MySQL 다중 AZ DB 인스턴스에 자주 접근해야 합니다. 웹 서버가 데이터베이스에 안전하게 연결하면서 사용자 자격 증명을 자주 교체해야 한다는 보안 요구를 충족해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager.", ko: "데이터베이스 사용자 자격 증명을 Secrets Manager에 저장하고 웹 서버가 접근할 수 있도록 필요한 IAM 권한을 부여한다." },
      { k: "B", en: "Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter.", ko: "데이터베이스 사용자 자격 증명을 Systems Manager OpsCenter에 저장하고 웹 서버가 접근할 수 있도록 IAM 권한을 부여한다." },
      { k: "C", en: "Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database.", ko: "안전한 S3 버킷에 데이터베이스 사용자 자격 증명을 저장하고 웹 서버가 이를 가져와 데이터베이스에 접근하도록 IAM 권한을 부여한다." },
      { k: "D", en: "Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database.", ko: "웹 서버 파일 시스템에서 KMS로 암호화한 파일에 데이터베이스 사용자 자격 증명을 저장하고 웹 서버가 파일을 복호화해 데이터베이스에 접근하도록 한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "Secrets Manager는 데이터베이스 자격 증명의 암호화 저장, 세밀한 IAM 접근 제어, RDS 자격 증명 자동 교체를 제공합니다. 웹 서버는 인스턴스 역할을 통해 최신 보안 암호를 조회할 수 있어 로컬 파일에 비밀을 배포할 필요가 없습니다.",
      en: "Secrets Manager encrypts credentials, controls access through IAM, and supports automatic RDS credential rotation. Web servers retrieve the current secret through their roles instead of storing local copies."
    },
    why_wrong: {
      B: { ko: "OpsCenter는 운영 문제와 조사 항목을 관리하는 서비스이며 비밀 저장소가 아닙니다.", en: "OpsCenter manages operational issues and investigations; it is not a secret store." },
      C: { ko: "S3는 비밀 전용 서비스가 아니며 자격 증명 교체와 애플리케이션 배포를 직접 관리해야 합니다.", en: "S3 is not a purpose-built secret store and requires custom rotation and distribution." },
      D: { ko: "서버별 암호화 파일은 자격 증명 교체 때 모든 서버에 다시 배포해야 하므로 안전하고 효율적인 중앙 관리가 어렵습니다.", en: "Encrypted local files must be redistributed to every server on rotation, making secure centralized management difficult." }
    }
  }
  ,{
    id: "exam2-87", number: 87, tags: ["SQS FIFO", "Lambda", "Aurora", "Decoupling"],
    question: {
      en: "A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the event. A solutions architect needs to design a solution that stores customer data that is created during database upgrades.\nWhich solution will meet these requirements?",
      ko: "회사의 애플리케이션은 API Gateway가 호출하는 Lambda 함수에서 실행되며 고객 데이터를 Aurora MySQL 데이터베이스에 저장합니다. 데이터베이스 업그레이드 중에는 Lambda가 연결하지 못해 일부 이벤트의 고객 데이터가 기록되지 않습니다. 데이터베이스 업그레이드 중 생성되는 고객 데이터를 보관할 솔루션이 필요합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.", ko: "Lambda와 데이터베이스 사이에 RDS Proxy를 구성하고 Lambda가 프록시에 연결하도록 한다." },
      { k: "B", en: "Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.", ko: "Lambda 실행 시간을 최대로 늘리고 데이터베이스 저장을 재시도하는 코드를 작성한다." },
      { k: "C", en: "Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database.", ko: "고객 데이터를 Lambda 로컬 스토리지에 보존하고 새 Lambda 함수가 로컬 스토리지를 스캔해 데이터베이스에 저장하도록 한다." },
      { k: "D", en: "Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database.", ko: "고객 데이터를 SQS FIFO 큐에 저장하고 큐를 폴링하여 데이터베이스에 저장하는 새 Lambda 함수를 만든다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "SQS FIFO 큐는 데이터베이스가 일시적으로 사용할 수 없을 때도 고객 이벤트를 내구성 있게 보관하며 순서와 중복 제거 기능을 제공합니다. 소비 Lambda는 데이터베이스가 복구된 뒤 메시지를 재시도해 저장하므로 업그레이드 동안 데이터가 유실되지 않습니다.",
      en: "An SQS FIFO queue durably buffers customer events while the database is unavailable and provides ordering and deduplication. A consumer Lambda retries writes after the upgrade completes."
    },
    why_wrong: {
      A: { ko: "RDS Proxy는 연결 풀링과 장애 조치를 개선하지만 업그레이드 내내 쓸 수 없는 데이터베이스 대신 데이터를 내구성 있게 저장하지 않습니다.", en: "RDS Proxy improves connection management but does not durably hold customer data throughout a database outage." },
      B: { ko: "업그레이드가 Lambda 최대 실행 시간을 넘을 수 있고 함수가 종료되면 메모리의 데이터가 유실됩니다.", en: "An upgrade can outlast the Lambda timeout, after which in-memory data is lost." },
      C: { ko: "Lambda 로컬 스토리지는 임시이며 다른 함수 인스턴스가 안정적으로 검색하거나 공유할 수 없습니다.", en: "Lambda local storage is ephemeral and cannot be reliably shared or scanned by other function instances." }
    }
  }
  ,{
    id: "exam2-88", number: 88, tags: ["S3", "Requester Pays", "Cost Optimization"],
    question: {
      en: "A survey company has gathered data for several years from areas in the United States. The company hosts the data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as low as possible.\nWhich solution will meet these requirements?",
      ko: "한 설문 회사가 미국 여러 지역에서 수년간 수집한 데이터를 3TB 이상인 S3 버킷에 보관합니다. 회사는 S3 버킷을 보유한 유럽 마케팅 회사와 데이터를 공유하기 시작했으며 자사의 데이터 전송 비용을 가능한 한 낮게 유지하려 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Configure the Requester Pays feature on the company's S3 bucket.", ko: "회사 S3 버킷에 Requester Pays 기능을 구성한다." },
      { k: "B", en: "Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3 buckets.", ko: "회사 S3 버킷에서 마케팅 회사의 S3 버킷으로 S3 교차 리전 복제를 구성한다." },
      { k: "C", en: "Configure cross-account access for the marketing firm so that the marketing firm has access to the company's S3 bucket.", ko: "마케팅 회사가 회사 S3 버킷에 접근할 수 있도록 교차 계정 접근을 구성한다." },
      { k: "D", en: "Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing firm's S3 buckets.", ko: "회사 S3 버킷에 S3 Intelligent-Tiering을 사용하고 마케팅 회사의 S3 버킷 중 하나로 동기화한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "S3 Requester Pays를 활성화하면 인증된 요청자가 객체 요청 비용과 데이터 전송 비용을 부담합니다. 마케팅 회사가 자신의 AWS 자격 증명과 요청자 지불 표시를 사용해 데이터를 가져오므로 원본 회사의 공유 비용을 최소화할 수 있습니다.",
      en: "With S3 Requester Pays, the authenticated requester pays the request and data-transfer charges. The marketing firm retrieves the data using its own AWS account, minimizing costs to the bucket owner."
    },
    why_wrong: {
      B: { ko: "교차 리전 복제의 복제 요청·스토리지·리전 간 전송 비용은 원본 측에 추가 비용을 만듭니다.", en: "Cross-Region Replication adds replication request, storage, and inter-Region transfer charges." },
      C: { ko: "교차 계정 권한만 부여하면 버킷 소유자에게 데이터 전송 비용이 청구될 수 있습니다.", en: "Cross-account permissions alone do not shift request and transfer charges to the requester." },
      D: { ko: "Intelligent-Tiering은 저장 비용을 최적화하지만 공유에 따른 데이터 전송 비용을 요청자에게 이전하지 않습니다.", en: "Intelligent-Tiering optimizes storage cost but does not shift sharing-related transfer charges." }
    }
  }
  ,{
    id: "exam2-89", number: 89, tags: ["S3", "Versioning", "MFA Delete"],
    question: {
      en: "A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution.\nWhat should a solutions architect do to secure the audit documents?",
      ko: "회사는 기밀 감사 문서를 S3에 저장하고 버킷 정책으로 최소 권한 원칙에 따라 감사 팀 IAM 사용자만 접근하도록 제한합니다. 관리자는 S3 문서의 우발적 삭제를 걱정하며 더 안전한 솔루션을 원합니다.\n감사 문서를 보호하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Enable the versioning and MFA Delete features on the S3 bucket.", ko: "S3 버킷에서 버전 관리와 MFA Delete 기능을 활성화한다." },
      { k: "B", en: "Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account.", ko: "각 감사 팀 IAM 사용자 계정의 자격 증명에 MFA를 활성화한다." },
      { k: "C", en: "Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3:DeleteObject action during audit dates.", ko: "감사 기간에 s3:DeleteObject 작업을 거부하는 S3 수명 주기 정책을 감사 팀 IAM 사용자 계정에 추가한다." },
      { k: "D", en: "Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key.", ko: "KMS로 S3 버킷을 암호화하고 감사 팀 IAM 사용자가 KMS 키에 접근하지 못하도록 제한한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "버전 관리는 삭제나 덮어쓰기 후에도 이전 객체 버전을 보존해 복구할 수 있게 합니다. MFA Delete는 객체 버전을 영구 삭제하거나 버전 관리 상태를 변경할 때 버킷 소유자의 MFA 인증을 요구해 우발적·무단 삭제 방어를 강화합니다.",
      en: "Versioning preserves prior object versions for recovery after deletion or overwrite. MFA Delete requires the bucket owner's MFA authentication to permanently delete versions or change versioning state."
    },
    why_wrong: {
      B: { ko: "사용자 로그인 MFA는 계정 탈취 위험을 낮추지만 정상 권한으로 실행한 우발적 삭제를 복구하거나 추가 승인으로 막지 않습니다.", en: "User MFA reduces credential compromise risk but does not provide object recovery or MFA-gated permanent deletion." },
      C: { ko: "수명 주기 정책은 IAM 사용자 계정에 연결하는 거부 정책이 아니며 특정 감사 날짜의 API 작업을 제한하지 않습니다.", en: "Lifecycle policies are not IAM deny policies and cannot be attached to users for audit-date restrictions." },
      D: { ko: "암호화는 기밀성을 보호하지만 삭제를 막지 않으며 키 접근을 차단하면 감사 팀이 문서를 읽을 수도 없습니다.", en: "Encryption protects confidentiality rather than deletion, and denying key access would also prevent legitimate reads." }
    }
  }
  ,{
    id: "exam2-90", number: 90, tags: ["RDS", "Read Replica", "Performance"],
    question: {
      en: "A company is using a SQL database to store movie data that is publicly accessible. The database runs on an Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of new movies that have been added to the database. The script must report a final total during business hours. The company's development team notices that the database performance is inadequate for development tasks when the script is running. A solutions architect must recommend a solution to resolve this issue.\nWhich solution will meet this requirement with the LEAST operational overhead?",
      ko: "회사는 공개 영화 데이터를 SQL 데이터베이스에 저장하며 데이터베이스는 RDS 단일 AZ DB 인스턴스에서 실행됩니다. 매일 임의의 시간에 새로 추가된 영화 수를 집계하는 쿼리 스크립트가 실행되고 업무 시간 중 최종 합계를 보고해야 합니다. 스크립트가 실행될 때 데이터베이스 성능이 개발 작업에 부족해집니다.\n운영 부담을 가장 적게 하면서 이 문제를 해결하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Modify the DB instance to be a Multi-AZ deployment.", ko: "DB 인스턴스를 다중 AZ 배포로 변경한다." },
      { k: "B", en: "Create a read replica of the database. Configure the script to query only the read replica.", ko: "데이터베이스 읽기 전용 복제본을 만들고 스크립트가 읽기 전용 복제본만 쿼리하도록 구성한다." },
      { k: "C", en: "Instruct the development team to manually export the entries in the database at the end of each day.", ko: "개발 팀이 매일 종료 시 데이터베이스 항목을 수동으로 내보내도록 한다." },
      { k: "D", en: "Use Amazon ElastiCache to cache the common queries that the script runs against the database.", ko: "스크립트가 데이터베이스에서 실행하는 공통 쿼리를 ElastiCache에 캐시한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "RDS 읽기 전용 복제본은 원본의 읽기 쿼리를 별도 DB 인스턴스로 분산합니다. 집계 스크립트가 복제본만 조회하게 하면 개발 작업과 원본 데이터베이스의 성능 경합을 줄이면서 애플리케이션 변경과 운영 작업을 최소화할 수 있습니다.",
      en: "An RDS read replica offloads the reporting script's read workload from the primary DB instance. Pointing the script at the replica removes contention with development activity with little operational effort."
    },
    why_wrong: {
      A: { ko: "다중 AZ 대기 인스턴스는 장애 조치용이며 일반적으로 읽기 트래픽을 처리하지 않으므로 성능을 확장하지 않습니다.", en: "A Multi-AZ standby is for failover and does not normally serve read traffic, so it does not scale reads." },
      C: { ko: "수동 내보내기는 운영 부담이 크고 업무 시간 중 최종 합계를 자동 보고해야 한다는 요구에도 맞지 않습니다.", en: "Manual exports add operational work and do not support automated business-hours reporting." },
      D: { ko: "쿼리 시점과 새 데이터가 임의로 바뀌어 캐시 적중률과 최신성 관리가 어렵고, 읽기 복제본보다 추가 애플리케이션 로직이 필요합니다.", en: "Random queries over changing data make cache freshness and hit rates difficult, and this requires more application logic than a read replica." }
    }
  }
  ,{
    id: "exam2-91", number: 91, tags: ["S3", "VPC Endpoint", "Private Connectivity"],
    question: {
      en: "A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet.\nWhich solution will meet these requirements?",
      ko: "회사는 VPC의 EC2 인스턴스에서 애플리케이션을 실행합니다. 애플리케이션 중 하나가 객체를 저장하고 읽기 위해 Amazon S3 API를 호출해야 합니다. 회사 보안 규정상 애플리케이션의 트래픽은 인터넷을 통과할 수 없습니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Configure an S3 gateway endpoint.", ko: "S3 게이트웨이 엔드포인트를 구성한다." },
      { k: "B", en: "Create an S3 bucket in a private subnet.", ko: "프라이빗 서브넷에 S3 버킷을 생성한다." },
      { k: "C", en: "Create an S3 bucket in the same AWS Region as the EC2 instances.", ko: "EC2 인스턴스와 같은 AWS 리전에 S3 버킷을 생성한다." },
      { k: "D", en: "Configure a NAT gateway in the same subnet as the EC2 instances.", ko: "EC2 인스턴스와 같은 서브넷에 NAT 게이트웨이를 구성한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "S3 게이트웨이 VPC 엔드포인트를 라우팅 테이블에 연결하면 인터넷 게이트웨이나 NAT 없이 AWS 네트워크를 통해 S3 API에 접근할 수 있습니다. 엔드포인트 정책으로 접근 가능한 버킷과 작업도 제한할 수 있습니다.",
      en: "An S3 gateway VPC endpoint routes S3 API traffic over the AWS network without an internet gateway or NAT. Its endpoint policy can further restrict buckets and actions."
    },
    why_wrong: {
      B: { ko: "S3는 VPC 서브넷 안에 생성되는 서비스가 아닙니다.", en: "S3 buckets are not created inside VPC subnets." },
      C: { ko: "같은 리전에 있다는 사실만으로 EC2에서 S3까지 프라이빗 네트워크 경로가 생기지는 않습니다.", en: "Placing the bucket in the same Region does not by itself create a private VPC network path." },
      D: { ko: "NAT 게이트웨이는 퍼블릭 서브넷에 배치하며 외부 서비스 접근 경로를 제공하므로 인터넷 비통과 요구에 맞지 않습니다.", en: "A NAT gateway belongs in a public subnet and provides an internet egress path, which does not meet the requirement." }
    }
  }
  ,{
    id: "exam2-92", number: 92, tags: ["S3", "VPC Endpoint", "Bucket Policy"],
    question: {
      en: "A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure access to this bucket from the application tier running on Amazon EC2 instances inside a VPC.\nWhich combination of steps should a solutions architect take to accomplish this? (Choose two.)",
      ko: "회사는 민감한 사용자 정보를 S3 버킷에 저장합니다. VPC 내부 EC2 인스턴스에서 실행되는 애플리케이션 계층이 이 버킷에 안전하게 접근하도록 해야 합니다.\n어떤 단계 조합을 수행해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Configure a VPC gateway endpoint for Amazon S3 within the VPC.", ko: "VPC 안에 Amazon S3용 게이트웨이 VPC 엔드포인트를 구성한다." },
      { k: "B", en: "Create a bucket policy to make the objects in the S3 bucket public.", ko: "S3 버킷의 객체를 공개하는 버킷 정책을 생성한다." },
      { k: "C", en: "Create a bucket policy that limits access to only the application tier running in the VPC.", ko: "VPC에서 실행되는 애플리케이션 계층으로만 접근을 제한하는 버킷 정책을 생성한다." },
      { k: "D", en: "Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.", ko: "S3 접근 정책이 있는 IAM 사용자를 만들고 IAM 자격 증명을 EC2 인스턴스에 복사한다." },
      { k: "E", en: "Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket.", ko: "NAT 인스턴스를 생성하고 EC2 인스턴스가 이를 통해 S3 버킷에 접근하게 한다." }
    ],
    answer: ["A", "C"],
    explanation: {
      ko: "S3 게이트웨이 엔드포인트는 애플리케이션에서 S3까지 프라이빗 경로를 제공합니다(A). 버킷 정책에서 VPC 엔드포인트나 애플리케이션 역할을 조건으로 접근을 제한하면 민감한 객체를 지정된 애플리케이션 계층만 사용할 수 있습니다(C).",
      en: "The S3 gateway endpoint supplies private connectivity from the VPC. A restrictive bucket policy limits object access to the intended application tier or VPC endpoint."
    },
    why_wrong: {
      B: { ko: "민감한 정보를 공개하면 보안 요구와 정반대입니다.", en: "Making sensitive objects public directly violates the security requirement." },
      D: { ko: "장기 IAM 사용자 키를 인스턴스에 복사하면 유출·교체 위험이 생깁니다. EC2 역할을 사용해야 합니다.", en: "Copying long-term IAM user credentials to EC2 creates leakage and rotation risk; instance roles should be used." },
      E: { ko: "NAT 인스턴스는 인터넷 경로와 운영 부담을 추가하며 S3 엔드포인트보다 안전성과 효율이 낮습니다.", en: "A NAT instance adds an internet path and management overhead compared with an S3 endpoint." }
    }
  }
  ,{
    id: "exam2-93", number: 93, tags: ["Aurora", "Database Cloning", "Read Replica"],
    question: {
      en: "A company runs an on-premises application that is powered by a MySQL database. The company is migrating the application to AWS to increase the application's elasticity and availability.\nThe current architecture shows heavy read activity on the database during times of normal operation. Every 4 hours, the company's development team pulls a full export of the production database to populate a database in the staging environment. During this period, users experience unacceptable application latency. The development team is unable to use the staging environment until the procedure completes.\nA solutions architect must recommend replacement architecture that alleviates the application latency issue. The replacement architecture also must give the development team the ability to continue using the staging environment without delay.\nWhich solution meets these requirements?",
      ko: "회사는 MySQL 데이터베이스 기반 온프레미스 애플리케이션을 AWS로 이전해 탄력성과 가용성을 높이려 합니다. 정상 운영 중 데이터베이스 읽기 활동이 많고, 개발 팀은 4시간마다 프로덕션 데이터베이스 전체를 내보내 스테이징 데이터베이스를 채웁니다. 이때 사용자 지연이 심해지고 절차가 끝날 때까지 스테이징 환경도 사용할 수 없습니다.\n애플리케이션 지연을 줄이고 개발 팀이 기다리지 않고 스테이징 환경을 사용할 수 있게 하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.", ko: "프로덕션에 다중 AZ Aurora 복제본이 있는 Aurora MySQL을 사용한다. mysqldump 백업·복원 절차로 스테이징 데이터베이스를 채운다." },
      { k: "B", en: "Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Use database cloning to create the staging database on-demand.", ko: "프로덕션에 다중 AZ Aurora 복제본이 있는 Aurora MySQL을 사용하고 데이터베이스 복제로 온디맨드 스테이징 데이터베이스를 생성한다." },
      { k: "C", en: "Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Use the standby instance for the staging database.", ko: "프로덕션에 다중 AZ 배포와 읽기 전용 복제본이 있는 RDS for MySQL을 사용하고 대기 인스턴스를 스테이징 데이터베이스로 사용한다." },
      { k: "D", en: "Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.", ko: "프로덕션에 다중 AZ 배포와 읽기 전용 복제본이 있는 RDS for MySQL을 사용하고 mysqldump 백업·복원으로 스테이징 데이터베이스를 채운다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "Aurora 복제본은 읽기 트래픽을 분산하고 여러 AZ에서 가용성을 높입니다. Aurora의 빠른 데이터베이스 복제는 copy-on-write 방식으로 전체 데이터를 내보내고 복원하지 않고도 스테이징 클론을 거의 즉시 생성하므로 프로덕션 부하와 개발 대기 시간을 모두 줄입니다.",
      en: "Multi-AZ Aurora Replicas offload reads and improve availability. Aurora fast cloning uses copy-on-write storage to create an on-demand staging database quickly without a full export and restore."
    },
    why_wrong: {
      A: { ko: "mysqldump 전체 내보내기와 복원 절차가 기존 지연과 스테이징 대기 문제를 계속 만듭니다.", en: "A full mysqldump and restore retains the existing latency and staging delay problem." },
      C: { ko: "다중 AZ 대기 인스턴스는 장애 조치 전용이며 읽기나 스테이징 용도로 사용할 수 없습니다.", en: "A Multi-AZ standby is reserved for failover and cannot serve reads or act as staging." },
      D: { ko: "읽기 복제본은 프로덕션 읽기 부하를 줄이지만 전체 덤프·복원으로 인한 스테이징 지연은 해결하지 못합니다.", en: "Read replicas help production reads, but full dump and restore does not remove staging delay." }
    }
  }
  ,{
    id: "exam2-94", number: 94, tags: ["S3", "SQS", "Lambda", "DynamoDB"],
    question: {
      en: "A company is designing an application where users upload small files into Amazon S3. After a user uploads a file, the file requires one-time simple processing to transform the data and save the data in JSON format for later analysis. Each file must be processed as quickly as possible after it is uploaded. Demand will vary. On some days, users will upload a high number of files. On other days, users will upload a few files or no files.\nWhich solution meets these requirements with the LEAST operational overhead?",
      ko: "회사는 사용자가 작은 파일을 S3에 업로드하는 애플리케이션을 설계합니다. 업로드된 파일은 한 번의 단순 처리를 거쳐 데이터를 변환하고 향후 분석을 위해 JSON 형식으로 저장해야 합니다. 각 파일은 업로드 후 가능한 한 빨리 처리해야 하며, 일별 업로드 수는 많거나 적거나 전혀 없는 등 다양합니다.\n운영 부담을 가장 적게 하면서 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Configure Amazon EMR to read text files from Amazon S3. Run processing scripts to transform the data. Store the resulting JSON file in an Amazon Aurora DB cluster.", ko: "EMR이 S3의 텍스트 파일을 읽도록 구성하고 처리 스크립트로 데이터를 변환해 결과 JSON을 Aurora DB 클러스터에 저장한다." },
      { k: "B", en: "Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use Amazon EC2 instances to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.", ko: "S3 이벤트 알림을 SQS 큐로 보내고 EC2 인스턴스가 큐를 읽어 데이터를 처리한 후 결과 JSON을 DynamoDB에 저장한다." },
      { k: "C", en: "Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.", ko: "S3 이벤트 알림을 SQS 큐로 보내고 Lambda 함수가 큐를 읽어 데이터를 처리한 후 결과 JSON을 DynamoDB에 저장한다." },
      { k: "D", en: "Configure Amazon EventBridge (Amazon CloudWatch Events) to send an event to Amazon Kinesis Data Streams when a new file is uploaded. Use an AWS Lambda function to consume the event from the stream and process the data. Store the resulting JSON file in an Amazon Aurora DB cluster.", ko: "새 파일이 업로드되면 EventBridge가 Kinesis Data Streams로 이벤트를 보내도록 구성하고 Lambda가 스트림 이벤트를 처리한 후 결과 JSON을 Aurora DB 클러스터에 저장한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "S3 이벤트를 SQS에 보내면 업로드 급증을 내구성 있게 버퍼링할 수 있습니다. Lambda는 큐의 작업량에 맞춰 자동 확장되고 유휴 시 서버 비용이 없으며, DynamoDB도 관리형으로 확장됩니다. 변동 폭이 큰 단순 일회성 처리에 운영 부담이 가장 낮습니다.",
      en: "S3 notifications to SQS durably buffer upload bursts. Lambda scales with queue demand and incurs no idle server management, while DynamoDB provides managed scalable JSON storage."
    },
    why_wrong: {
      A: { ko: "간헐적인 작은 파일 단순 처리에 EMR 클러스터와 Aurora는 과도하며 운영 비용과 지연이 큽니다.", en: "EMR and Aurora are excessive for intermittent simple processing of small files." },
      B: { ko: "EC2 처리 노드를 용량에 맞춰 운영해야 하므로 Lambda보다 운영 부담과 유휴 비용이 큽니다.", en: "EC2 workers require capacity management and incur idle cost compared with Lambda." },
      D: { ko: "단순 객체 이벤트 처리에 Kinesis와 Aurora를 추가하면 불필요한 복잡성과 상시 비용이 생깁니다.", en: "Kinesis and Aurora add unnecessary complexity and steady cost for simple object-event processing." }
    }
  }
  ,{
    id: "exam2-95", number: 95, tags: ["RDS", "Read Replica", "MySQL"],
    question: {
      en: "An application allows users at a company's headquarters to access product data. The product data is stored in an Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's performance quickly.\nWhat should the solutions architect recommend?",
      ko: "애플리케이션을 통해 회사 본사 사용자가 제품 데이터에 접근합니다. 제품 데이터는 RDS MySQL DB 인스턴스에 저장됩니다. 운영 팀은 애플리케이션 성능 저하를 확인했고 읽기 트래픽과 쓰기 트래픽을 분리하려 합니다. 성능을 신속하게 최적화해야 합니다.\n무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary Availability Zone.", ko: "기존 데이터베이스를 다중 AZ 배포로 변경하고 기본 가용 영역에서 읽기 요청을 처리한다." },
      { k: "B", en: "Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary Availability Zone.", ko: "기존 데이터베이스를 다중 AZ 배포로 변경하고 보조 가용 영역에서 읽기 요청을 처리한다." },
      { k: "C", en: "Create read replicas for the database. Configure the read replicas with half of the compute and storage resources as the source database.", ko: "데이터베이스 읽기 전용 복제본을 만들고 원본 데이터베이스의 절반에 해당하는 컴퓨팅 및 스토리지 리소스로 구성한다." },
      { k: "D", en: "Create read replicas for the database. Configure the read replicas with the same compute and storage resources as the source database.", ko: "데이터베이스 읽기 전용 복제본을 만들고 원본 데이터베이스와 같은 컴퓨팅 및 스토리지 리소스로 구성한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "RDS 읽기 전용 복제본으로 읽기 요청을 보내면 기본 DB 인스턴스는 쓰기에 집중할 수 있습니다. 원본과 같은 컴퓨팅·스토리지 자원으로 구성하면 기존 읽기 부하를 충분히 처리하면서 복제 지연과 자원 병목 위험을 줄일 수 있습니다.",
      en: "RDS read replicas separate read traffic from writes on the primary. Matching the source instance's compute and storage capacity provides adequate performance and reduces replica bottlenecks."
    },
    why_wrong: {
      A: { ko: "다중 AZ는 가용성을 위한 구성으로 기본 인스턴스의 읽기 부하를 분리하지 않습니다.", en: "Multi-AZ improves availability but does not offload reads from the primary." },
      B: { ko: "다중 AZ 대기 인스턴스는 일반 읽기 요청을 처리할 수 없습니다.", en: "A Multi-AZ standby cannot serve normal read traffic." },
      C: { ko: "읽기 복제본 방향은 맞지만 자원을 절반으로 줄이면 현재의 무거운 읽기 부하를 충분히 처리하지 못할 수 있습니다.", en: "Read replicas are correct, but halving resources can leave them unable to handle the existing heavy read workload." }
    }
  }
  ,{
    id: "exam2-96", number: 96, tags: ["IAM", "EC2", "Policy Evaluation"],
    question: {
      en: "An Amazon EC2 administrator created the following policy associated with an IAM group containing several users:\n\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"ec2:TerminateInstances\",\n      \"Resource\": \"*\",\n      \"Condition\": {\n        \"IpAddress\": {\n          \"aws:SourceIp\": \"10.100.100.0/24\"\n        }\n      }\n    },\n    {\n      \"Effect\": \"Deny\",\n      \"Action\": \"ec2:*\",\n      \"Resource\": \"*\",\n      \"Condition\": {\n        \"StringNotEquals\": {\n          \"ec2:Region\": \"us-east-1\"\n        }\n      }\n    }\n  ]\n}\n\nWhat is the effect of this policy?",
      ko: "EC2 관리자가 여러 사용자가 속한 IAM 그룹에 다음 정책을 연결했습니다.\n\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"ec2:TerminateInstances\",\n      \"Resource\": \"*\",\n      \"Condition\": { \"IpAddress\": { \"aws:SourceIp\": \"10.100.100.0/24\" } }\n    },\n    {\n      \"Effect\": \"Deny\",\n      \"Action\": \"ec2:*\",\n      \"Resource\": \"*\",\n      \"Condition\": { \"StringNotEquals\": { \"ec2:Region\": \"us-east-1\" } }\n    }\n  ]\n}\n\n이 정책의 효과는 무엇입니까?"
    },
    options: [
      { k: "A", en: "Users can terminate an EC2 instance in any AWS Region except us-east-1.", ko: "사용자는 us-east-1을 제외한 모든 AWS 리전에서 EC2 인스턴스를 종료할 수 있다." },
      { k: "B", en: "Users can terminate an EC2 instance with the IP address 10.100.100.1 in the us-east-1 Region.", ko: "사용자는 us-east-1 리전에서 IP 주소가 10.100.100.1인 EC2 인스턴스를 종료할 수 있다." },
      { k: "C", en: "Users can terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.", ko: "사용자의 소스 IP가 10.100.100.254이면 us-east-1 리전의 EC2 인스턴스를 종료할 수 있다." },
      { k: "D", en: "Users cannot terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.", ko: "사용자의 소스 IP가 10.100.100.254이면 us-east-1 리전의 EC2 인스턴스를 종료할 수 없다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "Allow 문은 **요청자의 소스 IP**가 `10.100.100.0/24`에 포함될 때 인스턴스 종료를 허용합니다. `10.100.100.254`는 이 범위에 속합니다. 두 번째 문은 `us-east-1`이 아닌 모든 리전의 EC2 작업을 명시적으로 거부하므로, 두 조건을 합치면 해당 소스 IP에서 `us-east-1` 인스턴스만 종료할 수 있습니다.",
      en: "The Allow applies when the requester's source IP is in 10.100.100.0/24, which includes 10.100.100.254. The explicit Deny blocks all EC2 actions outside us-east-1, so termination is allowed only from that source range in us-east-1."
    },
    why_wrong: {
      A: { ko: "두 번째 문은 us-east-1이 아닌 리전에서 모든 EC2 작업을 명시적으로 거부합니다.", en: "The second statement explicitly denies all EC2 actions outside us-east-1." },
      B: { ko: "`aws:SourceIp`는 대상 인스턴스 IP가 아니라 API 요청을 보낸 사용자의 소스 IP를 검사합니다.", en: "aws:SourceIp evaluates the requester's source IP, not the EC2 instance's IP address." },
      D: { ko: "10.100.100.254는 허용 CIDR에 속하고 us-east-1에서는 명시적 Deny 조건이 적용되지 않습니다.", en: "10.100.100.254 is in the allowed CIDR, and the explicit Deny condition is false in us-east-1." }
    }
  }
  ,{
    id: "exam2-97", number: 97, tags: ["FSx for Windows", "Active Directory", "SharePoint"],
    question: {
      en: "A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control.\nWhich solution will satisfy these requirements?",
      ko: "회사는 Microsoft Windows 공유 파일 스토리지가 필요한 대규모 온프레미스 SharePoint 환경을 운영합니다. 이 워크로드를 AWS로 이전하려 하며 스토리지 솔루션은 고가용성을 제공하고 접근 제어를 위해 Active Directory와 통합되어야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Configure Amazon EFS storage and set the Active Directory domain for authentication.", ko: "Amazon EFS를 구성하고 인증에 사용할 Active Directory 도메인을 설정한다." },
      { k: "B", en: "Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.", ko: "두 가용 영역의 AWS Storage Gateway 파일 게이트웨이에 SMB 파일 공유를 생성한다." },
      { k: "C", en: "Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume.", ko: "S3 버킷을 만들고 Microsoft Windows Server가 볼륨으로 마운트하도록 구성한다." },
      { k: "D", en: "Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication.", ko: "AWS에 FSx for Windows File Server 파일 시스템을 만들고 인증에 사용할 Active Directory 도메인을 설정한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "FSx for Windows File Server는 완전관리형 Windows 네이티브 SMB 파일 시스템이며 Microsoft Active Directory 통합과 다중 AZ 고가용성 배포를 지원합니다. Windows 공유 파일 스토리지가 필요한 SharePoint에 가장 적합합니다.",
      en: "FSx for Windows File Server provides managed native SMB storage, Microsoft Active Directory integration, and Multi-AZ high availability, matching SharePoint's Windows file requirements."
    },
    why_wrong: {
      A: { ko: "EFS는 NFS 기반 Linux 파일 시스템이며 Windows SMB와 AD 통합 요구에 맞지 않습니다.", en: "EFS is an NFS-based Linux file system and does not provide the required native Windows SMB integration." },
      B: { ko: "File Gateway는 주로 온프레미스에서 AWS 스토리지에 접근하는 하이브리드 서비스이며 AWS의 SharePoint용 관리형 Windows 파일 시스템 대체재가 아닙니다.", en: "File Gateway is primarily a hybrid access service rather than the managed Windows file system for SharePoint on AWS." },
      C: { ko: "S3는 객체 스토리지이며 Windows 서버가 네이티브 공유 볼륨으로 직접 마운트할 수 없습니다.", en: "S3 is object storage and cannot be mounted directly as a native Windows shared volume." }
    }
  }
  ,{
    id: "exam2-98", number: 98, tags: ["SQS", "Lambda", "Visibility Timeout"],
    question: {
      en: "An image-processing company has a web application that users use to upload images. The application uploads the images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event source for an AWS Lambda function that processes the images and sends the results to users through email. Users report that they are receiving multiple email messages for every uploaded image. A solutions architect determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email messages.\nWhat should the solutions architect do to resolve this issue with the LEAST operational overhead?",
      ko: "이미지 처리 회사의 웹 애플리케이션은 사용자가 업로드한 이미지를 S3 버킷에 저장합니다. S3 객체 생성 이벤트는 SQS 표준 큐에 게시되고, 이 큐는 이미지를 처리해 이메일로 결과를 보내는 Lambda 함수의 이벤트 소스입니다. 사용자들이 이미지마다 여러 이메일을 받고 있으며 SQS 메시지가 Lambda를 두 번 이상 호출하는 것이 원인입니다.\n운영 부담을 가장 적게 하면서 이 문제를 해결하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.", ko: "ReceiveMessage 대기 시간을 30초로 늘려 SQS 큐에 롱 폴링을 설정한다." },
      { k: "B", en: "Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard duplicate messages.", ko: "SQS 표준 큐를 FIFO 큐로 변경하고 메시지 중복 제거 ID로 중복 메시지를 버린다." },
      { k: "C", en: "Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function timeout and the batch window timeout.", ko: "SQS 큐의 가시성 제한 시간을 함수 제한 시간과 배치 윈도우 제한 시간의 합보다 큰 값으로 늘린다." },
      { k: "D", en: "Modify the Lambda function to delete each message from the SQS queue immediately after the message is read before processing.", ko: "Lambda가 메시지를 읽은 직후 처리 전에 SQS 큐에서 각 메시지를 삭제하도록 수정한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "Lambda 처리가 끝나기 전에 SQS 가시성 제한 시간이 만료되면 메시지가 다시 보이고 동일 작업이 중복 실행됩니다. 가시성 제한 시간을 함수 실행 시간과 배치 윈도우보다 충분히 길게 설정하면 처리 중 재전달을 줄일 수 있으며 코드 변경이 필요 없습니다.",
      en: "If SQS visibility expires before Lambda finishes, the message becomes visible and can invoke the function again. A sufficiently long visibility timeout prevents in-flight redelivery without code changes."
    },
    why_wrong: {
      A: { ko: "롱 폴링은 빈 응답과 API 호출 수를 줄이지만 처리 중 메시지 재노출을 막지 않습니다.", en: "Long polling reduces empty receives and API calls but does not prevent in-flight redelivery." },
      B: { ko: "큐 유형은 기존 큐에서 직접 변경할 수 없고, S3 이벤트 알림은 FIFO 큐를 직접 대상으로 지원하지 않는 구성 제약도 있습니다.", en: "An existing queue cannot simply change type, and direct S3 event notifications have FIFO destination constraints." },
      D: { ko: "처리 전에 메시지를 삭제하면 함수 실패 시 작업을 복구할 수 없어 이미지 처리 결과가 유실됩니다.", en: "Deleting before processing causes permanent job loss if the function then fails." }
    }
  }
  ,{
    id: "exam2-99", number: 99, tags: ["FSx for Lustre", "File Storage", "HPC"],
    question: {
      en: "A company is implementing a shared storage solution for a gaming application that is hosted in an on-premises data center. The company needs the ability to use Lustre clients to access data. The solution must be fully managed.\nWhich solution meets these requirements?",
      ko: "회사는 온프레미스 데이터 센터에서 호스팅되는 게임 애플리케이션을 위한 공유 스토리지 솔루션을 구현합니다. Lustre 클라이언트로 데이터에 접근할 수 있어야 하며 솔루션은 완전관리형이어야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.", ko: "AWS Storage Gateway 파일 게이트웨이를 만들고 필요한 클라이언트 프로토콜을 사용하는 파일 공유를 생성해 애플리케이션 서버를 연결한다." },
      { k: "B", en: "Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.", ko: "Windows EC2 인스턴스를 만들고 Windows 파일 공유 역할을 설치·구성해 애플리케이션 서버를 연결한다." },
      { k: "C", en: "Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.", ko: "EFS 파일 시스템을 만들고 Lustre를 지원하도록 구성한다. 파일 시스템을 원본 서버에 연결하고 애플리케이션 서버를 연결한다." },
      { k: "D", en: "Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system.", ko: "Amazon FSx for Lustre 파일 시스템을 만들고 원본 서버에 연결한 뒤 애플리케이션 서버를 파일 시스템에 연결한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "Amazon FSx for Lustre는 Lustre 프로토콜과 클라이언트를 기본 지원하는 완전관리형 고성능 공유 파일 시스템입니다. VPN이나 Direct Connect를 통한 온프레미스 클라이언트 접근도 지원하므로 요구사항에 정확히 맞습니다.",
      en: "Amazon FSx for Lustre is the fully managed high-performance shared file system that natively supports Lustre clients, including on-premises access through private connectivity."
    },
    why_wrong: {
      A: { ko: "File Gateway는 NFS와 SMB 파일 공유를 제공하며 Lustre 프로토콜을 지원하지 않습니다.", en: "File Gateway provides NFS and SMB shares, not the Lustre protocol." },
      B: { ko: "Windows 파일 공유는 SMB를 사용하고 EC2 서버를 직접 관리해야 하므로 두 요구를 모두 충족하지 못합니다.", en: "A Windows share uses SMB and requires self-managing the EC2 server." },
      C: { ko: "EFS는 NFS 파일 시스템이며 Lustre 지원 옵션이 없습니다.", en: "EFS is an NFS file system and cannot be configured to support Lustre." }
    }
  }
  ,{
    id: "exam2-100", number: 100, tags: ["KMS", "S3", "Encryption", "IAM"],
    question: {
      en: "A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사의 컨테이너 애플리케이션은 EC2 인스턴스에서 실행됩니다. 다른 비즈니스 애플리케이션과 통신하기 전에 보안 인증서를 다운로드해야 합니다. 인증서를 거의 실시간으로 안전하게 암호화·복호화하고, 암호화 후 데이터를 고가용성 스토리지에 저장해야 합니다.\n운영 부담을 가장 적게 하면서 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.", ko: "암호화된 인증서용 Secrets Manager 보안 암호를 만들고 필요할 때 수동으로 인증서를 업데이트한다. 세밀한 IAM 권한으로 데이터 접근을 제어한다." },
      { k: "B", en: "Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.", ko: "Python 암호화 라이브러리로 암호화 작업을 수행하는 Lambda 함수를 만들고 함수를 S3 버킷에 저장한다." },
      { k: "C", en: "Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3.", ko: "KMS 고객 관리형 키를 만들고 EC2 역할이 암호화 작업에 키를 사용하도록 허용한다. 암호화된 데이터를 S3에 저장한다." },
      { k: "D", en: "Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes.", ko: "KMS 고객 관리형 키를 만들고 EC2 역할이 암호화 작업에 키를 사용하도록 허용한다. 암호화된 데이터를 EBS 볼륨에 저장한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "KMS 고객 관리형 키는 고가용성 관리형 API로 암호화·복호화 작업과 세밀한 키 정책을 제공합니다. EC2 역할에 필요한 키 권한만 부여하고 암호문을 여러 AZ에 내구성 있게 저장되는 S3에 보관하면 서버나 암호화 라이브러리를 직접 운영할 필요가 없습니다.",
      en: "A KMS customer managed key provides highly available managed cryptographic operations and fine-grained authorization. Granting the EC2 role key access and storing ciphertext in multi-AZ S3 meets the security, availability, and low-operations requirements."
    },
    why_wrong: {
      A: { ko: "수동 인증서 업데이트가 필요하고 선택지는 요구된 명시적 실시간 암호화·복호화 처리와 고가용성 저장 구성을 모두 설명하지 않습니다.", en: "Manual updates add operations, and the option does not fully describe the required near-real-time cryptographic workflow and highly available storage." },
      B: { ko: "암호화 코드를 직접 구현·유지해야 하고 암호화된 인증서 데이터를 어디에 고가용성으로 저장할지도 해결하지 않습니다.", en: "This requires maintaining custom cryptographic code and does not provide highly available storage for the encrypted certificate data." },
      D: { ko: "EBS는 단일 AZ에 속하는 블록 스토리지이므로 S3와 같은 기본 다중 AZ 고가용성 저장을 제공하지 않습니다.", en: "EBS is AZ-scoped block storage and does not provide S3's built-in multi-AZ storage availability." }
    }
  }
]
});
