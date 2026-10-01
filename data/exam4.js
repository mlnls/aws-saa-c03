/* Exam 4
 * ExamTopics Topic 1 / Exam D 의 151~200번
 * 현재 수록 범위: 151~200번
 * 스키마는 README.md 참고.
 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam4",
  title: "Exam 4",
  note: "Topic 1 · #151–200",
  questions: [
  {
    id: "exam4-151", number: 151, tags: ["Control Tower", "Organizations", "SCP", "Data Residency"],
    question: {
      en: "A company wants to migrate its on-premises data center to AWS. According to the company's compliance requirements, the company can use only the ap-northeast-3 Region. Company administrators are not permitted to connect VPCs to the internet.\nWhich solutions will meet these requirements? (Choose two.)",
      ko: "회사는 온프레미스 데이터 센터를 AWS로 이전하려 합니다. 규정 준수 요구에 따라 ap-northeast-3 리전만 사용할 수 있으며 회사 관리자는 VPC를 인터넷에 연결할 수 없어야 합니다.\n어떤 솔루션들이 요구사항을 충족합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Use AWS Control Tower to implement data residency guardrails to deny internet access and deny access to all AWS Regions except ap-northeast-3.", ko: "AWS Control Tower 데이터 상주 가드레일로 인터넷 접근을 거부하고 ap-northeast-3을 제외한 모든 리전 접근을 거부한다." },
      { k: "B", en: "Use rules in AWS WAF to prevent internet access. Deny access to all AWS Regions except ap-northeast-3 in the AWS account settings.", ko: "AWS WAF 규칙으로 인터넷 접근을 방지하고 AWS 계정 설정에서 ap-northeast-3을 제외한 모든 리전 접근을 거부한다." },
      { k: "C", en: "Use AWS Organizations to configure service control policies (SCPs) that prevent VPCs from gaining internet access. Deny access to all AWS Regions except ap-northeast-3.", ko: "AWS Organizations에서 VPC의 인터넷 접근을 막고 ap-northeast-3 외 모든 리전 접근을 거부하는 SCP를 구성한다." },
      { k: "D", en: "Create an outbound rule for the network ACL in each VPC to deny all traffic from 0.0.0.0/0. Create an IAM policy for each user to prevent the use of any AWS Region other than ap-northeast-3.", ko: "각 VPC의 네트워크 ACL 아웃바운드 규칙에서 0.0.0.0/0 트래픽을 모두 거부하고 사용자별 IAM 정책으로 ap-northeast-3 외 리전 사용을 막는다." },
      { k: "E", en: "Use AWS Config to activate managed rules to detect and alert for internet gateways and to detect and alert for new resources deployed outside of ap-northeast-3.", ko: "AWS Config 관리형 규칙으로 인터넷 게이트웨이와 ap-northeast-3 외 리전의 새 리소스를 탐지해 경고한다." }
    ],
    answer: ["A", "C"],
    explanation: {
      ko: "Control Tower의 예방형 데이터 상주·네트워크 가드레일은 허용 리전과 인터넷 연결 생성을 조직 수준에서 제한할 수 있습니다(A). 같은 제한을 AWS Organizations SCP로 직접 구현하여 인터넷 게이트웨이 관련 작업과 허용 리전 밖 API 작업을 거부할 수도 있습니다(C). 두 방식 모두 관리자를 포함한 계정 권한의 최대 범위를 통제합니다.",
      en: "Preventive Control Tower data-residency and network guardrails can enforce the allowed Region and prohibit internet connectivity. Equivalent Organizations SCPs can explicitly deny internet-gateway actions and API use outside ap-northeast-3."
    },
    why_wrong: {
      B: { ko: "WAF는 HTTP 요청 필터링 서비스이며 VPC 인터넷 연결이나 리전 사용을 통제하지 않습니다.", en: "WAF filters HTTP requests and does not govern VPC internet connectivity or Region usage." },
      D: { ko: "VPC별 NACL과 사용자별 IAM 정책은 누락·변경 가능성이 크고 새 관리자나 계정 전체에 강제되지 않습니다.", en: "Per-VPC NACLs and per-user IAM policies are easy to bypass or omit and do not enforce organization-wide boundaries." },
      E: { ko: "Config 규칙은 위반 후 탐지·알림할 뿐 리소스 생성이나 인터넷 연결을 예방하지 않습니다.", en: "Config detects and reports violations after the fact but does not prevent them." }
    }
  }
  ,{
    id: "exam4-152", number: 152, tags: ["RDS", "Lambda", "EventBridge", "Cost Optimization"],
    question: {
      en: "A company uses a three-tier web application to provide training to new employees. The application is accessed for only 12 hours every day. The company is using an Amazon RDS for MySQL DB instance to store information and wants to minimize costs.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사는 신입 직원 교육용 3계층 웹 애플리케이션을 하루 12시간만 사용합니다. 정보 저장에는 RDS for MySQL DB 인스턴스를 사용하며 비용을 최소화하려 합니다.\n무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Configure an IAM policy for AWS Systems Manager Session Manager. Create an IAM role for the policy. Update the trust relationship of the role. Set up automatic start and stop for the DB instance.", ko: "Systems Manager Session Manager용 IAM 정책과 역할을 구성하고 DB 인스턴스 자동 시작·중지를 설정한다." },
      { k: "B", en: "Create an Amazon ElastiCache for Redis cache cluster that gives users the ability to access the data from the cache when the DB instance is stopped. Invalidate the cache after the DB instance is started.", ko: "DB가 중지된 동안 사용자가 데이터에 접근하도록 ElastiCache for Redis를 만들고 DB 시작 후 캐시를 무효화한다." },
      { k: "C", en: "Launch an Amazon EC2 instance. Create an IAM role that grants access to Amazon RDS. Attach the role to the EC2 instance. Configure a cron job to start and stop the EC2 instance on the desired schedule.", ko: "EC2 인스턴스와 RDS 접근 역할을 만들고 원하는 일정에 EC2를 시작·중지하는 cron 작업을 구성한다." },
      { k: "D", en: "Create AWS Lambda functions to start and stop the DB instance. Create Amazon EventBridge (Amazon CloudWatch Events) scheduled rules to invoke the Lambda functions. Configure the Lambda functions as event targets for the rules.", ko: "DB 인스턴스를 시작·중지하는 Lambda 함수를 만들고 EventBridge 예약 규칙에서 해당 함수를 대상으로 호출한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "EventBridge 예약 규칙으로 매일 사용 시작 전에 RDS를 시작하고 종료 후 중지하는 Lambda를 호출하면 사용하지 않는 12시간의 DB 인스턴스 비용을 줄일 수 있습니다. 별도 서버 없이 일정이 자동화됩니다.",
      en: "EventBridge schedules can invoke Lambda to start RDS before training hours and stop it afterward, eliminating unused DB instance hours without operating a scheduler server."
    },
    why_wrong: {
      A: { ko: "Session Manager는 EC2 셸 접속용이며 RDS 일정 시작·중지 자동화 서비스가 아닙니다.", en: "Session Manager provides managed shell access to instances and does not schedule RDS start and stop." },
      B: { ko: "캐시는 영구 데이터베이스 대체재가 아니며 추가 클러스터 비용과 일관성 문제가 생깁니다.", en: "A cache is not a durable database substitute and adds cluster cost and consistency problems." },
      C: { ko: "EC2 자체를 시작·중지하며 RDS를 제어하지 않고 스케줄러 서버의 운영 비용도 추가됩니다.", en: "This schedules the EC2 instance rather than RDS and adds a server merely to run cron." }
    }
  }
  ,{
    id: "exam4-153", number: 153, tags: ["S3 Lifecycle", "S3 Standard-IA", "Cost Optimization"],
    question: {
      en: "A company sells ringtones created from clips of popular songs. The files containing the ringtones are stored in Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are infrequent for ringtones older than 90 days. The company needs to save money on storage while keeping the most accessed files readily available for its users.\nWhich action should the company take to meet these requirements MOST cost-effectively?",
      ko: "회사는 인기 노래의 일부로 만든 벨소리를 판매합니다. 벨소리 파일은 S3 Standard에 저장되고 크기는 최소 128KB입니다. 파일은 수백만 개지만 90일이 지난 벨소리는 다운로드가 드뭅니다. 자주 접근하는 파일은 즉시 사용할 수 있게 유지하면서 스토리지 비용을 줄여야 합니다.\n가장 비용 효율적인 조치는 무엇입니까?"
    },
    options: [
      { k: "A", en: "Configure S3 Standard-Infrequent Access (S3 Standard-IA) storage for the initial storage tier of the objects.", ko: "객체의 최초 스토리지 계층을 S3 Standard-IA로 구성한다." },
      { k: "B", en: "Move the files to S3 Intelligent-Tiering and configure it to move objects to a less expensive storage tier after 90 days.", ko: "파일을 S3 Intelligent-Tiering으로 옮기고 90일 후 더 저렴한 계층으로 이동하도록 구성한다." },
      { k: "C", en: "Configure S3 inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.", ko: "S3 인벤토리로 객체를 관리하고 90일 후 S3 Standard-IA로 이동한다." },
      { k: "D", en: "Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.", ko: "S3 수명 주기 정책으로 객체를 90일 후 S3 Standard에서 S3 Standard-IA로 이동한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "접근 패턴이 생성 후 90일이라는 명확한 기준으로 알려져 있으므로 수명 주기 정책으로 그 시점에 Standard-IA로 전환하는 것이 가장 저렴합니다. 최근 파일은 Standard에서 즉시 제공하고 오래된 파일도 Standard-IA에서 밀리초 단위로 검색할 수 있습니다.",
      en: "Because the access pattern is known, a lifecycle transition after 90 days moves older objects to lower-cost Standard-IA while keeping millisecond retrieval. Recent popular files remain in Standard."
    },
    why_wrong: {
      A: { ko: "새 벨소리는 초기에 자주 접근되므로 검색 비용이 있는 Standard-IA에 바로 두는 것은 비효율적입니다.", en: "New ringtones are frequently accessed, making immediate Standard-IA retrieval charges inefficient." },
      B: { ko: "수백만 객체의 모니터링 비용이 추가되며 이미 90일이라는 접근 패턴을 알고 있어 Intelligent-Tiering이 불필요합니다.", en: "Monitoring millions of objects adds cost, and Intelligent-Tiering is unnecessary when the 90-day pattern is known." },
      C: { ko: "S3 인벤토리는 객체 목록과 메타데이터 보고 기능이며 자동 계층 전환 기능이 아닙니다.", en: "S3 Inventory reports object metadata and does not perform lifecycle transitions." }
    }
  }
  ,{
    id: "exam4-154", number: 154, tags: ["S3 Object Lock", "Compliance", "Retention", "WORM"],
    question: {
      en: "A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a few scientists to add new files and must restrict all other users to read-only access. No users can have the ability to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of 1 year after its creation date.\nWhich solution will meet these requirements?",
      ko: "회사는 의료 시험 결과를 S3 저장소에 보관해야 합니다. 소수의 과학자만 새 파일을 추가할 수 있고 다른 사용자는 읽기 전용이어야 합니다. 누구도 저장된 파일을 수정하거나 삭제할 수 없어야 하며 각 파일은 생성일로부터 최소 1년간 보관해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Use S3 Object Lock in governance mode with a legal hold of 1 year.", ko: "1년 법적 보존과 함께 S3 Object Lock 거버넌스 모드를 사용한다." },
      { k: "B", en: "Use S3 Object Lock in compliance mode with a retention period of 365 days.", ko: "보존 기간 365일의 S3 Object Lock 규정 준수 모드를 사용한다." },
      { k: "C", en: "Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy to only allow the IAM role.", ko: "IAM 역할로 모든 사용자의 객체 삭제·변경을 제한하고 버킷 정책에서 해당 역할만 허용한다." },
      { k: "D", en: "Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the function to track the hash of the saved object so that modified objects can be marked accordingly.", ko: "객체 추가 때마다 Lambda를 호출해 저장 객체의 해시를 추적하고 수정된 객체를 표시하게 한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "Object Lock 규정 준수 모드는 365일 보존 기간 동안 루트 사용자를 포함한 누구도 객체 버전을 덮어쓰거나 삭제하거나 보존 기간을 줄일 수 없게 합니다. 새 객체 업로드 권한과 기존 객체 읽기 권한은 IAM·버킷 정책으로 별도 제한할 수 있습니다.",
      en: "Object Lock compliance mode enforces WORM retention for 365 days. No user, including root, can delete or overwrite protected versions or shorten retention during that period."
    },
    why_wrong: {
      A: { ko: "거버넌스 모드는 특별 권한이 있는 사용자가 우회할 수 있고 법적 보존은 고정 1년 기간으로 표현되지 않습니다.", en: "Governance mode can be bypassed by privileged users, and a legal hold does not express a fixed one-year retention period." },
      C: { ko: "IAM과 버킷 정책은 권한 있는 관리자가 변경할 수 있어 누구도 삭제할 수 없다는 불변성 요구를 보장하지 못합니다.", en: "IAM and bucket policies can be changed by administrators and do not provide immutable retention." },
      D: { ko: "해시는 변경을 사후 탐지할 뿐 수정이나 삭제를 방지하지 않습니다.", en: "Hash tracking detects modification after the fact and does not prevent modification or deletion." }
    }
  }
  ,{
    id: "exam4-155", number: 155, tags: ["CloudFront", "S3", "Global Caching"],
    question: {
      en: "A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically.\nWhich solution will meet these requirements?",
      ko: "대형 미디어 회사가 AWS에서 웹 애플리케이션을 호스팅합니다. 전 세계 사용자가 기밀 미디어 파일에 안정적으로 접근하도록 캐싱하려 하며 콘텐츠는 S3 버킷에 저장됩니다. 요청 위치와 관계없이 콘텐츠를 빠르게 제공해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Use AWS DataSync to connect the S3 buckets to the web application.", ko: "AWS DataSync로 S3 버킷을 웹 애플리케이션에 연결한다." },
      { k: "B", en: "Deploy AWS Global Accelerator to connect the S3 buckets to the web application.", ko: "AWS Global Accelerator를 배포해 S3 버킷을 웹 애플리케이션에 연결한다." },
      { k: "C", en: "Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.", ko: "Amazon CloudFront를 배포해 S3 버킷 콘텐츠를 CloudFront 엣지 서버에서 제공한다." },
      { k: "D", en: "Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application.", ko: "SQS로 S3 버킷을 웹 애플리케이션에 연결한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "CloudFront는 S3를 오리진으로 사용하고 전 세계 엣지 로케이션에 콘텐츠를 캐시하여 사용자와 가까운 위치에서 빠르고 안정적으로 제공합니다. 서명된 URL·쿠키와 OAC/OAI로 기밀 파일 접근도 통제할 수 있습니다.",
      en: "CloudFront uses S3 as an origin and caches content at global edge locations for fast, reliable delivery. Signed URLs or cookies plus origin access controls can protect confidential files."
    },
    why_wrong: {
      A: { ko: "DataSync는 데이터 이전·동기화 서비스이며 사용자 대상 글로벌 콘텐츠 캐시가 아닙니다.", en: "DataSync transfers and synchronizes data; it is not a global user-facing content cache." },
      B: { ko: "Global Accelerator는 S3 객체를 엣지에 캐시하거나 S3 버킷을 직접 엔드포인트로 사용하지 않습니다.", en: "Global Accelerator does not cache S3 objects or use S3 buckets directly as endpoints." },
      D: { ko: "SQS는 메시지 큐이며 미디어 파일 전달·캐싱 서비스가 아닙니다.", en: "SQS is a message queue, not a media delivery or caching service." }
    }
  }
  ,{
    id: "exam4-156", number: 156, tags: ["Lake Formation", "Glue", "Athena", "QuickSight"],
    question: {
      en: "A company produces batch data that comes from different databases. The company also produces live stream data from network sensors and application APIs. The company needs to consolidate all the data into one place for business analytics. The company needs to process the incoming data and then stage the data in different Amazon S3 buckets. Teams will later run one-time queries and import the data into a business intelligence tool to show key performance indicators (KPIs).\nWhich combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)",
      ko: "회사는 여러 데이터베이스의 배치 데이터와 네트워크 센서·애플리케이션 API의 실시간 스트림 데이터를 생성합니다. 비즈니스 분석을 위해 모든 데이터를 한곳에 통합하고 처리한 뒤 서로 다른 S3 버킷에 준비해야 합니다. 이후 팀들은 일회성 쿼리를 실행하고 BI 도구에서 KPI를 표시합니다.\n운영 부담이 가장 적은 단계 조합은 무엇입니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Use Amazon Athena for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.", ko: "일회성 쿼리에 Athena를 사용하고 KPI 대시보드에 QuickSight를 사용한다." },
      { k: "B", en: "Use Amazon Kinesis Data Analytics for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.", ko: "일회성 쿼리에 Kinesis Data Analytics를 사용하고 KPI 대시보드에 QuickSight를 사용한다." },
      { k: "C", en: "Create custom AWS Lambda functions to move the individual records from the databases to an Amazon Redshift cluster.", ko: "사용자 지정 Lambda 함수로 데이터베이스 레코드를 Redshift 클러스터로 이동한다." },
      { k: "D", en: "Use an AWS Glue extract, transform, and load (ETL) job to convert the data into JSON format. Load the data into multiple Amazon OpenSearch Service (Amazon Elasticsearch Service) clusters.", ko: "Glue ETL로 데이터를 JSON으로 변환해 여러 OpenSearch Service 클러스터에 적재한다." },
      { k: "E", en: "Use blueprints in AWS Lake Formation to identify the data that can be ingested into a data lake. Use AWS Glue to crawl the source, extract the data, and load the data into Amazon S3 in Apache Parquet format.", ko: "Lake Formation 블루프린트로 데이터 레이크에 수집할 데이터를 식별하고 Glue로 소스를 크롤링·추출해 Apache Parquet 형식으로 S3에 적재한다." }
    ],
    answer: ["A", "E"],
    explanation: {
      ko: "Lake Formation 블루프린트와 Glue를 사용하면 여러 소스의 수집·카탈로그·변환을 관리형으로 구성하고 분석 효율이 높은 Parquet로 S3 데이터 레이크에 적재할 수 있습니다(E). Athena는 서버 없이 일회성 SQL 쿼리를 수행하고 QuickSight는 KPI 대시보드를 제공합니다(A).",
      en: "Lake Formation blueprints and Glue automate ingestion, cataloging, and Parquet staging in an S3 data lake. Athena provides serverless ad hoc SQL, and QuickSight creates KPI dashboards."
    },
    why_wrong: {
      B: { ko: "Kinesis Data Analytics는 실시간 스트림 처리용이며 S3의 통합 데이터에 대한 일회성 쿼리에는 Athena가 적합합니다.", en: "Kinesis Data Analytics processes live streams; Athena is appropriate for ad hoc queries over staged S3 data." },
      C: { ko: "소스별 Lambda 복사 코드와 Redshift 클러스터는 운영 부담이 크고 S3 데이터 레이크 요구에도 맞지 않습니다.", en: "Custom Lambda movement and a Redshift cluster add operations and do not stage the requested S3 data lake." },
      D: { ko: "여러 OpenSearch 클러스터는 비용·운영 부담이 크며 일회성 SQL과 S3 준비 요구에 적합하지 않습니다.", en: "Multiple OpenSearch clusters add cost and operations and are not the right target for ad hoc SQL over S3." }
    }
  }
  ,{
    id: "exam4-157", number: 157, tags: ["Aurora", "AWS Backup", "CloudWatch Logs", "Retention"],
    question: {
      en: "A company stores data in an Amazon Aurora PostgreSQL DB cluster. The company must store all the data for 5 years and must delete all the data after 5 years. The company also must indefinitely keep audit logs of actions that are performed within the database. Currently, the company has automated backups configured for Aurora.\nWhich combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
      ko: "회사는 Aurora PostgreSQL DB 클러스터에 데이터를 저장합니다. 모든 데이터는 5년 보관 후 삭제해야 하고, 데이터베이스 내부에서 수행된 작업의 감사 로그는 무기한 보관해야 합니다. 현재 Aurora 자동 백업이 구성되어 있습니다.\n어떤 단계 조합을 수행해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Take a manual snapshot of the DB cluster.", ko: "DB 클러스터의 수동 스냅샷을 생성한다." },
      { k: "B", en: "Create a lifecycle policy for the automated backups.", ko: "자동 백업에 수명 주기 정책을 생성한다." },
      { k: "C", en: "Configure automated backup retention for 5 years.", ko: "자동 백업 보존 기간을 5년으로 구성한다." },
      { k: "D", en: "Configure an Amazon CloudWatch Logs export for the DB cluster.", ko: "DB 클러스터의 CloudWatch Logs 내보내기를 구성한다." },
      { k: "E", en: "Use AWS Backup to take the backups and to keep the backups for 5 years.", ko: "AWS Backup으로 백업을 생성하고 5년 동안 보관한다." }
    ],
    answer: ["D", "E"],
    explanation: {
      ko: "AWS Backup 계획에서 Aurora 백업과 5년 보존·만료를 중앙 관리하면 데이터 보존 기간을 자동화할 수 있습니다(E). PostgreSQL 감사 로그를 CloudWatch Logs로 내보내고 로그 그룹 보존을 무기한으로 설정하면 데이터 백업이 만료된 뒤에도 감사 기록을 유지할 수 있습니다(D).",
      en: "AWS Backup can schedule Aurora backups with a five-year retention and expiration policy. Export database audit logs to CloudWatch Logs and configure indefinite log retention separately."
    },
    why_wrong: {
      A: { ko: "단일 수동 스냅샷은 지속적인 모든 데이터를 보호하거나 5년 후 자동 삭제하지 않습니다.", en: "One manual snapshot neither protects all ongoing data nor expires automatically after five years." },
      B: { ko: "Aurora 자동 백업에 별도 장기 수명 주기 정책을 적용하는 방식이 아니며 최대 보존 기간에도 제한이 있습니다.", en: "Aurora automated backups do not use a separate long-term lifecycle policy in this way." },
      C: { ko: "Aurora 자동 백업의 보존 기간은 5년으로 설정할 수 없습니다.", en: "Aurora automated backup retention cannot be configured for five years." }
    }
  }
  ,{
    id: "exam4-158", number: 158, tags: ["CloudFront", "Video Streaming", "Global Performance"],
    question: {
      en: "A solutions architect is optimizing a website for an upcoming musical event. Videos of the performances will be streamed in real time and then will be available on demand. The event is expected to attract a global online audience.\nWhich service will improve the performance of both the real-time and on-demand streaming?",
      ko: "솔루션스 아키텍트가 음악 행사 웹사이트를 최적화합니다. 공연 영상은 실시간으로 스트리밍된 후 온디맨드로 제공되며 전 세계 온라인 관객이 예상됩니다.\n실시간 및 온디맨드 스트리밍의 성능을 모두 개선하는 서비스는 무엇입니까?"
    },
    options: [
      { k: "A", en: "Amazon CloudFront", ko: "Amazon CloudFront" },
      { k: "B", en: "AWS Global Accelerator", ko: "AWS Global Accelerator" },
      { k: "C", en: "Amazon Route 53", ko: "Amazon Route 53" },
      { k: "D", en: "Amazon S3 Transfer Acceleration", ko: "Amazon S3 Transfer Acceleration" }
    ],
    answer: ["A"],
    explanation: {
      ko: "CloudFront는 HTTP 기반 라이브 스트림 세그먼트와 온디맨드 비디오를 전 세계 엣지에서 전달하고 캐시해 오리진 부하와 사용자 지연을 줄입니다. 글로벌 미디어 배포를 위한 CDN입니다.",
      en: "CloudFront is a global CDN that delivers HTTP live-stream segments and caches on-demand video at edge locations, reducing origin load and viewer latency."
    },
    why_wrong: {
      B: { ko: "Global Accelerator는 TCP/UDP 애플리케이션 경로를 가속하지만 비디오 객체·세그먼트를 CDN처럼 캐시하지 않습니다.", en: "Global Accelerator optimizes TCP/UDP paths but does not cache video objects or segments as a CDN." },
      C: { ko: "Route 53은 DNS 라우팅만 제공하며 스트리밍 콘텐츠 전송·캐시를 가속하지 않습니다.", en: "Route 53 provides DNS routing and does not deliver or cache streaming content." },
      D: { ko: "S3 Transfer Acceleration은 S3로의 장거리 객체 업로드를 가속하는 기능이며 시청자 스트리밍용 CDN이 아닙니다.", en: "S3 Transfer Acceleration accelerates long-distance object transfers into S3, not viewer streaming delivery." }
    }
  }
  ,{
    id: "exam4-159", number: 159, tags: ["API Gateway", "AWS WAF", "Usage Plan", "Security"],
    question: {
      en: "A company is running a publicly accessible serverless application that uses Amazon API Gateway and AWS Lambda. The application's traffic recently spiked due to fraudulent requests from botnets.\nWhich steps should a solutions architect take to block requests from unauthorized users? (Choose two.)",
      ko: "회사는 API Gateway와 Lambda를 사용하는 공개 서버리스 애플리케이션을 운영합니다. 최근 봇넷의 사기성 요청으로 트래픽이 급증했습니다.\n승인되지 않은 사용자의 요청을 차단하려면 어떤 단계를 수행해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Create a usage plan with an API key that is shared with genuine users only.", ko: "정상 사용자에게만 공유하는 API 키가 포함된 사용량 계획을 생성한다." },
      { k: "B", en: "Integrate logic within the Lambda function to ignore the requests from fraudulent IP addresses.", ko: "사기성 IP 주소의 요청을 무시하는 로직을 Lambda 함수에 통합한다." },
      { k: "C", en: "Implement an AWS WAF rule to target malicious requests and trigger actions to filter them out.", ko: "악성 요청을 대상으로 필터링 작업을 수행하는 AWS WAF 규칙을 구현한다." },
      { k: "D", en: "Convert the existing public API to a private API. Update the DNS records to redirect users to the new API endpoint.", ko: "기존 퍼블릭 API를 프라이빗 API로 변환하고 DNS 레코드로 사용자를 새 엔드포인트로 보낸다." },
      { k: "E", en: "Create an IAM role for each user attempting to access the API. A user will assume the role when making the API call.", ko: "API 사용자마다 IAM 역할을 만들고 API 호출 시 역할을 수임하게 한다." }
    ],
    answer: ["A", "C"],
    explanation: {
      ko: "API Gateway 사용량 계획과 정상 사용자 전용 API 키로 클라이언트별 할당량·스로틀링을 적용할 수 있습니다(A). API Gateway에 연결한 WAF 규칙은 악성 IP, 요청 패턴, 속도 기반 봇 트래픽을 Lambda에 도달하기 전에 차단합니다(C).",
      en: "An API Gateway usage plan and API keys apply per-client quotas and throttling. AWS WAF blocks malicious IPs, patterns, and rate-based bot traffic before requests invoke Lambda."
    },
    why_wrong: {
      B: { ko: "Lambda에서 걸러내면 요청 처리 비용과 동시성이 이미 소비되고 차단 목록 코드도 직접 관리해야 합니다.", en: "Filtering in Lambda already consumes invocation cost and concurrency and requires custom deny-list code." },
      D: { ko: "프라이빗 API는 VPC 내부용이므로 정상 인터넷 사용자도 접근할 수 없게 됩니다.", en: "A private API is intended for VPC access and would block legitimate public users too." },
      E: { ko: "공개 애플리케이션의 모든 사용자에게 AWS IAM 역할을 생성·배포하는 것은 확장 가능하거나 운영 효율적이지 않습니다.", en: "Creating and distributing an AWS IAM role for every public user is not scalable or operationally efficient." }
    }
  }
  ,{
    id: "exam4-160", number: 160, tags: ["S3", "Disaster Recovery", "Cost Optimization"],
    question: {
      en: "An ecommerce company hosts its analytics application in the AWS cloud. The application generates about 300 MB of data each month. The data is stored in JSON format. The company is evaluating a disaster recovery solution to back up the data. The data must be accessible in milliseconds if it is needed, and the data must be kept for 30 days.\nWhich solution meets these requirements MOST cost-effectively?",
      ko: "전자상거래 회사는 AWS 클라우드에서 분석 애플리케이션을 호스팅합니다. 애플리케이션은 매월 약 300MB의 JSON 데이터를 생성합니다. 재해 복구용 백업을 검토 중이며 필요 시 밀리초 단위로 접근할 수 있어야 하고 30일 동안 보관해야 합니다.\n가장 비용 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Amazon OpenSearch Service (Amazon Elasticsearch Service)", ko: "Amazon OpenSearch Service" },
      { k: "B", en: "Amazon S3 Glacier", ko: "Amazon S3 Glacier" },
      { k: "C", en: "Amazon S3 Standard", ko: "Amazon S3 Standard" },
      { k: "D", en: "Amazon RDS for PostgreSQL", ko: "Amazon RDS for PostgreSQL" }
    ],
    answer: ["C"],
    explanation: {
      ko: "S3 Standard는 작은 JSON 백업을 저렴하게 저장하면서 밀리초 단위 객체 접근과 다중 AZ 내구성을 제공합니다. 30일 후 객체를 삭제하는 수명 주기 만료 규칙을 추가하면 보존 비용도 자동 제한할 수 있습니다.",
      en: "S3 Standard provides low-cost multi-AZ durable storage with millisecond object access. A lifecycle expiration rule can delete the small JSON backups after 30 days."
    },
    why_wrong: {
      A: { ko: "OpenSearch 클러스터는 검색·분석용이며 300MB 백업 저장에 상시 인프라 비용이 과도합니다.", en: "An OpenSearch cluster is excessive and costly for storing 300 MB of backup data." },
      B: { ko: "Glacier 아카이브 계층은 복원 절차와 지연이 있어 밀리초 접근 요구를 충족하지 못합니다.", en: "Glacier archive storage requires restoration and does not provide immediate millisecond access." },
      D: { ko: "RDS 인스턴스는 단순 JSON 백업 객체를 30일 보관하는 데 불필요하게 비싸고 운영 부담이 큽니다.", en: "An RDS instance is unnecessarily expensive and operationally heavy for 30-day JSON backup objects." }
    }
  }
  ,{
    id: "exam4-161", number: 161, tags: ["Lambda", "S3", "Aurora", "Serverless"],
    question: {
      en: "A company has a small Python application that processes JSON documents and outputs the results to an on-premises SQL database. The application runs thousands of times each day. The company wants to move the application to the AWS Cloud. The company needs a highly available solution that maximizes scalability and minimizes operational overhead.\nWhich solution will meet these requirements?",
      ko: "회사는 JSON 문서를 처리하고 결과를 온프레미스 SQL 데이터베이스에 출력하는 소규모 Python 애플리케이션을 운영합니다. 애플리케이션은 하루에 수천 번 실행됩니다. 이를 AWS 클라우드로 이전하면서 고가용성, 최대 확장성, 최소 운영 부담을 원합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Place the JSON documents in an Amazon S3 bucket. Run the Python code on multiple Amazon EC2 instances to process the documents. Store the results in an Amazon Aurora DB cluster.", ko: "JSON 문서를 S3에 저장하고 여러 EC2에서 Python 코드를 실행합니다. 결과는 Aurora에 저장합니다." },
      { k: "B", en: "Place the JSON documents in an Amazon S3 bucket. Create an AWS Lambda function that runs the Python code to process the documents as they arrive in the S3 bucket. Store the results in an Amazon Aurora DB cluster.", ko: "JSON 문서를 S3에 저장하고 도착할 때 Python 코드를 실행하는 Lambda 함수를 생성합니다. 결과는 Aurora에 저장합니다." },
      { k: "C", en: "Place the JSON documents in an Amazon Elastic Block Store (Amazon EBS) volume. Use the EBS Multi-Attach feature to attach the volume to multiple Amazon EC2 instances. Run the Python code on the EC2 instances to process the documents. Store the results in an Amazon RDS DB instance.", ko: "JSON 문서를 EBS에 저장해 Multi-Attach로 여러 EC2에 연결하고 Python 코드를 실행합니다. 결과는 RDS에 저장합니다." },
      { k: "D", en: "Place the JSON documents in an Amazon Simple Queue Service (Amazon SQS) queue as messages. Deploy the Python code as a container on an Amazon Elastic Container Service (Amazon ECS) cluster that is configured with the Amazon EC2 launch type. Use the container to process the SQS messages. Store the results on an Amazon RDS DB instance.", ko: "JSON 문서를 SQS 메시지로 저장하고 EC2 시작 유형의 ECS에 Python 컨테이너를 배포해 처리합니다. 결과는 RDS에 저장합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "S3 이벤트로 Lambda를 호출하면 문서 도착량에 따라 자동 확장되며 서버를 관리할 필요가 없습니다. S3와 Aurora도 관리형 고가용성 서비스입니다.", en: "S3 events can invoke Lambda for each document. Lambda scales automatically without server management, while S3 and Aurora provide managed high availability." },
    why_wrong: {
      A: { ko: "여러 EC2의 용량과 가용성을 직접 관리해야 합니다.", en: "Multiple EC2 instances require capacity and availability management." },
      C: { ko: "EBS Multi-Attach와 EC2 구성은 객체 처리에 부적합하고 운영 부담이 큽니다.", en: "EBS Multi-Attach and EC2 add complexity and are a poor fit for object processing." },
      D: { ko: "EC2 기반 ECS 클러스터와 RDS를 관리해야 하므로 운영 부담이 더 큽니다.", en: "An EC2-backed ECS cluster and RDS require more management." }
    }
  }
  ,{
    id: "exam4-162", number: 162, tags: ["FSx for Lustre", "S3", "HPC"],
    question: {
      en: "A company wants to use high performance computing (HPC) infrastructure on AWS for financial risk modeling. The company's HPC workloads run on Linux. Each HPC workflow runs on hundreds of Amazon EC2 Spot Instances, is short-lived, and generates thousands of output files that are ultimately stored in persistent storage for analytics and long-term future use.\nThe company seeks a cloud storage solution that permits the copying of on-premises data to long-term persistent storage to make data available for processing by all EC2 instances. The solution should also be a high performance file system that is integrated with persistent storage to read and write datasets and output files.\nWhich combination of AWS services meets these requirements?",
      ko: "회사는 Linux 기반 HPC로 재무 위험 모델링을 수행하려 합니다. 각 워크플로는 수백 개의 EC2 스팟 인스턴스에서 단기간 실행되고 수천 개의 출력 파일을 생성합니다. 온프레미스 데이터를 장기 영구 스토리지로 복사해 모든 EC2에서 처리할 수 있어야 하며, 영구 스토리지와 통합된 고성능 파일 시스템에서 데이터셋과 출력 파일을 읽고 써야 합니다.\n어떤 AWS 서비스 조합이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Amazon FSx for Lustre integrated with Amazon S3", ko: "Amazon S3와 통합된 Amazon FSx for Lustre" },
      { k: "B", en: "Amazon FSx for Windows File Server integrated with Amazon S3", ko: "Amazon S3와 통합된 Amazon FSx for Windows File Server" },
      { k: "C", en: "Amazon S3 Glacier integrated with Amazon Elastic Block Store (Amazon EBS)", ko: "Amazon EBS와 통합된 Amazon S3 Glacier" },
      { k: "D", en: "Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume", ko: "VPC 엔드포인트를 사용하는 S3 버킷과 EBS 범용 SSD(gp2) 볼륨의 통합" }
    ],
    answer: ["A"],
    explanation: { ko: "FSx for Lustre는 Linux HPC용 병렬 고성능 파일 시스템이며 S3와 통합해 입력을 불러오고 결과를 영구 저장할 수 있습니다.", en: "FSx for Lustre is a high-performance parallel file system for Linux HPC and integrates with S3 for persistent input and output storage." },
    why_wrong: {
      B: { ko: "FSx for Windows File Server는 SMB 기반 Windows 워크로드용입니다.", en: "FSx for Windows File Server is intended for Windows SMB workloads." },
      C: { ko: "Glacier는 온라인 고성능 파일 시스템이 아닙니다.", en: "Glacier is not an online high-performance file system." },
      D: { ko: "EBS는 수백 개 HPC 인스턴스가 공유하는 S3 통합 병렬 파일 시스템이 아닙니다.", en: "EBS is not an S3-integrated parallel file system shared by hundreds of instances." }
    }
  }
  ,{
    id: "exam4-163", number: 163, tags: ["ECS", "Fargate", "ECR", "Auto Scaling"],
    question: {
      en: "A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead.\nWhich solution will meet these requirements?",
      ko: "회사는 온프레미스에서 컨테이너 애플리케이션을 개발 중이며 이를 AWS로 이전합니다. 배포 직후 수천 명의 사용자가 이용할 예정이고, 운영 부담을 최소화하는 고가용성 대규모 컨테이너 배포가 필요합니다.\n어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand.", ko: "이미지를 ECR에 저장하고 Fargate 시작 유형의 ECS에서 실행합니다. 대상 추적으로 수요에 따라 자동 확장합니다." },
      { k: "B", en: "Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand.", ko: "이미지를 ECR에 저장하고 EC2 시작 유형의 ECS에서 실행합니다. 대상 추적으로 자동 확장합니다." },
      { k: "C", en: "Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed.", ko: "EC2의 저장소에 이미지를 저장하고 여러 AZ의 EC2에서 컨테이너를 실행합니다. CPU를 모니터링해 필요 시 EC2를 추가합니다." },
      { k: "D", en: "Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached.", ko: "컨테이너 이미지가 포함된 AMI로 여러 AZ의 Auto Scaling 그룹에서 EC2를 실행하고 CloudWatch 경보로 확장합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "ECR은 관리형 이미지 저장소이고 ECS on Fargate는 호스트 관리 없이 여러 AZ에서 실행됩니다. 대상 추적이 작업 수를 자동 조정합니다.", en: "ECR provides managed image storage. ECS on Fargate runs containers without host management, and target tracking scales tasks with demand." },
    why_wrong: {
      B: { ko: "EC2 시작 유형은 호스트 용량과 패치를 관리해야 합니다.", en: "The EC2 launch type requires host capacity and patch management." },
      C: { ko: "이미지 저장소와 확장을 직접 관리해야 합니다.", en: "This requires self-managing the image repository and scaling." },
      D: { ko: "AMI 방식은 배포 유연성이 낮고 EC2 관리가 필요합니다.", en: "The AMI approach is less flexible and still requires EC2 management." }
    }
  }
  ,{
    id: "exam4-164", number: 164, tags: ["SQS", "Dead-Letter Queue", "Decoupling"],
    question: {
      en: "A company has two applications: a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed. If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages.\nWhich solution meets these requirements and is the MOST operationally efficient?",
      ko: "회사는 페이로드 메시지를 보내는 송신 애플리케이션과 이를 받는 처리 애플리케이션을 운영합니다. 시간당 약 1,000개의 메시지를 전송하며 처리에는 최대 2일이 걸릴 수 있습니다. 실패 메시지는 나머지 메시지 처리에 영향을 주지 않도록 보존해야 합니다.\n가장 운영 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.", ko: "Redis를 실행하는 EC2를 구성하고 두 애플리케이션이 메시지를 저장, 처리, 삭제하도록 합니다." },
      { k: "B", en: "Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).", ko: "Kinesis Data Streams로 메시지를 받고 처리 애플리케이션을 KCL과 통합합니다." },
      { k: "C", en: "Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process.", ko: "송신 및 처리 애플리케이션을 SQS와 통합하고 실패 메시지를 수집할 DLQ를 구성합니다." },
      { k: "D", en: "Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic.", ko: "처리 애플리케이션을 SNS 주제에 구독시키고 송신 애플리케이션이 SNS에 쓰도록 합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "SQS는 메시지를 내구성 있게 보관하며 애플리케이션을 분리합니다. DLQ는 반복 실패 메시지를 격리해 정상 처리를 방해하지 않게 합니다.", en: "SQS durably buffers messages and decouples the applications. A dead-letter queue isolates failed messages so other messages continue processing." },
    why_wrong: {
      A: { ko: "Redis의 가용성, 내구성, 실패 처리를 직접 운영해야 합니다.", en: "Self-managed Redis requires implementing availability, durability, and failure handling." },
      B: { ko: "Kinesis는 이 작업 대기열과 DLQ 요구에 비해 복잡합니다.", en: "Kinesis is more complex than an SQS work queue with a DLQ." },
      D: { ko: "SNS 단독은 장기 버퍼링과 실패 메시지 격리를 제공하지 않습니다.", en: "SNS alone does not provide durable buffering and failed-message isolation." }
    }
  }
  ,{
    id: "exam4-165", number: 165, tags: ["CloudFront", "S3", "WAF", "OAI"],
    question: {
      en: "A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company's security policy requires that all website traffic be inspected by AWS WAF.\nHow should the solutions architect comply with these requirements?",
      ko: "S3 오리진과 CloudFront를 사용하는 정적 웹사이트를 설계해야 합니다. 보안 정책상 모든 웹사이트 트래픽을 AWS WAF에서 검사해야 합니다.\n어떻게 요구사항을 충족해야 합니까?"
    },
    options: [
      { k: "A", en: "Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN) only.", ko: "AWS WAF ARN에서 오는 요청만 허용하도록 S3 버킷 정책을 구성합니다." },
      { k: "B", en: "Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from the S3 origin.", ko: "S3 요청 전에 모든 요청을 WAF로 전달하도록 CloudFront를 구성합니다." },
      { k: "C", en: "Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only. Associate AWS WAF to CloudFront.", ko: "CloudFront IP만 S3에 접근하도록 보안 그룹을 구성하고 WAF를 CloudFront에 연결합니다." },
      { k: "D", en: "Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the S3 bucket. Enable AWS WAF on the distribution.", ko: "OAI로 S3 접근을 제한하고 CloudFront 배포에 AWS WAF를 활성화합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "CloudFront에 WAF를 연결해 엣지에서 요청을 검사하고 OAI로 S3 직접 접근을 차단하면 모든 트래픽이 WAF를 거칩니다.", en: "WAF on CloudFront inspects requests at the edge, and an OAI prevents direct S3 access that could bypass WAF." },
    why_wrong: {
      A: { ko: "WAF는 S3 오리진의 인증 주체가 아닙니다.", en: "WAF is not an S3 origin principal." },
      B: { ko: "WAF는 전달 대상이 아니라 CloudFront 배포에 연결됩니다.", en: "WAF is associated with CloudFront rather than used as a forwarding destination." },
      C: { ko: "S3에는 보안 그룹을 연결할 수 없습니다.", en: "Security groups cannot be attached to S3." }
    }
  }
  ,{
    id: "exam4-166", number: 166, tags: ["CloudFront", "S3", "Static Website"],
    question: {
      en: "Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution.\nWhich action should the solutions architect take to accomplish this?",
      ko: "글로벌 행사 주최자는 일일 보고서를 정적 HTML로 게시하려 합니다. 전 세계에서 수백만 건의 조회가 예상되며 파일은 S3에 저장되어 있습니다.\n효율적인 솔루션을 위해 어떤 조치를 해야 합니까?"
    },
    options: [
      { k: "A", en: "Generate presigned URLs for the files.", ko: "파일에 대한 미리 서명된 URL을 생성합니다." },
      { k: "B", en: "Use cross-Region replication to all Regions.", ko: "모든 리전으로 교차 리전 복제를 사용합니다." },
      { k: "C", en: "Use the geoproximity feature of Amazon Route 53.", ko: "Route 53 지리 근접 라우팅을 사용합니다." },
      { k: "D", en: "Use Amazon CloudFront with the S3 bucket as its origin.", ko: "S3 버킷을 오리진으로 하는 CloudFront를 사용합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "CloudFront는 전 세계 엣지에 정적 S3 콘텐츠를 캐시해 낮은 지연 시간으로 수백만 요청을 처리합니다.", en: "CloudFront caches static S3 content at global edge locations and scales to millions of low-latency views." },
    why_wrong: {
      A: { ko: "미리 서명된 URL은 글로벌 캐싱을 제공하지 않습니다.", en: "Presigned URLs do not provide global caching." },
      B: { ko: "모든 리전 복제는 비용과 관리 부담이 큽니다.", en: "Replication to every Region is costly and complex." },
      C: { ko: "Route 53은 DNS 라우팅만 제공하며 콘텐츠를 캐시하지 않습니다.", en: "Route 53 provides DNS routing, not content caching." }
    }
  }
  ,{
    id: "exam4-167", number: 167, tags: ["EC2", "Reserved Instances", "Spot Instances", "SQS"],
    question: {
      en: "A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often has intermittent traffic. This application should continually process messages without any downtime.\nWhich solution meets these requirements MOST cost-effectively?",
      ko: "회사는 EC2 플릿에서 SQS 메시지를 병렬 처리하는 프로덕션 애플리케이션을 실행합니다. 메시지 양은 예측 불가능하고 간헐적이며 애플리케이션은 중단 없이 계속 처리해야 합니다.\n가장 비용 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use Spot Instances exclusively to handle the maximum capacity required.", ko: "최대 필요 용량 전체에 스팟 인스턴스를 사용합니다." },
      { k: "B", en: "Use Reserved Instances exclusively to handle the maximum capacity required.", ko: "최대 필요 용량 전체에 예약 인스턴스를 사용합니다." },
      { k: "C", en: "Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity.", ko: "기본 용량에는 예약 인스턴스, 추가 용량에는 스팟 인스턴스를 사용합니다." },
      { k: "D", en: "Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional capacity.", ko: "기본 용량에는 예약 인스턴스, 추가 용량에는 온디맨드 인스턴스를 사용합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "예약 인스턴스로 지속적인 기본 용량을 확보하고, SQS에 보관된 중단 허용 추가 작업은 저렴한 스팟 인스턴스로 처리합니다.", en: "Reserved Instances cover continuous baseline capacity, while low-cost Spot Instances handle interruptible burst work buffered in SQS." },
    why_wrong: {
      A: { ko: "스팟만 사용하면 모든 처리 용량이 회수될 수 있습니다.", en: "An all-Spot fleet can lose all processing capacity." },
      B: { ko: "간헐적인 최대 용량 전체를 예약하면 유휴 비용이 큽니다.", en: "Reserving maximum intermittent capacity creates costly idle capacity." },
      D: { ko: "중단 허용 추가 작업에는 온디맨드보다 스팟이 저렴합니다.", en: "Spot is more cost-effective than On-Demand for interruptible extra work." }
    }
  }
  ,{
    id: "exam4-168", number: 168, tags: ["Organizations", "SCP", "Governance"],
    question: {
      en: "A security team wants to limit access to specific services or actions in all of the team's AWS accounts. All accounts belong to a large organization in AWS Organizations. The solution must be scalable and there must be a single point where permissions can be maintained.\nWhat should a solutions architect do to accomplish this?",
      ko: "보안 팀은 AWS Organizations에 속한 모든 계정에서 특정 서비스나 작업의 접근을 제한하려 합니다. 솔루션은 확장 가능하고 권한을 한 곳에서 관리할 수 있어야 합니다.\n어떤 조치를 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an ACL to provide access to the services or actions.", ko: "서비스 또는 작업에 접근을 제공하는 ACL을 생성합니다." },
      { k: "B", en: "Create a security group to allow accounts and attach it to user groups.", ko: "계정을 허용하는 보안 그룹을 사용자 그룹에 연결합니다." },
      { k: "C", en: "Create cross-account roles in each account to deny access to the services or actions.", ko: "각 계정에 교차 계정 역할을 생성해 접근을 거부합니다." },
      { k: "D", en: "Create a service control policy in the root organizational unit to deny access to the services or actions.", ko: "루트 OU에 SCP를 생성해 서비스 또는 작업 접근을 거부합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "루트 OU의 SCP는 조직 내 모든 멤버 계정의 최대 권한을 중앙에서 제한합니다.", en: "An SCP attached to the root OU centrally limits maximum permissions across all member accounts." },
    why_wrong: {
      A: { ko: "ACL은 조직 전체 서비스 작업 권한을 제어하지 않습니다.", en: "ACLs do not govern service actions across an organization." },
      B: { ko: "보안 그룹은 네트워크 트래픽 제어용입니다.", en: "Security groups control network traffic." },
      C: { ko: "계정별 역할 관리는 중앙 집중적이지 않고 확장성이 낮습니다.", en: "Per-account roles are decentralized and do not scale well." }
    }
  }
  ,{
    id: "exam4-169", number: 169, tags: ["Shield Advanced", "DDoS", "ALB"],
    question: {
      en: "A company is concerned about the security of its public web application due to recent web attacks. The application uses an Application Load Balancer (ALB). A solutions architect must reduce the risk of DDoS attacks against the application.\nWhat should the solutions architect do to meet this requirement?",
      ko: "회사는 최근 공격으로 공개 웹 애플리케이션의 보안을 우려합니다. 애플리케이션은 ALB를 사용하며 DDoS 공격 위험을 줄여야 합니다.\n어떤 조치를 해야 합니까?"
    },
    options: [
      { k: "A", en: "Add an Amazon Inspector agent to the ALB.", ko: "ALB에 Amazon Inspector 에이전트를 추가합니다." },
      { k: "B", en: "Configure Amazon Macie to prevent attacks.", ko: "Amazon Macie를 구성해 공격을 방지합니다." },
      { k: "C", en: "Enable AWS Shield Advanced to prevent attacks.", ko: "AWS Shield Advanced를 활성화합니다." },
      { k: "D", en: "Configure Amazon GuardDuty to monitor the ALB.", ko: "ALB를 모니터링하도록 GuardDuty를 구성합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "Shield Advanced는 ALB를 포함한 보호 리소스에 강화된 DDoS 탐지와 완화 및 대응 지원을 제공합니다.", en: "Shield Advanced provides enhanced DDoS detection, mitigation, and response support for protected resources including ALBs." },
    why_wrong: {
      A: { ko: "Inspector는 취약점 평가 서비스이며 ALB에 에이전트를 설치하지 않습니다.", en: "Inspector assesses vulnerabilities and does not install an agent on an ALB." },
      B: { ko: "Macie는 S3의 민감한 데이터 탐지 서비스입니다.", en: "Macie discovers sensitive data in S3." },
      D: { ko: "GuardDuty는 위협 탐지 서비스이며 DDoS 완화 서비스가 아닙니다.", en: "GuardDuty detects threats but does not mitigate DDoS attacks." }
    }
  }
  ,{
    id: "exam4-170", number: 170, tags: ["AWS WAF", "Geo Match", "ALB"],
    question: {
      en: "A company's web application is running on Amazon EC2 instances behind an Application Load Balancer. The company recently changed its policy, which now requires the application to be accessed from one specific country only.\nWhich configuration will meet this requirement?",
      ko: "회사의 웹 애플리케이션은 ALB 뒤의 EC2에서 실행됩니다. 정책 변경으로 특정 국가 한 곳에서만 애플리케이션에 접근할 수 있어야 합니다.\n어떤 구성이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Configure the security group for the EC2 instances.", ko: "EC2 인스턴스의 보안 그룹을 구성합니다." },
      { k: "B", en: "Configure the security group on the Application Load Balancer.", ko: "ALB의 보안 그룹을 구성합니다." },
      { k: "C", en: "Configure AWS WAF on the Application Load Balancer in a VPC.", ko: "VPC의 ALB에 AWS WAF를 구성합니다." },
      { k: "D", en: "Configure the network ACL for the subnet that contains the EC2 instances.", ko: "EC2가 있는 서브넷의 네트워크 ACL을 구성합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "ALB에 연결한 AWS WAF 웹 ACL의 지리적 일치 규칙으로 특정 국가만 허용하고 나머지를 차단할 수 있습니다.", en: "A WAF web ACL associated with the ALB can use a geographic match rule to allow only the specified country." },
    why_wrong: {
      A: { ko: "인스턴스 보안 그룹은 국가 조건을 지원하지 않습니다.", en: "Instance security groups do not support country-based conditions." },
      B: { ko: "ALB 보안 그룹은 국가 기반 필터를 제공하지 않습니다.", en: "ALB security groups do not provide geographic matching." },
      D: { ko: "네트워크 ACL도 국가 기반 규칙을 지원하지 않습니다.", en: "Network ACLs do not support geographic matching." }
    }
  }
  ,{
    id: "exam4-171", number: 171, tags: ["API Gateway", "Lambda", "Serverless", "Elasticity"],
    question: { en: "A company provides an API to its users that automates inquiries for tax computations based on item prices. The company experiences a larger number of inquiries during the holiday season only that cause slower response times. A solutions architect needs to design a solution that is scalable and elastic.\nWhat should the solutions architect do to accomplish this?", ko: "회사는 품목 가격에 따른 세금 계산 조회를 자동화하는 API를 제공합니다. 연말연시에만 조회가 급증해 응답이 느려집니다. 확장 가능하고 탄력적인 솔루션이 필요합니다.\n어떤 조치를 해야 합니까?" },
    options: [
      { k: "A", en: "Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations when the API request is made.", ko: "EC2 한 대에서 API와 계산을 실행합니다." },
      { k: "B", en: "Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names to AWS Lambda for tax computations.", ko: "API Gateway REST API가 품목명을 받아 Lambda에 전달해 세금을 계산합니다." },
      { k: "C", en: "Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will compute the tax on the received item names.", ko: "ALB 뒤의 EC2 두 대에서 세금을 계산합니다." },
      { k: "D", en: "Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance. API Gateway accepts and passes the item names to the EC2 instance for computations.", ko: "API Gateway가 EC2에서 호스팅되는 API로 품목명을 전달합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "API Gateway와 Lambda는 요청량에 따라 자동 확장되고 유휴 서버 비용과 용량 관리를 없앱니다.", en: "API Gateway and Lambda scale automatically with requests and avoid server capacity management." },
    why_wrong: {
      A: { ko: "EC2 한 대는 확장성과 고가용성이 없습니다.", en: "A single EC2 instance is neither elastic nor highly available." },
      C: { ko: "EC2 두 대만으로는 계절 급증에 자동 대응하지 못합니다.", en: "Two fixed EC2 instances do not scale automatically for seasonal spikes." },
      D: { ko: "API Gateway를 사용해도 단일 EC2 계산 계층은 병목으로 남습니다.", en: "The single EC2 compute tier remains a bottleneck behind API Gateway." }
    }
  }
  ,{
    id: "exam4-172", number: 172, tags: ["CloudFront", "Field-Level Encryption", "Security"],
    question: { en: "A solutions architect is creating a new Amazon CloudFront distribution for an application. Some of the information submitted by users is sensitive. The application uses HTTPS but needs another layer of security. The sensitive information should be protected throughout the entire application stack, and access to the information should be restricted to certain applications.\nWhich action should the solutions architect take?", ko: "CloudFront 배포를 생성 중이며 사용자가 제출하는 일부 정보가 민감합니다. HTTPS 외에 보안 계층을 추가해 전체 애플리케이션 스택에서 정보를 보호하고 특정 애플리케이션만 접근하게 해야 합니다.\n어떤 조치를 해야 합니까?" },
    options: [
      { k: "A", en: "Configure a CloudFront signed URL.", ko: "CloudFront 서명 URL을 구성합니다." },
      { k: "B", en: "Configure a CloudFront signed cookie.", ko: "CloudFront 서명 쿠키를 구성합니다." },
      { k: "C", en: "Configure a CloudFront field-level encryption profile.", ko: "CloudFront 필드 수준 암호화 프로필을 구성합니다." },
      { k: "D", en: "Configure CloudFront and set the Origin Protocol Policy setting to HTTPS Only for the Viewer Protocol Policy.", ko: "CloudFront의 오리진 프로토콜 정책을 HTTPS Only로 설정합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "필드 수준 암호화는 엣지에서 민감 필드를 공개 키로 암호화해 지정된 비공개 키 보유 애플리케이션만 복호화하게 합니다.", en: "Field-level encryption encrypts sensitive fields at the edge so only applications holding the private key can decrypt them." },
    why_wrong: {
      A: { ko: "서명 URL은 콘텐츠 접근을 제어하지만 제출 필드를 종단 간 암호화하지 않습니다.", en: "Signed URLs control content access but do not encrypt submitted fields end to end." },
      B: { ko: "서명 쿠키도 콘텐츠 접근 제어 수단입니다.", en: "Signed cookies are also a content access control mechanism." },
      D: { ko: "HTTPS는 전송 구간을 보호하지만 애플리케이션 계층 전체에서 필드를 암호화된 상태로 유지하지 않습니다.", en: "HTTPS protects transport but does not keep selected fields encrypted throughout the stack." }
    }
  }
  ,{
    id: "exam4-173", number: 173, tags: ["CloudFront", "S3", "Caching"],
    question: { en: "A gaming company hosts a browser-based application on AWS. The users of the application consume a large number of videos and images that are stored in Amazon S3. This content is the same for all users.\nThe application has increased in popularity, and millions of users worldwide accessing these media files. The company wants to provide the files to the users while reducing the load on the origin.\nWhich solution meets these requirements MOST cost-effectively?", ko: "게임 회사의 브라우저 애플리케이션은 S3의 동일한 영상과 이미지를 모든 사용자에게 제공합니다. 전 세계 수백만 사용자가 접근하며 오리진 부하를 줄여야 합니다.\n가장 비용 효율적인 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Deploy an AWS Global Accelerator accelerator in front of the web servers.", ko: "웹 서버 앞에 AWS Global Accelerator를 배포합니다." },
      { k: "B", en: "Deploy an Amazon CloudFront web distribution in front of the S3 bucket.", ko: "S3 버킷 앞에 CloudFront 배포를 구성합니다." },
      { k: "C", en: "Deploy an Amazon ElastiCache for Redis instance in front of the web servers.", ko: "웹 서버 앞에 ElastiCache for Redis를 배포합니다." },
      { k: "D", en: "Deploy an Amazon ElastiCache for Memcached instance in front of the web servers.", ko: "웹 서버 앞에 ElastiCache for Memcached를 배포합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "CloudFront는 S3 미디어를 전 세계 엣지에 캐시해 오리진 요청과 전송 지연을 줄입니다.", en: "CloudFront caches S3 media at global edge locations, reducing origin requests and latency." },
    why_wrong: {
      A: { ko: "Global Accelerator는 정적 S3 객체를 캐시하지 않습니다.", en: "Global Accelerator does not cache static S3 objects." },
      C: { ko: "Redis는 전 세계 콘텐츠 전송 CDN이 아닙니다.", en: "Redis is not a global content delivery network." },
      D: { ko: "Memcached도 글로벌 엣지 캐시가 아닙니다.", en: "Memcached is not a global edge cache." }
    }
  }
  ,{
    id: "exam4-174", number: 174, tags: ["Auto Scaling", "Multi-AZ", "ALB", "High Availability"],
    question: { en: "A company has a multi-tier application that runs six front-end web servers in an Amazon EC2 Auto Scaling group in a single Availability Zone behind an Application Load Balancer (ALB). A solutions architect needs to modify the infrastructure to be highly available without modifying the application.\nWhich architecture should the solutions architect choose that provides high availability?", ko: "회사는 단일 AZ의 EC2 Auto Scaling 그룹에서 프런트엔드 웹 서버 6대를 ALB 뒤에 운영합니다. 애플리케이션 변경 없이 인프라를 고가용성으로 바꿔야 합니다.\n어떤 아키텍처를 선택해야 합니까?" },
    options: [
      { k: "A", en: "Create an Auto Scaling group that uses three instances across each of two Regions.", ko: "두 리전에 각각 인스턴스 3개를 사용하는 Auto Scaling 그룹을 생성합니다." },
      { k: "B", en: "Modify the Auto Scaling group to use three instances across each of two Availability Zones.", ko: "Auto Scaling 그룹이 두 AZ에 각각 인스턴스 3개를 사용하도록 수정합니다." },
      { k: "C", en: "Create an Auto Scaling template that can be used to quickly create more instances in another Region.", ko: "다른 리전에 인스턴스를 빠르게 생성할 Auto Scaling 템플릿을 만듭니다." },
      { k: "D", en: "Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to the web tier.", ko: "ALB를 라운드 로빈 구성으로 변경합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Auto Scaling 그룹과 ALB를 두 AZ에 걸쳐 구성하면 한 AZ 장애 시 다른 AZ가 서비스를 계속 제공합니다.", en: "Spreading the Auto Scaling group and ALB targets across two Availability Zones preserves service during an AZ failure." },
    why_wrong: {
      A: { ko: "하나의 Auto Scaling 그룹은 여러 리전에 걸칠 수 없습니다.", en: "An Auto Scaling group cannot span Regions." },
      C: { ko: "템플릿만으로 자동 장애 조치가 제공되지 않습니다.", en: "A template alone provides no automatic failover." },
      D: { ko: "ALB는 이미 트래픽을 분산하며 단일 AZ 장애 위험은 해결되지 않습니다.", en: "Changing balancing behavior does not remove the single-AZ failure risk." }
    }
  }
  ,{
    id: "exam4-175", number: 175, tags: ["RDS Proxy", "Lambda", "Aurora"],
    question: { en: "An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not process the orders of those customers.\nA solutions architect determined that the CPU utilization and memory utilization were high on the database because of a large number of open connections. The solutions architect needs to prevent the timeout errors while making the least possible changes to the application.\nWhich solution will meet these requirements?", ko: "전자상거래 주문 처리 애플리케이션은 API Gateway, Lambda, Aurora PostgreSQL을 사용합니다. 판매 행사 중 주문 급증으로 일부 요청이 시간 초과되었고, 많은 열린 연결 때문에 DB CPU와 메모리가 높았습니다. 애플리케이션 변경을 최소화하면서 오류를 방지해야 합니다.\n어떤 솔루션이 적합합니까?" },
    options: [
      { k: "A", en: "Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in multiple AWS Regions.", ko: "Lambda 프로비저닝된 동시성을 구성하고 DB를 글로벌 데이터베이스로 변경합니다." },
      { k: "B", en: "Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy endpoint instead of the database endpoint.", ko: "RDS Proxy를 생성하고 Lambda가 DB 엔드포인트 대신 프록시 엔드포인트를 사용하게 합니다." },
      { k: "C", en: "Create a read replica for the database in a different AWS Region. Use query string parameters in API Gateway to route traffic to the read replica.", ko: "다른 리전에 읽기 전용 복제본을 만들고 API Gateway 쿼리 문자열로 라우팅합니다." },
      { k: "D", en: "Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Modify the Lambda function to use the DynamoDB table.", ko: "DMS로 Aurora 데이터를 DynamoDB로 이전하고 Lambda를 수정합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "RDS Proxy는 Lambda의 데이터베이스 연결을 풀링하고 재사용해 연결 급증에 따른 CPU·메모리 부하와 시간 초과를 줄입니다.", en: "RDS Proxy pools and reuses Lambda database connections, reducing connection spikes, database resource usage, and timeouts." },
    why_wrong: {
      A: { ko: "프로비저닝된 동시성은 DB 연결 수 문제를 해결하지 않습니다.", en: "Provisioned concurrency does not solve excessive database connections." },
      C: { ko: "주문 쓰기를 읽기 전용 복제본으로 보낼 수 없습니다.", en: "Order writes cannot be routed to a read replica." },
      D: { ko: "데이터 모델과 코드를 크게 변경해야 합니다.", en: "Migrating to DynamoDB requires substantial data model and code changes." }
    }
  }
  ,{
    id: "exam4-176", number: 176, tags: ["DynamoDB", "VPC Endpoint", "Private Connectivity"],
    question: { en: "An application runs on Amazon EC2 instances in private subnets. The application needs to access an Amazon DynamoDB table.\nWhat is the MOST secure way to access the table while ensuring that the traffic does not leave the AWS network?", ko: "프라이빗 서브넷의 EC2 애플리케이션이 DynamoDB 테이블에 접근해야 합니다.\n트래픽이 AWS 네트워크를 벗어나지 않게 하는 가장 안전한 방법은 무엇입니까?" },
    options: [
      { k: "A", en: "Use a VPC endpoint for DynamoDB.", ko: "DynamoDB용 VPC 엔드포인트를 사용합니다." },
      { k: "B", en: "Use a NAT gateway in a public subnet.", ko: "퍼블릭 서브넷의 NAT 게이트웨이를 사용합니다." },
      { k: "C", en: "Use a NAT instance in a private subnet.", ko: "프라이빗 서브넷의 NAT 인스턴스를 사용합니다." },
      { k: "D", en: "Use the internet gateway attached to the VPC.", ko: "VPC의 인터넷 게이트웨이를 사용합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "DynamoDB 게이트웨이 VPC 엔드포인트는 인터넷 게이트웨이나 NAT 없이 AWS 네트워크 내에서 비공개 접근을 제공합니다.", en: "A DynamoDB gateway VPC endpoint provides private access over the AWS network without an internet gateway or NAT." },
    why_wrong: {
      B: { ko: "NAT 게이트웨이는 공개 DynamoDB 엔드포인트 경로를 사용합니다.", en: "A NAT gateway uses the public DynamoDB endpoint path." },
      C: { ko: "프라이빗 서브넷의 NAT 인스턴스는 인터넷 경로를 제공할 수 없고 관리 부담도 있습니다.", en: "A NAT instance in a private subnet cannot provide the required internet path and adds management." },
      D: { ko: "프라이빗 서브넷 인스턴스는 인터넷 게이트웨이로 직접 통신할 수 없습니다.", en: "Instances in private subnets cannot communicate directly through an internet gateway." }
    }
  }
  ,{
    id: "exam4-177", number: 177, tags: ["DynamoDB", "DAX", "Caching"],
    question: { en: "An entertainment company is using Amazon DynamoDB to store media metadata. The application is read intensive and experiencing delays. The company does not have staff to handle additional operational overhead and needs to improve the performance efficiency of DynamoDB without reconfiguring the application.\nWhat should a solutions architect recommend to meet this requirement?", ko: "엔터테인먼트 회사는 DynamoDB에 미디어 메타데이터를 저장합니다. 읽기 집약적 애플리케이션에서 지연이 발생하며 운영 인력 추가나 큰 재구성 없이 성능을 높여야 합니다.\n무엇을 권장해야 합니까?" },
    options: [
      { k: "A", en: "Use Amazon ElastiCache for Redis.", ko: "ElastiCache for Redis를 사용합니다." },
      { k: "B", en: "Use Amazon DynamoDB Accelerator (DAX).", ko: "DynamoDB Accelerator(DAX)를 사용합니다." },
      { k: "C", en: "Replicate data by using DynamoDB global tables.", ko: "DynamoDB 글로벌 테이블로 데이터를 복제합니다." },
      { k: "D", en: "Use Amazon ElastiCache for Memcached with Auto Discovery enabled.", ko: "Auto Discovery가 활성화된 ElastiCache for Memcached를 사용합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "DAX는 DynamoDB 호환 완전관리형 인메모리 캐시로 읽기 지연을 마이크로초 수준으로 줄이며 애플리케이션 변경이 적습니다.", en: "DAX is a fully managed DynamoDB-compatible in-memory cache that reduces read latency to microseconds with minimal application change." },
    why_wrong: {
      A: { ko: "Redis 캐싱은 별도의 캐시 로직과 동기화를 구현해야 합니다.", en: "Redis requires custom cache logic and synchronization." },
      C: { ko: "글로벌 테이블은 다중 리전 복제용이며 로컬 읽기 캐시가 아닙니다.", en: "Global tables provide multi-Region replication, not a local read cache." },
      D: { ko: "Memcached도 애플리케이션 캐시 로직을 직접 구현해야 합니다.", en: "Memcached also requires custom application caching logic." }
    }
  }
  ,{
    id: "exam4-178", number: 178, tags: ["AWS Backup", "Cross-Region Backup", "EC2", "RDS"],
    question: { en: "A company's infrastructure consists of Amazon EC2 instances and an Amazon RDS DB instance in a single AWS Region. The company wants to back up its data in a separate Region.\nWhich solution will meet these requirements with the LEAST operational overhead?", ko: "회사는 단일 리전에서 EC2와 RDS DB 인스턴스를 운영하며 데이터를 별도 리전에 백업하려 합니다.\n운영 부담이 가장 적은 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS Backup to copy EC2 backups and RDS backups to the separate Region.", ko: "AWS Backup으로 EC2와 RDS 백업을 별도 리전에 복사합니다." },
      { k: "B", en: "Use Amazon Data Lifecycle Manager (Amazon DLM) to copy EC2 backups and RDS backups to the separate Region.", ko: "Amazon DLM으로 EC2와 RDS 백업을 별도 리전에 복사합니다." },
      { k: "C", en: "Create Amazon Machine Images (AMIs) of the EC2 instances. Copy the AMIs to the separate Region. Create a read replica for the RDS DB instance in the separate Region.", ko: "EC2 AMI를 생성해 복사하고 별도 리전에 RDS 읽기 전용 복제본을 생성합니다." },
      { k: "D", en: "Create Amazon Elastic Block Store (Amazon EBS) snapshots. Copy the EBS snapshots to the separate Region. Create RDS snapshots. Export the RDS snapshots to Amazon S3. Configure S3 Cross-Region Replication (CRR) to the separate Region.", ko: "EBS 스냅샷을 복사하고 RDS 스냅샷을 S3로 내보낸 뒤 CRR을 구성합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "AWS Backup은 EC2와 RDS를 한 정책으로 중앙 관리하고 리전 간 백업 복사를 자동화합니다.", en: "AWS Backup centrally manages EC2 and RDS backups and automates cross-Region copies with one policy." },
    why_wrong: {
      B: { ko: "DLM은 RDS 백업을 관리하지 않습니다.", en: "DLM does not manage RDS backups." },
      C: { ko: "서비스별 수동 구성과 상시 읽기 복제본 비용이 발생합니다.", en: "This requires service-specific management and a continuously running read replica." },
      D: { ko: "여러 수동 단계가 필요하며 스냅샷 내보내기는 RDS 복원용 백업 복사와 다릅니다.", en: "This has many manual steps, and an exported snapshot is not a native RDS restore copy." }
    }
  }
  ,{
    id: "exam4-179", number: 179, tags: ["Parameter Store", "IAM Role", "KMS", "EC2"],
    question: { en: "A solutions architect needs to securely store a database user name and password that an application uses to access an Amazon RDS DB instance. The application that accesses the database runs on an Amazon EC2 instance. The solutions architect wants to create a secure parameter in AWS Systems Manager Parameter Store.\nWhat should the solutions architect do to meet this requirement?", ko: "EC2 애플리케이션이 RDS에 사용할 사용자 이름과 암호를 Systems Manager Parameter Store의 보안 파라미터로 저장하려 합니다.\n어떤 조치를 해야 합니까?" },
    options: [
      { k: "A", en: "Create an IAM role that has read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM role to the EC2 instance.", ko: "파라미터 읽기와 KMS 복호화 권한이 있는 IAM 역할을 생성해 EC2에 연결합니다." },
      { k: "B", en: "Create an IAM policy that allows read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM policy to the EC2 instance.", ko: "파라미터 읽기와 KMS 복호화 IAM 정책을 EC2에 직접 할당합니다." },
      { k: "C", en: "Create an IAM trust relationship between the Parameter Store parameter and the EC2 instance. Specify Amazon RDS as a principal in the trust policy.", ko: "파라미터와 EC2 간 신뢰 관계를 만들고 RDS를 보안 주체로 지정합니다." },
      { k: "D", en: "Create an IAM trust relationship between the DB instance and the EC2 instance. Specify Systems Manager as a principal in the trust policy.", ko: "DB와 EC2 간 신뢰 관계를 만들고 Systems Manager를 보안 주체로 지정합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "EC2 인스턴스 프로파일의 IAM 역할에 최소한의 SSM 파라미터 읽기와 KMS 복호화 권한을 부여하면 임시 자격 증명으로 안전하게 접근합니다.", en: "An IAM role attached through an EC2 instance profile supplies temporary credentials with least-privilege parameter read and KMS decrypt permissions." },
    why_wrong: {
      B: { ko: "IAM 정책은 EC2에 직접 연결할 수 없으며 역할에 연결해야 합니다.", en: "An IAM policy cannot be attached directly to an EC2 instance; it must be attached to a role." },
      C: { ko: "파라미터는 신뢰 정책을 가지지 않으며 RDS가 호출 주체가 아닙니다.", en: "A parameter has no trust policy, and RDS is not the calling principal." },
      D: { ko: "DB 인스턴스와 EC2 사이에 이런 IAM 신뢰 관계를 만들지 않습니다.", en: "This IAM trust relationship is not created between RDS and EC2." }
    }
  }
  ,{
    id: "exam4-180", number: 180, tags: ["AWS WAF", "Shield Advanced", "API Gateway", "NLB"],
    question: { en: "A company is designing a cloud communications platform that is driven by APIs. The application is hosted on Amazon EC2 instances behind a Network Load Balancer (NLB). The company uses Amazon API Gateway to provide external users with access to the application through APIs. The company wants to protect the platform against web exploits like SQL injection and also wants to detect and mitigate large, sophisticated DDoS attacks.\nWhich combination of solutions provides the MOST protection? (Choose two.)", ko: "회사는 NLB 뒤 EC2에서 API 기반 통신 플랫폼을 운영하고 API Gateway로 외부 접근을 제공합니다. SQL 삽입 같은 웹 공격과 대규모 정교한 DDoS 공격을 탐지·완화해야 합니다.\n가장 강력한 보호를 제공하는 조합은 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Use AWS WAF to protect the NLB.", ko: "AWS WAF로 NLB를 보호합니다." },
      { k: "B", en: "Use AWS Shield Advanced with the NLB.", ko: "NLB에 AWS Shield Advanced를 사용합니다." },
      { k: "C", en: "Use AWS WAF to protect Amazon API Gateway.", ko: "AWS WAF로 API Gateway를 보호합니다." },
      { k: "D", en: "Use Amazon GuardDuty with AWS Shield Standard", ko: "Amazon GuardDuty와 AWS Shield Standard를 사용합니다." },
      { k: "E", en: "Use AWS Shield Standard with Amazon API Gateway.", ko: "API Gateway에 AWS Shield Standard를 사용합니다." }
    ],
    answer: ["B", "C"],
    explanation: { ko: "API Gateway의 WAF가 SQL 삽입 등 계층 7 공격을 필터링하고, NLB의 Shield Advanced가 대규모 정교한 DDoS 공격에 대한 강화된 탐지와 완화를 제공합니다.", en: "WAF on API Gateway filters Layer 7 exploits such as SQL injection, while Shield Advanced on the NLB provides enhanced detection and mitigation for sophisticated DDoS attacks." },
    why_wrong: {
      A: { ko: "AWS WAF는 NLB에 직접 연결할 수 없습니다.", en: "AWS WAF cannot be associated directly with an NLB." },
      D: { ko: "GuardDuty는 위협 탐지 서비스이며 웹 요청 필터링이나 DDoS 완화를 대신하지 않습니다.", en: "GuardDuty is threat detection and does not replace web filtering or DDoS mitigation." },
      E: { ko: "Shield Standard는 기본 보호이며 정교한 대규모 공격에 대한 Shield Advanced 수준의 기능이 없습니다.", en: "Shield Standard provides baseline protection without the enhanced capabilities of Shield Advanced." }
    }
  }
  ,{
    id: "exam4-181", number: 181, tags: ["SQS", "Microservices", "ECS", "Decoupling"],
    question: { en: "A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way that the company can scale the application to meet increased demand is to increase the size of the instances.\nThe company's developers have decided to rewrite the application to use a microservices architecture on Amazon Elastic Container Service (Amazon ECS).\nWhat should a solutions architect recommend for communication between the microservices?", ko: "회사는 EC2에서 순차적으로 데이터를 처리하는 모놀리식 애플리케이션을 운영하며 결과 순서는 중요하지 않습니다. 이를 ECS의 마이크로서비스 아키텍처로 재작성하려 합니다.\n마이크로서비스 간 통신에 무엇을 권장해야 합니까?" },
    options: [
      { k: "A", en: "Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the data consumers to process data from the queue.", ko: "SQS 대기열을 만들고 생산자는 데이터를 보내며 소비자는 대기열에서 처리하게 합니다." },
      { k: "B", en: "Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and publish notifications to the topic. Add code to the data consumers to subscribe to the topic.", ko: "SNS 주제를 만들고 생산자는 게시하며 소비자는 구독하게 합니다." },
      { k: "C", en: "Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda function with a data object. Add code to the data consumers to receive a data object that is passed from the Lambda function.", ko: "메시지를 전달할 Lambda 함수를 만들고 생산자와 소비자를 연결합니다." },
      { k: "D", en: "Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table entries and retrieve the data.", ko: "DynamoDB 테이블과 Streams를 사용해 생산자와 소비자를 연결합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "SQS는 생산자와 소비자를 분리하고 메시지를 내구성 있게 버퍼링해 소비자 서비스를 독립적으로 수평 확장하게 합니다.", en: "SQS decouples producers and consumers and durably buffers work so consumer services can scale independently." },
    why_wrong: {
      B: { ko: "SNS는 푸시 팬아웃용이며 작업이 처리될 때까지 보존하는 소비자 대기열이 아닙니다.", en: "SNS is push fanout, not a durable work queue for consumers." },
      C: { ko: "Lambda를 메시지 중계기로 직접 호출하면 결합도와 실패 처리 부담이 커집니다.", en: "Using Lambda as a message relay increases coupling and failure-handling work." },
      D: { ko: "DynamoDB Streams는 데이터 변경 캡처용이며 일반 작업 대기열보다 복잡합니다.", en: "DynamoDB Streams is change data capture and is more complex than a work queue." }
    }
  }
  ,{
    id: "exam4-182", number: 182, tags: ["RDS", "MySQL", "Multi-AZ", "High Availability"],
    question: { en: "A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes.\nWhich solution meets these requirements?", ko: "회사는 온프레미스 MySQL을 AWS로 이전하면서 장애로 인한 데이터 손실을 최소화하고 모든 트랜잭션을 최소 두 노드에 저장하려 합니다.\n어떤 솔루션이 요구사항을 충족합니까?" },
    options: [
      { k: "A", en: "Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.", ko: "세 AZ의 세 노드로 동기 복제하는 RDS DB를 생성합니다." },
      { k: "B", en: "Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data.", ko: "Multi-AZ를 활성화한 RDS for MySQL로 데이터를 동기 복제합니다." },
      { k: "C", en: "Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that synchronously replicates the data.", ko: "다른 리전에 동기 복제하는 읽기 전용 복제본을 생성합니다." },
      { k: "D", en: "Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the data to an Amazon RDS MySQL DB instance.", ko: "EC2 MySQL이 Lambda를 호출해 RDS MySQL로 동기 복제하게 합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "RDS Multi-AZ는 기본 DB의 트랜잭션을 다른 AZ의 대기 인스턴스로 동기 복제하고 자동 장애 조치를 제공합니다.", en: "RDS Multi-AZ synchronously replicates transactions to a standby in another AZ and provides automatic failover." },
    why_wrong: {
      A: { ko: "일반 RDS Multi-AZ DB 인스턴스는 이 선택지처럼 세 노드 구성을 직접 지정하지 않습니다.", en: "A standard RDS Multi-AZ DB instance is not configured as three user-specified synchronous nodes." },
      C: { ko: "교차 리전 읽기 복제본은 비동기식입니다.", en: "Cross-Region read replicas replicate asynchronously." },
      D: { ko: "Lambda 기반 자체 복제는 신뢰성 있는 동기 복제 방식이 아닙니다.", en: "Custom Lambda replication is not a reliable synchronous database solution." }
    }
  }
  ,{
    id: "exam4-183", number: 183, tags: ["S3", "API Gateway", "Lambda", "DynamoDB", "CloudFront"],
    question: { en: "A company is building a new dynamic ordering website. The company wants to minimize server maintenance and patching. The website must be highly available and must scale read and write capacity as quickly as possible to meet changes in user demand.\nWhich solution will meet these requirements?", ko: "회사는 서버 유지관리와 패치를 최소화하면서 고가용성을 제공하고 수요 변화에 맞춰 읽기·쓰기 용량을 빠르게 확장하는 동적 주문 웹사이트를 구축합니다.\n어떤 솔루션이 적합합니까?" },
    options: [
      { k: "A", en: "Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver the website content.", ko: "정적 콘텐츠는 S3, 동적 콘텐츠는 API Gateway와 Lambda, DB는 온디맨드 DynamoDB를 사용하고 CloudFront로 제공합니다." },
      { k: "B", en: "Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the website content.", ko: "정적 콘텐츠는 S3, 동적 콘텐츠는 API Gateway와 Lambda, DB는 Aurora Auto Scaling을 사용합니다." },
      { k: "C", en: "Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write capacity for the database.", ko: "모든 콘텐츠를 Auto Scaling EC2와 ALB에서 제공하고 프로비저닝된 DynamoDB를 사용합니다." },
      { k: "D", en: "Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling for the database.", ko: "모든 콘텐츠를 Auto Scaling EC2와 ALB에서 제공하고 Aurora Auto Scaling을 사용합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "완전관리형 서버리스 구성과 DynamoDB 온디맨드 용량은 패치 부담 없이 읽기·쓰기 수요에 즉시 대응합니다.", en: "This managed serverless stack minimizes patching, and DynamoDB on-demand rapidly adapts read and write capacity." },
    why_wrong: {
      B: { ko: "Aurora Auto Scaling은 읽기 복제본을 조정하며 쓰기 용량을 자동 확장하지 않습니다.", en: "Aurora Auto Scaling scales readers, not writer capacity." },
      C: { ko: "EC2 패치가 필요하고 프로비저닝 용량은 급격한 변화에 덜 적합합니다.", en: "EC2 requires patching, and provisioned capacity is less responsive to sudden change." },
      D: { ko: "EC2와 Aurora는 서버리스 조합보다 유지관리 부담이 큽니다.", en: "EC2 and Aurora require more maintenance than the serverless option." }
    }
  }
  ,{
    id: "exam4-184", number: 184, tags: ["Lambda", "VPC", "Direct Connect", "Security Group"],
    question: { en: "A company has an AWS account used for software engineering. The AWS account has access to the company's on-premises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual private gateway.\nA development team recently created an AWS Lambda function through the console. The development team needs to allow the function to access a database that runs in a private subnet in the company's data center.\nWhich solution will meet these requirements?", ko: "AWS 계정은 이중 Direct Connect를 통해 온프레미스 데이터 센터에 연결되며 모든 비 VPC 트래픽은 가상 프라이빗 게이트웨이로 라우팅됩니다. 새 Lambda 함수가 데이터 센터의 프라이빗 서브넷 DB에 접근해야 합니다.\n어떤 솔루션이 적합합니까?" },
    options: [
      { k: "A", en: "Configure the Lambda function to run in the VPC with the appropriate security group.", ko: "Lambda가 적절한 보안 그룹과 함께 VPC에서 실행되도록 구성합니다." },
      { k: "B", en: "Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through the VPN.", ko: "데이터 센터로 VPN을 추가하고 Lambda 트래픽을 VPN으로 라우팅합니다." },
      { k: "C", en: "Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.", ko: "Lambda가 Direct Connect로 접근하도록 VPC 라우팅 테이블을 갱신합니다." },
      { k: "D", en: "Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address without an elastic network interface.", ko: "탄력적 IP를 만들고 ENI 없이 Lambda 트래픽을 전송합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "Lambda를 VPC 서브넷과 보안 그룹에 연결하면 ENI를 통해 기존 Direct Connect 경로로 온프레미스 사설 DB에 접근합니다.", en: "Attaching Lambda to VPC subnets and a security group lets its ENIs use the existing Direct Connect route to the private database." },
    why_wrong: {
      B: { ko: "이미 이중 Direct Connect가 있어 VPN 추가가 불필요합니다.", en: "A VPN is unnecessary because redundant Direct Connect already exists." },
      C: { ko: "라우팅은 이미 비 VPC 트래픽을 가상 프라이빗 게이트웨이로 보냅니다. Lambda의 VPC 연결이 빠졌습니다.", en: "The route already points off-VPC traffic to the gateway; the missing step is VPC attachment for Lambda." },
      D: { ko: "VPC 연결 Lambda는 ENI를 사용하며 EIP 직접 연결 방식은 지원되지 않습니다.", en: "Lambda cannot use an Elastic IP directly without a VPC network interface." }
    }
  }
  ,{
    id: "exam4-185", number: 185, tags: ["ECS", "Task Role", "IAM", "S3"],
    question: { en: "A company runs an application using Amazon ECS. The application creates resized versions of an original image and then makes Amazon S3 API calls to store the resized images in Amazon S3.\nHow can a solutions architect ensure that the application has permission to access Amazon S3?", ko: "ECS 애플리케이션이 이미지 크기를 조정한 뒤 S3 API로 결과를 저장합니다.\n애플리케이션에 S3 접근 권한을 어떻게 부여해야 합니까?" },
    options: [
      { k: "A", en: "Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container.", ko: "IAM의 S3 역할을 수정하고 컨테이너를 다시 시작합니다." },
      { k: "B", en: "Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition.", ko: "S3 권한의 IAM 역할을 만들고 작업 정의의 taskRoleArn으로 지정합니다." },
      { k: "C", en: "Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch configuration used by the ECS cluster.", ko: "ECS에서 S3 접근을 허용하는 보안 그룹을 만들고 시작 구성을 갱신합니다." },
      { k: "D", en: "Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster while logged in as this account.", ko: "S3 권한 IAM 사용자를 만들고 해당 계정으로 ECS EC2를 다시 시작합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "ECS 작업 역할을 taskRoleArn으로 지정하면 컨테이너가 장기 키 없이 임시 자격 증명으로 S3에 접근합니다.", en: "An ECS task role specified by taskRoleArn gives the container temporary S3 credentials without long-lived keys." },
    why_wrong: {
      A: { ko: "S3 역할이라는 별도 리소스는 없고 작업 역할을 사용해야 합니다.", en: "There is no generic S3 role; permissions belong on the ECS task role." },
      C: { ko: "보안 그룹은 API 권한을 부여하지 않습니다.", en: "Security groups do not grant API permissions." },
      D: { ko: "IAM 사용자 로그인 상태는 실행 중 인스턴스나 작업 자격 증명이 되지 않습니다.", en: "An IAM user's console session does not become task credentials." }
    }
  }
  ,{
    id: "exam4-186", number: 186, tags: ["FSx for Windows", "SMB", "Multi-AZ"],
    question: { en: "A company has a Windows-based application that must be migrated to AWS. The application requires the use of a shared Windows file system attached to multiple Amazon EC2 Windows instances that are deployed across multiple Availability Zones.\nWhat should a solutions architect do to meet this requirement?", ko: "여러 AZ의 Windows EC2 인스턴스가 함께 사용하는 공유 Windows 파일 시스템이 필요한 애플리케이션을 AWS로 이전합니다.\n어떤 조치를 해야 합니까?" },
    options: [
      { k: "A", en: "Configure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows instance.", ko: "Storage Gateway 볼륨 게이트웨이를 각 Windows 인스턴스에 마운트합니다." },
      { k: "B", en: "Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows instance.", ko: "FSx for Windows File Server를 각 Windows 인스턴스에 마운트합니다." },
      { k: "C", en: "Configure a file system by using Amazon Elastic File System (Amazon EFS). Mount the EFS file system to each Windows instance.", ko: "EFS 파일 시스템을 각 Windows 인스턴스에 마운트합니다." },
      { k: "D", en: "Configure an Amazon Elastic Block Store (Amazon EBS) volume with the required size. Attach each EC2 instance to the volume. Mount the file system within the volume to each Windows instance.", ko: "EBS 볼륨 하나를 각 Windows 인스턴스에 연결해 마운트합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "FSx for Windows File Server는 Windows 네이티브 SMB 공유를 제공하며 여러 AZ의 Windows 인스턴스에서 접근할 수 있습니다.", en: "FSx for Windows File Server provides a managed native SMB share accessible by Windows instances across AZs." },
    why_wrong: {
      A: { ko: "볼륨 게이트웨이는 여러 EC2가 공유하는 Windows 파일 서버가 아닙니다.", en: "Volume Gateway is not a shared Windows file server for multiple EC2 instances." },
      C: { ko: "EFS는 NFS 기반 Linux 파일 시스템입니다.", en: "EFS is an NFS file system primarily for Linux clients." },
      D: { ko: "일반 EBS 볼륨은 여러 AZ의 인스턴스에 공유 연결할 수 없습니다.", en: "A standard EBS volume cannot be shared across instances in multiple AZs." }
    }
  }
  ,{
    id: "exam4-187", number: 187, tags: ["RDS", "Multi-AZ", "ECS", "Fargate"],
    question: { en: "A company is developing an ecommerce application that will consist of a load-balanced front end, a container-based application, and a relational database. A solutions architect needs to create a highly available solution that operates with as little manual intervention as possible.\nWhich solutions meet these requirements? (Choose two.)", ko: "회사는 로드 밸런싱 프런트엔드, 컨테이너 애플리케이션, 관계형 DB로 구성된 전자상거래 서비스를 개발합니다. 최소한의 수동 개입으로 고가용성을 제공해야 합니다.\n어떤 솔루션을 선택해야 합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Create an Amazon RDS DB instance in Multi-AZ mode.", ko: "Multi-AZ 모드의 RDS DB 인스턴스를 생성합니다." },
      { k: "B", en: "Create an Amazon RDS DB instance and one or more replicas in another Availability Zone.", ko: "RDS DB와 다른 AZ의 복제본을 생성합니다." },
      { k: "C", en: "Create an Amazon EC2 instance-based Docker cluster to handle the dynamic application load.", ko: "EC2 기반 Docker 클러스터를 생성합니다." },
      { k: "D", en: "Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load.", ko: "Fargate 시작 유형의 ECS 클러스터를 생성합니다." },
      { k: "E", en: "Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to handle the dynamic application load.", ko: "EC2 시작 유형의 ECS 클러스터를 생성합니다." }
    ],
    answer: ["A", "D"],
    explanation: { ko: "RDS Multi-AZ는 자동 동기 복제와 장애 조치를 제공하고 ECS Fargate는 서버 관리 없이 컨테이너를 고가용성으로 실행합니다.", en: "RDS Multi-AZ provides synchronous standby failover, and ECS Fargate runs highly available containers without server management." },
    why_wrong: {
      B: { ko: "읽기 복제본은 자동 Multi-AZ 장애 조치 대기 인스턴스를 대신하지 않습니다.", en: "Read replicas do not replace an automatic Multi-AZ failover standby." },
      C: { ko: "자체 Docker 클러스터는 가장 많은 수동 관리가 필요합니다.", en: "A self-managed Docker cluster requires substantial manual administration." },
      E: { ko: "EC2 시작 유형은 호스트 패치와 용량 관리가 필요합니다.", en: "The EC2 launch type requires host patching and capacity management." }
    }
  }
  ,{
    id: "exam4-188", number: 188, tags: ["AWS Transfer Family", "SFTP", "S3"],
    question: { en: "A company uses Amazon S3 as its data lake. The company has a new partner that must use SFTP to upload data files. A solutions architect needs to implement a highly available SFTP solution that minimizes operational overhead.\nWhich solution will meet these requirements?", ko: "회사는 S3 데이터 레이크에 새 파트너가 SFTP로 파일을 업로드하도록 해야 합니다. 고가용성이며 운영 부담이 적은 SFTP 솔루션이 필요합니다.\n어떤 솔루션이 적합합니까?" },
    options: [
      { k: "A", en: "Use AWS Transfer Family to configure an SFTP-enabled server with a publicly accessible endpoint. Choose the S3 data lake as the destination.", ko: "AWS Transfer Family의 공개 SFTP 엔드포인트를 구성하고 S3 데이터 레이크를 대상으로 선택합니다." },
      { k: "B", en: "Use Amazon S3 File Gateway as an SFTP server. Expose the S3 File Gateway endpoint URL to the new partner. Share the S3 File Gateway endpoint with the new partner.", ko: "S3 File Gateway를 SFTP 서버로 사용합니다." },
      { k: "C", en: "Launch an Amazon EC2 instance in a private subnet in a VPC. Instruct the new partner to upload files to the EC2 instance by using a VPN. Run a cron job script, on the EC2 instance to upload files to the S3 data lake.", ko: "프라이빗 EC2에 VPN으로 업로드하게 하고 cron으로 S3에 복사합니다." },
      { k: "D", en: "Launch Amazon EC2 instances in a private subnet in a VPC. Place a Network Load Balancer (NLB) in front of the EC2 instances. Create an SFTP listener port for the NLB. Share the NLB hostname with the new partner. Run a cron job script on the EC2 instances to upload files to the S3 data lake.", ko: "여러 EC2 앞에 NLB를 두고 SFTP와 S3 복사 스크립트를 직접 운영합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "AWS Transfer Family는 S3에 직접 연결되는 완전관리형 고가용성 SFTP 엔드포인트를 제공합니다.", en: "AWS Transfer Family provides a fully managed, highly available SFTP endpoint backed directly by S3." },
    why_wrong: {
      B: { ko: "S3 File Gateway는 NFS/SMB를 제공하며 SFTP 서버가 아닙니다.", en: "S3 File Gateway provides NFS/SMB shares, not an SFTP server." },
      C: { ko: "단일 EC2는 고가용성이 아니고 직접 관리가 필요합니다.", en: "A single EC2 instance is not highly available and requires management." },
      D: { ko: "고가용성은 가능하지만 EC2, SFTP, 복사 작업을 직접 운영해야 합니다.", en: "This can be highly available but requires managing EC2, SFTP, and copy jobs." }
    }
  }
  ,{
    id: "exam4-189", number: 189, tags: ["S3 Object Lock", "Compliance Mode", "SSE-KMS", "Key Rotation"],
    question: { en: "A company needs to store contract documents. A contract lasts for 5 years. During the 5-year period, the company must ensure that the documents cannot be overwritten or deleted. The company needs to encrypt the documents at rest and rotate the encryption keys automatically every year.\nWhich combination of steps should a solutions architect take to meet these requirements with the LEAST operational overhead? (Choose two.)", ko: "계약 문서를 5년 동안 덮어쓰거나 삭제할 수 없게 저장해야 합니다. 저장 시 암호화하고 암호화 키를 매년 자동 교체해야 합니다.\n운영 부담이 가장 적은 조합은 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Store the documents in Amazon S3. Use S3 Object Lock in governance mode.", ko: "S3 Object Lock 거버넌스 모드를 사용합니다." },
      { k: "B", en: "Store the documents in Amazon S3. Use S3 Object Lock in compliance mode.", ko: "S3 Object Lock 규정 준수 모드를 사용합니다." },
      { k: "C", en: "Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure key rotation.", ko: "SSE-S3를 사용하고 키 교체를 구성합니다." },
      { k: "D", en: "Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys. Configure key rotation.", ko: "AWS KMS 고객 관리형 키의 서버 측 암호화를 사용하고 키 교체를 구성합니다." },
      { k: "E", en: "Use server-side encryption with AWS Key Management Service (AWS KMS) customer provided (imported) keys. Configure key rotation.", ko: "AWS KMS로 가져온 고객 제공 키를 사용하고 키 교체를 구성합니다." }
    ],
    answer: ["B", "D"],
    explanation: { ko: "Object Lock 규정 준수 모드는 보존 기간 중 어떤 사용자도 객체를 변경·삭제하지 못하게 합니다. KMS 고객 관리형 키는 자동 연간 교체를 지원합니다.", en: "Object Lock compliance mode prevents all overwrite or deletion during retention. A KMS customer managed key supports automatic annual rotation." },
    why_wrong: {
      A: { ko: "거버넌스 모드는 특별 권한이 있는 사용자가 보존을 우회할 수 있습니다.", en: "Governance mode can be bypassed by specially authorized users." },
      C: { ko: "SSE-S3 키 교체를 사용자가 매년 구성하는 선택지는 제공되지 않습니다.", en: "SSE-S3 does not expose customer-configured annual key rotation." },
      E: { ko: "가져온 키 재료는 KMS 자동 교체를 지원하지 않아 수동 운영이 필요합니다.", en: "Imported key material does not support KMS automatic rotation and requires manual work." }
    }
  }
  ,{
    id: "exam4-190", number: 190, tags: ["Elastic Beanstalk", "Blue-Green Deployment", "High Availability"],
    question: { en: "A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead.\nWhich solution will meet these requirements?", ko: "회사는 Java와 PHP 기반 웹 애플리케이션을 AWS로 이전합니다. 새 기능을 자주 테스트하면서 고가용성 관리형 환경과 최소 운영 부담이 필요합니다.\n어떤 솔루션이 적합합니까?" },
    options: [
      { k: "A", en: "Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content.", ko: "S3 정적 웹 호스팅과 Lambda로 모든 동적 콘텐츠를 처리합니다." },
      { k: "B", en: "Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing.", ko: "Elastic Beanstalk 환경에 배포하고 URL 교환으로 여러 환경 간 전환해 기능을 테스트합니다." },
      { k: "C", en: "Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website's availability.", ko: "Java와 PHP가 구성된 EC2, Auto Scaling, ALB를 직접 운영합니다." },
      { k: "D", en: "Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing.", ko: "애플리케이션을 컨테이너화해 EC2에 배포하고 Load Balancer Controller로 테스트 트래픽을 라우팅합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Elastic Beanstalk는 Java와 PHP 환경의 배포, Auto Scaling, 로드 밸런싱을 관리하며 URL 교환으로 블루/그린 기능 테스트와 전환을 지원합니다.", en: "Elastic Beanstalk manages deployment, scaling, and load balancing for Java and PHP, while URL swapping supports blue/green testing and cutover." },
    why_wrong: {
      A: { ko: "기존 Java/PHP 애플리케이션을 Lambda로 재작성해야 합니다.", en: "This requires rewriting the Java/PHP application for Lambda." },
      C: { ko: "EC2 런타임과 배포를 직접 관리해야 합니다.", en: "This requires managing EC2 runtimes and deployments." },
      D: { ko: "컨테이너화와 EC2 클러스터 운영으로 변경과 부담이 더 큽니다.", en: "Containerization and EC2 cluster operations add change and overhead." }
    }
  }
  ,{
    id: "exam4-191", number: 191, tags: ["RDS", "Read Replica", "Read Scaling"],
    question: { en: "A company has an ordering application that stores customer information in Amazon RDS for MySQL. During regular business hours, employees run one-time queries for reporting purposes. Timeouts are occurring during order processing because the reporting queries are taking a long time to run. The company needs to eliminate the timeouts without preventing employees from performing queries.\nWhat should a solutions architect do to meet these requirements?", ko: "RDS for MySQL 주문 애플리케이션에서 업무 시간의 보고 쿼리가 오래 실행되어 주문 처리가 시간 초과됩니다. 직원의 쿼리를 막지 않고 문제를 해결해야 합니다.\n어떤 조치를 해야 합니까?" },
    options: [
      { k: "A", en: "Create a read replica. Move reporting queries to the read replica.", ko: "읽기 전용 복제본을 만들고 보고 쿼리를 옮깁니다." },
      { k: "B", en: "Create a read replica. Distribute the ordering application to the primary DB instance and the read replica.", ko: "주문 애플리케이션을 기본 DB와 읽기 복제본에 분산합니다." },
      { k: "C", en: "Migrate the ordering application to Amazon DynamoDB with on-demand capacity.", ko: "애플리케이션을 온디맨드 DynamoDB로 이전합니다." },
      { k: "D", en: "Schedule the reporting queries for non-peak hours.", ko: "보고 쿼리를 비혼잡 시간으로 예약합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "보고 읽기를 복제본으로 분리하면 기본 DB의 주문 트랜잭션과 경합하지 않습니다.", en: "Moving reporting reads to a read replica removes their load from the primary order-processing database." },
    why_wrong: {
      B: { ko: "읽기 복제본은 주문 쓰기를 처리할 수 없습니다.", en: "A read replica cannot process order writes." },
      C: { ko: "불필요한 대규모 재설계가 필요합니다.", en: "This requires an unnecessary major redesign." },
      D: { ko: "직원이 업무 시간에 쿼리해야 하는 요구를 충족하지 않습니다.", en: "This prevents employees from querying when needed during business hours." }
    }
  }
  ,{
    id: "exam4-192", number: 192, tags: ["Textract", "Comprehend Medical", "S3", "Athena"],
    question: { en: "A hospital wants to create digital copies for its large collection of historical written records. The hospital will continue to add hundreds of new documents each day. The hospital's data team will scan the documents and will upload the documents to the AWS Cloud.\nA solutions architect must implement a solution to analyze the documents, extract the medical information, and store the documents so that an application can run SQL queries on the data. The solution must maximize scalability and operational efficiency.\nWhich combination of steps should the solutions architect take to meet these requirements? (Choose two.)", ko: "병원은 매일 수백 건씩 추가되는 역사적 기록을 스캔해 AWS에 올리고, 문서에서 의료 정보를 추출한 뒤 SQL로 조회하려 합니다. 확장성과 운영 효율을 극대화해야 합니다.\n어떤 조합이 적합합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Write the document information to an Amazon EC2 instance that runs a MySQL database.", ko: "EC2의 MySQL에 문서 정보를 저장합니다." },
      { k: "B", en: "Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data.", ko: "문서 정보를 S3에 저장하고 Athena로 조회합니다." },
      { k: "C", en: "Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the scanned files and extracts the medical information.", ko: "Auto Scaling EC2의 사용자 지정 애플리케이션으로 의료 정보를 추출합니다." },
      { k: "D", en: "Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.", ko: "Lambda에서 Rekognition과 Transcribe Medical로 문서를 처리합니다." },
      { k: "E", en: "Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant medical information from the text.", ko: "업로드 시 Lambda를 실행하고 Textract로 텍스트를 추출한 뒤 Comprehend Medical로 의료 정보를 추출합니다." }
    ],
    answer: ["B", "E"],
    explanation: { ko: "Textract와 Comprehend Medical이 스캔 문서의 텍스트와 의료 개체를 관리형으로 추출하고, S3와 Athena가 확장 가능한 저장 및 서버리스 SQL 조회를 제공합니다.", en: "Textract and Comprehend Medical extract text and medical entities, while S3 and Athena provide scalable storage and serverless SQL queries." },
    why_wrong: {
      A: { ko: "단일 EC2 MySQL은 확장성과 운영 효율이 낮습니다.", en: "MySQL on one EC2 instance is not scalable or operationally efficient." },
      C: { ko: "사용자 지정 EC2 처리기를 직접 관리해야 합니다.", en: "Custom EC2 processors require infrastructure management." },
      D: { ko: "Rekognition은 문서 OCR용 Textract를 대체하지 않고 Transcribe Medical은 음성 전사용입니다.", en: "Rekognition is not the document OCR service, and Transcribe Medical is for speech." }
    }
  }
  ,{
    id: "exam4-193", number: 193, tags: ["ElastiCache", "Redis", "RDS", "Caching"],
    question: { en: "A company is running a batch application on Amazon EC2 instances. The application consists of a backend with multiple Amazon RDS databases. The application is causing a high number of reads on the databases. A solutions architect must reduce the number of database reads while ensuring high availability.\nWhat should the solutions architect do to meet this requirement?", ko: "EC2 배치 애플리케이션이 여러 RDS 데이터베이스에 많은 읽기를 발생시킵니다. 고가용성을 유지하면서 DB 읽기를 줄여야 합니다.\n어떤 조치를 해야 합니까?" },
    options: [
      { k: "A", en: "Add Amazon RDS read replicas.", ko: "RDS 읽기 전용 복제본을 추가합니다." },
      { k: "B", en: "Use Amazon ElastiCache for Redis.", ko: "ElastiCache for Redis를 사용합니다." },
      { k: "C", en: "Use Amazon Route 53 DNS caching", ko: "Route 53 DNS 캐싱을 사용합니다." },
      { k: "D", en: "Use Amazon ElastiCache for Memcached.", ko: "ElastiCache for Memcached를 사용합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "ElastiCache for Redis는 반복 읽기를 인메모리에서 제공하고 복제 및 Multi-AZ 자동 장애 조치로 고가용성을 지원합니다.", en: "ElastiCache for Redis serves repeated reads from memory and supports replication and Multi-AZ automatic failover." },
    why_wrong: {
      A: { ko: "읽기 부하는 분산하지만 DB 읽기 자체는 캐시만큼 줄이지 못합니다.", en: "Replicas distribute database reads but do not avoid them like a cache." },
      C: { ko: "DNS 캐싱은 애플리케이션 데이터를 캐시하지 않습니다.", en: "DNS caching does not cache application data." },
      D: { ko: "Memcached는 기본적으로 복제와 자동 장애 조치가 없어 Redis보다 고가용성에 불리합니다.", en: "Memcached lacks Redis replication and automatic failover capabilities." }
    }
  }
  ,{
    id: "exam4-194", number: 194, tags: ["EC2", "Database Cluster", "Multi-AZ", "High Availability"],
    question: { en: "A company needs to run a critical application on AWS. The company needs to use Amazon EC2 for the application's database. The database must be highly available and must fail over automatically if a disruptive event occurs.\nWhich solution will meet these requirements?", ko: "중요 애플리케이션의 데이터베이스를 EC2에서 실행해야 하며 장애 시 자동 전환되는 고가용성이 필요합니다.\n어떤 솔루션이 적합합니까?" },
    options: [
      { k: "A", en: "Launch two EC2 instances, each in a different Availability Zone in the same AWS Region. Install the database on both EC2 instances. Configure the EC2 instances as a cluster. Set up database replication.", ko: "같은 리전의 서로 다른 AZ에 EC2 두 대를 배치하고 DB 클러스터와 복제를 구성합니다." },
      { k: "B", en: "Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use AWS CloudFormation to automate provisioning of the EC2 instance if a disruptive event occurs.", ko: "단일 EC2를 AMI로 백업하고 장애 시 CloudFormation으로 다시 생성합니다." },
      { k: "C", en: "Launch two EC2 instances, each in a different AWS Region. Install the database on both EC2 instances. Set up database replication. Fail over the database to a second Region.", ko: "서로 다른 리전의 EC2 두 대에 DB 복제와 리전 장애 조치를 구성합니다." },
      { k: "D", en: "Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use EC2 automatic recovery to recover the instance if a disruptive event occurs.", ko: "단일 EC2를 AMI로 백업하고 EC2 자동 복구를 사용합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "서로 다른 AZ의 두 DB 노드를 클러스터링하고 복제하면 인스턴스나 AZ 장애 시 자동 장애 조치를 구현할 수 있습니다.", en: "A replicated database cluster across two AZs can automatically fail over after an instance or AZ disruption." },
    why_wrong: {
      B: { ko: "재프로비저닝은 즉각적인 자동 DB 장애 조치가 아닙니다.", en: "Reprovisioning is not immediate automatic database failover." },
      C: { ko: "교차 리전 구성은 지연과 복잡성이 크며 선택지에 자동 장애 조치가 명시되지 않았습니다.", en: "Cross-Region replication adds latency and complexity and does not specify automatic failover." },
      D: { ko: "EC2 자동 복구는 AZ 장애를 처리하거나 대기 DB로 전환하지 않습니다.", en: "EC2 recovery does not handle an AZ outage or fail over to a standby database." }
    }
  }
  ,{
    id: "exam4-195", number: 195, tags: ["SQS", "Auto Scaling", "Resilience", "Decoupling"],
    question: { en: "A company's order system sends requests from clients to Amazon EC2 instances. The EC2 instances process the orders and then store the orders in a database on Amazon RDS. Users report that they must reprocess orders when the system fails. The company wants a resilient solution that can process orders automatically if a system outage occurs.\nWhat should a solutions architect do to meet these requirements?", ko: "주문 시스템이 EC2에서 주문을 처리해 RDS에 저장합니다. 장애 시 사용자가 주문을 다시 처리해야 하므로, 복구 후 주문을 자동 처리하는 복원력 있는 솔루션이 필요합니다.\n어떤 조치를 해야 합니까?" },
    options: [
      { k: "A", en: "Move the EC2 instances into an Auto Scaling group. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to target an Amazon Elastic Container Service (Amazon ECS) task.", ko: "EC2를 Auto Scaling 그룹으로 옮기고 EventBridge에서 ECS 작업을 호출합니다." },
      { k: "B", en: "Move the EC2 instances into an Auto Scaling group behind an Application Load Balancer (ALB). Update the order system to send messages to the ALB endpoint.", ko: "EC2를 ALB 뒤 Auto Scaling 그룹에 두고 주문을 ALB로 보냅니다." },
      { k: "C", en: "Move the EC2 instances into an Auto Scaling group. Configure the order system to send messages to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the EC2 instances to consume messages from the queue.", ko: "EC2를 Auto Scaling 그룹에 두고 주문을 SQS로 보내 EC2가 소비하게 합니다." },
      { k: "D", en: "Create an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function, and subscribe the function to the SNS topic. Configure the order system to send messages to the SNS topic. Send a command to the EC2 instances to process the messages by using AWS Systems Manager Run Command.", ko: "SNS, Lambda, Systems Manager Run Command로 EC2에 처리를 지시합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "SQS가 주문을 내구성 있게 보관하므로 EC2 장애 중에도 손실되지 않고 복구된 소비자가 자동으로 재처리합니다.", en: "SQS durably stores orders during outages so recovered or replacement consumers automatically process them." },
    why_wrong: {
      A: { ko: "EventBridge 규칙은 주문 메시지를 내구성 있게 버퍼링하지 않습니다.", en: "The EventBridge rule does not durably buffer order requests." },
      B: { ko: "ALB는 장애 중 요청을 보존하는 대기열이 아닙니다.", en: "An ALB does not persist requests during an outage." },
      D: { ko: "불필요하게 복잡하고 SNS만으로 작업을 내구성 있게 보존하지 않습니다.", en: "This is unnecessarily complex and SNS alone does not persist work like SQS." }
    }
  }
  ,{
    id: "exam4-196", number: 196, tags: ["DynamoDB", "TTL", "Cost Optimization"],
    question: { en: "A company runs an application on a large fleet of Amazon EC2 instances. The application reads and writes entries into an Amazon DynamoDB table. The size of the DynamoDB table continuously grows, but the application needs only data from the last 30 days. The company needs a solution that minimizes cost and development effort.\nWhich solution meets these requirements?", ko: "애플리케이션은 계속 커지는 DynamoDB 테이블에서 최근 30일 데이터만 필요합니다. 비용과 개발 노력을 최소화해야 합니다.\n어떤 솔루션이 적합합니까?" },
    options: [
      { k: "A", en: "Use an AWS CloudFormation template to deploy the complete solution. Redeploy the CloudFormation stack every 30 days, and delete the original stack.", ko: "30일마다 CloudFormation 스택을 재배포하고 기존 스택을 삭제합니다." },
      { k: "B", en: "Use an EC2 instance that runs a monitoring application from AWS Marketplace. Configure the monitoring application to use Amazon DynamoDB Streams to store the timestamp when a new item is created in the table. Use a script that runs on the EC2 instance to delete items that have a timestamp that is older than 30 days.", ko: "EC2 모니터링 앱과 Streams 및 삭제 스크립트를 사용합니다." },
      { k: "C", en: "Configure Amazon DynamoDB Streams to invoke an AWS Lambda function when a new item is created in the table. Configure the Lambda function to delete items in the table that are older than 30 days.", ko: "Streams가 Lambda를 호출해 30일보다 오래된 항목을 삭제하게 합니다." },
      { k: "D", en: "Extend the application to add an attribute that has a value of the current timestamp plus 30 days to each new item that is created in the table. Configure DynamoDB to use the attribute as the TTL attribute.", ko: "각 항목에 현재 시각+30일 속성을 넣고 DynamoDB TTL 속성으로 설정합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "DynamoDB TTL은 항목별 만료 시각에 따라 오래된 데이터를 추가 비용 없이 자동 삭제하며 애플리케이션 변경도 작습니다.", en: "DynamoDB TTL automatically removes expired items without extra compute cost and needs only a small item attribute change." },
    why_wrong: {
      A: { ko: "전체 스택 재생성은 데이터 관리 방식으로 부적절합니다.", en: "Redeploying the whole stack is inappropriate for record expiration." },
      B: { ko: "EC2와 사용자 지정 스크립트의 비용과 관리가 필요합니다.", en: "This requires paid EC2 capacity and custom script management." },
      C: { ko: "새 항목 생성 시점의 Lambda는 30일 후 자동 실행되지 않습니다.", en: "A Lambda invoked at item creation does not automatically run 30 days later." }
    }
  }
  ,{
    id: "exam4-197", number: 197, tags: ["Elastic Beanstalk", "RDS for Oracle", "DMS", "Multi-AZ"],
    question: { en: "A company has a Microsoft .NET application that runs on an on-premises Windows Server. The application stores data by using an Oracle Database Standard Edition server. The company is planning a migration to AWS and wants to minimize development changes while moving the application. The AWS application environment should be highly available.\nWhich combination of actions should the company take to meet these requirements? (Choose two.)", ko: "온프레미스 Windows Server의 .NET 애플리케이션과 Oracle Database Standard Edition을 최소 변경으로 AWS에 이전하고 고가용성을 제공해야 합니다.\n어떤 조합이 적합합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Refactor the application as serverless with AWS Lambda functions running .NET Core.", ko: "애플리케이션을 .NET Core Lambda로 리팩터링합니다." },
      { k: "B", en: "Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment.", ko: "Elastic Beanstalk .NET 플랫폼의 Multi-AZ 환경으로 재호스팅합니다." },
      { k: "C", en: "Replatform the application to run on Amazon EC2 with the Amazon Linux Amazon Machine Image (AMI).", ko: "Amazon Linux EC2로 리플랫폼합니다." },
      { k: "D", en: "Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Amazon DynamoDB in a Multi-AZ deployment.", ko: "DMS로 Oracle을 Multi-AZ DynamoDB로 이전합니다." },
      { k: "E", en: "Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ deployment.", ko: "DMS로 Oracle을 Multi-AZ RDS for Oracle로 이전합니다." }
    ],
    answer: ["B", "E"],
    explanation: { ko: "Elastic Beanstalk .NET Multi-AZ는 기존 코드를 적게 바꾸며 관리형 고가용성을 제공하고, RDS for Oracle Multi-AZ는 기존 Oracle 호환성과 자동 장애 조치를 제공합니다.", en: "Elastic Beanstalk .NET Multi-AZ minimizes application changes, while RDS for Oracle Multi-AZ preserves compatibility and provides managed failover." },
    why_wrong: {
      A: { ko: "서버리스 리팩터링은 큰 개발 변경입니다.", en: "Serverless refactoring requires major development changes." },
      C: { ko: "Windows .NET 애플리케이션을 Linux로 옮기면 호환 변경이 필요합니다.", en: "Moving a Windows .NET application to Linux requires compatibility changes." },
      D: { ko: "Oracle 관계형 모델을 DynamoDB로 바꾸려면 대규모 재설계가 필요합니다.", en: "Changing from Oracle to DynamoDB requires a major data model redesign." }
    }
  }
  ,{
    id: "exam4-198", number: 198, tags: ["EKS", "Fargate", "DocumentDB", "MongoDB"],
    question: { en: "A company runs a containerized application on a Kubernetes cluster in an on-premises data center. The company is using a MongoDB database for data storage. The company wants to migrate some of these environments to AWS, but no code changes or deployment method changes are possible at this time. The company needs a solution that minimizes operational overhead.\nWhich solution meets these requirements?", ko: "온프레미스 Kubernetes와 MongoDB 환경을 코드나 배포 방식 변경 없이 AWS로 일부 이전하면서 운영 부담을 최소화해야 합니다.\n어떤 솔루션이 적합합니까?" },
    options: [
      { k: "A", en: "Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes for compute and MongoDB on EC2 for data storage.", ko: "EC2 기반 ECS와 EC2의 MongoDB를 사용합니다." },
      { k: "B", en: "Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute and Amazon DynamoDB for data storage.", ko: "Fargate 기반 ECS와 DynamoDB를 사용합니다." },
      { k: "C", en: "Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes for compute and Amazon DynamoDB for data storage.", ko: "EC2 기반 EKS와 DynamoDB를 사용합니다." },
      { k: "D", en: "Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon DocumentDB (with MongoDB compatibility) for data storage.", ko: "Fargate 기반 EKS와 MongoDB 호환 DocumentDB를 사용합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "EKS는 Kubernetes 배포 방식을 유지하고 Fargate가 워커 관리를 없애며 DocumentDB는 MongoDB 호환 관리형 DB를 제공합니다.", en: "EKS preserves Kubernetes deployments, Fargate removes worker management, and DocumentDB provides a managed MongoDB-compatible database." },
    why_wrong: {
      A: { ko: "ECS로 배포 방식을 바꾸고 MongoDB EC2를 직접 관리해야 합니다.", en: "ECS changes deployment methods and MongoDB on EC2 is self-managed." },
      B: { ko: "ECS와 DynamoDB 모두 애플리케이션 변경이 필요합니다.", en: "Both ECS and DynamoDB require application changes." },
      C: { ko: "DynamoDB 전환에 코드 변경이 필요하고 EC2 워커도 관리해야 합니다.", en: "DynamoDB requires code changes, and EC2 workers require management." }
    }
  }
  ,{
    id: "exam4-199", number: 199, tags: ["Transcribe", "Athena", "Call Analytics"],
    question: { en: "A telemarketing company is designing its customer call center functionality on AWS. The company needs a solution that provides multiple speaker recognition and generates transcript files. The company wants to query the transcript files to analyze the business patterns. The transcript files must be stored for 7 years for auditing purposes.\nWhich solution will meet these requirements?", ko: "텔레마케팅 회사는 여러 화자를 구분해 통화 전사 파일을 생성하고, 이를 조회해 비즈니스 패턴을 분석하며 7년간 감사용으로 보관해야 합니다.\n어떤 솔루션이 적합합니까?" },
    options: [
      { k: "A", en: "Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use machine learning models for transcript file analysis.", ko: "Rekognition으로 화자를 인식하고 S3와 ML 모델로 분석합니다." },
      { k: "B", en: "Use Amazon Transcribe for multiple speaker recognition. Use Amazon Athena for transcript file analysis.", ko: "Amazon Transcribe로 여러 화자를 인식하고 Athena로 전사 파일을 분석합니다." },
      { k: "C", en: "Use Amazon Translate for multiple speaker recognition. Store the transcript files in Amazon Redshift. Use SQL queries for transcript file analysis.", ko: "Translate로 화자를 인식하고 Redshift SQL로 분석합니다." },
      { k: "D", en: "Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use Amazon Textract for transcript file analysis.", ko: "Rekognition과 Textract로 전사 파일을 처리합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "Transcribe는 화자 분할과 전사 파일 생성을 지원하며 결과를 S3에 장기 보관하고 Athena로 SQL 분석할 수 있습니다.", en: "Transcribe supports speaker diarization and transcript output, which can be retained in S3 and queried with Athena." },
    why_wrong: {
      A: { ko: "Rekognition은 이미지·영상 분석 서비스이며 음성 전사가 아닙니다.", en: "Rekognition analyzes images and video, not speech transcription." },
      C: { ko: "Translate는 번역 서비스이며 화자 인식이나 전사를 수행하지 않습니다.", en: "Translate translates text and does not transcribe or identify speakers." },
      D: { ko: "Textract는 문서 OCR용이며 전사 분석 서비스가 아닙니다.", en: "Textract performs document OCR, not transcript analysis." }
    }
  }
  ,{
    id: "exam4-200", number: 200, tags: ["Cognito", "API Gateway", "Authorizer"],
    question: { en: "A company hosts its application on AWS. The company uses Amazon Cognito to manage users. When users log in to the application, the application fetches required data from Amazon DynamoDB by using a REST API that is hosted in Amazon API Gateway. The company wants an AWS managed solution that will control access to the REST API to reduce development efforts.\nWhich solution will meet these requirements with the LEAST operational overhead?", ko: "회사는 Cognito로 사용자를 관리하고 API Gateway REST API를 통해 DynamoDB 데이터를 가져옵니다. 개발 노력을 줄이는 AWS 관리형 API 접근 제어가 필요합니다.\n운영 부담이 가장 적은 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Configure an AWS Lambda function to be an authorizer in API Gateway to validate which user made the request.", ko: "Lambda 권한 부여자를 만들어 사용자를 검증합니다." },
      { k: "B", en: "For each user, create and assign an API key that must be sent with each request. Validate the key by using an AWS Lambda function.", ko: "사용자마다 API 키를 만들고 Lambda로 검증합니다." },
      { k: "C", en: "Send the user's email address in the header with every request. Invoke an AWS Lambda function to validate that the user with that email address has proper access.", ko: "이메일 주소를 헤더로 보내고 Lambda로 권한을 검증합니다." },
      { k: "D", en: "Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request.", ko: "API Gateway에 Cognito 사용자 풀 권한 부여자를 구성합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "API Gateway의 Cognito 사용자 풀 권한 부여자는 Cognito 토큰을 관리형으로 검증하므로 사용자 지정 인증 코드가 필요 없습니다.", en: "An API Gateway Cognito user pool authorizer validates Cognito tokens as a managed integration without custom authorization code." },
    why_wrong: {
      A: { ko: "Lambda 권한 부여자는 사용자 지정 코드와 운영이 필요합니다.", en: "A Lambda authorizer requires custom code and operations." },
      B: { ko: "API 키는 사용자 인증 수단이 아니며 사용자별 키 관리 부담이 큽니다.", en: "API keys are not user authentication and add per-user key management." },
      C: { ko: "이메일 헤더는 신뢰할 수 없고 사용자 지정 검증 코드가 필요합니다.", en: "An email header is untrusted and requires custom validation code." }
    }
  }
]
});
