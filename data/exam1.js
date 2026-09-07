/* Exam 1
 * ExamTopics Topic 1 / Exam A
 * 새 문제는 questions 배열 끝에 추가하세요. (스키마는 README.md)
 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam1",
  title: "Exam 1",
  note: "Topic 1 · Exam A",
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
]
});
