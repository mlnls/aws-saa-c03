/* Exam 11 · Topic 1 · 현재 수록 범위: 501~550번 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  id: "exam11",
  title: "Exam 11",
  note: "Topic 1 · #501–550",
  questions: [
  {
    id: "exam11-501", number: 501, tags: ["Amazon Kinesis Data Firehose", "Amazon Managed Service for Apache Flink", "Amazon S3", "Real-Time Analytics"],
    question: { en: "A company wants to collect customer payment data in its Amazon S3 corporate data lake. It receives payment data approximately once per minute and wants to analyze the data in real time before collecting it in the data lake. Which solution meets these requirements most efficiently?", ko: "회사는 고객 결제 데이터를 Amazon S3의 회사 데이터 레이크로 수집하려고 합니다. 회사는 평균적으로 1분마다 결제 데이터를 수신합니다. 회사는 결제 데이터를 실시간으로 분석한 다음 데이터를 데이터 레이크로 수집하려고 합니다. 이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use Amazon Kinesis Data Streams to collect the data and AWS Lambda to analyze it in real time.", ko: "Amazon Kinesis Data Streams를 사용하여 데이터를 수집하십시오. AWS Lambda를 사용하여 실시간으로 데이터를 분석합니다." },
      { k: "B", en: "Use AWS Glue to collect the data and Amazon Kinesis Data Analytics to analyze it in real time.", ko: "AWS Glue를 사용하여 데이터를 수집합니다. Amazon Kinesis Data Analytics를 사용하여 데이터를 실시간으로 분석하십시오." },
      { k: "C", en: "Use Amazon Kinesis Data Firehose to collect the data and Amazon Kinesis Data Analytics to analyze it in real time.", ko: "Amazon Kinesis Data Firehose를 사용하여 데이터를 수집합니다. Amazon Kinesis Data Analytics를 사용하여 데이터를 실시간으로 분석하십시오." },
      { k: "D", en: "Use Amazon API Gateway to collect the data and AWS Lambda to analyze it in real time.", ko: "Amazon API Gateway를 사용하여 데이터를 수집합니다. AWS Lambda를 사용하여 실시간으로 데이터를 분석합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Kinesis Data Firehose is a managed streaming delivery service that can continuously deliver records to Amazon S3. Kinesis Data Analytics, now Amazon Managed Service for Apache Flink, analyzes the stream in real time with little infrastructure management.", ko: "Kinesis Data Firehose는 레코드를 Amazon S3로 지속적으로 전달할 수 있는 관리형 스트리밍 전송 서비스입니다. 현재 Amazon Managed Service for Apache Flink인 Kinesis Data Analytics는 인프라 관리가 거의 없이 스트림을 실시간 분석합니다." },
    why_wrong: {
      A: { en: "Data Streams and Lambda can work, but require more consumer code and stream operations than the managed Firehose and analytics combination.", ko: "Data Streams와 Lambda도 가능하지만 관리형 Firehose와 분석 서비스 조합보다 소비자 코드와 스트림 운영이 더 필요합니다." },
      B: { en: "AWS Glue is primarily an ETL and data-integration service, not the most direct managed ingestion path for minute-by-minute streaming records.", ko: "AWS Glue는 주로 ETL 및 데이터 통합 서비스이며 분 단위 스트리밍 레코드의 가장 직접적인 관리형 수집 경로가 아닙니다." },
      D: { en: "API Gateway and Lambda require custom ingestion and delivery logic to persist the stream in S3.", ko: "API Gateway와 Lambda를 사용하면 스트림을 S3에 저장하기 위한 사용자 지정 수집 및 전달 로직이 필요합니다." }
    }
  },
  {
    id: "exam11-502", number: 502, tags: ["Amazon EFS", "Amazon CloudFront", "Amazon EC2 Auto Scaling", "Application Load Balancer", "High Availability", "Choose two"],
    question: { en: "A company runs a CMS website on a single Amazon EC2 instance. It uses an Aurora MySQL Multi-AZ DB instance, and website images are stored on an EBS volume attached to the EC2 instance. Which two actions should a solutions architect take to improve website performance and resiliency? (Choose two.)", ko: "회사는 Amazon EC2에서 콘텐츠 관리 시스템(CMS)을 사용하는 웹 사이트를 운영합니다. CMS는 단일 EC2 인스턴스에서 실행되며 데이터 계층에 Amazon Aurora MySQL 다중 AZ DB 인스턴스를 사용합니다. 웹 사이트 이미지는 EC2 인스턴스 내부에 탑재된 Amazon Elastic Block Store(Amazon EBS) 볼륨에 저장됩니다. 웹 사이트의 성능과 복원력을 개선하기 위해 솔루션 설계자가 취해야 하는 작업 조합은 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Move the website images to an Amazon S3 bucket mounted on all EC2 instances.", ko: "웹 사이트 이미지를 모든 EC2 인스턴스에 탑재된 Amazon S3 버킷으로 이동합니다." },
      { k: "B", en: "Share the images through an NFS share on the original EC2 instance and mount it on other instances.", ko: "기본 EC2 인스턴스의 NFS 공유를 사용하여 웹사이트 이미지를 공유합니다. 이 공유를 다른 EC2 인스턴스에 마운트합니다." },
      { k: "C", en: "Move the website images to an Amazon EFS file system mounted on all EC2 instances.", ko: "모든 EC2 인스턴스에 탑재된 Amazon Elastic File System(Amazon EFS) 파일 시스템으로 웹 사이트 이미지를 이동합니다." },
      { k: "D", en: "Create an AMI, deploy an Auto Scaling group behind an Application Load Balancer with at least two instances, and configure AWS Global Accelerator.", ko: "기존 EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성합니다. AMI를 사용하여 Auto Scaling 그룹의 일부로 Application Load Balancer 뒤에 새 인스턴스를 프로비저닝합니다. 최소 2개의 인스턴스를 유지하도록 Auto Scaling 그룹을 구성합니다. 웹 사이트에 대한 AWS Global Accelerator에서 액셀러레이터를 구성합니다." },
      { k: "E", en: "Create an AMI, deploy an Auto Scaling group behind an Application Load Balancer with at least two instances, and configure an Amazon CloudFront distribution.", ko: "기존 EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성합니다. AMI를 사용하여 Auto Scaling 그룹의 일부로 Application Load Balancer 뒤에 새 인스턴스를 프로비저닝합니다. 최소 2개의 인스턴스를 유지하도록 Auto Scaling 그룹을 구성합니다. 웹 사이트에 대한 Amazon CloudFront 배포를 구성합니다." }
    ],
    answer: ["C", "E"],
    explanation: { en: "EFS provides shared, managed, scalable file storage for all CMS instances. An Auto Scaling group across multiple instances behind an ALB removes the single compute failure point, while CloudFront caches content near users to improve performance.", ko: "EFS는 모든 CMS 인스턴스를 위한 공유 관리형 확장 가능 파일 스토리지를 제공합니다. ALB 뒤의 여러 인스턴스로 구성된 Auto Scaling 그룹은 단일 컴퓨팅 장애 지점을 제거하고 CloudFront는 사용자 가까이에서 콘텐츠를 캐시하여 성능을 높입니다." },
    why_wrong: {
      A: { en: "Amazon S3 is object storage and is not natively mounted as a shared POSIX file system for the CMS.", ko: "Amazon S3는 객체 스토리지이며 CMS를 위한 공유 POSIX 파일 시스템으로 기본 탑재되지 않습니다." },
      B: { en: "Hosting the NFS share on the original EC2 instance retains a single point of failure and adds server administration.", ko: "원래 EC2 인스턴스에서 NFS 공유를 호스팅하면 단일 장애 지점이 유지되고 서버 관리가 추가됩니다." },
      D: { en: "Global Accelerator improves network routing but does not cache static website content as CloudFront does.", ko: "Global Accelerator는 네트워크 라우팅을 개선하지만 CloudFront처럼 정적 웹 콘텐츠를 캐시하지 않습니다." }
    }
  },
  {
    id: "exam11-503", number: 503, tags: ["AWS IAM", "Cross-Account Access", "IAM Role", "Trust Policy", "Amazon EC2", "Amazon CloudWatch"],
    question: { en: "A company runs an infrastructure-monitoring service and is building a feature that calls AWS APIs in customer accounts to describe Amazon EC2 instances and read Amazon CloudWatch metrics. What is the most secure way for the company to obtain access to customer accounts?", ko: "회사에서 인프라 모니터링 서비스를 실행합니다. 이 회사는 서비스가 고객 AWS 계정의 데이터를 모니터링할 수 있는 새로운 기능을 구축하고 있습니다. 새로운 기능은 고객 계정에서 AWS API를 호출하여 Amazon EC2 인스턴스를 설명하고 Amazon CloudWatch 지표를 읽습니다. 회사는 가장 안전한 방법으로 고객 계정에 대한 액세스 권한을 얻기 위해 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Have each customer create an IAM role in the customer account with read-only EC2 and CloudWatch permissions and a trust policy for the company's account.", ko: "고객이 회사 계정에 대한 읽기 전용 EC2 및 CloudWatch 권한과 신뢰 정책을 사용하여 계정에 IAM 역할을 생성하는지 확인합니다." },
      { k: "B", en: "Create a token-vending serverless API that provides temporary AWS credentials for a role with read-only EC2 and CloudWatch permissions.", ko: "토큰 판매기를 구현하는 서버리스 API를 생성하여 읽기 전용 EC2 및 CloudWatch 권한이 있는 역할에 대한 임시 AWS 자격 증명을 제공합니다." },
      { k: "C", en: "Have each customer create an IAM user with read-only EC2 and CloudWatch permissions and store the access keys in an encrypted secrets system.", ko: "고객이 자신의 계정에서 읽기 전용 EC2 및 CloudWatch 권한을 가진 IAM 사용자를 생성하는지 확인합니다. 비밀 관리 시스템에서 고객 액세스 및 비밀 키를 암호화하고 저장합니다." },
      { k: "D", en: "Have each customer create an Amazon Cognito user that uses an IAM role with read-only EC2 and CloudWatch permissions and store the credentials in a password system.", ko: "고객이 자신의 계정에 Amazon Cognito 사용자를 생성하여 읽기 전용 EC2 및 CloudWatch 권한이 있는 IAM 역할을 사용하는지 확인합니다. 암호 관리 시스템에서 Amazon Cognito 사용자 및 암호를 암호화하고 저장합니다." }
    ],
    answer: ["A"],
    explanation: { en: "A cross-account IAM role lets the monitoring company assume narrowly scoped permissions with temporary credentials. The customer controls the role permissions and trust policy, avoiding long-lived access keys.", ko: "교차 계정 IAM 역할을 사용하면 모니터링 회사가 임시 자격 증명으로 범위가 좁은 권한을 맡을 수 있습니다. 고객이 역할 권한과 신뢰 정책을 제어하므로 장기 액세스 키가 필요하지 않습니다." },
    why_wrong: {
      B: { en: "A custom credential vending system adds security-sensitive code and operations when STS role assumption already provides temporary credentials.", ko: "STS 역할 수임이 이미 임시 자격 증명을 제공하므로 사용자 지정 자격 증명 판매 시스템은 보안에 민감한 코드와 운영을 불필요하게 추가합니다." },
      C: { en: "IAM user access keys are long-lived credentials that must be stored and rotated, increasing risk.", ko: "IAM 사용자 액세스 키는 저장하고 교체해야 하는 장기 자격 증명이므로 위험이 증가합니다." },
      D: { en: "Amazon Cognito is for application users and is not the standard mechanism for service-to-service cross-account AWS API access.", ko: "Amazon Cognito는 애플리케이션 사용자용이며 서비스 간 교차 계정 AWS API 접근의 표준 방식이 아닙니다." }
    }
  },
  {
    id: "exam11-504", number: 504, tags: ["AWS Transit Gateway", "Multi-Account", "Amazon VPC", "Networking", "Operational Excellence"],
    question: { en: "A company must connect multiple VPCs in us-east-1 across hundreds of AWS accounts. Its networking team has a dedicated AWS account for managing the cloud network. Which solution is most operationally efficient?", ko: "회사는 수백 개의 AWS 계정에 걸쳐 있는 us-east-1 리전의 여러 VPC를 연결해야 합니다. 회사의 네트워킹 팀에는 클라우드 네트워크를 관리하기 위한 자체 AWS 계정이 있습니다. VPC를 연결하기 위한 운영상 가장 효율적인 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create VPC peering connections between every VPC and update all connected subnet route tables.", ko: "각 VPC 간에 VPC 피어링 연결을 설정합니다. 연결된 각 서브넷의 경로 테이블을 업데이트합니다." },
      { k: "B", en: "Configure a NAT gateway and internet gateway in every VPC to connect the VPCs through the internet.", ko: "인터넷을 통해 각 VPC를 연결하도록 각 VPC에서 NAT 게이트웨이와 인터넷 게이트웨이를 구성합니다." },
      { k: "C", en: "Create an AWS Transit Gateway in the networking account and configure static routes from each VPC.", ko: "네트워킹 팀의 AWS 계정에서 AWS Transit Gateway를 생성합니다. 각 VPC에서 정적 경로를 구성합니다." },
      { k: "D", en: "Deploy a VPN gateway in every VPC and create a transit VPC in the networking account.", ko: "각 VPC에 VPN 게이트웨이를 배포합니다. 네트워킹 팀의 AWS 계정에 전송 VPC를 생성하여 각 VPC에 연결합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Transit Gateway provides a scalable hub-and-spoke design for connecting many VPCs across accounts. Central ownership in the networking account reduces the number of connections and simplifies routing and administration.", ko: "Transit Gateway는 여러 계정의 많은 VPC를 연결하기 위한 확장 가능한 허브 앤 스포크 설계를 제공합니다. 네트워킹 계정에서 중앙 소유하면 연결 수가 줄고 라우팅과 관리가 단순해집니다." },
    why_wrong: {
      A: { en: "Full-mesh VPC peering requires a rapidly growing number of connections and route updates and is not transitive.", ko: "풀 메시 VPC 피어링은 연결과 경로 업데이트 수가 급격히 늘고 전이적 라우팅을 지원하지 않습니다." },
      B: { en: "Internet and NAT gateways do not provide secure private routing among VPCs and add unnecessary cost.", ko: "인터넷 및 NAT 게이트웨이는 VPC 간 안전한 비공개 라우팅을 제공하지 않으며 불필요한 비용을 추가합니다." },
      D: { en: "A transit VPC based on VPN appliances requires more deployment, scaling, and maintenance than managed Transit Gateway.", ko: "VPN 어플라이언스 기반 전송 VPC는 관리형 Transit Gateway보다 배포, 확장 및 유지 관리가 더 필요합니다." }
    }
  },
  {
    id: "exam11-505", number: 505, tags: ["Amazon EC2 Spot Instances", "EC2 Auto Scaling", "Batch Processing", "Cost Optimization", "Fault Tolerance"],
    question: { en: "A company runs nightly batch jobs on Amazon EC2 instances in an Auto Scaling group using On-Demand pricing. If a job fails on one instance, another instance retries it. Jobs run every day from midnight to 6 A.M. local time. Which solution provides the EC2 instances most cost-effectively?", ko: "한 회사에 야간 배치 작업을 실행하여 데이터를 처리하는 Amazon EC2 인스턴스가 있습니다. EC2 인스턴스는 온디맨드 결제를 사용하는 Auto Scaling 그룹에서 실행됩니다. 한 인스턴스에서 작업이 실패하면 다른 인스턴스가 작업을 다시 처리합니다. 배치 작업은 현지 시간으로 매일 오전 12시에서 오전 6시 사이에 실행됩니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 EC2 인스턴스를 제공하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Purchase a 1-year Savings Plan covering the Auto Scaling group's instance fleet.", ko: "배치 작업이 사용하는 Auto Scaling 그룹의 인스턴스 제품군을 포함하는 Amazon EC2용 1년 절약 플랜을 구매합니다." },
      { k: "B", en: "Purchase 1-year Reserved Instances for a specific instance type and operating system in the Auto Scaling group.", ko: "배치 작업이 사용하는 Auto Scaling 그룹에 있는 인스턴스의 특정 인스턴스 유형 및 운영 체제에 대해 1년 예약 인스턴스를 구매합니다." },
      { k: "C", en: "Create a new launch template for the Auto Scaling group, configure the instances as Spot Instances, and scale based on CPU utilization.", ko: "Auto Scaling 그룹에 대한 새 시작 템플릿을 생성합니다. 인스턴스를 스팟 인스턴스로 설정합니다. CPU 사용량에 따라 확장하도록 정책을 설정합니다." },
      { k: "D", en: "Create a new launch template for the Auto Scaling group, increase the instance size, and scale based on CPU utilization.", ko: "Auto Scaling 그룹에 대한 새 시작 템플릿을 생성합니다. 인스턴스 크기를 늘립니다. CPU 사용량에 따라 확장하도록 정책을 설정합니다." }
    ],
    answer: ["C"],
    explanation: { en: "The workload is fault tolerant because failed jobs are retried, making Spot Instances suitable. Spot capacity provides the largest discount for flexible batch processing, and Auto Scaling replaces interrupted capacity and adjusts to demand.", ko: "실패한 작업을 재시도하므로 워크로드는 내결함성이 있어 스팟 인스턴스에 적합합니다. 스팟 용량은 유연한 배치 처리에 가장 큰 할인을 제공하며 Auto Scaling은 중단된 용량을 교체하고 수요에 맞춰 조정합니다." },
    why_wrong: {
      A: { en: "A Savings Plan commits to ongoing hourly spend even though the instances are needed only six hours per day and can tolerate interruption.", ko: "Savings Plan은 인스턴스가 하루 6시간만 필요하고 중단을 허용할 수 있는데도 지속적인 시간당 지출을 약정합니다." },
      B: { en: "Reserved Instances are less flexible and generally cost more than Spot for an interruptible batch workload.", ko: "예약 인스턴스는 유연성이 낮고 중단 가능한 배치 워크로드에는 일반적으로 스팟보다 비용이 높습니다." },
      D: { en: "Larger On-Demand instances do not use the workload's interruption tolerance and can increase cost.", ko: "더 큰 온디맨드 인스턴스는 워크로드의 중단 허용 특성을 활용하지 못하고 비용을 늘릴 수 있습니다." }
    }
  },
  {
    id: "exam11-506", number: 506, tags: ["Amazon S3", "Presigned URL", "Scalability", "File Upload", "Serverless"],
    question: { en: "A social-media company is building a website feature that lets users upload photos. Demand will increase significantly during a large event, and the company must ensure that the website can handle the upload traffic with the greatest scalability. Which solution meets these requirements?", ko: "소셜 미디어 회사는 웹사이트용 기능을 구축하고 있습니다. 이 기능을 통해 사용자는 사진을 업로드할 수 있습니다. 회사는 대규모 이벤트 기간 동안 수요가 크게 증가할 것으로 예상하고 웹사이트가 사용자의 업로드 트래픽을 처리할 수 있는지 확인해야 합니다. MOST 확장성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Upload files from the user's browser to an application server, which transfers them to an S3 bucket.", ko: "사용자의 브라우저에서 응용 프로그램 서버로 파일을 업로드합니다. 파일을 Amazon S3 버킷으로 전송합니다." },
      { k: "B", en: "Provision an AWS Storage Gateway file gateway and upload files directly to it from users' browsers.", ko: "AWS Storage Gateway 파일 게이트웨이를 프로비저닝합니다. 사용자의 브라우저에서 파일 게이트웨이로 직접 파일을 업로드합니다." },
      { k: "C", en: "Generate Amazon S3 presigned URLs in the application and upload files directly from users' browsers to the S3 bucket.", ko: "애플리케이션에서 Amazon S3 미리 서명된 URL을 생성합니다. 사용자 브라우저에서 S3 버킷으로 직접 파일을 업로드합니다." },
      { k: "D", en: "Provision an Amazon EFS file system and upload files directly to it from users' browsers.", ko: "Amazon Elastic File System(Amazon EFS) 파일 시스템을 프로비저닝합니다. 사용자의 브라우저에서 파일 시스템으로 직접 파일을 업로드합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Presigned URLs allow browsers to upload directly to highly scalable Amazon S3 without sending file payloads through application servers. The application performs only lightweight authorization and URL generation.", ko: "미리 서명된 URL을 사용하면 파일 데이터를 애플리케이션 서버로 보내지 않고 브라우저에서 확장성이 높은 Amazon S3로 직접 업로드할 수 있습니다. 애플리케이션은 가벼운 권한 확인과 URL 생성만 수행합니다." },
    why_wrong: {
      A: { en: "Proxying every upload through application servers creates a compute and network bottleneck.", ko: "모든 업로드를 애플리케이션 서버를 통해 프록시하면 컴퓨팅 및 네트워크 병목이 생깁니다." },
      B: { en: "File Gateway is designed for hybrid file workloads, not public browser uploads at internet scale.", ko: "File Gateway는 하이브리드 파일 워크로드용이며 인터넷 규모의 공개 브라우저 업로드용이 아닙니다." },
      D: { en: "Browsers cannot directly mount EFS over the web, and EFS is not an object-upload endpoint.", ko: "브라우저는 웹에서 EFS를 직접 탑재할 수 없으며 EFS는 객체 업로드 엔드포인트가 아닙니다." }
    }
  },
  {
    id: "exam11-507", number: 507, tags: ["Amazon DynamoDB Global Tables", "Multi-Region", "Global Application", "Low Latency", "Disaster Recovery"],
    question: { en: "A travel-ticket web application uses a database in one North American data center. The company wants to deploy the application independently in multiple AWS Regions for global users. Reservation updates must average less than 1 second, and one globally consistent primary reservation database must be maintained. Which solution should a solutions architect recommend?", ko: "회사에 여행 발권을 위한 웹 애플리케이션이 있습니다. 이 애플리케이션은 북미 지역의 단일 데이터 센터에서 실행되는 데이터베이스를 기반으로 합니다. 회사는 글로벌 사용자 기반에 서비스를 제공하기 위해 응용 프로그램을 확장하려고 합니다. 회사는 애플리케이션을 여러 AWS 리전에 배포해야 합니다. 예약 데이터베이스 업데이트 시 평균 대기 시간은 1초 미만이어야 합니다. 이 회사는 여러 지역에 걸쳐 웹 플랫폼을 별도로 배포하려고 합니다. 그러나 회사는 전 세계적으로 일관된 단일 기본 예약 데이터베이스를 유지해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 솔루션을 권장해야 합니까?" },
    options: [
      { k: "A", en: "Migrate the application to Amazon DynamoDB, use a global table for the primary reservation table, and use the appropriate Regional endpoint in each deployment.", ko: "Amazon DynamoDB를 사용하도록 애플리케이션을 변환합니다. 중앙 예약 테이블에 전역 테이블을 사용합니다. 각 지역 배포에서 올바른 지역 엔드포인트를 사용합니다." },
      { k: "B", en: "Migrate to Amazon Aurora MySQL and deploy Aurora read replicas in each Region, using the appropriate Regional endpoint.", ko: "데이터베이스를 Amazon Aurora MySQL 데이터베이스로 마이그레이션합니다. 각 지역에 Aurora 읽기 전용 복제본을 배포합니다. 데이터베이스에 액세스하려면 각 지역 배포에서 올바른 지역 엔드포인트를 사용하세요." },
      { k: "C", en: "Migrate to Amazon RDS for MySQL and deploy MySQL read replicas in each Region, using the appropriate Regional endpoint.", ko: "데이터베이스를 Amazon RDS for MySQL 데이터베이스로 마이그레이션합니다. 각 리전에 MySQL 읽기 전용 복제본을 배포합니다. 데이터베이스에 액세스하려면 각 지역 배포에서 올바른 지역 엔드포인트를 사용하세요." },
      { k: "D", en: "Migrate to Aurora Serverless, deploy database instances in each Region, and use Lambda to synchronize event streams among Regions.", ko: "애플리케이션을 Amazon Aurora Serverless 데이터베이스로 마이그레이션합니다. 각 지역에 데이터베이스 인스턴스를 배포합니다. 각 지역 배포에서 올바른 지역 엔드포인트를 사용하여 데이터베이스에 액세스합니다. AWS Lambda 함수를 사용하여 각 리전에서 이벤트 스트림을 처리하여 데이터베이스를 동기화합니다." }
    ],
    answer: ["A"],
    explanation: { en: "DynamoDB global tables provide managed multi-Region, multi-active replication with local Regional endpoints and typically sub-second propagation. They provide one logical table that applications can read and write close to users.", ko: "DynamoDB 글로벌 테이블은 로컬 리전 엔드포인트와 일반적으로 1초 미만의 전파 시간을 갖는 관리형 다중 리전 다중 활성 복제를 제공합니다. 애플리케이션은 사용자 가까이에서 하나의 논리 테이블을 읽고 쓸 수 있습니다." },
    why_wrong: {
      B: { en: "Aurora cross-Region read replicas do not provide multi-active writes to one globally writable database.", ko: "Aurora 교차 리전 읽기 전용 복제본은 전역 쓰기 가능한 하나의 데이터베이스에 다중 활성 쓰기를 제공하지 않습니다." },
      C: { en: "RDS cross-Region read replicas are read-only and asynchronous and do not satisfy global local writes.", ko: "RDS 교차 리전 읽기 전용 복제본은 읽기 전용 비동기 방식이며 전역 로컬 쓰기를 충족하지 못합니다." },
      D: { en: "Custom Lambda synchronization is complex, can introduce conflicts and lag, and is not a single managed globally consistent database.", ko: "사용자 지정 Lambda 동기화는 복잡하고 충돌과 지연을 유발할 수 있으며 하나의 관리형 전역 데이터베이스가 아닙니다." }
    }
  },
  {
    id: "exam11-508", number: 508, tags: ["Amazon EC2 Image Builder", "AWS Backup", "Cross-Region Backup", "Disaster Recovery", "Choose two"],
    question: { en: "A company migrated Microsoft Windows Server workloads to Amazon EC2 in us-west-1 and manually backs them up to create images. If a natural disaster affects us-west-1, it wants rapid recovery in us-west-2, no more than 24 hours of data loss, and automated EC2 backups. Which two solutions meet these requirements with the least management effort? (Choose two.)", ko: "한 회사에서 여러 Microsoft Windows Server 워크로드를 us-west-1 리전에서 실행되는 Amazon EC2 인스턴스로 마이그레이션했습니다. 회사는 필요에 따라 이미지를 생성하기 위해 워크로드를 수동으로 백업합니다. us-west-1 리전에서 자연 재해가 발생한 경우 회사는 us-west-2 리전에서 워크로드를 신속하게 복구하기를 원합니다. 회사는 EC2 인스턴스에서 24시간 이상의 데이터 손실을 원하지 않습니다. 회사는 또한 EC2 인스턴스의 모든 백업을 자동화하려고 합니다. 최소한의 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Create an EC2 Image Builder AMI lifecycle policy with tag-based backups twice daily and copy images manually when needed.", ko: "Amazon EC2 지원 Amazon 머신 이미지(AMI) 수명 주기 정책을 생성하여 태그 기반 백업을 생성합니다. 하루에 두 번 실행되도록 백업을 예약합니다. 필요에 따라 이미지를 복사합니다." },
      { k: "B", en: "Create an EC2 Image Builder AMI lifecycle policy with tag-based backups twice daily and configure distribution to us-west-2.", ko: "Amazon EC2 지원 Amazon 머신 이미지(AMI) 수명 주기 정책을 생성하여 태그 기반 백업을 생성합니다. 하루에 두 번 실행되도록 백업을 예약합니다. us-west-2 리전에 대한 복사본을 구성합니다." },
      { k: "C", en: "Create AWS Backup vaults in both Regions and use a scheduled Lambda function to copy backups to us-west-2.", ko: "AWS Backup을 사용하여 us-west-1 및 us-west-2에 백업 볼트를 생성합니다. 태그 값을 기반으로 EC2 인스턴스에 대한 백업 계획을 생성합니다. 백업 데이터를 us-west-2에 복사하기 위해 예약된 작업으로 실행할 AWS Lambda 함수를 생성합니다." },
      { k: "D", en: "Use AWS Backup with a tag-based EC2 backup plan, schedule it twice daily, and define us-west-2 as the copy destination.", ko: "AWS Backup을 사용하여 백업 볼트를 생성합니다. AWS Backup을 사용하여 태그 값을 기반으로 EC2 인스턴스에 대한 백업 계획을 생성합니다. 사본의 대상을 us-west-2로 정의합니다. 하루에 두 번 실행할 백업 일정을 지정합니다." },
      { k: "E", en: "Use AWS Backup with a tag-based plan twice daily and copy backups to us-west-2 on demand.", ko: "AWS Backup을 사용하여 백업 볼트를 생성합니다. AWS Backup을 사용하여 태그 값을 기반으로 EC2 인스턴스에 대한 백업 계획을 생성합니다. 하루에 두 번 실행할 백업 일정을 지정합니다. 요청 시 us-west-2에 복사합니다." }
    ],
    answer: ["B", "D"],
    explanation: { en: "EC2 Image Builder can automate AMI creation and distribution to another Region. AWS Backup can select EC2 resources by tags, run twice daily, and automatically perform cross-Region copies. Both satisfy the recovery and automation goals without custom code or manual copying.", ko: "EC2 Image Builder는 AMI 생성과 다른 리전으로의 배포를 자동화할 수 있습니다. AWS Backup은 태그로 EC2 리소스를 선택하고 하루 두 번 실행하며 교차 리전 복사를 자동 수행할 수 있습니다. 두 방법 모두 사용자 지정 코드나 수동 복사 없이 복구 및 자동화 목표를 충족합니다." },
    why_wrong: {
      A: { en: "Manual copying does not automate disaster-recovery image availability in us-west-2.", ko: "수동 복사는 us-west-2의 재해 복구 이미지 가용성을 자동화하지 못합니다." },
      C: { en: "AWS Backup natively supports scheduled cross-Region copy, so a Lambda copier adds unnecessary development and management.", ko: "AWS Backup은 예약된 교차 리전 복사를 기본 지원하므로 Lambda 복사기는 불필요한 개발과 관리를 추가합니다." },
      E: { en: "On-demand copying leaves recovery images unavailable until a manual action occurs and does not meet the automation goal.", ko: "요청 시 복사는 수동 작업 전까지 복구 이미지를 사용할 수 없게 하며 자동화 목표를 충족하지 못합니다." }
    }
  },
  {
    id: "exam11-509", number: 509, tags: ["Network ACL", "Application Load Balancer", "Amazon VPC", "DDoS Mitigation", "Security"],
    question: { en: "A company runs a two-tier image-processing application in two Availability Zones. An internet-facing ALB is in public subnets, and application EC2 instances are in private subnets. The application suddenly receives millions of malicious requests from a small set of IP addresses and becomes slow. What should a solutions architect recommend for an immediate mitigation?", ko: "회사에서 이미지 처리를 위한 2계층 애플리케이션을 운영하고 있습니다. 애플리케이션은 각각 1개의 퍼블릭 서브넷과 1개의 프라이빗 서브넷이 있는 2개의 가용 영역을 사용합니다. 웹 계층용 ALB(Application Load Balancer)는 퍼블릭 서브넷을 사용합니다. 애플리케이션 계층의 Amazon EC2 인스턴스는 프라이빗 서브넷을 사용합니다. 사용자는 응용 프로그램이 예상보다 느리게 실행되고 있다고 보고합니다. 웹 서버 로그 파일의 보안 감사 결과 애플리케이션이 소수의 IP 주소로부터 수백만 건의 불법 요청을 받고 있는 것으로 나타났습니다. 솔루션 설계자는 회사가 보다 영구적인 솔루션을 조사하는 동안 즉각적인 성능 문제를 해결해야 합니다. 이 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?" },
    options: [
      { k: "A", en: "Modify the web tier's inbound security group and add deny rules for the source IP addresses.", ko: "웹 계층에 대한 인바운드 보안 그룹을 수정합니다. 리소스를 소비하는 IP 주소에 대한 거부 규칙을 추가합니다." },
      { k: "B", en: "Modify the network ACL for the web-tier public subnets and add inbound deny rules for the source IP addresses.", ko: "웹 계층 서브넷에 대한 네트워크 ACL을 수정합니다. 리소스를 소비하는 IP 주소에 대한 인바운드 거부 규칙을 추가합니다." },
      { k: "C", en: "Modify the application tier's inbound security group and add deny rules for the source IP addresses.", ko: "애플리케이션 계층에 대한 인바운드 보안 그룹을 수정합니다. 리소스를 소비하는 IP 주소에 대한 거부 규칙을 추가합니다." },
      { k: "D", en: "Modify the network ACL for the application-tier private subnets and add inbound deny rules for the source IP addresses.", ko: "애플리케이션 계층 서브넷에 대한 네트워크 ACL을 수정합니다. 리소스를 소비하는 IP 주소에 대한 인바운드 거부 규칙을 추가합니다." }
    ],
    answer: ["B"],
    explanation: { en: "Network ACLs support explicit deny rules and can block the malicious source IPs at the public subnet before requests reach the ALB and application. Applying the rule at the web-tier entry point provides immediate relief.", ko: "네트워크 ACL은 명시적 거부 규칙을 지원하며 요청이 ALB와 애플리케이션에 도달하기 전에 퍼블릭 서브넷에서 악성 원본 IP를 차단할 수 있습니다. 웹 계층 진입점에 규칙을 적용하면 즉시 부하를 줄일 수 있습니다." },
    why_wrong: {
      A: { en: "Security groups contain allow rules only and cannot express an explicit deny for selected source IPs.", ko: "보안 그룹에는 허용 규칙만 있으며 선택한 원본 IP에 대한 명시적 거부를 표현할 수 없습니다." },
      C: { en: "Security groups cannot add deny rules, and filtering only at the application tier is later than the public entry point.", ko: "보안 그룹은 거부 규칙을 추가할 수 없으며 애플리케이션 계층에서만 필터링하면 퍼블릭 진입점보다 늦습니다." },
      D: { en: "Blocking at the private application subnets allows malicious requests to reach and consume ALB resources first.", ko: "프라이빗 애플리케이션 서브넷에서 차단하면 악성 요청이 먼저 ALB 리소스에 도달하여 소비하게 됩니다." }
    }
  },
  {
    id: "exam11-510", number: 510, tags: ["Inter-Region VPC Peering", "Security Groups", "Amazon VPC", "Routing", "Private Connectivity"],
    question: { en: "A global marketing company has applications in ap-southeast-2 and eu-west-1. An application in the eu-west-1 VPC must communicate securely with a database in the ap-southeast-2 VPC. Which network design meets these requirements?", ko: "글로벌 마케팅 회사에는 ap-southeast-2 지역 및 eu-west-1 지역에서 실행되는 애플리케이션이 있습니다. eu-west-1의 VPC에서 실행되는 애플리케이션은 ap-southeast-2의 VPC에서 실행되는 데이터베이스와 안전하게 통신해야 합니다. 이러한 요구 사항을 충족하는 네트워크 설계는 무엇입니까?" },
    options: [
      { k: "A", en: "Create inter-Region VPC peering and add an inbound application security-group rule that allows the database server's IP address.", ko: "eu-west-1 VPC와 ap-southeast-2 VPC 간에 VPC 피어링 연결을 생성합니다. ap-southeast-2 보안 그룹의 데이터베이스 서버 IP 주소에서 오는 트래픽을 허용하는 인바운드 규칙을 eu-west-1 애플리케이션 보안 그룹에 생성합니다." },
      { k: "B", en: "Create inter-Region VPC peering, update subnet route tables, and add a database security-group inbound rule that references the eu-west-1 application server's security-group ID.", ko: "ap-southeast-2 VPC와 eu-west-1 VPC 간에 VPC 피어링 연결을 구성합니다. 서브넷 경로 테이블을 업데이트합니다. eu-west-1에 있는 애플리케이션 서버의 보안 그룹 ID를 참조하는 ap-southeast-2 데이터베이스 보안 그룹에서 인바운드 규칙을 생성합니다." },
      { k: "C", en: "Create inter-Region VPC peering, update the subnet route tables, and add a database security-group inbound rule that allows traffic from the eu-west-1 application server IP addresses or CIDR block.", ko: "ap-southeast-2 VPC와 eu-west-1 VPC의 서브넷 라우팅 테이블 간에 VPC 피어링 연결을 구성합니다. ap-southeast-2 데이터베이스 보안 그룹에서 eu-west-1 애플리케이션 서버 IP 주소의 트래픽을 허용하는 인바운드 규칙을 생성합니다." },
      { k: "D", en: "Create a transit gateway peering connection between the VPCs and add a database security-group rule that references the eu-west-1 application security-group ID.", ko: "eu-west-1 VPC와 ap-southeast-2 VPC 간에 피어링 연결이 있는 전송 게이트웨이를 생성합니다. 전송 게이트웨이가 올바르게 피어링되고 라우팅이 구성되면 eu-west-1에 있는 애플리케이션 서버의 보안 그룹 ID를 참조하는 데이터베이스 보안 그룹에 인바운드 규칙을 생성합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Inter-Region VPC peering carries private traffic between the two VPCs after both route tables are updated. Security groups in different Regions cannot reference each other, so the database rule must allow the application IP addresses or VPC CIDR range.", ko: "리전 간 VPC 피어링은 양쪽 라우팅 테이블을 업데이트한 후 두 VPC 사이의 비공개 트래픽을 전달합니다. 서로 다른 리전의 보안 그룹은 상호 참조할 수 없으므로 데이터베이스 규칙은 애플리케이션 IP 주소 또는 VPC CIDR 범위를 허용해야 합니다." },
    why_wrong: {
      A: { en: "The rule is applied in the wrong direction; the database security group must allow traffic from the application source.", ko: "규칙 적용 방향이 잘못되었습니다. 데이터베이스 보안 그룹에서 애플리케이션 원본의 트래픽을 허용해야 합니다." },
      B: { en: "A security group cannot reference a peer VPC security group in a different AWS Region.", ko: "보안 그룹은 다른 AWS 리전의 피어 VPC 보안 그룹을 참조할 수 없습니다." },
      D: { en: "Transit Gateway peering is unnecessary for two VPCs, and security-group referencing does not work across Regions through it.", ko: "두 VPC만 연결하는 데 Transit Gateway 피어링은 불필요하며 이를 통해서도 리전 간 보안 그룹 참조는 작동하지 않습니다." }
    }
  },
  {
    id: "exam11-511", number: 511, tags: ["Amazon Aurora Serverless", "PostgreSQL", "Database", "Cost Optimization", "Development Environment"],
    question: { en: "A company develops software that uses a PostgreSQL database schema. The company must configure multiple development environments and databases for its developers. On average, each development environment is used for half of an 8-hour workday. Which solution meets these requirements most cost-effectively?", ko: "회사에서 PostgreSQL 데이터베이스 스키마를 사용하는 소프트웨어를 개발하고 있습니다. 회사는 회사 개발자를 위해 여러 개발 환경과 데이터베이스를 구성해야 합니다. 평균적으로 각 개발 환경은 8시간 근무 시간의 절반을 사용합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Configure each development environment with a dedicated Amazon Aurora PostgreSQL database.", ko: "자체 Amazon Aurora PostgreSQL 데이터베이스로 각 개발 환경 구성" },
      { k: "B", en: "Configure each development environment with a dedicated single-AZ Amazon RDS for PostgreSQL DB instance.", ko: "자체 Amazon RDS for PostgreSQL 단일 AZ DB 인스턴스로 각 개발 환경 구성" },
      { k: "C", en: "Configure each development environment with a dedicated on-demand Amazon Aurora PostgreSQL-compatible database.", ko: "자체 Amazon Aurora 온디맨드 PostgreSQL 호환 데이터베이스로 각 개발 환경 구성" },
      { k: "D", en: "Configure each development environment with a dedicated Amazon S3 bucket by using Amazon S3 Object Select.", ko: "Amazon S3 Object Select를 사용하여 자체 Amazon S3 버킷으로 각 개발 환경 구성" }
    ],
    answer: ["C"],
    explanation: { en: "Aurora Serverless provides an on-demand, automatically scaling Aurora PostgreSQL-compatible database. It can scale capacity down during idle periods, which fits development environments that are used only part of each day and avoids paying continuously for fixed database instances.", ko: "Aurora Serverless는 온디맨드 방식으로 자동 확장되는 Aurora PostgreSQL 호환 데이터베이스를 제공합니다. 유휴 시간에는 용량을 축소할 수 있으므로 하루 중 일부 시간만 사용하는 개발 환경에 적합하며 고정 DB 인스턴스 비용을 계속 지불하지 않아도 됩니다." },
    why_wrong: {
      A: { en: "A provisioned Aurora database remains allocated during idle hours and costs more for intermittently used development environments.", ko: "프로비저닝된 Aurora 데이터베이스는 유휴 시간에도 할당된 상태이므로 간헐적으로 사용하는 개발 환경에서 비용이 더 듭니다." },
      B: { en: "A provisioned RDS instance also incurs charges while the environment is idle and does not provide automatic on-demand capacity.", ko: "프로비저닝된 RDS 인스턴스도 환경이 유휴 상태일 때 비용이 발생하며 온디맨드 자동 용량 조절을 제공하지 않습니다." },
      D: { en: "Amazon S3 Object Select queries data in S3 objects; it cannot host a PostgreSQL-compatible relational database schema.", ko: "Amazon S3 Object Select는 S3 객체의 데이터를 조회하는 기능이며 PostgreSQL 호환 관계형 데이터베이스 스키마를 호스팅할 수 없습니다." }
    }
  },
  {
    id: "exam11-512", number: 512, tags: ["AWS Backup", "AWS Config", "AWS Organizations", "Tagging", "Operational Excellence"],
    question: { en: "A company uses AWS Organizations with resources tagged by account. The company also uses AWS Backup to back up AWS infrastructure resources and must ensure that all AWS resources are backed up. Which solution meets these requirements with the least operational overhead?", ko: "회사는 계정으로 태그가 지정된 리소스와 함께 AWS Organizations를 사용합니다. 이 회사는 또한 AWS Backup을 사용하여 AWS 인프라 리소스를 백업합니다. 회사는 모든 AWS 리소스를 백업해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS Config to identify all untagged resources. Programmatically apply tags to the identified resources, and use tags in the backup plan.", ko: "태그가 지정되지 않은 모든 리소스를 식별하려면 AWS Config를 사용하십시오. 프로그래밍 방식으로 식별된 리소스에 태그를 지정합니다. 백업 계획에서 태그를 사용합니다." },
      { k: "B", en: "Use AWS Config to identify all resources that are not running, and add those resources to a backup vault.", ko: "AWS Config를 사용하여 실행 중이 아닌 모든 리소스를 식별합니다. 해당 리소스를 백업 볼트에 추가합니다." },
      { k: "C", en: "Require every AWS account owner to review resources and identify which resources must be backed up.", ko: "모든 AWS 계정 소유자가 리소스를 검토하여 백업해야 하는 리소스를 식별하도록 요구합니다." },
      { k: "D", en: "Use Amazon Inspector to identify all resources that are not compliant.", ko: "Amazon Inspector를 사용하여 규정을 준수하지 않는 모든 리소스를 식별합니다." }
    ],
    answer: ["A"],
    explanation: { en: "AWS Config can continuously detect resources that lack the required backup tag. Automated remediation can apply the tag, and a tag-based AWS Backup plan can then include the resources with little ongoing administration.", ko: "AWS Config는 필수 백업 태그가 없는 리소스를 지속적으로 탐지할 수 있습니다. 자동 교정을 통해 태그를 적용하고 태그 기반 AWS Backup 계획으로 해당 리소스를 포함하면 지속적인 관리 작업을 최소화할 수 있습니다." },
    why_wrong: {
      B: { en: "A resource's running state does not determine whether it requires backup, and resources are assigned through backup plans rather than manually added to a vault.", ko: "리소스의 실행 상태는 백업 필요 여부를 결정하지 않으며 리소스는 볼트에 수동 추가하는 대신 백업 계획을 통해 할당합니다." },
      C: { en: "Manual reviews across all accounts create substantial recurring operational overhead and can miss resources.", ko: "모든 계정에서 수동 검토를 수행하면 반복적인 운영 부담이 크고 리소스를 누락할 수 있습니다." },
      D: { en: "Amazon Inspector assesses software vulnerabilities and unintended network exposure; it does not inventory missing backup tags.", ko: "Amazon Inspector는 소프트웨어 취약성과 의도하지 않은 네트워크 노출을 평가하며 누락된 백업 태그를 조사하는 서비스가 아닙니다." }
    }
  },
  {
    id: "exam11-513", number: 513, tags: ["Amazon S3", "AWS Lambda", "Image Processing", "Serverless", "Scalability", "High Availability"],
    question: { en: "A social media company wants users to upload images to an application hosted in AWS. The company needs a solution that automatically resizes images for multiple device types. Traffic is unpredictable throughout the day, and the solution must maximize scalability and availability. What should a solutions architect do?", ko: "소셜 미디어 회사는 사용자가 AWS 클라우드에서 호스팅되는 애플리케이션에 이미지를 업로드할 수 있도록 허용하려고 합니다. 회사는 이미지가 여러 장치 유형에 표시될 수 있도록 이미지 크기를 자동으로 조정하는 솔루션이 필요합니다. 애플리케이션은 하루 종일 예측할 수 없는 트래픽 패턴을 경험합니다. 회사는 확장성을 극대화하는 고가용성 솔루션을 찾고 있습니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Create a static website hosted on Amazon S3 that invokes an AWS Lambda function to resize images and stores the images in an S3 bucket.", ko: "이미지 크기를 조정하고 이미지를 Amazon S3 버킷에 저장하기 위해 AWS Lambda 함수를 호출하는 Amazon S3에서 호스팅되는 정적 웹 사이트를 생성합니다." },
      { k: "B", en: "Create a static website hosted on Amazon CloudFront that invokes AWS Step Functions to resize images and stores the images in an Amazon RDS database.", ko: "AWS Step Functions를 호출하여 이미지 크기를 조정하고 Amazon RDS 데이터베이스에 이미지를 저장하는 Amazon CloudFront에서 호스팅되는 정적 웹 사이트를 생성합니다." },
      { k: "C", en: "Create a dynamic website hosted on an Amazon EC2 web server. Run an image-resizing process on the EC2 instance and store images in Amazon S3.", ko: "Amazon EC2 인스턴스에서 실행되는 웹 서버에서 호스팅되는 동적 웹 사이트를 만듭니다. EC2 인스턴스에서 실행되는 프로세스를 구성하여 이미지 크기를 조정하고 Amazon S3 버킷에 이미지를 저장합니다." },
      { k: "D", en: "Create a dynamic website hosted on an Auto Scaling Amazon ECS cluster that receives resizing jobs from Amazon SQS. Run the image-resizing program on Amazon EC2 instances.", ko: "Amazon Simple Queue Service(Amazon SQS)에서 크기 조정 작업을 수신하는 자동 확장 Amazon Elastic Container Service(Amazon ECS) 클러스터에서 호스팅되는 동적 웹 사이트를 생성합니다. 크기 조정 작업을 처리하기 위해 Amazon EC2 인스턴스에서 실행되는 이미지 크기 조정 프로그램을 설정합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Amazon S3 provides highly available, scalable storage and static website hosting. S3 upload events can invoke Lambda to resize each image and store the derived images back in S3. Both services scale automatically for unpredictable demand with little administration.", ko: "Amazon S3는 고가용성 확장형 스토리지와 정적 웹 사이트 호스팅을 제공합니다. S3 업로드 이벤트로 Lambda를 호출하여 각 이미지의 크기를 조정하고 결과 이미지를 S3에 다시 저장할 수 있습니다. 두 서비스 모두 예측 불가능한 수요에 자동으로 확장되며 관리 부담이 적습니다." },
    why_wrong: {
      B: { en: "CloudFront is a content delivery network rather than a static website origin, and a relational database is inefficient storage for image objects.", ko: "CloudFront는 정적 웹 사이트 원본이 아닌 콘텐츠 전송 네트워크이며 관계형 데이터베이스는 이미지 객체 저장소로 비효율적입니다." },
      C: { en: "A single EC2-hosted process introduces capacity management and a possible single point of failure.", ko: "단일 EC2 호스팅 프로세스는 용량 관리가 필요하며 단일 장애 지점이 될 수 있습니다." },
      D: { en: "ECS, EC2, and SQS can scale, but require substantially more infrastructure and operations than the S3 and Lambda event-driven design.", ko: "ECS, EC2 및 SQS도 확장할 수 있지만 S3와 Lambda의 이벤트 기반 설계보다 훨씬 많은 인프라와 운영이 필요합니다." }
    }
  },
  {
    id: "exam11-514", number: 514, tags: ["Amazon EKS", "VPC Endpoint", "Private Endpoint", "Amazon VPC", "Containers"],
    question: { en: "A company is migrating a microservices application from Amazon EC2 instances to an Amazon EKS cluster. The EKS control plane has private endpoint access enabled and public endpoint access disabled. Data plane nodes must be placed in private subnets, but the company receives an error that the nodes cannot join the cluster. Which solution allows the nodes to join?", ko: "회사는 Amazon EC2 인스턴스에서 마이크로서비스 애플리케이션을 실행하고 있습니다. 이 회사는 확장성을 위해 애플리케이션을 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터로 마이그레이션하려고 합니다. 회사는 보안 규정 준수를 유지하기 위해 엔드포인트 프라이빗 액세스를 true로 설정하고 엔드포인트 퍼블릭 액세스를 false로 설정하여 Amazon EKS 제어 플레인을 구성해야 합니다. 회사는 또한 사설 서브넷에 데이터 플레인을 배치해야 합니다. 그러나 회사는 노드가 클러스터에 가입할 수 없기 때문에 오류 알림을 받았습니다. 노드가 클러스터에 가입하도록 허용하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Grant the required permissions to the AmazonEKSNodeRole IAM role in AWS IAM.", ko: "AWS Identity and Access Management(IAM)에서 필요한 권한을 AmazonEKSNodeRole IAM 역할에 부여합니다." },
      { k: "B", en: "Create interface VPC endpoints so that the nodes can access the control plane.", ko: "노드가 컨트롤 플레인에 액세스할 수 있도록 인터페이스 VPC 엔드포인트를 생성합니다." },
      { k: "C", en: "Re-create the nodes in public subnets and restrict the security groups for the EC2 nodes.", ko: "퍼블릭 서브넷에서 노드를 재생성합니다. EC2 노드에 대한 보안 그룹을 제한합니다." },
      { k: "D", en: "Allow outbound traffic from the nodes' security group.", ko: "노드의 보안 그룹에서 아웃바운드 트래픽을 허용합니다." }
    ],
    answer: ["B"],
    explanation: { en: "With a private-only EKS API endpoint, node-to-control-plane traffic must remain inside the VPC. Interface VPC endpoints provide private connectivity to the AWS services the private nodes need so they can bootstrap and join the cluster without public internet access.", ko: "프라이빗 전용 EKS API 엔드포인트에서는 노드와 제어 플레인 사이의 트래픽이 VPC 내부에 있어야 합니다. 인터페이스 VPC 엔드포인트는 프라이빗 노드가 부트스트랩하고 퍼블릭 인터넷 없이 클러스터에 가입하는 데 필요한 AWS 서비스로의 비공개 연결을 제공합니다." },
    why_wrong: {
      A: { en: "IAM permissions alone do not establish the network path required to reach a private-only control-plane endpoint.", ko: "IAM 권한만으로는 프라이빗 전용 제어 플레인 엔드포인트에 도달하는 네트워크 경로를 만들 수 없습니다." },
      C: { en: "Moving nodes to public subnets conflicts with the requirement to place the data plane in private subnets.", ko: "노드를 퍼블릭 서브넷으로 이동하면 데이터 플레인을 프라이빗 서브넷에 두어야 한다는 요구 사항을 위반합니다." },
      D: { en: "Permitting outbound traffic does not supply a reachable private service endpoint by itself.", ko: "아웃바운드 트래픽 허용만으로는 도달 가능한 프라이빗 서비스 엔드포인트가 생기지 않습니다." }
    }
  },
  {
    id: "exam11-515", number: 515, tags: ["Amazon Redshift", "Data Warehouse", "Encryption", "Scalability", "Cost Optimization", "Choose three"],
    question: { en: "A company is migrating an on-premises application to AWS and wants to use Amazon Redshift. Which three use cases are appropriate for Amazon Redshift? (Choose three.)", ko: "회사에서 온프레미스 애플리케이션을 AWS로 마이그레이션하고 있습니다. 회사는 Amazon Redshift를 솔루션으로 사용하려고 합니다. 이 시나리오에서 Amazon Redshift에 적합한 사용 사례는 무엇입니까? (3개 선택)" },
    options: [
      { k: "A", en: "Data API support for an existing containerized event-driven application to access data", ko: "기존의 컨테이너화된 이벤트 기반 애플리케이션으로 데이터에 액세스하기 위한 데이터 API 지원" },
      { k: "B", en: "Support for client-side and server-side encryption", ko: "클라이언트 측 및 서버 측 암호화 지원" },
      { k: "C", en: "Build analytics workloads only during specified times when the application is not active", ko: "지정된 시간 동안 애플리케이션이 활성 상태가 아닐 때 분석 워크로드 구축" },
      { k: "D", en: "Data caching to reduce the load on a backend database", ko: "백엔드 데이터베이스에 대한 부담을 줄이기 위한 데이터 캐싱" },
      { k: "E", en: "Scale globally to support petabytes of data and tens of thousands of queries per minute", ko: "페타바이트 규모의 데이터와 분당 수천만 건의 요청을 지원하도록 전 세계적으로 확장" },
      { k: "F", en: "Create a read replica of the cluster by using the AWS Management Console", ko: "AWS Management Console을 사용하여 클러스터의 보조 복제본 생성" }
    ],
    answer: ["B", "C", "E"],
    explanation: { en: "Amazon Redshift supports encryption for data protection, can pause and resume provisioned clusters for scheduled analytics periods, and is designed to scale data-warehouse analytics to petabyte-scale datasets and very high query volumes.", ko: "Amazon Redshift는 데이터 보호를 위한 암호화를 지원하고 예약된 분석 시간에 프로비저닝된 클러스터를 일시 중지·재개할 수 있으며 페타바이트 규모 데이터 세트와 매우 많은 쿼리의 데이터 웨어하우스 분석을 처리하도록 설계되었습니다." },
    why_wrong: {
      A: { en: "The described operational event-driven application access pattern is not the primary data-warehouse use case selected in this question.", ko: "설명된 운영형 이벤트 기반 애플리케이션 액세스 패턴은 이 문제에서 선택하는 주요 데이터 웨어하우스 사용 사례가 아닙니다." },
      D: { en: "Redshift is an analytical data warehouse, not an in-memory cache for reducing transactional database load.", ko: "Redshift는 분석용 데이터 웨어하우스이며 트랜잭션 데이터베이스 부하를 줄이는 인메모리 캐시가 아닙니다." },
      F: { en: "Amazon Redshift does not provide database-style read replicas; snapshots and concurrency scaling address different requirements.", ko: "Amazon Redshift는 데이터베이스 방식의 읽기 전용 복제본을 제공하지 않으며 스냅샷과 동시성 확장은 서로 다른 요구를 해결합니다." }
    }
  },
  {
    id: "exam11-516", number: 516, tags: ["Amazon API Gateway", "AWS Lambda", "Provisioned Concurrency", "Serverless", "Performance", "Cost Optimization"],
    question: { en: "A company provides an API that customers use to search financial information. It expects more requests during peak times of the year and requires consistently low response latency while providing compute hosting for the API. Which solution meets these requirements with the least operational overhead?", ko: "회사는 고객이 재무 정보를 검색할 수 있도록 고객에게 API 인터페이스를 제공합니다. 회사는 연중 최대 사용 시간에 더 많은 수의 요청을 예상합니다. 회사는 API가 고객 만족을 보장하기 위해 낮은 대기 시간으로 일관되게 응답하도록 요구합니다. 회사는 API에 컴퓨팅 호스트를 제공해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use an Application Load Balancer and Amazon ECS.", ko: "Application Load Balancer 및 Amazon Elastic Container Service(Amazon ECS)를 사용합니다." },
      { k: "B", en: "Use Amazon API Gateway and AWS Lambda with provisioned concurrency.", ko: "프로비저닝된 동시성과 함께 Amazon API Gateway 및 AWS Lambda 함수를 사용합니다." },
      { k: "C", en: "Use an Application Load Balancer and an Amazon EKS cluster.", ko: "Application Load Balancer 및 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 사용합니다." },
      { k: "D", en: "Use Amazon API Gateway and AWS Lambda with reserved concurrency.", ko: "예약된 동시성과 함께 Amazon API Gateway 및 AWS Lambda 함수를 사용합니다." }
    ],
    answer: ["B"],
    explanation: { en: "API Gateway and Lambda provide managed, automatically scaling API compute. Provisioned concurrency keeps initialized Lambda execution environments ready, reducing cold starts and providing consistent low latency during predictable peaks.", ko: "API Gateway와 Lambda는 관리형 자동 확장 API 컴퓨팅을 제공합니다. 프로비저닝된 동시성은 초기화된 Lambda 실행 환경을 준비 상태로 유지하여 콜드 스타트를 줄이고 예측 가능한 최대 수요에도 일관된 낮은 지연 시간을 제공합니다." },
    why_wrong: {
      A: { en: "ECS requires more cluster, service, and scaling administration than the serverless option.", ko: "ECS는 서버리스 옵션보다 클러스터, 서비스 및 확장 관리가 더 많이 필요합니다." },
      C: { en: "EKS adds Kubernetes cluster management and is not the lowest-overhead solution for this API.", ko: "EKS는 Kubernetes 클러스터 관리를 추가하므로 이 API에 가장 운영 부담이 적은 솔루션이 아닙니다." },
      D: { en: "Reserved concurrency limits or reserves capacity for a function but does not keep execution environments pre-initialized to prevent cold starts.", ko: "예약된 동시성은 함수 용량을 제한하거나 예약하지만 콜드 스타트를 방지하도록 실행 환경을 미리 초기화해 두지는 않습니다." }
    }
  },
  {
    id: "exam11-517", number: 517, tags: ["AWS Systems Manager", "Session Manager", "Amazon S3", "Logging", "Operational Excellence"],
    question: { en: "A company wants to send all AWS Systems Manager Session Manager logs to an Amazon S3 bucket for retention. Which solution meets this requirement with the most operational efficiency?", ko: "한 회사에서 보관 목적으로 모든 AWS Systems Manager Session Manager 로그를 Amazon S3 버킷으로 보내려고 합니다. 어떤 솔루션이 가장 운영 효율성이 높은 이 요구 사항을 충족합니까?" },
    options: [
      { k: "A", en: "Enable S3 logging in the Systems Manager console and select the S3 bucket to receive session data.", ko: "Systems Manager 콘솔에서 S3 로깅을 활성화합니다. 세션 데이터를 보낼 S3 버킷을 선택합니다." },
      { k: "B", en: "Install the Amazon CloudWatch agent, publish all logs to a CloudWatch Logs group, and export the group to S3 for retention.", ko: "Amazon CloudWatch 에이전트를 설치합니다. 모든 로그를 CloudWatch 로그 그룹에 표시합니다. 보관 목적으로 그룹에서 S3 버킷으로 로그를 내보냅니다." },
      { k: "C", en: "Create a Systems Manager document that uploads all server logs to a central S3 bucket and use EventBridge to run it daily on every server.", ko: "모든 서버 로그를 중앙 S3 버킷에 업로드할 Systems Manager 문서를 생성합니다. Amazon EventBridge를 사용하여 매일 계정에 있는 모든 서버에 대해 Systems Manager 문서를 실행하십시오." },
      { k: "D", en: "Install the CloudWatch agent, publish logs to CloudWatch Logs, and create a subscription to Kinesis Data Firehose with Amazon S3 as the destination.", ko: "Amazon CloudWatch 에이전트를 설치합니다. 모든 로그를 CloudWatch 로그 그룹에 표시합니다. 수신 로그 이벤트를 Amazon Kinesis Data Firehose 전송 스트림으로 푸시하는 CloudWatch 로그 구독을 생성합니다. Amazon S3를 대상으로 설정합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Session Manager natively supports logging session data directly to an S3 bucket. Enabling the setting and selecting the destination bucket is the simplest solution and avoids additional agents, schedules, pipelines, and export jobs.", ko: "Session Manager는 세션 데이터를 S3 버킷에 직접 기록하는 기능을 기본 지원합니다. 설정을 활성화하고 대상 버킷을 선택하는 방식이 가장 간단하며 추가 에이전트, 일정, 파이프라인 및 내보내기 작업이 필요하지 않습니다." },
    why_wrong: {
      B: { en: "This adds an agent, a CloudWatch Logs dependency, and an export process when Session Manager can log directly to S3.", ko: "Session Manager가 S3에 직접 기록할 수 있는데도 에이전트, CloudWatch Logs 종속성 및 내보내기 절차를 추가합니다." },
      C: { en: "A custom document and daily schedule are unnecessary and would not provide the native per-session logging behavior.", ko: "사용자 지정 문서와 일일 일정은 불필요하며 기본 세션별 로깅 동작도 제공하지 않습니다." },
      D: { en: "The CloudWatch Logs and Firehose pipeline is more complex and costly than direct Session Manager S3 logging.", ko: "CloudWatch Logs와 Firehose 파이프라인은 Session Manager의 직접 S3 로깅보다 복잡하고 비용이 더 듭니다." }
    }
  },
  {
    id: "exam11-518", number: 518, tags: ["Amazon RDS", "Storage Autoscaling", "MySQL", "High Availability", "Operational Excellence"],
    question: { en: "An application uses an Amazon RDS for MySQL DB instance. The database is running out of disk space, and a solutions architect wants to increase disk space without downtime and with the least effort. Which solution meets these requirements?", ko: "애플리케이션은 Amazon RDS MySQL DB 인스턴스를 사용합니다. RDS 데이터베이스의 디스크 공간이 부족해지고 있습니다. 솔루션 설계자는 다운타임 없이 디스크 공간을 늘리고 싶어합니다. 최소한의 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Enable storage autoscaling for the RDS DB instance.", ko: "RDS에서 스토리지 자동 확장 활성화" },
      { k: "B", en: "Increase the RDS DB instance class.", ko: "RDS 데이터베이스 인스턴스 크기 늘리기" },
      { k: "C", en: "Change the RDS DB instance storage type to Provisioned IOPS.", ko: "RDS 데이터베이스 인스턴스 스토리지 유형을 프로비저닝된 IOPS로 변경" },
      { k: "D", en: "Back up the RDS database, increase storage, restore the database, and stop the previous instance.", ko: "RDS 데이터베이스 백업, 저장 용량 증가, 데이터베이스 복원 및 이전 인스턴스 중지" }
    ],
    answer: ["A"],
    explanation: { en: "RDS storage autoscaling automatically increases allocated storage when the database approaches its configured threshold. It operates without requiring a manual restore or database outage and has the least administrative effort.", ko: "RDS 스토리지 자동 확장은 데이터베이스가 구성된 임계값에 가까워질 때 할당 스토리지를 자동으로 늘립니다. 수동 복원이나 데이터베이스 중단 없이 작동하므로 관리 노력이 가장 적습니다." },
    why_wrong: {
      B: { en: "Changing the DB instance class changes compute and memory capacity, not the amount of allocated storage.", ko: "DB 인스턴스 클래스 변경은 컴퓨팅과 메모리 용량을 바꾸며 할당 스토리지 크기를 늘리지 않습니다." },
      C: { en: "Provisioned IOPS changes the storage performance characteristic and does not by itself solve automatic capacity growth.", ko: "프로비저닝된 IOPS는 스토리지 성능 특성을 변경하며 자동 용량 증가 문제를 자체적으로 해결하지 않습니다." },
      D: { en: "Backup and restore introduces unnecessary work and downtime risk compared with online storage autoscaling.", ko: "백업 및 복원은 온라인 스토리지 자동 확장과 비교해 불필요한 작업과 중단 위험을 추가합니다." }
    }
  },
  {
    id: "exam11-519", number: 519, tags: ["AWS Service Catalog", "Self-Service", "Governance", "CloudFormation", "Multi-Account"],
    question: { en: "A consulting company provides professional services to customers worldwide. It provides solutions and tools that customers can use to quickly collect and analyze data in AWS. The company must centrally manage and deploy a common portfolio of approved self-service solutions and tools for customers. Which solution meets these requirements?", ko: "컨설팅 회사는 전 세계 고객에게 전문 서비스를 제공합니다. 이 회사는 고객이 AWS에서 데이터를 신속하게 수집하고 분석할 수 있는 솔루션과 도구를 제공합니다. 회사는 고객이 셀프 서비스 목적으로 사용할 공통 솔루션 및 도구 집합을 중앙에서 관리하고 배포해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create AWS CloudFormation templates for the customers.", ko: "고객을 위한 AWS CloudFormation 템플릿을 생성합니다." },
      { k: "B", en: "Create AWS Service Catalog products for the customers.", ko: "고객을 위한 AWS Service Catalog 제품을 만듭니다." },
      { k: "C", en: "Create AWS Systems Manager templates for the customers.", ko: "고객을 위한 AWS Systems Manager 템플릿을 생성합니다." },
      { k: "D", en: "Create AWS Config items for the customers.", ko: "고객을 위한 AWS Config 항목을 생성합니다." }
    ],
    answer: ["B"],
    explanation: { en: "AWS Service Catalog lets an organization create centrally governed portfolios of approved products and share them with accounts or customers for controlled self-service provisioning.", ko: "AWS Service Catalog를 사용하면 승인된 제품의 포트폴리오를 중앙에서 관리하고 계정이나 고객과 공유하여 통제된 셀프 서비스 프로비저닝을 제공할 수 있습니다." },
    why_wrong: {
      A: { en: "CloudFormation templates define infrastructure, but by themselves do not provide a centrally governed self-service product portfolio.", ko: "CloudFormation 템플릿은 인프라를 정의하지만 그 자체로 중앙 관리되는 셀프 서비스 제품 포트폴리오를 제공하지 않습니다." },
      C: { en: "Systems Manager automates operational management and does not provide the required catalog of approved customer products.", ko: "Systems Manager는 운영 관리를 자동화하며 필요한 승인 고객 제품 카탈로그를 제공하지 않습니다." },
      D: { en: "AWS Config evaluates resource configuration and compliance; it is not a product distribution service.", ko: "AWS Config는 리소스 구성과 규정 준수를 평가하며 제품 배포 서비스가 아닙니다." }
    }
  },
  {
    id: "exam11-520", number: 520, tags: ["Amazon DynamoDB", "On-Demand Capacity", "DynamoDB Standard", "Cost Optimization", "Scalability"],
    question: { en: "A company is designing a new web application that will run on Amazon EC2 instances and use Amazon DynamoDB for backend data storage. Application traffic is unpredictable, database reads and writes are expected to range from moderate to high, and the application must scale with traffic. Which DynamoDB table configuration meets these requirements most cost-effectively?", ko: "한 회사에서 Amazon EC2 인스턴스에서 실행할 새 웹 애플리케이션을 설계하고 있습니다. 애플리케이션은 백엔드 데이터 스토리지에 Amazon DynamoDB를 사용합니다. 애플리케이션 트래픽은 예측할 수 없습니다. 회사는 데이터베이스에 대한 응용 프로그램 읽기 및 쓰기 처리량이 보통에서 높을 것으로 예상합니다. 회사는 애플리케이션 트래픽에 대응하여 확장해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 DynamoDB 테이블 구성은 무엇입니까?" },
    options: [
      { k: "A", en: "Use the DynamoDB Standard table class with provisioned read and write capacity. Set DynamoDB Auto Scaling to a defined maximum capacity.", ko: "DynamoDB 표준 테이블 클래스를 사용하여 프로비저닝된 읽기 및 쓰기로 DynamoDB를 구성합니다. DynamoDB Auto Scaling을 정의된 최대 용량으로 설정합니다." },
      { k: "B", en: "Use the DynamoDB Standard table class with on-demand capacity mode.", ko: "DynamoDB Standard 테이블 클래스를 사용하여 온디맨드 모드에서 DynamoDB를 구성합니다." },
      { k: "C", en: "Use the DynamoDB Standard-Infrequent Access table class with provisioned read and write capacity. Set DynamoDB Auto Scaling to a defined maximum capacity.", ko: "DynamoDB Standard Infrequent Access(DynamoDB Standard-IA) 테이블 클래스를 사용하여 프로비저닝된 읽기 및 쓰기로 DynamoDB를 구성합니다. DynamoDB Auto Scaling을 정의된 최대 용량으로 설정합니다." },
      { k: "D", en: "Use the DynamoDB Standard-Infrequent Access table class with on-demand capacity mode.", ko: "DynamoDB Standard Infrequent Access(DynamoDB Standard-IA) 테이블 클래스를 사용하여 온디맨드 모드에서 DynamoDB를 구성합니다." }
    ],
    answer: ["B"],
    explanation: { en: "On-demand capacity automatically accommodates unpredictable request traffic without capacity planning. The Standard table class is suited to moderate-to-high access frequency, whereas Standard-IA is optimized for tables whose storage is accessed infrequently.", ko: "온디맨드 용량은 용량 계획 없이 예측 불가능한 요청 트래픽을 자동으로 처리합니다. Standard 테이블 클래스는 중간에서 높은 액세스 빈도에 적합하며 Standard-IA는 저장 데이터에 드물게 액세스하는 테이블에 최적화되어 있습니다." },
    why_wrong: {
      A: { en: "Provisioned capacity requires capacity planning and a configured maximum can constrain an unpredictable spike.", ko: "프로비저닝된 용량은 용량 계획이 필요하며 구성된 최대값은 예측 불가능한 급증을 제한할 수 있습니다." },
      C: { en: "Standard-IA has higher request charges and is unsuitable for moderate-to-high access, while provisioned capacity adds planning overhead.", ko: "Standard-IA는 요청 비용이 더 높아 중간에서 높은 액세스에 부적합하며 프로비저닝된 용량은 계획 부담을 추가합니다." },
      D: { en: "On-demand mode handles unpredictability, but Standard-IA is not cost-effective for the stated moderate-to-high read and write rate.", ko: "온디맨드 모드는 예측 불가능성을 처리하지만 Standard-IA는 명시된 중간에서 높은 읽기·쓰기 빈도에 비용 효율적이지 않습니다." }
    }
  },
  {
    id: "exam11-521", number: 521, tags: ["AWS IAM", "Cross-Account Access", "IAM Role", "AWS STS", "Amazon DynamoDB", "Security"],
    question: { en: "A retail company has several businesses. Each business IT team manages its own AWS account, and every account is part of an organization in AWS Organizations. Each team monitors inventory in DynamoDB tables in its own account. A central inventory reporting application runs in a shared AWS account and must read items from every team's DynamoDB tables. Which option meets these requirements most securely?", ko: "소매 회사에는 여러 비즈니스가 있습니다. 각 비즈니스의 IT 팀은 자체 AWS 계정을 관리합니다. 각 팀 계정은 AWS Organizations에서 조직의 일부입니다. 각 팀은 팀 자체 AWS 계정의 Amazon DynamoDB 테이블에서 제품 재고 수준을 모니터링합니다. 회사는 공유 AWS 계정에 중앙 재고 보고 애플리케이션을 배포하고 있습니다. 애플리케이션은 모든 팀의 DynamoDB 테이블에서 항목을 읽을 수 있어야 합니다. 이러한 요구 사항을 가장 안전하게 충족하는 인증 옵션은 무엇입니까?" },
    options: [
      { k: "A", en: "Integrate DynamoDB with AWS Secrets Manager in the inventory application account. Store a password in Secrets Manager, configure the application to authenticate to the tables, and rotate the secret every 30 days.", ko: "인벤토리 애플리케이션 계정에서 DynamoDB를 AWS Secrets Manager와 통합합니다. Secrets Manager의 올바른 암호를 사용하여 DynamoDB 테이블을 인증하고 읽도록 애플리케이션을 구성합니다. 30일마다 비밀 순환을 예약합니다." },
      { k: "B", en: "Create an IAM user with programmatic access in every business account. Configure the application with each user's access key ID and secret access key, and manually replace the keys every 30 days.", ko: "모든 비즈니스 계정에서 프로그래밍 방식 액세스 권한이 있는 IAM 사용자를 생성합니다. 올바른 IAM 사용자 액세스 키 ID와 보안 액세스 키를 사용하여 DynamoDB 테이블을 인증하고 읽도록 애플리케이션을 구성합니다. 30일마다 IAM 액세스 키를 수동으로 교체합니다." },
      { k: "C", en: "In each business account, create a BU_ROLE with permission to read the DynamoDB tables and a trust policy for a designated role in the inventory application account. Create APP_ROLE in the inventory account with permission to call STS AssumeRole. Configure the application to use APP_ROLE and assume each BU_ROLE.", ko: "모든 비즈니스 계정에서 DynamoDB 테이블에 대한 역할 액세스 권한을 부여하는 정책과 인벤토리 애플리케이션 계정의 특정 역할을 신뢰하는 신뢰 정책을 사용하여 BU_ROLE이라는 IAM 역할을 생성합니다. 인벤토리 계정에서 STS AssumeRole API 작업에 대한 액세스를 허용하는 APP_ROLE이라는 역할을 생성합니다. APP_ROLE을 사용하도록 애플리케이션을 구성하고 DynamoDB 테이블을 읽기 위해 교차 계정 역할 BU_ROLE을 수임합니다." },
      { k: "D", en: "Integrate DynamoDB with AWS Certificate Manager. Create identity certificates for DynamoDB and configure the application to authenticate with the certificates.", ko: "DynamoDB를 AWS Certificate Manager(ACM)와 통합합니다. DynamoDB를 인증하기 위해 ID 인증서를 생성합니다. 올바른 인증서를 사용하여 DynamoDB 테이블을 인증하고 읽도록 애플리케이션을 구성합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Cross-account IAM roles provide temporary STS credentials and let each business account grant only DynamoDB read permissions to a trusted application role. This avoids distributing long-lived credentials and follows least privilege.", ko: "교차 계정 IAM 역할은 임시 STS 자격 증명을 제공하며 각 비즈니스 계정이 신뢰하는 애플리케이션 역할에 DynamoDB 읽기 권한만 부여하도록 합니다. 장기 자격 증명을 배포하지 않으면서 최소 권한 원칙을 따릅니다." },
    why_wrong: {
      A: { en: "DynamoDB API access uses IAM authorization, not a database password stored in Secrets Manager.", ko: "DynamoDB API 액세스는 Secrets Manager에 저장한 데이터베이스 암호가 아니라 IAM 권한 부여를 사용합니다." },
      B: { en: "Long-lived IAM user keys in every account increase exposure and create recurring manual rotation work.", ko: "각 계정의 장기 IAM 사용자 키는 노출 위험을 높이고 반복적인 수동 교체 작업을 만듭니다." },
      D: { en: "ACM certificates secure TLS endpoints and do not authorize DynamoDB table operations.", ko: "ACM 인증서는 TLS 엔드포인트를 보호하며 DynamoDB 테이블 작업 권한을 부여하지 않습니다." }
    }
  },
  {
    id: "exam11-522", number: 522, tags: ["Amazon EKS", "Horizontal Pod Autoscaler", "Kubernetes Metrics Server", "Cluster Autoscaler", "Scalability", "Choose two"],
    question: { en: "A company runs container applications on Amazon EKS. Workload is inconsistent throughout the day, and the company wants EKS to scale in and out with workload changes. Which two steps meet these requirements with the least operational overhead? (Choose two.)", ko: "회사는 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용하여 컨테이너 애플리케이션을 실행합니다. 회사의 작업량은 하루 종일 일정하지 않습니다. 회사는 Amazon EKS가 워크로드에 따라 확장 및 축소되기를 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Use an AWS Lambda function to adjust the size of the EKS cluster.", ko: "AWS Lambda 함수를 사용하여 EKS 클러스터의 크기를 조정합니다." },
      { k: "B", en: "Use Kubernetes Metrics Server to enable the Horizontal Pod Autoscaler.", ko: "Kubernetes Metrics Server를 사용하여 수평적 포드 자동 확장을 활성화합니다." },
      { k: "C", en: "Use Kubernetes Cluster Autoscaler to manage the number of cluster nodes.", ko: "Kubernetes Cluster Autoscaler를 사용하여 클러스터의 노드 수를 관리합니다." },
      { k: "D", en: "Use Amazon API Gateway to connect to Amazon EKS.", ko: "Amazon API Gateway를 사용하여 Amazon EKS에 연결합니다." },
      { k: "E", en: "Use AWS App Mesh to observe network activity.", ko: "AWS App Mesh를 사용하여 네트워크 활동을 관찰합니다." }
    ],
    answer: ["B", "C"],
    explanation: { en: "Metrics Server supplies resource metrics to the Horizontal Pod Autoscaler, which changes the number of pods. Cluster Autoscaler adjusts the worker-node count when pods cannot be scheduled or nodes are underused. Together they scale both workload and infrastructure automatically.", ko: "Metrics Server는 포드 수를 조절하는 Horizontal Pod Autoscaler에 리소스 지표를 제공합니다. Cluster Autoscaler는 포드를 예약할 수 없거나 노드 사용률이 낮을 때 작업자 노드 수를 조절합니다. 두 기능을 함께 사용하면 워크로드와 인프라를 자동으로 확장·축소할 수 있습니다." },
    why_wrong: {
      A: { en: "A custom Lambda scaling function duplicates native Kubernetes autoscaling and increases maintenance.", ko: "사용자 지정 Lambda 확장 함수는 Kubernetes 기본 자동 확장 기능을 중복 구현하며 유지 관리 부담을 높입니다." },
      D: { en: "API Gateway exposes APIs but does not scale EKS pods or worker nodes.", ko: "API Gateway는 API를 노출하지만 EKS 포드나 작업자 노드를 확장하지 않습니다." },
      E: { en: "App Mesh provides service-mesh traffic visibility and control, not compute autoscaling.", ko: "App Mesh는 서비스 메시 트래픽 가시성과 제어를 제공하며 컴퓨팅 자동 확장 기능이 아닙니다." }
    }
  },
  {
    id: "exam11-523", number: 523, tags: ["Amazon Athena", "Federated Query", "Amazon DynamoDB", "Serverless", "Operational Excellence"],
    question: { en: "A company runs a microservices-based serverless web application. The application must search data across multiple Amazon DynamoDB tables. A solutions architect must provide this capability without affecting the application's baseline performance. Which solution meets these requirements in the most operationally efficient way?", ko: "회사에서 마이크로서비스 기반 서버리스 웹 애플리케이션을 실행합니다. 애플리케이션은 여러 Amazon DynamoDB 테이블에서 데이터를 검색할 수 있어야 합니다. 솔루션 설계자는 애플리케이션의 기본 성능에 영향을 주지 않고 데이터를 검색할 수 있는 기능을 애플리케이션에 제공해야 합니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use an AWS AppSync pipeline resolver.", ko: "AWS AppSync 파이프라인 해석기" },
      { k: "B", en: "Use Amazon CloudFront with Lambda@Edge.", ko: "Lambda@Edge 기능이 있는 Amazon CloudFront" },
      { k: "C", en: "Use edge-optimized Amazon API Gateway with an AWS Lambda function.", ko: "AWS Lambda 함수를 사용하는 엣지 최적화 Amazon API Gateway" },
      { k: "D", en: "Use Amazon Athena Federated Query with a DynamoDB connector.", ko: "DynamoDB 커넥터를 사용한 Amazon Athena Federated Query" }
    ],
    answer: ["D"],
    explanation: { en: "Athena Federated Query can query data in DynamoDB through a connector without copying it into a separate store. It is serverless, supports SQL searches across sources, and isolates analytical query work from the application code.", ko: "Athena Federated Query는 데이터를 별도 저장소로 복사하지 않고 커넥터를 통해 DynamoDB 데이터를 조회할 수 있습니다. 서버리스 방식으로 여러 소스에 SQL 검색을 제공하며 분석 쿼리 작업을 애플리케이션 코드에서 분리합니다." },
    why_wrong: {
      A: { en: "AppSync resolvers are designed for GraphQL request resolution and would require application-specific orchestration across the tables.", ko: "AppSync 해석기는 GraphQL 요청 해결용이며 여러 테이블을 대상으로 애플리케이션별 오케스트레이션을 구현해야 합니다." },
      B: { en: "Lambda@Edge customizes CDN requests and responses; it is not a federated DynamoDB query service.", ko: "Lambda@Edge는 CDN 요청과 응답을 사용자 지정하며 DynamoDB 연합 쿼리 서비스가 아닙니다." },
      C: { en: "API Gateway and Lambda require custom query code and add execution load rather than providing a managed federated query layer.", ko: "API Gateway와 Lambda는 사용자 지정 쿼리 코드가 필요하고 관리형 연합 쿼리 계층 대신 실행 부하를 추가합니다." }
    }
  },
  {
    id: "exam11-524", number: 524, tags: ["Amazon Athena", "AWS CloudTrail", "IAM", "Troubleshooting", "Security", "Operational Excellence"],
    question: { en: "A company wants to analyze and troubleshoot access-denied and unauthorized errors related to IAM permissions. The company has enabled AWS CloudTrail. Which solution meets these requirements with the least effort?", ko: "회사에서 IAM 권한과 관련된 액세스 거부 오류 및 무단 오류를 분석하고 문제를 해결하려고 합니다. 회사에서 AWS CloudTrail을 켰습니다. 최소한의 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS Glue and write a custom script to query CloudTrail logs for errors.", ko: "AWS Glue를 사용하고 사용자 지정 스크립트를 작성하여 오류에 대한 CloudTrail 로그를 쿼리합니다." },
      { k: "B", en: "Use AWS Batch and write a custom script to query CloudTrail logs for errors.", ko: "AWS Batch를 사용하고 사용자 지정 스크립트를 작성하여 오류에 대한 CloudTrail 로그를 쿼리합니다." },
      { k: "C", en: "Search the CloudTrail logs with Amazon Athena queries to identify the errors.", ko: "Amazon Athena 쿼리로 CloudTrail 로그를 검색하여 오류를 식별합니다." },
      { k: "D", en: "Search CloudTrail logs with Amazon QuickSight and create a dashboard that identifies errors.", ko: "Amazon QuickSight로 CloudTrail 로그를 검색합니다. 오류를 식별하는 대시보드를 만듭니다." }
    ],
    answer: ["C"],
    explanation: { en: "CloudTrail log files stored in Amazon S3 can be queried directly with Athena by using SQL. Filtering errorCode values such as AccessDenied or UnauthorizedOperation provides fast investigation without custom processing infrastructure.", ko: "Amazon S3에 저장된 CloudTrail 로그 파일은 Athena에서 SQL로 직접 조회할 수 있습니다. AccessDenied 또는 UnauthorizedOperation 같은 errorCode 값을 필터링하면 사용자 지정 처리 인프라 없이 빠르게 조사할 수 있습니다." },
    why_wrong: {
      A: { en: "Glue and a custom script add ETL development and operations that are unnecessary for querying CloudTrail files.", ko: "Glue와 사용자 지정 스크립트는 CloudTrail 파일 조회에 불필요한 ETL 개발과 운영을 추가합니다." },
      B: { en: "AWS Batch is for batch compute workloads and requires custom code and job infrastructure.", ko: "AWS Batch는 배치 컴퓨팅 워크로드용이며 사용자 지정 코드와 작업 인프라가 필요합니다." },
      D: { en: "QuickSight is a visualization service and requires a queryable dataset; it is more work than directly investigating with Athena.", ko: "QuickSight는 시각화 서비스로 조회 가능한 데이터 세트가 필요하므로 Athena로 직접 조사하는 것보다 작업이 많습니다." }
    }
  },
  {
    id: "exam11-525", number: 525, tags: ["AWS Cost Explorer", "Cost Explorer API", "Cost Management", "Forecasting", "Operational Excellence"],
    question: { en: "A company wants to add existing AWS usage costs to an operational expense dashboard. A solutions architect must recommend a programmatic way to access current-year cost data and forecast costs for the next 12 months with the least operational overhead. Which solution meets these requirements?", ko: "회사에서 기존 AWS 사용 비용을 운영 비용 대시보드에 추가하려고 합니다. 솔루션 설계자는 회사가 프로그래밍 방식으로 사용 비용에 액세스할 수 있는 솔루션을 추천해야 합니다. 회사는 현재 연도의 비용 데이터에 액세스하고 향후 12개월의 비용을 예측할 수 있어야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use the AWS Cost Explorer API with pagination to access usage-cost data.", ko: "페이지 매김과 함께 AWS Cost Explorer API를 사용하여 사용 비용 관련 데이터에 액세스합니다." },
      { k: "B", en: "Use downloadable AWS Cost Explorer report CSV files to access usage-cost data.", ko: "다운로드 가능한 AWS Cost Explorer 보고서 .csv 파일을 사용하여 사용 비용 관련 데이터에 액세스합니다." },
      { k: "C", en: "Configure an AWS Budgets job to send usage-cost data to the company over FTP.", ko: "FTP를 통해 회사에 사용 비용 데이터를 전송하도록 AWS 예산 작업을 구성합니다." },
      { k: "D", en: "Create an AWS Budgets report for usage-cost data and send it to the company over SMTP.", ko: "사용 비용 데이터에 대한 AWS 예산 보고서를 생성합니다. SMTP를 통해 회사에 데이터를 보냅니다." }
    ],
    answer: ["A"],
    explanation: { en: "The Cost Explorer API provides programmatic access to historical cost and usage data and cost forecasts. Pagination retrieves complete result sets and integrates directly with the dashboard without manual file handling.", ko: "Cost Explorer API는 과거 비용·사용량 데이터와 비용 예측에 프로그래밍 방식으로 액세스하게 합니다. 페이지 매김으로 전체 결과를 가져와 수동 파일 처리 없이 대시보드와 직접 통합할 수 있습니다." },
    why_wrong: {
      B: { en: "Downloading CSV reports is a manual file-based workflow and is not the requested programmatic integration.", ko: "CSV 보고서 다운로드는 수동 파일 기반 절차이며 요구된 프로그래밍 방식 통합이 아닙니다." },
      C: { en: "AWS Budgets does not provide an FTP data-export job for this dashboard integration.", ko: "AWS Budgets는 이 대시보드 통합을 위한 FTP 데이터 내보내기 작업을 제공하지 않습니다." },
      D: { en: "Budget reports sent by email are notifications rather than a programmatic historical and forecast data API.", ko: "이메일로 전송되는 예산 보고서는 알림이며 과거 및 예측 데이터를 제공하는 프로그래밍 API가 아닙니다." }
    }
  },
  {
    id: "exam11-526", number: 526, tags: ["Amazon RDS Proxy", "Amazon Aurora PostgreSQL", "High Availability", "Database", "Operational Excellence"],
    question: { en: "A solutions architect is reviewing an application's resiliency. A database administrator recently failed over the application's Amazon Aurora PostgreSQL writer instance during a scaling exercise, causing 3 minutes of downtime. Which solution reduces failover interruption with the least operational overhead?", ko: "솔루션 설계자가 애플리케이션의 복원력을 검토하고 있습니다. 솔루션 설계자는 최근에 데이터베이스 관리자가 확장 연습의 일부로 애플리케이션의 Amazon Aurora PostgreSQL 데이터베이스 작성자 인스턴스를 장애 조치했음을 확인했습니다. 장애 조치로 인해 애플리케이션에 3분의 다운타임이 발생했습니다. 최소한의 운영 오버헤드로 확장 연습의 중단 시간을 줄이는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create more Aurora PostgreSQL read replicas in the cluster to handle load during failover.", ko: "장애 조치 중 로드를 처리하기 위해 클러스터에서 더 많은 Aurora PostgreSQL 읽기 전용 복제본을 생성합니다." },
      { k: "B", en: "Configure a secondary Aurora PostgreSQL cluster in the same AWS Region and update the application to use its writer endpoint during failover.", ko: "동일한 AWS 리전에서 보조 Aurora PostgreSQL 클러스터를 설정합니다. 장애 조치 중에 보조 클러스터의 작성자 엔드포인트를 사용하도록 애플리케이션을 업데이트합니다." },
      { k: "C", en: "Create an Amazon ElastiCache for Memcached cluster to handle load during failover.", ko: "장애 조치 중 로드를 처리할 Amazon ElastiCache for Memcached 클러스터를 생성합니다." },
      { k: "D", en: "Configure Amazon RDS Proxy for the database and update the application to use the proxy endpoint.", ko: "데이터베이스에 대한 Amazon RDS 프록시를 설정합니다. 프록시 엔드포인트를 사용하도록 애플리케이션을 업데이트합니다." }
    ],
    answer: ["D"],
    explanation: { en: "RDS Proxy pools and preserves database connections and automatically connects to the new Aurora writer after failover. Applications use a stable proxy endpoint, which reduces failover disruption with minimal management.", ko: "RDS Proxy는 데이터베이스 연결을 풀링하고 보존하며 장애 조치 후 새로운 Aurora 작성자에 자동으로 연결합니다. 애플리케이션은 안정적인 프록시 엔드포인트를 사용하므로 관리 부담을 최소화하면서 장애 조치 중단을 줄일 수 있습니다." },
    why_wrong: {
      A: { en: "Additional readers can provide promotion targets but do not address application connection recovery as directly as RDS Proxy.", ko: "추가 읽기 복제본은 승격 대상을 제공할 수 있지만 RDS Proxy만큼 직접적으로 애플리케이션 연결 복구를 해결하지 않습니다." },
      B: { en: "A second cluster and application endpoint-switching logic create substantially more cost and operational work.", ko: "두 번째 클러스터와 애플리케이션 엔드포인트 전환 로직은 비용과 운영 작업을 크게 늘립니다." },
      C: { en: "A cache cannot accept Aurora PostgreSQL writes or transparently maintain database connections during failover.", ko: "캐시는 Aurora PostgreSQL 쓰기를 처리하거나 장애 조치 중 데이터베이스 연결을 투명하게 유지할 수 없습니다." }
    }
  },
  {
    id: "exam11-527", number: 527, tags: ["Amazon Aurora Global Database", "Amazon Route 53", "Disaster Recovery", "Multi-Region", "High Availability"],
    question: { en: "A Region-based streaming service runs in one AWS Region with web and application EC2 Auto Scaling groups behind an Elastic Load Balancer and an Aurora Global Database cluster across multiple Availability Zones. The company wants to expand globally and minimize application downtime. Which solution provides the greatest resiliency?", ko: "한 회사에 단일 AWS 리전에서 실행되는 리전 구독 기반 스트리밍 서비스가 있습니다. 아키텍처는 Amazon EC2 인스턴스의 웹 서버와 애플리케이션 서버로 구성됩니다. EC2 인스턴스는 Elastic Load Balancer 뒤의 Auto Scaling 그룹에 있습니다. 아키텍처에는 여러 가용 영역에 걸쳐 확장되는 Amazon Aurora 글로벌 데이터베이스 클러스터가 포함됩니다. 이 회사는 전 세계적으로 확장하고 응용 프로그램의 가동 중지 시간을 최소화하기를 원합니다. 어떤 솔루션이 가장 내결함성을 제공합니까?" },
    options: [
      { k: "A", en: "Extend both Auto Scaling groups into Availability Zones in a second Region. Use Aurora Global Database in both Regions and Route 53 health checks with failover routing.", ko: "웹 계층 및 애플리케이션 계층에 대한 Auto Scaling 그룹을 확장하여 두 번째 리전의 가용 영역에 인스턴스를 배포합니다. Aurora 글로벌 데이터베이스를 사용하여 기본 리전과 두 번째 리전에 데이터베이스를 배포합니다. 두 번째 리전에 대한 장애 조치 라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용합니다." },
      { k: "B", en: "Deploy the web and application tiers in a second Region. Add a cross-Region Aurora PostgreSQL replica, use Route 53 failover routing, and promote the replica when needed.", ko: "웹 계층과 애플리케이션 계층을 두 번째 리전에 배포합니다. 두 번째 리전에 Aurora PostgreSQL 교차 리전 Aurora 복제본을 추가합니다. 두 번째 리전에 대한 장애 조치 라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용합니다. 필요에 따라 보조를 기본으로 승격합니다." },
      { k: "C", en: "Deploy the tiers in a second Region, create an Aurora PostgreSQL database there, replicate with AWS DMS, and use Route 53 failover routing.", ko: "웹 계층과 애플리케이션 계층을 두 번째 리전에 배포합니다. 두 번째 리전에서 Aurora PostgreSQL 데이터베이스를 생성합니다. AWS Database Migration Service(AWS DMS)를 사용하여 기본 데이터베이스를 두 번째 리전에 복제합니다. 두 번째 리전에 대한 장애 조치 라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용합니다." },
      { k: "D", en: "Deploy the web and application tiers in a second Region. Use Aurora Global Database across the primary and second Regions, and use Route 53 health checks with failover routing. Promote the secondary when needed.", ko: "웹 계층과 애플리케이션 계층을 두 번째 지역에 배포합니다. Amazon Aurora 글로벌 데이터베이스를 사용하여 기본 리전과 두 번째 리전에 데이터베이스를 배포합니다. 두 번째 리전에 대한 장애 조치 라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용합니다. 필요에 따라 보조를 기본으로 승격합니다." }
    ],
    answer: ["D"],
    explanation: { en: "Independent application tiers in a second Region combined with Aurora Global Database provide a purpose-built multi-Region architecture. Route 53 health checks and failover routing direct users to the healthy Region, and the secondary Aurora cluster can be promoted during a regional failure.", ko: "두 번째 리전의 독립적인 애플리케이션 계층과 Aurora Global Database를 결합하면 목적에 맞는 다중 리전 아키텍처가 됩니다. Route 53 상태 확인과 장애 조치 라우팅은 사용자를 정상 리전으로 보내며 리전 장애 시 보조 Aurora 클러스터를 승격할 수 있습니다." },
    why_wrong: {
      A: { en: "An Auto Scaling group cannot span AWS Regions; each Region requires its own group.", ko: "Auto Scaling 그룹은 AWS 리전을 가로지를 수 없으며 각 리전에 별도 그룹이 필요합니다." },
      B: { en: "A conventional cross-Region read replica is less purpose-built for fast global failover than Aurora Global Database.", ko: "일반적인 교차 리전 읽기 복제본은 Aurora Global Database보다 빠른 글로벌 장애 조치에 덜 적합합니다." },
      C: { en: "DMS replication adds migration infrastructure and operational complexity and is not the preferred ongoing Aurora disaster-recovery design.", ko: "DMS 복제는 마이그레이션 인프라와 운영 복잡성을 추가하며 지속적인 Aurora 재해 복구에 선호되는 설계가 아닙니다." }
    }
  },
  {
    id: "exam11-528", number: 528, tags: ["AWS Transfer Family", "AWS Batch", "Amazon S3", "Amazon EventBridge", "FTP", "Batch Processing"],
    question: { en: "A data analytics company is migrating a batch-processing system to AWS. Thousands of small files arrive periodically through FTP during the day, and an on-premises nightly batch takes hours. The company wants to minimize FTP client changes, process files as soon as possible, delete each file after successful processing, and minimize operational overhead. Which solution meets these requirements?", ko: "데이터 분석 회사에서 일괄 처리 시스템을 AWS로 마이그레이션하려고 합니다. 회사는 FTP를 통해 하루 동안 주기적으로 수천 개의 작은 데이터 파일을 받습니다. 온프레미스 배치 작업은 밤새 데이터 파일을 처리합니다. 그러나 배치 작업 실행을 완료하는 데 몇 시간이 걸립니다. 회사는 AWS 솔루션이 파일을 전송하는 FTP 클라이언트에 대한 변경을 최소화하면서 가능한 한 빨리 수신 데이터 파일을 처리하기를 원합니다. 파일이 성공적으로 처리된 후 솔루션은 수신 데이터 파일을 삭제해야 합니다. 각 파일을 처리하는 데 3~8분이 소요됩니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Run an FTP server on Amazon EC2 and store files in S3 Glacier Flexible Retrieval. Use EventBridge to invoke a nightly AWS Batch job and delete objects after processing.", ko: "FTP 서버를 실행하는 Amazon EC2 인스턴스를 사용하여 수신 파일을 Amazon S3 Glacier Flexible Retrieval의 객체로 저장합니다. AWS Batch에서 작업 대기열을 구성합니다. Amazon EventBridge 규칙을 사용하여 S3 Glacier Flexible Retrieval에서 야간에 객체를 처리하는 작업을 호출합니다. 작업이 객체를 처리한 후 객체를 삭제합니다." },
      { k: "B", en: "Run an FTP server on Amazon EC2, store files on Amazon EBS, and use EventBridge to invoke a nightly AWS Batch job that deletes files after processing.", ko: "FTP 서버를 실행하는 Amazon EC2 인스턴스를 사용하여 수신 파일을 Amazon Elastic Block Store(Amazon EBS) 볼륨에 저장합니다. AWS Batch에서 작업 대기열을 구성합니다. Amazon EventBridge 규칙을 사용하여 EBS 볼륨에서 야간에 파일을 처리하는 작업을 호출합니다. 작업이 파일을 처리한 후 파일을 삭제합니다." },
      { k: "C", en: "Use AWS Transfer Family for the FTP endpoint and an AWS Batch job queue. Invoke an AWS Batch job for each arriving file by using an Amazon S3 event notification, and delete the file after processing.", ko: "AWS Transfer Family를 사용하여 들어오는 파일을 저장할 FTP 서버를 생성합니다. AWS Batch에서 작업 대기열을 구성합니다. 각 파일이 도착하면 Amazon S3 이벤트 알림을 사용하여 AWS Batch에서 작업을 호출합니다. 작업이 파일을 처리한 후 파일을 삭제합니다." },
      { k: "D", en: "Use AWS Transfer Family to store incoming files in Amazon S3 Standard. Invoke a Lambda function for each arriving file to process and delete it.", ko: "AWS Transfer Family를 사용하여 Amazon S3 Standard에 수신 파일을 저장할 FTP 서버를 생성합니다. 파일을 처리하고 처리 후 파일을 삭제하는 AWS Lambda 함수를 생성합니다. 파일이 도착하면 S3 이벤트 알림을 사용하여 Lambda 함수를 호출합니다." }
    ],
    answer: ["C"],
    explanation: { en: "AWS Transfer Family preserves the FTP interface while storing files in managed AWS storage. An event-driven AWS Batch job can process many independent 3-to-8-minute files in parallel and delete each successful input, eliminating the overnight batch and server administration.", ko: "AWS Transfer Family는 FTP 인터페이스를 유지하면서 파일을 관리형 AWS 스토리지에 저장합니다. 이벤트 기반 AWS Batch 작업은 서로 독립적인 3~8분 처리 파일을 병렬로 처리하고 성공한 입력을 삭제하여 야간 배치와 서버 관리를 없앨 수 있습니다." },
    why_wrong: {
      A: { en: "Glacier retrieval delay and a nightly schedule conflict with processing files as soon as possible, and EC2 adds FTP server management.", ko: "Glacier 검색 지연과 야간 일정은 가능한 한 빠른 처리 요구와 맞지 않으며 EC2는 FTP 서버 관리를 추가합니다." },
      B: { en: "EBS and a self-managed FTP server retain operational overhead and the nightly batch delays processing.", ko: "EBS와 자체 관리 FTP 서버는 운영 부담을 유지하며 야간 배치는 처리를 지연합니다." },
      D: { en: "Lambda is better for short event handlers; AWS Batch is the more suitable managed service for large numbers of multi-minute batch-processing jobs.", ko: "Lambda는 짧은 이벤트 처리에 더 적합하며 수많은 수분 단위 배치 처리 작업에는 AWS Batch가 더 적합한 관리형 서비스입니다." }
    }
  },
  {
    id: "exam11-529", number: 529, tags: ["Amazon RDS", "Encryption", "Database Migration", "Security", "Operational Excellence"],
    question: { en: "A company is migrating a workload to AWS. Its database contains transaction and sensitive data. The company wants to use an AWS managed solution to improve security and reduce database operational overhead. Which solution meets these requirements?", ko: "회사에서 워크로드를 AWS로 마이그레이션하고 있습니다. 회사는 데이터베이스에 거래 및 민감한 데이터를 가지고 있습니다. 이 회사는 AWS 클라우드 솔루션을 사용하여 보안을 강화하고 데이터베이스의 운영 오버헤드를 줄이려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Migrate the database to Amazon EC2 and use an AWS managed KMS key for encryption.", ko: "데이터베이스를 Amazon EC2로 마이그레이션합니다. 암호화에 AWS Key Management Service(AWS KMS) AWS 관리형 키를 사용합니다." },
      { k: "B", en: "Migrate the database to Amazon RDS and configure encryption at rest.", ko: "데이터베이스를 Amazon RDS로 마이그레이션하고 저장 데이터 암호화를 구성합니다." },
      { k: "C", en: "Migrate the data to Amazon S3 and use Amazon Macie for data security and protection.", ko: "데이터를 Amazon S3로 마이그레이션합니다. 데이터 보안 및 보호를 위해 Amazon Macie를 사용합니다." },
      { k: "D", en: "Migrate the database to Amazon RDS and use Amazon CloudWatch Logs for data security and protection.", ko: "데이터베이스를 Amazon RDS로 마이그레이션합니다. 데이터 보안 및 보호를 위해 Amazon CloudWatch Logs를 사용하십시오." }
    ],
    answer: ["B"],
    explanation: { en: "Amazon RDS manages routine database administration such as backups, patching, and infrastructure maintenance. Enabling encryption at rest protects database storage, snapshots, and replicas with KMS, meeting both security and operational goals.", ko: "Amazon RDS는 백업, 패치 및 인프라 유지 관리 같은 일상적인 데이터베이스 관리를 처리합니다. 저장 데이터 암호화를 활성화하면 KMS로 데이터베이스 스토리지, 스냅샷 및 복제본을 보호하여 보안과 운영 목표를 모두 충족합니다." },
    why_wrong: {
      A: { en: "Running a database on EC2 leaves operating-system, database, backup, and availability administration with the company.", ko: "EC2에서 데이터베이스를 실행하면 운영 체제, 데이터베이스, 백업 및 가용성 관리를 회사가 담당해야 합니다." },
      C: { en: "S3 and Macie are not a replacement for a transactional relational database.", ko: "S3와 Macie는 트랜잭션 관계형 데이터베이스를 대체하지 않습니다." },
      D: { en: "CloudWatch Logs provides monitoring and log storage; it does not encrypt and protect the database contents at rest.", ko: "CloudWatch Logs는 모니터링과 로그 저장을 제공하지만 데이터베이스 내용을 저장 시 암호화하고 보호하지 않습니다." }
    }
  },
  {
    id: "exam11-530", number: 530, tags: ["AWS Global Accelerator", "Network Load Balancer", "Amazon Route 53", "Multi-Region", "Latency", "TCP", "UDP"],
    question: { en: "A company has an online game application with TCP and UDP multiplayer features. Amazon Route 53 directs traffic to multiple Network Load Balancers in different AWS Regions. The company must improve performance and reduce game latency as its user base grows. Which solution meets these requirements?", ko: "회사에 TCP 및 UDP 멀티플레이어 게임 기능이 있는 온라인 게임 응용 프로그램이 있습니다. 이 회사는 Amazon Route 53을 사용하여 애플리케이션 트래픽이 서로 다른 AWS 리전에 있는 여러 NLB(Network Load Balancer)를 가리키도록 합니다. 회사는 사용자 증가에 대비하여 애플리케이션 성능을 개선하고 온라인 게임의 지연 시간을 줄여야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Add an Amazon CloudFront distribution in front of the NLBs and increase the Cache-Control max-age value.", ko: "NLB 앞에 Amazon CloudFront 배포를 추가합니다. Cache-Control max-age 매개변수를 늘리십시오." },
      { k: "B", en: "Replace the NLBs with Application Load Balancers and configure Route 53 latency-based routing.", ko: "NLB를 ALB(Application Load Balancer)로 교체합니다. 지연 시간 기반 라우팅을 사용하도록 Route 53을 구성합니다." },
      { k: "C", en: "Add AWS Global Accelerator in front of the NLBs and configure the endpoints to use the correct listener ports.", ko: "NLB 앞에 AWS Global Accelerator를 추가합니다. 올바른 수신기 포트를 사용하도록 Global Accelerator 끝점을 구성합니다." },
      { k: "D", en: "Add Amazon API Gateway endpoints behind the NLBs, enable API caching, and redefine method caching for the stages.", ko: "NLB 뒤에 Amazon API Gateway 엔드포인트를 추가합니다. API 캐싱을 활성화합니다. 다른 단계에 대한 메서드 캐싱을 재정의합니다." }
    ],
    answer: ["C"],
    explanation: { en: "AWS Global Accelerator supports both TCP and UDP and routes users through the AWS global network to the optimal healthy regional endpoint. NLB endpoints preserve the game's transport protocols while static anycast IP addresses and health-based routing reduce latency.", ko: "AWS Global Accelerator는 TCP와 UDP를 모두 지원하며 AWS 글로벌 네트워크를 통해 사용자를 최적의 정상 리전 엔드포인트로 라우팅합니다. NLB 엔드포인트는 게임의 전송 프로토콜을 유지하며 고정 애니캐스트 IP와 상태 기반 라우팅으로 지연 시간을 줄입니다." },
    why_wrong: {
      A: { en: "CloudFront is designed primarily for HTTP content delivery and caching, not arbitrary low-latency TCP and UDP game traffic.", ko: "CloudFront는 주로 HTTP 콘텐츠 전송과 캐싱용이며 임의의 저지연 TCP·UDP 게임 트래픽용이 아닙니다." },
      B: { en: "ALB does not support UDP, so replacing NLBs would break a required protocol.", ko: "ALB는 UDP를 지원하지 않으므로 NLB를 교체하면 필수 프로토콜을 사용할 수 없습니다." },
      D: { en: "API Gateway caching applies to API request patterns and is not a proxy for multiplayer TCP and UDP traffic.", ko: "API Gateway 캐싱은 API 요청 패턴에 적용되며 멀티플레이어 TCP·UDP 트래픽의 프록시가 아닙니다." }
    }
  },
  {
    id: "exam11-531", number: 531, tags: ["AWS Lambda", "Lambda Function URL", "Webhook", "Serverless", "API"],
    question: { en: "A company must integrate with a third-party data feed. The feed sends a webhook when new data is ready. A developer wrote an AWS Lambda function that retrieves the data when the webhook callback is received and must provide a way for the third party to invoke the function. Which solution meets these requirements most efficiently?", ko: "회사는 타사 데이터 피드와 통합해야 합니다. 데이터 피드는 웹후크를 보내 새 데이터를 사용할 준비가 되면 외부 서비스에 알립니다. 개발자는 회사에서 웹후크 콜백을 수신할 때 데이터를 검색하는 AWS Lambda 함수를 작성했습니다. 개발자는 제3자가 호출할 수 있도록 Lambda 함수를 제공해야 합니다. 이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create a function URL for the Lambda function and provide the URL to the third party for the webhook.", ko: "Lambda 함수에 대한 함수 URL을 생성합니다. Webhook에 대한 Lambda 함수 URL을 타사에 제공합니다." },
      { k: "B", en: "Deploy an Application Load Balancer in front of the Lambda function and provide the ALB URL to the third party.", ko: "Lambda 함수 앞에 ALB(Application Load Balancer)를 배포합니다. Webhook에 대한 ALB URL을 타사에 제공합니다." },
      { k: "C", en: "Create an Amazon SNS topic, connect it to the Lambda function, and provide the topic's public host name to the third party.", ko: "Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. Lambda 함수에 주제를 연결합니다. Webhook에 대한 제3자에게 SNS 주제의 공개 호스트 이름을 제공합니다." },
      { k: "D", en: "Create an Amazon SQS queue, connect it to the Lambda function, and provide the queue's public host name to the third party.", ko: "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. 대기열을 Lambda 함수에 연결합니다. Webhook에 대해 타사에 SQS 대기열의 공개 호스트 이름을 제공합니다." }
    ],
    answer: ["A"],
    explanation: { en: "A Lambda function URL provides a dedicated HTTPS endpoint that can invoke the function directly. It is the simplest way to expose the callback without provisioning API Gateway, a load balancer, or messaging infrastructure.", ko: "Lambda 함수 URL은 함수를 직접 호출할 수 있는 전용 HTTPS 엔드포인트를 제공합니다. API Gateway, 로드 밸런서 또는 메시징 인프라를 프로비저닝하지 않고 콜백을 노출하는 가장 간단한 방법입니다." },
    why_wrong: {
      B: { en: "An ALB can invoke Lambda but adds unnecessary networking resources, configuration, and cost for one webhook endpoint.", ko: "ALB도 Lambda를 호출할 수 있지만 단일 웹후크 엔드포인트에 불필요한 네트워크 리소스, 구성 및 비용을 추가합니다." },
      C: { en: "SNS is a publish-subscribe service and does not expose a generic public webhook host name for direct third-party invocation.", ko: "SNS는 게시·구독 서비스이며 타사가 직접 호출할 일반 공개 웹후크 호스트 이름을 제공하지 않습니다." },
      D: { en: "SQS is a queue service and requires authenticated API requests; it is not a public webhook endpoint.", ko: "SQS는 대기열 서비스로 인증된 API 요청이 필요하며 공개 웹후크 엔드포인트가 아닙니다." }
    }
  },
  {
    id: "exam11-532", number: 532, tags: ["Amazon API Gateway", "Amazon Route 53", "AWS Certificate Manager", "Custom Domain", "Security", "Choose three"],
    question: { en: "A company has a workload in an AWS Region. Customers access it through an Amazon API Gateway REST API, and the company uses Amazon Route 53 for DNS. The company wants to provide every customer with an individual secure URL. Which three steps meet these requirements with the highest operational efficiency? (Choose three.)", ko: "회사는 AWS 리전에 워크로드가 있습니다. 고객은 Amazon API Gateway REST API를 사용하여 워크로드에 연결하고 액세스합니다. 이 회사는 Amazon Route 53을 DNS 공급자로 사용합니다. 회사는 모든 고객에게 개별적이고 안전한 URL을 제공하고자 합니다. 가장 높은 운영 효율성으로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개 선택)" },
    options: [
      { k: "A", en: "Register the required domain. In a Route 53 hosted zone, create a wildcard custom domain name and a record that points to the API Gateway endpoint.", ko: "등록기관에 필요한 도메인을 등록합니다. Route 53 호스팅 영역에서 와일드카드 사용자 지정 도메인 이름을 생성하고 API 게이트웨이 엔드포인트를 가리키는 영역에 기록합니다." },
      { k: "B", en: "Request a wildcard certificate in AWS Certificate Manager in a different Region that matches the domain.", ko: "다른 리전에 있는 AWS Certificate Manager(ACM)의 도메인과 일치하는 와일드카드 인증서를 요청합니다." },
      { k: "C", en: "Create a separate Route 53 hosted zone for each customer and create a record that points to the API Gateway endpoint.", ko: "Route 53에서 필요에 따라 각 고객에 대한 호스팅 영역을 생성합니다. API 게이트웨이 엔드포인트를 가리키는 영역 레코드를 생성합니다." },
      { k: "D", en: "Request a wildcard certificate in AWS Certificate Manager in the same Region that matches the custom domain.", ko: "동일한 리전의 AWS Certificate Manager(ACM)에서 사용자 지정 도메인 이름과 일치하는 와일드카드 인증서를 요청합니다." },
      { k: "E", en: "Create multiple API endpoints in API Gateway for each customer.", ko: "API Gateway에서 각 고객에 대해 여러 API 끝점을 만듭니다." },
      { k: "F", en: "Create a custom domain name for the REST API in API Gateway and import the ACM certificate.", ko: "API Gateway에서 REST API용 사용자 정의 도메인 이름을 생성합니다. AWS Certificate Manager(ACM)에서 인증서를 가져옵니다." }
    ],
    answer: ["A", "D", "F"],
    explanation: { en: "A wildcard DNS name can serve customer-specific subdomains from one Route 53 hosted zone. API Gateway must use a custom domain associated with an ACM wildcard certificate in the required Region, and DNS records route those names to the API endpoint.", ko: "와일드카드 DNS 이름을 사용하면 하나의 Route 53 호스팅 영역에서 고객별 하위 도메인을 제공할 수 있습니다. API Gateway는 필요한 리전의 ACM 와일드카드 인증서와 연결된 사용자 지정 도메인을 사용해야 하며 DNS 레코드는 해당 이름을 API 엔드포인트로 라우팅합니다." },
    why_wrong: {
      B: { en: "The certificate must be requested in the Region required by the API Gateway custom endpoint type, not an arbitrary different Region.", ko: "인증서는 임의의 다른 리전이 아니라 API Gateway 사용자 지정 엔드포인트 유형이 요구하는 리전에 있어야 합니다." },
      C: { en: "A hosted zone per customer creates unnecessary recurring DNS administration; wildcard subdomains can share one zone.", ko: "고객마다 호스팅 영역을 만들면 불필요한 반복 DNS 관리가 발생하며 와일드카드 하위 도메인은 하나의 영역을 공유할 수 있습니다." },
      E: { en: "Separate API endpoints per customer duplicate API resources and are unnecessary when custom domain mappings can share the REST API.", ko: "고객별 API 엔드포인트는 API 리소스를 중복하며 사용자 지정 도메인 매핑으로 하나의 REST API를 공유할 수 있습니다." }
    }
  },
  {
    id: "exam11-533", number: 533, tags: ["Amazon Macie", "Amazon EventBridge", "Amazon SNS", "Amazon S3", "PII", "Security"],
    question: { en: "A company stores data in Amazon S3. Regulations prohibit personally identifiable information (PII) in the data, but the company recently found objects containing PII. The company must automatically detect PII in S3 and notify its security team. Which solution meets these requirements?", ko: "회사는 Amazon S3에 데이터를 저장합니다. 규정에 따르면 데이터에는 개인 식별 정보(PII)가 포함되어서는 안 됩니다. 이 회사는 최근 S3 버킷에 PII가 포함된 일부 개체가 있음을 발견했습니다. 회사는 S3 버킷에서 PII를 자동으로 감지하고 회사의 보안 팀에 알려야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use Amazon Macie. Create an EventBridge rule that filters SensitiveData events from Macie findings and sends Amazon SNS notifications to the security team.", ko: "Amazon Macie를 사용하십시오. Amazon EventBridge 규칙을 생성하여 Macie 결과에서 SensitiveData 이벤트 유형을 필터링하고 보안 팀에 Amazon Simple Notification Service(Amazon SNS) 알림을 보냅니다." },
      { k: "B", en: "Use Amazon GuardDuty and an EventBridge rule that filters important GuardDuty findings and sends SNS notifications.", ko: "Amazon GuardDuty를 사용합니다. GuardDuty 결과에서 중요한 이벤트 유형을 필터링하고 보안 팀에 Amazon Simple Notification Service(Amazon SNS) 알림을 보내는 Amazon EventBridge 규칙을 생성합니다." },
      { k: "C", en: "Use Amazon Macie and an EventBridge rule that sends SensitiveData:S3Object/Personal findings to an Amazon SQS notification.", ko: "Amazon Macie를 사용합니다. Amazon EventBridge 규칙을 생성하여 Macie 결과에서 SensitiveData:S3Object/Personal 이벤트 유형을 필터링하고 보안 팀에 Amazon Simple Queue Service(Amazon SQS) 알림을 보냅니다." },
      { k: "D", en: "Use Amazon GuardDuty and an EventBridge rule that sends important GuardDuty findings to an Amazon SQS notification.", ko: "Amazon GuardDuty를 사용합니다. GuardDuty 결과에서 중요한 이벤트 유형을 필터링하고 보안 팀에 Amazon Simple Queue Service(Amazon SQS) 알림을 보내는 Amazon EventBridge 규칙을 생성합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Amazon Macie discovers and classifies sensitive data such as PII in S3. Macie findings are available through EventBridge, which can match sensitive-data findings and invoke an SNS topic to notify the security team.", ko: "Amazon Macie는 S3에서 PII 같은 민감 데이터를 검색하고 분류합니다. Macie 조사 결과는 EventBridge에서 사용할 수 있으며 민감 데이터 결과를 일치시켜 SNS 주제를 호출하고 보안 팀에 알릴 수 있습니다." },
    why_wrong: {
      B: { en: "GuardDuty detects threats and suspicious activity; it does not classify PII in S3 objects.", ko: "GuardDuty는 위협과 의심스러운 활동을 탐지하며 S3 객체의 PII를 분류하지 않습니다." },
      C: { en: "Macie is appropriate, but SQS queues messages for consumers and does not directly notify the human security team as SNS does.", ko: "Macie 선택은 적절하지만 SQS는 소비자용 메시지를 대기시키며 SNS처럼 보안 담당자에게 직접 알리지 않습니다." },
      D: { en: "This uses the wrong detection service and SQS does not provide the requested direct team notification.", ko: "잘못된 탐지 서비스를 사용하며 SQS는 요청된 직접 팀 알림을 제공하지 않습니다." }
    }
  },
  {
    id: "exam11-534", number: 534, tags: ["Amazon S3", "S3 Lifecycle", "S3 Glacier Flexible Retrieval", "Log Archiving", "Cost Optimization"],
    question: { en: "A company centralizes VPC Flow Logs and AWS CloudTrail logs from multiple accounts in an Amazon S3 bucket. Logs must remain highly available for frequent analysis for 30 days, be retained for another 60 days for backup, and be deleted 90 days after creation. Which solution is most cost-effective?", ko: "회사에서 여러 AWS 계정에 대한 로깅 솔루션을 구축하려고 합니다. 회사는 현재 모든 계정의 로그를 중앙 집중식 계정에 저장합니다. 회사는 VPC 흐름 로그와 AWS CloudTrail 로그를 저장하기 위해 중앙 집중식 계정에 Amazon S3 버킷을 생성했습니다. 모든 로그는 빈번한 분석을 위해 30일 동안 가용성이 높아야 하며, 백업 목적으로 추가 60일 동안 유지되고 생성 후 90일 후에 삭제되어야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "After 30 days, transition objects to S3 Standard and configure an expiration action after 90 days.", ko: "생성 후 30일이 지나면 객체를 S3 Standard 스토리지 클래스로 전환합니다. 90일 후에 객체를 삭제하도록 Amazon S3에 지시하는 만료 작업을 작성합니다." },
      { k: "B", en: "After 30 days, transition objects to S3 Standard-IA. After 90 days, transition all objects to S3 Glacier Flexible Retrieval and also expire them.", ko: "생성 후 30일이 지나면 객체를 S3 Standard-Infrequent Access(S3 Standard-IA) 스토리지 클래스로 전환합니다. 90일 후에 모든 객체를 S3 Glacier Flexible Retrieval 스토리지 클래스로 이동합니다. 90일 후에 객체를 삭제하도록 Amazon S3에 지시하는 만료 작업을 작성합니다." },
      { k: "C", en: "After 30 days, transition objects to S3 Glacier Flexible Retrieval and configure an expiration action after 90 days.", ko: "생성 후 30일이 지나면 객체를 S3 Glacier Flexible Retrieval 스토리지 클래스로 전환합니다. 90일 후에 객체를 삭제하도록 Amazon S3에 지시하는 만료 작업을 작성합니다." },
      { k: "D", en: "After 30 days, transition objects to S3 One Zone-IA. After 90 days, transition them to S3 Glacier Flexible Retrieval and also expire them.", ko: "생성 후 30일이 지나면 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA) 스토리지 클래스로 전환합니다. 90일 후에 모든 객체를 S3 Glacier Flexible Retrieval 스토리지 클래스로 이동합니다. 90일 후에 객체를 삭제하도록 Amazon S3에 지시하는 만료 작업을 작성합니다." }
    ],
    answer: ["C"],
    explanation: { en: "Keep the logs in the initial highly available class for the 30-day analysis window, then use an S3 Lifecycle rule to transition them to Glacier Flexible Retrieval for the remaining backup period and expire them at 90 days. This satisfies retention at low storage cost.", ko: "로그를 초기 30일 분석 기간 동안 고가용성 클래스에 유지한 뒤 S3 수명 주기 규칙으로 남은 백업 기간에는 Glacier Flexible Retrieval로 전환하고 90일에 만료합니다. 낮은 스토리지 비용으로 보존 요구를 충족합니다." },
    why_wrong: {
      A: { en: "Transitioning to S3 Standard after 30 days does not reduce storage cost for the backup-only period.", ko: "30일 후 S3 Standard로 전환하면 백업 전용 기간의 스토리지 비용이 줄어들지 않습니다." },
      B: { en: "Transitioning to Glacier and expiring at the same 90-day point provides no useful Glacier retention and adds an unnecessary transition.", ko: "동일한 90일 시점에 Glacier로 전환하면서 만료하면 유효한 Glacier 보존 기간이 없고 불필요한 전환만 추가됩니다." },
      D: { en: "One Zone-IA stores data in one Availability Zone and is less resilient for backup data, while the 90-day Glacier transition is ineffective before deletion.", ko: "One Zone-IA는 하나의 가용 영역에 저장되어 백업 데이터 복원력이 낮으며 90일의 Glacier 전환도 삭제 전에 효과가 없습니다." }
    }
  },
  {
    id: "exam11-535", number: 535, tags: ["Amazon EKS", "AWS KMS", "Secrets Encryption", "Kubernetes", "Security"],
    question: { en: "A company is creating an Amazon EKS cluster for a workload. All secrets stored in Amazon EKS must be encrypted in the Kubernetes etcd key-value store. Which solution meets this requirement?", ko: "회사에서 워크로드를 위해 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 구축하고 있습니다. Amazon EKS에 저장되는 모든 암호는 Kubernetes etcd 키-값 저장소에서 암호화되어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create a new AWS KMS key and use AWS Secrets Manager to manage, rotate, and store all Amazon EKS secrets.", ko: "새 AWS Key Management Service(AWS KMS) 키를 생성합니다. AWS Secrets Manager를 사용하여 Amazon EKS에서 모든 비밀을 관리, 교체 및 저장하십시오." },
      { k: "B", en: "Create a new AWS KMS key and enable Amazon EKS KMS secrets encryption on the cluster.", ko: "새 AWS Key Management Service(AWS KMS) 키를 생성합니다. Amazon EKS 클러스터에서 Amazon EKS KMS 비밀 암호화를 활성화합니다." },
      { k: "C", en: "Create the EKS cluster with default options and use the Amazon EBS CSI driver add-on.", ko: "기본 옵션으로 Amazon EKS 클러스터를 생성합니다. Amazon Elastic Block Store(Amazon EBS) CSI(Container Storage Interface) 드라이버를 추가 기능으로 사용합니다." },
      { k: "D", en: "Create an AWS KMS key with alias alias/aws/ebs and enable default EBS volume encryption for the account.", ko: "alias/aws/ebs 별칭으로 새 AWS Key Management Service(AWS KMS) 키를 생성합니다. 계정에 대해 기본 Amazon Elastic Block Store(Amazon EBS) 볼륨 암호화를 활성화합니다." }
    ],
    answer: ["B"],
    explanation: { en: "EKS supports envelope encryption of Kubernetes secrets stored in etcd by associating a customer-managed KMS key with the cluster's secrets encryption configuration.", ko: "EKS는 고객 관리형 KMS 키를 클러스터의 비밀 암호화 구성과 연결하여 etcd에 저장된 Kubernetes 비밀의 봉투 암호화를 지원합니다." },
    why_wrong: {
      A: { en: "Secrets Manager is a separate secrets service and does not automatically encrypt Kubernetes Secret objects in the EKS etcd store.", ko: "Secrets Manager는 별도 비밀 서비스이며 EKS etcd 저장소의 Kubernetes Secret 객체를 자동으로 암호화하지 않습니다." },
      C: { en: "The EBS CSI driver manages persistent volumes and does not configure encryption for control-plane etcd secrets.", ko: "EBS CSI 드라이버는 영구 볼륨을 관리하며 제어 플레인 etcd 비밀 암호화를 구성하지 않습니다." },
      D: { en: "EBS default encryption protects EBS volumes, not Kubernetes secrets stored in the managed EKS control plane.", ko: "EBS 기본 암호화는 EBS 볼륨을 보호하며 관리형 EKS 제어 플레인에 저장된 Kubernetes 비밀을 보호하지 않습니다." }
    }
  },
  {
    id: "exam11-536", number: 536, tags: ["Amazon RDS for PostgreSQL", "Multi-AZ DB Cluster", "Read Scaling", "High Availability", "Database"],
    question: { en: "A company wants to give data scientists near-real-time read-only access to a production Amazon RDS for PostgreSQL database. The database is currently a Single-AZ deployment. The scientists run complex queries that must not affect production, and the company needs a highly available, cost-effective solution. Which solution meets these requirements?", ko: "회사에서 PostgreSQL 데이터베이스용 Amazon RDS 프로덕션에 대한 거의 실시간에 가까운 읽기 전용 액세스 권한을 데이터 과학자에게 제공하려고 합니다. 데이터베이스는 현재 단일 AZ 데이터베이스로 구성되어 있습니다. 데이터 과학자는 프로덕션 데이터베이스에 영향을 미치지 않는 복잡한 쿼리를 사용합니다. 회사는 가용성이 높은 솔루션이 필요합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Scale the existing production database during a maintenance window to provide enough performance for the data scientists.", ko: "유지 관리 기간에 기존 프로덕션 데이터베이스를 확장하여 데이터 과학자에게 충분한 성능을 제공합니다." },
      { k: "B", en: "Change to a Multi-AZ DB instance deployment with a larger standby instance and give the scientists access to the standby.", ko: "단일 AZ에서 더 큰 보조 대기 인스턴스가 있는 다중 AZ 인스턴스 배포로 설정을 변경합니다. 데이터 과학자에게 보조 인스턴스에 대한 액세스 권한을 제공합니다." },
      { k: "C", en: "Change to a Multi-AZ DB instance deployment and provide two additional read replicas for the data scientists.", ko: "단일 AZ에서 다중 AZ 인스턴스 배포로 설정을 변경합니다. 데이터 과학자를 위한 두 개의 추가 읽기 복제본을 제공합니다." },
      { k: "D", en: "Change to a Multi-AZ DB cluster deployment with two readable standby instances and provide the read endpoint to the data scientists.", ko: "단일 AZ에서 2개의 읽기 가능한 대기 인스턴스가 있는 다중 AZ 클러스터 배포로 설정을 변경합니다. 데이터 과학자에게 읽기 엔드포인트를 제공합니다." }
    ],
    answer: ["D"],
    explanation: { en: "An RDS Multi-AZ DB cluster has one writer and two readable instances in separate Availability Zones. Its reader endpoint distributes read-only queries across the readers, isolating analytical load while providing high availability without separate read-replica administration.", ko: "RDS 다중 AZ DB 클러스터에는 서로 다른 가용 영역의 작성자 하나와 읽기 가능한 인스턴스 두 개가 있습니다. 읽기 엔드포인트는 읽기 전용 쿼리를 읽기 인스턴스에 분산하여 분석 부하를 격리하고 별도 읽기 복제본 관리 없이 고가용성을 제공합니다." },
    why_wrong: {
      A: { en: "Running complex queries on the writer can still affect production, and scaling one Single-AZ instance does not provide high availability.", ko: "작성자에서 복잡한 쿼리를 실행하면 여전히 프로덕션에 영향을 주며 단일 AZ 인스턴스 확장으로는 고가용성을 제공하지 못합니다." },
      B: { en: "A traditional Multi-AZ DB instance standby is not readable and cannot be used for analytics queries.", ko: "기존 다중 AZ DB 인스턴스의 대기 인스턴스는 읽을 수 없어 분석 쿼리에 사용할 수 없습니다." },
      C: { en: "This can work but requires additional read replicas beyond the Multi-AZ pair, making it more expensive and operationally complex than a Multi-AZ DB cluster.", ko: "가능한 구성이지만 다중 AZ 쌍 외에 읽기 복제본을 추가해야 하므로 다중 AZ DB 클러스터보다 비싸고 운영이 복잡합니다." }
    }
  },
  {
    id: "exam11-537", number: 537, tags: ["Amazon RDS for MySQL", "Amazon ElastiCache for Redis", "EC2 Auto Scaling", "Multi-AZ", "High Availability", "Scalability"],
    question: { en: "A company runs a three-tier web application across three Availability Zones. The architecture has an Application Load Balancer, EC2 web servers that store user session state, and a MySQL database on an EC2 instance. Traffic is expected to increase suddenly. Which solution scales for future demand and provides high availability across all three Availability Zones?", ko: "한 회사가 3개의 가용 영역에서 작동하는 AWS 클라우드에서 3계층 웹 애플리케이션을 실행합니다. 애플리케이션 아키텍처에는 Application Load Balancer, 사용자 세션 상태를 호스팅하는 Amazon EC2 웹 서버, EC2 인스턴스에서 실행되는 MySQL 데이터베이스가 있습니다. 회사는 애플리케이션 트래픽이 갑자기 증가할 것으로 예상합니다. 이 회사는 미래의 애플리케이션 용량 수요를 충족하고 3개의 가용 영역 모두에서 고가용성을 보장하기 위해 확장할 수 있기를 원합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Migrate MySQL to Amazon RDS for MySQL with a Multi-AZ DB cluster. Store and cache session data in highly available Amazon ElastiCache for Redis. Move web servers to Auto Scaling groups across three Availability Zones.", ko: "다중 AZ DB 클러스터 배포를 통해 MySQL 데이터베이스를 MySQL용 Amazon RDS로 마이그레이션합니다. 고가용성 Redis용 Amazon ElastiCache를 사용하여 세션 데이터를 저장하고 읽기를 캐시하십시오. 세 개의 가용 영역에 있는 Auto Scaling 그룹으로 웹 서버를 마이그레이션합니다." },
      { k: "B", en: "Migrate MySQL to an RDS Multi-AZ DB cluster. Store sessions in highly available ElastiCache for Memcached. Use Auto Scaling groups across three Availability Zones.", ko: "다중 AZ DB 클러스터 배포를 통해 MySQL 데이터베이스를 MySQL용 Amazon RDS로 마이그레이션합니다. 고가용성 Memcached용 Amazon ElastiCache를 사용하여 세션 데이터를 저장하고 읽기를 캐시하십시오. 세 개의 가용 영역에 있는 Auto Scaling 그룹으로 웹 서버를 마이그레이션합니다." },
      { k: "C", en: "Migrate MySQL to DynamoDB, use DynamoDB Accelerator for reads and DynamoDB for sessions, and use Auto Scaling groups across three Availability Zones.", ko: "MySQL 데이터베이스를 Amazon DynamoDB로 마이그레이션 DynamoDB Accelerator(DAX)를 사용하여 읽기를 캐시합니다. DynamoDB에 세션 데이터를 저장합니다. 세 개의 가용 영역에 있는 Auto Scaling 그룹으로 웹 서버를 마이그레이션합니다." },
      { k: "D", en: "Migrate MySQL to RDS for MySQL in one Availability Zone. Use highly available ElastiCache for Redis for sessions and Auto Scaling groups across three Availability Zones.", ko: "단일 가용 영역에서 MySQL 데이터베이스를 MySQL용 Amazon RDS로 마이그레이션합니다. 고가용성 Redis용 Amazon ElastiCache를 사용하여 세션 데이터를 저장하고 읽기를 캐시하십시오. 세 개의 가용 영역에 있는 Auto Scaling 그룹으로 웹 서버를 마이그레이션합니다." }
    ],
    answer: ["A"],
    explanation: { en: "RDS for MySQL Multi-AZ provides managed database availability. Redis supports replication and automatic failover and is suitable for durable session state, while distributing an Auto Scaling group across all three Availability Zones makes the stateless web tier resilient and scalable.", ko: "RDS for MySQL 다중 AZ는 관리형 데이터베이스 가용성을 제공합니다. Redis는 복제와 자동 장애 조치를 지원하고 세션 상태 저장에 적합하며 세 가용 영역 전체에 Auto Scaling 그룹을 분산하면 상태 비저장 웹 계층이 복원력과 확장성을 갖습니다." },
    why_wrong: {
      B: { en: "Memcached does not provide Redis-style replication and automatic failover for highly available session persistence.", ko: "Memcached는 고가용성 세션 지속성을 위한 Redis 방식의 복제와 자동 장애 조치를 제공하지 않습니다." },
      C: { en: "Migrating a relational MySQL workload to DynamoDB requires major data-model and application changes and is not necessary.", ko: "관계형 MySQL 워크로드를 DynamoDB로 이전하려면 데이터 모델과 애플리케이션을 크게 변경해야 하며 불필요합니다." },
      D: { en: "A Single-AZ RDS database remains a database-tier single point of failure.", ko: "단일 AZ RDS 데이터베이스는 데이터베이스 계층의 단일 장애 지점으로 남습니다." }
    }
  },
  {
    id: "exam11-538", number: 538, tags: ["Amazon CloudFront", "Geo Restriction", "Content Delivery", "Security"],
    question: { en: "A global video streaming company uses Amazon CloudFront as its CDN. The company will release content gradually in several countries and must prevent viewers outside the countries where content is released from watching it. Which solution meets these requirements?", ko: "글로벌 비디오 스트리밍 회사는 Amazon CloudFront를 콘텐츠 배포 네트워크(CDN)로 사용합니다. 회사는 여러 국가에 단계적으로 콘텐츠를 배포하려고 합니다. 회사는 회사가 콘텐츠를 배포하는 국가 밖에 있는 시청자가 콘텐츠를 볼 수 없도록 해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Add a geographic restriction to the CloudFront distribution by using an allow list and configure a custom error message.", ko: "허용 목록을 사용하여 CloudFront의 콘텐츠에 지리적 제한을 추가합니다. 사용자 지정 오류 메시지를 설정합니다." },
      { k: "B", en: "Set new URLs for restricted content and grant access with signed URLs and cookies. Configure a custom error message.", ko: "제한된 콘텐츠에 대한 새로운 URL을 설정합니다. 서명된 URL 및 쿠키를 사용하여 액세스 권한을 부여합니다. 사용자 지정 오류 메시지를 설정합니다." },
      { k: "C", en: "Encrypt the content data that the company distributes and configure a custom error message.", ko: "회사가 배포하는 콘텐츠에 대한 데이터를 암호화합니다. 사용자 지정 오류 메시지를 설정합니다." },
      { k: "D", en: "Create new URLs for restricted content and configure time-limited access policies for signed URLs.", ko: "제한된 콘텐츠에 대한 새 URL을 만듭니다. 서명된 URL에 대한 시간 제한 액세스 정책을 설정합니다." }
    ],
    answer: ["A"],
    explanation: { en: "CloudFront geographic restrictions can use an allow list of countries whose viewers may access a distribution. Requests from all other countries are blocked at the edge, and the list can be updated as rollout expands.", ko: "CloudFront 지리적 제한은 배포에 액세스할 수 있는 국가의 허용 목록을 사용할 수 있습니다. 다른 국가의 요청은 엣지에서 차단되며 출시 지역이 확대될 때 목록을 갱신할 수 있습니다." },
    why_wrong: {
      B: { en: "Signed URLs and cookies authorize individual users or requests but do not inherently restrict access by viewer country.", ko: "서명된 URL과 쿠키는 개별 사용자나 요청을 승인하지만 시청자 국가에 따른 액세스를 본질적으로 제한하지 않습니다." },
      C: { en: "Encryption protects content confidentiality but does not enforce country-based viewing restrictions.", ko: "암호화는 콘텐츠 기밀성을 보호하지만 국가 기반 시청 제한을 적용하지 않습니다." },
      D: { en: "Time-limited signed URLs control expiration rather than geographic location.", ko: "시간 제한 서명 URL은 지리적 위치가 아니라 만료 시간을 제어합니다." }
    }
  },
  {
    id: "exam11-539", number: 539, tags: ["Amazon RDS for SQL Server", "AWS DMS", "Change Data Capture", "Disaster Recovery", "RPO", "RTO", "Cost Optimization"],
    question: { en: "A company wants to improve an on-premises disaster recovery configuration by using AWS. Its core production application uses Microsoft SQL Server Standard on virtual machines. The required RPO is 30 seconds or less, the RTO is 60 minutes, and cost must be minimized. Which solution meets these requirements?", ko: "회사에서 AWS 클라우드를 사용하여 온프레미스 DR(재해 복구) 구성을 개선하려고 합니다. 회사의 핵심 프로덕션 비즈니스 애플리케이션은 가상 머신(VM)에서 실행되는 Microsoft SQL Server Standard를 사용합니다. 애플리케이션의 RPO(복구 시점 목표)는 30초 이하이고 RTO(복구 시간 목표)는 60분입니다. DR 솔루션은 가능한 한 비용을 최소화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use SQL Server Enterprise with Always On availability groups to configure active-active multi-site operation between on premises and AWS.", ko: "Always On 가용성 그룹과 함께 Microsoft SQL Server Enterprise를 사용하여 온프레미스 서버와 AWS 간에 다중 사이트 활성/활성 설정을 구성합니다." },
      { k: "B", en: "Configure a warm standby Amazon RDS for SQL Server database in AWS and use AWS DMS with change data capture.", ko: "AWS에서 SQL Server 데이터베이스용 웜 대기 Amazon RDS를 구성합니다. 변경 데이터 캡처(CDC)를 사용하도록 AWS DMS(AWS Database Migration Service)를 구성합니다." },
      { k: "C", en: "Use AWS Elastic Disaster Recovery configured to replicate disk changes to pilot-light resources in AWS.", ko: "디스크 변경 사항을 AWS의 파일럿 라이트로 복제하도록 구성된 AWS Elastic Disaster Recovery를 사용합니다." },
      { k: "D", en: "Use third-party backup software to capture nightly backups and store the retention backup set in Amazon S3.", ko: "타사 백업 소프트웨어를 사용하여 매일 밤 백업을 캡처합니다. Amazon S3에 보존 백업 세트를 저장합니다." }
    ],
    answer: ["B"],
    explanation: { en: "AWS DMS change data capture continuously replicates database changes to a managed RDS for SQL Server warm standby. Continuous replication can meet the low RPO, and the ready database supports the one-hour RTO without the licensing and infrastructure cost of active-active SQL Server Enterprise.", ko: "AWS DMS 변경 데이터 캡처는 데이터베이스 변경 사항을 관리형 RDS for SQL Server 웜 스탠바이에 지속적으로 복제합니다. 지속 복제로 낮은 RPO를 충족하고 준비된 데이터베이스로 1시간 RTO를 지원하면서 활성·활성 SQL Server Enterprise의 라이선스와 인프라 비용을 피합니다." },
    why_wrong: {
      A: { en: "Active-active SQL Server Enterprise can meet recovery goals but adds significant licensing and infrastructure cost.", ko: "활성·활성 SQL Server Enterprise는 복구 목표를 충족할 수 있지만 라이선스와 인프라 비용이 크게 증가합니다." },
      C: { en: "Elastic Disaster Recovery replicates entire servers and is less database-focused than a managed RDS warm standby with CDC for this stated workload.", ko: "Elastic Disaster Recovery는 전체 서버를 복제하며 이 데이터베이스 워크로드에는 CDC를 사용하는 관리형 RDS 웜 스탠바이보다 덜 특화되어 있습니다." },
      D: { en: "Nightly backups cannot satisfy an RPO of 30 seconds.", ko: "매일 밤 수행하는 백업으로는 30초 RPO를 충족할 수 없습니다." }
    }
  },
  {
    id: "exam11-540", number: 540, tags: ["Amazon Aurora", "Amazon RDS", "Oracle Migration", "Read Scaling", "Multi-AZ", "High Availability"],
    question: { en: "A company has an on-premises server that uses an Oracle database to process and store customer information. The company wants to use an AWS database service to achieve higher availability, improve application performance, and offload reporting from the primary database. Which solution meets these requirements in the most operationally efficient way?", ko: "회사에는 Oracle 데이터베이스를 사용하여 고객 정보를 처리하고 저장하는 온프레미스 서버가 있습니다. 이 회사는 AWS 데이터베이스 서비스를 사용하여 더 높은 가용성을 달성하고 애플리케이션 성능을 개선하고자 합니다. 회사는 또한 기본 데이터베이스 시스템에서 보고를 오프로드하려고 합니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS DMS to create Amazon RDS DB instances in multiple Regions and point reporting to a separate DB instance.", ko: "AWS Database Migration Service(AWS DMS)를 사용하여 여러 AWS 리전에서 Amazon RDS DB 인스턴스를 생성합니다. 보고 기능은 기본 DB 인스턴스와 별도의 DB 인스턴스를 가리킵니다." },
      { k: "B", en: "Create an Amazon RDS for Oracle database in a Single-AZ deployment, create a read replica in the same Region, and point reporting to it.", ko: "단일 AZ 배포에서 Amazon RDS를 사용하여 Oracle 데이터베이스를 생성합니다. 기본 DB 인스턴스와 동일한 영역에 읽기 전용 복제본을 생성합니다. 보고 기능을 읽기 전용 복제본으로 지정합니다." },
      { k: "C", en: "Create an Amazon RDS for Oracle database in a Multi-AZ DB cluster and point reporting to the reader instance.", ko: "다중 AZ 클러스터 배포에 배포된 Amazon RDS를 사용하여 Oracle 데이터베이스를 생성합니다. 클러스터 배포에서 리더 인스턴스를 사용하도록 보고 기능에 지시합니다." },
      { k: "D", en: "Create an Amazon Aurora database in a Multi-AZ deployment and point the reporting function to a reader instance.", ko: "다중 AZ 인스턴스 배포에 배포된 Amazon RDS를 사용하여 Amazon Aurora 데이터베이스를 생성합니다. 보고 기능을 판독기 인스턴스에 지시합니다." }
    ],
    answer: ["D"],
    explanation: { en: "Amazon Aurora is a fully managed relational database compatible with MySQL and PostgreSQL. Its distributed Multi-AZ storage and reader instances improve availability and read performance, and reporting can use the reader endpoint to offload the writer after the application is migrated to a compatible engine.", ko: "Amazon Aurora는 MySQL 및 PostgreSQL과 호환되는 완전관리형 관계형 데이터베이스입니다. 분산 다중 AZ 스토리지와 읽기 인스턴스가 가용성과 읽기 성능을 높이며 애플리케이션을 호환 엔진으로 마이그레이션한 후 보고 기능은 읽기 엔드포인트를 사용해 작성자 부하를 줄일 수 있습니다." },
    why_wrong: {
      A: { en: "DMS is a migration and replication service, but maintaining databases in multiple Regions is unnecessary for the stated availability and reporting requirement.", ko: "DMS는 마이그레이션 및 복제 서비스이지만 명시된 가용성과 보고 요구에 여러 리전의 데이터베이스를 유지할 필요는 없습니다." },
      B: { en: "A Single-AZ primary does not provide the required high availability even if a separate reader exists.", ko: "별도 읽기 인스턴스가 있어도 단일 AZ 기본 인스턴스는 필요한 고가용성을 제공하지 않습니다." },
      C: { en: "RDS for Oracle does not use the Aurora-style Multi-AZ DB cluster reader architecture described by this option.", ko: "RDS for Oracle은 이 선택지에 설명된 Aurora 방식의 다중 AZ DB 클러스터 읽기 아키텍처를 사용하지 않습니다." }
    }
  },
  {
    id: "exam11-541", number: 541, tags: ["AWS Amplify", "Amazon API Gateway", "AWS Lambda", "Amazon DynamoDB", "Amazon Cognito", "Amazon CloudFront", "Serverless", "Choose three"],
    question: { en: "A company wants to build a web application on AWS. Client requests are unpredictable and can remain idle for long periods. Only subscription-paying customers may sign in and use the application. Which three steps meet these requirements most cost-effectively? (Choose three.)", ko: "회사에서 AWS에 웹 애플리케이션을 구축하려고 합니다. 웹 사이트에 대한 클라이언트 액세스 요청은 예측할 수 없으며 오랫동안 유휴 상태일 수 있습니다. 가입비를 지불한 고객만 웹 애플리케이션에 로그인하고 사용할 수 있습니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (3개 선택)" },
    options: [
      { k: "A", en: "Create an AWS Lambda function that retrieves user information from Amazon DynamoDB. Create an Amazon API Gateway REST API and route API calls to the function.", ko: "Amazon DynamoDB에서 사용자 정보를 검색하는 AWS Lambda 함수를 생성합니다. RESTful API를 수락할 Amazon API Gateway 엔드포인트를 생성하고 API 호출을 Lambda 함수로 보냅니다." },
      { k: "B", en: "Run an Amazon ECS service behind an Application Load Balancer to retrieve user information from Amazon RDS. Create an API Gateway REST API that routes calls to Lambda.", ko: "Application Load Balancer 뒤에 Amazon ECS 서비스를 생성하여 Amazon RDS에서 사용자 정보를 검색합니다. RESTful API를 수락할 Amazon API Gateway 엔드포인트를 생성하고 API 호출을 Lambda 함수로 보냅니다." },
      { k: "C", en: "Create an Amazon Cognito user pool to authenticate users.", ko: "사용자를 인증하기 위해 Amazon Cognito 사용자 풀을 생성합니다." },
      { k: "D", en: "Create an Amazon Cognito identity pool to authenticate users.", ko: "사용자를 인증하기 위해 Amazon Cognito 자격 증명 풀을 생성합니다." },
      { k: "E", en: "Use AWS Amplify to serve the HTML, CSS, and JavaScript frontend through its integrated Amazon CloudFront distribution.", ko: "AWS Amplify를 사용하여 HTML, CSS 및 JavaScript로 된 프런트엔드 웹 콘텐츠를 제공합니다. 통합 Amazon CloudFront 구성을 사용합니다." },
      { k: "F", en: "Use Amazon S3 static website hosting with PHP, CSS, and JavaScript, and use CloudFront to serve the frontend.", ko: "PHP, CSS 및 JavaScript와 함께 Amazon S3 정적 웹 호스팅을 사용합니다. Amazon CloudFront를 사용하여 프런트엔드 웹 콘텐츠를 제공합니다." }
    ],
    answer: ["A", "C", "E"],
    explanation: { en: "API Gateway, Lambda, and DynamoDB provide an on-demand serverless backend that incurs little cost while idle. A Cognito user pool handles application user sign-up and authentication, and Amplify provides managed static frontend hosting through CloudFront.", ko: "API Gateway, Lambda 및 DynamoDB는 유휴 시간의 비용이 적은 온디맨드 서버리스 백엔드를 제공합니다. Cognito 사용자 풀은 애플리케이션 사용자의 가입과 인증을 처리하고 Amplify는 CloudFront를 통한 관리형 정적 프런트엔드 호스팅을 제공합니다." },
    why_wrong: {
      B: { en: "An always-available ECS, ALB, and RDS stack has higher baseline cost and the described API routing is inconsistent.", ko: "항상 실행되는 ECS, ALB 및 RDS 구성은 기본 비용이 더 높고 설명된 API 라우팅도 일관되지 않습니다." },
      D: { en: "An identity pool grants temporary AWS credentials; a user pool is the service for application user authentication.", ko: "자격 증명 풀은 임시 AWS 자격 증명을 제공하며 애플리케이션 사용자 인증에는 사용자 풀이 적합합니다." },
      F: { en: "S3 static website hosting cannot execute server-side PHP.", ko: "S3 정적 웹 사이트 호스팅은 서버 측 PHP를 실행할 수 없습니다." }
    }
  },
  {
    id: "exam11-542", number: 542, tags: ["Amazon CloudFront", "Signed URLs", "Amazon S3", "Premium Content", "Security"],
    question: { en: "A media company distributes content over the internet with CloudFront. Only premium customers may access media streams and files stored in S3, including custom content such as movie rentals and music downloads. Which solution meets these requirements?", ko: "미디어 회사는 Amazon CloudFront 배포를 사용하여 인터넷을 통해 콘텐츠를 제공합니다. 회사는 프리미엄 고객만 미디어 스트림과 파일 콘텐츠에 액세스할 수 있기를 원합니다. 모든 콘텐츠는 Amazon S3 버킷에 저장되며 영화 대여나 음악 다운로드 같은 주문형 콘텐츠도 제공합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create S3 signed cookies and provide them to premium customers.", ko: "S3 서명 쿠키를 생성하여 프리미엄 고객에게 제공합니다." },
      { k: "B", en: "Generate CloudFront signed URLs and provide them to premium customers.", ko: "프리미엄 고객에게 CloudFront 서명 URL을 생성하고 제공합니다." },
      { k: "C", en: "Use origin access control to restrict non-premium customers.", ko: "원본 액세스 제어(OAC)를 사용하여 비프리미엄 고객의 액세스를 제한합니다." },
      { k: "D", en: "Enable field-level encryption to block non-premium customers.", ko: "비프리미엄 고객을 차단하기 위해 필드 수준 암호화를 생성하고 활성화합니다." }
    ],
    answer: ["B"],
    explanation: { en: "CloudFront signed URLs grant time-limited access to individual private files, which fits customized content such as a specific rental or download.", ko: "CloudFront 서명 URL은 개별 비공개 파일에 시간 제한 액세스를 부여하므로 특정 대여 또는 다운로드 같은 주문형 콘텐츠에 적합합니다." },
    why_wrong: {
      A: { en: "Signed cookies are a CloudFront feature, not S3 signed cookies, and are generally better for access to multiple files.", ko: "서명 쿠키는 S3가 아니라 CloudFront 기능이며 일반적으로 여러 파일에 대한 액세스에 적합합니다." },
      C: { en: "OAC secures the S3 origin from direct access but does not identify premium viewers.", ko: "OAC는 S3 원본에 대한 직접 액세스를 차단하지만 프리미엄 시청자를 식별하지 않습니다." },
      D: { en: "Field-level encryption protects selected request fields and is unrelated to viewer authorization.", ko: "필드 수준 암호화는 선택한 요청 필드를 보호하며 시청자 권한 부여와 관련이 없습니다." }
    }
  },
  {
    id: "exam11-543", number: 543, tags: ["AWS Organizations", "Savings Plans", "Discount Sharing", "Cost Optimization", "Choose two"],
    question: { en: "A company runs EC2 instances in several separately billed AWS accounts. It recently purchased a Savings Plan but terminated many instances after business requirements changed. The company wants other AWS accounts to use the Savings Plan discount. Which two steps meet this requirement? (Choose two.)", ko: "회사는 개별적으로 청구되는 여러 AWS 계정에서 Amazon EC2 인스턴스를 실행합니다. 최근 Savings Plan을 구매했지만 비즈니스 요구 사항 변경으로 많은 EC2 인스턴스를 폐기했습니다. 회사는 다른 AWS 계정에서 Savings Plan 할인을 사용하려고 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "In the management account, enable discount sharing in the AWS Billing preferences.", ko: "마스터 계정의 AWS 계정 관리 콘솔에서 결제 기본 설정 섹션의 할인 공유를 켭니다." },
      { k: "B", en: "In the account that purchased the Savings Plan, enable discount sharing and include all accounts.", ko: "기존 Savings Plan을 구매한 계정의 AWS 계정 관리 콘솔에서 결제 기본 설정의 할인 공유를 켜고 모든 계정을 포함합니다." },
      { k: "C", en: "Use AWS Resource Access Manager in the Organizations management account to share the Savings Plan.", ko: "AWS Organizations 마스터 계정에서 AWS Resource Access Manager(AWS RAM)를 사용하여 다른 계정과 Savings Plan을 공유합니다." },
      { k: "D", en: "Create a new organization in the payer account and invite the other accounts to join from the management account.", ko: "새 지급인 계정의 AWS Organizations에서 조직을 생성합니다. 다른 AWS 계정을 초대하여 마스터 계정에서 조직에 가입합니다." },
      { k: "E", en: "Create an AWS Organization in the existing payer account and invite the other AWS accounts to join it.", ko: "기존 EC2 인스턴스 및 Savings Plan을 사용하는 기존 AWS 계정의 AWS Organizations에 조직을 생성합니다. 다른 AWS 계정을 초대하여 마스터 계정에서 조직에 가입합니다." }
    ],
    answer: ["A", "E"],
    explanation: { en: "Savings Plans discounts can be shared across accounts under consolidated billing in AWS Organizations. The existing payer account should become the management account, invite the other accounts, and enable discount sharing in its billing preferences.", ko: "Savings Plans 할인은 AWS Organizations 통합 결제에 속한 계정 간에 공유할 수 있습니다. 기존 지급인 계정에서 조직을 만들고 다른 계정을 초대한 뒤 관리 계정의 결제 기본 설정에서 할인 공유를 활성화해야 합니다." },
    why_wrong: {
      B: { en: "Discount sharing is controlled by the Organizations management account, not independently by the purchasing member account.", ko: "할인 공유는 구매한 멤버 계정이 독립적으로 제어하는 것이 아니라 Organizations 관리 계정에서 제어합니다." },
      C: { en: "AWS RAM does not share Savings Plans.", ko: "AWS RAM은 Savings Plans를 공유하지 않습니다." },
      D: { en: "Creating a separate new payer organization would not place the existing plan and accounts under the intended consolidated billing structure.", ko: "별도의 새 지급인 조직을 만들면 기존 플랜과 계정이 의도한 통합 결제 구조에 함께 배치되지 않습니다." }
    }
  },
  {
    id: "exam11-544", number: 544, tags: ["Amazon API Gateway", "Canary Release", "Deployment", "REST API", "Route 53"],
    question: { en: "A retail company uses a Regional API Gateway REST API with a custom domain whose Route 53 alias points to the endpoint. A new API version must be released with minimal customer impact and data loss. Which solution meets these requirements?", ko: "소매 회사는 퍼블릭 REST API에 리전 Amazon API Gateway API를 사용합니다. API Gateway 엔드포인트는 Amazon Route 53 별칭 레코드를 가리키는 사용자 지정 도메인 이름입니다. 솔루션 아키텍트는 고객에게 최소한의 영향을 미치고 데이터 손실을 최소화하여 새 버전의 API를 릴리스해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Create a canary release deployment stage, send an appropriate percentage of traffic to it, validate it, and then promote the canary to production.", ko: "API Gateway에 대한 카나리아 릴리스 배포 단계를 생성합니다. 최신 API 버전을 배포하고 트래픽의 적절한 비율을 카나리아 단계로 지정합니다. API 검증 후 카나리아 단계를 프로덕션 단계로 승격합니다." },
      { k: "B", en: "Create a new API endpoint from an OpenAPI YAML definition, merge-import updates, and deploy the new version directly to production.", ko: "OpenAPI YAML 파일 형식의 새 API 버전으로 새 API Gateway 엔드포인트를 생성합니다. API Gateway API에 병합 모드의 가져오기-업데이트 작업을 사용하고 새 버전을 프로덕션 단계에 배포합니다." },
      { k: "C", en: "Create a new API endpoint from an OpenAPI JSON definition, overwrite-import updates, and deploy it directly to production.", ko: "OpenAPI JSON 파일 형식의 새 API 버전으로 새 API Gateway 엔드포인트를 생성합니다. 덮어쓰기 모드에서 업데이트로 가져오기 작업을 사용하고 새 버전을 프로덕션 단계에 배포합니다." },
      { k: "D", en: "Create a separate API endpoint and custom domain for the new version, then repoint the Route 53 alias to it.", ko: "API 정의의 새 버전으로 새 API Gateway 엔드포인트를 생성합니다. 새 API의 사용자 지정 도메인 이름을 생성하고 Route 53 별칭 레코드가 새 사용자 지정 도메인을 가리키도록 합니다." }
    ],
    answer: ["A"],
    explanation: { en: "API Gateway canary releases direct a small configured percentage of production traffic to the new deployment. After validation, the canary can be promoted without a disruptive DNS cutover.", ko: "API Gateway 카나리아 릴리스는 구성된 소량의 프로덕션 트래픽을 새 배포로 보냅니다. 검증 후 DNS 전환으로 인한 중단 없이 카나리아를 프로덕션으로 승격할 수 있습니다." },
    why_wrong: {
      B: { en: "Deploying an imported version directly to production provides no gradual traffic validation.", ko: "가져온 버전을 프로덕션에 직접 배포하면 점진적으로 트래픽을 검증할 수 없습니다." },
      C: { en: "Overwrite import followed by direct production deployment increases change risk and offers no canary control.", ko: "덮어쓰기 가져오기 후 직접 프로덕션에 배포하면 변경 위험이 커지고 카나리아 제어가 없습니다." },
      D: { en: "A DNS cutover shifts clients broadly and can be affected by resolver caching; it is less controlled than a stage canary.", ko: "DNS 전환은 클라이언트를 광범위하게 이동시키고 리졸버 캐시의 영향을 받을 수 있어 단계 카나리아보다 제어가 어렵습니다." }
    }
  },
  {
    id: "exam11-545", number: 545, tags: ["Amazon Route 53", "Failover Routing", "Health Check", "Amazon S3", "Application Load Balancer", "High Availability"],
    question: { en: "A company wants users to see a backup static error page when its primary website is unavailable. The primary DNS record is hosted in Route 53 and points to an Application Load Balancer. Which solution minimizes changes and infrastructure overhead?", ko: "회사는 기본 웹 사이트를 사용할 수 없는 경우 사용자를 백업 정적 오류 페이지로 안내하려고 합니다. 기본 웹 사이트의 DNS 레코드는 Amazon Route 53에서 호스팅되고 도메인은 Application Load Balancer(ALB)를 가리킵니다. 회사는 변경 및 인프라 오버헤드를 최소화하는 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use latency routing and add an S3-hosted error page as the fastest endpoint.", ko: "지연 시간 라우팅 정책을 사용하도록 Route 53 레코드를 업데이트합니다. 트래픽이 가장 반응이 빠른 엔드포인트로 전송되도록 Amazon S3 버킷에서 호스팅되는 정적 오류 페이지를 레코드에 추가합니다." },
      { k: "B", en: "Configure Route 53 active-passive failover. Use a health check for the ALB primary and an S3-hosted static error page as the secondary.", ko: "Route 53 활성-수동 장애 조치 구성을 설정합니다. Route 53 상태 확인에서 ALB 엔드포인트가 비정상이라고 판단하면 Amazon S3 버킷에서 호스팅되는 정적 오류 페이지로 트래픽을 보냅니다." },
      { k: "C", en: "Host the error page on EC2 behind another ALB and configure active-active routing that uses it only when the primary ALB health check fails.", ko: "정적 오류 페이지를 엔드포인트로 호스팅하는 Amazon EC2 인스턴스와 ALB를 사용하여 Route 53 활성-활성 구성을 설정합니다. 기본 ALB 상태 확인이 실패한 경우에만 인스턴스에 요청을 보내도록 구성합니다." },
      { k: "D", en: "Use multivalue answer routing with health checks for the website and an S3-hosted error page.", ko: "다중값 응답 라우팅 정책을 사용하도록 Route 53 레코드를 업데이트합니다. 상태 확인이 통과되면 웹 사이트로, 실패하면 Amazon S3에서 호스팅되는 정적 오류 페이지로 트래픽을 보냅니다." }
    ],
    answer: ["B"],
    explanation: { en: "Route 53 failover routing supports a primary resource with a health check and a passive secondary. An S3 static website is a low-maintenance secondary endpoint for an error page.", ko: "Route 53 장애 조치 라우팅은 상태 확인이 연결된 기본 리소스와 수동 보조 리소스를 지원합니다. S3 정적 웹 사이트는 오류 페이지를 위한 관리 부담이 적은 보조 엔드포인트입니다." },
    why_wrong: {
      A: { en: "Latency routing chooses the lowest-latency healthy endpoint and does not express primary-passive failover behavior.", ko: "지연 시간 라우팅은 지연 시간이 가장 낮은 정상 엔드포인트를 선택하며 기본-수동 장애 조치 동작을 표현하지 않습니다." },
      C: { en: "EC2 and another ALB add unnecessary cost and operations for a static error page.", ko: "정적 오류 페이지에 EC2와 추가 ALB를 사용하면 불필요한 비용과 운영 부담이 발생합니다." },
      D: { en: "Multivalue routing returns multiple healthy records but does not provide primary-secondary failover semantics.", ko: "다중값 라우팅은 여러 정상 레코드를 반환하지만 기본-보조 장애 조치 기능을 제공하지 않습니다." }
    }
  },
  {
    id: "exam11-546", number: 546, tags: ["AWS Storage Gateway", "Tape Gateway", "Virtual Tape Library", "Backup", "Hybrid Storage", "Cost Optimization"],
    question: { en: "A company needs to reduce backup costs, simplify its on-premises backup infrastructure, eliminate physical tapes, and preserve its investment in existing backup applications and workflows. What should a solutions architect recommend?", ko: "회사의 IT 비용 분석에서 백업 비용을 줄여야 할 필요성이 강조되었습니다. CIO는 온프레미스 백업 인프라를 단순화하고 물리적 백업 테이프 사용을 제거하여 비용을 절감하려고 합니다. 회사는 온프레미스 백업 애플리케이션 및 워크플로우에 대한 기존 투자를 보존해야 합니다. 솔루션 설계자는 무엇을 추천해야 합니까?" },
    options: [
      { k: "A", en: "Configure AWS Storage Gateway with an NFS interface for the backup application.", ko: "NFS 인터페이스를 사용하여 백업 애플리케이션과 연결하도록 AWS Storage Gateway를 설정합니다." },
      { k: "B", en: "Configure an Amazon EFS file system with an NFS interface for the backup application.", ko: "NFS 인터페이스를 사용하여 백업 애플리케이션과 연결하는 Amazon EFS 파일 시스템을 설정합니다." },
      { k: "C", en: "Configure an Amazon EFS file system with an iSCSI interface for the backup application.", ko: "iSCSI 인터페이스를 사용하여 백업 애플리케이션과 연결하는 Amazon EFS 파일 시스템을 설정합니다." },
      { k: "D", en: "Configure AWS Storage Gateway Tape Gateway with an iSCSI virtual tape library interface for the backup application.", ko: "iSCSI 가상 테이프 라이브러리(VTL) 인터페이스를 사용하여 백업 애플리케이션과 연결하도록 AWS Storage Gateway를 설정합니다." }
    ],
    answer: ["D"],
    explanation: { en: "Tape Gateway presents an iSCSI virtual tape library that integrates with existing tape backup software while storing virtual tapes in AWS, removing physical media and preserving workflows.", ko: "Tape Gateway는 기존 테이프 백업 소프트웨어와 통합되는 iSCSI 가상 테이프 라이브러리를 제공하면서 가상 테이프를 AWS에 저장하므로 물리적 미디어를 제거하고 기존 워크플로우를 보존합니다." },
    why_wrong: {
      A: { en: "An NFS file interface does not emulate the tape library expected by existing tape workflows.", ko: "NFS 파일 인터페이스는 기존 테이프 워크플로우가 기대하는 테이프 라이브러리를 에뮬레이션하지 않습니다." },
      B: { en: "EFS is a cloud file system and does not provide a virtual tape library for on-premises backup software.", ko: "EFS는 클라우드 파일 시스템이며 온프레미스 백업 소프트웨어용 가상 테이프 라이브러리를 제공하지 않습니다." },
      C: { en: "EFS uses NFS, not iSCSI, and is not a VTL replacement.", ko: "EFS는 iSCSI가 아니라 NFS를 사용하며 VTL 대체 서비스가 아닙니다." }
    }
  },
  {
    id: "exam11-547", number: 547, tags: ["Amazon Kinesis Data Firehose", "Amazon S3", "Streaming", "Data Ingestion", "Serverless", "Operational Excellence"],
    question: { en: "A company has data-collection sensors in different locations that stream large volumes of data. It needs a scalable AWS platform for near-real-time collection and processing and must store the data in S3 for future reporting. Which solution has the least operational overhead?", ko: "회사는 서로 다른 위치에 데이터 수집 센서를 가지고 있습니다. 데이터 수집 센서는 대량의 데이터를 회사로 스트리밍합니다. 회사는 대용량 스트리밍 데이터를 수집하고 처리하기 위해 AWS에서 플랫폼을 설계하려고 합니다. 솔루션은 확장 가능해야 하며 거의 실시간으로 데이터 수집을 지원해야 합니다. 회사는 향후 보고를 위해 데이터를 Amazon S3에 저장해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use Amazon Kinesis Data Firehose to deliver the streaming data to Amazon S3.", ko: "Amazon Kinesis Data Firehose를 사용하여 스트리밍 데이터를 Amazon S3에 전달합니다." },
      { k: "B", en: "Use AWS Glue to deliver the streaming data to Amazon S3.", ko: "AWS Glue를 사용하여 스트리밍 데이터를 Amazon S3에 전달합니다." },
      { k: "C", en: "Use AWS Lambda to deliver the streaming data and store it in Amazon S3.", ko: "AWS Lambda를 사용하여 스트리밍 데이터를 전달하고 데이터를 Amazon S3에 저장합니다." },
      { k: "D", en: "Use AWS DMS to deliver the streaming data to Amazon S3.", ko: "AWS DMS(AWS Database Migration Service)를 사용하여 스트리밍 데이터를 Amazon S3에 전달합니다." }
    ],
    answer: ["A"],
    explanation: { en: "Kinesis Data Firehose is a fully managed, automatically scaling service for capturing, optionally transforming, and delivering streaming data to S3 with near-real-time buffering.", ko: "Kinesis Data Firehose는 스트리밍 데이터를 캡처하고 선택적으로 변환한 뒤 거의 실시간 버퍼링으로 S3에 전달하는 완전관리형 자동 확장 서비스입니다." },
    why_wrong: {
      B: { en: "AWS Glue focuses on data integration and ETL and is not the direct managed delivery stream for this use case.", ko: "AWS Glue는 데이터 통합과 ETL에 중점을 두며 이 사용 사례의 직접적인 관리형 전송 스트림이 아닙니다." },
      C: { en: "A custom Lambda ingestion pipeline requires more code, scaling considerations, and operational management.", ko: "사용자 지정 Lambda 수집 파이프라인은 더 많은 코드와 확장 고려 사항 및 운영 관리가 필요합니다." },
      D: { en: "AWS DMS is designed primarily for database migration and change-data replication.", ko: "AWS DMS는 주로 데이터베이스 마이그레이션과 변경 데이터 복제를 위해 설계되었습니다." }
    }
  },
  {
    id: "exam11-548", number: 548, tags: ["AWS Organizations", "Service Control Policies", "Organizational Units", "Governance", "Security", "Cost Control"],
    question: { en: "A company has separate AWS accounts for finance, data analytics, and development. For cost and security reasons, it wants to control which AWS services each account can use with the least operational overhead. Which solution meets these requirements?", ko: "회사에는 재무, 데이터 분석 및 개발 부서를 위한 별도의 AWS 계정이 있습니다. 비용 및 보안 문제 때문에 회사는 각 AWS 계정이 사용할 수 있는 서비스를 제어하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?" },
    options: [
      { k: "A", en: "Use AWS Systems Manager templates to control the services each department can use.", ko: "AWS Systems Manager 템플릿을 사용하여 각 부서에서 사용할 수 있는 AWS 서비스를 제어합니다." },
      { k: "B", en: "Create an organizational unit for each department in AWS Organizations and attach service control policies to the OUs.", ko: "AWS Organizations의 각 부서에 대한 조직 단위(OU)를 생성합니다. 서비스 제어 정책(SCP)을 OU에 연결합니다." },
      { k: "C", en: "Use AWS CloudFormation to automatically provision only the services each department may use.", ko: "AWS CloudFormation을 사용하여 각 부서에서 사용할 수 있는 AWS 서비스만 자동으로 프로비저닝합니다." },
      { k: "D", en: "Configure product portfolios in AWS Service Catalog in each account to control use of specific services.", ko: "특정 AWS 서비스의 사용을 관리 및 제어하기 위해 각 AWS 계정의 AWS Service Catalog에 제품 목록을 설정합니다." }
    ],
    answer: ["B"],
    explanation: { en: "AWS Organizations groups accounts into OUs, and SCPs centrally define the maximum service permissions available to accounts in each OU. This provides scalable guardrails with low administrative effort.", ko: "AWS Organizations는 계정을 OU로 그룹화하고 SCP는 각 OU의 계정에 허용되는 최대 서비스 권한을 중앙에서 정의합니다. 이를 통해 관리 부담이 적은 확장 가능한 가드레일을 제공합니다." },
    why_wrong: {
      A: { en: "Systems Manager templates do not set account-wide service permission boundaries.", ko: "Systems Manager 템플릿은 계정 전체의 서비스 권한 경계를 설정하지 않습니다." },
      C: { en: "CloudFormation provisions resources but does not prevent users from using other services.", ko: "CloudFormation은 리소스를 프로비저닝하지만 사용자가 다른 서비스를 사용하는 것을 방지하지 않습니다." },
      D: { en: "Service Catalog governs approved products, but per-account portfolios require more administration and do not provide organization-wide permission guardrails like SCPs.", ko: "Service Catalog는 승인된 제품을 관리하지만 계정별 포트폴리오는 관리가 더 필요하며 SCP 같은 조직 전체 권한 가드레일을 제공하지 않습니다." }
    }
  },
  {
    id: "exam11-549", number: 549, tags: ["NAT Gateway", "Amazon VPC", "Private Subnet", "Internet Access", "Security", "Operational Excellence"],
    question: { en: "A multi-tier ecommerce application has an ALB and web tier in public subnets and a MySQL cluster on EC2 in private subnets. The database must retrieve catalog and pricing data from a third-party provider on the internet without becoming publicly exposed. Which solution maximizes security without increasing operational overhead?", ko: "회사에서 전자상거래 웹 사이트를 위한 다중 계층 애플리케이션을 만들었습니다. 웹 사이트는 퍼블릭 서브넷의 Application Load Balancer와 웹 계층, 프라이빗 서브넷의 Amazon EC2 인스턴스에서 호스팅되는 MySQL 클러스터를 사용합니다. MySQL 데이터베이스는 타사 공급자가 인터넷에서 호스팅하는 제품 카탈로그 및 가격 정보를 검색해야 합니다. 솔루션 설계자는 운영 오버헤드를 늘리지 않고 보안을 극대화해야 합니다. 무엇을 해야 합니까?" },
    options: [
      { k: "A", en: "Deploy a NAT instance in the VPC and route all internet-bound traffic through it.", ko: "VPC에 NAT 인스턴스를 배포합니다. NAT 인스턴스를 통해 모든 인터넷 기반 트래픽을 라우팅합니다." },
      { k: "B", en: "Deploy a NAT gateway in a public subnet and update the private-subnet route table to send internet-bound traffic to it.", ko: "퍼블릭 서브넷에 NAT 게이트웨이를 배포합니다. 인터넷 바인딩된 모든 트래픽을 NAT 게이트웨이로 보내도록 프라이빗 서브넷 라우팅 테이블을 수정합니다." },
      { k: "C", en: "Attach an internet gateway directly to the private-subnet route table for internet-bound traffic.", ko: "인터넷 게이트웨이를 구성하고 프라이빗 서브넷 라우팅 테이블에 연결하여 인터넷 바인딩 트래픽을 인터넷 게이트웨이로 보냅니다." },
      { k: "D", en: "Create and attach a virtual private gateway, then route internet-bound traffic from the private subnet through it.", ko: "가상 프라이빗 게이트웨이를 구성하고 VPC에 연결합니다. 인터넷 바인딩 트래픽을 가상 프라이빗 게이트웨이로 보내도록 프라이빗 서브넷 라우팅 테이블을 수정합니다." }
    ],
    answer: ["B"],
    explanation: { en: "A managed NAT gateway in a public subnet lets private instances initiate outbound internet connections while preventing unsolicited inbound internet connections. It also avoids the maintenance and scaling burden of a NAT instance.", ko: "퍼블릭 서브넷의 관리형 NAT 게이트웨이는 프라이빗 인스턴스가 아웃바운드 인터넷 연결을 시작하게 하면서 원치 않는 인바운드 인터넷 연결은 차단합니다. 또한 NAT 인스턴스의 유지 관리와 확장 부담이 없습니다." },
    why_wrong: {
      A: { en: "A NAT instance can provide outbound access but requires patching, scaling, and high-availability management.", ko: "NAT 인스턴스도 아웃바운드 액세스를 제공하지만 패치, 확장 및 고가용성 관리가 필요합니다." },
      C: { en: "An internet gateway alone does not provide internet access to instances without public IP addresses and would undermine the private design if public addresses were added.", ko: "인터넷 게이트웨이만으로는 퍼블릭 IP가 없는 인스턴스에 인터넷 액세스를 제공하지 못하며 퍼블릭 주소를 추가하면 프라이빗 설계가 약화됩니다." },
      D: { en: "A virtual private gateway terminates VPN or Direct Connect connectivity and is not an internet egress service.", ko: "가상 프라이빗 게이트웨이는 VPN 또는 Direct Connect 연결을 종단하며 인터넷 송신 서비스가 아닙니다." }
    }
  },
  {
    id: "exam11-550", number: 550, tags: ["AWS Lambda", "AWS KMS", "IAM Execution Role", "Key Policy", "Encryption", "Choose two"],
    question: { en: "A company encrypts AWS Lambda environment variables with an AWS KMS key. A solutions architect must ensure the function has permission to decrypt and use the variables. Which two steps implement the correct permissions? (Choose two.)", ko: "회사에서 AWS Key Management Service(AWS KMS) 키를 사용하여 AWS Lambda 환경 변수를 암호화하고 있습니다. 솔루션 설계자는 환경 변수를 해독하고 사용하는 데 필요한 권한이 있는지 확인해야 합니다. 올바른 권한을 구현하기 위해 솔루션 설계자가 수행해야 하는 단계는 무엇입니까? (2개 선택)" },
    options: [
      { k: "A", en: "Add AWS KMS permissions to the Lambda resource policy.", ko: "Lambda 리소스 정책에 AWS KMS 권한을 추가합니다." },
      { k: "B", en: "Add the required AWS KMS permissions to the Lambda execution role.", ko: "Lambda 실행 역할에 AWS KMS 권한을 추가합니다." },
      { k: "C", en: "Add AWS KMS permissions to a Lambda function policy.", ko: "Lambda 함수 정책에 AWS KMS 권한을 추가합니다." },
      { k: "D", en: "Allow the Lambda execution role in the AWS KMS key policy.", ko: "AWS KMS 키 정책에서 Lambda 실행 역할을 허용합니다." },
      { k: "E", en: "Allow the Lambda resource policy in the AWS KMS key policy.", ko: "AWS KMS 키 정책에서 Lambda 리소스 정책을 허용합니다." }
    ],
    answer: ["B", "D"],
    explanation: { en: "The Lambda execution role needs permission such as kms:Decrypt, and the KMS key policy must allow that principal to use the key. Both identity-based and key-policy authorization must permit the operation.", ko: "Lambda 실행 역할에는 kms:Decrypt 같은 권한이 필요하며 KMS 키 정책도 해당 보안 주체가 키를 사용하도록 허용해야 합니다. 자격 증명 기반 정책과 키 정책 모두 작업을 허용해야 합니다." },
    why_wrong: {
      A: { en: "A Lambda resource policy controls who may invoke or access the function, not the AWS service permissions used by its code.", ko: "Lambda 리소스 정책은 함수를 호출하거나 액세스할 주체를 제어하며 함수 코드가 사용하는 AWS 서비스 권한을 제공하지 않습니다." },
      C: { en: "The function receives AWS API permissions through its execution role; a separate function policy is not the correct identity policy location.", ko: "함수는 실행 역할을 통해 AWS API 권한을 받으며 별도의 함수 정책은 올바른 자격 증명 정책 위치가 아닙니다." },
      E: { en: "A KMS key policy grants access to IAM principals such as the execution role, not to another resource policy document.", ko: "KMS 키 정책은 실행 역할 같은 IAM 보안 주체에 액세스를 부여하며 다른 리소스 정책 문서에 권한을 부여하지 않습니다." }
    }
  }
  ]
});
