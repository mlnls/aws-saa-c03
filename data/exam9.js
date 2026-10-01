/* Exam 9 · Topic 1 · 현재 수록 범위: 401~450번 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam9",
  title: "Exam 9",
  note: "Topic 1 · #401–450",
  questions: [
  {
    id: "exam9-401", number: 401, tags: ["Amazon EC2 Auto Scaling", "Amazon RDS", "Multi-AZ", "High Availability", "Scalability"],
    question: { en: "A company wants to use AWS to improve the availability and scalability of an existing application hosted in its data center. A recent power outage caused a database server failure and loss of recent data. The company needs to eliminate single points of failure and scale the application on demand. Which solution meets these requirements?", ko: "회사는 데이터 센터에서 호스팅하는 기존 애플리케이션의 가용성과 확장성을 AWS로 개선하려고 합니다. 최근 정전으로 데이터베이스 서버가 충돌하고 최근 데이터가 손실되었습니다. 단일 장애 지점을 제거하고 사용자 요구에 맞게 확장할 수 있는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Deploy application servers as EC2 instances in Auto Scaling groups across multiple Availability Zones. Use an Amazon RDS DB instance in a Multi-AZ configuration.", ko: "여러 가용 영역의 Auto Scaling 그룹에 EC2 애플리케이션 서버를 배포하고 Amazon RDS DB 인스턴스를 다중 AZ로 구성합니다." },
      { k: "B", en: "Deploy application servers in a single-AZ Auto Scaling group. Run the database on EC2 and enable EC2 automatic recovery.", ko: "단일 가용 영역 Auto Scaling 그룹에 애플리케이션 서버를 배포하고 EC2에서 데이터베이스를 실행하며 EC2 자동 복구를 활성화합니다." },
      { k: "C", en: "Deploy application servers across multiple Availability Zones. Use a single-AZ RDS DB instance with a read replica and promote the replica after a failure.", ko: "여러 가용 영역에 애플리케이션 서버를 배포하고 읽기 전용 복제본이 있는 단일 AZ RDS를 사용하며 장애 후 복제본을 승격합니다." },
      { k: "D", en: "Deploy primary and secondary database servers on EC2 across multiple Availability Zones and create shared storage with EBS Multi-Attach.", ko: "여러 가용 영역의 EC2에 기본 및 보조 데이터베이스 서버를 배포하고 EBS 다중 연결로 공유 스토리지를 생성합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Multi-AZ Auto Scaling removes a single application-server failure domain and scales with demand. RDS Multi-AZ synchronously replicates to a standby in another AZ and performs automatic failover.", ko: "다중 AZ Auto Scaling은 애플리케이션 서버의 단일 장애 영역을 제거하고 수요에 따라 확장합니다. RDS 다중 AZ는 다른 AZ의 대기 인스턴스로 동기 복제하고 자동 장애 조치를 수행합니다." },
    why_wrong: {
      B: { en: "A single-AZ application tier remains a failure point, and EC2 automatic recovery does not provide a managed highly available database.", ko: "단일 AZ 애플리케이션 계층은 장애 지점으로 남으며 EC2 자동 복구는 관리형 고가용성 데이터베이스를 제공하지 않습니다." },
      C: { en: "Read-replica promotion is manual and asynchronous, so it can lose recent data and is not equivalent to Multi-AZ failover.", ko: "읽기 전용 복제본 승격은 수동이며 비동기식이므로 최근 데이터가 손실될 수 있고 다중 AZ 장애 조치와 같지 않습니다." },
      D: { en: "EBS volumes are scoped to one Availability Zone and cannot provide shared Multi-AZ database storage this way.", ko: "EBS 볼륨은 단일 가용 영역 범위이므로 이 방식으로 다중 AZ 공유 데이터베이스 스토리지를 제공할 수 없습니다." }
    }
  },
  {
    id: "exam9-402", number: 402, tags: ["Amazon Kinesis Data Streams", "Data Retention", "Amazon S3", "Streaming", "Ingestion"],
    question: { en: "An EC2 application sends a large stream of data to an Amazon Kinesis data stream with default settings. A daily consumer writes the data to Amazon S3 for BI processing, but S3 does not receive all records. What should a solutions architect do?", ko: "EC2 애플리케이션이 기본 설정의 Amazon Kinesis Data Streams로 대량의 스트리밍 데이터를 전송합니다. 매일 실행되는 소비자가 데이터를 Amazon S3에 기록하지만 S3가 모든 레코드를 수신하지 못합니다. 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Increase the Kinesis Data Streams retention period so that it is at least as long as the consumer's processing interval.", ko: "Kinesis Data Streams 보존 기간을 소비자의 처리 간격 이상으로 늘립니다." },
      { k: "B", en: "Update the application to send data by using the Kinesis Producer Library.", ko: "Kinesis Producer Library를 사용해 데이터를 보내도록 애플리케이션을 업데이트합니다." },
      { k: "C", en: "Increase the number of Kinesis shards to process the incoming throughput.", ko: "수신 처리량을 처리하도록 Kinesis 샤드 수를 늘립니다." },
      { k: "D", en: "Enable S3 Versioning to retain every version of each collected object.", ko: "수집된 각 객체의 모든 버전을 보존하도록 S3 버전 관리를 활성화합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Kinesis Data Streams retains records for 24 hours by default. A daily consumer can fall behind or start after records expire, so the retention period must cover the full processing interval and delay.", ko: "Kinesis Data Streams의 기본 레코드 보존 기간은 24시간입니다. 매일 실행되는 소비자는 뒤처지거나 레코드 만료 후 시작할 수 있으므로 보존 기간이 전체 처리 간격과 지연을 포함해야 합니다." },
    why_wrong: {
      B: { en: "KPL can improve producer efficiency but does not prevent unconsumed records from expiring.", ko: "KPL은 생산자 효율을 높일 수 있지만 소비되지 않은 레코드의 만료를 막지 않습니다." },
      C: { en: "More shards address throughput limits, not expiration caused by a once-daily consumer.", ko: "샤드 추가는 처리량 제한을 해결하지만 일일 소비자로 인한 레코드 만료는 해결하지 않습니다." },
      D: { en: "S3 Versioning cannot recover records that never reached S3.", ko: "S3 버전 관리는 S3에 도달하지 않은 레코드를 복구할 수 없습니다." }
    }
  },
  {
    id: "exam9-403", number: 403, tags: ["AWS Lambda", "AWS IAM", "Execution Role", "Amazon S3", "Least Privilege"],
    question: { en: "A developer has an application that uses an AWS Lambda function to upload files to Amazon S3. The developer already has an IAM user with valid S3 credentials. How should a solutions architect grant the Lambda function the required permissions?", ko: "개발자는 AWS Lambda 함수로 Amazon S3에 파일을 업로드하는 애플리케이션을 보유하고 있으며 이미 유효한 S3 자격 증명이 있는 IAM 사용자가 있습니다. Lambda 함수에 필요한 권한을 어떻게 부여해야 합니까?" },
    options: [
      { k: "A", en: "Add the required IAM permissions to the Lambda function's resource-based policy.", ko: "Lambda 함수의 리소스 기반 정책에 필요한 IAM 권한을 추가합니다." },
      { k: "B", en: "Use the existing IAM credentials in the Lambda function to create signed requests.", ko: "Lambda 함수에서 기존 IAM 자격 증명을 사용하여 서명된 요청을 생성합니다." },
      { k: "C", en: "Create another IAM user and use the existing IAM credentials in the Lambda function.", ko: "새 IAM 사용자를 만들고 Lambda 함수에서 기존 IAM 자격 증명을 사용합니다." },
      { k: "D", en: "Create an IAM execution role with the required permissions and attach the role to the Lambda function.", ko: "필요한 권한이 있는 IAM 실행 역할을 생성하고 Lambda 함수에 연결합니다." }
    ],
    answer: ["D"],
    explanation: { en: "A Lambda execution role supplies temporary credentials to the function and should contain only the S3 permissions the code needs.", ko: "Lambda 실행 역할은 함수에 임시 자격 증명을 제공하며 코드에 필요한 S3 권한만 포함해야 합니다." },
    why_wrong: {
      A: { en: "A Lambda resource policy controls who may invoke the function, not the AWS services the function may call.", ko: "Lambda 리소스 정책은 함수를 호출할 수 있는 주체를 제어하며 함수가 호출할 AWS 서비스를 정하지 않습니다." },
      B: { en: "Long-lived IAM user credentials must not be embedded in function code or configuration.", ko: "장기 IAM 사용자 자격 증명을 함수 코드나 구성에 포함하면 안 됩니다." },
      C: { en: "Creating another IAM user still relies on long-lived credentials and does not use Lambda's role model.", ko: "새 IAM 사용자를 만들어도 장기 자격 증명에 의존하며 Lambda 역할 모델을 사용하지 않습니다." }
    }
  },
  {
    id: "exam9-404", number: 404, tags: ["Amazon SQS", "AWS Lambda", "Amazon S3", "Decoupling", "Resilience"],
    question: { en: "A serverless application invokes a Lambda function whenever a document is uploaded to S3. After a marketing campaign, many documents are not processed. How should the architecture be improved?", ko: "서버리스 애플리케이션은 문서가 S3에 업로드될 때마다 Lambda 함수를 호출합니다. 마케팅 캠페인 후 많은 문서가 처리되지 않았습니다. 아키텍처를 어떻게 개선해야 합니까?" },
    options: [
      { k: "A", en: "Set the Lambda function timeout to 15 minutes.", ko: "Lambda 함수 제한 시간을 15분으로 설정합니다." },
      { k: "B", en: "Configure S3 replication so documents can be processed later.", ko: "문서를 나중에 처리할 수 있도록 S3 복제를 구성합니다." },
      { k: "C", en: "Deploy another Lambda function and distribute document processing between the two functions.", ko: "추가 Lambda 함수를 배포하고 두 함수에 문서 처리 부하를 분산합니다." },
      { k: "D", en: "Create an Amazon SQS queue, send the requests to the queue, and configure the queue as an event source for Lambda.", ko: "Amazon SQS 대기열을 생성하여 요청을 보내고 대기열을 Lambda 이벤트 소스로 구성합니다." }
    ],
    answer: ["D"],
    explanation: { en: "SQS buffers bursts and retains messages until Lambda has capacity to process them. The event-source mapping scales consumers and retries failed batches.", ko: "SQS는 급증 요청을 버퍼링하고 Lambda가 처리할 용량이 생길 때까지 메시지를 보존합니다. 이벤트 소스 매핑은 소비자를 확장하고 실패한 배치를 재시도합니다." },
    why_wrong: {
      A: { en: "A longer timeout does not buffer a burst of invocation requests.", ko: "제한 시간을 늘려도 급증한 호출 요청을 버퍼링하지 못합니다." },
      B: { en: "Replication creates another copy of each object but does not provide a processing queue.", ko: "복제는 객체 사본을 만들지만 처리 대기열을 제공하지 않습니다." },
      C: { en: "A second function does not provide durable buffering or coordinated retries.", ko: "두 번째 함수는 내구성 있는 버퍼링이나 조정된 재시도를 제공하지 않습니다." }
    }
  },
  {
    id: "exam9-405", number: 405, tags: ["Amazon EC2 Auto Scaling", "Target Tracking", "Scheduled Scaling", "Application Load Balancer", "Choose two"],
    question: { en: "A demo environment runs on EC2 instances in an Auto Scaling group behind an ALB. Traffic varies greatly during business hours, and the environment can be stopped on weekends. Which two actions allow the system to scale with demand? (Choose two.)", ko: "데모 환경은 ALB 뒤 Auto Scaling 그룹의 EC2 인스턴스에서 실행됩니다. 근무 시간에는 트래픽이 크게 변하고 주말에는 중지할 수 있습니다. 수요에 맞게 확장하려면 어떤 두 조치를 수행해야 합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Use AWS Auto Scaling to change ALB capacity according to request rate.", ko: "AWS Auto Scaling으로 요청 속도에 따라 ALB 용량을 조정합니다." },
      { k: "B", en: "Use AWS Auto Scaling to scale the VPC internet gateway.", ko: "AWS Auto Scaling으로 VPC 인터넷 게이트웨이 용량을 확장합니다." },
      { k: "C", en: "Run EC2 instances in multiple AWS Regions to distribute the load.", ko: "여러 AWS 리전에서 EC2 인스턴스를 시작하여 부하를 분산합니다." },
      { k: "D", en: "Use a target tracking scaling policy to adjust the Auto Scaling group based on instance CPU utilization.", ko: "대상 추적 조정 정책을 사용하여 인스턴스 CPU 사용률을 기반으로 Auto Scaling 그룹을 조정합니다." },
      { k: "E", en: "Use scheduled scaling to set the group's minimum, maximum, and desired capacity to zero on weekends and restore the defaults at the start of the week.", ko: "예약된 조정을 사용하여 주말에 그룹의 최소, 최대 및 원하는 용량을 0으로 설정하고 주 시작 시 기본값으로 복원합니다." }
    ],
    answer: ["D", "E"],
    explanation: { en: "Target tracking handles unpredictable changes during working hours, while scheduled scaling shuts down the predictable weekend idle period and restores capacity before use resumes.", ko: "대상 추적은 근무 시간의 예측하기 어려운 변화를 처리하고 예약된 조정은 예측 가능한 주말 유휴 기간에 환경을 중지한 뒤 사용 전에 용량을 복원합니다." },
    why_wrong: {
      A: { en: "ALB capacity is managed automatically; the EC2 target group must be scaled.", ko: "ALB 용량은 자동으로 관리되며 확장해야 하는 대상은 EC2 그룹입니다." },
      B: { en: "An internet gateway is a horizontally scaled managed service and is not scaled by Auto Scaling.", ko: "인터넷 게이트웨이는 자동 확장되는 관리형 서비스이며 Auto Scaling으로 조정하지 않습니다." },
      C: { en: "A multi-Region deployment adds substantial complexity and does not implement the requested demand and weekend scaling behavior.", ko: "다중 리전 배포는 복잡성을 크게 늘리며 필요한 수요 및 주말 조정 동작을 구현하지 않습니다." }
    }
  },
  {
    id: "exam9-406", number: 406, tags: ["Amazon VPC", "Security Groups", "Amazon RDS for MySQL", "Network ACL", "Choose two"],
    question: { en: "A two-tier architecture has public web servers that must accept internet traffic on port 443 and an RDS for MySQL DB instance that must accept port 3306 only from the web servers. Which two steps meet these requirements? (Choose two.)", ko: "2계층 아키텍처의 퍼블릭 웹 서버는 포트 443에서 인터넷에 열려 있어야 하고 RDS for MySQL DB 인스턴스는 웹 서버에서만 포트 3306으로 액세스할 수 있어야 합니다. 어떤 두 단계를 수행해야 합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Add a public-subnet network ACL rule that denies outbound port 3306 to 0.0.0.0/0.", ko: "퍼블릭 서브넷 네트워크 ACL에 0.0.0.0/0의 포트 3306 아웃바운드를 거부하는 규칙을 추가합니다." },
      { k: "B", en: "Allow port 3306 from the public subnet CIDR in the DB security group.", ko: "DB 보안 그룹에서 퍼블릭 서브넷 CIDR의 포트 3306을 허용합니다." },
      { k: "C", en: "Create a web-server security group that allows port 443 from 0.0.0.0/0.", ko: "0.0.0.0/0의 포트 443을 허용하는 웹 서버 보안 그룹을 생성합니다." },
      { k: "D", en: "Create a DB security group that allows port 3306 from the web-server security group.", ko: "웹 서버 보안 그룹의 포트 3306을 허용하는 DB 보안 그룹을 생성합니다." },
      { k: "E", en: "Create a DB security group that allows traffic from the web-server security group and denies all other traffic.", ko: "웹 서버 보안 그룹의 트래픽을 허용하고 그 밖의 모든 트래픽을 거부하는 DB 보안 그룹을 생성합니다." }
    ],
    answer: ["C", "D"],
    explanation: { en: "The web security group permits public HTTPS. Referencing that security group as the source of the DB rule limits MySQL access to web-tier instances even as their IP addresses change.", ko: "웹 보안 그룹은 퍼블릭 HTTPS를 허용합니다. DB 규칙의 소스로 웹 보안 그룹을 참조하면 IP 주소가 바뀌어도 MySQL 액세스를 웹 계층 인스턴스로 제한할 수 있습니다." },
    why_wrong: {
      A: { en: "Denying all outbound MySQL traffic would also block the web servers from reaching the database.", ko: "모든 아웃바운드 MySQL 트래픽을 거부하면 웹 서버의 데이터베이스 연결도 차단됩니다." },
      B: { en: "A subnet CIDR permits every resource in the subnet; a security-group reference is more restrictive.", ko: "서브넷 CIDR은 서브넷의 모든 리소스를 허용하므로 보안 그룹 참조보다 범위가 넓습니다." },
      E: { en: "Security groups contain allow rules only and do not support explicit deny rules.", ko: "보안 그룹은 허용 규칙만 포함하며 명시적 거부 규칙을 지원하지 않습니다." }
    }
  },
  {
    id: "exam9-407", number: 407, tags: ["Amazon FSx for Lustre", "Lustre", "Shared Storage", "File System", "High Performance Computing"],
    question: { en: "A company needs fully managed shared storage for a game application hosted on AWS. Clients must access the data by using the Lustre client. Which solution meets these requirements?", ko: "회사는 AWS에서 호스팅되는 게임 애플리케이션을 위한 완전 관리형 공유 스토리지가 필요하며 Lustre 클라이언트로 데이터에 액세스해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Create an AWS DataSync task to share data as a mountable file system.", ko: "탑재 가능한 파일 시스템으로 데이터를 공유하는 AWS DataSync 작업을 생성합니다." },
      { k: "B", en: "Create an AWS Storage Gateway File Gateway and connect the application servers to its file share.", ko: "AWS Storage Gateway 파일 게이트웨이를 생성하고 애플리케이션 서버를 파일 공유에 연결합니다." },
      { k: "C", en: "Create an Amazon EFS file system and configure it to support Lustre.", ko: "Amazon EFS 파일 시스템을 만들고 Lustre를 지원하도록 구성합니다." },
      { k: "D", en: "Create an Amazon FSx for Lustre file system and mount it on the application servers.", ko: "Amazon FSx for Lustre 파일 시스템을 생성하고 애플리케이션 서버에 탑재합니다." }
    ],
    answer: ["D"],
    explanation: { en: "FSx for Lustre is the fully managed AWS file system that implements the Lustre protocol and supplies shared high-performance storage.", ko: "FSx for Lustre는 Lustre 프로토콜을 구현하고 공유 고성능 스토리지를 제공하는 완전 관리형 AWS 파일 시스템입니다." },
    why_wrong: {
      A: { en: "DataSync transfers data between storage systems; it does not provide a mounted Lustre service.", ko: "DataSync는 스토리지 시스템 간 데이터를 전송하며 탑재형 Lustre 서비스를 제공하지 않습니다." },
      B: { en: "File Gateway exposes NFS or SMB shares, not Lustre.", ko: "파일 게이트웨이는 NFS 또는 SMB 공유를 제공하며 Lustre를 지원하지 않습니다." },
      C: { en: "EFS uses NFS and cannot be configured as a Lustre file system.", ko: "EFS는 NFS를 사용하며 Lustre 파일 시스템으로 구성할 수 없습니다." }
    }
  },
  {
    id: "exam9-408", number: 408, tags: ["AWS Global Accelerator", "Network Load Balancer", "Amazon ECS", "AWS Fargate", "UDP", "Multi-Region"],
    question: { en: "An application receives UDP data from thousands of geographically distributed remote devices, processes it immediately, optionally responds, and does not store it. The company needs minimal device latency and rapid failover to another AWS Region. Which solution meets these requirements?", ko: "애플리케이션은 지리적으로 분산된 수천 개 원격 장치에서 UDP 데이터를 수신하여 즉시 처리하고 필요한 경우 응답하며 데이터를 저장하지 않습니다. 장치 전송 지연을 최소화하고 다른 AWS 리전으로 빠르게 장애 조치해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Use Route 53 failover routing with NLBs in two Regions and invoke Lambda functions from the NLBs.", ko: "두 리전의 NLB와 Route 53 장애 조치 라우팅을 사용하고 NLB에서 Lambda 함수를 호출합니다." },
      { k: "B", en: "Use AWS Global Accelerator with an NLB endpoint in each of two Regions. Run an Amazon ECS service on AWS Fargate behind each NLB to process the data.", ko: "AWS Global Accelerator를 사용하고 두 리전 각각에 NLB 엔드포인트를 생성합니다. 각 NLB 뒤에서 AWS Fargate의 Amazon ECS 서비스를 실행하여 데이터를 처리합니다." },
      { k: "C", en: "Use Global Accelerator with ALB endpoints in two Regions and Fargate ECS services behind the ALBs.", ko: "두 리전의 ALB 엔드포인트와 ALB 뒤 Fargate ECS 서비스를 Global Accelerator와 함께 사용합니다." },
      { k: "D", en: "Use Route 53 failover routing with ALBs in two Regions and Fargate ECS services behind the ALBs.", ko: "두 리전의 ALB와 Route 53 장애 조치 라우팅을 사용하고 ALB 뒤에서 Fargate ECS 서비스를 실행합니다." }
    ],
    answer: ["B"],
    explanation: { en: "Global Accelerator routes users over the AWS global network and quickly shifts traffic between healthy regional endpoints. NLB supports UDP, and Fargate runs the processing service without server management.", ko: "Global Accelerator는 AWS 글로벌 네트워크로 사용자를 라우팅하고 정상 리전 엔드포인트 간 트래픽을 빠르게 전환합니다. NLB는 UDP를 지원하고 Fargate는 서버 관리 없이 처리 서비스를 실행합니다." },
    why_wrong: {
      A: { en: "An NLB cannot invoke Lambda as a target, and DNS failover is slower because of resolver caching.", ko: "NLB는 Lambda를 대상으로 호출할 수 없으며 DNS 장애 조치는 리졸버 캐싱 때문에 더 느립니다." },
      C: { en: "ALB does not support UDP traffic.", ko: "ALB는 UDP 트래픽을 지원하지 않습니다." },
      D: { en: "ALB does not support UDP, and Route 53 does not provide the same rapid endpoint failover as Global Accelerator.", ko: "ALB는 UDP를 지원하지 않으며 Route 53은 Global Accelerator와 같은 빠른 엔드포인트 장애 조치를 제공하지 않습니다." }
    }
  },
  {
    id: "exam9-409", number: 409, tags: ["Amazon FSx for Windows File Server", "Windows", "SMB", "Shared Storage", "High Availability"],
    question: { en: "A solutions architect must migrate a Windows IIS web application to EC2 instances across multiple Availability Zones behind a load balancer. The application depends on a file share hosted on an on-premises NAS. Which replacement is the most resilient and durable?", ko: "솔루션스 아키텍트는 온프레미스 NAS의 파일 공유에 의존하는 Windows IIS 웹 애플리케이션을 로드 밸런서 뒤 여러 가용 영역의 EC2 인스턴스로 마이그레이션해야 합니다. 가장 탄력적이고 내구성 있는 대체 서비스는 무엇입니까?" },
    options: [
      { k: "A", en: "Migrate the file share to Amazon RDS.", ko: "파일 공유를 Amazon RDS로 마이그레이션합니다." },
      { k: "B", en: "Migrate the file share to AWS Storage Gateway.", ko: "파일 공유를 AWS Storage Gateway로 마이그레이션합니다." },
      { k: "C", en: "Migrate the file share to Amazon FSx for Windows File Server.", ko: "파일 공유를 Amazon FSx for Windows File Server로 마이그레이션합니다." },
      { k: "D", en: "Migrate the file share to Amazon EFS.", ko: "파일 공유를 Amazon EFS로 마이그레이션합니다." }
    ],
    answer: ["C"],
    explanation: { en: "FSx for Windows File Server provides managed, durable SMB file shares with Windows ACLs and Active Directory integration. Multi-AZ deployment supports high availability for IIS servers across AZs.", ko: "FSx for Windows File Server는 Windows ACL과 Active Directory 통합을 지원하는 관리형 내구성 SMB 파일 공유를 제공합니다. 다중 AZ 배포로 여러 AZ의 IIS 서버에 고가용성을 제공합니다." },
    why_wrong: {
      A: { en: "RDS is a relational database and does not provide an SMB file share.", ko: "RDS는 관계형 데이터베이스이며 SMB 파일 공유를 제공하지 않습니다." },
      B: { en: "Storage Gateway is primarily a hybrid bridge to on-premises environments, not the best native shared file system for migrated Windows servers.", ko: "Storage Gateway는 주로 온프레미스 환경과 연결하는 하이브리드 서비스이며 마이그레이션된 Windows 서버용 최적의 네이티브 공유 파일 시스템이 아닙니다." },
      D: { en: "EFS provides NFS for Linux workloads rather than Windows-native SMB semantics.", ko: "EFS는 Windows 네이티브 SMB 대신 Linux 워크로드용 NFS를 제공합니다." }
    }
  },
  {
    id: "exam9-410", number: 410, tags: ["Amazon EBS", "Encryption", "AWS KMS", "Data at Rest", "Amazon EC2"],
    question: { en: "A company is deploying an application on Amazon EC2. The application writes data to an Amazon EBS volume, and all data on the volume must be encrypted at rest. Which solution meets this requirement?", ko: "회사는 Amazon EC2에 새 애플리케이션을 배포합니다. 애플리케이션은 Amazon EBS 볼륨에 데이터를 쓰며 볼륨의 모든 데이터는 저장 시 암호화되어야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Create an IAM role that specifies EBS encryption and attach it to the EC2 instance.", ko: "EBS 암호화를 지정하는 IAM 역할을 생성하여 EC2 인스턴스에 연결합니다." },
      { k: "B", en: "Create an encrypted EBS volume and attach the volume to the EC2 instance.", ko: "암호화된 EBS 볼륨을 생성하고 EC2 인스턴스에 연결합니다." },
      { k: "C", en: "Tag the EC2 instance with Encrypt=true to request volume encryption.", ko: "EC2 인스턴스에 Encrypt=true 태그를 지정하여 볼륨 암호화를 요청합니다." },
      { k: "D", en: "Create a KMS key policy that performs EBS encryption and verify that the policy is active.", ko: "EBS 암호화를 수행하는 KMS 키 정책을 생성하고 정책이 활성 상태인지 확인합니다." }
    ],
    answer: ["B"],
    explanation: { en: "An EBS volume created with encryption enabled automatically encrypts data at rest, disk I/O, and snapshots by using an AWS managed or customer managed KMS key.", ko: "암호화를 활성화하여 생성한 EBS 볼륨은 AWS 관리형 또는 고객 관리형 KMS 키를 사용해 저장 데이터, 디스크 I/O 및 스냅샷을 자동으로 암호화합니다." },
    why_wrong: {
      A: { en: "IAM roles authorize API calls; they do not turn on encryption for volume contents.", ko: "IAM 역할은 API 호출 권한을 부여하며 볼륨 내용의 암호화를 활성화하지 않습니다." },
      C: { en: "An arbitrary resource tag does not enable EBS encryption.", ko: "임의의 리소스 태그는 EBS 암호화를 활성화하지 않습니다." },
      D: { en: "A key policy controls key use, but the EBS volume must still be created or copied with encryption enabled.", ko: "키 정책은 키 사용을 제어하지만 EBS 볼륨 자체를 암호화가 활성화된 상태로 생성하거나 복사해야 합니다." }
    }
  },
  {
    id: "exam9-411", number: 411, tags: ["Amazon Aurora Serverless", "MySQL", "Serverless", "Auto Scaling", "Cost Optimization"],
    question: { en: "A web application has sporadic usage: high at the start of each month, normal at the start of each week, and unpredictable during the week. It currently uses a MySQL database in a data center. The company wants a cost-effective AWS database that requires no database modifications. Which solution meets these requirements?", ko: "웹 애플리케이션은 매월 초 사용량이 많고 매주 초에는 보통이며 주중에는 예측할 수 없는 산발적 사용 패턴을 보입니다. 현재 데이터 센터의 MySQL 데이터베이스를 사용합니다. 데이터베이스 수정 없이 비용 효율적인 AWS 플랫폼으로 이전하려면 무엇을 선택해야 합니까?" },
    options: [
      { k: "A", en: "Amazon DynamoDB", ko: "Amazon DynamoDB" },
      { k: "B", en: "Amazon RDS for MySQL", ko: "MySQL용 Amazon RDS" },
      { k: "C", en: "MySQL-compatible Amazon Aurora Serverless", ko: "MySQL 호환 Amazon Aurora Serverless" },
      { k: "D", en: "MySQL deployed on Amazon EC2 instances in an Auto Scaling group", ko: "Auto Scaling 그룹의 Amazon EC2에 배포된 MySQL" }
    ],
    answer: ["C"],
    explanation: { en: "Aurora Serverless is MySQL compatible and automatically adjusts database capacity for intermittent and unpredictable demand, reducing idle cost without rewriting the application for another database model.", ko: "Aurora Serverless는 MySQL과 호환되며 간헐적이고 예측하기 어려운 수요에 맞춰 데이터베이스 용량을 자동 조정합니다. 다른 데이터 모델로 애플리케이션을 다시 작성하지 않고 유휴 비용을 줄일 수 있습니다." },
    why_wrong: {
      A: { en: "DynamoDB uses a different NoSQL data model and would require application and schema changes.", ko: "DynamoDB는 다른 NoSQL 데이터 모델을 사용하므로 애플리케이션과 스키마 변경이 필요합니다." },
      B: { en: "A provisioned RDS instance does not automatically scale capacity down for sporadic usage as efficiently as Aurora Serverless.", ko: "프로비저닝된 RDS 인스턴스는 산발적 사용 시 Aurora Serverless만큼 효율적으로 용량을 자동 축소하지 않습니다." },
      D: { en: "Running MySQL on EC2 adds database administration and Auto Scaling does not safely scale a stateful database tier this way.", ko: "EC2의 MySQL은 데이터베이스 관리 부담을 추가하며 Auto Scaling으로 상태 저장 데이터베이스 계층을 이 방식으로 안전하게 확장할 수 없습니다." }
    }
  },
  {
    id: "exam9-412", number: 412, tags: ["Amazon S3", "S3 Block Public Access", "AWS Organizations", "SCP", "Security"],
    question: { en: "An image hosting company stores objects in Amazon S3. All S3 objects across the AWS account must remain private and must not be accidentally exposed publicly. Which solution meets these requirements?", ko: "이미지 호스팅 회사는 객체를 Amazon S3에 저장합니다. AWS 계정 전체의 모든 S3 객체는 비공개로 유지되어야 하며 실수로 공개되어서는 안 됩니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Use GuardDuty to monitor bucket policies and Lambda remediation rules to reverse public changes.", ko: "GuardDuty로 버킷 정책을 모니터링하고 Lambda 자동 수정 규칙으로 공개 변경을 되돌립니다." },
      { k: "B", en: "Use Trusted Advisor to find public buckets, send email alerts, and change public bucket policies manually.", ko: "Trusted Advisor로 공개 버킷을 찾고 이메일 알림 후 버킷 정책을 수동으로 변경합니다." },
      { k: "C", en: "Use AWS RAM to find public buckets and invoke a Lambda remediation function through SNS.", ko: "AWS RAM으로 공개 버킷을 찾고 SNS를 통해 Lambda 수정 함수를 호출합니다." },
      { k: "D", en: "Enable S3 Block Public Access at the account level and apply an Organizations SCP that prevents users from changing the setting.", ko: "계정 수준에서 S3 퍼블릭 액세스 차단을 활성화하고 사용자가 설정을 변경하지 못하도록 Organizations SCP를 적용합니다." }
    ],
    answer: ["D"],
    explanation: { en: "Account-level S3 Block Public Access overrides public bucket and object permissions. An SCP can prevent member-account principals from disabling that protection.", ko: "계정 수준 S3 퍼블릭 액세스 차단은 공개 버킷 및 객체 권한을 무효화합니다. SCP는 멤버 계정 주체가 이 보호 설정을 비활성화하지 못하게 할 수 있습니다." },
    why_wrong: {
      A: { en: "GuardDuty is a threat detection service and this approach reacts after a risky change instead of preventing it.", ko: "GuardDuty는 위협 탐지 서비스이며 이 방식은 위험한 변경을 예방하지 않고 사후 대응합니다." },
      B: { en: "Alerts and manual remediation allow an exposure window and add operational overhead.", ko: "알림과 수동 수정은 노출 시간을 허용하고 운영 부담을 추가합니다." },
      C: { en: "AWS RAM does not discover public S3 buckets, and reactive Lambda remediation is unnecessary.", ko: "AWS RAM은 공개 S3 버킷을 찾는 서비스가 아니며 사후 Lambda 수정도 불필요합니다." }
    }
  },
  {
    id: "exam9-413", number: 413, tags: ["Amazon SES", "Email", "Managed Service", "Scalability", "Operational Excellence"],
    question: { en: "A growing ecommerce application has significant delays sending real-time marketing and order confirmation emails. The company wants to reduce troubleshooting time and operational overhead. What should a solutions architect do?", ko: "성장하는 전자상거래 애플리케이션에서 실시간 마케팅 및 주문 확인 이메일 전송이 크게 지연되고 있습니다. 복잡한 이메일 전송 문제의 해결 시간과 운영 오버헤드를 줄이려면 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Create a separate application tier on a dedicated EC2 instance for email processing.", ko: "이메일 처리 전용 EC2 인스턴스에 별도 애플리케이션 계층을 만듭니다." },
      { k: "B", en: "Configure the web instances to send email through Amazon Simple Email Service (Amazon SES).", ko: "웹 인스턴스가 Amazon Simple Email Service(Amazon SES)를 통해 이메일을 보내도록 구성합니다." },
      { k: "C", en: "Configure the web instances to send email through Amazon SNS.", ko: "웹 인스턴스가 Amazon SNS를 통해 이메일을 보내도록 구성합니다." },
      { k: "D", en: "Create a separate email application tier on EC2 instances in an Auto Scaling group.", ko: "Auto Scaling 그룹의 EC2 인스턴스에 별도 이메일 애플리케이션 계층을 만듭니다." }
    ],
    answer: ["B"],
    explanation: { en: "Amazon SES is a scalable managed service for transactional and marketing email. It removes mail-server capacity, deliverability, and maintenance work from the application team.", ko: "Amazon SES는 트랜잭션 및 마케팅 이메일을 위한 확장 가능한 관리형 서비스입니다. 애플리케이션 팀의 메일 서버 용량, 전송 가능성 및 유지 관리 업무를 줄입니다." },
    why_wrong: {
      A: { en: "A single email EC2 instance is another failure point and requires mail-server operations.", ko: "단일 이메일 EC2 인스턴스는 또 다른 장애 지점이며 메일 서버 운영이 필요합니다." },
      C: { en: "SNS email subscriptions are intended for notifications and do not provide a full transactional email service.", ko: "SNS 이메일 구독은 알림용이며 완전한 트랜잭션 이메일 서비스를 제공하지 않습니다." },
      D: { en: "An Auto Scaling email tier still requires the company to operate and troubleshoot mail infrastructure.", ko: "Auto Scaling 이메일 계층도 회사가 메일 인프라를 운영하고 문제를 해결해야 합니다." }
    }
  },
  {
    id: "exam9-414", number: 414, tags: ["AWS Storage Gateway", "S3 File Gateway", "Amazon S3", "Hybrid Storage", "Near Real-Time"],
    question: { en: "A business system creates hundreds of CSV reports each day on a network share. The company needs to store the files in AWS in near real time for analytics with the least management overhead. Which solution meets these requirements?", ko: "비즈니스 시스템은 매일 수백 개의 CSV 보고서를 네트워크 공유에 저장합니다. 분석을 위해 거의 실시간으로 AWS에 저장하면서 관리 오버헤드를 최소화해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Use DataSync to transfer files to S3 with a job scheduled at the end of each day.", ko: "DataSync로 파일을 S3에 전송하고 매일 종료 시 예약 작업을 실행합니다." },
      { k: "B", en: "Create an Amazon S3 File Gateway and update the business system to use its network share.", ko: "Amazon S3 파일 게이트웨이를 생성하고 비즈니스 시스템이 새 네트워크 공유를 사용하도록 업데이트합니다." },
      { k: "C", en: "Build an application that calls the DataSync API in an automation workflow.", ko: "자동화 워크플로에서 DataSync API를 호출하는 애플리케이션을 만듭니다." },
      { k: "D", en: "Deploy an AWS Transfer Family SFTP endpoint and write a polling upload script.", ko: "AWS Transfer Family SFTP 엔드포인트를 배포하고 폴링 업로드 스크립트를 작성합니다." }
    ],
    answer: ["B"],
    explanation: { en: "S3 File Gateway exposes an SMB or NFS share and asynchronously stores written files as S3 objects, providing near-real-time cloud availability with minimal custom management.", ko: "S3 파일 게이트웨이는 SMB 또는 NFS 공유를 제공하고 기록된 파일을 S3 객체로 비동기 저장하므로 사용자 지정 관리 없이 거의 실시간으로 클라우드에서 사용할 수 있습니다." },
    why_wrong: {
      A: { en: "A daily transfer is not near real time.", ko: "일일 전송은 거의 실시간이라는 요구를 충족하지 않습니다." },
      C: { en: "Custom API automation adds development and management overhead.", ko: "사용자 지정 API 자동화는 개발 및 관리 오버헤드를 추가합니다." },
      D: { en: "An SFTP endpoint and polling script add avoidable components and operational work.", ko: "SFTP 엔드포인트와 폴링 스크립트는 불필요한 구성 요소와 운영 작업을 추가합니다." }
    }
  },
  {
    id: "exam9-415", number: 415, tags: ["Amazon S3", "S3 Intelligent-Tiering", "S3 Lifecycle", "Cost Optimization", "Storage"],
    question: { en: "A company stores petabytes of data in S3 Standard across multiple buckets. Access frequency varies and is unknown. The company wants the most efficient way to optimize S3 storage cost for every bucket. Which solution meets these requirements?", ko: "회사는 여러 버킷의 S3 Standard에 페타바이트 규모 데이터를 저장하며 액세스 빈도와 패턴을 알 수 없습니다. 각 S3 버킷의 사용 비용을 가장 효율적으로 최적화하려면 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Create S3 Lifecycle rules that transition the bucket objects to S3 Intelligent-Tiering.", ko: "버킷 객체를 S3 Intelligent-Tiering으로 전환하는 S3 수명 주기 규칙을 생성합니다." },
      { k: "B", en: "Use S3 Storage Class Analysis to choose a tier for every object and move each object individually.", ko: "S3 스토리지 클래스 분석으로 각 객체의 계층을 결정하고 객체를 개별적으로 이동합니다." },
      { k: "C", en: "Create lifecycle rules that transition all objects to S3 Glacier Instant Retrieval.", ko: "모든 객체를 S3 Glacier Instant Retrieval로 전환하는 수명 주기 규칙을 생성합니다." },
      { k: "D", en: "Create lifecycle rules that transition all objects to S3 One Zone-IA.", ko: "모든 객체를 S3 One Zone-IA로 전환하는 수명 주기 규칙을 생성합니다." }
    ],
    answer: ["A"],
    explanation: { en: "S3 Intelligent-Tiering automatically moves objects among access tiers as usage changes, making it suitable when access patterns are unknown or variable.", ko: "S3 Intelligent-Tiering은 사용 변화에 따라 객체를 액세스 계층 간 자동 이동하므로 패턴이 알려지지 않았거나 변하는 경우에 적합합니다." },
    why_wrong: {
      B: { en: "Manual per-object analysis and movement does not scale to petabytes and changing patterns.", ko: "객체별 수동 분석과 이동은 페타바이트 규모 및 변화하는 패턴에 확장되지 않습니다." },
      C: { en: "Frequently accessed objects would incur retrieval charges and may not meet the intended access profile.", ko: "자주 액세스되는 객체에는 검색 비용이 발생하며 의도한 액세스 특성을 충족하지 못할 수 있습니다." },
      D: { en: "One Zone-IA stores data in one AZ and is unsuitable for all data when durability and access patterns are unknown.", ko: "One Zone-IA는 단일 AZ에 저장되므로 내구성과 액세스 패턴을 알 수 없는 모든 데이터에 적합하지 않습니다." }
    }
  },
  {
    id: "exam9-416", number: 416, tags: ["Amazon CloudFront", "Amazon RDS", "Read Replica", "Performance", "Choose two"],
    question: { en: "A fast-growing global ecommerce website contains static and dynamic content and stores OLTP data in Amazon RDS. Page load times are increasing. Which two actions should a solutions architect take? (Choose two.)", ko: "빠르게 성장하는 글로벌 전자상거래 웹사이트에는 정적 및 동적 콘텐츠가 있고 OLTP 데이터는 Amazon RDS에 저장됩니다. 페이지 로드 시간이 늘어나고 있습니다. 어떤 두 조치를 수행해야 합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Configure an Amazon Redshift cluster.", ko: "Amazon Redshift 클러스터를 구성합니다." },
      { k: "B", en: "Configure an Amazon CloudFront distribution.", ko: "Amazon CloudFront 배포를 구성합니다." },
      { k: "C", en: "Host the dynamic web content in Amazon S3.", ko: "Amazon S3에서 동적 웹 콘텐츠를 호스팅합니다." },
      { k: "D", en: "Create a read replica for the RDS DB instance.", ko: "RDS DB 인스턴스의 읽기 전용 복제본을 생성합니다." },
      { k: "E", en: "Configure Multi-AZ deployment for the RDS DB instance.", ko: "RDS DB 인스턴스를 다중 AZ로 구성합니다." }
    ],
    answer: ["B", "D"],
    explanation: { en: "CloudFront caches content near global users and reduces origin latency. An RDS read replica offloads read-heavy application queries from the primary database.", ko: "CloudFront는 글로벌 사용자 가까이에서 콘텐츠를 캐시하여 오리진 지연을 줄입니다. RDS 읽기 전용 복제본은 읽기 중심 애플리케이션 쿼리를 기본 데이터베이스에서 분산합니다." },
    why_wrong: {
      A: { en: "Redshift is an analytics warehouse and does not accelerate OLTP page requests.", ko: "Redshift는 분석용 데이터 웨어하우스이며 OLTP 페이지 요청을 가속하지 않습니다." },
      C: { en: "S3 static website hosting does not run server-side dynamic content.", ko: "S3 정적 웹사이트 호스팅은 서버 측 동적 콘텐츠를 실행하지 않습니다." },
      E: { en: "Multi-AZ improves availability but the standby does not serve read traffic to improve performance.", ko: "다중 AZ는 가용성을 높이지만 대기 인스턴스는 성능 향상을 위한 읽기 트래픽을 처리하지 않습니다." }
    }
  },
  {
    id: "exam9-417", number: 417, tags: ["Compute Savings Plans", "AWS Lambda", "Amazon EC2", "VPC", "Cost Optimization"],
    question: { en: "An application uses EC2 instances and Lambda functions. Lambda needs direct network access to EC2 instances in a private subnet. Usage will increase for at least 1 year. The company wants maximum savings and low network latency. Which solution meets these requirements?", ko: "애플리케이션은 EC2 인스턴스와 Lambda 함수를 사용하며 Lambda는 프라이빗 서브넷의 EC2 인스턴스에 직접 네트워크 액세스해야 합니다. 최소 1년 동안 사용량이 증가할 예정입니다. 비용 절감을 극대화하고 네트워크 지연을 낮게 유지하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Purchase an EC2 Instance Savings Plan, optimize Lambda, and attach Lambda to the private subnet containing EC2.", ko: "EC2 Instance Savings Plan을 구매하고 Lambda를 최적화한 뒤 EC2가 있는 프라이빗 서브넷에 Lambda를 연결합니다." },
      { k: "B", en: "Purchase an EC2 Instance Savings Plan and attach Lambda to a public subnet in the same VPC.", ko: "EC2 Instance Savings Plan을 구매하고 동일 VPC의 퍼블릭 서브넷에 Lambda를 연결합니다." },
      { k: "C", en: "Purchase a Compute Savings Plan, optimize Lambda duration, memory, invocations, and transferred data, and attach Lambda to the private subnet containing EC2.", ko: "Compute Savings Plan을 구매하고 Lambda 실행 시간, 메모리, 호출 수 및 전송 데이터를 최적화한 뒤 EC2가 있는 프라이빗 서브넷에 Lambda를 연결합니다." },
      { k: "D", en: "Purchase a Compute Savings Plan, optimize Lambda, and keep the functions in the Lambda service VPC.", ko: "Compute Savings Plan을 구매하고 Lambda를 최적화한 뒤 함수를 Lambda 서비스 VPC에 유지합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Compute Savings Plans apply to eligible EC2 and Lambda usage, unlike EC2 Instance Savings Plans. VPC attachment to the private subnet provides direct low-latency connectivity to the EC2 instances.", ko: "Compute Savings Plans는 EC2 Instance Savings Plans와 달리 적격 EC2 및 Lambda 사용량 모두에 적용됩니다. 프라이빗 서브넷에 VPC 연결하면 EC2 인스턴스로 직접 짧은 지연 시간의 연결을 제공합니다." },
    why_wrong: {
      A: { en: "EC2 Instance Savings Plans do not cover Lambda usage.", ko: "EC2 Instance Savings Plans는 Lambda 사용량에 적용되지 않습니다." },
      B: { en: "It does not cover Lambda and placing Lambda in a public subnet does not give it a public IP or improve private connectivity.", ko: "Lambda 비용을 포함하지 않으며 퍼블릭 서브넷 연결은 Lambda에 퍼블릭 IP를 부여하거나 프라이빗 연결을 개선하지 않습니다." },
      D: { en: "A function outside the customer VPC cannot directly access private EC2 addresses.", ko: "고객 VPC 외부의 함수는 프라이빗 EC2 주소에 직접 액세스할 수 없습니다." }
    }
  },
  {
    id: "exam9-418", number: 418, tags: ["AWS IAM", "Cross-Account Access", "IAM Role", "Amazon S3", "Least Privilege"],
    question: { en: "Team members need access to S3 buckets in separate development and production AWS accounts. A role in the production account already grants the required bucket permissions. Which solution provides least-privilege cross-account access?", ko: "팀 구성원은 별도의 개발 및 프로덕션 AWS 계정에 있는 S3 버킷에 액세스해야 합니다. 프로덕션 계정에는 필요한 버킷 권한을 부여하는 역할이 이미 있습니다. 최소 권한의 교차 계정 액세스를 제공하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Attach an administrator policy to users in the development account.", ko: "개발 계정 사용자에게 관리자 액세스 정책을 연결합니다." },
      { k: "B", en: "Add the development account as a principal in the production role's trust policy.", ko: "프로덕션 역할의 신뢰 정책에 개발 계정을 주체로 추가합니다." },
      { k: "C", en: "Turn off S3 Block Public Access on the production bucket.", ko: "프로덕션 S3 버킷의 퍼블릭 액세스 차단을 끕니다." },
      { k: "D", en: "Create IAM users in production with unique credentials for every team member.", ko: "각 팀 구성원을 위해 프로덕션 계정에 고유 자격 증명이 있는 IAM 사용자를 만듭니다." }
    ],
    answer: ["B"],
    explanation: { en: "The role trust policy identifies who may assume the role. Trusting the development account lets authorized principals assume the existing scoped role without duplicate users or public access.", ko: "역할 신뢰 정책은 역할을 수임할 수 있는 주체를 식별합니다. 개발 계정을 신뢰하면 승인된 주체가 중복 사용자나 퍼블릭 액세스 없이 기존의 범위가 제한된 역할을 수임할 수 있습니다." },
    why_wrong: {
      A: { en: "Administrator access is excessive and does not establish the production role's trust relationship.", ko: "관리자 액세스는 지나치게 광범위하며 프로덕션 역할의 신뢰 관계도 설정하지 않습니다." },
      C: { en: "Public access is unnecessary and would expose the bucket beyond the intended principals.", ko: "퍼블릭 액세스는 불필요하며 의도한 주체보다 넓게 버킷을 노출합니다." },
      D: { en: "Duplicating IAM users and long-lived credentials across accounts increases management and security risk.", ko: "계정 간 IAM 사용자와 장기 자격 증명을 중복 생성하면 관리 부담과 보안 위험이 증가합니다." }
    }
  },
  {
    id: "exam9-419", number: 419, tags: ["AWS Organizations", "SCP", "Amazon EBS", "Encryption", "Choose two"],
    question: { en: "An organization runs EC2 workloads only in ap-southeast-2 and already has an SCP preventing resources in other Regions. It must ensure all new EBS volumes are encrypted, including volumes created by root users, while minimizing impact on employees. Which two steps meet these requirements? (Choose two.)", ko: "조직은 ap-southeast-2에서만 EC2 워크로드를 실행하며 다른 리전의 리소스 생성을 막는 SCP가 있습니다. 루트 사용자를 포함한 모든 사용자가 생성하는 새 EBS 볼륨을 암호화하면서 직원에게 미치는 영향을 최소화해야 합니다. 어떤 두 단계를 수행해야 합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Enable EBS encryption by default and define the default encryption key in the EC2 console.", ko: "EC2 콘솔에서 EBS 기본 암호화를 활성화하고 기본 암호화 키를 정의합니다." },
      { k: "B", en: "Create an IAM permissions boundary at the root OU that denies CreateVolume when ec2:Encrypted is false.", ko: "루트 OU에 IAM 권한 경계를 연결하여 ec2:Encrypted가 false일 때 CreateVolume을 거부합니다." },
      { k: "C", en: "Create an SCP at the root OU that denies CreateVolume when ec2:Encrypted is false.", ko: "루트 OU에 SCP를 연결하여 ec2:Encrypted가 false일 때 CreateVolume을 거부합니다." },
      { k: "D", en: "Update an IAM policy in each account to deny CreateVolume when ec2:Encrypted is false.", ko: "각 계정의 IAM 정책을 업데이트하여 ec2:Encrypted가 false일 때 CreateVolume을 거부합니다." },
      { k: "E", en: "Enable EBS encryption by default from the organization management account.", ko: "조직 관리 계정에서 EBS 볼륨 기본 암호화를 설정합니다." }
    ],
    answer: ["C", "E"],
    explanation: { en: "An organization-level default makes encrypted creation seamless, while an SCP enforces the maximum permissions for member accounts and prevents unencrypted volume creation even by powerful principals.", ko: "조직 수준 기본 설정은 암호화된 볼륨 생성을 자동화하며 SCP는 멤버 계정의 최대 권한을 제한하여 강력한 주체도 암호화되지 않은 볼륨을 생성하지 못하게 합니다." },
    why_wrong: {
      A: { en: "A per-account console setting does not centrally enforce the requirement across the organization by itself.", ko: "계정별 콘솔 설정만으로는 조직 전체 요구 사항을 중앙에서 강제하지 못합니다." },
      B: { en: "Permissions boundaries attach to IAM principals, not organizational units, and do not constrain the root user.", ko: "권한 경계는 조직 단위가 아니라 IAM 주체에 연결되며 루트 사용자를 제한하지 않습니다." },
      D: { en: "Per-account IAM policies are operationally heavier and do not restrict each account's root user.", ko: "계정별 IAM 정책은 운영 부담이 크고 각 계정의 루트 사용자를 제한하지 못합니다." }
    }
  },
  {
    id: "exam9-420", number: 420, tags: ["Amazon RDS for PostgreSQL", "Multi-AZ DB Cluster", "Reader Endpoint", "High Availability", "Read Scaling"],
    question: { en: "A company wants to simplify time-consuming administration for an Amazon RDS for PostgreSQL production workload. It needs high availability, automatic failover within 40 seconds in most scenarios, read offloading, and the lowest possible cost. Which solution meets these requirements?", ko: "회사는 Amazon RDS for PostgreSQL 프로덕션 워크로드의 시간 소모적인 관리를 단순화하려고 합니다. 고가용성, 대부분의 시나리오에서 40초 이내 자동 장애 조치, 기본 인스턴스의 읽기 오프로드 및 가능한 낮은 비용이 필요합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Use an RDS Multi-AZ DB instance deployment, create one read replica, and direct reads to the replica.", ko: "RDS 다중 AZ DB 인스턴스 배포를 사용하고 읽기 복제본 하나를 만들어 읽기 워크로드를 보냅니다." },
      { k: "B", en: "Use an RDS Multi-AZ DB cluster deployment, create two additional read replicas, and direct reads to them.", ko: "RDS 다중 AZ DB 클러스터 배포를 사용하고 추가 읽기 복제본 두 개를 만들어 읽기 워크로드를 보냅니다." },
      { k: "C", en: "Use an RDS Multi-AZ DB instance deployment and direct reads to the standby instance.", ko: "RDS 다중 AZ DB 인스턴스 배포를 사용하고 읽기 워크로드를 대기 인스턴스로 보냅니다." },
      { k: "D", en: "Use an RDS Multi-AZ DB cluster deployment and direct read workloads to the reader endpoint.", ko: "RDS 다중 AZ DB 클러스터 배포를 사용하고 읽기 워크로드를 리더 엔드포인트로 보냅니다." }
    ],
    answer: ["D"],
    explanation: { en: "An RDS Multi-AZ DB cluster includes one writer and two readable instances across three AZs, supports fast automatic failover, and exposes a reader endpoint without paying for extra replicas beyond the cluster.", ko: "RDS 다중 AZ DB 클러스터는 세 AZ에 하나의 라이터와 읽기 가능한 두 인스턴스를 포함하고 빠른 자동 장애 조치를 지원하며 추가 복제본 비용 없이 리더 엔드포인트를 제공합니다." },
    why_wrong: {
      A: { en: "A separate read replica adds cost and does not provide the same fast cluster failover architecture.", ko: "별도 읽기 복제본은 비용을 추가하며 동일한 빠른 클러스터 장애 조치 구조를 제공하지 않습니다." },
      B: { en: "The cluster already contains two readable instances, so creating two more replicas adds unnecessary cost.", ko: "클러스터에는 이미 읽기 가능한 인스턴스 두 개가 있으므로 복제본을 두 개 더 만들면 불필요한 비용이 발생합니다." },
      C: { en: "A traditional Multi-AZ DB instance standby cannot serve read traffic.", ko: "기존 다중 AZ DB 인스턴스의 대기 인스턴스는 읽기 트래픽을 처리할 수 없습니다." }
    }
  },
  {
    id: "exam9-421", number: 421, tags: ["AWS Transfer Family", "Amazon EFS", "SFTP", "High Availability", "Encryption"],
    question: { en: "A company runs a highly available SFTP service on two EC2 Linux instances with Elastic IP addresses. The service uses shared storage attached to the instances, and users are managed as Linux users. The company wants a serverless replacement with high IOPS, configurable security, and continued control over user permissions. Which solution meets these requirements?", ko: "회사는 탄력적 IP 주소가 있는 두 EC2 Linux 인스턴스에서 고가용성 SFTP 서비스를 실행합니다. 서비스는 인스턴스에 연결된 공유 스토리지를 사용하고 사용자는 Linux 사용자로 관리됩니다. 높은 IOPS 성능, 고도로 구성 가능한 보안 및 사용자 권한 제어를 유지하는 서버리스 대체 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create an encrypted EBS volume. Create a public AWS Transfer Family SFTP endpoint restricted to trusted IP addresses. Attach the EBS volume to the endpoint.", ko: "암호화된 EBS 볼륨을 만들고 신뢰할 수 있는 IP 주소만 허용하는 퍼블릭 AWS Transfer Family SFTP 엔드포인트를 생성한 후 EBS 볼륨을 연결합니다." },
      { k: "B", en: "Create an encrypted Amazon EFS file system. Create an AWS Transfer Family SFTP server with a VPC-hosted internet-facing endpoint and restrict it to trusted IP addresses with a security group. Use EFS as the server storage and grant users access.", ko: "암호화된 Amazon EFS 파일 시스템을 생성합니다. 인터넷 연결 액세스가 있는 VPC 호스팅 AWS Transfer Family SFTP 엔드포인트를 만들고 보안 그룹으로 신뢰할 수 있는 IP만 허용합니다. EFS를 서버 스토리지로 사용하고 사용자에게 액세스 권한을 부여합니다." },
      { k: "C", en: "Create an S3 bucket with default encryption. Create a public AWS Transfer Family SFTP endpoint restricted to trusted IP addresses. Use the S3 bucket as storage.", ko: "기본 암호화가 활성화된 S3 버킷을 만들고 신뢰할 수 있는 IP 주소만 허용하는 퍼블릭 AWS Transfer Family SFTP 엔드포인트를 생성하여 S3를 스토리지로 사용합니다." },
      { k: "D", en: "Create an S3 bucket with default encryption. Create a private VPC-hosted AWS Transfer Family SFTP endpoint and attach a security group that permits trusted internet IP addresses. Use the S3 bucket as storage.", ko: "기본 암호화가 활성화된 S3 버킷을 만들고 프라이빗 VPC 호스팅 AWS Transfer Family SFTP 엔드포인트에 신뢰할 수 있는 인터넷 IP를 허용하는 보안 그룹을 연결하여 S3를 스토리지로 사용합니다." }
    ],
    answer: ["B"],
    explanation: { en: "AWS Transfer Family provides a managed SFTP endpoint, and EFS supplies encrypted, highly available shared file storage with file-system permissions and high throughput. A VPC-hosted internet-facing endpoint can be restricted by security group.", ko: "AWS Transfer Family는 관리형 SFTP 엔드포인트를 제공하며 EFS는 파일 시스템 권한을 유지할 수 있는 암호화된 고가용성 공유 스토리지와 높은 처리량을 제공합니다. 인터넷 연결 VPC 엔드포인트는 보안 그룹으로 제한할 수 있습니다." },
    why_wrong: {
      A: { en: "Transfer Family does not use EBS volumes as its storage backend.", ko: "Transfer Family는 EBS 볼륨을 스토리지 백엔드로 사용하지 않습니다." },
      C: { en: "S3 is object storage and does not preserve the POSIX-style file permissions required by this workload as directly as EFS.", ko: "S3는 객체 스토리지이므로 이 워크로드가 요구하는 POSIX 방식 파일 권한을 EFS처럼 직접 유지하지 못합니다." },
      D: { en: "A private endpoint is not internet-facing, so permitting public source addresses in its security group does not make it reachable from the internet.", ko: "프라이빗 엔드포인트는 인터넷 연결 엔드포인트가 아니므로 보안 그룹에 공인 소스 주소를 허용해도 인터넷에서 접근할 수 없습니다." }
    }
  },
  {
    id: "exam9-422", number: 422, tags: ["Amazon ECS", "Amazon SQS", "Auto Scaling", "Machine Learning", "Asynchronous Processing"],
    question: { en: "A company is developing an ML model as a standalone microservice that loads about 1 GB of model data from S3 into memory at startup. Users access it through an asynchronous API and can submit individual requests or batches and specify where results are delivered. Usage is irregular: models can be idle for days or weeks, while others receive thousands of requests at once. Which design meets these requirements?", ko: "회사는 시작 시 Amazon S3에서 약 1GB의 모델 데이터를 메모리에 로드하는 독립 마이크로서비스로 ML 모델을 개발합니다. 사용자는 비동기 API로 개별 요청 또는 요청 배치를 보내고 결과를 받을 위치를 지정합니다. 모델 사용은 불규칙하며 며칠 또는 몇 주간 유휴 상태일 수 있고 한 번에 수천 요청을 받을 수도 있습니다. 어떤 설계를 권장해야 합니까?" },
    options: [
      { k: "A", en: "Send API requests to an NLB and deploy the model in Lambda functions invoked by the NLB.", ko: "API 요청을 NLB로 보내고 NLB가 호출하는 Lambda 함수에 모델을 배포합니다." },
      { k: "B", en: "Send API requests to an ALB. Deploy the model in an ECS service that reads from SQS, and use App Mesh to scale instances based on queue size.", ko: "API 요청을 ALB로 보냅니다. SQS에서 읽는 ECS 서비스에 모델을 배포하고 App Mesh로 대기열 크기에 따라 인스턴스를 확장합니다." },
      { k: "C", en: "Send API requests to SQS and deploy the model in an event-driven Lambda function. Use EC2 Auto Scaling to increase the Lambda function's vCPUs based on queue size.", ko: "API 요청을 SQS로 보내고 SQS 이벤트가 호출하는 Lambda 함수에 모델을 배포합니다. EC2 Auto Scaling으로 대기열 크기에 따라 Lambda vCPU를 늘립니다." },
      { k: "D", en: "Send API requests to SQS. Deploy the model in an ECS service that reads from the queue, and enable ECS Service Auto Scaling for both the cluster capacity and service task count based on queue size.", ko: "API 요청을 SQS 대기열로 보냅니다. 대기열에서 읽는 ECS 서비스에 모델을 배포하고 대기열 크기에 따라 클러스터 용량과 서비스 작업 수 모두에 ECS Auto Scaling을 활성화합니다." }
    ],
    answer: ["D"],
    explanation: { en: "SQS buffers bursty asynchronous work. ECS can keep the large model in memory while processing many jobs, and service plus capacity scaling can scale the worker fleet with queue depth and scale it down during idle periods.", ko: "SQS는 급증하는 비동기 작업을 버퍼링합니다. ECS는 큰 모델을 메모리에 유지하면서 많은 작업을 처리할 수 있고 서비스 및 용량 조정은 대기열 깊이에 따라 워커를 확장하고 유휴 기간에는 축소할 수 있습니다." },
    why_wrong: {
      A: { en: "An NLB-to-Lambda design does not provide the required durable asynchronous buffering and repeatedly loading a large model is inefficient.", ko: "NLB와 Lambda 구성은 필요한 내구성 있는 비동기 버퍼를 제공하지 않으며 큰 모델을 반복해서 로드하는 것은 비효율적입니다." },
      B: { en: "App Mesh provides service networking and does not scale ECS capacity from SQS queue depth.", ko: "App Mesh는 서비스 네트워킹을 제공하며 SQS 대기열 깊이에 따라 ECS 용량을 확장하지 않습니다." },
      C: { en: "EC2 Auto Scaling cannot change Lambda vCPU allocation, and Lambda is a poor fit for repeatedly loading this large in-memory model for burst batches.", ko: "EC2 Auto Scaling은 Lambda의 vCPU를 변경할 수 없으며 큰 인메모리 모델을 반복 로드하는 Lambda는 이 일괄 처리 패턴에 적합하지 않습니다." }
    }
  },
  {
    id: "exam9-423", number: 423, tags: ["IAM", "Identity-based Policy", "AWS Systems Manager", "Choose two"],
    question: { en: "A solutions architect wants to grant permissions by using the following JSON as an identity-based policy: { Statement: [{ Action: [\"ssm:ListDocuments\", \"ssm:GetDocument\"], Effect: \"Allow\", Resource: \"*\", Sid: \"\" }], Version: \"2012-10-17\" }. Which two IAM principals can this policy be attached to? (Choose two.)", ko: "솔루션 설계자는 다음 JSON 텍스트를 자격 증명 기반 정책으로 사용하여 권한을 부여하려고 합니다: { Statement: [{ Action: [\"ssm:ListDocuments\", \"ssm:GetDocument\"], Effect: \"Allow\", Resource: \"*\", Sid: \"\" }], Version: \"2012-10-17\" }. 이 정책을 연결할 수 있는 IAM 보안 주체는 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Role", ko: "역할(Role)" },
      { k: "B", en: "Group", ko: "그룹(Group)" },
      { k: "C", en: "Organization", ko: "조직(Organization)" },
      { k: "D", en: "Amazon ECS resource", ko: "Amazon ECS 리소스(resource)" },
      { k: "E", en: "Amazon EC2 resource", ko: "Amazon EC2 리소스(resource)" }
    ],
    answer: ["A", "B"],
    explanation: { en: "Identity-based policies attach to IAM identities: users, groups, and roles. From the listed choices, a role and a group are valid attachment targets.", ko: "자격 증명 기반 정책은 IAM 사용자, 그룹 및 역할에 연결합니다. 제시된 선택지에서는 역할과 그룹이 올바른 연결 대상입니다." },
    why_wrong: {
      C: { en: "An AWS Organization is not an IAM identity; organization-wide guardrails use SCPs.", ko: "AWS Organization은 IAM 자격 증명이 아니며 조직 전체 제한에는 SCP를 사용합니다." },
      D: { en: "An ECS resource is not an IAM identity to which this identity-based policy can be attached.", ko: "ECS 리소스는 자격 증명 기반 정책을 직접 연결하는 IAM 자격 증명이 아닙니다." },
      E: { en: "An EC2 resource is not an IAM identity; an IAM role can be associated with an instance profile instead.", ko: "EC2 리소스는 IAM 자격 증명이 아니며 대신 인스턴스 프로파일을 통해 IAM 역할을 연결할 수 있습니다." }
    }
  },
  {
    id: "exam9-424", number: 424, tags: ["Amazon EC2", "Reserved Instances", "Spot Instances", "Cost Optimization"],
    question: { en: "A company runs an application on EC2 On-Demand Instances. Frontend nodes must run continuously, while the number of backend nodes varies during the day and each backend job runs only briefly. The company must scale with workload at the lowest cost. Which solution meets these requirements?", ko: "회사는 EC2 온디맨드 인스턴스에서 애플리케이션을 실행합니다. 프런트엔드 노드는 24시간 계속 실행되어야 하고 백엔드 노드는 워크로드에 따라 짧은 시간만 실행되며 하루 동안 수가 달라집니다. 가장 비용 효율적으로 확장하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use Reserved Instances for frontend nodes and AWS Fargate for backend nodes.", ko: "프런트엔드 노드에는 예약 인스턴스를 사용하고 백엔드 노드에는 AWS Fargate를 사용합니다." },
      { k: "B", en: "Use Reserved Instances for frontend nodes and Spot Instances for backend nodes.", ko: "프런트엔드 노드에는 예약 인스턴스를 사용하고 백엔드 노드에는 스팟 인스턴스를 사용합니다." },
      { k: "C", en: "Use Spot Instances for frontend nodes and Reserved Instances for backend nodes.", ko: "프런트엔드 노드에는 스팟 인스턴스를 사용하고 백엔드 노드에는 예약 인스턴스를 사용합니다." },
      { k: "D", en: "Use Spot Instances for frontend nodes and AWS Fargate for backend nodes.", ko: "프런트엔드 노드에는 스팟 인스턴스를 사용하고 백엔드 노드에는 AWS Fargate를 사용합니다." }
    ],
    answer: ["B"],
    explanation: { en: "Reserved Instances reduce cost for the stable 24/7 frontend baseline. Interruptible, short-lived backend work can use deeply discounted Spot Instances and scale with demand.", ko: "예약 인스턴스는 연중무휴 안정적으로 실행되는 프런트엔드의 비용을 줄입니다. 중단을 허용할 수 있는 단기 백엔드 작업은 할인 폭이 큰 스팟 인스턴스를 사용하여 수요에 따라 확장할 수 있습니다." },
    why_wrong: {
      A: { en: "Fargate can run variable container workloads, but Spot Instances are the more cost-effective listed choice for interruptible EC2 backend nodes.", ko: "Fargate도 가변 컨테이너 워크로드를 실행할 수 있지만 중단 가능한 EC2 백엔드 노드에는 스팟 인스턴스가 더 비용 효율적인 선택입니다." },
      C: { en: "Spot is unsuitable for frontend nodes that must run continuously, and reservations do not fit a varying short-lived backend fleet.", ko: "계속 실행되어야 하는 프런트엔드에 스팟은 부적합하며 예약 인스턴스는 가변적인 단기 백엔드에 맞지 않습니다." },
      D: { en: "Spot frontend capacity can be interrupted and therefore does not meet the continuous-availability requirement.", ko: "스팟 프런트엔드 용량은 중단될 수 있어 지속 실행 요구 사항을 충족하지 못합니다." }
    }
  },
  {
    id: "exam9-425", number: 425, tags: ["Amazon EBS", "gp3", "IOPS", "Cost Optimization"],
    question: { en: "A company runs an on-premises workload with high block storage capacity. Daily peak input/output transactions do not exceed 15,000 IOPS. The company wants to migrate to EC2 and provision disk performance independently of storage capacity at the lowest cost. Which EBS volume type meets these requirements?", ko: "회사는 높은 블록 스토리지 용량을 사용하는 온프레미스 워크로드를 실행합니다. 일일 최대 입출력 트랜잭션은 15,000 IOPS를 넘지 않습니다. EC2로 마이그레이션하면서 스토리지 용량과 독립적으로 디스크 성능을 가장 비용 효율적으로 프로비저닝하려 합니다. 어떤 EBS 볼륨 유형이 적합합니까?" },
    options: [
      { k: "A", en: "gp2 volume", ko: "gp2 볼륨" },
      { k: "B", en: "io2 volume", ko: "io2 볼륨" },
      { k: "C", en: "gp3 volume", ko: "gp3 볼륨" },
      { k: "D", en: "io1 volume", ko: "io1 볼륨" }
    ],
    answer: ["C"],
    explanation: { en: "gp3 lets capacity, IOPS, and throughput be provisioned independently and supports the required 15,000 IOPS at lower cost than Provisioned IOPS volumes.", ko: "gp3는 용량, IOPS 및 처리량을 독립적으로 프로비저닝할 수 있고 필요한 15,000 IOPS를 지원하며 프로비저닝된 IOPS 볼륨보다 비용 효율적입니다." },
    why_wrong: {
      A: { en: "gp2 performance is tied to volume size, contrary to the requirement to provision performance independently.", ko: "gp2 성능은 볼륨 크기에 연결되므로 성능을 용량과 독립적으로 프로비저닝한다는 요구와 맞지 않습니다." },
      B: { en: "io2 supports the performance but costs more and is unnecessary for this IOPS level and requirement.", ko: "io2는 성능을 지원하지만 비용이 더 높고 이 IOPS 수준에는 불필요합니다." },
      D: { en: "io1 is a more expensive Provisioned IOPS option and offers no needed advantage here.", ko: "io1은 더 비싼 프로비저닝된 IOPS 옵션이며 여기서는 필요한 이점이 없습니다." }
    }
  },
  {
    id: "exam9-426", number: 426, tags: ["AWS DataSync", "AWS CloudTrail", "Amazon S3", "Migration", "Audit"],
    question: { en: "A company must store frequently changing medical application data. A new regulation requires audit access at every level of stored data. The application is currently on capacity-constrained on-premises infrastructure. A solutions architect must securely migrate existing data to AWS and satisfy the audit requirement. Which solution meets these requirements?", ko: "회사는 자주 변경되는 의료 애플리케이션 데이터를 저장해야 합니다. 새 규정은 저장 데이터의 모든 수준에서 감사 액세스를 요구합니다. 애플리케이션은 스토리지 용량이 부족한 온프레미스 인프라에서 실행됩니다. 기존 데이터를 AWS로 안전하게 마이그레이션하고 감사 요구를 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS DataSync to move existing data to Amazon S3. Use AWS CloudTrail data events to log data access.", ko: "AWS DataSync로 기존 데이터를 Amazon S3로 이동하고 AWS CloudTrail 데이터 이벤트로 데이터 액세스를 기록합니다." },
      { k: "B", en: "Use AWS Snowcone to move existing data to Amazon S3. Use CloudTrail management events to log access.", ko: "AWS Snowcone으로 기존 데이터를 Amazon S3로 이동하고 CloudTrail 관리 이벤트로 액세스를 기록합니다." },
      { k: "C", en: "Use S3 Transfer Acceleration to move existing data to Amazon S3. Use CloudTrail data events to log access.", ko: "S3 Transfer Acceleration으로 기존 데이터를 Amazon S3로 이동하고 CloudTrail 데이터 이벤트로 액세스를 기록합니다." },
      { k: "D", en: "Use AWS Storage Gateway to move existing data to Amazon S3. Use CloudTrail management events to log access.", ko: "AWS Storage Gateway로 기존 데이터를 Amazon S3로 이동하고 CloudTrail 관리 이벤트로 액세스를 기록합니다." }
    ],
    answer: ["A"],
    explanation: { en: "DataSync securely and efficiently transfers large or changing on-premises file data to S3 with integrity verification and encryption. CloudTrail data events record object-level S3 API activity for auditing.", ko: "DataSync는 무결성 확인과 암호화를 통해 대규모 또는 변경되는 온프레미스 파일 데이터를 S3로 안전하고 효율적으로 전송합니다. CloudTrail 데이터 이벤트는 감사를 위해 객체 수준 S3 API 활동을 기록합니다." },
    why_wrong: {
      B: { en: "Snowcone is an offline edge-transfer device, and management events do not record S3 object-level access.", ko: "Snowcone은 오프라인 엣지 전송 장치이며 관리 이벤트는 S3 객체 수준 액세스를 기록하지 않습니다." },
      C: { en: "Transfer Acceleration optimizes uploads through S3 endpoints but is not the managed on-premises file migration and synchronization service required here.", ko: "Transfer Acceleration은 S3 엔드포인트 업로드를 가속하지만 필요한 온프레미스 파일 마이그레이션 및 동기화 서비스가 아닙니다." },
      D: { en: "Storage Gateway provides hybrid storage access rather than a purpose-built bulk migration, and management events omit object-level activity.", ko: "Storage Gateway는 전용 대량 마이그레이션보다 하이브리드 스토리지 액세스를 제공하며 관리 이벤트는 객체 수준 활동을 포함하지 않습니다." }
    }
  },
  {
    id: "exam9-427", number: 427, tags: ["AWS Elastic Beanstalk", "Java", "Apache Tomcat", "High Availability"],
    question: { en: "A solutions architect is implementing a complex Java application backed by a MySQL database. The application must be deployed on Apache Tomcat and be highly available. Which solution meets these requirements?", ko: "솔루션 아키텍트가 MySQL 데이터베이스를 사용하는 복잡한 Java 애플리케이션을 구현합니다. Java 애플리케이션은 Apache Tomcat에 배포되어야 하고 고가용성이어야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Deploy the application to AWS Lambda and configure an API Gateway API to invoke it.", ko: "애플리케이션을 AWS Lambda에 배포하고 Lambda를 호출하는 API Gateway API를 구성합니다." },
      { k: "B", en: "Deploy the application with AWS Elastic Beanstalk. Configure a load-balanced environment and a rolling deployment policy.", ko: "AWS Elastic Beanstalk로 애플리케이션을 배포하고 부하 분산 환경 및 롤링 배포 정책을 구성합니다." },
      { k: "C", en: "Migrate the database to Amazon ElastiCache and configure an ElastiCache security group for application access.", ko: "데이터베이스를 Amazon ElastiCache로 마이그레이션하고 애플리케이션 액세스를 위한 보안 그룹을 구성합니다." },
      { k: "D", en: "Install MySQL and the application on one EC2 instance, create an AMI, and use the AMI in an Auto Scaling launch template.", ko: "하나의 EC2 인스턴스에 MySQL과 애플리케이션을 설치하고 AMI를 만든 다음 Auto Scaling 시작 템플릿에서 사용합니다." }
    ],
    answer: ["B"],
    explanation: { en: "Elastic Beanstalk supports Java applications on Tomcat and can create a load-balanced, Auto Scaling environment. Rolling deployments maintain availability while updating instances.", ko: "Elastic Beanstalk은 Tomcat의 Java 애플리케이션을 지원하고 부하 분산 및 Auto Scaling 환경을 만들 수 있습니다. 롤링 배포는 인스턴스를 업데이트하는 동안 가용성을 유지합니다." },
    why_wrong: {
      A: { en: "Lambda does not provide the required Apache Tomcat application server environment.", ko: "Lambda는 필요한 Apache Tomcat 애플리케이션 서버 환경을 제공하지 않습니다." },
      C: { en: "ElastiCache is an in-memory cache and is not a replacement for the application's relational MySQL database.", ko: "ElastiCache는 인메모리 캐시이며 관계형 MySQL 데이터베이스를 대체하지 않습니다." },
      D: { en: "Bundling a mutable MySQL database into an Auto Scaling AMI does not provide a consistent highly available database.", ko: "변경되는 MySQL 데이터베이스를 Auto Scaling AMI에 포함하면 일관된 고가용성 데이터베이스를 제공할 수 없습니다." }
    }
  },
  {
    id: "exam9-428", number: 428, tags: ["AWS Lambda", "Amazon DynamoDB", "IAM Role", "Least Privilege"],
    question: { en: "A serverless application uses API Gateway, Lambda, and DynamoDB. The Lambda function needs read and write access to a DynamoDB table. Which solution provides this access most securely?", ko: "서버리스 애플리케이션이 API Gateway, Lambda 및 DynamoDB를 사용합니다. Lambda 함수에는 DynamoDB 테이블 읽기 및 쓰기 권한이 필요합니다. 이 액세스를 가장 안전하게 제공하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create an IAM user with table access and store its access key and secret key in Lambda environment variables.", ko: "테이블 액세스 권한이 있는 IAM 사용자를 만들고 액세스 키와 비밀 키를 Lambda 환경 변수에 저장합니다." },
      { k: "B", en: "Create an IAM role that trusts Lambda, attach a policy granting required read and write access to the table, and configure the function to use the role as its execution role.", ko: "Lambda를 신뢰하는 IAM 역할을 만들고 테이블에 필요한 읽기 및 쓰기 권한 정책을 연결한 다음 함수의 실행 역할로 구성합니다." },
      { k: "C", en: "Create an IAM user with table access, store its keys as SecureString parameters in Parameter Store, and retrieve the keys in the function.", ko: "테이블 액세스 권한이 있는 IAM 사용자를 만들고 키를 Parameter Store 보안 문자열로 저장한 후 함수에서 검색합니다." },
      { k: "D", en: "Create an IAM role that trusts DynamoDB, attach a table access policy, and update the Lambda code to connect to the role.", ko: "DynamoDB를 신뢰하는 IAM 역할을 만들고 테이블 액세스 정책을 연결한 후 역할에 연결하도록 Lambda 코드를 업데이트합니다." }
    ],
    answer: ["B"],
    explanation: { en: "A Lambda execution role supplies temporary credentials automatically. Its trust policy names Lambda and its permissions policy can grant only the required DynamoDB operations on the specific table.", ko: "Lambda 실행 역할은 임시 자격 증명을 자동으로 제공합니다. 신뢰 정책은 Lambda를 지정하고 권한 정책은 특정 DynamoDB 테이블에 필요한 작업만 허용할 수 있습니다." },
    why_wrong: {
      A: { en: "Long-lived access keys in environment variables increase credential exposure and rotation risk.", ko: "환경 변수에 장기 액세스 키를 저장하면 자격 증명 노출 및 교체 위험이 커집니다." },
      C: { en: "Parameter Store protects the keys at rest but unnecessary long-lived IAM user credentials remain.", ko: "Parameter Store가 저장된 키를 보호하더라도 불필요한 장기 IAM 사용자 자격 증명이 남습니다." },
      D: { en: "The execution role must trust the Lambda service, and roles are assigned in function configuration rather than assumed through application code.", ko: "실행 역할은 Lambda 서비스를 신뢰해야 하며 역할은 애플리케이션 코드가 아니라 함수 구성에서 지정합니다." }
    }
  },
  {
    id: "exam9-429", number: 429, tags: ["IAM", "Policy Evaluation", "MFA", "Amazon EC2"],
    question: { en: "An IAM group has the only policy that applies to its members. The policy allows ec2:* only when ec2:Region equals us-east-1. A separate explicit Deny blocks ec2:StopInstances and ec2:TerminateInstances when aws:MultiFactorAuthPresent is false. What are the effective permissions for group members?", ko: "IAM 그룹에는 구성원에게 적용되는 유일한 정책이 있습니다. 정책은 ec2:Region이 us-east-1일 때만 ec2:*를 허용합니다. 별도의 명시적 거부는 aws:MultiFactorAuthPresent가 false일 때 ec2:StopInstances 및 ec2:TerminateInstances를 차단합니다. 그룹 구성원의 유효 IAM 권한은 무엇입니까?" },
    options: [
      { k: "A", en: "All EC2 actions in us-east-1 are allowed; statements after an Allow are not evaluated.", ko: "us-east-1 리전의 모든 EC2 작업이 허용되며 Allow 이후의 문은 평가되지 않습니다." },
      { k: "B", en: "Without MFA, all EC2 permissions in us-east-1 are denied.", ko: "MFA로 로그인하지 않으면 us-east-1 리전의 모든 EC2 권한이 거부됩니다." },
      { k: "C", en: "With MFA, StopInstances and TerminateInstances are allowed in all Regions, and all other EC2 actions are allowed everywhere.", ko: "MFA로 로그인하면 모든 리전에서 StopInstances 및 TerminateInstances가 허용되고 다른 모든 EC2 작업도 모든 리전에서 허용됩니다." },
      { k: "D", en: "In us-east-1, StopInstances and TerminateInstances are allowed only with MFA; all other EC2 actions in us-east-1 are allowed.", ko: "us-east-1에서는 MFA로 로그인한 경우에만 StopInstances 및 TerminateInstances가 허용되며 다른 모든 EC2 작업은 허용됩니다." }
    ],
    answer: ["D"],
    explanation: { en: "The regional Allow grants EC2 actions only in us-east-1. The explicit Deny overrides that Allow for stopping and terminating instances when MFA is absent. With MFA, the Deny condition is false, so the regional Allow applies.", ko: "리전 조건 Allow는 us-east-1에서만 EC2 작업을 허용합니다. MFA가 없을 때 명시적 Deny가 StopInstances와 TerminateInstances에 대한 Allow를 재정의합니다. MFA를 사용하면 Deny 조건이 거짓이 되어 리전 Allow가 적용됩니다." },
    why_wrong: {
      A: { en: "IAM evaluates all applicable statements, and an explicit Deny always overrides an Allow.", ko: "IAM은 적용 가능한 모든 문을 평가하며 명시적 Deny는 항상 Allow보다 우선합니다." },
      B: { en: "Without MFA, only StopInstances and TerminateInstances are explicitly denied; other allowed EC2 actions remain available in us-east-1.", ko: "MFA가 없을 때 명시적으로 거부되는 것은 StopInstances와 TerminateInstances뿐이며 다른 EC2 작업은 us-east-1에서 계속 허용됩니다." },
      C: { en: "MFA does not remove the Allow statement's us-east-1 Region condition.", ko: "MFA를 사용해도 Allow 문의 us-east-1 리전 조건은 제거되지 않습니다." }
    }
  },
  {
    id: "exam9-430", number: 430, tags: ["Amazon S3", "AWS Lambda", "S3 Lifecycle", "S3 Glacier", "Choose two"],
    question: { en: "Machine sensors upload CSV files to an S3 bucket. Each CSV must be converted quickly into an image for automated graphical reports. Images become irrelevant after 1 month, but CSV files must be retained for twice-yearly ML training and audits planned weeks in advance. Which two steps meet these requirements most cost-effectively? (Choose two.)", ko: "기계 센서가 CSV 파일을 S3 버킷에 업로드합니다. 각 CSV는 자동 그래픽 보고서를 위해 빠르게 이미지로 변환되어야 합니다. 이미지는 한 달 후 필요 없지만 CSV 파일은 연 2회 ML 학습에 사용하고 감사는 몇 주 전에 계획되므로 보관해야 합니다. 가장 비용 효율적인 두 단계는 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Launch a Spot EC2 instance every hour to download CSV files, create images, and upload the images to S3.", ko: "매시간 스팟 EC2 인스턴스를 시작하여 CSV 파일을 다운로드하고 이미지를 생성한 뒤 S3에 업로드합니다." },
      { k: "B", en: "Create a Lambda function that converts CSV files to images and stores the images in S3. Invoke the function when a CSV file is uploaded.", ko: "CSV 파일을 이미지로 변환하여 S3에 저장하는 Lambda 함수를 만들고 CSV가 업로드될 때 호출합니다." },
      { k: "C", en: "Create lifecycle rules for CSV and image objects. Transition CSV files from S3 Standard to S3 Glacier after 1 day and expire image files after 30 days.", ko: "CSV와 이미지 객체에 수명 주기 규칙을 만듭니다. CSV 파일은 1일 후 S3 Standard에서 S3 Glacier로 전환하고 이미지 파일은 30일 후 만료합니다." },
      { k: "D", en: "Transition CSV files to S3 One Zone-IA after 1 day and expire image files after 30 days.", ko: "CSV 파일을 1일 후 S3 One Zone-IA로 전환하고 이미지 파일은 30일 후 만료합니다." },
      { k: "E", en: "Transition CSV files to S3 Standard-IA after 1 day and store image files in Reduced Redundancy Storage.", ko: "CSV 파일을 1일 후 S3 Standard-IA로 전환하고 이미지 파일은 RRS에 저장합니다." }
    ],
    answer: ["B", "C"],
    explanation: { en: "An S3 event-triggered Lambda function performs the conversion immediately without managing servers. Lifecycle expiration removes images after 30 days, while Glacier provides low-cost durable storage for CSV files that are infrequently retrieved and can be restored ahead of scheduled work.", ko: "S3 이벤트가 호출하는 Lambda 함수는 서버 관리 없이 즉시 변환을 수행합니다. 수명 주기 만료는 30일 후 이미지를 제거하고 Glacier는 드물게 검색하며 예정 작업 전에 복원할 수 있는 CSV 파일을 저렴하고 내구성 있게 보관합니다." },
    why_wrong: {
      A: { en: "Hourly EC2 polling adds delay and server management compared with an event-driven Lambda function.", ko: "시간별 EC2 폴링은 이벤트 기반 Lambda보다 지연과 서버 관리 부담을 늘립니다." },
      D: { en: "One Zone-IA stores data in one AZ and is less resilient than the archival storage appropriate for retained source data.", ko: "One Zone-IA는 한 AZ에만 데이터를 저장하므로 보존해야 하는 원본 데이터용 아카이브 스토리지보다 복원력이 낮습니다." },
      E: { en: "Standard-IA has a 30-day minimum storage duration, making a transition after 1 day ineffective, and RRS is not the appropriate current low-cost class for temporary images.", ko: "Standard-IA는 최소 30일 저장 기간이 있어 1일 후 전환이 비효율적이며 RRS는 임시 이미지에 적합한 현재의 저비용 클래스가 아닙니다." }
    }
  },
  {
    id: "exam9-431", number: 431, tags: ["Amazon ElastiCache for Redis", "Leaderboard", "In-Memory Cache", "High Availability"],
    question: { en: "A company has developed a new multiplayer video game as a three-tier web application with Amazon RDS for MySQL in the database tier. The developer wants to display a near-real-time top-10 leaderboard and support pausing and resuming games while preserving current scores. Which solution meets these requirements?", ko: "회사는 데이터베이스 계층에 MySQL용 Amazon RDS가 있는 3계층 웹 애플리케이션으로 새로운 멀티플레이어 비디오 게임을 개발했습니다. 거의 실시간으로 상위 10개 순위표를 표시하고 현재 점수를 유지하면서 게임을 중지하고 복원하려 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Configure Amazon ElastiCache for Memcached to cache the scores displayed by the web application.", ko: "웹 애플리케이션이 표시할 점수를 캐시하도록 Memcached용 Amazon ElastiCache를 구성합니다." },
      { k: "B", en: "Configure Amazon ElastiCache for Redis to calculate and cache the scores displayed by the web application.", ko: "웹 애플리케이션이 표시할 점수를 계산하고 캐시하도록 Redis용 Amazon ElastiCache를 구성합니다." },
      { k: "C", en: "Place Amazon CloudFront in front of the web application to cache the leaderboard section.", ko: "웹 애플리케이션 앞에 Amazon CloudFront 배포를 배치하여 순위표 섹션을 캐시합니다." },
      { k: "D", en: "Create an RDS for MySQL read replica and calculate the leaderboard by querying the replica.", ko: "MySQL용 Amazon RDS 읽기 전용 복제본을 생성하고 복제본을 쿼리하여 순위표를 계산합니다." }
    ],
    answer: ["B"],
    explanation: { en: "Redis provides sorted sets for efficient real-time ranking and supports persistence and replication, making it suitable for leaderboards and retaining game state.", ko: "Redis는 효율적인 실시간 순위 계산을 위한 정렬된 집합을 제공하고 지속성과 복제를 지원하므로 순위표와 게임 상태 유지에 적합합니다." },
    why_wrong: {
      A: { en: "Memcached lacks Redis sorted sets and persistence, so it is a poor fit for ranking and durable game state.", ko: "Memcached에는 Redis 정렬된 집합과 지속성이 없어 순위 계산과 게임 상태 보존에 적합하지 않습니다." },
      C: { en: "CloudFront caches HTTP responses but does not calculate rapidly changing ranks or preserve mutable game scores.", ko: "CloudFront는 HTTP 응답을 캐시하지만 빠르게 변하는 순위를 계산하거나 변경 가능한 게임 점수를 보존하지 않습니다." },
      D: { en: "A read replica offloads reads but repeated SQL ranking is slower and less purpose-built than Redis sorted sets.", ko: "읽기 복제본은 읽기를 오프로드하지만 반복적인 SQL 순위 계산은 Redis 정렬된 집합보다 느리고 목적에 덜 적합합니다." }
    }
  },
  {
    id: "exam9-432", number: 432, tags: ["Amazon SageMaker", "Amazon QuickSight", "Machine Learning", "Analytics"],
    question: { en: "An ecommerce company wants to build and train ML models to visualize complex scenarios and identify trends in customer data. The architecture team wants to integrate the models with a reporting platform, analyze incremental data, and use the data directly in business intelligence dashboards with minimal operational overhead. Which solution meets these requirements?", ko: "전자상거래 회사는 ML 알고리즘으로 모델을 구축하고 훈련하여 복잡한 시나리오를 시각화하고 고객 데이터 추세를 감지하려 합니다. 아키텍처 팀은 ML 모델을 보고 플랫폼과 통합하여 증분 데이터를 분석하고 비즈니스 인텔리전스 대시보드에서 데이터를 직접 사용하려 합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS Glue ML transforms to build and train the model. Use Amazon OpenSearch Service to visualize the data.", ko: "AWS Glue ML 변환으로 모델을 구축하고 교육하며 Amazon OpenSearch Service로 데이터를 시각화합니다." },
      { k: "B", en: "Use Amazon SageMaker to build and train the model. Use Amazon QuickSight to visualize the data.", ko: "Amazon SageMaker로 모델을 구축하고 교육하며 Amazon QuickSight로 데이터를 시각화합니다." },
      { k: "C", en: "Use a prebuilt ML AMI from AWS Marketplace to build and train the model. Use Amazon OpenSearch Service to visualize the data.", ko: "AWS Marketplace의 사전 구축된 ML AMI로 모델을 구축하고 교육하며 Amazon OpenSearch Service로 데이터를 시각화합니다." },
      { k: "D", en: "Use calculated fields in Amazon QuickSight to build and train the model, and use QuickSight to visualize the data.", ko: "Amazon QuickSight의 계산된 필드로 모델을 구축하고 교육하며 QuickSight로 데이터를 시각화합니다." }
    ],
    answer: ["B"],
    explanation: { en: "SageMaker is a managed service for building, training, and deploying ML models. QuickSight is a managed BI service that creates interactive visualizations and dashboards from model results and business data.", ko: "SageMaker는 ML 모델 구축, 교육 및 배포를 위한 관리형 서비스입니다. QuickSight는 모델 결과와 비즈니스 데이터로 대화형 시각화와 대시보드를 만드는 관리형 BI 서비스입니다." },
    why_wrong: {
      A: { en: "Glue ML transforms target data preparation tasks such as entity matching rather than general-purpose model development.", ko: "Glue ML 변환은 범용 모델 개발보다 엔터티 일치 같은 데이터 준비 작업을 대상으로 합니다." },
      C: { en: "Operating an ML AMI and OpenSearch cluster creates more infrastructure management than the managed services in option B.", ko: "ML AMI와 OpenSearch 클러스터를 운영하면 B의 관리형 서비스보다 인프라 관리 부담이 커집니다." },
      D: { en: "QuickSight calculated fields transform dashboard data; they do not build and train general ML models.", ko: "QuickSight 계산 필드는 대시보드 데이터를 변환하지만 범용 ML 모델을 구축하고 교육하지 않습니다." }
    }
  },
  {
    id: "exam9-433", number: 433, tags: ["AWS Organizations", "SCP", "Tagging", "Governance"],
    question: { en: "A company runs production and non-production workloads in multiple AWS accounts in AWS Organizations. The company must prevent modification of cost-allocation tags. Which solution meets this requirement?", ko: "회사는 AWS Organizations 조직의 여러 AWS 계정에서 프로덕션 및 비프로덕션 워크로드를 실행합니다. 비용 할당 태그가 수정되는 것을 방지해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Create a custom AWS Config rule to prevent tag modification by anyone except authorized principals.", ko: "권한이 부여된 보안 주체 외에는 태그를 수정하지 못하도록 사용자 지정 AWS Config 규칙을 생성합니다." },
      { k: "B", en: "Create a custom AWS CloudTrail trail to prevent tag modification.", ko: "태그 수정을 방지하도록 사용자 지정 AWS CloudTrail 추적을 생성합니다." },
      { k: "C", en: "Create a service control policy (SCP) that denies tag modification except by approved principals.", ko: "승인된 주체 외에는 태그 수정을 거부하도록 서비스 제어 정책(SCP)을 생성합니다." },
      { k: "D", en: "Create custom Amazon CloudWatch Logs to prevent tag modification.", ko: "태그 수정을 방지하도록 사용자 지정 Amazon CloudWatch 로그를 생성합니다." }
    ],
    answer: ["C"],
    explanation: { en: "An SCP centrally defines the maximum permissions for member accounts and can explicitly deny tag mutation APIs unless an approved principal makes the request.", ko: "SCP는 멤버 계정의 최대 권한을 중앙에서 정의하며 승인된 주체가 요청하지 않는 한 태그 변경 API를 명시적으로 거부할 수 있습니다." },
    why_wrong: {
      A: { en: "AWS Config detects and evaluates configuration after changes; it does not prevent an API request from modifying a tag.", ko: "AWS Config는 변경 후 구성을 감지하고 평가하며 태그 수정 API 요청 자체를 막지 않습니다." },
      B: { en: "CloudTrail records API activity but does not enforce authorization.", ko: "CloudTrail은 API 활동을 기록하지만 권한을 강제하지 않습니다." },
      D: { en: "CloudWatch Logs stores and analyzes logs; it cannot block tag modification calls.", ko: "CloudWatch Logs는 로그를 저장하고 분석하지만 태그 수정 호출을 차단하지 못합니다." }
    }
  },
  {
    id: "exam9-434", number: 434, tags: ["Disaster Recovery", "Amazon DynamoDB Global Tables", "Route 53", "Auto Scaling", "Multi-Region"],
    question: { en: "A company hosts an application on EC2 instances in an Auto Scaling group behind a load balancer and uses DynamoDB. The company wants to use the application in another AWS Region with minimal downtime while minimizing recovery startup time. Which solution meets these requirements?", ko: "회사는 로드 밸런서 뒤 Auto Scaling 그룹의 EC2 인스턴스와 DynamoDB 테이블을 사용하여 애플리케이션을 호스팅합니다. 다운타임을 최소화하면서 다른 AWS 리전에서도 애플리케이션을 사용할 수 있고 복구 시작 시간을 최소화하려 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Create an Auto Scaling group and load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Configure DNS failover to the load balancer in the recovery Region.", ko: "재해 복구 리전에 Auto Scaling 그룹과 로드 밸런서를 생성하고 DynamoDB 테이블을 전역 테이블로 구성합니다. 복구 리전 로드 밸런서를 가리키도록 DNS 장애 조치를 구성합니다." },
      { k: "B", en: "Create a CloudFormation template to launch EC2 instances, a load balancer, and a DynamoDB table on demand. Configure DNS failover.", ko: "필요할 때 EC2 인스턴스, 로드 밸런서 및 DynamoDB 테이블을 생성하도록 CloudFormation 템플릿을 만들고 DNS 장애 조치를 구성합니다." },
      { k: "C", en: "Create a CloudFormation template to launch EC2 instances and a load balancer on demand. Configure DynamoDB as a global table and DNS failover.", ko: "필요할 때 EC2 인스턴스와 로드 밸런서를 생성하도록 CloudFormation 템플릿을 만들고 DynamoDB를 전역 테이블로 구성한 후 DNS 장애 조치를 구성합니다." },
      { k: "D", en: "Create an Auto Scaling group and load balancer in the recovery Region and configure DynamoDB as a global table. Use a CloudWatch alarm to invoke Lambda to update Route 53 during a disaster.", ko: "재해 복구 리전에 Auto Scaling 그룹과 로드 밸런서를 만들고 DynamoDB를 전역 테이블로 구성합니다. 재해 시 Lambda가 Route 53을 업데이트하도록 CloudWatch 경보를 생성합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Pre-provisioning the recovery compute and load balancer minimizes startup time. DynamoDB global tables provide active multi-Region data replication, and managed DNS failover redirects users when the primary becomes unhealthy.", ko: "복구 컴퓨팅과 로드 밸런서를 미리 프로비저닝하면 시작 시간이 최소화됩니다. DynamoDB 전역 테이블은 활성 다중 리전 데이터 복제를 제공하고 관리형 DNS 장애 조치는 기본 리전 장애 시 사용자를 전환합니다." },
    why_wrong: {
      B: { en: "Creating all infrastructure and an independent table only after a failure increases recovery time and lacks continuously replicated data.", ko: "장애 후 모든 인프라와 독립 테이블을 만들면 복구 시간이 늘고 지속적으로 복제된 데이터가 없습니다." },
      C: { en: "The global table protects data, but launching compute and the load balancer only after failure increases startup time.", ko: "전역 테이블은 데이터를 보호하지만 장애 후 컴퓨팅과 로드 밸런서를 시작하면 복구 시작 시간이 늘어납니다." },
      D: { en: "A custom alarm and Lambda DNS update adds unnecessary components compared with Route 53 health-check failover.", ko: "사용자 지정 경보와 Lambda DNS 업데이트는 Route 53 상태 확인 장애 조치보다 불필요한 구성 요소를 추가합니다." }
    }
  },
  {
    id: "exam9-435", number: 435, tags: ["AWS Snowball Edge", "AWS DMS", "AWS SCT", "Database Migration", "MySQL"],
    question: { en: "A company must migrate a 20 TB MySQL database from an on-premises data center to AWS within 2 weeks while minimizing downtime. Which solution migrates the database most cost-effectively?", ko: "회사는 20TB MySQL 데이터베이스를 2주 이내에 온프레미스 데이터 센터에서 AWS로 마이그레이션하면서 다운타임을 최소화하려 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Order an AWS Snowball Edge Storage Optimized device. Use AWS SCT and AWS DMS for ongoing replication, send the device to AWS to complete the bulk migration, and continue replication until cutover.", ko: "AWS Snowball Edge Storage Optimized 디바이스를 주문합니다. AWS SCT 및 AWS DMS로 진행 중인 변경 사항을 복제하고 디바이스를 AWS로 보내 대량 마이그레이션을 완료한 뒤 전환까지 복제를 계속합니다." },
      { k: "B", en: "Order an AWS Snowmobile and use AWS SCT and AWS DMS for ongoing replication until the vehicle returns to AWS.", ko: "AWS Snowmobile 차량을 주문하고 차량이 AWS로 돌아올 때까지 AWS SCT와 AWS DMS로 변경 사항을 계속 복제합니다." },
      { k: "C", en: "Order a GPU-equipped Snowball Edge Compute Optimized device and use AWS SCT and AWS DMS for ongoing replication.", ko: "GPU가 장착된 Snowball Edge Compute Optimized 디바이스를 주문하고 AWS SCT와 AWS DMS로 변경 사항을 계속 복제합니다." },
      { k: "D", en: "Order a 1 Gbps AWS Direct Connect connection and use AWS SCT and AWS DMS to migrate and replicate the database.", ko: "1Gbps AWS Direct Connect 연결을 주문하고 AWS SCT와 AWS DMS로 데이터베이스를 마이그레이션하고 복제합니다." }
    ],
    answer: ["A"],
    explanation: { en: "A Storage Optimized Snowball Edge can hold the 20 TB bulk dataset and avoids the lead time and recurring cost of new connectivity. DMS change data capture keeps the target current and minimizes cutover downtime; SCT handles schema conversion when needed.", ko: "Storage Optimized Snowball Edge는 20TB 대량 데이터를 수용하며 새 전용 연결의 준비 시간과 반복 비용을 피합니다. DMS 변경 데이터 캡처는 대상을 최신 상태로 유지하여 전환 다운타임을 최소화하고 필요한 경우 SCT가 스키마를 변환합니다." },
    why_wrong: {
      B: { en: "Snowmobile is designed for exabyte-scale migrations and is excessive and costly for 20 TB.", ko: "Snowmobile은 엑사바이트 규모 마이그레이션용이므로 20TB에는 과도하고 비쌉니다." },
      C: { en: "The Compute Optimized GPU model provides unnecessary compute features and less storage-oriented value than the Storage Optimized device.", ko: "GPU Compute Optimized 모델의 컴퓨팅 기능은 불필요하며 Storage Optimized보다 스토리지 용도에 비효율적입니다." },
      D: { en: "Provisioning a new Direct Connect circuit can exceed the two-week deadline and adds ongoing connection cost.", ko: "새 Direct Connect 회선을 프로비저닝하면 2주 기한을 넘길 수 있고 지속적인 연결 비용이 추가됩니다." }
    }
  },
  {
    id: "exam9-436", number: 436, tags: ["Amazon RDS for PostgreSQL", "Reserved DB Instances", "Vertical Scaling", "Cost Optimization"],
    question: { en: "A company migrated an on-premises PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. A successful product launch increased the database workload. The company wants to handle a larger workload without adding infrastructure and as cost-effectively as possible. Which solution meets these requirements?", ko: "회사는 온프레미스 PostgreSQL 데이터베이스를 Amazon RDS for PostgreSQL DB 인스턴스로 옮겼습니다. 신제품의 성공적인 출시 후 데이터베이스 워크로드가 증가했습니다. 인프라를 추가하지 않고 더 큰 워크로드를 가장 비용 효율적으로 수용하려 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Purchase a Reserved DB Instance for the total workload and scale the RDS for PostgreSQL DB instance to a larger instance class.", ko: "전체 워크로드에 대해 예약 DB 인스턴스를 구매하고 PostgreSQL용 RDS DB 인스턴스를 더 큰 인스턴스 클래스로 확장합니다." },
      { k: "B", en: "Convert the RDS for PostgreSQL DB instance to a Multi-AZ DB instance.", ko: "PostgreSQL용 RDS DB 인스턴스를 다중 AZ DB 인스턴스로 전환합니다." },
      { k: "C", en: "Use a GPU-equipped Snowball Edge Compute Optimized device and DMS to migrate the database.", ko: "GPU가 장착된 Snowball Edge Compute Optimized 디바이스와 DMS로 데이터베이스를 마이그레이션합니다." },
      { k: "D", en: "Convert the RDS for PostgreSQL DB instance to an On-Demand DB instance.", ko: "PostgreSQL용 RDS DB 인스턴스를 온디맨드 DB 인스턴스로 전환합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Scaling to a larger DB instance class adds capacity within the existing managed architecture. A Reserved DB Instance discount reduces the cost of the predictable long-term workload without deploying another database.", ko: "더 큰 DB 인스턴스 클래스로 확장하면 기존 관리형 아키텍처 내에서 용량이 증가합니다. 예약 DB 인스턴스 할인은 다른 데이터베이스를 배포하지 않고 예측 가능한 장기 워크로드 비용을 줄입니다." },
    why_wrong: {
      B: { en: "Multi-AZ improves availability but does not use the standby to scale normal database workload.", ko: "다중 AZ는 가용성을 높이지만 대기 인스턴스로 일반 데이터베이스 워크로드를 확장하지 않습니다." },
      C: { en: "The database is already on RDS, so another migration and an edge device do not address ongoing compute capacity.", ko: "데이터베이스는 이미 RDS에 있으므로 추가 마이그레이션과 엣지 디바이스는 지속적인 컴퓨팅 용량 문제를 해결하지 않습니다." },
      D: { en: "On-Demand is a billing model and does not by itself increase instance capacity or lower predictable long-term cost.", ko: "온디맨드는 결제 모델이며 자체적으로 인스턴스 용량을 늘리거나 예측 가능한 장기 비용을 낮추지 않습니다." }
    }
  },
  {
    id: "exam9-437", number: 437, tags: ["AWS WAF", "Application Load Balancer", "Rate-Based Rule", "DDoS", "Security"],
    question: { en: "An ecommerce website runs on EC2 instances in an Auto Scaling group behind an ALB. A changing set of IP addresses from an unauthorized external system is sending a high rate of requests and causing performance problems. The company must block these requests with minimal impact on legitimate users. What should a solutions architect recommend?", ko: "전자상거래 웹 사이트가 ALB 뒤 Auto Scaling 그룹의 EC2 인스턴스에서 실행됩니다. IP 주소가 바뀌는 불법 외부 시스템의 높은 요청 비율로 성능 문제가 발생하며 잠재적 DDoS 공격이 우려됩니다. 합법적인 사용자에게 미치는 영향을 최소화하면서 요청을 차단하려면 무엇을 권장해야 합니까?" },
    options: [
      { k: "A", en: "Deploy Amazon Inspector and associate it with the ALB.", ko: "Amazon Inspector를 배포하고 ALB와 연결합니다." },
      { k: "B", en: "Deploy AWS WAF, associate it with the ALB, and configure a rate-based rule.", ko: "AWS WAF를 배포하고 ALB와 연결한 뒤 속도 기반 규칙을 구성합니다." },
      { k: "C", en: "Add rules to the network ACL associated with the ALB to block incoming traffic.", ko: "들어오는 트래픽을 차단하도록 ALB와 연결된 네트워크 ACL에 규칙을 추가합니다." },
      { k: "D", en: "Deploy Amazon GuardDuty and enable rate-limiting protection in GuardDuty.", ko: "Amazon GuardDuty를 배포하고 GuardDuty에서 속도 제한 보호를 활성화합니다." }
    ],
    answer: ["B"],
    explanation: { en: "AWS WAF rate-based rules track requests from each source address and automatically block sources that exceed a configured rate. Associating the web ACL with the ALB protects the application layer while allowing normal traffic.", ko: "AWS WAF 속도 기반 규칙은 소스 주소별 요청을 추적하고 설정된 속도를 초과하는 소스를 자동으로 차단합니다. 웹 ACL을 ALB에 연결하면 정상 트래픽을 허용하면서 애플리케이션 계층을 보호합니다." },
    why_wrong: {
      A: { en: "Inspector assesses workload vulnerabilities and does not filter live ALB requests.", ko: "Inspector는 워크로드 취약성을 평가하며 실시간 ALB 요청을 필터링하지 않습니다." },
      C: { en: "Network ACLs use static network rules and cannot adapt to changing source addresses based on request rate.", ko: "네트워크 ACL은 정적 네트워크 규칙을 사용하며 요청 속도에 따라 변하는 소스 주소에 적응하지 못합니다." },
      D: { en: "GuardDuty detects suspicious activity but does not provide a configurable ALB rate-limiting control.", ko: "GuardDuty는 의심스러운 활동을 탐지하지만 ALB에 구성 가능한 속도 제한 제어를 제공하지 않습니다." }
    }
  },
  {
    id: "exam9-438", number: 438, tags: ["Amazon RDS", "DB Snapshot", "AWS KMS", "Cross-Account", "Security"],
    question: { en: "A company needs to share accounting data stored in a private-subnet Amazon RDS DB instance with an external auditor who has a separate AWS account and needs a private copy of the database. What is the most secure way to share the database?", ko: "회사는 프라이빗 서브넷의 Amazon RDS DB 인스턴스에 저장된 회계 데이터를 별도 AWS 계정이 있는 외부 감사인과 공유하려 합니다. 감사인은 자체 데이터베이스 사본이 필요합니다. 가장 안전한 공유 방법은 무엇입니까?" },
    options: [
      { k: "A", en: "Create a read replica and configure IAM database authentication for the auditor.", ko: "읽기 전용 복제본을 만들고 감사자 액세스를 위한 IAM 데이터베이스 인증을 구성합니다." },
      { k: "B", en: "Export the database to a text file in S3, create an IAM user for the auditor, and grant access to the bucket.", ko: "데이터베이스를 텍스트 파일로 내보내 S3에 저장하고 감사자용 IAM 사용자를 만들어 버킷 액세스를 부여합니다." },
      { k: "C", en: "Copy a database snapshot to S3, create an IAM user, and share the user's access keys and object permissions with the auditor.", ko: "데이터베이스 스냅샷을 S3 버킷에 복사하고 IAM 사용자를 만든 후 사용자의 키와 객체 액세스 권한을 감사자와 공유합니다." },
      { k: "D", en: "Create an encrypted DB snapshot, share the snapshot with the auditor's AWS account, and grant that account access to the AWS KMS key.", ko: "암호화된 DB 스냅샷을 생성하여 감사자의 AWS 계정과 공유하고 해당 계정에 AWS KMS 키 액세스를 허용합니다." }
    ],
    answer: ["D"],
    explanation: { en: "Sharing an encrypted RDS snapshot with the auditor's account gives the auditor a restorable private copy without exposing the live database. The customer managed KMS key policy must also permit the auditor's account to decrypt the snapshot.", ko: "암호화된 RDS 스냅샷을 감사자 계정과 공유하면 운영 데이터베이스를 노출하지 않고 감사자가 복원 가능한 비공개 사본을 얻습니다. 고객 관리형 KMS 키 정책도 감사자 계정의 스냅샷 복호화를 허용해야 합니다." },
    why_wrong: {
      A: { en: "A read replica exposes a live database endpoint and does not provide the independent private copy requested.", ko: "읽기 복제본은 운영 데이터베이스 엔드포인트를 노출하며 요청한 독립적인 비공개 사본을 제공하지 않습니다." },
      B: { en: "Creating and sharing IAM user credentials is less secure and a text export does not provide a directly restorable database copy.", ko: "IAM 사용자 자격 증명을 만들어 공유하는 것은 덜 안전하며 텍스트 내보내기는 직접 복원 가능한 데이터베이스 사본이 아닙니다." },
      C: { en: "RDS snapshots are shared through RDS rather than copied as ordinary S3 objects, and access keys should not be shared.", ko: "RDS 스냅샷은 일반 S3 객체가 아니라 RDS를 통해 공유하며 액세스 키를 공유해서는 안 됩니다." }
    }
  },
  {
    id: "exam9-439", number: 439, tags: ["Amazon VPC", "Secondary CIDR", "IPv4", "Subnet", "Operational Excellence"],
    question: { en: "A solutions architect configured a VPC with a small IP address range. The number of EC2 instances is increasing, and the VPC will soon run out of IP addresses. Which solution resolves the problem with the least operational overhead?", ko: "솔루션 아키텍트가 IP 주소 범위가 작은 VPC를 구성했습니다. VPC의 EC2 인스턴스 수가 증가하여 곧 워크로드용 IP 주소가 부족해집니다. 최소한의 운영 오버헤드로 문제를 해결하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Associate an additional IPv4 CIDR block with the VPC, create additional subnets from the new CIDR, and launch new resources in those subnets.", ko: "추가 IPv4 CIDR 블록을 VPC에 연결하고 새 CIDR로 추가 서브넷을 만든 뒤 새 리소스를 해당 서브넷에 생성합니다." },
      { k: "B", en: "Create a second VPC with additional subnets, peer it with the first VPC, and update routes.", ko: "추가 서브넷이 있는 두 번째 VPC를 만들고 첫 번째 VPC와 피어링한 뒤 경로를 업데이트합니다." },
      { k: "C", en: "Create a second VPC and connect both VPCs to an AWS Transit Gateway, then update routes.", ko: "두 번째 VPC를 만들고 두 VPC를 AWS Transit Gateway에 연결한 뒤 경로를 업데이트합니다." },
      { k: "D", en: "Create a second VPC and a Site-to-Site VPN between the two VPCs, then update routes.", ko: "두 번째 VPC를 만들고 두 VPC 간 Site-to-Site VPN을 구성한 뒤 경로를 업데이트합니다." }
    ],
    answer: ["A"],
    explanation: { en: "A VPC can have secondary IPv4 CIDR blocks. Adding one and creating subnets from it expands available addresses without operating another VPC or inter-VPC connectivity.", ko: "VPC에는 보조 IPv4 CIDR 블록을 연결할 수 있습니다. 이를 추가하고 새 서브넷을 만들면 다른 VPC나 VPC 간 연결을 운영하지 않고 주소 공간을 확장할 수 있습니다." },
    why_wrong: {
      B: { en: "A second VPC and peering require additional route, security, and network management.", ko: "두 번째 VPC와 피어링은 추가 경로, 보안 및 네트워크 관리가 필요합니다." },
      C: { en: "Transit Gateway adds unnecessary cost and operational components for expanding a single VPC's address space.", ko: "Transit Gateway는 단일 VPC 주소 공간 확장에 불필요한 비용과 운영 요소를 추가합니다." },
      D: { en: "A VPN between VPCs is complex, adds overhead, and is not intended for this simple address-space expansion.", ko: "VPC 간 VPN은 복잡하고 운영 부담이 있으며 단순 주소 공간 확장을 위한 방법이 아닙니다." }
    }
  },
  {
    id: "exam9-440", number: 440, tags: ["Amazon Aurora MySQL", "RDS Snapshot", "mysqldump", "Amazon S3", "Choose two"],
    question: { en: "During an application test, a company used an Amazon RDS for MySQL DB instance. Before terminating it, a solutions architect created two backups: a mysqldump database dump and a final RDS DB snapshot. The company now wants to create a new DB instance from the most recent backup and has selected Amazon Aurora MySQL-Compatible Edition. Which two solutions create the new DB instance? (Choose two.)", ko: "회사는 애플리케이션 테스트 중 MySQL용 Amazon RDS DB 인스턴스를 사용했습니다. 종료하기 전에 mysqldump 데이터베이스 덤프와 최종 RDS DB 스냅샷이라는 두 백업을 만들었습니다. 이제 가장 최근 백업에서 새 DB 인스턴스를 만들고 Amazon Aurora MySQL 호환 에디션을 사용하려 합니다. 어떤 두 솔루션이 새 DB 인스턴스를 생성합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Restore or migrate the RDS for MySQL DB snapshot directly into an Aurora MySQL DB cluster.", ko: "MySQL용 RDS DB 스냅샷을 Aurora MySQL DB 클러스터로 직접 가져오거나 복원합니다." },
      { k: "B", en: "Upload the RDS DB snapshot to Amazon S3 and then import it into Aurora.", ko: "RDS DB 스냅샷을 Amazon S3에 업로드한 다음 Aurora로 가져옵니다." },
      { k: "C", en: "Upload the mysqldump database dump to Amazon S3 and import the dump into Aurora MySQL.", ko: "mysqldump 데이터베이스 덤프를 Amazon S3에 업로드한 다음 Aurora MySQL로 가져옵니다." },
      { k: "D", en: "Use AWS Database Migration Service to import the RDS DB snapshot into Aurora.", ko: "AWS Database Migration Service를 사용하여 RDS DB 스냅샷을 Aurora로 가져옵니다." },
      { k: "E", en: "Upload the database dump to Amazon S3 and use AWS DMS to import the dump into Aurora.", ko: "데이터베이스 덤프를 Amazon S3에 업로드하고 AWS DMS를 사용하여 Aurora로 가져옵니다." }
    ],
    answer: ["A", "C"],
    explanation: { en: "Aurora MySQL can be created by migrating a compatible RDS for MySQL snapshot directly to an Aurora cluster. Aurora also supports loading a compatible MySQL backup stored in S3, which covers the mysqldump backup path described by the question.", ko: "Aurora MySQL은 호환되는 MySQL용 RDS 스냅샷을 Aurora 클러스터로 직접 마이그레이션하여 생성할 수 있습니다. 또한 S3에 저장된 호환 MySQL 백업을 로드할 수 있으므로 문제의 mysqldump 백업 경로도 사용할 수 있습니다." },
    why_wrong: {
      B: { en: "RDS snapshots are service-managed objects and are not manually uploaded to S3 for Aurora import.", ko: "RDS 스냅샷은 서비스 관리 객체이며 Aurora 가져오기를 위해 S3에 수동 업로드하지 않습니다." },
      D: { en: "DMS migrates data from a running source endpoint; it does not import an RDS snapshot object.", ko: "DMS는 실행 중인 소스 엔드포인트에서 데이터를 마이그레이션하며 RDS 스냅샷 객체를 가져오지 않습니다." },
      E: { en: "DMS does not use a mysqldump file in S3 as an RDS snapshot import workflow.", ko: "DMS는 S3의 mysqldump 파일을 RDS 스냅샷 가져오기 워크플로로 사용하지 않습니다." }
    }
  },
  {
    id: "exam9-441", number: 441, tags: ["Amazon S3", "Amazon CloudFront", "Static Website", "Cost Optimization"],
    question: { en: "A company hosts a multi-tier web application on Amazon Linux EC2 instances in Auto Scaling groups across multiple Availability Zones behind an ALB. When users access large amounts of static web content, the groups launch more On-Demand Instances. The company wants to redesign the application to reduce cost. What should a solutions architect do?", ko: "회사는 여러 가용 영역의 Auto Scaling 그룹에 있는 Amazon Linux EC2 인스턴스에서 ALB 뒤 다중 계층 웹 애플리케이션을 호스팅합니다. 사용자가 대량의 정적 웹 콘텐츠에 액세스하면 Auto Scaling 그룹이 온디맨드 인스턴스를 더 시작합니다. 비용을 줄이도록 애플리케이션을 재설계하려면 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Update the Auto Scaling groups to use Reserved Instances instead of On-Demand Instances.", ko: "온디맨드 인스턴스 대신 예약 인스턴스를 사용하도록 Auto Scaling 그룹을 업데이트합니다." },
      { k: "B", en: "Update the Auto Scaling groups to launch Spot Instances instead of On-Demand Instances.", ko: "온디맨드 인스턴스 대신 스팟 인스턴스를 시작하도록 Auto Scaling 그룹을 업데이트합니다." },
      { k: "C", en: "Host the static content in an Amazon S3 bucket and create an Amazon CloudFront distribution.", ko: "Amazon S3 버킷에서 정적 웹 콘텐츠를 호스팅하고 Amazon CloudFront 배포를 생성합니다." },
      { k: "D", en: "Host the static website content in Lambda functions behind an API Gateway API.", ko: "API Gateway API 뒤의 Lambda 함수에서 정적 웹 사이트 콘텐츠를 호스팅합니다." }
    ],
    answer: ["C"],
    explanation: { en: "S3 provides low-cost durable storage for static assets, and CloudFront caches them at edge locations. This offloads requests from EC2, reduces scaling events, and improves latency.", ko: "S3는 정적 자산을 저렴하고 내구성 있게 저장하고 CloudFront는 엣지 로케이션에 캐시합니다. 이를 통해 EC2 요청과 확장 이벤트를 줄이고 지연 시간을 개선합니다." },
    why_wrong: {
      A: { en: "Reserved Instances are a billing discount and do not remove the unnecessary EC2 work caused by serving static content.", ko: "예약 인스턴스는 결제 할인이며 정적 콘텐츠 제공으로 발생하는 불필요한 EC2 작업을 제거하지 않습니다." },
      B: { en: "Spot can reduce compute cost but remains interruptible and still uses EC2 to serve static assets.", ko: "스팟은 컴퓨팅 비용을 줄일 수 있지만 중단 가능하며 계속 EC2로 정적 자산을 제공합니다." },
      D: { en: "Lambda and API Gateway add unnecessary request-processing cost and complexity for static files.", ko: "Lambda와 API Gateway는 정적 파일에 불필요한 요청 처리 비용과 복잡성을 추가합니다." }
    }
  },
  {
    id: "exam9-442", number: 442, tags: ["AWS Lake Formation", "Cross-Account", "Tag-Based Access Control", "Data Lake", "Security"],
    question: { en: "A company stores several petabytes of data across multiple AWS accounts and manages its data lake with AWS Lake Formation. The data science team needs to securely share selected data from the engineering team's accounts for analytics with minimal operational overhead. Which solution meets these requirements?", ko: "회사는 여러 AWS 계정에 수 페타바이트 데이터를 저장하고 AWS Lake Formation으로 데이터 레이크를 관리합니다. 데이터 과학 팀은 분석을 위해 엔지니어링 팀 계정의 선택된 데이터를 안전하게 공유하려 합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Copy the required data into a shared account and create IAM roles there that trust users in the engineering account.", ko: "필요한 데이터를 공통 계정에 복사하고 엔지니어링 팀 계정 사용자를 신뢰하는 IAM 역할을 생성합니다." },
      { k: "B", en: "Run Lake Formation grant commands in every account that stores data for every engineering user who needs access.", ko: "데이터가 저장된 각 계정에서 액세스가 필요한 엔지니어링 사용자별로 Lake Formation 권한 부여 명령을 실행합니다." },
      { k: "C", en: "Use AWS Data Exchange to privately publish the data to the engineering team's account.", ko: "AWS Data Exchange를 사용하여 필요한 데이터를 엔지니어링 팀 계정에 비공개로 게시합니다." },
      { k: "D", en: "Use Lake Formation tag-based access control to approve and grant cross-account permissions to the required data for the engineering team's account.", ko: "Lake Formation 태그 기반 액세스 제어를 사용하여 엔지니어링 팀 계정에 필요한 데이터의 교차 계정 권한을 승인하고 부여합니다." }
    ],
    answer: ["D"],
    explanation: { en: "Lake Formation tag-based access control grants permissions according to data classifications and scales across many resources and accounts without duplicating data or maintaining many individual grants.", ko: "Lake Formation 태그 기반 액세스 제어는 데이터 분류에 따라 권한을 부여하며 데이터를 복제하거나 많은 개별 권한을 유지하지 않고 여러 리소스와 계정으로 확장됩니다." },
    why_wrong: {
      A: { en: "Copying petabyte-scale data adds storage, transfer, synchronization, and governance overhead.", ko: "페타바이트 규모 데이터를 복사하면 저장, 전송, 동기화 및 거버넌스 부담이 늘어납니다." },
      B: { en: "Maintaining per-user grants across every account creates substantial operational overhead.", ko: "모든 계정에서 사용자별 권한을 유지하면 운영 오버헤드가 큽니다." },
      C: { en: "Data Exchange is intended for publishing and subscribing to datasets, not fine-grained internal Lake Formation governance.", ko: "Data Exchange는 데이터 세트 게시와 구독을 위한 서비스이며 내부 Lake Formation 세부 거버넌스에 적합하지 않습니다." }
    }
  },
  {
    id: "exam9-443", number: 443, tags: ["Amazon S3", "S3 Transfer Acceleration", "Global Users", "Data Transfer"],
    question: { en: "A company wants to host a scalable web application on AWS for users around the world. Users upload and download unique data objects up to gigabytes in size. The development team wants a cost-effective solution that minimizes upload and download wait time and maximizes transfer performance. What should a solutions architect do?", ko: "회사는 전 세계 사용자가 액세스하는 확장 가능한 웹 애플리케이션을 AWS에서 호스팅하려 합니다. 사용자는 최대 기가바이트 크기의 고유한 데이터를 업로드하고 다운로드합니다. 업로드 및 다운로드 대기 시간을 줄이고 성능을 높이는 비용 효율적인 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Host the application data in Amazon S3 and enable S3 Transfer Acceleration.", ko: "Amazon S3에 애플리케이션 데이터를 호스팅하고 S3 Transfer Acceleration을 활성화합니다." },
      { k: "B", en: "Host the application in Amazon S3 and use Cache-Control headers.", ko: "Amazon S3에 애플리케이션을 호스팅하고 Cache-Control 헤더를 사용합니다." },
      { k: "C", en: "Host the application on EC2 with Auto Scaling and Amazon CloudFront.", ko: "Auto Scaling 및 Amazon CloudFront와 함께 EC2에서 애플리케이션을 호스팅합니다." },
      { k: "D", en: "Host the application on EC2 with Auto Scaling and Amazon ElastiCache.", ko: "Auto Scaling 및 Amazon ElastiCache와 함께 EC2에서 애플리케이션을 호스팅합니다." }
    ],
    answer: ["A"],
    explanation: { en: "S3 Transfer Acceleration routes transfers through globally distributed edge locations and the AWS backbone, improving long-distance uploads and downloads of large unique objects without operating servers.", ko: "S3 Transfer Acceleration은 전 세계 엣지 로케이션과 AWS 백본을 통해 전송을 라우팅하여 서버 운영 없이 대용량 고유 객체의 장거리 업로드와 다운로드 성능을 개선합니다." },
    why_wrong: {
      B: { en: "Cache headers help repeated downloads of cacheable objects but do not accelerate uploads or unique-object transfers.", ko: "캐시 헤더는 반복 다운로드에 도움이 되지만 업로드나 고유 객체 전송을 가속하지 않습니다." },
      C: { en: "EC2 adds operational cost, and CloudFront is less suitable for accelerating user uploads of unique data than S3 Transfer Acceleration.", ko: "EC2는 운영 비용을 추가하며 CloudFront는 고유 데이터 업로드 가속에 S3 Transfer Acceleration보다 덜 적합합니다." },
      D: { en: "ElastiCache caches application data in memory and does not accelerate global transfer of large objects.", ko: "ElastiCache는 애플리케이션 데이터를 메모리에 캐시하며 대용량 객체의 글로벌 전송을 가속하지 않습니다." }
    }
  },
  {
    id: "exam9-444", number: 444, tags: ["Amazon RDS", "Multi-AZ", "EC2 Auto Scaling", "Application Load Balancer", "High Availability"],
    question: { en: "An application consists of one RDS DB instance and two manually provisioned EC2 web servers in one Availability Zone. An employee recently deleted the DB instance, making the application unavailable for 24 hours. The company wants to maximize the overall stability of the infrastructure. What should a solutions architect do?", ko: "애플리케이션은 하나의 RDS DB 인스턴스와 단일 가용 영역에 수동 프로비저닝된 EC2 웹 서버 두 대로 구성됩니다. 직원이 최근 DB 인스턴스를 삭제하여 24시간 애플리케이션을 사용할 수 없었습니다. 인프라의 전반적인 안정성을 극대화하려면 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Delete one EC2 instance, enable termination protection on the other, make the DB Multi-AZ, and enable deletion protection.", ko: "EC2 인스턴스 하나를 삭제하고 다른 인스턴스에서 종료 방지를 활성화하며 DB를 다중 AZ로 전환하고 삭제 방지를 활성화합니다." },
      { k: "B", en: "Make the DB instance Multi-AZ and enable deletion protection. Place EC2 instances behind an ALB and run them in an Auto Scaling group across multiple Availability Zones.", ko: "DB 인스턴스를 다중 AZ로 업데이트하고 삭제 방지를 활성화합니다. EC2 인스턴스를 ALB 뒤에 배치하고 여러 가용 영역의 Auto Scaling 그룹에서 실행합니다." },
      { k: "C", en: "Create another DB instance with API Gateway and Lambda, and have Lambda write data to both DB instances.", ko: "API Gateway 및 Lambda와 함께 추가 DB 인스턴스를 만들고 Lambda가 두 DB 인스턴스에 데이터를 쓰도록 합니다." },
      { k: "D", en: "Use an EC2 Auto Scaling group across multiple Availability Zones with Spot Instances and CloudWatch alarms. Make the DB Multi-AZ and enable deletion protection.", ko: "여러 가용 영역의 EC2 Auto Scaling 그룹에서 스팟 인스턴스를 사용하고 CloudWatch 경보를 설정합니다. DB를 다중 AZ로 전환하고 삭제 방지를 활성화합니다." }
    ],
    answer: ["B"],
    explanation: { en: "RDS Multi-AZ protects against infrastructure failure, while deletion protection prevents accidental deletion. An ALB and a multi-AZ Auto Scaling group remove the web tier's single-AZ and manually managed failure points.", ko: "RDS 다중 AZ는 인프라 장애를 보호하고 삭제 방지는 실수로 인한 삭제를 막습니다. ALB와 다중 AZ Auto Scaling 그룹은 웹 계층의 단일 AZ 및 수동 관리 장애 지점을 제거합니다." },
    why_wrong: {
      A: { en: "Reducing the web tier to one EC2 instance creates a larger single point of failure.", ko: "웹 계층을 EC2 한 대로 줄이면 더 큰 단일 장애 지점이 생깁니다." },
      C: { en: "Custom dual writes are complex and do not provide managed failover or consistent replication.", ko: "사용자 지정 이중 쓰기는 복잡하며 관리형 장애 조치나 일관된 복제를 제공하지 않습니다." },
      D: { en: "Spot Instances can be interrupted and are inappropriate when maximizing stability is the primary goal.", ko: "스팟 인스턴스는 중단될 수 있어 안정성 극대화가 목표일 때 적합하지 않습니다." }
    }
  },
  {
    id: "exam9-445", number: 445, tags: ["AWS DataSync", "AWS Direct Connect", "Amazon S3", "Migration", "NAS"],
    question: { en: "A company stores 700 TB on a large NAS system in its data center and has a 10 Gbps Direct Connect connection. It must move the data to the cloud within 90 days without interruption and must continue accessing and updating data during migration. Which solution meets these requirements?", ko: "회사는 데이터 센터의 대규모 NAS 시스템에 700TB 데이터를 저장하고 10Gbps Direct Connect 연결을 사용합니다. 90일 이내에 중단 없이 클라우드로 데이터를 옮기고 이전 중에도 데이터에 계속 액세스하고 업데이트해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Deploy an AWS DataSync agent in the data center and start a transfer task to an Amazon S3 bucket.", ko: "회사 데이터 센터에 AWS DataSync 에이전트를 배포하고 Amazon S3 버킷으로 전송하는 작업을 시작합니다." },
      { k: "B", en: "Back up the data to Snowball Edge Storage Optimized devices, ship them to AWS, and mount the destination S3 bucket on the on-premises file system.", ko: "데이터를 Snowball Edge Storage Optimized 디바이스에 백업하여 AWS로 배송하고 온프레미스 파일 시스템에 대상 S3 버킷을 탑재합니다." },
      { k: "C", en: "Use DataSync to copy data directly from local storage to S3 through the Direct Connect connection.", ko: "DataSync를 사용하여 Direct Connect 연결을 통해 로컬 스토리지에서 지정된 S3 버킷으로 데이터를 직접 복사합니다." },
      { k: "D", en: "Back up the data to tape, ship the tapes to AWS, and mount the destination S3 bucket on the file system.", ko: "데이터를 테이프에 백업하여 AWS로 배송하고 온프레미스 파일 시스템에 대상 S3 버킷을 탑재합니다." }
    ],
    answer: ["A"],
    explanation: { en: "A DataSync agent reads the NAS protocol, performs an initial bulk transfer, and efficiently copies incremental changes while users continue working. DataSync can use private connectivity such as Direct Connect to reach AWS.", ko: "DataSync 에이전트는 NAS 프로토콜에서 데이터를 읽고 초기 대량 전송 후 사용자가 계속 작업하는 동안 증분 변경을 효율적으로 복사합니다. DataSync는 Direct Connect 같은 프라이빗 연결을 사용할 수 있습니다." },
    why_wrong: {
      B: { en: "Offline devices do not continuously synchronize updates made during shipment and S3 cannot simply be mounted as described.", ko: "오프라인 디바이스는 배송 중 변경 내용을 계속 동기화하지 못하며 설명처럼 S3를 단순히 마운트할 수 없습니다." },
      C: { en: "DataSync requires an agent near the on-premises storage; Direct Connect alone does not let the service read local NAS data directly.", ko: "DataSync에는 온프레미스 스토리지 근처의 에이전트가 필요하며 Direct Connect만으로 서비스가 로컬 NAS 데이터를 직접 읽을 수 없습니다." },
      D: { en: "Tape shipment is offline, cannot track ongoing changes, and provides no direct S3 mounting workflow.", ko: "테이프 배송은 오프라인이며 진행 중인 변경을 추적할 수 없고 직접 S3 마운트 워크플로도 없습니다." }
    }
  },
  {
    id: "exam9-446", number: 446, tags: ["Amazon S3", "S3 Object Lock", "Compliance Mode", "S3 Batch Operations", "Retention"],
    question: { en: "A company stores PDF data in an S3 bucket. A legal requirement states that all new and existing data must be retained in S3 for 7 years. Which solution meets the requirement with the least operational overhead?", ko: "회사는 PDF 형식 데이터를 Amazon S3 버킷에 저장합니다. 모든 신규 및 기존 데이터를 S3에 7년 동안 보관해야 하는 법적 요구 사항이 있습니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Enable versioning, configure lifecycle deletion after 7 years, and configure MFA Delete for all objects.", ko: "S3 버전 관리를 켜고 7년 후 데이터를 삭제하는 수명 주기를 구성하며 모든 객체에 MFA 삭제를 구성합니다." },
      { k: "B", en: "Enable S3 Object Lock in governance mode with a 7-year retention period and recopy every existing object.", ko: "거버넌스 보존 모드로 S3 객체 잠금을 켜고 7년 보존 기간을 설정한 뒤 모든 기존 객체를 다시 복사합니다." },
      { k: "C", en: "Enable S3 Object Lock in compliance mode with a 7-year retention period and recopy every existing object.", ko: "규정 준수 보존 모드로 S3 객체 잠금을 켜고 7년 보존 기간을 설정한 뒤 모든 기존 객체를 다시 복사합니다." },
      { k: "D", en: "Enable S3 Object Lock in compliance mode with a 7-year retention period and use S3 Batch Operations to apply retention to existing objects.", ko: "규정 준수 보존 모드로 S3 객체 잠금을 켜고 7년 보존 기간을 설정합니다. S3 배치 작업으로 기존 데이터에 규정에 맞는 보존을 적용합니다." }
    ],
    answer: ["D"],
    explanation: { en: "Compliance-mode Object Lock provides WORM retention that cannot be shortened or bypassed, satisfying legal retention. S3 Batch Operations applies retention to existing objects at scale without manually copying each one.", ko: "규정 준수 모드 객체 잠금은 기간을 줄이거나 우회할 수 없는 WORM 보존을 제공하여 법적 요구를 충족합니다. S3 배치 작업은 각 객체를 수동 복사하지 않고 기존 객체에 대규모로 보존을 적용합니다." },
    why_wrong: {
      A: { en: "Lifecycle and MFA Delete do not provide immutable WORM retention for the full legal period.", ko: "수명 주기와 MFA 삭제는 법정 기간 전체에 대한 변경 불가능한 WORM 보존을 제공하지 않습니다." },
      B: { en: "Governance mode can be bypassed by principals with special permissions and manually recopying objects adds overhead.", ko: "거버넌스 모드는 특별 권한으로 우회할 수 있고 객체를 수동 재복사하면 부담이 큽니다." },
      C: { en: "Compliance mode is correct, but manually recopying all existing objects creates more overhead than Batch Operations.", ko: "규정 준수 모드는 맞지만 기존 객체를 모두 수동 재복사하면 배치 작업보다 운영 부담이 큽니다." }
    }
  },
  {
    id: "exam9-447", number: 447, tags: ["Amazon Route 53", "Active-Active Failover", "AWS Lambda", "API Gateway", "Multi-Region"],
    question: { en: "A stateless web application runs in Lambda functions invoked by API Gateway. The company plans to deploy the application in multiple AWS Regions for regional failover. How should traffic be routed across Regions?", ko: "상태 비저장 웹 애플리케이션이 API Gateway에서 호출하는 Lambda 함수에서 실행됩니다. 회사는 리전 장애 조치를 위해 여러 AWS 리전에 애플리케이션을 배포하려 합니다. 트래픽을 여러 리전으로 라우팅하려면 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Create Route 53 health checks for each Region and use an active-active failover configuration.", ko: "각 리전에 Route 53 상태 확인을 생성하고 활성-활성 장애 조치 구성을 사용합니다." },
      { k: "B", en: "Create a CloudFront distribution with an origin for each Region and use CloudFront health checks to route traffic.", ko: "각 리전의 오리진을 사용하여 CloudFront 배포를 만들고 CloudFront 상태 확인으로 트래픽을 라우팅합니다." },
      { k: "C", en: "Create a transit gateway, connect it to each Regional API Gateway endpoint, and route requests through it.", ko: "전송 게이트웨이를 만들고 각 리전의 API Gateway 엔드포인트에 연결하여 요청을 라우팅합니다." },
      { k: "D", en: "Create an ALB in the primary Region and configure target groups that point to API Gateway hostnames in each Region.", ko: "기본 리전에 ALB를 만들고 각 리전의 API Gateway 엔드포인트 호스트 이름을 가리키는 대상 그룹을 구성합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Route 53 can health-check regional API endpoints and use active-active routing to send users to healthy deployments while all Regions serve traffic.", ko: "Route 53은 리전 API 엔드포인트의 상태를 확인하고 활성-활성 라우팅으로 모든 리전이 트래픽을 처리하면서 사용자를 정상 배포로 보낼 수 있습니다." },
    why_wrong: {
      B: { en: "CloudFront does not provide the described native multi-origin health-based routing configuration.", ko: "CloudFront는 설명된 기본 다중 오리진 상태 기반 라우팅 구성을 제공하지 않습니다." },
      C: { en: "Transit Gateway connects VPC networks and does not front public Regional API Gateway endpoints for global DNS routing.", ko: "Transit Gateway는 VPC 네트워크를 연결하며 글로벌 DNS 라우팅을 위해 퍼블릭 리전 API Gateway 엔드포인트 앞에 배치하지 않습니다." },
      D: { en: "ALB target groups cannot use arbitrary API Gateway hostnames as cross-Region targets.", ko: "ALB 대상 그룹은 임의의 API Gateway 호스트 이름을 교차 리전 대상으로 사용할 수 없습니다." }
    }
  },
  {
    id: "exam9-448", number: 448, tags: ["AWS Site-to-Site VPN", "Customer Gateway", "VPN Redundancy", "Direct Connect", "High Availability"],
    question: { en: "A company has Management and Production VPCs. The Management VPC connects by Site-to-Site VPN to a single on-premises customer gateway device. The Production VPC uses a virtual private gateway with two Direct Connect connections. The VPCs communicate through one VPC peering connection. What should a solutions architect do to reduce the architecture's single point of failure?", ko: "회사에는 Management 및 Production VPC가 있습니다. 관리 VPC는 Site-to-Site VPN으로 온프레미스 단일 고객 게이트웨이 디바이스에 연결됩니다. 프로덕션 VPC는 두 Direct Connect 연결이 있는 가상 프라이빗 게이트웨이를 사용합니다. 두 VPC는 하나의 VPC 피어링으로 통신합니다. 단일 장애 지점을 줄이려면 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Add a VPN connection between the Management and Production VPCs.", ko: "관리 VPC와 프로덕션 VPC 사이에 VPN 연결을 추가합니다." },
      { k: "B", en: "Add a second virtual private gateway and connect it to the Management VPC.", ko: "두 번째 가상 프라이빗 게이트웨이를 추가하고 관리 VPC에 연결합니다." },
      { k: "C", en: "Add a second VPN connection to the Management VPC from a second on-premises customer gateway device.", ko: "두 번째 온프레미스 고객 게이트웨이 디바이스에서 관리 VPC로 두 번째 VPN 연결을 추가합니다." },
      { k: "D", en: "Add a second VPC peering connection between the Management and Production VPCs.", ko: "관리 VPC와 프로덕션 VPC 간에 두 번째 VPC 피어링 연결을 추가합니다." }
    ],
    answer: ["C"],
    explanation: { en: "A second customer gateway device and VPN connection remove the on-premises device and VPN termination as a single failure point. Each Site-to-Site VPN already provides two tunnels, and independent customer gateway hardware adds endpoint redundancy.", ko: "두 번째 고객 게이트웨이 디바이스와 VPN 연결은 온프레미스 디바이스 및 VPN 종단의 단일 장애 지점을 제거합니다. 각 Site-to-Site VPN은 이미 두 터널을 제공하며 독립적인 고객 게이트웨이 하드웨어가 엔드포인트 중복성을 추가합니다." },
    why_wrong: {
      A: { en: "A VPN between the VPCs does not protect the single on-premises customer gateway device.", ko: "VPC 간 VPN은 단일 온프레미스 고객 게이트웨이 디바이스를 보호하지 않습니다." },
      B: { en: "A VPC cannot use two virtual private gateways simultaneously for this purpose, and the on-premises device remains singular.", ko: "이 용도로 VPC가 두 가상 프라이빗 게이트웨이를 동시에 사용할 수 없으며 온프레미스 디바이스도 여전히 하나입니다." },
      D: { en: "Only one peering connection can exist between the same two VPCs, and peering is not the identified on-premises failure point.", ko: "동일한 두 VPC 사이에는 피어링 연결 하나만 존재할 수 있으며 피어링은 확인된 온프레미스 장애 지점이 아닙니다." }
    }
  },
  {
    id: "exam9-449", number: 449, tags: ["Amazon RDS Custom for Oracle", "Oracle", "Migration", "Third-Party Software"],
    question: { en: "A company runs an application on an Oracle database and needs privileged access for third-party database functionality. Limited resources for database, backup, and data-center management require a rapid and cost-effective migration to AWS. Which solution helps the company migrate?", ko: "회사는 Oracle 데이터베이스에서 애플리케이션을 실행하며 권한 있는 액세스가 필요한 타사 데이터베이스 기능을 사용합니다. 데이터베이스, 백업 관리 및 데이터 센터 유지 관리 리소스가 제한되어 AWS로 신속하고 비용 효율적으로 마이그레이션하려 합니다. 어떤 솔루션이 도움이 됩니까?" },
    options: [
      { k: "A", en: "Migrate to Amazon RDS for Oracle and replace the third-party functionality with cloud services.", ko: "Oracle용 Amazon RDS로 마이그레이션하고 타사 기능을 클라우드 서비스로 대체합니다." },
      { k: "B", en: "Migrate to Amazon RDS Custom for Oracle and customize the database environment to support the third-party functionality.", ko: "Amazon RDS Custom for Oracle로 마이그레이션하고 타사 기능을 지원하도록 데이터베이스 환경을 사용자 지정합니다." },
      { k: "C", en: "Migrate to an Oracle EC2 AMI and customize the database environment for the third-party functionality.", ko: "Oracle용 Amazon EC2 AMI로 마이그레이션하고 타사 기능을 지원하도록 데이터베이스 환경을 사용자 지정합니다." },
      { k: "D", en: "Rewrite the application to remove Oracle APEX dependencies and migrate to Amazon RDS for PostgreSQL.", ko: "Oracle APEX 종속성을 제거하도록 애플리케이션을 다시 작성하고 PostgreSQL용 Amazon RDS로 마이그레이션합니다." }
    ],
    answer: ["B"],
    explanation: { en: "RDS Custom for Oracle provides managed backups, patching, and monitoring while allowing privileged access to the operating system and database environment for applications requiring custom or third-party components.", ko: "RDS Custom for Oracle은 관리형 백업, 패치 및 모니터링을 제공하면서 사용자 지정 또는 타사 구성 요소가 필요한 애플리케이션을 위해 운영 체제와 데이터베이스 환경에 대한 권한 있는 액세스를 허용합니다." },
    why_wrong: {
      A: { en: "Standard RDS for Oracle restricts host-level customization and may not support the required privileged third-party feature.", ko: "표준 RDS for Oracle은 호스트 수준 사용자 지정을 제한하므로 필요한 권한 있는 타사 기능을 지원하지 못할 수 있습니다." },
      C: { en: "Oracle on EC2 permits customization but leaves database backups, patching, and infrastructure management to the company.", ko: "EC2의 Oracle은 사용자 지정을 허용하지만 데이터베이스 백업, 패치 및 인프라 관리를 회사가 담당해야 합니다." },
      D: { en: "Rewriting and changing database engines is not a rapid migration and introduces high effort and risk.", ko: "애플리케이션을 다시 작성하고 데이터베이스 엔진을 바꾸는 것은 신속한 마이그레이션이 아니며 노력과 위험이 큽니다." }
    }
  },
  {
    id: "exam9-450", number: 450, tags: ["Three-Tier Architecture", "EC2 Auto Scaling", "Elastic Load Balancing", "Amazon RDS Multi-AZ", "Choose three"],
    question: { en: "A company has a three-tier web application on one server and wants to migrate it to AWS while aligning with the AWS Well-Architected Framework and AWS best practices for security, scalability, and resilience. Which three solutions meet these requirements? (Choose three.)", ko: "회사는 단일 서버에 있는 3계층 웹 애플리케이션을 AWS로 마이그레이션하려 합니다. AWS Well-Architected 프레임워크와 보안, 확장성 및 복원력 모범 사례에 맞는 솔루션 조합은 무엇입니까? (3개 선택)" },
    options: [
      { k: "A", en: "Use the existing architecture on EC2 instances in private subnets across two AZs and protect them with security groups and network ACLs.", ko: "기존 아키텍처를 사용해 두 AZ의 프라이빗 서브넷에 있는 EC2 인스턴스에서 애플리케이션을 호스팅하고 보안 그룹 및 네트워크 ACL로 보호합니다." },
      { k: "B", en: "Control database access with security groups and network ACLs, and deploy one RDS database in a private subnet.", ko: "보안 그룹과 네트워크 ACL로 데이터베이스 계층 액세스를 제어하고 프라이빗 서브넷에 단일 RDS 데이터베이스를 배포합니다." },
      { k: "C", en: "Refactor into web, application, and database tiers across two AZs. Use Auto Scaling groups for the web and application tiers in private subnets.", ko: "두 AZ에 걸쳐 웹, 애플리케이션 및 데이터베이스 계층으로 리팩터링합니다. 웹 및 애플리케이션 계층은 프라이빗 서브넷의 Auto Scaling 그룹에서 호스팅합니다." },
      { k: "D", en: "Use a single RDS database and allow database access only from the application-tier security group.", ko: "단일 RDS 데이터베이스를 사용하고 애플리케이션 계층 보안 그룹에서만 데이터베이스 액세스를 허용합니다." },
      { k: "E", en: "Use an Elastic Load Balancer in front of the web tier and security group referencing between tiers to control access.", ko: "웹 계층 앞에 Elastic Load Balancer를 사용하고 계층 간 보안 그룹 참조로 액세스를 제어합니다." },
      { k: "F", en: "Use an Amazon RDS Multi-AZ deployment in private subnets and allow database access only from the application-tier security group.", ko: "프라이빗 서브넷에서 Amazon RDS 다중 AZ 배포를 사용하고 애플리케이션 계층 보안 그룹에서만 데이터베이스 액세스를 허용합니다." }
    ],
    answer: ["C", "E", "F"],
    explanation: { en: "A properly separated multi-AZ architecture uses Auto Scaling for stateless web and application tiers, an ELB to distribute traffic, security-group references for least-privilege tier access, and RDS Multi-AZ for managed database resilience.", ko: "올바르게 분리된 다중 AZ 아키텍처는 상태 비저장 웹 및 애플리케이션 계층에 Auto Scaling을 사용하고 ELB로 트래픽을 분산하며 최소 권한 계층 액세스에 보안 그룹 참조를 사용하고 RDS 다중 AZ로 데이터베이스 복원력을 제공합니다." },
    why_wrong: {
      A: { en: "Keeping the monolithic existing architecture does not independently scale or isolate the three tiers.", ko: "기존 단일 아키텍처를 유지하면 세 계층을 독립적으로 확장하거나 격리할 수 없습니다." },
      B: { en: "A single-AZ RDS database remains a database failure point, and network ACLs are not required for tier-to-tier identity-based rules.", ko: "단일 AZ RDS 데이터베이스는 장애 지점으로 남으며 계층 간 식별 기반 규칙에는 네트워크 ACL이 필요하지 않습니다." },
      D: { en: "Security group restriction is useful, but a single RDS instance does not meet the resilience requirement.", ko: "보안 그룹 제한은 유용하지만 단일 RDS 인스턴스는 복원력 요구 사항을 충족하지 않습니다." }
    }
  }
  ]
});
