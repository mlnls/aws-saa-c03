/* Exam 12 · Topic 1 · 현재 수록 범위: 551~600번 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  "id": "exam12",
  "title": "Exam 12",
  "note": "Topic 1 · #551–600",
  "questions": [
    {
      "id": "exam12-551",
      "number": 551,
      "tags": [
        "Amazon S3",
        "S3 Lifecycle",
        "S3 Glacier Flexible Retrieval",
        "Storage Classes",
        "Cost Optimization"
      ],
      "question": {
        "en": "A financial application creates reports averaging 50 KB and stores them in Amazon S3. Reports are accessed frequently during the first week, must be retained for several years, and must be retrievable within 6 hours. Which solution is most cost-effective?",
        "ko": "회사에 보고서를 생성하는 재무 응용 프로그램이 있습니다. 보고서 크기는 평균 50KB이며 Amazon S3에 저장됩니다. 보고서는 생산 후 첫 주 동안 자주 액세스되며 몇 년 동안 저장해야 합니다. 보고서는 6시간 이내에 검색할 수 있어야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use S3 Standard and an S3 Lifecycle rule to transition reports to S3 Glacier Flexible Retrieval after 7 days.",
          "ko": "S3 Standard를 사용합니다. S3 수명 주기 규칙을 사용하여 7일 후에 보고서를 S3 Glacier로 전환합니다."
        },
        {
          "k": "B",
          "en": "Use S3 Standard and transition reports to S3 Standard-IA after 7 days.",
          "ko": "S3 Standard를 사용합니다. S3 수명 주기 규칙을 사용하여 7일 후에 보고서를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다."
        },
        {
          "k": "C",
          "en": "Use S3 Intelligent-Tiering and configure it to transition reports to S3 Standard-IA and S3 Glacier.",
          "ko": "S3 Intelligent-Tiering을 사용합니다. 보고서를 S3 Standard-Infrequent Access(S3 Standard-IA) 및 S3 Glacier로 전환하도록 S3 Intelligent-Tiering을 구성합니다."
        },
        {
          "k": "D",
          "en": "Use S3 Standard and transition reports to S3 Glacier Deep Archive after 7 days.",
          "ko": "S3 Standard를 사용합니다. S3 수명 주기 규칙을 사용하여 7일 후에 보고서를 S3 Glacier Deep Archive로 전환합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "S3 Standard serves the frequently accessed first week. A lifecycle transition to S3 Glacier Flexible Retrieval provides low-cost long-term storage and a standard retrieval time that fits the 6-hour requirement.",
        "ko": "S3 Standard는 자주 액세스하는 첫 주에 적합합니다. 이후 S3 Glacier Flexible Retrieval로 수명 주기 전환하면 저렴한 장기 보관과 6시간 요구 사항을 충족하는 표준 검색 시간을 제공합니다."
      },
      "why_wrong": {
        "B": {
          "en": "S3 Standard-IA costs more for long-term archival than Glacier Flexible Retrieval and has per-object minimum-size billing that is inefficient for 50 KB reports.",
          "ko": "S3 Standard-IA는 장기 보관 시 Glacier Flexible Retrieval보다 비싸고 객체당 최소 크기 과금으로 인해 50KB 보고서에 비효율적입니다."
        },
        "C": {
          "en": "Intelligent-Tiering adds monitoring charges per object and is unnecessary when the access pattern is known in advance.",
          "ko": "Intelligent-Tiering은 객체별 모니터링 비용이 추가되며 액세스 패턴을 미리 알고 있는 경우 필요하지 않습니다."
        },
        "D": {
          "en": "S3 Glacier Deep Archive standard retrieval can take about 12 hours, exceeding the 6-hour requirement.",
          "ko": "S3 Glacier Deep Archive의 표준 검색은 약 12시간이 걸릴 수 있어 6시간 요구 사항을 초과합니다."
        }
      }
    },
    {
      "id": "exam12-552",
      "number": 552,
      "tags": [
        "Amazon EC2",
        "Compute Savings Plans",
        "Cost Optimization",
        "Instance Flexibility"
      ],
      "question": {
        "en": "A company must optimize Amazon EC2 costs and changes EC2 instance types and families every 2 to 3 months. What should the company do?",
        "ko": "회사는 Amazon EC2 인스턴스의 비용을 최적화해야 합니다. 회사는 또한 2~3개월마다 EC2 인스턴스의 유형과 제품군을 변경해야 합니다. 이러한 요구 사항을 충족하기 위해 회사는 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Purchase Partial Upfront Reserved Instances for a 3-year term.",
          "ko": "3년 기간 동안 부분 선결제 예약 인스턴스를 구매합니다."
        },
        {
          "k": "B",
          "en": "Purchase a No Upfront Compute Savings Plan for a 1-year term.",
          "ko": "1년 기간 동안 선결제 없는 컴퓨팅 절감 플랜을 구매합니다."
        },
        {
          "k": "C",
          "en": "Purchase All Upfront Reserved Instances for a 1-year term.",
          "ko": "1년 기간 동안 모든 선결제 예약 인스턴스를 구매합니다."
        },
        {
          "k": "D",
          "en": "Purchase an All Upfront EC2 Instance Savings Plan for a 1-year term.",
          "ko": "1년 기간 동안 All Upfront EC2 Instance Savings Plan을 구매합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Compute Savings Plans apply across EC2 instance families, sizes, Regions, operating systems, and tenancy, so the company can change its configuration while retaining the discount. A 1-year No Upfront plan preserves the most payment flexibility among the choices.",
        "ko": "Compute Savings Plans는 EC2 인스턴스 제품군, 크기, 리전, 운영 체제 및 테넌시에 걸쳐 적용되므로 구성을 바꾸면서도 할인을 유지할 수 있습니다. 선택지 중 1년 선결제 없음 플랜이 결제 유연성도 가장 높습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A 3-year Reserved Instance commitment is too rigid for frequent family and type changes.",
          "ko": "3년 예약 인스턴스 약정은 잦은 제품군과 유형 변경에 지나치게 제한적입니다."
        },
        "C": {
          "en": "Reserved Instances provide less flexibility across instance families than Compute Savings Plans.",
          "ko": "예약 인스턴스는 Compute Savings Plans보다 인스턴스 제품군 간 유연성이 낮습니다."
        },
        "D": {
          "en": "EC2 Instance Savings Plans are tied to an instance family in a Region and therefore do not fit frequent family changes.",
          "ko": "EC2 Instance Savings Plans는 특정 리전의 인스턴스 제품군에 묶이므로 잦은 제품군 변경에 적합하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-553",
      "number": 553,
      "tags": [
        "Amazon Macie",
        "Amazon S3",
        "PII",
        "Multi-Region",
        "Security",
        "Operational Excellence"
      ],
      "question": {
        "en": "A solutions architect must review company S3 buckets for personally identifiable information. The company stores PII in us-east-1 and us-west-2. Which solution meets the requirement with the least operational overhead?",
        "ko": "솔루션 설계자는 회사의 Amazon S3 버킷을 검토하여 개인 식별 정보(PII)를 검색해야 합니다. 회사는 us-east-1 리전 및 us-west-2 리전에 PII 데이터를 저장합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure Amazon Macie in each Region and create jobs to analyze the data in Amazon S3.",
          "ko": "각 리전에서 Amazon Macie를 구성합니다. Amazon S3에 있는 데이터를 분석하는 작업을 생성합니다."
        },
        {
          "k": "B",
          "en": "Configure AWS Security Hub in all Regions and create AWS Config rules to analyze data in Amazon S3.",
          "ko": "모든 리전에 대해 AWS Security Hub를 구성합니다. Amazon S3에 있는 데이터를 분석하는 AWS Config 규칙을 생성합니다."
        },
        {
          "k": "C",
          "en": "Configure Amazon Inspector to analyze data in Amazon S3.",
          "ko": "Amazon S3에 있는 데이터를 분석하도록 Amazon Inspector를 구성합니다."
        },
        {
          "k": "D",
          "en": "Configure Amazon GuardDuty to analyze data in Amazon S3.",
          "ko": "Amazon S3에 있는 데이터를 분석하도록 Amazon GuardDuty를 구성합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Amazon Macie is the managed service for discovering and classifying sensitive data such as PII in S3. Macie is Regional, so it must be enabled and discovery jobs created in both Regions.",
        "ko": "Amazon Macie는 S3에서 PII 같은 민감한 데이터를 검색하고 분류하는 관리형 서비스입니다. Macie는 리전 서비스이므로 두 리전 모두에서 활성화하고 검색 작업을 생성해야 합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Security Hub aggregates security findings and Config evaluates resource configuration; neither scans S3 object contents for PII.",
          "ko": "Security Hub는 보안 결과를 집계하고 Config는 리소스 구성을 평가하며 둘 다 S3 객체 내용을 PII 대상으로 검사하지 않습니다."
        },
        "C": {
          "en": "Amazon Inspector scans workloads and container images for vulnerabilities, not S3 objects for sensitive data.",
          "ko": "Amazon Inspector는 워크로드와 컨테이너 이미지의 취약성을 검사하며 S3 객체의 민감한 데이터를 검색하지 않습니다."
        },
        "D": {
          "en": "GuardDuty detects threats and anomalous activity; it does not classify PII inside S3 objects.",
          "ko": "GuardDuty는 위협과 비정상 활동을 탐지하며 S3 객체 내부의 PII를 분류하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-554",
      "number": 554,
      "tags": [
        "Amazon EC2",
        "Memory Optimized Instances",
        "SAP",
        "SQL Server",
        "Migration",
        "Performance"
      ],
      "question": {
        "en": "A company's SAP application has a backend SQL Server database on premises. The company will migrate both to AWS. Performance data shows high memory utilization for both the SAP application and database. Which solution meets these requirements?",
        "ko": "회사의 SAP 애플리케이션에는 온프레미스 환경에 백엔드 SQL Server 데이터베이스가 있습니다. 이 회사는 온프레미스 애플리케이션과 데이터베이스 서버를 AWS로 마이그레이션하려고 합니다. 회사는 SAP 데이터베이스의 높은 요구 사항을 충족하는 인스턴스 유형이 필요합니다. 온프레미스 성능 데이터에 따르면 SAP 애플리케이션과 데이터베이스 모두 메모리 사용률이 높습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use compute-optimized instances for the application and memory-optimized instances for the database.",
          "ko": "애플리케이션에 최적화된 컴퓨팅 인스턴스 제품군을 사용하십시오. 데이터베이스에 메모리 최적화 인스턴스 제품군을 사용하십시오."
        },
        {
          "k": "B",
          "en": "Use storage-optimized instances for both the application and database.",
          "ko": "애플리케이션과 데이터베이스 모두에 스토리지 최적화 인스턴스 제품군을 사용하십시오."
        },
        {
          "k": "C",
          "en": "Use memory-optimized instances for both the application and database.",
          "ko": "애플리케이션과 데이터베이스 모두에 대해 메모리 최적화 인스턴스 제품군을 사용하십시오."
        },
        {
          "k": "D",
          "en": "Use HPC-optimized instances for the application and memory-optimized instances for the database.",
          "ko": "애플리케이션에 고성능 컴퓨팅(HPC) 최적화 인스턴스 제품군을 사용하십시오. 데이터베이스에 메모리 최적화 인스턴스 제품군을 사용하십시오."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Memory-optimized EC2 instances are designed for workloads that process large data sets in memory. Because monitoring shows both tiers are memory constrained, both should use memory-optimized families.",
        "ko": "메모리 최적화 EC2 인스턴스는 메모리에서 대규모 데이터 세트를 처리하는 워크로드용입니다. 모니터링 결과 두 계층 모두 메모리 사용량이 높으므로 양쪽 모두 메모리 최적화 제품군을 사용해야 합니다."
      },
      "why_wrong": {
        "A": {
          "en": "The application is memory intensive, so compute-optimized instances do not match its observed bottleneck.",
          "ko": "애플리케이션은 메모리 집약적이므로 컴퓨팅 최적화 인스턴스는 관찰된 병목과 맞지 않습니다."
        },
        "B": {
          "en": "Storage-optimized instances target high local storage throughput, not high memory utilization.",
          "ko": "스토리지 최적화 인스턴스는 높은 로컬 스토리지 처리량을 위한 것이며 높은 메모리 사용률을 위한 것이 아닙니다."
        },
        "D": {
          "en": "HPC-optimized instances target tightly coupled compute and network workloads rather than the stated memory demand.",
          "ko": "HPC 최적화 인스턴스는 명시된 메모리 수요가 아니라 긴밀하게 결합된 컴퓨팅 및 네트워크 워크로드를 위한 것입니다."
        }
      }
    },
    {
      "id": "exam12-555",
      "number": 555,
      "tags": [
        "Amazon SQS",
        "Interface VPC Endpoint",
        "AWS PrivateLink",
        "Security Group",
        "Private Subnet",
        "Amazon EC2"
      ],
      "question": {
        "en": "An application runs on EC2 instances in private subnets across multiple Availability Zones and uses an SQS queue. A solutions architect must securely connect the instances to SQS. Which solution meets these requirements?",
        "ko": "회사는 퍼블릭 및 프라이빗 서브넷이 있는 VPC에서 애플리케이션을 실행합니다. VPC는 여러 가용 영역에 걸쳐 확장됩니다. 애플리케이션은 프라이빗 서브넷의 Amazon EC2 인스턴스에서 실행되며 Amazon Simple Queue Service(Amazon SQS) 대기열을 사용합니다. 솔루션 설계자는 EC2 인스턴스와 SQS 대기열 간의 연결을 설정하기 위한 보안 솔루션을 설계해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an interface VPC endpoint for SQS in the private subnets and attach a security group that allows inbound traffic from the EC2 instances' security group.",
          "ko": "Amazon SQS용 인터페이스 VPC 엔드포인트를 구현합니다. 프라이빗 서브넷을 사용하도록 엔드포인트를 구성합니다. 프라이빗 서브넷에 있는 EC2 인스턴스의 트래픽을 허용하는 인바운드 액세스 규칙이 있는 보안 그룹을 엔드포인트에 추가합니다."
        },
        {
          "k": "B",
          "en": "Create an interface VPC endpoint for SQS in public subnets and attach a VPC endpoint policy that allows the private instances.",
          "ko": "Amazon SQS용 인터페이스 VPC 엔드포인트를 구현합니다. 퍼블릭 서브넷을 사용하도록 엔드포인트를 구성합니다. 프라이빗 서브넷에 있는 EC2 인스턴스의 액세스를 허용하는 VPC 엔드포인트 정책을 인터페이스 엔드포인트에 연결합니다."
        },
        {
          "k": "C",
          "en": "Create an interface VPC endpoint for SQS in public subnets and attach a policy that accepts requests only from the endpoint.",
          "ko": "Amazon SQS용 인터페이스 VPC 엔드포인트를 구현합니다. 퍼블릭 서브넷을 사용하도록 엔드포인트를 구성합니다. 지정된 VPC 엔드포인트의 요청만 허용하는 인터페이스 VPC 엔드포인트에 Amazon SQS 액세스 정책을 연결합니다."
        },
        {
          "k": "D",
          "en": "Create an SQS gateway endpoint, add a NAT gateway in each private subnet, and attach an IAM role to the instances.",
          "ko": "Amazon SQS용 게이트웨이 엔드포인트를 구현합니다. 프라이빗 서브넷에 NAT 게이트웨이를 추가합니다. SQS 대기열에 대한 액세스를 허용하는 EC2 인스턴스에 IAM 역할을 연결합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "SQS supports interface VPC endpoints powered by AWS PrivateLink. Endpoint network interfaces in private subnets and a security group that permits HTTPS from the application security group keep traffic private and tightly scoped.",
        "ko": "SQS는 AWS PrivateLink 기반 인터페이스 VPC 엔드포인트를 지원합니다. 프라이빗 서브넷의 엔드포인트 네트워크 인터페이스와 애플리케이션 보안 그룹에서 HTTPS를 허용하는 보안 그룹을 사용하면 트래픽을 비공개로 유지하고 범위를 제한할 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "An endpoint policy controls API authorization but does not replace the security group network rule, and public-subnet placement is unnecessary.",
          "ko": "엔드포인트 정책은 API 권한을 제어하지만 보안 그룹 네트워크 규칙을 대신하지 않으며 퍼블릭 서브넷 배치도 필요하지 않습니다."
        },
        "C": {
          "en": "The described policy and public placement do not establish the required private-instance network access as directly as private endpoint ENIs with security groups.",
          "ko": "설명된 정책과 퍼블릭 배치는 보안 그룹이 있는 프라이빗 엔드포인트 ENI만큼 직접적으로 프라이빗 인스턴스의 네트워크 액세스를 구성하지 못합니다."
        },
        "D": {
          "en": "SQS uses interface endpoints, not gateway endpoints, and a NAT gateway is unnecessary for PrivateLink access.",
          "ko": "SQS는 게이트웨이 엔드포인트가 아니라 인터페이스 엔드포인트를 사용하며 PrivateLink 액세스에 NAT 게이트웨이는 필요하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-556",
      "number": 556,
      "tags": [
        "AWS IAM",
        "IAM Role",
        "Instance Profile",
        "Amazon EC2",
        "Amazon DynamoDB",
        "AWS CloudFormation",
        "Security"
      ],
      "question": {
        "en": "A CloudFormation template deploys a three-tier web application. The web and application tiers run on EC2, and the private database tier is DynamoDB. The instances must access DynamoDB without exposing API credentials in the template. What should the solutions architect do?",
        "ko": "솔루션 설계자는 AWS CloudFormation 템플릿을 사용하여 3계층 웹 애플리케이션을 배포합니다. 웹 애플리케이션은 웹 계층과 Amazon DynamoDB 테이블에서 사용자 데이터를 저장하고 검색하는 애플리케이션 계층으로 구성됩니다. 웹 및 애플리케이션 계층은 Amazon EC2 인스턴스에서 호스팅되며 데이터베이스 계층은 공개적으로 액세스할 수 없습니다. 애플리케이션 EC2 인스턴스는 템플릿에서 API 자격 증명을 노출하지 않고 DynamoDB 테이블에 액세스해야 합니다. 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an IAM role that can read the DynamoDB table and associate the role directly with the application instance by referencing an instance profile.",
          "ko": "DynamoDB 테이블을 읽을 IAM 역할을 생성합니다. 인스턴스 프로필을 참조하여 역할을 애플리케이션 인스턴스와 연결합니다."
        },
        {
          "k": "B",
          "en": "Create an IAM role with the required DynamoDB read and write permissions, add it to an EC2 instance profile, and associate the instance profile with the application instances.",
          "ko": "DynamoDB 테이블에서 읽고 쓰는 데 필요한 권한이 있는 IAM 역할을 생성합니다. EC2 인스턴스 프로필에 역할을 추가하고 인스턴스 프로필을 애플리케이션 인스턴스와 연결합니다."
        },
        {
          "k": "C",
          "en": "Use template parameters to collect an existing IAM user's access key and secret key.",
          "ko": "AWS CloudFormation 템플릿의 파라미터 섹션을 사용하여 DynamoDB 테이블에서 읽고 쓰는 데 필요한 권한이 있는 이미 생성된 IAM 사용자의 액세스 및 비밀 키를 입력하도록 합니다."
        },
        {
          "k": "D",
          "en": "Create an IAM user in the template and use GetAtt to pass its access and secret keys to the application instances through user data.",
          "ko": "DynamoDB 테이블에서 읽고 쓰는 데 필요한 권한이 있는 AWS CloudFormation 템플릿에서 IAM 사용자를 생성합니다. GetAtt 기능을 사용하여 액세스 및 비밀 키를 검색하고 사용자 데이터를 통해 애플리케이션 인스턴스에 전달합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "An IAM role attached through an EC2 instance profile supplies automatically rotated temporary credentials. The role should contain the DynamoDB read and write permissions required by the application.",
        "ko": "EC2 인스턴스 프로필을 통해 연결된 IAM 역할은 자동으로 교체되는 임시 자격 증명을 제공합니다. 역할에는 애플리케이션에 필요한 DynamoDB 읽기 및 쓰기 권한이 있어야 합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Read-only permission is insufficient because the application stores as well as retrieves user data.",
          "ko": "애플리케이션은 사용자 데이터를 검색할 뿐 아니라 저장하므로 읽기 전용 권한으로는 부족합니다."
        },
        "C": {
          "en": "Passing long-term IAM user keys through template parameters exposes and operationalizes static credentials.",
          "ko": "템플릿 파라미터로 장기 IAM 사용자 키를 전달하면 정적 자격 증명이 노출되고 관리 부담이 생깁니다."
        },
        "D": {
          "en": "Creating and distributing IAM user keys through user data exposes long-term credentials and is insecure.",
          "ko": "사용자 데이터를 통해 IAM 사용자 키를 생성하고 배포하면 장기 자격 증명이 노출되어 안전하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-557",
      "number": 557,
      "tags": [
        "Amazon EMR",
        "Amazon S3",
        "Amazon Redshift",
        "Big Data",
        "Parallel Processing",
        "Analytics"
      ],
      "question": {
        "en": "An analytics application stores a large amount of unstructured data in S3. A solutions architect wants faster parallel processing and must enrich the data with information stored in Amazon Redshift. Which solution meets these requirements?",
        "ko": "솔루션 설계자는 분석 애플리케이션을 관리합니다. 애플리케이션은 Amazon S3 버킷에 대량의 반구조화된 데이터를 저장합니다. 솔루션 설계자는 병렬 데이터 처리를 사용하여 데이터를 더 빠르게 처리하려고 합니다. 또한 Amazon Redshift 데이터베이스에 저장된 정보를 사용하여 데이터를 보강하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use Amazon Athena to process the S3 data and AWS Glue to enrich it with the Redshift data.",
          "ko": "Amazon Athena를 사용하여 S3 데이터를 처리합니다. Amazon Redshift 데이터와 함께 AWS Glue를 사용하여 S3 데이터를 보강합니다."
        },
        {
          "k": "B",
          "en": "Use Amazon EMR to process the S3 data and to enrich it with the Amazon Redshift data.",
          "ko": "Amazon EMR을 사용하여 S3 데이터를 처리합니다. Amazon Redshift 데이터와 함께 Amazon EMR을 사용하여 S3 데이터를 보강합니다."
        },
        {
          "k": "C",
          "en": "Use Amazon EMR to process the S3 data and Kinesis Data Streams to move the S3 data into Redshift for enrichment.",
          "ko": "Amazon EMR을 사용하여 S3 데이터를 처리합니다. 데이터를 보강할 수 있도록 Amazon Kinesis Data Streams를 사용하여 S3 데이터를 Amazon Redshift로 이동합니다."
        },
        {
          "k": "D",
          "en": "Use AWS Glue to process the S3 data and Lake Formation with Redshift data to enrich it.",
          "ko": "AWS Glue를 사용하여 S3 데이터를 처리합니다. Amazon Redshift 데이터와 함께 AWS Lake Formation을 사용하여 S3 데이터를 보강합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Amazon EMR provides distributed frameworks such as Spark for parallel processing of large S3 datasets. EMR can access both S3 and Redshift, allowing the same processing workflow to join and enrich the data.",
        "ko": "Amazon EMR은 대규모 S3 데이터 세트를 병렬 처리하는 Spark 같은 분산 프레임워크를 제공합니다. EMR은 S3와 Redshift 모두에 액세스할 수 있어 동일한 처리 워크플로우에서 데이터를 결합하고 보강할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Athena is a serverless SQL query service, and splitting the work between Athena and Glue is less direct for the requested parallel processing workflow.",
          "ko": "Athena는 서버리스 SQL 쿼리 서비스이며 Athena와 Glue로 작업을 나누는 방식은 요청된 병렬 처리 워크플로우에 덜 직접적입니다."
        },
        "C": {
          "en": "Kinesis Data Streams is for streaming ingestion and is not needed to move an existing S3 dataset for a batch enrichment job.",
          "ko": "Kinesis Data Streams는 스트리밍 수집용이며 기존 S3 데이터 세트를 배치 보강 작업으로 이동하는 데 필요하지 않습니다."
        },
        "D": {
          "en": "Lake Formation governs and secures data lakes; it is not the parallel data-processing engine described here.",
          "ko": "Lake Formation은 데이터 레이크를 관리하고 보호하며 여기서 필요한 병렬 데이터 처리 엔진이 아닙니다."
        }
      }
    },
    {
      "id": "exam12-558",
      "number": 558,
      "tags": [
        "VPC Peering",
        "Amazon VPC",
        "Data Transfer",
        "Cost Optimization",
        "Networking"
      ],
      "question": {
        "en": "A company has two VPCs in us-west-2 in the same AWS account. The VPCs must communicate and transfer about 500 GB each month. What is the most cost-effective way to connect them?",
        "ko": "회사에는 동일한 AWS 계정 내의 us-west-2 리전에 위치한 두 개의 VPC가 있습니다. 회사는 이러한 VPC 간의 네트워크 트래픽을 허용해야 합니다. 매월 VPC 간에 약 500GB의 데이터 전송이 발생합니다. 이러한 VPC를 연결하는 가장 비용 효율적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Implement AWS Transit Gateway and update both VPC route tables to use it.",
          "ko": "AWS Transit Gateway를 구현하여 VPC를 연결합니다. VPC 간 통신에 전송 게이트웨이를 사용하도록 각 VPC의 라우팅 테이블을 업데이트합니다."
        },
        {
          "k": "B",
          "en": "Implement an AWS Site-to-Site VPN tunnel between the VPCs and update their route tables.",
          "ko": "VPC 간에 AWS Site-to-Site VPN 터널을 구현합니다. VPC 간 통신에 VPN 터널을 사용하도록 각 VPC의 라우팅 테이블을 업데이트합니다."
        },
        {
          "k": "C",
          "en": "Create a VPC peering connection between the VPCs and update their route tables.",
          "ko": "VPC 간에 VPC 피어링 연결을 설정합니다. VPC 간 통신에 VPC 피어링 연결을 사용하도록 각 VPC의 라우팅 테이블을 업데이트합니다."
        },
        {
          "k": "D",
          "en": "Create a 1 Gbps AWS Direct Connect connection between the VPCs and update their route tables.",
          "ko": "VPC 간에 1GB AWS Direct Connect 연결을 설정합니다. VPC 간 통신에 Direct Connect 연결을 사용하도록 각 VPC의 라우팅 테이블을 업데이트합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "VPC peering directly connects two VPCs without hourly gateway charges and is the simplest, lowest-cost option for two VPCs in the same Region and account.",
        "ko": "VPC 피어링은 시간당 게이트웨이 요금 없이 두 VPC를 직접 연결하므로 동일 리전과 계정의 두 VPC에 가장 단순하고 비용 효율적인 선택입니다."
      },
      "why_wrong": {
        "A": {
          "en": "Transit Gateway is useful for many VPCs but adds attachment and data-processing charges that are unnecessary for two VPCs.",
          "ko": "Transit Gateway는 많은 VPC 연결에 유용하지만 두 VPC에는 불필요한 연결 및 데이터 처리 요금이 추가됩니다."
        },
        "B": {
          "en": "Site-to-Site VPN is intended for encrypted connectivity with external networks and adds avoidable tunnel costs and complexity.",
          "ko": "Site-to-Site VPN은 외부 네트워크와의 암호화 연결용이며 불필요한 터널 비용과 복잡성을 추가합니다."
        },
        "D": {
          "en": "Direct Connect connects external networks to AWS and is not a direct VPC-to-VPC service.",
          "ko": "Direct Connect는 외부 네트워크를 AWS에 연결하며 VPC 간 직접 연결 서비스가 아닙니다."
        }
      }
    },
    {
      "id": "exam12-559",
      "number": 559,
      "tags": [
        "AWS Cost Allocation Tags",
        "AWS Billing",
        "AWS Organizations",
        "Tagging",
        "Cost Management",
        "Choose two"
      ],
      "question": {
        "en": "A company hosts product-line applications across different AWS accounts and Regions in one AWS Organization. Teams tag their compute resources, and the company wants detailed product-line costs in consolidated billing. Which two steps meet these requirements? (Choose two.)",
        "ko": "회사는 서로 다른 제품군에 대해 AWS에서 여러 애플리케이션을 호스팅합니다. 애플리케이션은 Amazon EC2 인스턴스 및 Application Load Balancer를 비롯한 다양한 컴퓨팅 리소스를 사용합니다. 애플리케이션은 여러 AWS 리전의 AWS Organizations에서 동일한 조직의 다른 AWS 계정에서 실행됩니다. 각 제품군의 팀은 개별 계정의 각 컴퓨팅 리소스에 태그를 지정했습니다. 회사는 조직의 통합 청구 기능에서 각 제품군의 비용에 대한 자세한 정보를 원합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Select an AWS-generated tag in the AWS Billing console.",
          "ko": "AWS 결제 콘솔에서 특정 AWS 생성 태그를 선택합니다."
        },
        {
          "k": "B",
          "en": "Select the relevant user-defined tag in the AWS Billing console.",
          "ko": "AWS 결제 콘솔에서 특정 사용자 정의 태그를 선택합니다."
        },
        {
          "k": "C",
          "en": "Select a user-defined tag in the AWS Resource Groups console.",
          "ko": "AWS 리소스 그룹 콘솔에서 특정 사용자 정의 태그를 선택합니다."
        },
        {
          "k": "D",
          "en": "Activate the selected tag in each AWS account.",
          "ko": "각 AWS 계정에서 선택한 태그를 활성화합니다."
        },
        {
          "k": "E",
          "en": "Activate the selected tag in the organization management account.",
          "ko": "조직 마스터 계정에서 선택한 태그를 활성화합니다."
        }
      ],
      "answer": [
        "B",
        "E"
      ],
      "explanation": {
        "en": "A user-defined tag used on the resources must be selected and activated as a cost allocation tag in the Billing console. For consolidated billing, the Organizations management account activates it so it appears in cost allocation reports across member accounts.",
        "ko": "리소스에 사용된 사용자 정의 태그를 결제 콘솔에서 비용 할당 태그로 선택하고 활성화해야 합니다. 통합 결제에서는 Organizations 관리 계정이 활성화하여 멤버 계정 전체의 비용 할당 보고서에 표시되게 합니다."
      },
      "why_wrong": {
        "A": {
          "en": "The teams applied a user-defined tag, so selecting an AWS-generated tag would not expose the desired product-line dimension.",
          "ko": "팀이 사용자 정의 태그를 적용했으므로 AWS 생성 태그를 선택해도 원하는 제품군 기준이 표시되지 않습니다."
        },
        "C": {
          "en": "Resource Groups helps organize resources but does not activate tags for billing reports.",
          "ko": "Resource Groups는 리소스 구성에 도움을 주지만 결제 보고서용 태그를 활성화하지 않습니다."
        },
        "D": {
          "en": "Under consolidated billing, cost allocation tags are activated centrally by the management account rather than separately in every member account.",
          "ko": "통합 결제에서는 비용 할당 태그를 각 멤버 계정에서 따로 활성화하는 것이 아니라 관리 계정에서 중앙 활성화합니다."
        }
      }
    },
    {
      "id": "exam12-560",
      "number": 560,
      "tags": [
        "AWS Control Tower",
        "AWS Organizations",
        "Account Factory",
        "Drift Detection",
        "Multi-Account Governance",
        "Operational Excellence"
      ],
      "question": {
        "en": "A solutions architect is designing a multi-account solution with AWS Organizations. The accounts are arranged in an OU hierarchy. The company needs to detect all changes to the OU hierarchy and notify the operations team with the least operational overhead. Which solution meets these requirements?",
        "ko": "회사의 솔루션 아키텍트가 AWS Organizations를 사용하는 AWS 다중 계정 솔루션을 설계하고 있습니다. 솔루션 설계자는 회사의 계정을 OU(조직 단위)로 구성했습니다. 솔루션 설계자는 OU 계층 구조에 대한 모든 변경 사항을 식별할 솔루션이 필요합니다. 솔루션은 또한 회사의 운영 팀에 변경 사항을 알려야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use AWS Control Tower to provision AWS accounts and use account drift notifications to identify changes to the OU hierarchy.",
          "ko": "AWS Control Tower를 사용하여 AWS 계정을 프로비저닝합니다. 계정 드리프트 알림을 사용하여 OU 계층 구조의 변경 사항을 식별합니다."
        },
        {
          "k": "B",
          "en": "Use AWS Control Tower to provision accounts and AWS Config aggregator rules to identify changes to the OU hierarchy.",
          "ko": "AWS Control Tower를 사용하여 AWS 계정을 프로비저닝합니다. AWS Config 집계 규칙을 사용하여 OU 계층 구조의 변경 사항을 식별합니다."
        },
        {
          "k": "C",
          "en": "Use AWS Service Catalog to create accounts and an organization trail in CloudTrail to identify OU hierarchy changes.",
          "ko": "AWS Service Catalog를 사용하여 조직에서 계정을 생성합니다. AWS CloudTrail 조직 추적을 사용하여 OU 계층 구조의 변경 사항을 식별합니다."
        },
        {
          "k": "D",
          "en": "Use CloudFormation templates to create accounts and stack drift detection to identify OU hierarchy changes.",
          "ko": "AWS CloudFormation 템플릿을 사용하여 조직에서 계정을 생성합니다. 스택에서 드리프트 감지 작업을 사용하여 OU 계층 구조에 대한 변경 사항을 식별합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "AWS Control Tower provides Account Factory for governed account provisioning and detects drift from the registered OU and account governance configuration. Its managed notifications minimize custom monitoring and operational work.",
        "ko": "AWS Control Tower는 관리형 계정 프로비저닝을 위한 Account Factory를 제공하고 등록된 OU 및 계정 거버넌스 구성의 드리프트를 탐지합니다. 관리형 알림을 사용하면 사용자 지정 모니터링과 운영 작업을 최소화할 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "AWS Config records resource configuration, but custom aggregator rules are not the simplest mechanism for Control Tower OU governance drift.",
          "ko": "AWS Config는 리소스 구성을 기록하지만 사용자 지정 집계 규칙은 Control Tower OU 거버넌스 드리프트를 위한 가장 단순한 방법이 아닙니다."
        },
        "C": {
          "en": "Service Catalog is not the native organization account-factory service, and analyzing CloudTrail events requires additional custom monitoring and notification logic.",
          "ko": "Service Catalog는 조직의 기본 계정 팩토리 서비스가 아니며 CloudTrail 이벤트 분석에는 추가 사용자 지정 모니터링 및 알림 로직이 필요합니다."
        },
        "D": {
          "en": "CloudFormation stack drift detects stack resource changes, not changes to the Organizations OU hierarchy, and account creation this way adds overhead.",
          "ko": "CloudFormation 스택 드리프트는 스택 리소스 변경을 탐지하며 Organizations OU 계층 변경을 탐지하지 않고 이 방식으로 계정을 만들면 운영 부담도 늘어납니다."
        }
      }
    },
    {
      "id": "exam12-561",
      "number": 561,
      "tags": [
        "Amazon DynamoDB",
        "DynamoDB Accelerator",
        "DAX",
        "Caching",
        "Performance",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company's website processes hundreds of thousands of requests each day, and traffic continues to grow. A solutions architect must improve response time when the application retrieves product details from a DynamoDB table. Which solution meets this requirement with the least operational overhead?",
        "ko": "회사의 웹 사이트는 매일 수십만 건의 요청을 처리하며 요청 수는 계속 증가하고 있습니다. 솔루션 설계자는 웹 애플리케이션의 응답 시간을 개선해야 합니다. 솔루션 설계자는 애플리케이션이 Amazon DynamoDB 테이블에서 제품 세부 정보를 검색할 때 지연 시간을 줄여야 한다고 결정합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure a DynamoDB Accelerator (DAX) cluster and route all read requests through DAX.",
          "ko": "DynamoDB Accelerator(DAX) 클러스터를 설정합니다. DAX를 통해 모든 읽기 요청을 라우팅합니다."
        },
        {
          "k": "B",
          "en": "Configure Amazon ElastiCache for Redis between the DynamoDB table and web application and route all reads through Redis.",
          "ko": "DynamoDB 테이블과 웹 애플리케이션 사이에 Redis용 Amazon ElastiCache를 설정합니다. Redis를 통해 모든 읽기 요청을 라우팅합니다."
        },
        {
          "k": "C",
          "en": "Configure Amazon ElastiCache for Memcached between the DynamoDB table and web application and route all reads through Memcached.",
          "ko": "DynamoDB 테이블과 웹 애플리케이션 사이에 Amazon ElastiCache for Memcached를 설정합니다. Memcached를 통해 모든 읽기 요청을 라우팅합니다."
        },
        {
          "k": "D",
          "en": "Use DynamoDB Streams and Lambda to populate Amazon ElastiCache, and route all reads through ElastiCache.",
          "ko": "테이블에 Amazon DynamoDB 스트림을 설정하고 AWS Lambda가 테이블에서 읽고 Amazon ElastiCache를 채우도록 합니다. ElastiCache를 통해 모든 읽기 요청을 라우팅합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "DAX is a fully managed, highly available, in-memory cache built specifically for DynamoDB. It is API compatible with DynamoDB and can reduce read latency to microseconds without requiring a custom cache-maintenance pipeline.",
        "ko": "DAX는 DynamoDB 전용으로 구축된 완전관리형 고가용성 인메모리 캐시입니다. DynamoDB API와 호환되며 사용자 지정 캐시 유지 파이프라인 없이 읽기 지연 시간을 마이크로초 수준으로 줄일 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Redis can cache the data but requires custom cache population, invalidation, and application integration.",
          "ko": "Redis도 데이터를 캐시할 수 있지만 사용자 지정 캐시 채우기, 무효화 및 애플리케이션 통합이 필요합니다."
        },
        "C": {
          "en": "Memcached likewise requires the application to implement and maintain caching logic.",
          "ko": "Memcached 역시 애플리케이션에서 캐싱 로직을 구현하고 유지해야 합니다."
        },
        "D": {
          "en": "A Streams, Lambda, and ElastiCache pipeline has substantially more moving parts and operational overhead than DAX.",
          "ko": "Streams, Lambda 및 ElastiCache 파이프라인은 DAX보다 구성 요소와 운영 부담이 훨씬 많습니다."
        }
      }
    },
    {
      "id": "exam12-562",
      "number": 562,
      "tags": [
        "Amazon DynamoDB",
        "Gateway VPC Endpoint",
        "Route Table",
        "Amazon VPC",
        "Private Connectivity",
        "Choose two"
      ],
      "question": {
        "en": "A solutions architect must ensure that API calls from Amazon EC2 instances in a VPC to Amazon DynamoDB do not traverse the internet. Which two steps meet this requirement? (Choose two.)",
        "ko": "솔루션 설계자는 VPC의 Amazon EC2 인스턴스에서 Amazon DynamoDB에 대한 API 호출이 인터넷을 통해 이동하지 않도록 해야 합니다. 이 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (2개 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Create route table entries for the endpoint.",
          "ko": "엔드포인트에 대한 라우팅 테이블 항목을 생성합니다."
        },
        {
          "k": "B",
          "en": "Create a gateway VPC endpoint for DynamoDB.",
          "ko": "DynamoDB용 게이트웨이 엔드포인트를 생성합니다."
        },
        {
          "k": "C",
          "en": "Create an interface endpoint for Amazon EC2.",
          "ko": "Amazon EC2용 인터페이스 엔드포인트를 생성합니다."
        },
        {
          "k": "D",
          "en": "Create elastic network interfaces for the endpoint in each VPC subnet.",
          "ko": "VPC의 각 서브넷에서 엔드포인트에 대한 탄력적 네트워크 인터페이스를 만듭니다."
        },
        {
          "k": "E",
          "en": "Add security group rules to the endpoint's security group.",
          "ko": "엔드포인트의 보안 그룹에 보안 그룹 항목을 생성하여 액세스를 제공합니다."
        }
      ],
      "answer": [
        "A",
        "B"
      ],
      "explanation": {
        "en": "DynamoDB supports gateway VPC endpoints. The endpoint is associated with route tables, which receive routes for the DynamoDB service prefix list so traffic remains on the AWS network.",
        "ko": "DynamoDB는 게이트웨이 VPC 엔드포인트를 지원합니다. 엔드포인트를 라우팅 테이블과 연결하면 DynamoDB 서비스 접두사 목록에 대한 경로가 추가되어 트래픽이 AWS 네트워크에 유지됩니다."
      },
      "why_wrong": {
        "C": {
          "en": "An EC2 interface endpoint provides private access to EC2 APIs, not DynamoDB.",
          "ko": "EC2 인터페이스 엔드포인트는 DynamoDB가 아니라 EC2 API에 대한 비공개 액세스를 제공합니다."
        },
        "D": {
          "en": "Elastic network interfaces are used by interface endpoints; DynamoDB gateway endpoints do not create endpoint ENIs.",
          "ko": "탄력적 네트워크 인터페이스는 인터페이스 엔드포인트에서 사용하며 DynamoDB 게이트웨이 엔드포인트는 엔드포인트 ENI를 만들지 않습니다."
        },
        "E": {
          "en": "Gateway endpoints do not have security groups; access is controlled by route tables, endpoint policies, and resource policies.",
          "ko": "게이트웨이 엔드포인트에는 보안 그룹이 없으며 라우팅 테이블, 엔드포인트 정책 및 리소스 정책으로 액세스를 제어합니다."
        }
      }
    },
    {
      "id": "exam12-563",
      "number": 563,
      "tags": [
        "Amazon EKS Connector",
        "Amazon EKS",
        "Kubernetes",
        "Hybrid",
        "Centralized Management",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company runs applications on both Amazon EKS clusters and on-premises Kubernetes clusters. It wants to view all clusters and workloads from a central location with the least operational overhead. Which solution meets these requirements?",
        "ko": "회사는 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터와 온프레미스 Kubernetes 클러스터 모두에서 애플리케이션을 실행합니다. 회사는 중앙 위치에서 모든 클러스터와 워크로드를 보기를 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use Amazon CloudWatch Container Insights to collect and group cluster information.",
          "ko": "Amazon CloudWatch Container Insights를 사용하여 클러스터 정보를 수집하고 그룹화합니다."
        },
        {
          "k": "B",
          "en": "Use Amazon EKS Connector to register and connect all Kubernetes clusters.",
          "ko": "Amazon EKS 커넥터를 사용하여 모든 Kubernetes 클러스터를 등록하고 연결합니다."
        },
        {
          "k": "C",
          "en": "Use AWS Systems Manager to collect and view cluster information.",
          "ko": "AWS Systems Manager를 사용하여 클러스터 정보를 수집하고 봅니다."
        },
        {
          "k": "D",
          "en": "Use Amazon EKS Anywhere as the primary cluster and view all other clusters with native Kubernetes commands.",
          "ko": "Amazon EKS Anywhere를 기본 클러스터로 사용하여 기본 Kubernetes 명령으로 다른 클러스터를 봅니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "EKS Connector registers external conformant Kubernetes clusters with Amazon EKS, allowing their configuration, resources, and workloads to be viewed centrally through the EKS console.",
        "ko": "EKS Connector는 외부의 호환 Kubernetes 클러스터를 Amazon EKS에 등록하여 EKS 콘솔에서 구성, 리소스 및 워크로드를 중앙에서 볼 수 있게 합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Container Insights centralizes metrics and logs but does not register external clusters for unified EKS console visibility.",
          "ko": "Container Insights는 지표와 로그를 중앙화하지만 통합 EKS 콘솔 보기를 위해 외부 클러스터를 등록하지 않습니다."
        },
        "C": {
          "en": "Systems Manager is not the managed cross-environment Kubernetes cluster registration solution.",
          "ko": "Systems Manager는 환경 간 Kubernetes 클러스터를 등록하는 관리형 솔루션이 아닙니다."
        },
        "D": {
          "en": "EKS Anywhere creates and operates on-premises clusters but does not itself provide the requested unified view of every existing cluster.",
          "ko": "EKS Anywhere는 온프레미스 클러스터를 생성하고 운영하지만 기존 모든 클러스터의 통합 보기를 자체적으로 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-564",
      "number": 564,
      "tags": [
        "Amazon RDS for MySQL",
        "AWS KMS",
        "Client-Side Encryption",
        "Data Security",
        "Database",
        "Separation of Duties"
      ],
      "question": {
        "en": "A company is building an ecommerce application that stores sensitive customer information and processes purchases. The sensitive data must be protected from database administrators. Which solution meets these requirements?",
        "ko": "회사에서 전자상거래 애플리케이션을 구축 중이며 중요한 고객 정보를 저장해야 합니다. 회사는 고객이 웹사이트에서 구매 거래를 완료할 수 있는 기능을 제공해야 합니다. 회사는 또한 민감한 고객 데이터를 데이터베이스 관리자로부터 보호해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Store the data on encrypted EBS volumes and restrict access with an IAM instance role.",
          "ko": "Amazon EBS 볼륨에 민감한 데이터를 저장합니다. EBS 암호화를 사용하여 데이터를 암호화합니다. IAM 인스턴스 역할을 사용하여 액세스를 제한합니다."
        },
        {
          "k": "B",
          "en": "Store the data in Amazon RDS for MySQL and encrypt it with AWS KMS client-side encryption.",
          "ko": "MySQL용 Amazon RDS에 민감한 데이터를 저장합니다. AWS Key Management Service(AWS KMS) 클라이언트 측 암호화를 사용하여 데이터를 암호화합니다."
        },
        {
          "k": "C",
          "en": "Store the data in Amazon S3 with KMS server-side encryption and restrict access using an S3 bucket policy.",
          "ko": "민감한 데이터를 Amazon S3에 저장합니다. AWS KMS 서버 측 암호화를 사용하여 데이터를 암호화합니다. S3 버킷 정책을 사용하여 액세스를 제한하십시오."
        },
        {
          "k": "D",
          "en": "Store the data on Amazon FSx for Windows File Server and restrict access with Windows file permissions.",
          "ko": "민감한 데이터를 Windows Server용 Amazon FSx에 저장합니다. 응용 프로그램 서버에 파일 공유를 탑재합니다. Windows 파일 권한을 사용하여 액세스를 제한하십시오."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "RDS for MySQL provides a managed transactional database. Encrypting sensitive fields in the application before writing them to RDS keeps plaintext and key use outside the database administrator's control when only the application can use the KMS key.",
        "ko": "RDS for MySQL은 관리형 트랜잭션 데이터베이스를 제공합니다. 애플리케이션에서 민감한 필드를 RDS에 쓰기 전에 암호화하고 애플리케이션만 KMS 키를 사용하게 하면 데이터베이스 관리자가 평문과 키를 제어할 수 없습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Volume encryption protects storage media but does not prevent a database or server administrator with authorized access from seeing plaintext data.",
          "ko": "볼륨 암호화는 저장 매체를 보호하지만 권한 있는 데이터베이스 또는 서버 관리자가 평문 데이터를 보는 것을 막지 못합니다."
        },
        "C": {
          "en": "S3 object storage is not the appropriate transactional database for completing ecommerce purchases, and server-side encryption exposes plaintext to authorized S3 operations.",
          "ko": "S3 객체 스토리지는 전자상거래 구매를 완료하는 트랜잭션 데이터베이스로 적합하지 않으며 서버 측 암호화는 권한 있는 S3 작업에 평문을 제공합니다."
        },
        "D": {
          "en": "A Windows file share is not a managed transactional database and file permissions do not provide application-only field encryption.",
          "ko": "Windows 파일 공유는 관리형 트랜잭션 데이터베이스가 아니며 파일 권한은 애플리케이션 전용 필드 암호화를 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-565",
      "number": 565,
      "tags": [
        "AWS DMS",
        "Amazon Aurora",
        "Aurora Auto Scaling",
        "MySQL Migration",
        "Database",
        "Scalability"
      ],
      "question": {
        "en": "A company is migrating an on-premises MySQL transaction database to AWS. The target must remain compatible with the application and automatically scale during periods of increasing demand. Which migration solution meets these requirements?",
        "ko": "회사에는 트랜잭션 데이터를 처리하는 온프레미스 MySQL 데이터베이스가 있습니다. 회사는 데이터베이스를 AWS 클라우드로 마이그레이션하고 있습니다. 마이그레이션된 데이터베이스는 데이터베이스를 사용하는 회사의 애플리케이션과 호환성을 유지해야 합니다. 또한 수요가 증가하는 기간 동안 자동으로 확장되어야 합니다. 이러한 요구 사항을 충족하는 마이그레이션 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use native MySQL tools to migrate to Amazon RDS for MySQL and configure storage autoscaling.",
          "ko": "기본 MySQL 도구를 사용하여 데이터베이스를 MySQL용 Amazon RDS로 마이그레이션합니다. 탄력적 스토리지 확장을 구성합니다."
        },
        {
          "k": "B",
          "en": "Use mysqldump to migrate to Amazon Redshift and enable Auto Scaling for the Redshift cluster.",
          "ko": "mysqldump 유틸리티를 사용하여 데이터베이스를 Amazon Redshift로 마이그레이션합니다. Amazon Redshift 클러스터에 대해 Auto Scaling을 켭니다."
        },
        {
          "k": "C",
          "en": "Use AWS DMS to migrate the database to Amazon Aurora and enable Aurora Auto Scaling.",
          "ko": "AWS Database Migration Service(AWS DMS)를 사용하여 데이터베이스를 Amazon Aurora로 마이그레이션합니다. Aurora Auto Scaling을 켭니다."
        },
        {
          "k": "D",
          "en": "Use AWS DMS to migrate the database to Amazon DynamoDB and configure an Auto Scaling policy.",
          "ko": "AWS Database Migration Service(AWS DMS)를 사용하여 데이터베이스를 Amazon DynamoDB로 마이그레이션합니다. Auto Scaling 정책을 구성합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Aurora MySQL-Compatible Edition preserves MySQL application compatibility. AWS DMS can continuously migrate the source with minimal downtime, and Aurora Auto Scaling adjusts the number of Aurora Replicas based on demand.",
        "ko": "Aurora MySQL 호환 버전은 MySQL 애플리케이션 호환성을 유지합니다. AWS DMS는 중단 시간을 최소화하며 소스를 지속적으로 마이그레이션할 수 있고 Aurora Auto Scaling은 수요에 따라 Aurora 복제본 수를 조정합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Storage autoscaling increases storage capacity but does not automatically scale database read compute capacity.",
          "ko": "스토리지 자동 확장은 스토리지 용량을 늘리지만 데이터베이스 읽기 컴퓨팅 용량을 자동 확장하지 않습니다."
        },
        "B": {
          "en": "Amazon Redshift is an analytical data warehouse and is not a compatible replacement for a MySQL transaction database.",
          "ko": "Amazon Redshift는 분석용 데이터 웨어하우스이며 MySQL 트랜잭션 데이터베이스의 호환 대체재가 아닙니다."
        },
        "D": {
          "en": "DynamoDB is a NoSQL service and would require substantial application and data-model changes.",
          "ko": "DynamoDB는 NoSQL 서비스이므로 애플리케이션과 데이터 모델을 크게 변경해야 합니다."
        }
      }
    },
    {
      "id": "exam12-566",
      "number": 566,
      "tags": [
        "Amazon EFS",
        "Shared File System",
        "Amazon EC2",
        "Multi-AZ",
        "Linux",
        "Storage"
      ],
      "question": {
        "en": "A company runs Amazon EC2 Linux instances across two Availability Zones. The instances host an application with a hierarchical directory structure that must read and write concurrently at high speed to shared storage. What should a solutions architect do?",
        "ko": "회사는 2개의 가용 영역에 걸쳐 VPC에서 여러 Amazon EC2 Linux 인스턴스를 실행합니다. 인스턴스는 계층적 디렉터리 구조를 사용하는 애플리케이션을 호스팅합니다. 애플리케이션은 공유 스토리지에서 동시에 빠르게 읽고 쓸 수 있어야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an Amazon S3 bucket and allow access from all EC2 instances.",
          "ko": "Amazon S3 버킷을 생성합니다. VPC의 모든 EC2 인스턴스에서 액세스를 허용합니다."
        },
        {
          "k": "B",
          "en": "Create an Amazon EFS file system and mount it from each EC2 instance.",
          "ko": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다. 각 EC2 인스턴스에서 EFS 파일 시스템을 탑재합니다."
        },
        {
          "k": "C",
          "en": "Create a file system on a Provisioned IOPS SSD EBS volume and attach the volume to all EC2 instances.",
          "ko": "프로비저닝된 IOPS SSD(io2) Amazon EBS 볼륨에 파일 시스템을 생성합니다. EBS 볼륨을 모든 EC2 인스턴스에 연결합니다."
        },
        {
          "k": "D",
          "en": "Create file systems on separate EBS volumes attached to each instance and synchronize the volumes.",
          "ko": "각 EC2 인스턴스에 연결된 Amazon EBS 볼륨에 파일 시스템을 만듭니다. 여러 EC2 인스턴스 간에 EBS 볼륨을 동기화합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Amazon EFS provides a managed, elastic NFS file system that multiple Linux EC2 instances can mount concurrently across Availability Zones, with high throughput and a shared hierarchical namespace.",
        "ko": "Amazon EFS는 여러 가용 영역의 Linux EC2 인스턴스가 동시에 탑재할 수 있는 관리형 탄력적 NFS 파일 시스템으로 높은 처리량과 공유 계층형 네임스페이스를 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "S3 is object storage and does not provide the shared POSIX file-system semantics required by the application.",
          "ko": "S3는 객체 스토리지이며 애플리케이션에 필요한 공유 POSIX 파일 시스템 의미 체계를 제공하지 않습니다."
        },
        "C": {
          "en": "EBS Multi-Attach has limited instance and Availability Zone constraints and requires a cluster-aware file system; it is not a general multi-AZ shared file system.",
          "ko": "EBS Multi-Attach는 인스턴스와 가용 영역 제약이 있고 클러스터 인식 파일 시스템이 필요하므로 일반적인 다중 AZ 공유 파일 시스템이 아닙니다."
        },
        "D": {
          "en": "Synchronizing independent EBS volumes requires custom consistency and replication management.",
          "ko": "독립 EBS 볼륨을 동기화하려면 사용자 지정 일관성과 복제 관리가 필요합니다."
        }
      }
    },
    {
      "id": "exam12-567",
      "number": 567,
      "tags": [
        "Amazon API Gateway",
        "AWS Lambda",
        "Amazon DynamoDB",
        "Serverless",
        "HTTP API",
        "Operational Excellence"
      ],
      "question": {
        "en": "A solutions architect is designing a workload that stores hourly energy consumption for building tenants. Sensors send HTTP requests that aggregate each tenant's usage. The architect wants managed services where possible and expects to add independent components later. Which solution meets these requirements with the least operational overhead?",
        "ko": "솔루션 설계자는 건물 내 비즈니스 테넌트의 시간당 에너지 소비량을 저장할 워크로드를 설계하고 있습니다. 센서는 각 테넌트의 사용량을 합산하는 HTTP 요청을 통해 데이터베이스에 공급합니다. 솔루션 설계자는 가능한 경우 관리 서비스를 사용해야 합니다. 워크로드는 솔루션 설계자가 독립적인 구성 요소를 추가함에 따라 향후 더 많은 기능을 받게 됩니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use Amazon API Gateway with AWS Lambda to receive and process sensor data, and store the data in Amazon DynamoDB.",
          "ko": "AWS Lambda 함수와 함께 Amazon API Gateway를 사용하여 센서에서 데이터를 수신하고 데이터를 처리하고 Amazon DynamoDB 테이블에 데이터를 저장합니다."
        },
        {
          "k": "B",
          "en": "Use an Elastic Load Balancer with an EC2 Auto Scaling group to process sensor data, and store it in Amazon S3.",
          "ko": "Amazon EC2 인스턴스의 Auto Scaling 그룹에서 지원하는 Elastic Load Balancer를 사용하여 센서에서 데이터를 수신하고 처리합니다. Amazon S3 버킷을 사용하여 처리된 데이터를 저장합니다."
        },
        {
          "k": "C",
          "en": "Use API Gateway with Lambda to receive and process sensor data, and store it in a Microsoft SQL Server Express database on EC2.",
          "ko": "AWS Lambda 함수와 함께 Amazon API Gateway를 사용하여 센서에서 데이터를 수신하고 데이터를 처리하고 Amazon EC2 인스턴스의 Microsoft SQL Server Express 데이터베이스에 데이터를 저장합니다."
        },
        {
          "k": "D",
          "en": "Use an Elastic Load Balancer with an EC2 Auto Scaling group to process sensor data, and store it on an Amazon EFS shared file system.",
          "ko": "Amazon EC2 인스턴스의 Auto Scaling 그룹에서 지원하는 Elastic Load Balancer를 사용하여 센서에서 데이터를 수신하고 처리합니다. Amazon Elastic File System(Amazon EFS) 공유 파일 시스템을 사용하여 처리된 데이터를 저장합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "API Gateway, Lambda, and DynamoDB form a fully managed, event-driven, automatically scaling architecture. They require no server administration and support adding loosely coupled functionality later.",
        "ko": "API Gateway, Lambda 및 DynamoDB는 완전관리형 이벤트 기반 자동 확장 아키텍처를 구성합니다. 서버 관리가 필요 없고 나중에 느슨하게 결합된 기능을 추가하기에도 적합합니다."
      },
      "why_wrong": {
        "B": {
          "en": "EC2 Auto Scaling still requires server and application operations, and S3 is not the most direct database for per-tenant aggregates.",
          "ko": "EC2 Auto Scaling은 여전히 서버와 애플리케이션 운영이 필요하며 S3는 테넌트별 집계를 위한 가장 직접적인 데이터베이스가 아닙니다."
        },
        "C": {
          "en": "Self-managed SQL Server Express on EC2 adds administration, scaling limits, and a single-server dependency.",
          "ko": "EC2의 자체 관리 SQL Server Express는 관리 부담, 확장 제한 및 단일 서버 의존성을 추가합니다."
        },
        "D": {
          "en": "EC2 plus EFS requires more infrastructure management and does not provide the database access model of DynamoDB.",
          "ko": "EC2와 EFS 조합은 더 많은 인프라 관리가 필요하고 DynamoDB의 데이터베이스 액세스 모델을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-568",
      "number": 568,
      "tags": [
        "Amazon S3",
        "Amazon CloudFront",
        "Static Assets",
        "Caching",
        "Web Application",
        "Performance"
      ],
      "question": {
        "en": "A solutions architect is designing storage for a new web application that stores and displays engineering drawings. All components run on AWS. The application must cache drawings to minimize the time users wait for them to load and must store petabytes of data. Which storage and caching combination should be used?",
        "ko": "솔루션 설계자는 엔지니어링 도면을 저장하고 보는 데 사용되는 새 웹 애플리케이션의 스토리지 아키텍처를 설계하고 있습니다. 모든 애플리케이션 구성 요소는 AWS 인프라에 배포됩니다. 응용 프로그램 디자인은 사용자가 엔지니어링 도면이 로드될 때까지 기다리는 시간을 최소화하기 위해 캐싱을 지원해야 합니다. 애플리케이션은 페타바이트의 데이터를 저장할 수 있어야 합니다. 솔루션 설계자는 어떤 스토리지 및 캐싱 조합을 사용해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Amazon S3 with Amazon CloudFront.",
          "ko": "Amazon CloudFront를 사용하는 Amazon S3"
        },
        {
          "k": "B",
          "en": "Amazon S3 Glacier with Amazon ElastiCache.",
          "ko": "Amazon ElastiCache를 사용하는 Amazon S3 Glacier"
        },
        {
          "k": "C",
          "en": "Amazon EBS volumes with Amazon CloudFront.",
          "ko": "Amazon CloudFront를 사용하는 Amazon EBS 볼륨"
        },
        {
          "k": "D",
          "en": "AWS Storage Gateway with Amazon ElastiCache.",
          "ko": "Amazon ElastiCache를 사용하는 AWS Storage Gateway"
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Amazon S3 scales to petabytes of durable object storage. CloudFront uses S3 as an origin and caches drawings at edge locations close to users, reducing load latency.",
        "ko": "Amazon S3는 페타바이트 규모의 내구성 높은 객체 스토리지로 확장됩니다. CloudFront는 S3를 원본으로 사용하고 사용자와 가까운 엣지 위치에 도면을 캐시하여 로드 지연 시간을 줄입니다."
      },
      "why_wrong": {
        "B": {
          "en": "Glacier is archival storage with retrieval delays, and ElastiCache is a database cache rather than a CDN for large drawing objects.",
          "ko": "Glacier는 검색 지연이 있는 아카이브 스토리지이고 ElastiCache는 대형 도면 객체용 CDN이 아니라 데이터베이스 캐시입니다."
        },
        "C": {
          "en": "EBS is instance block storage and is not the best massively scalable origin for petabytes of web objects.",
          "ko": "EBS는 인스턴스 블록 스토리지이며 페타바이트 웹 객체를 위한 대규모 확장 원본으로 적합하지 않습니다."
        },
        "D": {
          "en": "Storage Gateway is intended for hybrid storage access and ElastiCache does not provide global edge delivery.",
          "ko": "Storage Gateway는 하이브리드 스토리지 액세스용이며 ElastiCache는 글로벌 엣지 전송을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-569",
      "number": 569,
      "tags": [
        "Amazon EventBridge",
        "Amazon CloudWatch",
        "AWS/Events Metrics",
        "Monitoring",
        "Troubleshooting",
        "Operational Excellence"
      ],
      "question": {
        "en": "An EventBridge rule targets a third-party API, but the API receives no traffic. A solutions architect must verify whether the rule condition is being matched and whether the target is being invoked. Which solution meets these requirements?",
        "ko": "Amazon EventBridge 규칙은 타사 API를 대상으로 합니다. 타사 API가 수신 트래픽을 수신하지 않았습니다. 솔루션 설계자는 규칙 조건이 충족되고 있는지 여부와 규칙의 대상이 호출되고 있는지 확인해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Check Amazon CloudWatch metrics in the AWS/Events namespace.",
          "ko": "AWS/Events의 네임스페이스에서 Amazon CloudWatch의 지표를 확인하십시오."
        },
        {
          "k": "B",
          "en": "Review messages in an Amazon SQS dead-letter queue.",
          "ko": "Amazon Simple Queue Service(Amazon SQS) 데드 레터 대기열의 이벤트를 검토합니다."
        },
        {
          "k": "C",
          "en": "Check events in Amazon CloudWatch Logs.",
          "ko": "Amazon CloudWatch Logs에서 이벤트를 확인합니다."
        },
        {
          "k": "D",
          "en": "Check an AWS CloudTrail trail for EventBridge events.",
          "ko": "EventBridge 이벤트에 대한 AWS CloudTrail의 추적을 확인합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "EventBridge publishes rule and target metrics to the AWS/Events CloudWatch namespace, including matched events, invocations, and failed invocations. These metrics directly show whether the pattern matched and target invocation occurred.",
        "ko": "EventBridge는 일치한 이벤트, 호출 및 실패한 호출을 포함한 규칙과 대상 지표를 CloudWatch의 AWS/Events 네임스페이스에 게시합니다. 이 지표로 패턴 일치와 대상 호출 여부를 직접 확인할 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "A dead-letter queue contains failed deliveries only if one was configured and does not show all rule matches and invocations.",
          "ko": "데드 레터 대기열은 구성된 경우 실패한 전송만 포함하며 모든 규칙 일치와 호출을 보여주지 않습니다."
        },
        "C": {
          "en": "EventBridge does not automatically write every rule match and target invocation to CloudWatch Logs.",
          "ko": "EventBridge는 모든 규칙 일치와 대상 호출을 CloudWatch Logs에 자동 기록하지 않습니다."
        },
        "D": {
          "en": "CloudTrail records EventBridge control-plane API activity, not the data-plane rule matching and target invocation metrics needed here.",
          "ko": "CloudTrail은 EventBridge 제어 영역 API 활동을 기록하며 여기서 필요한 데이터 영역 규칙 일치와 대상 호출 지표를 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-570",
      "number": 570,
      "tags": [
        "Amazon EC2 Auto Scaling",
        "Scheduled Scaling",
        "Predictable Workload",
        "Multi-AZ",
        "Cost Optimization",
        "Operational Excellence"
      ],
      "question": {
        "en": "A large workload runs every Friday evening on EC2 instances across two Availability Zones in us-east-1. The company normally needs at least two instances but wants to scale to six each Friday for the recurring load. Which solution meets these requirements with the least operational overhead?",
        "ko": "회사에는 매주 금요일 저녁에 실행되는 대규모 워크로드가 있습니다. 워크로드는 us-east-1 리전의 두 가용 영역에 있는 Amazon EC2 인스턴스에서 실행됩니다. 일반적으로 회사는 항상 두 개 이상의 인스턴스를 실행하지 않아야 합니다. 그러나 회사는 정기적으로 반복되는 증가된 워크로드를 처리하기 위해 금요일마다 최대 6개의 인스턴스로 확장하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an EventBridge reminder to scale the instances in advance.",
          "ko": "Amazon EventBridge에서 미리 알림을 생성하여 인스턴스를 확장하십시오."
        },
        {
          "k": "B",
          "en": "Create an Auto Scaling group with scheduled actions.",
          "ko": "예약된 작업이 있는 Auto Scaling 그룹을 생성합니다."
        },
        {
          "k": "C",
          "en": "Create an Auto Scaling group that uses manual scaling.",
          "ko": "수동 조정을 사용하는 Auto Scaling 그룹을 생성합니다."
        },
        {
          "k": "D",
          "en": "Create an Auto Scaling group that uses dynamic scaling.",
          "ko": "자동 조정을 사용하는 Auto Scaling 그룹을 생성합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Scheduled scaling changes an Auto Scaling group's desired, minimum, or maximum capacity at known recurring times. It can raise capacity to six before Friday's load and return it to two afterward without custom automation.",
        "ko": "예약 조정은 알려진 반복 시간에 Auto Scaling 그룹의 희망, 최소 또는 최대 용량을 변경합니다. 사용자 지정 자동화 없이 금요일 부하 전에 6개로 늘리고 이후 2개로 줄일 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A reminder does not itself change Auto Scaling capacity and would require extra automation or manual action.",
          "ko": "미리 알림 자체는 Auto Scaling 용량을 변경하지 않으므로 추가 자동화나 수동 작업이 필요합니다."
        },
        "C": {
          "en": "Manual scaling creates recurring operational work.",
          "ko": "수동 조정은 반복적인 운영 작업을 발생시킵니다."
        },
        "D": {
          "en": "Dynamic scaling reacts to metrics, but the workload schedule is known and scheduled scaling can add capacity in advance with less tuning.",
          "ko": "동적 조정은 지표에 반응하지만 워크로드 일정이 알려져 있으므로 예약 조정이 더 적은 튜닝으로 미리 용량을 추가할 수 있습니다."
        }
      }
    },
    {
      "id": "exam12-571",
      "number": 571,
      "tags": [
        "Amazon API Gateway",
        "AWS Certificate Manager",
        "TLS",
        "Custom Domain",
        "Security"
      ],
      "question": {
        "en": "A company is creating a REST API. The company has strict TLS requirements: API endpoints must require TLS 1.3, and a specific public third-party certificate authority (CA) must sign the TLS certificate. Which solution meets these requirements?",
        "ko": "회사에서 REST API를 만들고 있습니다. 회사에는 TLS 사용에 대한 엄격한 요구 사항이 있습니다. 회사는 API 엔드포인트에 TLSv1.3을 요구합니다. 또한 회사는 TLS 인증서에 서명하기 위해 특정 공개 타사 인증 기관(CA)을 요구합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use a local system to create a certificate signed by the third-party CA, and import it into AWS Certificate Manager (ACM). Create an HTTP API in API Gateway with a custom domain name and configure it to use the certificate.",
          "ko": "로컬 시스템을 사용하여 타사 CA가 서명한 인증서를 생성하고 인증서를 AWS Certificate Manager(ACM)로 가져옵니다. 사용자 지정 도메인을 사용하여 Amazon API Gateway에서 HTTP API를 생성합니다. 인증서를 사용하도록 사용자 지정 도메인을 구성합니다."
        },
        {
          "k": "B",
          "en": "Create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA. Create an HTTP API in API Gateway with a custom domain name and configure it to use the certificate.",
          "ko": "타사 CA가 서명한 AWS Certificate Manager(ACM)에서 인증서를 생성합니다. 사용자 지정 도메인을 사용하여 Amazon API Gateway에서 HTTP API를 생성합니다. 인증서를 사용하도록 사용자 지정 도메인을 구성합니다."
        },
        {
          "k": "C",
          "en": "Use ACM to create a certificate signed by the third-party CA and import it into ACM. Create a Lambda function URL and configure it to use the certificate.",
          "ko": "AWS Certificate Manager(ACM)를 사용하여 타사 CA에서 서명한 인증서를 생성합니다. 인증서를 ACM으로 가져옵니다. Lambda 함수 URL을 사용하여 AWS Lambda 함수를 생성합니다. 인증서를 사용하도록 Lambda 함수 URL을 구성합니다."
        },
        {
          "k": "D",
          "en": "Create a certificate in ACM that is signed by the third-party CA. Create a Lambda function URL and configure it to use the certificate.",
          "ko": "타사 CA에서 서명한 AWS Certificate Manager(ACM)에서 인증서를 생성합니다. Lambda 함수 URL을 사용하여 AWS Lambda 함수를 생성합니다. 인증서를 사용하도록 Lambda 함수 URL을 구성합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "An API Gateway HTTP API custom domain can use an ACM certificate associated with the required public CA and provides the managed API endpoint needed by the question. The certificate is attached to the custom domain so TLS is terminated for the API.",
        "ko": "API Gateway HTTP API 사용자 지정 도메인은 요구된 공개 CA와 연결된 ACM 인증서를 사용할 수 있으며 필요한 관리형 API 엔드포인트를 제공합니다. 인증서를 사용자 지정 도메인에 연결하여 API의 TLS를 종료합니다."
      },
      "why_wrong": {
        "A": {
          "en": "This option adds an unnecessary local certificate creation and import workflow when the required certificate can be managed through ACM as described.",
          "ko": "요구된 인증서를 설명과 같이 ACM에서 관리할 수 있으므로 로컬 인증서 생성 및 가져오기 절차는 불필요합니다."
        },
        "C": {
          "en": "Lambda function URLs do not provide the API Gateway custom-domain certificate configuration described in the requirement.",
          "ko": "Lambda 함수 URL은 요구 사항에 제시된 API Gateway 사용자 지정 도메인 인증서 구성을 제공하지 않습니다."
        },
        "D": {
          "en": "A Lambda function URL is not the requested managed REST API endpoint and cannot be configured with this custom certificate in the stated manner.",
          "ko": "Lambda 함수 URL은 요구된 관리형 REST API 엔드포인트가 아니며 명시된 방식으로 사용자 지정 인증서를 구성할 수 없습니다."
        }
      }
    },
    {
      "id": "exam12-572",
      "number": 572,
      "tags": [
        "Amazon Aurora Serverless v2",
        "Amazon RDS",
        "MySQL",
        "Auto Scaling",
        "Direct Connect",
        "Operational Excellence"
      ],
      "question": {
        "en": "An application on AWS receives inconsistent usage and connects over AWS Direct Connect to an on-premises MySQL-compatible database that continuously uses at least 2 GiB of memory. The company wants to migrate to a managed AWS service with automatic scaling for unexpected load increases and minimal management overhead. Which solution meets these requirements?",
        "ko": "회사는 AWS에서 애플리케이션을 실행합니다. 애플리케이션이 일관되지 않은 사용량을 수신합니다. 애플리케이션은 AWS Direct Connect를 사용하여 온프레미스 MySQL 호환 데이터베이스에 연결합니다. 온프레미스 데이터베이스는 지속적으로 최소 2GiB의 메모리를 사용합니다. 회사는 온프레미스 데이터베이스를 관리형 AWS 서비스로 마이그레이션하려고 합니다. 회사는 자동 확장 기능을 사용하여 예기치 않은 작업 부하 증가를 관리하려고 합니다. 최소한의 관리 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Provision an Amazon DynamoDB database with default read and write capacity settings.",
          "ko": "기본 읽기 및 쓰기 용량 설정으로 Amazon DynamoDB 데이터베이스를 프로비저닝합니다."
        },
        {
          "k": "B",
          "en": "Provision an Amazon Aurora database with a minimum capacity of 1 Aurora capacity unit (ACU).",
          "ko": "최소 용량이 1 Aurora 용량 단위(ACU)인 Amazon Aurora 데이터베이스를 프로비저닝합니다."
        },
        {
          "k": "C",
          "en": "Provision an Amazon Aurora Serverless v2 database with a minimum capacity of 1 Aurora capacity unit (ACU).",
          "ko": "최소 용량이 1 Aurora 용량 단위(ACU)인 Amazon Aurora Serverless v2 데이터베이스를 프로비저닝합니다."
        },
        {
          "k": "D",
          "en": "Provision an Amazon RDS for MySQL database with 2 GiB of memory.",
          "ko": "2GiB의 메모리로 Amazon RDS for MySQL 데이터베이스를 프로비저닝합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Aurora Serverless v2 is MySQL compatible and automatically adjusts database capacity in fine-grained increments as demand changes. Setting a suitable minimum ACU covers the baseline while retaining automatic scaling and low management overhead.",
        "ko": "Aurora Serverless v2는 MySQL과 호환되며 수요 변화에 따라 데이터베이스 용량을 세분화하여 자동 조정합니다. 적절한 최소 ACU를 설정하면 기본 사용량을 충족하면서 자동 확장과 낮은 관리 오버헤드를 유지할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "DynamoDB is not MySQL compatible and would require application and data-model changes.",
          "ko": "DynamoDB는 MySQL과 호환되지 않으며 애플리케이션과 데이터 모델 변경이 필요합니다."
        },
        "B": {
          "en": "A provisioned Aurora database does not provide the requested serverless automatic capacity scaling.",
          "ko": "프로비저닝된 Aurora 데이터베이스는 요구된 서버리스 자동 용량 확장을 제공하지 않습니다."
        },
        "D": {
          "en": "A fixed-size RDS for MySQL instance does not automatically scale compute capacity for unpredictable load.",
          "ko": "고정 크기 RDS for MySQL 인스턴스는 예측할 수 없는 부하에 맞춰 컴퓨팅 용량을 자동 확장하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-573",
      "number": 573,
      "tags": [
        "AWS Lambda",
        "Lambda SnapStart",
        "Java",
        "Cold Start",
        "Serverless",
        "Cost Optimization"
      ],
      "question": {
        "en": "A company uses an event-driven model with AWS Lambda and wants to reduce startup latency for Java 11 functions. The application has no strict latency requirement, but the company wants lower cold-start and outlier latency as functions scale. Which solution is most cost-effective?",
        "ko": "회사에서 AWS Lambda와 함께 이벤트 기반 프로그래밍 모델을 사용하려고 합니다. 회사는 Java 11에서 실행되는 Lambda 함수의 시작 지연 시간을 줄이려고 합니다. 회사는 애플리케이션에 대한 엄격한 지연 시간 요구 사항이 없습니다. 이 회사는 함수가 확장될 때 콜드 스타트와 이상치 대기 시간을 줄이려고 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure Lambda provisioned concurrency.",
          "ko": "Lambda 프로비저닝된 동시성을 구성합니다."
        },
        {
          "k": "B",
          "en": "Increase the Lambda function timeout.",
          "ko": "Lambda 함수의 제한 시간을 늘립니다."
        },
        {
          "k": "C",
          "en": "Increase the Lambda function memory.",
          "ko": "Lambda 함수의 메모리를 늘립니다."
        },
        {
          "k": "D",
          "en": "Configure Lambda SnapStart.",
          "ko": "Lambda SnapStart를 구성합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "Lambda SnapStart snapshots an initialized Java execution environment and restores it for new environments, reducing cold-start latency without the ongoing cost of provisioned concurrency.",
        "ko": "Lambda SnapStart는 초기화된 Java 실행 환경의 스냅샷을 만들고 새 환경에서 복원하여 프로비저닝된 동시성의 지속 비용 없이 콜드 스타트 지연 시간을 줄입니다."
      },
      "why_wrong": {
        "A": {
          "en": "Provisioned concurrency reduces cold starts but creates ongoing cost and is unnecessary without a strict latency target.",
          "ko": "프로비저닝된 동시성은 콜드 스타트를 줄이지만 지속 비용이 발생하며 엄격한 지연 시간 목표가 없을 때는 불필요합니다."
        },
        "B": {
          "en": "A longer timeout does not reduce initialization latency.",
          "ko": "제한 시간을 늘려도 초기화 지연 시간은 줄어들지 않습니다."
        },
        "C": {
          "en": "More memory can improve CPU-bound initialization but is less targeted and may cost more than SnapStart.",
          "ko": "메모리 증가는 CPU 중심 초기화를 개선할 수 있지만 SnapStart보다 목적성이 낮고 비용이 더 들 수 있습니다."
        }
      }
    },
    {
      "id": "exam12-574",
      "number": 574,
      "tags": [
        "Amazon RDS for MySQL",
        "Aurora Serverless v2",
        "Cost Optimization",
        "Intermittent Workload",
        "Database Migration"
      ],
      "question": {
        "en": "A financial services company launched an application that uses Amazon RDS for MySQL to track stock market trends. The application runs for only 2 hours each weekend. The company must optimize database running costs. Which solution is most cost-effective?",
        "ko": "금융 서비스 회사는 Amazon RDS for MySQL 데이터베이스를 사용하는 새로운 애플리케이션을 출시했습니다. 회사는 응용 프로그램을 사용하여 주식 시장 추세를 추적합니다. 회사는 매주 말 2시간 동안만 애플리케이션을 작동하면 됩니다. 회사는 데이터베이스 실행 비용을 최적화해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Migrate the existing RDS for MySQL database to an Aurora Serverless v2 MySQL-compatible database cluster.",
          "ko": "기존 RDS for MySQL 데이터베이스를 Aurora Serverless v2 MySQL 데이터베이스 클러스터로 마이그레이션합니다."
        },
        {
          "k": "B",
          "en": "Migrate the existing database to a provisioned Aurora MySQL database cluster.",
          "ko": "기존 RDS for MySQL 데이터베이스를 Aurora MySQL 데이터베이스 클러스터로 마이그레이션합니다."
        },
        {
          "k": "C",
          "en": "Migrate the database to MySQL on Amazon EC2 and purchase an Instance Reservation.",
          "ko": "기존 RDS for MySQL 데이터베이스를 MySQL을 실행하는 Amazon EC2 인스턴스로 마이그레이션합니다. EC2 인스턴스에 대한 인스턴스 예약을 구매합니다."
        },
        {
          "k": "D",
          "en": "Migrate the database to an Amazon ECS cluster that runs a MySQL container image.",
          "ko": "기존 RDS for MySQL 데이터베이스를 MySQL 컨테이너 이미지를 사용하여 작업을 실행하는 Amazon Elastic Container Service(Amazon ECS) 클러스터로 마이그레이션합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Aurora Serverless v2 automatically adjusts capacity for intermittent workloads, avoiding a continuously overprovisioned database while preserving MySQL compatibility and managed operations.",
        "ko": "Aurora Serverless v2는 간헐적인 워크로드에 맞춰 용량을 자동 조정하므로 MySQL 호환성과 관리형 운영을 유지하면서 상시 과다 프로비저닝을 피할 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "A provisioned Aurora cluster incurs database capacity cost even during the long idle periods.",
          "ko": "프로비저닝된 Aurora 클러스터는 긴 유휴 기간에도 데이터베이스 용량 비용이 발생합니다."
        },
        "C": {
          "en": "Self-managed MySQL on EC2 increases operational work, and a reservation is poorly matched to a two-hour weekly workload.",
          "ko": "EC2의 자체 관리형 MySQL은 운영 부담을 늘리며 예약은 주 2시간 워크로드에 적합하지 않습니다."
        },
        "D": {
          "en": "Running a database in ECS adds management overhead and does not provide the managed scaling benefits of Aurora Serverless.",
          "ko": "ECS에서 데이터베이스를 실행하면 관리 부담이 늘고 Aurora Serverless의 관리형 확장 이점을 얻지 못합니다."
        }
      }
    },
    {
      "id": "exam12-575",
      "number": 575,
      "tags": [
        "Amazon RDS",
        "PostgreSQL",
        "Multi-AZ DB Cluster",
        "Read Scaling",
        "High Availability"
      ],
      "question": {
        "en": "A company deploys an application on Amazon EKS behind an Application Load Balancer. The application needs a PostgreSQL database with high availability and additional capacity for read workloads. Which solution meets these requirements most efficiently?",
        "ko": "회사는 AWS 리전의 Application Load Balancer 뒤에 있는 Amazon Elastic Kubernetes Service(Amazon EKS)에 애플리케이션을 배포합니다. 애플리케이션은 PostgreSQL 데이터베이스 엔진에 데이터를 저장해야 합니다. 회사는 데이터베이스의 데이터가 가용성이 높기를 원합니다. 회사는 또한 읽기 워크로드를 위한 증가된 용량이 필요합니다. 이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an Amazon DynamoDB global table.",
          "ko": "전역 테이블로 구성된 Amazon DynamoDB 데이터베이스 테이블을 생성합니다."
        },
        {
          "k": "B",
          "en": "Create an Amazon RDS database with a Multi-AZ DB instance deployment.",
          "ko": "다중 AZ 배포로 Amazon RDS 데이터베이스를 생성합니다."
        },
        {
          "k": "C",
          "en": "Create an Amazon RDS database with a Multi-AZ DB cluster deployment.",
          "ko": "다중 AZ DB 클러스터 배포로 Amazon RDS 데이터베이스를 생성합니다."
        },
        {
          "k": "D",
          "en": "Create an Amazon RDS database with a cross-Region read replica.",
          "ko": "리전 간 읽기 전용 복제본으로 구성된 Amazon RDS 데이터베이스를 생성합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "An RDS Multi-AZ DB cluster provides a writer and readable standby instances across Availability Zones. It combines high availability with added read capacity in the same Region.",
        "ko": "RDS 다중 AZ DB 클러스터는 여러 가용 영역에 작성자와 읽을 수 있는 대기 인스턴스를 제공합니다. 동일 리전에서 고가용성과 추가 읽기 용량을 함께 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "DynamoDB is not PostgreSQL compatible.",
          "ko": "DynamoDB는 PostgreSQL과 호환되지 않습니다."
        },
        "B": {
          "en": "A traditional Multi-AZ DB instance standby is primarily for failover and does not serve read traffic.",
          "ko": "기존 다중 AZ DB 인스턴스의 대기는 주로 장애 조치용이며 읽기 트래픽을 처리하지 않습니다."
        },
        "D": {
          "en": "A cross-Region replica adds unnecessary cross-Region cost and complexity when same-Region availability and reads are required.",
          "ko": "동일 리전 가용성과 읽기가 필요한 상황에서 리전 간 복제본은 불필요한 비용과 복잡성을 추가합니다."
        }
      }
    },
    {
      "id": "exam12-576",
      "number": 576,
      "tags": [
        "Amazon API Gateway",
        "Edge-Optimized Endpoint",
        "AWS Lambda",
        "CloudFront",
        "Latency",
        "Global Users"
      ],
      "question": {
        "en": "A company is building a RESTful serverless web application with API Gateway and Lambda. Users are geographically distributed, and the company wants to reduce API request latency. Which endpoint type should be used?",
        "ko": "회사는 Amazon API Gateway 및 AWS Lambda를 사용하여 AWS에서 RESTful 서버리스 웹 애플리케이션을 구축하고 있습니다. 이 웹 애플리케이션의 사용자는 지리적으로 분산되며 회사는 이러한 사용자에 대한 API 요청 대기 시간을 줄이려고 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 유형의 엔드포인트를 사용해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Private endpoint",
          "ko": "프라이빗 엔드포인트"
        },
        {
          "k": "B",
          "en": "Regional endpoint",
          "ko": "지역 엔드포인트"
        },
        {
          "k": "C",
          "en": "Interface VPC endpoint",
          "ko": "인터페이스 VPC 엔드포인트"
        },
        {
          "k": "D",
          "en": "Edge-optimized endpoint",
          "ko": "엣지 최적화 엔드포인트"
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "An edge-optimized API Gateway endpoint routes requests through the nearest CloudFront point of presence, reducing latency for geographically distributed clients.",
        "ko": "엣지 최적화 API Gateway 엔드포인트는 요청을 가장 가까운 CloudFront 엣지 로케이션으로 라우팅하여 지리적으로 분산된 클라이언트의 지연 시간을 줄입니다."
      },
      "why_wrong": {
        "A": {
          "en": "A private endpoint is intended for access from a VPC, not public global users.",
          "ko": "프라이빗 엔드포인트는 공개 글로벌 사용자가 아니라 VPC 내부 액세스를 위한 것입니다."
        },
        "B": {
          "en": "A Regional endpoint is best when clients are concentrated in the same Region or when a custom CDN is used.",
          "ko": "리전 엔드포인트는 클라이언트가 같은 리전에 집중되거나 별도 CDN을 사용할 때 적합합니다."
        },
        "C": {
          "en": "An interface VPC endpoint provides private connectivity and does not reduce latency for public geographically distributed users.",
          "ko": "인터페이스 VPC 엔드포인트는 프라이빗 연결을 제공하며 공개된 지리적 분산 사용자의 지연 시간을 줄이지 않습니다."
        }
      }
    },
    {
      "id": "exam12-577",
      "number": 577,
      "tags": [
        "Amazon CloudFront",
        "AWS Certificate Manager",
        "TLS",
        "DNS Validation",
        "Certificate Renewal",
        "Security"
      ],
      "question": {
        "en": "A company uses CloudFront to serve website content. Customers must use TLS when accessing the website, and the company wants to automate certificate creation and renewal. Which solution is most efficient?",
        "ko": "회사는 Amazon CloudFront 배포를 사용하여 웹 사이트의 콘텐츠 페이지를 제공합니다. 회사는 고객이 회사 웹 사이트에 액세스할 때 TLS 인증서를 사용하도록 해야 합니다. 회사는 TLS 인증서의 생성 및 갱신을 자동화하려고 합니다. 이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use a CloudFront security policy to create the certificate.",
          "ko": "CloudFront 보안 정책을 사용하여 인증서를 생성합니다."
        },
        {
          "k": "B",
          "en": "Use CloudFront origin access control (OAC) to create the certificate.",
          "ko": "CloudFront 원본 액세스 제어(OAC)를 사용하여 인증서를 생성합니다."
        },
        {
          "k": "C",
          "en": "Use AWS Certificate Manager (ACM) to create the certificate. Use DNS validation for the domain.",
          "ko": "AWS Certificate Manager(ACM)를 사용하여 인증서를 생성합니다. 도메인에 대해 DNS 검증을 사용하십시오."
        },
        {
          "k": "D",
          "en": "Use ACM to create the certificate. Use email validation for the domain.",
          "ko": "AWS Certificate Manager(ACM)를 사용하여 인증서를 생성합니다. 도메인에 대한 이메일 유효성 검사를 사용합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "ACM issues and automatically renews eligible public certificates. DNS validation remains in place through a DNS record, allowing renewal without recurring manual approval.",
        "ko": "ACM은 적격 공개 인증서를 발급하고 자동 갱신합니다. DNS 검증은 DNS 레코드를 통해 유지되므로 반복적인 수동 승인 없이 갱신할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A CloudFront security policy selects TLS versions and ciphers; it does not issue certificates.",
          "ko": "CloudFront 보안 정책은 TLS 버전과 암호를 선택하며 인증서를 발급하지 않습니다."
        },
        "B": {
          "en": "OAC secures access from CloudFront to an origin and does not create viewer certificates.",
          "ko": "OAC는 CloudFront에서 원본으로의 액세스를 보호하며 뷰어 인증서를 생성하지 않습니다."
        },
        "D": {
          "en": "Email validation can require manual action and is less suitable for fully automated renewal than DNS validation.",
          "ko": "이메일 검증은 수동 작업이 필요할 수 있어 DNS 검증보다 완전 자동 갱신에 적합하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-578",
      "number": 578,
      "tags": [
        "Amazon DynamoDB",
        "DynamoDB Accelerator",
        "DAX",
        "Caching",
        "Microsecond Latency",
        "Operational Excellence"
      ],
      "question": {
        "en": "A serverless application uses DynamoDB as its database tier. Its user base has grown substantially, and the company wants to improve database response time from milliseconds to microseconds and cache database requests with minimal operational overhead. Which solution meets these requirements?",
        "ko": "한 회사에서 Amazon DynamoDB를 데이터베이스 계층으로 사용하는 서버리스 애플리케이션을 배포했습니다. 응용 프로그램의 사용자가 크게 증가했습니다. 이 회사는 데이터베이스 응답 시간을 밀리초에서 마이크로초로 개선하고 데이터베이스에 대한 요청을 캐시하기를 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use DynamoDB Accelerator (DAX).",
          "ko": "DynamoDB 가속기(DAX)를 사용합니다."
        },
        {
          "k": "B",
          "en": "Migrate the database to Amazon Redshift.",
          "ko": "데이터베이스를 Amazon Redshift로 마이그레이션합니다."
        },
        {
          "k": "C",
          "en": "Migrate the database to Amazon RDS.",
          "ko": "데이터베이스를 Amazon RDS로 마이그레이션합니다."
        },
        {
          "k": "D",
          "en": "Use Amazon ElastiCache for Redis.",
          "ko": "Redis용 Amazon ElastiCache를 사용합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "DAX is a fully managed, DynamoDB-compatible in-memory cache that provides microsecond response times with minimal application changes and operational work.",
        "ko": "DAX는 완전 관리형 DynamoDB 호환 인메모리 캐시로, 최소한의 애플리케이션 변경과 운영 작업으로 마이크로초 응답 시간을 제공합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Redshift is an analytics data warehouse, not a low-latency cache for DynamoDB requests.",
          "ko": "Redshift는 분석용 데이터 웨어하우스이며 DynamoDB 요청용 저지연 캐시가 아닙니다."
        },
        "C": {
          "en": "Migrating to RDS changes the data model and does not directly provide the requested cache.",
          "ko": "RDS로 마이그레이션하면 데이터 모델이 바뀌며 요구된 캐시를 직접 제공하지 않습니다."
        },
        "D": {
          "en": "ElastiCache can cache data but requires custom cache integration and invalidation logic, creating more operational work than DAX.",
          "ko": "ElastiCache도 캐시할 수 있지만 사용자 지정 캐시 통합과 무효화 로직이 필요해 DAX보다 운영 부담이 큽니다."
        }
      }
    },
    {
      "id": "exam12-579",
      "number": 579,
      "tags": [
        "Amazon RDS for PostgreSQL",
        "Instance Scheduler on AWS",
        "Cost Optimization",
        "Scheduling",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company runs an application that uses Amazon RDS for PostgreSQL. The application receives traffic only during weekday business hours. The company wants to optimize cost based on this usage and reduce operational overhead. Which solution meets these requirements?",
        "ko": "회사에서 PostgreSQL용 Amazon RDS를 사용하는 애플리케이션을 실행합니다. 애플리케이션은 평일 업무 시간에만 트래픽을 수신합니다. 회사는 이 사용량을 기반으로 비용을 최적화하고 운영 오버헤드를 줄이려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use Instance Scheduler on AWS to configure start and stop schedules.",
          "ko": "AWS의 인스턴스 스케줄러를 사용하여 시작 및 중지 일정을 구성하십시오."
        },
        {
          "k": "B",
          "en": "Turn off automated backups and create a manual snapshot every week.",
          "ko": "자동 백업을 끕니다. 데이터베이스의 매주 수동 스냅샷을 생성합니다."
        },
        {
          "k": "C",
          "en": "Create a custom Lambda function that starts and stops the database based on minimum CPU utilization.",
          "ko": "최소 CPU 사용률을 기준으로 데이터베이스를 시작하고 중지하는 사용자 지정 AWS Lambda 함수를 생성합니다."
        },
        {
          "k": "D",
          "en": "Purchase All Upfront Reserved DB Instances.",
          "ko": "모든 Upfront 예약 DB 인스턴스를 구매합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Instance Scheduler on AWS automates starting and stopping supported RDS instances according to a defined schedule. It matches predictable business hours and avoids maintaining custom automation.",
        "ko": "AWS의 Instance Scheduler는 정의된 일정에 따라 지원되는 RDS 인스턴스의 시작과 중지를 자동화합니다. 예측 가능한 업무 시간에 맞으며 사용자 지정 자동화를 유지할 필요가 없습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Disabling automated backups does not reduce compute cost during off-hours and weakens recovery protection.",
          "ko": "자동 백업을 비활성화해도 업무 외 시간의 컴퓨팅 비용은 줄지 않으며 복구 보호가 약해집니다."
        },
        "C": {
          "en": "Custom Lambda automation increases development and maintenance overhead, and CPU thresholds do not directly represent the known schedule.",
          "ko": "사용자 지정 Lambda 자동화는 개발과 유지 관리 부담을 늘리며 CPU 임계값은 알려진 일정을 직접 표현하지 않습니다."
        },
        "D": {
          "en": "A reserved instance discounts continuous capacity but does not avoid paying for the predictable idle periods as effectively as scheduled stopping.",
          "ko": "예약 인스턴스는 지속 용량을 할인하지만 예약 중지만큼 예측 가능한 유휴 시간의 비용을 효과적으로 없애지 못합니다."
        }
      }
    },
    {
      "id": "exam12-580",
      "number": 580,
      "tags": [
        "Amazon EC2",
        "Amazon EBS",
        "gp3",
        "Lift and Shift",
        "Low Latency",
        "Cost Optimization"
      ],
      "question": {
        "en": "A company runs a latency-sensitive on-premises application that uses locally attached storage. The company is using a lift-and-shift approach to move the application to AWS and does not want to change its architecture. Which solution is most cost-effective?",
        "ko": "회사는 로컬로 연결된 스토리지를 사용하여 온프레미스에서 대기 시간에 민감한 애플리케이션을 실행합니다. 이 회사는 애플리케이션을 AWS 클라우드로 옮기기 위해 리프트 앤 시프트 방식을 사용하고 있습니다. 회사는 애플리케이션 아키텍처를 변경하기를 원하지 않습니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure an EC2 Auto Scaling group and run the application on Amazon FSx for Lustre.",
          "ko": "Amazon EC2 인스턴스로 Auto Scaling 그룹을 구성합니다. Amazon FSx for Lustre 파일 시스템을 사용하여 애플리케이션을 실행합니다."
        },
        {
          "k": "B",
          "en": "Host the application on an EC2 instance and use an Amazon EBS gp2 volume.",
          "ko": "Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. Amazon Elastic Block Store(Amazon EBS) gp2 볼륨을 사용하여 애플리케이션을 실행합니다."
        },
        {
          "k": "C",
          "en": "Configure an EC2 Auto Scaling group and run the application on Amazon FSx for OpenZFS.",
          "ko": "Amazon EC2 인스턴스로 Auto Scaling 그룹을 구성합니다. OpenZFS 파일 시스템용 Amazon FSx를 사용하여 애플리케이션을 실행합니다."
        },
        {
          "k": "D",
          "en": "Host the application on an EC2 instance and use an Amazon EBS gp3 volume.",
          "ko": "Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. Amazon Elastic Block Store(Amazon EBS) gp3 볼륨을 사용하여 애플리케이션을 실행합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "EBS provides low-latency block storage that preserves the locally attached disk model for a lift-and-shift migration. General Purpose SSD gp3 offers better price-performance and independent performance configuration compared with gp2.",
        "ko": "EBS는 리프트 앤 시프트 마이그레이션에서 로컬 연결 디스크 모델을 유지하는 저지연 블록 스토리지를 제공합니다. 범용 SSD gp3는 gp2보다 가격 대비 성능이 좋고 성능을 독립적으로 구성할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "FSx for Lustre is a shared high-performance file system and would change the storage architecture.",
          "ko": "FSx for Lustre는 공유 고성능 파일 시스템이므로 스토리지 아키텍처가 변경됩니다."
        },
        "B": {
          "en": "gp2 preserves the block-storage model but is generally less cost-effective than gp3 for equivalent requirements.",
          "ko": "gp2도 블록 스토리지 모델을 유지하지만 동일 요구 사항에서 일반적으로 gp3보다 비용 효율이 낮습니다."
        },
        "C": {
          "en": "FSx for OpenZFS introduces a network file system and Auto Scaling architecture that the company does not require.",
          "ko": "FSx for OpenZFS는 회사가 요구하지 않은 네트워크 파일 시스템과 Auto Scaling 아키텍처를 도입합니다."
        }
      }
    },
    {
      "id": "exam12-581",
      "number": 581,
      "tags": [
        "Amazon EC2 Auto Scaling",
        "On-Demand Instances",
        "Multi-AZ",
        "High Availability",
        "Resilience"
      ],
      "question": {
        "en": "A company runs a stateful production application on Amazon EC2. At least two instances must always be running. A solutions architect creates an Auto Scaling group and must design for high availability and fault tolerance. What additional step should the architect take?",
        "ko": "회사는 Amazon EC2 인스턴스에서 상태 저장 프로덕션 애플리케이션을 실행합니다. 애플리케이션을 항상 실행하려면 최소 2개의 EC2 인스턴스가 필요합니다. 솔루션 설계자는 응용 프로그램을 위한 고가용성 및 내결함성 아키텍처를 설계해야 합니다. 솔루션 설계자는 EC2 인스턴스의 Auto Scaling 그룹을 생성합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자가 수행해야 하는 추가 단계는 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Set the Auto Scaling group's minimum capacity to 2. Deploy one On-Demand Instance in each of two Availability Zones.",
          "ko": "Auto Scaling 그룹의 최소 용량을 2로 설정합니다. 하나의 가용 영역에 하나의 온디맨드 인스턴스를 배포하고 두 번째 가용 영역에 하나의 온디맨드 인스턴스를 배포합니다."
        },
        {
          "k": "B",
          "en": "Set the Auto Scaling group's minimum capacity to 4. Deploy two On-Demand Instances in each of two Availability Zones.",
          "ko": "Auto Scaling 그룹의 최소 용량을 4개로 설정합니다. 하나의 가용 영역에 2개의 온디맨드 인스턴스를 배포하고 두 번째 가용 영역에 2개의 온디맨드 인스턴스를 배포합니다."
        },
        {
          "k": "C",
          "en": "Set the minimum capacity to 2 and deploy four Spot Instances in one Availability Zone.",
          "ko": "Auto Scaling 그룹의 최소 용량을 2로 설정합니다. 하나의 가용 영역에 4개의 스팟 인스턴스를 배포합니다."
        },
        {
          "k": "D",
          "en": "Set the minimum capacity to 4. Deploy two On-Demand Instances in one Availability Zone and two Spot Instances in another.",
          "ko": "Auto Scaling 그룹의 최소 용량을 4로 설정합니다. 하나의 가용 영역에 2개의 온디맨드 인스턴스를 배포하고 두 번째 가용 영역에 2개의 스팟 인스턴스를 배포합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Maintaining four On-Demand Instances split evenly across two Availability Zones preserves at least two instances if an entire Availability Zone fails. On-Demand capacity also avoids Spot interruption risk for this stateful production workload.",
        "ko": "4개의 온디맨드 인스턴스를 두 가용 영역에 균등하게 배치하면 한 가용 영역 전체가 실패해도 최소 2개가 남습니다. 온디맨드 용량은 상태 저장 프로덕션 워크로드에서 스팟 중단 위험도 방지합니다."
      },
      "why_wrong": {
        "A": {
          "en": "With only one instance per Availability Zone, an Availability Zone failure leaves only one running instance, below the required minimum.",
          "ko": "가용 영역마다 한 대만 있으면 한 가용 영역 장애 시 한 대만 남아 최소 요구량을 충족하지 못합니다."
        },
        "C": {
          "en": "A single Availability Zone is not fault tolerant, and Spot Instances can be interrupted.",
          "ko": "단일 가용 영역은 내결함성이 없고 스팟 인스턴스는 중단될 수 있습니다."
        },
        "D": {
          "en": "An Availability Zone failure could leave only interruptible Spot capacity, which does not guarantee two continuously running instances.",
          "ko": "가용 영역 장애 후 중단 가능한 스팟 용량만 남을 수 있어 항상 두 대 실행을 보장하지 못합니다."
        }
      }
    },
    {
      "id": "exam12-582",
      "number": 582,
      "tags": [
        "Amazon Route 53",
        "Geolocation Routing",
        "Latency",
        "Hybrid",
        "Multi-Region"
      ],
      "question": {
        "en": "An ecommerce company uses Route 53 for DNS and hosts a website on premises and in AWS. The on-premises data center is near us-west-1, and the AWS website is in eu-central-1. The company wants to minimize website loading time. Which solution meets these requirements?",
        "ko": "전자상거래 회사는 Amazon Route 53을 DNS 공급자로 사용합니다. 이 회사는 온프레미스 및 AWS 클라우드에서 웹 사이트를 호스팅합니다. 회사의 온프레미스 데이터 센터는 us-west-1 리전 근처에 있습니다. 회사는 eu-central-1 리전을 사용하여 웹사이트를 호스팅합니다. 회사는 웹사이트 로딩 시간을 최대한 최소화하고자 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure a geolocation routing policy. Send traffic near us-west-1 to the on-premises data center and traffic near eu-central-1 to eu-central-1.",
          "ko": "지리적 위치 라우팅 정책을 설정합니다. us-west-1 근처에 있는 트래픽을 온프레미스 데이터 센터로 보냅니다. eu-central-1 근처에 있는 트래픽을 eu-central-1로 보냅니다."
        },
        {
          "k": "B",
          "en": "Route all traffic near eu-central-1 to eu-central-1 and all traffic near the on-premises data center to the data center by using simple routing.",
          "ko": "eu-central-1 근처에 있는 모든 트래픽을 eu-central-1로 라우팅하고 온프레미스 데이터 센터 근처에 있는 모든 트래픽을 온프레미스 데이터 센터로 라우팅하는 간단한 라우팅 정책을 설정합니다."
        },
        {
          "k": "C",
          "en": "Configure a latency routing policy and associate the policy only with us-west-1.",
          "ko": "레이턴시 라우팅 정책을 설정합니다. 정책을 us-west-1과 연결합니다."
        },
        {
          "k": "D",
          "en": "Configure weighted routing and split traffic evenly between eu-central-1 and the on-premises data center.",
          "ko": "가중치 기반 라우팅 정책을 설정합니다. eu-central-1과 온프레미스 데이터 센터 간에 트래픽을 균등하게 분할합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Geolocation routing directs users according to their geographic origin, allowing users near each hosting location to use the nearby endpoint and reduce loading time.",
        "ko": "지리적 위치 라우팅은 사용자의 지리적 출발지에 따라 트래픽을 전달하므로 각 호스팅 위치 근처 사용자가 가까운 엔드포인트를 사용하여 로딩 시간을 줄일 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Simple routing does not route requests according to the user's location.",
          "ko": "단순 라우팅은 사용자 위치에 따라 요청을 라우팅하지 않습니다."
        },
        "C": {
          "en": "A latency policy must include appropriate records for all endpoints; associating it only with us-west-1 does not describe the required hybrid routing.",
          "ko": "지연 시간 정책에는 모든 엔드포인트의 적절한 레코드가 필요하며 us-west-1만 연결해서는 요구된 하이브리드 라우팅을 구성하지 못합니다."
        },
        "D": {
          "en": "Weighted routing distributes by configured percentages rather than user proximity and can send users to a distant endpoint.",
          "ko": "가중치 라우팅은 사용자 근접성이 아니라 설정 비율로 분배하므로 사용자를 먼 엔드포인트로 보낼 수 있습니다."
        }
      }
    },
    {
      "id": "exam12-583",
      "number": 583,
      "tags": [
        "AWS Snowball",
        "Tape Gateway",
        "Amazon S3 Glacier Deep Archive",
        "Migration",
        "Archival",
        "Cost Optimization"
      ],
      "question": {
        "en": "A company has 5 PB of archived data on physical tapes that must be retained for 10 more years. It wants to migrate to AWS within 6 months, and the data center has a 1 Gbps internet uplink. Which solution is most cost-effective?",
        "ko": "회사는 물리적 테이프에 5PB의 아카이빙된 데이터를 가지고 있습니다. 회사는 규정 준수를 위해 테이프의 데이터를 10년 더 보존해야 합니다. 회사는 향후 6개월 내에 AWS로 마이그레이션하기를 원합니다. 테이프를 저장하는 데이터 센터에는 1Gbps 업링크 인터넷 연결이 있습니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Read the tapes into local NFS storage and use AWS DataSync to migrate the data to S3 Glacier Flexible Retrieval.",
          "ko": "온프레미스에서 테이프의 데이터를 읽습니다. 로컬 NFS 스토리지에 데이터를 준비합니다. AWS DataSync를 사용하여 데이터를 Amazon S3 Glacier Flexible Retrieval로 마이그레이션합니다."
        },
        {
          "k": "B",
          "en": "Use an on-premises backup application to read the tapes and write directly to S3 Glacier Deep Archive.",
          "ko": "온프레미스 백업 애플리케이션을 사용하여 테이프에서 데이터를 읽고 Amazon S3 Glacier Deep Archive에 직접 씁니다."
        },
        {
          "k": "C",
          "en": "Order multiple AWS Snowball devices with Tape Gateway. Copy the physical tapes to Snowball virtual tapes, ship the devices to AWS, and use a lifecycle policy to move the tapes to S3 Glacier Deep Archive.",
          "ko": "테이프 게이트웨이가 있는 여러 AWS Snowball 디바이스를 주문합니다. Snowball의 가상 테이프에 물리적 테이프를 복사합니다. Snowball 디바이스를 AWS로 배송합니다. 수명 주기 정책을 생성하여 테이프를 Amazon S3 Glacier Deep Archive로 이동합니다."
        },
        {
          "k": "D",
          "en": "Configure an on-premises Tape Gateway, create virtual tapes in AWS, and copy physical tapes to virtual tapes over the internet.",
          "ko": "온프레미스 테이프 게이트웨이를 구성합니다. AWS 클라우드에서 가상 테이프를 생성합니다. 백업 소프트웨어를 사용하여 물리적 테이프를 가상 테이프에 복사합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Five petabytes is impractical to transfer over a 1 Gbps link within six months. Snowball provides offline bulk transfer, Tape Gateway preserves the virtual-tape workflow, and Glacier Deep Archive provides low-cost long-term retention.",
        "ko": "5PB는 1Gbps 회선으로 6개월 안에 전송하기 어렵습니다. Snowball은 오프라인 대량 전송을 제공하고 Tape Gateway는 가상 테이프 흐름을 유지하며 Glacier Deep Archive는 저비용 장기 보관을 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Transferring 5 PB over the available internet link would not reliably meet the six-month deadline and Flexible Retrieval costs more than Deep Archive for long retention.",
          "ko": "가용 인터넷 회선으로 5PB를 보내면 6개월 기한을 안정적으로 맞추기 어렵고 Flexible Retrieval은 장기 보관에서 Deep Archive보다 비쌉니다."
        },
        "B": {
          "en": "A direct internet upload of this volume is constrained by the 1 Gbps link.",
          "ko": "이 용량을 인터넷으로 직접 업로드하면 1Gbps 회선이 병목이 됩니다."
        },
        "D": {
          "en": "Tape Gateway over the internet still depends on the insufficient uplink and does not provide offline bulk transfer.",
          "ko": "인터넷 기반 Tape Gateway도 부족한 업링크에 의존하며 오프라인 대량 전송을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-584",
      "number": 584,
      "tags": [
        "Amazon EC2",
        "Spread Placement Group",
        "HPC",
        "Fault Isolation",
        "Networking"
      ],
      "question": {
        "en": "A company is deploying an application that processes large amounts of data in parallel on EC2 instances. The network architecture must prevent node groups from sharing the same underlying hardware. Which networking solution meets this requirement?",
        "ko": "한 회사에서 대량의 데이터를 병렬로 처리하는 애플리케이션을 배포하고 있습니다. 회사는 워크로드에 Amazon EC2 인스턴스를 사용할 계획입니다. 노드 그룹이 동일한 기본 하드웨어를 공유하지 못하도록 네트워크 아키텍처를 구성할 수 있어야 합니다. 이러한 요구 사항을 충족하는 네트워킹 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Run the EC2 instances in a spread placement group.",
          "ko": "분산 배치 그룹에서 EC2 인스턴스를 실행합니다."
        },
        {
          "k": "B",
          "en": "Group the EC2 instances into separate accounts.",
          "ko": "EC2 인스턴스를 별도의 계정으로 그룹화합니다."
        },
        {
          "k": "C",
          "en": "Configure EC2 instances with Dedicated tenancy.",
          "ko": "전용 테넌시로 EC2 인스턴스를 구성합니다."
        },
        {
          "k": "D",
          "en": "Configure EC2 instances with Shared tenancy.",
          "ko": "공유 테넌시로 EC2 인스턴스를 구성합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "A spread placement group places each instance on distinct underlying hardware and reduces correlated hardware failures, matching the required isolation between nodes.",
        "ko": "분산 배치 그룹은 각 인스턴스를 서로 다른 기본 하드웨어에 배치하여 상관된 하드웨어 장애를 줄이고 노드 간 격리 요구를 충족합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Separate AWS accounts do not guarantee separate physical hosts.",
          "ko": "별도 AWS 계정은 물리 호스트 분리를 보장하지 않습니다."
        },
        "C": {
          "en": "Dedicated tenancy isolates an account from other customers but does not necessarily isolate every instance from the other instances in the same account.",
          "ko": "전용 테넌시는 다른 고객과 격리하지만 같은 계정의 모든 인스턴스가 서로 다른 하드웨어를 사용하도록 보장하지 않습니다."
        },
        "D": {
          "en": "Shared tenancy provides no underlying-hardware isolation guarantee.",
          "ko": "공유 테넌시는 기본 하드웨어 격리를 보장하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-585",
      "number": 585,
      "tags": [
        "Amazon EC2",
        "On-Demand Capacity Reservation",
        "Disaster Recovery",
        "Capacity",
        "Resilience"
      ],
      "question": {
        "en": "A solutions architect is designing a disaster recovery strategy to provide Amazon EC2 capacity in a recovery AWS Region. The strategy must ensure sufficient capacity in that Region. Which solution meets these requirements?",
        "ko": "솔루션 아키텍트는 장애 조치 AWS 지역에서 Amazon EC2 용량을 제공하기 위한 재해 복구(DR) 전략을 설계하고 있습니다. 비즈니스 요구 사항에 따르면 DR 전략은 장애 조치 지역의 용량을 충족해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Purchase On-Demand Instances in the recovery Region.",
          "ko": "장애 조치 지역에서 온디맨드 인스턴스를 구매합니다."
        },
        {
          "k": "B",
          "en": "Purchase an EC2 Savings Plan in the recovery Region.",
          "ko": "장애 조치 지역에서 EC2 Savings Plan을 구매합니다."
        },
        {
          "k": "C",
          "en": "Purchase Regional Reserved Instances in the recovery Region.",
          "ko": "장애 조치 지역에서 지역 예약 인스턴스를 구매합니다."
        },
        {
          "k": "D",
          "en": "Purchase an On-Demand Capacity Reservation in the recovery Region.",
          "ko": "장애 조치 지역에서 용량 예약을 구매합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "An On-Demand Capacity Reservation reserves EC2 capacity for a specific instance configuration in an Availability Zone, ensuring it is available when disaster recovery is activated.",
        "ko": "온디맨드 용량 예약은 특정 가용 영역에서 지정한 EC2 구성의 용량을 확보하므로 재해 복구를 활성화할 때 용량을 사용할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Launching On-Demand Instances only when needed does not guarantee capacity will be available.",
          "ko": "필요할 때 온디맨드 인스턴스를 시작하는 것만으로는 용량 가용성을 보장하지 못합니다."
        },
        "B": {
          "en": "Savings Plans provide billing discounts but do not reserve capacity.",
          "ko": "Savings Plans는 요금 할인을 제공하지만 용량을 예약하지 않습니다."
        },
        "C": {
          "en": "Regional Reserved Instances provide discounts and size flexibility but do not reserve capacity in a specific Availability Zone.",
          "ko": "리전 예약 인스턴스는 할인과 크기 유연성을 제공하지만 특정 가용 영역의 용량을 확보하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-586",
      "number": 586,
      "tags": [
        "AWS Organizations",
        "Account Migration",
        "Multi-Account",
        "Governance",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company has five OUs in an AWS Organizations organization associated with five businesses. The R&D business will become an independent company and needs a separate organization. A solutions architect creates a new management account for it. What should be done next from the new management account?",
        "ko": "회사에는 AWS Organizations 조직의 일부로 5개의 조직 단위(OU)가 있습니다. 각 OU는 회사가 소유한 5개 비즈니스와 연관되어 있습니다. 회사의 연구개발(R&D) 사업이 회사에서 분리되어 자체 조직이 필요할 것입니다. 솔루션 설계자는 이 목적을 위해 별도의 새 관리 계정을 생성합니다. 솔루션 설계자는 새 마스터 계정에서 다음에 무엇을 수행해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Make the R&D AWS account part of both organizations during the transition.",
          "ko": "전환하는 동안 R&D AWS 계정이 두 조직의 일부가 되도록 하십시오."
        },
        {
          "k": "B",
          "en": "After the R&D AWS account leaves the previous organization, invite it to become part of the new organization.",
          "ko": "R&D AWS 계정이 이전 조직을 떠난 후 R&D AWS 계정을 새 조직의 일부로 초대합니다."
        },
        {
          "k": "C",
          "en": "Create a new R&D AWS account in the new organization and migrate all resources from the previous account.",
          "ko": "새 조직에 새 R&D AWS 계정을 생성합니다. 이전 R&D AWS 계정의 리소스를 새 R&D AWS 계정으로 마이그레이션합니다."
        },
        {
          "k": "D",
          "en": "Have the R&D AWS account join the new organization and make the new management account a member of the previous organization.",
          "ko": "R&D AWS 계정이 새 조직에 가입하도록 합니다. 새 마스터 계정을 이전 조직의 구성원으로 만드세요."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "An AWS account can belong to only one organization at a time. The member account must leave the old organization before the new management account can invite it into the new organization.",
        "ko": "AWS 계정은 한 번에 하나의 조직에만 속할 수 있습니다. 멤버 계정이 이전 조직을 떠난 뒤 새 관리 계정이 새 조직으로 초대해야 합니다."
      },
      "why_wrong": {
        "A": {
          "en": "An account cannot be a member of two organizations simultaneously.",
          "ko": "계정은 동시에 두 조직의 멤버가 될 수 없습니다."
        },
        "C": {
          "en": "Creating a replacement account and migrating every resource is unnecessary when the existing account can move organizations.",
          "ko": "기존 계정을 조직 간 이동할 수 있으므로 대체 계정을 만들고 모든 리소스를 이전할 필요가 없습니다."
        },
        "D": {
          "en": "A management account cannot join another organization as a member, and this sequence does not satisfy the account-move rules.",
          "ko": "관리 계정은 다른 조직의 멤버로 가입할 수 없으며 이 순서는 계정 이동 규칙을 충족하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-587",
      "number": 587,
      "tags": [
        "Amazon API Gateway",
        "Kinesis Data Firehose",
        "Amazon S3",
        "IAM",
        "Serverless",
        "Ingestion"
      ],
      "question": {
        "en": "A company needs to capture unpredictable customer activity from several web applications for analysis and prediction. The solution must integrate with the applications and include an authorization layer. Which solution meets these requirements?",
        "ko": "한 회사는 분석을 처리하고 예측하기 위해 다양한 웹 애플리케이션에서 고객 활동을 캡처하는 솔루션을 설계하고 있습니다. 웹 애플리케이션에서의 고객 활동은 예측할 수 없으며 갑자기 증가할 수 있습니다. 회사에는 다른 웹 애플리케이션과 통합되는 솔루션이 필요합니다. 솔루션에는 보안 목적을 위한 인증 단계가 포함되어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Put a Gateway Load Balancer in front of ECS containers that store incoming information on EFS. Resolve authorization at the GWLB.",
          "ko": "회사가 Amazon Elastic File System(Amazon EFS) 파일 시스템에서 수신하는 정보를 저장하는 Amazon Elastic Container Service(Amazon ECS) 컨테이너 인스턴스 앞에 게이트웨이 로드 밸런서(GWLB)를 구성합니다. 승인은 GWLB에서 해결됩니다."
        },
        {
          "k": "B",
          "en": "Configure an API Gateway endpoint in front of a Kinesis data stream that stores incoming information in S3. Use Lambda for authorization.",
          "ko": "회사가 Amazon S3 버킷에 수신하는 정보를 저장하는 Amazon Kinesis 데이터 스트림 앞에 Amazon API Gateway 엔드포인트를 구성합니다. AWS Lambda 함수를 사용하여 인증을 해결합니다."
        },
        {
          "k": "C",
          "en": "Configure an API Gateway endpoint in front of Kinesis Data Firehose that stores incoming information in S3. Use an API Gateway Lambda authorizer.",
          "ko": "회사가 Amazon S3 버킷에 수신하는 정보를 저장하는 Amazon Kinesis Data Firehose 앞에 Amazon API Gateway 엔드포인트를 구성합니다. API Gateway Lambda 권한 부여자를 사용하여 권한 부여를 해결합니다."
        },
        {
          "k": "D",
          "en": "Put a Gateway Load Balancer in front of ECS containers that store incoming information on EFS. Use Lambda for authorization.",
          "ko": "회사가 Amazon Elastic File System(Amazon EFS) 파일 시스템에서 수신하는 정보를 저장하는 Amazon Elastic Container Service(Amazon ECS) 컨테이너 인스턴스 앞에 게이트웨이 로드 밸런서(GWLB)를 구성합니다. AWS Lambda 함수를 사용하여 인증을 해결합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "API Gateway provides a scalable integration endpoint and supports Lambda authorizers. Kinesis Data Firehose handles bursty ingestion with low operational overhead and delivers records to Amazon S3 for analysis.",
        "ko": "API Gateway는 확장 가능한 통합 엔드포인트와 Lambda 권한 부여자를 제공합니다. Kinesis Data Firehose는 낮은 운영 부담으로 급증하는 수집량을 처리하고 분석을 위해 레코드를 Amazon S3에 전달합니다."
      },
      "why_wrong": {
        "A": {
          "en": "GWLB is designed for virtual network appliances and does not perform application authorization.",
          "ko": "GWLB는 가상 네트워크 어플라이언스용이며 애플리케이션 인증을 수행하지 않습니다."
        },
        "B": {
          "en": "A Kinesis data stream requires consumers to deliver data to S3, adding management compared with Firehose, and the option does not specify an API Gateway authorizer.",
          "ko": "Kinesis 데이터 스트림은 S3 전달용 소비자를 관리해야 하므로 Firehose보다 부담이 크며 선택지는 API Gateway 권한 부여자를 명시하지 않습니다."
        },
        "D": {
          "en": "GWLB and ECS/EFS are unnecessarily complex for scalable web-event ingestion and do not provide the stated authorization integration.",
          "ko": "GWLB와 ECS/EFS는 확장 가능한 웹 이벤트 수집에 불필요하게 복잡하며 명시된 인증 통합을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-588",
      "number": 588,
      "tags": [
        "Amazon RDS for SQL Server",
        "Cross-Region Automated Backups",
        "Disaster Recovery",
        "RPO",
        "Cost Optimization"
      ],
      "question": {
        "en": "An ecommerce company wants a disaster recovery solution for an Amazon RDS DB instance running Microsoft SQL Server Enterprise Edition. Its RPO and RTO are both 24 hours. Which solution is most cost-effective?",
        "ko": "한 전자 상거래 회사는 Microsoft SQL Server Enterprise Edition을 실행하는 Amazon RDS DB 인스턴스에 대한 재해 복구 솔루션을 원합니다. 회사의 현재 복구 지점 목표(RPO)와 복구 시간 목표(RTO)는 24시간입니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a cross-Region read replica and promote it to the primary instance.",
          "ko": "지역 간 읽기 전용 복제본을 생성하고 읽기 전용 복제본을 기본 인스턴스로 승격합니다."
        },
        {
          "k": "B",
          "en": "Use AWS DMS to create a cross-Region replica of the RDS database.",
          "ko": "AWS Database Migration Service(AWS DMS)를 사용하여 RDS 교차 지역 복제를 생성합니다."
        },
        {
          "k": "C",
          "en": "Use cross-Region replication every 24 hours to copy the primary backup to an S3 bucket.",
          "ko": "24시간마다 교차 리전 복제를 사용하여 기본 백업을 Amazon S3 버킷에 복사합니다."
        },
        {
          "k": "D",
          "en": "Copy automated snapshots to another Region every 24 hours.",
          "ko": "24시간마다 자동 스냅샷을 다른 리전으로 복사합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "With a 24-hour RPO and RTO, periodically copying snapshots to another Region provides adequate recoverability without the continuous cost of a running replica.",
        "ko": "RPO와 RTO가 24시간이면 스냅샷을 정기적으로 다른 리전으로 복사해 상시 실행 복제본 비용 없이 충분한 복구 기능을 제공할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A continuously running cross-Region replica is more expensive than necessary for a 24-hour recovery objective and is not the general SQL Server DR choice here.",
          "ko": "상시 실행 리전 간 복제본은 24시간 복구 목표에 필요 이상으로 비싸며 여기서 일반적인 SQL Server DR 선택이 아닙니다."
        },
        "B": {
          "en": "DMS replication adds continuous infrastructure and operational cost that the relaxed RPO/RTO does not require.",
          "ko": "DMS 복제는 완화된 RPO/RTO에 필요하지 않은 지속 인프라와 운영 비용을 추가합니다."
        },
        "C": {
          "en": "RDS backups are managed as snapshots rather than copied to a customer S3 bucket in this manner.",
          "ko": "RDS 백업은 이 방식으로 고객 S3 버킷에 복사하는 것이 아니라 스냅샷으로 관리됩니다."
        }
      }
    },
    {
      "id": "exam12-589",
      "number": 589,
      "tags": [
        "Amazon ElastiCache for Redis",
        "Application Load Balancer",
        "Session State",
        "High Availability",
        "Auto Scaling"
      ],
      "question": {
        "en": "A company runs a web application on EC2 instances in an Auto Scaling group behind an Application Load Balancer with sticky sessions enabled. The web servers hold user session state. The company wants high availability and no loss of session state when a web server stops. Which solution meets these requirements?",
        "ko": "한 회사는 고정 세션이 활성화된 Application Load Balancer 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 웹 애플리케이션을 실행합니다. 웹 서버는 현재 사용자 세션 상태를 호스팅합니다. 회사는 웹 서버 중단 시 고가용성을 보장하고 사용자 세션 상태 손실을 방지하기를 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Store session data in Amazon ElastiCache for Memcached and update the application to use it.",
          "ko": "Memcached 인스턴스용 Amazon ElastiCache를 사용하여 세션 데이터를 저장합니다. Memcached용 ElastiCache를 사용하여 세션 상태를 저장하도록 애플리케이션을 업데이트합니다."
        },
        {
          "k": "B",
          "en": "Store session state in Amazon ElastiCache for Redis and update the application to use it.",
          "ko": "Redis용 Amazon ElastiCache를 사용하여 세션 상태를 저장합니다. Redis용 ElastiCache를 사용하여 세션 상태를 저장하도록 애플리케이션을 업데이트합니다."
        },
        {
          "k": "C",
          "en": "Store session data in an AWS Storage Gateway cache volume and update the application to use it.",
          "ko": "AWS Storage Gateway 캐싱 볼륨을 사용하여 세션 데이터를 저장합니다. AWS Storage Gateway 캐시 볼륨을 사용하여 세션 상태를 저장하도록 애플리케이션을 업데이트합니다."
        },
        {
          "k": "D",
          "en": "Store session state in Amazon RDS and update the application to use it.",
          "ko": "Amazon RDS를 사용하여 세션 상태를 저장합니다. Amazon RDS를 사용하여 세션 상태를 저장하도록 애플리케이션을 업데이트합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "ElastiCache for Redis provides a low-latency shared session store with replication and automatic failover options. Moving state out of individual web servers prevents session loss when instances are replaced.",
        "ko": "ElastiCache for Redis는 복제와 자동 장애 조치 옵션이 있는 저지연 공유 세션 저장소를 제공합니다. 개별 웹 서버 밖으로 상태를 이동하면 인스턴스 교체 시 세션 손실을 막을 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Memcached does not provide the same replication, persistence, and automatic failover capabilities required for durable highly available sessions.",
          "ko": "Memcached는 내구성 있는 고가용 세션에 필요한 Redis 수준의 복제, 지속성 및 자동 장애 조치를 제공하지 않습니다."
        },
        "C": {
          "en": "Storage Gateway cache volumes are for hybrid block storage, not web session state.",
          "ko": "Storage Gateway 캐시 볼륨은 하이브리드 블록 스토리지용이며 웹 세션 상태 저장소가 아닙니다."
        },
        "D": {
          "en": "RDS can store sessions but adds relational database overhead and latency compared with the purpose-suited Redis cache.",
          "ko": "RDS도 세션을 저장할 수 있지만 목적에 맞는 Redis 캐시보다 관계형 데이터베이스 부담과 지연이 큽니다."
        }
      }
    },
    {
      "id": "exam12-590",
      "number": 590,
      "tags": [
        "Amazon RDS for MySQL",
        "Read Replica",
        "Reporting",
        "Read Scaling",
        "Performance"
      ],
      "question": {
        "en": "A company migrated an on-premises MySQL database to Amazon RDS for MySQL and sized the DB instance for its average daily workload. Once a month, report queries slow database performance. The company wants to run reports while maintaining daily workload performance. Which solution meets these requirements?",
        "ko": "한 회사는 회사의 온프레미스 데이터 센터에서 MySQL DB 인스턴스용 Amazon RDS로 MySQL 데이터베이스를 마이그레이션했습니다. 회사는 회사의 일일 평균 워크로드를 충족하도록 RDS DB 인스턴스의 크기를 조정했습니다. 한 달에 한 번 회사에서 보고서에 대한 쿼리를 실행할 때 데이터베이스 성능이 느려집니다. 회사는 보고서를 실행하고 일일 작업 부하의 성능을 유지 관리할 수 있는 기능을 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a read replica of the database and send report queries to the read replica.",
          "ko": "데이터베이스의 읽기 전용 복제본을 생성합니다. 쿼리를 읽기 전용 복제본으로 보냅니다."
        },
        {
          "k": "B",
          "en": "Create a database backup, restore it to another DB instance, and send queries to the new database.",
          "ko": "데이터베이스 백업을 생성합니다. 백업을 다른 DB 인스턴스로 복원합니다. 쿼리를 새 데이터베이스로 보냅니다."
        },
        {
          "k": "C",
          "en": "Export the data to Amazon S3 and use Amazon Athena to query the S3 bucket.",
          "ko": "데이터를 Amazon S3로 내보냅니다. Amazon Athena를 사용하여 S3 버킷을 쿼리합니다."
        },
        {
          "k": "D",
          "en": "Resize the DB instance to accommodate the additional workload.",
          "ko": "추가 워크로드를 수용할 수 있도록 DB 인스턴스의 크기를 조정합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "An RDS read replica offloads read-only reporting queries from the primary DB instance, preserving primary performance while keeping the reporting data asynchronously updated.",
        "ko": "RDS 읽기 전용 복제본은 읽기 전용 보고 쿼리를 기본 DB 인스턴스에서 분리하여 기본 성능을 유지하면서 보고 데이터를 비동기식으로 최신 상태로 유지합니다."
      },
      "why_wrong": {
        "B": {
          "en": "A periodically restored backup is operationally cumbersome and the data is stale rather than continuously replicated.",
          "ko": "백업을 주기적으로 복원하는 방식은 운영 부담이 크고 지속 복제가 아니므로 데이터가 오래됩니다."
        },
        "C": {
          "en": "Exporting and redesigning reports for Athena adds a separate data pipeline when a read replica directly supports the existing SQL workload.",
          "ko": "Athena용 내보내기와 보고서 재설계는 기존 SQL 워크로드를 직접 지원하는 읽기 전용 복제본보다 별도 파이프라인 부담이 큽니다."
        },
        "D": {
          "en": "Permanently resizing the primary for a monthly workload is less efficient and does not isolate reporting from production traffic.",
          "ko": "월 1회 워크로드를 위해 기본 인스턴스를 상시 확장하는 것은 비효율적이며 보고 트래픽을 프로덕션과 격리하지 못합니다."
        }
      }
    },
    {
      "id": "exam12-591",
      "number": 591,
      "tags": [
        "Amazon EKS",
        "Amazon API Gateway",
        "Microservices",
        "Routing",
        "Cost Optimization"
      ],
      "question": {
        "en": "A company runs a container application on Amazon EKS. The application contains microservices for managing customers and orders. Incoming requests must be routed to the appropriate microservice. Which solution is most cost-effective?",
        "ko": "회사는 Amazon EKS를 사용하여 컨테이너 애플리케이션을 실행합니다. 애플리케이션에는 고객을 관리하고 주문하는 마이크로서비스가 포함되어 있습니다. 회사는 들어오는 요청을 적절한 마이크로서비스로 라우팅해야 합니다. 이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use the AWS Load Balancer Controller to provision a Network Load Balancer.",
          "ko": "AWS 로드 밸런서 컨트롤러를 사용하여 Network Load Balancer를 프로비저닝합니다."
        },
        {
          "k": "B",
          "en": "Use the AWS Load Balancer Controller to provision an Application Load Balancer.",
          "ko": "AWS Load Balancer Controller를 사용하여 Application Load Balancer를 프로비저닝합니다."
        },
        {
          "k": "C",
          "en": "Use an AWS Lambda function to connect requests to Amazon EKS.",
          "ko": "AWS Lambda 함수를 사용하여 요청을 Amazon EKS에 연결합니다."
        },
        {
          "k": "D",
          "en": "Use Amazon API Gateway to connect requests to Amazon EKS.",
          "ko": "Amazon API Gateway를 사용하여 요청을 Amazon EKS에 연결합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "API Gateway provides managed request routing for APIs and can direct paths and methods to the appropriate EKS-hosted microservice with low operational overhead.",
        "ko": "API Gateway는 관리형 API 요청 라우팅을 제공하며 경로와 메서드에 따라 요청을 적절한 EKS 마이크로서비스로 전달할 수 있어 운영 부담이 적습니다."
      },
      "why_wrong": {
        "A": {
          "en": "An NLB operates at Layer 4 and does not provide the application-level API routing needed here.",
          "ko": "NLB는 계층 4에서 작동하므로 필요한 애플리케이션 수준 API 라우팅을 제공하지 않습니다."
        },
        "B": {
          "en": "An ALB can route HTTP traffic, but API Gateway provides the requested managed API front door and integration more directly for this scenario.",
          "ko": "ALB도 HTTP 트래픽을 라우팅할 수 있지만 이 시나리오에서는 API Gateway가 필요한 관리형 API 진입점과 통합을 더 직접적으로 제공합니다."
        },
        "C": {
          "en": "A custom Lambda routing layer adds code, latency, and operational work.",
          "ko": "사용자 지정 Lambda 라우팅 계층은 코드, 지연 시간, 운영 작업을 추가합니다."
        }
      }
    },
    {
      "id": "exam12-592",
      "number": 592,
      "tags": [
        "Amazon S3",
        "Amazon CloudFront",
        "Signed URL",
        "Geographic Restriction",
        "Content Delivery"
      ],
      "question": {
        "en": "A company sells access to copyrighted images on AWS. Global customers need fast access, users in specified countries must be denied access, and cost must be minimized. Which solution meets these requirements?",
        "ko": "회사는 AWS를 사용하여 저작권이 있는 이미지에 대한 액세스 권한을 판매합니다. 글로벌 고객은 이미지에 빠르게 액세스할 수 있어야 하고 특정 국가의 사용자는 거부해야 하며 비용을 최소화해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Store images in S3, enable MFA and public bucket access, and give customers an S3 bucket link.",
          "ko": "Amazon S3에 이미지를 저장하고 MFA 및 퍼블릭 버킷 액세스를 활성화한 후 고객에게 S3 버킷 링크를 제공합니다."
        },
        {
          "k": "B",
          "en": "Store images in S3, create an IAM user for every customer, and grant the users access through an IAM group.",
          "ko": "Amazon S3에 이미지를 저장하고 고객마다 IAM 사용자를 생성한 후 S3 액세스 권한이 있는 그룹에 추가합니다."
        },
        {
          "k": "C",
          "en": "Store images on EC2 instances behind an ALB, deploy instances only in allowed countries, and give customers country-specific ALB links.",
          "ko": "ALB 뒤의 EC2 인스턴스에 이미지를 저장하고 허용 국가에만 인스턴스를 배포한 후 고객에게 국가별 ALB 링크를 제공합니다."
        },
        {
          "k": "D",
          "en": "Store images in S3, distribute them through CloudFront with geographic restrictions, and provide each customer a signed URL.",
          "ko": "Amazon S3에 이미지를 저장하고 지리적 제한이 있는 이미지를 배포하려면 Amazon CloudFront를 사용합니다. 각 고객이 CloudFront 데이터에 액세스할 수 있도록 서명된 URL을 제공합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "CloudFront caches content globally, geographic restrictions block selected countries, and signed URLs provide time-limited access to paid private content. S3 supplies durable, low-cost origin storage.",
        "ko": "CloudFront는 콘텐츠를 전 세계에 캐시하고 지리적 제한으로 선택한 국가를 차단하며 서명된 URL로 유료 비공개 콘텐츠에 시간 제한 액세스를 제공합니다. S3는 내구성이 높고 저렴한 원본 스토리지를 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Public bucket access exposes protected content and MFA does not authorize individual image viewers.",
          "ko": "퍼블릭 버킷 액세스는 보호 콘텐츠를 노출하며 MFA는 개별 이미지 열람자를 승인하는 수단이 아닙니다."
        },
        "B": {
          "en": "Creating IAM users for external customers does not provide global edge delivery or geographic blocking and creates high administration overhead.",
          "ko": "외부 고객별 IAM 사용자는 글로벌 엣지 전송이나 국가 차단을 제공하지 않으며 관리 부담이 큽니다."
        },
        "C": {
          "en": "Country-specific EC2 fleets are expensive and do not form an efficient global content delivery solution.",
          "ko": "국가별 EC2 플릿은 비싸며 효율적인 글로벌 콘텐츠 전송 솔루션이 아닙니다."
        }
      }
    },
    {
      "id": "exam12-593",
      "number": 593,
      "tags": [
        "Amazon ElastiCache for Redis",
        "Multi-AZ",
        "Replication Group",
        "Automatic Failover",
        "High Availability"
      ],
      "question": {
        "en": "A solutions architect is designing a highly available Amazon ElastiCache for Redis solution. It must prevent performance degradation or data loss from node-level and Availability Zone failures. Which solution meets these requirements?",
        "ko": "솔루션 아키텍트는 가용성이 뛰어난 Redis용 Amazon ElastiCache 기반 솔루션을 설계하고 있습니다. 장애로 인해 노드 및 가용 영역 수준에서 성능 저하 또는 데이터 손실이 발생하지 않아야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use a Multi-AZ Redis replication group with a shard that contains multiple nodes.",
          "ko": "여러 노드가 포함된 샤드가 있는 다중 AZ Redis 복제 그룹을 사용합니다."
        },
        {
          "k": "B",
          "en": "Use a Redis shard with multiple nodes and enable Redis AOF.",
          "ko": "Redis AOF(Append Only Files)가 활성화된 여러 노드가 포함된 Redis 샤드를 사용합니다."
        },
        {
          "k": "C",
          "en": "Use a Multi-AZ Redis cluster with at least two read replicas in the replication group.",
          "ko": "복제 그룹에 두 개 이상의 읽기 전용 복제본이 있는 다중 AZ Redis 클러스터를 사용합니다."
        },
        {
          "k": "D",
          "en": "Use a Redis shard with multiple nodes and enable Auto Scaling.",
          "ko": "Auto Scaling이 활성화된 여러 노드가 포함된 Redis 샤드를 사용합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "A Redis replication group with replicas distributed across Availability Zones and Multi-AZ automatic failover protects against both primary-node and AZ failure while maintaining service availability.",
        "ko": "여러 가용 영역에 복제본을 분산하고 다중 AZ 자동 장애 조치를 사용하는 Redis 복제 그룹은 기본 노드와 AZ 장애 모두로부터 보호하면서 서비스 가용성을 유지합니다."
      },
      "why_wrong": {
        "B": {
          "en": "AOF persistence alone does not provide managed cross-AZ failover or availability.",
          "ko": "AOF 지속성만으로는 관리형 AZ 간 장애 조치나 가용성을 제공하지 못합니다."
        },
        "C": {
          "en": "Read replicas alone are insufficient unless the replication group is configured for the required Multi-AZ automatic failover behavior; the stated cluster wording does not ensure that design.",
          "ko": "읽기 전용 복제본만으로는 필요한 다중 AZ 자동 장애 조치 구성을 보장할 수 없습니다."
        },
        "D": {
          "en": "Auto Scaling addresses capacity, not failover and data durability across Availability Zones.",
          "ko": "Auto Scaling은 용량을 다루며 가용 영역 간 장애 조치와 데이터 내구성을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-594",
      "number": 594,
      "tags": [
        "Amazon EC2",
        "Warm Pool",
        "Hibernation",
        "Auto Scaling",
        "Startup Latency"
      ],
      "question": {
        "en": "A company plans to migrate an application to EC2 On-Demand Instances. Testing shows that loading and running the application in memory until it is fully productive takes a long time. Which solution will shorten startup time in the next test phase?",
        "ko": "회사는 AWS로 마이그레이션하고 애플리케이션에 Amazon EC2 온디맨드 인스턴스를 사용할 계획입니다. 테스트 중 애플리케이션이 완전히 생산될 때까지 메모리에 실행하고 로드하는 데 오랜 시간이 걸립니다. 다음 테스트 단계에서 애플리케이션 실행 시간을 단축할 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Launch at least two On-Demand Instances and enable Auto Scaling for the next test.",
          "ko": "두 개 이상의 EC2 온디맨드 인스턴스를 시작합니다. Auto Scaling 기능을 활성화하고 다음 테스트 단계에서 사용합니다."
        },
        {
          "k": "B",
          "en": "Launch EC2 Spot Instances and scale the application for the next test.",
          "ko": "EC2 스팟 인스턴스를 시작하여 애플리케이션을 지원하고 다음 테스트 단계에서 사용할 수 있도록 애플리케이션을 확장합니다."
        },
        {
          "k": "C",
          "en": "Launch an On-Demand Instance with hibernation enabled and configure an EC2 Auto Scaling warm pool for the next test.",
          "ko": "최대 절전 모드를 활성화한 상태에서 EC2 온디맨드 인스턴스를 시작합니다. 다음 테스트 단계에서 EC2 Auto Scaling 웜 풀을 구성합니다."
        },
        {
          "k": "D",
          "en": "Launch an On-Demand Instance through a Capacity Reservation and launch more instances for the next test.",
          "ko": "용량 예약을 통해 EC2 온디맨드 인스턴스를 시작합니다. 다음 테스트 단계에서 추가 EC2 인스턴스를 시작합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "A warm pool keeps pre-initialized instances ready. Hibernation preserves the in-memory application state, so instances can resume far faster than performing the full initialization again.",
        "ko": "웜 풀은 사전 초기화된 인스턴스를 준비 상태로 유지합니다. 최대 절전 모드는 메모리의 애플리케이션 상태를 보존하므로 전체 초기화를 다시 수행하는 것보다 훨씬 빠르게 재개할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Adding ordinary running instances does not eliminate the lengthy initialization process for newly launched capacity.",
          "ko": "일반 실행 인스턴스를 추가해도 새 용량의 긴 초기화 과정은 없어지지 않습니다."
        },
        "B": {
          "en": "Spot pricing changes cost and interruption characteristics but does not reduce application initialization time.",
          "ko": "스팟 요금은 비용과 중단 특성을 바꾸지만 애플리케이션 초기화 시간을 줄이지 않습니다."
        },
        "D": {
          "en": "A Capacity Reservation ensures capacity availability; it does not preserve initialized memory state.",
          "ko": "용량 예약은 용량 가용성을 보장하지만 초기화된 메모리 상태를 보존하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-595",
      "number": 595,
      "tags": [
        "EC2 Auto Scaling",
        "Dynamic Scaling",
        "Unpredictable Traffic",
        "Performance",
        "Cost Optimization"
      ],
      "question": {
        "en": "An application runs on EC2 instances in an Auto Scaling group and experiences sudden traffic increases on unpredictable days. The company wants to maintain performance during these increases cost-effectively. Which scaling method should be used?",
        "ko": "회사의 애플리케이션은 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 일주일 중 임의의 요일에 갑작스러운 트래픽 증가를 경험합니다. 회사는 갑작스러운 트래픽 증가 중에도 애플리케이션 성능을 비용 효율적으로 유지하려고 합니다. 어떤 조정 방식을 사용해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use manual scaling to change the Auto Scaling group size.",
          "ko": "Auto Scaling 그룹의 크기를 변경하려면 수동 스케일링을 사용하십시오."
        },
        {
          "k": "B",
          "en": "Use predictive scaling to change the Auto Scaling group size.",
          "ko": "예측 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다."
        },
        {
          "k": "C",
          "en": "Use dynamic scaling to change the Auto Scaling group size.",
          "ko": "동적 스케일링을 사용하여 Auto Scaling 그룹의 크기를 변경합니다."
        },
        {
          "k": "D",
          "en": "Use scheduled scaling to change the Auto Scaling group size.",
          "ko": "일정 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Dynamic scaling responds to live metrics and adds or removes capacity as unpredictable demand changes, preserving performance without keeping excess instances running.",
        "ko": "동적 스케일링은 실시간 지표에 반응하여 예측할 수 없는 수요 변화에 맞춰 용량을 추가하거나 제거하므로 과도한 인스턴스를 상시 실행하지 않고 성능을 유지합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Manual scaling cannot react quickly and reliably to sudden demand.",
          "ko": "수동 조정은 갑작스러운 수요에 빠르고 안정적으로 대응할 수 없습니다."
        },
        "B": {
          "en": "Predictive scaling depends on a forecastable recurring pattern, which the scenario does not provide.",
          "ko": "예측 조정은 예측 가능한 반복 패턴이 필요하지만 이 상황에는 그런 패턴이 없습니다."
        },
        "D": {
          "en": "Scheduled scaling requires known times and cannot address random traffic spikes.",
          "ko": "일정 조정은 정해진 시간이 필요하므로 무작위 트래픽 급증에 대응하지 못합니다."
        }
      }
    },
    {
      "id": "exam12-596",
      "number": 596,
      "tags": [
        "Amazon Aurora Serverless v2",
        "PostgreSQL",
        "Auto Scaling",
        "Unpredictable Workload",
        "Cost Optimization"
      ],
      "question": {
        "en": "An ecommerce application uses a PostgreSQL database on EC2. Unpredictable traffic spikes during monthly sales events cause database connection problems. The company must maintain performance during future unpredictable increases cost-effectively. Which solution meets these requirements?",
        "ko": "전자상거래 애플리케이션은 Amazon EC2 인스턴스에서 실행되는 PostgreSQL 데이터베이스를 사용합니다. 월별 판매 이벤트 중 데이터베이스 사용량이 증가하고 연결 문제가 발생합니다. 후속 이벤트 트래픽은 예측할 수 없습니다. 예측할 수 없는 트래픽 증가가 있을 때 성능을 유지하는 가장 비용 효과적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Migrate the PostgreSQL database to Amazon Aurora Serverless v2.",
          "ko": "PostgreSQL 데이터베이스를 Amazon Aurora Serverless v2로 마이그레이션합니다."
        },
        {
          "k": "B",
          "en": "Enable automatic instance sizing for the PostgreSQL database on EC2.",
          "ko": "증가된 사용량을 수용하기 위해 EC2 인스턴스의 PostgreSQL 데이터베이스에 대한 자동 크기 조정을 활성화합니다."
        },
        {
          "k": "C",
          "en": "Migrate the PostgreSQL database to Amazon RDS for PostgreSQL using a larger instance type.",
          "ko": "더 큰 인스턴스 유형을 사용하여 PostgreSQL 데이터베이스를 PostgreSQL용 Amazon RDS로 마이그레이션합니다."
        },
        {
          "k": "D",
          "en": "Migrate the PostgreSQL database to Amazon Redshift.",
          "ko": "증가된 사용량을 수용하기 위해 PostgreSQL 데이터베이스를 Amazon Redshift로 마이그레이션합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Aurora Serverless v2 is PostgreSQL-compatible and automatically adjusts database capacity in fine-grained increments for sudden, unpredictable demand, then scales down to control cost.",
        "ko": "Aurora Serverless v2는 PostgreSQL과 호환되며 갑작스럽고 예측할 수 없는 수요에 맞춰 데이터베이스 용량을 세밀하게 자동 조정하고 이후 축소하여 비용을 관리합니다."
      },
      "why_wrong": {
        "B": {
          "en": "A self-managed PostgreSQL process on EC2 has no native automatic instance resizing feature.",
          "ko": "EC2에서 자체 관리하는 PostgreSQL에는 네이티브 자동 인스턴스 크기 조정 기능이 없습니다."
        },
        "C": {
          "en": "A permanently larger RDS instance is less cost-effective and still has fixed compute capacity.",
          "ko": "상시 더 큰 RDS 인스턴스는 비용 효율이 낮고 컴퓨팅 용량도 고정됩니다."
        },
        "D": {
          "en": "Redshift is an analytics data warehouse, not a replacement for the transactional application database.",
          "ko": "Redshift는 분석용 데이터 웨어하우스이며 트랜잭션 애플리케이션 데이터베이스를 대체하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-597",
      "number": 597,
      "tags": [
        "AWS Lambda",
        "Provisioned Concurrency",
        "Scheduled Scaling",
        "Cold Start",
        "Amazon API Gateway"
      ],
      "question": {
        "en": "A company hosts an internal serverless application with API Gateway and Lambda. Employees experience long wait times when they begin using the application each morning. Which solution reduces the wait time?",
        "ko": "회사는 Amazon API Gateway 및 AWS Lambda를 사용하여 AWS에서 내부 서버리스 애플리케이션을 호스팅합니다. 회사 직원들은 매일 아침 애플리케이션을 사용하기 시작할 때 대기 시간이 길어지는 문제를 보고합니다. 회사는 대기 시간을 줄이고 싶어합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Increase the API Gateway throttling limit.",
          "ko": "API 게이트웨이 조절 한도를 늘리십시오."
        },
        {
          "k": "B",
          "en": "Configure scheduled scaling to increase Lambda provisioned concurrency before employees use the application each day.",
          "ko": "직원이 매일 애플리케이션을 사용하기 전에 Lambda 프로비저닝 동시성을 높이기 위해 예약된 조정을 설정합니다."
        },
        {
          "k": "C",
          "en": "Create a CloudWatch alarm that invokes the Lambda function at the start of each day.",
          "ko": "Amazon CloudWatch 경보를 생성하여 매일 시작 시 경보 대상으로 Lambda 함수를 시작합니다."
        },
        {
          "k": "D",
          "en": "Increase the Lambda function memory.",
          "ko": "Lambda 함수 메모리를 늘립니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Provisioned concurrency initializes execution environments in advance. Scheduled scaling raises that concurrency before the predictable morning demand and reduces cold-start latency.",
        "ko": "프로비저닝된 동시성은 실행 환경을 미리 초기화합니다. 예약 조정으로 예측 가능한 아침 수요 전에 동시성을 높이면 콜드 스타트 지연이 줄어듭니다."
      },
      "why_wrong": {
        "A": {
          "en": "Throttling limits control request rate and do not pre-initialize Lambda environments.",
          "ko": "조절 한도는 요청 속도를 제어하며 Lambda 환경을 미리 초기화하지 않습니다."
        },
        "C": {
          "en": "A single scheduled invocation does not guarantee enough warm execution environments for employee concurrency.",
          "ko": "예약 호출 한 번으로는 직원의 동시 요청에 필요한 충분한 실행 환경이 준비된다고 보장할 수 없습니다."
        },
        "D": {
          "en": "More memory may speed execution but does not reliably remove initialization latency.",
          "ko": "메모리를 늘리면 실행은 빨라질 수 있지만 초기화 지연을 안정적으로 제거하지는 못합니다."
        }
      }
    },
    {
      "id": "exam12-598",
      "number": 598,
      "tags": [
        "AWS Storage Gateway",
        "S3 File Gateway",
        "AWS Glue",
        "Amazon Athena",
        "Serverless Analytics",
        "SMB"
      ],
      "question": {
        "en": "An on-premises research device creates CSV files and writes them to an SMB share. The company wants to analyze the data in AWS with SQL queries run periodically throughout the day. Which three steps provide the most cost-effective solution? (Choose three.)",
        "ko": "연구 회사에서는 온프레미스 장치를 사용하여 분석용 데이터를 생성합니다. 장치는 .csv 파일을 생성하고 SMB 파일 공유에 데이터를 씁니다. 회사는 AWS 클라우드를 사용하여 데이터를 분석하려고 합니다. 분석가는 SQL 명령을 사용하여 데이터를 쿼리할 수 있어야 하며 하루 종일 주기적으로 쿼리를 실행합니다. 가장 비용 효율적인 단계 조합은 무엇입니까? (3개 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Deploy AWS Storage Gateway on premises in Amazon S3 File Gateway mode.",
          "ko": "Amazon S3 파일 게이트웨이 모드로 온프레미스에 AWS Storage Gateway를 배포합니다."
        },
        {
          "k": "B",
          "en": "Deploy AWS Storage Gateway on premises through Amazon FSx File Gateway.",
          "ko": "Amazon FSx File Gateway를 통해 온프레미스에 AWS Storage Gateway를 배포합니다."
        },
        {
          "k": "C",
          "en": "Configure an AWS Glue crawler to create a table based on the data in Amazon S3.",
          "ko": "Amazon S3에 있는 데이터를 기반으로 테이블을 생성하도록 AWS Glue 크롤러를 설정합니다."
        },
        {
          "k": "D",
          "en": "Configure an Amazon EMR cluster with EMRFS to query the S3 data and grant analysts access.",
          "ko": "EMRFS를 사용하는 Amazon EMR 클러스터를 설정하여 Amazon S3에 있는 데이터를 쿼리하고 분석가에게 액세스를 제공합니다."
        },
        {
          "k": "E",
          "en": "Configure an Amazon Redshift cluster to query the S3 data and grant analysts access.",
          "ko": "Amazon S3에 있는 데이터를 쿼리하도록 Amazon Redshift 클러스터를 설정하고 분석가에게 액세스를 제공합니다."
        },
        {
          "k": "F",
          "en": "Configure Amazon Athena to query the S3 data and grant analysts access.",
          "ko": "Amazon S3에 있는 데이터를 쿼리하도록 Amazon Athena를 설정하고 분석가에게 액세스를 제공합니다."
        }
      ],
      "answer": [
        "A",
        "C",
        "F"
      ],
      "explanation": {
        "en": "S3 File Gateway exposes an SMB share and stores the files as S3 objects. A Glue crawler catalogs the CSV schema, and serverless Athena runs SQL directly against S3 with pay-per-query pricing.",
        "ko": "S3 File Gateway는 SMB 공유를 제공하고 파일을 S3 객체로 저장합니다. Glue 크롤러가 CSV 스키마를 카탈로그화하고 서버리스 Athena가 쿼리당 요금으로 S3를 직접 SQL 쿼리합니다."
      },
      "why_wrong": {
        "B": {
          "en": "FSx File Gateway serves Amazon FSx for Windows File Server and does not create the required S3 object analytics path.",
          "ko": "FSx File Gateway는 Amazon FSx for Windows File Server를 제공하며 필요한 S3 객체 분석 경로를 만들지 않습니다."
        },
        "D": {
          "en": "An EMR cluster adds continuously managed compute for a workload that Athena can serve without servers.",
          "ko": "EMR 클러스터는 Athena가 서버 없이 처리할 수 있는 워크로드에 관리형 컴퓨팅 부담을 추가합니다."
        },
        "E": {
          "en": "A Redshift cluster is unnecessary and more expensive for periodic queries over CSV files in S3.",
          "ko": "Redshift 클러스터는 S3의 CSV 파일을 주기적으로 쿼리하는 데 불필요하고 비용이 더 큽니다."
        }
      }
    },
    {
      "id": "exam12-599",
      "number": 599,
      "tags": [
        "AWS Outposts",
        "Shared Responsibility Model",
        "Hybrid Cloud",
        "Physical Security",
        "Capacity Planning"
      ],
      "question": {
        "en": "A company is building a payment-processing application with an Amazon ECS cluster and Amazon RDS DB instances. Compliance requires the application to run in its on-premises data center, so the architect will use AWS Outposts. Which three activities are the company's operations team responsible for? (Choose three.)",
        "ko": "한 회사에서 Amazon ECS 클러스터와 Amazon RDS DB 인스턴스를 사용하여 결제 처리 애플리케이션을 구축하고 실행하려고 합니다. 회사는 규정 준수를 위해 온프레미스 데이터 센터에서 애플리케이션을 실행합니다. 솔루션 아키텍트는 AWS Outposts를 솔루션의 일부로 사용하려고 합니다. 회사 운영팀에서는 어떤 활동을 담당하나요? (3개를 선택하세요.)"
      },
      "options": [
        {
          "k": "A",
          "en": "Provide resilient power and network connectivity to the Outposts rack.",
          "ko": "Outposts 랙에 탄력적인 전원 및 네트워크 연결을 제공합니다."
        },
        {
          "k": "B",
          "en": "Manage the virtualized hypervisor, storage systems, and AWS services that run on Outposts.",
          "ko": "Outposts에서 실행되는 가상화 하이퍼바이저, 스토리지 시스템 및 AWS 서비스를 관리합니다."
        },
        {
          "k": "C",
          "en": "Provide physical security and access controls for the data center environment.",
          "ko": "데이터 센터 환경의 물리적 보안 및 액세스 제어를 제공합니다."
        },
        {
          "k": "D",
          "en": "Ensure availability of Outposts infrastructure, including power supplies, rack servers, and networking equipment within the rack.",
          "ko": "Outposts 랙 내의 전원 공급 장치, 서버 및 네트워킹 장비를 포함한 Outposts 인프라의 가용성을 보장합니다."
        },
        {
          "k": "E",
          "en": "Perform physical maintenance of Outposts components.",
          "ko": "Outposts 구성 요소의 물리적 유지 관리를 수행합니다."
        },
        {
          "k": "F",
          "en": "Provide additional capacity in the Amazon ECS cluster to mitigate server failures and maintenance events.",
          "ko": "서버 오류 및 유지 관리 이벤트를 완화하기 위해 Amazon ECS 클러스터에 추가 용량을 제공합니다."
        }
      ],
      "answer": [
        "A",
        "C",
        "F"
      ],
      "explanation": {
        "en": "Under the Outposts shared responsibility model, the customer supplies resilient facility power and networking, controls physical access to the site, and plans enough application capacity to tolerate server failures and maintenance. AWS operates and maintains the rack infrastructure and managed AWS services.",
        "ko": "Outposts 공동 책임 모델에서 고객은 시설의 이중화 전원과 네트워크를 제공하고 현장의 물리적 접근을 통제하며 서버 장애와 유지보수를 견딜 애플리케이션 여유 용량을 계획합니다. AWS는 랙 인프라와 관리형 AWS 서비스를 운영하고 유지합니다."
      },
      "why_wrong": {
        "B": {
          "en": "AWS manages the Outposts hypervisor, storage systems, and AWS services.",
          "ko": "Outposts 하이퍼바이저, 스토리지 시스템 및 AWS 서비스는 AWS가 관리합니다."
        },
        "D": {
          "en": "AWS is responsible for availability of the Outposts infrastructure inside the rack, including power supplies, servers, and networking equipment.",
          "ko": "랙 내부의 전원 공급 장치, 서버 및 네트워킹 장비를 포함한 Outposts 인프라 가용성은 AWS 책임입니다."
        },
        "E": {
          "en": "AWS performs maintenance and replacement of Outposts equipment.",
          "ko": "Outposts 장비의 유지보수와 교체는 AWS가 수행합니다."
        }
      }
    },
    {
      "id": "exam12-600",
      "number": 600,
      "tags": [
        "Network Load Balancer",
        "TCP",
        "High Throughput",
        "Low Latency",
        "Elastic Load Balancing"
      ],
      "question": {
        "en": "A company will migrate a TCP-based application to a VPC. Its public endpoint uses nonstandard TCP ports, has low-latency bursts of up to 3 million requests per second, and requires the same performance on AWS. What should a solutions architect recommend?",
        "ko": "회사는 TCP 기반 애플리케이션을 회사의 VPC로 마이그레이션할 계획입니다. 애플리케이션은 회사 데이터 센터의 하드웨어 어플라이언스를 통해 비표준 TCP 포트에서 공개적으로 액세스할 수 있습니다. 이 퍼블릭 엔드포인트는 짧은 대기 시간으로 초당 최대 300만 개의 요청을 처리할 수 있습니다. 회사는 AWS의 새 퍼블릭 엔드포인트에 대해 동일한 수준의 성능을 요구합니다. 무엇을 권장해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Deploy a Network Load Balancer and configure listeners for the application's required TCP ports.",
          "ko": "NLB(Network Load Balancer)를 배포합니다. 애플리케이션에 필요한 TCP 포트를 통해 공개적으로 액세스할 수 있도록 NLB를 구성합니다."
        },
        {
          "k": "B",
          "en": "Deploy an Application Load Balancer and configure it for the application's required TCP ports.",
          "ko": "ALB(Application Load Balancer)를 배포합니다. 애플리케이션에 필요한 TCP 포트를 통해 공개적으로 액세스할 수 있도록 ALB를 구성합니다."
        },
        {
          "k": "C",
          "en": "Deploy a CloudFront distribution that receives the required TCP ports and uses an Application Load Balancer as its origin.",
          "ko": "애플리케이션에 필요한 TCP 포트를 수신하는 Amazon CloudFront 배포를 배포합니다. Application Load Balancer를 원본으로 사용합니다."
        },
        {
          "k": "D",
          "en": "Deploy an API Gateway API on the required TCP ports and use provisioned concurrency for Lambda processing.",
          "ko": "애플리케이션에 필요한 TCP 포트로 구성된 Amazon API Gateway API를 배포합니다. 요청을 처리하기 위해 프로비저닝된 동시성을 사용하여 AWS Lambda 함수를 구성합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "A Network Load Balancer is designed for very high-throughput, low-latency Layer 4 traffic and supports listeners on arbitrary TCP ports, making it suitable for millions of requests per second.",
        "ko": "Network Load Balancer는 처리량이 매우 높고 지연 시간이 짧은 계층 4 트래픽을 위해 설계되며 임의의 TCP 포트 리스너를 지원하므로 초당 수백만 요청에 적합합니다."
      },
      "why_wrong": {
        "B": {
          "en": "An ALB handles HTTP and HTTPS at Layer 7 rather than arbitrary raw TCP protocols.",
          "ko": "ALB는 계층 7의 HTTP와 HTTPS를 처리하며 임의의 원시 TCP 프로토콜용이 아닙니다."
        },
        "C": {
          "en": "CloudFront does not accept arbitrary nonstandard TCP application traffic.",
          "ko": "CloudFront는 임의의 비표준 TCP 애플리케이션 트래픽을 수신하지 않습니다."
        },
        "D": {
          "en": "API Gateway exposes HTTP, WebSocket, and related API protocols, not arbitrary TCP listeners for this throughput requirement.",
          "ko": "API Gateway는 HTTP, WebSocket 등의 API 프로토콜을 제공하며 이 처리량 요구에 맞는 임의 TCP 리스너를 제공하지 않습니다."
        }
      }
    }
  ]
});
