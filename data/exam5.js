/* Exam 5
 * ExamTopics Topic 1 / Exam E의 201~250번
 * 현재 수록 범위: 201~250번
 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam5",
  title: "Exam 5",
  note: "Topic 1 · #201–250",
  questions: [
  {
    id: "exam5-201", number: 201, tags: ["Amazon Pinpoint", "SMS", "Kinesis Data Streams"],
    question: {
      en: "A company is developing a marketing communications service that targets mobile app users. The company needs to send confirmation messages with Short Message Service (SMS) to its users. The users must be able to reply to the SMS messages. The company must store the responses for a year for analysis.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 모바일 앱 사용자를 대상으로 마케팅 커뮤니케이션 서비스를 개발하고 있습니다. 사용자에게 SMS 확인 메시지를 보내고 사용자가 답장할 수 있어야 하며, 응답을 분석용으로 1년간 저장해야 합니다.\n어떤 조치를 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon Connect contact flow to send the SMS messages. Use AWS Lambda to process the responses.", ko: "Amazon Connect 문의 흐름으로 SMS를 보내고 Lambda로 응답을 처리합니다." },
      { k: "B", en: "Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving.", ko: "Amazon Pinpoint 여정을 구성하고 분석 및 보관을 위해 이벤트를 Kinesis 데이터 스트림으로 전송합니다." },
      { k: "C", en: "Use Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. Use AWS Lambda to process the responses.", ko: "SQS로 SMS를 배포하고 Lambda로 응답을 처리합니다." },
      { k: "D", en: "Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kinesis data stream to the SNS topic for analysis and archiving.", ko: "SNS FIFO 주제를 만들고 분석 및 보관용 Kinesis 데이터 스트림을 구독시킵니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Amazon Pinpoint는 양방향 SMS 캠페인과 여정을 지원하며 이벤트 스트림을 Kinesis로 보내 장기 분석·보관할 수 있습니다.", en: "Amazon Pinpoint supports two-way SMS journeys and can stream engagement events to Kinesis for long-term analysis and archiving." },
    why_wrong: {
      A: { ko: "Amazon Connect 문의 흐름은 이 마케팅 여정과 양방향 SMS 분석 보관 요구에 적합한 선택이 아닙니다.", en: "Amazon Connect contact flows are not the appropriate managed marketing journey and event archival solution." },
      C: { ko: "SQS는 SMS 발송 서비스가 아닙니다.", en: "SQS is a message queue and does not send SMS messages to users." },
      D: { ko: "SNS FIFO는 SMS 전송을 지원하지 않으며 Kinesis는 SNS 구독 엔드포인트가 아닙니다.", en: "SNS FIFO does not support SMS delivery, and Kinesis Data Streams is not an SNS subscription endpoint." }
    }
  },
  {
    id: "exam5-202", number: 202, tags: ["S3", "SSE-KMS", "KMS Key Rotation"],
    question: {
      en: "A company is planning to move its data to an Amazon S3 bucket. The data must be encrypted when it is stored in the S3 bucket. Additionally, the encryption key must be automatically rotated every year.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사는 데이터를 S3 버킷으로 이전하려 합니다. 저장된 데이터는 암호화되어야 하고 암호화 키는 매년 자동 교체되어야 합니다.\n운영 부담이 가장 적은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Move the data to the S3 bucket. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.", ko: "SSE-S3를 사용하고 SSE-S3 암호화 키의 기본 교체 동작을 사용합니다." },
      { k: "B", en: "Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Set the S3 bucket's default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket.", ko: "KMS 고객 관리형 키를 생성해 자동 키 교체를 활성화하고 S3 기본 암호화에 지정한 뒤 데이터를 이전합니다." },
      { k: "C", en: "Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket's default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket. Manually rotate the KMS key every year.", ko: "KMS 고객 관리형 키를 사용하고 매년 수동으로 교체합니다." },
      { k: "D", en: "Encrypt the data with customer key material before moving the data to the S3 bucket. Create an AWS Key Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key. Enable automatic key rotation.", ko: "고객 키 재료로 데이터를 암호화하고 키 재료를 KMS로 가져온 뒤 자동 교체를 활성화합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "KMS 고객 관리형 키는 자동 연간 교체를 지원하며 S3 기본 SSE-KMS 암호화에 직접 사용할 수 있어 운영 부담이 적습니다.", en: "A customer managed KMS key supports automatic annual rotation and can be used directly for default S3 SSE-KMS encryption." },
    why_wrong: {
      A: { ko: "SSE-S3는 사용자가 연간 키 교체 일정을 구성하고 감사하는 고객 관리형 키 기능을 제공하지 않습니다.", en: "SSE-S3 does not provide customer-controlled annual rotation settings and key management." },
      C: { ko: "수동 교체는 자동 교체 요구와 최소 운영 부담을 충족하지 않습니다.", en: "Manual rotation does not meet the automatic rotation and least-overhead requirements." },
      D: { ko: "가져온 키 재료는 KMS 자동 키 교체를 지원하지 않습니다.", en: "KMS keys with imported key material do not support automatic rotation." }
    }
  },
  {
    id: "exam5-203", number: 203, tags: ["SQS", "EC2 Auto Scaling", "Queue Depth"],
    question: {
      en: "The customers of a finance company request appointments with financial advisors by sending text messages. A web application that runs on Amazon EC2 instances accepts the appointment requests. The text messages are published to an Amazon Simple Queue Service (Amazon SQS) queue through the web application. Another application that runs on EC2 instances then sends meeting invitations and meeting confirmation email messages to the customers. After successful scheduling, this application stores the meeting information in an Amazon DynamoDB database.\nAs the company expands, customers report that their meeting invitations are taking longer to arrive.\nWhat should a solutions architect recommend to resolve this issue?",
      ko: "금융 회사 고객은 문자로 상담 예약을 요청합니다. EC2 웹 애플리케이션이 요청을 받아 SQS에 게시하고, 다른 EC2 애플리케이션이 초대와 확인 이메일을 보낸 뒤 DynamoDB에 일정을 저장합니다. 회사 성장 후 초대장 도착이 늦어지고 있습니다.\n어떤 해결책을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Add a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database.", ko: "DynamoDB 앞에 DAX 클러스터를 추가합니다." },
      { k: "B", en: "Add an Amazon API Gateway API in front of the web application that accepts the appointment requests.", ko: "예약 요청 웹 애플리케이션 앞에 API Gateway를 추가합니다." },
      { k: "C", en: "Add an Amazon CloudFront distribution. Set the origin as the web application that accepts the appointment requests.", ko: "CloudFront 배포를 추가하고 요청 웹 애플리케이션을 오리진으로 설정합니다." },
      { k: "D", en: "Add an Auto Scaling group for the application that sends meeting invitations. Configure the Auto Scaling group to scale based on the depth of the SQS queue.", ko: "초대장 전송 애플리케이션을 Auto Scaling 그룹에 넣고 SQS 대기열 깊이에 따라 확장합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "병목은 SQS 소비 속도입니다. 초대장 처리 EC2를 대기열 깊이에 따라 자동 확장하면 백로그 증가 시 처리량이 함께 늘어납니다.", en: "The bottleneck is SQS consumption. Scaling invitation workers based on queue depth increases processing capacity as the backlog grows." },
    why_wrong: {
      A: { ko: "지연은 DynamoDB 읽기 캐시가 아니라 대기열 소비 처리량 문제입니다.", en: "The delay is queue processing capacity, not DynamoDB read latency." },
      B: { ko: "요청 수신 계층을 변경해도 초대장 소비자 병목은 해결되지 않습니다.", en: "Changing the request ingress tier does not fix the invitation consumer bottleneck." },
      C: { ko: "CloudFront는 비동기 SQS 작업 처리량을 늘리지 않습니다.", en: "CloudFront does not increase asynchronous SQS worker throughput." }
    }
  },
  {
    id: "exam5-204", number: 204, tags: ["Lake Formation", "Glue", "Data Lake", "Fine-Grained Access"],
    question: {
      en: "An online retail company has more than 50 million active customers and receives more than 25,000 orders each day. The company collects purchase data for customers and stores this data in Amazon S3. Additional customer data is stored in Amazon RDS.\nThe company wants to make all the data available to various teams so that the teams can perform analytics. The solution must provide the ability to manage fine-grained permissions for the data and must minimize operational overhead.\nWhich solution will meet these requirements?",
      ko: "온라인 소매 회사는 구매 데이터를 S3에, 추가 고객 데이터를 RDS에 저장합니다. 여러 팀이 모든 데이터를 분석할 수 있게 하면서 세분화된 데이터 권한을 관리하고 운영 부담을 최소화해야 합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Migrate the purchase data to write directly to Amazon RDS. Use RDS access controls to limit access.", ko: "구매 데이터를 RDS로 이전하고 RDS 접근 제어를 사용합니다." },
      { k: "B", en: "Schedule an AWS Lambda function to periodically copy data from Amazon RDS to Amazon S3. Create an AWS Glue crawler. Use Amazon Athena to query the data. Use S3 policies to limit access.", ko: "Lambda로 RDS 데이터를 S3에 복사하고 Glue 크롤러와 Athena 및 S3 정책을 사용합니다." },
      { k: "C", en: "Create a data lake by using AWS Lake Formation. Create an AWS Glue JDBC connection to Amazon RDS. Register the S3 bucket in Lake Formation. Use Lake Formation access controls to limit access.", ko: "Lake Formation 데이터 레이크를 만들고 Glue JDBC로 RDS를 연결하며 S3를 등록한 뒤 Lake Formation 접근 제어를 사용합니다." },
      { k: "D", en: "Create an Amazon Redshift cluster. Schedule an AWS Lambda function to periodically copy data from Amazon S3 and Amazon RDS to Amazon Redshift. Use Amazon Redshift access controls to limit access.", ko: "Redshift 클러스터를 만들고 Lambda로 S3와 RDS 데이터를 복사한 뒤 Redshift 접근 제어를 사용합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "Lake Formation은 S3 데이터 레이크와 Glue 카탈로그를 관리하고 테이블·열·행 수준의 세분화된 권한을 중앙에서 제공합니다.", en: "Lake Formation centrally manages an S3 data lake and Glue catalog with fine-grained table, column, and row permissions." },
    why_wrong: {
      A: { ko: "대규모 분석 데이터를 RDS 하나로 통합하면 확장성과 분석 효율이 낮습니다.", en: "Consolidating analytical data in RDS is less scalable and efficient." },
      B: { ko: "S3 정책만으로는 Lake Formation 수준의 세분화된 데이터 권한을 제공하기 어렵습니다.", en: "S3 policies alone do not provide Lake Formation's fine-grained data permissions." },
      D: { ko: "Redshift 클러스터와 사용자 지정 복사 작업은 운영 부담이 더 큽니다.", en: "A Redshift cluster and custom copy jobs add operational overhead." }
    }
  },
  {
    id: "exam5-205", number: 205, tags: ["CloudFront", "S3", "Origin Access Identity", "Static Website"],
    question: {
      en: "A company hosts a marketing website in an on-premises data center. The website consists of static documents and runs on a single server. An administrator updates the website content infrequently and uses an SFTP client to upload new documents.\nThe company decides to host its website on AWS and to use Amazon CloudFront. The company's solutions architect creates a CloudFront distribution. The solutions architect must design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin.\nWhich solution will meet these requirements?",
      ko: "회사는 정적 문서로 구성된 마케팅 웹사이트를 AWS로 이전해 CloudFront를 사용하려 합니다. 콘텐츠 갱신은 드물며 가장 비용 효율적이고 복원력 있는 CloudFront 오리진이 필요합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Create a virtual server by using Amazon Lightsail. Configure the web server in the Lightsail instance. Upload website content by using an SFTP client.", ko: "Lightsail 가상 서버에 웹 서버를 구성하고 SFTP로 업로드합니다." },
      { k: "B", en: "Create an AWS Auto Scaling group for Amazon EC2 instances. Use an Application Load Balancer. Upload website content by using an SFTP client.", ko: "EC2 Auto Scaling 그룹과 ALB를 만들고 SFTP로 콘텐츠를 업로드합니다." },
      { k: "C", en: "Create a private Amazon S3 bucket. Use an S3 bucket policy to allow access from a CloudFront origin access identity (OAI). Upload website content by using the AWS CLI.", ko: "비공개 S3 버킷을 만들고 CloudFront OAI만 허용한 뒤 AWS CLI로 업로드합니다." },
      { k: "D", en: "Create a public Amazon S3 bucket. Configure AWS Transfer for SFTP. Configure the S3 bucket for website hosting. Upload website content by using the SFTP client.", ko: "공개 S3 버킷과 AWS Transfer for SFTP 및 정적 웹 호스팅을 구성합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "정적 콘텐츠는 S3가 가장 저렴하고 복원력이 높습니다. OAI로 버킷 직접 접근을 차단하고 CloudFront만 오리진에 접근하게 합니다.", en: "S3 is cost-effective and resilient for static content. An OAI keeps the bucket private and allows access only through CloudFront." },
    why_wrong: {
      A: { ko: "단일 Lightsail 서버는 장애 지점이며 서버 관리가 필요합니다.", en: "A single Lightsail server is a failure point and requires server management." },
      B: { ko: "정적 사이트에 EC2, ALB, Auto Scaling은 불필요하게 비쌉니다.", en: "EC2, ALB, and Auto Scaling are unnecessarily costly for a static site." },
      D: { ko: "공개 버킷은 CloudFront를 우회할 수 있으며 AWS Transfer 비용도 불필요합니다.", en: "A public bucket can bypass CloudFront, and AWS Transfer adds unnecessary cost." }
    }
  },
  {
    id: "exam5-206", number: 206, tags: ["EventBridge", "CloudTrail", "SNS", "EC2 CreateImage"],
    question: {
      en: "A company wants to manage Amazon Machine Images (AMIs). The company currently copies AMIs to the same AWS Region where the AMIs were created. The company needs to design an application that captures AWS API calls and sends alerts whenever the Amazon EC2 CreateImage API operation is called within the company's account.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사는 AMI를 관리하며 계정에서 EC2 CreateImage API가 호출될 때마다 AWS API 호출을 감지해 알림을 보내야 합니다.\n운영 부담이 가장 적은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create an AWS Lambda function to query AWS CloudTrail logs and to send an alert when a CreateImage API call is detected.", ko: "Lambda가 CloudTrail 로그를 조회해 CreateImage 호출을 감지하면 알림을 보냅니다." },
      { k: "B", en: "Configure AWS CloudTrail with an Amazon Simple Notification Service (Amazon SNS) notification that occurs when updated logs are sent to Amazon S3. Use Amazon Athena to create a new table and to query on CreateImage when an API call is detected.", ko: "CloudTrail 로그가 S3에 전달될 때 SNS로 알리고 Athena로 CreateImage를 조회합니다." },
      { k: "C", en: "Create an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. Configure the target as an Amazon Simple Notification Service (Amazon SNS) topic to send an alert when a CreateImage API call is detected.", ko: "CreateImage API 호출에 대한 EventBridge 규칙을 만들고 SNS 주제를 대상으로 지정합니다." },
      { k: "D", en: "Configure an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a target for AWS CloudTrail logs. Create an AWS Lambda function to send an alert to an Amazon Simple Notification Service (Amazon SNS) topic when a CreateImage API call is detected.", ko: "CloudTrail 로그의 대상으로 SQS FIFO를 구성하고 Lambda가 SNS 알림을 보냅니다." }
    ],
    answer: ["C"],
    explanation: { ko: "CloudTrail을 통해 전달되는 관리 API 이벤트는 EventBridge 규칙으로 직접 일치시킬 수 있고 SNS 대상에 즉시 알림을 보낼 수 있습니다.", en: "EventBridge can directly match CloudTrail management events for CreateImage and send an immediate notification to SNS." },
    why_wrong: {
      A: { ko: "로그를 주기적으로 조회하는 사용자 지정 Lambda가 필요해 지연과 운영 부담이 큽니다.", en: "Polling logs with custom Lambda adds latency and operational work." },
      B: { ko: "S3 로그 전달과 Athena 조회는 실시간 경보에 과도하고 복잡합니다.", en: "S3 log delivery and Athena queries are excessive for event-driven alerts." },
      D: { ko: "CloudTrail 로그에 SQS FIFO를 직접 대상으로 구성하는 방식이 아니며 구성도 복잡합니다.", en: "CloudTrail logs do not directly target SQS FIFO this way, and the design is unnecessarily complex." }
    }
  },
  {
    id: "exam5-207", number: 207, tags: ["SQS", "Lambda", "DynamoDB", "Write Buffering"],
    question: {
      en: "A company owns an asynchronous API that is used to ingest user requests and, based on the request type, dispatch requests to the appropriate microservice for processing. The company is using Amazon API Gateway to deploy the API front end, and an AWS Lambda function that invokes Amazon DynamoDB to store user requests before dispatching them to the processing microservices.\nThe company provisioned as much DynamoDB throughput as its budget allows, but the company is still experiencing availability issues and is losing user requests.\nWhat should a solutions architect do to address this issue without impacting existing users?",
      ko: "회사는 API Gateway와 Lambda를 사용해 비동기 사용자 요청을 DynamoDB에 저장한 뒤 마이크로서비스로 전달합니다. 예산 한도까지 DynamoDB 처리량을 프로비저닝했지만 가용성 문제가 발생하고 요청이 손실됩니다.\n기존 사용자에게 영향을 주지 않고 어떻게 해결해야 합니까?"
    },
    options: [
      { k: "A", en: "Add throttling on the API Gateway with server-side throttling limits.", ko: "API Gateway에 서버 측 스로틀링 제한을 추가합니다." },
      { k: "B", en: "Use DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB.", ko: "DAX와 Lambda로 DynamoDB 쓰기를 버퍼링합니다." },
      { k: "C", en: "Create a secondary index in DynamoDB for the table with the user requests.", ko: "사용자 요청 테이블에 DynamoDB 보조 인덱스를 생성합니다." },
      { k: "D", en: "Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB.", ko: "SQS와 Lambda를 사용해 DynamoDB 쓰기를 버퍼링합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "SQS는 요청을 내구성 있게 버퍼링해 DynamoDB 처리량보다 빠른 유입을 흡수하고 Lambda가 허용 처리량에 맞춰 소비하게 합니다.", en: "SQS durably buffers request spikes, and Lambda can drain the queue at a rate DynamoDB can sustain." },
    why_wrong: {
      A: { ko: "스로틀링은 기존 사용자의 요청을 거부해 요구사항을 위반합니다.", en: "Throttling rejects existing user requests and violates the requirement." },
      B: { ko: "DAX는 읽기 캐시이며 쓰기 버퍼가 아닙니다.", en: "DAX is a read cache, not a durable write buffer." },
      C: { ko: "보조 인덱스는 쓰기 용량 문제를 해결하지 않으며 오히려 추가 쓰기를 만듭니다.", en: "A secondary index does not solve write capacity and adds write overhead." }
    }
  },
  {
    id: "exam5-208", number: 208, tags: ["S3", "Interface VPC Endpoint", "IAM Role", "Private Connectivity"],
    question: {
      en: "A company needs to move data from an Amazon EC2 instance to an Amazon S3 bucket. The company must ensure that no API calls and no data are routed through public internet routes. Only the EC2 instance can have access to upload data to the S3 bucket.\nWhich solution will meet these requirements?",
      ko: "회사는 EC2에서 S3 버킷으로 데이터를 이동해야 합니다. API 호출과 데이터가 공개 인터넷 경로를 통과하지 않아야 하며 해당 EC2 인스턴스만 업로드할 수 있어야 합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Create an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located. Attach a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access.", ko: "EC2가 있는 서브넷에 S3 인터페이스 VPC 엔드포인트를 만들고 EC2 IAM 역할만 허용하는 버킷 정책을 연결합니다." },
      { k: "B", en: "Create a gateway VPC endpoint for Amazon S3 in the Availability Zone where the EC2 instance is located. Attach appropriate security groups to the endpoint. Attach a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access.", ko: "EC2가 있는 AZ에 S3 게이트웨이 엔드포인트를 만들고 보안 그룹과 버킷 정책을 연결합니다." },
      { k: "C", en: "Run the nslookup tool from inside the EC2 instance to obtain the private IP address of the S3 bucket's service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access.", ko: "nslookup으로 S3 API의 사설 IP를 얻어 라우팅 테이블에 경로를 추가합니다." },
      { k: "D", en: "Use the AWS provided, publicly available ip-ranges.json file to obtain the private IP address of the S3 bucket's service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance's IAM role for access.", ko: "ip-ranges.json에서 S3 API 사설 IP를 얻어 라우팅 테이블에 경로를 추가합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "S3 인터페이스 엔드포인트는 서브넷의 사설 IP를 통해 API와 데이터를 AWS 네트워크 안에서 전달합니다. 버킷 정책은 EC2 역할만 허용합니다.", en: "An S3 interface endpoint uses private IP addresses in the subnet, keeping API and data traffic on the AWS network. The bucket policy restricts access to the EC2 role." },
    why_wrong: {
      B: { ko: "게이트웨이 엔드포인트는 AZ별 리소스가 아니고 보안 그룹을 연결할 수 없습니다.", en: "Gateway endpoints are not AZ-specific and do not support security groups." },
      C: { ko: "공개 S3 서비스 엔드포인트의 고정 사설 IP를 조회해 라우팅하는 방식은 지원되지 않습니다.", en: "Routing to a discovered fixed private IP for the public S3 endpoint is unsupported." },
      D: { ko: "ip-ranges.json은 공개 AWS IP 범위를 제공하며 S3 사설 엔드포인트 주소를 제공하지 않습니다.", en: "ip-ranges.json contains public AWS ranges, not private S3 endpoint addresses." }
    }
  },
  {
    id: "exam5-209", number: 209, tags: ["ElastiCache", "Distributed Sessions", "Auto Scaling"],
    question: {
      en: "A solutions architect is designing the architecture of a new application being deployed to the AWS Cloud. The application will run on Amazon EC2 On-Demand Instances and will automatically scale across multiple Availability Zones. The EC2 instances will scale up and down frequently throughout the day. An Application Load Balancer (ALB) will handle the load distribution. The architecture needs to support distributed session data management. The company is willing to make changes to code if needed.\nWhat should the solutions architect do to ensure that the architecture supports distributed session data management?",
      ko: "새 애플리케이션은 여러 AZ의 EC2 온디맨드 인스턴스에서 자주 자동 확장되며 ALB를 사용합니다. 코드 변경이 가능하고 분산 세션 데이터 관리가 필요합니다.\n어떤 조치를 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon ElastiCache to manage and store session data.", ko: "ElastiCache를 사용해 세션 데이터를 관리하고 저장합니다." },
      { k: "B", en: "Use session affinity (sticky sessions) of the ALB to manage session data.", ko: "ALB 세션 선호도(고정 세션)로 세션 데이터를 관리합니다." },
      { k: "C", en: "Use Session Manager from AWS Systems Manager to manage the session.", ko: "Systems Manager Session Manager로 세션을 관리합니다." },
      { k: "D", en: "Use the GetSessionToken API operation in AWS Security Token Service (AWS STS) to manage the session.", ko: "AWS STS GetSessionToken API로 세션을 관리합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "세션을 ElastiCache 같은 외부 공유 저장소에 두면 어느 EC2 인스턴스도 동일 세션에 접근할 수 있어 빈번한 확장과 인스턴스 교체에 안전합니다.", en: "Externalizing session state in ElastiCache lets every instance access the same session and tolerates frequent scaling and replacement." },
    why_wrong: {
      B: { ko: "고정 세션은 특정 인스턴스에 상태를 묶어 확장과 장애 복원력을 저해합니다.", en: "Sticky sessions bind state to one instance and reduce scaling flexibility and resilience." },
      C: { ko: "Session Manager는 EC2 관리용 원격 셸 서비스입니다.", en: "Systems Manager Session Manager provides administrative shell access." },
      D: { ko: "STS 세션 토큰은 AWS 임시 자격 증명이며 웹 애플리케이션 세션 저장소가 아닙니다.", en: "STS session tokens are temporary AWS credentials, not application session storage." }
    }
  },
  {
    id: "exam5-210", number: 210, tags: ["SQS", "EC2 Auto Scaling", "Backlog per Instance", "Decoupling"],
    question: {
      en: "A company offers a food delivery service that is growing rapidly. Because of the growth, the company's order processing system is experiencing scaling problems during peak traffic hours. The current architecture includes the following:\n• A group of Amazon EC2 instances that run in an Amazon EC2 Auto Scaling group to collect orders from the application\n• Another group of EC2 instances that run in an Amazon EC2 Auto Scaling group to fulfill orders\nThe order collection process occurs quickly, but the order fulfillment process can take longer. Data must not be lost because of a scaling event.\nA solutions architect must ensure that the order collection process and the order fulfillment process can both scale properly during peak traffic hours. The solution must optimize utilization of the company's AWS resources.\nWhich solution meets these requirements?",
      ko: "급성장한 음식 배달 서비스는 주문 수집 EC2 Auto Scaling 그룹과 주문 이행 EC2 Auto Scaling 그룹을 운영합니다. 수집은 빠르지만 이행은 오래 걸릴 수 있고 확장 이벤트로 데이터가 손실되면 안 됩니다. 두 프로세스가 피크 시간에 적절히 확장되면서 리소스 사용률을 최적화해야 합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure each Auto Scaling group's minimum capacity according to peak workload values.", ko: "CPU를 모니터링하고 각 Auto Scaling 그룹의 최소 용량을 피크 워크로드에 맞춥니다." },
      { k: "B", en: "Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure a CloudWatch alarm to invoke an Amazon Simple Notification Service (Amazon SNS) topic that creates additional Auto Scaling groups on demand.", ko: "CloudWatch 경보와 SNS로 필요 시 추가 Auto Scaling 그룹을 생성합니다." },
      { k: "C", en: "Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Scale the Auto Scaling groups based on notifications that the queues send.", ko: "수집과 이행용 SQS 대기열을 만들고 각 EC2가 폴링하며 대기열 알림에 따라 확장합니다." },
      { k: "D", en: "Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Create a metric based on a backlog per instance calculation. Scale the Auto Scaling groups based on this metric.", ko: "수집과 이행용 SQS 대기열을 만들고 각 EC2가 폴링하게 합니다. 인스턴스당 백로그 지표를 만들어 각 Auto Scaling 그룹을 확장합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "두 SQS 대기열이 단계별 작업을 내구성 있게 분리하고, 인스턴스당 백로그 지표가 서로 다른 처리 속도에 맞춰 각 Auto Scaling 그룹을 효율적으로 조정합니다.", en: "Two SQS queues durably decouple the stages, and backlog-per-instance metrics scale each worker group according to its distinct processing rate." },
    why_wrong: {
      A: { ko: "피크 기준 최소 용량은 비혼잡 시간에 리소스를 낭비하고 대기 작업량을 반영하지 않습니다.", en: "Peak-sized minimum capacity wastes resources off peak and ignores queued work." },
      B: { ko: "추가 Auto Scaling 그룹을 만드는 방식은 부적절하고 주문을 내구성 있게 분리하지 않습니다.", en: "Creating additional Auto Scaling groups is inappropriate and does not durably decouple orders." },
      C: { ko: "SQS는 대기열 깊이 변화 알림으로 Auto Scaling을 직접 조정하지 않으며 인스턴스당 백로그 지표가 더 정확합니다.", en: "SQS does not directly scale groups through queue notifications; backlog per instance is the appropriate target metric." }
    }
  }
  ,{
    id: "exam5-211", number: 211, tags: ["Resource Groups Tag Editor", "Tagging", "Multi-Region"],
    question: {
      en: "A company hosts multiple production applications. One of the applications consists of resources from Amazon EC2, AWS Lambda, Amazon RDS, Amazon Simple Notification Service (Amazon SNS), and Amazon Simple Queue Service (Amazon SQS) across multiple AWS Regions. All company resources are tagged with a tag name of “application” and a value that corresponds to each application. A solutions architect must provide the quickest solution for identifying all of the tagged components.\nWhich solution meets these requirements?",
      ko: "회사는 여러 리전에 걸쳐 EC2, Lambda, RDS, SNS, SQS로 구성된 여러 프로덕션 애플리케이션을 운영합니다. 모든 리소스에는 애플리케이션별 값을 가진 application 태그가 있습니다. 태그가 지정된 모든 구성 요소를 가장 빠르게 식별해야 합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Use AWS CloudTrail to generate a list of resources with the application tag.", ko: "CloudTrail로 application 태그가 있는 리소스 목록을 생성합니다." },
      { k: "B", en: "Use the AWS CLI to query each service across all Regions to report the tagged components.", ko: "AWS CLI로 모든 리전의 각 서비스를 조회합니다." },
      { k: "C", en: "Run a query in Amazon CloudWatch Logs Insights to report on the components with the application tag.", ko: "CloudWatch Logs Insights에서 태그가 있는 구성 요소를 조회합니다." },
      { k: "D", en: "Run a query with the AWS Resource Groups Tag Editor to report on the resources globally with the application tag.", ko: "AWS Resource Groups Tag Editor에서 application 태그로 글로벌 리소스를 조회합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "Resource Groups Tag Editor는 여러 서비스와 리전의 리소스를 태그 키와 값으로 한 번에 검색할 수 있습니다.", en: "Resource Groups Tag Editor searches resources across supported services and Regions by tag key and value in one place." },
    why_wrong: {
      A: { ko: "CloudTrail은 API 활동 기록용이며 현재 태그 리소스 인벤토리를 생성하는 도구가 아닙니다.", en: "CloudTrail records API activity and is not a current tagged-resource inventory tool." },
      B: { ko: "서비스와 리전별 CLI 조회는 느리고 사용자 지정 작업이 필요합니다.", en: "Querying every service and Region with the CLI is slower and requires custom work." },
      C: { ko: "Logs Insights는 로그 데이터를 조회하며 리소스 태그 인벤토리를 제공하지 않습니다.", en: "Logs Insights queries logs, not a resource tag inventory." }
    }
  },
  {
    id: "exam5-212", number: 212, tags: ["S3 Intelligent-Tiering", "Cost Optimization", "Immediate Access"],
    question: {
      en: "A company needs to export its database once a day to Amazon S3 for other teams to access. The exported object size varies between 2 GB and 5 GB. The S3 access pattern for the data is variable and changes rapidly. The data must be immediately available and must remain accessible for up to 3 months. The company needs the most cost-effective solution that will not increase retrieval time.\nWhich S3 storage class should the company use to meet these requirements?",
      ko: "회사는 매일 DB를 S3로 내보냅니다. 객체 크기는 2–5GB이고 접근 패턴은 빠르게 변합니다. 데이터는 즉시 접근 가능해야 하며 최대 3개월 유지됩니다. 검색 시간이 늘지 않는 가장 비용 효율적인 스토리지 클래스는 무엇입니까?"
    },
    options: [
      { k: "A", en: "S3 Intelligent-Tiering", ko: "S3 Intelligent-Tiering" },
      { k: "B", en: "S3 Glacier Instant Retrieval", ko: "S3 Glacier Instant Retrieval" },
      { k: "C", en: "S3 Standard", ko: "S3 Standard" },
      { k: "D", en: "S3 Standard-Infrequent Access (S3 Standard-IA)", ko: "S3 Standard-Infrequent Access(S3 Standard-IA)" }
    ],
    answer: ["A"],
    explanation: { ko: "S3 Intelligent-Tiering은 접근 패턴을 알 수 없거나 변할 때 객체를 자동으로 적절한 즉시 접근 계층으로 이동해 검색 지연 없이 비용을 최적화합니다.", en: "S3 Intelligent-Tiering automatically moves objects among instant-access tiers as access patterns change, optimizing cost without retrieval latency." },
    why_wrong: {
      B: { ko: "Glacier Instant Retrieval은 최소 90일 보관과 검색 요금이 있어 변동 접근 패턴에 불리합니다.", en: "Glacier Instant Retrieval has a 90-day minimum and retrieval charges, making variable access less suitable." },
      C: { ko: "S3 Standard는 즉시 접근을 제공하지만 비활성 기간에도 동일한 저장 비용이 듭니다.", en: "S3 Standard provides immediate access but does not reduce storage cost during inactive periods." },
      D: { ko: "Standard-IA는 검색 요금이 있고 빈번한 접근 시 비용이 증가합니다.", en: "Standard-IA charges for retrieval and can become costly when access increases." }
    }
  },
  {
    id: "exam5-213", number: 213, tags: ["AWS WAF", "ALB", "SQL Injection", "Cross-Site Scripting"],
    question: {
      en: "A company is developing a new mobile app. The company must implement proper traffic filtering to protect its Application Load Balancer (ALB) against common application-level attacks, such as cross-site scripting or SQL injection. The company has minimal infrastructure and operational staff. The company needs to reduce its share of the responsibility in managing, updating, and securing servers for its AWS environment.\nWhat should a solutions architect recommend to meet these requirements?",
      ko: "회사는 모바일 앱의 ALB를 XSS와 SQL 삽입 같은 일반적인 애플리케이션 계층 공격으로부터 보호해야 합니다. 인프라 및 운영 인력이 적어 서버 관리 책임을 줄여야 합니다.\n무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Configure AWS WAF rules and associate them with the ALB.", ko: "AWS WAF 규칙을 구성해 ALB에 연결합니다." },
      { k: "B", en: "Deploy the application using Amazon S3 with public hosting enabled.", ko: "S3 공개 호스팅으로 애플리케이션을 배포합니다." },
      { k: "C", en: "Deploy AWS Shield Advanced and add the ALB as a protected resource.", ko: "Shield Advanced를 배포하고 ALB를 보호 리소스로 추가합니다." },
      { k: "D", en: "Create a new ALB that directs traffic to an Amazon EC2 instance running a third-party firewall, which then passes the traffic to the current ALB.", ko: "새 ALB와 타사 방화벽 EC2를 배치한 뒤 기존 ALB로 전달합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "AWS WAF는 ALB와 직접 통합되며 관리형 규칙으로 SQL 삽입과 XSS 같은 계층 7 공격을 서버 운영 없이 필터링합니다.", en: "AWS WAF integrates directly with ALB and uses managed rules to filter Layer 7 attacks such as SQL injection and XSS without managing servers." },
    why_wrong: {
      B: { ko: "S3 정적 호스팅은 동적 모바일 백엔드의 ALB 보호 수단이 아닙니다.", en: "S3 static hosting does not protect a dynamic mobile backend ALB." },
      C: { ko: "Shield Advanced는 주로 DDoS 완화용이며 SQL 삽입과 XSS 규칙을 제공하지 않습니다.", en: "Shield Advanced primarily mitigates DDoS and does not provide SQL injection or XSS filtering rules." },
      D: { ko: "타사 방화벽 EC2는 패치·확장·가용성을 직접 관리해야 합니다.", en: "A third-party firewall on EC2 requires patching, scaling, and availability management." }
    }
  },
  {
    id: "exam5-214", number: 214, tags: ["AWS Glue", "ETL", "S3", "Parquet"],
    question: {
      en: "A company's reporting system delivers hundreds of .csv files to an Amazon S3 bucket each day. The company must convert these files to Apache Parquet format and must store the files in a transformed data bucket.\nWhich solution will meet these requirements with the LEAST development effort?",
      ko: "보고 시스템은 매일 수백 개의 CSV 파일을 S3에 전달합니다. 파일을 Apache Parquet 형식으로 변환해 별도의 변환 데이터 버킷에 저장해야 합니다.\n개발 노력이 가장 적은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon EMR cluster with Apache Spark installed. Write a Spark application to transform the data. Use EMR File System (EMRFS) to write files to the transformed data bucket.", ko: "EMR Spark 클러스터와 사용자 지정 Spark 애플리케이션으로 변환합니다." },
      { k: "B", en: "Create an AWS Glue crawler to discover the data. Create an AWS Glue extract, transform, and load (ETL) job to transform the data. Specify the transformed data bucket in the output step.", ko: "Glue 크롤러로 데이터를 검색하고 Glue ETL 작업으로 변환해 출력 버킷에 저장합니다." },
      { k: "C", en: "Use AWS Batch to create a job definition with Bash syntax to transform the data and output the data to the transformed data bucket. Use the job definition to submit a job. Specify an array job as the job type.", ko: "AWS Batch Bash 작업을 만들어 배열 작업으로 변환합니다." },
      { k: "D", en: "Create an AWS Lambda function to transform the data and output the data to the transformed data bucket. Configure an event notification for the S3 bucket. Specify the Lambda function as the destination for the event notification.", ko: "S3 이벤트로 Lambda를 호출해 변환한 뒤 출력 버킷에 저장합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Glue 크롤러와 관리형 ETL 작업은 스키마를 검색하고 CSV를 Parquet로 변환하는 기본 기능을 제공해 사용자 지정 개발을 최소화합니다.", en: "Glue crawlers and managed ETL jobs provide built-in schema discovery and CSV-to-Parquet conversion with minimal custom development." },
    why_wrong: {
      A: { ko: "EMR 클러스터와 Spark 코드를 직접 개발·관리해야 합니다.", en: "EMR requires developing Spark code and managing a cluster." },
      C: { ko: "Batch 작업과 변환 스크립트를 직접 작성해야 합니다.", en: "AWS Batch requires custom job definitions and transformation scripts." },
      D: { ko: "Lambda 변환 코드를 직접 작성해야 하고 파일 크기와 실행 시간 제한도 고려해야 합니다.", en: "Lambda requires custom transformation code and has execution limits." }
    }
  },
  {
    id: "exam5-215", number: 215, tags: ["Snowball", "S3 Glacier Deep Archive", "Data Migration", "Cost Optimization"],
    question: {
      en: "A company has 700 TB of backup data stored in network attached storage (NAS) in its data center. This backup data need to be accessible for infrequent regulatory requests and must be retained 7 years. The company has decided to migrate this backup data from its data center to AWS. The migration must be complete within 1 month. The company has 500 Mbps of dedicated bandwidth on its public internet connection available for data transfer.\nWhat should a solutions architect do to migrate and store the data at the LOWEST cost?",
      ko: "회사는 데이터 센터 NAS의 백업 700TB를 AWS로 이전해 규제 요청에 드물게 접근하고 7년 보관해야 합니다. 이전은 1개월 내 완료해야 하며 인터넷 전송 대역폭은 500Mbps입니다.\n가장 저렴한 이전 및 저장 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Order AWS Snowball devices to transfer the data. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive.", ko: "Snowball 디바이스로 데이터를 전송하고 수명 주기 정책으로 S3 Glacier Deep Archive로 이동합니다." },
      { k: "B", en: "Deploy a VPN connection between the data center and Amazon VPC. Use the AWS CLI to copy the data from on premises to Amazon S3 Glacier.", ko: "VPN을 배포하고 AWS CLI로 온프레미스 데이터를 S3 Glacier에 복사합니다." },
      { k: "C", en: "Provision a 500 Mbps AWS Direct Connect connection and transfer the data to Amazon S3. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive.", ko: "500Mbps Direct Connect로 S3에 전송하고 Glacier Deep Archive로 이동합니다." },
      { k: "D", en: "Use AWS DataSync to transfer the data and deploy a DataSync agent on premises. Use the DataSync task to copy files from the on-premises NAS storage to Amazon S3 Glacier.", ko: "온프레미스 DataSync 에이전트로 NAS 파일을 S3 Glacier에 복사합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "500Mbps로 700TB를 한 달 안에 전송하기 어렵습니다. Snowball은 대규모 오프라인 이전을 기한 내 저렴하게 수행하고 Deep Archive는 7년 장기 보관 비용이 가장 낮습니다.", en: "A 500 Mbps link cannot practically move 700 TB within a month. Snowball provides cost-effective offline transfer, and Deep Archive minimizes seven-year retention cost." },
    why_wrong: {
      B: { ko: "VPN은 기존 500Mbps 한계를 넘지 못해 기한을 충족할 수 없습니다.", en: "A VPN does not overcome the existing 500 Mbps limit." },
      C: { ko: "새 Direct Connect 구축은 시간과 비용이 들며 500Mbps로는 전송 기한도 어렵습니다.", en: "A new Direct Connect circuit adds cost and lead time, and 500 Mbps remains insufficient." },
      D: { ko: "DataSync도 네트워크 대역폭 한계를 받으며 Glacier로 직접 전송하는 선택지도 적절하지 않습니다.", en: "DataSync is still limited by network bandwidth, and this direct Glacier target design is not appropriate." }
    }
  },
  {
    id: "exam5-216", number: 216, tags: ["S3 Batch Operations", "S3 Inventory", "Default Encryption"],
    question: {
      en: "A company has a serverless website with millions of objects in an Amazon S3 bucket. The company uses the S3 bucket as the origin for an Amazon CloudFront distribution. The company did not set encryption on the S3 bucket before the objects were loaded. A solutions architect needs to enable encryption for all existing objects and for all objects that are added to the S3 bucket in the future.\nWhich solution will meet these requirements with the LEAST amount of effort?",
      ko: "회사는 CloudFront 오리진 S3 버킷에 암호화 없이 수백만 개의 객체를 저장했습니다. 기존 모든 객체와 앞으로 추가될 객체를 최소 노력으로 암호화해야 합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Create a new S3 bucket. Turn on the default encryption settings for the new S3 bucket. Download all existing objects to temporary local storage. Upload the objects to the new S3 bucket.", ko: "새 암호화 버킷을 만들고 모든 객체를 로컬로 내려받아 다시 업로드합니다." },
      { k: "B", en: "Turn on the default encryption settings for the S3 bucket. Use the S3 Inventory feature to create a .csv file that lists the unencrypted objects. Run an S3 Batch Operations job that uses the copy command to encrypt those objects.", ko: "기본 암호화를 켜고 S3 Inventory로 미암호화 객체를 찾은 뒤 S3 Batch Operations 복사 작업으로 암호화합니다." },
      { k: "C", en: "Create a new encryption key by using AWS Key Management Service (AWS KMS). Change the settings on the S3 bucket to use server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Turn on versioning for the S3 bucket.", ko: "새 KMS 키와 SSE-KMS를 설정하고 버전 관리를 켭니다." },
      { k: "D", en: "Navigate to Amazon S3 in the AWS Management Console. Browse the S3 bucket's objects. Sort by the encryption field. Select each unencrypted object. Use the Modify button to apply default encryption settings to every unencrypted object in the S3 bucket.", ko: "콘솔에서 미암호화 객체를 하나씩 선택해 기본 암호화를 적용합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "기본 암호화는 새 객체를 보호하고, Inventory와 Batch Operations의 자체 복사는 수백만 기존 객체를 대규모로 재암호화합니다.", en: "Default encryption protects future objects, while Inventory and Batch Operations copy existing objects at scale to apply encryption." },
    why_wrong: {
      A: { ko: "수백만 객체를 로컬로 다운로드하고 재업로드하는 것은 느리고 운영 부담이 큽니다.", en: "Downloading and re-uploading millions of objects is slow and operationally heavy." },
      C: { ko: "기본 암호화 변경은 기존 객체에 소급 적용되지 않으며 버전 관리도 암호화하지 않습니다.", en: "Changing default encryption is not retroactive, and versioning does not encrypt existing objects." },
      D: { ko: "수백만 객체를 콘솔에서 수동 처리하는 것은 현실적이지 않습니다.", en: "Manually modifying millions of objects in the console is impractical." }
    }
  },
  {
    id: "exam5-217", number: 217, tags: ["Disaster Recovery", "Aurora Cross-Region Replica", "Route 53", "Pilot Light"],
    question: {
      en: "A company runs a global web application on Amazon EC2 instances behind an Application Load Balancer. The application stores data in Amazon Aurora. The company needs to create a disaster recovery solution and can tolerate up to 30 minutes of downtime and potential data loss. The solution does not need to handle the load when the primary infrastructure is healthy.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 ALB 뒤 EC2에서 글로벌 웹 애플리케이션을 실행하고 Aurora에 데이터를 저장합니다. 최대 30분의 중단과 데이터 손실을 허용하며 기본 인프라가 정상일 때 DR 환경은 부하를 처리할 필요가 없습니다.\n어떤 DR 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Deploy the application with the required infrastructure elements in place. Use Amazon Route 53 to configure active-passive failover. Create an Aurora Replica in a second AWS Region.", ko: "필요한 인프라 요소를 배치하고 Route 53 활성-수동 장애 조치와 다른 리전의 Aurora 복제본을 구성합니다." },
      { k: "B", en: "Host a scaled-down deployment of the application in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora Replica in the second Region.", ko: "다른 리전에 축소 환경을 두고 Route 53 활성-활성 및 Aurora 복제본을 구성합니다." },
      { k: "C", en: "Replicate the primary infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora database that is restored from the latest snapshot.", ko: "두 번째 리전에 전체 인프라를 복제하고 활성-활성 및 최신 스냅샷 복원 Aurora를 구성합니다." },
      { k: "D", en: "Back up data with AWS Backup. Use the backup to create the required infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-passive failover. Create an Aurora second primary instance in the second Region.", ko: "AWS Backup으로 두 번째 리전 인프라를 만들고 활성-수동 장애 조치와 Aurora 두 번째 기본 인스턴스를 구성합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "교차 리전 Aurora 복제본은 허용 RPO를 충족하고, 미리 배치한 애플리케이션 요소와 Route 53 활성-수동 전환으로 30분 이내 복구할 수 있습니다.", en: "A cross-Region Aurora replica supports the allowed RPO, while pre-positioned application components and Route 53 active-passive failover support recovery within 30 minutes." },
    why_wrong: {
      B: { ko: "대기 리전이 정상 시 부하를 처리할 필요가 없으므로 활성-활성은 요구와 맞지 않습니다.", en: "Active-active routing is unnecessary because the secondary need not serve traffic while primary is healthy." },
      C: { ko: "스냅샷 복원 DB는 지속 복제가 아니며 활성-활성 데이터베이스로 사용할 수 없습니다.", en: "A snapshot-restored database is not continuously replicated for active-active operation." },
      D: { ko: "백업에서 전체 인프라를 생성하면 30분 RTO를 넘길 수 있고 Aurora의 두 번째 기본 인스턴스 표현도 부정확합니다.", en: "Building everything from backups can exceed the RTO, and Aurora does not use a second primary this way." }
    }
  },
  {
    id: "exam5-218", number: 218, tags: ["Security Group", "Network ACL", "HTTPS", "Ephemeral Ports"],
    question: {
      en: "A company has a web server running on an Amazon EC2 instance in a public subnet with an Elastic IP address. The default security group is assigned to the EC2 instance. The default network ACL has been modified to block all traffic. A solutions architect needs to make the web server accessible from everywhere on port 443.\nWhich combination of steps will accomplish this task? (Choose two.)",
      ko: "회사는 탄력적 IP가 있는 퍼블릭 서브넷 EC2 웹 서버를 운영합니다. 기본 보안 그룹이 연결되어 있고 기본 네트워크 ACL은 모든 트래픽을 차단하도록 변경됐습니다. 어디서나 443 포트로 접근 가능하게 해야 합니다.\n어떤 조합이 적합합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Create a security group with a rule to allow TCP port 443 from source 0.0.0.0/0.", ko: "소스 0.0.0.0/0에서 TCP 443을 허용하는 보안 그룹을 생성합니다." },
      { k: "B", en: "Create a security group with a rule to allow TCP port 443 to destination 0.0.0.0/0.", ko: "대상 0.0.0.0/0으로 TCP 443을 허용하는 보안 그룹을 생성합니다." },
      { k: "C", en: "Update the network ACL to allow TCP port 443 from source 0.0.0.0/0.", ko: "NACL에서 소스 0.0.0.0/0의 TCP 443 인바운드를 허용합니다." },
      { k: "D", en: "Update the network ACL to allow inbound/outbound TCP port 443 from source 0.0.0.0/0 and to destination 0.0.0.0/0.", ko: "NACL에서 인바운드와 아웃바운드 TCP 443을 허용합니다." },
      { k: "E", en: "Update the network ACL to allow inbound TCP port 443 from source 0.0.0.0/0 and outbound TCP port 32768-65535 to destination 0.0.0.0/0.", ko: "NACL에서 인바운드 TCP 443과 아웃바운드 임시 포트 32768–65535를 허용합니다." }
    ],
    answer: ["A", "E"],
    explanation: { ko: "보안 그룹은 상태 저장 방식이므로 인바운드 443만 허용하면 됩니다. NACL은 상태 비저장이므로 인바운드 443과 클라이언트로 돌아가는 아웃바운드 임시 포트를 모두 허용해야 합니다.", en: "The security group is stateful and needs inbound 443. The stateless NACL needs inbound 443 and outbound ephemeral ports for response traffic." },
    why_wrong: {
      B: { ko: "웹 요청 허용에는 아웃바운드 443 보안 그룹 규칙이 아니라 인바운드 규칙이 필요합니다.", en: "Public web access requires an inbound, not outbound, security group rule." },
      C: { ko: "NACL은 상태 비저장이므로 인바운드 규칙만으로 응답 트래픽이 허용되지 않습니다.", en: "A stateless NACL also needs an outbound return-traffic rule." },
      D: { ko: "응답은 대상 443이 아니라 클라이언트의 임시 포트로 전송됩니다.", en: "Responses go to client ephemeral ports, not destination port 443." }
    }
  },
  {
    id: "exam5-219", number: 219, tags: ["EC2 R5", "CloudFormation", "CloudWatch Agent", "Memory Optimization"],
    question: {
      en: "A company's application is having performance issues. The application is stateful and needs to complete in-memory tasks on Amazon EC2 instances. The company used AWS CloudFormation to deploy infrastructure and used the M5 EC2 instance family. As traffic increased, the application performance degraded. Users are reporting delays when the users attempt to access the application.\nWhich solution will resolve these issues in the MOST operationally efficient way?",
      ko: "회사의 상태 저장 애플리케이션은 EC2에서 인메모리 작업을 수행합니다. CloudFormation으로 M5 인스턴스를 배포했으나 트래픽 증가 후 성능이 저하됐습니다.\n가장 운영 효율적으로 해결하는 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Replace the EC2 instances with T3 EC2 instances that run in an Auto Scaling group. Make the changes by using the AWS Management Console.", ko: "콘솔에서 T3 인스턴스 Auto Scaling 그룹으로 교체합니다." },
      { k: "B", en: "Modify the CloudFormation templates to run the EC2 instances in an Auto Scaling group. Increase the desired capacity and the maximum capacity of the Auto Scaling group manually when an increase is necessary.", ko: "CloudFormation에 Auto Scaling 그룹을 추가하고 필요할 때 용량을 수동 증가합니다." },
      { k: "C", en: "Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Use Amazon CloudWatch built-in EC2 memory metrics to track the application performance for future capacity planning.", ko: "CloudFormation으로 R5로 교체하고 CloudWatch 기본 EC2 메모리 지표를 사용합니다." },
      { k: "D", en: "Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Deploy the Amazon CloudWatch agent on the EC2 instances to generate custom application latency metrics for future capacity planning.", ko: "CloudFormation으로 R5로 교체하고 CloudWatch 에이전트로 사용자 지정 애플리케이션 지연 지표를 생성합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "R5는 인메모리 작업에 적합한 메모리 최적화 인스턴스입니다. CloudFormation 변경은 반복 가능하며 CloudWatch 에이전트의 사용자 지정 지연 지표로 향후 용량을 계획할 수 있습니다.", en: "R5 is memory optimized for in-memory workloads. Updating CloudFormation is repeatable, and CloudWatch agent custom latency metrics support future capacity planning." },
    why_wrong: {
      A: { ko: "T3는 버스터블 범용 인스턴스라 지속적인 메모리 집약 작업에 적합하지 않고 콘솔 변경은 IaC와 불일치합니다.", en: "T3 is burstable rather than memory optimized, and console changes cause infrastructure drift." },
      B: { ko: "상태 저장 애플리케이션의 수평 확장은 코드 변경 없이 적합하지 않으며 수동 확장도 비효율적입니다.", en: "Horizontal scaling a stateful application is unsuitable without changes, and manual scaling is inefficient." },
      C: { ko: "EC2는 기본적으로 메모리 사용률 지표를 CloudWatch에 제공하지 않습니다.", en: "EC2 does not provide memory utilization as a built-in CloudWatch metric." }
    }
  },
  {
    id: "exam5-220", number: 220, tags: ["API Gateway", "Lambda", "Serverless", "Cost Optimization"],
    question: {
      en: "A solutions architect is designing a new API using Amazon API Gateway that will receive requests from users. The volume of requests is highly variable; several hours can pass without receiving a single request. The data processing will take place asynchronously, but should be completed within a few seconds after a request is made.\nWhich compute service should the solutions architect have the API invoke to deliver the requirements at the lowest cost?",
      ko: "API Gateway API의 요청량은 매우 가변적이며 몇 시간 동안 요청이 없을 수 있습니다. 데이터 처리는 비동기식이지만 요청 후 몇 초 안에 완료되어야 합니다.\n가장 저렴하게 요구사항을 충족할 컴퓨팅 서비스는 무엇입니까?"
    },
    options: [
      { k: "A", en: "An AWS Glue job", ko: "AWS Glue 작업" },
      { k: "B", en: "An AWS Lambda function", ko: "AWS Lambda 함수" },
      { k: "C", en: "A containerized service hosted in Amazon Elastic Kubernetes Service (Amazon EKS)", ko: "Amazon EKS에서 호스팅되는 컨테이너 서비스" },
      { k: "D", en: "A containerized service hosted in Amazon ECS with Amazon EC2", ko: "EC2 기반 Amazon ECS에서 호스팅되는 컨테이너 서비스" }
    ],
    answer: ["B"],
    explanation: { ko: "Lambda는 요청이 있을 때만 실행되고 사용한 시간만 과금되며 수 초 내 비동기 처리에 적합해 유휴 시간이 긴 워크로드의 비용이 가장 낮습니다.", en: "Lambda runs only when invoked and charges for execution time, making it the lowest-cost fit for sparse, seconds-long asynchronous work." },
    why_wrong: {
      A: { ko: "Glue 작업은 ETL용이며 시작 지연과 최소 과금 단위 때문에 수 초 응답 작업에 부적합합니다.", en: "Glue is for ETL and has startup latency and billing characteristics unsuitable for seconds-long requests." },
      C: { ko: "EKS 컨테이너 인프라는 요청이 없어도 클러스터 운영 비용과 관리가 발생합니다.", en: "EKS incurs cluster cost and management even during idle periods." },
      D: { ko: "EC2 기반 ECS는 유휴 시간에도 인스턴스 비용이 발생합니다.", en: "ECS on EC2 incurs instance cost while idle." }
    }
  },
  {
    id: "exam5-221", number: 221, tags: ["Amazon S3", "Log Storage", "Durability", "Cost Optimization"],
    question: {
      en: "A company runs an application on a group of Amazon Linux EC2 instances. For compliance reasons, the company must retain all application log files for 7 years. The log files will be analyzed by a reporting tool that must be able to access all the files concurrently.\nWhich storage solution meets these requirements MOST cost-effectively?",
      ko: "회사는 여러 Amazon Linux EC2 인스턴스에서 애플리케이션을 실행합니다. 규정 준수를 위해 모든 애플리케이션 로그 파일을 7년간 보관해야 하며, 보고 도구가 모든 파일에 동시에 접근할 수 있어야 합니다.\n가장 비용 효율적인 스토리지 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Amazon Elastic Block Store (Amazon EBS)", ko: "Amazon EBS" },
      { k: "B", en: "Amazon Elastic File System (Amazon EFS)", ko: "Amazon EFS" },
      { k: "C", en: "Amazon EC2 instance store", ko: "Amazon EC2 인스턴스 스토어" },
      { k: "D", en: "Amazon S3", ko: "Amazon S3" }
    ],
    answer: ["D"],
    explanation: { ko: "Amazon S3는 내구성이 높은 객체 스토리지로 여러 클라이언트가 로그 객체에 동시에 접근할 수 있으며, 7년 보관에 가장 비용 효율적입니다. 수명 주기 정책으로 장기 보관 비용도 줄일 수 있습니다.", en: "Amazon S3 provides highly durable object storage, concurrent access, and cost-effective long-term retention. Lifecycle policies can reduce seven-year storage costs further." },
    why_wrong: {
      A: { ko: "EBS는 일반적으로 한 인스턴스에 연결하는 블록 스토리지이며 장기 로그 저장 비용이 높습니다.", en: "EBS is block storage generally attached to an instance and is costly for long-term log retention." },
      B: { ko: "EFS는 동시 파일 접근을 지원하지만 7년간 로그를 보관하는 용도로는 S3보다 비쌉니다.", en: "EFS supports concurrent file access but costs more than S3 for seven-year log retention." },
      C: { ko: "인스턴스 스토어는 임시 스토리지이므로 인스턴스 중지나 종료 시 데이터가 손실될 수 있습니다.", en: "Instance store is ephemeral and can lose data when an instance stops or terminates." }
    }
  },
  {
    id: "exam5-222", number: 222, tags: ["IAM", "Cross-Account Access", "IAM Role", "Security"],
    question: {
      en: "A company has hired an external vendor to perform work in the company's AWS account. The vendor uses an automated tool that is hosted in an AWS account that the vendor owns. The vendor does not have IAM access to the company's AWS account.\nHow should a solutions architect grant this access to the vendor?",
      ko: "회사는 외부 공급업체가 회사 AWS 계정에서 작업하도록 고용했습니다. 공급업체의 자동화 도구는 공급업체 소유 AWS 계정에서 실행되며 회사 계정에 대한 IAM 액세스는 없습니다.\n공급업체에 어떻게 액세스 권한을 부여해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an IAM role in the company's account to delegate access to the vendor's IAM role. Attach the appropriate IAM policies to the role for the permissions that the vendor requires.", ko: "회사 계정에 IAM 역할을 생성해 공급업체 IAM 역할에 액세스를 위임하고 필요한 권한 정책을 연결합니다." },
      { k: "B", en: "Create an IAM user in the company's account with a password that meets the password complexity requirements. Attach the appropriate IAM policies to the user for the permissions that the vendor requires.", ko: "회사 계정에 비밀번호가 있는 IAM 사용자를 생성하고 필요한 정책을 연결합니다." },
      { k: "C", en: "Create an IAM group in the company's account. Add the tool's IAM user from the vendor account to the group. Attach the appropriate IAM policies to the group for the permissions that the vendor requires.", ko: "회사 계정에 IAM 그룹을 만들고 공급업체 계정의 IAM 사용자를 추가한 뒤 정책을 연결합니다." },
      { k: "D", en: "Create a new identity provider by choosing AWS account as the provider type in the IAM console. Supply the vendor's AWS account ID and user name. Attach the appropriate IAM policies to the new provider for the permissions that the vendor requires.", ko: "IAM 콘솔에서 AWS 계정을 공급자 유형으로 선택해 자격 증명 공급자를 만들고 정책을 연결합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "교차 계정 IAM 역할을 만들고 공급업체 역할이 AssumeRole을 수행하도록 신뢰 정책을 설정하면 장기 자격 증명 없이 최소 권한을 위임할 수 있습니다.", en: "A cross-account IAM role lets the vendor role assume scoped permissions without creating long-term credentials in the company's account." },
    why_wrong: {
      B: { ko: "자동화 도구에 비밀번호 기반 IAM 사용자를 제공하면 장기 자격 증명을 관리해야 합니다.", en: "A password-based IAM user introduces long-term credentials that must be managed." },
      C: { ko: "한 AWS 계정의 IAM 사용자를 다른 계정의 IAM 그룹에 추가할 수 없습니다.", en: "An IAM user from one AWS account cannot be added to an IAM group in another account." },
      D: { ko: "AWS 계정은 IAM 자격 증명 공급자 유형이 아니며 교차 계정 액세스에는 역할 신뢰 정책을 사용합니다.", en: "An AWS account is not configured as an IAM identity provider for this purpose; cross-account access uses a role trust policy." }
    }
  },
  {
    id: "exam5-223", number: 223, tags: ["Amazon EKS", "IAM Roles for Service Accounts", "DynamoDB", "VPC Endpoint", "Choose two"],
    question: {
      en: "A company has deployed a Java Spring Boot application as a pod that runs on Amazon Elastic Kubernetes Service (Amazon EKS) in private subnets. The application needs to write data to an Amazon DynamoDB table. A solutions architect must ensure that the application can interact with the DynamoDB table without exposing traffic to the internet.\nWhich combination of steps should the solutions architect take to accomplish this goal? (Choose two.)",
      ko: "회사는 프라이빗 서브넷의 Amazon EKS 파드에서 Java Spring Boot 애플리케이션을 실행합니다. 애플리케이션이 인터넷에 트래픽을 노출하지 않고 DynamoDB 테이블에 데이터를 써야 합니다.\n어떤 두 단계를 수행해야 합니까?"
    },
    options: [
      { k: "A", en: "Attach an IAM role that has sufficient privileges to the EKS pod.", ko: "충분한 권한이 있는 IAM 역할을 EKS 파드에 연결합니다." },
      { k: "B", en: "Attach an IAM user that has sufficient privileges to the EKS pod.", ko: "충분한 권한이 있는 IAM 사용자를 EKS 파드에 연결합니다." },
      { k: "C", en: "Allow outbound connectivity to the DynamoDB table through the private subnets' network ACLs.", ko: "프라이빗 서브넷의 네트워크 ACL에서 DynamoDB 테이블로의 아웃바운드 연결을 허용합니다." },
      { k: "D", en: "Create a VPC endpoint for DynamoDB.", ko: "DynamoDB용 VPC 엔드포인트를 생성합니다." },
      { k: "E", en: "Embed the access keys in the Java Spring Boot code.", ko: "Java Spring Boot 코드에 액세스 키를 포함합니다." }
    ],
    answer: ["A", "D"],
    explanation: { ko: "파드에 연결된 IAM 역할(IRSA)이 DynamoDB 권한을 제공하고 DynamoDB VPC 엔드포인트가 트래픽을 AWS 네트워크 내부로 전달합니다.", en: "An IAM role for the pod, commonly through IRSA, supplies DynamoDB permissions, while a DynamoDB VPC endpoint keeps service traffic off the public internet." },
    why_wrong: {
      B: { ko: "파드에는 장기 자격 증명을 가진 IAM 사용자가 아니라 IAM 역할을 사용해야 합니다.", en: "Pods should use IAM roles instead of IAM users with long-term credentials." },
      C: { ko: "네트워크 ACL 허용만으로 DynamoDB에 대한 비공개 경로가 생성되지는 않습니다.", en: "A network ACL rule alone does not create a private route to DynamoDB." },
      E: { ko: "코드에 액세스 키를 저장하면 자격 증명이 노출되고 순환과 관리가 어려워집니다.", en: "Embedding access keys exposes long-term credentials and makes rotation difficult." }
    }
  },
  {
    id: "exam5-224", number: 224, tags: ["Route 53", "Multivalue Answer Routing", "EC2", "High Availability", "Choose two"],
    question: {
      en: "A company recently migrated its web application to AWS by rehosting the application on Amazon EC2 instances in a single AWS Region. The company wants to redesign its application architecture to be highly available and fault tolerant. Traffic must reach all running EC2 instances randomly.\nWhich combination of steps should the company take to meet these requirements? (Choose two.)",
      ko: "회사는 단일 AWS 리전의 EC2 인스턴스로 웹 애플리케이션을 이전했습니다. 아키텍처를 고가용성 및 내결함성으로 재설계하고 트래픽이 실행 중인 모든 EC2 인스턴스에 무작위로 도달하게 해야 합니다.\n어떤 두 단계를 수행해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon Route 53 failover routing policy.", ko: "Route 53 장애 조치 라우팅 정책을 생성합니다." },
      { k: "B", en: "Create an Amazon Route 53 weighted routing policy.", ko: "Route 53 가중치 기반 라우팅 정책을 생성합니다." },
      { k: "C", en: "Create an Amazon Route 53 multivalue answer routing policy.", ko: "Route 53 다중값 응답 라우팅 정책을 생성합니다." },
      { k: "D", en: "Launch three EC2 instances: two instances in one Availability Zone and one instance in another Availability Zone.", ko: "한 가용 영역에 2개, 다른 가용 영역에 1개로 총 3개의 EC2 인스턴스를 시작합니다." },
      { k: "E", en: "Launch four EC2 instances: two instances in one Availability Zone and two instances in another Availability Zone.", ko: "두 가용 영역에 각각 2개씩 총 4개의 EC2 인스턴스를 시작합니다." }
    ],
    answer: ["C", "E"],
    explanation: { ko: "다중값 응답 라우팅은 정상 리소스의 여러 IP를 무작위 순서로 반환할 수 있습니다. 두 가용 영역에 같은 수의 인스턴스를 배치하면 한 영역 장애 후에도 용량을 균형 있게 유지할 수 있습니다.", en: "Multivalue answer routing returns multiple healthy resource addresses in random order. An even deployment across two Availability Zones provides balanced fault tolerance." },
    why_wrong: {
      A: { ko: "장애 조치 정책은 활성/대기 리소스를 위한 것이므로 모든 실행 인스턴스로 무작위 분산하지 않습니다.", en: "Failover routing is for active-passive resources and does not randomly distribute traffic to all running instances." },
      B: { ko: "가중치 정책은 설정된 비율로 트래픽을 분배하지만 이 요구의 직접적인 무작위 다중 응답 방식은 다중값 응답입니다.", en: "Weighted routing distributes according to configured weights; multivalue answer routing directly fits random responses across healthy instances." },
      D: { ko: "가용 영역별 인스턴스 수가 불균형해 한 가용 영역 장애 시 가용 용량이 달라집니다.", en: "The uneven instance distribution leaves unequal remaining capacity after an Availability Zone failure." }
    }
  },
  {
    id: "exam5-225", number: 225, tags: ["Kinesis Data Firehose", "Amazon Redshift", "Streaming", "SQL Analytics"],
    question: {
      en: "A media company collects and analyzes user activity data on premises. The company wants to migrate this capability to AWS. The user activity data store will continue to grow and will be petabytes in size. The company needs to build a highly available data ingestion solution that facilitates on-demand analytics of existing data and new data with SQL.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "미디어 회사는 온프레미스에서 사용자 활동 데이터를 수집하고 분석합니다. 이 데이터는 계속 증가해 페타바이트 규모가 될 예정입니다. 기존 데이터와 새 데이터를 SQL로 온디맨드 분석할 수 있는 고가용성 수집 솔루션을 최소 운영 부담으로 구축해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Send activity data to an Amazon Kinesis data stream. Configure the stream to deliver the data to an Amazon S3 bucket.", ko: "활동 데이터를 Kinesis Data Streams로 보내고 스트림이 S3 버킷으로 전달하도록 구성합니다." },
      { k: "B", en: "Send activity data to an Amazon Kinesis Data Firehose delivery stream. Configure the stream to deliver the data to an Amazon Redshift cluster.", ko: "활동 데이터를 Kinesis Data Firehose 전송 스트림으로 보내고 Amazon Redshift 클러스터로 전달합니다." },
      { k: "C", en: "Place activity data in an Amazon S3 bucket. Configure Amazon S3 to run an AWS Lambda function on the data as the data arrives in the S3 bucket.", ko: "활동 데이터를 S3에 저장하고 데이터 도착 시 Lambda가 실행되도록 구성합니다." },
      { k: "D", en: "Create an ingestion service on Amazon EC2 instances that are spread across multiple Availability Zones. Configure the service to forward data to an Amazon RDS Multi-AZ database.", ko: "여러 가용 영역의 EC2에 수집 서비스를 만들고 RDS Multi-AZ 데이터베이스로 전달합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Kinesis Data Firehose는 고가용성 관리형 수집 서비스이고 Redshift는 페타바이트 규모 데이터를 SQL로 분석할 수 있습니다. 직접 수집 인프라를 운영할 필요가 적습니다.", en: "Kinesis Data Firehose provides managed, highly available ingestion, and Amazon Redshift supports SQL analytics at petabyte scale with low operational overhead." },
    why_wrong: {
      A: { ko: "Kinesis Data Streams는 직접 S3로 전달하지 않으므로 별도의 소비자나 Firehose가 필요하고 SQL 분석 계층도 제시되지 않았습니다.", en: "Kinesis Data Streams does not deliver directly to S3 without a consumer or Firehose, and this option provides no SQL analytics layer." },
      C: { ko: "S3 이벤트와 Lambda만으로는 데이터 수집 계층과 페타바이트 규모 SQL 분석 기능을 충족하지 못합니다.", en: "S3 events and Lambda alone do not provide the required ingestion pipeline and petabyte-scale SQL analytics." },
      D: { ko: "EC2 수집 서비스와 RDS는 운영 부담이 크며 페타바이트 규모 분석에 적합하지 않습니다.", en: "An EC2 ingestion fleet and RDS add operational burden and are not suited to petabyte-scale analytics." }
    }
  },
  {
    id: "exam5-226", number: 226, tags: ["API Gateway", "Kinesis Data Streams", "Kinesis Data Firehose", "AWS Glue", "S3", "Choose two"],
    question: {
      en: "A company collects data from thousands of remote devices by using a RESTful web services application that runs on an Amazon EC2 instance. The EC2 instance receives the raw data, transforms the raw data, and stores all the data in an Amazon S3 bucket. The number of remote devices will increase into the millions soon. The company needs a highly scalable solution that minimizes operational overhead.\nWhich combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
      ko: "회사는 EC2에서 실행되는 RESTful 웹 서비스로 수천 개 원격 장치의 데이터를 수집하고 변환해 S3에 저장합니다. 장치 수가 곧 수백만 개로 늘어날 예정이므로 운영 부담이 적은 고확장성 솔루션이 필요합니다.\n어떤 두 단계를 수행해야 합니까?"
    },
    options: [
      { k: "A", en: "Use AWS Glue to process the raw data in Amazon S3.", ko: "AWS Glue로 S3의 원시 데이터를 처리합니다." },
      { k: "B", en: "Use Amazon Route 53 to route traffic to different EC2 instances.", ko: "Route 53으로 트래픽을 여러 EC2 인스턴스에 라우팅합니다." },
      { k: "C", en: "Add more EC2 instances to accommodate the increasing amount of incoming data.", ko: "증가하는 데이터에 맞춰 EC2 인스턴스를 추가합니다." },
      { k: "D", en: "Send the raw data to Amazon Simple Queue Service (Amazon SQS). Use EC2 instances to process the data.", ko: "원시 데이터를 SQS로 보내고 EC2 인스턴스로 처리합니다." },
      { k: "E", en: "Use Amazon API Gateway to send the raw data to an Amazon Kinesis data stream. Configure Amazon Kinesis Data Firehose to use the data stream as a source to deliver the data to Amazon S3.", ko: "API Gateway에서 원시 데이터를 Kinesis Data Streams로 보내고 Firehose가 이를 소스로 사용해 S3로 전달하도록 구성합니다." }
    ],
    answer: ["A", "E"],
    explanation: { ko: "API Gateway, Kinesis Data Streams, Firehose는 수백만 장치의 수집과 S3 전달을 관리형으로 확장합니다. S3에 도착한 원시 데이터는 서버리스 ETL 서비스인 Glue로 변환할 수 있습니다.", en: "API Gateway, Kinesis Data Streams, and Firehose form a scalable managed ingestion path to S3. AWS Glue processes the raw S3 data with minimal infrastructure management." },
    why_wrong: {
      B: { ko: "Route 53은 단독으로 EC2 처리 계층을 자동 확장하거나 데이터 스트림을 관리하지 않습니다.", en: "Route 53 alone does not scale the EC2 processing tier or provide managed streaming ingestion." },
      C: { ko: "EC2를 직접 추가하면 수백만 장치 규모에서 운영 부담이 증가합니다.", en: "Adding EC2 instances directly increases operational overhead at million-device scale." },
      D: { ko: "SQS로 분리할 수는 있지만 EC2 처리 집합을 계속 운영하고 확장해야 합니다.", en: "SQS decouples ingestion, but the company would still operate and scale an EC2 processing fleet." }
    }
  },
  {
    id: "exam5-227", number: 227, tags: ["Amazon S3", "S3 Lifecycle", "Versioning", "CloudTrail", "Cost Optimization"],
    question: {
      en: "A company needs to retain its AWS CloudTrail logs for 3 years. The company is enforcing CloudTrail across a set of AWS accounts by using AWS Organizations from the parent account. The CloudTrail target S3 bucket is configured with S3 Versioning enabled. An S3 Lifecycle policy is in place to delete current objects after 3 years.\nAfter the fourth year of use of the S3 bucket, the S3 bucket metrics show that the number of objects has continued to rise. However, the number of new CloudTrail logs that are delivered to the S3 bucket has remained consistent.\nWhich solution will delete objects that are older than 3 years in the MOST cost-effective manner?",
      ko: "회사는 AWS Organizations의 상위 계정에서 여러 계정의 CloudTrail 로그를 3년간 보관합니다. 대상 S3 버킷에는 버전 관리가 활성화되어 있고 현재 객체를 3년 후 삭제하는 수명 주기 정책이 있습니다. 4년 후에도 새 로그 수는 일정하지만 객체 수가 계속 증가합니다.\n3년보다 오래된 객체를 가장 비용 효율적으로 삭제하는 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Configure the organization's centralized CloudTrail trail to expire objects after 3 years.", ko: "조직 중앙 CloudTrail 추적에서 객체가 3년 후 만료되도록 구성합니다." },
      { k: "B", en: "Configure the S3 Lifecycle policy to delete previous versions as well as current versions.", ko: "S3 수명 주기 정책이 현재 버전과 이전 버전을 모두 삭제하도록 구성합니다." },
      { k: "C", en: "Create an AWS Lambda function to enumerate and delete objects from Amazon S3 that are older than 3 years.", ko: "Lambda 함수로 3년이 지난 S3 객체를 열거하고 삭제합니다." },
      { k: "D", en: "Configure the parent account as the owner of all objects that are delivered to the S3 bucket.", ko: "상위 계정을 S3 버킷에 전달된 모든 객체의 소유자로 구성합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "버전 관리 버킷에서 현재 버전을 만료하면 삭제 마커가 생성되고 기존 버전은 비현재 버전으로 남습니다. 수명 주기 정책에 비현재 버전 만료를 추가해야 저장 객체가 실제로 제거됩니다.", en: "In a versioned bucket, expiring a current object creates a delete marker while older versions remain. Lifecycle expiration for noncurrent versions removes those retained objects cost-effectively." },
    why_wrong: {
      A: { ko: "CloudTrail에는 전달된 S3 객체의 보존 만료를 직접 관리하는 설정이 없습니다.", en: "CloudTrail does not directly manage expiration of delivered S3 objects." },
      C: { ko: "Lambda로 객체를 열거하고 삭제하는 방식은 관리형 수명 주기 정책보다 복잡하고 비용이 큽니다.", en: "Enumerating and deleting objects with Lambda is more complex and costly than an S3 Lifecycle rule." },
      D: { ko: "객체 소유권 설정은 이전 버전이 계속 저장되는 원인을 해결하지 않습니다.", en: "Object ownership does not address retained noncurrent versions." }
    }
  },
  {
    id: "exam5-228", number: 228, tags: ["Amazon SQS", "AWS Lambda", "Amazon RDS", "Decoupling", "Database Connections"],
    question: {
      en: "A company has an API that receives real-time data from a fleet of monitoring devices. The API stores this data in an Amazon RDS DB instance for later analysis. The amount of data that the monitoring devices send to the API fluctuates. During periods of heavy traffic, the API often returns timeout errors.\nAfter an inspection of the logs, the company determines that the database is not capable of processing the volume of write traffic that comes from the API. A solutions architect must minimize the number of connections to the database and must ensure that data is not lost during periods of heavy traffic.\nWhich solution will meet these requirements?",
      ko: "모니터링 장치의 실시간 데이터를 받는 API가 분석을 위해 RDS에 저장합니다. 트래픽이 몰리면 데이터베이스가 쓰기량을 처리하지 못해 시간 초과가 발생합니다. 데이터베이스 연결 수를 최소화하고 높은 트래픽 중 데이터 손실을 방지해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Increase the size of the DB instance to an instance type that has more available memory.", ko: "DB 인스턴스를 메모리가 더 많은 유형으로 확장합니다." },
      { k: "B", en: "Modify the DB instance to be a Multi-AZ DB instance. Configure the application to write to all active RDS instances.", ko: "DB를 Multi-AZ로 변경하고 애플리케이션이 모든 활성 RDS 인스턴스에 쓰도록 구성합니다." },
      { k: "C", en: "Modify the API to write incoming data to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function that Amazon SQS invokes to write data from the queue to the database.", ko: "API가 수신 데이터를 SQS 대기열에 쓰게 하고 SQS가 호출하는 Lambda가 대기열 데이터를 데이터베이스에 기록하게 합니다." },
      { k: "D", en: "Modify the API to write incoming data to an Amazon Simple Notification Service (Amazon SNS) topic. Use an AWS Lambda function that Amazon SNS invokes to write data from the topic to the database.", ko: "API가 데이터를 SNS 주제에 게시하고 SNS가 호출하는 Lambda가 데이터베이스에 기록하게 합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "SQS는 급증한 쓰기를 내구성 있게 버퍼링하여 손실을 막고, Lambda의 동시성을 제어해 데이터베이스 연결과 쓰기 속도를 제한할 수 있습니다.", en: "SQS durably buffers write bursts, and Lambda concurrency can be controlled to limit database connections and drain the queue at a sustainable rate." },
    why_wrong: {
      A: { ko: "수직 확장은 연결 수를 줄이거나 트래픽 급증 중 요청을 내구성 있게 보존하지 않습니다.", en: "Vertical scaling does not reduce connection count or durably preserve requests during bursts." },
      B: { ko: "일반 RDS Multi-AZ 대기는 쓰기 대상이 아니며 Multi-AZ의 목적은 고가용성입니다.", en: "A standard RDS Multi-AZ standby is not an active write target; Multi-AZ primarily provides availability." },
      D: { ko: "SNS는 메시지를 대기열처럼 보존하며 처리 속도를 조절하는 버퍼가 아니므로 급증 시 데이터베이스를 보호하기 어렵습니다.", en: "SNS is not a durable queue that buffers and rate-controls work for the database." }
    }
  },
  {
    id: "exam5-229", number: 229, tags: ["Aurora Serverless", "Aurora MySQL", "Database Migration", "Auto Scaling"],
    question: {
      en: "A company manages its own Amazon EC2 instances that run MySQL databases. The company is manually managing replication and scaling as demand increases or decreases. The company needs a new solution that simplifies the process of adding or removing compute capacity to or from its database tier as needed. The solution also must offer improved performance, scaling, and durability with minimal effort from operations.\nWhich solution meets these requirements?",
      ko: "회사는 EC2에서 MySQL 데이터베이스를 직접 운영하며 수요 변화에 따른 복제와 확장을 수동 관리합니다. 데이터베이스 컴퓨팅 용량을 쉽게 늘리거나 줄이고 성능, 확장성, 내구성을 개선하면서 운영 노력을 최소화해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Migrate the databases to Amazon Aurora Serverless for Aurora MySQL.", ko: "데이터베이스를 Aurora MySQL용 Amazon Aurora Serverless로 마이그레이션합니다." },
      { k: "B", en: "Migrate the databases to Amazon Aurora Serverless for Aurora PostgreSQL.", ko: "데이터베이스를 Aurora PostgreSQL용 Amazon Aurora Serverless로 마이그레이션합니다." },
      { k: "C", en: "Combine the databases into one larger MySQL database. Run the larger database on larger EC2 instances.", ko: "데이터베이스를 하나의 큰 MySQL 데이터베이스로 통합해 더 큰 EC2 인스턴스에서 실행합니다." },
      { k: "D", en: "Create an EC2 Auto Scaling group for the database tier. Migrate the existing databases to the new environment.", ko: "데이터베이스 계층용 EC2 Auto Scaling 그룹을 만들고 기존 데이터베이스를 이전합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "Aurora Serverless for MySQL은 기존 MySQL 호환성을 유지하면서 데이터베이스 용량을 자동 조정하고 복제, 내구성, 인프라 관리를 서비스가 담당합니다.", en: "Aurora Serverless for MySQL preserves MySQL compatibility while automatically adjusting capacity and providing managed replication, durability, and infrastructure operations." },
    why_wrong: {
      B: { ko: "PostgreSQL 엔진으로의 변경은 MySQL 호환성을 유지하지 않아 추가 마이그레이션 작업이 필요합니다.", en: "Changing to PostgreSQL does not preserve MySQL compatibility and requires additional migration work." },
      C: { ko: "더 큰 EC2에서 직접 운영하면 수동 확장과 데이터베이스 관리 문제가 계속됩니다.", en: "Self-managing a larger database on EC2 retains manual scaling and operational work." },
      D: { ko: "상태 저장 MySQL 노드를 일반 EC2 Auto Scaling 그룹으로 확장한다고 데이터 복제와 일관성이 자동 관리되지는 않습니다.", en: "A generic EC2 Auto Scaling group does not automatically manage MySQL replication and consistency." }
    }
  },
  {
    id: "exam5-230", number: 230, tags: ["NAT Gateway", "Multi-AZ", "High Availability", "Networking"],
    question: {
      en: "A company is concerned that two NAT instances in use will no longer be able to support the traffic needed for the company's application. A solutions architect wants to implement a solution that is highly available, fault tolerant, and automatically scalable.\nWhat should the solutions architect recommend?",
      ko: "회사는 현재 사용 중인 두 NAT 인스턴스가 앞으로 애플리케이션 트래픽을 감당하지 못할 것을 우려합니다. 고가용성, 내결함성 및 자동 확장성을 제공해야 합니다.\n어떤 솔루션을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Remove the two NAT instances and replace them with two NAT gateways in the same Availability Zone.", ko: "두 NAT 인스턴스를 제거하고 같은 가용 영역의 NAT 게이트웨이 2개로 교체합니다." },
      { k: "B", en: "Use Auto Scaling groups with Network Load Balancers for the NAT instances in different Availability Zones.", ko: "서로 다른 가용 영역의 NAT 인스턴스에 Auto Scaling 그룹과 Network Load Balancer를 사용합니다." },
      { k: "C", en: "Remove the two NAT instances and replace them with two NAT gateways in different Availability Zones.", ko: "두 NAT 인스턴스를 제거하고 서로 다른 가용 영역의 NAT 게이트웨이 2개로 교체합니다." },
      { k: "D", en: "Replace the two NAT instances with Spot Instances in different Availability Zones and deploy a Network Load Balancer.", ko: "두 NAT 인스턴스를 서로 다른 가용 영역의 스팟 인스턴스로 교체하고 Network Load Balancer를 배포합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "NAT 게이트웨이는 AWS가 관리하며 자동으로 확장됩니다. 가용 영역마다 NAT 게이트웨이를 배치하고 각 프라이빗 서브넷이 같은 영역의 게이트웨이를 사용하게 하면 가용 영역 장애에도 견딜 수 있습니다.", en: "NAT gateways are managed and scale automatically. Deploying one in each Availability Zone and routing each private subnet to its local gateway provides zonal fault tolerance." },
    why_wrong: {
      A: { ko: "두 게이트웨이가 같은 가용 영역에 있으면 해당 영역 장애를 견디지 못합니다.", en: "Two gateways in the same Availability Zone do not protect against an Availability Zone failure." },
      B: { ko: "NAT 인스턴스 집합은 직접 패치하고 확장해야 하며 NAT 게이트웨이보다 운영 부담이 큽니다.", en: "A NAT instance fleet requires patching and scaling management and has more operational overhead than NAT gateways." },
      D: { ko: "스팟 인스턴스는 중단될 수 있어 NAT 계층의 고가용성에 부적합하며 직접 운영도 필요합니다.", en: "Spot Instances can be interrupted and are unsuitable for a highly available NAT tier; they also require self-management." }
    }
  },
  {
    id: "exam5-231", number: 231, tags: ["VPC Peering", "Private Connectivity", "Database", "Security"],
    question: {
      en: "An application runs on an Amazon EC2 instance that has an Elastic IP address in VPC A. The application requires access to a database in VPC B. Both VPCs are in the same AWS account.\nWhich solution will provide the required access MOST securely?",
      ko: "애플리케이션이 VPC A에서 탄력적 IP 주소가 있는 EC2 인스턴스에서 실행됩니다. 애플리케이션은 VPC B의 데이터베이스에 접근해야 하며 두 VPC는 같은 AWS 계정에 있습니다.\n가장 안전하게 필요한 접근을 제공하는 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create a DB instance security group that allows all traffic from the public IP address of the application server in VPC A.", ko: "VPC A 애플리케이션 서버의 공용 IP에서 오는 모든 트래픽을 허용하는 DB 보안 그룹을 생성합니다." },
      { k: "B", en: "Configure a VPC peering connection between VPC A and VPC B.", ko: "VPC A와 VPC B 사이에 VPC 피어링 연결을 구성합니다." },
      { k: "C", en: "Make the DB instance publicly accessible. Assign a public IP address to the DB instance.", ko: "DB 인스턴스를 공개 액세스 가능하게 만들고 공용 IP 주소를 할당합니다." },
      { k: "D", en: "Launch an EC2 instance with an Elastic IP address into VPC B. Proxy all requests through the new EC2 instance.", ko: "VPC B에 탄력적 IP가 있는 EC2 인스턴스를 시작하고 모든 요청을 프록시합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "VPC 피어링은 두 VPC 간에 AWS 네트워크를 통한 사설 IP 연결을 제공하므로 데이터베이스를 인터넷에 노출하지 않고 통신할 수 있습니다.", en: "VPC peering provides private-IP connectivity between the VPCs over the AWS network, avoiding public exposure of the database." },
    why_wrong: {
      A: { ko: "공용 IP를 허용하고 모든 트래픽을 개방하면 인터넷 경로와 과도한 권한 범위가 생깁니다.", en: "Allowing all traffic from a public IP uses a public path and grants an unnecessarily broad rule." },
      C: { ko: "데이터베이스에 공용 접근을 허용하면 공격 표면이 커집니다.", en: "Making the database publicly accessible increases its attack surface." },
      D: { ko: "공용 프록시는 인터넷 노출과 별도 인스턴스 운영 및 단일 장애 지점을 추가합니다.", en: "A public proxy adds internet exposure, instance management, and a single point of failure." }
    }
  },
  {
    id: "exam5-232", number: 232, tags: ["VPC Flow Logs", "CloudWatch Logs", "CloudWatch Alarm", "SNS", "Monitoring"],
    question: {
      en: "A company runs demonstration environments for its customers on Amazon EC2 instances. Each environment is isolated in its own VPC. The company's operations team needs to be notified when RDP or SSH access to an environment has been established.\nWhich solution meets these requirements?",
      ko: "회사는 고객용 데모 환경을 EC2에서 운영하며 각 환경은 별도의 VPC로 격리됩니다. 운영 팀은 환경에 RDP 또는 SSH 접속이 설정되었을 때 알림을 받아야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Configure Amazon CloudWatch Application Insights to create AWS Systems Manager OpsItems when RDP or SSH access is detected.", ko: "CloudWatch Application Insights가 RDP 또는 SSH 접속을 감지하면 Systems Manager OpsItem을 생성하게 합니다." },
      { k: "B", en: "Configure the EC2 instances with an IAM instance profile that has an IAM role with the AmazonSSMManagedInstanceCore policy attached.", ko: "EC2 인스턴스에 AmazonSSMManagedInstanceCore 정책이 연결된 IAM 역할의 인스턴스 프로파일을 구성합니다." },
      { k: "C", en: "Publish VPC flow logs to Amazon CloudWatch Logs. Create required metric filters. Create an Amazon CloudWatch metric alarm with a notification action for when the alarm is in the ALARM state.", ko: "VPC 흐름 로그를 CloudWatch Logs에 게시하고 필요한 지표 필터와 알림 작업이 있는 CloudWatch 경보를 생성합니다." },
      { k: "D", en: "Configure an Amazon EventBridge rule to listen for events of type EC2 Instance State-change Notification. Configure an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the operations team to the topic.", ko: "EC2 인스턴스 상태 변경 이벤트를 수신하는 EventBridge 규칙을 만들고 SNS 주제를 대상으로 지정해 운영 팀을 구독시킵니다." }
    ],
    answer: ["C"],
    explanation: { ko: "VPC 흐름 로그에는 소스·대상 주소와 포트 및 허용 상태가 기록됩니다. RDP 3389와 SSH 22의 허용 트래픽을 지표 필터로 탐지하고 CloudWatch 경보로 알릴 수 있습니다.", en: "VPC Flow Logs record addresses, ports, and acceptance status. Metric filters can detect accepted RDP port 3389 or SSH port 22 traffic and trigger a CloudWatch alarm notification." },
    why_wrong: {
      A: { ko: "Application Insights는 애플리케이션 상태 진단용이며 네트워크 접속 세션을 직접 탐지하는 수단이 아닙니다.", en: "Application Insights diagnoses application health and is not the direct source for detecting network access sessions." },
      B: { ko: "SSM 관리 권한은 인스턴스 관리를 가능하게 하지만 RDP·SSH 접속 알림을 생성하지 않습니다.", en: "The SSM instance profile enables management but does not generate RDP or SSH connection alerts." },
      D: { ko: "EC2 상태 변경 이벤트는 인스턴스 실행 상태를 알리며 RDP나 SSH 연결을 나타내지 않습니다.", en: "EC2 state-change events report instance lifecycle state, not RDP or SSH connections." }
    }
  },
  {
    id: "exam5-233", number: 233, tags: ["AWS Root User", "MFA", "Strong Password", "Security", "Choose two"],
    question: {
      en: "A solutions architect has created a new AWS account and must secure AWS account root user access.\nWhich combination of actions will accomplish this? (Choose two.)",
      ko: "솔루션스 아키텍트가 새 AWS 계정을 만들었으며 AWS 계정 루트 사용자 액세스를 보호해야 합니다.\n어떤 두 작업을 수행해야 합니까?"
    },
    options: [
      { k: "A", en: "Ensure the root user uses a strong password.", ko: "루트 사용자가 강력한 암호를 사용하도록 합니다." },
      { k: "B", en: "Enable multi-factor authentication to the root user.", ko: "루트 사용자에 다중 인증(MFA)을 활성화합니다." },
      { k: "C", en: "Store root user access keys in an encrypted Amazon S3 bucket.", ko: "루트 사용자 액세스 키를 암호화된 S3 버킷에 저장합니다." },
      { k: "D", en: "Add the root user to a group containing administrative permissions.", ko: "루트 사용자를 관리자 권한이 있는 그룹에 추가합니다." },
      { k: "E", en: "Apply the required permissions to the root user with an inline policy document.", ko: "인라인 정책 문서로 루트 사용자에게 필요한 권한을 적용합니다." }
    ],
    answer: ["A", "B"],
    explanation: { ko: "루트 사용자는 강력하고 고유한 암호와 MFA로 보호해야 합니다. 일상 작업에는 루트 자격 증명을 사용하지 않는 것이 기본 보안 관행입니다.", en: "The root user should be protected with a strong unique password and MFA, and reserved from routine administrative use." },
    why_wrong: {
      C: { ko: "루트 액세스 키는 생성하거나 보관하지 말고, 존재한다면 삭제해야 합니다.", en: "Root access keys should not be created or retained; existing keys should be removed." },
      D: { ko: "루트 사용자는 IAM 사용자나 그룹의 구성원이 될 수 없으며 이미 계정 전체 권한을 가집니다.", en: "The root user cannot be placed in an IAM group and already has full account permissions." },
      E: { ko: "IAM 정책을 루트 사용자에게 연결할 수 없으며 루트 권한은 IAM 정책으로 제한되지 않습니다.", en: "IAM policies cannot be attached to the root user, whose permissions are not granted through IAM policies." }
    }
  },
  {
    id: "exam5-234", number: 234, tags: ["AWS KMS", "AWS Certificate Manager", "EBS Encryption", "Aurora Encryption", "TLS"],
    question: {
      en: "A company is building a new web-based customer relationship management application. The application will use several Amazon EC2 instances that are backed by Amazon Elastic Block Store (Amazon EBS) volumes behind an Application Load Balancer (ALB). The application will also use an Amazon Aurora database. All data for the application must be encrypted at rest and in transit.\nWhich solution will meet these requirements?",
      ko: "회사는 EBS 볼륨 기반 EC2 인스턴스 여러 대를 ALB 뒤에서 실행하고 Aurora 데이터베이스를 사용하는 웹 CRM 애플리케이션을 구축합니다. 모든 데이터를 저장 중과 전송 중에 암호화해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Use AWS Key Management Service (AWS KMS) certificates on the ALB to encrypt data in transit. Use AWS Certificate Manager (ACM) to encrypt the EBS volumes and Aurora database storage at rest.", ko: "ALB에 KMS 인증서를 사용하고 ACM으로 EBS 볼륨과 Aurora 저장소를 암호화합니다." },
      { k: "B", en: "Use the AWS root account to log in to the AWS Management Console. Upload the company's encryption certificates. While in the root account, select the option to turn on encryption for all data at rest and in transit for the account.", ko: "루트 계정으로 콘솔에 로그인해 인증서를 업로드하고 계정 전체 저장·전송 암호화를 활성화합니다." },
      { k: "C", en: "Use AWS Key Management Service (AWS KMS) to encrypt the EBS volumes and Aurora database storage at rest. Attach an AWS Certificate Manager (ACM) certificate to the ALB to encrypt data in transit.", ko: "KMS로 EBS 볼륨과 Aurora 저장소를 암호화하고 ACM 인증서를 ALB에 연결해 전송 데이터를 암호화합니다." },
      { k: "D", en: "Use BitLocker to encrypt all data at rest. Import the company's TLS certificate keys to AWS Key Management Service (AWS KMS). Attach the KMS keys to the ALB to encrypt data in transit.", ko: "BitLocker로 저장 데이터를 암호화하고 TLS 인증서 키를 KMS로 가져와 ALB에 연결합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "KMS 키는 EBS와 Aurora의 저장 데이터 암호화에 사용하고, ALB HTTPS 리스너에는 ACM 인증서를 연결해 전송 데이터를 TLS로 암호화합니다.", en: "KMS keys encrypt EBS and Aurora storage at rest, while an ACM certificate on the ALB HTTPS listener provides TLS encryption in transit." },
    why_wrong: {
      A: { ko: "서비스 역할이 뒤바뀌었습니다. KMS는 저장 데이터 키를 관리하고 ACM은 TLS 인증서를 관리합니다.", en: "The service roles are reversed: KMS manages encryption keys for data at rest, while ACM manages TLS certificates." },
      B: { ko: "계정 전체의 저장·전송 암호화를 한 번에 켜는 루트 계정 옵션은 없습니다.", en: "There is no root-account switch that enables all at-rest and in-transit encryption across an account." },
      D: { ko: "ALB는 KMS 키가 아니라 TLS 인증서를 사용하며 BitLocker는 이 AWS 관리형 구성의 적절한 통합 방식이 아닙니다.", en: "An ALB uses a TLS certificate rather than a KMS key, and BitLocker is not the appropriate managed integration here." }
    }
  },
  {
    id: "exam5-235", number: 235, tags: ["AWS DMS", "AWS Schema Conversion Tool", "CDC", "Aurora PostgreSQL", "Database Migration"],
    question: {
      en: "A company is moving its on-premises Oracle database to Amazon Aurora PostgreSQL. The database has several applications that write to the same tables. The applications need to be migrated one by one with a month in between each migration. Management has expressed concerns that the database has a high number of reads and writes. The data must be kept in sync across both databases throughout the migration.\nWhat should a solutions architect recommend?",
      ko: "회사는 온프레미스 Oracle 데이터베이스를 Aurora PostgreSQL로 이전합니다. 같은 테이블에 쓰는 여러 애플리케이션을 한 달 간격으로 하나씩 이전하며, 읽기와 쓰기가 많고 이전 기간 내내 두 데이터베이스의 데이터를 동기화해야 합니다.\n어떤 방법을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a change data capture (CDC) replication task and a table mapping to select all tables.", ko: "초기 이전에 DataSync를 사용하고 DMS CDC 복제 작업과 모든 테이블 매핑을 생성합니다." },
      { k: "B", en: "Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a full load plus change data capture (CDC) replication task and a table mapping to select all tables.", ko: "초기 이전에 DataSync를 사용하고 DMS 전체 로드 및 CDC 작업과 모든 테이블 매핑을 생성합니다." },
      { k: "C", en: "Use the AWS Schema Conversion Tool with AWS Database Migration Service (AWS DMS) using a memory optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table mapping to select all tables.", ko: "AWS Schema Conversion Tool과 메모리 최적화 DMS 복제 인스턴스를 사용하고 전체 로드 및 CDC 작업에서 모든 테이블을 선택합니다." },
      { k: "D", en: "Use the AWS Schema Conversion Tool with AWS Database Migration Service (AWS DMS) using a compute optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table mapping to select the largest tables.", ko: "AWS Schema Conversion Tool과 컴퓨팅 최적화 DMS 복제 인스턴스를 사용하고 전체 로드 및 CDC 작업에서 가장 큰 테이블만 선택합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "Oracle에서 PostgreSQL로의 이기종 이전에는 Schema Conversion Tool이 필요합니다. DMS 전체 로드와 CDC는 초기 데이터를 옮긴 뒤 지속 변경을 복제하며, 읽기·쓰기량이 많은 작업에는 메모리 최적화 복제 인스턴스가 적합합니다.", en: "A heterogeneous Oracle-to-PostgreSQL migration requires schema conversion. DMS full load plus CDC copies initial data and then ongoing changes, and a memory-optimized replication instance fits a high-throughput workload." },
    why_wrong: {
      A: { ko: "DataSync는 파일·객체 전송 서비스이며 관계형 데이터베이스의 스키마 변환과 초기 로드 도구가 아닙니다.", en: "DataSync transfers files and objects; it does not perform relational schema conversion and initial database loading." },
      B: { ko: "DataSync를 초기 관계형 데이터베이스 이전에 사용하는 것은 부적절하며 스키마 변환도 빠져 있습니다.", en: "DataSync is not the appropriate initial relational database migration tool, and schema conversion is missing." },
      D: { ko: "동기화를 유지하려면 관련된 모든 테이블을 복제해야 하며 높은 트랜잭션 작업에는 메모리 최적화 선택이 더 적합합니다.", en: "All relevant tables must be replicated to remain synchronized, and a memory-optimized instance is better suited to the high transaction volume." }
    }
  },
  {
    id: "exam5-236", number: 236, tags: ["Elastic Beanstalk", "RDS Multi-AZ", "Amazon S3", "High Availability", "Three-Tier Architecture"],
    question: {
      en: "A company has a three-tier application for image sharing. The application uses an Amazon EC2 instance for the front-end layer, another EC2 instance for the application layer, and a third EC2 instance for a MySQL database. A solutions architect must design a scalable and highly available solution that requires the least amount of change to the application.\nWhich solution meets these requirements?",
      ko: "회사는 프런트엔드, 애플리케이션, MySQL 데이터베이스 계층에 각각 EC2 인스턴스 하나를 사용하는 이미지 공유 애플리케이션을 운영합니다. 애플리케이션 변경을 최소화하면서 확장 가능하고 고가용성인 솔루션을 설계해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon S3 to host the front-end layer. Use AWS Lambda functions for the application layer. Move the database to an Amazon DynamoDB table. Use Amazon S3 to store and serve users' images.", ko: "프런트엔드는 S3, 애플리케이션은 Lambda, 데이터베이스는 DynamoDB를 사용하고 이미지는 S3에 저장합니다." },
      { k: "B", en: "Use load-balanced Multi-AZ AWS Elastic Beanstalk environments for the front-end layer and the application layer. Move the database to an Amazon RDS DB instance with multiple read replicas to serve users' images.", ko: "프런트엔드와 애플리케이션 계층에 로드 밸런싱된 Multi-AZ Elastic Beanstalk를 사용하고 여러 읽기 전용 복제본이 있는 RDS에서 이미지를 제공합니다." },
      { k: "C", en: "Use Amazon S3 to host the front-end layer. Use a fleet of EC2 instances in an Auto Scaling group for the application layer. Move the database to a memory optimized instance type to store and serve users' images.", ko: "프런트엔드는 S3, 애플리케이션은 Auto Scaling EC2, 이미지는 메모리 최적화 데이터베이스 인스턴스에 저장합니다." },
      { k: "D", en: "Use load-balanced Multi-AZ AWS Elastic Beanstalk environments for the front-end layer and the application layer. Move the database to an Amazon RDS Multi-AZ DB instance. Use Amazon S3 to store and serve users' images.", ko: "프런트엔드와 애플리케이션 계층에 로드 밸런싱된 Multi-AZ Elastic Beanstalk를 사용하고 데이터베이스를 RDS Multi-AZ로 이전하며 이미지는 S3에 저장합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "Elastic Beanstalk는 기존 애플리케이션을 적은 변경으로 여러 가용 영역에 배포하고 확장합니다. RDS Multi-AZ는 데이터베이스 고가용성을 제공하고 S3는 이미지 객체를 내구성 있게 확장 저장합니다.", en: "Elastic Beanstalk scales the existing application across Availability Zones with limited changes. RDS Multi-AZ adds database availability, and S3 provides durable scalable image storage." },
    why_wrong: {
      A: { ko: "Lambda와 DynamoDB로의 전면 재설계는 애플리케이션 변경이 큽니다.", en: "Rearchitecting for Lambda and DynamoDB requires substantial application changes." },
      B: { ko: "읽기 전용 복제본은 고가용성 장애 조치 대체물이 아니며 데이터베이스에 이미지 바이너리를 제공하는 구성도 비효율적입니다.", en: "Read replicas are not a substitute for Multi-AZ failover, and serving image binaries from the database is inefficient." },
      C: { ko: "단일 데이터베이스 인스턴스는 고가용성이 아니며 이미지 저장에도 S3가 더 적합합니다.", en: "A single database instance is not highly available, and S3 is better suited for image storage." }
    }
  },
  {
    id: "exam5-237", number: 237, tags: ["VPC Peering", "Cross-Account", "Private Connectivity", "Networking"],
    question: {
      en: "An application running on an Amazon EC2 instance in VPC-A needs to access files in another EC2 instance in VPC-B. Both VPCs are in separate AWS accounts. The network administrator needs to design a solution to configure secure access to EC2 instance in VPC-B from VPC-A. The connectivity should not have a single point of failure or bandwidth concerns.\nWhich solution will meet these requirements?",
      ko: "VPC-A의 EC2 애플리케이션이 다른 AWS 계정의 VPC-B에 있는 EC2 인스턴스 파일에 접근해야 합니다. 연결에는 단일 장애 지점이나 대역폭 문제가 없어야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Set up a VPC peering connection between VPC-A and VPC-B.", ko: "VPC-A와 VPC-B 사이에 VPC 피어링 연결을 설정합니다." },
      { k: "B", en: "Set up VPC gateway endpoints for the EC2 instance running in VPC-B.", ko: "VPC-B의 EC2 인스턴스를 위한 VPC 게이트웨이 엔드포인트를 설정합니다." },
      { k: "C", en: "Attach a virtual private gateway to VPC-B and set up routing from VPC-A.", ko: "VPC-B에 가상 프라이빗 게이트웨이를 연결하고 VPC-A에서 라우팅을 설정합니다." },
      { k: "D", en: "Create a private virtual interface (VIF) for the EC2 instance running in VPC-B and add appropriate routes from VPC-A.", ko: "VPC-B EC2 인스턴스를 위한 프라이빗 VIF를 만들고 VPC-A에서 적절한 경로를 추가합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "교차 계정 VPC 피어링은 두 VPC 사이에 사설 IP 통신을 제공하는 AWS 관리형 연결로, 별도 프록시 없이 고가용성과 높은 대역폭을 제공합니다.", en: "Cross-account VPC peering provides managed private-IP connectivity without proxy appliances, avoiding a single point of failure and common appliance bandwidth bottlenecks." },
    why_wrong: {
      B: { ko: "게이트웨이 엔드포인트는 S3와 DynamoDB 같은 지원 AWS 서비스용이며 EC2 인스턴스 간 연결용이 아닙니다.", en: "Gateway endpoints serve supported AWS services such as S3 and DynamoDB, not EC2-to-EC2 connectivity." },
      C: { ko: "가상 프라이빗 게이트웨이는 VPN 또는 Direct Connect 연결의 종단이며 두 VPC를 직접 연결하지 않습니다.", en: "A virtual private gateway terminates VPN or Direct Connect connectivity and does not directly connect two VPCs." },
      D: { ko: "프라이빗 VIF는 Direct Connect를 통해 온프레미스 네트워크와 VPC를 연결할 때 사용합니다.", en: "A private VIF is used with Direct Connect for on-premises-to-VPC connectivity." }
    }
  },
  {
    id: "exam5-238", number: 238, tags: ["AWS Budgets", "Cost Management", "SNS", "EC2"],
    question: {
      en: "A company wants to experiment with individual AWS accounts for its engineer team. The company wants to be notified as soon as the Amazon EC2 instance usage for a given month exceeds a specific threshold for each account.\nWhat should a solutions architect do to meet this requirement MOST cost-effectively?",
      ko: "회사는 엔지니어 팀에 개별 AWS 계정을 제공하려 합니다. 각 계정에서 해당 월의 EC2 사용 비용이 지정 임계값을 초과하는 즉시 알림을 받고자 합니다.\n가장 비용 효율적인 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use Cost Explorer to create a daily report of costs by service. Filter the report by EC2 instances. Configure Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold is exceeded.", ko: "Cost Explorer에서 서비스별 일일 비용 보고서를 만들고 EC2로 필터링한 뒤 임계값 초과 시 SES 알림을 보내게 합니다." },
      { k: "B", en: "Use Cost Explorer to create a monthly report of costs by service. Filter the report by EC2 instances. Configure Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold is exceeded.", ko: "Cost Explorer에서 서비스별 월간 비용 보고서를 만들고 EC2로 필터링한 뒤 임계값 초과 시 SES 알림을 보내게 합니다." },
      { k: "C", en: "Use AWS Budgets to create a cost budget for each account. Set the period to monthly. Set the scope to EC2 instances. Set an alert threshold for the budget. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive a notification when a threshold is exceeded.", ko: "각 계정에 월간 비용 예산을 만들고 범위를 EC2로 설정한 뒤 임계값과 SNS 알림을 구성합니다." },
      { k: "D", en: "Use AWS Cost and Usage Reports to create a report with hourly granularity. Integrate the report data with Amazon Athena. Use Amazon EventBridge to schedule an Athena query. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive a notification when a threshold is exceeded.", ko: "시간 단위 Cost and Usage Report를 Athena와 연동하고 EventBridge로 쿼리를 예약해 임계값 초과 시 SNS 알림을 보냅니다." }
    ],
    answer: ["C"],
    explanation: { ko: "AWS Budgets는 계정별·서비스별 월간 비용 임계값과 알림을 기본 제공하므로 별도 보고서 처리 시스템 없이 요구사항을 충족합니다.", en: "AWS Budgets natively provides monthly, account- and service-scoped cost thresholds with notifications, avoiding a custom reporting pipeline." },
    why_wrong: {
      A: { ko: "Cost Explorer는 이 방식으로 SES 임계값 알림을 제공하지 않습니다.", en: "Cost Explorer does not provide threshold-triggered SES notifications in this manner." },
      B: { ko: "월간 Cost Explorer 보고서는 임계값을 초과하는 즉시 경보를 보내는 AWS Budgets 기능을 대체하지 않습니다.", en: "A monthly Cost Explorer report does not replace AWS Budgets threshold alerts." },
      D: { ko: "CUR, Athena, EventBridge를 조합하면 가능하지만 구성과 쿼리 비용 및 운영 부담이 더 큽니다.", en: "CUR, Athena, and EventBridge could be assembled into a solution but add cost and operational complexity." }
    }
  },
  {
    id: "exam5-239", number: 239, tags: ["Lambda Function URL", "AWS IAM", "HTTPS", "Serverless"],
    question: {
      en: "A solutions architect needs to design a new microservice for a company's application. Clients must be able to call an HTTPS endpoint to reach the microservice. The microservice also must use AWS Identity and Access Management (IAM) to authenticate calls. The solutions architect will write the logic for this microservice by using a single AWS Lambda function that is written in Go 1.x.\nWhich solution will deploy the function in the MOST operationally efficient way?",
      ko: "솔루션스 아키텍트는 HTTPS 엔드포인트로 호출되고 IAM으로 호출을 인증하는 마이크로서비스를 설계해야 합니다. 로직은 Go 1.x로 작성된 단일 Lambda 함수입니다.\n가장 운영 효율적으로 함수를 배포하는 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon API Gateway REST API. Configure the method to use the Lambda function. Enable IAM authentication on the API.", ko: "API Gateway REST API를 만들고 Lambda 통합 및 IAM 인증을 활성화합니다." },
      { k: "B", en: "Create a Lambda function URL for the function. Specify AWS_IAM as the authentication type.", ko: "Lambda 함수 URL을 만들고 인증 유형을 AWS_IAM으로 지정합니다." },
      { k: "C", en: "Create an Amazon CloudFront distribution. Deploy the function to Lambda@Edge. Integrate IAM authentication logic into the Lambda@Edge function.", ko: "CloudFront 배포와 Lambda@Edge를 구성하고 IAM 인증 로직을 함수에 구현합니다." },
      { k: "D", en: "Create an Amazon CloudFront distribution. Deploy the function to CloudFront Functions. Specify AWS_IAM as the authentication type.", ko: "CloudFront 배포에 CloudFront Functions를 사용하고 인증 유형을 AWS_IAM으로 지정합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Lambda 함수 URL은 단일 함수에 전용 HTTPS 엔드포인트를 제공하고 AWS_IAM 인증을 기본 지원하므로 추가 API 계층 없이 요구사항을 충족합니다.", en: "A Lambda function URL gives a single function a dedicated HTTPS endpoint and natively supports AWS_IAM authentication with minimal infrastructure." },
    why_wrong: {
      A: { ko: "API Gateway도 가능하지만 단일 함수 URL보다 구성 요소와 운영 설정이 더 많습니다.", en: "API Gateway can satisfy the requirements but adds more configuration than a function URL for this single function." },
      C: { ko: "Lambda@Edge는 CloudFront 엣지 요청 처리용이며 IAM 인증을 직접 구현하면 운영 복잡도가 커집니다.", en: "Lambda@Edge is for edge request processing, and custom IAM authentication adds unnecessary complexity." },
      D: { ko: "CloudFront Functions는 Go Lambda 런타임을 실행하지 않으며 AWS_IAM 인증 유형 설정도 제공하지 않습니다.", en: "CloudFront Functions do not run Go Lambda functions or offer an AWS_IAM authentication type." }
    }
  },
  {
    id: "exam5-240", number: 240, tags: ["AWS Direct Connect", "Data Transfer Cost", "Data Warehouse", "Cost Optimization"],
    question: {
      en: "A company previously migrated its data warehouse solution to AWS. The company also has an AWS Direct Connect connection. Corporate office users query the data warehouse using a visualization tool. The average size of a query returned by the data warehouse is 50 MB and each webpage sent by the visualization tool is approximately 500 KB. Result sets returned by the data warehouse are not cached.\nWhich solution provides the LOWEST data transfer egress cost for the company?",
      ko: "회사는 데이터 웨어하우스를 AWS로 이전했고 Direct Connect 연결도 보유합니다. 사무실 사용자는 시각화 도구로 웨어하우스를 조회하며 평균 쿼리 결과는 50MB, 시각화 웹페이지는 약 500KB이고 결과는 캐시되지 않습니다.\n데이터 전송 송신 비용이 가장 낮은 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Host the visualization tool on premises and query the data warehouse directly over the internet.", ko: "시각화 도구를 온프레미스에 호스팅하고 인터넷으로 데이터 웨어하우스를 직접 조회합니다." },
      { k: "B", en: "Host the visualization tool in the same AWS Region as the data warehouse. Access it over the internet.", ko: "시각화 도구를 데이터 웨어하우스와 같은 AWS 리전에 호스팅하고 인터넷으로 접근합니다." },
      { k: "C", en: "Host the visualization tool on premises and query the data warehouse directly over a Direct Connect connection at a location in the same AWS Region.", ko: "시각화 도구를 온프레미스에 호스팅하고 같은 리전의 Direct Connect 연결로 데이터 웨어하우스를 직접 조회합니다." },
      { k: "D", en: "Host the visualization tool in the same AWS Region as the data warehouse and access it over a Direct Connect connection at a location in the same Region.", ko: "시각화 도구를 데이터 웨어하우스와 같은 AWS 리전에 호스팅하고 같은 리전 위치의 Direct Connect 연결로 접근합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "50MB 결과는 같은 리전의 웨어하우스와 시각화 도구 사이에서 처리하고, 사용자에게는 500KB 웹페이지만 Direct Connect로 전송하면 됩니다. 전송량과 Direct Connect 송신 단가를 모두 활용해 비용을 최소화합니다.", en: "Keeping the visualization tool with the warehouse in the same Region keeps each 50 MB result inside AWS. Only the roughly 500 KB rendered page crosses Direct Connect, minimizing both volume and egress price." },
    why_wrong: {
      A: { ko: "50MB 쿼리 결과 전체가 인터넷으로 나가므로 전송량과 송신 비용이 가장 큽니다.", en: "Every 50 MB query result crosses the internet, producing high transfer volume and egress cost." },
      B: { ko: "전송량은 줄지만 500KB 페이지가 인터넷 송신 요금으로 전달되어 Direct Connect보다 비쌉니다.", en: "This reduces volume, but the rendered pages use internet egress rather than lower-cost Direct Connect transfer." },
      C: { ko: "Direct Connect 단가는 사용하지만 50MB 결과 전체를 매번 온프레미스로 전송합니다.", en: "This uses Direct Connect pricing but transfers every uncached 50 MB result on premises." }
    }
  },
  {
    id: "exam5-241", number: 241, tags: ["RDS for PostgreSQL", "Cross-Region Read Replica", "Multi-Region", "High Availability"],
    question: {
      en: "An online learning company is migrating to the AWS Cloud. The company maintains its student records in a PostgreSQL database. The company needs a solution in which its data is available and online across multiple AWS Regions at all times.\nWhich solution will meet these requirements with the LEAST amount of operational overhead?",
      ko: "온라인 교육 회사가 AWS 클라우드로 이전하며 학생 기록을 PostgreSQL 데이터베이스에 보관합니다. 데이터가 여러 AWS 리전에서 항상 온라인 상태로 제공되어야 합니다.\n운영 부담을 최소화하면서 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Migrate the PostgreSQL database to a PostgreSQL cluster on Amazon EC2 instances.", ko: "PostgreSQL 데이터베이스를 EC2 인스턴스의 PostgreSQL 클러스터로 이전합니다." },
      { k: "B", en: "Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance with the Multi-AZ feature turned on.", ko: "PostgreSQL 데이터베이스를 Multi-AZ가 활성화된 RDS for PostgreSQL로 이전합니다." },
      { k: "C", en: "Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Create a read replica in another Region.", ko: "PostgreSQL 데이터베이스를 RDS for PostgreSQL로 이전하고 다른 리전에 읽기 전용 복제본을 생성합니다." },
      { k: "D", en: "Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Set up DB snapshots to be copied to another Region.", ko: "PostgreSQL 데이터베이스를 RDS for PostgreSQL로 이전하고 DB 스냅샷을 다른 리전으로 복사합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "교차 리전 RDS 읽기 전용 복제본은 다른 리전에 지속적으로 복제되는 온라인 데이터베이스를 관리형으로 제공합니다.", en: "A cross-Region RDS read replica provides an online, continuously replicated database in another Region with low operational overhead." },
    why_wrong: {
      A: { ko: "EC2에서 직접 PostgreSQL 클러스터를 운영하면 패치, 복제, 장애 조치를 직접 관리해야 합니다.", en: "A self-managed PostgreSQL cluster on EC2 requires manual patching, replication, and failover operations." },
      B: { ko: "Multi-AZ는 한 리전 안의 가용 영역 간 고가용성이며 다중 리전 요구를 충족하지 않습니다.", en: "Multi-AZ provides availability across Availability Zones within one Region, not across Regions." },
      D: { ko: "스냅샷 복사본은 즉시 사용할 수 있는 온라인 데이터베이스가 아니며 복원 과정이 필요합니다.", en: "A copied snapshot is not an online database and must be restored before use." }
    }
  },
  {
    id: "exam5-242", number: 242, tags: ["Route 53", "Multivalue Answer Routing", "DNS", "Health Check"],
    question: {
      en: "A company hosts its web application on AWS using seven Amazon EC2 instances. The company requires that the IP addresses of all healthy EC2 instances be returned in response to DNS queries.\nWhich policy should be used to meet this requirement?",
      ko: "회사는 7개의 EC2 인스턴스로 웹 애플리케이션을 호스팅합니다. DNS 쿼리 응답으로 정상 상태인 모든 EC2 인스턴스의 IP 주소를 반환해야 합니다.\n어떤 라우팅 정책을 사용해야 합니까?"
    },
    options: [
      { k: "A", en: "Simple routing policy", ko: "단순 라우팅 정책" },
      { k: "B", en: "Latency routing policy", ko: "지연 시간 라우팅 정책" },
      { k: "C", en: "Multivalue routing policy", ko: "다중값 응답 라우팅 정책" },
      { k: "D", en: "Geolocation routing policy", ko: "지리 위치 라우팅 정책" }
    ],
    answer: ["C"],
    explanation: { ko: "Route 53 다중값 응답 라우팅은 각 레코드를 상태 확인과 연결하고 DNS 응답에 정상 레코드의 여러 IP 주소를 반환합니다.", en: "Route 53 multivalue answer routing associates records with health checks and returns multiple healthy IP addresses in DNS responses." },
    why_wrong: {
      A: { ko: "단순 라우팅은 레코드별 상태 확인을 기반으로 정상 리소스만 반환하는 기능을 제공하지 않습니다.", en: "Simple routing does not provide per-record health-check filtering for this requirement." },
      B: { ko: "지연 시간 라우팅은 사용자에게 지연 시간이 가장 낮은 리전을 선택하는 용도입니다.", en: "Latency routing selects the lowest-latency Region for the requester." },
      D: { ko: "지리 위치 라우팅은 요청자의 위치에 따라 응답을 선택합니다.", en: "Geolocation routing selects responses based on the requester's location." }
    }
  },
  {
    id: "exam5-243", number: 243, tags: ["AWS Storage Gateway", "File Gateway", "Amazon S3", "Hybrid Storage", "Low Latency"],
    question: {
      en: "A medical research lab produces data that is related to a new study. The lab wants to make the data available with minimum latency to clinics across the country for their on-premises, file-based applications. The data files are stored in an Amazon S3 bucket that has read-only permissions for each clinic.\nWhat should a solutions architect recommend to meet these requirements?",
      ko: "의료 연구소의 연구 데이터 파일이 S3 버킷에 저장되어 있고 각 병원에는 읽기 전용 권한이 있습니다. 전국 병원의 온프레미스 파일 기반 애플리케이션이 최소 지연으로 데이터에 접근해야 합니다.\n어떤 솔루션을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Deploy an AWS Storage Gateway file gateway as a virtual machine (VM) on premises at each clinic.", ko: "각 병원의 온프레미스 환경에 VM으로 AWS Storage Gateway 파일 게이트웨이를 배포합니다." },
      { k: "B", en: "Migrate the files to each clinic's on-premises applications by using AWS DataSync for processing.", ko: "AWS DataSync를 사용해 각 병원의 온프레미스 애플리케이션으로 파일을 이전합니다." },
      { k: "C", en: "Deploy an AWS Storage Gateway volume gateway as a virtual machine (VM) on premises at each clinic.", ko: "각 병원에 VM으로 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다." },
      { k: "D", en: "Attach an Amazon Elastic File System (Amazon EFS) file system to each clinic's on-premises servers.", ko: "각 병원의 온프레미스 서버에 Amazon EFS 파일 시스템을 연결합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "S3 파일 게이트웨이는 온프레미스 애플리케이션에 NFS 또는 SMB 파일 인터페이스를 제공하고 자주 읽는 S3 객체를 로컬에 캐시해 지연 시간을 줄입니다.", en: "S3 File Gateway exposes S3 objects through NFS or SMB and caches frequently accessed data locally at each clinic for low latency." },
    why_wrong: {
      B: { ko: "DataSync는 예약 또는 일회성 데이터 전송에 적합하며 지속적인 로컬 캐시 파일 인터페이스를 제공하지 않습니다.", en: "DataSync is for managed transfers and does not provide a persistent locally cached file interface." },
      C: { ko: "볼륨 게이트웨이는 iSCSI 블록 스토리지를 제공하며 S3 객체용 파일 기반 접근에 적합하지 않습니다.", en: "Volume Gateway provides iSCSI block storage rather than file-based access to S3 objects." },
      D: { ko: "EFS는 일반적으로 VPC 내 리눅스 워크로드용 NFS 파일 시스템이며 각 병원의 S3 데이터 캐시 역할을 하지 않습니다.", en: "EFS is an NFS file system for connected workloads and does not provide the required per-clinic S3 cache." }
    }
  },
  {
    id: "exam5-244", number: 244, tags: ["Amazon Aurora", "Auto Scaling", "Application Load Balancer", "Multi-AZ", "High Availability"],
    question: {
      en: "A company is using a content management system that runs on a single Amazon EC2 instance. The EC2 instance contains both the web server and the database software. The company must make its website platform highly available and must enable the website to scale to meet user demand.\nWhat should a solutions architect recommend to meet these requirements?",
      ko: "회사의 콘텐츠 관리 시스템은 웹 서버와 데이터베이스 소프트웨어가 함께 설치된 단일 EC2 인스턴스에서 실행됩니다. 웹사이트 플랫폼을 고가용성으로 만들고 사용자 수요에 따라 확장해야 합니다.\n어떤 솔루션을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Move the database to Amazon RDS, and enable automatic backups. Manually launch another EC2 instance in the same Availability Zone. Configure an Application Load Balancer in the Availability Zone, and set the two instances as targets.", ko: "데이터베이스를 RDS로 옮겨 자동 백업을 활성화하고 같은 가용 영역에 EC2를 수동 추가한 뒤 ALB 대상으로 지정합니다." },
      { k: "B", en: "Migrate the database to an Amazon Aurora instance with a read replica in the same Availability Zone as the existing EC2 instance. Manually launch another EC2 instance in the same Availability Zone. Configure an Application Load Balancer, and set the two EC2 instances as targets.", ko: "같은 가용 영역의 Aurora 및 읽기 전용 복제본으로 이전하고 EC2를 수동 추가해 ALB 대상으로 지정합니다." },
      { k: "C", en: "Move the database to Amazon Aurora with a read replica in another Availability Zone. Create an Amazon Machine Image (AMI) from the EC2 instance. Configure an Application Load Balancer in two Availability Zones. Attach an Auto Scaling group that uses the AMI across two Availability Zones.", ko: "데이터베이스를 다른 가용 영역에 읽기 전용 복제본이 있는 Aurora로 옮기고, EC2 AMI를 사용하는 Auto Scaling 그룹과 ALB를 두 가용 영역에 구성합니다." },
      { k: "D", en: "Move the database to a separate EC2 instance, and schedule backups to Amazon S3. Create an Amazon Machine Image (AMI) from the original EC2 instance. Configure an Application Load Balancer in two Availability Zones. Attach an Auto Scaling group that uses the AMI across two Availability Zones.", ko: "데이터베이스를 별도 EC2로 옮겨 S3 백업을 예약하고, 원본 AMI 기반 Auto Scaling 그룹과 ALB를 두 가용 영역에 구성합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "웹 계층은 AMI 기반 Auto Scaling 그룹과 ALB를 여러 가용 영역에 구성해 확장성과 가용성을 확보하고, Aurora의 교차 AZ 복제본으로 데이터베이스 고가용성을 제공합니다.", en: "An AMI-based Auto Scaling group behind an ALB across two Availability Zones scales the web tier, while an Aurora replica in another AZ improves database availability." },
    why_wrong: {
      A: { ko: "같은 가용 영역의 수동 EC2 두 대와 단일 AZ 구성은 가용 영역 장애에 취약하고 자동 확장되지 않습니다.", en: "Two manually managed instances in one AZ remain vulnerable to an AZ failure and do not scale automatically." },
      B: { ko: "모든 리소스가 같은 가용 영역에 있고 EC2 확장도 수동이므로 고가용성과 확장성을 충족하지 않습니다.", en: "Keeping resources in one AZ and scaling EC2 manually does not meet availability and scalability requirements." },
      D: { ko: "별도 단일 EC2 데이터베이스는 장애 지점이며 관리형 데이터베이스 장애 조치를 제공하지 않습니다.", en: "A separate single EC2 database remains a failure point and lacks managed database failover." }
    }
  },
  {
    id: "exam5-245", number: 245, tags: ["Auto Scaling", "Application Load Balancer", "Development Environment", "Cost Optimization"],
    question: {
      en: "A company is launching an application on AWS. The application uses an Application Load Balancer (ALB) to direct traffic to at least two Amazon EC2 instances in a single target group. The instances are in an Auto Scaling group for each environment. The company requires a development environment and a production environment. The production environment will have periods of high traffic.\nWhich solution will configure the development environment MOST cost-effectively?",
      ko: "회사는 ALB가 단일 대상 그룹의 최소 2개 EC2 인스턴스로 트래픽을 전달하는 애플리케이션을 출시합니다. 개발 및 프로덕션 환경마다 Auto Scaling 그룹이 있고 프로덕션에는 높은 트래픽 기간이 있습니다.\n개발 환경을 가장 비용 효율적으로 구성하는 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Reconfigure the target group in the development environment to have only one EC2 instance as a target.", ko: "개발 환경 대상 그룹의 대상을 EC2 인스턴스 하나로 줄입니다." },
      { k: "B", en: "Change the ALB balancing algorithm to least outstanding requests.", ko: "ALB 분산 알고리즘을 최소 미처리 요청 방식으로 변경합니다." },
      { k: "C", en: "Reduce the size of the EC2 instances in both environments.", ko: "두 환경 모두에서 EC2 인스턴스 크기를 줄입니다." },
      { k: "D", en: "Reduce the maximum number of EC2 instances in the development environment's Auto Scaling group.", ko: "개발 환경 Auto Scaling 그룹의 최대 EC2 인스턴스 수를 줄입니다." }
    ],
    answer: ["D"],
    explanation: { ko: "개발 환경의 최대 용량만 낮추면 최소 2개 대상 요구를 유지하면서 불필요한 확장을 제한하고 프로덕션의 높은 트래픽 대응 능력에는 영향을 주지 않습니다.", en: "Lowering only the development Auto Scaling group's maximum capacity limits unnecessary scale-out while preserving the minimum target requirement and production capacity." },
    why_wrong: {
      A: { ko: "대상 하나만 사용하면 최소 2개 EC2 인스턴스 요구사항을 위반합니다.", en: "Using only one target violates the requirement for at least two EC2 instances." },
      B: { ko: "로드 밸런싱 알고리즘 변경은 실행 인스턴스 수와 비용을 줄이지 않습니다.", en: "Changing the load-balancing algorithm does not reduce the number or cost of running instances." },
      C: { ko: "프로덕션 인스턴스까지 축소하면 높은 트래픽 처리 성능이 저하될 수 있습니다.", en: "Downsizing production instances can compromise performance during high traffic." }
    }
  },
  {
    id: "exam5-246", number: 246, tags: ["Application Load Balancer", "Public Subnet", "Private Subnet", "Internet Gateway", "Networking"],
    question: {
      en: "A company runs a web application on Amazon EC2 instances in multiple Availability Zones. The EC2 instances are in private subnets. A solutions architect implements an internet-facing Application Load Balancer (ALB) and specifies the EC2 instances as the target group. However, the internet traffic is not reaching the EC2 instances.\nHow should the solutions architect reconfigure the architecture to resolve this issue?",
      ko: "회사는 여러 가용 영역의 프라이빗 서브넷에 있는 EC2 인스턴스에서 웹 애플리케이션을 실행합니다. 인터넷용 ALB에 해당 인스턴스를 대상으로 지정했지만 인터넷 트래픽이 도달하지 않습니다.\n어떻게 아키텍처를 재구성해야 합니까?"
    },
    options: [
      { k: "A", en: "Replace the ALB with a Network Load Balancer. Configure a NAT gateway in a public subnet to allow internet traffic.", ko: "ALB를 NLB로 교체하고 공용 서브넷에 NAT 게이트웨이를 구성합니다." },
      { k: "B", en: "Move the EC2 instances to public subnets. Add a rule to the EC2 instances' security groups to allow outbound traffic to 0.0.0.0/0.", ko: "EC2를 공용 서브넷으로 옮기고 보안 그룹에서 0.0.0.0/0 아웃바운드를 허용합니다." },
      { k: "C", en: "Update the route tables for the EC2 instances' subnets to send 0.0.0.0/0 traffic through the internet gateway route. Add a rule to the EC2 instances' security groups to allow outbound traffic to 0.0.0.0/0.", ko: "EC2 서브넷의 기본 경로를 인터넷 게이트웨이로 보내고 EC2 보안 그룹에서 모든 아웃바운드를 허용합니다." },
      { k: "D", en: "Create public subnets in each Availability Zone. Associate the public subnets with the ALB. Update the route tables for the public subnets with a route to the private subnets.", ko: "각 가용 영역에 공용 서브넷을 만들고 ALB와 연결한 뒤 공용 서브넷 라우팅 테이블에 프라이빗 서브넷 경로를 구성합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "인터넷용 ALB 노드는 인터넷 게이트웨이 경로가 있는 공용 서브넷에 배치해야 합니다. ALB는 VPC의 로컬 라우팅을 통해 프라이빗 서브넷 대상에 연결됩니다.", en: "An internet-facing ALB must use public subnets that route to an internet gateway. The ALB reaches targets in private subnets over VPC local routing." },
    why_wrong: {
      A: { ko: "NAT 게이트웨이는 프라이빗 인스턴스의 아웃바운드 연결용이며 인터넷의 인바운드 트래픽을 받지 않습니다.", en: "A NAT gateway provides outbound connectivity for private instances and does not accept unsolicited inbound internet traffic." },
      B: { ko: "대상 EC2는 프라이빗 서브넷에 유지할 수 있으며 아웃바운드 보안 그룹 규칙만으로 인바운드 문제가 해결되지 않습니다.", en: "Targets can remain private, and an outbound security-group rule does not solve ALB internet reachability." },
      C: { ko: "공용 IP가 없는 프라이빗 EC2를 인터넷 게이트웨이에 직접 라우팅해도 인터넷 연결이 되지 않으며 대상은 공개할 필요가 없습니다.", en: "Routing private instances without public IPs directly to an internet gateway does not make them reachable, and targets need not be public." }
    }
  },
  {
    id: "exam5-247", number: 247, tags: ["RDS for MySQL", "Read Replica", "Automatic Backups", "Database", "Choose two"],
    question: {
      en: "A company has deployed a database in Amazon RDS for MySQL. Due to increased transactions, the database support team is reporting slow reads against the DB instance and recommends adding a read replica.\nWhich combination of actions should a solutions architect take before implementing this change? (Choose two.)",
      ko: "회사는 RDS for MySQL 데이터베이스를 사용합니다. 트랜잭션 증가로 읽기가 느려져 읽기 전용 복제본 추가를 권고받았습니다.\n변경 전에 어떤 두 작업을 수행해야 합니까?"
    },
    options: [
      { k: "A", en: "Enable binlog replication on the RDS primary node.", ko: "RDS 기본 노드에서 binlog 복제를 활성화합니다." },
      { k: "B", en: "Choose a failover priority for the source DB instance.", ko: "원본 DB 인스턴스의 장애 조치 우선순위를 선택합니다." },
      { k: "C", en: "Allow long-running transactions to complete on the source DB instance.", ko: "원본 DB 인스턴스에서 장기 실행 트랜잭션이 완료되도록 합니다." },
      { k: "D", en: "Create a global table and specify the AWS Regions where the table will be available.", ko: "글로벌 테이블을 만들고 사용할 AWS 리전을 지정합니다." },
      { k: "E", en: "Enable automatic backups on the source instance by setting the backup retention period to a value other than 0.", ko: "원본 인스턴스의 백업 보존 기간을 0이 아닌 값으로 설정해 자동 백업을 활성화합니다." }
    ],
    answer: ["C", "E"],
    explanation: { ko: "RDS MySQL 읽기 전용 복제본을 만들려면 원본의 자동 백업이 활성화되어야 합니다. 생성 시 일관된 스냅샷 과정에 영향을 줄 수 있으므로 장기 실행 트랜잭션도 먼저 완료하는 것이 필요합니다.", en: "The source must have automated backups enabled before creating an RDS for MySQL read replica. Long-running transactions should finish before the snapshot and replication setup process." },
    why_wrong: {
      A: { ko: "RDS는 읽기 전용 복제본 생성 과정에서 필요한 MySQL 복제 구성을 관리하므로 사용자가 기본 노드에서 별도 활성화하지 않습니다.", en: "RDS manages the MySQL replication configuration required for a read replica; the user does not separately enable it on the primary." },
      B: { ko: "장애 조치 우선순위는 Aurora 복제본 승격 순서와 관련되며 일반 RDS MySQL 읽기 전용 복제본의 사전 조건이 아닙니다.", en: "Failover priority relates to Aurora replica promotion and is not a prerequisite for an RDS for MySQL read replica." },
      D: { ko: "글로벌 테이블은 DynamoDB 기능이며 RDS MySQL 읽기 확장과 관련이 없습니다.", en: "Global tables are a DynamoDB feature and do not apply to RDS for MySQL read scaling." }
    }
  },
  {
    id: "exam5-248", number: 248, tags: ["Amazon SQS", "EC2 Auto Scaling", "Queue-Based Scaling", "Decoupling"],
    question: {
      en: "A company runs analytics software on Amazon EC2 instances. The software accepts job requests from users to process data that has been uploaded to Amazon S3. Users report that some submitted data is not being processed. Amazon CloudWatch reveals that the EC2 instances have a consistent CPU utilization at or near 100%. The company wants to improve system performance and scale the system based on user load.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 EC2 분석 소프트웨어로 S3에 업로드된 데이터를 처리합니다. 일부 작업이 처리되지 않고 EC2 CPU 사용률이 지속적으로 거의 100%입니다. 사용자 부하에 따라 시스템을 확장하고 성능을 개선해야 합니다.\n어떤 조치를 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create a copy of the instance. Place all instances behind an Application Load Balancer.", ko: "인스턴스 복사본을 만들고 모든 인스턴스를 ALB 뒤에 배치합니다." },
      { k: "B", en: "Create an S3 VPC endpoint for Amazon S3. Update the software to reference the endpoint.", ko: "S3 VPC 엔드포인트를 만들고 소프트웨어가 엔드포인트를 사용하도록 합니다." },
      { k: "C", en: "Stop the EC2 instances. Modify the instance type to one with a more powerful CPU and more memory. Restart the instances.", ko: "EC2를 중지하고 CPU와 메모리가 더 큰 유형으로 변경한 뒤 다시 시작합니다." },
      { k: "D", en: "Route incoming requests to Amazon Simple Queue Service (Amazon SQS). Configure an EC2 Auto Scaling group based on queue size. Update the software to read from the queue.", ko: "수신 요청을 SQS로 보내고 대기열 크기에 따라 EC2 Auto Scaling 그룹이 확장되도록 하며 소프트웨어가 대기열을 읽게 합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "SQS는 작업 요청을 내구성 있게 보존해 손실을 막고 생산자와 처리자를 분리합니다. 대기열 깊이를 기준으로 EC2 처리 인스턴스를 자동 확장하면 사용자 부하에 맞게 처리량을 조절할 수 있습니다.", en: "SQS durably preserves jobs and decouples submission from processing. Scaling EC2 workers from queue depth adjusts processing capacity to user demand." },
    why_wrong: {
      A: { ko: "고정된 복사본과 ALB만으로 작업을 내구성 있게 보관하거나 부하에 따라 자동 확장할 수 없습니다.", en: "A fixed copy behind an ALB neither durably stores jobs nor scales with workload." },
      B: { ko: "S3 접근 경로 변경은 CPU 포화와 작업 손실 문제를 해결하지 않습니다.", en: "Changing the S3 access path does not solve CPU saturation or lost jobs." },
      C: { ko: "수직 확장은 일시적으로 용량을 늘리지만 부하에 따른 자동 확장과 작업 보존을 제공하지 않습니다.", en: "Vertical scaling adds fixed capacity but provides neither load-based scaling nor durable job buffering." }
    }
  },
  {
    id: "exam5-249", number: 249, tags: ["Amazon FSx for Windows File Server", "SMB", "Managed File Storage"],
    question: {
      en: "A company is implementing a shared storage solution for a media application that is hosted in the AWS Cloud. The company needs the ability to use SMB clients to access data. The solution must be fully managed.\nWhich AWS solution meets these requirements?",
      ko: "회사는 AWS 클라우드의 미디어 애플리케이션을 위한 공유 스토리지를 구현합니다. SMB 클라이언트로 데이터에 접근할 수 있어야 하며 완전관리형 솔루션이어야 합니다.\n어떤 AWS 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Create an AWS Storage Gateway volume gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.", ko: "Storage Gateway 볼륨 게이트웨이를 만들고 필요한 프로토콜의 파일 공유를 생성해 연결합니다." },
      { k: "B", en: "Create an AWS Storage Gateway tape gateway. Configure tapes to use Amazon S3. Connect the application server to the tape gateway.", ko: "Storage Gateway 테이프 게이트웨이를 만들고 S3를 사용하는 테이프를 구성해 애플리케이션 서버에 연결합니다." },
      { k: "C", en: "Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.", ko: "Windows EC2 인스턴스에 파일 공유 역할을 설치·구성하고 애플리케이션 서버를 연결합니다." },
      { k: "D", en: "Create an Amazon FSx for Windows File Server file system. Attach the file system to the origin server. Connect the application server to the file system.", ko: "Amazon FSx for Windows File Server 파일 시스템을 만들고 애플리케이션 서버를 연결합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "Amazon FSx for Windows File Server는 SMB를 기본 지원하는 완전관리형 공유 Windows 파일 시스템입니다.", en: "Amazon FSx for Windows File Server is a fully managed shared Windows file system with native SMB support." },
    why_wrong: {
      A: { ko: "볼륨 게이트웨이는 iSCSI 블록 스토리지를 제공하며 SMB 파일 공유를 생성하지 않습니다.", en: "Volume Gateway provides iSCSI block storage and does not create an SMB file share." },
      B: { ko: "테이프 게이트웨이는 백업 애플리케이션용 가상 테이프 라이브러리이며 일반 SMB 공유가 아닙니다.", en: "Tape Gateway is a virtual tape library for backups, not a general SMB share." },
      C: { ko: "EC2 기반 Windows 파일 서버는 패치, 가용성, 용량을 직접 관리해야 하므로 완전관리형이 아닙니다.", en: "A Windows file server on EC2 requires self-managed patching, availability, and capacity." }
    }
  },
  {
    id: "exam5-250", number: 250, tags: ["VPC Flow Logs", "Amazon S3", "S3 Lifecycle", "S3 Standard-IA", "Cost Optimization"],
    question: {
      en: "A company's security team requests that network traffic be captured in VPC Flow Logs. The logs will be frequently accessed for 90 days and then accessed intermittently.\nWhat should a solutions architect do to meet these requirements when configuring the logs?",
      ko: "회사의 보안 팀은 네트워크 트래픽을 VPC 흐름 로그로 수집하도록 요청했습니다. 로그는 90일 동안 자주 접근되고 이후에는 간헐적으로 접근됩니다.\n로그를 구성할 때 어떤 조치를 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon CloudWatch as the target. Set the CloudWatch log group with an expiration of 90 days.", ko: "CloudWatch를 대상으로 사용하고 로그 그룹 만료 기간을 90일로 설정합니다." },
      { k: "B", en: "Use Amazon Kinesis as the target. Configure the Kinesis stream to always retain the logs for 90 days.", ko: "Kinesis를 대상으로 사용하고 스트림이 로그를 항상 90일 동안 보존하도록 구성합니다." },
      { k: "C", en: "Use AWS CloudTrail as the target. Configure CloudTrail to save to an Amazon S3 bucket, and enable S3 Intelligent-Tiering.", ko: "CloudTrail을 대상으로 사용하고 S3 버킷에 저장한 뒤 S3 Intelligent-Tiering을 활성화합니다." },
      { k: "D", en: "Use Amazon S3 as the target. Enable an S3 Lifecycle policy to transition the logs to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.", ko: "Amazon S3를 대상으로 사용하고 90일 후 로그를 S3 Standard-IA로 전환하는 수명 주기 정책을 활성화합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "VPC 흐름 로그를 S3에 직접 게시하고 90일 후 Standard-IA로 전환하면 초기 빈번한 접근 성능을 유지하면서 이후 저장 비용을 절감할 수 있습니다.", en: "Publishing VPC Flow Logs to S3 and transitioning them to Standard-IA after 90 days preserves immediate access while reducing storage cost for intermittent access." },
    why_wrong: {
      A: { ko: "90일 후 로그가 삭제되므로 이후 간헐적 접근 요구를 충족하지 않습니다.", en: "A 90-day expiration deletes the logs, preventing intermittent access afterward." },
      B: { ko: "Kinesis Data Streams의 보존 기간은 장기 로그 아카이브와 계층화 저장에 적합하지 않습니다.", en: "Kinesis Data Streams retention is not intended for long-term tiered log storage." },
      C: { ko: "CloudTrail은 VPC 흐름 로그의 대상이 아니며 API 활동 기록 서비스입니다.", en: "CloudTrail is not a destination for VPC Flow Logs; it records AWS API activity." }
    }
  }
]
});
