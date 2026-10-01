/* Exam 6
 * ExamTopics Topic 1 / Exam F의 251~300번
 * 현재 수록 범위: 251~300번
 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam6",
  title: "Exam 6",
  note: "Topic 1 · #251–300",
  questions: [
  {
    id: "exam6-251", number: 251, tags: ["NAT Gateway", "Private Subnet", "Internet Gateway", "Networking"],
    question: {
      en: "An Amazon EC2 instance is located in a private subnet in a new VPC. This subnet does not have outbound internet access, but the EC2 instance needs the ability to download monthly security updates from an outside vendor.\nWhat should a solutions architect do to meet these requirements?",
      ko: "새 VPC의 프라이빗 서브넷에 있는 EC2 인스턴스는 아웃바운드 인터넷 액세스가 없지만 외부 공급업체로부터 매월 보안 업데이트를 다운로드해야 합니다.\n어떤 조치를 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an internet gateway, and attach it to the VPC. Configure the private subnet route table to use the internet gateway as the default route.", ko: "인터넷 게이트웨이를 VPC에 연결하고 프라이빗 서브넷의 기본 경로로 설정합니다." },
      { k: "B", en: "Create a NAT gateway, and place it in a public subnet. Configure the private subnet route table to use the NAT gateway as the default route.", ko: "공용 서브넷에 NAT 게이트웨이를 만들고 프라이빗 서브넷의 기본 경로로 설정합니다." },
      { k: "C", en: "Create a NAT instance, and place it in the same subnet where the EC2 instance is located. Configure the private subnet route table to use the NAT instance as the default route.", ko: "EC2와 같은 프라이빗 서브넷에 NAT 인스턴스를 만들고 기본 경로로 설정합니다." },
      { k: "D", en: "Create an internet gateway, and attach it to the VPC. Create a NAT instance, and place it in the same subnet where the EC2 instance is located. Configure the private subnet route table to use the internet gateway as the default route.", ko: "인터넷 게이트웨이와 NAT 인스턴스를 만들되 NAT 인스턴스를 EC2와 같은 서브넷에 두고 프라이빗 서브넷의 기본 경로를 인터넷 게이트웨이로 설정합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "공용 서브넷의 NAT 게이트웨이는 프라이빗 EC2가 외부로 연결을 시작할 수 있게 하면서 인터넷에서 EC2로 직접 들어오는 연결은 차단합니다.", en: "A NAT gateway in a public subnet lets the private EC2 instance initiate outbound internet connections without accepting direct inbound internet traffic." },
    why_wrong: {
      A: { ko: "프라이빗 인스턴스는 공용 IP가 없으므로 인터넷 게이트웨이 경로만으로 인터넷에 접근할 수 없습니다.", en: "A private instance without a public IP cannot use an internet gateway directly." },
      C: { ko: "NAT 인스턴스는 인터넷 게이트웨이 경로가 있는 공용 서브넷에 있어야 합니다.", en: "A NAT instance must reside in a public subnet with a route to an internet gateway." },
      D: { ko: "NAT 인스턴스의 위치와 프라이빗 서브넷 기본 경로가 모두 잘못 구성되어 있습니다.", en: "Both the NAT instance placement and the private subnet's default route are incorrect." }
    }
  },
  {
    id: "exam6-252", number: 252, tags: ["Amazon EFS", "Shared File System", "Multi-AZ", "Storage"],
    question: {
      en: "A solutions architect needs to design a system to store client case files. The files are core company assets and are important. The number of files will grow over time.\nThe files must be simultaneously accessible from multiple application servers that run on Amazon EC2 instances. The solution must have built-in redundancy.\nWhich solution meets these requirements?",
      ko: "솔루션스 아키텍트는 계속 증가하는 중요한 고객 사건 파일을 저장할 시스템을 설계해야 합니다. 여러 EC2 애플리케이션 서버가 파일에 동시에 접근할 수 있어야 하고 기본 중복성을 제공해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Amazon Elastic File System (Amazon EFS)", ko: "Amazon EFS" },
      { k: "B", en: "Amazon Elastic Block Store (Amazon EBS)", ko: "Amazon EBS" },
      { k: "C", en: "Amazon S3 Glacier Deep Archive", ko: "Amazon S3 Glacier Deep Archive" },
      { k: "D", en: "AWS Backup", ko: "AWS Backup" }
    ],
    answer: ["A"],
    explanation: { ko: "EFS는 여러 EC2 인스턴스가 동시에 마운트할 수 있고 여러 가용 영역에 데이터를 중복 저장하는 확장형 관리 파일 시스템입니다.", en: "EFS is a managed, elastic file system that supports concurrent mounts from multiple EC2 instances and built-in multi-AZ redundancy." },
    why_wrong: {
      B: { ko: "EBS는 기본적으로 단일 가용 영역의 블록 스토리지이며 일반 파일 시스템처럼 여러 서버에서 동시에 공유하기 어렵습니다.", en: "EBS is zonal block storage and is not a general-purpose concurrently shared file system." },
      C: { ko: "Deep Archive는 장기 보관용이며 애플리케이션 서버의 즉시 동시 파일 접근에 적합하지 않습니다.", en: "Deep Archive is for archival retrieval, not immediate concurrent file access." },
      D: { ko: "AWS Backup은 백업 관리 서비스이며 애플리케이션이 마운트하는 공유 파일 시스템이 아닙니다.", en: "AWS Backup manages backups and is not a shared file system for applications." }
    }
  },
  {
    id: "exam6-253", number: 253, tags: ["IAM Policy Evaluation", "Explicit Deny", "EC2", "Directory Service", "Security"],
    question: {
      en: "A solutions architect has created two IAM policies: Policy 1 and Policy 2. Both policies are attached to an IAM group.\n\nPolicy 1:\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [{\n    \"Effect\": \"Allow\",\n    \"Action\": [\"iam:Get*\", \"iam:List*\", \"kms:List*\", \"ec2:*\", \"ds:*\", \"logs:Get*\", \"logs:Describe*\"],\n    \"Resource\": \"*\"\n  }]\n}\n\nPolicy 2:\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [{\n    \"Effect\": \"Deny\",\n    \"Action\": \"ds:Delete*\",\n    \"Resource\": \"*\"\n  }]\n}\n\nA cloud engineer is added as an IAM user to the IAM group. Which action will the cloud engineer be able to perform?",
      ko: "솔루션스 아키텍트가 두 IAM 정책을 생성해 IAM 그룹에 연결했습니다. 정책 1은 IAM 조회, KMS 목록, 모든 EC2 및 Directory Service 작업, CloudWatch Logs 조회를 허용합니다. 정책 2는 모든 Directory Service 삭제 작업을 명시적으로 거부합니다. 클라우드 엔지니어가 이 그룹에 추가되었습니다.\n어떤 작업을 수행할 수 있습니까?"
    },
    options: [
      { k: "A", en: "Deleting IAM users", ko: "IAM 사용자 삭제" },
      { k: "B", en: "Deleting directories", ko: "디렉터리 삭제" },
      { k: "C", en: "Deleting Amazon EC2 instances", ko: "Amazon EC2 인스턴스 삭제" },
      { k: "D", en: "Deleting logs from Amazon CloudWatch Logs", ko: "Amazon CloudWatch Logs의 로그 삭제" }
    ],
    answer: ["C"],
    explanation: { ko: "정책 1의 `ec2:*`가 모든 EC2 작업을 허용하므로 인스턴스를 종료할 수 있습니다. 다른 삭제 작업은 허용되지 않거나 명시적으로 거부됩니다.", en: "Policy 1 allows `ec2:*`, which includes terminating EC2 instances. The other delete operations are either not allowed or explicitly denied." },
    why_wrong: {
      A: { ko: "IAM에는 Get과 List만 허용되어 DeleteUser 권한이 없습니다.", en: "Only IAM Get and List actions are allowed, not DeleteUser." },
      B: { ko: "정책 2의 `ds:Delete*` 명시적 거부가 정책 1의 허용보다 우선합니다.", en: "The explicit `ds:Delete*` deny in Policy 2 overrides the allow in Policy 1." },
      D: { ko: "CloudWatch Logs에는 Get과 Describe만 허용되어 삭제 권한이 없습니다.", en: "Only CloudWatch Logs Get and Describe actions are allowed, not deletion." }
    }
  },
  {
    id: "exam6-254", number: 254, tags: ["Security Group", "Least Privilege", "Three-Tier Architecture", "VPC"],
    question: {
      en: "A company is reviewing a recent migration of a three-tier application to a VPC. The security team discovers that the principle of least privilege is not being applied to Amazon EC2 security group ingress and egress rules between the application tiers.\nWhat should a solutions architect do to correct this issue?",
      ko: "회사는 VPC로 이전한 3계층 애플리케이션을 검토하고 있습니다. 보안 팀은 계층 간 EC2 보안 그룹 인바운드 및 아웃바운드 규칙에 최소 권한 원칙이 적용되지 않은 것을 발견했습니다.\n어떻게 수정해야 합니까?"
    },
    options: [
      { k: "A", en: "Create security group rules using the instance ID as the source or destination.", ko: "인스턴스 ID를 소스 또는 대상으로 사용해 보안 그룹 규칙을 생성합니다." },
      { k: "B", en: "Create security group rules using the security group ID as the source or destination.", ko: "보안 그룹 ID를 소스 또는 대상으로 사용해 보안 그룹 규칙을 생성합니다." },
      { k: "C", en: "Create security group rules using the VPC CIDR blocks as the source or destination.", ko: "VPC CIDR 블록을 소스 또는 대상으로 사용합니다." },
      { k: "D", en: "Create security group rules using the subnet CIDR blocks as the source or destination.", ko: "서브넷 CIDR 블록을 소스 또는 대상으로 사용합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "각 계층의 보안 그룹 ID를 다음 계층 규칙의 소스 또는 대상으로 참조하면 해당 역할의 인스턴스에만 필요한 포트를 허용할 수 있습니다.", en: "Referencing each tier's security group ID allows only instances with the intended role to communicate on the required ports." },
    why_wrong: {
      A: { ko: "보안 그룹 규칙은 인스턴스 ID를 소스나 대상으로 사용하지 않습니다.", en: "Security group rules do not use EC2 instance IDs as sources or destinations." },
      C: { ko: "전체 VPC CIDR을 허용하면 관련 없는 모든 VPC 리소스까지 포함되어 범위가 지나치게 넓습니다.", en: "Allowing the entire VPC CIDR includes unrelated resources and is overly broad." },
      D: { ko: "서브넷 CIDR은 같은 서브넷의 관련 없는 리소스까지 허용하므로 보안 그룹 참조보다 범위가 넓습니다.", en: "A subnet CIDR permits unrelated resources in that subnet and is broader than a security group reference." }
    }
  },
  {
    id: "exam6-255", number: 255, tags: ["SQS FIFO", "Idempotency", "Decoupling", "Order Processing"],
    question: {
      en: "A company has an ecommerce checkout workflow that writes an order to a database and calls a service to process the payment. Users are experiencing timeouts during the checkout process. When users resubmit the checkout form, multiple unique orders are created for the same desired transaction.\nHow should a solutions architect refactor this workflow to prevent the creation of multiple orders?",
      ko: "전자상거래 결제 흐름이 주문을 데이터베이스에 기록하고 결제 서비스를 호출합니다. 시간 초과 후 사용자가 양식을 다시 제출하면 동일한 거래에 여러 주문이 생성됩니다.\n중복 주문 생성을 방지하도록 어떻게 리팩터링해야 합니까?"
    },
    options: [
      { k: "A", en: "Configure the web application to send an order message to Amazon Kinesis Data Firehose. Set the payment service to retrieve the message from Kinesis Data Firehose and process the order.", ko: "웹 애플리케이션이 주문을 Kinesis Data Firehose로 보내고 결제 서비스가 메시지를 가져와 처리하게 합니다." },
      { k: "B", en: "Create a rule in AWS CloudTrail to invoke an AWS Lambda function based on the logged application path request. Use Lambda to query the database, call the payment service, and pass in the order information.", ko: "CloudTrail 규칙으로 애플리케이션 경로 요청에 따라 Lambda를 호출해 데이터베이스 조회와 결제를 수행합니다." },
      { k: "C", en: "Store the order in the database. Send a message that includes the order number to Amazon Simple Notification Service (Amazon SNS). Set the payment service to poll Amazon SNS, retrieve the message, and process the order.", ko: "주문 저장 후 주문 번호가 포함된 메시지를 SNS로 보내고 결제 서비스가 SNS를 폴링해 처리합니다." },
      { k: "D", en: "Store the order in the database. Send a message that includes the order number to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the payment service to retrieve the message and process the order. Delete the message from the queue.", ko: "주문 저장 후 주문 번호가 포함된 메시지를 SQS FIFO 대기열로 보내고 결제 서비스가 처리한 뒤 메시지를 삭제합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "SQS FIFO는 메시지 그룹 내 순서를 유지하고 중복 제거 ID를 사용해 재시도에서 같은 주문 메시지가 중복 처리되는 것을 방지할 수 있습니다.", en: "SQS FIFO preserves ordering and supports deduplication IDs, preventing the same order message from being processed multiple times during retries." },
    why_wrong: {
      A: { ko: "Firehose는 스트리밍 데이터를 대상으로 전달하는 서비스이며 결제 작업 대기열이나 중복 제거용 소비 모델이 아닙니다.", en: "Firehose delivers streaming data to destinations and is not a work queue with the required consumption and deduplication model." },
      B: { ko: "CloudTrail은 AWS API 감사 로그 서비스이며 애플리케이션 결제 워크플로 이벤트 버스가 아닙니다.", en: "CloudTrail audits AWS API activity and is not an application checkout event bus." },
      C: { ko: "SNS는 소비자가 폴링하는 대기열이 아니며 이 구성은 FIFO 중복 제거를 제공하지 않습니다.", en: "SNS is not polled as a work queue and this design does not provide FIFO deduplication." }
    }
  },
  {
    id: "exam6-256", number: 256, tags: ["Amazon S3", "S3 Versioning", "MFA Delete", "Data Protection", "Choose two"],
    question: {
      en: "A solutions architect is implementing a document review application using an Amazon S3 bucket for storage. The solution must prevent accidental deletion of the documents and ensure that all versions of the documents are available. Users must be able to download, modify, and upload documents.\nWhich combination of actions should be taken to meet these requirements? (Choose two.)",
      ko: "문서 검토 애플리케이션이 S3 버킷을 사용합니다. 우발적 삭제를 방지하고 문서의 모든 버전을 보존해야 하며, 사용자는 문서를 다운로드·수정·업로드할 수 있어야 합니다.\n어떤 두 작업을 수행해야 합니까?"
    },
    options: [
      { k: "A", en: "Enable a read-only bucket ACL.", ko: "읽기 전용 버킷 ACL을 활성화합니다." },
      { k: "B", en: "Enable versioning on the bucket.", ko: "버킷에서 버전 관리를 활성화합니다." },
      { k: "C", en: "Attach an IAM policy to the bucket.", ko: "버킷에 IAM 정책을 연결합니다." },
      { k: "D", en: "Enable MFA Delete on the bucket.", ko: "버킷에서 MFA Delete를 활성화합니다." },
      { k: "E", en: "Encrypt the bucket using AWS KMS.", ko: "AWS KMS를 사용해 버킷을 암호화합니다." }
    ],
    answer: ["B", "D"],
    explanation: { ko: "S3 버전 관리는 수정된 객체의 모든 버전을 보존하고, MFA Delete는 버전 영구 삭제나 버전 관리 상태 변경에 추가 인증을 요구해 우발적 삭제를 방지합니다.", en: "S3 Versioning retains every document version, and MFA Delete requires additional authentication to permanently delete versions or change versioning state." },
    why_wrong: {
      A: { ko: "읽기 전용 ACL은 사용자의 수정과 업로드 요구를 막습니다.", en: "A read-only ACL prevents required modifications and uploads." },
      C: { ko: "IAM 정책이라는 설명만으로는 버전 보존과 삭제 보호가 구현되지 않습니다.", en: "An unspecified IAM policy does not implement version retention and deletion protection." },
      E: { ko: "KMS 암호화는 기밀성을 제공하지만 버전 보존이나 우발적 삭제 방지 기능은 아닙니다.", en: "KMS encryption provides confidentiality, not version retention or accidental-deletion protection." }
    }
  },
  {
    id: "exam6-257", number: 257, tags: ["CloudWatch Metric Streams", "Kinesis Data Firehose", "Amazon S3", "Auto Scaling", "Serverless"],
    question: {
      en: "A company is building a solution that will report Amazon EC2 Auto Scaling events across all the applications in an AWS account. The company needs to use a serverless solution to store the EC2 Auto Scaling status data in Amazon S3. The company then will use the data in Amazon S3 to provide near-real-time updates in a dashboard. The solution must not affect the speed of EC2 instance launches.\nHow should the company move the data to Amazon S3 to meet these requirements?",
      ko: "회사는 AWS 계정의 모든 애플리케이션에서 EC2 Auto Scaling 상태 데이터를 보고하려 합니다. 서버리스 방식으로 데이터를 S3에 저장해 대시보드에 준실시간 업데이트를 제공해야 하며 EC2 시작 속도에 영향을 주면 안 됩니다.\n어떻게 데이터를 S3로 이동해야 합니까?"
    },
    options: [
      { k: "A", en: "Use an Amazon CloudWatch metric stream to send the EC2 Auto Scaling status data to Amazon Kinesis Data Firehose. Store the data in Amazon S3.", ko: "CloudWatch 지표 스트림에서 EC2 Auto Scaling 상태 데이터를 Kinesis Data Firehose로 보내 S3에 저장합니다." },
      { k: "B", en: "Launch an Amazon EMR cluster to collect the EC2 Auto Scaling status data and send the data to Amazon Kinesis Data Firehose. Store the data in Amazon S3.", ko: "EMR 클러스터로 상태 데이터를 수집해 Firehose를 통해 S3에 저장합니다." },
      { k: "C", en: "Create an Amazon EventBridge rule to invoke an AWS Lambda function on a schedule. Configure the Lambda function to send the EC2 Auto Scaling status data directly to Amazon S3.", ko: "예약 EventBridge 규칙으로 Lambda를 호출해 Auto Scaling 상태 데이터를 S3로 직접 보냅니다." },
      { k: "D", en: "Use a bootstrap script during the launch of an EC2 instance to install Amazon Kinesis Agent. Configure Kinesis Agent to collect the EC2 Auto Scaling status data and send the data to Amazon Kinesis Data Firehose. Store the data in Amazon S3.", ko: "EC2 시작 시 부트스트랩 스크립트로 Kinesis Agent를 설치해 상태 데이터를 Firehose와 S3로 보냅니다." }
    ],
    answer: ["A"],
    explanation: { ko: "CloudWatch 지표 스트림과 Firehose는 서버리스 관리형 파이프라인으로 지표를 준실시간 S3에 전달하며 EC2 부트스트랩 경로에 작업을 추가하지 않습니다.", en: "CloudWatch Metric Streams and Firehose form a managed serverless near-real-time delivery path to S3 without adding work to EC2 launch bootstrap." },
    why_wrong: {
      B: { ko: "EMR 클러스터는 서버리스가 아니며 이 단순 지표 전달에 과도한 운영 부담을 만듭니다.", en: "An EMR cluster is not serverless and adds unnecessary operations for metric delivery." },
      C: { ko: "예약 폴링은 지표 스트림보다 실시간성이 낮고 사용자 지정 코드와 운영이 필요합니다.", en: "Scheduled polling is less timely than metric streaming and requires custom code and operations." },
      D: { ko: "인스턴스 시작 시 에이전트를 설치하면 시작 시간이 늘어나고 인스턴스별 관리가 필요합니다.", en: "Installing an agent during bootstrap can slow instance launches and requires per-instance management." }
    }
  },
  {
    id: "exam6-258", number: 258, tags: ["AWS Glue", "ETL", "Apache Parquet", "Amazon S3", "Lambda"],
    question: {
      en: "A company has an application that places hundreds of .csv files into an Amazon S3 bucket every hour. The files are 1 GB in size. Each time a file is uploaded, the company needs to convert the file to Apache Parquet format and place the output file into an S3 bucket.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "애플리케이션이 매시간 수백 개의 1GB CSV 파일을 S3 버킷에 저장합니다. 파일이 업로드될 때마다 Apache Parquet 형식으로 변환해 S3에 저장해야 합니다.\n운영 부담이 가장 적은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create an AWS Lambda function to download the .csv files, convert the files to Parquet format, and place the output files in an S3 bucket. Invoke the Lambda function for each S3 PUT event.", ko: "각 S3 PUT 이벤트에서 Lambda가 CSV를 다운로드하고 Parquet으로 변환해 S3에 저장하게 합니다." },
      { k: "B", en: "Create an Apache Spark job to read the .csv files, convert the files to Parquet format, and place the output files in an S3 bucket. Create an AWS Lambda function for each S3 PUT event to invoke the Spark job.", ko: "Spark 작업을 만들고 각 S3 PUT 이벤트의 Lambda가 작업을 호출하게 합니다." },
      { k: "C", en: "Create an AWS Glue table and an AWS Glue crawler for the S3 bucket where the application places the .csv files. Schedule an AWS Lambda function to periodically use Amazon Athena to query the AWS Glue table, convert the query results into Parquet format, and place the output files into an S3 bucket.", ko: "Glue 테이블과 크롤러를 만들고 예약 Lambda가 Athena 쿼리 결과를 Parquet으로 변환해 S3에 저장하게 합니다." },
      { k: "D", en: "Create an AWS Glue extract, transform, and load (ETL) job to convert the .csv files to Parquet format and place the output files into an S3 bucket. Create an AWS Lambda function for each S3 PUT event to invoke the ETL job.", ko: "CSV를 Parquet으로 변환해 S3에 저장하는 Glue ETL 작업을 만들고 각 S3 PUT 이벤트에서 Lambda로 작업을 호출합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "AWS Glue ETL은 대용량 파일 변환을 위한 서버리스 관리형 처리 서비스입니다. S3 이벤트로 Lambda가 Glue 작업을 시작하면 각 업로드를 자동 처리할 수 있습니다.", en: "AWS Glue ETL is a managed serverless service suited to large file transformations. An S3-triggered Lambda can start the Glue job for each upload." },
    why_wrong: {
      A: { ko: "매시간 수백 개의 1GB 파일을 Lambda에서 직접 변환하면 실행 시간과 임시 저장소 및 동시성 제약에 취약합니다.", en: "Directly transforming hundreds of 1 GB files in Lambda risks duration, temporary-storage, and concurrency constraints." },
      B: { ko: "직접 Spark 실행 환경을 구성하면 관리형 Glue ETL보다 운영 부담이 큽니다.", en: "Managing a separate Spark execution environment adds more operational overhead than Glue ETL." },
      C: { ko: "예약 처리는 파일 업로드마다 변환한다는 요구와 맞지 않고 여러 서비스를 불필요하게 결합합니다.", en: "Scheduled processing does not meet the per-upload trigger requirement and adds unnecessary components." }
    }
  },
  {
    id: "exam6-259", number: 259, tags: ["AWS Backup", "Amazon RDS", "Backup Plan", "Data Retention"],
    question: {
      en: "A company is implementing new data retention policies for all databases that run on Amazon RDS DB instances. The company must retain daily backups for a minimum period of 2 years. The backups must be consistent and restorable.\nWhich solution should a solutions architect recommend to meet these requirements?",
      ko: "회사는 모든 RDS 데이터베이스에 새 보존 정책을 적용합니다. 일일 백업을 최소 2년간 보관해야 하며 백업은 일관되고 복원 가능해야 합니다.\n어떤 솔루션을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Create a backup vault in AWS Backup to retain RDS backups. Create a new backup plan with a daily schedule and an expiration period of 2 years after creation. Assign the RDS DB instances to the backup plan.", ko: "AWS Backup에 백업 볼트를 만들고 매일 실행되어 생성 2년 후 만료되는 백업 계획에 RDS 인스턴스를 할당합니다." },
      { k: "B", en: "Configure a backup window for the RDS DB instances for daily snapshots. Assign a snapshot retention policy of 2 years to each RDS DB instance. Use Amazon Data Lifecycle Manager (Amazon DLM) to schedule snapshot deletions.", ko: "RDS 일일 스냅샷과 2년 보존 정책을 설정하고 DLM으로 스냅샷 삭제를 예약합니다." },
      { k: "C", en: "Configure database transaction logs to be automatically backed up to Amazon CloudWatch Logs with an expiration period of 2 years.", ko: "데이터베이스 트랜잭션 로그를 CloudWatch Logs에 자동 백업하고 만료 기간을 2년으로 설정합니다." },
      { k: "D", en: "Configure an AWS Database Migration Service (AWS DMS) replication task. Deploy a replication instance, and configure a change data capture (CDC) task to stream database changes to Amazon S3 as the target. Configure S3 Lifecycle policies to delete the snapshots after 2 years.", ko: "DMS CDC로 데이터 변경을 S3에 스트리밍하고 2년 후 삭제하는 S3 수명 주기 정책을 구성합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "AWS Backup의 백업 계획은 여러 RDS 인스턴스에 일일 일정과 2년 보존 기간을 중앙에서 적용하고 일관된 복원 가능 스냅샷을 관리합니다.", en: "An AWS Backup plan centrally applies a daily schedule and two-year retention to RDS instances and manages consistent, restorable recovery points." },
    why_wrong: {
      B: { ko: "DLM은 주로 EBS 스냅샷과 EBS 기반 AMI의 수명 주기를 관리하며 이 RDS 백업 정책의 적절한 서비스가 아닙니다.", en: "DLM primarily manages EBS snapshots and EBS-backed AMIs and is not the right service for this RDS backup policy." },
      C: { ko: "트랜잭션 로그만으로는 전체 데이터베이스의 일관된 일일 복원 지점을 제공하지 않습니다.", en: "Transaction logs alone do not provide complete, consistent daily database recovery points." },
      D: { ko: "CDC 데이터는 관리형 RDS 스냅샷이 아니며 직접 복원 가능한 일일 백업 요구를 충족하지 않습니다.", en: "CDC output is not a managed RDS snapshot and does not provide the required directly restorable daily backups." }
    }
  },
  {
    id: "exam6-260", number: 260, tags: ["Amazon FSx for Windows File Server", "Active Directory", "SMB", "Access Control"],
    question: {
      en: "A company's compliance team needs to move its file shares to AWS. The shares run on a Windows Server SMB file share. A self-managed on-premises Active Directory controls access to the files and folders.\nThe company wants to use Amazon FSx for Windows File Server as part of the solution. The company must ensure that the on-premises Active Directory groups restrict access to the FSx for Windows File Server SMB compliance shares, folders, and files after the move to AWS. The company has created an FSx for Windows File Server file system.\nWhich solution will meet these requirements?",
      ko: "회사는 온프레미스 Windows Server SMB 파일 공유를 AWS로 이전합니다. 자체 관리 Active Directory가 파일과 폴더 접근을 제어하며, 이전 후에도 기존 AD 그룹으로 FSx for Windows File Server의 공유·폴더·파일 접근을 제한해야 합니다. FSx 파일 시스템은 이미 생성되었습니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Create an Active Directory Connector to connect to the Active Directory. Map the Active Directory groups to IAM groups to restrict access.", ko: "AD Connector를 만들고 AD 그룹을 IAM 그룹에 매핑해 접근을 제한합니다." },
      { k: "B", en: "Assign a tag with a Restrict tag key and a Compliance tag value. Map the Active Directory groups to IAM groups to restrict access.", ko: "Restrict 키와 Compliance 값의 태그를 할당하고 AD 그룹을 IAM 그룹에 매핑합니다." },
      { k: "C", en: "Create an IAM service-linked role that is linked directly to FSx for Windows File Server to restrict access.", ko: "FSx for Windows File Server에 직접 연결되는 IAM 서비스 연결 역할을 생성해 접근을 제한합니다." },
      { k: "D", en: "Join the file system to the Active Directory to restrict access.", ko: "파일 시스템을 Active Directory 도메인에 가입시켜 접근을 제한합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "FSx for Windows File Server를 자체 관리 Microsoft AD에 가입시키면 기존 AD 사용자와 그룹 및 Windows ACL을 사용해 SMB 공유, 폴더, 파일 권한을 제어할 수 있습니다.", en: "Joining FSx for Windows File Server to the self-managed Microsoft AD lets existing AD users, groups, and Windows ACLs control SMB shares, folders, and files." },
    why_wrong: {
      A: { ko: "AD Connector와 IAM 그룹 매핑은 Windows 파일 및 폴더 ACL을 제공하는 방식이 아닙니다.", en: "AD Connector-to-IAM group mapping is not how Windows file and folder ACLs are enforced." },
      B: { ko: "리소스 태그와 IAM 그룹은 SMB 파일 수준 권한을 제어하지 않습니다.", en: "Resource tags and IAM groups do not enforce SMB file-level permissions." },
      C: { ko: "서비스 연결 역할은 FSx 서비스가 AWS 리소스를 관리하는 데 사용되며 사용자 파일 접근 권한용이 아닙니다.", en: "A service-linked role lets FSx manage AWS resources; it does not control end-user file access." }
    }
  },
  {
    id: "exam6-261", number: 261, tags: ["CloudFront", "Lambda@Edge", "Content Customization", "User-Agent", "Choose two"],
    question: {
      en: "A company recently announced the deployment of its retail website to a global audience. The website runs on multiple Amazon EC2 instances behind an Elastic Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones.\nThe company wants to provide its customers with different versions of content based on the devices that the customers use to access the website.\nWhich combination of actions should a solutions architect take to meet these requirements? (Choose two.)",
      ko: "회사는 여러 가용 영역의 Auto Scaling EC2 인스턴스와 로드 밸런서로 구성된 소매 웹사이트를 전 세계에 제공합니다. 고객이 사용하는 장치에 따라 서로 다른 버전의 콘텐츠를 제공해야 합니다.\n어떤 두 작업을 수행해야 합니까?"
    },
    options: [
      { k: "A", en: "Configure Amazon CloudFront to cache multiple versions of the content.", ko: "CloudFront가 여러 버전의 콘텐츠를 캐시하도록 구성합니다." },
      { k: "B", en: "Configure a host header in a Network Load Balancer to forward traffic to different instances.", ko: "NLB의 호스트 헤더를 구성해 트래픽을 서로 다른 인스턴스로 전달합니다." },
      { k: "C", en: "Configure a Lambda@Edge function to send specific objects to users based on the User-Agent header.", ko: "User-Agent 헤더에 따라 특정 객체를 사용자에게 보내는 Lambda@Edge 함수를 구성합니다." },
      { k: "D", en: "Configure AWS Global Accelerator. Forward requests to a Network Load Balancer (NLB). Configure the NLB to set up host-based routing to different EC2 instances.", ko: "Global Accelerator에서 NLB로 요청을 전달하고 NLB에 호스트 기반 라우팅을 구성합니다." },
      { k: "E", en: "Configure AWS Global Accelerator. Forward requests to a Network Load Balancer (NLB). Configure the NLB to set up path-based routing to different EC2 instances.", ko: "Global Accelerator에서 NLB로 요청을 전달하고 NLB에 경로 기반 라우팅을 구성합니다." }
    ],
    answer: ["A", "C"],
    explanation: { ko: "Lambda@Edge가 User-Agent를 기준으로 장치별 콘텐츠를 선택하고, CloudFront가 해당 변형을 엣지에 캐시해 전 세계 사용자에게 효율적으로 제공합니다.", en: "Lambda@Edge can select device-specific content from the User-Agent header, while CloudFront caches the variants at edge locations for global delivery." },
    why_wrong: {
      B: { ko: "NLB는 계층 4 로드 밸런서이므로 HTTP 호스트 헤더를 기반으로 라우팅하지 않습니다.", en: "An NLB operates at Layer 4 and does not route by HTTP host headers." },
      D: { ko: "Global Accelerator와 NLB는 호스트 기반 콘텐츠 변형을 처리하지 않으며 NLB는 호스트 라우팅을 지원하지 않습니다.", en: "Global Accelerator and an NLB do not perform host-based content variation, and NLB does not support host routing." },
      E: { ko: "NLB는 HTTP 경로 기반 라우팅을 지원하지 않으며 장치별 콘텐츠 선택에도 적합하지 않습니다.", en: "An NLB does not support HTTP path-based routing and does not select content by device." }
    }
  },
  {
    id: "exam6-262", number: 262, tags: ["VPC Peering", "ElastiCache", "Security Group", "Cost Optimization"],
    question: {
      en: "A company plans to use Amazon ElastiCache for its multi-tier web application. A solutions architect creates a Cache VPC for the ElastiCache cluster and an App VPC for the application's Amazon EC2 instances. Both VPCs are in the us-east-1 Region.\nThe solutions architect must implement a solution to provide the application's EC2 instances with access to the ElastiCache cluster.\nWhich solution will meet these requirements MOST cost-effectively?",
      ko: "회사는 다계층 웹 애플리케이션에 ElastiCache를 사용합니다. ElastiCache용 Cache VPC와 EC2용 App VPC가 모두 us-east-1에 있습니다. 애플리케이션 EC2가 ElastiCache 클러스터에 접근해야 합니다.\n가장 비용 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create a peering connection between the VPCs. Add a route table entry for the peering connection in both VPCs. Configure an inbound rule for the ElastiCache cluster's security group to allow inbound connection from the application's security group.", ko: "두 VPC를 피어링하고 양쪽 라우팅 테이블에 경로를 추가한 뒤 ElastiCache 보안 그룹이 애플리케이션 보안 그룹의 연결을 허용하도록 합니다." },
      { k: "B", en: "Create a Transit VPC. Update the VPC route tables in the Cache VPC and the App VPC to route traffic through the Transit VPC. Configure an inbound rule for the ElastiCache cluster's security group to allow inbound connection from the application's security group.", ko: "Transit VPC를 만들고 두 VPC의 트래픽을 경유시킨 뒤 ElastiCache 보안 그룹 규칙을 구성합니다." },
      { k: "C", en: "Create a peering connection between the VPCs. Add a route table entry for the peering connection in both VPCs. Configure an inbound rule for the peering connection's security group to allow inbound connection from the application's security group.", ko: "VPC 피어링과 경로를 만든 뒤 피어링 연결의 보안 그룹에 인바운드 규칙을 구성합니다." },
      { k: "D", en: "Create a Transit VPC. Update the VPC route tables in the Cache VPC and the App VPC to route traffic through the Transit VPC. Configure an inbound rule for the Transit VPC's security group to allow inbound connection from the application's security group.", ko: "Transit VPC를 만들고 두 VPC의 경로 및 Transit VPC 보안 그룹 규칙을 구성합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "같은 리전의 두 VPC만 연결할 때 VPC 피어링이 단순하고 비용 효율적입니다. 양방향 경로와 ElastiCache 보안 그룹의 애플리케이션 보안 그룹 참조가 필요합니다.", en: "For two VPCs in one Region, VPC peering is simple and cost-effective. Routes are required in both VPCs, and the ElastiCache security group should allow the application security group." },
    why_wrong: {
      B: { ko: "두 VPC만 연결하는 데 Transit VPC는 불필요한 인프라와 운영 비용을 추가합니다.", en: "A Transit VPC adds unnecessary infrastructure and operational cost for only two VPCs." },
      C: { ko: "VPC 피어링 연결 자체에는 보안 그룹을 연결할 수 없습니다.", en: "A VPC peering connection does not have an attachable security group." },
      D: { ko: "Transit VPC 방식은 과도하며 Transit VPC 자체 보안 그룹으로 ElastiCache 접근을 직접 제어하는 구성도 잘못되었습니다.", en: "A Transit VPC is excessive, and its security group is not the direct control for ElastiCache access." }
    }
  },
  {
    id: "exam6-263", number: 263, tags: ["Amazon ECS", "AWS Fargate", "Containers", "High Availability", "Choose two"],
    question: {
      en: "A company is building an application that consists of several microservices. The company has decided to use container technologies to deploy its software on AWS. The company needs a solution that minimizes the amount of ongoing effort for maintenance and scaling. The company cannot manage additional infrastructure.\nWhich combination of actions should a solutions architect take to meet these requirements? (Choose two.)",
      ko: "회사는 여러 마이크로서비스로 구성된 애플리케이션을 컨테이너로 AWS에 배포합니다. 유지 관리와 확장 작업을 최소화해야 하며 추가 인프라를 관리할 수 없습니다.\n어떤 두 작업을 수행해야 합니까?"
    },
    options: [
      { k: "A", en: "Deploy an Amazon Elastic Container Service (Amazon ECS) cluster.", ko: "Amazon ECS 클러스터를 배포합니다." },
      { k: "B", en: "Deploy the Kubernetes control plane on Amazon EC2 instances that span multiple Availability Zones.", ko: "여러 가용 영역의 EC2에 Kubernetes 제어 영역을 배포합니다." },
      { k: "C", en: "Deploy an Amazon Elastic Container Service (Amazon ECS) service with an Amazon EC2 launch type. Specify a desired task number level of greater than or equal to 2.", ko: "EC2 시작 유형의 ECS 서비스를 배포하고 원하는 작업 수를 2 이상으로 설정합니다." },
      { k: "D", en: "Deploy an Amazon Elastic Container Service (Amazon ECS) service with a Fargate launch type. Specify a desired task number level of greater than or equal to 2.", ko: "Fargate 시작 유형의 ECS 서비스를 배포하고 원하는 작업 수를 2 이상으로 설정합니다." },
      { k: "E", en: "Deploy Kubernetes worker nodes on Amazon EC2 instances that span multiple Availability Zones. Create a deployment that specifies two or more replicas for each microservice.", ko: "여러 가용 영역의 EC2에 Kubernetes 워커 노드를 배포하고 마이크로서비스마다 복제본을 2개 이상 지정합니다." }
    ],
    answer: ["A", "D"],
    explanation: { ko: "ECS와 Fargate를 사용하면 컨테이너 오케스트레이션은 ECS가, 서버 인프라 용량과 패치는 Fargate가 관리합니다. 작업을 2개 이상 실행해 가용성도 확보합니다.", en: "ECS provides orchestration and Fargate removes server capacity and patching management. Running at least two tasks also improves availability." },
    why_wrong: {
      B: { ko: "Kubernetes 제어 영역을 EC2에 직접 배포하면 회사가 제어 영역 인프라를 운영해야 합니다.", en: "Self-hosting the Kubernetes control plane on EC2 requires ongoing infrastructure management." },
      C: { ko: "EC2 시작 유형은 컨테이너 인스턴스의 용량, 패치, 확장을 직접 관리해야 합니다.", en: "The EC2 launch type requires management of container-instance capacity, patching, and scaling." },
      E: { ko: "EC2 워커 노드 기반 Kubernetes는 노드 인프라를 직접 유지하고 확장해야 합니다.", en: "Kubernetes worker nodes on EC2 require the company to maintain and scale node infrastructure." }
    }
  },
  {
    id: "exam6-264", number: 264, tags: ["Application Load Balancer", "Health Check", "Route 53", "High Availability"],
    question: {
      en: "A company has a web application hosted over 10 Amazon EC2 instances with traffic directed by Amazon Route 53. The company occasionally experiences a timeout error when attempting to browse the application. The networking team finds that some DNS queries return IP addresses of unhealthy instances, resulting in the timeout error.\nWhat should a solutions architect implement to overcome these timeout errors?",
      ko: "회사는 10개가 넘는 EC2 인스턴스에서 웹 애플리케이션을 운영하고 Route 53으로 트래픽을 보냅니다. 일부 DNS 쿼리가 비정상 인스턴스 IP를 반환해 시간 초과가 발생합니다.\n어떤 솔루션을 구현해야 합니까?"
    },
    options: [
      { k: "A", en: "Create a Route 53 simple routing policy record for each EC2 instance. Associate a health check with each record.", ko: "각 EC2 인스턴스에 단순 라우팅 레코드와 상태 확인을 연결합니다." },
      { k: "B", en: "Create a Route 53 failover routing policy record for each EC2 instance. Associate a health check with each record.", ko: "각 EC2 인스턴스에 장애 조치 라우팅 레코드와 상태 확인을 연결합니다." },
      { k: "C", en: "Create an Amazon CloudFront distribution with EC2 instances as its origin. Associate a health check with the EC2 instances.", ko: "EC2 인스턴스를 오리진으로 하는 CloudFront 배포와 상태 확인을 구성합니다." },
      { k: "D", en: "Create an Application Load Balancer (ALB) with a health check in front of the EC2 instances. Route to the ALB from Route 53.", ko: "EC2 앞에 상태 확인이 있는 ALB를 만들고 Route 53에서 ALB로 라우팅합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "ALB는 대상별 상태 확인을 수행하고 정상 인스턴스로만 요청을 전달합니다. Route 53은 개별 EC2 대신 ALB 별칭으로 라우팅하면 됩니다.", en: "An ALB continuously health-checks targets and sends traffic only to healthy instances. Route 53 can point to the ALB instead of individual EC2 addresses." },
    why_wrong: {
      A: { ko: "단순 라우팅은 여러 레코드에 개별 상태 확인을 적용해 정상 리소스만 선택하는 용도에 적합하지 않습니다.", en: "Simple routing is not the appropriate policy for health-aware distribution across many individual records." },
      B: { ko: "장애 조치 정책은 기본·보조 활성/대기 구성용이며 10개 이상의 활성 인스턴스 분산에 적합하지 않습니다.", en: "Failover routing is intended for active-passive primary and secondary resources, not distribution across many active instances." },
      C: { ko: "CloudFront는 EC2 인스턴스 집합의 대상 상태 확인과 로드 밸런싱을 ALB처럼 수행하지 않습니다.", en: "CloudFront does not provide ALB-style target health checks and load balancing across an EC2 fleet." }
    }
  },
  {
    id: "exam6-265", number: 265, tags: ["CloudFront", "Application Load Balancer", "Private Subnet", "HTTPS", "Security"],
    question: {
      en: "A solutions architect needs to design a highly available application consisting of web, application, and database tiers. HTTPS content delivery should be as close to the edge as possible, with the least delivery time.\nWhich solution meets these requirements and is MOST secure?",
      ko: "솔루션스 아키텍트는 웹, 애플리케이션, 데이터베이스 계층으로 구성된 고가용성 애플리케이션을 설계해야 합니다. HTTPS 콘텐츠를 엣지와 최대한 가깝게 최소 지연으로 제공하면서 가장 안전해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Configure a public Application Load Balancer (ALB) with multiple redundant Amazon EC2 instances in public subnets. Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin.", ko: "공용 서브넷의 여러 EC2 앞에 공용 ALB를 구성하고 이를 CloudFront HTTPS 오리진으로 사용합니다." },
      { k: "B", en: "Configure a public Application Load Balancer with multiple redundant Amazon EC2 instances in private subnets. Configure Amazon CloudFront to deliver HTTPS content using the EC2 instances as the origin.", ko: "프라이빗 서브넷의 EC2 앞에 공용 ALB를 구성하되 EC2 인스턴스를 CloudFront 오리진으로 사용합니다." },
      { k: "C", en: "Configure a public Application Load Balancer (ALB) with multiple redundant Amazon EC2 instances in private subnets. Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin.", ko: "프라이빗 서브넷의 여러 EC2 앞에 공용 ALB를 구성하고 공용 ALB를 CloudFront HTTPS 오리진으로 사용합니다." },
      { k: "D", en: "Configure a public Application Load Balancer with multiple redundant Amazon EC2 instances in public subnets. Configure Amazon CloudFront to deliver HTTPS content using the EC2 instances as the origin.", ko: "공용 서브넷의 EC2 앞에 공용 ALB를 구성하되 EC2 인스턴스를 CloudFront HTTPS 오리진으로 사용합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "CloudFront가 엣지에서 HTTPS 콘텐츠를 제공하고 공용 ALB를 오리진으로 사용합니다. EC2 대상은 프라이빗 서브넷에 두어 인터넷에 직접 노출하지 않으므로 가장 안전합니다.", en: "CloudFront delivers HTTPS at the edge and uses the public ALB as its origin. Keeping EC2 targets in private subnets prevents direct internet exposure." },
    why_wrong: {
      A: { ko: "EC2 인스턴스를 공용 서브넷에 두면 불필요하게 인터넷 노출 가능성이 커집니다.", en: "Placing EC2 instances in public subnets creates unnecessary potential internet exposure." },
      B: { ko: "프라이빗 EC2 인스턴스를 CloudFront의 직접 오리진으로 사용할 수 없으며 구성된 ALB를 우회합니다.", en: "Private EC2 instances cannot serve as direct public CloudFront origins, and this bypasses the ALB." },
      D: { ko: "공용 EC2를 직접 오리진으로 사용하면 ALB의 상태 확인과 분산을 활용하지 못하고 노출도 증가합니다.", en: "Using public EC2 instances directly bypasses ALB health-aware distribution and increases exposure." }
    }
  },
  {
    id: "exam6-266", number: 266, tags: ["AWS Global Accelerator", "Multi-Region", "Application Load Balancer", "Health Check", "Low Latency"],
    question: {
      en: "A company has a popular gaming platform running on AWS. The application is sensitive to latency because latency can impact the user experience and introduce unfair advantages to some players. The application is deployed in every AWS Region. It runs on Amazon EC2 instances that are part of Auto Scaling groups configured behind Application Load Balancers (ALBs). A solutions architect needs to implement a mechanism to monitor the health of the application and redirect traffic to healthy endpoints.\nWhich solution meets these requirements?",
      ko: "지연 시간에 민감한 게임 플랫폼이 모든 AWS 리전에 배포되어 있으며 각 리전의 Auto Scaling EC2가 ALB 뒤에서 실행됩니다. 애플리케이션 상태를 모니터링하고 트래픽을 정상 엔드포인트로 리디렉션해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Configure an accelerator in AWS Global Accelerator. Add a listener for the port that the application listens on, and attach it to a Regional endpoint in each Region. Add the ALB as the endpoint.", ko: "Global Accelerator를 구성하고 애플리케이션 포트 리스너와 각 리전 엔드포인트 그룹을 만든 뒤 ALB를 엔드포인트로 추가합니다." },
      { k: "B", en: "Create an Amazon CloudFront distribution and specify the ALB as the origin server. Configure the cache behavior to use origin cache headers. Use AWS Lambda functions to optimize the traffic.", ko: "ALB를 오리진으로 하는 CloudFront 배포와 Lambda 함수로 트래픽을 최적화합니다." },
      { k: "C", en: "Create an Amazon CloudFront distribution and specify Amazon S3 as the origin server. Configure the cache behavior to use origin cache headers. Use AWS Lambda functions to optimize the traffic.", ko: "S3를 오리진으로 하는 CloudFront 배포와 Lambda 함수로 트래픽을 최적화합니다." },
      { k: "D", en: "Configure an Amazon DynamoDB database to serve as the data store for the application. Create a DynamoDB Accelerator (DAX) cluster to act as the in-memory cache for DynamoDB hosting the application data.", ko: "DynamoDB와 DAX 클러스터를 애플리케이션 데이터 저장소 및 캐시로 사용합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "Global Accelerator는 AWS 글로벌 네트워크로 사용자를 지연 시간이 낮은 정상 리전 ALB에 연결하며 엔드포인트 상태 확인과 신속한 장애 우회를 제공합니다.", en: "Global Accelerator routes users over the AWS global network to low-latency healthy Regional ALBs and provides endpoint health checks and rapid failover." },
    why_wrong: {
      B: { ko: "CloudFront는 캐시 가능한 웹 콘텐츠 전달에 적합하지만 이 동적 게임 트래픽의 다중 리전 ALB 상태 기반 라우팅에는 Global Accelerator가 적합합니다.", en: "CloudFront is optimized for cacheable web delivery; Global Accelerator better fits health-aware routing of latency-sensitive dynamic traffic across Regional ALBs." },
      C: { ko: "S3 오리진은 EC2 기반 동적 게임 애플리케이션의 엔드포인트가 아닙니다.", en: "An S3 origin cannot represent the EC2-based dynamic gaming application endpoints." },
      D: { ko: "DynamoDB와 DAX는 데이터 계층 최적화이며 글로벌 네트워크 상태 확인과 트래픽 리디렉션을 제공하지 않습니다.", en: "DynamoDB and DAX optimize the data tier and do not provide global endpoint health routing." }
    }
  },
  {
    id: "exam6-267", number: 267, tags: ["Kinesis Data Firehose", "Managed Service for Apache Flink", "Amazon S3", "Apache Parquet", "Encryption"],
    question: {
      en: "A company has one million users that use its mobile app. The company must analyze the data usage in near-real time. The company also must encrypt the data in near-real time and must store the data in a centralized location in Apache Parquet format for further processing.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "백만 명의 사용자가 모바일 앱을 사용합니다. 데이터 사용량을 준실시간으로 분석하고 암호화하며, 추가 처리를 위해 중앙 위치에 Apache Parquet 형식으로 저장해야 합니다.\n운영 부담이 가장 적은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon Kinesis data stream to store the data in Amazon S3. Create an Amazon Kinesis Data Analytics application to analyze the data. Invoke an AWS Lambda function to send the data to the Kinesis Data Analytics application.", ko: "Kinesis Data Streams로 S3에 데이터를 저장하고 Kinesis Data Analytics와 Lambda로 분석합니다." },
      { k: "B", en: "Create an Amazon Kinesis data stream to store the data in Amazon S3. Create an Amazon EMR cluster to analyze the data. Invoke an AWS Lambda function to send the data to the EMR cluster.", ko: "Kinesis Data Streams로 S3에 저장하고 EMR 클러스터와 Lambda로 분석합니다." },
      { k: "C", en: "Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon EMR cluster to analyze the data.", ko: "Kinesis Data Firehose로 S3에 저장하고 EMR 클러스터로 분석합니다." },
      { k: "D", en: "Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon Kinesis Data Analytics application to analyze the data.", ko: "Kinesis Data Firehose 전송 스트림으로 S3에 저장하고 Kinesis Data Analytics 애플리케이션으로 분석합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "Firehose는 스트리밍 데이터를 암호화하고 Parquet 형식으로 변환해 S3에 전달할 수 있습니다. Kinesis Data Analytics는 관리형 준실시간 스트림 분석을 제공해 EMR 운영이 필요 없습니다.", en: "Firehose can encrypt streaming data, convert it to Parquet, and deliver it to S3. Kinesis Data Analytics provides managed near-real-time analysis without operating an EMR cluster." },
    why_wrong: {
      A: { ko: "Kinesis Data Streams는 S3로 직접 전달하거나 Parquet 변환을 수행하지 않으므로 추가 소비자 계층이 필요합니다.", en: "Kinesis Data Streams does not directly deliver to S3 or convert to Parquet without an additional consumer." },
      B: { ko: "Data Streams와 EMR 및 Lambda 조합은 관리 구성 요소와 운영 부담이 큽니다.", en: "Combining Data Streams, EMR, and Lambda adds infrastructure and operational overhead." },
      C: { ko: "Firehose 저장은 적합하지만 EMR 클러스터를 직접 운영해야 하므로 관리형 스트림 분석보다 부담이 큽니다.", en: "Firehose delivery fits, but operating an EMR cluster adds more overhead than managed stream analytics." }
    }
  },
  {
    id: "exam6-268", number: 268, tags: ["Amazon ElastiCache", "RDS for MySQL", "Caching", "Performance"],
    question: {
      en: "A gaming company has a web application that displays scores. The application runs on Amazon EC2 instances behind an Application Load Balancer. The application stores data in an Amazon RDS for MySQL database. Users are starting to experience long delays and interruptions that are caused by database read performance. The company wants to improve the user experience while minimizing changes to the application's architecture.\nWhat should a solutions architect do to meet these requirements?",
      ko: "게임 회사의 점수 표시 웹 애플리케이션이 ALB 뒤의 EC2에서 실행되고 RDS for MySQL에 데이터를 저장합니다. 데이터베이스 읽기 성능 때문에 지연과 중단이 발생하며 아키텍처 변경을 최소화하면서 사용자 경험을 개선해야 합니다.\n어떤 조치를 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon ElastiCache in front of the database.", ko: "데이터베이스 앞에 Amazon ElastiCache를 사용합니다." },
      { k: "B", en: "Use RDS Proxy between the application and the database.", ko: "애플리케이션과 데이터베이스 사이에 RDS Proxy를 사용합니다." },
      { k: "C", en: "Migrate the application from EC2 instances to AWS Lambda.", ko: "애플리케이션을 EC2에서 Lambda로 이전합니다." },
      { k: "D", en: "Migrate the database from Amazon RDS for MySQL to Amazon DynamoDB.", ko: "데이터베이스를 RDS for MySQL에서 DynamoDB로 이전합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "자주 조회되는 점수 데이터를 ElastiCache에 캐시하면 데이터베이스 읽기를 줄이고 응답 지연을 낮추면서 기존 아키텍처 변경을 제한할 수 있습니다.", en: "Caching frequently read score data in ElastiCache reduces database reads and latency with limited architectural change." },
    why_wrong: {
      B: { ko: "RDS Proxy는 연결 풀링과 장애 조치에 유용하지만 반복 읽기 결과를 캐시하지 않습니다.", en: "RDS Proxy helps with connection pooling and failover but does not cache repeated query results." },
      C: { ko: "컴퓨팅 계층을 Lambda로 이전해도 데이터베이스 읽기 병목이 해결되지 않고 변경 범위가 큽니다.", en: "Moving compute to Lambda does not resolve the read bottleneck and requires substantial changes." },
      D: { ko: "DynamoDB로의 데이터 모델 변경은 대규모 재설계가 필요합니다.", en: "Migrating to DynamoDB requires a major data-model and application redesign." }
    }
  },
  {
    id: "exam6-269", number: 269, tags: ["RDS Read Replica", "SQL Analytics", "Read Scaling", "Minimal Change"],
    question: {
      en: "An ecommerce company has noticed performance degradation of its Amazon RDS based web application. The performance degradation is attributed to an increase in the number of read-only SQL queries triggered by business analysts. A solutions architect needs to solve the problem with minimal changes to the existing web application.\nWhat should the solutions architect recommend?",
      ko: "전자상거래 회사의 RDS 기반 웹 애플리케이션 성능이 비즈니스 분석가의 읽기 전용 SQL 쿼리 증가로 저하되었습니다. 기존 웹 애플리케이션 변경을 최소화하면서 문제를 해결해야 합니다.\n무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Export the data to Amazon DynamoDB and have the business analysts run their queries.", ko: "데이터를 DynamoDB로 내보내 분석가가 쿼리하게 합니다." },
      { k: "B", en: "Load the data into Amazon ElastiCache and have the business analysts run their queries.", ko: "데이터를 ElastiCache에 적재해 분석가가 쿼리하게 합니다." },
      { k: "C", en: "Create a read replica of the primary database and have the business analysts run their queries.", ko: "기본 데이터베이스의 읽기 전용 복제본을 만들고 분석가의 쿼리를 복제본에서 실행합니다." },
      { k: "D", en: "Copy the data into an Amazon Redshift cluster and have the business analysts run their queries.", ko: "데이터를 Redshift 클러스터로 복사해 분석가가 쿼리하게 합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "RDS 읽기 전용 복제본으로 분석 쿼리를 분리하면 기존 SQL 호환성을 유지하면서 기본 인스턴스의 읽기 부하를 줄일 수 있습니다.", en: "Routing analyst queries to an RDS read replica offloads reads from the primary while preserving SQL compatibility and requiring minimal change." },
    why_wrong: {
      A: { ko: "DynamoDB는 관계형 SQL 쿼리를 그대로 지원하지 않아 데이터 모델과 쿼리를 변경해야 합니다.", en: "DynamoDB does not preserve relational SQL queries and would require data-model changes." },
      B: { ko: "ElastiCache는 임의의 분석 SQL을 실행하는 관계형 분석 데이터베이스가 아닙니다.", en: "ElastiCache is not a relational analytics database for arbitrary SQL queries." },
      D: { ko: "Redshift는 분석에 적합하지만 별도 데이터 파이프라인과 클러스터 운영이 필요해 읽기 전용 복제본보다 변경이 큽니다.", en: "Redshift fits analytics but requires a separate data pipeline and cluster, causing more change than a read replica." }
    }
  },
  {
    id: "exam6-270", number: 270, tags: ["Amazon S3", "Client-Side Encryption", "Encryption in Transit", "Security"],
    question: {
      en: "A company is using a centralized AWS account to store log data in various Amazon S3 buckets. A solutions architect needs to ensure that the data is encrypted at rest before the data is uploaded to the S3 buckets. The data also must be encrypted in transit.\nWhich solution meets these requirements?",
      ko: "회사는 중앙 AWS 계정의 여러 S3 버킷에 로그 데이터를 저장합니다. 데이터는 S3에 업로드되기 전에 저장 데이터 형태로 암호화되어야 하고 전송 중에도 암호화되어야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Use client-side encryption to encrypt the data that is being uploaded to the S3 buckets.", ko: "S3 버킷에 업로드할 데이터를 클라이언트 측 암호화로 암호화합니다." },
      { k: "B", en: "Use server-side encryption to encrypt the data that is being uploaded to the S3 buckets.", ko: "S3 버킷에 업로드되는 데이터를 서버 측 암호화로 암호화합니다." },
      { k: "C", en: "Create bucket policies that require the use of server-side encryption with S3 managed encryption keys (SSE-S3) for S3 uploads.", ko: "S3 업로드에 SSE-S3를 요구하는 버킷 정책을 생성합니다." },
      { k: "D", en: "Enable the security option to encrypt the S3 buckets through the use of a default AWS Key Management Service (AWS KMS) key.", ko: "기본 KMS 키를 사용해 S3 버킷을 암호화하는 보안 옵션을 활성화합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "클라이언트 측 암호화는 데이터가 클라이언트에서 S3로 전송되기 전에 암호문으로 변환되게 합니다. HTTPS로 업로드하면 이미 암호화된 데이터가 전송 구간에서도 보호됩니다.", en: "Client-side encryption encrypts data before it leaves the client for S3. Uploading over HTTPS protects the already encrypted payload in transit as well." },
    why_wrong: {
      B: { ko: "서버 측 암호화는 S3가 객체를 수신한 뒤 저장할 때 적용되므로 업로드 전에 암호화해야 한다는 요구를 충족하지 않습니다.", en: "Server-side encryption is applied by S3 after receipt and does not satisfy encryption before upload." },
      C: { ko: "SSE-S3 요구 정책은 저장 시 암호화를 강제하지만 클라이언트에서 업로드 전에 데이터를 암호화하지 않습니다.", en: "Requiring SSE-S3 enforces at-rest encryption in S3 but does not encrypt data on the client before upload." },
      D: { ko: "기본 KMS 암호화도 S3 서버 측에서 적용되므로 업로드 전 암호화 요구와 다릅니다.", en: "Default KMS encryption is also applied server-side in S3 and does not encrypt the data before upload." }
    }
  },
  {
    id: "exam6-271", number: 271, tags: ["EC2 Auto Scaling", "Scheduled Scaling", "Batch Processing", "Cost Optimization"],
    question: {
      en: "A solutions architect observes that a nightly batch processing job is automatically scaled up for 1 hour before the desired Amazon EC2 capacity is reached. The peak capacity is the same every night and the batch jobs always start at 1 AM. The solutions architect needs to find a cost-effective solution that will allow for the desired EC2 capacity to be reached quickly and allow the Auto Scaling group to scale down after the batch jobs are complete.\nWhat should the solutions architect do to meet these requirements?",
      ko: "솔루션스 아키텍트는 야간 배치 처리 작업의 자동 확장에서 원하는 EC2 용량에 도달하기까지 1시간이 걸리는 것을 확인했습니다. 최대 용량은 매일 밤 같고 배치 작업은 항상 오전 1시에 시작됩니다. 원하는 용량에 빠르게 도달하고 작업 완료 후 Auto Scaling 그룹이 축소되도록 하는 비용 효율적인 솔루션이 필요합니다.\n어떻게 해야 합니까?"
    },
    options: [
      { k: "A", en: "Increase the minimum capacity for the Auto Scaling group.", ko: "Auto Scaling 그룹의 최소 용량을 늘립니다." },
      { k: "B", en: "Increase the maximum capacity for the Auto Scaling group.", ko: "Auto Scaling 그룹의 최대 용량을 늘립니다." },
      { k: "C", en: "Configure scheduled scaling to scale up to the desired compute level.", ko: "예약된 조정을 구성하여 원하는 컴퓨팅 수준까지 확장합니다." },
      { k: "D", en: "Change the scaling policy to add more EC2 instances during each scaling operation.", ko: "각 조정 작업에서 더 많은 EC2 인스턴스를 추가하도록 조정 정책을 변경합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "작업 시작 시각과 필요한 용량이 매일 일정하므로 예약된 조정으로 오전 1시 직전에 원하는 용량을 미리 확보할 수 있습니다. 작업 후에는 기존 동적 조정이 다시 축소할 수 있습니다.", en: "Because the start time and required capacity are predictable, scheduled scaling can provision the desired capacity shortly before 1 AM. Dynamic scaling can scale the group down after the work completes." },
    why_wrong: {
      A: { ko: "최소 용량을 계속 높이면 작업이 없는 시간에도 인스턴스 비용이 발생하고 축소가 제한됩니다.", en: "A permanently higher minimum incurs cost during idle hours and prevents the group from scaling below that level." },
      B: { ko: "최대 용량 증가는 확장 속도를 높이지 않으며 현재 문제는 한도가 아니라 용량 도달 시간입니다.", en: "Increasing the maximum does not speed scaling; the issue is time to reach capacity, not the upper limit." },
      D: { ko: "더 큰 단계 조정은 예측 가능한 일정에 미리 용량을 준비하는 방식보다 정확성과 비용 효율성이 낮습니다.", en: "Larger scaling steps are less precise and cost-effective than provisioning ahead of a predictable schedule." }
    }
  },
  {
    id: "exam6-272", number: 272, tags: ["CloudFront", "Application Load Balancer", "Accept-Language", "Caching", "Latency"],
    question: {
      en: "A company serves a dynamic website from a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The website needs to support multiple languages to serve customers around the world. The website's architecture is running in the us-west-1 Region and is exhibiting high request latency for users that are located in other parts of the world.\nThe website needs to serve requests quickly and efficiently regardless of a user's location. However, the company does not want to recreate the existing architecture across multiple Regions.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 ALB 뒤의 EC2 인스턴스 플릿에서 동적 웹사이트를 제공합니다. 전 세계 고객을 위해 여러 언어를 지원해야 하지만 us-west-1 리전에 있는 현재 아키텍처는 다른 지역 사용자에게 높은 지연 시간을 보입니다. 기존 아키텍처를 여러 리전에 다시 만들지 않고 사용자 위치와 관계없이 빠르고 효율적으로 요청을 처리해야 합니다.\n어떻게 해야 합니까?"
    },
    options: [
      { k: "A", en: "Replace the existing architecture with a website that is served from an Amazon S3 bucket. Configure an Amazon CloudFront distribution with the S3 bucket as the origin. Set the cache behavior settings to cache based on the Accept-Language request header.", ko: "기존 아키텍처를 S3 정적 웹사이트로 교체하고 S3를 오리진으로 하는 CloudFront 배포에서 Accept-Language 헤더를 기준으로 캐시합니다." },
      { k: "B", en: "Configure an Amazon CloudFront distribution with the ALB as the origin. Set the cache behavior settings to cache based on the Accept-Language request header.", ko: "ALB를 오리진으로 하는 CloudFront 배포를 구성하고 Accept-Language 요청 헤더를 기준으로 캐시하도록 설정합니다." },
      { k: "C", en: "Create an Amazon API Gateway API that is integrated with the ALB. Configure the API to use the HTTP integration type. Set up an API Gateway stage to enable API cache based on the Accept-Language request header.", ko: "ALB와 통합된 API Gateway API를 만들고 HTTP 통합 및 Accept-Language 헤더 기반 API 캐시를 구성합니다." },
      { k: "D", en: "Launch an EC2 instance in each additional Region and configure NGINX to act as a cache server for that Region. Put all the EC2 instances and the ALB behind an Amazon Route 53 record set with a geolocation routing policy.", ko: "추가 리전마다 NGINX 캐시 EC2를 시작하고 모든 인스턴스와 ALB를 Route 53 지리 위치 라우팅 뒤에 배치합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "CloudFront는 기존 ALB를 오리진으로 사용할 수 있으며 전 세계 엣지에서 동적 콘텐츠를 가속합니다. Accept-Language를 캐시 키에 포함하면 언어별 응답을 올바르게 캐시할 수 있습니다.", en: "CloudFront can use the existing ALB as its origin and accelerate delivery through global edge locations. Including Accept-Language in the cache key preserves the correct language variant." },
    why_wrong: {
      A: { ko: "동적 사이트를 S3 정적 사이트로 교체해야 하므로 기존 아키텍처를 유지한다는 요구와 맞지 않습니다.", en: "Replacing the dynamic application with an S3 website does not preserve the existing architecture." },
      C: { ko: "API Gateway를 추가할 필요가 없으며 CloudFront가 ALB를 직접 오리진으로 지원합니다.", en: "API Gateway is unnecessary because CloudFront supports an ALB directly as an origin." },
      D: { ko: "리전별 EC2 캐시 서버는 추가 인프라 운영과 다중 리전 구성을 요구합니다.", en: "Regional EC2 cache servers add infrastructure and require a multi-Region deployment." }
    }
  },
  {
    id: "exam6-273", number: 273, tags: ["Aurora Global Database", "Disaster Recovery", "Warm Standby", "RTO", "Multi-Region"],
    question: {
      en: "A rapidly growing ecommerce company is running its workloads in a single AWS Region. A solutions architect must create a disaster recovery (DR) strategy that includes a different AWS Region. The company wants its database to be up to date in the DR Region with the least possible latency. The remaining infrastructure in the DR Region needs to run at reduced capacity and must be able to scale up if necessary.\nWhich solution will meet these requirements with the LOWEST recovery time objective (RTO)?",
      ko: "빠르게 성장하는 전자상거래 회사가 단일 AWS 리전에서 워크로드를 실행합니다. 다른 리전을 포함하는 DR 전략이 필요하며, DR 리전의 데이터베이스는 최소 지연으로 최신 상태여야 합니다. 나머지 DR 인프라는 축소된 용량으로 실행되다가 필요할 때 확장할 수 있어야 합니다.\n가장 낮은 RTO를 제공하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use an Amazon Aurora global database with a pilot light deployment.", ko: "Aurora 글로벌 데이터베이스와 파일럿 라이트 배포를 사용합니다." },
      { k: "B", en: "Use an Amazon Aurora global database with a warm standby deployment.", ko: "Aurora 글로벌 데이터베이스와 웜 스탠바이 배포를 사용합니다." },
      { k: "C", en: "Use an Amazon RDS Multi-AZ DB instance with a pilot light deployment.", ko: "RDS Multi-AZ DB 인스턴스와 파일럿 라이트 배포를 사용합니다." },
      { k: "D", en: "Use an Amazon RDS Multi-AZ DB instance with a warm standby deployment.", ko: "RDS Multi-AZ DB 인스턴스와 웜 스탠바이 배포를 사용합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Aurora 글로벌 데이터베이스는 전용 글로벌 스토리지 복제로 리전 간 지연을 낮춥니다. 웜 스탠바이는 축소된 전체 환경을 이미 실행하므로 파일럿 라이트보다 빠르게 확장하고 전환할 수 있어 RTO가 가장 낮습니다.", en: "Aurora Global Database provides low-latency cross-Region replication. A warm standby already runs the full stack at reduced capacity, so it can scale and fail over faster than pilot light for the lowest RTO." },
    why_wrong: {
      A: { ko: "파일럿 라이트는 핵심 구성만 실행하므로 복구 시 추가 자원을 배포해야 해 웜 스탠바이보다 RTO가 깁니다.", en: "Pilot light runs only core components and requires more deployment during recovery, increasing RTO." },
      C: { ko: "RDS Multi-AZ는 같은 리전의 가용 영역 장애 대비 기능이며 다른 리전으로 복제하지 않습니다.", en: "RDS Multi-AZ protects across Availability Zones in one Region and is not cross-Region DR replication." },
      D: { ko: "웜 스탠바이 방식이어도 RDS Multi-AZ만으로는 다른 리전에 최신 데이터베이스를 유지할 수 없습니다.", en: "A warm standby does not make RDS Multi-AZ a cross-Region database replication solution." }
    }
  },
  {
    id: "exam6-274", number: 274, tags: ["Disaster Recovery", "Amazon EC2", "AMI", "CloudFormation", "Backup and Restore"],
    question: {
      en: "A company runs an application on Amazon EC2 instances. The company needs to implement a disaster recovery (DR) solution for the application. The DR solution needs to have a recovery time objective (RTO) of less than 4 hours. The DR solution also needs to use the fewest possible AWS resources during normal operations.\nWhich solution will meet these requirements in the MOST operationally efficient way?",
      ko: "회사는 EC2 인스턴스에서 애플리케이션을 실행합니다. RTO가 4시간 미만이고 정상 운영 중 가능한 한 적은 AWS 리소스를 사용하는 DR 솔루션이 필요합니다.\n가장 운영 효율적으로 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS Lambda and custom scripts.", ko: "EC2 인스턴스의 AMI를 생성해 보조 리전으로 복사하고 Lambda와 사용자 지정 스크립트로 인프라 배포를 자동화합니다." },
      { k: "B", en: "Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS CloudFormation.", ko: "EC2 인스턴스의 AMI를 생성해 보조 리전으로 복사하고 CloudFormation으로 인프라 배포를 자동화합니다." },
      { k: "C", en: "Launch EC2 instances in a secondary AWS Region. Keep the EC2 instances in the secondary Region active at all times.", ko: "보조 리전에 EC2 인스턴스를 시작하고 항상 활성 상태로 유지합니다." },
      { k: "D", en: "Launch EC2 instances in a secondary Availability Zone. Keep the EC2 instances in the secondary Availability Zone active at all times.", ko: "보조 가용 영역에 EC2 인스턴스를 시작하고 항상 활성 상태로 유지합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "AMI를 보조 리전에 보관하고 장애 시 CloudFormation으로 환경을 재구성하는 백업 및 복원 방식은 평상시 실행 자원을 최소화합니다. 선언형 템플릿으로 4시간 이내 배포를 자동화하면서 사용자 지정 코드 운영도 줄입니다.", en: "Storing copied AMIs and recreating the environment with CloudFormation is a backup-and-restore approach that minimizes running resources. Declarative infrastructure automation can meet the RTO with less operational work than custom scripts." },
    why_wrong: {
      A: { ko: "Lambda와 사용자 지정 스크립트도 가능하지만 CloudFormation보다 개발·유지 관리 부담이 큽니다.", en: "Lambda and custom scripts can work but require more development and maintenance than CloudFormation." },
      C: { ko: "보조 리전 인스턴스를 항상 실행하면 정상 운영 중 사용하는 리소스가 증가합니다.", en: "Always-on instances in another Region consume more resources during normal operations." },
      D: { ko: "다른 가용 영역은 리전 재해에 대한 DR이 아니며 상시 인스턴스 비용도 발생합니다.", en: "Another Availability Zone does not provide protection from a Regional disaster and also keeps resources running." }
    }
  },
  {
    id: "exam6-275", number: 275, tags: ["EC2 Auto Scaling", "Scheduled Scaling", "Application Load Balancer", "Cost Optimization"],
    question: {
      en: "A company runs an internal browser-based application. The application runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales up to 20 instances during work hours, but scales down to 2 instances overnight. Staff are complaining that the application is very slow when the day begins, although it runs well by mid-morning.\nHow should the scaling be changed to address the staff complaints and keep costs to a minimum?",
      ko: "회사의 내부 브라우저 애플리케이션은 ALB 뒤의 다중 AZ EC2 Auto Scaling 그룹에서 실행됩니다. 업무 시간에는 20개까지 늘고 밤에는 2개로 줄지만, 업무 시작 직후에는 매우 느리고 오전 중반부터 정상화됩니다.\n비용을 최소화하면서 문제를 해결하려면 조정을 어떻게 변경해야 합니까?"
    },
    options: [
      { k: "A", en: "Implement a scheduled action that sets the desired capacity to 20 shortly before the office opens.", ko: "업무 시작 직전에 원하는 용량을 20으로 설정하는 예약 작업을 구현합니다." },
      { k: "B", en: "Implement a step scaling action triggered at a lower CPU threshold, and decrease the cooldown period.", ko: "더 낮은 CPU 임계값에서 단계 조정을 시작하고 휴지 기간을 줄입니다." },
      { k: "C", en: "Implement a target tracking action triggered at a lower CPU threshold, and decrease the cooldown period.", ko: "더 낮은 CPU 임계값에서 대상 추적 조정을 시작하고 휴지 기간을 줄입니다." },
      { k: "D", en: "Implement a scheduled action that sets the minimum and maximum capacity to 20 shortly before the office opens.", ko: "업무 시작 직전에 최소 및 최대 용량을 모두 20으로 설정하는 예약 작업을 구현합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "업무 시작이라는 예측 가능한 수요에 맞춰 직전에 원하는 용량을 20으로 예약하면 사용자가 접속할 때 인스턴스가 준비됩니다. 최소·최대값을 고정하지 않으므로 이후 수요에 따라 축소할 수 있어 비용도 절감됩니다.", en: "Scheduling desired capacity at 20 shortly before opening ensures capacity is ready when users arrive. Because minimum and maximum are not fixed at 20, the group can later scale down to control cost." },
    why_wrong: {
      B: { ko: "반응형 단계 조정은 부하가 발생한 뒤 시작하므로 업무 시작 시 지연을 완전히 방지하지 못합니다.", en: "Reactive step scaling begins after load appears and may not prevent the opening-time slowdown." },
      C: { ko: "대상 추적도 실제 부하에 반응하므로 예측 가능한 시작 시간 전에 용량을 준비하는 것보다 느립니다.", en: "Target tracking also reacts to observed load and is slower than preparing capacity before a predictable start." },
      D: { ko: "최소와 최대를 모두 20으로 고정하면 자동 축소가 막혀 불필요한 비용이 발생합니다.", en: "Setting both minimum and maximum to 20 prevents scale-in and creates unnecessary cost." }
    }
  },
  {
    id: "exam6-276", number: 276, tags: ["RDS for Oracle", "Storage Auto Scaling", "EC2 Auto Scaling", "CloudWatch", "Choose two"],
    question: {
      en: "A company has a multi-tier application deployed on several Amazon EC2 instances in an Auto Scaling group. An Amazon RDS for Oracle instance is the application's data layer that uses Oracle-specific PL/SQL functions. Traffic to the application has been steadily increasing. This is causing the EC2 instances to become overloaded and the RDS instance to run out of storage. The Auto Scaling group does not have any scaling metrics and defines the minimum healthy instance count only. The company predicts that traffic will continue to increase at a steady but unpredictable rate before leveling out.\nWhat should a solutions architect do to ensure the system can automatically scale for the increased traffic? (Choose two.)",
      ko: "회사의 다중 계층 애플리케이션은 Auto Scaling 그룹의 여러 EC2 인스턴스에서 실행되고, 데이터 계층은 Oracle 전용 PL/SQL 함수를 사용하는 RDS for Oracle입니다. 트래픽 증가로 EC2는 과부하되고 RDS 스토리지는 부족해지고 있습니다. Auto Scaling 그룹에는 조정 지표가 없고 최소 정상 인스턴스 수만 정의되어 있습니다. 트래픽은 일정하지만 예측하기 어려운 속도로 계속 증가한 뒤 안정될 전망입니다.\n시스템이 자동으로 확장되게 하려면 무엇을 해야 합니까? (두 개 선택)"
    },
    options: [
      { k: "A", en: "Configure storage Auto Scaling on the RDS for Oracle instance.", ko: "RDS for Oracle 인스턴스에 스토리지 자동 조정을 구성합니다." },
      { k: "B", en: "Migrate the database to Amazon Aurora to use Auto Scaling storage.", ko: "자동 조정 스토리지를 사용하도록 데이터베이스를 Aurora로 마이그레이션합니다." },
      { k: "C", en: "Configure an alarm on the RDS for Oracle instance for low free storage space.", ko: "RDS for Oracle의 낮은 여유 스토리지 공간에 대한 경보를 구성합니다." },
      { k: "D", en: "Configure the Auto Scaling group to use the average CPU as the scaling metric.", ko: "Auto Scaling 그룹이 평균 CPU를 조정 지표로 사용하도록 구성합니다." },
      { k: "E", en: "Configure the Auto Scaling group to use the average free memory as the scaling metric.", ko: "Auto Scaling 그룹이 평균 여유 메모리를 조정 지표로 사용하도록 구성합니다." }
    ],
    answer: ["A", "D"],
    explanation: { ko: "RDS 스토리지 자동 조정은 여유 공간이 부족해질 때 할당 스토리지를 자동으로 늘립니다. EC2 Auto Scaling에는 기본 제공되는 평균 CPU 사용률을 지표로 지정해 애플리케이션 계층을 부하에 따라 자동 확장할 수 있습니다.", en: "RDS storage autoscaling automatically increases allocated storage as free space runs low. Using average CPU utilization as the Auto Scaling metric lets the application tier scale automatically with load." },
    why_wrong: {
      B: { ko: "Aurora는 Oracle 엔진과 Oracle 전용 PL/SQL을 지원하지 않아 대규모 코드 변경이 필요합니다.", en: "Aurora does not run the Oracle engine or preserve Oracle-specific PL/SQL without major changes." },
      C: { ko: "경보는 부족 상태를 알릴 뿐 스토리지를 자동으로 확장하지 않습니다.", en: "An alarm reports low storage but does not expand storage automatically." },
      E: { ko: "EC2 메모리는 기본 CloudWatch 지표가 아니므로 에이전트와 사용자 지정 지표 구성이 추가로 필요합니다.", en: "Free memory is not a default EC2 CloudWatch metric and would require an agent and custom metric configuration." }
    }
  },
  {
    id: "exam6-277", number: 277, tags: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Video Processing", "Cost Optimization"],
    question: {
      en: "A company provides an online service for posting video content and transcoding it for use by any mobile platform. The application architecture uses Amazon Elastic File System (Amazon EFS) Standard to collect and store the videos so that multiple Amazon EC2 Linux instances can access the video content for processing. As the popularity of the service has grown over time, the storage costs have become too expensive.\nWhich storage solution is MOST cost-effective?",
      ko: "회사는 동영상을 게시하고 모바일 플랫폼용으로 트랜스코딩하는 온라인 서비스를 제공합니다. 여러 Linux EC2 인스턴스가 처리할 동영상에 접근하도록 EFS Standard에 수집·저장하고 있지만 서비스 성장에 따라 스토리지 비용이 너무 높아졌습니다.\n가장 비용 효율적인 스토리지 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use AWS Storage Gateway for files to store and process the video content.", ko: "파일용 AWS Storage Gateway를 사용해 동영상 콘텐츠를 저장하고 처리합니다." },
      { k: "B", en: "Use AWS Storage Gateway for volumes to store and process the video content.", ko: "볼륨용 AWS Storage Gateway를 사용해 동영상 콘텐츠를 저장하고 처리합니다." },
      { k: "C", en: "Use Amazon EFS for storing the video content. Once processing is complete, transfer the files to Amazon Elastic Block Store (Amazon EBS).", ko: "동영상을 EFS에 저장하고 처리가 끝나면 EBS로 전송합니다." },
      { k: "D", en: "Use Amazon S3 for storing the video content. Move the files temporarily over to an Amazon Elastic Block Store (Amazon EBS) volume attached to the server for processing.", ko: "동영상은 S3에 저장하고 처리할 때 서버에 연결된 EBS 볼륨으로 임시 이동합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "대용량 동영상의 영구 저장에는 내구성과 단가가 유리한 S3가 적합합니다. 처리 중에만 EC2의 EBS로 복사하면 고가의 공유 EFS 용량을 계속 유지하지 않아도 됩니다.", en: "S3 provides durable, low-cost storage for the video library. Copying objects temporarily to an attached EBS volume for processing avoids keeping the full dataset on more expensive shared EFS storage." },
    why_wrong: {
      A: { ko: "File Gateway는 주로 온프레미스 파일 애플리케이션과 S3를 연결하는 하이브리드 서비스로, AWS 내부 워크로드에는 불필요합니다.", en: "File Gateway primarily connects on-premises file applications to S3 and is unnecessary for this AWS-hosted workload." },
      B: { ko: "Volume Gateway도 온프레미스 블록 스토리지 통합용이며 여러 EC2의 비용 효율적인 콘텐츠 저장소가 아닙니다.", en: "Volume Gateway is for hybrid block storage and is not the appropriate low-cost content store for multiple EC2 instances." },
      C: { ko: "처리 후 EBS에 영구 저장하면 S3보다 비용이 높고 단일 볼륨 접근 및 용량 제약도 생깁니다.", en: "Keeping completed content on EBS costs more than S3 and introduces volume attachment and capacity constraints." }
    }
  },
  {
    id: "exam6-278", number: 278, tags: ["Amazon DynamoDB", "Amazon S3", "Amazon Macie", "EventBridge", "SNS", "Choose two"],
    question: {
      en: "A company wants to create an application to store employee data in a hierarchical structured relationship. The company needs a minimum-latency response to high-traffic queries for the employee data and must protect any sensitive data. The company also needs to receive monthly email messages if any financial information is present in the employee data.\nWhich combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
      ko: "회사는 계층 구조 관계로 직원 데이터를 저장하는 애플리케이션을 만들려고 합니다. 높은 트래픽의 직원 데이터 쿼리에 최소 지연으로 응답하고 민감한 데이터를 보호해야 합니다. 또한 직원 데이터에 금융 정보가 있으면 매월 이메일을 받아야 합니다.\n어떤 단계 조합이 요구사항을 충족합니까? (두 개 선택)"
    },
    options: [
      { k: "A", en: "Use Amazon Redshift to store the employee data in hierarchies. Unload the data to Amazon S3 every month.", ko: "Redshift에 직원 데이터를 계층 구조로 저장하고 매월 S3로 언로드합니다." },
      { k: "B", en: "Use Amazon DynamoDB to store the employee data in hierarchies. Export the data to Amazon S3 every month.", ko: "DynamoDB에 직원 데이터를 계층 구조로 저장하고 매월 S3로 내보냅니다." },
      { k: "C", en: "Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly events to AWS Lambda.", ko: "AWS 계정에 Macie를 구성하고 EventBridge와 통합하여 매월 Lambda로 이벤트를 보냅니다." },
      { k: "D", en: "Use Amazon Athena to analyze the employee data in Amazon S3. Integrate Athena with Amazon QuickSight to publish analysis dashboards and share the dashboards with users.", ko: "Athena로 S3의 직원 데이터를 분석하고 QuickSight 대시보드를 게시·공유합니다." },
      { k: "E", en: "Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly notifications through an Amazon Simple Notification Service (Amazon SNS) subscription.", ko: "AWS 계정에 Macie를 구성하고 EventBridge와 통합하여 SNS 구독을 통해 매월 알림을 보냅니다." }
    ],
    answer: ["B", "E"],
    explanation: { ko: "DynamoDB는 계층형 데이터를 문서나 인접 목록으로 모델링해 대규모 트래픽에 한 자릿수 밀리초 성능을 제공하며, S3 내보내기로 Macie 분석 대상을 만들 수 있습니다. Macie는 S3의 금융 정보를 탐지하고 EventBridge와 SNS를 통해 이메일 알림을 전달할 수 있습니다.", en: "DynamoDB can model hierarchical data and provide single-digit millisecond performance at scale, while monthly exports place the data in S3. Macie can discover financial information in S3 and use EventBridge with an SNS subscription for email notification." },
    why_wrong: {
      A: { ko: "Redshift는 분석용 데이터 웨어하우스로 고트래픽 운영 쿼리에 최소 지연을 제공하는 키-값 데이터베이스가 아닙니다.", en: "Redshift is an analytics warehouse, not a low-latency operational database for high-traffic queries." },
      C: { ko: "Lambda 호출만으로는 요구된 이메일 전달 대상이 구성되지 않습니다.", en: "Invoking Lambda alone does not directly configure the required email delivery destination." },
      D: { ko: "Athena와 QuickSight는 분석·시각화 도구이며 민감 정보 탐지와 이메일 알림 요구를 직접 충족하지 않습니다.", en: "Athena and QuickSight provide analytics and visualization, not sensitive-data discovery with email alerts." }
    }
  },
  {
    id: "exam6-279", number: 279, tags: ["AWS Backup", "Amazon DynamoDB", "Cold Storage", "Lifecycle", "Compliance"],
    question: {
      en: "A company has an application that is backed by an Amazon DynamoDB table. The company's compliance requirements specify that database backups must be taken every month, must be available for 6 months, and must be retained for 7 years.\nWhich solution will meet these requirements?",
      ko: "회사의 애플리케이션은 DynamoDB 테이블을 사용합니다. 규정 준수 요구사항에 따라 데이터베이스 백업을 매월 생성하고, 6개월 동안 즉시 사용할 수 있게 하며, 7년 동안 보존해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Create an AWS Backup plan to back up the DynamoDB table on the first day of each month. Specify a lifecycle policy that transitions the backup to cold storage after 6 months. Set the retention period for each backup to 7 years.", ko: "매월 1일 DynamoDB 테이블을 백업하는 AWS Backup 계획을 만들고, 6개월 후 콜드 스토리지로 전환하며 각 백업을 7년 보존하는 수명 주기 정책을 지정합니다." },
      { k: "B", en: "Create a DynamoDB on-demand backup of the DynamoDB table on the first day of each month. Transition the backup to Amazon S3 Glacier Flexible Retrieval after 6 months. Create an S3 Lifecycle policy to delete backups that are older than 7 years.", ko: "매월 DynamoDB 온디맨드 백업을 생성하고 6개월 후 S3 Glacier Flexible Retrieval로 전환하며 7년 후 삭제하는 S3 수명 주기 정책을 만듭니다." },
      { k: "C", en: "Use the AWS SDK to develop a script that creates an on-demand backup of the DynamoDB table. Set up an Amazon EventBridge rule that runs the script on the first day of each month. Create a second script that will run on the second day of each month to transition DynamoDB backups that are older than 6 months to cold storage and to delete backups that are older than 7 years.", ko: "SDK 스크립트로 매월 온디맨드 백업을 만들고 별도 스크립트로 6개월 후 콜드 스토리지 전환과 7년 후 삭제를 수행합니다." },
      { k: "D", en: "Use the AWS CLI to create an on-demand backup of the DynamoDB table. Set up an Amazon EventBridge rule that runs the command on the first day of each month with a cron expression. Specify in the command to transition the backups to cold storage after 6 months and to delete the backups after 7 years.", ko: "AWS CLI 온디맨드 백업 명령을 EventBridge cron으로 매월 실행하고 명령에서 6개월 후 콜드 스토리지 전환과 7년 후 삭제를 지정합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "AWS Backup은 DynamoDB의 예약 백업, 콜드 스토리지 전환, 장기 보존을 백업 계획과 수명 주기 정책으로 관리합니다. 매월 실행, 6개월 후 전환, 7년 보존을 직접 지정할 수 있습니다.", en: "AWS Backup centrally manages scheduled DynamoDB backups, cold-storage transition, and long-term retention. A monthly plan can directly encode the 6-month transition and 7-year retention requirements." },
    why_wrong: {
      B: { ko: "DynamoDB 온디맨드 백업을 사용자가 S3 Glacier로 직접 전환하거나 S3 수명 주기로 관리할 수 없습니다.", en: "DynamoDB on-demand backups cannot be directly transitioned to S3 Glacier or managed with an S3 lifecycle policy." },
      C: { ko: "사용자 지정 스크립트는 불필요한 운영 부담을 만들며 DynamoDB 백업의 콜드 전환은 AWS Backup 수명 주기로 관리해야 합니다.", en: "Custom scripts add unnecessary operational work, and cold transition is managed through AWS Backup lifecycle policies." },
      D: { ko: "DynamoDB CLI 백업 명령에는 콜드 스토리지 전환 및 7년 후 삭제를 지정하는 기능이 없습니다.", en: "The DynamoDB CLI backup command does not provide parameters for cold transition and timed deletion." }
    }
  },
  {
    id: "exam6-280", number: 280, tags: ["Amazon CloudFront", "Amazon S3", "Amazon Athena", "Amazon QuickSight", "Log Analytics"],
    question: {
      en: "A company is using Amazon CloudFront with its website. The company has enabled logging on the CloudFront distribution, and logs are saved in one of the company's Amazon S3 buckets. The company needs to perform advanced analyses on the logs and build visualizations.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 웹사이트에 CloudFront를 사용하며 배포 로그를 S3 버킷에 저장하고 있습니다. 로그를 고급 분석하고 시각화를 만들어야 합니다.\n어떻게 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.", ko: "Athena 표준 SQL로 S3의 CloudFront 로그를 분석하고 AWS Glue로 결과를 시각화합니다." },
      { k: "B", en: "Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight.", ko: "Athena 표준 SQL로 S3의 CloudFront 로그를 분석하고 QuickSight로 결과를 시각화합니다." },
      { k: "C", en: "Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.", ko: "DynamoDB 표준 SQL로 S3의 CloudFront 로그를 분석하고 AWS Glue로 결과를 시각화합니다." },
      { k: "D", en: "Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight.", ko: "DynamoDB 표준 SQL로 S3의 CloudFront 로그를 분석하고 QuickSight로 결과를 시각화합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Athena는 S3에 저장된 CloudFront 로그를 서버리스 표준 SQL로 직접 분석할 수 있습니다. QuickSight는 Athena 결과에 연결해 대시보드와 시각화를 생성합니다.", en: "Athena runs serverless standard SQL directly against CloudFront logs in S3. QuickSight connects to Athena results to build visualizations and dashboards." },
    why_wrong: {
      A: { ko: "AWS Glue는 데이터 카탈로그 및 ETL 서비스이며 결과 시각화 도구가 아닙니다.", en: "AWS Glue provides data catalog and ETL capabilities; it is not the visualization service." },
      C: { ko: "DynamoDB는 S3 로그를 표준 SQL로 직접 쿼리하지 않으며 Glue도 시각화 도구가 아닙니다.", en: "DynamoDB does not directly query S3 logs with standard SQL, and Glue is not a visualization tool." },
      D: { ko: "QuickSight는 시각화에 적합하지만 DynamoDB가 S3의 로그를 표준 SQL로 분석하는 서비스는 아닙니다.", en: "QuickSight is suitable for visualization, but DynamoDB is not the service for standard SQL analysis of logs in S3." }
    }
  },
  {
    id: "exam6-281", number: 281, tags: ["Amazon RDS", "PostgreSQL", "Multi-AZ", "RPO", "High Availability"],
    question: {
      en: "A company runs a fleet of web servers using an Amazon RDS for PostgreSQL DB instance. After a routine compliance check, the company sets a standard that requires a recovery point objective (RPO) of less than 1 second for all its production databases.\nWhich solution meets these requirements?",
      ko: "회사는 Amazon RDS for PostgreSQL DB 인스턴스를 사용하는 웹 서버 플릿을 운영합니다. 정기 규정 준수 검사 후 모든 프로덕션 데이터베이스에 1초 미만의 RPO를 요구하는 표준을 설정했습니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Enable a Multi-AZ deployment for the DB instance.", ko: "DB 인스턴스에 Multi-AZ 배포를 활성화합니다." },
      { k: "B", en: "Enable auto scaling for the DB instance in one Availability Zone.", ko: "단일 가용 영역의 DB 인스턴스에 자동 조정을 활성화합니다." },
      { k: "C", en: "Configure the DB instance in one Availability Zone, and create multiple read replicas in a separate Availability Zone.", ko: "DB 인스턴스를 한 가용 영역에 구성하고 다른 가용 영역에 여러 읽기 전용 복제본을 생성합니다." },
      { k: "D", en: "Configure the DB instance in one Availability Zone, and configure AWS Database Migration Service (AWS DMS) change data capture (CDC) tasks.", ko: "DB 인스턴스를 한 가용 영역에 구성하고 AWS DMS 변경 데이터 캡처(CDC) 작업을 구성합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "RDS Multi-AZ는 대기 인스턴스에 동기식으로 데이터를 복제하므로 커밋된 데이터의 손실을 방지하고 사실상 0에 가까운 RPO를 제공합니다.", en: "RDS Multi-AZ synchronously replicates data to a standby, protecting committed transactions and providing an RPO effectively near zero." },
    why_wrong: {
      B: { ko: "단일 AZ의 자동 조정은 고가용성이나 데이터 복제를 제공하지 않습니다.", en: "Scaling in one Availability Zone provides neither high availability nor synchronous data replication." },
      C: { ko: "읽기 전용 복제본은 비동기 복제를 사용하므로 복제 지연 때문에 1초 미만 RPO를 보장하지 않습니다.", en: "Read replicas use asynchronous replication and cannot guarantee a sub-second RPO because of replication lag." },
      D: { ko: "DMS CDC도 비동기식이며 재해 복구용 동기식 대기 데이터베이스를 제공하지 않습니다.", en: "DMS CDC is asynchronous and does not provide a synchronous standby for database failover." }
    }
  },
  {
    id: "exam6-282", number: 282, tags: ["Application Load Balancer", "Security Group", "Private Subnet", "Least Privilege", "Amazon EC2"],
    question: {
      en: "A company runs a web application that is deployed on Amazon EC2 instances in the private subnet of a VPC. An Application Load Balancer (ALB) that extends across the public subnets directs web traffic to the EC2 instances. The company wants to implement new security measures to restrict inbound traffic from the ALB to the EC2 instances while preventing access from any other source inside or outside the private subnet of the EC2 instances.\nWhich solution will meet these requirements?",
      ko: "회사는 VPC의 프라이빗 서브넷에 있는 EC2 인스턴스에서 웹 애플리케이션을 실행하며, 퍼블릭 서브넷의 ALB가 트래픽을 전달합니다. EC2 인스턴스로 들어오는 트래픽을 ALB에서 온 것으로만 제한하고 프라이빗 서브넷 안팎의 다른 모든 소스 접근을 차단하려고 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Configure a route in a route table to direct traffic from the internet to the private IP addresses of the EC2 instances.", ko: "인터넷 트래픽을 EC2 인스턴스의 프라이빗 IP 주소로 전달하는 라우트를 구성합니다." },
      { k: "B", en: "Configure the security group for the EC2 instances to only allow traffic that comes from the security group for the ALB.", ko: "EC2 인스턴스 보안 그룹에서 ALB 보안 그룹으로부터 오는 트래픽만 허용합니다." },
      { k: "C", en: "Move the EC2 instances into the public subnet. Give the EC2 instances a set of Elastic IP addresses.", ko: "EC2 인스턴스를 퍼블릭 서브넷으로 옮기고 Elastic IP 주소를 할당합니다." },
      { k: "D", en: "Configure the security group for the ALB to allow any TCP traffic on any port.", ko: "ALB 보안 그룹에서 모든 포트의 모든 TCP 트래픽을 허용합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "EC2 보안 그룹의 인바운드 소스로 ALB 보안 그룹 ID를 참조하면 실제 주소 변화와 관계없이 ALB가 전달한 트래픽만 허용할 수 있습니다.", en: "Referencing the ALB security group as the source in the EC2 security group allows only traffic forwarded by the ALB, regardless of changing IP addresses." },
    why_wrong: {
      A: { ko: "라우팅 테이블은 소스별 접근 제어 수단이 아니며 인터넷에서 프라이빗 IP로 직접 라우팅할 수도 없습니다.", en: "Route tables do not provide source-level access control, and internet traffic cannot route directly to private IP addresses." },
      C: { ko: "인스턴스를 퍼블릭으로 노출하면 요구된 격리 수준이 낮아집니다.", en: "Moving the instances to public subnets exposes them and weakens the required isolation." },
      D: { ko: "ALB에 모든 TCP 포트를 허용해도 ALB에서 EC2로 가는 트래픽만 제한할 수 없으며 과도한 권한입니다.", en: "Opening every TCP port on the ALB does not restrict EC2 access to the ALB and violates least privilege." }
    }
  },
  {
    id: "exam6-283", number: 283, tags: ["Amazon FSx for NetApp ONTAP", "NFS", "SMB", "Amazon EC2", "Migration"],
    question: {
      en: "A research company runs experiments that are powered by a simulation application and a visualization application. The simulation application runs on Linux and outputs intermediate data to an NFS share every 5 minutes. The visualization application is a Windows desktop application that displays the simulation output and requires an SMB file system.\nThe company maintains two synchronized file systems. This strategy is causing data duplication and inefficient resource usage. The company needs to migrate the applications to AWS without making code changes to either application.\nWhich solution will meet these requirements?",
      ko: "연구 회사는 Linux 시뮬레이션 애플리케이션이 5분마다 NFS 공유에 중간 데이터를 출력하고, Windows 시각화 애플리케이션이 SMB 파일 시스템을 통해 그 결과를 표시하는 실험을 운영합니다. 동기화된 두 파일 시스템으로 인해 데이터가 중복되고 리소스가 비효율적으로 사용됩니다. 애플리케이션 코드를 변경하지 않고 AWS로 마이그레이션해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Migrate both applications to AWS Lambda. Create an Amazon S3 bucket to exchange data between the applications.", ko: "두 애플리케이션을 Lambda로 마이그레이션하고 S3 버킷으로 데이터를 교환합니다." },
      { k: "B", en: "Migrate both applications to Amazon Elastic Container Service (Amazon ECS). Configure Amazon FSx File Gateway for storage.", ko: "두 애플리케이션을 Amazon ECS로 마이그레이션하고 FSx File Gateway를 스토리지로 구성합니다." },
      { k: "C", en: "Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to Windows EC2 instances. Configure Amazon Simple Queue Service (Amazon SQS) to exchange data between the applications.", ko: "시뮬레이션은 Linux EC2, 시각화는 Windows EC2로 옮기고 SQS로 데이터를 교환합니다." },
      { k: "D", en: "Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to Windows EC2 instances. Configure Amazon FSx for NetApp ONTAP for storage.", ko: "시뮬레이션은 Linux EC2, 시각화는 Windows EC2로 옮기고 FSx for NetApp ONTAP을 스토리지로 구성합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "FSx for NetApp ONTAP은 동일한 데이터에 NFS와 SMB 멀티프로토콜 접근을 제공합니다. Linux와 Windows 애플리케이션은 기존 프로토콜을 유지하면서 하나의 파일 시스템을 공유할 수 있습니다.", en: "FSx for NetApp ONTAP provides multiprotocol NFS and SMB access to the same data, allowing both applications to retain their existing file protocols on one file system." },
    why_wrong: {
      A: { ko: "Lambda와 S3 객체 API로 전환하려면 장기 실행 또는 데스크톱 애플리케이션과 파일 접근 코드를 변경해야 합니다.", en: "Moving to Lambda and S3 object APIs would require changes to the simulation, desktop application, and file access logic." },
      B: { ko: "FSx File Gateway는 온프레미스에서 FSx for Windows File Server에 접근하는 하이브리드 캐시이며 NFS·SMB 동시 공유 해법이 아닙니다.", en: "FSx File Gateway is a hybrid cache for access to FSx for Windows File Server and does not provide the required shared NFS and SMB access." },
      C: { ko: "SQS는 파일 시스템이 아니므로 기존 NFS와 SMB 인터페이스를 대체하려면 코드 변경이 필요합니다.", en: "SQS is not a file system, so replacing NFS and SMB with messages would require code changes." }
    }
  },
  {
    id: "exam6-284", number: 284, tags: ["AWS Cost Explorer", "Billing", "Cost Allocation", "Reporting"],
    question: {
      en: "As part of budget planning, management wants a report of AWS billed items listed by user. The data will be used to create department budgets. A solutions architect needs to determine the most efficient way to obtain this report information.\nWhich solution meets these requirements?",
      ko: "예산 계획의 일부로 경영진은 사용자별 AWS 청구 항목 보고서를 원하며, 이 데이터로 부서 예산을 만들 예정입니다. 솔루션스 아키텍트는 보고서 정보를 얻는 가장 효율적인 방법을 결정해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Run a query with Amazon Athena to generate the report.", ko: "Athena 쿼리를 실행하여 보고서를 생성합니다." },
      { k: "B", en: "Create a report in Cost Explorer and download the report.", ko: "Cost Explorer에서 보고서를 만들고 다운로드합니다." },
      { k: "C", en: "Access the bill details from the billing dashboard and download the bill.", ko: "결제 대시보드에서 청구 상세 정보에 접근해 청구서를 다운로드합니다." },
      { k: "D", en: "Modify a cost budget in AWS Budgets to alert with Amazon Simple Email Service (Amazon SES).", ko: "AWS Budgets의 비용 예산을 수정하여 SES로 알림을 보냅니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Cost Explorer는 비용과 사용량을 사용자 또는 비용 할당 태그 같은 기준으로 필터링·그룹화하고 결과를 CSV로 내려받을 수 있어 가장 간단합니다.", en: "Cost Explorer can filter and group cost and usage data by dimensions or cost-allocation tags and download the resulting report as CSV, making it the most efficient option." },
    why_wrong: {
      A: { ko: "Athena를 사용하려면 먼저 상세 비용 및 사용 보고서를 S3에 구성하고 스키마와 쿼리를 관리해야 합니다.", en: "Athena would first require a Cost and Usage Report in S3 plus schema and query management." },
      C: { ko: "기본 청구서 다운로드는 사용자별 분석과 부서 예산용 그룹화를 효율적으로 제공하지 않습니다.", en: "The basic bill download does not efficiently provide user-level grouping for departmental planning." },
      D: { ko: "AWS Budgets는 임계값 추적과 알림용이며 과거 청구 항목 보고서를 만드는 서비스가 아닙니다.", en: "AWS Budgets tracks thresholds and sends alerts; it does not create the requested itemized cost report." }
    }
  },
  {
    id: "exam6-285", number: 285, tags: ["Amazon S3", "API Gateway", "AWS Lambda", "Amazon SES", "Serverless", "Cost Optimization"],
    question: {
      en: "A company hosts its static website by using Amazon S3. The company wants to add a contact form to its webpage. The contact form will have dynamic server-side components for users to input their name, email address, phone number, and user message. The company anticipates that there will be fewer than 100 site visits each month.\nWhich solution will meet these requirements MOST cost-effectively?",
      ko: "회사는 S3로 정적 웹사이트를 호스팅합니다. 사용자가 이름, 이메일 주소, 전화번호, 메시지를 입력하는 동적 서버 측 구성 요소의 문의 양식을 추가하려고 하며 월 방문자는 100명 미만으로 예상됩니다.\n가장 비용 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Host a dynamic contact form page in Amazon Elastic Container Service (Amazon ECS). Set up Amazon Simple Email Service (Amazon SES) to connect to any third-party email provider.", ko: "ECS에서 동적 문의 양식 페이지를 호스팅하고 SES를 외부 이메일 공급자와 연결합니다." },
      { k: "B", en: "Create an Amazon API Gateway endpoint with an AWS Lambda backend that makes a call to Amazon Simple Email Service (Amazon SES).", ko: "SES를 호출하는 Lambda 백엔드와 API Gateway 엔드포인트를 생성합니다." },
      { k: "C", en: "Convert the static webpage to dynamic by deploying Amazon Lightsail. Use client-side scripting to build the contact form. Integrate the form with Amazon WorkMail.", ko: "Lightsail에 배포하여 동적 웹페이지로 전환하고 클라이언트 측 스크립트 문의 양식을 WorkMail과 통합합니다." },
      { k: "D", en: "Create a t2.micro Amazon EC2 instance. Deploy a LAMP (Linux, Apache, MySQL, PHP/Perl/Python) stack to host the webpage. Use client-side scripting to build the contact form. Integrate the form with Amazon WorkMail.", ko: "t2.micro EC2에 LAMP 스택을 배포하고 클라이언트 측 문의 양식을 WorkMail과 통합합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "API Gateway, Lambda, SES의 서버리스 조합은 요청이 있을 때만 실행되고 사용량에 따라 과금되므로 월 100회 미만의 낮은 트래픽에 가장 비용 효율적입니다.", en: "The serverless API Gateway, Lambda, and SES combination runs on demand and charges by usage, making it the most cost-effective choice for fewer than 100 monthly visits." },
    why_wrong: {
      A: { ko: "ECS 서비스는 매우 낮은 트래픽의 단일 양식에 불필요한 컨테이너 운영과 상시 비용을 추가합니다.", en: "ECS adds unnecessary container operations and standing cost for a very low-traffic form." },
      C: { ko: "Lightsail 서버를 계속 실행하면 요청 기반 서버리스 방식보다 비용과 운영 부담이 큽니다.", en: "An always-running Lightsail server costs more and requires more operations than an on-demand serverless design." },
      D: { ko: "EC2와 전체 LAMP 스택은 과도하며 패치·용량 관리와 상시 인스턴스 비용이 필요합니다.", en: "EC2 and a full LAMP stack are excessive and require patching, capacity management, and continuous instance cost." }
    }
  },
  {
    id: "exam6-286", number: 286, tags: ["Amazon CloudFront", "Amazon S3", "Cache Invalidation", "CI/CD", "Static Website"],
    question: {
      en: "A company has a static website that is hosted on Amazon CloudFront in front of Amazon S3. The static website uses a database backend. The company notices that the website does not reflect updates that have been made in the website's Git repository. The company checks the continuous integration and continuous delivery (CI/CD) pipeline between the Git repository and Amazon S3. The company verifies that the webhooks are configured properly and that the CI/CD pipeline is sending messages that indicate successful deployments.\nA solutions architect needs to implement a solution that displays the updates on the website.\nWhich solution will meet these requirements?",
      ko: "회사는 S3 앞에 CloudFront를 두고 정적 웹사이트를 호스팅하며 데이터베이스 백엔드도 사용합니다. Git 저장소의 변경 사항이 웹사이트에 반영되지 않지만, Git과 S3 사이 CI/CD 파이프라인의 웹후크와 배포 성공 메시지는 정상입니다.\n웹사이트에 업데이트를 표시하려면 어떤 솔루션을 구현해야 합니까?"
    },
    options: [
      { k: "A", en: "Add an Application Load Balancer.", ko: "Application Load Balancer를 추가합니다." },
      { k: "B", en: "Add Amazon ElastiCache for Redis or Memcached to the database layer of the web application.", ko: "웹 애플리케이션의 데이터베이스 계층에 Redis 또는 Memcached용 ElastiCache를 추가합니다." },
      { k: "C", en: "Invalidate the CloudFront cache.", ko: "CloudFront 캐시를 무효화합니다." },
      { k: "D", en: "Use AWS Certificate Manager (ACM) to validate the website's SSL certificate.", ko: "ACM을 사용해 웹사이트의 SSL 인증서를 검증합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "S3 배포가 성공했는데 이전 콘텐츠가 보인다면 CloudFront 엣지 캐시에 기존 객체가 남아 있는 것입니다. 해당 경로를 무효화하면 다음 요청에서 최신 S3 객체를 가져옵니다.", en: "If deployment to S3 succeeded but old content remains visible, CloudFront edge caches still hold the previous objects. Invalidating those paths makes subsequent requests retrieve the updated S3 content." },
    why_wrong: {
      A: { ko: "ALB는 S3 정적 콘텐츠의 오래된 CloudFront 캐시를 갱신하지 않습니다.", en: "An ALB does not refresh stale CloudFront objects for an S3 static site." },
      B: { ko: "문제는 데이터베이스 읽기 성능이 아니라 정적 객체 캐시이므로 ElastiCache와 무관합니다.", en: "The issue is cached static objects, not database read performance, so ElastiCache is unrelated." },
      D: { ko: "인증서 검증은 HTTPS 신뢰를 위한 것이며 콘텐츠 최신성에 영향을 주지 않습니다.", en: "Certificate validation affects HTTPS trust, not whether cached content is current." }
    }
  },
  {
    id: "exam6-287", number: 287, tags: ["Microsoft SQL Server", "Amazon EC2", "Amazon FSx for Windows File Server", "SMB", "Migration"],
    question: {
      en: "A company wants to migrate a Windows-based application from on premises to the AWS Cloud. The application has three tiers: an application tier, a business tier, and a database tier with Microsoft SQL Server. The company wants to use specific features of SQL Server such as native backups and Data Quality Services. The company also needs to share files for processing between the tiers.\nHow should a solutions architect design the architecture to meet these requirements?",
      ko: "회사는 온프레미스 Windows 기반 3계층 애플리케이션을 AWS로 이전하려고 합니다. 데이터베이스 계층은 Microsoft SQL Server이며 네이티브 백업과 Data Quality Services 같은 특정 기능을 사용해야 합니다. 계층 간 처리 파일 공유도 필요합니다.\n어떻게 아키텍처를 설계해야 합니까?"
    },
    options: [
      { k: "A", en: "Host all three tiers on Amazon EC2 instances. Use Amazon FSx File Gateway for file sharing between the tiers.", ko: "세 계층을 모두 EC2에 호스팅하고 FSx File Gateway로 계층 간 파일을 공유합니다." },
      { k: "B", en: "Host all three tiers on Amazon EC2 instances. Use Amazon FSx for Windows File Server for file sharing between the tiers.", ko: "세 계층을 모두 EC2에 호스팅하고 FSx for Windows File Server로 계층 간 파일을 공유합니다." },
      { k: "C", en: "Host the application tier and the business tier on Amazon EC2 instances. Host the database tier on Amazon RDS. Use Amazon Elastic File System (Amazon EFS) for file sharing between the tiers.", ko: "애플리케이션·비즈니스 계층은 EC2에, 데이터베이스는 RDS에 호스팅하고 EFS로 파일을 공유합니다." },
      { k: "D", en: "Host the application tier and the business tier on Amazon EC2 instances. Host the database tier on Amazon RDS. Use a Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volume for file sharing between the tiers.", ko: "애플리케이션·비즈니스 계층은 EC2에, 데이터베이스는 RDS에 호스팅하고 io2 EBS 볼륨으로 파일을 공유합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "SQL Server를 EC2에 직접 설치하면 RDS에서 제한될 수 있는 네이티브 기능과 Data Quality Services를 모두 사용할 수 있습니다. FSx for Windows File Server는 Windows 계층들이 공유할 수 있는 완전관리형 SMB 파일 시스템입니다.", en: "Running SQL Server on EC2 preserves access to native features such as backups and Data Quality Services. FSx for Windows File Server supplies a fully managed SMB share for all Windows tiers." },
    why_wrong: {
      A: { ko: "FSx File Gateway는 온프레미스에서 AWS의 FSx 파일 공유에 접근하는 하이브리드 게이트웨이이며 AWS 내부 계층 간 공유에는 필요하지 않습니다.", en: "FSx File Gateway is a hybrid gateway for on-premises access to an FSx share and is unnecessary between AWS-hosted tiers." },
      C: { ko: "RDS for SQL Server는 Data Quality Services 같은 일부 인스턴스 수준 기능을 지원하지 않으며 EFS는 기본적으로 NFS입니다.", en: "RDS for SQL Server does not support some instance-level features such as Data Quality Services, and EFS provides NFS rather than a native Windows SMB share." },
      D: { ko: "RDS 기능 제한이 남고 EBS 볼륨은 일반적인 다중 Windows 서버용 공유 SMB 파일 시스템이 아닙니다.", en: "RDS feature limitations remain, and EBS is not a general shared SMB file system for multiple Windows servers." }
    }
  },
  {
    id: "exam6-288", number: 288, tags: ["Amazon EFS", "Linux", "Shared File System", "NFS", "Migration"],
    question: {
      en: "A company is migrating a Linux-based web server group to AWS. The web servers must access files in a shared file store for some content. The company must not make any changes to the application.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 Linux 기반 웹 서버 그룹을 AWS로 마이그레이션하고 있습니다. 웹 서버들은 일부 콘텐츠를 위해 공유 파일 저장소에 접근해야 하며 애플리케이션을 변경해서는 안 됩니다.\n어떻게 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon S3 Standard bucket with access to the web servers.", ko: "웹 서버가 접근할 수 있는 S3 Standard 버킷을 생성합니다." },
      { k: "B", en: "Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin.", ko: "S3 버킷을 오리진으로 하는 CloudFront 배포를 구성합니다." },
      { k: "C", en: "Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on all web servers.", ko: "EFS 파일 시스템을 생성해 모든 웹 서버에 마운트합니다." },
      { k: "D", en: "Configure a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume to all web servers.", ko: "gp3 EBS 볼륨을 구성해 모든 웹 서버에 마운트합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "EFS는 여러 Linux EC2 인스턴스가 동시에 NFS로 마운트할 수 있는 완전관리형 공유 파일 시스템이므로 기존 파일 시스템 인터페이스를 유지할 수 있습니다.", en: "EFS is a fully managed shared NFS file system that multiple Linux EC2 instances can mount concurrently, preserving the application's existing file interface." },
    why_wrong: {
      A: { ko: "S3는 객체 스토리지이므로 기존 파일 시스템 경로를 그대로 사용하려면 애플리케이션 변경이 필요합니다.", en: "S3 is object storage, so using it in place of a mounted file system would require application changes." },
      B: { ko: "CloudFront는 콘텐츠 전송 캐시이며 서버들이 쓰고 공유하는 파일 시스템을 제공하지 않습니다.", en: "CloudFront is a content delivery cache and does not provide a shared file system for the servers." },
      D: { ko: "일반 EBS 볼륨은 여러 인스턴스가 동시에 범용 공유 파일 시스템으로 마운트하도록 설계되지 않았습니다.", en: "A standard EBS volume is not designed to be mounted as a general shared file system by multiple instances." }
    }
  },
  {
    id: "exam6-289", number: 289, tags: ["AWS Lambda", "Amazon S3", "IAM Role", "Least Privilege", "Security"],
    question: {
      en: "A company has an AWS Lambda function that needs read access to an Amazon S3 bucket that is located in the same AWS account.\nWhich solution will meet these requirements in the MOST secure manner?",
      ko: "회사의 Lambda 함수가 동일한 AWS 계정에 있는 S3 버킷에 대한 읽기 권한이 필요합니다.\n가장 안전하게 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Apply an S3 bucket policy that grants read access to the S3 bucket.", ko: "S3 버킷 읽기 권한을 부여하는 버킷 정책을 적용합니다." },
      { k: "B", en: "Apply an IAM role to the Lambda function. Apply an IAM policy to the role to grant read access to the S3 bucket.", ko: "Lambda 함수에 IAM 역할을 적용하고 해당 역할의 IAM 정책으로 그 S3 버킷 읽기 권한을 부여합니다." },
      { k: "C", en: "Embed an access key and a secret key in the Lambda function's code to grant the required IAM permissions for read access to the S3 bucket.", ko: "Lambda 함수 코드에 액세스 키와 보안 키를 포함해 S3 버킷 읽기 권한을 부여합니다." },
      { k: "D", en: "Apply an IAM role to the Lambda function. Apply an IAM policy to the role to grant read access to all S3 buckets in the account.", ko: "Lambda 함수에 IAM 역할을 적용하고 계정의 모든 S3 버킷 읽기 권한을 역할에 부여합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Lambda 실행 역할에 필요한 특정 버킷의 읽기 권한만 부여하면 임시 자격 증명을 자동으로 사용하면서 최소 권한 원칙을 지킬 수 있습니다.", en: "A Lambda execution role with read permission scoped to the specific bucket uses automatically managed temporary credentials and follows least privilege." },
    why_wrong: {
      A: { ko: "버킷 정책만으로는 어떤 주체에 권한을 부여할지 명확히 해야 하며 함수 실행 역할에 권한을 부여하는 방식이 가장 직접적이고 안전합니다.", en: "A bucket policy still requires a clearly identified principal; granting scoped permission to the function's execution role is the direct secure pattern." },
      C: { ko: "코드에 장기 자격 증명을 저장하면 노출과 키 교체 위험이 생깁니다.", en: "Embedding long-lived credentials in code creates exposure and rotation risks." },
      D: { ko: "모든 버킷 읽기 권한은 필요한 단일 버킷보다 범위가 넓어 최소 권한 원칙을 위반합니다.", en: "Read access to every bucket is broader than required and violates least privilege." }
    }
  },
  {
    id: "exam6-290", number: 290, tags: ["Amazon EC2", "Auto Scaling", "Spot Instances", "On-Demand Instances", "Cost Optimization"],
    question: {
      en: "A company hosts a web application on multiple Amazon EC2 instances. The EC2 instances are in an Auto Scaling group that scales in response to user demand. The company wants to optimize cost savings without making a long-term commitment.\nWhich EC2 instance purchasing option should a solutions architect recommend to meet these requirements?",
      ko: "회사는 사용자 수요에 따라 조정되는 Auto Scaling 그룹의 여러 EC2 인스턴스에서 웹 애플리케이션을 호스팅합니다. 장기 약정 없이 비용을 최대한 절감하려고 합니다.\n어떤 EC2 구매 옵션을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Dedicated Instances only", ko: "전용 인스턴스만 사용" },
      { k: "B", en: "On-Demand Instances only", ko: "온디맨드 인스턴스만 사용" },
      { k: "C", en: "A mix of On-Demand Instances and Spot Instances", ko: "온디맨드 인스턴스와 스팟 인스턴스를 혼합 사용" },
      { k: "D", en: "A mix of On-Demand Instances and Reserved Instances", ko: "온디맨드 인스턴스와 예약 인스턴스를 혼합 사용" }
    ],
    answer: ["C"],
    explanation: { ko: "온디맨드 인스턴스로 기본 가용성을 유지하고 스팟 인스턴스로 탄력적 용량을 저렴하게 공급하면 장기 약정 없이 Auto Scaling 비용을 절감할 수 있습니다.", en: "On-Demand Instances can provide baseline availability while Spot Instances supply discounted elastic capacity, reducing Auto Scaling costs without a long-term commitment." },
    why_wrong: {
      A: { ko: "전용 인스턴스는 격리 요구에 사용하며 비용 절감 목적에는 가장 비쌉니다.", en: "Dedicated Instances address isolation requirements and are generally the most expensive option here." },
      B: { ko: "온디맨드만 사용하면 약정은 없지만 중단 허용 용량에 스팟 할인 혜택을 활용하지 못합니다.", en: "On-Demand only avoids commitment but misses Spot discounts for interruptible capacity." },
      D: { ko: "예약 인스턴스 할인에는 1년 또는 3년의 기간 약정이 필요합니다.", en: "Reserved Instance discounts require a one-year or three-year term commitment." }
    }
  },
  {
    id: "exam6-291", number: 291, tags: ["Amazon CloudFront", "Signed URL", "Signed Cookie", "Private Content", "Choose two"],
    question: {
      en: "A media company uses Amazon CloudFront for publicly available streaming video content. The company wants to protect video content hosted on Amazon S3 by controlling authorized users. Some users use custom HTTP clients that do not support cookies, and some users cannot change the hardcoded URLs that they use for access. Which services or methods meet these requirements with the least impact on users? (Choose two.)",
      ko: "미디어 회사는 공개 스트리밍 비디오 콘텐츠에 CloudFront를 사용합니다. 액세스 권한이 있는 사용자를 제어하여 S3에서 호스팅되는 비디오를 보호하려고 합니다. 일부 사용자는 쿠키를 지원하지 않는 사용자 지정 HTTP 클라이언트를 사용하고, 일부 사용자는 액세스에 사용하는 하드코딩된 URL을 변경할 수 없습니다. 사용자 영향을 최소화하면서 요구사항을 충족하는 방법은 무엇입니까? (두 개 선택)"
    },
    options: [
      { k: "A", en: "Signed cookies", ko: "서명된 쿠키" },
      { k: "B", en: "Signed URLs", ko: "서명된 URL" },
      { k: "C", en: "AWS AppSync", ko: "AWS AppSync" },
      { k: "D", en: "JSON Web Tokens (JWTs)", ko: "JSON 웹 토큰(JWT)" },
      { k: "E", en: "AWS Secrets Manager", ko: "AWS Secrets Manager" }
    ],
    answer: ["A", "B"],
    explanation: { ko: "CloudFront 서명된 URL은 쿠키를 지원하지 않는 클라이언트에 적합합니다. 서명된 쿠키는 여러 제한 콘텐츠에 접근시키면서 기존 하드코딩 URL을 바꾸지 않아도 되는 사용자에게 적합합니다.", en: "CloudFront signed URLs work for clients that do not support cookies. Signed cookies authorize access to multiple restricted files without requiring users to change existing hardcoded URLs." },
    why_wrong: {
      C: { ko: "AppSync는 GraphQL API 서비스이며 CloudFront 비공개 콘텐츠 접근 제어 방식이 아닙니다.", en: "AppSync is a GraphQL API service, not a CloudFront private-content access method." },
      D: { ko: "JWT 자체는 CloudFront가 기본적으로 비공개 객체 접근에 검증하는 서명 메커니즘이 아닙니다.", en: "A JWT by itself is not CloudFront's native authorization mechanism for private objects." },
      E: { ko: "Secrets Manager는 비밀 저장·교체 서비스이며 최종 사용자 콘텐츠 배포 권한을 부여하지 않습니다.", en: "Secrets Manager stores and rotates secrets; it does not authorize end-user CloudFront content delivery." }
    }
  },
  {
    id: "exam6-292", number: 292, tags: ["Kinesis Data Streams", "Kinesis Data Analytics", "Kinesis Data Firehose", "Amazon MSK", "AWS Glue", "Amazon Athena", "Choose two"],
    question: {
      en: "A company is preparing a new data platform to collect real-time streaming data from multiple sources. The company must transform the data before writing it to Amazon S3 and needs the ability to query the transformed data by using SQL. Which solutions meet these requirements? (Choose two.)",
      ko: "한 회사가 여러 소스에서 실시간 스트리밍 데이터를 수집할 새로운 데이터 플랫폼을 준비하고 있습니다. Amazon S3에 데이터를 쓰기 전에 데이터를 변환해야 하며, SQL을 사용하여 변환된 데이터를 쿼리할 수 있어야 합니다. 어떤 솔루션이 요구사항을 충족합니까? (두 개 선택)"
    },
    options: [
      { k: "A", en: "Stream data with Amazon Kinesis Data Streams. Transform the data with Amazon Kinesis Data Analytics. Write the data to Amazon S3 with Amazon Kinesis Data Firehose. Query the transformed data in S3 with Amazon Athena.", ko: "Kinesis Data Streams로 스트리밍하고 Kinesis Data Analytics로 변환한 뒤 Kinesis Data Firehose로 S3에 쓰고 Athena로 쿼리합니다." },
      { k: "B", en: "Stream data with Amazon Managed Streaming for Apache Kafka (Amazon MSK). Transform the data with AWS Glue and write it to Amazon S3. Query the transformed data in S3 with Amazon Athena.", ko: "Amazon MSK로 스트리밍하고 AWS Glue로 변환하여 S3에 쓴 뒤 Athena로 쿼리합니다." },
      { k: "C", en: "Collect data with AWS Database Migration Service (AWS DMS). Transform the data with Amazon EMR and write it to Amazon S3. Query the transformed data in S3 with Amazon Athena.", ko: "AWS DMS로 수집하고 EMR로 변환하여 S3에 쓴 뒤 Athena로 쿼리합니다." },
      { k: "D", en: "Stream data with Amazon MSK. Transform the data with Amazon Kinesis Data Analytics and write it to Amazon S3. Query the transformed data in S3 with the Amazon RDS query editor.", ko: "Amazon MSK로 스트리밍하고 Kinesis Data Analytics로 변환하여 S3에 쓴 뒤 RDS 쿼리 편집기로 쿼리합니다." },
      { k: "E", en: "Stream data with Amazon Kinesis Data Streams. Transform the data with AWS Glue. Write the data to Amazon S3 with Amazon Kinesis Data Firehose. Query the transformed data in S3 with the Amazon RDS query editor.", ko: "Kinesis Data Streams로 스트리밍하고 AWS Glue로 변환한 뒤 Firehose로 S3에 쓰고 RDS 쿼리 편집기로 쿼리합니다." }
    ],
    answer: ["A", "B"],
    explanation: { ko: "Kinesis 기반 파이프라인과 MSK·Glue 기반 파이프라인은 모두 실시간 스트림 수집과 S3 저장 전 변환을 지원합니다. S3의 변환 결과는 Athena의 서버리스 SQL로 쿼리할 수 있습니다.", en: "Both a Kinesis pipeline and an MSK with Glue pipeline can ingest streams and transform records before storage in S3. Athena provides serverless SQL queries over the transformed S3 data." },
    why_wrong: {
      C: { ko: "DMS는 주로 데이터베이스 마이그레이션과 CDC용이며 여러 일반 실시간 스트림 소스의 수집 플랫폼이 아닙니다.", en: "DMS is primarily for database migration and CDC, not general real-time ingestion from multiple streaming sources." },
      D: { ko: "RDS 쿼리 편집기는 S3 객체를 직접 SQL로 쿼리하지 않습니다.", en: "The RDS query editor does not run SQL directly against data stored in S3." },
      E: { ko: "RDS 쿼리 편집기는 S3의 변환 데이터를 직접 쿼리할 수 없습니다.", en: "The RDS query editor cannot directly query the transformed data in S3." }
    }
  },
  {
    id: "exam6-293", number: 293, tags: ["AWS Storage Gateway", "Stored Volumes", "On-Premises", "Backup", "Local Access"],
    question: {
      en: "A company has an aging on-premises volume backup solution. The company wants to use AWS as part of a new backup solution while maintaining local access to all data during backup to AWS. The company wants data backed up to AWS to be transferred automatically and securely. Which solution meets these requirements?",
      ko: "회사에는 수명이 다한 온프레미스 볼륨 백업 솔루션이 있습니다. AWS를 새 백업 솔루션의 일부로 사용하면서 AWS에 백업되는 동안 모든 데이터에 대한 로컬 액세스를 유지하려고 합니다. AWS에 백업된 데이터가 자동으로 안전하게 전송되어야 합니다. 어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Use AWS Snowball to migrate data from the on-premises solution to Amazon S3. Configure the on-premises system with Snowball S3 endpoints for local data access.", ko: "AWS Snowball로 온프레미스 데이터를 S3로 마이그레이션하고 로컬 액세스를 위해 Snowball S3 엔드포인트를 구성합니다." },
      { k: "B", en: "Use AWS Snowball Edge to migrate data from the on-premises solution to Amazon S3. Use the Snowball Edge file interface to provide local access.", ko: "AWS Snowball Edge로 S3에 마이그레이션하고 Snowball Edge 파일 인터페이스로 로컬 액세스를 제공합니다." },
      { k: "C", en: "Use AWS Storage Gateway with a cached volume gateway. Run the appliance on premises, configure the locally cached data percentage, and mount the gateway storage volumes for local access.", ko: "Storage Gateway 캐시 볼륨 게이트웨이를 온프레미스에서 실행하고 로컬 캐시 비율을 구성한 뒤 볼륨을 마운트합니다." },
      { k: "D", en: "Use AWS Storage Gateway with a stored volume gateway. Run the appliance on premises, map gateway storage volumes to on-premises storage, and mount the gateway storage volumes for local access.", ko: "Storage Gateway 저장 볼륨 게이트웨이를 온프레미스에서 실행하고 게이트웨이 볼륨을 온프레미스 스토리지에 매핑한 뒤 로컬 액세스를 위해 마운트합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "저장 볼륨 게이트웨이는 전체 기본 데이터를 온프레미스에 유지해 모든 데이터에 낮은 지연으로 접근하게 하고, 특정 시점 스냅샷을 AWS에 비동기식으로 안전하게 백업합니다.", en: "Stored Volume Gateway keeps the complete primary dataset on premises for low-latency local access and asynchronously backs up point-in-time snapshots securely to AWS." },
    why_wrong: {
      A: { ko: "Snowball은 일회성 대량 전송 장치이며 자동화된 지속 백업 솔루션이 아닙니다.", en: "Snowball is an offline bulk transfer device, not an automated ongoing backup solution." },
      B: { ko: "Snowball Edge도 장치 배송과 작업 단위 사용에 적합하며 지속적인 자동 볼륨 백업에는 부적합합니다.", en: "Snowball Edge is suited to transfer jobs and appliance use, not continuous automated volume backups." },
      C: { ko: "캐시 볼륨은 자주 쓰는 일부 데이터만 로컬에 두므로 모든 데이터의 로컬 가용성을 보장하지 않습니다.", en: "Cached volumes keep only frequently accessed data locally and do not guarantee local access to the complete dataset." }
    }
  },
  {
    id: "exam6-294", number: 294, tags: ["Amazon S3", "Gateway VPC Endpoint", "Private Access", "Amazon EC2", "VPC"],
    question: {
      en: "An application hosted on an Amazon EC2 instance must access an Amazon S3 bucket. The traffic must not traverse the internet. How should a solutions architect configure access to meet these requirements?",
      ko: "Amazon EC2 인스턴스에서 호스팅되는 애플리케이션은 Amazon S3 버킷에 액세스해야 합니다. 트래픽이 인터넷을 통과하면 안 됩니다. 솔루션스 아키텍트는 액세스를 어떻게 구성해야 합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon Route 53 to create a private hosted zone.", ko: "Route 53을 사용하여 프라이빗 호스팅 영역을 생성합니다." },
      { k: "B", en: "Configure a gateway VPC endpoint for Amazon S3 in the VPC.", ko: "VPC에서 Amazon S3용 게이트웨이 VPC 엔드포인트를 구성합니다." },
      { k: "C", en: "Configure the EC2 instance to access the S3 bucket through a NAT gateway.", ko: "NAT 게이트웨이를 통해 S3 버킷에 액세스하도록 EC2 인스턴스를 구성합니다." },
      { k: "D", en: "Configure an AWS Site-to-Site VPN connection between the VPC and the S3 bucket.", ko: "VPC와 S3 버킷 간에 Site-to-Site VPN 연결을 구성합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "S3 Gateway VPC Endpoint는 라우팅 테이블의 S3 접두사 목록을 통해 트래픽을 AWS 네트워크 안에서 직접 S3로 전달합니다. 인터넷 게이트웨이와 NAT 장치가 필요하지 않습니다.", en: "An S3 gateway VPC endpoint routes traffic through the S3 prefix list over the AWS network without an internet gateway or NAT device." },
    why_wrong: {
      A: { ko: "프라이빗 호스팅 영역은 DNS 이름 해석용이며 S3로 가는 사설 네트워크 경로를 만들지 않습니다.", en: "A private hosted zone controls DNS resolution but does not create a private network path to S3." },
      C: { ko: "NAT 게이트웨이는 퍼블릭 S3 엔드포인트로 나가는 경로를 제공하므로 인터넷 비경유 요구의 최적 해법이 아닙니다.", en: "A NAT gateway reaches the public S3 endpoint and is not the private endpoint solution required here." },
      D: { ko: "S3 버킷은 Site-to-Site VPN의 고객 네트워크 엔드포인트가 될 수 없습니다.", en: "An S3 bucket cannot serve as the customer-network endpoint of a Site-to-Site VPN." }
    }
  },
  {
    id: "exam6-295", number: 295, tags: ["Amazon S3 Object Lambda", "PII", "Data Transformation", "Least Privilege", "Serverless"],
    question: {
      en: "An ecommerce company stores terabytes of customer data in the AWS Cloud. The data contains personally identifiable information (PII). The company wants three applications to use the data. Only one application should process the PII. The PII must be removed before the other two applications process the data. Which solution meets these requirements with the least operational overhead?",
      ko: "전자상거래 회사는 테라바이트 규모의 고객 데이터를 AWS 클라우드에 저장하며 데이터에는 PII가 포함되어 있습니다. 세 가지 애플리케이션 중 하나만 PII를 처리해야 하고, 다른 두 애플리케이션이 데이터를 처리하기 전에는 PII를 제거해야 합니다. 최소 운영 오버헤드로 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Store the data in an Amazon DynamoDB table. Create a proxy application layer that intercepts and processes the data requested by each application.", ko: "DynamoDB에 데이터를 저장하고 각 애플리케이션의 요청을 가로채 처리하는 프록시 애플리케이션 계층을 만듭니다." },
      { k: "B", en: "Store the data in an Amazon S3 bucket. Use S3 Object Lambda to process and transform the data before returning it to the requesting application.", ko: "S3 버킷에 데이터를 저장하고 요청 애플리케이션에 반환하기 전에 S3 Object Lambda로 데이터를 처리하고 변환합니다." },
      { k: "C", en: "Process the data and store three transformed copies in separate S3 buckets so each application has its own dataset.", ko: "데이터를 처리하고 변환된 복사본 세 개를 별도 S3 버킷에 저장하여 각 애플리케이션에 전용 데이터 세트를 제공합니다." },
      { k: "D", en: "Process the data and store three transformed copies in separate DynamoDB tables so each application has its own dataset.", ko: "데이터를 처리하고 변환된 복사본 세 개를 별도 DynamoDB 테이블에 저장하여 각 애플리케이션에 전용 데이터 세트를 제공합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "S3 Object Lambda는 요청자에 따라 객체를 반환하기 전에 Lambda로 PII를 제거하거나 변환할 수 있습니다. 원본 하나만 유지하므로 중복 저장과 별도 프록시 운영을 줄입니다.", en: "S3 Object Lambda can transform objects at retrieval time and remove PII based on the requesting application. It preserves one source copy and avoids duplicate datasets or a separately managed proxy." },
    why_wrong: {
      A: { ko: "테라바이트 객체 데이터를 DynamoDB로 옮기고 사용자 지정 프록시를 운영하면 비용과 복잡성이 커집니다.", en: "Moving terabytes of object data to DynamoDB and operating a custom proxy adds cost and complexity." },
      C: { ko: "S3 복사본 세 개는 저장 중복과 데이터 동기화 작업을 만듭니다.", en: "Three S3 copies duplicate storage and create synchronization work." },
      D: { ko: "여러 DynamoDB 테이블은 데이터 중복과 변환 파이프라인 운영 부담을 모두 증가시킵니다.", en: "Multiple DynamoDB tables increase both data duplication and transformation-pipeline overhead." }
    }
  },
  {
    id: "exam6-296", number: 296, tags: ["Amazon VPC", "CIDR", "VPC Peering", "Networking"],
    question: {
      en: "A development team launched a new application on Amazon EC2 instances in a development VPC. A solutions architect must create a new VPC in the same account and peer it with the development VPC. The development VPC uses the CIDR block 192.168.0.0/24. The CIDR block for the new VPC must be valid for VPC peering. What is the smallest CIDR block that meets these requirements?",
      ko: "개발 팀이 개발 VPC 내부의 EC2 인스턴스에서 새 애플리케이션을 출시했습니다. 솔루션스 아키텍트는 동일한 계정에 새 VPC를 만들고 개발 VPC와 피어링해야 합니다. 개발 VPC의 CIDR 블록은 192.168.0.0/24입니다. 새 VPC의 CIDR 블록은 VPC 피어링에 유효해야 합니다. 요구사항을 충족하는 가장 작은 CIDR 블록은 무엇입니까?"
    },
    options: [
      { k: "A", en: "10.0.1.0/32", ko: "10.0.1.0/32" },
      { k: "B", en: "192.168.0.0/24", ko: "192.168.0.0/24" },
      { k: "C", en: "192.168.1.0/32", ko: "192.168.1.0/32" },
      { k: "D", en: "10.0.1.0/24", ko: "10.0.1.0/24" }
    ],
    answer: ["D"],
    explanation: { ko: "IPv4 VPC CIDR 블록의 허용 크기는 /16에서 /28 사이이며 피어링할 VPC와 겹치면 안 됩니다. 선택지 중 유효하고 겹치지 않는 가장 작은 블록은 10.0.1.0/24입니다.", en: "An IPv4 VPC CIDR must be between /16 and /28 and cannot overlap the peer VPC. Of the choices, 10.0.1.0/24 is the smallest valid nonoverlapping block." },
    why_wrong: {
      A: { ko: "/32는 VPC에 허용되는 CIDR 크기 범위를 벗어납니다.", en: "A /32 block is outside the valid VPC CIDR size range." },
      B: { ko: "기존 개발 VPC의 CIDR과 완전히 겹쳐 피어링할 수 없습니다.", en: "This exactly overlaps the development VPC and cannot be peered." },
      C: { ko: "주소 범위는 겹치지 않지만 /32는 VPC CIDR로 허용되지 않습니다.", en: "Although nonoverlapping, a /32 is not allowed as a VPC CIDR block." }
    }
  },
  {
    id: "exam6-297", number: 297, tags: ["EC2 Auto Scaling", "Application Load Balancer", "Target Tracking", "CPU Utilization", "Cost Optimization"],
    question: {
      en: "A company deploys an application on five Amazon EC2 instances. An Application Load Balancer distributes traffic by using a target group. Average CPU utilization is usually below 10% but occasionally spikes to 65%. A solutions architect must automate scaling, optimize cost, and ensure sufficient CPU capacity during spikes. Which solution meets these requirements?",
      ko: "회사는 5개의 EC2 인스턴스에 애플리케이션을 배포하고 ALB 대상 그룹으로 트래픽을 분산합니다. 평균 CPU 사용률은 대부분 10% 미만이지만 때때로 65%까지 급증합니다. 확장성을 자동화하고 비용을 최적화하며 급증 시 충분한 CPU 용량을 보장해야 합니다. 어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Create a CloudWatch alarm when CPUUtilization is below 20%. Invoke a Lambda function from the alarm to terminate one EC2 instance in the ALB target group.", ko: "CPUUtilization이 20% 미만이면 경보를 만들고 Lambda를 호출해 ALB 대상 그룹의 EC2 인스턴스 하나를 종료합니다." },
      { k: "B", en: "Create an EC2 Auto Scaling group that uses the existing ALB and target group. Configure a target tracking policy based on ASGAverageCPUUtilization with minimum capacity 2, desired capacity 3, maximum capacity 6, and a target value of 50%. Add the EC2 instances to the group.", ko: "기존 ALB와 대상 그룹을 사용하는 Auto Scaling 그룹을 만들고 ASGAverageCPUUtilization 기반 대상 추적 정책을 구성합니다. 최소 2, 원하는 용량 3, 최대 6, 목표값 50%로 설정하고 EC2 인스턴스를 그룹에 추가합니다." },
      { k: "C", en: "Create an EC2 Auto Scaling group that uses the existing ALB and target group. Set minimum capacity to 2, desired capacity to 3, and maximum capacity to 6. Add the EC2 instances to the group without a scaling policy.", ko: "기존 ALB와 대상 그룹을 사용하는 Auto Scaling 그룹을 만들고 최소 2, 원하는 용량 3, 최대 6으로 설정하지만 조정 정책은 구성하지 않습니다." },
      { k: "D", en: "Create CloudWatch alarms for CPU below 20% and above 50%, publish notifications to Amazon SNS, and manually change the number of running EC2 instances after receiving an email.", ko: "CPU 20% 미만과 50% 초과 경보를 SNS 이메일로 받고 관리자가 실행 중인 EC2 수를 수동으로 변경합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "대상 추적 조정은 평균 CPU를 목표값 50%로 유지하도록 자동으로 확장 및 축소합니다. 최소·원하는·최대 용량을 지정하면 평상시 비용을 낮추고 급증 시 최대 6개까지 확장할 수 있습니다.", en: "Target tracking automatically scales in and out to keep average CPU near 50%. The minimum, desired, and maximum capacities reduce steady-state cost while allowing scale-out to six instances during spikes." },
    why_wrong: {
      A: { ko: "사용자 지정 Lambda 종료는 Auto Scaling의 상태 관리와 충돌할 수 있고 확장 기능도 제공하지 않습니다.", en: "A custom termination Lambda can conflict with Auto Scaling state and does not provide scale-out." },
      C: { ko: "조정 정책이 없으면 CPU 급증에 따라 자동으로 용량을 늘리거나 줄이지 않습니다.", en: "Without a scaling policy, the group does not automatically respond to CPU changes." },
      D: { ko: "수동 조정은 자동 확장 요구를 충족하지 않고 대응도 늦습니다.", en: "Manual changes do not meet the automation requirement and respond too slowly." }
    }
  },
  {
    id: "exam6-298", number: 298, tags: ["Application Load Balancer", "EC2 Auto Scaling", "RDS Multi-AZ", "High Availability", "Multi-AZ"],
    question: {
      en: "A company runs a critical business application on Amazon EC2 instances behind an Application Load Balancer. The instances are in an Auto Scaling group and access an Amazon RDS DB instance. The design failed an operational review because both the EC2 instances and DB instance are in a single Availability Zone. A solutions architect must update the design to use a second Availability Zone. Which solution increases application availability?",
      ko: "회사는 ALB 뒤의 Auto Scaling 그룹 EC2 인스턴스에서 중요 비즈니스 애플리케이션을 실행하며 RDS DB 인스턴스에 접근합니다. EC2와 DB가 모두 단일 가용 영역에 있어 운영 검토를 통과하지 못했습니다. 두 번째 가용 영역을 사용하도록 설계를 업데이트해야 합니다. 어떤 솔루션이 가용성을 높입니까?"
    },
    options: [
      { k: "A", en: "Provision a subnet in each Availability Zone. Configure the Auto Scaling group to deploy EC2 instances in both zones. Configure a DB instance connection for each network.", ko: "각 가용 영역에 서브넷을 만들고 두 영역에 EC2를 배포하도록 Auto Scaling 그룹을 구성하며 각 네트워크에 DB 인스턴스 연결을 구성합니다." },
      { k: "B", en: "Provision two subnets that span both Availability Zones. Configure the Auto Scaling group to deploy EC2 instances in both zones. Configure a DB instance connection for each network.", ko: "두 가용 영역에 걸치는 서브넷 두 개를 만들고 두 영역에 EC2를 배포하며 각 네트워크에 DB 인스턴스 연결을 구성합니다." },
      { k: "C", en: "Provision a subnet in each Availability Zone. Configure the Auto Scaling group to deploy EC2 instances in both zones. Configure the DB instance for a Multi-AZ deployment.", ko: "각 가용 영역에 서브넷을 만들고 두 영역에 EC2를 배포하도록 Auto Scaling 그룹을 구성하며 DB 인스턴스를 Multi-AZ로 구성합니다." },
      { k: "D", en: "Provision subnets that span both Availability Zones. Configure the Auto Scaling group to deploy EC2 instances in both zones. Configure the DB instance for a Multi-AZ deployment.", ko: "두 가용 영역에 걸치는 서브넷을 만들고 두 영역에 EC2를 배포하며 DB 인스턴스를 Multi-AZ로 구성합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "서브넷은 하나의 가용 영역에만 속하므로 AZ별 서브넷이 필요합니다. Auto Scaling 그룹을 두 AZ에 배치하고 RDS Multi-AZ를 활성화하면 애플리케이션과 데이터베이스 모두 AZ 장애를 견딜 수 있습니다.", en: "A subnet belongs to exactly one Availability Zone, so each zone needs its own subnet. Spanning the Auto Scaling group across both zones and enabling RDS Multi-AZ protects both tiers from an AZ failure." },
    why_wrong: {
      A: { ko: "애플리케이션 계층은 다중 AZ이지만 데이터베이스에 Multi-AZ 장애 조치가 구성되지 않습니다.", en: "The application tier spans zones, but the database lacks Multi-AZ failover." },
      B: { ko: "서브넷은 여러 가용 영역에 걸쳐 생성할 수 없고 DB 고가용성도 제공하지 않습니다.", en: "A subnet cannot span Availability Zones, and this option does not provide database high availability." },
      D: { ko: "RDS Multi-AZ는 맞지만 여러 AZ에 걸치는 서브넷이라는 구성이 불가능합니다.", en: "RDS Multi-AZ is appropriate, but a subnet cannot span multiple Availability Zones." }
    }
  },
  {
    id: "exam6-299", number: 299, tags: ["Amazon FSx for Lustre", "Amazon S3", "HPC", "Persistent SSD", "High Throughput"],
    question: {
      en: "A research institute must process approximately 8 TB of data. The laboratory requires sub-millisecond latency and at least 6 GBps of throughput from the storage subsystem. Hundreds of Amazon EC2 instances running Amazon Linux distribute and process the data. Which solution meets the performance requirements?",
      ko: "연구소는 약 8TB의 데이터를 처리해야 합니다. 실험실은 스토리지 하위 시스템에 대해 1밀리초 미만의 대기 시간과 최소 6GBps의 처리량이 필요합니다. Amazon Linux를 실행하는 수백 개의 EC2 인스턴스가 데이터를 분산 처리합니다. 어떤 솔루션이 성능 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon FSx for NetApp ONTAP file system. Set each volume's tiering policy to ALL. Import the source data into the file system and mount it on the EC2 instances.", ko: "FSx for NetApp ONTAP을 만들고 각 볼륨의 계층화 정책을 ALL로 설정한 뒤 데이터를 가져와 EC2에 마운트합니다." },
      { k: "B", en: "Create an Amazon S3 bucket for the source data. Create an Amazon FSx for Lustre file system using persistent SSD storage. Select the option to import data from and export data to Amazon S3. Mount the file system on the EC2 instances.", ko: "원시 데이터용 S3 버킷을 만들고 영구 SSD 스토리지의 FSx for Lustre를 생성합니다. S3에서 가져오기와 내보내기를 선택하고 EC2에 마운트합니다." },
      { k: "C", en: "Create an Amazon S3 bucket for the source data. Create an Amazon FSx for Lustre file system using persistent HDD storage. Select the option to import data from and export data to Amazon S3. Mount the file system on the EC2 instances.", ko: "원시 데이터용 S3 버킷을 만들고 영구 HDD 스토리지의 FSx for Lustre를 생성하여 S3와 연결하고 EC2에 마운트합니다." },
      { k: "D", en: "Create an Amazon FSx for NetApp ONTAP file system. Set each volume's tiering policy to NONE. Import the source data into the file system and mount it on the EC2 instances.", ko: "FSx for NetApp ONTAP을 만들고 각 볼륨의 계층화 정책을 NONE으로 설정한 뒤 데이터를 가져와 EC2에 마운트합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "FSx for Lustre는 수백 개 컴퓨팅 노드의 병렬 처리에 필요한 밀리초 미만 지연과 높은 집계 처리량을 제공합니다. 영구 SSD는 요구 지연을 충족하며 S3 연동으로 원시 데이터의 가져오기와 결과 내보내기를 지원합니다.", en: "FSx for Lustre is designed for parallel access from hundreds of compute nodes with sub-millisecond latency and high aggregate throughput. Persistent SSD meets the latency target and integrates with S3 for import and export." },
    why_wrong: {
      A: { ko: "ONTAP의 ALL 계층화는 데이터를 용량 풀로 이동시켜 HPC의 지속적인 초저지연 요구에 부적합합니다.", en: "ONTAP with ALL tiering moves data to the capacity tier and is not suited to sustained ultra-low-latency HPC access." },
      C: { ko: "HDD 스토리지는 처리량 중심 순차 워크로드용이지만 1밀리초 미만 지연 요구에는 SSD가 필요합니다.", en: "HDD storage can suit throughput-oriented sequential workloads, but the sub-millisecond latency requirement calls for SSD." },
      D: { ko: "ONTAP은 일반 파일 워크로드에 적합하지만 수백 노드 병렬 HPC와 6GBps 처리량에는 Lustre가 더 적합합니다.", en: "ONTAP serves general file workloads, while Lustre is purpose-built for parallel HPC access at the required scale and throughput." }
    }
  },
  {
    id: "exam6-300", number: 300, tags: ["Amazon EC2", "Reserved Instances", "Amazon Aurora", "Cost Optimization", "Database"],
    question: {
      en: "A company must migrate a legacy application from an on-premises data center to the AWS Cloud because of hardware capacity constraints. The application runs 24 hours a day, 7 days a week. The application's database storage continually increases over time. What should a solutions architect do to meet these requirements most cost-effectively?",
      ko: "회사는 하드웨어 용량 제약으로 레거시 애플리케이션을 온프레미스 데이터 센터에서 AWS 클라우드로 마이그레이션해야 합니다. 애플리케이션은 하루 24시간, 주 7일 실행되며 데이터베이스 스토리지는 시간이 지남에 따라 계속 증가합니다. 가장 비용 효율적으로 요구사항을 충족하려면 어떻게 해야 합니까?"
    },
    options: [
      { k: "A", en: "Migrate the application tier to Amazon EC2 Spot Instances. Migrate the data storage tier to Amazon S3.", ko: "애플리케이션 계층을 EC2 스팟 인스턴스로, 데이터 스토리지 계층을 S3로 마이그레이션합니다." },
      { k: "B", en: "Migrate the application tier to Amazon EC2 Reserved Instances. Migrate the data storage tier to Amazon RDS On-Demand Instances.", ko: "애플리케이션 계층을 EC2 예약 인스턴스로, 데이터 스토리지 계층을 RDS 온디맨드 인스턴스로 마이그레이션합니다." },
      { k: "C", en: "Migrate the application tier to Amazon EC2 Reserved Instances. Migrate the data storage tier to Amazon Aurora Reserved Instances.", ko: "애플리케이션 계층을 EC2 예약 인스턴스로, 데이터 스토리지 계층을 Aurora 예약 인스턴스로 마이그레이션합니다." },
      { k: "D", en: "Migrate the application tier to Amazon EC2 On-Demand Instances. Migrate the data storage tier to Amazon RDS Reserved Instances.", ko: "애플리케이션 계층을 EC2 온디맨드 인스턴스로, 데이터 스토리지 계층을 RDS 예약 인스턴스로 마이그레이션합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "연중무휴로 지속 실행되는 컴퓨팅과 데이터베이스에는 예약 인스턴스 할인이 비용 효율적입니다. Aurora 스토리지는 데이터 증가에 따라 자동 확장되므로 사전 용량 계획 부담도 줄어듭니다.", en: "Reserved pricing is cost-effective for continuously running compute and database capacity. Aurora storage automatically grows with the dataset, reducing capacity-planning overhead as storage increases." },
    why_wrong: {
      A: { ko: "스팟 인스턴스는 중단될 수 있어 연중무휴 레거시 애플리케이션의 안정적인 기본 용량에 부적합하고 S3는 관계형 DB 대체가 아닙니다.", en: "Spot Instances can be interrupted and are unsuitable as the sole steady capacity for this 24/7 application; S3 is not a relational database replacement." },
      B: { ko: "RDS 온디맨드는 지속 사용 워크로드에서 예약 Aurora보다 비용이 높고 스토리지 자동 확장 이점도 상대적으로 제한됩니다.", en: "RDS On-Demand costs more for continuous use than reserved Aurora and offers less benefit for the growing-storage requirement." },
      D: { ko: "데이터베이스만 예약하고 24시간 실행되는 EC2를 온디맨드로 두면 가능한 장기 사용 할인을 놓칩니다.", en: "Reserving only the database while leaving continuously running EC2 On-Demand misses available long-term savings." }
    }
  }
]
});
