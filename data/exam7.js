/* Exam 7
 * ExamTopics Topic 1 / Exam G의 301~350번
 * 현재 수록 범위: 301~350번
 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam7",
  title: "Exam 7",
  note: "Topic 1 · #301–350",
  questions: [
  {
    id: "exam7-301", number: 301, tags: ["AWS DataSync", "FSx for Windows File Server", "Migration", "Bandwidth Control", "SMB"],
    question: {
      en: "A university research laboratory must migrate 30 TB of data from an on-premises Windows file server to Amazon FSx for Windows File Server. The laboratory has a shared 1 Gbps network link used by many other departments. The laboratory wants a data migration service that maximizes transfer performance but can control bandwidth to minimize impact on other departments. The migration must finish within 5 days. Which AWS solution meets these requirements?",
      ko: "대학 연구소는 온프레미스 Windows 파일 서버에서 Amazon FSx for Windows File Server로 30TB의 데이터를 마이그레이션해야 합니다. 연구소에는 다른 많은 부서가 공유하는 1Gbps 네트워크 링크가 있습니다. 데이터 전송 성능을 최대화하되 다른 부서에 미치는 영향을 줄이기 위해 대역폭을 제어할 수 있어야 하며, 마이그레이션은 5일 이내에 완료해야 합니다. 어떤 AWS 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "AWS Snowcone", ko: "AWS Snowcone" },
      { k: "B", en: "Amazon FSx File Gateway", ko: "Amazon FSx File Gateway" },
      { k: "C", en: "AWS DataSync", ko: "AWS DataSync" },
      { k: "D", en: "AWS Transfer Family", ko: "AWS Transfer Family" }
    ],
    answer: ["C"],
    explanation: { ko: "DataSync는 온프레미스 SMB 파일 서버와 FSx for Windows File Server 사이의 고속 온라인 전송을 지원하고 작업별 대역폭 제한과 일정을 구성할 수 있습니다.", en: "DataSync provides accelerated online transfer between an on-premises SMB file server and FSx for Windows File Server, with per-task bandwidth throttling and scheduling." },
    why_wrong: {
      A: { ko: "Snowcone은 오프라인 장치 운송이 필요하며 30TB를 5일 이내에 옮기는 공유 링크 기반 요구에 적합하지 않습니다.", en: "Snowcone requires a device transfer workflow and is not the best fit for this controlled online 30 TB migration deadline." },
      B: { ko: "FSx File Gateway는 온프레미스 캐시 접근용이며 대규모 파일 마이그레이션 서비스가 아닙니다.", en: "FSx File Gateway provides cached on-premises access and is not a bulk migration service." },
      D: { ko: "Transfer Family는 SFTP·FTPS·FTP·AS2 엔드포인트용이며 SMB에서 FSx로의 관리형 마이그레이션 도구가 아닙니다.", en: "Transfer Family provides managed file-transfer protocol endpoints, not SMB-to-FSx migration with bandwidth controls." }
    }
  },
  {
    id: "exam7-302", number: 302, tags: ["Amazon CloudFront", "Elastic Transcoder", "Amazon S3", "Video Streaming", "Choose two"],
    question: {
      en: "A company wants to build a mobile application that streams slow-motion video clips. The application currently captures clips, uploads the source-format files to Amazon S3, and retrieves them directly from the S3 bucket. The source files are large, and users experience buffering and playback problems on mobile devices. The company wants to maximize performance and scalability with minimal operational overhead. Which combination of solutions meets these requirements? (Choose two.)",
      ko: "회사는 모바일 장치에서 슬로 모션 비디오 클립을 스트리밍하는 앱을 만들려고 합니다. 현재 앱은 비디오를 캡처해 원시 형식으로 S3에 업로드하고 S3에서 직접 검색합니다. 원시 파일이 커서 모바일 사용자는 버퍼링과 재생 문제를 겪고 있습니다. 운영 오버헤드를 최소화하면서 성능과 확장성을 극대화하려면 어떤 솔루션 조합을 사용해야 합니까? (두 개 선택)"
    },
    options: [
      { k: "A", en: "Deploy Amazon CloudFront for content delivery and caching.", ko: "콘텐츠 전송 및 캐싱을 위해 Amazon CloudFront를 배포합니다." },
      { k: "B", en: "Use AWS DataSync to copy video files to S3 buckets in AWS Regions around the world.", ko: "AWS DataSync를 사용하여 전 세계 AWS 리전의 다른 S3 버킷으로 비디오 파일을 복제합니다." },
      { k: "C", en: "Use Amazon Elastic Transcoder to convert video files to a more suitable format.", ko: "Amazon Elastic Transcoder를 사용하여 비디오 파일을 더 적절한 형식으로 변환합니다." },
      { k: "D", en: "Deploy Auto Scaling groups of Amazon EC2 instances in local Regions for content delivery and caching.", ko: "콘텐츠 전송 및 캐싱을 위해 로컬 리전에 EC2 Auto Scaling 그룹을 배포합니다." },
      { k: "E", en: "Deploy an Auto Scaling group of Amazon EC2 instances to convert the video files to a more suitable format.", ko: "비디오 파일을 더 적절한 형식으로 변환하도록 EC2 Auto Scaling 그룹을 배포합니다." }
    ],
    answer: ["A", "C"],
    explanation: { ko: "Elastic Transcoder는 원시 동영상을 모바일 재생에 적합한 형식과 비트레이트로 변환하고, CloudFront는 엣지 캐싱을 통해 전 세계 사용자에게 낮은 지연으로 전송합니다.", en: "Elastic Transcoder converts large source clips into mobile-friendly formats and bitrates, while CloudFront delivers and caches the output at edge locations for scalable low-latency playback." },
    why_wrong: {
      B: { ko: "여러 리전에 S3 객체를 복사해도 모바일 형식 변환이나 글로벌 엣지 캐싱을 직접 제공하지 않습니다.", en: "Copying objects to regional buckets does not transcode the videos or provide global edge caching." },
      D: { ko: "리전별 EC2 캐시 플릿은 CloudFront보다 운영 부담과 비용이 큽니다.", en: "Regional EC2 cache fleets require more operations and cost than CloudFront." },
      E: { ko: "EC2 기반 자체 트랜스코딩 플릿은 관리형 트랜스코딩 서비스보다 용량 관리와 운영 부담이 큽니다.", en: "A self-managed EC2 transcoding fleet requires more capacity management and operations than a managed transcoding service." }
    }
  },
  {
    id: "exam7-303", number: 303, tags: ["Amazon ECS", "AWS Fargate", "Application Auto Scaling", "Target Tracking", "CloudWatch"],
    question: {
      en: "A company launches a new application on an Amazon ECS cluster using the Fargate launch type. The company expects high traffic at launch and monitors CPU and memory utilization. The company wants to reduce cost when utilization decreases. What should a solutions architect recommend?",
      ko: "회사는 Fargate 시작 유형을 사용하는 Amazon ECS 클러스터에서 새 애플리케이션을 시작합니다. 출시 시 높은 트래픽이 예상되어 CPU와 메모리 사용률을 모니터링하지만, 사용률이 감소할 때 비용을 절감하려고 합니다. 솔루션스 아키텍트는 무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Use Amazon EC2 Auto Scaling to scale at specific times based on historical traffic patterns.", ko: "Amazon EC2 Auto Scaling을 사용해 이전 트래픽 패턴에 따라 특정 시간에 조정합니다." },
      { k: "B", en: "Use an AWS Lambda function to scale Amazon ECS based on metric breaches that trigger Amazon CloudWatch alarms.", ko: "CloudWatch 경보를 트리거하는 지표 위반을 기반으로 Lambda 함수가 ECS를 확장하도록 합니다." },
      { k: "C", en: "Use Amazon EC2 Auto Scaling with a simple scaling policy triggered by CloudWatch alarms for ECS metric breaches.", ko: "ECS 지표 위반 CloudWatch 경보가 트리거하는 단순 조정 정책과 EC2 Auto Scaling을 사용합니다." },
      { k: "D", en: "Use AWS Application Auto Scaling with a target tracking policy triggered by CloudWatch metrics for the ECS service.", ko: "대상 추적 정책과 함께 AWS Application Auto Scaling을 사용하여 ECS 서비스 지표에 따라 조정합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "Fargate 서비스의 원하는 작업 수는 Application Auto Scaling으로 조정합니다. 대상 추적 정책은 CPU 또는 메모리 목표값을 유지하면서 부하가 줄면 자동으로 축소해 비용을 낮춥니다.", en: "Application Auto Scaling controls the desired task count for an ECS Fargate service. Target tracking maintains a CPU or memory target and automatically scales in when utilization falls." },
    why_wrong: {
      A: { ko: "Fargate에는 관리할 EC2 플릿이 없으며 과거 일정만으로는 실제 부하 변화에 반응하지 못합니다.", en: "Fargate has no customer-managed EC2 fleet, and schedule-only scaling does not respond to actual load." },
      B: { ko: "Lambda 기반 사용자 지정 조정은 Application Auto Scaling보다 구현과 운영 부담이 큽니다.", en: "Custom Lambda scaling adds implementation and maintenance compared with native Application Auto Scaling." },
      C: { ko: "EC2 Auto Scaling은 Fargate 작업 수를 조정하는 서비스가 아닙니다.", en: "EC2 Auto Scaling does not manage the task count of a Fargate service." }
    }
  },
  {
    id: "exam7-304", number: 304, tags: ["AWS DataSync", "NFS", "Multi-Region", "Data Transfer", "Disaster Recovery"],
    question: {
      en: "A company recently created a disaster recovery site in another AWS Region. The company must regularly transfer large amounts of data between NFS file systems in the two Regions. Which solution meets these requirements with the least operational overhead?",
      ko: "회사는 최근 다른 AWS 리전에 재해 복구 사이트를 만들었습니다. 두 리전의 NFS 파일 시스템 간에 정기적으로 대량의 데이터를 주고받아야 합니다. 최소한의 운영 오버헤드로 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use AWS DataSync.", ko: "AWS DataSync를 사용합니다." },
      { k: "B", en: "Use an AWS Snowball device.", ko: "AWS Snowball 디바이스를 사용합니다." },
      { k: "C", en: "Configure an SFTP server on Amazon EC2.", ko: "Amazon EC2에서 SFTP 서버를 구성합니다." },
      { k: "D", en: "Use AWS Database Migration Service (AWS DMS).", ko: "AWS Database Migration Service(AWS DMS)를 사용합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "DataSync는 NFS 위치 간 반복 전송을 예약하고 증분 복사, 검증, 암호화, 모니터링을 관리형으로 제공하므로 운영 부담이 가장 적습니다.", en: "DataSync schedules recurring NFS transfers and provides managed incremental copy, verification, encryption, and monitoring with minimal operations." },
    why_wrong: {
      B: { ko: "Snowball은 장치를 배송하는 오프라인 대량 전송용으로 정기적인 리전 간 동기화에 적합하지 않습니다.", en: "Snowball is an offline device workflow and is unsuitable for recurring inter-Region synchronization." },
      C: { ko: "EC2 SFTP 서버는 인스턴스 운영, 보안, 확장과 재시도를 직접 관리해야 합니다.", en: "An EC2 SFTP server requires managing instances, security, scaling, and retry logic." },
      D: { ko: "DMS는 데이터베이스 마이그레이션용이며 NFS 파일 시스템 전송을 지원하지 않습니다.", en: "DMS migrates databases and does not transfer NFS file systems." }
    }
  },
  {
    id: "exam7-305", number: 305, tags: ["Amazon FSx for Windows File Server", "SMB", "Managed File System", "Shared Storage"],
    question: {
      en: "A company is designing a shared storage solution for a game application hosted in the AWS Cloud. The company needs SMB clients to access the data, and the solution must be fully managed. Which AWS solution meets these requirements?",
      ko: "회사는 AWS 클라우드에서 호스팅되는 게임 애플리케이션을 위한 공유 스토리지 솔루션을 설계하고 있습니다. SMB 클라이언트로 데이터에 접근할 수 있어야 하고 솔루션은 완전관리형이어야 합니다. 어떤 AWS 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Create an AWS DataSync task to share data as a mountable file system and mount it on the application servers.", ko: "마운트 가능한 파일 시스템으로 데이터를 공유하는 DataSync 작업을 만들고 애플리케이션 서버에 마운트합니다." },
      { k: "B", en: "Create a Windows Amazon EC2 instance, install and configure the Windows file sharing role, and connect the application servers to the share.", ko: "Windows EC2 인스턴스에 Windows 파일 공유 역할을 설치하고 애플리케이션 서버를 연결합니다." },
      { k: "C", en: "Create an Amazon FSx for Windows File Server file system and connect the application servers to it.", ko: "Amazon FSx for Windows File Server 파일 시스템을 생성하고 애플리케이션 서버를 연결합니다." },
      { k: "D", en: "Create an Amazon S3 bucket, grant the application an IAM role, and mount the S3 bucket on the application servers.", ko: "S3 버킷을 만들고 애플리케이션 IAM 역할을 부여한 뒤 서버에 S3 버킷을 마운트합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "FSx for Windows File Server는 네이티브 SMB와 Windows 파일 기능을 제공하는 완전관리형 공유 파일 시스템입니다.", en: "FSx for Windows File Server is a fully managed shared file system that provides native SMB and Windows file-system features." },
    why_wrong: {
      A: { ko: "DataSync는 데이터 이동 서비스이며 클라이언트가 지속적으로 마운트하는 공유 파일 시스템이 아닙니다.", en: "DataSync moves data; it is not a continuously mounted shared file system." },
      B: { ko: "EC2 파일 서버는 패치, 고가용성, 백업과 용량을 직접 관리해야 하므로 완전관리형이 아닙니다.", en: "An EC2 file server requires self-management of patching, availability, backups, and capacity." },
      D: { ko: "S3는 객체 스토리지이며 기본 SMB 공유 파일 시스템을 제공하지 않습니다.", en: "S3 is object storage and does not provide a native SMB file share." }
    }
  },
  {
    id: "exam7-306", number: 306, tags: ["Amazon EC2", "Cluster Placement Group", "Low Latency", "High Throughput", "In-Memory Database"],
    question: {
      en: "A company wants to run an in-memory database for a latency-sensitive application on Amazon EC2 instances. The application processes more than 100,000 transactions per minute and requires high network throughput. A solutions architect must provide a cost-effective network design that minimizes data transfer charges. Which solution meets these requirements?",
      ko: "회사는 EC2 인스턴스에서 실행되는 지연 시간에 민감한 애플리케이션을 위해 인메모리 데이터베이스를 운영하려고 합니다. 애플리케이션은 분당 100,000건 이상의 트랜잭션을 처리하며 높은 네트워크 처리량이 필요합니다. 데이터 전송 비용을 최소화하는 비용 효율적인 네트워크 설계는 무엇입니까?"
    },
    options: [
      { k: "A", en: "Launch all EC2 instances in the same Availability Zone and specify a cluster placement group.", ko: "동일한 AWS 리전의 동일한 가용 영역에서 모든 EC2 인스턴스를 시작하고 클러스터 배치 그룹을 지정합니다." },
      { k: "B", en: "Launch the EC2 instances in different Availability Zones in the same Region and specify a partition placement group.", ko: "동일 리전의 서로 다른 가용 영역에서 인스턴스를 시작하고 파티션 배치 그룹을 지정합니다." },
      { k: "C", en: "Deploy an Auto Scaling group that launches EC2 instances in different Availability Zones according to a network-utilization target.", ko: "네트워크 활용 목표에 따라 서로 다른 가용 영역에서 EC2를 시작하는 Auto Scaling 그룹을 배포합니다." },
      { k: "D", en: "Deploy an Auto Scaling group with a step scaling policy that launches EC2 instances in different Availability Zones.", ko: "서로 다른 가용 영역에 EC2 인스턴스를 시작하도록 단계 조정 정책과 Auto Scaling 그룹을 배포합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "단일 AZ의 클러스터 배치 그룹은 인스턴스를 물리적으로 가깝게 배치해 지연을 낮추고 높은 네트워크 처리량을 제공합니다. 같은 AZ의 프라이빗 IP 전송은 AZ 간 전송 요금도 피합니다.", en: "A cluster placement group places instances close together in one Availability Zone for low latency and high network throughput. Private-IP traffic within the same AZ also avoids cross-AZ data transfer charges." },
    why_wrong: {
      B: { ko: "파티션 배치 그룹은 장애 격리를 위한 것이며 여러 AZ 통신에는 데이터 전송 비용과 더 높은 지연이 생깁니다.", en: "Partition placement groups emphasize fault isolation, while cross-AZ traffic adds latency and transfer charges." },
      C: { ko: "다중 AZ Auto Scaling은 가용성을 높이지만 인메모리 노드 간 지연과 전송 비용을 최소화하지 않습니다.", en: "Multi-AZ Auto Scaling improves availability but does not minimize latency or inter-node transfer cost." },
      D: { ko: "단계 조정과 다중 AZ 배치는 고처리량의 근접 네트워크 배치를 보장하지 않습니다.", en: "Step scaling across AZs does not provide the close-proximity network placement required for high throughput." }
    }
  },
  {
    id: "exam7-307", number: 307, tags: ["AWS Storage Gateway", "Cached Volumes", "iSCSI", "Hybrid Storage", "Amazon S3"],
    question: {
      en: "A company that primarily runs application servers on premises has decided to migrate to AWS. The company wants to minimize the need to expand on-premises iSCSI storage and store only recently accessed data locally. Which AWS solution should the company use?",
      ko: "주로 온프레미스에서 애플리케이션 서버를 실행하는 회사가 AWS로 마이그레이션하기로 했습니다. 온프레미스 iSCSI 스토리지 확장 필요성을 최소화하고 최근 액세스한 데이터만 로컬에 저장하려고 합니다. 어떤 AWS 솔루션을 사용해야 합니까?"
    },
    options: [
      { k: "A", en: "Amazon S3 File Gateway", ko: "Amazon S3 파일 게이트웨이" },
      { k: "B", en: "AWS Storage Gateway Tape Gateway", ko: "AWS Storage Gateway 테이프 게이트웨이" },
      { k: "C", en: "AWS Storage Gateway Volume Gateway stored volumes", ko: "AWS Storage Gateway 볼륨 게이트웨이 저장 볼륨" },
      { k: "D", en: "AWS Storage Gateway Volume Gateway cached volumes", ko: "AWS Storage Gateway 볼륨 게이트웨이 캐시 볼륨" }
    ],
    answer: ["D"],
    explanation: { ko: "캐시 볼륨 게이트웨이는 전체 기본 데이터를 S3에 보관하고 자주 또는 최근 접근한 데이터만 로컬 캐시에 유지하면서 온프레미스에 iSCSI 블록 인터페이스를 제공합니다.", en: "Cached Volume Gateway stores the primary dataset in S3, retains recently accessed data in a local cache, and exposes iSCSI block volumes on premises." },
    why_wrong: {
      A: { ko: "File Gateway는 NFS·SMB 파일 인터페이스를 제공하며 필요한 iSCSI 블록 인터페이스가 아닙니다.", en: "File Gateway provides NFS or SMB file access, not the required iSCSI block interface." },
      B: { ko: "Tape Gateway는 가상 테이프 백업용이며 애플리케이션의 온라인 iSCSI 볼륨이 아닙니다.", en: "Tape Gateway is for virtual tape backups, not online application block volumes." },
      C: { ko: "저장 볼륨은 전체 데이터를 로컬에 유지하므로 온프레미스 스토리지 확장을 줄인다는 요구와 맞지 않습니다.", en: "Stored volumes keep the full dataset locally and therefore do not minimize on-premises storage expansion." }
    }
  },
  {
    id: "exam7-308", number: 308, tags: ["AWS Trusted Advisor", "Amazon RDS", "Consolidated Billing", "Cost Optimization", "Choose two"],
    question: {
      en: "A company has multiple AWS accounts with consolidated billing. For 90 days, the company runs several active high-performance Amazon RDS for Oracle On-Demand DB instances. The finance team can access AWS Trusted Advisor in the payer account and all other accounts. The team must use the appropriate account and Trusted Advisor checks to reduce RDS costs. Which combination of steps should the team take? (Choose two.)",
      ko: "회사에는 통합 결제를 사용하는 여러 AWS 계정이 있습니다. 회사는 90일 동안 여러 활성 고성능 RDS for Oracle 온디맨드 DB 인스턴스를 실행합니다. 재무 팀은 통합 결제 계정과 다른 모든 계정의 Trusted Advisor에 접근할 수 있습니다. 적절한 계정과 Trusted Advisor 검사를 이용해 RDS 비용을 줄이려면 어떤 단계 조합을 수행해야 합니까? (두 개 선택)"
    },
    options: [
      { k: "A", en: "Use the Trusted Advisor recommendations in each account where the RDS instances are running.", ko: "RDS 인스턴스가 실행 중인 각 계정의 Trusted Advisor 권장 사항을 사용합니다." },
      { k: "B", en: "Use the Trusted Advisor recommendations in the consolidated billing account to review all RDS instances at the same time.", ko: "통합 결제 계정의 Trusted Advisor 권장 사항을 사용하여 모든 RDS 인스턴스를 동시에 확인합니다." },
      { k: "C", en: "Review the Trusted Advisor check for Amazon RDS Reserved Instance Optimization.", ko: "Amazon RDS 예약 인스턴스 최적화에 대한 Trusted Advisor 검사를 검토합니다." },
      { k: "D", en: "Review the Trusted Advisor check for Amazon RDS Idle DB Instances.", ko: "Amazon RDS 유휴 DB 인스턴스에 대한 Trusted Advisor 검사를 검토합니다." },
      { k: "E", en: "Review the Trusted Advisor check for Amazon Redshift Reserved Node Optimization.", ko: "Amazon Redshift 예약 노드 최적화에 대한 Trusted Advisor 검사를 검토합니다." }
    ],
    answer: ["B", "D"],
    explanation: { ko: "통합 결제 계정에서 조직의 비용 최적화 권장 사항을 함께 검토할 수 있습니다. 90일간 온디맨드 RDS 인스턴스의 실제 사용 상태를 확인하려면 RDS 유휴 DB 인스턴스 검사가 직접 관련됩니다.", en: "The consolidated billing account provides a central view of cost-optimization recommendations. The RDS Idle DB Instances check directly identifies On-Demand databases with little or no utilization that can be stopped or removed." },
    why_wrong: {
      A: { ko: "각 계정을 따로 검토하면 중앙 통합 보기보다 비효율적입니다.", en: "Reviewing every account separately is less efficient than using the consolidated view." },
      C: { ko: "문제의 핵심은 실제로 유휴한 온디맨드 인스턴스를 식별하는 것이며 예약 구매 최적화 검사는 다른 비용 패턴을 다룹니다.", en: "The stated need is to identify idle On-Demand instances; reserved-instance optimization addresses a different purchasing pattern." },
      E: { ko: "Redshift 예약 노드 검사는 RDS for Oracle 비용과 관련이 없습니다.", en: "The Redshift reserved-node check is unrelated to RDS for Oracle." }
    }
  },
  {
    id: "exam7-309", number: 309, tags: ["Amazon S3", "S3 Storage Lens", "Advanced Metrics", "Cost Optimization", "Analytics"],
    question: {
      en: "A solutions architect must optimize storage costs by identifying Amazon S3 buckets that are no longer accessed or are accessed infrequently. Which solution achieves this goal with the least operational overhead?",
      ko: "솔루션스 아키텍트는 스토리지 비용을 최적화해야 하며 더 이상 액세스하지 않거나 거의 액세스하지 않는 S3 버킷을 식별해야 합니다. 최소한의 운영 오버헤드로 이 목표를 달성하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use an S3 Storage Lens dashboard with advanced activity metrics to analyze bucket access patterns.", ko: "고급 활동 메트릭이 포함된 S3 Storage Lens 대시보드로 버킷 액세스 패턴을 분석합니다." },
      { k: "B", en: "Use the S3 dashboard in the AWS Management Console to analyze bucket access patterns.", ko: "AWS Management Console의 S3 대시보드로 버킷 액세스 패턴을 분석합니다." },
      { k: "C", en: "Enable the CloudWatch BucketSizeBytes metric and use the metric data in Amazon Athena to analyze access patterns.", ko: "CloudWatch BucketSizeBytes 지표를 활성화하고 Athena에서 지표 데이터로 액세스 패턴을 분석합니다." },
      { k: "D", en: "Enable AWS CloudTrail for S3 object monitoring and analyze CloudTrail logs integrated with CloudWatch Logs.", ko: "S3 객체 모니터링을 위해 CloudTrail을 활성화하고 CloudWatch Logs와 통합된 로그로 액세스 패턴을 분석합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "S3 Storage Lens 고급 활동 메트릭은 여러 버킷의 객체 접근 활동과 사용 추세를 완전관리형 대시보드에서 집계하므로 미사용·저사용 버킷을 가장 적은 작업으로 식별할 수 있습니다.", en: "S3 Storage Lens advanced activity metrics aggregate object-access activity and usage trends across buckets in a managed dashboard, identifying inactive buckets with minimal work." },
    why_wrong: {
      B: { ko: "기본 S3 대시보드는 Storage Lens 고급 활동 메트릭 수준의 접근 패턴 분석을 제공하지 않습니다.", en: "The basic S3 console dashboard does not provide the same access-pattern analysis as Storage Lens advanced activity metrics." },
      C: { ko: "BucketSizeBytes는 저장 용량 지표이며 객체 접근 빈도를 나타내지 않습니다.", en: "BucketSizeBytes measures storage size, not object access frequency." },
      D: { ko: "CloudTrail 데이터 이벤트 수집과 로그 쿼리는 가능하지만 비용과 운영 작업이 Storage Lens보다 큽니다.", en: "CloudTrail data events and log analysis can work but cost more and require more operations than Storage Lens." }
    }
  },
  {
    id: "exam7-310", number: 310, tags: ["Amazon CloudFront", "Amazon S3", "Signed URL", "Data Transfer", "Global Users"],
    question: {
      en: "A company sells large fixed-format datasets to AI and machine learning customers. The files are stored in an Amazon S3 bucket in us-east-1. A web application on EC2 instances behind an Application Load Balancer gives purchasers S3 signed URLs. Customers are distributed across North America and Europe. The company wants to reduce data transfer costs while maintaining or improving performance. What should a solutions architect do?",
      ko: "회사는 AI/ML 고객에게 형식이 지정된 대용량 데이터 세트를 판매합니다. 파일은 us-east-1의 S3 버킷에 저장되고, ALB 뒤 EC2의 웹 애플리케이션은 구매자에게 S3 서명 URL을 제공합니다. 고객은 북미와 유럽에 분산되어 있습니다. 데이터 전송 비용을 줄이고 성능을 유지하거나 개선하려면 어떻게 해야 합니까?"
    },
    options: [
      { k: "A", en: "Enable S3 Transfer Acceleration on the existing bucket, direct customer requests to the acceleration endpoint, and continue using S3 signed URLs.", ko: "기존 버킷에 S3 Transfer Acceleration을 구성하고 고객 요청을 가속 엔드포인트로 안내하며 S3 서명 URL을 계속 사용합니다." },
      { k: "B", en: "Create an Amazon CloudFront distribution with the existing S3 bucket as the origin. Direct customer requests to CloudFront and use CloudFront signed URLs for access control.", ko: "기존 S3 버킷을 오리진으로 하는 CloudFront 배포를 만들고 고객 요청을 CloudFront URL로 전달하며 CloudFront 서명 URL로 접근을 제어합니다." },
      { k: "C", en: "Create a second S3 bucket in eu-central-1 with cross-Region replication. Direct each customer to the closest Region and continue using S3 signed URLs.", ko: "eu-central-1에 교차 리전 복제를 사용하는 두 번째 S3 버킷을 만들고 가장 가까운 리전으로 요청을 보내며 S3 서명 URL을 계속 사용합니다." },
      { k: "D", en: "Modify the web application to stream the datasets to end users by reading the data from the existing S3 bucket and implementing access control in the application.", ko: "웹 애플리케이션이 기존 S3 버킷에서 데이터를 읽어 최종 사용자에게 스트리밍하고 애플리케이션에서 직접 접근 제어를 구현하도록 수정합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "CloudFront는 S3 오리진의 대용량 파일을 전 세계 엣지에서 캐시해 반복적인 S3 인터넷 전송 비용과 사용자 지연을 줄입니다. CloudFront 서명 URL로 유료 데이터 접근도 계속 제어할 수 있습니다.", en: "CloudFront caches large S3 objects at global edge locations, reducing repeated S3 internet-transfer cost and improving latency. CloudFront signed URLs preserve paid-access control." },
    why_wrong: {
      A: { ko: "Transfer Acceleration은 주로 S3 업로드 가속에 적합하며 다운로드 캐시를 제공하지 않고 추가 가속 요금도 발생합니다.", en: "Transfer Acceleration is primarily useful for accelerating transfers into S3, provides no download cache, and adds acceleration charges." },
      C: { ko: "교차 리전 복제는 저장 및 복제 비용을 추가하며 전 세계 엣지 캐싱보다 운영과 라우팅이 복잡합니다.", en: "Cross-Region replication adds storage and replication costs and requires more routing operations than edge caching." },
      D: { ko: "애플리케이션을 데이터 프록시로 사용하면 EC2와 ALB 전송 부담 및 비용이 늘고 확장성도 낮아집니다.", en: "Proxying files through the application increases EC2 and ALB load and transfer cost while reducing scalability." }
    }
  },
  {
    id: "exam7-311", number: 311, tags: ["Amazon SNS", "Amazon SQS", "Message Filtering", "Decoupling"],
    question: {
      en: "A company is designing an AWS web application to process insurance quotes. Users request quotes that must be separated by quote type, answered within 24 hours, and never lost. The solution must maximize operational efficiency and minimize maintenance. Which solution meets these requirements?",
      ko: "회사는 AWS에서 보험 견적을 처리하는 웹 애플리케이션을 설계하고 있습니다. 사용자 견적 요청은 유형별로 구분되어야 하고 24시간 이내에 응답해야 하며 분실되면 안 됩니다. 운영 효율성을 극대화하고 유지 보수를 최소화하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create a Kinesis data stream for each quote type. Send each message to the appropriate stream and configure each backend group to poll its stream with the Kinesis Client Library.", ko: "견적 유형마다 Kinesis Data Stream을 만들고 각 백엔드 그룹이 KCL로 자체 스트림을 폴링하도록 합니다." },
      { k: "B", en: "Create an AWS Lambda function and an Amazon SNS topic for each quote type. Subscribe each function to its corresponding topic and publish requests to the appropriate topic.", ko: "견적 유형마다 Lambda 함수와 SNS 주제를 만들고 해당 함수가 주제를 구독하도록 합니다." },
      { k: "C", en: "Create one Amazon SNS topic and subscribe an Amazon SQS queue to it. Configure SNS message filtering to deliver each quote type to the appropriate SQS queue. Configure each backend group to use its own queue.", ko: "단일 SNS 주제를 만들고 SQS 대기열들을 구독시킵니다. 견적 유형별로 적절한 SQS 대기열에 전달되도록 SNS 메시지 필터링을 구성하고 각 백엔드가 자체 대기열을 사용하게 합니다." },
      { k: "D", en: "Create a Kinesis Data Firehose delivery stream for each quote type to an OpenSearch Service cluster and configure each backend group to search for its messages.", ko: "견적 유형별 Firehose 스트림을 OpenSearch로 전달하고 백엔드가 메시지를 검색해 처리하도록 합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "SNS 필터 정책은 단일 게시 지점에서 견적 유형별 SQS 대기열로 메시지를 라우팅합니다. SQS는 메시지를 내구성 있게 보관하고 각 백엔드를 분리하므로 운영과 확장이 간단합니다.", en: "SNS filter policies route quote types from one publishing endpoint to dedicated SQS queues. SQS durably retains messages and decouples each backend for simple operations and scaling." },
    why_wrong: {
      A: { ko: "유형별 Kinesis 스트림과 소비자 그룹은 이 작업 대기열에 과도하며 샤드와 체크포인트 운영이 필요합니다.", en: "Separate Kinesis streams and consumers are excessive for work queues and require shard and checkpoint management." },
      B: { ko: "SNS만으로는 처리될 때까지 메시지를 대기열에 내구성 있게 보관하는 소비자별 버퍼가 없습니다.", en: "SNS alone does not provide a durable per-consumer work queue that retains requests until processed." },
      D: { ko: "Firehose와 OpenSearch는 전송·검색 분석용이며 신뢰할 수 있는 작업 큐 패턴이 아닙니다.", en: "Firehose and OpenSearch are for delivery and search analytics, not a reliable work-queue pattern." }
    }
  },
  {
    id: "exam7-312", number: 312, tags: ["AWS Backup", "Amazon EC2", "Amazon EBS", "Cross-Region Backup", "Disaster Recovery"],
    question: {
      en: "A company has an application running on multiple Amazon EC2 instances. Each instance has multiple EBS data volumes attached. The EC2 configuration and data must be backed up nightly, and the application must be recoverable in another AWS Region. Which solution meets these requirements with the most operational efficiency?",
      ko: "회사는 여러 EC2 인스턴스에서 실행되는 애플리케이션을 보유하며 각 인스턴스에는 여러 EBS 데이터 볼륨이 연결되어 있습니다. EC2 구성과 데이터를 야간에 백업하고 다른 AWS 리전에서 복구할 수 있어야 합니다. 가장 운영 효율적인 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Schedule nightly EBS snapshots and write a Lambda function to copy the snapshots to another Region.", ko: "EBS 볼륨의 야간 스냅샷을 예약하고 다른 리전으로 복사하는 Lambda 함수를 작성합니다." },
      { k: "B", en: "Create an AWS Backup plan for nightly backups and cross-Region copies. Add the application's EC2 instances as resources.", ko: "AWS Backup으로 야간 백업 및 다른 리전 복사 계획을 만들고 애플리케이션 EC2 인스턴스를 리소스로 추가합니다." },
      { k: "C", en: "Create an AWS Backup plan for nightly backups and cross-Region copies. Add only the application's EBS volumes as resources.", ko: "AWS Backup으로 야간 백업 및 다른 리전 복사 계획을 만들고 애플리케이션 EBS 볼륨만 리소스로 추가합니다." },
      { k: "D", en: "Schedule nightly EBS snapshots and write a Lambda function to copy the snapshots to another Availability Zone.", ko: "EBS 야간 스냅샷을 예약하고 다른 가용 영역으로 복사하는 Lambda 함수를 작성합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "AWS Backup에서 EC2 인스턴스를 리소스로 지정하면 인스턴스 구성과 연결된 EBS 볼륨을 함께 백업하고 다른 리전으로 관리형 복사를 수행할 수 있습니다.", en: "Selecting EC2 instances as AWS Backup resources captures instance configuration and attached EBS volumes, while the plan manages nightly scheduling and cross-Region copies." },
    why_wrong: {
      A: { ko: "사용자 지정 Lambda는 불필요한 코드와 오류 처리 유지 보수를 추가합니다.", en: "A custom Lambda solution adds unnecessary code, retry handling, and maintenance." },
      C: { ko: "EBS 볼륨만 선택하면 EC2 인스턴스 구성까지 포괄하는 복구 단위를 만들지 못합니다.", en: "Backing up only EBS volumes omits the EC2 instance-level configuration required for complete recovery." },
      D: { ko: "스냅샷은 리전 서비스이며 다른 AZ 복사만으로 다른 리전 복구 요구를 충족하지 않습니다.", en: "Snapshots are Regional, and copying to another AZ does not satisfy cross-Region recovery." }
    }
  },
  {
    id: "exam7-313", number: 313, tags: ["Amazon CloudFront", "Signed URL", "Private Content", "Mobile Application", "Scalability"],
    question: {
      en: "A company is building a mobile application on AWS and wants to reach hundreds of thousands of users. The platform must allow authorized users to view company content from mobile devices. What should a solutions architect recommend?",
      ko: "회사는 AWS에서 모바일 앱을 구축하고 수백만 명의 사용자에게 도달 범위를 확장하려고 합니다. 승인된 사용자가 모바일 장치에서 회사 콘텐츠를 볼 수 있는 플랫폼이 필요합니다. 무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Publish content in a public S3 bucket and stream it with an AWS KMS key.", ko: "퍼블릭 S3 버킷에 콘텐츠를 게시하고 KMS 키를 사용해 스트리밍합니다." },
      { k: "B", en: "Configure an IPsec VPN between the mobile application and AWS to stream content.", ko: "모바일 앱과 AWS 환경 간에 IPsec VPN을 설정해 콘텐츠를 스트리밍합니다." },
      { k: "C", en: "Use Amazon CloudFront and provide signed URLs for the streaming content.", ko: "CloudFront를 사용하고 스트리밍 콘텐츠에 서명된 URL을 제공합니다." },
      { k: "D", en: "Configure AWS Client VPN between the mobile application and AWS to stream content.", ko: "모바일 앱과 AWS 환경 간에 AWS Client VPN을 설정해 콘텐츠를 스트리밍합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "CloudFront는 전 세계 엣지에서 콘텐츠를 확장 가능하게 전송하고 서명 URL로 허용된 사용자와 유효 기간을 제한할 수 있습니다.", en: "CloudFront scales content delivery through global edge locations, while signed URLs restrict access to authorized users for a defined time." },
    why_wrong: {
      A: { ko: "퍼블릭 버킷은 승인된 사용자만 접근하게 한다는 요구를 위반하며 KMS는 스트리밍 권한 제어 수단이 아닙니다.", en: "A public bucket violates authorized-only access, and KMS does not provide viewer authorization." },
      B: { ko: "수백만 모바일 사용자에게 개별 IPsec VPN을 제공하는 방식은 확장성과 운영성이 떨어집니다.", en: "Providing IPsec VPN connectivity to a massive mobile audience is not operationally scalable." },
      D: { ko: "Client VPN은 직원 또는 관리형 원격 네트워크 접근에 적합하며 대규모 소비자 콘텐츠 배포용이 아닙니다.", en: "Client VPN suits managed remote network access, not mass consumer content delivery." }
    }
  },
  {
    id: "exam7-314", number: 314, tags: ["Aurora Serverless", "MySQL", "Auto Scaling", "Variable Workload", "Database"],
    question: {
      en: "A company has an on-premises MySQL database used by a global sales team with infrequent access patterns. The team must minimize database downtime and expects more users in the future, but does not want to select a specific instance type when migrating to AWS. Which service should a solutions architect recommend?",
      ko: "회사에는 글로벌 영업 팀이 드물게 접근하는 패턴으로 사용하는 온프레미스 MySQL 데이터베이스가 있습니다. 가동 중지 시간을 최소화해야 하고 향후 사용자가 늘어날 것으로 예상하지만 특정 인스턴스 유형을 선택하지 않고 AWS로 마이그레이션하려고 합니다. 어떤 서비스를 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Amazon Aurora MySQL", ko: "Amazon Aurora MySQL" },
      { k: "B", en: "Amazon Aurora Serverless for MySQL", ko: "MySQL용 Amazon Aurora Serverless" },
      { k: "C", en: "Amazon Redshift Spectrum", ko: "Amazon Redshift Spectrum" },
      { k: "D", en: "Amazon RDS for MySQL", ko: "MySQL용 Amazon RDS" }
    ],
    answer: ["B"],
    explanation: { ko: "Aurora Serverless는 MySQL 호환 데이터베이스 용량을 수요에 따라 자동으로 조정하며 특정 DB 인스턴스 클래스를 미리 선택할 필요가 없어 간헐적이고 증가하는 워크로드에 적합합니다.", en: "Aurora Serverless automatically adjusts MySQL-compatible database capacity with demand and avoids choosing a fixed DB instance class, fitting intermittent and growing usage." },
    why_wrong: {
      A: { ko: "프로비저닝된 Aurora는 DB 인스턴스 클래스를 선택하고 용량을 관리해야 합니다.", en: "Provisioned Aurora requires selecting and managing DB instance classes." },
      C: { ko: "Redshift Spectrum은 S3 데이터 분석용이며 MySQL 운영 데이터베이스가 아닙니다.", en: "Redshift Spectrum queries analytical data in S3 and is not a MySQL transactional database." },
      D: { ko: "RDS for MySQL은 고정 인스턴스 클래스를 선택하고 증가하는 컴퓨팅 용량을 관리해야 합니다.", en: "RDS for MySQL requires a selected instance class and management of growing compute capacity." }
    }
  },
  {
    id: "exam7-315", number: 315, tags: ["Amazon Inspector", "Amazon EC2", "Vulnerability Management", "Security", "Reporting"],
    question: {
      en: "A company experienced an attack that exploited a vulnerability in a custom application on an on-premises server. The company is migrating the application to Amazon EC2 and wants to actively scan EC2 instances for vulnerabilities and receive detailed reports of the findings. Which solution meets these requirements?",
      ko: "회사는 온프레미스 서버의 사용자 지정 애플리케이션 취약점을 이용한 공격을 경험했습니다. 현재 애플리케이션을 EC2로 마이그레이션하고 있으며 EC2 취약성을 능동적으로 스캔하고 결과를 자세히 설명하는 보고서를 받으려고 합니다. 어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Deploy AWS Shield to scan EC2 instances and use Lambda to record findings in CloudTrail.", ko: "AWS Shield로 EC2 취약점을 스캔하고 Lambda로 결과를 CloudTrail에 기록합니다." },
      { k: "B", en: "Deploy Amazon Macie and Lambda to scan EC2 instances and record findings in CloudTrail.", ko: "Macie와 Lambda로 EC2 취약점을 스캔하고 결과를 CloudTrail에 기록합니다." },
      { k: "C", en: "Enable Amazon GuardDuty, deploy a GuardDuty agent to EC2, and use Lambda to create detailed reports.", ko: "GuardDuty를 켜고 EC2에 GuardDuty 에이전트를 배포하며 Lambda로 상세 보고서를 생성합니다." },
      { k: "D", en: "Enable Amazon Inspector for the EC2 instances and automate generation and delivery of detailed findings reports with Lambda.", ko: "EC2 인스턴스에 Amazon Inspector를 활성화하고 Lambda로 상세 결과 보고서 생성과 배포를 자동화합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "Amazon Inspector는 EC2 워크로드의 소프트웨어 취약성과 의도하지 않은 네트워크 노출을 지속적으로 평가하고 우선순위가 지정된 상세 결과를 제공합니다.", en: "Amazon Inspector continuously assesses EC2 workloads for software vulnerabilities and unintended network exposure and produces detailed prioritized findings." },
    why_wrong: {
      A: { ko: "Shield는 DDoS 보호 서비스이며 호스트 취약성 스캐너가 아닙니다.", en: "Shield protects against DDoS attacks and is not a host vulnerability scanner." },
      B: { ko: "Macie는 S3의 민감 데이터 탐지 서비스이며 EC2 애플리케이션 취약성을 검사하지 않습니다.", en: "Macie discovers sensitive data in S3 and does not scan EC2 application vulnerabilities." },
      C: { ko: "GuardDuty는 위협 탐지 서비스이며 패키지 CVE와 호스트 취약성 평가의 주 서비스는 Inspector입니다.", en: "GuardDuty detects threats; Inspector is the service for package CVEs and host vulnerability assessment." }
    }
  },
  {
    id: "exam7-316", number: 316, tags: ["AWS Lambda", "Amazon SQS", "Serverless", "Cost Optimization", "Event-Driven"],
    question: {
      en: "A company uses a script on Amazon EC2 instances to poll and process messages from an Amazon SQS queue. The company wants to reduce operating costs while retaining the ability to process a growing number of messages in the queue. What should a solutions architect recommend?",
      ko: "회사는 Amazon EC2 인스턴스에서 스크립트를 실행하여 Amazon SQS 대기열의 메시지를 폴링하고 처리합니다. 대기열에 추가되는 메시지가 증가해도 처리 능력을 유지하면서 운영 비용을 절감하려고 합니다. 무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Increase the size of the EC2 instances to process messages faster.", ko: "메시지를 더 빠르게 처리하도록 EC2 인스턴스 크기를 늘립니다." },
      { k: "B", en: "Use Amazon EventBridge to stop the EC2 instances when they are underutilized.", ko: "인스턴스가 충분히 활용되지 않을 때 Amazon EventBridge로 EC2 인스턴스를 중지합니다." },
      { k: "C", en: "Migrate the EC2 script to an AWS Lambda function with an appropriate runtime.", ko: "EC2 인스턴스의 스크립트를 적절한 런타임이 있는 AWS Lambda 함수로 마이그레이션합니다." },
      { k: "D", en: "Use AWS Systems Manager Run Command to run the script on request.", ko: "AWS Systems Manager Run Command를 사용하여 요청 시 스크립트를 실행합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "Lambda는 SQS를 이벤트 소스로 사용하여 대기 중인 메시지 수에 맞게 자동으로 동시 실행을 확장하고 실제 실행 시간만큼 과금하므로 상시 실행 EC2의 운영 비용과 관리 부담을 줄입니다.", en: "Lambda can use SQS as an event source, scale concurrency with the queued workload, and charge for actual execution, reducing the cost and management of continuously running EC2 workers." },
    why_wrong: {
      A: { ko: "더 큰 EC2 인스턴스는 유휴 시간에도 비용이 발생하며 메시지 양에 따른 자동 확장을 제공하지 않습니다.", en: "A larger EC2 instance still incurs cost while idle and does not automatically scale with message volume." },
      B: { ko: "인스턴스를 중지하면 새 메시지를 처리할 작업자가 없어지고 시작 및 중지 로직도 추가로 관리해야 합니다.", en: "Stopping the instances leaves no worker to process new messages and adds start-and-stop orchestration." },
      D: { ko: "Run Command는 관리 명령 실행 기능이며 SQS 메시지 양에 따라 확장되는 이벤트 처리 서비스가 아닙니다.", en: "Run Command executes administrative commands and is not an event processor that scales with SQS traffic." }
    }
  },
  {
    id: "exam7-317", number: 317, tags: ["AWS Glue", "Amazon S3", "Amazon Redshift", "ETL", "CSV"],
    question: {
      en: "A legacy application generates data as CSV files and stores them in Amazon S3. A new commercial off-the-shelf application can run complex SQL queries over data stored in Amazon Redshift and Amazon S3, but it cannot process the CSV files. The legacy application cannot be changed to produce another format. Which solution allows the new application to use the data with the least operational overhead?",
      ko: "레거시 애플리케이션은 데이터를 CSV 파일로 생성하여 Amazon S3에 저장합니다. 새로운 상용 기성품 애플리케이션은 Amazon Redshift와 Amazon S3의 데이터에 복잡한 SQL 쿼리를 실행할 수 있지만 CSV 파일은 처리할 수 없습니다. 레거시 애플리케이션의 출력 형식도 변경할 수 없습니다. 최소한의 운영 오버헤드로 새 애플리케이션이 데이터를 사용하게 하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create a scheduled AWS Glue ETL job to process the CSV files and store the processed data in Amazon Redshift.", ko: "일정에 따라 실행되는 AWS Glue ETL 작업으로 CSV 파일을 처리하고 처리된 데이터를 Amazon Redshift에 저장합니다." },
      { k: "B", en: "Develop a Python script on an EC2 instance to convert CSV files to SQL files. Invoke it with cron and store the output in Amazon S3.", ko: "EC2 인스턴스에서 CSV를 SQL 파일로 변환하는 Python 스크립트를 개발하고 cron으로 실행하여 결과를 Amazon S3에 저장합니다." },
      { k: "C", en: "Use an S3 event to invoke Lambda, process the CSV files, and store the processed data in Amazon DynamoDB.", ko: "S3 이벤트로 Lambda를 호출하여 CSV 파일을 처리하고 처리된 데이터를 DynamoDB 테이블에 저장합니다." },
      { k: "D", en: "Use EventBridge to start an Amazon EMR cluster weekly, process the CSV files, and store the processed data in Amazon Redshift.", ko: "EventBridge로 매주 Amazon EMR 클러스터를 시작하여 CSV 파일을 처리하고 처리된 데이터를 Amazon Redshift에 저장합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "AWS Glue는 서버리스 관리형 ETL 서비스입니다. 예약 작업으로 S3의 CSV를 변환하여 새 애플리케이션이 지원하는 Redshift에 적재하면 서버나 클러스터를 운영할 필요가 없습니다.", en: "AWS Glue is a managed serverless ETL service. A scheduled job can transform CSV data from S3 and load it into Redshift, which the new application supports, without managing servers or clusters." },
    why_wrong: {
      B: { ko: "사용자 지정 스크립트와 EC2 및 cron을 직접 운영해야 하며 SQL 파일이 애플리케이션이 요구하는 분석 저장소가 된다는 보장도 없습니다.", en: "This requires maintaining custom code, EC2, and cron, and SQL files are not necessarily a supported analytical data store." },
      C: { ko: "DynamoDB는 문제에서 새 애플리케이션이 쿼리할 수 있다고 명시한 저장소가 아닙니다.", en: "DynamoDB is not one of the data stores the new application can query." },
      D: { ko: "EMR 클러스터를 시작하고 관리하는 방식은 서버리스 Glue 작업보다 운영 오버헤드가 큽니다.", en: "Starting and managing an EMR cluster creates more operational overhead than a serverless Glue job." }
    }
  },
  {
    id: "exam7-318", number: 318, tags: ["AWS CloudTrail", "AWS Config", "Audit", "Compliance", "Change Tracking", "Choose two"],
    question: {
      en: "A company recently migrated its entire IT environment to AWS. Users have provisioned oversized EC2 instances and modified security group rules without an appropriate change control process. A solutions architect must propose a strategy to track and audit these inventory and configuration changes. Which two actions meet these requirements? (Choose two.)",
      ko: "회사가 최근 전체 IT 환경을 AWS로 마이그레이션했습니다. 사용자가 적절한 변경 제어 절차 없이 과도한 크기의 EC2 인스턴스를 프로비저닝하고 보안 그룹 규칙을 수정했습니다. 이러한 인벤토리와 구성 변경을 추적하고 감사하려면 어떤 두 가지 조치를 취해야 합니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Enable AWS CloudTrail and use it for auditing.", ko: "AWS CloudTrail을 활성화하고 감사에 사용합니다." },
      { k: "B", en: "Use lifecycle policies for the Amazon EC2 instances.", ko: "Amazon EC2 인스턴스에 데이터 수명 주기 정책을 사용합니다." },
      { k: "C", en: "Enable AWS Trusted Advisor and use the security dashboard.", ko: "AWS Trusted Advisor를 활성화하고 보안 대시보드를 참조합니다." },
      { k: "D", en: "Enable AWS Config and create rules for auditing and compliance.", ko: "AWS Config를 활성화하고 감사 및 규정 준수 규칙을 생성합니다." },
      { k: "E", en: "Use AWS CloudFormation templates to restore previous resource configurations.", ko: "AWS CloudFormation 템플릿을 사용하여 이전 리소스 구성을 복원합니다." }
    ],
    answer: ["A", "D"],
    explanation: { ko: "CloudTrail은 누가 어떤 API 작업으로 리소스를 변경했는지 기록합니다. AWS Config는 리소스 구성과 관계의 변경 이력을 유지하고 규칙으로 준수 여부를 지속 평가하므로 두 서비스를 함께 사용하면 변경 추적과 구성을 감사할 수 있습니다.", en: "CloudTrail records who changed resources through which API actions. AWS Config keeps resource configuration and relationship history and continuously evaluates compliance rules, so together they provide change tracking and configuration auditing." },
    why_wrong: {
      B: { ko: "수명 주기 정책은 인벤토리 및 구성 변경의 감사 기록을 제공하지 않습니다.", en: "Lifecycle policies do not provide an audit history of inventory and configuration changes." },
      C: { ko: "Trusted Advisor는 권장 사항과 점검 결과를 제공하지만 상세 구성 이력과 모든 변경 주체를 기록하는 서비스가 아닙니다.", en: "Trusted Advisor provides recommendations and checks, but it does not record detailed configuration history and every change actor." },
      E: { ko: "CloudFormation은 선언적 배포 도구이며 콘솔이나 API에서 발생한 모든 변경을 추적하고 감사하지 않습니다.", en: "CloudFormation is a declarative deployment tool and does not track and audit every change made through the console or APIs." }
    }
  },
  {
    id: "exam7-319", number: 319, tags: ["Systems Manager", "Session Manager", "Amazon EC2", "Secure Access", "SSH"],
    question: {
      en: "A company has hundreds of Linux-based Amazon EC2 instances. Administrators have managed the instances with shared SSH keys, but the security team requires all shared keys to be removed. Which solution provides secure access to the EC2 instances with the least management overhead?",
      ko: "회사는 수백 개의 Linux 기반 Amazon EC2 인스턴스를 보유하고 있습니다. 관리자는 공유 SSH 키로 인스턴스를 관리해 왔지만 보안 팀은 모든 공유 키를 제거하도록 요구합니다. 최소한의 관리 오버헤드로 EC2 인스턴스에 안전하게 접근하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use AWS Systems Manager Session Manager to connect to the EC2 instances.", ko: "AWS Systems Manager Session Manager를 사용하여 EC2 인스턴스에 연결합니다." },
      { k: "B", en: "Use AWS STS to generate one-time SSH keys on demand.", ko: "AWS STS를 사용하여 온디맨드 방식으로 일회성 SSH 키를 생성합니다." },
      { k: "C", en: "Allow shared SSH access to a fleet of bastion instances and permit SSH only from the bastions to all other instances.", ko: "배스천 인스턴스 집합에 공유 SSH 접근을 허용하고 다른 모든 인스턴스는 배스천에서 오는 SSH만 허용합니다." },
      { k: "D", en: "Authenticate users with Amazon Cognito and invoke Lambda to generate temporary SSH keys.", ko: "Amazon Cognito로 사용자를 인증하고 Lambda를 호출하여 임시 SSH 키를 생성합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "Session Manager는 IAM 기반으로 인스턴스 셸 접근을 제공하므로 공유 SSH 키, 배스천 호스트, 인바운드 SSH 포트가 필요 없습니다. 세션 로깅과 중앙 권한 관리도 지원합니다.", en: "Session Manager provides IAM-controlled shell access without shared SSH keys, bastion hosts, or inbound SSH ports, and it supports centralized authorization and session logging." },
    why_wrong: {
      B: { ko: "AWS STS는 임시 AWS 자격 증명을 발급하며 자체적으로 SSH 키를 생성하거나 배포하지 않습니다.", en: "AWS STS issues temporary AWS credentials; it does not itself generate or distribute SSH keys." },
      C: { ko: "공유 키를 계속 사용하므로 보안 요구를 위반하고 배스천 집합도 운영해야 합니다.", en: "This retains shared keys, violating the requirement, and adds a bastion fleet to operate." },
      D: { ko: "Cognito와 사용자 지정 Lambda 키 발급 체계는 불필요한 구현 및 운영 부담을 만듭니다.", en: "A Cognito and custom Lambda key-issuance system adds unnecessary implementation and operational work." }
    }
  },
  {
    id: "exam7-320", number: 320, tags: ["Kinesis Data Streams", "Kinesis Data Analytics", "Streaming", "Near Real-Time", "Data Durability"],
    question: {
      en: "A company uses a fleet of Amazon EC2 instances to collect JSON data from on-premises data sources at up to 1 MB/s. In-progress data is lost when an EC2 instance reboots. Data scientists want to query the collected data in near real time. Which solution provides scalable near-real-time queries while minimizing data loss?",
      ko: "회사는 Amazon EC2 인스턴스 집합으로 온프레미스 데이터 소스에서 JSON 데이터를 최대 1MB/s 속도로 수집합니다. EC2 인스턴스가 재부팅되면 진행 중인 데이터가 손실됩니다. 데이터 과학 팀은 수집된 데이터를 거의 실시간으로 쿼리하려고 합니다. 데이터 손실을 최소화하면서 확장 가능한 거의 실시간 쿼리를 제공하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Publish the data to Amazon Kinesis Data Streams and query it with Amazon Kinesis Data Analytics.", ko: "데이터를 Amazon Kinesis Data Streams에 게시하고 Kinesis Data Analytics를 사용하여 쿼리합니다." },
      { k: "B", en: "Publish the data to Amazon Kinesis Data Firehose with Amazon Redshift as the destination, and query it with Redshift.", ko: "Amazon Redshift를 대상으로 하는 Kinesis Data Firehose에 데이터를 게시하고 Redshift로 쿼리합니다." },
      { k: "C", en: "Store the collected data in EC2 instance store, publish it through Kinesis Data Firehose to Amazon S3, and query it with Athena.", ko: "수집 데이터를 EC2 인스턴스 스토어에 저장하고 Kinesis Data Firehose를 통해 Amazon S3에 게시한 뒤 Athena로 쿼리합니다." },
      { k: "D", en: "Store the collected data on EBS volumes, publish it to ElastiCache for Redis, and query it by subscribing to Redis channels.", ko: "수집 데이터를 EBS 볼륨에 저장하고 ElastiCache for Redis에 게시한 뒤 Redis 채널을 구독하여 쿼리합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "Kinesis Data Streams는 수집 레코드를 내구성 있게 보관하고 처리량에 맞게 확장할 수 있습니다. Kinesis Data Analytics(현재 Amazon Managed Service for Apache Flink)를 연결하면 스트림을 거의 실시간으로 분석할 수 있습니다.", en: "Kinesis Data Streams durably retains incoming records and scales for the required throughput. Kinesis Data Analytics, now Amazon Managed Service for Apache Flink, can analyze the stream in near real time." },
    why_wrong: {
      B: { ko: "Firehose와 Redshift는 데이터를 버퍼링하고 적재하므로 스트림 자체를 대상으로 한 거의 실시간 분석보다 지연이 큽니다.", en: "Firehose buffers data before loading Redshift, adding more latency than direct stream analytics." },
      C: { ko: "인스턴스 스토어는 인스턴스 중지나 장애 시 데이터가 손실될 수 있고 Athena는 저장된 S3 데이터의 대화형 쿼리에 적합합니다.", en: "Instance store data can be lost on instance stop or failure, and Athena is designed for interactive queries over stored S3 data." },
      D: { ko: "Redis Pub/Sub 채널은 내구성 있는 스트림 저장소가 아니며 구독자가 놓친 메시지를 복구하지 못합니다.", en: "Redis Pub/Sub channels are not a durable stream store and do not recover messages missed by subscribers." }
    }
  },
  {
    id: "exam7-321", number: 321, tags: ["Amazon S3", "Encryption", "Bucket Policy", "Server-Side Encryption"],
    question: {
      en: "A solutions architect must ensure that every object uploaded to an Amazon S3 bucket is encrypted. What should the solutions architect do?",
      ko: "솔루션 설계자는 Amazon S3 버킷에 업로드되는 모든 객체가 암호화되도록 해야 합니다. 어떻게 해야 합니까?"
    },
    options: [
      { k: "A", en: "Update the bucket policy to deny PutObject requests that do not include an s3:x-amz-acl header.", ko: "PutObject 요청에 s3:x-amz-acl 헤더가 없으면 거부하도록 버킷 정책을 업데이트합니다." },
      { k: "B", en: "Update the bucket policy to deny PutObject requests that do not include an s3:x-amz-acl header set to private.", ko: "PutObject 요청에 private로 설정된 s3:x-amz-acl 헤더가 없으면 거부하도록 버킷 정책을 업데이트합니다." },
      { k: "C", en: "Update the bucket policy to deny PutObject requests that do not include an aws:SecureTransport header set to true.", ko: "PutObject 요청에 true로 설정된 aws:SecureTransport 조건이 없으면 거부하도록 버킷 정책을 업데이트합니다." },
      { k: "D", en: "Update the bucket policy to deny PutObject requests that do not include the x-amz-server-side-encryption header.", ko: "PutObject 요청에 x-amz-server-side-encryption 헤더가 없으면 거부하도록 버킷 정책을 업데이트합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "버킷 정책에서 서버 측 암호화 헤더가 없는 PutObject 요청을 명시적으로 거부하면 클라이언트가 암호화를 요청한 객체만 업로드할 수 있습니다.", en: "A bucket policy that explicitly denies PutObject requests without the server-side encryption header permits only uploads that request encryption." },
    why_wrong: {
      A: { ko: "ACL 헤더는 객체 접근 권한을 제어하며 암호화를 보장하지 않습니다.", en: "The ACL header controls object permissions and does not enforce encryption." },
      B: { ko: "private ACL도 접근 제어 설정일 뿐 저장 데이터 암호화 설정이 아닙니다.", en: "A private ACL is an access-control setting, not an encryption setting." },
      C: { ko: "aws:SecureTransport는 전송 중 TLS 사용을 강제하며 저장 객체 암호화를 직접 강제하지 않습니다.", en: "aws:SecureTransport enforces TLS in transit, not encryption of the stored object." }
    }
  },
  {
    id: "exam7-322", number: 322, tags: ["Amazon SQS", "Asynchronous Processing", "Decoupling", "Mobile Application", "Thumbnails"],
    question: {
      en: "Users upload images from mobile devices to a multi-tier application. Thumbnail generation can take up to 60 seconds, but the company wants to acknowledge receipt of the original image faster. The request must be passed asynchronously to another application tier. What should a solutions architect do?",
      ko: "사용자가 모바일 장치에서 다중 계층 애플리케이션으로 이미지를 업로드합니다. 썸네일 생성에는 최대 60초가 걸리지만 회사는 원본 이미지 수신을 더 빨리 알려주고 요청을 다른 애플리케이션 계층에 비동기식으로 전달하려고 합니다. 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create a custom Lambda function that generates the thumbnail and notifies the user, invoked directly by the image upload process.", ko: "썸네일을 생성하고 사용자에게 알리는 사용자 지정 Lambda 함수를 만들고 이미지 업로드 프로세스에서 직접 호출합니다." },
      { k: "B", en: "Create an AWS Step Functions workflow to orchestrate all application tiers and notify the user after thumbnail generation.", ko: "모든 애플리케이션 계층을 오케스트레이션하고 썸네일 생성 후 사용자에게 알리는 Step Functions 워크플로를 만듭니다." },
      { k: "C", en: "Create an Amazon SQS queue. Place a message on the queue after upload for thumbnail generation and immediately acknowledge image receipt to the user.", ko: "Amazon SQS 대기열을 만들고 이미지 업로드 후 썸네일 생성 메시지를 넣은 다음 사용자에게 이미지 수신을 즉시 알립니다." },
      { k: "D", en: "Create Amazon SNS topics and subscriptions for upload, thumbnail generation, and push notification processing.", ko: "업로드, 썸네일 생성, 푸시 알림 처리를 위한 Amazon SNS 주제와 구독을 생성합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "SQS는 업로드 계층과 썸네일 처리 계층 사이에 내구성 있는 비동기 버퍼를 제공합니다. 업로드 계층은 메시지를 넣은 즉시 응답하고 작업자는 이후 독립적으로 처리할 수 있습니다.", en: "SQS provides a durable asynchronous buffer between the upload and thumbnail tiers. The upload tier can respond immediately after enqueueing while workers process the image independently." },
    why_wrong: {
      A: { ko: "직접 호출은 업로드 응답을 장시간 처리와 결합하며 명시된 비동기 디스패치 계층을 제공하지 않습니다.", en: "Direct invocation couples the upload response to long processing and does not provide the requested asynchronous dispatch tier." },
      B: { ko: "전체 계층 오케스트레이션은 단순한 작업 대기열보다 복잡하고 이 요구에 불필요합니다.", en: "Orchestrating every tier is more complex than the simple work queue required here." },
      D: { ko: "SNS는 푸시 전달에는 적합하지만 작업을 보존하고 소비자가 처리할 때까지 버퍼링하는 대기열이 아닙니다.", en: "SNS suits push delivery but is not a work queue that retains jobs until a consumer processes them." }
    }
  },
  {
    id: "exam7-323", number: 323, tags: ["Amazon API Gateway", "AWS Lambda", "Amazon DynamoDB", "Serverless", "High Availability"],
    question: {
      en: "Badge readers at every building entrance send HTTPS messages identifying access attempts. A highly available system must process the messages and provide results for security analysis. Which architecture should a solutions architect recommend?",
      ko: "건물의 모든 입구에 있는 배지 판독기가 접근 시도를 나타내는 HTTPS 메시지를 보냅니다. 이러한 메시지를 처리하고 보안 팀이 분석할 결과를 제공하는 고가용성 시스템으로 어떤 아키텍처를 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Run an EC2 HTTPS endpoint to process messages and store results in Amazon S3.", ko: "EC2 인스턴스를 HTTPS 엔드포인트로 실행하여 메시지를 처리하고 결과를 Amazon S3에 저장합니다." },
      { k: "B", en: "Create an HTTPS endpoint in Amazon API Gateway that invokes Lambda to process messages and stores results in DynamoDB.", ko: "Amazon API Gateway에 HTTPS 엔드포인트를 만들고 Lambda로 메시지를 처리하여 결과를 DynamoDB에 저장합니다." },
      { k: "C", en: "Use Route 53 to send incoming sensor messages to Lambda and store results in DynamoDB.", ko: "Route 53을 사용하여 센서 메시지를 Lambda로 보내고 결과를 DynamoDB에 저장합니다." },
      { k: "D", en: "Create an S3 gateway VPC endpoint and a Site-to-Site VPN so sensors can write directly to S3.", ko: "S3 게이트웨이 VPC 엔드포인트와 Site-to-Site VPN을 구성하여 센서가 S3에 직접 기록하게 합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "API Gateway, Lambda, DynamoDB 조합은 서버 관리 없이 확장 가능한 HTTPS 수집, 처리, 결과 저장을 제공하며 각 서비스가 고가용성으로 관리됩니다.", en: "API Gateway, Lambda, and DynamoDB provide scalable HTTPS ingestion, processing, and result storage without server management, with managed high availability." },
    why_wrong: {
      A: { ko: "단일 EC2 엔드포인트는 자체적으로 고가용성이 아니며 서버 운영이 필요합니다.", en: "A single EC2 endpoint is not inherently highly available and requires server operations." },
      C: { ko: "Route 53은 DNS 서비스이며 HTTPS 요청을 처리하여 Lambda에 전달하는 API 엔드포인트가 아닙니다.", en: "Route 53 is DNS and does not act as an HTTPS API endpoint that invokes Lambda." },
      D: { ko: "게이트웨이 VPC 엔드포인트는 VPC 내부용이며 센서 메시지 처리 계층이나 분석 결과 구조를 제공하지 않습니다.", en: "A gateway VPC endpoint is for VPC access and supplies neither message processing nor structured analysis results." }
    }
  },
  {
    id: "exam7-324", number: 324, tags: ["AWS Storage Gateway", "Stored Volumes", "Disaster Recovery", "iSCSI", "Snapshots"],
    question: {
      en: "A company needs disaster recovery for hundreds of terabytes on a primary on-premises file storage volume mounted from an iSCSI device. End users require immediate, low-latency access to all file types. Which solution meets the requirements with the fewest infrastructure changes?",
      ko: "회사는 iSCSI 장치에서 마운트되는 수백 TB 규모의 기본 온프레미스 파일 스토리지 볼륨에 대한 재해 복구 계획이 필요합니다. 최종 사용자는 모든 파일 유형에 지연 없이 즉시 접근해야 합니다. 기존 인프라 변경을 최소화하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Provision an S3 File Gateway with a 10 TB cache, modify applications to use NFS, and mount its S3 bucket during recovery.", ko: "10TB 캐시의 S3 파일 게이트웨이를 프로비저닝하고 애플리케이션을 NFS로 수정한 뒤 복구 시 S3 버킷을 마운트합니다." },
      { k: "B", en: "Back up all data to a Tape Gateway virtual tape library nightly and restore virtual tapes to EBS during recovery.", ko: "모든 데이터를 Tape Gateway 가상 테이프 라이브러리에 야간 백업하고 복구 시 가상 테이프를 EBS로 복원합니다." },
      { k: "C", en: "Provision a cached Volume Gateway with a 10 TB cache, copy all files to it, and restore scheduled snapshots to EBS during recovery.", ko: "10TB 캐시의 캐시 볼륨 게이트웨이를 프로비저닝하여 모든 파일을 복사하고 복구 시 예약 스냅샷을 EBS로 복원합니다." },
      { k: "D", en: "Provision a stored Volume Gateway with disk capacity equal to the existing volume, mount it over iSCSI, copy all files, and schedule snapshots that can be restored to EBS during recovery.", ko: "기존 볼륨과 같은 디스크 용량의 저장 볼륨 게이트웨이를 프로비저닝하고 iSCSI로 마운트하여 모든 파일을 복사한 뒤 복구 시 EBS로 복원할 스냅샷을 예약합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "저장 볼륨 게이트웨이는 전체 기본 데이터를 온프레미스에 유지해 모든 파일에 짧은 지연으로 접근하게 하면서 데이터를 AWS에 비동기 백업하고 EBS로 복구할 수 있는 스냅샷을 생성합니다.", en: "Stored Volume Gateway keeps the complete primary dataset on premises for low-latency access while asynchronously backing it up to AWS as snapshots restorable to EBS." },
    why_wrong: {
      A: { ko: "프로토콜과 애플리케이션을 변경해야 하며 S3 버킷을 EC2에 일반 파일 시스템처럼 직접 마운트하는 설명도 부정확합니다.", en: "This requires protocol and application changes, and an S3 bucket is not mounted to EC2 as described." },
      B: { ko: "테이프 백업은 즉각적인 DR 복구에 느리고 운영 단계가 많습니다.", en: "Tape backup is slow for immediate DR recovery and introduces more operational steps." },
      C: { ko: "캐시 볼륨은 전체 데이터가 아닌 자주 쓰는 데이터만 로컬에 두므로 모든 파일에 즉시 접근해야 한다는 요구에 맞지 않습니다.", en: "Cached volumes keep only frequently accessed data locally, so they do not guarantee immediate access to the entire dataset." }
    }
  },
  {
    id: "exam7-325", number: 325, tags: ["Amazon Cognito", "Identity Pool", "IAM Role", "Amazon S3", "Authorization"],
    question: {
      en: "A web application hosted in Amazon S3 uses Amazon Cognito as an identity provider and returns JWTs. After deployment, users cannot access protected resources in another S3 bucket. Which solution provides the appropriate permissions?",
      ko: "Amazon S3에서 호스팅되는 웹 애플리케이션은 Amazon Cognito를 자격 증명 공급자로 사용하고 JWT를 반환합니다. 배포 후 사용자가 다른 S3 버킷의 보호된 리소스에 접근하지 못합니다. 적절한 권한을 제공하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Update the Amazon Cognito identity pool to attach an IAM role with appropriate access to the protected content.", ko: "보호된 콘텐츠에 접근할 적절한 IAM 역할을 연결하도록 Amazon Cognito 자격 증명 풀을 업데이트합니다." },
      { k: "B", en: "Update the S3 ACL so the application can access the protected content.", ko: "애플리케이션이 보호된 콘텐츠에 접근할 수 있도록 S3 ACL을 업데이트합니다." },
      { k: "C", en: "Redeploy the application to the S3 bucket with eventual-consistency reads that do not affect users.", ko: "사용자에게 영향을 주지 않는 최종적 일관성 읽기를 사용하도록 애플리케이션을 S3에 재배포합니다." },
      { k: "D", en: "Use custom attribute mappings in the Cognito user pool to grant users permissions to the protected content.", ko: "Cognito 사용자 풀의 사용자 지정 속성 매핑으로 보호된 콘텐츠 접근 권한을 부여합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "Cognito 자격 증명 풀은 인증된 사용자에게 임시 AWS 자격 증명과 IAM 역할 권한을 제공합니다. 해당 역할에 대상 S3 객체 읽기 권한을 부여해야 합니다.", en: "A Cognito identity pool provides authenticated users temporary AWS credentials governed by an IAM role. That role must allow reads of the protected S3 objects." },
    why_wrong: {
      B: { ko: "ACL로 애플리케이션 전체에 광범위한 권한을 주는 방식은 사용자별 Cognito 자격 증명과 IAM 권한 모델에 맞지 않습니다.", en: "Granting broad application access through ACLs does not use the per-user Cognito credential and IAM authorization model." },
      C: { ko: "S3는 강력한 읽기 후 쓰기 일관성을 제공하며 이 문제는 일관성이 아니라 권한 문제입니다.", en: "S3 provides strong read-after-write consistency, and this is an authorization issue rather than a consistency issue." },
      D: { ko: "사용자 풀 속성은 인증 정보를 나타내지만 AWS 리소스 권한은 자격 증명 풀의 IAM 역할이 부여합니다.", en: "User-pool attributes represent identity information; the identity pool's IAM roles grant AWS resource permissions." }
    }
  },
  {
    id: "exam7-326", number: 326, tags: ["Amazon S3", "S3 Intelligent-Tiering", "Lifecycle Policy", "Multipart Upload", "Cost Optimization", "Choose two"],
    question: {
      en: "An image hosting company uploads large assets to Amazon S3 Standard by using parallel multipart uploads. Objects are frequently accessed for 30 days, then less frequently with unpredictable access patterns. Which two actions optimize storage cost while maintaining high availability and resilience? (Choose two.)",
      ko: "이미지 호스팅 회사는 병렬 멀티파트 업로드로 대규모 자산을 S3 Standard에 저장합니다. 객체는 처음 30일간 자주 사용되고 이후에는 사용 빈도가 낮아지지만 접근 패턴은 일정하지 않습니다. 고가용성과 복원력을 유지하면서 비용을 최적화하는 두 가지 작업은 무엇입니까? (2개 선택)"
    },
    options: [
      { k: "A", en: "Move assets to S3 Intelligent-Tiering after 30 days.", ko: "30일 후 자산을 S3 Intelligent-Tiering으로 이동합니다." },
      { k: "B", en: "Configure an S3 lifecycle policy to clean up incomplete multipart uploads.", ko: "불완전한 멀티파트 업로드를 정리하도록 S3 수명 주기 정책을 구성합니다." },
      { k: "C", en: "Configure an S3 lifecycle policy to clean up expired object delete markers.", ko: "만료된 객체 삭제 마커를 정리하도록 S3 수명 주기 정책을 구성합니다." },
      { k: "D", en: "Move assets to S3 Standard-IA after 30 days.", ko: "30일 후 자산을 S3 Standard-IA로 이동합니다." },
      { k: "E", en: "Move assets to S3 One Zone-IA after 30 days.", ko: "30일 후 자산을 S3 One Zone-IA로 이동합니다." }
    ],
    answer: ["A", "B"],
    explanation: { ko: "Intelligent-Tiering은 알 수 없거나 변하는 접근 패턴에 맞춰 객체를 자동으로 비용 효율적인 계층으로 이동하면서 다중 AZ 복원력을 유지합니다. 완료되지 않은 멀티파트 조각은 비용을 발생시키므로 수명 주기로 중단해야 합니다.", en: "Intelligent-Tiering automatically moves objects among cost-effective tiers for unknown or changing access patterns while retaining multi-AZ resilience. Incomplete multipart parts incur storage charges and should be aborted by lifecycle policy." },
    why_wrong: {
      C: { ko: "삭제 마커 자체는 저장 비용을 발생시키지 않으므로 이 시나리오의 비용 최적화에 도움이 되지 않습니다.", en: "Delete markers themselves do not incur storage charges, so cleaning them does not address this cost scenario." },
      D: { ko: "Standard-IA는 접근할 때 검색 요금이 발생하므로 예측할 수 없는 접근 패턴에서는 Intelligent-Tiering이 더 적합합니다.", en: "Standard-IA charges retrieval fees, making Intelligent-Tiering a better fit for unpredictable access." },
      E: { ko: "One Zone-IA는 단일 AZ에 저장하므로 요구된 고가용성과 복원력을 낮춥니다.", en: "One Zone-IA stores data in one AZ and reduces the required availability and resilience." }
    }
  },
  {
    id: "exam7-327", number: 327, tags: ["AWS Network Firewall", "Domain List", "VPC", "Egress Filtering", "Security"],
    question: {
      en: "Sensitive EC2 instances run in private subnets. Company policy permits outbound internet access only to approved third-party software repositories identified by URL and blocks all other internet traffic. Which solution meets these requirements?",
      ko: "민감한 데이터를 포함한 EC2 인스턴스가 프라이빗 서브넷에서 실행됩니다. 회사 정책은 URL로 식별되는 승인된 타사 소프트웨어 리포지토리에 대한 아웃바운드 인터넷 접근만 허용하고 나머지는 모두 차단하도록 요구합니다. 어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Route outbound traffic through AWS Network Firewall and configure a domain list rule group that allows approved repositories and denies other domains.", ko: "아웃바운드 트래픽을 AWS Network Firewall로 라우팅하고 승인된 리포지토리를 허용하며 다른 도메인을 거부하는 도메인 목록 규칙 그룹을 구성합니다." },
      { k: "B", en: "Configure AWS WAF web ACL rules based on source and destination IP address sets.", ko: "소스 및 대상 IP 주소 범위 집합을 기반으로 AWS WAF 웹 ACL 규칙을 구성합니다." },
      { k: "C", en: "Use strict security group inbound rules and configure outbound rules by URL.", ko: "엄격한 보안 그룹 인바운드 규칙을 사용하고 URL 기반 아웃바운드 규칙을 구성합니다." },
      { k: "D", en: "Send all outbound traffic to an Application Load Balancer and use URL-based listener rules.", ko: "모든 아웃바운드 트래픽을 Application Load Balancer로 보내고 URL 기반 리스너 규칙을 사용합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "AWS Network Firewall은 VPC 아웃바운드 경로에 배치할 수 있는 상태 저장 네트워크 방화벽이며 도메인 목록 규칙으로 허용된 호스트 이름만 통과시킬 수 있습니다.", en: "AWS Network Firewall is a stateful firewall placed in a VPC egress path and supports domain-list rules that allow only approved hostnames." },
    why_wrong: {
      B: { ko: "AWS WAF는 지원되는 웹 리소스로 들어오는 HTTP 요청을 보호하며 일반 VPC 아웃바운드 제어 도구가 아닙니다.", en: "AWS WAF protects inbound HTTP requests to supported web resources and is not a general VPC egress control." },
      C: { ko: "보안 그룹 규칙은 IP와 포트를 사용하며 URL이나 도메인 이름 기반 필터링을 지원하지 않습니다.", en: "Security groups use IP addresses and ports and do not filter by URL or domain name." },
      D: { ko: "ALB는 인바운드 애플리케이션 트래픽 분산용이며 아웃바운드 인터넷 프록시 방화벽이 아닙니다.", en: "An ALB distributes inbound application traffic and is not an outbound internet proxy firewall." }
    }
  },
  {
    id: "exam7-328", number: 328, tags: ["Amazon CloudFront", "Amazon SQS", "Amazon EC2", "Static Content", "Traffic Spikes", "Decoupling"],
    question: {
      en: "A three-tier ecommerce application hosts its website in Amazon S3 and an API on three EC2 instances behind an ALB. The API includes static and dynamic frontend content and backend workers that process sales requests asynchronously. A product launch will cause a sharp increase in requests. What should a solutions architect recommend so all requests are processed successfully?",
      ko: "3계층 전자상거래 애플리케이션은 S3에서 웹사이트를 호스팅하고 ALB 뒤의 EC2 인스턴스 3개에서 API를 호스팅합니다. API에는 정적·동적 프런트엔드 콘텐츠와 판매 요청을 비동기 처리하는 백엔드 작업자가 있습니다. 신제품 출시로 요청이 급증할 때 모든 요청을 성공적으로 처리하려면 무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Add CloudFront for dynamic content and increase the number of EC2 instances.", ko: "동적 콘텐츠에 CloudFront를 추가하고 EC2 인스턴스 수를 늘립니다." },
      { k: "B", en: "Add CloudFront for static content and place EC2 instances in an Auto Scaling group that launches instances based on network traffic.", ko: "정적 콘텐츠에 CloudFront를 추가하고 네트워크 트래픽을 기준으로 확장하는 Auto Scaling 그룹에 EC2를 배치합니다." },
      { k: "C", en: "Add CloudFront for dynamic content and add ElastiCache in front of the ALB.", ko: "동적 콘텐츠에 CloudFront를 추가하고 ALB 앞에 ElastiCache를 배치합니다." },
      { k: "D", en: "Add CloudFront for static content and use an Amazon SQS queue to receive website requests for later processing by EC2 instances.", ko: "정적 콘텐츠에 CloudFront를 추가하고 웹사이트 요청을 Amazon SQS 대기열로 받아 EC2 인스턴스가 이후 처리하게 합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "CloudFront는 정적 콘텐츠 부하를 원본에서 줄이고 SQS는 판매 요청을 내구성 있게 버퍼링하여 순간적인 급증에도 요청을 잃지 않고 작업자가 처리 가능한 속도로 소비하게 합니다.", en: "CloudFront offloads static content delivery, while SQS durably buffers sales requests so workers can process a launch spike at a sustainable rate without losing requests." },
    why_wrong: {
      A: { ko: "고정적으로 인스턴스를 늘리는 것만으로 급증 규모를 보장할 수 없고 요청을 보존하는 버퍼도 없습니다.", en: "A fixed instance increase cannot guarantee capacity for the spike and provides no durable request buffer." },
      B: { ko: "확장은 도움이 되지만 새 인스턴스가 준비되는 동안 급증 요청을 보존하는 대기열이 없습니다.", en: "Scaling helps capacity but does not preserve burst requests while new instances launch." },
      C: { ko: "ElastiCache는 ALB 앞의 요청 대기열이 아니며 판매 트랜잭션을 내구성 있게 보존하지 않습니다.", en: "ElastiCache is not a request queue in front of an ALB and does not durably retain sales transactions." }
    }
  },
  {
    id: "exam7-329", number: 329, tags: ["Amazon Inspector", "Systems Manager Patch Manager", "Amazon EC2", "Vulnerability Management", "Patching"],
    question: {
      en: "A security audit found that Amazon EC2 instances are not patched regularly. A solution must perform recurring vulnerability scans across a large EC2 fleet, patch the instances on a schedule, and report each instance's patch status. Which solution meets these requirements?",
      ko: "보안 감사에서 Amazon EC2 인스턴스가 정기적으로 패치되지 않는 것으로 나타났습니다. 대규모 EC2 집합 전체를 정기적으로 보안 스캔하고 일정에 따라 패치하며 각 인스턴스의 패치 상태를 보고하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Use Amazon Macie to scan EC2 software and configure cron jobs on each instance for patching.", ko: "Amazon Macie로 EC2 소프트웨어 취약성을 스캔하고 각 인스턴스의 cron 작업으로 패치합니다." },
      { k: "B", en: "Use Amazon GuardDuty to scan EC2 software and Systems Manager Session Manager to patch on a schedule.", ko: "Amazon GuardDuty로 EC2 소프트웨어 취약성을 스캔하고 Systems Manager Session Manager로 일정에 따라 패치합니다." },
      { k: "C", en: "Use Amazon Detective to scan EC2 software and EventBridge scheduled rules to patch instances.", ko: "Amazon Detective로 EC2 소프트웨어 취약성을 스캔하고 EventBridge 예약 규칙으로 인스턴스를 패치합니다." },
      { k: "D", en: "Enable Amazon Inspector for EC2 vulnerability scanning and configure AWS Systems Manager Patch Manager for scheduled patching and compliance reporting.", ko: "Amazon Inspector로 EC2 취약성을 스캔하고 AWS Systems Manager Patch Manager로 예약 패치와 규정 준수 보고를 구성합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "Inspector는 EC2 소프트웨어 취약성을 지속 검사하고 Patch Manager는 유지 관리 기간과 패치 기준을 사용해 대규모 패치를 자동화하며 패치 준수 상태를 보고합니다.", en: "Inspector continuously scans EC2 software vulnerabilities, while Patch Manager automates fleet patching with schedules and baselines and reports patch compliance." },
    why_wrong: {
      A: { ko: "Macie는 S3 민감 데이터 탐지 서비스이며 인스턴스별 cron은 대규모 관리와 중앙 보고에 부적합합니다.", en: "Macie discovers sensitive data in S3, and per-instance cron jobs do not provide scalable centralized management or reporting." },
      B: { ko: "GuardDuty는 위협 탐지용이고 Session Manager는 대화형 접근용이며 각각 취약성 스캔과 예약 패치의 주 서비스가 아닙니다.", en: "GuardDuty detects threats and Session Manager provides interactive access; they are not the primary vulnerability scanning and scheduled patching services." },
      C: { ko: "Detective는 보안 조사 서비스이고 EventBridge만으로 패치 실행과 상태 보고를 제공하지 않습니다.", en: "Detective supports security investigations, and EventBridge alone does not perform patching or compliance reporting." }
    }
  },
  {
    id: "exam7-330", number: 330, tags: ["Amazon RDS", "AWS KMS", "Encryption at Rest", "Database Security"],
    question: {
      en: "A company plans to store data in an Amazon RDS DB instance and must encrypt data at rest. What should a solutions architect do?",
      ko: "회사는 Amazon RDS DB 인스턴스에 데이터를 저장할 계획이며 미사용 데이터를 암호화해야 합니다. 솔루션 설계자는 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Create a key in AWS KMS and enable encryption for the DB instance.", ko: "AWS KMS에서 키를 생성하고 DB 인스턴스 암호화를 활성화합니다." },
      { k: "B", en: "Create an encryption key, store it in AWS Secrets Manager, and use it to encrypt the DB instance.", ko: "암호화 키를 생성하여 AWS Secrets Manager에 저장하고 그 키로 DB 인스턴스를 암호화합니다." },
      { k: "C", en: "Create a certificate in AWS Certificate Manager and use it to enable SSL/TLS on the DB instance.", ko: "AWS Certificate Manager에서 인증서를 생성하고 DB 인스턴스에서 SSL/TLS를 활성화합니다." },
      { k: "D", en: "Create a certificate in IAM and use it to enable SSL/TLS on the DB instance.", ko: "IAM에서 인증서를 생성하고 DB 인스턴스에서 SSL/TLS를 활성화합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "RDS 저장 데이터 암호화는 AWS KMS 키를 사용합니다. 활성화하면 기본 스토리지뿐 아니라 자동 백업, 읽기 전용 복제본과 스냅샷도 암호화됩니다.", en: "RDS encryption at rest uses an AWS KMS key. When enabled, it encrypts the underlying storage as well as automated backups, read replicas, and snapshots." },
    why_wrong: {
      B: { ko: "Secrets Manager는 암호와 API 키 같은 보안 정보를 저장·교체하지만 RDS 스토리지 암호화 키 관리 서비스는 KMS입니다.", en: "Secrets Manager stores and rotates secrets such as passwords and API keys; KMS manages RDS storage encryption keys." },
      C: { ko: "SSL/TLS는 전송 중 데이터를 보호하며 미사용 데이터 암호화 요구를 충족하지 않습니다.", en: "SSL/TLS protects data in transit and does not satisfy encryption at rest." },
      D: { ko: "IAM 인증서와 SSL/TLS도 전송 암호화 방식이며 RDS 저장소 암호화 수단이 아닙니다.", en: "IAM certificates and SSL/TLS concern transport encryption, not RDS storage encryption." }
    }
  },
  {
    id: "exam7-331", number: 331, tags: ["AWS Snowball", "Data Migration", "Offline Transfer", "Amazon S3"],
    question: {
      en: "A company must migrate 20 TB of data from its data center to AWS within 30 days. Network bandwidth is limited to 15 Mbps and utilization cannot exceed 70%. What should a solutions architect do?",
      ko: "회사는 30일 이내에 데이터 센터에서 AWS로 20TB의 데이터를 마이그레이션해야 합니다. 네트워크 대역폭은 15Mbps로 제한되고 사용률은 70%를 초과할 수 없습니다. 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Use AWS Snowball.", ko: "AWS Snowball을 사용합니다." },
      { k: "B", en: "Use AWS DataSync.", ko: "AWS DataSync를 사용합니다." },
      { k: "C", en: "Use a secure VPN connection.", ko: "안전한 VPN 연결을 사용합니다." },
      { k: "D", en: "Use Amazon S3 Transfer Acceleration.", ko: "Amazon S3 Transfer Acceleration을 사용합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "허용 가능한 네트워크 처리량으로는 20TB를 30일 안에 전송하기 어렵습니다. Snowball은 대용량 데이터를 물리적 장치로 안전하게 이전하여 제한된 회선을 우회합니다.", en: "The permitted network throughput cannot reliably transfer 20 TB within 30 days. Snowball securely moves large datasets on a physical device and bypasses the constrained link." },
    why_wrong: {
      B: { ko: "DataSync도 사용 가능한 네트워크 대역폭의 제한을 받습니다.", en: "DataSync is still constrained by the available network bandwidth." },
      C: { ko: "VPN은 연결을 암호화하지만 처리량 제한을 해결하지 않습니다.", en: "A VPN encrypts connectivity but does not solve the throughput constraint." },
      D: { ko: "Transfer Acceleration도 인터넷 회선을 사용하므로 로컬 15Mbps 병목을 없애지 못합니다.", en: "Transfer Acceleration still uses the internet connection and cannot remove the local 15 Mbps bottleneck." }
    }
  },
  {
    id: "exam7-332", number: 332, tags: ["Amazon FSx for Windows File Server", "AWS Client VPN", "Active Directory", "SMB", "File Storage"],
    question: {
      en: "A company must provide employees secure access to confidential files stored on an on-premises Windows file server. Only authorized users may access and download the files. The server lacks capacity as remote usage grows. Which solution meets these requirements?",
      ko: "회사는 온프레미스 Windows 파일 서버에 저장된 기밀 파일에 직원이 안전하게 접근하도록 해야 합니다. 승인된 사용자만 파일에 접근하고 장치로 다운로드할 수 있어야 하지만 원격 사용 증가로 서버 용량이 부족합니다. 어떤 솔루션이 요구사항을 충족합니까?"
    },
    options: [
      { k: "A", en: "Migrate the file server to an EC2 instance in a public subnet and restrict inbound traffic to employee IP addresses.", ko: "파일 서버를 퍼블릭 서브넷의 EC2로 마이그레이션하고 직원 IP 주소로 인바운드 트래픽을 제한합니다." },
      { k: "B", en: "Migrate the files to Amazon FSx for Windows File Server, integrate it with the on-premises Active Directory, and configure AWS Client VPN.", ko: "파일을 Amazon FSx for Windows File Server로 마이그레이션하고 온프레미스 Active Directory와 통합한 뒤 AWS Client VPN을 구성합니다." },
      { k: "C", en: "Migrate the files to Amazon S3, create a private VPC endpoint, and generate signed URLs for downloads.", ko: "파일을 Amazon S3로 마이그레이션하고 프라이빗 VPC 엔드포인트와 다운로드용 서명 URL을 생성합니다." },
      { k: "D", en: "Migrate the files to Amazon S3, create a public VPC endpoint, and authenticate employees with IAM Identity Center.", ko: "파일을 Amazon S3로 마이그레이션하고 퍼블릭 VPC 엔드포인트를 만들며 IAM Identity Center로 직원을 인증합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "FSx for Windows File Server는 관리형 SMB 파일 공유와 Active Directory 기반 권한을 제공합니다. Client VPN은 승인된 원격 직원에게 AWS 네트워크로 암호화된 접근을 제공합니다.", en: "FSx for Windows File Server provides managed SMB shares and Active Directory authorization. Client VPN gives approved remote employees encrypted access to the AWS network." },
    why_wrong: {
      A: { ko: "파일 서버를 퍼블릭 서브넷에 노출하며 관리형 확장과 사용자 기반 권한 요구를 적절히 해결하지 못합니다.", en: "This exposes the file server in a public subnet and does not adequately address managed scaling or user-based authorization." },
      C: { ko: "S3는 Windows SMB 파일 시스템의 직접 대체가 아니며 VPC 엔드포인트는 원격 직원 장치의 접근을 자체적으로 제공하지 않습니다.", en: "S3 is not a direct Windows SMB file-system replacement, and a VPC endpoint alone does not provide remote-device access." },
      D: { ko: "퍼블릭 VPC 엔드포인트라는 구성은 없으며 S3는 요구된 Windows 파일 공유 의미를 제공하지 않습니다.", en: "There is no public VPC endpoint configuration, and S3 does not provide the required Windows file-share semantics." }
    }
  },
  {
    id: "exam7-333", number: 333, tags: ["EC2 Auto Scaling", "Scheduled Scaling", "Application Load Balancer", "Predictable Workload"],
    question: {
      en: "An application runs on EC2 instances in an Auto Scaling group behind an ALB. A monthly financial batch begins at midnight on the first day of each month and immediately drives CPU to 100%, causing an outage. What should a solutions architect recommend to process the workload without downtime?",
      ko: "애플리케이션이 ALB 뒤 여러 가용 영역의 Auto Scaling 그룹에서 실행됩니다. 매월 1일 자정에 재무 일괄 처리가 시작되면 CPU가 즉시 100%에 도달하여 애플리케이션이 중단됩니다. 다운타임 없이 워크로드를 처리하려면 무엇을 권장해야 합니까?"
    },
    options: [
      { k: "A", en: "Configure an Amazon CloudFront distribution in front of the ALB.", ko: "ALB 앞에 Amazon CloudFront 배포를 구성합니다." },
      { k: "B", en: "Configure a simple EC2 Auto Scaling policy based on CPU utilization.", ko: "CPU 사용률 기반 EC2 Auto Scaling 단순 조정 정책을 구성합니다." },
      { k: "C", en: "Configure an EC2 Auto Scaling scheduled scaling policy for the monthly schedule.", ko: "월별 일정에 맞춘 EC2 Auto Scaling 예약 조정 정책을 구성합니다." },
      { k: "D", en: "Configure Amazon ElastiCache to remove part of the workload from EC2.", ko: "EC2에서 일부 워크로드를 제거하도록 Amazon ElastiCache를 구성합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "부하 발생 시간이 예측 가능하므로 예약 조정으로 실행 전에 용량을 늘리고 완료 후 줄이면 반응형 경보가 작동하기 전에 필요한 인스턴스를 준비할 수 있습니다.", en: "Because the load time is predictable, scheduled scaling can add capacity before the batch starts and remove it afterward, avoiding the delay of reactive scaling." },
    why_wrong: {
      A: { ko: "CloudFront는 월별 서버 측 배치의 CPU 부하를 줄이지 않습니다.", en: "CloudFront does not reduce the CPU load of a monthly server-side batch." },
      B: { ko: "CPU 기반 반응형 조정은 인스턴스 시작 전 이미 애플리케이션이 중단될 수 있습니다.", en: "Reactive CPU scaling may respond only after the application is already overloaded." },
      D: { ko: "캐시는 캐시 가능한 읽기 부하에 도움을 주지만 지정된 일괄 처리 용량을 미리 확보하지 않습니다.", en: "Caching may help cacheable reads but does not pre-provision capacity for the specified batch." }
    }
  },
  {
    id: "exam7-334", number: 334, tags: ["AWS Transfer Family", "SFTP", "Amazon S3", "Active Directory", "Managed Service"],
    question: {
      en: "A company wants customers to download files stored in Amazon S3 by using existing SFTP clients and on-premises Microsoft Active Directory identities. Which solution meets the requirements without changing the client application and with the least operational overhead?",
      ko: "회사는 고객이 기존 SFTP 클라이언트와 온프레미스 Microsoft Active Directory 자격 증명으로 Amazon S3의 파일을 다운로드하도록 하려 합니다. 애플리케이션 변경 없이 최소 운영 오버헤드로 요구사항을 충족하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Configure AWS Transfer Family for SFTP with Amazon S3 storage and integrated Active Directory authentication.", ko: "Amazon S3 스토리지를 사용하는 SFTP용 AWS Transfer Family를 설정하고 통합 Active Directory 인증을 구성합니다." },
      { k: "B", en: "Use AWS DMS to synchronize on-premises clients with S3 and configure Active Directory authentication.", ko: "AWS DMS로 온프레미스 클라이언트와 S3를 동기화하고 Active Directory 인증을 구성합니다." },
      { k: "C", en: "Use DataSync between on-premises and S3 and authenticate users with IAM Identity Center.", ko: "DataSync로 온프레미스와 S3를 동기화하고 IAM Identity Center로 사용자를 인증합니다." },
      { k: "D", en: "Run an SFTP server on a Windows EC2 instance and integrate it with IAM.", ko: "Windows EC2 인스턴스에 SFTP 서버를 실행하고 IAM과 통합합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "AWS Transfer Family는 S3를 백엔드로 사용하는 완전 관리형 SFTP 엔드포인트를 제공하고 Microsoft AD 기반 사용자 인증을 지원하므로 클라이언트를 변경할 필요가 없습니다.", en: "AWS Transfer Family provides a fully managed SFTP endpoint backed by S3 and supports Microsoft AD-based user authentication, preserving the existing client workflow." },
    why_wrong: {
      B: { ko: "DMS는 데이터베이스 마이그레이션 서비스이며 SFTP 파일 접근을 제공하지 않습니다.", en: "DMS is a database migration service and does not provide SFTP file access." },
      C: { ko: "DataSync는 데이터 전송 서비스이며 고객에게 SFTP 엔드포인트를 제공하지 않습니다.", en: "DataSync transfers data but does not expose an SFTP endpoint to customers." },
      D: { ko: "EC2 SFTP 서버를 직접 운영해야 하므로 관리형 Transfer Family보다 운영 부담이 큽니다.", en: "A self-managed EC2 SFTP server has greater operational overhead than Transfer Family." }
    }
  },
  {
    id: "exam7-335", number: 335, tags: ["Amazon EBS", "Fast Snapshot Restore", "Amazon Machine Image", "EC2 Auto Scaling", "Provisioning"],
    question: {
      en: "A company must rapidly provision a large number of EC2 instances from an AMI in an Auto Scaling group during sudden demand. Which solution provides the lowest initialization latency?",
      ko: "회사는 수요가 갑자기 증가할 때 AMI에서 대규모 EC2 인스턴스를 Auto Scaling 그룹에 신속히 프로비저닝해야 합니다. 초기화 지연을 최소화하는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Create an AMI from snapshots with register-image and use Step Functions to replace the Auto Scaling group's AMI.", ko: "register-image 명령으로 스냅샷에서 AMI를 만들고 Step Functions로 Auto Scaling 그룹의 AMI를 교체합니다." },
      { k: "B", en: "Enable Amazon EBS Fast Snapshot Restore, provision an AMI from the snapshots, and update the Auto Scaling group to use the new AMI.", ko: "Amazon EBS 빠른 스냅샷 복원을 활성화하고 해당 스냅샷으로 AMI를 만든 뒤 Auto Scaling 그룹에서 새 AMI를 사용합니다." },
      { k: "C", en: "Use Amazon Data Lifecycle Manager to create AMIs and a Lambda function to update the Auto Scaling group.", ko: "Amazon Data Lifecycle Manager로 AMI를 만들고 Lambda로 Auto Scaling 그룹을 업데이트합니다." },
      { k: "D", en: "Use EventBridge to invoke an AWS Backup lifecycle policy and use Auto Scaling capacity limits as an event source.", ko: "EventBridge로 AWS Backup 수명 주기 정책을 호출하고 Auto Scaling 용량 제한을 이벤트 소스로 사용합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "EBS 빠른 스냅샷 복원은 스냅샷에서 생성된 볼륨을 즉시 완전한 성능으로 제공하여 대규모 인스턴스 시작 시 블록 초기화 지연을 줄입니다.", en: "EBS Fast Snapshot Restore creates volumes from snapshots at full performance immediately, reducing block initialization latency when many instances launch." },
    why_wrong: {
      A: { ko: "AMI 등록과 워크플로 자동화만으로 스냅샷 기반 볼륨의 초기 읽기 지연을 제거하지 못합니다.", en: "AMI registration and workflow automation alone do not remove first-read initialization latency from snapshot-backed volumes." },
      C: { ko: "DLM은 이미지 생성을 자동화하지만 새 볼륨의 즉시 완전 성능을 보장하지 않습니다.", en: "DLM automates image creation but does not ensure immediate full performance for new volumes." },
      D: { ko: "Backup 수명 주기와 용량 이벤트는 AMI 시작 시 스토리지 초기화 성능을 개선하지 않습니다.", en: "Backup lifecycle and capacity events do not improve storage initialization performance when launching an AMI." }
    }
  },
  {
    id: "exam7-336", number: 336, tags: ["AWS Secrets Manager", "Amazon Aurora", "Credential Rotation", "AWS KMS", "Database Security"],
    question: {
      en: "A multi-tier web application uses an Amazon Aurora MySQL DB cluster and EC2 application instances. Database credentials must be encrypted and rotated every 14 days with the least operational effort. What should a solutions architect do?",
      ko: "Amazon Aurora MySQL DB 클러스터와 EC2 애플리케이션 계층을 사용하는 다중 계층 웹 애플리케이션이 있습니다. 데이터베이스 자격 증명을 암호화하고 14일마다 최소한의 운영 노력으로 교체해야 합니다. 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Store the credentials in AWS Secrets Manager encrypted with AWS KMS, associate the secret with the Aurora cluster, and configure a 14-day rotation schedule.", ko: "AWS KMS로 암호화되는 AWS Secrets Manager에 자격 증명을 저장하고 Aurora 클러스터와 연결하여 14일 교체 일정을 구성합니다." },
      { k: "B", en: "Store username and password in Systems Manager Parameter Store and implement a Lambda function to rotate the password every 14 days.", ko: "사용자 이름과 암호를 Systems Manager Parameter Store에 저장하고 14일마다 교체하는 Lambda 함수를 구현합니다." },
      { k: "C", en: "Store credentials in an encrypted EFS file and implement Lambda to rotate Aurora credentials and rewrite the file every 14 days.", ko: "암호화된 EFS 파일에 자격 증명을 저장하고 Lambda로 14일마다 Aurora 자격 증명과 파일을 갱신합니다." },
      { k: "D", en: "Store credentials in an encrypted S3 object and implement Lambda to rotate and upload the credentials every 14 days.", ko: "암호화된 S3 객체에 자격 증명을 저장하고 Lambda로 14일마다 자격 증명을 교체하여 업로드합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "Secrets Manager는 KMS 암호화와 지원 데이터베이스의 자동 자격 증명 교체를 제공하므로 14일 일정을 설정하는 것만으로 요구사항을 충족합니다.", en: "Secrets Manager provides KMS encryption and managed credential rotation for supported databases, satisfying the requirement with a 14-day schedule." },
    why_wrong: {
      B: { ko: "Parameter Store와 사용자 지정 Lambda 교체 로직은 Secrets Manager 관리형 교체보다 운영 부담이 큽니다.", en: "Parameter Store plus custom Lambda rotation requires more operations than managed Secrets Manager rotation." },
      C: { ko: "공유 파일에 비밀을 저장하고 직접 교체 코드를 관리하는 방식은 복잡하고 비밀 관리 서비스의 이점을 잃습니다.", en: "Storing secrets in a shared file and maintaining rotation code is complex and bypasses managed secret handling." },
      D: { ko: "S3 객체는 데이터베이스 자격 증명 교체용 관리형 저장소가 아니며 사용자 지정 구현이 필요합니다.", en: "An S3 object is not a managed database credential store and requires custom rotation implementation." }
    }
  },
  {
    id: "exam7-337", number: 337, tags: ["Amazon Aurora", "Aurora Auto Scaling", "Read Replica", "MySQL", "Performance"],
    question: {
      en: "An application uses Amazon RDS for MySQL with five read replicas. Replicas must lag the primary by less than one second, but peak traffic and scheduled stored procedures increase lag. Which solution minimizes replica lag with minimal code changes and operational overhead?",
      ko: "애플리케이션은 기본 DB 인스턴스와 읽기 전용 복제본 5개가 있는 RDS for MySQL을 사용합니다. 복제 지연은 1초 미만이어야 하지만 피크 트래픽과 예약 저장 프로시저로 지연이 증가합니다. 코드 변경과 운영 오버헤드를 최소화하면서 지연을 줄이는 솔루션은 무엇입니까?"
    },
    options: [
      { k: "A", en: "Migrate to Amazon Aurora MySQL, replace the read replicas with Aurora Replicas, configure Aurora Auto Scaling, and convert the stored procedure to an Aurora MySQL native function.", ko: "Amazon Aurora MySQL로 마이그레이션하고 읽기 전용 복제본을 Aurora 복제본으로 교체하며 Aurora Auto Scaling을 구성하고 저장 프로시저를 Aurora MySQL 기본 함수로 변경합니다." },
      { k: "B", en: "Deploy ElastiCache for Redis, modify the application to check the cache, and replace the stored procedure with Lambda.", ko: "ElastiCache for Redis를 배포하고 캐시를 확인하도록 애플리케이션을 수정하며 저장 프로시저를 Lambda로 교체합니다." },
      { k: "C", en: "Migrate to self-managed MySQL on large compute-optimized EC2 instances and retain the stored procedure.", ko: "컴퓨팅 최적화 대형 EC2 인스턴스의 자체 관리 MySQL로 마이그레이션하고 저장 프로시저를 유지합니다." },
      { k: "D", en: "Migrate to DynamoDB with provisioned RCUs and replace the stored procedure with DynamoDB Streams.", ko: "프로비저닝된 RCU를 사용하는 DynamoDB로 마이그레이션하고 저장 프로시저를 DynamoDB Streams로 교체합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "Aurora 복제본은 공유 분산 스토리지 계층을 사용해 일반적으로 매우 낮은 복제 지연을 제공하며 Aurora Auto Scaling으로 읽기 용량을 자동 조정할 수 있습니다. MySQL 호환성 덕분에 코드 변경도 제한됩니다.", en: "Aurora Replicas share a distributed storage layer and generally provide very low replica lag. Aurora Auto Scaling adjusts read capacity, while MySQL compatibility limits application changes." },
    why_wrong: {
      B: { ko: "캐시 도입과 Lambda 전환에는 큰 애플리케이션 변경이 필요하며 복제 지연 자체를 해결하지 않습니다.", en: "Introducing a cache and Lambda requires substantial code changes and does not directly solve replica lag." },
      C: { ko: "자체 관리 MySQL은 운영 부담을 늘리고 복제 지연을 자동으로 최소화하지 않습니다.", en: "Self-managed MySQL increases operational overhead and does not automatically minimize replication lag." },
      D: { ko: "관계형 MySQL에서 DynamoDB로의 전환은 대규모 데이터 모델과 애플리케이션 재설계를 요구합니다.", en: "Moving from relational MySQL to DynamoDB requires major data-model and application redesign." }
    }
  },
  {
    id: "exam7-338", number: 338, tags: ["Aurora Global Database", "Disaster Recovery", "Cross-Region Replication", "Amazon Aurora"],
    question: {
      en: "A solutions architect must create a cost-effective disaster recovery plan for a large SaaS platform whose data is stored in an Aurora MySQL DB cluster. Data must be replicated to a secondary AWS Region. Which solution meets the requirement?",
      ko: "대용량 SaaS 플랫폼의 모든 데이터가 Aurora MySQL DB 클러스터에 저장됩니다. 데이터를 보조 AWS 리전에 복제하는 비용 효율적인 재해 복구 계획으로 어떤 솔루션이 적합합니까?"
    },
    options: [
      { k: "A", en: "Use MySQL binary log replication to an Aurora cluster and provision one DB instance in the secondary Region.", ko: "보조 리전의 Aurora 클러스터로 MySQL 바이너리 로그 복제를 사용하고 DB 인스턴스 하나를 프로비저닝합니다." },
      { k: "B", en: "Configure Aurora Global Database and remove all DB instances from the secondary Region after setup.", ko: "Aurora 글로벌 데이터베이스를 구성하고 설정 후 보조 리전의 DB 인스턴스를 모두 제거합니다." },
      { k: "C", en: "Use AWS DMS to continuously replicate to an Aurora cluster and remove DB instances from the secondary Region.", ko: "AWS DMS로 보조 리전 Aurora 클러스터에 지속 복제하고 보조 리전의 DB 인스턴스를 제거합니다." },
      { k: "D", en: "Configure Aurora Global Database and specify at least one DB instance in the secondary Region.", ko: "Aurora 글로벌 데이터베이스를 구성하고 보조 리전에 최소 하나의 DB 인스턴스를 지정합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "Aurora Global Database는 전용 스토리지 기반 교차 리전 복제로 낮은 지연과 관리 부담을 제공하며 보조 리전에 최소 DB 인스턴스를 두어 DR 읽기와 신속한 승격을 지원합니다.", en: "Aurora Global Database uses dedicated storage-based cross-Region replication for low lag and low management overhead, with at least one secondary DB instance for DR access and fast promotion." },
    why_wrong: {
      A: { ko: "바이너리 로그 복제는 Aurora Global Database의 스토리지 기반 복제보다 관리 부담과 지연이 큽니다.", en: "Binary-log replication has more management overhead and lag than Aurora Global Database storage replication." },
      B: { ko: "보조 리전에 DB 인스턴스가 없으면 DR 시 즉시 사용할 컴퓨팅 엔드포인트가 없습니다.", en: "Without a secondary DB instance, there is no ready compute endpoint for disaster recovery." },
      C: { ko: "DMS는 마이그레이션과 이기종 복제에 유용하지만 Aurora 전용 DR에는 더 복잡하며 보조 인스턴스 제거도 복구 준비성을 낮춥니다.", en: "DMS is useful for migrations and heterogeneous replication but is more complex for Aurora-native DR, and removing secondary instances reduces readiness." }
    }
  },
  {
    id: "exam7-339", number: 339, tags: ["AWS Secrets Manager", "Amazon RDS for MySQL", "Credential Rotation", "Security", "Managed Service"],
    question: {
      en: "A custom application contains hardcoded credentials used to query an Amazon RDS for MySQL DB instance. Management wants to improve security with the least programming effort. What should a solutions architect do?",
      ko: "사용자 지정 애플리케이션에 Amazon RDS for MySQL DB 인스턴스를 조회하는 하드코딩된 자격 증명이 있습니다. 최소한의 프로그래밍 노력으로 보안을 개선하려면 무엇을 해야 합니까?"
    },
    options: [
      { k: "A", en: "Store credentials in AWS KMS, configure the application to load them, and enable automatic key rotation.", ko: "AWS KMS에 자격 증명을 저장하고 애플리케이션이 이를 로드하도록 구성한 뒤 자동 키 순환을 활성화합니다." },
      { k: "B", en: "Store credentials in Secrets Manager and create a custom Lambda function to replace them in the database.", ko: "Secrets Manager에 자격 증명을 저장하고 데이터베이스에서 이를 교체할 사용자 지정 Lambda 함수를 만듭니다." },
      { k: "C", en: "Store credentials in AWS Secrets Manager, configure the application to retrieve them, and schedule managed rotation for the RDS for MySQL credentials.", ko: "AWS Secrets Manager에 자격 증명을 저장하고 애플리케이션이 이를 가져오게 하며 RDS for MySQL 자격 증명의 관리형 교체 일정을 설정합니다." },
      { k: "D", en: "Store credentials in Systems Manager Parameter Store and use Parameter Store to schedule database credential replacement.", ko: "Systems Manager Parameter Store에 자격 증명을 저장하고 Parameter Store로 데이터베이스 자격 증명 교체 일정을 설정합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "Secrets Manager는 RDS 자격 증명의 안전한 저장, 애플리케이션 조회, 예약 자동 교체를 관리형으로 제공하여 사용자 지정 코드를 최소화합니다.", en: "Secrets Manager provides managed secure storage, application retrieval, and scheduled automatic rotation for RDS credentials, minimizing custom code." },
    why_wrong: {
      A: { ko: "KMS는 암호화 키 관리 서비스이며 데이터베이스 비밀 저장과 자격 증명 교체 서비스가 아닙니다.", en: "KMS manages encryption keys; it is not a database secret store or credential rotation service." },
      B: { ko: "Secrets Manager의 지원 데이터베이스 교체 기능을 두고 사용자 지정 Lambda 교체 로직을 만드는 것은 불필요합니다.", en: "Custom rotation code is unnecessary when Secrets Manager supports managed rotation for the database." },
      D: { ko: "Parameter Store는 자체적으로 RDS 자격 증명 예약 교체를 제공하지 않습니다.", en: "Parameter Store does not natively schedule RDS credential rotation." }
    }
  },
  {
    id: "exam7-340", number: 340, tags: ["AWS WAF", "SQL Injection", "Application Load Balancer", "Web ACL", "Security"],
    question: {
      en: "A media company's website runs on EC2 instances behind an Application Load Balancer and uses Amazon Aurora. The security team reports that the application is vulnerable to SQL injection. How should the company address the issue?",
      ko: "미디어 회사의 웹사이트는 ALB 뒤의 EC2 인스턴스와 Amazon Aurora 데이터베이스를 사용합니다. 보안 팀이 애플리케이션의 SQL 주입 취약성을 보고했습니다. 어떻게 해결해야 합니까?"
    },
    options: [
      { k: "A", en: "Use AWS WAF in front of the ALB and associate an appropriate web ACL.", ko: "ALB 앞에서 AWS WAF를 사용하고 적절한 웹 ACL을 연결합니다." },
      { k: "B", en: "Create an ALB listener rule that returns a fixed response to SQL injection attempts.", ko: "SQL 주입 시도에 고정 응답을 반환하는 ALB 리스너 규칙을 생성합니다." },
      { k: "C", en: "Subscribe to AWS Shield Advanced to block all SQL insert attempts.", ko: "모든 SQL 삽입 시도를 차단하도록 AWS Shield Advanced에 가입합니다." },
      { k: "D", en: "Configure Amazon Inspector to block all SQL injection attempts.", ko: "모든 SQL 주입 시도를 차단하도록 Amazon Inspector를 구성합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "AWS WAF를 ALB와 연결하고 SQL 데이터베이스 규칙 또는 관리형 규칙 그룹을 사용하면 악성 SQL 패턴이 포함된 HTTP 요청을 애플리케이션에 도달하기 전에 탐지하고 차단할 수 있습니다.", en: "AWS WAF associated with the ALB can use SQL database or managed rule groups to detect and block HTTP requests containing malicious SQL patterns before they reach the application." },
    why_wrong: {
      B: { ko: "ALB 리스너 규칙은 정교한 SQL 주입 페이로드 검사를 위한 보안 엔진이 아닙니다.", en: "ALB listener rules are not a security engine for inspecting sophisticated SQL injection payloads." },
      C: { ko: "Shield Advanced는 DDoS 보호 서비스이며 애플리케이션 계층 SQL 주입 필터가 아닙니다.", en: "Shield Advanced protects against DDoS attacks and is not an application-layer SQL injection filter." },
      D: { ko: "Inspector는 워크로드 취약성을 평가하지만 인라인 웹 요청을 차단하지 않습니다.", en: "Inspector assesses workload vulnerabilities but does not block inline web requests." }
    }
  },
  {
    id: "exam7-341", number: 341, tags: ["AWS Lake Formation", "Amazon QuickSight", "Amazon Athena", "Column-Level Security", "Data Lake"],
    question: { en: "A company has an S3 data lake governed by AWS Lake Formation. It wants QuickSight visualizations that combine lake data with operational data in Aurora MySQL, while the marketing team may access only a subset of database columns. Which solution has the least operational overhead?", ko: "회사는 AWS Lake Formation으로 관리되는 S3 데이터 레이크를 보유합니다. 데이터 레이크와 Aurora MySQL 운영 데이터를 결합해 QuickSight 시각화를 만들고 마케팅 팀에는 데이터베이스 열 일부만 허용하려 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use Amazon EMR to ingest database data directly into QuickSight SPICE with only required columns.", ko: "Amazon EMR로 데이터베이스 데이터를 필요한 열만 포함해 QuickSight SPICE로 직접 수집합니다." },
      { k: "B", en: "Use AWS Glue Studio to ingest database data to S3, attach IAM policies for column access, and use S3 as the QuickSight source.", ko: "AWS Glue Studio로 데이터베이스 데이터를 S3에 수집하고 IAM 정책으로 열 접근을 제어하며 S3를 QuickSight 원본으로 사용합니다." },
      { k: "C", en: "Use AWS Glue Elastic Views to create a materialized view in S3 and enforce column access with an S3 bucket policy.", ko: "AWS Glue Elastic Views로 S3에 구체화된 보기를 만들고 S3 버킷 정책으로 열 접근을 제어합니다." },
      { k: "D", en: "Use Lake Formation blueprints to ingest database data into the S3 data lake, enforce column-level access in Lake Formation, and use Athena as the QuickSight data source.", ko: "Lake Formation 청사진으로 데이터베이스 데이터를 S3 데이터 레이크에 수집하고 Lake Formation에서 열 수준 접근을 적용하며 Athena를 QuickSight 데이터 원본으로 사용합니다." }
    ],
    answer: ["D"],
    explanation: { ko: "Lake Formation 청사진은 관계형 데이터를 데이터 레이크로 수집하는 워크플로를 관리하며 세분화된 열 권한을 중앙에서 적용할 수 있습니다. Athena를 통해 QuickSight가 해당 권한을 준수하며 데이터를 조회합니다.", en: "Lake Formation blueprints manage relational-data ingestion into the lake and centrally enforce fine-grained column permissions. QuickSight can query the governed data through Athena." },
    why_wrong: {
      A: { ko: "EMR과 SPICE 직접 수집은 Lake Formation의 중앙 열 권한을 활용하지 못하고 운영 부담이 큽니다.", en: "EMR and direct SPICE ingestion add operations and bypass centralized Lake Formation column permissions." },
      B: { ko: "IAM과 S3 정책은 객체 접근을 제어하지만 데이터 내부의 열 수준 권한에는 적합하지 않습니다.", en: "IAM and S3 policies control object access, not columns within datasets." },
      C: { ko: "S3 버킷 정책으로 열 수준 접근을 적용할 수 없습니다.", en: "An S3 bucket policy cannot enforce column-level access." }
    }
  },
  {
    id: "exam7-342", number: 342, tags: ["EC2 Auto Scaling", "Predictive Scaling", "CloudWatch", "Batch Processing", "Automation"],
    question: { en: "A weekly batch job runs on EC2 instances in an Auto Scaling group. CPU averages at least 60%, and capacity must be provisioned 30 minutes before the job. Engineers cannot analyze capacity trends manually. Which solution automates desired capacity with the least operational overhead?", ko: "Auto Scaling 그룹의 EC2에서 매주 배치 작업이 실행되며 평균 CPU 사용률은 60% 이상입니다. 작업 30분 전에 용량을 준비해야 하고 엔지니어가 추세를 수동 분석할 수 없습니다. 최소 운영 오버헤드로 원하는 용량을 자동 조정하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use dynamic scaling with a CPU target of 60%.", ko: "CPU 목표값 60%의 동적 조정 정책을 사용합니다." },
      { k: "B", en: "Use scheduled scaling weekly, starting 30 minutes before the job.", ko: "작업 30분 전에 시작하는 주간 예약 조정을 사용합니다." },
      { k: "C", en: "Use predictive scaling with CPU at 60% and configure instances to launch 30 minutes before forecast demand.", ko: "CPU 60%를 기준으로 예측 조정을 사용하고 예측 수요 30분 전에 인스턴스를 시작하도록 구성합니다." },
      { k: "D", en: "Use EventBridge and Lambda to increase desired and maximum capacity when CPU reaches 60%.", ko: "CPU가 60%에 도달하면 EventBridge와 Lambda로 원하는 용량과 최대 용량을 늘립니다." }
    ],
    answer: ["C"],
    explanation: { ko: "예측 조정은 과거 CloudWatch 패턴을 학습해 필요한 용량을 예측하고 사전 시작 시간을 지정할 수 있으므로 수동 추세 분석 없이 작업 전에 용량을 준비합니다.", en: "Predictive scaling learns historical CloudWatch patterns, forecasts capacity, and supports pre-launching instances before demand without manual trend analysis." },
    why_wrong: {
      A: { ko: "동적 조정은 부하가 발생한 뒤 반응하므로 30분 전 준비 요구를 보장하지 않습니다.", en: "Dynamic scaling reacts after load appears and does not ensure capacity 30 minutes early." },
      B: { ko: "예약 조정도 가능하지만 변화하는 트랜잭션 수와 필요한 용량을 자동 예측하지 않습니다.", en: "Scheduled scaling can pre-scale but does not automatically forecast changing transaction volumes and capacity." },
      D: { ko: "사용자 지정 이벤트와 Lambda는 반응형이며 관리 코드와 운영 부담을 추가합니다.", en: "Custom events and Lambda are reactive and add code and operational overhead." }
    }
  },
  {
    id: "exam7-343", number: 343, tags: ["Aurora Global Database", "Disaster Recovery", "MySQL", "Cross-Region", "Managed Service"],
    question: { en: "A MySQL database runs on an EC2 instance in a private subnet and has scheduled backups. A disaster recovery design must span multiple AWS Regions with minimal operational overhead. Which solution meets the requirements?", ko: "예약 백업이 있는 MySQL 데이터베이스가 프라이빗 서브넷의 EC2에서 실행됩니다. 여러 AWS 리전을 포함하는 재해 복구 설계를 최소 운영 오버헤드로 구현하려면 어떤 솔루션이 적합합니까?" },
    options: [
      { k: "A", en: "Migrate MySQL to multiple EC2 instances and keep standby instances in the DR Region with replication enabled.", ko: "MySQL을 여러 EC2로 마이그레이션하고 DR 리전에 대기 인스턴스를 두어 복제를 활성화합니다." },
      { k: "B", en: "Migrate to Amazon RDS Multi-AZ and create a read replica in another Availability Zone.", ko: "Amazon RDS Multi-AZ로 마이그레이션하고 다른 가용 영역에 읽기 전용 복제본을 생성합니다." },
      { k: "C", en: "Migrate to Amazon Aurora Global Database with a primary cluster in the primary Region and a secondary cluster in the DR Region.", ko: "기본 리전의 기본 클러스터와 DR 리전의 보조 클러스터가 있는 Aurora 글로벌 데이터베이스로 마이그레이션합니다." },
      { k: "D", en: "Store scheduled MySQL backups in an S3 bucket configured with Cross-Region Replication and restore during a disaster.", ko: "예약 MySQL 백업을 교차 리전 복제 S3 버킷에 저장하고 재해 시 복원합니다." }
    ],
    answer: ["C"],
    explanation: { ko: "Aurora Global Database는 관리형 저지연 교차 리전 복제와 보조 클러스터 승격을 제공해 자체 복제나 백업 복원보다 운영 부담과 복구 시간을 줄입니다.", en: "Aurora Global Database provides managed low-latency cross-Region replication and secondary-cluster promotion, reducing operations and recovery time versus self-managed replication or backup restore." },
    why_wrong: {
      A: { ko: "EC2 기반 MySQL 복제와 대기 서버는 직접 운영해야 합니다.", en: "MySQL replication and standby servers on EC2 require self-management." },
      B: { ko: "다른 가용 영역은 같은 리전이므로 다중 리전 DR 요구를 충족하지 않습니다.", en: "Another Availability Zone remains in the same Region and does not meet multi-Region DR." },
      D: { ko: "백업 복원 방식은 지속 복제보다 복구 시간과 데이터 손실 가능성이 큽니다.", en: "Backup restoration has longer recovery time and greater potential data loss than continuous replication." }
    }
  },
  {
    id: "exam7-344", number: 344, tags: ["Amazon SQS", "Extended Client Library", "Amazon S3", "Large Messages", "Java"],
    question: { en: "A Java application parses messages from Amazon SQS but must process messages as large as 50 MB, exceeding the SQS message-size limit. Which solution requires the fewest code changes?", ko: "Amazon SQS 메시지를 구문 분석하는 Java 애플리케이션이 SQS 크기 제한을 초과하는 최대 50MB 메시지를 처리해야 합니다. 코드 변경이 가장 적은 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use the Amazon SQS Extended Client Library for Java to store payloads larger than the SQS limit in Amazon S3.", ko: "Java용 Amazon SQS 확장 클라이언트 라이브러리를 사용해 SQS 제한보다 큰 페이로드를 Amazon S3에 저장합니다." },
      { k: "B", en: "Replace Amazon SQS with Amazon EventBridge for publishing large messages.", ko: "Amazon SQS 대신 Amazon EventBridge에 큰 메시지를 게시합니다." },
      { k: "C", en: "Change the Amazon SQS service limit to process messages larger than 256 KB.", ko: "256KB보다 큰 메시지를 처리하도록 Amazon SQS 서비스 제한을 변경합니다." },
      { k: "D", en: "Store large messages in Amazon EFS and put their locations in SQS messages.", ko: "큰 메시지를 Amazon EFS에 저장하고 위치를 SQS 메시지에 넣습니다." }
    ],
    answer: ["A"],
    explanation: { ko: "SQS 확장 클라이언트 라이브러리는 큰 페이로드를 S3에 저장하고 SQS에는 참조를 넣는 패턴을 라이브러리 수준에서 지원하므로 기존 Java 코드 변경을 최소화합니다.", en: "The SQS Extended Client Library stores large payloads in S3 and places references in SQS, implementing the pattern with minimal Java code changes." },
    why_wrong: {
      B: { ko: "EventBridge도 대형 페이로드 저장소가 아니며 애플리케이션 구조 변경이 필요합니다.", en: "EventBridge is not a large-payload store and would require architectural changes." },
      C: { ko: "SQS 메시지 최대 크기는 이 방식으로 늘릴 수 있는 조정 가능 할당량이 아닙니다.", en: "The SQS maximum message size is not an adjustable quota in this manner." },
      D: { ko: "EFS와 사용자 지정 참조 처리 방식은 확장 클라이언트보다 코드와 인프라 변경이 큽니다.", en: "EFS and custom reference handling require more code and infrastructure changes than the extended client." }
    }
  },
  {
    id: "exam7-345", number: 345, tags: ["Amazon Cognito", "Lambda@Edge", "Amazon CloudFront", "Authentication", "Global Application"],
    question: { en: "A company needs authentication for fewer than 100 users in a serverless web application. The solution must integrate with the application, deliver content globally, scale with user growth, and provide the lowest possible login latency. Which solution is most cost-effective?", ko: "회사는 사용자 100명 미만의 서버리스 웹 애플리케이션에 인증을 구현하려 합니다. 기존 앱과 통합하고 콘텐츠를 전 세계에 제공하며 사용자 증가에 따라 확장되고 로그인 지연을 최소화하는 가장 비용 효율적인 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use Amazon Cognito for authentication, Lambda@Edge for authorization, and CloudFront for global delivery.", ko: "Amazon Cognito로 인증하고 Lambda@Edge로 권한을 부여하며 CloudFront로 전 세계에 제공합니다." },
      { k: "B", en: "Use AWS Directory Service for Microsoft AD, Lambda for authorization, and an ALB for global delivery.", ko: "Microsoft AD용 AWS Directory Service, Lambda 승인, ALB를 사용해 전 세계에 제공합니다." },
      { k: "C", en: "Use Amazon Cognito, Lambda, and S3 Transfer Acceleration for global web delivery.", ko: "Amazon Cognito, Lambda, S3 Transfer Acceleration으로 웹 애플리케이션을 전 세계에 제공합니다." },
      { k: "D", en: "Use AWS Directory Service for Microsoft AD, Lambda@Edge, and Elastic Beanstalk for global delivery.", ko: "Microsoft AD용 AWS Directory Service, Lambda@Edge, Elastic Beanstalk로 전 세계에 제공합니다." }
    ],
    answer: ["A"],
    explanation: { ko: "Cognito는 소규모에서 자동 확장되는 관리형 사용자 인증을 제공하고 Lambda@Edge는 사용자와 가까운 엣지에서 권한 로직을 실행합니다. CloudFront는 전 세계 콘텐츠 전송과 낮은 지연을 제공합니다.", en: "Cognito provides managed authentication that scales from a small user base, Lambda@Edge runs authorization near users, and CloudFront delivers content globally with low latency." },
    why_wrong: {
      B: { ko: "관리형 Microsoft AD는 소규모 사용자 인증에 비용과 관리가 과도하고 ALB는 글로벌 CDN이 아닙니다.", en: "Managed Microsoft AD is excessive for a small user base, and an ALB is not a global CDN." },
      C: { ko: "S3 Transfer Acceleration은 객체 업로드·다운로드 가속 기능이며 웹 콘텐츠 CDN이 아닙니다.", en: "S3 Transfer Acceleration accelerates object transfers and is not a web-content CDN." },
      D: { ko: "Directory Service와 Elastic Beanstalk는 서버리스 및 최소 비용 요구에 맞지 않습니다.", en: "Directory Service and Elastic Beanstalk do not fit the serverless, lowest-cost requirement." }
    }
  },
  {
    id: "exam7-346", number: 346, tags: ["AWS Storage Gateway", "Amazon S3 File Gateway", "SMB", "NFS", "Lifecycle Policy"],
    question: { en: "A company has an aging on-premises NAS that provides SMB and NFS shares. It wants to avoid buying a new array or renewing support, migrate data to S3, apply lifecycle policies, and preserve the same client file-share experience. Which Storage Gateway type should it use?", ko: "회사는 SMB와 NFS 공유를 제공하는 노후 온프레미스 NAS를 교체하거나 지원 계약을 갱신하지 않으려 합니다. 데이터를 S3로 이전하고 수명 주기 정책을 적용하면서 클라이언트의 동일한 파일 공유 사용 경험을 유지하려면 어떤 Storage Gateway를 사용해야 합니까?" },
    options: [
      { k: "A", en: "Volume Gateway", ko: "볼륨 게이트웨이" },
      { k: "B", en: "Tape Gateway", ko: "테이프 게이트웨이" },
      { k: "C", en: "Amazon FSx File Gateway", ko: "Amazon FSx 파일 게이트웨이" },
      { k: "D", en: "Amazon S3 File Gateway", ko: "Amazon S3 파일 게이트웨이" }
    ],
    answer: ["D"],
    explanation: { ko: "S3 File Gateway는 기존 클라이언트에 NFS와 SMB 파일 공유를 제공하면서 객체를 S3에 저장하므로 S3 수명 주기 정책을 적용할 수 있습니다.", en: "S3 File Gateway exposes NFS and SMB file shares to existing clients while storing files as S3 objects, allowing S3 lifecycle policies." },
    why_wrong: {
      A: { ko: "Volume Gateway는 iSCSI 블록 스토리지를 제공하며 SMB/NFS 파일 공유가 아닙니다.", en: "Volume Gateway provides iSCSI block storage, not SMB or NFS file shares." },
      B: { ko: "Tape Gateway는 가상 테이프 백업용이며 NAS 파일 공유 대체가 아닙니다.", en: "Tape Gateway is for virtual tape backup, not replacing NAS file shares." },
      C: { ko: "FSx File Gateway는 FSx for Windows File Server에 대한 캐시 접근용이며 데이터를 S3 객체로 저장하지 않습니다.", en: "FSx File Gateway provides cached access to FSx for Windows File Server and does not store files as S3 objects." }
    }
  },
  {
    id: "exam7-347", number: 347, tags: ["Compute Savings Plans", "Amazon EC2", "Cost Optimization", "Flexible Commitment"],
    question: { en: "A company has standardized an EC2 application on specific instance families and multiple sizes. It wants maximum savings over three years but must be able to change instance families and sizes within six months as usage changes. Which option is most cost-effective?", ko: "회사는 EC2 애플리케이션을 특정 인스턴스 제품군과 여러 크기로 표준화했습니다. 향후 3년간 비용 절감을 극대화하되 6개월 이내에 사용량에 따라 인스턴스 제품군과 크기를 변경할 수 있어야 합니다. 가장 비용 효율적인 옵션은 무엇입니까?" },
    options: [
      { k: "A", en: "Compute Savings Plans", ko: "컴퓨팅 절감 플랜" },
      { k: "B", en: "EC2 Instance Savings Plans", ko: "EC2 인스턴스 절감 플랜" },
      { k: "C", en: "Zonal Reserved Instances", ko: "영역 예약 인스턴스" },
      { k: "D", en: "Standard Reserved Instances", ko: "표준 예약 인스턴스" }
    ],
    answer: ["A"],
    explanation: { ko: "Compute Savings Plans는 시간당 컴퓨팅 사용 약정으로 큰 할인을 제공하면서 인스턴스 제품군, 크기, 리전과 일부 컴퓨팅 서비스 간 변경 유연성을 제공합니다.", en: "Compute Savings Plans provide strong discounts through an hourly compute commitment while allowing changes across instance families, sizes, Regions, and eligible compute services." },
    why_wrong: {
      B: { ko: "EC2 Instance Savings Plans는 선택한 리전과 인스턴스 제품군에 묶여 제품군 변경 요구에 맞지 않습니다.", en: "EC2 Instance Savings Plans are tied to an instance family in a Region and do not meet the family-change requirement." },
      C: { ko: "영역 예약 인스턴스는 특정 AZ와 인스턴스 속성에 더 강하게 묶입니다.", en: "Zonal Reserved Instances are more tightly bound to an AZ and instance attributes." },
      D: { ko: "표준 예약 인스턴스는 큰 할인 대신 인스턴스 제품군 변경 유연성이 제한됩니다.", en: "Standard Reserved Instances offer discounts but limited flexibility to change instance families." }
    }
  },
  {
    id: "exam7-348", number: 348, tags: ["Amazon DynamoDB", "Provisioned Capacity", "RCU", "WCU", "Cost Optimization"],
    question: { en: "A company collects wearable-device data from many participants in DynamoDB. The workload is steady and predictable, and the company wants to remain under a forecast DynamoDB budget. Which solution is most cost-effective?", ko: "회사는 많은 참가자의 웨어러블 장치 데이터를 DynamoDB에 저장해 분석합니다. 워크로드는 일정하고 예측 가능하며 DynamoDB 예상 예산 이하를 유지하려 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use provisioned mode with DynamoDB Standard-IA and reserve capacity for the forecast workload.", ko: "프로비저닝 모드와 DynamoDB Standard-IA를 사용하고 예상 워크로드 용량을 예약합니다." },
      { k: "B", en: "Use provisioned mode and specify the required read capacity units and write capacity units.", ko: "프로비저닝 모드를 사용하고 필요한 RCU와 WCU를 지정합니다." },
      { k: "C", en: "Use on-demand mode and set RCU and WCU high enough for workload changes.", ko: "온디맨드 모드를 사용하고 워크로드 변화에 충분한 RCU와 WCU를 설정합니다." },
      { k: "D", en: "Use on-demand mode with reserved RCU and WCU capacity.", ko: "예약 RCU와 WCU가 있는 온디맨드 모드를 사용합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "일정하고 예측 가능한 트래픽에는 필요한 RCU와 WCU를 지정하는 프로비저닝 용량 모드가 온디맨드보다 비용 예측성과 효율성이 높습니다.", en: "For steady predictable traffic, provisioned capacity with specified RCUs and WCUs is more cost-efficient and budget-predictable than on-demand mode." },
    why_wrong: {
      A: { ko: "Standard-IA는 저장 데이터가 많고 접근 빈도가 낮을 때 유리하지만 지속적으로 수집·분석하는 접근 패턴에는 반드시 최적이 아닙니다.", en: "Standard-IA benefits storage-heavy, infrequently accessed tables and is not necessarily optimal for continuously collected and analyzed data." },
      C: { ko: "온디맨드 모드에서는 RCU와 WCU를 직접 설정하지 않으며 예측 가능한 부하에는 단위 처리 비용이 더 높을 수 있습니다.", en: "On-demand mode does not use configured RCUs and WCUs and can cost more per request for predictable load." },
      D: { ko: "온디맨드 모드에 예약 RCU와 WCU를 지정하는 구성은 없습니다.", en: "On-demand mode does not support reserving specified RCUs and WCUs." }
    }
  },
  {
    id: "exam7-349", number: 349, tags: ["AWS KMS", "Amazon Aurora PostgreSQL", "Snapshot Sharing", "Cross-Account", "Encryption"],
    question: { en: "A company stores confidential data in an Aurora PostgreSQL database in ap-southeast-3 encrypted with a customer managed KMS key. After an acquisition, it must securely share a database backup with the acquiring company's AWS account in the same Region. What should a solutions architect do?", ko: "회사는 ap-southeast-3의 Aurora PostgreSQL 데이터베이스에 KMS 고객 관리형 키로 암호화된 기밀 데이터를 저장합니다. 인수 후 같은 리전의 인수 회사 AWS 계정과 데이터베이스 백업을 안전하게 공유하려면 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Copy the snapshot to an unencrypted snapshot and share it with the acquiring account.", ko: "스냅샷을 암호화되지 않은 새 스냅샷으로 복사하고 인수 계정과 공유합니다." },
      { k: "B", en: "Create a DB snapshot, add the acquiring account to the KMS key policy, and share the snapshot with that account.", ko: "DB 스냅샷을 생성하고 인수 계정을 KMS 키 정책에 추가한 뒤 스냅샷을 해당 계정과 공유합니다." },
      { k: "C", en: "Copy the snapshot with another AWS managed KMS key, add the acquiring account to a KMS alias, and share it.", ko: "다른 AWS 관리형 KMS 키로 스냅샷을 복사하고 인수 계정을 KMS 별칭에 추가하여 공유합니다." },
      { k: "D", en: "Download the DB snapshot to S3 and grant the acquiring account access through an S3 bucket policy.", ko: "DB 스냅샷을 S3에 다운로드하고 버킷 정책으로 인수 계정에 접근을 허용합니다." }
    ],
    answer: ["B"],
    explanation: { ko: "암호화된 RDS/Aurora 스냅샷을 교차 계정 공유하려면 고객 관리형 KMS 키를 사용하고 대상 계정에 키 사용 권한을 부여한 뒤 스냅샷 속성으로 공유해야 합니다.", en: "Cross-account sharing of an encrypted RDS or Aurora snapshot requires a customer managed KMS key, permission for the target account in the key policy, and snapshot sharing with that account." },
    why_wrong: {
      A: { ko: "암호화된 스냅샷을 암호화되지 않은 스냅샷으로 복사할 수 없으며 기밀성 요구에도 맞지 않습니다.", en: "An encrypted snapshot cannot be copied to an unencrypted snapshot, and doing so would violate confidentiality." },
      C: { ko: "AWS 관리형 키로 암호화된 스냅샷은 교차 계정 공유할 수 없고 별칭은 권한을 부여하지 않습니다.", en: "Snapshots encrypted with AWS managed keys cannot be shared cross-account, and aliases do not grant permissions." },
      D: { ko: "관리형 DB 스냅샷을 일반 파일처럼 S3에 다운로드해 복원하는 방식은 지원되지 않습니다.", en: "A managed DB snapshot cannot be downloaded to S3 and restored as an ordinary file." }
    }
  },
  {
    id: "exam7-350", number: 350, tags: ["Amazon RDS", "Multi-AZ", "Read Replica", "Microsoft SQL Server", "High Availability", "Choose two"],
    question: { en: "A company uses a 100 GB single-AZ Amazon RDS for Microsoft SQL Server DB instance. It needs high availability and automatic recovery. Recurring reports also take longer than expected and must run faster. Which two actions meet the requirements? (Choose two.)", ko: "회사는 100GB 단일 AZ Amazon RDS for Microsoft SQL Server DB 인스턴스를 사용합니다. 고가용성과 자동 복구가 필요하고 반복 보고서로 트랜잭션 처리 시간이 길어져 보고 성능도 개선해야 합니다. 어떤 두 가지 작업이 요구사항을 충족합니까? (2개 선택)" },
    options: [
      { k: "A", en: "Modify the DB instance to use a Multi-AZ deployment.", ko: "DB 인스턴스를 다중 AZ 배포로 수정합니다." },
      { k: "B", en: "Restore a snapshot to a new RDS deployment in another Availability Zone.", ko: "스냅샷을 다른 가용 영역의 새 RDS 배포로 복원합니다." },
      { k: "C", en: "Create a read replica in another Availability Zone and direct all report requests to it.", ko: "다른 가용 영역에 읽기 전용 복제본을 생성하고 모든 보고 요청을 해당 복제본으로 보냅니다." },
      { k: "D", en: "Migrate the database to RDS Custom.", ko: "데이터베이스를 RDS Custom으로 마이그레이션합니다." },
      { k: "E", en: "Use RDS Proxy to restrict reporting requests to maintenance windows.", ko: "RDS Proxy로 보고 요청을 유지 관리 기간으로 제한합니다." }
    ],
    answer: ["A", "C"],
    explanation: { ko: "Multi-AZ는 동기식 대기 복제본과 자동 장애 조치로 고가용성을 제공합니다. 읽기 전용 복제본으로 보고 쿼리를 분리하면 기본 인스턴스의 트랜잭션 부하를 줄이고 보고 성능을 높일 수 있습니다.", en: "Multi-AZ provides high availability through a synchronous standby and automatic failover. A read replica offloads reporting queries from the primary, improving both transactional and reporting performance." },
    why_wrong: {
      B: { ko: "스냅샷 복원은 지속 동기화나 자동 장애 조치를 제공하지 않습니다.", en: "A restored snapshot provides neither continuous synchronization nor automatic failover." },
      D: { ko: "RDS Custom은 OS와 DB 환경 제어가 필요할 때 사용하며 이 고가용성·읽기 확장 요구에 필요하지 않습니다.", en: "RDS Custom is for workloads requiring OS and database customization and is unnecessary for these HA and read-scaling needs." },
      E: { ko: "RDS Proxy는 연결 풀링과 장애 조치 개선용이며 보고 쿼리를 예약하거나 읽기 부하를 분리하지 않습니다.", en: "RDS Proxy pools connections and improves failover behavior; it does not schedule reports or offload read queries." }
    }
  }
]
});
