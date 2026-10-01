/* Exam 15 · Topic 1 · 현재 수록 범위: 701~725번 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  "id": "exam15",
  "title": "Exam 15",
  "note": "Topic 1 · #701–725",
  "questions": [
    {
      "id": "exam12-701",
      "number": 701,
      "tags": [
        "Amazon EFS",
        "Amazon EC2",
        "Shared File System",
        "Multi-AZ",
        "High Availability"
      ],
      "question": {
        "en": "A company runs an application on Amazon EC2 instances backed by Amazon EBS. Employees experience availability problems when storing and searching files larger than 25 GB. The solution must require no file transfers between EC2 instances, and the files must be usable from multiple EC2 instances across multiple Availability Zones. Which solution meets these requirements?",
        "ko": "회사는 Amazon Elastic Block Store(Amazon EBS)가 지원하는 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 직원이 25GB 이상의 파일을 저장하고 검색할 때 애플리케이션 가용성 문제가 발생합니다. EC2 인스턴스 간에 파일을 전송할 필요가 없어야 하며 파일은 여러 EC2 인스턴스와 여러 가용 영역에서 사용할 수 있어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Migrate all files to an Amazon S3 bucket and instruct employees to access the files in the bucket.",
          "ko": "모든 파일을 Amazon S3 버킷으로 마이그레이션하고 직원에게 S3 버킷의 파일에 액세스하도록 지시합니다."
        },
        {
          "k": "B",
          "en": "Snapshot the existing EBS volume, mount volumes created from the snapshot across the EC2 instances, and direct employees to the instance files.",
          "ko": "기존 EBS 볼륨의 스냅샷을 찍고 EC2 인스턴스 전반에 걸쳐 스냅샷으로 생성한 EBS 볼륨을 탑재한 뒤 직원에게 EC2 인스턴스의 파일에 액세스하도록 지시합니다."
        },
        {
          "k": "C",
          "en": "Mount an Amazon EFS file system on all EC2 instances and direct employees to the files through the instances.",
          "ko": "모든 EC2 인스턴스에 Amazon Elastic File System(Amazon EFS) 파일 시스템을 탑재하고 직원에게 EC2 인스턴스의 파일에 액세스하도록 지시합니다."
        },
        {
          "k": "D",
          "en": "Create an AMI from an EC2 instance, launch new instances with instance store volumes from the AMI, and direct employees to the instance files.",
          "ko": "EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성하고 인스턴스 스토어 볼륨을 사용하는 AMI에서 새 EC2 인스턴스를 구성한 뒤 직원에게 EC2 인스턴스의 파일에 액세스하도록 지시합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Amazon EFS provides a managed, elastic NFS file system that can be mounted concurrently by many EC2 instances across Availability Zones in a Region. Every instance sees the same files without copying data between instances, and regional EFS storage is designed for high availability and durability.",
        "ko": "Amazon EFS는 한 리전의 여러 가용 영역에 있는 다수의 EC2 인스턴스가 동시에 탑재할 수 있는 완전관리형 탄력적 NFS 파일 시스템입니다. 인스턴스 사이에서 데이터를 복사하지 않아도 모든 인스턴스가 동일한 파일을 볼 수 있으며 리전 EFS 스토리지는 고가용성과 내구성을 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "S3 is object storage and does not provide the shared POSIX file-system interface expected by the EC2 application without application changes.",
          "ko": "S3는 객체 스토리지이므로 애플리케이션 변경 없이 EC2 애플리케이션이 기대하는 공유 POSIX 파일 시스템 인터페이스를 제공하지 않습니다."
        },
        "B": {
          "en": "Independent volumes created from a snapshot do not remain synchronized, and ordinary EBS volumes cannot be shared across multiple Availability Zones.",
          "ko": "스냅샷에서 각각 생성한 볼륨은 서로 동기화되지 않으며 일반 EBS 볼륨은 여러 가용 영역에서 공유할 수 없습니다."
        },
        "D": {
          "en": "Instance store is ephemeral and local to one instance, so it neither provides durable storage nor a shared multi-AZ file system.",
          "ko": "인스턴스 스토어는 일시적이며 한 인스턴스에 로컬로 연결되므로 내구성 있는 스토리지나 다중 AZ 공유 파일 시스템을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-702",
      "number": 702,
      "tags": [
        "Security Groups",
        "Amazon RDS",
        "VPC",
        "Private Subnet",
        "Least Privilege"
      ],
      "question": {
        "en": "A solutions architect is developing a multi-subnet VPC architecture with six public, private, and database subnets across two Availability Zones. Only Amazon EC2 instances running in the private subnets must be able to access the database. Which solution meets this requirement?",
        "ko": "솔루션 설계자가 다중 서브넷 VPC 아키텍처를 개발 중입니다. 솔루션은 2개의 가용 영역에 있는 6개의 서브넷으로 구성되며 서브넷은 공용, 사설 및 데이터베이스 전용으로 정의됩니다. 프라이빗 서브넷에서 실행되는 Amazon EC2 인스턴스만 데이터베이스에 액세스할 수 있어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a new route table that excludes routes for the public subnet CIDR blocks and associate it with the database subnets.",
          "ko": "퍼블릭 서브넷의 CIDR 블록에 대한 경로를 제외하는 새 라우팅 테이블을 생성하고 라우팅 테이블을 데이터베이스 서브넷에 연결합니다."
        },
        {
          "k": "B",
          "en": "Create a security group that denies traffic from the security group used by the public-subnet instances and attach it to the RDS DB instance.",
          "ko": "퍼블릭 서브넷의 인스턴스가 사용하는 보안 그룹으로부터의 수신을 거부하는 보안 그룹을 생성하고 보안 그룹을 Amazon RDS DB 인스턴스에 연결합니다."
        },
        {
          "k": "C",
          "en": "Create a security group that allows traffic from the security group used by the private-subnet instances and attach it to the RDS DB instance.",
          "ko": "프라이빗 서브넷의 인스턴스가 사용하는 보안 그룹으로부터의 수신을 허용하는 보안 그룹을 생성하고 보안 그룹을 Amazon RDS DB 인스턴스에 연결합니다."
        },
        {
          "k": "D",
          "en": "Create a new VPC peering connection between the public and private subnets, and another peering connection between the private and database subnets.",
          "ko": "퍼블릭 서브넷과 프라이빗 서브넷 사이에 새 피어링 연결을 생성하고 프라이빗 서브넷과 데이터베이스 서브넷 간에 다른 피어링 연결을 만듭니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Security groups are stateful allow-list controls. Referencing the private application instances' security group in the database security group's inbound rule permits only those instances to reach the database port, independent of changing instance IP addresses.",
        "ko": "보안 그룹은 상태 저장 방식의 허용 목록 제어입니다. 데이터베이스 보안 그룹의 인바운드 규칙에서 프라이빗 애플리케이션 인스턴스의 보안 그룹을 참조하면 인스턴스 IP가 바뀌어도 해당 인스턴스만 데이터베이스 포트에 접근할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Subnets in the same VPC receive a local route for the VPC CIDR, so omitting explicit public-subnet routes does not enforce the required source restriction.",
          "ko": "동일한 VPC의 서브넷은 VPC CIDR에 대한 로컬 경로를 가지므로 퍼블릭 서브넷 경로를 명시적으로 생략해도 필요한 소스 제한을 적용하지 못합니다."
        },
        "B": {
          "en": "Security groups do not support explicit deny rules; access must be granted only to the intended source.",
          "ko": "보안 그룹은 명시적 거부 규칙을 지원하지 않으므로 의도한 소스에만 액세스를 허용해야 합니다."
        },
        "D": {
          "en": "VPC peering connects separate VPCs, not subnets within one VPC, and does not replace database access controls.",
          "ko": "VPC 피어링은 하나의 VPC 내부 서브넷이 아니라 서로 다른 VPC를 연결하며 데이터베이스 액세스 제어를 대신하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-703",
      "number": 703,
      "tags": [
        "AWS Outposts",
        "Shared Responsibility Model",
        "Amazon ECS",
        "Hybrid Cloud",
        "Operations"
      ],
      "question": {
        "en": "A company is building a payment processing application with an Amazon ECS cluster and an Amazon RDS DB instance. Regulatory requirements require the application to run in an on-premises data center, so the solution uses AWS Outposts. Which activities are the company's operations team's responsibility? (Choose three.)",
        "ko": "회사에서 Amazon Elastic Container Service(Amazon ECS) 클러스터와 Amazon RDS DB 인스턴스를 사용하여 결제 처리 애플리케이션을 구축하고 실행하려고 합니다. 규정 준수를 위해 온프레미스 데이터 센터에서 애플리케이션을 실행해야 하며 AWS Outposts를 솔루션의 일부로 사용하려고 합니다. 회사 운영팀의 책임 활동은 무엇입니까? (3개 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Provide resilient power and network connectivity to the Outposts rack.",
          "ko": "Outposts 랙에 탄력적인 전원 및 네트워크 연결을 제공합니다."
        },
        {
          "k": "B",
          "en": "Manage the virtualization hypervisor, storage systems, and AWS services running on Outposts.",
          "ko": "Outposts에서 실행되는 가상화 하이퍼바이저, 스토리지 시스템 및 AWS 서비스를 관리합니다."
        },
        {
          "k": "C",
          "en": "Provide physical security and access control for the data center environment.",
          "ko": "데이터 센터 환경의 물리적 보안 및 액세스 제어를 제공합니다."
        },
        {
          "k": "D",
          "en": "Maintain the availability of Outposts infrastructure, including power supplies, servers, and networking equipment within the rack.",
          "ko": "Outposts 랙 내 전원 공급 장치, 서버 및 네트워킹 장비를 포함한 Outposts 인프라의 가용성을 유지합니다."
        },
        {
          "k": "E",
          "en": "Perform physical maintenance of Outposts components.",
          "ko": "Outposts 구성 요소의 물리적 유지 관리를 수행합니다."
        },
        {
          "k": "F",
          "en": "Provide additional capacity to the Amazon ECS cluster to mitigate server failures and maintenance events.",
          "ko": "서버 장애 및 유지 관리 이벤트를 완화하기 위해 Amazon ECS 클러스터에 추가 용량을 제공합니다."
        }
      ],
      "answer": [
        "A",
        "C",
        "F"
      ],
      "explanation": {
        "en": "Under the Outposts shared responsibility model, the customer supplies resilient site power and network connectivity, controls physical access to its data center, and designs workload resilience by maintaining sufficient ECS capacity for maintenance or hardware events. AWS manages the Outposts hardware, virtualization, storage infrastructure, and supported AWS services.",
        "ko": "Outposts 공동 책임 모델에서 고객은 복원력 있는 현장 전원과 네트워크 연결을 제공하고 데이터 센터의 물리적 접근을 통제하며 유지 관리 또는 하드웨어 이벤트에 대비한 충분한 ECS 용량으로 워크로드 복원력을 설계합니다. AWS는 Outposts 하드웨어, 가상화, 스토리지 인프라 및 지원되는 AWS 서비스를 관리합니다."
      },
      "why_wrong": {
        "B": {
          "en": "AWS manages the virtualization layer, storage infrastructure, and managed AWS service components on Outposts.",
          "ko": "Outposts의 가상화 계층, 스토리지 인프라 및 관리형 AWS 서비스 구성 요소는 AWS가 관리합니다."
        },
        "D": {
          "en": "AWS owns and maintains the rack's AWS hardware components; the customer is responsible for facility power, cooling, and connectivity.",
          "ko": "랙의 AWS 하드웨어 구성 요소는 AWS가 소유하고 유지 관리하며 고객은 시설 전원, 냉각 및 연결을 책임집니다."
        },
        "E": {
          "en": "AWS performs physical maintenance and replacement of failed Outposts hardware components.",
          "ko": "Outposts 하드웨어 구성 요소의 물리적 유지 관리와 장애 부품 교체는 AWS가 수행합니다."
        }
      }
    },
    {
      "id": "exam12-704",
      "number": 704,
      "tags": [
        "Amazon EC2 Auto Scaling",
        "Route 53",
        "Multi-AZ",
        "High Availability",
        "Load Balancing"
      ],
      "question": {
        "en": "A company hosts an application on Amazon EC2 instances in one Availability Zone. Clients access it at the transport layer of the OSI model. Which combination of steps provides high availability most cost-effectively? (Choose two.)",
        "ko": "회사는 단일 가용 영역에서 실행되는 Amazon EC2 인스턴스에 애플리케이션을 호스팅합니다. OSI(Open Systems Interconnection) 모델의 전송 계층을 사용하여 애플리케이션에 액세스할 수 있습니다. 회사는 고가용성 애플리케이션 아키텍처가 필요합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족할 수 있는 단계 조합은 무엇입니까? (2개 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure new EC2 instances in another Availability Zone and use Amazon Route 53 to route traffic to all instances.",
          "ko": "다른 가용 영역에서 새 EC2 인스턴스를 구성하고 Amazon Route 53을 사용하여 트래픽을 모든 인스턴스로 라우팅합니다."
        },
        {
          "k": "B",
          "en": "Configure a Network Load Balancer in front of the existing EC2 instance.",
          "ko": "EC2 인스턴스 앞에 Network Load Balancer를 구성합니다."
        },
        {
          "k": "C",
          "en": "Configure a Network Load Balancer for TCP traffic and an Application Load Balancer for HTTP and HTTPS traffic to the instances.",
          "ko": "인스턴스에 대한 TCP 트래픽을 전송하도록 Network Load Balancer를 구성하고 HTTP 및 HTTPS 트래픽을 위해 Application Load Balancer를 구성합니다."
        },
        {
          "k": "D",
          "en": "Create an Auto Scaling group for the EC2 instances, configure it to use multiple Availability Zones, and enable EC2 health checks.",
          "ko": "EC2 인스턴스에 대한 Auto Scaling 그룹을 생성하고 여러 가용 영역을 사용하도록 구성하며 인스턴스에서 애플리케이션 상태 확인을 실행하도록 구성합니다."
        },
        {
          "k": "E",
          "en": "Create an Amazon CloudWatch alarm that restarts an EC2 instance when it enters the stopped state.",
          "ko": "중지된 상태로 전환되는 EC2 인스턴스를 다시 시작하도록 Amazon CloudWatch 경보를 생성합니다."
        }
      ],
      "answer": [
        "A",
        "D"
      ],
      "explanation": {
        "en": "Deploying instances in another Availability Zone removes the single-AZ failure domain, and Route 53 can direct users to healthy endpoints. A multi-AZ Auto Scaling group maintains the desired capacity and replaces unhealthy instances automatically, providing availability without operating unnecessary load-balancer layers.",
        "ko": "다른 가용 영역에 인스턴스를 배포하면 단일 AZ 장애 영역을 제거할 수 있고 Route 53은 사용자를 정상 엔드포인트로 보낼 수 있습니다. 다중 AZ Auto Scaling 그룹은 원하는 용량을 유지하고 비정상 인스턴스를 자동 교체하여 불필요한 로드 밸런서 계층을 운영하지 않고도 가용성을 제공합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Putting a load balancer in front of an application that still has only one instance in one Availability Zone does not remove the single point of failure.",
          "ko": "한 가용 영역의 단일 인스턴스만 유지한 채 로드 밸런서를 추가해도 단일 장애 지점은 제거되지 않습니다."
        },
        "C": {
          "en": "Using both NLB and ALB is unnecessary for a transport-layer application and adds cost and complexity.",
          "ko": "전송 계층 애플리케이션에 NLB와 ALB를 모두 사용하는 것은 불필요하며 비용과 복잡성만 늘립니다."
        },
        "E": {
          "en": "Restarting one stopped instance does not protect the application from an Availability Zone failure and increases recovery time.",
          "ko": "중지된 단일 인스턴스를 다시 시작하는 방식은 가용 영역 장애로부터 애플리케이션을 보호하지 못하며 복구 시간도 늘어납니다."
        }
      }
    },
    {
      "id": "exam12-705",
      "number": 705,
      "tags": [
        "AWS Cost Anomaly Detection",
        "AWS Billing",
        "Cost Management",
        "Alerts",
        "Machine Learning"
      ],
      "question": {
        "en": "A company performs periodic financial reviews of its AWS costs and recently found unusual spending. It needs a solution that monitors costs and alerts responsible stakeholders when anomalous spending occurs. Which solution meets these requirements?",
        "ko": "회사는 Amazon EC2 인스턴스에서 애플리케이션을 실행하며 AWS 비용에 대해 정기적인 재무 평가를 수행합니다. 최근 비정상적인 지출을 확인했습니다. 비용을 모니터링하고 비정상적인 지출이 발생하면 책임 있는 이해관계자에게 알리는 솔루션이 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use an AWS Budgets template to create a zero-spend budget.",
          "ko": "지출이 없는 예산을 생성하려면 AWS Budgets 템플릿을 사용합니다."
        },
        {
          "k": "B",
          "en": "Create an AWS Cost Anomaly Detection monitor in the AWS Billing and Cost Management console.",
          "ko": "AWS Billing and Cost Management 콘솔에서 AWS 비용 이상 탐지 모니터를 생성합니다."
        },
        {
          "k": "C",
          "en": "Create an AWS Pricing Calculator estimate from the pricing details of the currently running workload.",
          "ko": "현재 실행 중인 워크로드 가격 세부 정보에 대한 AWS 가격 계산기 추정치를 생성합니다."
        },
        {
          "k": "D",
          "en": "Use Amazon CloudWatch to monitor costs and identify anomalous spending.",
          "ko": "Amazon CloudWatch를 사용하여 비용을 모니터링하고 비정상적인 지출을 식별합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "AWS Cost Anomaly Detection uses machine learning to establish normal spending patterns, detects unusual costs, performs root-cause analysis, and can notify subscribed stakeholders according to configured thresholds and alert preferences.",
        "ko": "AWS Cost Anomaly Detection은 기계 학습으로 정상 지출 패턴을 설정하고 비정상 비용을 탐지하며 근본 원인을 분석합니다. 구성된 임계값과 알림 기본 설정에 따라 구독한 이해관계자에게 알릴 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A zero-spend budget is intended to alert when any spend occurs, not to learn normal usage and identify anomalies in an active workload.",
          "ko": "지출 없음 예산은 지출이 발생할 때 알리기 위한 것으로 활성 워크로드의 정상 사용량을 학습하여 이상을 식별하지 않습니다."
        },
        "C": {
          "en": "Pricing Calculator produces planning estimates and does not monitor actual costs or send anomaly alerts.",
          "ko": "Pricing Calculator는 계획용 추정치를 생성하며 실제 비용을 모니터링하거나 이상 알림을 보내지 않습니다."
        },
        "D": {
          "en": "CloudWatch billing alarms use static thresholds and do not provide the managed ML-based anomaly detection and root-cause analysis requested.",
          "ko": "CloudWatch 결제 경보는 정적 임계값을 사용하며 요청된 관리형 기계 학습 기반 이상 탐지와 근본 원인 분석을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-706",
      "number": 706,
      "tags": [
        "Amazon S3 Standard",
        "Static Website",
        "Object Storage",
        "High Availability",
        "Cost Optimization"
      ],
      "question": {
        "en": "A company operates a website that stores images of historical events. Users search images by the year of the event and request each image only once or twice per year on average. The company needs a highly available, cost-effective solution to store and deliver the images. Which solution meets these requirements?",
        "ko": "한 회사에서 역사적 사건의 이미지를 저장하는 웹사이트를 운영하고 있습니다. 웹사이트 사용자는 이미지 속 사건이 발생한 연도를 기준으로 이미지를 검색하고 볼 수 있어야 합니다. 평균적으로 사용자는 각 이미지를 1년에 한두 번만 요청합니다. 회사는 가용성이 높은 이미지를 원하며 이미지를 저장하고 사용자에게 전달하는 가장 비용 효율적인 솔루션이 필요합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Store the images on Amazon EBS and serve them from a web server running on Amazon EC2.",
          "ko": "Amazon Elastic Block Store(Amazon EBS)에 이미지를 저장하고 Amazon EC2에서 실행되는 웹 서버를 사용합니다."
        },
        {
          "k": "B",
          "en": "Store the images on Amazon EFS and serve them from a web server running on Amazon EC2.",
          "ko": "Amazon Elastic File System(Amazon EFS)에 이미지를 저장하고 Amazon EC2에서 실행되는 웹 서버를 사용합니다."
        },
        {
          "k": "C",
          "en": "Store the images in Amazon S3 Standard and deliver them directly through an S3 static website.",
          "ko": "Amazon S3 Standard에 이미지를 저장하고 S3 Standard를 사용한 정적 웹사이트를 통해 이미지를 직접 전달합니다."
        },
        {
          "k": "D",
          "en": "Store the images in S3 Standard-IA and deliver them directly through an S3 static website.",
          "ko": "Amazon S3 Standard-Infrequent Access(S3 Standard-IA)에 이미지를 저장하고 S3 Standard-IA를 사용한 정적 웹사이트를 통해 이미지를 직접 전달합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "S3 Standard supplies highly available, durable, scalable object storage and can directly host static website content, eliminating EC2 web-server operations. For objects that must remain immediately available, it avoids the retrieval charges associated with infrequent-access storage.",
        "ko": "S3 Standard는 고가용성, 내구성 및 확장성을 갖춘 객체 스토리지를 제공하고 정적 웹사이트 콘텐츠를 직접 호스팅하여 EC2 웹 서버 운영을 없앱니다. 즉시 사용 가능해야 하는 객체에 대해 저빈도 액세스 스토리지의 검색 비용도 피할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "EBS is tied to EC2 and requires the company to operate highly available web servers and storage architecture.",
          "ko": "EBS는 EC2에 연결되므로 회사가 고가용성 웹 서버와 스토리지 아키텍처를 운영해야 합니다."
        },
        "B": {
          "en": "EFS also requires EC2 web servers and costs more than direct object delivery for this static content pattern.",
          "ko": "EFS도 EC2 웹 서버가 필요하며 이 정적 콘텐츠 패턴에서 직접 객체를 제공하는 방식보다 비용이 많이 듭니다."
        },
        "D": {
          "en": "S3 Standard-IA adds retrieval fees and a minimum storage-duration charge; the provided answer favors S3 Standard for immediately available static-site delivery.",
          "ko": "S3 Standard-IA에는 검색 비용과 최소 저장 기간 요금이 추가되며 제시된 정답은 즉시 사용 가능한 정적 사이트 전달에 S3 Standard를 선택합니다."
        }
      }
    },
    {
      "id": "exam12-707",
      "number": 707,
      "tags": [
        "Amazon S3",
        "Presigned URL",
        "AWS CloudFormation",
        "Private Bucket",
        "Temporary Access"
      ],
      "question": {
        "en": "A company wants to use an AWS CloudFormation stack for a test environment. The template is stored in an Amazon S3 bucket that blocks public access. The company wants to grant CloudFormation access to the template based on a specific user's request and must follow security best practices. Which solution meets these requirements?",
        "ko": "한 회사에서 테스트 환경의 애플리케이션에 AWS CloudFormation 스택을 사용하려고 합니다. 회사는 공개 액세스를 차단하는 Amazon S3 버킷에 CloudFormation 템플릿을 저장합니다. 회사는 테스트 환경을 생성하기 위한 특정 사용자 요청을 기반으로 S3 버킷의 템플릿에 CloudFormation 액세스 권한을 부여하려고 하며 보안 모범 사례를 따라야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an Amazon S3 gateway VPC endpoint and configure the CloudFormation stack to use the S3 object URL.",
          "ko": "Amazon S3용 게이트웨이 VPC 엔드포인트를 생성하고 S3 객체 URL을 사용하도록 CloudFormation 스택을 구성합니다."
        },
        {
          "k": "B",
          "en": "Create an Amazon API Gateway REST API targeting the S3 bucket and configure the stack to use the API Gateway URL.",
          "ko": "S3 버킷을 대상으로 하는 Amazon API Gateway REST API를 생성하고 API 게이트웨이 URL을 사용하도록 CloudFormation 스택을 구성합니다."
        },
        {
          "k": "C",
          "en": "Generate a presigned URL for the template object and configure the CloudFormation stack to use the presigned URL.",
          "ko": "템플릿 객체에 대해 미리 서명된 URL을 생성하고 미리 서명된 URL을 사용하도록 CloudFormation 스택을 구성합니다."
        },
        {
          "k": "D",
          "en": "Allow public access to the template object and block public access again after the test environment is created.",
          "ko": "S3 버킷의 템플릿 객체에 대한 공개 액세스를 허용하고 테스트 환경이 생성된 후 공개 접근을 차단합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "An S3 presigned URL grants time-limited access to one private object using the permissions of the IAM principal that signs it. CloudFormation can retrieve the template without making the bucket public or introducing another service, and the URL expires automatically.",
        "ko": "S3 미리 서명된 URL은 서명한 IAM 주체의 권한을 사용하여 하나의 비공개 객체에 시간 제한 액세스를 부여합니다. 버킷을 공개하거나 다른 서비스를 추가하지 않고 CloudFormation이 템플릿을 가져올 수 있으며 URL은 자동으로 만료됩니다."
      },
      "why_wrong": {
        "A": {
          "en": "A gateway endpoint provides private network routing from a VPC but does not by itself grant CloudFormation permission to read the object.",
          "ko": "게이트웨이 엔드포인트는 VPC에서의 비공개 네트워크 경로를 제공하지만 그 자체로 CloudFormation에 객체 읽기 권한을 부여하지 않습니다."
        },
        "B": {
          "en": "API Gateway adds unnecessary infrastructure and still requires authorization to read the private S3 object.",
          "ko": "API Gateway는 불필요한 인프라를 추가하며 비공개 S3 객체를 읽기 위한 권한 부여도 여전히 필요합니다."
        },
        "D": {
          "en": "Temporarily making the object public violates the requirement and creates an avoidable exposure window.",
          "ko": "객체를 일시적으로 공개하면 요구 사항을 위반하고 피할 수 있는 노출 구간이 생깁니다."
        }
      }
    },
    {
      "id": "exam12-708",
      "number": 708,
      "tags": [
        "AWS CloudTrail",
        "Amazon Athena",
        "Amazon S3",
        "Log Analytics",
        "Multi-Account"
      ],
      "question": {
        "en": "A company sends AWS CloudTrail logs from multiple AWS accounts to an Amazon S3 bucket in a centralized account. The logs must be retained and queryable at any time. Which solution meets these requirements?",
        "ko": "회사는 여러 AWS 계정의 AWS CloudTrail 로그를 중앙 집중식 계정의 Amazon S3 버킷으로 보냅니다. 회사는 CloudTrail 로그를 보관해야 하며 언제든지 CloudTrail 로그를 쿼리할 수 있어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use the centralized account's CloudTrail event history to create an Amazon Athena table, and query the CloudTrail logs with Athena.",
          "ko": "중앙 집중식 계정의 CloudTrail 이벤트 기록을 사용하여 Amazon Athena 테이블을 생성하고 Athena에서 CloudTrail 로그를 쿼리합니다."
        },
        {
          "k": "B",
          "en": "Configure an Amazon Neptune instance to manage the CloudTrail logs and query them from Neptune.",
          "ko": "CloudTrail 로그를 관리하도록 Amazon Neptune 인스턴스를 구성하고 Neptune에서 CloudTrail 로그를 쿼리합니다."
        },
        {
          "k": "C",
          "en": "Configure CloudTrail to send logs to a DynamoDB table and create an Amazon QuickSight dashboard to query the logs.",
          "ko": "로그를 Amazon DynamoDB 테이블로 보내도록 CloudTrail을 구성하고 Amazon QuickSight에서 대시보드를 생성하여 테이블의 로그를 쿼리합니다."
        },
        {
          "k": "D",
          "en": "Create an Athena notebook, configure CloudTrail to send logs to the notebook, and run queries in Athena.",
          "ko": "Amazon Athena를 사용하여 Athena 노트북을 생성하고 로그를 노트북으로 보내도록 CloudTrail을 구성한 뒤 Athena에서 쿼리를 실행합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "CloudTrail retains its log files in S3, and the CloudTrail console can create an Athena table over those files. Athena then provides serverless standard-SQL queries across the centralized logs without copying them to another database.",
        "ko": "CloudTrail은 로그 파일을 S3에 보관하며 CloudTrail 콘솔에서 해당 파일을 대상으로 Athena 테이블을 생성할 수 있습니다. Athena는 로그를 다른 데이터베이스로 복사하지 않고 중앙 로그에 표준 SQL을 실행하는 서버리스 쿼리를 제공합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Neptune is a graph database and is not the appropriate managed query layer for CloudTrail log files in S3.",
          "ko": "Neptune은 그래프 데이터베이스이며 S3의 CloudTrail 로그 파일에 적합한 관리형 쿼리 계층이 아닙니다."
        },
        "C": {
          "en": "CloudTrail does not natively deliver its log archive to DynamoDB, and QuickSight is a visualization service rather than the direct SQL query solution requested.",
          "ko": "CloudTrail은 로그 아카이브를 DynamoDB에 기본 전송하지 않으며 QuickSight는 요청된 직접 SQL 쿼리 솔루션이 아닌 시각화 서비스입니다."
        },
        "D": {
          "en": "Athena notebooks are for interactive analytics code; CloudTrail cannot use a notebook as a log destination.",
          "ko": "Athena 노트북은 대화형 분석 코드용이며 CloudTrail은 노트북을 로그 대상으로 사용할 수 없습니다."
        }
      }
    },
    {
      "id": "exam12-709",
      "number": 709,
      "tags": [
        "Amazon RDS for SQL Server",
        "Read Replica",
        "Reporting",
        "Read Scaling",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company runs a three-tier application in two AWS Regions. The web, application, and database tiers run on Amazon EC2, and the database tier uses Amazon RDS for Microsoft SQL Server Enterprise Edition. Weekly and monthly reports place a high load on the database. Which solution reduces that load with the least management effort?",
        "ko": "회사는 두 개의 AWS 리전에서 3티어 애플리케이션을 실행합니다. 웹 계층, 애플리케이션 계층 및 데이터베이스 계층은 Amazon EC2 인스턴스에서 실행되며 데이터베이스 계층에는 Microsoft SQL Server Enterprise용 Amazon RDS를 사용합니다. 주간 및 월간 보고서를 실행할 때 데이터베이스 계층에 높은 로드가 발생합니다. 최소한의 관리 노력으로 데이터베이스 계층의 로드를 줄이는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a read replica and configure the reports to use the new read replica.",
          "ko": "읽기 전용 복제본을 생성하고 새로운 읽기 복제본을 사용하도록 보고서를 구성합니다."
        },
        {
          "k": "B",
          "en": "Convert the RDS database to Amazon DynamoDB and configure the reports to use DynamoDB.",
          "ko": "RDS 데이터베이스를 Amazon DynamoDB로 변환하고 DynamoDB를 사용하도록 보고서를 구성합니다."
        },
        {
          "k": "C",
          "en": "Modify the existing RDS DB instance by selecting a larger instance class.",
          "ko": "더 큰 인스턴스 크기를 선택하여 기존 RDS DB 인스턴스를 수정합니다."
        },
        {
          "k": "D",
          "en": "Modify the existing RDS DB instance and put it in an Auto Scaling group.",
          "ko": "기존 RDS DB 인스턴스를 수정하고 인스턴스를 Auto Scaling 그룹에 넣습니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "An RDS for SQL Server read replica can offload read-only reporting queries from the primary DB instance. Directing weekly and monthly reports to the replica improves primary database performance and availability with less administration than changing database platforms or self-managing replication.",
        "ko": "RDS for SQL Server 읽기 전용 복제본은 읽기 전용 보고서 쿼리를 기본 DB 인스턴스에서 분리할 수 있습니다. 주간 및 월간 보고서를 복제본으로 보내면 데이터베이스 플랫폼을 변경하거나 복제를 직접 관리하는 것보다 적은 관리 노력으로 기본 데이터베이스의 성능과 가용성을 높일 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Migrating a relational SQL Server workload and its reports to DynamoDB requires major data-model and application changes.",
          "ko": "관계형 SQL Server 워크로드와 보고서를 DynamoDB로 이전하려면 데이터 모델과 애플리케이션을 크게 변경해야 합니다."
        },
        "C": {
          "en": "Vertical scaling can add capacity but does not isolate recurring report queries and can require a disruptive instance modification.",
          "ko": "수직 확장은 용량을 늘리지만 반복되는 보고서 쿼리를 격리하지 못하고 인스턴스 수정 중 중단이 발생할 수 있습니다."
        },
        "D": {
          "en": "RDS DB instances cannot be placed in EC2 Auto Scaling groups.",
          "ko": "RDS DB 인스턴스는 EC2 Auto Scaling 그룹에 배치할 수 없습니다."
        }
      }
    },
    {
      "id": "exam12-710",
      "number": 710,
      "tags": [
        "AWS IAM",
        "Amazon S3",
        "Explicit Deny",
        "Least Privilege",
        "Resource ARN"
      ],
      "question": {
        "en": "A company hires a cloud engineer who must have no access to the CompanyConfidential Amazon S3 bucket. The engineer needs read and write access to the AdminTools S3 bucket. Which IAM policy meets these criteria?",
        "ko": "한 기업에서 CompanyConfidential Amazon S3 버킷에 대한 액세스 권한이 없어야 하는 새 클라우드 엔지니어를 모집했습니다. 클라우드 엔지니어는 AdminTools라는 S3 버킷에 대한 읽기 및 쓰기 권한이 있어야 합니다. 어떤 IAM 정책이 이러한 기준을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Allow s3:ListBucket on arn:aws:s3:::AdminTools; allow s3:GetObject and s3:PutObject on arn:aws:s3:::AdminTools/*; explicitly deny s3:* on arn:aws:s3:::CompanyConfidential and arn:aws:s3:::CompanyConfidential/*.",
          "ko": "arn:aws:s3:::AdminTools에 s3:ListBucket을 허용하고 arn:aws:s3:::AdminTools/*에 s3:GetObject 및 s3:PutObject를 허용합니다. arn:aws:s3:::CompanyConfidential과 arn:aws:s3:::CompanyConfidential/*에는 s3:*를 명시적으로 거부합니다."
        },
        {
          "k": "B",
          "en": "Allow s3:ListBucket on arn:aws:s3:::AdminTools and arn:aws:s3:::CompanyConfidential/*; allow s3:GetObject, s3:PutObject, and s3:DeleteObject on arn:aws:s3:::AdminTools/*; deny s3:* only on arn:aws:s3:::CompanyConfidential.",
          "ko": "arn:aws:s3:::AdminTools와 arn:aws:s3:::CompanyConfidential/*에 s3:ListBucket을 허용하고 arn:aws:s3:::AdminTools/*에 s3:GetObject, s3:PutObject 및 s3:DeleteObject를 허용합니다. arn:aws:s3:::CompanyConfidential에만 s3:*를 거부합니다."
        },
        {
          "k": "C",
          "en": "Allow s3:GetObject and s3:PutObject on arn:aws:s3:::AdminTools/*; explicitly deny s3:* on arn:aws:s3:::CompanyConfidential and arn:aws:s3:::CompanyConfidential/*.",
          "ko": "arn:aws:s3:::AdminTools/*에 s3:GetObject 및 s3:PutObject를 허용하고 arn:aws:s3:::CompanyConfidential과 arn:aws:s3:::CompanyConfidential/*에 s3:*를 명시적으로 거부합니다."
        },
        {
          "k": "D",
          "en": "Allow s3:ListBucket on arn:aws:s3:::AdminTools/*; allow s3:GetObject, s3:PutObject, and s3:DeleteObject on arn:aws:s3:::AdminTools/*; deny s3:* on CompanyConfidential and CompanyConfidential/* and also on AdminTools/*.",
          "ko": "arn:aws:s3:::AdminTools/*에 s3:ListBucket을 허용하고 arn:aws:s3:::AdminTools/*에 s3:GetObject, s3:PutObject 및 s3:DeleteObject를 허용합니다. CompanyConfidential 버킷과 객체 및 AdminTools/*에도 s3:*를 거부합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "S3 bucket-level actions such as ListBucket require the bucket ARN, while object actions such as GetObject and PutObject require the object ARN ending in /*. Policy A grants only the required AdminTools access and explicitly denies every S3 action on both the CompanyConfidential bucket and all of its objects. An explicit deny overrides any allow that the engineer might receive elsewhere.",
        "ko": "S3의 ListBucket 같은 버킷 수준 작업에는 버킷 ARN이 필요하고 GetObject 및 PutObject 같은 객체 작업에는 /*로 끝나는 객체 ARN이 필요합니다. 정책 A는 AdminTools에 필요한 권한만 부여하고 CompanyConfidential 버킷 자체와 모든 객체에 대한 모든 S3 작업을 명시적으로 거부합니다. 명시적 거부는 엔지니어가 다른 곳에서 받을 수 있는 허용보다 우선합니다."
      },
      "why_wrong": {
        "B": {
          "en": "The CompanyConfidential deny covers only the bucket ARN and omits its object ARN, while the policy also grants unnecessary DeleteObject access on AdminTools.",
          "ko": "CompanyConfidential 거부가 버킷 ARN만 포함하고 객체 ARN을 누락하며 AdminTools에는 불필요한 DeleteObject 권한까지 부여합니다."
        },
        "C": {
          "en": "It permits object reads and writes but omits s3:ListBucket on the AdminTools bucket, so the engineer cannot list or browse the bucket as required.",
          "ko": "객체 읽기와 쓰기는 허용하지만 AdminTools 버킷의 s3:ListBucket을 누락하여 필요한 버킷 목록 조회가 불가능합니다."
        },
        "D": {
          "en": "It applies ListBucket to an object ARN instead of the bucket ARN and explicitly denies access to AdminTools objects, overriding its own allow statements.",
          "ko": "ListBucket을 버킷 ARN이 아닌 객체 ARN에 적용하고 AdminTools 객체 액세스를 명시적으로 거부하여 자체 허용 문보다 우선하게 만듭니다."
        }
      }
    },
    {
      "id": "exam12-711",
      "number": 711,
      "tags": [
        "Amazon S3 Transfer Acceleration",
        "Multipart Upload",
        "Global Data Transfer",
        "Weather Data",
        "Performance"
      ],
      "question": {
        "en": "A company collects temperature, humidity, and pressure data in cities on several continents. Each site collects an average of 500 GB per day over a high-speed internet connection. A weather forecasting application analyzes the data daily in one AWS Region. What is the fastest way to aggregate data from all global sites?",
        "ko": "한 회사가 여러 대륙의 도시에서 온도, 습도 및 기압 데이터를 수집합니다. 매일 사이트당 수집되는 평균 데이터 양은 500GB이며 각 사이트에는 고속 인터넷 연결이 있습니다. 이 회사의 일기 예보 애플리케이션은 단일 리전을 기반으로 하며 매일 데이터를 분석합니다. 이러한 모든 글로벌 사이트에서 데이터를 집계하는 가장 빠른 방법은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Enable S3 Transfer Acceleration on the destination bucket and upload each site's data directly with multipart upload.",
          "ko": "대상 버킷에서 Amazon S3 Transfer Acceleration을 활성화하고 멀티파트 업로드를 사용하여 사이트 데이터를 대상 버킷에 직접 업로드합니다."
        },
        {
          "k": "B",
          "en": "Upload each site's data to an S3 bucket in the nearest AWS Region and use S3 Cross-Region Replication to copy objects to the destination bucket.",
          "ko": "가장 가까운 AWS 리전의 Amazon S3 버킷에 사이트 데이터를 업로드하고 S3 교차 리전 복제를 사용하여 객체를 대상 버킷에 복사합니다."
        },
        {
          "k": "C",
          "en": "Schedule a daily AWS Snowball job to transfer data to the nearest Region and use S3 Cross-Region Replication to copy it to the destination bucket.",
          "ko": "가장 가까운 AWS 리전으로 데이터를 전송하도록 매일 AWS Snowball 작업을 예약하고 S3 교차 리전 복제를 사용하여 객체를 대상 버킷에 복사합니다."
        },
        {
          "k": "D",
          "en": "Upload data to an EC2 instance in the nearest Region, store it on EBS, copy a daily EBS snapshot to the central Region, restore it, and analyze the data there.",
          "ko": "가장 가까운 리전의 Amazon EC2 인스턴스에 데이터를 업로드하고 Amazon EBS 볼륨에 저장합니다. 하루에 한 번 EBS 스냅샷을 중앙 집중식 리전에 복사하고 복원하여 매일 데이터를 분석합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "S3 Transfer Acceleration routes uploads through the nearest AWS edge location and the AWS global network to the destination bucket. Multipart upload transfers parts in parallel and retries failed parts independently, providing the fastest direct ingestion path for recurring large uploads over high-speed internet.",
        "ko": "S3 Transfer Acceleration은 가장 가까운 AWS 엣지 로케이션과 AWS 글로벌 네트워크를 통해 대상 버킷으로 업로드를 라우팅합니다. 멀티파트 업로드는 각 부분을 병렬 전송하고 실패한 부분만 다시 시도하므로 고속 인터넷을 통한 반복적인 대용량 업로드에 가장 빠른 직접 수집 경로를 제공합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Regional staging and cross-Region replication add a second copy step and replication delay.",
          "ko": "리전별 스테이징과 교차 리전 복제는 두 번째 복사 단계와 복제 지연을 추가합니다."
        },
        "C": {
          "en": "Snowball is designed for offline bulk transfers and its shipping workflow cannot support daily ingestion from every site.",
          "ko": "Snowball은 오프라인 대량 전송용이며 배송 과정 때문에 모든 사이트의 일일 수집을 지원할 수 없습니다."
        },
        "D": {
          "en": "EC2, EBS snapshots, cross-Region copies, and restores introduce substantial delay and operational overhead.",
          "ko": "EC2, EBS 스냅샷, 교차 리전 복사 및 복원은 상당한 지연과 운영 오버헤드를 추가합니다."
        }
      }
    },
    {
      "id": "exam12-712",
      "number": 712,
      "tags": [
        "Cluster Placement Group",
        "Amazon EBS Multi-Attach",
        "HPC",
        "Provisioned IOPS SSD",
        "Low Latency"
      ],
      "question": {
        "en": "A company plans a high-performance computing workload on 16 Amazon EC2 Linux instances. The group requires the lowest possible inter-node communication latency and a shared block device volume for high-performance storage. Which solution meets these requirements?",
        "ko": "회사는 AWS에서 호스팅되는 서버 솔루션으로 고성능 컴퓨팅(HPC) 워크로드를 구축할 계획입니다. 16개의 Amazon EC2 Linux 인스턴스 그룹에는 노드 간 통신에 가장 낮은 지연 시간이 필요합니다. 인스턴스에는 고성능 스토리지를 위한 공유 블록 장치 볼륨도 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use a cluster placement group and attach one Provisioned IOPS SSD EBS volume to all instances by using EBS Multi-Attach.",
          "ko": "클러스터 배치 그룹을 사용합니다. Amazon EBS 다중 연결을 사용하여 단일 프로비저닝된 IOPS SSD Amazon EBS 볼륨을 모든 인스턴스에 연결합니다."
        },
        {
          "k": "B",
          "en": "Use a cluster placement group and create a shared file system across the instances with Amazon EFS.",
          "ko": "클러스터 배치 그룹을 사용하고 Amazon Elastic File System(Amazon EFS)을 사용하여 인스턴스 간에 공유 파일 시스템을 생성합니다."
        },
        {
          "k": "C",
          "en": "Use a partition placement group and create a shared file system across the instances with Amazon EFS.",
          "ko": "파티션 배치 그룹을 사용하고 Amazon Elastic File System(Amazon EFS)을 사용하여 인스턴스 간에 공유 파일 시스템을 생성합니다."
        },
        {
          "k": "D",
          "en": "Use a spread placement group and attach one Provisioned IOPS SSD EBS volume to all instances by using EBS Multi-Attach.",
          "ko": "스프레드 배치 그룹을 사용합니다. Amazon EBS 다중 연결을 사용하여 단일 프로비저닝된 IOPS SSD Amazon EBS 볼륨을 모든 인스턴스에 연결합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "A cluster placement group places supported instances close together in one Availability Zone for low-latency, high-throughput networking. EBS Multi-Attach permits a supported Provisioned IOPS SSD volume to be attached to multiple instances in that same Availability Zone, providing the required shared block device.",
        "ko": "클러스터 배치 그룹은 지원되는 인스턴스를 한 가용 영역에 가깝게 배치하여 지연 시간이 짧고 처리량이 높은 네트워킹을 제공합니다. EBS Multi-Attach는 지원되는 프로비저닝된 IOPS SSD 볼륨을 같은 가용 영역의 여러 인스턴스에 연결하여 필요한 공유 블록 장치를 제공합니다."
      },
      "why_wrong": {
        "B": {
          "en": "EFS provides a shared file system rather than the required shared block device and has different latency characteristics.",
          "ko": "EFS는 필요한 공유 블록 장치가 아니라 공유 파일 시스템을 제공하며 지연 시간 특성도 다릅니다."
        },
        "C": {
          "en": "A partition placement group separates partitions to reduce correlated failure and is not optimized for the lowest inter-node latency; EFS is not block storage.",
          "ko": "파티션 배치 그룹은 상관 장애를 줄이도록 파티션을 분리하므로 최저 노드 간 지연에 최적화되지 않으며 EFS는 블록 스토리지가 아닙니다."
        },
        "D": {
          "en": "A spread placement group deliberately separates instances and therefore does not provide the lowest communication latency.",
          "ko": "스프레드 배치 그룹은 인스턴스를 의도적으로 분리하므로 가장 낮은 통신 지연 시간을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-713",
      "number": 713,
      "tags": [
        "Amazon RDS Proxy",
        "AWS Lambda",
        "Amazon Aurora MySQL",
        "Connection Pooling",
        "Scalability"
      ],
      "question": {
        "en": "An event-driven application invokes AWS Lambda functions in multiple runtimes up to 800 times per minute. The functions access data in an Amazon Aurora MySQL cluster. As user activity increases, connection timeouts occur, but the database shows no overload and CPU, memory, and disk access remain low. Which solution resolves the issue with the least operational overhead?",
        "ko": "회사에 다양한 런타임으로 AWS Lambda 함수를 분당 최대 800번 호출하는 이벤트 기반 애플리케이션이 있습니다. Lambda 함수는 Amazon Aurora MySQL DB 클러스터에 저장된 데이터에 액세스합니다. 사용자 활동이 증가함에 따라 연결 시간 초과가 발생하지만 데이터베이스에 과부하 흔적은 없고 CPU, 메모리 및 디스크 액세스 메트릭이 모두 낮습니다. 운영 오버헤드를 최소화하면서 이 문제를 해결할 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Resize the Aurora MySQL nodes and implement retry logic in the Lambda functions for database connection attempts.",
          "ko": "더 많은 연결을 처리하려면 Aurora MySQL 노드의 크기를 조정하고 데이터베이스 연결 시도에 대해 Lambda 함수에서 재시도 논리를 구성합니다."
        },
        {
          "k": "B",
          "en": "Configure ElastiCache for reads and modify the Lambda functions to connect to ElastiCache for read operations.",
          "ko": "데이터베이스에서 일반적으로 읽는 항목을 캐시하도록 읽기용 Amazon ElastiCache를 설정하고 읽기를 위해 ElastiCache에 연결하도록 Lambda 함수를 구성합니다."
        },
        {
          "k": "C",
          "en": "Add an Aurora Replica and configure the Lambda functions to connect to the cluster reader endpoint.",
          "ko": "Aurora 복제본을 리더 노드로 추가하고 작성기 엔드포인트가 아닌 DB 클러스터의 판독기 엔드포인트에 연결하도록 Lambda 함수를 구성합니다."
        },
        {
          "k": "D",
          "en": "Create an Amazon RDS Proxy for the DB cluster and configure the Lambda functions to connect to the proxy instead of the cluster.",
          "ko": "Amazon RDS 프록시를 사용하여 프록시를 생성하고 DB 클러스터를 대상 데이터베이스로 설정합니다. DB 클러스터가 아닌 프록시에 연결하도록 Lambda 함수를 구성합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "RDS Proxy pools and reuses database connections, absorbing abrupt Lambda concurrency increases without creating a new database connection for every invocation. It also improves resilience during database failover and is fully managed, which minimizes operations.",
        "ko": "RDS Proxy는 데이터베이스 연결을 풀링하고 재사용하여 Lambda 동시성이 갑자기 증가해도 호출마다 새 데이터베이스 연결을 만들지 않도록 합니다. 데이터베이스 장애 조치 중 복원력도 높이는 완전관리형 서비스이므로 운영 부담이 최소화됩니다."
      },
      "why_wrong": {
        "A": {
          "en": "Low database resource metrics show that node capacity is not the bottleneck, and retries can amplify a connection storm.",
          "ko": "낮은 데이터베이스 리소스 지표는 노드 용량이 병목이 아님을 보여주며 재시도는 연결 폭증을 악화시킬 수 있습니다."
        },
        "B": {
          "en": "A cache requires application and consistency changes and does not address connection creation for uncached reads and writes.",
          "ko": "캐시는 애플리케이션 및 일관성 변경이 필요하고 캐시되지 않은 읽기와 쓰기의 연결 생성 문제를 해결하지 않습니다."
        },
        "C": {
          "en": "A replica distributes read workload, but the database is not overloaded and it does not pool the Lambda functions' connections.",
          "ko": "복제본은 읽기 부하를 분산하지만 데이터베이스에는 과부하가 없으며 Lambda 함수의 연결을 풀링하지도 않습니다."
        }
      }
    },
    {
      "id": "exam12-714",
      "number": 714,
      "tags": [
        "Amazon EC2 Reserved Instances",
        "EC2 Spot Instances",
        "Amazon RDS",
        "Cost Optimization",
        "Auto Scaling"
      ],
      "question": {
        "en": "A company hosts a two-tier application on Amazon EC2 and Amazon RDS. Demand varies by time and is lowest after business hours and on weekends. The application runs in an Auto Scaling group with a minimum of two and maximum of five instances, must remain available, and total cost is a concern. Which solution meets the availability requirement most cost-effectively?",
        "ko": "회사는 Amazon EC2 인스턴스 및 Amazon RDS에서 2계층 애플리케이션을 호스팅합니다. 응용 프로그램의 요구 사항은 시간에 따라 다르며 업무 시간 이후와 주말에는 부하가 최소화됩니다. EC2 인스턴스는 최소 2개와 최대 5개의 인스턴스로 구성된 EC2 Auto Scaling 그룹에서 실행됩니다. 응용 프로그램은 항상 사용할 수 있어야 하지만 회사는 전체 비용을 걱정합니다. 가용성 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use Spot Instances for all EC2 capacity and stop the RDS database when it is not in use.",
          "ko": "모든 EC2 스팟 인스턴스를 사용하고 사용하지 않을 때는 RDS 데이터베이스를 중지합니다."
        },
        {
          "k": "B",
          "en": "Purchase an EC2 Instance Savings Plan covering five instances and purchase an RDS Reserved DB Instance.",
          "ko": "5개의 EC2 인스턴스에 적용되는 EC2 Instance Savings Plan을 구매하고 RDS 예약 DB 인스턴스를 구매합니다."
        },
        {
          "k": "C",
          "en": "Purchase two EC2 Reserved Instances, use up to three additional EC2 Spot Instances as needed, and stop the RDS database when it is not in use.",
          "ko": "두 개의 EC2 예약 인스턴스를 구매하고 필요에 따라 최대 3개의 추가 EC2 스팟 인스턴스를 사용합니다. 사용하지 않을 때는 RDS 데이터베이스를 중지합니다."
        },
        {
          "k": "D",
          "en": "Purchase an EC2 Instance Savings Plan covering two instances, use up to three additional On-Demand Instances as needed, and purchase an RDS Reserved DB Instance.",
          "ko": "2개의 EC2 인스턴스를 포함하는 EC2 Instance Savings Plan을 구매하고 필요에 따라 최대 3개의 추가 EC2 온디맨드 인스턴스를 사용합니다. RDS 예약 DB 인스턴스를 구매합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "The two-instance baseline is continuously required, so reserving that capacity discounts steady use. Spot Instances provide large savings for the three variable-capacity positions when the application can tolerate their interruption and replacement by Auto Scaling. Stopping an eligible RDS instance during known idle periods avoids compute charges during those periods.",
        "ko": "두 인스턴스의 기준 용량은 지속적으로 필요하므로 해당 용량을 예약하면 안정적인 사용량에 할인을 받을 수 있습니다. 애플리케이션이 중단과 Auto Scaling의 교체를 허용할 수 있다면 스팟 인스턴스는 변동 용량 3개에 큰 비용 절감을 제공합니다. 사용하지 않는 것으로 알려진 시간에는 지원되는 RDS 인스턴스를 중지하여 컴퓨팅 요금을 피할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Using Spot for the entire minimum capacity risks losing all application instances simultaneously and undermines availability.",
          "ko": "최소 용량 전체에 스팟을 사용하면 모든 애플리케이션 인스턴스를 동시에 잃을 수 있어 가용성을 해칩니다."
        },
        "B": {
          "en": "Committing to all five instances pays for peak capacity even during the long low-demand periods.",
          "ko": "5개 인스턴스 전체를 약정하면 수요가 낮은 긴 시간에도 피크 용량 비용을 지불합니다."
        },
        "D": {
          "en": "On-Demand burst capacity and a continuously reserved database can cost more than the stated reserved-baseline and Spot-burst approach for the provided workload pattern.",
          "ko": "온디맨드 추가 용량과 지속적으로 예약한 데이터베이스는 제시된 워크로드 패턴에서 예약 기준 용량과 스팟 추가 용량 조합보다 비용이 많이 들 수 있습니다."
        }
      }
    },
    {
      "id": "exam12-715",
      "number": 715,
      "tags": [
        "Amazon CloudFront",
        "Amazon S3",
        "S3 Standard-IA",
        "Cost Optimization",
        "External Users"
      ],
      "question": {
        "en": "An application stores large documents in an Amazon S3 bucket using S3 Standard-IA. The company wants to reduce total S3 costs while allowing approved external users to access documents with millisecond latency. Which solution is most cost-effective?",
        "ko": "회사의 애플리케이션이 S3 Standard-Infrequent Access(S3 Standard-IA) 스토리지 클래스를 사용하는 Amazon S3 버킷에 대용량 문서를 저장합니다. 회사는 데이터 저장 비용을 계속 지불하지만 총 S3 비용을 절감하고자 합니다. 승인된 외부 사용자는 밀리초 단위로 문서에 액세스할 수 있어야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure the S3 bucket as a requester-pays bucket.",
          "ko": "요청자 지불 버킷이 되도록 S3 버킷을 구성합니다."
        },
        {
          "k": "B",
          "en": "Change the storage tier to S3 Standard for all existing and future objects.",
          "ko": "모든 기존 객체와 향후 객체에 대해 스토리지 계층을 S3 Standard로 변경합니다."
        },
        {
          "k": "C",
          "en": "Enable S3 Transfer Acceleration on the S3 bucket.",
          "ko": "S3 버킷에서 S3 Transfer Acceleration을 켭니다."
        },
        {
          "k": "D",
          "en": "Use Amazon CloudFront to process all requests to the S3 bucket.",
          "ko": "Amazon CloudFront를 사용하여 S3 버킷에 대한 모든 요청을 처리합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "CloudFront caches popular documents at edge locations and serves cache hits without repeatedly retrieving the objects from S3 Standard-IA. This reduces S3 retrieval and data-transfer activity while providing low-latency access to approved users through CloudFront access controls.",
        "ko": "CloudFront는 인기 문서를 엣지 로케이션에 캐시하고 S3 Standard-IA에서 객체를 반복해서 검색하지 않고 캐시 적중을 제공합니다. 따라서 S3 검색 및 데이터 전송 활동을 줄이면서 CloudFront 액세스 제어를 통해 승인된 사용자에게 짧은 지연 시간의 액세스를 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Requester Pays shifts request and transfer charges to requesters but does not cache content or necessarily reduce the total cost of serving repeated requests.",
          "ko": "Requester Pays는 요청과 전송 요금을 요청자에게 이전하지만 콘텐츠를 캐시하지 않으며 반복 요청을 제공하는 총비용을 반드시 줄이지는 않습니다."
        },
        "B": {
          "en": "S3 Standard has higher storage cost than Standard-IA and changing every object increases the company's ongoing storage expense.",
          "ko": "S3 Standard는 Standard-IA보다 스토리지 비용이 높으므로 모든 객체를 변경하면 회사의 지속적인 저장 비용이 증가합니다."
        },
        "C": {
          "en": "Transfer Acceleration speeds uploads and transfers through the AWS edge network but adds acceleration charges and does not cache downloads.",
          "ko": "Transfer Acceleration은 AWS 엣지 네트워크를 통해 업로드와 전송을 가속하지만 가속 요금이 추가되고 다운로드를 캐시하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-716",
      "number": 716,
      "tags": [
        "Amazon S3 Standard-IA",
        "S3 Versioning",
        "MFA Delete",
        "Encryption",
        "Serverless"
      ],
      "question": {
        "en": "A company wants to migrate a 1 PB on-premises image repository to AWS. A serverless web application will serve the images. They are rarely accessed but must be immediately available, encrypted, and protected from accidental deletion. Which solution meets these requirements?",
        "ko": "회사에서 1PB 온프레미스 이미지 리포지토리를 AWS로 마이그레이션하려고 합니다. 이미지는 서버리스 웹 애플리케이션에서 제공됩니다. 리포지토리에 저장된 이미지는 거의 액세스되지 않지만 즉시 사용할 수 있어야 합니다. 또한 미사용 이미지를 암호화하고 우발적인 삭제로부터 보호해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Implement client-side encryption, store the images in an Amazon S3 Glacier vault, and use a vault lock to prevent accidental deletion.",
          "ko": "클라이언트 측 암호화를 구현하고 이미지를 Amazon S3 Glacier 볼트에 저장하며 우발적인 삭제를 방지하기 위해 볼트 잠금을 설정합니다."
        },
        {
          "k": "B",
          "en": "Store the images in an S3 Standard-IA bucket and enable versioning, default encryption, and MFA Delete.",
          "ko": "S3 Standard-Infrequent Access(S3 Standard-IA) 스토리지 클래스의 Amazon S3 버킷에 이미지를 저장하고 버전 관리, 기본 암호화 및 MFA 삭제를 활성화합니다."
        },
        {
          "k": "C",
          "en": "Store the images on Amazon FSx for Windows File Server, encrypt with a customer managed KMS key, and use NTFS permissions to prevent deletion.",
          "ko": "Amazon FSx for Windows File Server 파일 공유에 이미지를 저장하고 AWS KMS 고객 관리형 키를 사용하여 암호화하며 우발적인 삭제를 방지하도록 NTFS 권한을 구성합니다."
        },
        {
          "k": "D",
          "en": "Store the images in the Infrequent Access class of Amazon EFS, encrypt with a customer managed KMS key, and use NFS permissions to prevent deletion.",
          "ko": "Infrequent Access 스토리지 클래스의 Amazon EFS 파일 공유에 이미지를 저장하고 AWS KMS 고객 관리형 키로 암호화하며 우발적인 삭제를 방지하도록 NFS 권한을 구성합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "S3 Standard-IA provides millisecond retrieval for rarely accessed objects and integrates directly with serverless applications. Default encryption protects data at rest, versioning preserves prior object versions, and MFA Delete adds protection against permanent deletion or versioning changes.",
        "ko": "S3 Standard-IA는 거의 액세스하지 않는 객체에 밀리초 검색을 제공하고 서버리스 애플리케이션과 직접 통합됩니다. 기본 암호화는 저장 데이터를 보호하고 버전 관리는 이전 객체 버전을 보존하며 MFA Delete는 영구 삭제나 버전 관리 변경에 대한 보호를 추가합니다."
      },
      "why_wrong": {
        "A": {
          "en": "S3 Glacier vault retrieval is not immediate and therefore cannot serve the application's images on demand.",
          "ko": "S3 Glacier 볼트의 검색은 즉시 이루어지지 않으므로 애플리케이션 이미지를 온디맨드로 제공할 수 없습니다."
        },
        "C": {
          "en": "FSx for Windows File Server adds file-server cost and management and is not the natural object store for a serverless web application.",
          "ko": "FSx for Windows File Server는 파일 서버 비용과 관리를 추가하며 서버리스 웹 애플리케이션의 자연스러운 객체 저장소가 아닙니다."
        },
        "D": {
          "en": "EFS adds file-system cost, and NFS permissions alone are weaker protection against accidental deletion than S3 versioning with MFA Delete.",
          "ko": "EFS는 파일 시스템 비용을 추가하며 NFS 권한만으로는 S3 버전 관리와 MFA Delete보다 우발적 삭제 보호가 약합니다."
        }
      }
    },
    {
      "id": "exam12-717",
      "number": 717,
      "tags": [
        "Amazon Athena",
        "AWS Glue",
        "Apache Parquet",
        "Amazon S3",
        "Query Optimization"
      ],
      "question": {
        "en": "A company measures a marketing campaign by batch-processing CSV sales data and storing results hourly in Amazon S3. The S3 data set is petabytes in size. One-off Amazon Athena queries find the most popular product for a date and Region but sometimes fail or run longer than expected. Which two actions improve query performance and reliability? (Choose two.)",
        "ko": "회사에서 최근 마케팅 캠페인의 효과를 측정하려고 합니다. 회사는 판매 데이터의 CSV 파일에 대해 일괄 처리를 수행하고 그 결과를 1시간에 한 번씩 Amazon S3 버킷에 저장합니다. S3 데이터 세트는 페타바이트 규모입니다. 이 회사는 Amazon Athena에서 일회성 쿼리를 실행하여 특정 지역의 특정 날짜에 가장 인기 있는 제품을 확인합니다. 쿼리가 실패하거나 완료되는 데 예상보다 오래 걸리는 경우가 있습니다. 쿼리 성능과 안정성을 개선하기 위해 어떤 두 가지 조치를 취해야 합니까? (2개 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Reduce S3 object sizes to less than 128 MB.",
          "ko": "S3 객체 크기를 128MB 미만으로 줄입니다."
        },
        {
          "k": "B",
          "en": "Partition the data in Amazon S3 by date and Region.",
          "ko": "Amazon S3의 날짜 및 지역별로 데이터를 분할합니다."
        },
        {
          "k": "C",
          "en": "Store files in Amazon S3 as large individual objects.",
          "ko": "파일을 Amazon S3에 큰 단일 객체로 저장합니다."
        },
        {
          "k": "D",
          "en": "Use Amazon Kinesis Data Analytics to run the query as part of the batch-processing job.",
          "ko": "Amazon Kinesis Data Analytics를 사용하여 일괄 처리 작업의 일부로 쿼리를 실행합니다."
        },
        {
          "k": "E",
          "en": "Use an AWS Glue ETL process to convert the CSV files to Apache Parquet format.",
          "ko": "AWS Glue 추출, 변환 및 로드(ETL) 프로세스를 사용하여 CSV 파일을 Apache Parquet 형식으로 변환합니다."
        }
      ],
      "answer": [
        "C",
        "E"
      ],
      "explanation": {
        "en": "Athena performs poorly when a data set contains very many small files because request and planning overhead dominates. Consolidating data into appropriately large objects reduces this overhead. Converting CSV to the compressed columnar Parquet format lets Athena read only required columns and scan less data, improving speed, reliability, and cost.",
        "ko": "Athena는 데이터 세트에 매우 많은 작은 파일이 있으면 요청 및 계획 오버헤드가 커져 성능이 저하됩니다. 데이터를 적절히 큰 객체로 통합하면 이 오버헤드가 줄어듭니다. CSV를 압축된 열 형식인 Parquet로 변환하면 Athena가 필요한 열만 읽고 더 적은 데이터를 스캔하여 속도, 안정성 및 비용을 개선합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Creating still smaller objects worsens the small-files problem and increases S3 request and Athena planning overhead.",
          "ko": "객체를 더 작게 만들면 작은 파일 문제가 악화되고 S3 요청 및 Athena 계획 오버헤드가 늘어납니다."
        },
        "B": {
          "en": "Partitioning by the frequently filtered date and Region would normally help pruning, but the supplied answer set selects large-object consolidation and Parquet conversion as the two required actions.",
          "ko": "자주 필터링하는 날짜와 리전으로 파티셔닝하면 일반적으로 프루닝에 도움이 되지만 제시된 정답 세트는 큰 객체로의 통합과 Parquet 변환을 두 가지 필수 조치로 선택합니다."
        },
        "D": {
          "en": "Kinesis Data Analytics is for streaming analytics and does not optimize ad hoc Athena queries over the existing S3 batch data.",
          "ko": "Kinesis Data Analytics는 스트리밍 분석용이며 기존 S3 배치 데이터에 대한 임시 Athena 쿼리를 최적화하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-718",
      "number": 718,
      "tags": [
        "Cross-Account IAM Role",
        "Amazon S3",
        "Least Privilege",
        "Vendors",
        "Security"
      ],
      "question": {
        "en": "A company distributes digital assets stored in Amazon S3 by using several vendors. It wants to ensure that vendor AWS accounts have only the minimum permissions needed to download objects from the buckets, with the least operational overhead. Which solution meets these requirements?",
        "ko": "회사는 여러 벤더를 사용하여 Amazon S3 버킷에 저장된 디지털 자산을 배포합니다. 이 회사는 공급업체 AWS 계정에 이러한 S3 버킷의 객체를 다운로드하는 데 필요한 최소한의 액세스 권한이 있는지 확인하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Design a bucket policy that grants anonymous read access and permission to list all buckets.",
          "ko": "익명의 읽기 권한과 모든 버킷을 나열할 수 있는 권한이 있는 버킷 정책을 설계합니다."
        },
        {
          "k": "B",
          "en": "Create a bucket policy granting users read-only access and specify IAM entities as security principals.",
          "ko": "사용자에게 읽기 전용 액세스 권한을 부여하는 버킷 정책을 설계하고 IAM 엔터티를 보안 주체로 지정합니다."
        },
        {
          "k": "C",
          "en": "Create a cross-account IAM role with a read-only policy for the designated IAM roles.",
          "ko": "IAM 역할에 대해 지정된 읽기 전용 액세스 정책이 있는 교차 계정 IAM 역할을 생성합니다."
        },
        {
          "k": "D",
          "en": "Create IAM user policies and vendor user groups that grant read-only access to each vendor user.",
          "ko": "공급업체 사용자에게 읽기 전용 액세스 권한을 부여하는 사용자 정책 및 공급업체 사용자 그룹을 만듭니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "A cross-account IAM role lets trusted roles in each vendor account assume temporary credentials with only the S3 read permissions required. Vendors keep identity management in their own accounts, and the company manages one role and policy instead of long-lived external users and keys.",
        "ko": "교차 계정 IAM 역할을 사용하면 각 공급업체 계정의 신뢰할 수 있는 역할이 필요한 S3 읽기 권한만 있는 임시 자격 증명을 맡을 수 있습니다. 공급업체는 자체 계정에서 ID를 관리하고 회사는 장기 외부 사용자와 키 대신 하나의 역할과 정책을 관리합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Anonymous access exposes assets publicly and violates least privilege.",
          "ko": "익명 액세스는 자산을 공개하여 최소 권한 원칙을 위반합니다."
        },
        "B": {
          "en": "Directly maintaining changing external principals in bucket policies creates more administration than delegating through cross-account roles.",
          "ko": "버킷 정책에서 변경되는 외부 주체를 직접 유지하면 교차 계정 역할을 통한 위임보다 관리 부담이 커집니다."
        },
        "D": {
          "en": "Creating IAM users for vendor personnel creates long-lived credentials and makes the company responsible for external user lifecycle management.",
          "ko": "공급업체 직원용 IAM 사용자를 생성하면 장기 자격 증명이 생기고 회사가 외부 사용자 수명 주기를 관리해야 합니다."
        }
      }
    },
    {
      "id": "exam12-719",
      "number": 719,
      "tags": [
        "Amazon Aurora MySQL",
        "Aurora Auto Scaling",
        "Database Auditing",
        "Automated Backups",
        "RPO"
      ],
      "question": {
        "en": "A customer-facing application has predictable annual database access patterns but varying read and write rates throughout the year. The company must retain database audit records for 7 days and requires an RPO of less than 5 hours. Which solution meets these requirements?",
        "ko": "솔루션 설계자는 회사의 고객 대면 애플리케이션을 설계하고 있습니다. 애플리케이션의 데이터베이스는 일년 내내 명확하게 정의된 액세스 패턴을 가지며 연중 시간에 따라 다양한 읽기 및 쓰기 횟수를 갖게 됩니다. 회사는 데이터베이스에 대한 감사 기록을 7일 동안 보관해야 하며 RPO(복구 지점 목표)는 5시간 미만이어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use Amazon DynamoDB with Auto Scaling, on-demand backup, and DynamoDB Streams.",
          "ko": "Auto Scaling과 함께 Amazon DynamoDB를 사용하고 온디맨드 백업 및 Amazon DynamoDB Streams를 사용합니다."
        },
        {
          "k": "B",
          "en": "Use Amazon Redshift, configure concurrency scaling, enable audit logging, and take a database snapshot every 4 hours.",
          "ko": "Amazon Redshift를 사용하고 동시성 확장을 구성하며 감사 로깅을 활성화하고 4시간마다 데이터베이스 스냅샷을 수행합니다."
        },
        {
          "k": "C",
          "en": "Use Amazon RDS with Provisioned IOPS, enable database audit parameters, and take a database snapshot every 5 hours.",
          "ko": "프로비저닝된 IOPS와 함께 Amazon RDS를 사용하고 데이터베이스 감사 매개변수를 활성화하며 5시간마다 데이터베이스 스냅샷을 수행합니다."
        },
        {
          "k": "D",
          "en": "Use Amazon Aurora MySQL with Auto Scaling and enable database audit parameters.",
          "ko": "Auto Scaling과 함께 Amazon Aurora MySQL을 사용하고 데이터베이스 감사 매개변수를 활성화합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "Aurora Auto Scaling adjusts the number of Aurora Replicas for changing read demand while the cluster writer handles writes. Aurora automated backups provide point-in-time recovery within the retention window and satisfy an RPO below five hours, while Aurora MySQL auditing can record database activity for the required retention workflow.",
        "ko": "Aurora Auto Scaling은 변하는 읽기 수요에 맞게 Aurora 복제본 수를 조정하고 클러스터 작성기가 쓰기를 처리합니다. Aurora 자동 백업은 보존 기간 내 특정 시점 복구를 제공하여 5시간 미만 RPO를 충족하며 Aurora MySQL 감사 기능은 필요한 보존 워크플로를 위해 데이터베이스 활동을 기록할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "DynamoDB Streams retains change records for only 24 hours, so it cannot provide seven days of audit records.",
          "ko": "DynamoDB Streams는 변경 레코드를 24시간만 보존하므로 7일 감사 기록을 제공할 수 없습니다."
        },
        "B": {
          "en": "Redshift is a data warehouse rather than the best transactional application database, and this design introduces unnecessary snapshot management.",
          "ko": "Redshift는 트랜잭션 애플리케이션 데이터베이스가 아닌 데이터 웨어하우스이며 이 설계는 불필요한 스냅샷 관리를 추가합니다."
        },
        "C": {
          "en": "A snapshot exactly every five hours does not guarantee an RPO of less than five hours and fixed Provisioned IOPS does not adapt as efficiently to varying demand.",
          "ko": "정확히 5시간마다 수행하는 스냅샷은 5시간 미만 RPO를 보장하지 않으며 고정 프로비저닝 IOPS는 변동 수요에 효율적으로 적응하지 못합니다."
        }
      }
    },
    {
      "id": "exam12-720",
      "number": 720,
      "tags": [
        "Amazon EC2 Auto Scaling",
        "Dynamic Scaling",
        "CloudWatch",
        "Traffic Spike",
        "Cost Optimization"
      ],
      "question": {
        "en": "An application runs on Amazon EC2 instances in an Auto Scaling group. Traffic can increase suddenly on arbitrary days. The company wants to maintain application performance during these sudden increases in the most cost-effective way. Which solution meets these requirements?",
        "ko": "회사의 애플리케이션은 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행됩니다. 회사는 애플리케이션에서 임의의 요일에 트래픽이 갑자기 증가한다는 사실을 알게 되었습니다. 회사는 트래픽이 갑자기 증가하는 동안 애플리케이션 성능을 유지하려고 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use manual scaling to change the size of the Auto Scaling group.",
          "ko": "수동 스케일링을 사용하여 Auto Scaling 그룹의 크기를 변경합니다."
        },
        {
          "k": "B",
          "en": "Use predictive scaling to change the size of the Auto Scaling group.",
          "ko": "예측 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다."
        },
        {
          "k": "C",
          "en": "Use dynamic scaling to change the size of the Auto Scaling group.",
          "ko": "동적 스케일링을 사용하여 Auto Scaling 그룹의 크기를 변경합니다."
        },
        {
          "k": "D",
          "en": "Use scheduled scaling to change the size of the Auto Scaling group.",
          "ko": "일정 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Dynamic scaling reacts automatically to current demand metrics and CloudWatch alarms. It adds instances during an unexpected spike and removes them when demand falls, preserving performance while avoiding the cost of permanently provisioned capacity.",
        "ko": "동적 조정은 현재 수요 지표와 CloudWatch 경보에 자동으로 반응합니다. 예기치 않은 급증 중에는 인스턴스를 추가하고 수요가 감소하면 제거하여 영구적으로 용량을 프로비저닝하는 비용 없이 성능을 유지합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Manual scaling requires intervention and cannot respond quickly or consistently to arbitrary traffic spikes.",
          "ko": "수동 조정은 개입이 필요하며 임의의 트래픽 급증에 빠르고 일관되게 대응할 수 없습니다."
        },
        "B": {
          "en": "Predictive scaling works best with recurring, forecastable patterns and is less suitable for sudden spikes on arbitrary days.",
          "ko": "예측 조정은 반복되고 예측 가능한 패턴에 가장 적합하며 임의의 날짜에 발생하는 갑작스러운 급증에는 덜 적합합니다."
        },
        "D": {
          "en": "Scheduled scaling requires known times and cannot respond to unplanned demand changes.",
          "ko": "일정 조정은 알려진 시간이 필요하므로 계획되지 않은 수요 변화에 대응할 수 없습니다."
        }
      }
    },
    {
      "id": "exam12-721",
      "number": 721,
      "tags": [
        "Amazon RDS Proxy",
        "Serverless",
        "Connection Pooling",
        "Scalability",
        "High Availability"
      ],
      "question": {
        "en": "A company has a serverless application that uses Amazon RDS as its backend database. Unpredictable traffic spikes cause the application to open and close database connections frequently, resulting in database errors or dropped connections. The application must remain scalable and highly available without code changes. Which solution meets these requirements?",
        "ko": "회사는 Amazon RDS를 백엔드 데이터베이스로 사용하는 서버리스 애플리케이션을 AWS에 보유하고 있습니다. 애플리케이션에서 트래픽이 예기치 않게 갑자기 증가하는 경우가 있습니다. 트래픽이 증가하는 동안 애플리케이션은 데이터베이스 연결을 자주 열고 닫으므로 데이터베이스 오류를 수신하거나 연결이 끊어집니다. 회사는 애플리케이션이 항상 확장 가능하고 가용성이 높은지 확인해야 합니다. 애플리케이션 코드 변경 없이 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Increase the maximum connections setting in the RDS database option group.",
          "ko": "서버리스 애플리케이션의 RDS 데이터베이스 옵션 그룹에서 최대 연결 수를 늘립니다."
        },
        {
          "k": "B",
          "en": "Increase the RDS DB instance class to accommodate peak traffic.",
          "ko": "최대 로드 트래픽을 충족하도록 RDS DB 인스턴스의 인스턴스 크기를 늘립니다."
        },
        {
          "k": "C",
          "en": "Deploy Amazon RDS Proxy between the serverless application and Amazon RDS.",
          "ko": "서버리스 애플리케이션과 Amazon RDS 간에 Amazon RDS 프록시를 배포합니다."
        },
        {
          "k": "D",
          "en": "Purchase an Amazon RDS Reserved Instance to improve database availability during peak traffic.",
          "ko": "Amazon RDS용 예약 인스턴스를 구입하여 피크 로드 트래픽 동안 데이터베이스의 가용성을 높입니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Amazon RDS Proxy pools and shares established database connections, preventing serverless concurrency bursts from creating excessive connections. It is fully managed and highly available and can improve failover behavior without requiring application logic changes beyond using the proxy endpoint.",
        "ko": "Amazon RDS Proxy는 설정된 데이터베이스 연결을 풀링하고 공유하여 서버리스 동시성 급증이 과도한 연결을 생성하지 않도록 합니다. 완전관리형 고가용성 서비스이며 프록시 엔드포인트를 사용하도록 구성하면 별도 애플리케이션 로직 변경 없이 장애 조치 동작도 개선합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Raising a connection limit does not pool connections and can exhaust database memory or other resources during bursts.",
          "ko": "연결 제한을 높여도 연결을 풀링하지 않으며 급증 중 데이터베이스 메모리나 기타 리소스를 고갈시킬 수 있습니다."
        },
        "B": {
          "en": "Permanent vertical scaling costs more and does not directly solve rapid connection creation and teardown.",
          "ko": "영구적인 수직 확장은 비용이 더 들며 빠른 연결 생성과 종료 문제를 직접 해결하지 않습니다."
        },
        "D": {
          "en": "A Reserved Instance is a billing discount and does not change connection capacity or availability behavior.",
          "ko": "예약 인스턴스는 결제 할인 방식이며 연결 용량이나 가용성 동작을 변경하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-722",
      "number": 722,
      "tags": [
        "Amazon CloudFront",
        "AWS Certificate Manager",
        "TLS Certificate",
        "Alternate Domain Name",
        "us-east-1"
      ],
      "question": {
        "en": "A company wants to configure an Amazon CloudFront distribution with an SSL/TLS certificate and use an alternate domain name instead of the default CloudFront domain. Which certificate deployment incurs no additional certificate cost?",
        "ko": "회사에서 SSL/TLS 인증서를 사용하도록 Amazon CloudFront 배포를 구성하려고 합니다. 회사는 배포에 기본 도메인 이름을 사용하지 않고 다른 도메인 이름을 사용하려고 합니다. 추가 비용을 발생시키지 않으면서 인증서를 배포하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Request an Amazon-issued private certificate from AWS Certificate Manager in us-east-1.",
          "ko": "us-east-1 리전의 AWS Certificate Manager(ACM)에서 Amazon 발급 사설 인증서를 요청합니다."
        },
        {
          "k": "B",
          "en": "Request an Amazon-issued private certificate from AWS Certificate Manager in us-west-1.",
          "ko": "us-west-1 리전의 AWS Certificate Manager(ACM)에서 Amazon 발급 사설 인증서를 요청합니다."
        },
        {
          "k": "C",
          "en": "Request an Amazon-issued public certificate from AWS Certificate Manager in us-east-1.",
          "ko": "us-east-1 리전의 AWS Certificate Manager(ACM)에서 Amazon 발급 공인 인증서를 요청합니다."
        },
        {
          "k": "D",
          "en": "Request an Amazon-issued public certificate from AWS Certificate Manager in us-west-1.",
          "ko": "us-west-1 리전의 AWS Certificate Manager(ACM)에서 Amazon 발급 공인 인증서를 요청합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "CloudFront requires an ACM certificate used for viewer HTTPS to be requested or imported in us-east-1. Public certificates issued by ACM for integrated AWS services have no additional certificate charge, and the certificate can cover the distribution's alternate domain name.",
        "ko": "CloudFront에서 뷰어 HTTPS에 사용하는 ACM 인증서는 us-east-1에서 요청하거나 가져와야 합니다. 통합된 AWS 서비스에 사용하는 ACM 발급 공인 인증서에는 별도 인증서 요금이 없으며 배포의 대체 도메인 이름을 포함할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "ACM private certificates incur AWS Private CA charges and are not the free public certificate requested.",
          "ko": "ACM 사설 인증서는 AWS Private CA 요금이 발생하며 요청된 무료 공인 인증서가 아닙니다."
        },
        "B": {
          "en": "It is both a charged private certificate and located outside the us-east-1 Region required by CloudFront.",
          "ko": "요금이 발생하는 사설 인증서이며 CloudFront가 요구하는 us-east-1 리전에도 있지 않습니다."
        },
        "D": {
          "en": "The certificate is public, but CloudFront requires its ACM viewer certificate to reside in us-east-1 rather than us-west-1.",
          "ko": "공인 인증서이지만 CloudFront의 ACM 뷰어 인증서는 us-west-1이 아닌 us-east-1에 있어야 합니다."
        }
      }
    },
    {
      "id": "exam12-723",
      "number": 723,
      "tags": [
        "Cluster Placement Group",
        "HPC",
        "Amazon EC2",
        "Low Latency",
        "Network Throughput"
      ],
      "question": {
        "en": "A company runs an HPC workload on AWS. The workload requires low-latency, high-throughput networking between tightly coupled nodes. The EC2 instances are correctly sized for compute and storage and are launched with default options. What should a solutions architect propose to improve performance?",
        "ko": "회사는 AWS에서 고성능 컴퓨팅(HPC) 워크로드를 실행합니다. 워크로드에는 긴밀하게 연결된 노드 간 통신을 통해 대기 시간이 짧은 네트워크 성능과 높은 네트워크 처리량이 필요합니다. Amazon EC2 인스턴스는 컴퓨팅 및 스토리지 용량에 적합한 크기이며 기본 옵션을 사용하여 시작됩니다. 솔루션 설계자는 워크로드의 성능을 개선하기 위해 무엇을 제안해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Select a cluster placement group when launching the Amazon EC2 instances.",
          "ko": "Amazon EC2 인스턴스를 시작하는 동안 클러스터 배치 그룹을 선택합니다."
        },
        {
          "k": "B",
          "en": "Select Dedicated Instance tenancy when launching the Amazon EC2 instances.",
          "ko": "Amazon EC2 인스턴스를 시작하는 동안 전용 인스턴스 테넌시를 선택합니다."
        },
        {
          "k": "C",
          "en": "Select an Elastic Inference accelerator when launching the Amazon EC2 instances.",
          "ko": "Amazon EC2 인스턴스를 시작하는 동안 Elastic Inference 액셀러레이터를 선택합니다."
        },
        {
          "k": "D",
          "en": "Select a Capacity Reservation for the required capacity when launching the Amazon EC2 instances.",
          "ko": "Amazon EC2 인스턴스를 시작하는 동안 필요한 용량 예약을 선택합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "A cluster placement group packs instances close together within one Availability Zone, providing the low-latency, high-throughput network connectivity required by tightly coupled HPC nodes.",
        "ko": "클러스터 배치 그룹은 한 가용 영역 내에 인스턴스를 서로 가깝게 배치하여 긴밀하게 결합된 HPC 노드에 필요한 짧은 지연 시간과 높은 처리량의 네트워크 연결을 제공합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Dedicated tenancy isolates hardware but does not optimize the relative placement or network path between instances.",
          "ko": "전용 테넌시는 하드웨어를 격리하지만 인스턴스 간 상대적 배치나 네트워크 경로를 최적화하지 않습니다."
        },
        "C": {
          "en": "Elastic Inference accelerates certain machine-learning inference workloads and does not improve general inter-node networking.",
          "ko": "Elastic Inference는 일부 기계 학습 추론 워크로드를 가속하며 일반 노드 간 네트워킹을 개선하지 않습니다."
        },
        "D": {
          "en": "A Capacity Reservation guarantees compute capacity in an Availability Zone but does not reduce network latency between instances.",
          "ko": "용량 예약은 가용 영역의 컴퓨팅 용량을 보장하지만 인스턴스 간 네트워크 지연을 줄이지 않습니다."
        }
      }
    },
    {
      "id": "exam12-724",
      "number": 724,
      "tags": [
        "AWS Lambda",
        "Provisioned Concurrency",
        "API Gateway",
        "Cold Start",
        "Serverless"
      ],
      "question": {
        "en": "A company hosts an internal serverless application with Amazon API Gateway and AWS Lambda. Employees report long latency when they begin using the application each day. Which solution reduces this latency?",
        "ko": "회사는 Amazon API Gateway 및 AWS Lambda를 사용하여 AWS에서 내부 서버리스 애플리케이션을 호스팅합니다. 회사 직원은 매일 애플리케이션을 사용하기 시작할 때 대기 시간이 긴 문제를 보고합니다. 회사는 대기 시간을 줄이려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Increase the API Gateway throttling limit.",
          "ko": "API Gateway 조절 제한을 늘립니다."
        },
        {
          "k": "B",
          "en": "Configure scheduled scaling to increase Lambda provisioned concurrency before employees begin using the application each day.",
          "ko": "직원이 매일 애플리케이션을 사용하기 전에 Lambda 프로비저닝된 동시성을 높이도록 예약된 조정을 설정합니다."
        },
        {
          "k": "C",
          "en": "Create an Amazon CloudWatch alarm that invokes the Lambda function at the beginning of each day.",
          "ko": "Amazon CloudWatch 경보를 생성하여 매일 시작 시 경보 대상으로 Lambda 함수를 시작합니다."
        },
        {
          "k": "D",
          "en": "Increase the Lambda function's memory.",
          "ko": "Lambda 함수 메모리를 늘립니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Provisioned concurrency initializes and keeps the requested number of Lambda execution environments ready, eliminating cold-start latency for the expected morning demand. Scheduled scaling can raise that capacity before use and lower it afterward to control cost.",
        "ko": "프로비저닝된 동시성은 요청한 수의 Lambda 실행 환경을 미리 초기화하고 준비 상태로 유지하여 예상되는 아침 수요의 콜드 스타트 지연을 제거합니다. 예약된 조정은 사용 전에 용량을 늘리고 이후 낮춰 비용을 제어할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "API Gateway throttling controls request rates and does not initialize Lambda execution environments.",
          "ko": "API Gateway 조절은 요청 속도를 제어하며 Lambda 실행 환경을 초기화하지 않습니다."
        },
        "C": {
          "en": "A single scheduled invocation is an unreliable warming technique and does not keep enough concurrent environments initialized.",
          "ko": "예약된 단일 호출은 신뢰할 수 있는 워밍 기법이 아니며 충분한 수의 동시 실행 환경을 초기화 상태로 유지하지 않습니다."
        },
        "D": {
          "en": "More memory can speed execution but does not guarantee that an execution environment is already initialized when the first request arrives.",
          "ko": "메모리를 늘리면 실행 속도는 높일 수 있지만 첫 요청 시 실행 환경이 이미 초기화되어 있음을 보장하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-725",
      "number": 725,
      "tags": [
        "Amazon ElastiCache for Redis",
        "Multi-AZ",
        "Replication Group",
        "Redis Shards",
        "High Availability"
      ],
      "question": {
        "en": "A solutions architect is designing a highly available Amazon ElastiCache for Redis solution. Failures must not cause performance degradation or data loss, and the solution must provide high availability at the node and Availability Zone levels. Which solution meets these requirements?",
        "ko": "솔루션 설계자는 가용성이 높은 Amazon ElastiCache for Redis 기반 솔루션을 설계하고 있습니다. 장애로 인해 로컬 및 AWS 리전 내에서 성능 저하 또는 데이터 손실이 발생하지 않아야 합니다. 솔루션은 노드 수준과 가용 영역 수준에서 고가용성을 제공해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use a Multi-AZ Redis replication group with shards that contain multiple nodes.",
          "ko": "여러 노드가 포함된 샤드와 함께 다중 AZ Redis 복제 그룹을 사용합니다."
        },
        {
          "k": "B",
          "en": "Use Redis shards containing multiple nodes with Redis append-only files enabled.",
          "ko": "Redis AOF(추가 전용 파일)가 설정된 여러 노드를 포함하는 Redis 샤드를 사용합니다."
        },
        {
          "k": "C",
          "en": "Use a Multi-AZ Redis cluster with at least two read replicas in the replication group.",
          "ko": "복제 그룹에 둘 이상의 읽기 전용 복제본이 있는 다중 AZ Redis 클러스터를 사용합니다."
        },
        {
          "k": "D",
          "en": "Use Redis shards containing multiple nodes with Auto Scaling enabled.",
          "ko": "Auto Scaling이 켜진 여러 노드를 포함하는 Redis 샤드를 사용합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "A Multi-AZ Redis replication group distributes a primary and replicas across Availability Zones and automatically promotes a replica when the primary fails. Multiple-node shards add redundancy and read scalability per shard, providing both node-level and AZ-level resilience.",
        "ko": "다중 AZ Redis 복제 그룹은 기본 노드와 복제본을 여러 가용 영역에 분산하고 기본 노드 장애 시 복제본을 자동 승격합니다. 여러 노드로 구성된 샤드는 샤드별 중복성과 읽기 확장성을 추가하여 노드 및 AZ 수준의 복원력을 모두 제공합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Append-only files improve persistence but do not by themselves provide automatic cross-AZ failover or managed node redundancy.",
          "ko": "AOF는 지속성을 개선하지만 그 자체로 자동 교차 AZ 장애 조치나 관리형 노드 중복성을 제공하지 않습니다."
        },
        "C": {
          "en": "Read replicas help availability, but the stated design is less complete than explicitly using a sharded Multi-AZ replication group with multiple nodes per shard.",
          "ko": "읽기 복제본은 가용성에 도움이 되지만 명시적으로 샤드별 여러 노드를 가진 다중 AZ 복제 그룹을 사용하는 설계보다 요구 사항 표현이 불완전합니다."
        },
        "D": {
          "en": "Auto Scaling adjusts capacity and does not replace Multi-AZ replication and automatic failover for availability.",
          "ko": "Auto Scaling은 용량을 조정하며 가용성을 위한 다중 AZ 복제와 자동 장애 조치를 대신하지 않습니다."
        }
      }
    }
  ]
});
