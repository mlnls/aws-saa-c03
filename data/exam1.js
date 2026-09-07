/* Exam 1
 * ExamTopics Topic 1 / Exam A 의 1~50번
 * 한 세트는 50문제. 51번부터는 data/exam2.js 로 새 세트를 만드세요.
 * 스키마는 README.md 참고.
 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam1",
  title: "Exam 1",
  note: "Topic 1 · #1–50",
  questions: [
  {
    id: "exam1-1",
    number: 1,
    tags: ["S3", "Data Transfer"],
    question: {
      en: "A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection.\nThe company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.\nWhich solution meets these requirements?",
      ko: "한 회사가 여러 대륙의 도시에서 온도, 습도, 기압 데이터를 수집합니다. 각 사이트에서 하루에 수집하는 데이터는 평균 500GB이며, 각 사이트에는 고속 인터넷 연결이 있습니다.\n회사는 이 모든 글로벌 사이트의 데이터를 가능한 한 빠르게 하나의 Amazon S3 버킷으로 집계하려 합니다. 또한 운영 복잡도를 최소화해야 합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A",
        en: "Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.",
        ko: "대상 S3 버킷에서 S3 Transfer Acceleration을 활성화한다. 멀티파트 업로드를 사용해 사이트 데이터를 대상 S3 버킷으로 직접 업로드한다." },
      { k: "B",
        en: "Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.",
        ko: "각 사이트의 데이터를 가장 가까운 리전의 S3 버킷에 업로드한다. S3 크로스 리전 복제(CRR)로 객체를 대상 버킷에 복사한 뒤 원본 버킷의 데이터를 삭제한다." },
      { k: "C",
        en: "Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.",
        ko: "매일 AWS Snowball Edge Storage Optimized 디바이스 작업을 예약해 각 사이트의 데이터를 가장 가까운 리전으로 전송한다. S3 CRR로 객체를 대상 버킷에 복사한다." },
      { k: "D",
        en: "Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.",
        ko: "각 사이트의 데이터를 가장 가까운 리전의 EC2 인스턴스에 업로드하고 EBS 볼륨에 저장한다. 일정 간격으로 EBS 스냅샷을 만들어 대상 버킷이 있는 리전으로 복사한 뒤 그 리전에서 EBS 볼륨을 복원한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "핵심 키워드는 **as quickly as possible(장거리 업로드 속도)** + **minimize operational complexity(운영 복잡도 최소)** + **고속 인터넷 있음**입니다.\n\nS3 Transfer Acceleration은 사용자를 가장 가까운 CloudFront 엣지 로케이션으로 보낸 뒤 AWS 백본 네트워크로 목적지 버킷까지 전송하므로, 대륙 간 장거리 업로드 속도가 크게 개선됩니다. 500GB 같은 대용량은 멀티파트 업로드로 병렬 전송하면 더 빨라집니다. 설정은 대상 버킷의 옵션 하나 켜는 것뿐이라 운영 복잡도도 가장 낮습니다.",
      en: "Keywords: as quickly as possible (long-distance upload), minimize operational complexity, and each site already has a high-speed Internet connection.\n\nS3 Transfer Acceleration routes uploads through the nearest CloudFront edge location and then over the AWS backbone to the destination bucket, which greatly speeds up cross-continent uploads. Multipart upload parallelizes the 500 GB transfers. It is a single setting on the destination bucket, so operational overhead is minimal."
    },
    why_wrong: {
      B: { ko: "리전마다 버킷을 만들고 CRR·수명주기·삭제까지 관리해야 하므로 운영 복잡도가 커집니다. CRR은 비동기 복제라 지연도 추가됩니다.", en: "Requires a bucket per Region plus replication rules and cleanup — more operational complexity, and CRR is asynchronous so it adds delay." },
      C: { ko: "Snowball Edge는 네트워크 대역폭이 부족할 때 쓰는 오프라인 전송 수단입니다. 이미 고속 인터넷이 있고 '매일' 디바이스를 배송하는 것은 가장 느리고 복잡합니다.", en: "Snowball Edge is for limited bandwidth. Sites already have high-speed Internet, and shipping devices daily is the slowest and most complex option." },
      D: { ko: "EC2 + EBS 스냅샷 복사/복원을 직접 운영해야 하고, 최종적으로 S3로 옮기는 단계도 더 필요합니다. 가장 복잡합니다.", en: "You would have to operate EC2, EBS snapshot copies, and restores, then still move data into S3 — by far the most complex path." }
    }
  }
  ,{
    id: "exam1-2",
    number: 2,
    tags: ["Athena", "Analytics", "S3"],
    question: {
      en: "A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture.\nWhat should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?",
      ko: "회사는 자체 애플리케이션의 로그 파일을 분석할 수 있어야 합니다. 로그는 JSON 형식으로 Amazon S3 버킷에 저장되어 있습니다. 쿼리는 단순하며 필요할 때(온디맨드) 실행됩니다. 솔루션스 아키텍트는 기존 아키텍처를 최소한으로 변경하면서 분석을 수행해야 합니다.\n운영 부담을 가장 적게 하면서 이 요구사항을 충족하려면 어떻게 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.", ko: "Amazon Redshift로 모든 콘텐츠를 한곳에 적재하고 필요할 때 SQL 쿼리를 실행한다." },
      { k: "B", en: "Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.", ko: "Amazon CloudWatch Logs에 로그를 저장하고 CloudWatch 콘솔에서 필요할 때 SQL 쿼리를 실행한다." },
      { k: "C", en: "Use Amazon Athena directly with Amazon S3 to run the queries as needed.", ko: "Amazon Athena를 S3에 직접 연결해 필요할 때 쿼리를 실행한다." },
      { k: "D", en: "Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.", ko: "AWS Glue로 로그를 카탈로그화하고, Amazon EMR의 임시 Apache Spark 클러스터로 필요할 때 SQL 쿼리를 실행한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "**S3에 있는 데이터를 그 자리에서, 온디맨드로, 단순 쿼리** → Athena가 정답 공식입니다.\n\nAthena는 서버리스라 프로비저닝할 인프라가 없고, 데이터를 옮기거나 적재할 필요 없이 S3의 JSON을 바로 SQL로 조회합니다. 스캔한 데이터량만 과금되므로 간헐적인 온디맨드 쿼리에 가장 저렴하고, 기존 아키텍처 변경도 사실상 없습니다.",
      en: "Data already in S3, on-demand simple queries, least overhead → Athena. It is serverless, queries the JSON in place with SQL, needs no ETL or cluster, and bills per data scanned."
    },
    why_wrong: {
      A: { ko: "Redshift는 클러스터를 띄우고 데이터를 적재(ETL)해야 합니다. 간헐적 쿼리에 상시 클러스터는 과잉이고 운영 부담이 큽니다.", en: "Redshift requires provisioning a cluster and loading the data — overkill for occasional queries." },
      B: { ko: "이미 S3에 있는 로그를 CloudWatch Logs로 다시 넣어야 하고, CloudWatch Logs Insights는 SQL이 아닌 자체 쿼리 문법입니다.", en: "You would have to re-ingest the logs, and CloudWatch Logs Insights is not SQL." },
      D: { ko: "Glue + EMR Spark는 훨씬 무거운 조합입니다. 단순 쿼리에 클러스터 구성·관리 부담이 추가됩니다.", en: "Glue plus an EMR Spark cluster is far heavier than needed for simple queries." }
    }
  }
  ,{
    id: "exam1-3",
    number: 3,
    tags: ["IAM", "S3", "Organizations"],
    question: {
      en: "A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations.\nWhich solution meets these requirements with the LEAST amount of operational overhead?",
      ko: "회사는 부서별로 여러 AWS 계정을 AWS Organizations로 관리합니다. 관리 계정에는 프로젝트 보고서가 담긴 S3 버킷이 있습니다. 회사는 이 버킷 접근을 조직(Organizations) 내 계정의 사용자로만 제한하려 합니다.\n운영 부담을 가장 적게 하면서 이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Add the aws:PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy.", ko: "S3 버킷 정책에 조직 ID를 참조하는 aws:PrincipalOrgID 전역 조건 키를 추가한다." },
      { k: "B", en: "Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy.", ko: "부서별로 OU를 만들고 버킷 정책에 aws:PrincipalOrgPaths 전역 조건 키를 추가한다." },
      { k: "C", en: "Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly.", ko: "CloudTrail로 계정 생성·초대·탈퇴·제거 이벤트를 모니터링하고 그에 맞춰 버킷 정책을 갱신한다." },
      { k: "D", en: "Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3 bucket policy.", ko: "접근이 필요한 각 사용자에게 태그를 달고 버킷 정책에 aws:PrincipalTag 조건 키를 추가한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "**조직 전체를 한 번에** 허용하려면 `aws:PrincipalOrgID` 조건 키가 정답입니다.\n\n버킷 정책에 조직 ID 하나만 넣으면, 조직에 계정이 추가·제거될 때 정책을 손댈 필요가 없습니다. 계정 ID를 일일이 나열하는 방식 대비 운영 부담이 압도적으로 낮습니다.",
      en: "aws:PrincipalOrgID in the bucket policy allows every principal in the organization with a single condition, and it keeps working as accounts join or leave — no policy maintenance."
    },
    why_wrong: {
      B: { ko: "PrincipalOrgPaths는 특정 OU 경로로 좁힐 때 쓰는 키입니다. 조직 전체가 대상이면 OU를 새로 설계할 이유가 없어 불필요한 작업이 늘어납니다.", en: "PrincipalOrgPaths scopes to specific OU paths; restructuring into OUs is unnecessary work here." },
      C: { ko: "이벤트를 감시해 정책을 수동으로 계속 고치는 방식이라 운영 부담이 가장 큽니다.", en: "Watching events and hand-editing the policy is the highest-overhead approach." },
      D: { ko: "모든 사용자에게 태그를 붙이고 관리해야 하며, 새 사용자마다 누락 위험이 생깁니다.", en: "Requires tagging and maintaining every user, and new users are easily missed." }
    }
  }
  ,{
    id: "exam1-4",
    number: 4,
    tags: ["VPC", "VPC Endpoint", "S3"],
    question: {
      en: "An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet.\nWhich solution will provide private network connectivity to Amazon S3?",
      ko: "VPC 안의 EC2 인스턴스에서 애플리케이션이 실행되며, S3 버킷에 저장된 로그를 처리합니다. 이 EC2 인스턴스는 인터넷 연결 없이 S3 버킷에 접근해야 합니다.\nAmazon S3에 프라이빗 네트워크 연결을 제공하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create a gateway VPC endpoint to the S3 bucket.", ko: "S3용 게이트웨이 VPC 엔드포인트를 만든다." },
      { k: "B", en: "Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.", ko: "로그를 CloudWatch Logs로 스트리밍한 뒤 S3 버킷으로 내보낸다." },
      { k: "C", en: "Create an instance profile on Amazon EC2 to allow S3 access.", ko: "EC2에 인스턴스 프로파일을 만들어 S3 접근을 허용한다." },
      { k: "D", en: "Create an Amazon API Gateway API with a private link to access the S3 endpoint.", ko: "API Gateway API를 만들어 프라이빗 링크로 S3 엔드포인트에 접근한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "질문이 묻는 것은 **네트워크 경로**입니다. S3(그리고 DynamoDB)는 **게이트웨이 VPC 엔드포인트**를 지원하며, 라우팅 테이블에 엔드포인트 경로가 추가되어 인터넷 게이트웨이나 NAT 없이 AWS 내부 네트워크로 S3에 접근합니다. 추가 비용도 없습니다.\n\n※ 게이트웨이 엔드포인트를 지원하는 서비스는 S3와 DynamoDB 둘뿐이고, 나머지는 인터페이스 엔드포인트(PrivateLink)라는 점이 시험 포인트입니다.",
      en: "S3 (and DynamoDB) support gateway VPC endpoints: a route is added to the route table so traffic reaches S3 over the AWS network with no internet gateway or NAT, at no extra cost."
    },
    why_wrong: {
      B: { ko: "로그 흐름을 바꾸는 우회책이고, 인터넷 없이 접근한다는 네트워크 요구를 해결하지 못합니다.", en: "Changes the log pipeline and does not address private network connectivity." },
      C: { ko: "인스턴스 프로파일은 **권한**(IAM)을 주는 것이지 네트워크 경로를 만들어주지 않습니다. 여전히 인터넷 경로가 필요합니다.", en: "An instance profile grants permissions, not a network path — internet access would still be required." },
      D: { ko: "S3 접근에 API Gateway를 끼우는 것은 불필요하게 복잡하고 목적에 맞지 않습니다.", en: "Putting API Gateway in front of S3 is unnecessary and not how private S3 access works." }
    }
  }
  ,{
    id: "exam1-5",
    number: 5,
    tags: ["EFS", "EBS", "High Availability"],
    question: {
      en: "A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time.\nWhat should a solutions architect propose to ensure users see all of their documents at once?",
      ko: "회사는 EC2 인스턴스 1대로 웹 애플리케이션을 호스팅하며, 사용자가 업로드한 문서를 EBS 볼륨에 저장합니다. 확장성과 가용성을 높이려고 동일한 구성을 다른 가용 영역에 복제해 두 번째 EC2 인스턴스와 EBS 볼륨을 만들고, 둘을 Application Load Balancer 뒤에 두었습니다. 이후 사용자들은 새로고침할 때마다 문서의 한쪽 묶음만 보이고 전체가 한 번에 보이지 않는다고 신고했습니다.\n사용자가 모든 문서를 한 번에 볼 수 있게 하려면 무엇을 제안해야 합니까?"
    },
    options: [
      { k: "A", en: "Copy the data so both EBS volumes contain all the documents", ko: "데이터를 복사해 두 EBS 볼륨이 모든 문서를 갖게 한다." },
      { k: "B", en: "Configure the Application Load Balancer to direct a user to the server with the documents", ko: "해당 문서가 있는 서버로 사용자를 보내도록 ALB를 구성한다." },
      { k: "C", en: "Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS", ko: "두 EBS 볼륨의 데이터를 Amazon EFS로 복사하고, 새 문서는 EFS에 저장하도록 애플리케이션을 수정한다." },
      { k: "D", en: "Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server", ko: "요청을 두 서버 모두에 보내도록 ALB를 구성하고 각 문서를 올바른 서버에서 반환한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "원인은 **EBS 볼륨이 하나의 AZ·하나의 인스턴스에만 붙는 블록 스토리지**라 두 인스턴스가 서로 다른 데이터를 들고 있는 것입니다.\n\n여러 EC2 인스턴스가 **동시에 같은 파일을 공유**해야 할 때의 정답은 Amazon EFS(NFS 공유 파일 시스템)입니다. 여러 AZ에서 동시에 마운트할 수 있어 어느 인스턴스로 라우팅돼도 같은 문서 전체가 보입니다.",
      en: "EBS is single-AZ block storage attached to one instance, so each server holds a different subset. Shared file access across instances and AZs is exactly what Amazon EFS provides."
    },
    why_wrong: {
      A: { ko: "한 번 복사해도 이후 업로드가 각 볼륨에 따로 쌓여 곧 다시 갈라집니다. 지속적인 동기화 수단이 없습니다.", en: "A one-time copy diverges again as soon as new uploads land on either volume." },
      B: { ko: "ALB는 문서가 어느 서버에 있는지 알지 못합니다. 세션 고정(sticky)으로도 '전체 문서'를 보여줄 수 없습니다.", en: "The ALB has no knowledge of which documents live where; stickiness still hides half the documents." },
      D: { ko: "ALB는 하나의 요청을 여러 대상에 분기해 결과를 합쳐주지 않습니다. 동작 자체가 불가능합니다.", en: "An ALB cannot fan one request out to both targets and merge the results." }
    }
  }
  ,{
    id: "exam1-6",
    number: 6,
    tags: ["Snowball", "Migration", "S3"],
    question: {
      en: "A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth.\nWhich solution will meet these requirements?",
      ko: "회사는 온프레미스 NAS에 NFS로 대용량 비디오 파일을 저장합니다. 파일 하나의 크기는 1MB~500GB이고 총 용량은 70TB이며 더 늘지 않습니다. 회사는 이 비디오 파일을 Amazon S3로 마이그레이션하기로 했습니다. 가능한 한 빨리, 그리고 네트워크 대역폭은 최소한으로 사용해야 합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.", ko: "S3 버킷을 만들고 쓰기 권한이 있는 IAM 역할을 만든 뒤, AWS CLI로 모든 파일을 S3 버킷에 복사한다." },
      { k: "B", en: "Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.", ko: "AWS Snowball Edge 작업을 생성해 디바이스를 받고, Snowball Edge 클라이언트로 데이터를 옮긴 뒤 반납해 AWS가 S3로 가져오게 한다." },
      { k: "C", en: "Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.", ko: "온프레미스에 S3 File Gateway를 배포하고 퍼블릭 서비스 엔드포인트로 연결한다. 버킷을 만들고 File Gateway에 새 NFS 파일 공유를 만들어 버킷을 가리키게 한 뒤, 기존 NFS 공유의 데이터를 옮긴다." },
      { k: "D", en: "Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.", ko: "온프레미스와 AWS 사이에 Direct Connect를 구성하고 S3 File Gateway를 배포한다. 퍼블릭 VIF로 연결하고 버킷과 NFS 파일 공유를 만든 뒤 데이터를 옮긴다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "**\"최소한의 네트워크 대역폭\" + 대용량(70TB) + 한 번만 옮기는 일회성 마이그레이션** → Snowball Edge(오프라인 물리 전송)입니다.\n\n디바이스에 데이터를 담아 배송하므로 인터넷 대역폭을 거의 쓰지 않고, 70TB를 회선으로 밀어 넣는 것보다 대체로 더 빠릅니다. 데이터가 더 늘지 않는다는 조건도 일회성 전송에 적합함을 알려주는 힌트입니다.",
      en: "Least network bandwidth for a one-time 70 TB move → AWS Snowball Edge ships the data physically, using almost no bandwidth and usually finishing faster than pushing 70 TB over the wire."
    },
    why_wrong: {
      A: { ko: "CLI 복사는 70TB 전부를 회선으로 전송하므로 대역폭 요구를 정면으로 위반합니다.", en: "Copying with the CLI pushes all 70 TB over the network — the opposite of least bandwidth." },
      C: { ko: "File Gateway도 결국 인터넷으로 전송합니다. 게다가 File Gateway는 온프레미스 확장·하이브리드 접근용이고 일회성 대량 이관 수단이 아닙니다.", en: "File Gateway still transfers over the internet, and it is meant for hybrid access, not one-off bulk migration." },
      D: { ko: "Direct Connect는 신청·구성에 수 주가 걸리고 비용도 큽니다. '가능한 한 빨리'와 맞지 않습니다.", en: "Direct Connect takes weeks to provision and is costly — not 'as soon as possible'." }
    }
  }
  ,{
    id: "exam1-7",
    number: 7,
    tags: ["SNS", "SQS", "Decoupling"],
    question: {
      en: "A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability.\nWhich solution meets these requirements?",
      ko: "회사의 애플리케이션이 들어오는 메시지를 수집하고, 수십 개의 다른 애플리케이션과 마이크로서비스가 이 메시지를 빠르게 소비합니다. 메시지 양은 크게 변동하며 때때로 초당 100,000건까지 급증합니다. 회사는 솔루션을 디커플링하고 확장성을 높이려 합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.", ko: "메시지를 Amazon Kinesis Data Analytics에 저장하고, 소비자 애플리케이션이 읽어 처리하도록 구성한다." },
      { k: "B", en: "Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics.", ko: "수집 애플리케이션을 Auto Scaling 그룹의 EC2 인스턴스에 배포하고 CPU 지표로 인스턴스 수를 조정한다." },
      { k: "C", en: "Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages.", ko: "샤드 1개인 Kinesis Data Streams에 메시지를 쓰고, Lambda로 전처리해 DynamoDB에 저장한 뒤 소비자가 DynamoDB에서 읽어 처리한다." },
      { k: "D", en: "Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SQS) subscriptions. Configure the consumer applications to process the messages from the queues.", ko: "메시지를 Amazon SNS 토픽에 발행하고 여러 개의 Amazon SQS 구독을 붙인다. 소비자 애플리케이션은 각자의 큐에서 메시지를 처리한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "**하나의 메시지를 수십 개의 소비자가 각각 받아야 한다** → SNS + SQS **팬아웃(fan-out)** 패턴이 정석입니다.\n\nSNS 토픽에 한 번 발행하면 구독한 모든 SQS 큐로 복사되고, 각 소비자는 자기 큐를 자기 속도로 처리합니다. 큐가 버퍼 역할을 해 초당 10만 건 급증도 흡수하고(소비자가 느려도 유실 없음), 둘 다 완전 관리형이라 별도 확장 작업이 필요 없습니다.",
      en: "Dozens of independent consumers each needing every message is the classic SNS + SQS fan-out pattern. One publish is copied to every subscribed queue, each queue buffers the 100k/second spikes, and both services are fully managed."
    },
    why_wrong: {
      A: { ko: "Kinesis Data Analytics는 스트림을 분석·처리하는 서비스이지 메시지를 보관해 여러 소비자에게 배분하는 저장소가 아닙니다.", en: "Kinesis Data Analytics processes streams; it is not a store that distributes messages to many consumers." },
      B: { ko: "EC2 오토스케일링은 수집 계층만 늘립니다. 생산자와 소비자를 분리(디커플링)하지 못합니다.", en: "Scaling EC2 only grows the ingestion tier and does not decouple producers from consumers." },
      C: { ko: "샤드 1개는 초당 1,000건·1MB 한계로 10만 건을 처리할 수 없고, DynamoDB를 큐처럼 쓰는 것도 불필요하게 복잡합니다.", en: "A single shard caps at ~1,000 records/sec, and using DynamoDB as a queue adds needless complexity." }
    }
  }
  ,{
    id: "exam1-8",
    number: 8,
    tags: ["SQS", "Auto Scaling", "Decoupling"],
    question: {
      en: "A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability.\nHow should a solutions architect design the architecture to meet these requirements?",
      ko: "회사가 분산 애플리케이션을 AWS로 마이그레이션합니다. 이 애플리케이션은 변동이 큰 워크로드를 처리합니다. 기존 플랫폼은 여러 컴퓨팅 노드에 작업을 분배하는 주 서버(primary server)로 구성되어 있습니다. 회사는 복원력과 확장성을 극대화하는 방식으로 애플리케이션을 현대화하려 합니다.\n어떻게 아키텍처를 설계해야 합니까?"
    },
    options: [
      { k: "A", en: "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling.", ko: "작업 대상으로 SQS 큐를 구성하고, 컴퓨팅 노드는 Auto Scaling 그룹의 EC2로 구현한다. 오토스케일링은 예약 조정(scheduled scaling)을 사용한다." },
      { k: "B", en: "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue.", ko: "작업 대상으로 SQS 큐를 구성하고, 컴퓨팅 노드는 Auto Scaling 그룹의 EC2로 구현한다. 오토스케일링은 큐의 길이를 기준으로 조정한다." },
      { k: "C", en: "Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server.", ko: "주 서버와 컴퓨팅 노드를 Auto Scaling 그룹의 EC2로 구현하고, 작업 대상으로 CloudTrail을 구성한다. 주 서버 부하를 기준으로 조정한다." },
      { k: "D", en: "Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes.", ko: "주 서버와 컴퓨팅 노드를 Auto Scaling 그룹의 EC2로 구현하고, 작업 대상으로 EventBridge를 구성한다. 컴퓨팅 노드의 부하를 기준으로 조정한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "작업을 분배하던 **주 서버(단일 장애점)를 SQS 큐로 대체**하면 생산자와 워커가 분리되고 복원력이 올라갑니다. 워커가 죽어도 메시지는 큐에 남아 다른 워커가 처리합니다.\n\n확장 기준은 **큐 길이**(정확히는 ApproximateNumberOfMessagesVisible 기반 백로그/인스턴스 지표)여야 합니다. 처리해야 할 일의 양을 직접 반영하므로 변동이 큰 워크로드에 정확히 반응합니다.",
      en: "Replacing the coordinating primary server with an SQS queue removes the single point of failure and decouples producers from workers. Scaling on queue depth reacts directly to the amount of pending work, which is what variable workloads need."
    },
    why_wrong: {
      A: { ko: "예약 조정은 트래픽 패턴을 미리 알아야 합니다. '변동이 큰' 워크로드에는 맞지 않습니다.", en: "Scheduled scaling assumes a known pattern — wrong for unpredictable, variable load." },
      C: { ko: "CloudTrail은 API 호출 감사 로그 서비스이며 작업 큐로 쓸 수 없습니다. 주 서버도 그대로 남아 단일 장애점입니다.", en: "CloudTrail is an audit log, not a job queue, and the primary server remains a single point of failure." },
      D: { ko: "EventBridge는 이벤트 라우팅용이라 작업 백로그를 버퍼링·재시도하는 큐 역할에 부적합하고, 주 서버가 남아 있습니다.", en: "EventBridge routes events rather than buffering a job backlog, and the primary server still remains." }
    }
  }
  ,{
    id: "exam1-9",
    number: 9,
    tags: ["Storage Gateway", "S3 Lifecycle", "Hybrid"],
    question: {
      en: "A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed.\nThe total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues.\nWhich solution will meet these requirements?",
      ko: "회사는 데이터 센터에서 SMB 파일 서버를 운영합니다. 이 파일 서버에는 생성 후 며칠간 자주 접근되는 대용량 파일이 저장되며, 7일이 지나면 거의 접근되지 않습니다.\n총 데이터 크기가 계속 늘어 회사 전체 스토리지 용량에 가까워졌습니다. 솔루션스 아키텍트는 최근 접근한 파일의 저지연 접근을 잃지 않으면서 사용 가능한 스토리지 공간을 늘려야 하고, 향후 문제를 막기 위한 파일 수명 주기 관리도 제공해야 합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.", ko: "AWS DataSync로 7일보다 오래된 데이터를 SMB 파일 서버에서 AWS로 복사한다." },
      { k: "B", en: "Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.", ko: "Amazon S3 File Gateway를 만들어 스토리지 공간을 확장하고, 7일 후 S3 Glacier Deep Archive로 전환하는 S3 수명 주기 정책을 만든다." },
      { k: "C", en: "Create an Amazon FSx for Windows File Server file system to extend the company's storage space.", ko: "Amazon FSx for Windows File Server 파일 시스템을 만들어 스토리지 공간을 확장한다." },
      { k: "D", en: "Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.", ko: "각 사용자 PC에 유틸리티를 설치해 S3에 접근하게 하고, 7일 후 S3 Glacier Flexible Retrieval로 전환하는 수명 주기 정책을 만든다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "요구사항이 세 개입니다: ① **온프레미스 용량 확장**, ② **최근 파일은 저지연**, ③ **수명 주기 관리**.\n\nS3 File Gateway는 SMB/NFS로 마운트되는 온프레미스 게이트웨이로, 데이터를 S3에 저장하면서 최근 접근 파일은 로컬에 캐시해 저지연을 유지합니다(①②). 실제 데이터가 S3 객체로 들어가므로 S3 수명 주기 정책으로 7일 후 Glacier Deep Archive 전환이 가능합니다(③). 세 조건을 동시에 만족하는 유일한 선택지입니다.",
      en: "S3 File Gateway presents an SMB share on premises, stores data in S3 while caching recently used files locally for low latency, and because objects land in S3 an S3 Lifecycle policy can archive them after 7 days — the only option covering all three requirements."
    },
    why_wrong: {
      A: { ko: "DataSync는 일회성/주기적 복사 도구입니다. 복사만으로는 온프레미스 용량이 늘지 않고 수명 주기 관리도 제공하지 않습니다.", en: "DataSync copies data but does not extend on-premises capacity or provide lifecycle management." },
      C: { ko: "FSx for Windows는 AWS 안의 파일 시스템으로 용량은 늘지만, 온프레미스에서의 저지연 접근과 수명 주기 관리(계층 전환) 요구를 충족하지 못합니다.", en: "FSx for Windows lives in AWS and offers neither on-premises low-latency caching nor lifecycle tiering." },
      D: { ko: "사용자 PC마다 유틸리티를 설치하는 방식은 기존 SMB 워크플로를 깨뜨리고 저지연 캐시도 없습니다.", en: "Installing a utility on every desktop breaks the SMB workflow and provides no local cache." }
    }
  }
  ,{
    id: "exam1-10",
    number: 10,
    tags: ["SQS FIFO", "API Gateway", "Lambda"],
    question: {
      en: "A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received.\nWhich solution will meet these requirements?",
      ko: "회사가 AWS에서 이커머스 웹 애플리케이션을 구축합니다. 애플리케이션은 새 주문 정보를 Amazon API Gateway REST API로 보내 처리합니다. 회사는 주문이 접수된 순서대로 처리되도록 보장하려 합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.", ko: "주문을 받으면 API Gateway 통합으로 SNS 토픽에 메시지를 발행하고, Lambda 함수를 토픽에 구독시켜 처리한다." },
      { k: "B", en: "Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing.", ko: "주문을 받으면 API Gateway 통합으로 SQS FIFO 큐에 메시지를 보내고, FIFO 큐가 Lambda 함수를 호출해 처리하도록 구성한다." },
      { k: "C", en: "Use an API Gateway authorizer to block any requests while the application processes an order.", ko: "애플리케이션이 주문을 처리하는 동안 API Gateway 권한 부여자(authorizer)로 다른 요청을 차단한다." },
      { k: "D", en: "Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing.", ko: "주문을 받으면 API Gateway 통합으로 SQS 표준 큐에 메시지를 보내고, 표준 큐가 Lambda 함수를 호출해 처리하도록 구성한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "**순서 보장(order preserved)** 키워드가 나오면 **SQS FIFO 큐**입니다.\n\nFIFO 큐는 메시지 그룹 내에서 전송 순서를 그대로 유지하고 정확히 한 번 처리(exactly-once)를 보장합니다. API Gateway → SQS FIFO → Lambda 구성으로 접수 순서대로 주문이 처리됩니다.",
      en: "Ordering guarantees point to an SQS FIFO queue: it preserves the order of messages within a message group and provides exactly-once processing. API Gateway → SQS FIFO → Lambda processes orders in the received order."
    },
    why_wrong: {
      A: { ko: "SNS는 순서를 보장하지 않습니다(표준 토픽). 병렬로 전달되어 처리 순서가 뒤섞일 수 있습니다.", en: "A standard SNS topic gives no ordering guarantee." },
      C: { ko: "권한 부여자는 인증·인가용입니다. 요청을 차단해 직렬화하는 용도가 아니며, 그렇게 하면 확장성도 망가집니다.", en: "An authorizer handles auth, not serialization; blocking requests would also destroy scalability." },
      D: { ko: "SQS 표준 큐는 최선 노력(best-effort) 순서만 제공해 순서가 바뀔 수 있고 중복 전달도 가능합니다.", en: "SQS standard queues offer only best-effort ordering and can deliver duplicates." }
    }
  }
  ,{
    id: "exam1-11", number: 11, tags: ["Secrets Manager", "Security"],
    question: {
      en: "A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management.\nWhat should a solutions architect do to accomplish this goal?",
      ko: "회사의 애플리케이션이 EC2 인스턴스에서 실행되며 Amazon Aurora 데이터베이스를 사용합니다. EC2 인스턴스는 로컬 파일에 저장된 사용자 이름과 비밀번호로 데이터베이스에 접속합니다. 회사는 자격 증명 관리의 운영 부담을 최소화하려 합니다.\n어떻게 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use AWS Secrets Manager. Turn on automatic rotation.", ko: "AWS Secrets Manager를 사용하고 자동 교체(rotation)를 켠다." },
      { k: "B", en: "Use AWS Systems Manager Parameter Store. Turn on automatic rotation.", ko: "AWS Systems Manager Parameter Store를 사용하고 자동 교체를 켠다." },
      { k: "C", en: "Create an Amazon S3 bucket to store objects that are encrypted with an AWS KMS encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.", ko: "KMS 키로 암호화된 객체를 저장할 S3 버킷을 만들고 자격 증명 파일을 옮긴 뒤 애플리케이션이 그 버킷을 참조하게 한다." },
      { k: "D", en: "Create an encrypted Amazon EBS volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume.", ko: "인스턴스마다 암호화된 EBS 볼륨을 만들어 연결하고 자격 증명 파일을 옮긴 뒤 애플리케이션이 그 볼륨을 참조하게 한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "**자격 증명 + 자동 교체** 조합은 Secrets Manager입니다.\n\nSecrets Manager는 RDS·Aurora와 통합되어 비밀번호를 주기적으로 자동 교체하고, 교체된 값을 DB에도 반영해 줍니다. 애플리케이션은 API로 최신 값을 받아오므로 파일 배포·수동 변경이 사라집니다.\n\n※ Parameter Store와의 구분: **자동 교체가 필요하면 Secrets Manager**, 단순 설정값 저장이면 Parameter Store(무료).",
      en: "Secrets Manager natively rotates RDS/Aurora credentials on a schedule and updates the database too. Parameter Store has no built-in rotation."
    },
    why_wrong: {
      B: { ko: "Parameter Store에는 자동 교체 기능이 없습니다. 교체 로직을 Lambda로 직접 만들어야 합니다.", en: "Parameter Store has no automatic rotation — you must build it yourself." },
      C: { ko: "암호화해도 여전히 '파일에 든 비밀번호'이고 교체는 수동입니다.", en: "Still a password in a file, rotated by hand." },
      D: { ko: "인스턴스마다 볼륨을 관리해야 해서 운영 부담이 오히려 커집니다.", en: "Adds a volume per instance to manage — more overhead, not less." }
    }
  }
  ,{
    id: "exam1-12", number: 12, tags: ["CloudFront", "Route 53", "Performance"],
    question: {
      en: "A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53.\nWhat should a solutions architect do to meet these requirements?",
      ko: "글로벌 회사가 ALB 뒤의 EC2 인스턴스에서 웹 애플리케이션을 호스팅합니다. 애플리케이션에는 정적 데이터와 동적 데이터가 있고, 정적 데이터는 S3 버킷에 저장합니다. 회사는 정적·동적 데이터 모두의 성능을 높이고 지연을 줄이려 하며, Route 53에 등록한 자체 도메인을 사용합니다.\n어떻게 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution.", ko: "S3 버킷과 ALB를 오리진으로 갖는 CloudFront 배포를 만들고, Route 53이 CloudFront로 트래픽을 보내게 한다." },
      { k: "B", en: "Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Configure Route 53 to route traffic to the CloudFront distribution.", ko: "ALB를 오리진으로 CloudFront 배포를 만들고, S3 버킷을 엔드포인트로 하는 Global Accelerator를 만든 뒤 Route 53이 CloudFront로 보내게 한다." },
      { k: "C", en: "Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.", ko: "S3를 오리진으로 CloudFront를 만들고, ALB와 CloudFront를 엔드포인트로 하는 Global Accelerator를 만든 뒤 가속기 DNS를 가리키는 사용자 지정 도메인을 애플리케이션 엔드포인트로 쓴다." },
      { k: "D", en: "Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application.", ko: "ALB를 오리진으로 CloudFront를, S3를 엔드포인트로 Global Accelerator를 만들고, 도메인 두 개를 만들어 동적은 CloudFront, 정적은 가속기로 나눠 보낸다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "CloudFront는 **오리진을 여러 개** 둘 수 있고, 경로 패턴(behavior)으로 정적은 S3, 동적은 ALB로 보낼 수 있습니다. 정적 콘텐츠는 엣지에 캐시되고, 동적 요청도 엣지까지는 AWS 백본을 타므로 지연이 줄어듭니다. Route 53 별칭 레코드 하나로 끝나 가장 단순합니다.\n\n※ CloudFront vs Global Accelerator: **HTTP(S)·캐시 가능한 웹 콘텐츠는 CloudFront**, TCP/UDP 비HTTP·고정 IP·리전 페일오버는 Global Accelerator.",
      en: "One CloudFront distribution can hold multiple origins and route by path — S3 for static, ALB for dynamic — with a single Route 53 alias. CloudFront is the right choice for cacheable HTTP content."
    },
    why_wrong: {
      B: { ko: "Global Accelerator는 S3 버킷을 엔드포인트로 지원하지 않습니다.", en: "Global Accelerator does not support S3 buckets as endpoints." },
      C: { ko: "CloudFront를 Global Accelerator 엔드포인트로 두는 구성은 지원되지 않으며 불필요하게 복잡합니다.", en: "You cannot put a CloudFront distribution behind Global Accelerator, and the design is needlessly complex." },
      D: { ko: "도메인을 두 개로 쪼개면 애플리케이션이 복잡해지고, 여기서도 S3는 가속기 엔드포인트가 될 수 없습니다.", en: "Splitting into two domains complicates the app, and S3 still cannot be an accelerator endpoint." }
    }
  }
  ,{
    id: "exam1-13", number: 13, tags: ["Secrets Manager", "Multi-Region"],
    question: {
      en: "A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사는 매월 AWS 인프라 유지 관리를 수행합니다. 이때 여러 AWS 리전에 있는 Amazon RDS for MySQL 데이터베이스의 자격 증명을 교체해야 합니다.\n운영 부담을 가장 적게 하면서 이를 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule.", ko: "AWS Secrets Manager에 시크릿으로 저장하고, 필요한 리전으로 다중 리전 복제를 사용한다. 일정에 따라 자동 교체하도록 구성한다." },
      { k: "B", en: "Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.", ko: "Systems Manager에 SecureString 파라미터로 저장하고 다중 리전 복제를 사용하며, 일정에 따라 교체하도록 구성한다." },
      { k: "C", en: "Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge to invoke an AWS Lambda function to rotate the credentials.", ko: "SSE가 켜진 S3 버킷에 저장하고, EventBridge로 Lambda를 호출해 자격 증명을 교체한다." },
      { k: "D", en: "Encrypt the credentials as secrets by using AWS KMS multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets.", ko: "KMS 다중 리전 CMK로 암호화해 DynamoDB 글로벌 테이블에 저장하고, Lambda로 읽어 RDS API로 교체한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "Secrets Manager는 **자동 교체**와 **다중 리전 복제(replica secret)** 를 모두 기본 기능으로 제공합니다. 기본 리전에서 교체하면 복제본 리전에도 자동 반영되므로, 여러 리전 자격 증명 교체를 코드 한 줄 없이 처리할 수 있습니다.",
      en: "Secrets Manager provides both scheduled rotation and multi-Region replica secrets natively; rotating in the primary Region propagates to replicas with no custom code."
    },
    why_wrong: {
      B: { ko: "Parameter Store에는 자동 교체도, 다중 리전 복제 기능도 없습니다.", en: "Parameter Store has neither rotation nor multi-Region replication." },
      C: { ko: "교체 Lambda를 직접 만들고 유지해야 하며, 시크릿을 S3에 두는 것 자체가 권장되지 않습니다.", en: "You must write and maintain the rotation function, and S3 is not a secret store." },
      D: { ko: "가장 많은 부품(KMS·DynamoDB·Lambda·RDS API)을 직접 조합해야 합니다.", en: "The most moving parts to build and operate." }
    }
  }
  ,{
    id: "exam1-14", number: 14, tags: ["Aurora", "RDS", "Scaling"],
    question: {
      en: "A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance.\nThe database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability.\nWhich solution will meet these requirements?",
      ko: "회사가 ALB 뒤 EC2 인스턴스에서 이커머스 애플리케이션을 운영합니다. 인스턴스는 여러 AZ에 걸친 Auto Scaling 그룹에서 CPU 사용률 기준으로 확장됩니다. 트랜잭션 데이터는 큰 EC2 인스턴스에 직접 설치한 MySQL 8.0에 저장합니다.\n부하가 늘면 DB 성능이 빠르게 저하되고, 쓰기보다 읽기 요청이 많습니다. 회사는 예측 불가능한 읽기 워크로드에 맞춰 DB를 자동으로 확장하면서 고가용성도 유지하길 원합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon Redshift with a single node for leader and compute functionality.", ko: "리더와 컴퓨팅을 겸하는 단일 노드 Amazon Redshift를 사용한다." },
      { k: "B", en: "Use Amazon RDS with a Single-AZ deployment. Configure Amazon RDS to add reader instances in a different Availability Zone.", ko: "단일 AZ 배포로 RDS를 사용하고, 다른 AZ에 리더 인스턴스를 추가하도록 구성한다." },
      { k: "C", en: "Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas.", ko: "다중 AZ 배포로 Amazon Aurora를 사용하고, Aurora 복제본에 Aurora Auto Scaling을 구성한다." },
      { k: "D", en: "Use Amazon ElastiCache for Memcached with EC2 Spot Instances.", ko: "EC2 스팟 인스턴스와 함께 ElastiCache for Memcached를 사용한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "**읽기 부하가 예측 불가 + 자동 확장 + 고가용성** → Aurora Multi-AZ + **Aurora Auto Scaling**입니다.\n\nAurora Auto Scaling은 읽기 복제본의 개수를 부하에 따라 자동으로 늘리고 줄입니다(리더 엔드포인트가 자동 분산). MySQL 호환이라 기존 애플리케이션을 그대로 옮길 수 있고, Multi-AZ로 가용성도 확보됩니다.",
      en: "Aurora Auto Scaling adds and removes Aurora Replicas automatically as read load changes, the reader endpoint spreads reads across them, and Multi-AZ provides high availability — all MySQL-compatible."
    },
    why_wrong: {
      A: { ko: "Redshift는 분석용 데이터 웨어하우스입니다. 트랜잭션 처리에 부적합하고 단일 노드는 고가용성도 없습니다.", en: "Redshift is an analytics warehouse, unsuitable for OLTP, and a single node is not highly available." },
      B: { ko: "단일 AZ 배포는 고가용성 요구를 위반하고, 읽기 복제본은 수동으로 추가·삭제해야 합니다(자동 확장 없음).", en: "Single-AZ breaks the HA requirement and RDS read replicas do not auto scale." },
      D: { ko: "Memcached는 캐시일 뿐 데이터베이스를 대체하지 못하고, 스팟 인스턴스는 중단될 수 있습니다.", en: "Memcached is a cache, not a database, and Spot can be interrupted." }
    }
  }
  ,{
    id: "exam1-15", number: 15, tags: ["Network Firewall", "VPC", "Security"],
    question: {
      en: "A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud.\nWhich solution will meet these requirements?",
      ko: "최근 AWS로 마이그레이션한 회사가 프로덕션 VPC를 오가는 트래픽을 보호하려 합니다. 온프레미스에는 트래픽 흐름 검사와 필터링 같은 작업을 수행하는 검사 서버가 있었고, 회사는 AWS에서도 동일한 기능을 원합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC.", ko: "프로덕션 VPC의 트래픽 검사와 필터링에 Amazon GuardDuty를 사용한다." },
      { k: "B", en: "Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering.", ko: "Traffic Mirroring으로 트래픽을 복제해 검사와 필터링을 수행한다." },
      { k: "C", en: "Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC.", ko: "AWS Network Firewall로 프로덕션 VPC의 트래픽 검사·필터링 규칙을 만든다." },
      { k: "D", en: "Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC.", ko: "AWS Firewall Manager로 프로덕션 VPC의 트래픽 검사·필터링 규칙을 만든다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "AWS Network Firewall은 VPC 경계에 두는 **관리형 상태 저장 방화벽**으로, 트래픽 검사(IPS/도메인 필터링 등)와 차단을 모두 수행합니다. 온프레미스 검사 서버를 그대로 대체하는 서비스입니다.",
      en: "AWS Network Firewall is a managed stateful firewall at the VPC boundary that both inspects and filters traffic — the direct replacement for an on-premises inspection server."
    },
    why_wrong: {
      A: { ko: "GuardDuty는 위협을 **탐지**만 합니다. 트래픽을 차단하는 기능은 없습니다.", en: "GuardDuty only detects threats; it cannot block traffic." },
      B: { ko: "Traffic Mirroring은 복사본을 분석 도구로 보내는 기능이라 차단이 불가능합니다.", en: "Traffic Mirroring copies packets for analysis; it cannot filter." },
      D: { ko: "Firewall Manager는 여러 계정의 방화벽 정책을 **중앙 관리**하는 도구입니다. 실제 검사는 Network Firewall/WAF가 합니다.", en: "Firewall Manager centrally manages firewall policies across accounts; the inspection itself is done by Network Firewall/WAF." }
    }
  }
  ,{
    id: "exam1-16", number: 16, tags: ["QuickSight", "Analytics"],
    question: {
      en: "A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access.\nWhich solution will meet these requirements?",
      ko: "회사가 AWS에 데이터 레이크를 운영하며, 데이터는 S3와 RDS for PostgreSQL에 있습니다. 회사는 데이터 레이크의 모든 소스를 포함하는 시각화 리포팅 솔루션이 필요합니다. 경영팀만 모든 시각화에 완전한 접근 권한을 가져야 하고, 나머지 직원은 제한된 접근만 가능해야 합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.", ko: "QuickSight에서 분석을 만들고 모든 데이터 소스를 연결해 데이터셋을 만든 뒤 대시보드를 게시하고, 적절한 IAM 역할과 공유한다." },
      { k: "B", en: "Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups.", ko: "QuickSight에서 분석을 만들고 모든 데이터 소스를 연결해 데이터셋을 만든 뒤 대시보드를 게시하고, 적절한 사용자·그룹과 공유한다." },
      { k: "C", en: "Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue ETL job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.", ko: "S3 데이터에 Glue 테이블·크롤러를 만들고 ETL 작업으로 리포트를 만들어 S3에 게시한 뒤, 버킷 정책으로 접근을 제한한다." },
      { k: "D", en: "Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.", ko: "S3 데이터에 Glue 테이블·크롤러를 만들고 Athena 페더레이티드 쿼리로 RDS에 접근해 리포트를 만들어 S3에 게시한 뒤, 버킷 정책으로 제한한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "**시각화 = QuickSight**입니다. QuickSight는 S3, RDS 등 여러 소스를 연결해 대시보드를 만들고, 공유 권한은 **QuickSight 자체의 사용자와 그룹** 단위로 부여합니다. 따라서 경영팀 그룹에는 전체, 나머지 그룹에는 제한된 대시보드를 공유하면 됩니다.",
      en: "QuickSight is the visualization service; dashboards are shared with QuickSight users and groups, so management gets full dashboards and others get limited ones."
    },
    why_wrong: {
      A: { ko: "QuickSight 대시보드는 IAM 역할이 아니라 QuickSight 사용자·그룹에 공유합니다.", en: "QuickSight dashboards are shared with QuickSight users/groups, not IAM roles." },
      C: { ko: "Glue ETL은 데이터 가공 도구이며 시각화 기능이 없고, RDS 소스도 빠져 있습니다.", en: "Glue ETL does not visualize data and this option ignores the RDS source." },
      D: { ko: "Athena는 쿼리 엔진일 뿐 데이터 시각화(대시보드)를 제공하지 않습니다.", en: "Athena is a query engine, not a visualization tool." }
    }
  }
  ,{
    id: "exam1-17", number: 17, tags: ["IAM", "EC2", "S3"],
    question: {
      en: "A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket.\nWhat should the solutions architect do to meet this requirement?",
      ko: "회사가 새 비즈니스 애플리케이션을 도입합니다. 애플리케이션은 두 대의 EC2 인스턴스에서 실행되며 문서 저장에 S3 버킷을 사용합니다. 솔루션스 아키텍트는 EC2 인스턴스가 S3 버킷에 접근할 수 있도록 해야 합니다.\n무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances.", ko: "S3 버킷 접근을 허용하는 IAM 역할을 만들어 EC2 인스턴스에 연결한다." },
      { k: "B", en: "Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances.", ko: "S3 버킷 접근을 허용하는 IAM 정책을 만들어 EC2 인스턴스에 연결한다." },
      { k: "C", en: "Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.", ko: "S3 버킷 접근을 허용하는 IAM 그룹을 만들어 EC2 인스턴스에 연결한다." },
      { k: "D", en: "Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances.", ko: "S3 버킷 접근을 허용하는 IAM 사용자를 만들어 EC2 인스턴스에 연결한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "EC2에 권한을 줄 때는 **IAM 역할**을 연결합니다(인스턴스 프로파일). 임시 자격 증명이 자동 발급·교체되므로 액세스 키를 인스턴스에 심을 필요가 없습니다.\n\n※ 정책은 역할·사용자·그룹에 **붙는 문서**이고, EC2에 직접 붙는 것은 역할뿐입니다.",
      en: "You grant permissions to EC2 by attaching an IAM role (instance profile), which supplies automatically rotated temporary credentials — no keys on the instance."
    },
    why_wrong: {
      B: { ko: "정책은 인스턴스에 직접 연결할 수 없습니다. 역할에 붙여야 합니다.", en: "A policy cannot be attached to an instance; it attaches to a role." },
      C: { ko: "IAM 그룹은 사용자를 묶는 단위이며 EC2에 연결할 수 없습니다.", en: "IAM groups contain users and cannot be attached to EC2." },
      D: { ko: "IAM 사용자는 장기 액세스 키를 쓰게 되어 보안상 권장되지 않고, 인스턴스에 '연결'하는 개념도 없습니다.", en: "IAM users mean long-lived keys and cannot be attached to instances." }
    }
  }
  ,{
    id: "exam1-18", number: 18, tags: ["SQS", "Lambda", "S3", "Choose two"],
    question: {
      en: "An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket.\nA solutions architect needs to design a solution that uses durable, stateless components to process the images automatically.\nWhich combination of actions will meet these requirements? (Choose two.)",
      ko: "개발팀이 큰 이미지를 작고 압축된 이미지로 변환하는 마이크로서비스를 설계합니다. 사용자가 웹에서 이미지를 업로드하면 S3 버킷에 저장하고, Lambda 함수로 처리·압축한 뒤 다른 S3 버킷에 저장해야 합니다.\n솔루션스 아키텍트는 **내구성 있고 상태를 갖지 않는(stateless)** 구성요소로 이미지를 자동 처리하는 설계를 해야 합니다.\n어떤 조합이 요구사항을 충족합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Create an Amazon SQS queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket.", ko: "SQS 큐를 만들고, 이미지가 업로드되면 S3 버킷이 그 큐로 알림을 보내도록 구성한다." },
      { k: "B", en: "Configure the Lambda function to use the Amazon SQS queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue.", ko: "Lambda 함수가 SQS 큐를 호출 소스로 사용하게 하고, 메시지 처리가 성공하면 큐에서 메시지를 삭제한다." },
      { k: "C", en: "Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed.", ko: "Lambda가 S3 버킷을 감시하다가 업로드를 감지하면 파일 이름을 메모리의 텍스트 파일에 기록해 처리 목록을 관리한다." },
      { k: "D", en: "Launch an Amazon EC2 instance to monitor an Amazon SQS queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.", ko: "EC2 인스턴스를 띄워 SQS 큐를 감시하고, 항목이 추가되면 EC2의 텍스트 파일에 기록한 뒤 Lambda를 호출한다." },
      { k: "E", en: "Configure an Amazon EventBridge event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon SNS topic with the application owner's email address for further processing.", ko: "EventBridge 이벤트로 S3 버킷을 감시하고, 업로드되면 담당자 이메일이 등록된 SNS 토픽으로 알림을 보내 추가 처리한다." }
    ],
    answer: ["A", "B"],
    explanation: {
      ko: "**S3 이벤트 알림 → SQS → Lambda** 조합이 정답입니다.\n\nSQS가 업로드 이벤트를 내구성 있게 보관(A)하고, Lambda는 그 큐를 이벤트 소스로 삼아 자동 호출됩니다(B). 처리 성공 시 메시지가 삭제되고, 실패하면 다시 표시되어 재처리되므로 유실이 없습니다. 상태를 어디에도 들고 있지 않아 stateless 요구도 만족합니다.",
      en: "S3 event notification → SQS (durable buffer) → Lambda with the queue as its event source. Successful processing deletes the message; failures reappear for retry. No component holds state."
    },
    why_wrong: {
      C: { ko: "메모리의 텍스트 파일에 상태를 보관하는 것은 stateless도, 내구성도 아닙니다. Lambda는 버킷을 스스로 '감시'하지도 않습니다.", en: "Keeping state in memory is neither stateless nor durable, and Lambda cannot poll a bucket by itself." },
      D: { ko: "EC2를 끼우면 상태를 가진 서버가 생기고 단일 장애점이 됩니다.", en: "Adding EC2 introduces a stateful component and a single point of failure." },
      E: { ko: "이메일 알림은 사람이 개입하는 방식이라 '자동 처리'가 아닙니다.", en: "Emailing an owner is manual, not automatic processing." }
    }
  }
  ,{
    id: "exam1-19", number: 19, tags: ["Gateway Load Balancer", "VPC", "Security"],
    question: {
      en: "A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets.\nA solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "AWS에 3계층 웹 애플리케이션이 배포되어 있습니다. 웹 서버는 퍼블릭 서브넷에, 애플리케이션·데이터베이스 서버는 같은 VPC의 프라이빗 서브넷에 있습니다. 회사는 AWS Marketplace의 서드파티 가상 방화벽 어플라이언스를 검사용 VPC에 배포했고, 이 어플라이언스는 IP 패킷을 받을 수 있는 IP 인터페이스로 구성되어 있습니다.\n솔루션스 아키텍트는 트래픽이 웹 서버에 도달하기 전에 모든 트래픽을 검사하도록 통합해야 합니다.\n운영 부담을 가장 적게 하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.", ko: "애플리케이션 VPC의 퍼블릭 서브넷에 NLB를 만들어 어플라이언스로 트래픽을 보낸다." },
      { k: "B", en: "Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.", ko: "애플리케이션 VPC의 퍼블릭 서브넷에 ALB를 만들어 어플라이언스로 트래픽을 보낸다." },
      { k: "C", en: "Deploy a transit gateway in the inspection VPC. Configure route tables to route the incoming packets through the transit gateway.", ko: "검사용 VPC에 Transit Gateway를 배포하고 라우팅 테이블로 들어오는 패킷을 통과시킨다." },
      { k: "D", en: "Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance.", ko: "검사용 VPC에 Gateway Load Balancer를 배포하고, GWLB 엔드포인트로 들어오는 패킷을 받아 어플라이언스로 전달한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "**서드파티 보안 어플라이언스로 트래픽을 투명하게 흘려보내는(bump-in-the-wire) 전용 서비스가 Gateway Load Balancer**입니다.\n\nGWLB는 3계층에서 동작하며 GENEVE 캡슐화로 패킷을 어플라이언스에 그대로 전달하고, 검사 후 원래 목적지로 되돌립니다. GWLB 엔드포인트(VPC 엔드포인트)를 라우팅 테이블에 넣기만 하면 되므로 운영 부담이 가장 낮습니다.",
      en: "Gateway Load Balancer is purpose-built for transparently inserting third-party inspection appliances: it forwards packets with GENEVE encapsulation and returns them to the original destination, wired in via a GWLB endpoint in the route table."
    },
    why_wrong: {
      A: { ko: "NLB는 대상으로 트래픽을 분산할 뿐, 검사 후 원래 목적지로 되돌리는 투명 삽입 구조를 만들지 못합니다.", en: "An NLB distributes traffic to targets but cannot transparently return inspected packets to the original destination." },
      B: { ko: "ALB는 7계층 프록시라 IP 패킷 단위 검사에 맞지 않습니다.", en: "An ALB is a layer-7 proxy, not suited to raw IP packet inspection." },
      C: { ko: "Transit Gateway는 네트워크 간 연결용입니다. 어플라이언스 삽입에는 결국 GWLB가 필요하고 라우팅 구성도 훨씬 복잡합니다.", en: "Transit Gateway connects networks; appliance insertion still needs GWLB and far more routing work." }
    }
  }
  ,{
    id: "exam1-20", number: 20, tags: ["EBS", "Snapshot", "Performance"],
    question: {
      en: "A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon EBS volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance.\nA solutions architect needs to minimize the time that is required to clone the production data into the test environment.\nWhich solution will meet these requirements?",
      ko: "회사는 같은 리전의 테스트 환경으로 대량의 프로덕션 데이터를 복제하는 능력을 개선하려 합니다. 데이터는 EC2 인스턴스의 EBS 볼륨에 저장되어 있습니다. 복제된 데이터를 수정해도 프로덕션에 영향이 없어야 하고, 이 데이터를 사용하는 소프트웨어는 **일관되게 높은 I/O 성능**을 요구합니다.\n복제에 걸리는 시간을 최소화해야 합니다. 어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment.", ko: "프로덕션 EBS 볼륨의 스냅샷을 만들어 테스트 환경의 EC2 인스턴스 스토어 볼륨으로 복원한다." },
      { k: "B", en: "Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.", ko: "프로덕션 EBS 볼륨에 Multi-Attach를 구성하고 스냅샷을 만든 뒤, 프로덕션 볼륨을 테스트 인스턴스에 연결한다." },
      { k: "C", en: "Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots.", ko: "스냅샷을 만들고 새 EBS 볼륨을 생성·초기화한 뒤, 프로덕션 스냅샷에서 복원하기 전에 테스트 인스턴스에 연결한다." },
      { k: "D", en: "Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment.", ko: "스냅샷을 만든 뒤 **EBS 빠른 스냅샷 복원(FSR)** 을 켜고, 새 EBS 볼륨으로 복원해 테스트 인스턴스에 연결한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "스냅샷에서 만든 EBS 볼륨은 기본적으로 블록을 처음 읽을 때 S3에서 가져오는 **지연 로딩** 때문에 초기 I/O가 느립니다.\n\n**빠른 스냅샷 복원(Fast Snapshot Restore)** 을 켜면 복원 즉시 완전히 초기화된 상태(프로비저닝된 성능)로 동작해 '일관되게 높은 I/O'와 '복제 시간 최소화'를 동시에 만족합니다. 새 볼륨이므로 프로덕션에도 영향이 없습니다.",
      en: "Volumes restored from a snapshot are lazily loaded and slow at first. Fast Snapshot Restore delivers full provisioned performance immediately, giving both minimal clone time and consistent I/O, on independent volumes."
    },
    why_wrong: {
      A: { ko: "인스턴스 스토어에는 스냅샷을 직접 복원할 수 없고, 인스턴스 중지 시 데이터가 사라집니다.", en: "You cannot restore a snapshot onto instance store, and instance store is ephemeral." },
      B: { ko: "프로덕션 볼륨을 그대로 붙이면 테스트에서의 수정이 프로덕션에 영향을 줍니다. 요구사항 위반입니다.", en: "Attaching the production volumes means test writes hit production data." },
      C: { ko: "볼륨을 수동으로 '초기화'(모든 블록 읽기)하는 방식은 매우 오래 걸립니다. FSR이 그것을 대체합니다.", en: "Manually initializing volumes by reading every block is slow — exactly what FSR replaces." }
    }
  }
  ,{
    id: "exam1-21", number: 21, tags: ["Serverless", "DynamoDB", "CloudFront"],
    question: {
      en: "An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "이커머스 회사가 하루에 한 상품만 24시간 판매하는 원딜(one-deal-a-day) 웹사이트를 AWS에 출시하려 합니다. 피크 시간에는 시간당 수백만 요청을 밀리초 지연으로 처리해야 합니다.\n운영 부담을 가장 적게 하면서 이를 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.", ko: "여러 S3 버킷에 전체 웹사이트를 호스팅하고 CloudFront를 붙이며, 주문 데이터도 S3에 저장한다." },
      { k: "B", en: "Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.", ko: "여러 AZ의 Auto Scaling 그룹 EC2에 전체 웹사이트를 배포하고, 웹과 백엔드 API에 각각 ALB를 두며 데이터는 RDS for MySQL에 저장한다." },
      { k: "C", en: "Migrate the full application to run in containers. Host the containers on Amazon EKS. Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.", ko: "애플리케이션을 컨테이너로 옮겨 EKS에서 호스팅하고, Cluster Autoscaler로 파드를 조절하며 데이터는 RDS for MySQL에 저장한다." },
      { k: "D", en: "Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB.", ko: "S3에 정적 콘텐츠를 호스팅하고 CloudFront를 배포하며, 백엔드 API는 API Gateway + Lambda로, 데이터는 DynamoDB에 저장한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "**밀리초 지연 + 폭발적 트래픽 + 운영 부담 최소** → 완전 서버리스 조합입니다.\n\n정적 콘텐츠는 S3 + CloudFront로 엣지에서 제공하고, 주문 API는 API Gateway + Lambda가 자동으로 확장하며, DynamoDB는 한 자릿수 밀리초 응답을 제공합니다. 관리할 서버가 하나도 없습니다.",
      en: "Fully serverless: S3 + CloudFront for static content at the edge, API Gateway + Lambda scaling automatically for the APIs, and DynamoDB for single-digit-millisecond data access — no servers to manage."
    },
    why_wrong: {
      A: { ko: "S3만으로는 주문 처리 같은 동적 백엔드 로직을 구현할 수 없습니다.", en: "S3 alone cannot run the dynamic order-processing logic." },
      B: { ko: "EC2·ALB·RDS를 직접 운영해야 하고, RDS는 급격한 트래픽 폭증에 대응하기 어렵습니다.", en: "You operate EC2, ALBs and RDS, and RDS struggles with sudden extreme bursts." },
      C: { ko: "EKS는 이 중 운영 부담이 가장 큰 선택입니다(클러스터 관리 필요).", en: "EKS carries the most operational overhead of these options." }
    }
  }
  ,{
    id: "exam1-22", number: 22, tags: ["S3 Storage Class", "Cost"],
    question: {
      en: "A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files.\nWhich storage option meets these requirements?",
      ko: "솔루션스 아키텍트가 새 디지털 미디어 애플리케이션의 스토리지를 S3로 설계합니다. 미디어 파일은 **가용 영역 하나의 손실에도 견뎌야** 하고, 일부는 자주 접근되지만 다른 일부는 **예측 불가능한 패턴**으로 드물게 접근됩니다. 저장·검색 비용을 최소화해야 합니다.\n어떤 스토리지 옵션이 적합합니까?"
    },
    options: [
      { k: "A", en: "S3 Standard", ko: "S3 Standard" },
      { k: "B", en: "S3 Intelligent-Tiering", ko: "S3 Intelligent-Tiering" },
      { k: "C", en: "S3 Standard-Infrequent Access (S3 Standard-IA)", ko: "S3 Standard-IA (자주 접근하지 않는 계층)" },
      { k: "D", en: "S3 One Zone-Infrequent Access (S3 One Zone-IA)", ko: "S3 One Zone-IA (단일 AZ)" }
    ],
    answer: ["B"],
    explanation: {
      ko: "핵심 키워드는 **unpredictable(예측 불가능한 접근 패턴)** 입니다. 접근 패턴을 모를 때 자동으로 계층을 옮겨 비용을 최적화하는 것이 **S3 Intelligent-Tiering**입니다. 여러 AZ에 저장되므로 AZ 손실에도 견딥니다.\n\n※ 시험 공식: **접근 패턴을 모르면 Intelligent-Tiering**, 알고 있고 드물게 접근하면 Standard-IA.",
      en: "\"Unpredictable\" access patterns is the tell for S3 Intelligent-Tiering, which moves objects between tiers automatically and stores data across multiple AZs."
    },
    why_wrong: {
      A: { ko: "가장 안전하지만 드물게 접근되는 파일까지 비싼 요금을 내므로 비용 최소화가 아닙니다.", en: "Safe but pays Standard rates even for rarely accessed files." },
      C: { ko: "Standard-IA는 접근 패턴을 알고 있을 때 적합합니다. 자주 접근되는 파일이 섞이면 검색 요금이 붙어 비싸질 수 있습니다.", en: "Standard-IA suits known infrequent access; retrieval fees hurt when access is actually frequent." },
      D: { ko: "One Zone-IA는 단일 AZ에만 저장되어 **AZ 손실에 견뎌야 한다**는 요구사항을 위반합니다.", en: "One Zone-IA stores data in a single AZ, violating the AZ-resilience requirement." }
    }
  }
  ,{
    id: "exam1-23", number: 23, tags: ["S3 Lifecycle", "Glacier", "Cost"],
    question: {
      en: "A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely.\nWhich storage solution will meet these requirements MOST cost-effectively?",
      ko: "회사가 백업 파일을 S3 Standard에 저장합니다. 파일은 1개월간 자주 접근되지만 그 이후에는 접근되지 않습니다. 회사는 파일을 **무기한 보관**해야 합니다.\n가장 비용 효율적인 스토리지 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Configure S3 Intelligent-Tiering to automatically migrate objects.", ko: "S3 Intelligent-Tiering으로 객체를 자동 이동하게 구성한다." },
      { k: "B", en: "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.", ko: "1개월 후 S3 Standard에서 S3 Glacier Deep Archive로 전환하는 수명 주기 구성을 만든다." },
      { k: "C", en: "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.", ko: "1개월 후 Standard-IA로 전환하는 수명 주기 구성을 만든다." },
      { k: "D", en: "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month.", ko: "1개월 후 One Zone-IA로 전환하는 수명 주기 구성을 만든다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "접근 패턴이 **명확**합니다(1개월 후 전혀 접근 안 함) + **무기한 보관**. 이때 가장 싼 계층은 **Glacier Deep Archive**이고, 수명 주기 정책으로 자동 전환하면 됩니다. 꺼낼 일이 없으니 긴 복구 시간(수 시간)도 문제되지 않습니다.",
      en: "The access pattern is known — untouched after one month, kept forever — so the cheapest tier, Glacier Deep Archive, via a lifecycle transition is optimal; long retrieval times don't matter."
    },
    why_wrong: {
      A: { ko: "Intelligent-Tiering은 패턴을 모를 때 쓰며, 객체당 모니터링 비용이 붙습니다. 패턴이 명확하면 더 비쌉니다.", en: "Intelligent-Tiering is for unknown patterns and adds monitoring charges." },
      C: { ko: "Standard-IA는 Deep Archive보다 저장 비용이 훨씬 비쌉니다.", en: "Standard-IA storage costs far more than Deep Archive." },
      D: { ko: "One Zone-IA도 Deep Archive보다 비싸고 내구성(단일 AZ)도 낮습니다.", en: "One Zone-IA is pricier than Deep Archive and less durable." }
    }
  }
  ,{
    id: "exam1-24", number: 24, tags: ["Cost Explorer", "Billing"],
    question: {
      en: "A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling.\nHow should the solutions architect generate the information with the LEAST operational overhead?",
      ko: "회사가 최근 청구서에서 EC2 비용 증가를 확인했습니다. 청구 팀은 일부 EC2 인스턴스의 원치 않는 인스턴스 타입 수직 확장을 발견했습니다. 솔루션스 아키텍트는 최근 2개월 EC2 비용을 비교하는 그래프를 만들고 원인을 심층 분석해야 합니다.\n운영 부담을 가장 적게 하면서 정보를 얻는 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.", ko: "AWS Budgets로 예산 보고서를 만들어 인스턴스 타입별 EC2 비용을 비교한다." },
      { k: "B", en: "Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.", ko: "Cost Explorer의 세분화된 필터링으로 인스턴스 타입별 EC2 비용을 심층 분석한다." },
      { k: "C", en: "Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.", ko: "Billing and Cost Management 대시보드의 그래프로 최근 2개월 인스턴스 타입별 비용을 비교한다." },
      { k: "D", en: "Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.", ko: "Cost and Usage Report를 S3로 보내고, QuickSight로 인스턴스 타입별 대화형 그래프를 만든다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "Cost Explorer는 기본 제공되는 도구로, 인스턴스 타입·태그·리전 등으로 **세분화 필터링**하고 기간을 비교하는 그래프를 바로 그려줍니다. 설정할 것이 사실상 없어 운영 부담이 가장 낮습니다.",
      en: "Cost Explorer already provides granular filtering (by instance type, tag, Region) and period comparison graphs out of the box — nothing to build."
    },
    why_wrong: {
      A: { ko: "Budgets는 예산 초과를 **알림**하는 도구이고 심층 분석용 그래프를 제공하지 않습니다.", en: "Budgets alerts on thresholds; it is not an analysis tool." },
      C: { ko: "청구 대시보드는 요약 수준이라 인스턴스 타입 단위 심층 분석에 한계가 있습니다.", en: "The billing dashboard is summary-level only." },
      D: { ko: "CUR + QuickSight는 가장 강력하지만 파이프라인을 직접 구축해야 해서 운영 부담이 큽니다.", en: "CUR + QuickSight is powerful but requires building a pipeline." }
    }
  }
  ,{
    id: "exam1-25", number: 25, tags: ["Lambda", "SQS", "Decoupling"],
    question: {
      en: "A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database.\nDuring the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort.\nWhich solution will meet these requirements?",
      ko: "회사가 애플리케이션을 설계합니다. Lambda 함수가 API Gateway로 정보를 받아 Aurora PostgreSQL에 저장합니다.\nPoC 단계에서 대량 데이터를 적재하기 위해 Lambda 할당량을 크게 늘려야 했습니다. 솔루션스 아키텍트는 확장성을 높이고 구성 작업을 최소화하는 새 설계를 권고해야 합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.", ko: "Lambda 코드를 EC2에서 실행되는 Apache Tomcat 코드로 리팩터링하고 JDBC로 DB에 연결한다." },
      { k: "B", en: "Change the platform from Aurora to Amazon DynamoDB. Provision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.", ko: "Aurora를 DynamoDB로 바꾸고 DAX 클러스터를 프로비저닝해 기존 호출을 DAX로 보낸다." },
      { k: "C", en: "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon SNS.", ko: "Lambda 함수를 두 개 두고 하나는 수신, 하나는 적재를 담당하게 하며 SNS로 연결한다." },
      { k: "D", en: "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon SQS queue.", ko: "Lambda 함수를 두 개 두고 하나는 수신, 하나는 적재를 담당하게 하며 SQS 큐로 연결한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "수신과 DB 적재를 **큐로 분리**하면, 순간적으로 몰리는 요청은 큐가 흡수하고 적재 Lambda는 DB가 감당할 속도로 처리합니다. 동시 실행 할당량을 무리하게 늘릴 필요가 없어지고, 처리 실패 시 재시도도 자동입니다. 구성도 SQS 하나 추가로 끝납니다.",
      en: "Decoupling ingestion from database loading with an SQS queue lets the queue absorb bursts while the loader consumes at a rate the database can handle — no need to raise Lambda quotas, and retries come free."
    },
    why_wrong: {
      A: { ko: "서버 운영으로 되돌아가는 선택이며 구성 작업이 가장 많습니다.", en: "Moves back to managing servers — the most configuration effort." },
      B: { ko: "관계형 DB를 DynamoDB로 바꾸는 것은 데이터 모델·코드 전면 수정이 필요하고, 문제의 원인(버퍼 부재)과도 무관합니다.", en: "Replacing a relational database with DynamoDB is a rewrite and does not address the missing buffer." },
      C: { ko: "SNS는 메시지를 보관하지 않고 즉시 밀어내므로 부하 완충(버퍼) 역할을 못 합니다.", en: "SNS pushes immediately and does not buffer load." }
    }
  }
  ,{
    id: "exam1-26", number: 26, tags: ["AWS Config", "Compliance"],
    question: {
      en: "A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes.\nWhat should a solutions architect do to accomplish this goal?",
      ko: "회사는 S3 버킷에 승인되지 않은 구성 변경이 없는지 확인하기 위해 AWS 클라우드 배포를 검토해야 합니다.\n솔루션스 아키텍트는 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Turn on AWS Config with the appropriate rules.", ko: "적절한 규칙과 함께 AWS Config를 켠다." },
      { k: "B", en: "Turn on AWS Trusted Advisor with the appropriate checks.", ko: "적절한 검사와 함께 AWS Trusted Advisor를 켠다." },
      { k: "C", en: "Turn on Amazon Inspector with the appropriate assessment template.", ko: "적절한 평가 템플릿과 함께 Amazon Inspector를 켠다." },
      { k: "D", en: "Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon CloudWatch Events).", ko: "S3 서버 액세스 로깅을 켜고 EventBridge를 구성한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "**리소스 구성(configuration)의 변경 추적과 규칙 준수 평가는 AWS Config**입니다. `s3-bucket-public-read-prohibited` 같은 관리형 규칙으로 원하는 상태를 정의하면, 벗어난 버킷을 자동으로 비준수로 표시하고 변경 이력도 남깁니다.",
      en: "AWS Config records resource configuration changes and evaluates them against rules (e.g. s3-bucket-public-read-prohibited), flagging non-compliant buckets with a change history."
    },
    why_wrong: {
      B: { ko: "Trusted Advisor는 정해진 모범 사례 점검만 제공하며 변경 이력 추적이나 사용자 정의 규칙 평가는 못 합니다.", en: "Trusted Advisor gives fixed best-practice checks, not change tracking or custom rules." },
      C: { ko: "Inspector는 EC2·컨테이너·Lambda의 취약점을 스캔하는 서비스로 S3 구성 검토와 무관합니다.", en: "Inspector scans workloads for vulnerabilities, not S3 configuration." },
      D: { ko: "서버 액세스 로깅은 **객체 접근 요청**을 기록합니다. 버킷 구성 변경 감시 용도가 아닙니다.", en: "Server access logging records object requests, not configuration changes." }
    }
  }
  ,{
    id: "exam1-27", number: 27, tags: ["CloudWatch", "IAM", "Least Privilege"],
    question: {
      en: "A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege.\nWhich solution will meet these requirements?",
      ko: "회사가 새 애플리케이션을 출시하며 지표를 CloudWatch 대시보드에 표시합니다. 제품 관리자가 주기적으로 이 대시보드에 접근해야 하는데 AWS 계정이 없습니다. 솔루션스 아키텍트는 **최소 권한 원칙**에 따라 접근을 제공해야 합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.", ko: "CloudWatch 콘솔에서 대시보드를 공유한다. 제품 관리자의 이메일 주소를 입력해 공유 절차를 완료하고 공유 링크를 전달한다." },
      { k: "B", en: "Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.", ko: "제품 관리자용 IAM 사용자를 만들어 CloudWatchReadOnlyAccess 정책을 붙이고, 로그인 정보와 대시보드 URL을 전달한다." },
      { k: "C", en: "Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.", ko: "직원용 IAM 사용자를 만들어 ViewOnlyAccess 정책을 붙이고 로그인 정보를 전달한 뒤, 콘솔에서 이름으로 대시보드를 찾게 한다." },
      { k: "D", en: "Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard.", ko: "퍼블릭 서브넷에 배스천 서버를 두고 필요할 때 시작해 RDP 정보를 공유하며, 브라우저에 캐시된 자격 증명으로 대시보드를 열게 한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "CloudWatch에는 **대시보드 공유** 기능이 내장되어 있습니다. 이메일 주소를 지정해 공유하면 AWS 계정이 없는 사람도 링크로 **그 대시보드만** 볼 수 있습니다. IAM 사용자를 만들 필요가 없으니 최소 권한 원칙에 가장 부합합니다.",
      en: "CloudWatch has built-in dashboard sharing: share to a specific email and the recipient views only that dashboard via a link, with no AWS account or IAM user — the least privilege."
    },
    why_wrong: {
      B: { ko: "CloudWatchReadOnlyAccess는 계정의 **모든** CloudWatch 리소스를 볼 수 있게 하므로 필요 이상의 권한입니다.", en: "CloudWatchReadOnlyAccess exposes every CloudWatch resource — more than needed." },
      C: { ko: "ViewOnlyAccess는 계정 전반의 리소스를 조회할 수 있는 훨씬 넓은 권한입니다.", en: "ViewOnlyAccess is even broader, spanning the whole account." },
      D: { ko: "배스천 + RDP + 캐시된 자격 증명은 과도하게 복잡하고 오히려 위험합니다.", en: "A bastion with shared RDP and cached credentials is complex and less secure." }
    }
  }
  ,{
    id: "exam1-28", number: 28, tags: ["IAM Identity Center", "Active Directory", "SSO"],
    question: {
      en: "A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory.\nWhich solution will meet these requirements?",
      ko: "회사가 애플리케이션을 AWS로 마이그레이션하며, 애플리케이션은 서로 다른 계정에 배포됩니다. 계정은 AWS Organizations로 중앙 관리합니다. 보안 팀은 모든 계정에 걸친 SSO 솔루션이 필요하고, 사용자와 그룹은 **온프레미스 자체 관리 Microsoft AD에서 계속 관리**해야 합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.", ko: "AWS SSO를 활성화하고, AWS Managed Microsoft AD를 사용해 자체 관리 AD와 **단방향** 포리스트/도메인 트러스트를 만들어 연결한다." },
      { k: "B", en: "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.", ko: "AWS SSO를 활성화하고, AWS Managed Microsoft AD로 **양방향** 포리스트 트러스트를 만들어 연결한다." },
      { k: "C", en: "Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.", ko: "AWS Directory Service를 사용해 자체 관리 AD와 양방향 트러스트 관계를 만든다." },
      { k: "D", en: "Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.", ko: "온프레미스에 IdP를 배포하고 AWS SSO를 활성화한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "AWS SSO(현 IAM Identity Center)는 Organizations 전체 계정에 SSO를 제공하고, 자체 관리 AD를 ID 소스로 쓸 때는 **AWS Managed Microsoft AD와의 트러스트**로 연결합니다.\n\n이때 AWS 쪽이 온프레미스 사용자를 인증하기만 하면 되므로 **단방향 트러스트로 충분**합니다. 최소 권한·최소 노출 관점에서 단방향이 정답입니다.",
      en: "AWS SSO (IAM Identity Center) covers all Organizations accounts, and a self-managed AD is connected through a trust with AWS Managed Microsoft AD. Only AWS needs to authenticate on-premises users, so a one-way trust suffices."
    },
    why_wrong: {
      B: { ko: "양방향 트러스트는 온프레미스 도메인도 AWS 디렉터리를 신뢰하게 만들어 불필요하게 넓은 신뢰 관계입니다.", en: "A two-way trust needlessly makes the on-premises domain trust AWS as well." },
      C: { ko: "Directory Service만으로는 여러 계정에 걸친 SSO(권한 세트 배포)를 제공하지 않습니다.", en: "Directory Service alone does not provide cross-account SSO." },
      D: { ko: "새 IdP를 온프레미스에 별도로 구축하는 것은 이미 있는 AD를 활용하지 못하는 불필요한 작업입니다.", en: "Deploying a separate IdP ignores the existing AD and adds work." }
    }
  }
  ,{
    id: "exam1-29", number: 29, tags: ["Global Accelerator", "NLB", "Multi-Region"],
    question: {
      en: "A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions.\nThe company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions.\nWhich solution will meet these requirements?",
      ko: "회사가 UDP 연결을 사용하는 VoIP 서비스를 제공합니다. 서비스는 Auto Scaling 그룹의 EC2 인스턴스로 구성되며 여러 리전에 배포되어 있습니다.\n회사는 사용자를 **가장 지연이 낮은 리전**으로 라우팅하고, **리전 간 자동 페일오버**도 필요합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region.", ko: "NLB와 대상 그룹을 배포해 Auto Scaling 그룹과 연결하고, 각 리전에서 NLB를 AWS Global Accelerator 엔드포인트로 사용한다." },
      { k: "B", en: "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.", ko: "ALB와 대상 그룹을 배포해 Auto Scaling 그룹과 연결하고, 각 리전에서 ALB를 Global Accelerator 엔드포인트로 사용한다." },
      { k: "C", en: "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB. Create an Amazon CloudFront distribution that uses the latency record as an origin.", ko: "NLB를 배포하고 각 NLB 별칭을 가리키는 Route 53 지연 시간 레코드를 만든 뒤, 그 레코드를 오리진으로 CloudFront 배포를 만든다." },
      { k: "D", en: "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB. Deploy an Amazon CloudFront distribution that uses the weighted record as an origin.", ko: "ALB를 배포하고 각 ALB 별칭을 가리키는 Route 53 가중치 레코드를 만든 뒤, 그 레코드를 오리진으로 CloudFront를 배포한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "두 개의 키워드가 답을 고정합니다.\n\n1. **UDP** → 4계층인 **NLB**만 가능(ALB는 HTTP/HTTPS 전용)\n2. **최저 지연 라우팅 + 자동 리전 페일오버** → **AWS Global Accelerator** (엣지에서 최적 리전으로 보내고, 상태 확인 실패 시 다른 리전으로 즉시 전환. 고정 애니캐스트 IP 제공)",
      en: "UDP rules out ALB, leaving NLB; and Global Accelerator provides lowest-latency edge routing plus automatic cross-Region failover with static anycast IPs."
    },
    why_wrong: {
      B: { ko: "ALB는 HTTP/HTTPS만 처리하므로 UDP 트래픽을 다룰 수 없습니다.", en: "ALB handles only HTTP/HTTPS, not UDP." },
      C: { ko: "CloudFront는 HTTP(S) 콘텐츠 전송 서비스라 UDP VoIP에 쓸 수 없고, Route 53 DNS 페일오버는 TTL 때문에 전환이 느립니다.", en: "CloudFront serves HTTP(S) only, and DNS failover is slow due to TTL caching." },
      D: { ko: "가중치 레코드는 지연 기반 라우팅이 아니고, ALB·CloudFront 모두 UDP를 지원하지 않습니다.", en: "Weighted records are not latency-based, and neither ALB nor CloudFront supports UDP." }
    }
  }
  ,{
    id: "exam1-30", number: 30, tags: ["RDS", "Cost"],
    question: {
      en: "A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance.\nWhich solution meets these requirements MOST cost-effectively?",
      ko: "개발 팀이 Performance Insights가 켜진 범용 RDS for MySQL DB 인스턴스에서 매월 리소스 집약적인 테스트를 실행합니다. 테스트는 한 달에 한 번 48시간 동안 진행되며, 이 데이터베이스를 사용하는 유일한 프로세스입니다. 팀은 **인스턴스의 컴퓨팅·메모리 속성을 줄이지 않고** 테스트 실행 비용을 절감하려 합니다.\n가장 비용 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Stop the DB instance when tests are completed. Restart the DB instance when required.", ko: "테스트가 끝나면 DB 인스턴스를 중지하고, 필요할 때 다시 시작한다." },
      { k: "B", en: "Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.", ko: "DB 인스턴스에 오토스케일링 정책을 적용해 테스트 종료 시 자동 조정한다." },
      { k: "C", en: "Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.", ko: "테스트 종료 시 스냅샷을 만들고 인스턴스를 종료한 뒤, 필요할 때 스냅샷에서 복원한다." },
      { k: "D", en: "Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required.", ko: "테스트 종료 시 저용량 인스턴스로 변경하고, 필요할 때 다시 변경한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "RDS 인스턴스를 **중지**하면 인스턴스 시간 요금이 발생하지 않습니다(스토리지·스냅샷 요금만 부과). 컴퓨팅·메모리 사양은 그대로 유지되고, 필요할 때 시작하면 됩니다. 한 달에 48시간만 쓰는 패턴에 가장 잘 맞습니다.\n\n※ 주의: RDS 중지는 최대 7일 후 자동으로 다시 시작되므로, 실제로는 일정(EventBridge)으로 중지를 반복 처리합니다. 그래도 선택지 중에서는 A가 정답입니다.",
      en: "Stopping an RDS instance stops instance-hour billing (you still pay for storage) while preserving the instance class — ideal for 48 hours of use per month."
    },
    why_wrong: {
      B: { ko: "RDS 인스턴스 자체에는 컴퓨팅 오토스케일링이 없습니다(스토리지 자동 확장만 존재).", en: "RDS has no compute auto scaling for a DB instance — only storage autoscaling." },
      C: { ko: "매번 종료·복원은 복원 시간이 오래 걸리고 실수로 데이터를 잃을 위험도 있습니다.", en: "Terminate-and-restore is slow and risky compared with stopping." },
      D: { ko: "저용량으로 변경하면 요금은 줄지만 '컴퓨팅·메모리를 줄이지 말라'는 요구를 위반합니다.", en: "Downsizing violates the requirement to keep compute and memory attributes." }
    }
  }
  ,{
    id: "exam1-31", number: 31, tags: ["AWS Config", "Tagging"],
    question: {
      en: "A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances, Amazon RDS DB instances, and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check.\nWhat should a solutions architect do to accomplish this?",
      ko: "AWS에서 웹 애플리케이션을 호스팅하는 회사가 모든 EC2 인스턴스, RDS DB 인스턴스, Redshift 클러스터에 태그가 구성되어 있는지 확인하려 합니다. 이 검사를 구성·운영하는 노력을 최소화하려 합니다.\n무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use AWS Config rules to define and detect resources that are not properly tagged.", ko: "AWS Config 규칙으로 태그가 올바르지 않은 리소스를 정의하고 감지한다." },
      { k: "B", en: "Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.", ko: "Cost Explorer로 태그가 없는 리소스를 표시하고 수동으로 태그를 붙인다." },
      { k: "C", en: "Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.", ko: "모든 리소스의 태그를 확인하는 API 호출 코드를 작성해 EC2에서 주기적으로 실행한다." },
      { k: "D", en: "Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.", ko: "태그 확인 API 코드를 작성해 CloudWatch 일정으로 Lambda를 주기 실행한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "AWS Config의 관리형 규칙 **`required-tags`** 를 켜면 지정한 리소스 타입에 필요한 태그가 있는지 자동으로 계속 평가합니다. 코드를 작성하거나 스케줄을 관리할 필요가 없어 구성·운영 노력이 가장 적습니다.",
      en: "The AWS Config managed rule required-tags continuously evaluates whether specified resource types carry the required tags — no code and no schedule to maintain."
    },
    why_wrong: {
      B: { ko: "Cost Explorer는 비용 분석 도구이며, 수동 태깅은 지속적인 검사가 아닙니다.", en: "Cost Explorer is for cost analysis, and manual tagging is not a continuous check." },
      C: { ko: "코드 작성 + EC2 상시 운영이라 가장 손이 많이 갑니다.", en: "Writing code and running an EC2 instance is the most effort." },
      D: { ko: "Lambda로 자동화해도 코드를 직접 작성·유지해야 합니다. Config 규칙은 이미 만들어져 있습니다.", en: "Even automated, you still write and maintain the code that Config already provides." }
    }
  }
  ,{
    id: "exam1-32", number: 32, tags: ["S3", "Static Website", "Cost"],
    question: {
      en: "A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images.\nWhich method is the MOST cost-effective for hosting the website?",
      ko: "개발 팀이 다른 팀들이 접근할 웹사이트를 호스팅해야 합니다. 사이트 콘텐츠는 HTML, CSS, 클라이언트 사이드 JavaScript, 이미지로 구성됩니다.\n가장 비용 효율적인 호스팅 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Containerize the website and host it in AWS Fargate.", ko: "웹사이트를 컨테이너화해 AWS Fargate에서 호스팅한다." },
      { k: "B", en: "Create an Amazon S3 bucket and host the website there.", ko: "S3 버킷을 만들어 거기서 웹사이트를 호스팅한다." },
      { k: "C", en: "Deploy a web server on an Amazon EC2 instance to host the website.", ko: "EC2 인스턴스에 웹 서버를 배포해 호스팅한다." },
      { k: "D", en: "Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.", ko: "Express.js를 사용하는 Lambda 대상과 ALB를 구성한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "**서버 사이드 로직이 없는 정적 콘텐츠**(HTML/CSS/클라이언트 JS/이미지)는 S3 정적 웹사이트 호스팅이 정답입니다. 서버가 없어 유휴 비용이 0이고, 저장 용량과 요청 수만큼만 지불합니다.\n\n※ 이 사이트(SAA 문제 모음)도 정확히 같은 이유로 S3나 GitHub Pages에 올릴 수 있습니다.",
      en: "Purely static content belongs in S3 static website hosting: no servers, no idle cost, pay only for storage and requests."
    },
    why_wrong: {
      A: { ko: "Fargate는 컨테이너가 계속 실행되는 만큼 과금됩니다. 정적 파일에는 과잉입니다.", en: "Fargate bills for running containers — overkill for static files." },
      C: { ko: "EC2는 24시간 인스턴스 요금 + 패치·확장 운영 부담이 있습니다.", en: "EC2 means paying around the clock plus patching and scaling." },
      D: { ko: "ALB는 시간당 고정 요금이 발생하고, 서버 프레임워크가 필요 없는 콘텐츠입니다.", en: "An ALB has an hourly charge, and no server framework is needed here." }
    }
  }
  ,{
    id: "exam1-33", number: 33, tags: ["Kinesis Data Streams", "Lambda", "DynamoDB"],
    question: {
      en: "A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval.\nWhat should a solutions architect recommend to meet these requirements?",
      ko: "회사가 AWS에서 온라인 마켓플레이스 웹 애플리케이션을 운영하며 피크 시간에 수십만 사용자를 처리합니다. 회사는 수백만 건의 금융 거래 상세 정보를 **여러 내부 애플리케이션과 근실시간으로 공유**할 확장 가능한 솔루션이 필요합니다. 또한 거래는 저지연 조회를 위해 문서 데이터베이스에 저장되기 전에 **민감 데이터를 제거하는 처리**를 거쳐야 합니다.\n무엇을 권고해야 합니까?"
    },
    options: [
      { k: "A", en: "Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.", ko: "거래 데이터를 DynamoDB에 저장하고, 쓰기 시 민감 데이터를 제거하는 규칙을 DynamoDB에 설정한다. DynamoDB Streams로 다른 애플리케이션과 공유한다." },
      { k: "B", en: "Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.", ko: "Kinesis Data Firehose로 스트리밍해 DynamoDB와 S3에 저장하고, Firehose의 Lambda 통합으로 민감 데이터를 제거하며, 다른 애플리케이션은 S3의 데이터를 소비한다." },
      { k: "C", en: "Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream.", ko: "Kinesis Data Streams로 스트리밍하고, Lambda 통합으로 각 거래에서 민감 데이터를 제거한 뒤 DynamoDB에 저장한다. 다른 애플리케이션은 Kinesis 스트림에서 데이터를 소비한다." },
      { k: "D", en: "Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3.", ko: "거래 데이터를 배치로 S3에 파일로 저장하고, Lambda로 각 파일을 처리해 민감 데이터를 제거한 뒤 DynamoDB에 저장한다. 다른 애플리케이션은 S3의 파일을 소비한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "**여러 소비자가 같은 스트림을 각자 읽어야 하고(near-real-time) + 중간 처리(민감 데이터 제거)** 가 필요하면 Kinesis Data Streams입니다.\n\nKinesis Data Streams는 여러 컨슈머가 동일한 데이터를 독립적으로 읽을 수 있고(보존 기간 내 재처리 가능), Lambda가 스트림을 소비해 정제 후 DynamoDB(문서형 저장·저지연 조회)에 넣습니다.\n\n※ Firehose와의 구분: **Firehose는 목적지로 적재만** 하고 여러 컨슈머가 읽는 스트림을 제공하지 않습니다.",
      en: "Kinesis Data Streams lets multiple internal applications read the same records independently in near real time, while a Lambda consumer scrubs sensitive fields and writes to DynamoDB for low-latency lookups."
    },
    why_wrong: {
      A: { ko: "DynamoDB에는 '쓰기 시 민감 데이터를 제거하는 규칙' 같은 기능이 없습니다. DynamoDB Streams는 단일 테이블 변경 스트림으로 컨슈머 수도 제한적입니다.", en: "DynamoDB has no write-time scrubbing rules, and DynamoDB Streams supports only a limited number of consumers." },
      B: { ko: "Firehose는 여러 애플리케이션이 실시간으로 읽는 스트림이 아니고, S3에 배치로 적재되어 근실시간 공유에 부적합합니다.", en: "Firehose only delivers to destinations in batches — not a stream several apps read in near real time." },
      D: { ko: "배치 파일 방식은 근실시간이 아니며 처리 지연이 큽니다.", en: "Batched files are not near real time." }
    }
  }
  ,{
    id: "exam1-34", number: 34, tags: ["AWS Config", "CloudTrail", "Audit"],
    question: {
      en: "A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사가 AWS에서 다중 계층 애플리케이션을 호스팅합니다. 컴플라이언스·거버넌스·감사·보안을 위해 AWS 리소스의 **구성 변경을 추적**하고 이 리소스에 대한 **API 호출 이력을 기록**해야 합니다.\n무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.", ko: "CloudTrail로 구성 변경을 추적하고 AWS Config로 API 호출을 기록한다." },
      { k: "B", en: "Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.", ko: "AWS Config로 구성 변경을 추적하고 CloudTrail로 API 호출을 기록한다." },
      { k: "C", en: "Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.", ko: "AWS Config로 구성 변경을 추적하고 CloudWatch로 API 호출을 기록한다." },
      { k: "D", en: "Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.", ko: "CloudTrail로 구성 변경을 추적하고 CloudWatch로 API 호출을 기록한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "역할을 외우면 끝나는 문제입니다.\n\n- **AWS Config** = 리소스의 **구성(설정) 변경** 추적, 구성 이력·준수 여부 평가\n- **CloudTrail** = **누가 무엇을 호출했는지** API 호출 이력 기록\n- **CloudWatch** = 지표·로그 **모니터링**\n\n따라서 구성 변경은 Config, API 호출은 CloudTrail입니다.",
      en: "AWS Config records resource configuration changes; CloudTrail records API calls (who did what); CloudWatch monitors metrics and logs."
    },
    why_wrong: {
      A: { ko: "두 서비스의 역할이 서로 바뀌었습니다.", en: "The two services are swapped." },
      C: { ko: "CloudWatch는 API 호출 감사 로그를 기록하는 서비스가 아닙니다.", en: "CloudWatch does not record API call history." },
      D: { ko: "CloudTrail은 구성 변경 추적 서비스가 아니고, CloudWatch도 API 감사용이 아닙니다.", en: "Both halves are wrong." }
    }
  }
  ,{
    id: "exam1-35", number: 35, tags: ["Shield Advanced", "DDoS", "Security"],
    question: {
      en: "A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks.\nWhich solution meets these requirements?",
      ko: "회사가 퍼블릭 웹 애플리케이션을 AWS에 출시하려 합니다. 아키텍처는 VPC 내 EC2 인스턴스와 그 앞의 ELB로 구성되며, DNS는 서드파티 서비스를 사용합니다. 솔루션스 아키텍트는 **대규모 DDoS 공격을 탐지하고 방어**할 솔루션을 권고해야 합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Enable Amazon GuardDuty on the account.", ko: "계정에 Amazon GuardDuty를 활성화한다." },
      { k: "B", en: "Enable Amazon Inspector on the EC2 instances.", ko: "EC2 인스턴스에 Amazon Inspector를 활성화한다." },
      { k: "C", en: "Enable AWS Shield and assign Amazon Route 53 to it.", ko: "AWS Shield를 활성화하고 Route 53을 할당한다." },
      { k: "D", en: "Enable AWS Shield Advanced and assign the ELB to it.", ko: "AWS Shield Advanced를 활성화하고 ELB를 할당한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "**대규모(large-scale) DDoS 탐지 + 방어**는 Shield Advanced입니다. Shield Standard는 모든 계정에 기본 제공되지만 L3/L4 일반 공격만 자동 완화하고, Shield Advanced는 보호 리소스(ELB, CloudFront, Global Accelerator, Route 53, EIP)를 지정해 고급 완화·실시간 가시성·DDoS 대응팀(SRT) 지원·요금 보호를 제공합니다.\n\n여기서 보호할 진입점은 ELB이고, DNS는 서드파티라 Route 53은 대상이 아닙니다.",
      en: "Shield Advanced provides advanced DDoS detection and mitigation on protected resources; the entry point here is the ELB (DNS is third-party, so Route 53 is irrelevant)."
    },
    why_wrong: {
      A: { ko: "GuardDuty는 위협 탐지 서비스로, DDoS를 완화하지 않습니다.", en: "GuardDuty detects threats but does not mitigate DDoS." },
      B: { ko: "Inspector는 취약점 스캔 서비스입니다.", en: "Inspector is a vulnerability scanner." },
      C: { ko: "DNS를 서드파티로 쓰고 있어 Route 53에 할당하는 것은 의미가 없고, Shield Standard는 대규모 공격에 대한 고급 방어를 제공하지 않습니다.", en: "DNS is third-party so Route 53 is not in the path, and Shield Standard lacks advanced protections." }
    }
  }
  ,{
    id: "exam1-36", number: 36, tags: ["KMS", "S3", "Multi-Region"],
    question: {
      en: "A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사가 AWS에 애플리케이션을 구축합니다. 애플리케이션은 두 개 리전의 S3 버킷에 데이터를 저장하며, 모든 데이터는 **KMS 고객 관리형 키**로 암호화해야 합니다. 두 버킷의 데이터는 **같은 KMS 키로** 암호화·복호화되어야 하고, 데이터와 키는 두 리전 각각에 저장되어야 합니다.\n운영 부담을 가장 적게 하면서 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.", ko: "각 리전에 버킷을 만들고 SSE-S3로 서버 측 암호화를 구성한 뒤 버킷 간 복제를 구성한다." },
      { k: "B", en: "Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.", ko: "고객 관리형 **다중 리전 KMS 키**를 만들고, 각 리전에 버킷을 만들어 복제를 구성한다. 애플리케이션은 그 키로 **클라이언트 측 암호화**를 사용한다." },
      { k: "C", en: "Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.", ko: "각 리전에 고객 관리형 KMS 키와 버킷을 만들고 SSE-S3로 암호화한 뒤 복제를 구성한다." },
      { k: "D", en: "Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets.", ko: "각 리전에 고객 관리형 KMS 키와 버킷을 만들고 SSE-KMS로 암호화한 뒤 복제를 구성한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "조건이 까다롭습니다: **같은 키**로 두 리전의 데이터를 암·복호화 + **키가 각 리전에 존재**.\n\nKMS 키는 원래 리전에 묶여 있어 다른 리전에서 쓸 수 없습니다. 이를 해결하는 유일한 기능이 **다중 리전 KMS 키(multi-Region key)** 로, 동일한 키 ID·키 재료를 여러 리전에 복제본으로 둡니다. SSE-KMS는 버킷과 같은 리전의 키만 지정할 수 있어 '같은 키' 조건을 서버 측 암호화로 만족시키기 어렵기 때문에, 다중 리전 키 + 클라이언트 측 암호화 조합이 답입니다.",
      en: "KMS keys are Region-bound, so the only way to encrypt and decrypt with the same key in two Regions is a multi-Region KMS key; since SSE-KMS requires a key in the bucket's own Region, the application uses that multi-Region key with client-side encryption."
    },
    why_wrong: {
      A: { ko: "SSE-S3는 S3가 관리하는 키를 쓰므로 '고객 관리형 KMS 키' 요구를 위반합니다.", en: "SSE-S3 uses S3-managed keys, not a customer managed KMS key." },
      C: { ko: "KMS 키를 만들어도 실제 암호화에 SSE-S3를 쓰면 그 키가 사용되지 않습니다. 모순된 구성입니다.", en: "Creating KMS keys but encrypting with SSE-S3 means the keys are never used." },
      D: { ko: "리전마다 **서로 다른** 키를 만드는 구성이라 '같은 키로 암·복호화' 요구를 위반합니다.", en: "Two independent regional keys are not the same key." }
    }
  }
  ,{
    id: "exam1-37", number: 37, tags: ["Systems Manager", "Session Manager", "Security"],
    question: {
      en: "A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사가 최근 AWS 계정의 EC2 인스턴스에 여러 새 워크로드를 시작했습니다. 회사는 인스턴스를 **원격에서 안전하게** 접근·관리하는 전략이 필요하며, AWS 기본 서비스로 동작하고 Well-Architected Framework를 따르는 반복 가능한 프로세스를 구현해야 합니다.\n운영 부담을 가장 적게 하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use the EC2 serial console to directly access the terminal interface of each instance for administration.", ko: "EC2 시리얼 콘솔로 각 인스턴스의 터미널에 직접 접근해 관리한다." },
      { k: "B", en: "Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session.", ko: "기존·신규 인스턴스에 적절한 IAM 역할을 연결하고, AWS Systems Manager Session Manager로 원격 세션을 연다." },
      { k: "C", en: "Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.", ko: "관리용 SSH 키 페어를 만들어 각 인스턴스에 공개 키를 넣고, 퍼블릭 서브넷에 배스천 호스트를 배포해 터널로 관리한다." },
      { k: "D", en: "Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel.", ko: "Site-to-Site VPN을 구성하고, 관리자가 로컬 머신에서 VPN 터널을 통해 SSH 키로 직접 접속하게 한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "Session Manager는 **인바운드 포트·배스천·SSH 키 없이** 인스턴스 셸에 접속하게 해줍니다. IAM으로 접근을 통제하고, 세션 로그를 CloudTrail·S3·CloudWatch에 남길 수 있어 감사도 쉽습니다. 인스턴스에는 SSM 권한이 담긴 IAM 역할만 붙이면 되므로 반복 적용이 쉽습니다.",
      en: "Session Manager gives shell access with no open inbound ports, no bastion and no SSH keys — access controlled by IAM and fully auditable; instances just need the SSM IAM role."
    },
    why_wrong: {
      A: { ko: "시리얼 콘솔은 부팅 문제 진단용 비상 수단이며 일상적인 원격 관리 방법이 아닙니다.", en: "The serial console is an emergency boot-troubleshooting tool, not routine administration." },
      C: { ko: "배스천 호스트 + SSH 키는 관리할 서버와 키가 늘어나 운영 부담과 공격 표면이 커집니다.", en: "A bastion plus SSH keys adds servers, keys and attack surface." },
      D: { ko: "VPN 구성·유지 부담이 크고 여전히 SSH 키 관리가 필요합니다.", en: "A VPN is heavy to run and still requires SSH key management." }
    }
  }
  ,{
    id: "exam1-38", number: 38, tags: ["CloudFront", "S3", "Latency"],
    question: {
      en: "A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website.\nWhich solution meets these requirements MOST cost-effectively?",
      ko: "회사가 S3에 정적 웹사이트를 호스팅하고 DNS로 Route 53을 사용합니다. 전 세계에서 수요가 늘고 있어 사용자 지연을 줄여야 합니다.\n가장 비용 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.", ko: "웹사이트가 담긴 S3 버킷을 모든 리전에 복제하고 Route 53 지리 위치 라우팅을 추가한다." },
      { k: "B", en: "Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.", ko: "Global Accelerator에 가속기를 프로비저닝하고 제공된 IP를 S3 버킷과 연결한 뒤, Route 53 레코드가 그 IP를 가리키게 한다." },
      { k: "C", en: "Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution.", ko: "S3 버킷 앞에 CloudFront 배포를 추가하고 Route 53 레코드가 CloudFront를 가리키게 한다." },
      { k: "D", en: "Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint.", ko: "버킷에 S3 Transfer Acceleration을 활성화하고 Route 53 레코드가 새 엔드포인트를 가리키게 한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "**정적 콘텐츠를 전 세계에 낮은 지연으로 제공** → CloudFront입니다. 엣지 로케이션에 캐시되므로 오리진(S3) 요청과 데이터 전송 비용까지 줄어듭니다.\n\n※ Transfer Acceleration과의 구분: **다운로드(조회) 가속은 CloudFront**, **S3로의 업로드 가속이 Transfer Acceleration**입니다.",
      en: "CloudFront caches static content at edge locations worldwide, cutting latency and origin transfer costs. Transfer Acceleration is for uploads to S3, not for serving downloads."
    },
    why_wrong: {
      A: { ko: "모든 리전에 버킷을 복제하면 저장·복제 비용과 운영 부담이 폭증합니다.", en: "Replicating to every Region multiplies storage, replication cost and operations." },
      B: { ko: "Global Accelerator는 S3를 엔드포인트로 지원하지 않고, 캐싱도 하지 않아 정적 웹 배포에 부적합합니다.", en: "Global Accelerator does not support S3 endpoints and provides no caching." },
      D: { ko: "Transfer Acceleration은 업로드 가속용이며 콘텐츠 캐싱을 제공하지 않습니다.", en: "Transfer Acceleration accelerates uploads and does not cache content." }
    }
  }
  ,{
    id: "exam1-39", number: 39, tags: ["RDS", "EBS", "Performance"],
    question: {
      en: "A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company's website.\nThe company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem.\nWhich solution addresses this performance issue?",
      ko: "회사 웹사이트에 검색 가능한 항목 저장소가 있습니다. 데이터는 1,000만 행 이상인 RDS for MySQL 테이블에 저장되며, 스토리지는 범용 SSD 2TB입니다. 매일 수백만 건의 업데이트가 발생합니다.\n일부 insert 작업이 10초 이상 걸리는 것을 확인했고, **데이터베이스 스토리지 성능**이 문제로 판단했습니다.\n이 성능 문제를 해결하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Change the storage type to Provisioned IOPS SSD.", ko: "스토리지 유형을 프로비저닝된 IOPS SSD(io1/io2)로 변경한다." },
      { k: "B", en: "Change the DB instance to a memory optimized instance class.", ko: "DB 인스턴스를 메모리 최적화 인스턴스 클래스로 변경한다." },
      { k: "C", en: "Change the DB instance to a burstable performance instance class.", ko: "DB 인스턴스를 버스트 가능 성능 인스턴스 클래스로 변경한다." },
      { k: "D", en: "Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication.", ko: "MySQL 비동기 복제를 사용하는 다중 AZ 읽기 복제본을 활성화한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "문제를 **스토리지 성능**으로 이미 특정했고, 쓰기(insert)가 느립니다. 일관된 고 IOPS가 필요한 쓰기 집약 워크로드의 정답은 **프로비저닝된 IOPS SSD**로, 필요한 IOPS를 직접 지정해 보장받습니다.",
      en: "The bottleneck is already identified as storage, with slow writes. Provisioned IOPS SSD lets you specify and guarantee the IOPS a write-heavy workload needs."
    },
    why_wrong: {
      B: { ko: "메모리를 늘리면 읽기 캐시에는 도움이 되지만 스토리지 쓰기 병목은 해결되지 않습니다.", en: "More memory helps caching reads, not the storage write bottleneck." },
      C: { ko: "버스트 가능 클래스(t 계열)는 성능이 크레딧에 의존해 오히려 더 나빠집니다.", en: "Burstable classes depend on credits and would make things worse." },
      D: { ko: "읽기 복제본은 읽기 부하를 분산할 뿐, insert(쓰기)는 여전히 프라이머리가 처리합니다.", en: "Read replicas offload reads; inserts still go to the primary." }
    }
  }
  ,{
    id: "exam1-40", number: 40, tags: ["Kinesis Data Firehose", "S3 Lifecycle", "Ingestion"],
    question: {
      en: "A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis.\nThe company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days.\nWhat is the MOST operationally efficient solution that meets these requirements?",
      ko: "회사에 수천 개의 엣지 디바이스가 있고, 합쳐서 매일 1TB의 상태 알림을 생성합니다. 알림 하나는 약 2KB입니다. 솔루션스 아키텍트는 이 알림을 수집·저장해 나중에 분석할 솔루션을 구현해야 합니다.\n회사는 고가용성을 원하지만 비용을 최소화해야 하고 **추가 인프라를 관리하고 싶지 않습니다**. 또한 **14일치 데이터는 즉시 분석 가능**하게 두고, 14일보다 오래된 데이터는 아카이브하려 합니다.\n가장 운영 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.", ko: "Kinesis Data Firehose 전송 스트림으로 알림을 수집해 S3 버킷으로 전달하고, 14일 후 S3 Glacier로 전환하는 수명 주기 구성을 설정한다." },
      { k: "B", en: "Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.", ko: "두 AZ에 EC2를 띄우고 ELB 뒤에 두어 알림을 수집하며, 스크립트로 S3에 저장한 뒤 14일 후 Glacier로 전환한다." },
      { k: "C", en: "Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service cluster. Set up the OpenSearch Service cluster to take manual snapshots every day and delete data from the cluster that is older than 14 days.", ko: "Firehose로 수집해 OpenSearch 클러스터로 전달하고, 매일 수동 스냅샷을 만들어 14일보다 오래된 데이터를 클러스터에서 삭제한다." },
      { k: "D", en: "Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue.", ko: "SQS 표준 큐로 수집하고 메시지 보존 기간을 14일로 설정한다. 컨슈머가 폴링해 메시지 나이를 확인하고 분석하며, 14일이 되면 S3로 복사한 뒤 큐에서 삭제한다." }
    ],
    answer: ["A"],
    explanation: {
      ko: "**완전 관리형 수집(Firehose) → S3 저장 → 수명 주기로 아카이브** 조합이 정답입니다.\n\nFirehose는 서버 없이 자동 확장되고 고가용성이며, S3로 버퍼링해 적재합니다. 14일 이후 Glacier 전환은 S3 수명 주기 정책 한 줄로 처리되고, 그 사이 데이터는 Athena 등으로 즉시 분석할 수 있습니다.",
      en: "Kinesis Data Firehose is fully managed, highly available and auto-scaling, delivering to S3; an S3 Lifecycle rule then archives to Glacier after 14 days while recent data stays queryable."
    },
    why_wrong: {
      B: { ko: "EC2와 ELB를 직접 운영해야 하므로 '추가 인프라를 관리하지 않는다'는 요구를 위반합니다.", en: "Running EC2 and an ELB is exactly the infrastructure the company wants to avoid." },
      C: { ko: "OpenSearch 클러스터는 상시 실행 비용이 크고 관리 대상이며, 수동 스냅샷 운영도 부담입니다.", en: "An OpenSearch cluster is costly, must be managed, and manual snapshots add work." },
      D: { ko: "SQS는 저장소가 아니라 메시지 큐입니다. 나이를 검사해 옮기는 컨슈머를 직접 만들어야 하고 분석에도 부적합합니다.", en: "SQS is a queue, not storage; you would build custom consumers and it is poor for analysis." }
    }
  }
  ,{
    id: "exam1-41", number: 41, tags: ["AppFlow", "SaaS", "S3"],
    question: {
      en: "A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an upload is complete. The company has noticed slow application performance and wants to improve the performance as much as possible.\nWhich solution will meet these requirements with the LEAST operational overhead?",
      ko: "회사 애플리케이션이 데이터 수집을 위해 여러 SaaS 소스와 통합됩니다. EC2 인스턴스가 데이터를 받아 분석용 S3 버킷에 업로드하고, 같은 인스턴스가 업로드 완료 시 사용자에게 알림도 보냅니다. 애플리케이션 성능이 느려 최대한 개선하려 합니다.\n운영 부담을 가장 적게 하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send events to an Amazon SNS topic when the upload to the S3 bucket is complete.", ko: "Auto Scaling 그룹으로 EC2를 확장하고, 업로드 완료 시 S3 이벤트 알림이 SNS 토픽으로 이벤트를 보내게 한다." },
      { k: "B", en: "Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure an S3 event notification to send events to an Amazon SNS topic when the upload to the S3 bucket is complete.", ko: "각 SaaS 소스와 S3 버킷 사이에 Amazon AppFlow 플로를 만들고, 업로드 완료 시 S3 이벤트 알림이 SNS 토픽으로 이벤트를 보내게 한다." },
      { k: "C", en: "Create an Amazon EventBridge rule for each SaaS source to send output data. Configure the S3 bucket as the rule's target. Create a second EventBridge rule to send events when the upload to the S3 bucket is complete. Configure an Amazon SNS topic as the second rule's target.", ko: "SaaS 소스마다 EventBridge 규칙을 만들어 S3 버킷을 대상으로 하고, 업로드 완료 이벤트용 두 번째 규칙의 대상을 SNS 토픽으로 한다." },
      { k: "D", en: "Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon ECS. Configure Amazon CloudWatch Container Insights to send events to an Amazon SNS topic when the upload to the S3 bucket is complete.", ko: "EC2 대신 Docker 컨테이너를 만들어 ECS에서 호스팅하고, Container Insights가 업로드 완료 시 SNS 토픽으로 이벤트를 보내게 한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "**SaaS(Salesforce, Slack, Zendesk 등) ↔ AWS 데이터 전송 전용 관리형 서비스가 Amazon AppFlow**입니다. EC2를 완전히 없애 병목을 제거하고, 알림은 S3 이벤트 알림 → SNS로 서버 없이 처리합니다. 관리할 인스턴스가 사라져 운영 부담이 가장 낮습니다.",
      en: "Amazon AppFlow is the managed service for moving data between SaaS applications and AWS, removing the EC2 bottleneck entirely; the notification becomes an S3 event notification to SNS."
    },
    why_wrong: {
      A: { ko: "인스턴스를 늘리는 것은 근본 원인(EC2가 수집·업로드·알림을 모두 처리)을 그대로 두고 비용만 늘립니다.", en: "Scaling out keeps the root cause and just costs more." },
      C: { ko: "EventBridge는 SaaS 데이터를 S3로 적재하는 전송 도구가 아니며, S3를 규칙 대상으로 직접 지정할 수 없습니다.", en: "EventBridge is not a SaaS data-transfer service and S3 is not a rule target for this." },
      D: { ko: "컨테이너로 옮겨도 직접 만든 수집 코드를 계속 운영해야 하고, Container Insights는 모니터링 도구입니다.", en: "Containerizing still means running your own ingestion code; Container Insights is monitoring." }
    }
  }
  ,{
    id: "exam1-42", number: 42, tags: ["VPC Endpoint", "NAT Gateway", "Cost"],
    question: {
      en: "A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges.\nWhat is the MOST cost-effective way for the company to avoid Regional data transfer charges?",
      ko: "회사가 단일 VPC의 EC2 인스턴스에서 고가용성 이미지 처리 애플리케이션을 운영합니다. 인스턴스는 여러 AZ의 여러 서브넷에 있고 서로 통신하지 않습니다. 다만 **하나의 NAT 게이트웨이를 통해** S3에서 이미지를 내려받고 올립니다. 회사는 데이터 전송 요금을 걱정합니다.\n리전 내 데이터 전송 요금을 피하는 가장 비용 효율적인 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Launch the NAT gateway in each Availability Zone.", ko: "각 가용 영역에 NAT 게이트웨이를 배치한다." },
      { k: "B", en: "Replace the NAT gateway with a NAT instance.", ko: "NAT 게이트웨이를 NAT 인스턴스로 교체한다." },
      { k: "C", en: "Deploy a gateway VPC endpoint for Amazon S3.", ko: "Amazon S3용 게이트웨이 VPC 엔드포인트를 배포한다." },
      { k: "D", en: "Provision an EC2 Dedicated Host to run the EC2 instances.", ko: "EC2 전용 호스트를 프로비저닝해 인스턴스를 실행한다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "S3용 **게이트웨이 VPC 엔드포인트는 추가 비용이 없고**, 트래픽이 NAT 게이트웨이를 거치지 않게 만듭니다. NAT 처리 요금과 AZ 간 데이터 전송 요금이 모두 사라집니다.\n\n※ 4번 문제와 같은 개념이 비용 관점으로 나온 형태입니다. **S3/DynamoDB + VPC + 비용/프라이빗 접근 → 게이트웨이 엔드포인트**로 기억하세요.",
      en: "A gateway VPC endpoint for S3 costs nothing and keeps S3 traffic off the NAT gateway, eliminating both NAT processing charges and cross-AZ transfer charges."
    },
    why_wrong: {
      A: { ko: "AZ별 NAT는 AZ 간 전송 요금은 줄이지만 NAT 게이트웨이 시간·처리 요금이 오히려 늘어납니다.", en: "Per-AZ NAT reduces cross-AZ transfer but multiplies NAT hourly and processing charges." },
      B: { ko: "NAT 인스턴스는 직접 관리해야 하고 여전히 데이터가 NAT를 통과합니다.", en: "A NAT instance must be managed and traffic still flows through NAT." },
      D: { ko: "전용 호스트는 데이터 전송 요금과 아무 관련이 없습니다.", en: "Dedicated Hosts have nothing to do with data transfer charges." }
    }
  }
  ,{
    id: "exam1-43", number: 43, tags: ["Direct Connect", "Hybrid"],
    question: {
      en: "A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and with minimal impact on internet connectivity for internal users.\nWhich solution meets these requirements?",
      ko: "회사의 온프레미스 애플리케이션이 시간에 민감한 대량 데이터를 생성해 S3로 백업합니다. 애플리케이션이 성장하면서 사용자들이 인터넷 대역폭 한계를 호소합니다. 솔루션스 아키텍트는 **S3로의 적시 백업**과 **내부 사용자 인터넷 연결에 최소한의 영향**을 동시에 만족하는 **장기적** 솔루션을 설계해야 합니다.\n어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.", ko: "AWS VPN 연결을 구성하고 모든 트래픽을 VPC 게이트웨이 엔드포인트로 프록시한다." },
      { k: "B", en: "Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.", ko: "새 AWS Direct Connect 연결을 구성하고 백업 트래픽을 그 연결로 보낸다." },
      { k: "C", en: "Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS each day.", ko: "매일 AWS Snowball 디바이스를 주문해 데이터를 담아 매일 반납한다." },
      { k: "D", en: "Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits from the account.", ko: "지원 티켓을 제출해 계정의 S3 서비스 한도 해제를 요청한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "문제는 **인터넷 회선 대역폭 경합**입니다. Direct Connect는 AWS로 가는 **전용 회선**을 따로 두는 것이므로, 백업 트래픽이 사내 인터넷 회선을 쓰지 않게 됩니다. 대역폭이 일정하고 지연도 안정적이라 시간에 민감한 백업에 적합하며, 장기 해법으로도 맞습니다.",
      en: "The bottleneck is the shared internet link. AWS Direct Connect provides a dedicated private connection so backup traffic no longer competes with user internet traffic, with consistent bandwidth and latency."
    },
    why_wrong: {
      A: { ko: "VPN도 결국 **인터넷 회선을 타므로** 대역폭 문제가 그대로입니다.", en: "A VPN still runs over the same internet link." },
      C: { ko: "매일 디바이스를 배송하는 방식은 '시간에 민감한' 데이터에 부적합하고 장기 운영 부담도 큽니다.", en: "Shipping devices daily is neither timely nor sustainable." },
      D: { ko: "S3 서비스 한도는 문제의 원인이 아닙니다. 병목은 회사 인터넷 회선입니다.", en: "S3 limits are not the bottleneck — the company's internet link is." }
    }
  }
  ,{
    id: "exam1-44", number: 44, tags: ["S3 Versioning", "MFA Delete", "Choose two"],
    question: {
      en: "A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion.\nWhich combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
      ko: "회사의 S3 버킷에 중요한 데이터가 있습니다. 회사는 **실수로 인한 삭제**로부터 데이터를 보호해야 합니다.\n어떤 조합의 조치를 취해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Enable versioning on the S3 bucket.", ko: "S3 버킷에 버전 관리(versioning)를 활성화한다." },
      { k: "B", en: "Enable MFA Delete on the S3 bucket.", ko: "S3 버킷에 MFA Delete를 활성화한다." },
      { k: "C", en: "Create a bucket policy on the S3 bucket.", ko: "S3 버킷에 버킷 정책을 만든다." },
      { k: "D", en: "Enable default encryption on the S3 bucket.", ko: "S3 버킷에 기본 암호화를 활성화한다." },
      { k: "E", en: "Create a lifecycle policy for the objects in the S3 bucket.", ko: "버킷 객체에 수명 주기 정책을 만든다." }
    ],
    answer: ["A", "B"],
    explanation: {
      ko: "**실수 삭제 방지 = 버전 관리 + MFA Delete**가 정석 조합입니다.\n\n- **버전 관리**: 삭제해도 이전 버전이 남아 복구 가능(삭제는 삭제 마커만 추가)\n- **MFA Delete**: 버전을 영구 삭제하거나 버전 관리를 중단하려면 MFA 인증을 요구 → 실수·악의적 영구 삭제를 차단\n\n※ MFA Delete는 버전 관리가 켜져 있어야 사용할 수 있어 두 기능이 짝입니다.",
      en: "Versioning keeps prior versions (a delete just adds a delete marker), and MFA Delete requires MFA to permanently delete a version or suspend versioning. MFA Delete requires versioning, so they pair together."
    },
    why_wrong: {
      C: { ko: "버킷 정책으로 권한을 좁힐 수는 있지만, 권한을 가진 사람의 '실수'는 막지 못합니다.", en: "A bucket policy restricts who can delete but not accidental deletion by an authorized user." },
      D: { ko: "암호화는 기밀성을 지키는 기능이며 삭제와 무관합니다.", en: "Encryption protects confidentiality, not against deletion." },
      E: { ko: "수명 주기 정책은 오히려 객체를 자동으로 만료·삭제하는 기능입니다.", en: "Lifecycle policies expire and delete objects — the opposite." }
    }
  }
  ,{
    id: "exam1-45", number: 45, tags: ["SNS", "SQS", "Lambda", "Choose two"],
    question: {
      en: "A company has a data ingestion workflow that consists of:\n• An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries\n• An AWS Lambda function to process the data and record metadata\nThe company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job.\nWhich combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)",
      ko: "회사의 데이터 수집 워크플로는 다음으로 구성됩니다.\n• 새 데이터 전달 알림용 Amazon SNS 토픽\n• 데이터를 처리하고 메타데이터를 기록하는 AWS Lambda 함수\n네트워크 연결 문제로 워크플로가 간헐적으로 실패하고, 실패하면 수동으로 작업을 다시 실행하지 않는 한 해당 데이터가 수집되지 않습니다.\n앞으로 Lambda가 **모든 데이터를 빠짐없이 수집**하도록 하려면 어떤 조합의 조치가 필요합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Deploy the Lambda function in multiple Availability Zones.", ko: "Lambda 함수를 여러 가용 영역에 배포한다." },
      { k: "B", en: "Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.", ko: "Amazon SQS 큐를 만들고 SNS 토픽에 구독시킨다." },
      { k: "C", en: "Increase the CPU and memory that are allocated to the Lambda function.", ko: "Lambda 함수에 할당된 CPU와 메모리를 늘린다." },
      { k: "D", en: "Increase provisioned throughput for the Lambda function.", ko: "Lambda 함수의 프로비저닝된 처리량을 늘린다." },
      { k: "E", en: "Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue.", ko: "Lambda 함수가 Amazon SQS 큐에서 읽도록 수정한다." }
    ],
    answer: ["B", "E"],
    explanation: {
      ko: "SNS는 **푸시 방식**이라 대상이 실패하면(재시도 소진 후) 메시지가 사라집니다. 사이에 **SQS를 끼워 버퍼**를 만들면 유실이 사라집니다.\n\n- **B**: SNS 토픽에 SQS 큐를 구독 → 알림이 큐에 내구성 있게 적립\n- **E**: Lambda가 그 큐를 이벤트 소스로 읽음 → 처리 실패 시 메시지가 큐로 되돌아와 자동 재시도, 성공 시에만 삭제\n\n이 **SNS → SQS → Lambda** 패턴은 시험에 반복 출제됩니다.",
      en: "SNS pushes and drops messages once retries are exhausted. Subscribing an SQS queue to the topic (B) durably buffers notifications, and having Lambda consume that queue (E) gives automatic retries — the standard SNS → SQS → Lambda pattern."
    },
    why_wrong: {
      A: { ko: "Lambda는 이미 리전 내 여러 AZ에서 실행되는 관리형 서비스입니다. 사용자가 AZ를 지정하지 않습니다.", en: "Lambda already runs across AZs; you do not deploy it per AZ." },
      C: { ko: "CPU·메모리는 성능 문제이며 메시지 유실과 무관합니다.", en: "Memory and CPU affect performance, not message loss." },
      D: { ko: "Lambda에는 '프로비저닝된 처리량'이라는 설정이 없습니다(프로비저닝된 동시성은 콜드 스타트 완화용).", en: "Lambda has no 'provisioned throughput' setting; provisioned concurrency addresses cold starts." }
    }
  }
  ,{
    id: "exam1-46", number: 46, tags: ["Macie", "PII", "Security"],
    question: {
      en: "A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size.\nRecently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation.\nWhat should a solutions architect do to meet these requirements with the LEAST development effort?",
      ko: "회사 애플리케이션이 상점에 마케팅 서비스를 제공합니다. 상점은 SFTP로 거래 데이터를 업로드하고, 데이터는 처리·분석되어 새 마케팅 오퍼를 생성합니다. 일부 파일은 200GB를 넘습니다.\n최근 일부 상점이 포함되어서는 안 되는 **개인 식별 정보(PII)** 가 담긴 파일을 업로드한 것을 발견했습니다. 회사는 PII가 다시 공유되면 관리자에게 알림이 가고, 조치도 자동화하기를 원합니다.\n**개발 노력을 가장 적게** 하면서 이를 충족하는 방법은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.", ko: "S3 버킷을 안전한 전송 지점으로 사용하고, Amazon Inspector로 객체를 스캔한다. PII가 있으면 S3 수명 주기 정책으로 해당 객체를 제거한다." },
      { k: "B", en: "Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.", ko: "S3 버킷을 안전한 전송 지점으로 사용하고, Amazon Macie로 객체를 스캔한다. PII가 있으면 SNS로 관리자에게 알림을 보내 해당 객체를 제거하게 한다." },
      { k: "C", en: "Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon SNS to trigger a notification to the administrators to remove the objects that contain PII.", ko: "Lambda 함수에 사용자 지정 스캔 알고리즘을 구현해 객체 업로드 시 실행한다. PII가 있으면 SNS로 관리자에게 알림을 보낸다." },
      { k: "D", en: "Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the objects that contain PII.", ko: "Lambda에 사용자 지정 스캔을 구현해 업로드 시 실행하고, PII가 있으면 SES로 알리고 수명 주기 정책으로 객체를 제거한다." }
    ],
    answer: ["B"],
    explanation: {
      ko: "**PII 탐지 전용 관리형 서비스가 Amazon Macie**입니다. 머신러닝으로 S3의 객체에서 PII를 찾아내고, 발견 결과를 EventBridge/SNS로 흘려 알림·자동 조치를 붙일 수 있습니다. 스캔 로직을 직접 만들 필요가 없어 개발 노력이 가장 적습니다.",
      en: "Amazon Macie is the managed service that discovers PII in S3 using machine learning, and its findings can drive SNS notifications and automated remediation — no scanning code to write."
    },
    why_wrong: {
      A: { ko: "Inspector는 워크로드 취약점 스캐너로 S3 객체의 PII를 찾지 못합니다. 또 수명 주기 정책은 조건부 삭제 트리거가 아닙니다.", en: "Inspector scans workloads for vulnerabilities, not S3 content, and lifecycle policies are not conditional triggers." },
      C: { ko: "PII 탐지 알고리즘을 직접 구현해야 하므로 개발 노력이 큽니다(200GB 파일 처리도 Lambda 한계에 걸립니다).", en: "Writing your own PII detection is significant effort, and 200 GB files exceed Lambda's practical limits." },
      D: { ko: "C와 같은 문제에 더해 수명 주기 정책을 조치 트리거로 오용하고 있습니다.", en: "Same custom-code problem, plus misuse of lifecycle policies as a trigger." }
    }
  }
  ,{
    id: "exam1-47", number: 47, tags: ["EC2", "Capacity Reservation"],
    question: {
      en: "A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week.\nWhat should the company do to guarantee the EC2 capacity?",
      ko: "회사는 1주일간 진행되는 행사를 위해 특정 리전의 **특정 가용 영역 3개**에서 EC2 용량을 **보장**받아야 합니다.\n용량을 보장하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Purchase Reserved Instances that specify the Region needed.", ko: "필요한 리전을 지정한 예약 인스턴스를 구매한다." },
      { k: "B", en: "Create an On-Demand Capacity Reservation that specifies the Region needed.", ko: "필요한 리전을 지정한 온디맨드 용량 예약을 생성한다." },
      { k: "C", en: "Purchase Reserved Instances that specify the Region and three Availability Zones needed.", ko: "필요한 리전과 3개 가용 영역을 지정한 예약 인스턴스를 구매한다." },
      { k: "D", en: "Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed.", ko: "필요한 리전과 3개 가용 영역을 지정한 **온디맨드 용량 예약**을 생성한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "두 가지를 구분해야 합니다.\n\n- **온디맨드 용량 예약(ODCR)**: **특정 AZ**에 용량을 확보. 기간 약정 없이 필요할 때 만들고 지우므로 1주일 행사에 적합.\n- **예약 인스턴스(RI)**: 1년/3년 약정으로 **요금 할인**을 받는 것. 리전 RI는 용량을 보장하지 않고, 존 RI만 용량 예약 효과가 있지만 1주일 행사에 1년 약정은 비합리적.\n\n따라서 리전 + 3개 AZ를 지정한 ODCR이 정답입니다.",
      en: "On-Demand Capacity Reservations reserve capacity in a specific AZ with no term commitment — right for a one-week event. Reserved Instances are a 1–3 year billing discount; regional RIs do not reserve capacity."
    },
    why_wrong: {
      A: { ko: "리전 범위 RI는 용량을 보장하지 않습니다(요금 할인만).", en: "Regional RIs provide a billing discount, not a capacity guarantee." },
      B: { ko: "ODCR은 AZ 단위로 생성됩니다. 리전만 지정하는 방식은 존재하지 않습니다.", en: "Capacity Reservations are created per AZ; there is no Region-only option." },
      C: { ko: "존 RI로 용량은 확보되지만 1년 이상 약정이라 1주일 행사에 과도한 비용입니다.", en: "Zonal RIs do reserve capacity but require a 1–3 year commitment for a one-week need." }
    }
  }
  ,{
    id: "exam1-48", number: 48, tags: ["EFS", "Instance Store", "Durability"],
    question: {
      en: "A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that the catalog is stored in a durable location.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사 웹사이트가 항목 카탈로그를 **EC2 인스턴스 스토어**에 저장합니다. 회사는 카탈로그가 고가용성을 갖고 **내구성 있는 위치**에 저장되도록 하려 합니다.\n무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Move the catalog to Amazon ElastiCache for Redis.", ko: "카탈로그를 Amazon ElastiCache for Redis로 옮긴다." },
      { k: "B", en: "Deploy a larger EC2 instance with a larger instance store.", ko: "더 큰 인스턴스 스토어를 가진 더 큰 EC2 인스턴스를 배포한다." },
      { k: "C", en: "Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.", ko: "카탈로그를 인스턴스 스토어에서 S3 Glacier Deep Archive로 옮긴다." },
      { k: "D", en: "Move the catalog to an Amazon Elastic File System (Amazon EFS) file system.", ko: "카탈로그를 Amazon EFS 파일 시스템으로 옮긴다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "인스턴스 스토어는 **임시(ephemeral)** 스토리지로, 인스턴스를 중지·종료하거나 하드웨어 장애가 나면 데이터가 사라집니다.\n\nEFS는 여러 AZ에 데이터를 복제하는 관리형 파일 시스템으로 내구성과 고가용성을 제공하며, 여러 인스턴스가 동시에 마운트할 수도 있어 웹 서버 카탈로그에 적합합니다.",
      en: "Instance store is ephemeral — data is lost on stop, terminate or host failure. EFS is a managed file system replicated across AZs, durable, highly available, and mountable by many instances at once."
    },
    why_wrong: {
      A: { ko: "ElastiCache는 캐시(주로 인메모리)이며 영구 저장소로 쓰기에 적절하지 않습니다.", en: "ElastiCache is an in-memory cache, not a durable store." },
      B: { ko: "인스턴스 스토어를 키워도 임시 저장이라는 성질은 그대로입니다.", en: "A bigger instance store is still ephemeral." },
      C: { ko: "Deep Archive는 복구에 수 시간이 걸리는 아카이브 계층이라 웹사이트가 실시간으로 읽는 카탈로그에 부적합합니다.", en: "Deep Archive retrieval takes hours — unusable for a live catalog." }
    }
  }
  ,{
    id: "exam1-49", number: 49, tags: ["S3 Lifecycle", "Glacier", "Cost"],
    question: {
      en: "A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older files is acceptable.\nWhich solution will meet these requirements MOST cost-effectively?",
      ko: "회사가 통화 녹취 파일을 매월 저장합니다. 사용자는 통화 후 1년 내에는 파일을 무작위로 접근하지만, 1년이 지나면 드물게 접근합니다. 회사는 **1년 미만 파일은 가능한 한 빠르게** 조회·검색할 수 있게 하면서 솔루션을 최적화하려 합니다. 오래된 파일의 검색 지연은 허용됩니다.\n가장 비용 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files from S3 Glacier Instant Retrieval.", ko: "태그를 붙인 개별 파일을 S3 Glacier Instant Retrieval에 저장하고, 태그를 쿼리해 파일을 검색한다." },
      { k: "B", en: "Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3 Glacier Flexible Retrieval after 1 year. Query and retrieve the files that are in Amazon S3 by using Amazon Athena. Query and retrieve the files that are in S3 Glacier by using S3 Glacier Select.", ko: "개별 파일을 S3 Intelligent-Tiering에 저장하고 1년 후 Glacier Flexible Retrieval로 옮긴다. S3의 파일은 Athena로, Glacier의 파일은 S3 Glacier Select로 조회·검색한다." },
      { k: "C", en: "Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1 year. Query and retrieve the files by searching for metadata from Amazon S3.", ko: "태그를 붙인 개별 파일을 S3 Standard에 저장하고, 각 아카이브의 검색 메타데이터도 S3 Standard에 저장한다. 1년 후 Glacier Instant Retrieval로 옮기는 수명 주기 정책을 쓰고, S3의 메타데이터를 검색해 파일을 조회·검색한다." },
      { k: "D", en: "Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS. Retrieve the files from S3 Glacier Deep Archive.", ko: "개별 파일을 S3 Standard에 저장하고 1년 후 Glacier Deep Archive로 옮긴다. 검색 메타데이터는 Amazon RDS에 저장해 RDS에서 조회하고, 파일은 Deep Archive에서 가져온다." }
    ],
    answer: ["C"],
    explanation: {
      ko: "요구사항을 계층으로 나눠 보면:\n\n- **1년 미만**: 무작위 접근 + 최대한 빠르게 → **S3 Standard**\n- **1년 이후**: 드문 접근, 지연 허용 → 아카이브 계층으로 전환 (수명 주기 정책)\n- **조회(query)**: 파일 자체가 아니라 **검색 메타데이터**를 S3에 두고 찾는 구조\n\nC는 이 세 가지를 그대로 구현합니다. 메타데이터 검색으로 대상 파일을 특정하고, 실제 파일은 계층에서 가져옵니다.",
      en: "Under one year: S3 Standard for fast random access. After one year: a lifecycle transition to an archive tier. Queries run against search metadata kept in S3 rather than the files themselves — exactly what option C describes."
    },
    why_wrong: {
      A: { ko: "1년 미만 파일까지 전부 Glacier 계층에 두고, 태그만으로는 내용 검색이 불가능합니다.", en: "Puts even recent files in Glacier, and tags alone cannot serve as a query mechanism." },
      B: { ko: "Athena는 파일 '검색·조회 엔진'으로 이 시나리오에 맞지 않고, Glacier Select도 이런 파일 조회 용도로 적절하지 않습니다. 접근 패턴이 알려져 있어 Intelligent-Tiering도 불필요합니다.", en: "Athena and Glacier Select are not the right retrieval mechanisms here, and the access pattern is known so Intelligent-Tiering adds needless monitoring cost." },
      D: { ko: "메타데이터용으로 RDS를 상시 운영하는 비용이 크고, Deep Archive는 복구가 수 시간이라 요구를 넘어섭니다.", en: "Running RDS just for metadata is costly and Deep Archive retrieval takes hours." }
    }
  }
  ,{
    id: "exam1-50", number: 50, tags: ["Systems Manager", "Run Command", "Patching"],
    question: {
      en: "A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability.\nWhat should a solutions architect do to meet these requirements?",
      ko: "회사의 프로덕션 워크로드가 1,000대의 EC2 Linux 인스턴스에서 실행되며, 서드파티 소프트웨어로 구동됩니다. 회사는 심각한 보안 취약점을 해결하기 위해 모든 인스턴스의 **서드파티 소프트웨어를 최대한 빨리** 패치해야 합니다.\n무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create an AWS Lambda function to apply the patch to all EC2 instances.", ko: "Lambda 함수를 만들어 모든 EC2 인스턴스에 패치를 적용한다." },
      { k: "B", en: "Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.", ko: "Systems Manager Patch Manager를 구성해 모든 인스턴스에 패치를 적용한다." },
      { k: "C", en: "Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.", ko: "Systems Manager 유지 관리 기간을 예약해 모든 인스턴스에 패치를 적용한다." },
      { k: "D", en: "Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances.", ko: "Systems Manager **Run Command**로 사용자 지정 명령을 실행해 모든 인스턴스에 패치를 적용한다." }
    ],
    answer: ["D"],
    explanation: {
      ko: "두 키워드가 답을 정합니다: **서드파티 소프트웨어** + **최대한 빨리(즉시)**.\n\nRun Command는 수천 대 인스턴스에 임의의 명령·스크립트를 **지금 즉시** 일괄 실행합니다. 서드파티 애플리케이션 패치처럼 표준 패치 베이스라인이 다루지 않는 작업에 적합합니다.",
      en: "Third-party software plus \"as quickly as possible\" points to Systems Manager Run Command, which executes an arbitrary command across thousands of instances immediately."
    },
    why_wrong: {
      A: { ko: "Lambda는 EC2 내부에서 명령을 실행할 수 없습니다(SSM을 호출하는 우회 구현이 필요).", en: "Lambda cannot run commands inside EC2 instances directly." },
      B: { ko: "Patch Manager는 주로 **OS·배포판 패키지** 패치를 다룹니다. 임의의 서드파티 애플리케이션 패치에는 맞지 않습니다.", en: "Patch Manager targets OS and distro packages, not arbitrary third-party applications." },
      C: { ko: "유지 관리 기간은 **예정된 시간까지 기다리는** 방식이라 '즉시'라는 요구와 상충합니다.", en: "A maintenance window waits for a scheduled time — the opposite of immediate." }
    }
  }
]
});
