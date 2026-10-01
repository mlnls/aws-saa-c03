/* Exam 14 · Topic 1 · 현재 수록 범위: 651~700번 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  "id": "exam14",
  "title": "Exam 14",
  "note": "Topic 1 · #651–700",
  "questions": [
    {
      "id": "exam12-651",
      "number": 651,
      "tags": [
        "Amazon S3",
        "S3 Lifecycle",
        "S3 Standard-IA",
        "S3 Glacier Instant Retrieval",
        "S3 Glacier Deep Archive",
        "Cost Optimization"
      ],
      "question": {
        "en": "A company stores many images in S3. Images must be readily available for 180 days, are rarely accessed for the next 180 days, must be immediately available after day 360, and after 5 years only auditors access them with retrieval within 12 hours. No image can be lost. Which lifecycle rule is most cost-effective?",
        "ko": "회사는 Amazon S3 버킷에 대량의 이미지 파일을 저장합니다. 이미지는 처음 180일 동안 쉽게 사용할 수 있어야 하고 다음 180일 동안에는 자주 액세스되지 않습니다. 360일 후에는 요청 시 즉시 사용할 수 있어야 하며 5년 후에는 감사자만 액세스하고 12시간 이내에 검색할 수 있어야 합니다. 이미지가 손실되어서는 안 됩니다. 가장 비용 효율적인 S3 수명 주기 규칙은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "After 180 days transition to S3 One Zone-IA, after 360 days to S3 Glacier Instant Retrieval, and after 5 years to S3 Glacier Deep Archive.",
          "ko": "180일 후 S3 One Zone-IA로, 360일 후 S3 Glacier Instant Retrieval로, 5년 후 S3 Glacier Deep Archive로 전환합니다."
        },
        {
          "k": "B",
          "en": "After 180 days transition to S3 One Zone-IA, after 360 days to S3 Glacier Flexible Retrieval, and after 5 years to S3 Glacier Deep Archive.",
          "ko": "180일 후 S3 One Zone-IA로, 360일 후 S3 Glacier Flexible Retrieval로, 5년 후 S3 Glacier Deep Archive로 전환합니다."
        },
        {
          "k": "C",
          "en": "After 180 days transition to S3 Standard-IA, after 360 days to S3 Glacier Instant Retrieval, and after 5 years to S3 Glacier Deep Archive.",
          "ko": "180일 후 S3 Standard-IA로, 360일 후 S3 Glacier Instant Retrieval로, 5년 후 S3 Glacier Deep Archive로 전환합니다."
        },
        {
          "k": "D",
          "en": "After 180 days transition to S3 Standard-IA, after 360 days to S3 Glacier Flexible Retrieval, and after 5 years to S3 Glacier Deep Archive.",
          "ko": "180일 후 S3 Standard-IA로, 360일 후 S3 Glacier Flexible Retrieval로, 5년 후 S3 Glacier Deep Archive로 전환합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Standard-IA retains multi-AZ resilience for infrequent access, Glacier Instant Retrieval provides millisecond access after day 360, and Deep Archive supports low-cost long-term retention with a standard retrieval within 12 hours.",
        "ko": "Standard-IA는 자주 액세스하지 않는 기간에도 다중 AZ 복원력을 유지하고 Glacier Instant Retrieval은 360일 후 밀리초 액세스를 제공하며 Deep Archive는 12시간 이내 표준 검색이 가능한 저비용 장기 보관을 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "One Zone-IA stores data in one AZ and does not meet the no-loss resilience requirement.",
          "ko": "One Zone-IA는 한 AZ에만 저장하므로 데이터 손실 방지 요구에 맞지 않습니다."
        },
        "B": {
          "en": "One Zone-IA lacks multi-AZ resilience, and Flexible Retrieval does not provide immediate access.",
          "ko": "One Zone-IA는 다중 AZ 복원력이 없고 Flexible Retrieval은 즉시 액세스를 제공하지 않습니다."
        },
        "D": {
          "en": "Glacier Flexible Retrieval requires a restore and therefore cannot provide immediate access after day 360.",
          "ko": "Glacier Flexible Retrieval은 복원 절차가 필요하므로 360일 후 즉시 액세스를 제공하지 못합니다."
        }
      }
    },
    {
      "id": "exam12-652",
      "number": 652,
      "tags": [
        "Amazon EMR",
        "EC2 Spot Instances",
        "Transient Cluster",
        "Cost Optimization",
        "Big Data"
      ],
      "question": {
        "en": "A large data workload runs for 6 hours every day and cannot lose data while processing. A solutions architect is designing an Amazon EMR cluster. Which configuration is most cost-effective?",
        "ko": "매일 6시간 동안 실행되는 대규모 데이터 워크로드가 있습니다. 프로세스가 실행되는 동안 데이터가 손실되어서는 안 됩니다. 솔루션 설계자가 이 워크로드를 지원하기 위한 Amazon EMR 클러스터 구성을 설계하고 있습니다. 가장 비용 효율적인 구성은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use On-Demand Instances for primary and core nodes and Spot Instances for task nodes in a long-running cluster.",
          "ko": "온디맨드 인스턴스에서 기본 노드 및 코어 노드를 실행하고 스팟 인스턴스에서 작업 노드를 실행하는 장기 실행 클러스터를 구성합니다."
        },
        {
          "k": "B",
          "en": "Use On-Demand Instances for primary and core nodes and Spot Instances for task nodes in a transient cluster.",
          "ko": "온디맨드 인스턴스에서 기본 노드 및 코어 노드를 실행하고 스팟 인스턴스에서 작업 노드를 실행하는 임시 클러스터를 구성합니다."
        },
        {
          "k": "C",
          "en": "Use an On-Demand Instance for the primary node and Spot Instances for core and task nodes in a transient cluster.",
          "ko": "온디맨드 인스턴스에서 기본 노드를 실행하고 스팟 인스턴스에서 코어 노드 및 작업 노드를 실행하는 임시 클러스터를 구성합니다."
        },
        {
          "k": "D",
          "en": "Use an On-Demand primary node and Spot core and task nodes in a long-running cluster.",
          "ko": "온디맨드 인스턴스의 기본 노드와 스팟 인스턴스의 코어 노드 및 작업 노드를 실행하는 장기 실행 클러스터를 구성합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "A transient cluster exists only for the daily job. On-Demand primary and core nodes protect cluster control and HDFS data, while interruptible task nodes can use cheaper Spot capacity.",
        "ko": "임시 클러스터는 매일 작업을 수행할 때만 존재합니다. 온디맨드 기본 및 코어 노드는 클러스터 제어와 HDFS 데이터를 보호하고 중단 가능한 작업 노드는 저렴한 스팟 용량을 사용할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A long-running cluster incurs charges during the 18 hours each day when no work runs.",
          "ko": "장기 실행 클러스터는 매일 작업이 없는 18시간에도 비용이 발생합니다."
        },
        "C": {
          "en": "Spot core nodes can be interrupted while holding HDFS data, violating the no-data-loss requirement.",
          "ko": "스팟 코어 노드는 HDFS 데이터를 보유한 채 중단될 수 있어 데이터 무손실 요구를 위반합니다."
        },
        "D": {
          "en": "It combines unnecessary idle cost with the data-loss risk of Spot core nodes.",
          "ko": "불필요한 유휴 비용과 스팟 코어 노드의 데이터 손실 위험을 모두 가집니다."
        }
      }
    },
    {
      "id": "exam12-653",
      "number": 653,
      "tags": [
        "Amazon RDS for MySQL",
        "Amazon S3",
        "Amazon Athena",
        "Reporting",
        "Serverless Analytics"
      ],
      "question": {
        "en": "A company migrated MySQL to Amazon RDS and sized the instance for its average daily workload. A monthly reporting query slows the database. The company wants to run reports while preserving daily workload performance. Which solution meets the requirements?",
        "ko": "회사가 온프레미스 데이터 센터의 MySQL 데이터베이스를 MySQL용 Amazon RDS로 마이그레이션했습니다. RDS DB 인스턴스는 평균 일일 워크로드에 맞게 조정되었습니다. 한 달에 한 번 보고서 쿼리를 실행할 때 데이터베이스 성능이 느려집니다. 보고서를 실행하면서 일일 워크로드 성능을 유지하려면 어떻게 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a read replica and send the reporting query to it.",
          "ko": "데이터베이스의 읽기 전용 복제본을 생성하고 보고서 쿼리를 읽기 전용 복제본으로 보냅니다."
        },
        {
          "k": "B",
          "en": "Create a backup, restore it to another DB instance, and send the query to the new database.",
          "ko": "데이터베이스 백업을 생성하고 다른 DB 인스턴스로 복원한 뒤 쿼리를 새 데이터베이스로 보냅니다."
        },
        {
          "k": "C",
          "en": "Export the data to Amazon S3 and query the S3 bucket with Amazon Athena.",
          "ko": "데이터를 Amazon S3로 내보내고 Amazon Athena를 사용하여 S3 버킷을 쿼리합니다."
        },
        {
          "k": "D",
          "en": "Resize the DB instance to absorb the additional workload.",
          "ko": "추가 워크로드를 수용하도록 DB 인스턴스의 크기를 조정합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Exporting report data to S3 and querying it with serverless Athena removes the monthly analytical load from RDS and avoids continuously running another database instance.",
        "ko": "보고서 데이터를 S3로 내보내 서버리스 Athena로 쿼리하면 월별 분석 부하를 RDS에서 분리하고 다른 데이터베이스 인스턴스를 계속 실행할 필요가 없습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A continuously running read replica adds recurring cost and management for a monthly query.",
          "ko": "상시 읽기 복제본은 월 1회 쿼리를 위해 지속 비용과 관리 부담을 추가합니다."
        },
        "B": {
          "en": "Monthly backup restoration adds manual workflow and temporary database cost.",
          "ko": "매월 백업을 복원하면 수동 작업과 임시 데이터베이스 비용이 생깁니다."
        },
        "D": {
          "en": "Upsizing the production database charges for excess capacity throughout the month.",
          "ko": "프로덕션 데이터베이스를 확장하면 한 달 내내 초과 용량 비용을 지불합니다."
        }
      }
    },
    {
      "id": "exam12-654",
      "number": 654,
      "tags": [
        "Amazon Aurora MySQL",
        "Amazon RDS Proxy",
        "Connection Pooling",
        "High Availability",
        "Failover"
      ],
      "question": {
        "en": "An Aurora MySQL platform has multiple readers across Availability Zones and several DB instances. Users report too many connections. The company also wants to reduce failover time by 20% when a reader is promoted. Which solution meets the requirements?",
        "ko": "회사의 데이터 플랫폼은 Amazon Aurora MySQL 데이터베이스를 사용합니다. 데이터베이스에는 여러 가용 영역에 걸쳐 여러 읽기 전용 복제본과 여러 DB 인스턴스가 있습니다. 사용자는 최근 데이터베이스에서 너무 많은 연결이 있음을 나타내는 오류를 보고했습니다. 읽기 복제본이 기본 작성자로 승격될 때 장애 조치 시간도 20% 줄이려고 합니다. 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Convert from Aurora to Amazon RDS with a Multi-AZ cluster deployment.",
          "ko": "다중 AZ 클러스터 배포를 통해 Aurora에서 Amazon RDS로 전환합니다."
        },
        {
          "k": "B",
          "en": "Use Amazon RDS Proxy in front of the Aurora database.",
          "ko": "Aurora 데이터베이스 앞에서 Amazon RDS Proxy를 사용합니다."
        },
        {
          "k": "C",
          "en": "Convert to Amazon DynamoDB with DAX for read connections.",
          "ko": "읽기 연결을 위해 DAX가 있는 Amazon DynamoDB로 전환합니다."
        },
        {
          "k": "D",
          "en": "Convert to Amazon Redshift with relocation enabled.",
          "ko": "재배치 기능이 있는 Amazon Redshift로 전환합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "RDS Proxy pools and reuses database connections, reducing connection pressure. It detects failovers and routes traffic to the new writer while preserving application connections, improving recovery time.",
        "ko": "RDS Proxy는 데이터베이스 연결을 풀링하고 재사용하여 연결 부하를 줄입니다. 장애 조치를 감지하고 애플리케이션 연결을 유지하면서 새 작성자로 트래픽을 라우팅하므로 복구 시간이 단축됩니다."
      },
      "why_wrong": {
        "A": {
          "en": "Changing database deployment does not directly solve application connection pooling and adds migration work.",
          "ko": "데이터베이스 배포 변경은 애플리케이션 연결 풀링을 직접 해결하지 못하고 마이그레이션 작업을 추가합니다."
        },
        "C": {
          "en": "DynamoDB is a different NoSQL data model and DAX is not a proxy for Aurora connections.",
          "ko": "DynamoDB는 다른 NoSQL 데이터 모델이며 DAX는 Aurora 연결 프록시가 아닙니다."
        },
        "D": {
          "en": "Redshift is an analytical warehouse rather than a replacement for this transactional Aurora workload.",
          "ko": "Redshift는 분석용 데이터 웨어하우스이며 이 트랜잭션 Aurora 워크로드의 대체재가 아닙니다."
        }
      }
    },
    {
      "id": "exam12-655",
      "number": 655,
      "tags": [
        "AWS Lambda",
        "Amazon S3",
        "Serverless",
        "IoT",
        "Cost Optimization"
      ],
      "question": {
        "en": "An IoT company collects about 2 MB of sleep-sensor data per mattress each night in S3. Processing needs 1 GB of memory, finishes within 30 seconds, and results must be available quickly. Which solution is most cost-effective?",
        "ko": "IoT 회사가 사용자의 수면 데이터를 수집하는 센서가 있는 매트리스를 출시합니다. 센서는 데이터를 Amazon S3 버킷으로 보내며 각 매트리스에서 매일 밤 약 2MB를 수집합니다. 회사는 데이터를 처리하고 요약해야 하며 결과는 가능한 한 빨리 사용할 수 있어야 합니다. 처리에는 1GB 메모리가 필요하고 30초 이내에 완료됩니다. 가장 비용 효율적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use AWS Glue with Scalajob.",
          "ko": "Scalajob과 함께 AWS Glue를 사용합니다."
        },
        {
          "k": "B",
          "en": "Use Amazon EMR with an Apache Spark script.",
          "ko": "Apache Spark 스크립트와 함께 Amazon EMR을 사용합니다."
        },
        {
          "k": "C",
          "en": "Use AWS Lambda with a Python script.",
          "ko": "Python 스크립트와 함께 AWS Lambda를 사용합니다."
        },
        {
          "k": "D",
          "en": "Use AWS Glue with a PySpark job.",
          "ko": "PySpark 작업과 함께 AWS Glue를 사용합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Lambda can be invoked by each S3 object, supplies the required memory and runtime, scales automatically, and charges only for invocations and execution duration.",
        "ko": "Lambda는 각 S3 객체로 호출할 수 있고 필요한 메모리와 실행 시간을 지원하며 자동 확장되고 호출 및 실행 시간에 대해서만 과금됩니다."
      },
      "why_wrong": {
        "A": {
          "en": "A distributed Glue job has excessive startup and processing overhead for each 2 MB input.",
          "ko": "분산 Glue 작업은 2MB 입력마다 과도한 시작 및 처리 오버헤드가 있습니다."
        },
        "B": {
          "en": "An EMR cluster is unnecessarily expensive and operationally heavy for short small-file processing.",
          "ko": "EMR 클러스터는 짧은 소용량 파일 처리에 불필요하게 비싸고 운영 부담이 큽니다."
        },
        "D": {
          "en": "PySpark on Glue is intended for larger ETL jobs and has more startup overhead than Lambda.",
          "ko": "Glue의 PySpark는 더 큰 ETL 작업용이며 Lambda보다 시작 오버헤드가 큽니다."
        }
      }
    },
    {
      "id": "exam12-656",
      "number": 656,
      "tags": [
        "AWS ParallelCluster",
        "MPI",
        "High Performance Computing",
        "Amazon EC2",
        "Distributed Computing"
      ],
      "question": {
        "en": "A company wants to improve fraud prevention and detection with HPC and AI. It needs distributed processing to finish a single workload as quickly as possible. Which solution meets the requirements?",
        "ko": "회사에서 고성능 컴퓨팅 및 인공 지능을 사용하여 사기 방지 및 감지 기술을 개선하려고 합니다. 회사는 가능한 한 빨리 단일 워크로드를 완료하기 위해 분산 처리가 필요합니다. 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use Amazon EKS and multiple containers.",
          "ko": "Amazon EKS 및 여러 컨테이너를 사용합니다."
        },
        {
          "k": "B",
          "en": "Use AWS ParallelCluster and an MPI library.",
          "ko": "AWS ParallelCluster 및 MPI(Message Passing Interface) 라이브러리를 사용합니다."
        },
        {
          "k": "C",
          "en": "Use an Application Load Balancer and Amazon EC2 instances.",
          "ko": "Application Load Balancer 및 Amazon EC2 인스턴스를 사용합니다."
        },
        {
          "k": "D",
          "en": "Use AWS Lambda functions.",
          "ko": "AWS Lambda 함수를 사용합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "ParallelCluster provisions and manages HPC clusters, while MPI coordinates low-latency communication and work across processes so one tightly coupled workload can run in parallel.",
        "ko": "ParallelCluster는 HPC 클러스터를 프로비저닝하고 관리하며 MPI는 프로세스 간 저지연 통신과 작업을 조정하여 하나의 긴밀히 결합된 워크로드를 병렬 실행합니다."
      },
      "why_wrong": {
        "A": {
          "en": "EKS can schedule containers but does not by itself provide the tightly coupled MPI HPC environment requested.",
          "ko": "EKS는 컨테이너를 예약할 수 있지만 요청된 긴밀히 결합된 MPI HPC 환경을 자체 제공하지 않습니다."
        },
        "C": {
          "en": "An ALB distributes independent requests and does not coordinate parallel processes for one workload.",
          "ko": "ALB는 독립 요청을 분산하며 하나의 워크로드에 대한 병렬 프로세스를 조정하지 않습니다."
        },
        "D": {
          "en": "Lambda is designed for independent short-lived functions, not tightly coupled MPI computation.",
          "ko": "Lambda는 독립적인 단기 함수용이며 긴밀히 결합된 MPI 계산용이 아닙니다."
        }
      }
    },
    {
      "id": "exam12-657",
      "number": 657,
      "tags": [
        "Amazon EKS",
        "AWS Load Balancer Controller",
        "Application Load Balancer",
        "Microservices",
        "Kubernetes Ingress"
      ],
      "question": {
        "en": "A company runs a container application on Amazon EKS. The application contains customer and order microservices, and incoming requests must be routed to the correct microservice. Which solution is most cost-effective?",
        "ko": "회사는 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용하여 컨테이너 애플리케이션을 실행합니다. 애플리케이션에는 고객을 관리하고 주문하는 마이크로서비스가 포함되어 있습니다. 들어오는 요청을 적절한 마이크로서비스로 라우팅해야 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use AWS Load Balancer Controller to provision a Network Load Balancer.",
          "ko": "AWS Load Balancer Controller를 사용하여 Network Load Balancer를 프로비저닝합니다."
        },
        {
          "k": "B",
          "en": "Use AWS Load Balancer Controller to provision an Application Load Balancer.",
          "ko": "AWS Load Balancer Controller를 사용하여 Application Load Balancer를 프로비저닝합니다."
        },
        {
          "k": "C",
          "en": "Use a Lambda function to connect requests to Amazon EKS.",
          "ko": "AWS Lambda 함수를 사용하여 요청을 Amazon EKS에 연결합니다."
        },
        {
          "k": "D",
          "en": "Use Amazon API Gateway to connect requests to Amazon EKS.",
          "ko": "Amazon API Gateway를 사용하여 요청을 Amazon EKS에 연결합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "The AWS Load Balancer Controller creates an ALB from Kubernetes Ingress resources. One ALB can use host- or path-based rules to route requests to multiple EKS microservices.",
        "ko": "AWS Load Balancer Controller는 Kubernetes Ingress 리소스에서 ALB를 생성합니다. 하나의 ALB가 호스트 또는 경로 기반 규칙으로 여러 EKS 마이크로서비스에 요청을 라우팅할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "An NLB provides Layer 4 routing and cannot route HTTP requests by host or path to the microservices.",
          "ko": "NLB는 계층 4 라우팅을 제공하며 호스트나 경로에 따라 HTTP 요청을 마이크로서비스로 라우팅하지 못합니다."
        },
        "C": {
          "en": "Lambda adds an unnecessary request proxy and does not provide native Kubernetes ingress routing.",
          "ko": "Lambda는 불필요한 요청 프록시를 추가하며 기본 Kubernetes 인그레스 라우팅을 제공하지 않습니다."
        },
        "D": {
          "en": "API Gateway can front services but adds per-request cost and complexity when ALB Ingress directly meets the requirement.",
          "ko": "API Gateway도 서비스를 연결할 수 있지만 ALB Ingress가 직접 요구를 충족하는 상황에서 요청별 비용과 복잡성을 추가합니다."
        }
      }
    },
    {
      "id": "exam12-658",
      "number": 658,
      "tags": [
        "Amazon EC2 Auto Scaling",
        "Application Load Balancer",
        "Amazon RDS Multi-AZ",
        "Migration",
        "High Availability",
        "Choose two"
      ],
      "question": {
        "en": "A company is migrating a multi-tier on-premises application with a single-node MySQL database and multi-node web tier. It wants minimal application changes during migration and improved resilience afterward. Which two steps meet the requirements? (Choose two.)",
        "ko": "회사가 다중 계층 온프레미스 애플리케이션을 AWS로 마이그레이션하고 있습니다. 애플리케이션은 단일 노드 MySQL 데이터베이스와 다중 노드 웹 계층으로 구성됩니다. 마이그레이션 중 애플리케이션 변경을 최소화하고 마이그레이션 후 애플리케이션 복원성을 개선하려고 합니다. 요구 사항을 충족하는 단계 조합은 무엇입니까? (두 가지 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Migrate the web tier to EC2 instances in an Auto Scaling group behind an Application Load Balancer.",
          "ko": "웹 계층을 Application Load Balancer 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스로 마이그레이션합니다."
        },
        {
          "k": "B",
          "en": "Migrate the database to EC2 instances in an Auto Scaling group behind a Network Load Balancer.",
          "ko": "데이터베이스를 Network Load Balancer 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스로 마이그레이션합니다."
        },
        {
          "k": "C",
          "en": "Migrate the database to an Amazon RDS Multi-AZ deployment.",
          "ko": "데이터베이스를 Amazon RDS 다중 AZ 배포로 마이그레이션합니다."
        },
        {
          "k": "D",
          "en": "Migrate the web tier to AWS Lambda functions.",
          "ko": "웹 계층을 AWS Lambda 함수로 마이그레이션합니다."
        },
        {
          "k": "E",
          "en": "Migrate the database to an Amazon DynamoDB table.",
          "ko": "데이터베이스를 Amazon DynamoDB 테이블로 마이그레이션합니다."
        }
      ],
      "answer": [
        "A",
        "C"
      ],
      "explanation": {
        "en": "An ALB and multi-AZ Auto Scaling group improve web-tier availability with little code change. RDS for MySQL Multi-AZ preserves relational compatibility and adds synchronous standby failover.",
        "ko": "ALB와 다중 AZ Auto Scaling 그룹은 코드 변경을 거의 하지 않고 웹 계층 가용성을 높입니다. RDS for MySQL 다중 AZ는 관계형 호환성을 유지하면서 동기식 대기 인스턴스 장애 조치를 제공합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Auto Scaling independent MySQL EC2 nodes does not create a consistent highly available relational database.",
          "ko": "독립 MySQL EC2 노드를 Auto Scaling해도 일관된 고가용성 관계형 데이터베이스가 만들어지지 않습니다."
        },
        "D": {
          "en": "Rewriting a conventional web tier as Lambda functions requires substantial application changes.",
          "ko": "기존 웹 계층을 Lambda 함수로 다시 작성하면 상당한 애플리케이션 변경이 필요합니다."
        },
        "E": {
          "en": "Moving MySQL data to DynamoDB requires a major data-model and application rewrite.",
          "ko": "MySQL 데이터를 DynamoDB로 옮기면 데이터 모델과 애플리케이션을 크게 다시 작성해야 합니다."
        }
      }
    },
    {
      "id": "exam12-659",
      "number": 659,
      "tags": [
        "Amazon EKS",
        "Managed Node Groups",
        "EC2 Spot Instances",
        "Development Environment",
        "Cost Optimization"
      ],
      "question": {
        "en": "A company needs a dedicated EKS development cluster to test application resilience. The cluster is used infrequently, all nodes must be managed, and the solution should be most cost-effective. What should the company do?",
        "ko": "회사가 프로덕션 Amazon EKS 클러스터에서 실행될 애플리케이션을 개발 중입니다. EKS 클러스터에는 온디맨드 인스턴스로 프로비저닝되는 관리형 노드 그룹이 있습니다. 개발 작업용 전용 EKS 클러스터가 필요하며 애플리케이션 복원력을 테스트하기 위해 개발 클러스터를 자주 사용하지 않습니다. EKS 클러스터의 모든 노드를 관리해야 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a managed node group that contains only Spot Instances.",
          "ko": "스팟 인스턴스만 포함하는 관리형 노드 그룹을 생성합니다."
        },
        {
          "k": "B",
          "en": "Create two managed node groups: one On-Demand and one Spot.",
          "ko": "두 개의 관리형 노드 그룹을 생성하고 하나는 온디맨드 인스턴스, 다른 하나는 스팟 인스턴스로 프로비저닝합니다."
        },
        {
          "k": "C",
          "en": "Create an Auto Scaling group with Spot Instances and bootstrap the nodes into EKS with user data.",
          "ko": "스팟 인스턴스 시작 구성이 있는 Auto Scaling 그룹을 생성하고 사용자 데이터로 EKS 클러스터에 노드를 추가합니다."
        },
        {
          "k": "D",
          "en": "Create a managed node group that contains only On-Demand Instances.",
          "ko": "온디맨드 인스턴스만 포함하는 관리형 노드 그룹을 생성합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "An EKS managed node group automates node lifecycle, and Spot Instances provide the lowest EC2 cost. Interruptions are acceptable and useful for resilience testing in this infrequently used development cluster.",
        "ko": "EKS 관리형 노드 그룹은 노드 수명 주기를 자동화하고 스팟 인스턴스는 가장 저렴한 EC2 용량을 제공합니다. 자주 사용하지 않는 개발 클러스터에서는 중단을 허용할 수 있고 복원력 테스트에도 활용할 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Adding an On-Demand node group increases cost beyond what this interruptible development environment requires.",
          "ko": "온디맨드 노드 그룹을 추가하면 중단 가능한 개발 환경에 필요한 수준보다 비용이 증가합니다."
        },
        "C": {
          "en": "A self-managed Auto Scaling group violates the requirement that EKS manage every node.",
          "ko": "자체 관리 Auto Scaling 그룹은 EKS가 모든 노드를 관리해야 한다는 요구를 위반합니다."
        },
        "D": {
          "en": "On-Demand-only capacity costs more and does not exploit acceptable interruptions for resilience testing.",
          "ko": "온디맨드 전용 용량은 더 비싸고 복원력 테스트에서 허용 가능한 중단을 활용하지 못합니다."
        }
      }
    },
    {
      "id": "exam12-660",
      "number": 660,
      "tags": [
        "AWS Storage Gateway",
        "S3 File Gateway",
        "SMB",
        "S3 Lifecycle",
        "S3 Glacier Deep Archive",
        "Hybrid Storage"
      ],
      "question": {
        "en": "A company runs an SMB file server in its data center. Frequently accessed files remain for 7 days; afterward files must remain accessible with a retrieval time of at most 24 hours. Which solution meets the requirements?",
        "ko": "한 회사는 데이터 센터에서 SMB 파일 서버를 운영하고 있습니다. 파일 서버는 회사가 자주 접속하는 대용량 파일을 파일 생성일로부터 최대 7일까지 저장합니다. 7일이 지나면 회사는 최대 24시간의 검색 시간으로 파일에 액세스할 수 있어야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use AWS DataSync to copy data older than 7 days from the SMB server to AWS.",
          "ko": "AWS DataSync를 사용하여 SMB 파일 서버에서 AWS로 7일보다 오래된 데이터를 복사합니다."
        },
        {
          "k": "B",
          "en": "Create an Amazon S3 File Gateway and an S3 lifecycle rule that transitions data to S3 Glacier Deep Archive after 7 days.",
          "ko": "저장 공간을 늘리기 위해 Amazon S3 파일 게이트웨이를 생성하고 7일 후 데이터를 S3 Glacier Deep Archive로 전환하는 S3 수명 주기 정책을 생성합니다."
        },
        {
          "k": "C",
          "en": "Create an Amazon FSx File Gateway and an S3 lifecycle rule that transitions data after 7 days.",
          "ko": "저장 공간을 늘리기 위해 Amazon FSx 파일 게이트웨이를 생성하고 7일 후 데이터를 전환하는 Amazon S3 수명 주기 정책을 생성합니다."
        },
        {
          "k": "D",
          "en": "Configure S3 access for every user and transition data to S3 Glacier Flexible Retrieval after 7 days.",
          "ko": "각 사용자에 대해 Amazon S3 액세스를 구성하고 7일 후 데이터를 S3 Glacier Flexible Retrieval로 전환하는 S3 수명 주기 정책을 생성합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "S3 File Gateway exposes S3 objects through an SMB share and caches frequently accessed files locally. A lifecycle transition to Deep Archive after 7 days minimizes long-term cost, and standard retrieval fits the 24-hour limit.",
        "ko": "S3 File Gateway는 S3 객체를 SMB 공유로 제공하고 자주 사용하는 파일을 로컬에 캐시합니다. 7일 후 Deep Archive로 수명 주기 전환하면 장기 비용을 최소화하고 표준 검색 시간은 24시간 제한을 충족합니다."
      },
      "why_wrong": {
        "A": {
          "en": "DataSync is a transfer service and does not provide the continuing SMB namespace and lifecycle policy described.",
          "ko": "DataSync는 전송 서비스이며 요구된 지속적인 SMB 네임스페이스와 수명 주기 정책을 제공하지 않습니다."
        },
        "C": {
          "en": "FSx File Gateway fronts FSx for Windows File Server; an S3 lifecycle rule cannot manage those files directly.",
          "ko": "FSx File Gateway는 FSx for Windows File Server를 연결하며 S3 수명 주기 규칙이 해당 파일을 직접 관리할 수 없습니다."
        },
        "D": {
          "en": "Giving every user direct S3 access changes the SMB access model and creates unnecessary identity administration.",
          "ko": "모든 사용자에게 직접 S3 액세스를 주면 SMB 액세스 모델이 바뀌고 불필요한 ID 관리가 생깁니다."
        }
      }
    },
    {
      "id": "exam12-661",
      "number": 661,
      "tags": [
        "AWS DataSync",
        "Amazon S3",
        "Amazon EFS",
        "Incremental Transfer",
        "Operational Excellence"
      ],
      "question": {
        "en": "A solutions architect must continuously copy files from an S3 bucket to an EFS file system and another S3 bucket. New files are continually added, and copied files should be overwritten only when the source changes. Which solution has the least operational overhead?",
        "ko": "솔루션 아키텍트는 Amazon S3 버킷의 파일을 Amazon EFS 파일 시스템과 다른 S3 버킷으로 계속 복사해야 합니다. 새 파일은 원본 S3 버킷에 지속적으로 추가되며 복사된 파일은 원본 파일이 변경된 경우에만 덮어써야 합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create DataSync locations and tasks for the destination S3 bucket and EFS file system. Configure the transfer mode to send only changed data.",
          "ko": "대상 S3 버킷과 EFS 파일 시스템에 대한 AWS DataSync 위치 및 작업을 생성하고 변경된 데이터만 전송하도록 전송 모드를 설정합니다."
        },
        {
          "k": "B",
          "en": "Mount the file system in Lambda, invoke it with S3 events, and write custom copy logic for both destinations.",
          "ko": "파일 시스템을 Lambda 함수에 마운트하고 S3 이벤트로 호출하여 두 대상에 파일을 복사하는 사용자 지정 로직을 작성합니다."
        },
        {
          "k": "C",
          "en": "Create DataSync locations and tasks, but configure the transfer mode to send all data on every run.",
          "ko": "DataSync 위치와 작업을 생성하되 실행할 때마다 모든 데이터를 전송하도록 설정합니다."
        },
        {
          "k": "D",
          "en": "Run an EC2 instance, mount EFS, and periodically run a custom synchronization script.",
          "ko": "EC2 인스턴스를 실행하고 EFS를 마운트한 뒤 주기적으로 사용자 지정 동기화 스크립트를 실행합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "DataSync natively transfers data among S3 and EFS and can copy only changed files. Separate managed tasks for each destination avoid custom compute and synchronization code.",
        "ko": "DataSync는 S3와 EFS 간 전송을 기본 지원하고 변경된 파일만 복사할 수 있습니다. 대상별 관리형 작업을 사용하면 사용자 지정 컴퓨팅과 동기화 코드가 필요 없습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Custom Lambda copy logic adds development and operational complexity and is constrained for large file-system transfers.",
          "ko": "사용자 지정 Lambda 복사 로직은 개발 및 운영 복잡성을 늘리고 대규모 파일 시스템 전송에 제약이 있습니다."
        },
        "C": {
          "en": "Retransferring all data wastes bandwidth and can overwrite unchanged files.",
          "ko": "모든 데이터를 다시 전송하면 대역폭을 낭비하고 변경되지 않은 파일까지 덮어쓸 수 있습니다."
        },
        "D": {
          "en": "An EC2 script requires instance, scheduling, retry, and synchronization management.",
          "ko": "EC2 스크립트는 인스턴스, 일정, 재시도 및 동기화 관리가 필요합니다."
        }
      }
    },
    {
      "id": "exam12-662",
      "number": 662,
      "tags": [
        "Amazon S3",
        "Interface VPC Endpoint",
        "AWS PrivateLink",
        "AWS Direct Connect",
        "Hybrid Networking"
      ],
      "question": {
        "en": "During a multi-year migration, a company must privately access S3 data from an AWS Region and an on-premises location without traversing the internet. A Direct Connect connection already links the locations. Which solution meets the requirements?",
        "ko": "회사가 다년간의 마이그레이션 프로젝트 중에 데이터와 애플리케이션을 AWS로 이전하고 있습니다. 회사는 AWS 리전과 온프레미스 위치에서 Amazon S3 데이터에 인터넷을 통과하지 않고 안전하게 액세스해야 합니다. 해당 리전과 온프레미스 위치 간에는 AWS Direct Connect 연결이 설정되어 있습니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an S3 gateway endpoint and use it from both the Region and the on-premises location.",
          "ko": "Amazon S3용 게이트웨이 엔드포인트를 생성하고 리전 및 온프레미스 위치에서 사용합니다."
        },
        {
          "k": "B",
          "en": "Create a gateway on AWS Transit Gateway to access S3 from both locations.",
          "ko": "AWS Transit Gateway에 게이트웨이를 생성하여 리전 및 온프레미스 위치에서 Amazon S3에 액세스합니다."
        },
        {
          "k": "C",
          "en": "Create an S3 interface endpoint and access it privately from the Region and the on-premises location over Direct Connect.",
          "ko": "Amazon S3용 인터페이스 엔드포인트를 생성하고 Direct Connect를 통해 리전 및 온프레미스 위치에서 비공개로 액세스합니다."
        },
        {
          "k": "D",
          "en": "Use an AWS KMS key to provide secure access to the data from both locations.",
          "ko": "AWS KMS 키를 사용하여 리전 및 온프레미스 위치에서 데이터에 안전하게 액세스합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "An S3 interface endpoint uses private IP addresses and can be reached from on-premises through Direct Connect or VPN. It also provides private S3 access from the VPC without using the public internet.",
        "ko": "S3 인터페이스 엔드포인트는 프라이빗 IP 주소를 사용하며 Direct Connect 또는 VPN을 통해 온프레미스에서 접근할 수 있습니다. VPC에서도 퍼블릭 인터넷 없이 S3에 비공개로 접근할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "S3 gateway endpoints cannot be extended to or accessed directly from an on-premises network.",
          "ko": "S3 게이트웨이 엔드포인트는 온프레미스 네트워크로 확장하거나 그곳에서 직접 접근할 수 없습니다."
        },
        "B": {
          "en": "Transit Gateway connects networks but does not itself expose the S3 service as a private endpoint.",
          "ko": "Transit Gateway는 네트워크를 연결하지만 S3 서비스를 비공개 엔드포인트로 직접 제공하지 않습니다."
        },
        "D": {
          "en": "KMS encrypts data and controls key use; it does not provide private network connectivity to S3.",
          "ko": "KMS는 데이터를 암호화하고 키 사용을 제어하지만 S3에 대한 비공개 네트워크 연결을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-663",
      "number": 663,
      "tags": [
        "Amazon DynamoDB",
        "DynamoDB Accelerator",
        "Caching",
        "Microsecond Latency",
        "Operational Excellence"
      ],
      "question": {
        "en": "A serverless application uses DynamoDB. Usage has grown, and the company wants to improve response time from milliseconds to microseconds and cache database requests with minimal operational overhead. Which solution meets the requirements?",
        "ko": "한 회사가 Amazon DynamoDB를 데이터베이스 계층으로 사용하는 서버리스 애플리케이션을 배포했습니다. 사용자가 크게 증가하여 데이터베이스 응답 시간을 밀리초에서 마이크로초로 향상하고 데이터베이스 요청을 캐시하려고 합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use DynamoDB Accelerator (DAX).",
          "ko": "DynamoDB Accelerator(DAX)를 사용합니다."
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
        "en": "DAX is a fully managed, DynamoDB-compatible in-memory cache that provides microsecond read latency and requires few application changes because it supports DynamoDB APIs.",
        "ko": "DAX는 완전관리형 DynamoDB 호환 인메모리 캐시로 마이크로초 읽기 지연 시간을 제공하고 DynamoDB API를 지원하므로 애플리케이션 변경이 적습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Redshift is an analytical warehouse and is not a low-latency cache for DynamoDB requests.",
          "ko": "Redshift는 분석용 웨어하우스이며 DynamoDB 요청을 위한 저지연 캐시가 아닙니다."
        },
        "C": {
          "en": "Moving to RDS changes the data model and does not add the requested DynamoDB cache.",
          "ko": "RDS로 이전하면 데이터 모델이 바뀌고 요청된 DynamoDB 캐시가 추가되지 않습니다."
        },
        "D": {
          "en": "ElastiCache requires custom cache-aside logic and invalidation, creating more overhead than DAX.",
          "ko": "ElastiCache는 사용자 지정 캐시 어사이드 로직과 무효화 처리가 필요하여 DAX보다 운영 부담이 큽니다."
        }
      }
    },
    {
      "id": "exam12-664",
      "number": 664,
      "tags": [
        "Cluster Placement Group",
        "Compute Optimized EC2",
        "Amazon FSx for NetApp ONTAP",
        "HPC",
        "NFS",
        "SMB",
        "Choose two"
      ],
      "question": {
        "en": "A company is migrating latency-sensitive HPC workloads and an on-premises NAS to AWS. It needs the shortest latency and a file system supporting both NFS and SMB. Which two choices meet the requirements? (Choose two.)",
        "ko": "회사는 온프레미스 NAS 시스템으로 HPC 워크로드에 파일 공유를 제공합니다. 지연 시간에 민감한 HPC 워크로드와 스토리지를 AWS로 마이그레이션하며 파일 시스템에서 NFS 및 SMB 다중 프로토콜 액세스를 제공해야 합니다. 가장 짧은 대기 시간으로 요구 사항을 충족하는 솔루션은 무엇입니까? (두 가지 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Deploy compute-optimized EC2 instances in a cluster placement group.",
          "ko": "컴퓨팅 최적화 EC2 인스턴스를 클러스터 배치 그룹에 배포합니다."
        },
        {
          "k": "B",
          "en": "Deploy compute-optimized EC2 instances in a partition placement group.",
          "ko": "컴퓨팅 최적화 EC2 인스턴스를 파티션 배치 그룹에 배포합니다."
        },
        {
          "k": "C",
          "en": "Connect the EC2 instances to Amazon FSx for Lustre.",
          "ko": "EC2 인스턴스를 Amazon FSx for Lustre 파일 시스템에 연결합니다."
        },
        {
          "k": "D",
          "en": "Connect the EC2 instances to Amazon FSx for OpenZFS.",
          "ko": "EC2 인스턴스를 Amazon FSx for OpenZFS 파일 시스템에 연결합니다."
        },
        {
          "k": "E",
          "en": "Connect the EC2 instances to Amazon FSx for NetApp ONTAP.",
          "ko": "EC2 인스턴스를 Amazon FSx for NetApp ONTAP 파일 시스템에 연결합니다."
        }
      ],
      "answer": [
        "A",
        "E"
      ],
      "explanation": {
        "en": "A cluster placement group places instances close together for low-latency HPC networking. FSx for NetApp ONTAP provides managed multiprotocol NFS and SMB access.",
        "ko": "클러스터 배치 그룹은 인스턴스를 가깝게 배치하여 HPC 네트워크 지연 시간을 최소화합니다. FSx for NetApp ONTAP은 관리형 NFS 및 SMB 다중 프로토콜 액세스를 제공합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Partition placement groups isolate partitions for failure tolerance rather than minimizing inter-instance latency.",
          "ko": "파티션 배치 그룹은 인스턴스 간 지연 최소화보다 장애 격리를 위한 구성입니다."
        },
        "C": {
          "en": "FSx for Lustre is optimized for HPC but does not provide the required SMB and NFS multiprotocol NAS access.",
          "ko": "FSx for Lustre는 HPC에 최적화되지만 필요한 SMB와 NFS 다중 프로토콜 NAS 액세스를 제공하지 않습니다."
        },
        "D": {
          "en": "FSx for OpenZFS provides NFS but not the required native SMB multiprotocol access.",
          "ko": "FSx for OpenZFS는 NFS를 제공하지만 필요한 기본 SMB 다중 프로토콜 액세스는 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-665",
      "number": 665,
      "tags": [
        "Amazon RDS for SQL Server",
        "Read Replica",
        "Database Migration",
        "Managed Database",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company wants to migrate an on-premises Microsoft SQL Server Enterprise database to AWS. An online application processes transactions, and analytics reports run against the same production database. Which managed solution has the least operational overhead?",
        "ko": "회사가 온프레미스 Microsoft SQL Server Enterprise 데이터베이스를 AWS로 마이그레이션하려고 합니다. 온라인 애플리케이션은 데이터베이스로 거래를 처리하고 데이터 분석 팀은 동일한 프로덕션 데이터베이스로 보고서를 실행합니다. 가능한 한 관리형 서비스로 전환하면서 운영 오버헤드를 최소화하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Migrate to Amazon RDS for Microsoft SQL Server and use a read replica for reporting.",
          "ko": "Microsoft SQL Server용 Amazon RDS로 마이그레이션하고 보고 목적으로 읽기 복제본을 사용합니다."
        },
        {
          "k": "B",
          "en": "Migrate to Microsoft SQL Server on Amazon EC2 and use an Always On read replica for reporting.",
          "ko": "Amazon EC2의 Microsoft SQL Server로 마이그레이션하고 보고 목적으로 Always On 읽기 복제본을 사용합니다."
        },
        {
          "k": "C",
          "en": "Migrate to DynamoDB and use an on-demand replica for reporting.",
          "ko": "Amazon DynamoDB로 마이그레이션하고 보고 목적으로 온디맨드 복제본을 사용합니다."
        },
        {
          "k": "D",
          "en": "Migrate to Aurora MySQL and use an Aurora reader for reporting.",
          "ko": "Amazon Aurora MySQL로 마이그레이션하고 보고 목적으로 Aurora 읽기 전용 복제본을 사용합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "RDS for SQL Server preserves engine compatibility while AWS manages routine database infrastructure. A read replica separates reporting reads from the transactional primary.",
        "ko": "RDS for SQL Server는 엔진 호환성을 유지하면서 AWS가 일상적인 데이터베이스 인프라를 관리합니다. 읽기 복제본은 보고 읽기를 트랜잭션 기본 인스턴스에서 분리합니다."
      },
      "why_wrong": {
        "B": {
          "en": "SQL Server on EC2 leaves operating system, patching, backup, and availability management to the company.",
          "ko": "EC2의 SQL Server는 운영 체제, 패치, 백업 및 가용성 관리를 회사가 수행해야 합니다."
        },
        "C": {
          "en": "DynamoDB requires a major relational data-model and application rewrite.",
          "ko": "DynamoDB는 관계형 데이터 모델과 애플리케이션을 크게 다시 작성해야 합니다."
        },
        "D": {
          "en": "Aurora MySQL is a different engine and requires migration and compatibility changes.",
          "ko": "Aurora MySQL은 다른 엔진이므로 마이그레이션 및 호환성 변경이 필요합니다."
        }
      }
    },
    {
      "id": "exam12-666",
      "number": 666,
      "tags": [
        "Resource Tagging",
        "AWS Lambda",
        "Amazon EventBridge",
        "AWS CloudTrail",
        "Cost Allocation",
        "AWS Organizations"
      ],
      "question": {
        "en": "A company maps users to cost centers in an RDS database. In a specific Organizations account, every newly created resource must be tagged with the creator's cost center ID. Which solution meets the requirement?",
        "ko": "회사는 사용자를 비용 센터에 매핑하는 Amazon RDS 데이터베이스를 유지 관리합니다. AWS Organizations 조직의 특정 AWS 계정에서 생성된 모든 리소스에 리소스를 생성한 사용자의 비용 센터 ID로 태그를 지정해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Move the account to a new OU and apply an SCP requiring all existing resources to have a valid cost-center tag before resources are created.",
          "ko": "계정을 새 OU로 이동하고 리소스 생성 전에 모든 기존 리소스에 올바른 비용 센터 태그가 있도록 요구하는 SCP를 적용합니다."
        },
        {
          "k": "B",
          "en": "Invoke a Lambda function from EventBridge for CloudTrail events; have the function query RDS and tag resources.",
          "ko": "CloudTrail 이벤트에 반응하는 EventBridge 규칙으로 Lambda 함수를 호출하고 함수가 RDS에서 비용 센터를 조회하여 리소스에 태그를 지정하게 합니다."
        },
        {
          "k": "C",
          "en": "Deploy a CloudFormation stack on a schedule to query RDS and tag resources with Lambda.",
          "ko": "예약된 CloudFormation 스택으로 Lambda를 배포하고 RDS를 조회하여 리소스에 태그를 지정합니다."
        },
        {
          "k": "D",
          "en": "Create a Lambda function that tags resources by default and invoke it with an EventBridge rule for CloudTrail creation events when the cost-center tag is missing.",
          "ko": "기본적으로 리소스에 태그를 지정하는 Lambda 함수를 만들고 비용 센터 태그가 누락된 CloudTrail 리소스 생성 이벤트에 반응하는 EventBridge 규칙으로 호출합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "CloudTrail records the creator and resource-creation API call. EventBridge can react to that event and invoke Lambda, which looks up the user's cost center and automatically adds the missing tag.",
        "ko": "CloudTrail은 생성 사용자와 리소스 생성 API 호출을 기록합니다. EventBridge가 해당 이벤트에 반응해 Lambda를 호출하면 함수가 사용자의 비용 센터를 조회하고 누락된 태그를 자동 추가할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "SCPs set permission guardrails but cannot look up a creator in RDS and dynamically assign that user's tag value.",
          "ko": "SCP는 권한 가드레일을 설정하지만 RDS에서 생성자를 조회하여 사용자별 태그 값을 동적으로 지정하지 못합니다."
        },
        "B": {
          "en": "It lacks the stated missing-tag filtering/default tagging behavior and would invoke for unrelated CloudTrail events.",
          "ko": "누락 태그 필터링과 기본 태깅 동작이 명확하지 않아 관련 없는 CloudTrail 이벤트에도 호출될 수 있습니다."
        },
        "C": {
          "en": "CloudFormation schedules do not provide immediate event-driven tagging of resources as they are created.",
          "ko": "CloudFormation 예약 실행은 리소스 생성 시점의 즉각적인 이벤트 기반 태깅을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-667",
      "number": 667,
      "tags": [
        "Amazon EBS",
        "EBS Snapshot Lock",
        "Compliance",
        "Data Protection",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company creates one snapshot of every EBS volume daily for compliance. It must prevent accidental deletion without changing the storage administrator's permissions. Which solution requires the least management effort?",
        "ko": "회사는 EC2 인스턴스와 EBS 볼륨으로 애플리케이션을 실행합니다. 규정 준수를 위해 매일 각 EBS 볼륨의 스냅샷 하나를 생성하며 스냅샷이 실수로 삭제되는 것을 방지해야 합니다. 스토리지 관리자 사용자의 관리 권한은 변경할 수 없습니다. 최소한의 관리 노력으로 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a deletion role and use a new EC2 instance and CLI to delete snapshots.",
          "ko": "스냅샷 삭제 권한이 있는 IAM 역할을 만들고 새 EC2 인스턴스와 AWS CLI로 삭제합니다."
        },
        {
          "k": "B",
          "en": "Attach an IAM policy that denies snapshot deletion to the storage administrator.",
          "ko": "스냅샷 삭제를 거부하는 IAM 정책을 만들어 스토리지 관리자에게 연결합니다."
        },
        {
          "k": "C",
          "en": "Tag snapshots and create a retention rule for tagged snapshots.",
          "ko": "스냅샷에 태그를 추가하고 태그가 있는 EBS 스냅샷에 대해 보존 규칙을 만듭니다."
        },
        {
          "k": "D",
          "en": "Lock the EBS snapshots to prevent deletion.",
          "ko": "삭제를 방지하기 위해 EBS 스냅샷을 잠급니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "EBS Snapshot Lock enforces retention against deletion, including by privileged users, without changing the administrator's IAM permissions.",
        "ko": "EBS Snapshot Lock은 관리자 권한 사용자도 삭제하지 못하도록 보존을 강제하며 관리자의 IAM 권한을 변경할 필요가 없습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A separate deletion workflow does not prevent the existing administrator from deleting snapshots.",
          "ko": "별도 삭제 워크플로는 기존 관리자의 스냅샷 삭제를 방지하지 못합니다."
        },
        "B": {
          "en": "This explicitly changes the storage administrator's effective permissions.",
          "ko": "이 방법은 스토리지 관리자의 유효 권한을 직접 변경합니다."
        },
        "C": {
          "en": "Tags and ordinary retention automation do not provide the immutable deletion protection of Snapshot Lock.",
          "ko": "태그와 일반 보존 자동화는 Snapshot Lock의 변경 불가능한 삭제 방지 기능을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-668",
      "number": 668,
      "tags": [
        "AWS STS",
        "Custom Identity Broker",
        "LDAP",
        "Temporary Credentials",
        "Federation",
        "AWS Management Console"
      ],
      "question": {
        "en": "A company must authenticate users to the AWS Management Console with an on-premises LDAP directory that is not SAML compatible. Which solution meets the requirements?",
        "ko": "회사는 SAML과 호환되지 않는 온프레미스 LDAP 디렉터리 서비스를 사용하여 AWS Management Console에 사용자를 인증해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Enable IAM Identity Center directly between AWS and the on-premises LDAP directory.",
          "ko": "AWS와 온프레미스 LDAP 간에 IAM Identity Center를 직접 활성화합니다."
        },
        {
          "k": "B",
          "en": "Create IAM policies that use AWS credentials and integrate the policies into LDAP.",
          "ko": "AWS 자격 증명을 사용하는 IAM 정책을 생성하고 정책을 LDAP에 통합합니다."
        },
        {
          "k": "C",
          "en": "Replace IAM credentials whenever LDAP credentials are updated.",
          "ko": "LDAP 자격 증명이 업데이트될 때마다 IAM 자격 증명을 교체하는 프로세스를 설정합니다."
        },
        {
          "k": "D",
          "en": "Develop an on-premises custom identity broker that uses AWS STS to obtain temporary credentials.",
          "ko": "AWS STS를 사용하여 단기 자격 증명을 얻는 온프레미스 사용자 지정 자격 증명 브로커 애플리케이션 또는 프로세스를 개발합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "A custom identity broker can authenticate against LDAP, call STS for temporary role credentials, and generate a console sign-in URL without requiring SAML support.",
        "ko": "사용자 지정 자격 증명 브로커는 LDAP로 인증하고 STS에서 임시 역할 자격 증명을 받은 뒤 SAML 지원 없이 콘솔 로그인 URL을 생성할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Direct external identity integration requires a supported federation mechanism; the stated LDAP service is not SAML compatible.",
          "ko": "직접 외부 ID 통합에는 지원되는 페더레이션 방식이 필요하지만 해당 LDAP 서비스는 SAML과 호환되지 않습니다."
        },
        "B": {
          "en": "IAM policies cannot be embedded in LDAP to provide AWS console federation.",
          "ko": "IAM 정책을 LDAP에 통합하여 AWS 콘솔 페더레이션을 제공할 수 없습니다."
        },
        "C": {
          "en": "Synchronizing long-term IAM credentials is insecure and does not create federated console access.",
          "ko": "장기 IAM 자격 증명을 동기화하는 것은 안전하지 않고 페더레이션 콘솔 액세스를 만들지 못합니다."
        }
      }
    },
    {
      "id": "exam12-669",
      "number": 669,
      "tags": [
        "AWS WAF",
        "IP Set",
        "Amazon CloudFront",
        "Application Load Balancer",
        "Web Security"
      ],
      "question": {
        "en": "A public website runs on EC2 in an Auto Scaling group behind an ALB, which is the origin of a CloudFront distribution. AWS WAF already protects against SQL injection. Security logs identify an external malicious IP that must be blocked. What should a solutions architect do?",
        "ko": "회사의 공개 웹사이트는 ALB 뒤 Auto Scaling 그룹의 EC2 인스턴스에서 실행됩니다. ALB는 CloudFront 배포의 오리진이며 AWS WAF가 SQL 주입 공격을 방어합니다. 보안 로그에서 차단해야 할 외부 악성 IP가 발견되었습니다. 애플리케이션을 보호하려면 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Add a deny rule for the IP address to a network ACL for the CloudFront distribution.",
          "ko": "CloudFront 배포의 네트워크 ACL에 악성 IP 주소 거부 규칙을 추가합니다."
        },
        {
          "k": "B",
          "en": "Add an IP match condition that blocks the malicious address to the AWS WAF configuration.",
          "ko": "악성 IP 주소를 차단하는 IP 일치 조건을 AWS WAF 구성에 추가합니다."
        },
        {
          "k": "C",
          "en": "Modify a network ACL on the EC2 instances in the target group to deny the address.",
          "ko": "대상 그룹의 EC2 인스턴스에 대한 네트워크 ACL을 수정해 악성 IP 주소를 거부합니다."
        },
        {
          "k": "D",
          "en": "Modify the EC2 security groups behind the ALB to deny the address.",
          "ko": "ALB 뒤 EC2 인스턴스의 보안 그룹을 수정해 악성 IP 주소를 거부합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "AWS WAF IP sets and blocking rules inspect the original web request at CloudFront and can deny a specific malicious source before it reaches the ALB.",
        "ko": "AWS WAF IP 세트와 차단 규칙은 CloudFront에서 원본 웹 요청을 검사하고 특정 악성 출발지를 ALB에 도달하기 전에 차단할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "CloudFront distributions do not have network ACLs.",
          "ko": "CloudFront 배포에는 네트워크 ACL이 없습니다."
        },
        "C": {
          "en": "Network ACLs apply to subnets, not individual target-group instances, and the origin commonly sees CloudFront addresses.",
          "ko": "네트워크 ACL은 개별 대상 그룹 인스턴스가 아니라 서브넷에 적용되며 오리진에는 일반적으로 CloudFront 주소가 보입니다."
        },
        "D": {
          "en": "Security groups are stateful allow lists and do not support explicit deny rules for an IP address.",
          "ko": "보안 그룹은 상태 저장 허용 목록이며 IP 주소에 대한 명시적 거부 규칙을 지원하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-670",
      "number": 670,
      "tags": [
        "Amazon ECS",
        "Microservices",
        "Service Auto Scaling",
        "Rolling Deployment",
        "Modernization"
      ],
      "question": {
        "en": "A reporting application runs as a tightly coupled monolith on one EC2 instance. Module patches cause downtime and failed reports must restart. The company wants a resilient, scalable, incrementally improvable design with minimal downtime. Which solution meets the requirements?",
        "ko": "제조 회사가 AWS에서 보고서 생성 애플리케이션을 실행합니다. 각 보고서는 약 20분 안에 생성되며 애플리케이션은 단일 EC2 인스턴스의 긴밀히 결합된 모놀리스입니다. 모듈을 자주 업데이트해야 하고 패치할 때마다 가동 중지 시간이 발생하며 중단된 보고서는 처음부터 다시 시작해야 합니다. 애플리케이션을 유연하고 확장 가능하며 점진적으로 개선하면서 가동 중지 시간을 최소화하려면 어떻게 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Run the application as one Lambda function with maximum provisioned concurrency.",
          "ko": "최대 프로비저닝 동시성을 갖춘 단일 AWS Lambda 함수로 애플리케이션을 실행합니다."
        },
        {
          "k": "B",
          "en": "Run the application as microservices on Spot EC2 instances using a capacity-optimized allocation strategy.",
          "ko": "용량 최적화 할당 전략을 사용하는 EC2 스팟 인스턴스에서 애플리케이션을 마이크로서비스로 실행합니다."
        },
        {
          "k": "C",
          "en": "Run the application as microservices on Amazon ECS with service auto scaling.",
          "ko": "서비스 자동 조정을 통해 Amazon ECS에서 애플리케이션을 마이크로서비스로 실행합니다."
        },
        {
          "k": "D",
          "en": "Run the application as a single Elastic Beanstalk environment using an all-at-once deployment strategy.",
          "ko": "일괄 배포 전략을 사용하는 단일 Elastic Beanstalk 애플리케이션 환경에서 애플리케이션을 실행합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Decomposing the monolith into ECS microservices isolates module updates and failures. ECS services can scale independently and use rolling or blue/green deployments to minimize downtime.",
        "ko": "모놀리스를 ECS 마이크로서비스로 분해하면 모듈 업데이트와 장애가 격리됩니다. ECS 서비스는 독립적으로 확장하고 롤링 또는 블루/그린 배포를 사용하여 가동 중지 시간을 최소화할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A single Lambda remains tightly coupled and a 20-minute report exceeds Lambda's maximum execution duration.",
          "ko": "단일 Lambda는 계속 긴밀히 결합되며 20분 보고서는 Lambda 최대 실행 시간을 초과합니다."
        },
        "B": {
          "en": "Spot interruptions can terminate long report work and do not minimize restarts or downtime.",
          "ko": "스팟 중단은 장시간 보고서 작업을 종료할 수 있어 재시작과 가동 중지를 최소화하지 못합니다."
        },
        "D": {
          "en": "A monolithic all-at-once deployment causes downtime and preserves tight coupling.",
          "ko": "모놀리스 일괄 배포는 가동 중지 시간을 발생시키고 긴밀한 결합을 유지합니다."
        }
      }
    },
    {
      "id": "exam12-671",
      "number": 671,
      "tags": [
        "Amazon ECS",
        "Service Auto Scaling",
        "Task Placement",
        "Multi-AZ",
        "Containers"
      ],
      "question": {
        "en": "A company wants to deploy a containerized application workload in a VPC across three Availability Zones. The solution must provide high availability across the Availability Zones, require minimal application changes, and have the least operational overhead. Which solution meets these requirements?",
        "ko": "회사는 컨테이너화된 애플리케이션 워크로드를 VPC의 3개 가용 영역에 걸쳐 배포하려고 합니다. 가용 영역 전반에서 높은 가용성을 제공하고 애플리케이션 변경과 운영 오버헤드를 최소화해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use Amazon ECS. Configure ECS Service Auto Scaling with target tracking, set the minimum capacity to 3, and use a task placement strategy that spreads tasks across Availability Zones.",
          "ko": "Amazon ECS를 사용합니다. 대상 추적 조정으로 ECS Service Auto Scaling을 구성하고 최소 용량을 3으로 설정하며 가용 영역에 작업을 분산하는 작업 배치 전략을 사용합니다."
        },
        {
          "k": "B",
          "en": "Use Amazon EKS with self-managed nodes. Configure Application Auto Scaling with target tracking and set the minimum capacity to 3.",
          "ko": "자체 관리형 노드를 사용하는 Amazon EKS를 사용합니다. 대상 추적 조정으로 Application Auto Scaling을 구성하고 최소 용량을 3으로 설정합니다."
        },
        {
          "k": "C",
          "en": "Launch three EC2 Reserved Instances in a spread placement group. Configure an Auto Scaling group with target tracking and a minimum capacity of 3.",
          "ko": "분산 배치 그룹에서 EC2 예약 인스턴스 3개를 시작합니다. 대상 추적 조정과 최소 용량 3으로 Auto Scaling 그룹을 구성합니다."
        },
        {
          "k": "D",
          "en": "Use AWS Lambda functions connected to the VPC. Configure Application Auto Scaling for Lambda with a minimum capacity of 3.",
          "ko": "VPC에 연결된 AWS Lambda 함수를 사용합니다. 최소 용량 3으로 Lambda용 Application Auto Scaling을 구성합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Amazon ECS provides managed container orchestration with less cluster-management overhead. A service with a minimum of three tasks, target tracking, and an Availability Zone spread strategy maintains capacity and distributes tasks across all three Zones.",
        "ko": "Amazon ECS는 클러스터 관리 부담이 적은 관리형 컨테이너 오케스트레이션을 제공합니다. 최소 작업 수 3, 대상 추적 조정, 가용 영역 분산 전략을 사용하면 용량을 유지하면서 세 가용 영역에 작업을 분산할 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Self-managed EKS nodes add Kubernetes and worker-node management overhead without providing an advantage for this requirement.",
          "ko": "자체 관리형 EKS 노드는 이 요구 사항에 특별한 이점을 주지 않으면서 Kubernetes와 작업자 노드 관리 부담을 추가합니다."
        },
        "C": {
          "en": "Reserved Instances are a pricing commitment, and EC2 placement groups do not provide managed container orchestration with minimal application changes.",
          "ko": "예약 인스턴스는 요금 약정이며 EC2 배치 그룹은 애플리케이션 변경을 최소화하는 관리형 컨테이너 오케스트레이션을 제공하지 않습니다."
        },
        "D": {
          "en": "Lambda is not a direct hosting replacement for an arbitrary container workload, and Lambda does not scale through a minimum instance count across three Availability Zones.",
          "ko": "Lambda는 임의의 컨테이너 워크로드를 그대로 호스팅하는 대체재가 아니며 세 가용 영역에 최소 인스턴스 수를 유지하는 방식으로 확장하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-672",
      "number": 672,
      "tags": [
        "AWS Lambda",
        "Provisioned Concurrency",
        "AWS Compute Optimizer",
        "Performance",
        "Cost Optimization"
      ],
      "question": {
        "en": "A company uses highly concurrent Lambda functions to process a continuously growing number of messages in a queue during marketing events. The functions run CPU-intensive code. The company wants to reduce compute cost while maintaining customer service latency. Which solution meets these requirements?",
        "ko": "회사는 마케팅 이벤트 중 대기열에서 지속적으로 증가하는 메시지를 처리하기 위해 높은 동시성의 AWS Lambda 함수를 사용합니다. 함수는 CPU 집약적인 코드를 실행합니다. 컴퓨팅 비용을 줄이면서 고객 서비스 대기 시간을 유지하려면 어떤 솔루션을 사용해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure reserved concurrency for the Lambda functions and reduce the allocated memory.",
          "ko": "Lambda 함수에 예약된 동시성을 구성하고 할당된 메모리를 줄입니다."
        },
        {
          "k": "B",
          "en": "Configure reserved concurrency for the Lambda functions and increase memory according to AWS Compute Optimizer recommendations.",
          "ko": "Lambda 함수에 예약된 동시성을 구성하고 AWS Compute Optimizer 권장 사항에 따라 메모리를 늘립니다."
        },
        {
          "k": "C",
          "en": "Configure provisioned concurrency for the Lambda functions and reduce the allocated memory.",
          "ko": "Lambda 함수에 프로비저닝된 동시성을 구성하고 할당된 메모리를 줄입니다."
        },
        {
          "k": "D",
          "en": "Configure provisioned concurrency for the Lambda functions and increase memory according to AWS Compute Optimizer recommendations.",
          "ko": "Lambda 함수에 프로비저닝된 동시성을 구성하고 AWS Compute Optimizer 권장 사항에 따라 메모리를 늘립니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "Provisioned concurrency keeps execution environments initialized for predictable low latency during bursts. Lambda allocates CPU in proportion to memory, so Compute Optimizer's memory recommendation can shorten CPU-bound executions enough to reduce total compute cost.",
        "ko": "프로비저닝된 동시성은 실행 환경을 미리 초기화해 급증 시에도 예측 가능한 짧은 지연 시간을 제공합니다. Lambda는 메모리에 비례해 CPU를 할당하므로 Compute Optimizer의 메모리 권장 사항을 적용하면 CPU 집약적 실행 시간이 단축되어 총 컴퓨팅 비용을 줄일 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Reserved concurrency limits and reserves capacity but does not pre-initialize environments, and reducing memory also reduces CPU for this workload.",
          "ko": "예약된 동시성은 용량을 예약하고 제한하지만 실행 환경을 미리 초기화하지 않으며 메모리를 줄이면 이 워크로드의 CPU도 감소합니다."
        },
        "B": {
          "en": "Increasing memory can improve CPU efficiency, but reserved concurrency alone does not remove cold-start latency.",
          "ko": "메모리 증가는 CPU 효율을 높일 수 있지만 예약된 동시성만으로는 콜드 스타트 지연을 제거하지 못합니다."
        },
        "C": {
          "en": "Provisioned concurrency helps latency, but reducing memory reduces CPU and can increase the duration and cost of CPU-intensive processing.",
          "ko": "프로비저닝된 동시성은 지연 시간에 도움이 되지만 메모리를 줄이면 CPU가 감소해 CPU 집약적 처리 시간과 비용이 증가할 수 있습니다."
        }
      }
    },
    {
      "id": "exam12-673",
      "number": 673,
      "tags": [
        "Amazon Forecast",
        "Amazon S3",
        "AWS Lambda",
        "Machine Learning",
        "Forecasting"
      ],
      "question": {
        "en": "A company needs a solution that predicts the resources required for its manufacturing process each month. The solution must use historical records stored in an S3 bucket. The company has no machine learning experience and wants a managed service for training and forecasting. Which combination of steps meets these requirements? (Choose two.)",
        "ko": "회사는 매월 제조 프로세스에 필요한 리소스를 예측하는 솔루션이 필요합니다. 솔루션은 현재 Amazon S3 버킷에 저장된 기록 값을 사용해야 합니다. 회사는 기계 학습 경험이 없으며 교육과 예측에 관리형 서비스를 사용하려고 합니다. 어떤 단계 조합이 요구 사항을 충족합니까? (2개 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Deploy an Amazon SageMaker model and create a SageMaker endpoint for inference.",
          "ko": "Amazon SageMaker 모델을 배포하고 추론을 위한 SageMaker 엔드포인트를 생성합니다."
        },
        {
          "k": "B",
          "en": "Use Amazon SageMaker to train a model with the historical data in the S3 bucket.",
          "ko": "Amazon SageMaker를 사용하여 S3 버킷의 기록 데이터로 모델을 교육합니다."
        },
        {
          "k": "C",
          "en": "Configure an AWS Lambda function URL that calls a SageMaker endpoint to generate predictions from the input.",
          "ko": "입력을 기반으로 예측을 생성하도록 SageMaker 엔드포인트를 호출하는 AWS Lambda 함수 URL을 구성합니다."
        },
        {
          "k": "D",
          "en": "Configure an AWS Lambda function URL that uses an Amazon Forecast predictor to generate predictions from the input.",
          "ko": "입력을 기반으로 예측을 생성하도록 Amazon Forecast 예측기를 사용하는 AWS Lambda 함수 URL을 구성합니다."
        },
        {
          "k": "E",
          "en": "Train an Amazon Forecast predictor with the historical data in the S3 bucket.",
          "ko": "S3 버킷의 기록 데이터를 사용하여 Amazon Forecast 예측기를 교육합니다."
        }
      ],
      "answer": [
        "D",
        "E"
      ],
      "explanation": {
        "en": "Amazon Forecast is a fully managed, purpose-built forecasting service that does not require the company to develop its own ML model. Historical data can be imported from S3 to train a predictor, and a Lambda-backed function URL can expose predictions to the application.",
        "ko": "Amazon Forecast는 회사가 자체 ML 모델을 개발할 필요가 없는 완전관리형 예측 전용 서비스입니다. S3에서 기록 데이터를 가져와 예측기를 교육하고 Lambda 함수 URL을 통해 애플리케이션에 예측 결과를 제공할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Deploying a general-purpose SageMaker model requires a model-development and endpoint lifecycle that Amazon Forecast avoids for this forecasting use case.",
          "ko": "범용 SageMaker 모델을 배포하면 이 예측 사용 사례에서 Amazon Forecast로 피할 수 있는 모델 개발과 엔드포인트 수명 주기 관리가 필요합니다."
        },
        "B": {
          "en": "Training a custom SageMaker model requires more ML design and management than the purpose-built managed Forecast service.",
          "ko": "사용자 지정 SageMaker 모델 교육은 예측 전용 관리형 Forecast 서비스보다 더 많은 ML 설계와 관리가 필요합니다."
        },
        "C": {
          "en": "This depends on a separately developed and deployed SageMaker model, adding unnecessary ML and endpoint management.",
          "ko": "별도로 개발하고 배포한 SageMaker 모델에 의존하므로 불필요한 ML 및 엔드포인트 관리가 추가됩니다."
        }
      }
    },
    {
      "id": "exam12-674",
      "number": 674,
      "tags": [
        "AWS Global Accelerator",
        "Application Load Balancer",
        "AWS WAF",
        "Multi-Region",
        "Static IP"
      ],
      "question": {
        "en": "A company has global users accessing an HTTP application deployed on EC2 instances in multiple AWS Regions. The company wants to improve availability and performance, protect the application from common web attacks, and provide static IP addresses. What should a solutions architect recommend?",
        "ko": "회사는 여러 AWS 리전의 Amazon EC2 인스턴스에 배포된 HTTP 기반 애플리케이션에 액세스하는 전 세계 사용자를 보유하고 있습니다. 애플리케이션의 가용성과 성능을 개선하고 일반적인 웹 공격으로부터 보호하며 고정 IP 주소를 제공하려고 합니다. 무엇을 권장해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Place the EC2 instances behind an NLB in each Region, associate AWS WAF with the NLBs, and register the NLBs as AWS Global Accelerator endpoints.",
          "ko": "각 리전의 NLB 뒤에 EC2 인스턴스를 배치하고 NLB에 AWS WAF를 연결한 다음 NLB를 AWS Global Accelerator 엔드포인트로 등록합니다."
        },
        {
          "k": "B",
          "en": "Place the EC2 instances behind an ALB in each Region, associate AWS WAF with the ALBs, and register the ALBs as AWS Global Accelerator endpoints.",
          "ko": "각 리전의 ALB 뒤에 EC2 인스턴스를 배치하고 ALB에 AWS WAF를 연결한 다음 ALB를 AWS Global Accelerator 엔드포인트로 등록합니다."
        },
        {
          "k": "C",
          "en": "Place the EC2 instances behind an NLB in each Region, associate AWS WAF with the NLBs, and create a CloudFront distribution that routes to the NLBs by Route 53 latency routing.",
          "ko": "각 리전의 NLB 뒤에 EC2 인스턴스를 배치하고 NLB에 AWS WAF를 연결한 다음 Route 53 지연 시간 기반 라우팅으로 NLB에 요청을 보내는 CloudFront 배포를 생성합니다."
        },
        {
          "k": "D",
          "en": "Place the EC2 instances behind an ALB in each Region, create a CloudFront distribution that uses Route 53 latency routing to the ALBs, and associate AWS WAF with CloudFront.",
          "ko": "각 리전의 ALB 뒤에 EC2 인스턴스를 배치하고 Route 53 지연 시간 기반 라우팅으로 ALB를 오리진으로 사용하는 CloudFront 배포를 생성한 다음 CloudFront에 AWS WAF를 연결합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "ALB supports HTTP-aware routing and can be protected by AWS WAF. Global Accelerator accepts ALBs as regional endpoints, routes users over the AWS global network, performs health-based regional failover, and supplies static anycast IP addresses.",
        "ko": "ALB는 HTTP 인식 라우팅을 지원하며 AWS WAF로 보호할 수 있습니다. Global Accelerator는 ALB를 리전 엔드포인트로 사용하고 AWS 글로벌 네트워크를 통해 사용자를 라우팅하며 상태 기반 리전 장애 조치와 고정 Anycast IP 주소를 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "AWS WAF cannot be associated with a Network Load Balancer.",
          "ko": "AWS WAF는 Network Load Balancer에 연결할 수 없습니다."
        },
        "C": {
          "en": "AWS WAF cannot protect NLBs, and this design does not supply the required static application IP addresses through Global Accelerator.",
          "ko": "AWS WAF는 NLB를 보호할 수 없고 이 구성은 Global Accelerator를 통한 애플리케이션 고정 IP 주소를 제공하지 않습니다."
        },
        "D": {
          "en": "CloudFront exposes DNS names rather than the required fixed anycast IP addresses, and a distribution does not use Route 53 latency routing to dynamically select among origins in the stated manner.",
          "ko": "CloudFront는 필요한 고정 Anycast IP 주소 대신 DNS 이름을 제공하며, 설명된 방식으로 Route 53 지연 시간 라우팅을 사용해 여러 오리진을 동적으로 선택하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-675",
      "number": 675,
      "tags": [
        "Amazon EC2 Auto Scaling",
        "Launch Template",
        "AMI",
        "Elasticity",
        "Cost Optimization"
      ],
      "question": {
        "en": "An ecommerce company runs seasonal online sales. Its website is hosted on EC2 instances across multiple Availability Zones and must handle sharp traffic increases during sales in the most cost-effective way. Which solution meets these requirements?",
        "ko": "전자상거래 회사가 계절별 온라인 세일을 진행합니다. 웹사이트는 여러 가용 영역의 Amazon EC2 인스턴스에서 호스팅되며 세일 기간의 급격한 트래픽 증가를 가장 비용 효율적으로 처리해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an Auto Scaling group sized for peak load, stop half of the EC2 instances, and start the stopped instances when traffic increases.",
          "ko": "최대 트래픽을 처리할 크기의 Auto Scaling 그룹을 생성하고 EC2 인스턴스 절반을 중지한 다음 트래픽이 증가하면 중지된 인스턴스를 시작하도록 구성합니다."
        },
        {
          "k": "B",
          "en": "Create an Auto Scaling group and set its minimum size high enough to handle peak traffic without scaling.",
          "ko": "웹사이트에 대한 Auto Scaling 그룹을 생성하고 확장할 필요 없이 최대 트래픽을 처리하도록 최소 크기를 설정합니다."
        },
        {
          "k": "C",
          "en": "Use CloudFront and ElastiCache to cache dynamic content, keep an Auto Scaling group large enough to populate both caches, and shrink it after the caches are full.",
          "ko": "CloudFront와 ElastiCache로 동적 콘텐츠를 캐시하고 두 캐시를 채울 만큼 Auto Scaling 그룹을 구성한 뒤 캐시가 가득 차면 규모를 축소합니다."
        },
        {
          "k": "D",
          "en": "Configure an Auto Scaling group to scale with traffic and create a launch template that starts new instances from a preconfigured AMI.",
          "ko": "트래픽 증가에 따라 확장되도록 Auto Scaling 그룹을 구성하고 사전 구성된 AMI에서 새 인스턴스를 시작하는 시작 템플릿을 생성합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "An Auto Scaling group adds and removes EC2 capacity with demand, while a launch template and preconfigured AMI create consistent instances quickly. This avoids paying for peak capacity outside the seasonal event.",
        "ko": "Auto Scaling 그룹은 수요에 따라 EC2 용량을 추가하거나 제거하고 시작 템플릿과 사전 구성된 AMI는 일관된 인스턴스를 빠르게 생성합니다. 따라서 계절 이벤트 외 기간에 최대 용량 비용을 지불하지 않아도 됩니다."
      },
      "why_wrong": {
        "A": {
          "en": "Auto Scaling replaces terminated capacity and is not designed to manage a pool of manually stopped instances.",
          "ko": "Auto Scaling은 종료되거나 비정상인 용량을 대체하며 수동으로 중지한 인스턴스 풀을 관리하도록 설계되지 않았습니다."
        },
        "B": {
          "en": "Keeping minimum capacity at peak size overprovisions the site and wastes money outside sales periods.",
          "ko": "최소 용량을 최대 트래픽 규모로 유지하면 세일 외 기간에 과도하게 프로비저닝되어 비용이 낭비됩니다."
        },
        "C": {
          "en": "CloudFront and ElastiCache serve different cache layers, and keeping instances merely to fill caches is not a sound scaling strategy for dynamic demand.",
          "ko": "CloudFront와 ElastiCache는 서로 다른 캐시 계층이며 캐시를 채우기 위해 인스턴스를 유지하는 방식은 동적 수요에 적합한 확장 전략이 아닙니다."
        }
      }
    },
    {
      "id": "exam12-676",
      "number": 676,
      "tags": [
        "AWS WAF",
        "Amazon RDS",
        "SQL Injection",
        "Web Security",
        "Least Privilege"
      ],
      "question": {
        "en": "A company deploys an application on EC2 instances with an Amazon RDS database and uses least-privilege database credentials. The security team wants to protect the application and database from SQL injection and other web-based attacks with minimal operational overhead. Which solution meets these requirements?",
        "ko": "회사는 Amazon RDS 데이터베이스를 사용하는 애플리케이션을 Amazon EC2 인스턴스에 배포하고 최소 권한 원칙으로 데이터베이스 액세스 자격 증명을 구성했습니다. 보안 팀은 최소한의 운영 오버헤드로 SQL 주입 및 기타 웹 기반 공격으로부터 애플리케이션과 데이터베이스를 보호하려고 합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use security groups and network ACLs to protect the database and application servers.",
          "ko": "보안 그룹과 네트워크 ACL을 사용하여 데이터베이스와 애플리케이션 서버를 보호합니다."
        },
        {
          "k": "B",
          "en": "Use AWS WAF to protect the application and use an RDS DB parameter group to configure database security settings.",
          "ko": "AWS WAF를 사용하여 애플리케이션을 보호하고 RDS DB 파라미터 그룹을 사용하여 데이터베이스 보안 설정을 구성합니다."
        },
        {
          "k": "C",
          "en": "Use AWS Network Firewall to protect the application and database.",
          "ko": "AWS Network Firewall을 사용하여 애플리케이션과 데이터베이스를 보호합니다."
        },
        {
          "k": "D",
          "en": "Use multiple database accounts in the application for different features and avoid granting excessive permissions.",
          "ko": "기능별로 애플리케이션 코드에서 여러 데이터베이스 계정을 사용하고 데이터베이스 사용자에게 과도한 권한을 부여하지 않습니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "AWS WAF supplies managed application-layer rules for SQL injection and other common web exploits. RDS parameter groups centrally enforce supported database security settings without managing database hosts.",
        "ko": "AWS WAF는 SQL 주입과 기타 일반적인 웹 공격을 탐지하는 관리형 애플리케이션 계층 규칙을 제공합니다. RDS 파라미터 그룹은 데이터베이스 호스트를 관리하지 않고 지원되는 데이터베이스 보안 설정을 중앙에서 적용합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Security groups and network ACLs filter network traffic but do not inspect HTTP payloads for SQL injection.",
          "ko": "보안 그룹과 네트워크 ACL은 네트워크 트래픽을 필터링하지만 SQL 주입을 찾기 위해 HTTP 페이로드를 검사하지 않습니다."
        },
        "C": {
          "en": "Network Firewall protects VPC network traffic but is not the managed web application control for SQL injection patterns.",
          "ko": "Network Firewall은 VPC 네트워크 트래픽을 보호하지만 SQL 주입 패턴을 위한 관리형 웹 애플리케이션 제어 기능은 아닙니다."
        },
        "D": {
          "en": "Least-privilege accounts limit damage but do not block attackers from exploiting vulnerable application code or other web attacks.",
          "ko": "최소 권한 계정은 피해를 제한하지만 공격자가 취약한 애플리케이션 코드를 악용하거나 다른 웹 공격을 수행하는 것을 차단하지 못합니다."
        }
      }
    },
    {
      "id": "exam12-677",
      "number": 677,
      "tags": [
        "AWS Migration Hub",
        "AWS Application Discovery Service",
        "Migration Planning",
        "On-Premises",
        "Discovery"
      ],
      "question": {
        "en": "A company runs several workloads in an on-premises data center that cannot scale quickly enough for business growth. To plan an AWS migration, the company wants to collect usage and configuration data about its on-premises servers and workloads. Which solution meets these requirements?",
        "ko": "회사는 온프레미스 데이터 센터에서 여러 워크로드를 실행하지만 확장되는 비즈니스 요구 사항을 충족할 만큼 빠르게 확장할 수 없습니다. AWS로의 마이그레이션을 계획하기 위해 온프레미스 서버 및 워크로드의 사용량과 구성 데이터를 수집하려고 합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Set a Migration Hub home Region and use AWS Systems Manager to collect the on-premises server data.",
          "ko": "AWS Migration Hub에서 홈 AWS 리전을 설정하고 AWS Systems Manager를 사용하여 온프레미스 서버 데이터를 수집합니다."
        },
        {
          "k": "B",
          "en": "Set a Migration Hub home Region and use AWS Application Discovery Service to collect the on-premises server data.",
          "ko": "AWS Migration Hub에서 홈 AWS 리전을 설정하고 AWS Application Discovery Service를 사용하여 온프레미스 서버 데이터를 수집합니다."
        },
        {
          "k": "C",
          "en": "Use AWS Schema Conversion Tool to create templates and AWS Trusted Advisor to collect on-premises server data.",
          "ko": "AWS Schema Conversion Tool로 관련 템플릿을 생성하고 AWS Trusted Advisor를 사용하여 온프레미스 서버 데이터를 수집합니다."
        },
        {
          "k": "D",
          "en": "Use AWS Schema Conversion Tool to create templates and AWS Database Migration Service to collect on-premises server data.",
          "ko": "AWS Schema Conversion Tool로 관련 템플릿을 생성하고 AWS Database Migration Service를 사용하여 온프레미스 서버 데이터를 수집합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Application Discovery Service gathers configuration, dependency, and utilization data from on-premises servers. Migration Hub stores and presents discovery and migration status in its selected home Region for planning.",
        "ko": "Application Discovery Service는 온프레미스 서버의 구성, 종속성, 사용률 데이터를 수집합니다. Migration Hub는 선택한 홈 리전에 검색 및 마이그레이션 상태를 저장하고 표시하여 계획을 지원합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Systems Manager can manage hybrid nodes but is not the purpose-built migration discovery and dependency inventory service.",
          "ko": "Systems Manager는 하이브리드 노드를 관리할 수 있지만 마이그레이션 검색과 종속성 인벤토리를 위한 전용 서비스가 아닙니다."
        },
        "C": {
          "en": "SCT converts database schemas, and Trusted Advisor evaluates AWS accounts rather than discovering on-premises workload utilization.",
          "ko": "SCT는 데이터베이스 스키마를 변환하고 Trusted Advisor는 AWS 계정을 평가하므로 온프레미스 워크로드 사용률을 검색하지 않습니다."
        },
        "D": {
          "en": "SCT and DMS support database conversion and migration, not broad server inventory and workload discovery.",
          "ko": "SCT와 DMS는 데이터베이스 변환 및 마이그레이션을 지원하며 광범위한 서버 인벤토리와 워크로드 검색에는 적합하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-678",
      "number": 678,
      "tags": [
        "Amazon SQS",
        "Queue Policy",
        "Cross-Account Access",
        "Resource-Based Policy",
        "IAM"
      ],
      "question": {
        "en": "A development team is collaborating with another company. The other company must poll an Amazon SQS queue in the development team's account without the development team relinquishing control of its account permissions. How should access to the queue be provided?",
        "ko": "개발팀이 다른 회사와 협력하여 통합 제품을 만들고 있습니다. 다른 회사는 개발팀 계정의 Amazon SQS 대기열에 액세스해야 하며 개발팀은 자체 계정 권한을 포기하지 않고 다른 회사가 대기열을 폴링하도록 하려고 합니다. SQS 대기열에 대한 액세스를 어떻게 제공해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an instance profile that provides the other company access to the SQS queue.",
          "ko": "다른 회사에 SQS 대기열 액세스를 제공하는 인스턴스 프로파일을 생성합니다."
        },
        {
          "k": "B",
          "en": "Create an IAM identity policy in the development account that provides the other company access to the SQS queue.",
          "ko": "다른 회사에 SQS 대기열 액세스를 제공하는 IAM 자격 증명 기반 정책을 개발 계정에 생성합니다."
        },
        {
          "k": "C",
          "en": "Create an SQS queue access policy that grants the other company's AWS account access to the queue.",
          "ko": "다른 회사의 AWS 계정에 대기열 액세스를 부여하는 SQS 대기열 액세스 정책을 생성합니다."
        },
        {
          "k": "D",
          "en": "Create an Amazon SNS access policy that grants the other company access to the SQS queue.",
          "ko": "다른 회사에 SQS 대기열 액세스를 제공하는 Amazon SNS 액세스 정책을 생성합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "An SQS queue policy is a resource-based policy. It can name the partner AWS account as the principal and grant only queue actions such as ReceiveMessage, DeleteMessage, and GetQueueAttributes while the queue owner retains control.",
        "ko": "SQS 대기열 정책은 리소스 기반 정책입니다. 파트너 AWS 계정을 보안 주체로 지정하고 ReceiveMessage, DeleteMessage, GetQueueAttributes와 같은 필요한 대기열 작업만 허용하면서 대기열 소유자가 제어권을 유지할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "An instance profile supplies credentials to EC2 instances and is not a cross-account resource permission mechanism for an external company.",
          "ko": "인스턴스 프로파일은 EC2 인스턴스에 자격 증명을 제공하며 외부 회사에 대한 교차 계정 리소스 권한 방식이 아닙니다."
        },
        "B": {
          "en": "An identity policy in the queue owner's account does not attach to identities controlled by the partner account; the queue needs a resource policy or an assumable role.",
          "ko": "대기열 소유 계정의 자격 증명 정책은 파트너 계정이 제어하는 자격 증명에 연결되지 않으므로 대기열 리소스 정책이나 수임 역할이 필요합니다."
        },
        "D": {
          "en": "An SNS topic policy controls an SNS topic and cannot grant access to an SQS queue.",
          "ko": "SNS 주제 정책은 SNS 주제를 제어하며 SQS 대기열에 대한 액세스를 부여할 수 없습니다."
        }
      }
    },
    {
      "id": "exam12-679",
      "number": 679,
      "tags": [
        "AWS Storage Gateway",
        "Cached Volumes",
        "Amazon S3",
        "Hybrid Storage",
        "Cost Optimization"
      ],
      "question": {
        "en": "An on-premises data center is running out of storage capacity. The company wants to migrate storage infrastructure to AWS while minimizing bandwidth costs. Data must remain immediately retrievable without additional retrieval fees. How can these requirements be met?",
        "ko": "회사의 온프레미스 데이터 센터에 스토리지 용량이 부족합니다. 대역폭 비용을 최소화하면서 스토리지 인프라를 AWS로 마이그레이션하려고 하며 추가 검색 비용 없이 데이터를 즉시 검색할 수 있어야 합니다. 요구 사항을 어떻게 충족할 수 있습니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Deploy an Amazon S3 Glacier vault, enable expedited retrievals, and provision retrieval capacity for the workload.",
          "ko": "Amazon S3 Glacier Vault를 배포하고 빠른 검색을 활성화하며 워크로드에 대해 프로비저닝된 검색 용량을 활성화합니다."
        },
        {
          "k": "B",
          "en": "Deploy AWS Storage Gateway with cached volumes so a frequently accessed subset remains on premises while the primary data is stored in Amazon S3.",
          "ko": "캐시된 볼륨을 사용하는 AWS Storage Gateway를 배포하여 자주 액세스하는 데이터 하위 집합의 복사본을 로컬에 유지하면서 Amazon S3에 데이터를 저장합니다."
        },
        {
          "k": "C",
          "en": "Deploy AWS Storage Gateway with stored volumes, keep all primary data on premises, and asynchronously back up point-in-time snapshots to Amazon S3.",
          "ko": "저장된 볼륨을 사용하는 AWS Storage Gateway를 배포하여 모든 기본 데이터를 로컬에 저장하고 특정 시점 스냅샷을 Amazon S3에 비동기식으로 백업합니다."
        },
        {
          "k": "D",
          "en": "Deploy AWS Direct Connect and Storage Gateway stored volumes, keep data on premises, and asynchronously back up snapshots to Amazon S3.",
          "ko": "AWS Direct Connect와 Storage Gateway 저장된 볼륨을 배포하여 데이터를 로컬에 저장하고 특정 시점 스냅샷을 Amazon S3에 비동기식으로 백업합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Cached volumes keep the authoritative data in Amazon S3 and only frequently accessed data in the local cache. This reduces required on-premises capacity and network transfer while preserving low-latency access to hot data without archive retrieval charges.",
        "ko": "캐시된 볼륨은 기본 데이터를 Amazon S3에 두고 자주 액세스하는 데이터만 로컬 캐시에 유지합니다. 온프레미스 용량과 네트워크 전송을 줄이면서 아카이브 검색 요금 없이 자주 쓰는 데이터에 짧은 지연 시간으로 액세스할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Glacier retrieval introduces retrieval delays and charges and does not provide the required immediate no-fee access.",
          "ko": "Glacier 검색에는 검색 지연과 비용이 발생하므로 즉시 무료로 액세스해야 하는 요구를 충족하지 못합니다."
        },
        "C": {
          "en": "Stored volumes retain the entire primary dataset on premises, so they do not solve the local capacity shortage.",
          "ko": "저장된 볼륨은 전체 기본 데이터 세트를 온프레미스에 유지하므로 로컬 용량 부족을 해결하지 못합니다."
        },
        "D": {
          "en": "Direct Connect adds cost and stored volumes still require enough local capacity for the full dataset.",
          "ko": "Direct Connect는 비용을 추가하며 저장된 볼륨은 여전히 전체 데이터 세트를 위한 충분한 로컬 용량이 필요합니다."
        }
      }
    },
    {
      "id": "exam12-680",
      "number": 680,
      "tags": [
        "Amazon EC2 Auto Scaling",
        "Warm Pools",
        "EC2 Hibernation",
        "Application Startup",
        "Performance"
      ],
      "question": {
        "en": "A company plans to migrate an application to EC2 On-Demand Instances. Testing shows that the application takes a long time to load data into memory and become fully productive. Which solution will reduce application startup time during the next test phase?",
        "ko": "회사는 AWS로 마이그레이션하고 애플리케이션에 Amazon EC2 온디맨드 인스턴스를 사용할 계획입니다. 테스트 단계에서 애플리케이션이 메모리를 로드하고 완전히 생산 가능한 상태가 되는 데 오랜 시간이 걸리는 것을 확인했습니다. 다음 테스트 단계에서 애플리케이션 실행 시간을 단축할 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Launch at least two EC2 On-Demand Instances, enable Auto Scaling, and reuse them in the next test phase.",
          "ko": "두 개 이상의 EC2 온디맨드 인스턴스를 시작하고 Auto Scaling을 활성화한 뒤 다음 테스트 단계에서 인스턴스를 재사용합니다."
        },
        {
          "k": "B",
          "en": "Launch EC2 Spot Instances to support the application and scale them for the next test phase.",
          "ko": "EC2 스팟 인스턴스를 시작하여 애플리케이션을 지원하고 다음 테스트 단계에서 사용할 수 있도록 확장합니다."
        },
        {
          "k": "C",
          "en": "Launch EC2 On-Demand Instances with hibernation enabled and configure an EC2 Auto Scaling warm pool for the next test phase.",
          "ko": "최대 절전 모드를 활성화한 EC2 온디맨드 인스턴스를 시작하고 다음 테스트 단계에서 EC2 Auto Scaling 웜 풀을 구성합니다."
        },
        {
          "k": "D",
          "en": "Launch EC2 On-Demand Instances through Capacity Reservations and add more instances in the next test phase.",
          "ko": "용량 예약을 통해 EC2 온디맨드 인스턴스를 시작하고 다음 테스트 단계에서 추가 EC2 인스턴스를 시작합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "An Auto Scaling warm pool keeps pre-initialized instances ready outside the active group. Hibernation preserves RAM contents, so a resumed instance can skip the application's lengthy memory-loading and initialization work.",
        "ko": "Auto Scaling 웜 풀은 미리 초기화된 인스턴스를 활성 그룹 외부에 준비해 둡니다. 최대 절전 모드는 RAM 내용을 보존하므로 재개된 인스턴스가 애플리케이션의 긴 메모리 로드와 초기화 작업을 건너뛸 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Ordinary Auto Scaling instances still perform the full initialization process when launched and keeping extras active wastes capacity.",
          "ko": "일반 Auto Scaling 인스턴스는 시작할 때 전체 초기화 과정을 수행하며 추가 인스턴스를 계속 실행하면 용량이 낭비됩니다."
        },
        "B": {
          "en": "Spot pricing does not preserve initialized memory state and interruptions can further delay testing.",
          "ko": "스팟 요금은 초기화된 메모리 상태를 보존하지 않으며 중단으로 테스트가 더 지연될 수 있습니다."
        },
        "D": {
          "en": "Capacity Reservations guarantee capacity availability but do not pre-initialize the application or preserve RAM state.",
          "ko": "용량 예약은 용량 가용성을 보장하지만 애플리케이션을 미리 초기화하거나 RAM 상태를 보존하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-681",
      "number": 681,
      "tags": [
        "Amazon RDS for MySQL",
        "TLS",
        "Encryption in Transit",
        "Certificates",
        "Security"
      ],
      "question": {
        "en": "A company must encrypt all application data in transit when communicating with an Amazon RDS for MySQL DB instance. A security audit found that KMS encryption at rest was enabled but encryption in transit was not. What should a solutions architect do?",
        "ko": "회사는 Amazon RDS for MySQL DB 인스턴스와 통신하는 동안 전송 중인 모든 애플리케이션 데이터를 암호화해야 합니다. 보안 감사 결과 AWS KMS를 사용한 저장 데이터 암호화는 활성화되었지만 전송 중 암호화는 활성화되지 않았습니다. 보안 요구 사항을 충족하려면 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Enable IAM database authentication on the database.",
          "ko": "데이터베이스에서 IAM 데이터베이스 인증을 활성화합니다."
        },
        {
          "k": "B",
          "en": "Provide a self-signed certificate and use it for every connection to the RDS instance.",
          "ko": "자체 서명된 인증서를 제공하고 RDS 인스턴스에 대한 모든 연결에 사용합니다."
        },
        {
          "k": "C",
          "en": "Take a snapshot of the RDS instance and restore it to a new encrypted instance.",
          "ko": "RDS 인스턴스의 스냅샷을 생성하고 암호화가 활성화된 새 인스턴스로 복원합니다."
        },
        {
          "k": "D",
          "en": "Download the AWS-provided root certificate and configure every connection to the RDS instance to use the certificate.",
          "ko": "AWS에서 제공하는 루트 인증서를 다운로드하고 RDS 인스턴스에 대한 모든 연결에서 인증서를 사용하도록 구성합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "Amazon RDS supports TLS for encrypted client connections. Applications should trust the AWS RDS certificate authority and require TLS when connecting so data is encrypted and the server certificate is validated.",
        "ko": "Amazon RDS는 암호화된 클라이언트 연결을 위한 TLS를 지원합니다. 애플리케이션이 AWS RDS 인증 기관을 신뢰하고 연결 시 TLS를 요구하도록 구성하면 데이터를 암호화하고 서버 인증서를 검증할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "IAM database authentication changes how clients authenticate but does not by itself require every connection to use TLS.",
          "ko": "IAM 데이터베이스 인증은 클라이언트 인증 방식을 변경하지만 그 자체로 모든 연결에 TLS 사용을 강제하지는 않습니다."
        },
        "B": {
          "en": "RDS presents AWS-managed certificates; clients should trust the AWS RDS CA instead of supplying an unrelated self-signed certificate.",
          "ko": "RDS는 AWS 관리형 인증서를 제시하므로 클라이언트는 관련 없는 자체 서명 인증서 대신 AWS RDS CA를 신뢰해야 합니다."
        },
        "C": {
          "en": "Restoring to an encrypted instance addresses encryption at rest, which is already enabled, rather than encryption in transit.",
          "ko": "암호화된 인스턴스로 복원하는 것은 이미 활성화된 저장 데이터 암호화를 처리할 뿐 전송 중 암호화를 해결하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-682",
      "number": 682,
      "tags": [
        "Amazon ElastiCache for Redis",
        "Amazon RDS for PostgreSQL",
        "Geospatial",
        "Caching",
        "Performance"
      ],
      "question": {
        "en": "A multiplayer mobile game tracks players' real-time locations by latitude and longitude. Location data is stored in Amazon RDS for PostgreSQL with a read replica, but the database cannot maintain read and write performance during peak usage as the user base grows. What should a solutions architect do to improve the data tier?",
        "ko": "모바일 장치용 멀티플레이어 게임은 위도와 경도를 기반으로 플레이어의 실시간 위치를 추적합니다. 위치 데이터는 읽기 전용 복제본이 있는 Amazon RDS for PostgreSQL DB 인스턴스에 저장되지만 사용량이 가장 많은 기간에는 데이터베이스가 읽기 및 쓰기 성능을 유지하지 못합니다. 사용자 기반도 빠르게 증가하고 있습니다. 데이터 계층 성능을 향상하려면 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a snapshot of the existing DB instance and restore it with Multi-AZ enabled.",
          "ko": "기존 DB 인스턴스의 스냅샷을 생성하고 다중 AZ를 활성화하여 복원합니다."
        },
        {
          "k": "B",
          "en": "Use an OpenSearch dashboard to migrate from Amazon RDS to Amazon OpenSearch Service.",
          "ko": "OpenSearch 대시보드를 사용하여 Amazon RDS에서 Amazon OpenSearch Service로 마이그레이션합니다."
        },
        {
          "k": "C",
          "en": "Deploy DynamoDB Accelerator in front of the existing DB instance and modify the game to use DAX.",
          "ko": "기존 DB 인스턴스 앞에 DynamoDB Accelerator(DAX)를 배포하고 DAX를 사용하도록 게임을 수정합니다."
        },
        {
          "k": "D",
          "en": "Deploy an Amazon ElastiCache for Redis cluster in front of the existing DB instance and modify the game to use Redis.",
          "ko": "기존 DB 인스턴스 앞에 Redis용 Amazon ElastiCache 클러스터를 배포하고 Redis를 사용하도록 게임을 수정합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "ElastiCache for Redis provides a high-throughput, low-latency in-memory data store and supports geospatial data types and commands. Caching rapidly changing location data reduces load on PostgreSQL and scales reads efficiently.",
        "ko": "Redis용 ElastiCache는 처리량이 높고 지연 시간이 짧은 인메모리 데이터 저장소이며 지리 공간 데이터 유형과 명령을 지원합니다. 빠르게 변하는 위치 데이터를 캐시하면 PostgreSQL의 부하를 줄이고 읽기를 효율적으로 확장할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Multi-AZ improves availability and failover but its standby is not used to scale application reads or writes.",
          "ko": "다중 AZ는 가용성과 장애 조치를 개선하지만 대기 인스턴스는 애플리케이션 읽기나 쓰기 확장에 사용되지 않습니다."
        },
        "B": {
          "en": "OpenSearch is designed for search and analytics and is not the best primary store for continuously updated multiplayer location state.",
          "ko": "OpenSearch는 검색과 분석용이며 지속적으로 갱신되는 멀티플레이어 위치 상태의 기본 저장소로 적합하지 않습니다."
        },
        "C": {
          "en": "DAX accelerates DynamoDB tables only and cannot be placed in front of an RDS PostgreSQL database.",
          "ko": "DAX는 DynamoDB 테이블만 가속하며 RDS PostgreSQL 데이터베이스 앞에 배치할 수 없습니다."
        }
      }
    },
    {
      "id": "exam12-683",
      "number": 683,
      "tags": [
        "AWS Config",
        "restricted-ssh",
        "Amazon SNS",
        "Compliance",
        "Security Groups"
      ],
      "question": {
        "en": "A company policy states that security groups must not allow SSH from 0.0.0.0/0. The company needs an automated solution that reports violations as quickly as possible with minimal operational overhead. What should a solutions architect do?",
        "ko": "회사의 규정 준수 정책은 보안 그룹에 0.0.0.0/0의 SSH를 허용하는 규칙이 포함되어서는 안 된다고 명시합니다. 정책 위반 시 가능한 한 빨리 회사에 알리는 자동화된 솔루션이 필요합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하려면 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Write a Lambda script that monitors security groups for SSH open to 0.0.0.0/0 and creates an alert whenever it finds one.",
          "ko": "0.0.0.0/0에 열린 SSH 보안 그룹을 모니터링하고 발견할 때마다 알림을 생성하는 AWS Lambda 스크립트를 작성합니다."
        },
        {
          "k": "B",
          "en": "Enable the AWS Config managed rule restricted-ssh and create an Amazon SNS notification for noncompliant resources.",
          "ko": "제한된 SSH AWS Config 관리형 규칙을 활성화하고 비준수 리소스가 생성되면 Amazon SNS 알림을 생성합니다."
        },
        {
          "k": "C",
          "en": "Create a global IAM role that can open security groups and network ACLs, and create an SNS topic whenever a user assumes the role.",
          "ko": "전 세계적으로 보안 그룹과 네트워크 ACL을 열 수 있는 IAM 역할을 만들고 사용자가 역할을 맡을 때마다 알림을 생성하는 SNS 주제를 생성합니다."
        },
        {
          "k": "D",
          "en": "Use an SCP to prevent non-administrators from creating or editing security groups and notify the ticketing system when administrator access is requested.",
          "ko": "관리자가 아닌 사용자의 보안 그룹 생성 또는 편집을 방지하는 SCP를 구성하고 관리자 권한 규칙을 요청할 때 티켓팅 시스템에 알림을 만듭니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "The AWS Config managed rule restricted-ssh continuously evaluates whether security groups allow unrestricted inbound TCP access to port 22. Config can publish compliance changes through Amazon SNS without custom monitoring code.",
        "ko": "AWS Config 관리형 규칙 restricted-ssh는 보안 그룹이 TCP 포트 22에 제한 없는 인바운드 액세스를 허용하는지 지속적으로 평가합니다. Config는 사용자 지정 모니터링 코드 없이 Amazon SNS로 규정 준수 변경을 알릴 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Custom Lambda polling and state handling require more development and maintenance than the managed Config rule.",
          "ko": "사용자 지정 Lambda 폴링과 상태 처리는 관리형 Config 규칙보다 더 많은 개발과 유지 관리가 필요합니다."
        },
        "C": {
          "en": "An IAM role and assumption notification do not detect whether a prohibited security-group rule was actually created.",
          "ko": "IAM 역할과 역할 수임 알림은 금지된 보안 그룹 규칙이 실제로 생성되었는지 탐지하지 못합니다."
        },
        "D": {
          "en": "This restricts who can edit groups but does not continuously evaluate all groups for the prohibited rule or report violations immediately.",
          "ko": "이 방법은 편집 주체를 제한할 뿐 모든 보안 그룹에서 금지 규칙을 지속적으로 평가하거나 위반을 즉시 보고하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-684",
      "number": 684,
      "tags": [
        "AWS Transfer Family",
        "Amazon S3",
        "SFTP",
        "Amazon EC2 Auto Scaling",
        "Migration"
      ],
      "question": {
        "en": "A company has a nightly batch routine that analyzes report files received daily through SFTP on an on-premises file system. The company wants to move the solution to AWS with high availability, resilience, and minimal operational effort. Which solution meets these requirements?",
        "ko": "회사에는 온프레미스 파일 시스템이 SFTP를 통해 매일 수신하는 보고서 파일을 분석하는 야간 일괄 처리 루틴이 있습니다. 회사는 솔루션을 AWS 클라우드로 이전하려고 하며 높은 가용성과 복원력, 최소한의 운영 노력이 필요합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Deploy AWS Transfer Family for SFTP with Amazon EFS and run the batch job on EC2 instances in an Auto Scaling group with a scheduled scaling policy.",
          "ko": "SFTP용 AWS Transfer Family와 Amazon EFS 파일 시스템을 배포하고 예약된 조정 정책이 있는 Auto Scaling 그룹의 EC2 인스턴스로 배치 작업을 실행합니다."
        },
        {
          "k": "B",
          "en": "Deploy one EC2 instance running Linux and SFTP with EBS storage in an Auto Scaling group whose minimum and desired capacities are 1.",
          "ko": "Linux와 SFTP 서비스를 실행하는 EC2 인스턴스와 EBS 볼륨을 배포하고 최소 및 원하는 용량이 1인 Auto Scaling 그룹을 사용합니다."
        },
        {
          "k": "C",
          "en": "Deploy one EC2 instance running Linux and SFTP with Amazon EFS in an Auto Scaling group whose minimum and desired capacities are 1.",
          "ko": "Linux와 SFTP 서비스를 실행하는 EC2 인스턴스와 Amazon EFS를 배포하고 최소 및 원하는 용량이 1인 Auto Scaling 그룹을 사용합니다."
        },
        {
          "k": "D",
          "en": "Deploy AWS Transfer Family for SFTP with an Amazon S3 bucket. Modify the application to retrieve batch files from S3 and run the batch job on EC2 instances in an Auto Scaling group with a scheduled scaling policy.",
          "ko": "SFTP용 AWS Transfer Family와 Amazon S3 버킷을 배포합니다. 처리를 위해 Amazon S3에서 EC2 인스턴스로 배치 파일을 가져오도록 애플리케이션을 수정하고 예약된 조정 정책이 있는 Auto Scaling 그룹의 EC2 인스턴스로 일괄 작업을 실행합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "AWS Transfer Family provides a managed, highly available SFTP endpoint backed directly by durable Amazon S3 storage. A scheduled Auto Scaling group supplies batch compute only during the nightly processing window, minimizing administration and cost.",
        "ko": "AWS Transfer Family는 내구성이 높은 Amazon S3 스토리지를 직접 사용하는 관리형 고가용성 SFTP 엔드포인트를 제공합니다. 예약된 Auto Scaling 그룹은 야간 처리 시간에만 배치 컴퓨팅을 제공하므로 관리와 비용을 최소화합니다."
      },
      "why_wrong": {
        "A": {
          "en": "EFS is unnecessary for the durable file landing zone when Transfer Family can write directly to S3, making this option more costly and complex.",
          "ko": "Transfer Family가 S3에 직접 쓸 수 있으므로 내구성 있는 파일 수신 영역에 EFS를 추가하는 것은 불필요하고 비용과 복잡성을 높입니다."
        },
        "B": {
          "en": "A single EC2 SFTP server and a single EBS volume are not highly available and require server administration.",
          "ko": "단일 EC2 SFTP 서버와 단일 EBS 볼륨은 고가용성이 아니며 서버 관리가 필요합니다."
        },
        "C": {
          "en": "EFS improves storage availability, but the single self-managed SFTP instance remains a managed failure point and operational burden.",
          "ko": "EFS는 스토리지 가용성을 높이지만 자체 관리하는 단일 SFTP 인스턴스는 여전히 장애 지점이자 운영 부담입니다."
        }
      }
    },
    {
      "id": "exam12-685",
      "number": 685,
      "tags": [
        "Network Load Balancer",
        "UDP",
        "Amazon EC2",
        "Gaming",
        "Performance"
      ],
      "question": {
        "en": "An online video game company must maintain very low latency for game servers running on EC2 instances. The solution must handle millions of UDP internet traffic requests per second. Which solution is most cost-effective?",
        "ko": "온라인 비디오 게임 회사는 Amazon EC2 인스턴스에서 실행되는 게임 서버에 매우 낮은 대기 시간을 유지해야 합니다. 초당 수백만 건의 UDP 인터넷 트래픽 요청을 처리할 수 있는 솔루션이 필요합니다. 가장 비용 효율적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure an Application Load Balancer with the required protocol and ports and register the EC2 instances as targets.",
          "ko": "인터넷 트래픽에 필요한 프로토콜과 포트로 Application Load Balancer를 구성하고 EC2 인스턴스를 대상으로 지정합니다."
        },
        {
          "k": "B",
          "en": "Configure a Gateway Load Balancer for internet traffic and register the EC2 instances as targets.",
          "ko": "인터넷 트래픽을 위한 Gateway Load Balancer를 구성하고 EC2 인스턴스를 대상으로 지정합니다."
        },
        {
          "k": "C",
          "en": "Configure a Network Load Balancer with the required protocol and ports and register the EC2 instances as targets.",
          "ko": "인터넷 트래픽에 필요한 프로토콜과 포트로 Network Load Balancer를 구성하고 EC2 인스턴스를 대상으로 지정합니다."
        },
        {
          "k": "D",
          "en": "Run an identical set of game servers on EC2 instances in another Region and route internet traffic between both sets.",
          "ko": "별도의 AWS 리전에 있는 EC2 인스턴스에서 동일한 게임 서버 세트를 시작하고 두 EC2 인스턴스 세트로 인터넷 트래픽을 라우팅합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Network Load Balancer operates at Layer 4, supports UDP listeners, and is designed for very high throughput and ultra-low latency. It can distribute millions of flows to EC2 targets without the application-layer cost and features of an ALB.",
        "ko": "Network Load Balancer는 계층 4에서 작동하고 UDP 리스너를 지원하며 매우 높은 처리량과 매우 짧은 지연 시간을 위해 설계되었습니다. ALB의 애플리케이션 계층 기능과 비용 없이 수백만 개의 흐름을 EC2 대상으로 분산할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Application Load Balancer supports HTTP and HTTPS application traffic, not UDP listeners.",
          "ko": "Application Load Balancer는 HTTP와 HTTPS 애플리케이션 트래픽을 지원하며 UDP 리스너를 지원하지 않습니다."
        },
        "B": {
          "en": "Gateway Load Balancer is for inserting virtual network appliances through GENEVE, not directly balancing game clients to servers.",
          "ko": "Gateway Load Balancer는 GENEVE를 통해 가상 네트워크 어플라이언스를 삽입하기 위한 것이며 게임 클라이언트를 서버로 직접 분산하지 않습니다."
        },
        "D": {
          "en": "A second regional server fleet adds significant cost and does not itself provide the required UDP load-balancing endpoint.",
          "ko": "두 번째 리전 서버 플릿은 상당한 비용을 추가하며 필요한 UDP 로드 밸런싱 엔드포인트를 자체적으로 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-686",
      "number": 686,
      "tags": [
        "Amazon Rekognition",
        "AWS Lambda",
        "Content Moderation",
        "Images",
        "Serverless"
      ],
      "question": {
        "en": "A company needs to prevent photos containing unwanted content from being uploaded to its web application. The solution must not include training a machine learning model. Which solution meets these requirements?",
        "ko": "회사는 원치 않는 콘텐츠가 포함된 사진이 웹 애플리케이션에 업로드되는 것을 방지해야 합니다. 솔루션에 기계 학습 모델 교육이 포함되어서는 안 됩니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use SageMaker Autopilot to create and deploy a model, then invoke its real-time endpoint when a new photo is uploaded.",
          "ko": "Amazon SageMaker Autopilot으로 모델을 생성하고 배포한 뒤 새 사진이 업로드될 때 웹 애플리케이션이 호출하는 실시간 엔드포인트를 만듭니다."
        },
        {
          "k": "B",
          "en": "Create a Lambda function that uses Amazon Rekognition to detect unwanted content and expose it through a Lambda function URL for the web application.",
          "ko": "Amazon Rekognition을 사용하여 원치 않는 콘텐츠를 감지하는 AWS Lambda 함수를 생성하고 새 사진이 업로드될 때 웹 애플리케이션이 호출하는 Lambda 함수 URL을 생성합니다."
        },
        {
          "k": "C",
          "en": "Create an Amazon CloudFront function that uses Amazon Comprehend to detect unwanted content and associate it with the web application.",
          "ko": "Amazon Comprehend를 사용하여 원치 않는 콘텐츠를 감지하는 Amazon CloudFront 함수를 생성하고 기능을 웹 애플리케이션과 연결합니다."
        },
        {
          "k": "D",
          "en": "Create a Lambda function that uses Amazon Rekognition Video to detect unwanted content and expose it through a Lambda function URL.",
          "ko": "Amazon Rekognition Video를 사용하여 원치 않는 콘텐츠를 감지하는 AWS Lambda 함수를 생성하고 웹 애플리케이션이 호출하는 Lambda 함수 URL을 생성합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Amazon Rekognition provides pretrained image moderation models that detect explicit, suggestive, and other unsafe visual content. A Lambda function can call the moderation API before accepting an upload without training or hosting a model.",
        "ko": "Amazon Rekognition은 노골적이거나 선정적인 콘텐츠 등 안전하지 않은 시각 콘텐츠를 감지하는 사전 훈련된 이미지 조정 모델을 제공합니다. Lambda 함수는 모델을 교육하거나 호스팅하지 않고 업로드를 수락하기 전에 조정 API를 호출할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "SageMaker Autopilot creates and trains a model, which violates the explicit requirement.",
          "ko": "SageMaker Autopilot은 모델을 생성하고 교육하므로 명시된 요구 사항을 위반합니다."
        },
        "C": {
          "en": "Amazon Comprehend analyzes text rather than image content, and CloudFront Functions cannot call arbitrary AWS services over the network.",
          "ko": "Amazon Comprehend는 이미지가 아니라 텍스트를 분석하며 CloudFront Functions는 네트워크를 통해 임의의 AWS 서비스를 호출할 수 없습니다."
        },
        "D": {
          "en": "Rekognition Video is intended for video streams and stored videos; the requirement concerns still photos.",
          "ko": "Rekognition Video는 비디오 스트림과 저장된 비디오용이며 요구 사항은 정지 사진에 관한 것입니다."
        }
      }
    },
    {
      "id": "exam12-687",
      "number": 687,
      "tags": [
        "Amazon DynamoDB",
        "Strongly Consistent Reads",
        "Read Consistency",
        "NoSQL",
        "Performance"
      ],
      "question": {
        "en": "An application uses an Amazon DynamoDB table for storage. Many requests do not return the latest data, although latency remains acceptable and no other database performance problems are reported. Which design change should a solutions architect recommend?",
        "ko": "애플리케이션이 저장용으로 Amazon DynamoDB 테이블을 사용합니다. 테이블에 대한 많은 요청이 최신 데이터를 반환하지 않지만 데이터베이스 성능과 관련된 다른 문제는 없고 지연 시간도 허용 범위 내에 있습니다. 어떤 설계 변경을 권장해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Add a read replica to the table.",
          "ko": "테이블에 읽기 전용 복제본을 추가합니다."
        },
        {
          "k": "B",
          "en": "Use a global secondary index.",
          "ko": "글로벌 보조 인덱스(GSI)를 사용합니다."
        },
        {
          "k": "C",
          "en": "Request strongly consistent reads from the table.",
          "ko": "테이블에 대해 강력하게 일관된 읽기를 요청합니다."
        },
        {
          "k": "D",
          "en": "Request eventually consistent reads from the table.",
          "ko": "테이블에 대해 최종적으로 일관된 읽기를 요청합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "DynamoDB reads are eventually consistent by default and can temporarily return stale data. A strongly consistent read from a table or local secondary index returns a response reflecting all successful writes completed before the read.",
        "ko": "DynamoDB 읽기는 기본적으로 최종적 일관성을 사용하므로 일시적으로 오래된 데이터를 반환할 수 있습니다. 테이블이나 로컬 보조 인덱스에서 강력한 일관된 읽기를 요청하면 읽기 전에 성공적으로 완료된 모든 쓰기가 반영됩니다."
      },
      "why_wrong": {
        "A": {
          "en": "DynamoDB does not use manually added relational-style read replicas for a table.",
          "ko": "DynamoDB 테이블에는 관계형 데이터베이스 방식의 읽기 전용 복제본을 수동으로 추가하지 않습니다."
        },
        "B": {
          "en": "Global secondary indexes provide alternate access patterns but support only eventually consistent reads.",
          "ko": "글로벌 보조 인덱스는 대체 액세스 패턴을 제공하지만 최종적 일관된 읽기만 지원합니다."
        },
        "D": {
          "en": "Eventually consistent reading is the behavior that can return stale results and therefore does not solve the problem.",
          "ko": "최종적 일관된 읽기는 오래된 결과를 반환할 수 있는 현재 동작이므로 문제를 해결하지 못합니다."
        }
      }
    },
    {
      "id": "exam12-688",
      "number": 688,
      "tags": [
        "AWS Glue DataBrew",
        "Data Preparation",
        "Data Profiling",
        "Amazon S3",
        "No-Code"
      ],
      "question": {
        "en": "A company hosts a data lake in Amazon S3 and collects Apache Parquet data from many sources. Preparation requires filtering outliers, normalizing timestamps, and creating aggregates. The company needs a prebuilt no-code transformation solution with data lineage and profiling whose transformation steps can be shared with employees. Which solution meets these requirements?",
        "ko": "회사는 Amazon S3에서 데이터 레이크를 호스팅하고 여러 데이터 소스에서 Apache Parquet 형식으로 데이터를 수집합니다. 데이터 준비에는 이상 항목 필터링, 표준 날짜 및 시간 값으로 정규화, 분석용 집계 생성이 포함됩니다. 변환된 데이터는 분석가가 액세스하는 S3 버킷에 저장해야 합니다. 코드가 필요 없는 사전 구축형 데이터 변환, 데이터 계보 및 프로파일링을 제공하고 전사 직원과 변환 단계를 공유할 수 있는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure an AWS Glue Studio visual canvas and share AWS Glue jobs with employees.",
          "ko": "데이터 변환을 위한 AWS Glue Studio 시각적 캔버스를 구성하고 AWS Glue 작업을 사용하여 변환 단계를 직원과 공유합니다."
        },
        {
          "k": "B",
          "en": "Configure Amazon EMR Serverless and share EMR Serverless jobs with employees.",
          "ko": "데이터 변환을 위해 Amazon EMR Serverless를 구성하고 EMR Serverless 작업을 사용하여 변환 단계를 직원과 공유합니다."
        },
        {
          "k": "C",
          "en": "Configure AWS Glue DataBrew and share the transformation steps with employees by using DataBrew recipes.",
          "ko": "데이터 변환을 위해 AWS Glue DataBrew를 구성하고 DataBrew 레시피를 사용하여 변환 단계를 직원과 공유합니다."
        },
        {
          "k": "D",
          "en": "Create Amazon Athena tables and SQL transformation queries and share the queries with employees.",
          "ko": "데이터용 Amazon Athena 테이블을 생성하고 Athena SQL 쿼리로 데이터를 변환한 다음 쿼리를 직원과 공유합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "AWS Glue DataBrew is a visual, no-code data preparation service with built-in transformations and data profiling. Reusable recipes record ordered transformation steps and can be shared and run to write prepared results to S3.",
        "ko": "AWS Glue DataBrew는 기본 제공 변환과 데이터 프로파일링을 제공하는 시각적 노코드 데이터 준비 서비스입니다. 재사용 가능한 레시피가 순서가 있는 변환 단계를 기록하므로 이를 공유하고 실행하여 준비된 결과를 S3에 저장할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Glue Studio is an ETL authoring environment, but DataBrew is the purpose-built no-code data preparation and profiling tool with shareable recipes.",
          "ko": "Glue Studio도 ETL 작성 환경이지만 공유 가능한 레시피와 데이터 프로파일링을 갖춘 전용 노코드 데이터 준비 도구는 DataBrew입니다."
        },
        "B": {
          "en": "EMR Serverless runs Spark or Hive jobs and requires code or query development rather than visual no-code recipes.",
          "ko": "EMR Serverless는 Spark 또는 Hive 작업을 실행하므로 시각적 노코드 레시피 대신 코드나 쿼리 개발이 필요합니다."
        },
        "D": {
          "en": "Athena SQL can transform data but does not provide the requested visual no-code preparation, built-in profiling, and recipe workflow.",
          "ko": "Athena SQL은 데이터를 변환할 수 있지만 요청된 시각적 노코드 준비, 기본 프로파일링, 레시피 워크플로를 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-689",
      "number": 689,
      "tags": [
        "Amazon Route 53 Resolver",
        "Outbound Endpoint",
        "Hybrid DNS",
        "VPN",
        "Private DNS"
      ],
      "question": {
        "en": "A company is designing an AWS web application connected by VPN to its existing data center. The application uses Route 53 and must use private DNS records to communicate from the VPC with on-premises services in the most secure way. Which solution meets these requirements?",
        "ko": "회사가 AWS에서 웹 애플리케이션을 설계하고 있습니다. 애플리케이션은 기존 데이터 센터와 회사 VPC 간 VPN 연결을 사용하며 DNS 서비스로 Amazon Route 53을 사용합니다. 애플리케이션은 프라이빗 DNS 레코드를 사용하여 VPC에서 온프레미스 서비스와 가장 안전하게 통신해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a Route 53 Resolver outbound endpoint and a forwarding rule, and associate the rule with the VPC.",
          "ko": "Route 53 Resolver 아웃바운드 엔드포인트를 생성하고 해석기 규칙을 만든 다음 규칙을 VPC와 연결합니다."
        },
        {
          "k": "B",
          "en": "Create a Route 53 Resolver inbound endpoint and a forwarding rule, and associate the rule with the VPC.",
          "ko": "Route 53 Resolver 인바운드 엔드포인트를 생성하고 해석기 규칙을 만든 다음 규칙을 VPC와 연결합니다."
        },
        {
          "k": "C",
          "en": "Create a Route 53 private hosted zone and connect the private hosted zone to the VPC.",
          "ko": "Route 53 프라이빗 호스팅 영역을 생성하고 프라이빗 호스팅 영역을 VPC와 연결합니다."
        },
        {
          "k": "D",
          "en": "Create a Route 53 public hosted zone and records for each service that must communicate.",
          "ko": "Route 53 퍼블릭 호스팅 영역을 생성하고 서비스 통신을 허용하기 위해 각 서비스에 대한 레코드를 만듭니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "A Resolver outbound endpoint forwards DNS queries originating in a VPC to resolvers on the on-premises network over the private VPN path. A conditional forwarding rule selects the on-premises domains and is associated with the VPC.",
        "ko": "Resolver 아웃바운드 엔드포인트는 VPC에서 시작된 DNS 쿼리를 프라이빗 VPN 경로를 통해 온프레미스 네트워크의 해석기로 전달합니다. 조건부 전달 규칙은 온프레미스 도메인을 지정하며 VPC에 연결됩니다."
      },
      "why_wrong": {
        "B": {
          "en": "Inbound endpoints handle DNS queries from on premises to Route 53 Resolver in a VPC, the reverse of the required direction.",
          "ko": "인바운드 엔드포인트는 온프레미스에서 VPC의 Route 53 Resolver로 들어오는 DNS 쿼리를 처리하므로 필요한 방향과 반대입니다."
        },
        "C": {
          "en": "A private hosted zone stores records managed in Route 53 but does not forward queries to the existing on-premises DNS service.",
          "ko": "프라이빗 호스팅 영역은 Route 53에서 관리하는 레코드를 저장하지만 기존 온프레미스 DNS 서비스로 쿼리를 전달하지 않습니다."
        },
        "D": {
          "en": "Publishing private service records in a public hosted zone exposes DNS information and does not provide private hybrid resolution.",
          "ko": "프라이빗 서비스 레코드를 퍼블릭 호스팅 영역에 게시하면 DNS 정보가 노출되며 프라이빗 하이브리드 확인을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-690",
      "number": 690,
      "tags": [
        "AWS Shield Advanced",
        "AWS Shield Response Team",
        "DDoS",
        "Application Load Balancer",
        "Security"
      ],
      "question": {
        "en": "A city deployed a web application on EC2 instances behind an ALB. Users report sporadic performance associated with DDoS attacks from random IP addresses. The city needs minimal configuration changes and expert assistance with DDoS source investigation and mitigation. Which solution meets these requirements?",
        "ko": "한 도시가 ALB 뒤 Amazon EC2 인스턴스에서 실행되는 웹 애플리케이션을 배포했습니다. 애플리케이션 사용자는 무작위 IP 주소에서 발생하는 DDoS 공격과 관련된 산발적인 성능을 보고했습니다. 도시는 구성 변경을 최소화하고 DDoS 소스에 대한 감사 추적과 완화 지원을 제공하는 솔루션이 필요합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Enable an AWS WAF web ACL on the ALB and configure a rule that blocks traffic from unknown sources.",
          "ko": "ALB에서 AWS WAF 웹 ACL을 활성화하고 알 수 없는 소스의 트래픽을 차단하는 규칙을 구성합니다."
        },
        {
          "k": "B",
          "en": "Subscribe to Amazon Inspector and engage the AWS DDoS Response Team to integrate mitigation controls.",
          "ko": "Amazon Inspector를 구독하고 AWS DDoS 대응 팀(DRT)을 참여시켜 완화 제어 기능을 서비스에 통합합니다."
        },
        {
          "k": "C",
          "en": "Subscribe to AWS Shield Advanced and engage the AWS DDoS Response Team to integrate mitigation controls.",
          "ko": "AWS Shield Advanced를 구독하고 AWS DDoS 대응 팀(DRT)을 참여시켜 완화 제어 기능을 서비스에 통합합니다."
        },
        {
          "k": "D",
          "en": "Create a CloudFront distribution with the ALB as its origin, enable an AWS WAF web ACL, and block unknown sources.",
          "ko": "ALB를 오리진으로 하는 CloudFront 배포를 생성하고 AWS WAF 웹 ACL을 활성화한 다음 알 수 없는 소스의 트래픽을 차단하는 규칙을 구성합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "AWS Shield Advanced provides managed protection and detailed visibility for sophisticated DDoS attacks on resources such as ALBs. Its subscription includes access to the AWS Shield Response Team for investigation and mitigation assistance with minimal application changes.",
        "ko": "AWS Shield Advanced는 ALB 같은 리소스에 대한 정교한 DDoS 공격을 관리형으로 보호하고 상세한 가시성을 제공합니다. 구독에는 애플리케이션 변경을 최소화하면서 조사와 완화를 지원하는 AWS Shield 대응 팀 이용 권한이 포함됩니다."
      },
      "why_wrong": {
        "A": {
          "en": "Random and changing attack sources cannot be reliably blocked by a simple unknown-source WAF rule, and this does not provide response-team assistance.",
          "ko": "무작위로 변하는 공격 소스는 단순한 알 수 없는 소스 WAF 규칙으로 안정적으로 차단할 수 없으며 대응 팀 지원도 제공하지 않습니다."
        },
        "B": {
          "en": "Amazon Inspector scans workloads for software vulnerabilities and unintended exposure; it is not a DDoS protection subscription and does not grant Shield Response Team support.",
          "ko": "Amazon Inspector는 소프트웨어 취약점과 의도하지 않은 노출을 검사하며 DDoS 보호 구독이 아니고 Shield 대응 팀 지원을 제공하지 않습니다."
        },
        "D": {
          "en": "CloudFront and WAF can improve edge protection, but this adds architectural changes and still does not provide the requested DDoS expert engagement without Shield Advanced.",
          "ko": "CloudFront와 WAF는 엣지 보호를 개선할 수 있지만 아키텍처 변경이 추가되며 Shield Advanced 없이는 요청된 DDoS 전문가 지원을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-691",
      "number": 691,
      "tags": [
        "Amazon EKS",
        "AWS Fargate",
        "Amazon EFS",
        "Persistent Storage",
        "Containers"
      ],
      "question": {
        "en": "A company is deploying a new application to Amazon EKS using AWS Fargate. The application needs highly available, durable persistent storage that can be shared across multiple application containers with minimal operational overhead. Which solution meets these requirements?",
        "ko": "회사가 AWS Fargate를 사용하여 Amazon EKS에 새 애플리케이션을 배포하고 있습니다. 애플리케이션에는 가용성과 내결함성이 높고 여러 애플리케이션 컨테이너 간에 공유할 수 있는 영구 스토리지가 필요합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an EBS volume in the same Availability Zone as the EKS worker nodes, register it in a StorageClass, and use EBS Multi-Attach across containers.",
          "ko": "EKS 작업자 노드와 동일한 가용 영역에 EBS 볼륨을 생성하고 StorageClass에 등록한 뒤 EBS 다중 연결로 컨테이너 간 데이터를 공유합니다."
        },
        {
          "k": "B",
          "en": "Create an Amazon EFS file system, register it in an EKS StorageClass, and use the same file system for all containers.",
          "ko": "Amazon EFS 파일 시스템을 생성하고 EKS 클러스터의 StorageClass 객체에 등록한 뒤 모든 컨테이너에서 동일한 파일 시스템을 사용합니다."
        },
        {
          "k": "C",
          "en": "Create an EBS volume, register it in an EKS StorageClass, and use the same volume for all pods.",
          "ko": "Amazon EBS 볼륨을 생성하고 EKS 클러스터의 StorageClass 객체에 등록한 뒤 모든 파드에서 동일한 볼륨을 사용합니다."
        },
        {
          "k": "D",
          "en": "Create an EFS file system in the worker nodes' Availability Zone and use Lambda to synchronize data between file systems.",
          "ko": "EKS 작업자 노드와 동일한 가용 영역에 EFS 파일 시스템을 생성하고 StorageClass에 등록한 뒤 Lambda 함수로 파일 시스템 간 데이터를 동기화합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Amazon EFS is a regional, managed, elastic file system that supports shared read-write access from multiple EKS pods. The EFS CSI driver supports EKS on Fargate and EFS stores data redundantly across Availability Zones.",
        "ko": "Amazon EFS는 여러 EKS 파드에서 공유 읽기·쓰기 액세스를 지원하는 리전 단위의 관리형 탄력적 파일 시스템입니다. EFS CSI 드라이버는 Fargate 기반 EKS를 지원하며 EFS는 여러 가용 영역에 데이터를 중복 저장합니다."
      },
      "why_wrong": {
        "A": {
          "en": "EBS volumes are Availability Zone scoped, Fargate does not support EBS persistent volumes in this way, and Multi-Attach is not a general shared file system.",
          "ko": "EBS 볼륨은 가용 영역 범위이며 Fargate는 이 방식의 EBS 영구 볼륨을 지원하지 않고 Multi-Attach도 범용 공유 파일 시스템이 아닙니다."
        },
        "C": {
          "en": "A single EBS volume cannot provide the required regional, shared file storage for Fargate pods across Availability Zones.",
          "ko": "단일 EBS 볼륨은 여러 가용 영역의 Fargate 파드에 필요한 리전 단위 공유 파일 스토리지를 제공하지 못합니다."
        },
        "D": {
          "en": "EFS is already regional and replicated; synchronizing separate file systems with Lambda is unnecessary and operationally complex.",
          "ko": "EFS는 이미 리전 단위로 복제되므로 별도 파일 시스템을 Lambda로 동기화하는 것은 불필요하고 운영이 복잡합니다."
        }
      }
    },
    {
      "id": "exam12-692",
      "number": 692,
      "tags": [
        "Amazon EC2",
        "Amazon RDS for MySQL",
        "Private Subnet",
        "Three-Tier Architecture",
        "Point-in-Time Recovery"
      ],
      "question": {
        "en": "A company is migrating a three-tier application from on-premises third-party VMs to AWS. The database runs on MySQL. The company wants minimal architectural changes, point-in-time database recovery, and the least operational overhead. Which solution meets these requirements?",
        "ko": "회사는 3계층 애플리케이션을 온프레미스의 타사 가상 머신에서 AWS로 마이그레이션하려고 합니다. 웹 계층과 애플리케이션 계층은 VM에서 실행되고 데이터베이스 계층은 MySQL에서 실행됩니다. 아키텍처 변경을 최소화하고 특정 시점 데이터베이스 복원과 최소한의 운영 오버헤드를 제공하려면 어떤 솔루션을 사용해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Migrate the web and application tiers to EC2 instances in private subnets and the database tier to Amazon RDS for MySQL in a private subnet.",
          "ko": "웹 계층과 애플리케이션 계층을 프라이빗 서브넷의 EC2 인스턴스로 마이그레이션하고 데이터베이스 계층을 프라이빗 서브넷의 Amazon RDS for MySQL로 마이그레이션합니다."
        },
        {
          "k": "B",
          "en": "Migrate the web tier to EC2 in a public subnet, the application tier to EC2 in a private subnet, and the database to Aurora MySQL in a private subnet.",
          "ko": "웹 계층을 퍼블릭 서브넷의 EC2로, 애플리케이션 계층을 프라이빗 서브넷의 EC2로, 데이터베이스를 프라이빗 서브넷의 Aurora MySQL로 마이그레이션합니다."
        },
        {
          "k": "C",
          "en": "Migrate the web tier to EC2 in a public subnet, the application tier to EC2 in a private subnet, and the database to Amazon RDS for MySQL in a private subnet.",
          "ko": "웹 계층을 퍼블릭 서브넷의 EC2 인스턴스로, 애플리케이션 계층을 프라이빗 서브넷의 EC2 인스턴스로, 데이터베이스 계층을 프라이빗 서브넷의 Amazon RDS for MySQL로 마이그레이션합니다."
        },
        {
          "k": "D",
          "en": "Migrate both web and application tiers to EC2 in public subnets and the database tier to Aurora MySQL in a public subnet.",
          "ko": "웹 계층과 애플리케이션 계층을 퍼블릭 서브넷의 EC2 인스턴스로 마이그레이션하고 데이터베이스 계층을 퍼블릭 서브넷의 Aurora MySQL로 마이그레이션합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "EC2 preserves the VM-based web and application architecture, while RDS for MySQL is engine compatible and provides managed backups with point-in-time recovery. Only the internet-facing web tier belongs in a public subnet; application and database tiers remain private.",
        "ko": "EC2는 VM 기반 웹 및 애플리케이션 아키텍처를 유지하고 RDS for MySQL은 엔진 호환성과 관리형 백업 및 특정 시점 복구를 제공합니다. 인터넷에 노출되는 웹 계층만 퍼블릭 서브넷에 두고 애플리케이션과 데이터베이스 계층은 프라이빗 서브넷에 둡니다."
      },
      "why_wrong": {
        "A": {
          "en": "Putting the web tier only in private subnets does not provide the stated public application entry point without additional components omitted from the option.",
          "ko": "웹 계층을 프라이빗 서브넷에만 두면 선택지에 없는 추가 구성 요소 없이 공개 애플리케이션 진입점을 제공하지 못합니다."
        },
        "B": {
          "en": "Aurora is MySQL compatible but changes the database platform more than necessary when RDS for MySQL directly satisfies the requirements.",
          "ko": "Aurora는 MySQL 호환이지만 RDS for MySQL이 요구를 직접 충족하는 상황에서 데이터베이스 플랫폼을 필요 이상으로 변경합니다."
        },
        "D": {
          "en": "The application and database tiers should not be publicly reachable, and Aurora introduces an unnecessary platform change.",
          "ko": "애플리케이션과 데이터베이스 계층은 공개적으로 접근 가능하면 안 되며 Aurora는 불필요한 플랫폼 변경을 추가합니다."
        }
      }
    },
    {
      "id": "exam12-693",
      "number": 693,
      "tags": [
        "Amazon S3",
        "S3 Transfer Acceleration",
        "Mobile Application",
        "Global Uploads",
        "Performance"
      ],
      "question": {
        "en": "A mobile app lets worldwide users upload photos and videos. Users commonly access new content within minutes, and new content quickly replaces old content. Users consume 90% of news content in the AWS Region where it was uploaded. Which solution provides the lowest upload latency?",
        "ko": "새 모바일 앱은 전 세계 사용자가 지역 뉴스와 사진 및 비디오를 게시하도록 합니다. 게시 후 처음 몇 분 안에 콘텐츠에 액세스하는 경우가 많고 새 콘텐츠가 이전 콘텐츠를 빠르게 대체합니다. 사용자는 뉴스가 업로드된 AWS 리전 내에서 콘텐츠의 90%를 소비합니다. 콘텐츠 업로드 지연 시간을 가장 짧게 하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Upload and store content in Amazon S3 and use Amazon CloudFront for uploads.",
          "ko": "Amazon S3에 콘텐츠를 업로드하고 저장하며 업로드에 Amazon CloudFront를 사용합니다."
        },
        {
          "k": "B",
          "en": "Upload and store content in Amazon S3 and use S3 Transfer Acceleration for uploads.",
          "ko": "Amazon S3에 콘텐츠를 업로드하고 저장하며 업로드에 S3 Transfer Acceleration을 사용합니다."
        },
        {
          "k": "C",
          "en": "Upload content to an EC2 instance in the Region closest to the user and then copy the data to Amazon S3.",
          "ko": "사용자에게 가장 가까운 리전의 EC2 인스턴스에 콘텐츠를 업로드한 뒤 데이터를 Amazon S3에 복사합니다."
        },
        {
          "k": "D",
          "en": "Upload content to Amazon S3 in the Region closest to the user and use multiple CloudFront distributions.",
          "ko": "사용자에게 가장 가까운 리전의 Amazon S3에 콘텐츠를 업로드하고 여러 Amazon CloudFront 배포를 사용합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "S3 Transfer Acceleration accepts uploads at nearby AWS edge locations and carries them over the optimized AWS global network to the destination bucket. It accelerates long-distance uploads without adding regional compute or replication workflows.",
        "ko": "S3 Transfer Acceleration은 가까운 AWS 엣지 로케이션에서 업로드를 받아 최적화된 AWS 글로벌 네트워크를 통해 대상 버킷으로 전송합니다. 리전별 컴퓨팅이나 복제 워크플로 없이 장거리 업로드를 가속합니다."
      },
      "why_wrong": {
        "A": {
          "en": "CloudFront primarily accelerates content delivery and does not replace S3 Transfer Acceleration as the direct optimized S3 upload feature.",
          "ko": "CloudFront는 주로 콘텐츠 전송을 가속하며 직접 최적화된 S3 업로드 기능인 S3 Transfer Acceleration을 대체하지 않습니다."
        },
        "C": {
          "en": "Regional EC2 upload proxies require instances, scaling, and a second copy operation, increasing latency and operations.",
          "ko": "리전별 EC2 업로드 프록시는 인스턴스와 확장 및 두 번째 복사 작업이 필요해 지연 시간과 운영 부담이 늘어납니다."
        },
        "D": {
          "en": "Multiple regional buckets and distributions add replication and consistency complexity and are unnecessary for accelerating uploads to one bucket.",
          "ko": "여러 리전 버킷과 배포는 복제 및 일관성 복잡성을 추가하며 단일 버킷 업로드 가속에 필요하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-694",
      "number": 694,
      "tags": [
        "AWS DataSync",
        "Amazon S3",
        "NFS",
        "Backup",
        "Hybrid Storage"
      ],
      "question": {
        "en": "An on-premises NFS server contains a small amount of data that must be backed up periodically to Amazon S3. Which solution is most cost-effective?",
        "ko": "회사의 온프레미스 데이터 센터에 소량의 데이터를 Amazon S3에 정기적으로 백업해야 하는 NFS 서버가 있습니다. 가장 비용 효율적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure AWS Glue to copy the on-premises server data to Amazon S3.",
          "ko": "온프레미스 서버의 데이터를 Amazon S3에 복사하도록 AWS Glue를 설정합니다."
        },
        {
          "k": "B",
          "en": "Install an AWS DataSync agent on premises and schedule synchronization tasks to Amazon S3.",
          "ko": "온프레미스 서버에 AWS DataSync 에이전트를 설치하고 데이터를 Amazon S3에 동기화하는 작업을 예약합니다."
        },
        {
          "k": "C",
          "en": "Use AWS Transfer Family for SFTP to synchronize data from the NFS server to Amazon S3.",
          "ko": "AWS Transfer Family for SFTP를 사용하여 온프레미스 NFS 서버에서 Amazon S3로 데이터를 동기화합니다."
        },
        {
          "k": "D",
          "en": "Create an AWS Direct Connect connection between the data center and VPC and copy the data to Amazon S3.",
          "ko": "온프레미스 데이터 센터와 VPC 간에 AWS Direct Connect 연결을 설정하고 데이터를 Amazon S3에 복사합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "AWS DataSync is purpose-built for scheduled online transfers between NFS storage and AWS storage services. Its agent, incremental copying, integrity verification, encryption, and bandwidth controls avoid custom transfer tooling and a dedicated network connection.",
        "ko": "AWS DataSync는 NFS 스토리지와 AWS 스토리지 서비스 간 예약 온라인 전송을 위해 설계되었습니다. 에이전트, 증분 복사, 무결성 확인, 암호화 및 대역폭 제어를 제공하여 사용자 지정 전송 도구나 전용 네트워크 연결이 필요 없습니다."
      },
      "why_wrong": {
        "A": {
          "en": "AWS Glue is an ETL service and is not designed to synchronize an on-premises NFS file system for backup.",
          "ko": "AWS Glue는 ETL 서비스이며 온프레미스 NFS 파일 시스템을 백업용으로 동기화하도록 설계되지 않았습니다."
        },
        "C": {
          "en": "Transfer Family exposes managed file-transfer endpoints but does not natively crawl and synchronize an existing NFS server.",
          "ko": "Transfer Family는 관리형 파일 전송 엔드포인트를 제공하지만 기존 NFS 서버를 직접 탐색하고 동기화하지 않습니다."
        },
        "D": {
          "en": "Direct Connect has substantial fixed cost and still requires custom copy automation, making it excessive for a small periodic backup.",
          "ko": "Direct Connect는 고정 비용이 크고 별도 복사 자동화도 필요하므로 소규모 정기 백업에는 과도합니다."
        }
      }
    },
    {
      "id": "exam12-695",
      "number": 695,
      "tags": [
        "Amazon RDS Proxy",
        "AWS Lambda",
        "Amazon RDS for PostgreSQL",
        "Connection Pooling",
        "Scalability"
      ],
      "question": {
        "en": "An ecommerce website has unpredictable traffic and Lambda functions directly access a private Amazon RDS for PostgreSQL DB instance. The company wants predictable database performance without overloading the database with too many connections. What should a solutions architect do?",
        "ko": "전자상거래 웹사이트에 예측할 수 없는 트래픽이 있으며 AWS Lambda 함수가 PostgreSQL용 프라이빗 Amazon RDS DB 인스턴스에 직접 액세스합니다. 예측 가능한 데이터베이스 성능을 유지하면서 너무 많은 연결로 데이터베이스에 과부하가 걸리지 않게 하려면 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Point the client driver at the custom RDS endpoint and deploy the Lambda functions inside the VPC.",
          "ko": "클라이언트 드라이버가 RDS 사용자 지정 엔드포인트를 가리키도록 하고 VPC 내부에 Lambda 함수를 배포합니다."
        },
        {
          "k": "B",
          "en": "Point the client driver at the RDS Proxy endpoint and deploy the Lambda functions inside the VPC.",
          "ko": "클라이언트 드라이버가 RDS 프록시 엔드포인트를 가리키도록 하고 VPC 내부에 Lambda 함수를 배포합니다."
        },
        {
          "k": "C",
          "en": "Point the client driver at the custom RDS endpoint and deploy the Lambda functions outside the VPC.",
          "ko": "클라이언트 드라이버가 RDS 사용자 지정 엔드포인트를 가리키도록 하고 VPC 외부에 Lambda 함수를 배포합니다."
        },
        {
          "k": "D",
          "en": "Point the client driver at the RDS Proxy endpoint and deploy the Lambda functions outside the VPC.",
          "ko": "클라이언트 드라이버가 RDS 프록시 엔드포인트를 가리키도록 하고 VPC 외부에 Lambda 함수를 배포합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "RDS Proxy pools and reuses database connections so bursts of Lambda invocations do not create an equal number of backend connections. Because the database and proxy are private, the Lambda functions need VPC networking and should connect to the proxy endpoint.",
        "ko": "RDS Proxy는 데이터베이스 연결을 풀링하고 재사용하므로 Lambda 호출이 급증해도 같은 수의 백엔드 연결이 생성되지 않습니다. 데이터베이스와 프록시가 프라이빗이므로 Lambda 함수는 VPC 네트워킹을 사용하고 프록시 엔드포인트에 연결해야 합니다."
      },
      "why_wrong": {
        "A": {
          "en": "A custom database endpoint does not provide the connection pooling needed to absorb Lambda concurrency.",
          "ko": "사용자 지정 데이터베이스 엔드포인트는 Lambda 동시성을 흡수하는 데 필요한 연결 풀링을 제공하지 않습니다."
        },
        "C": {
          "en": "This neither provides connection pooling nor gives a Lambda function outside the VPC direct access to a private DB instance.",
          "ko": "이 구성은 연결 풀링을 제공하지 않고 VPC 외부 Lambda에 프라이빗 DB 인스턴스의 직접 액세스도 제공하지 않습니다."
        },
        "D": {
          "en": "Using RDS Proxy is appropriate, but a Lambda function outside the VPC cannot reach the private proxy endpoint.",
          "ko": "RDS Proxy 사용은 적절하지만 VPC 외부의 Lambda 함수는 프라이빗 프록시 엔드포인트에 접근할 수 없습니다."
        }
      }
    },
    {
      "id": "exam12-696",
      "number": 696,
      "tags": [
        "Amazon Kinesis Data Streams",
        "Amazon Data Firehose",
        "Amazon S3",
        "Real-Time Streaming",
        "Data Collection"
      ],
      "question": {
        "en": "An application runs on EC2 instances across multiple Availability Zones and must collect real-time data from a third-party application. The company needs a data collection solution that delivers the raw data to an Amazon S3 bucket. Which solution meets these requirements?",
        "ko": "회사의 애플리케이션은 여러 가용 영역의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 타사 애플리케이션에서 실시간 데이터를 수집해야 하며 수집된 원시 데이터를 Amazon S3 버킷에 배치하는 솔루션이 필요합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a Kinesis data stream for collection, create an Amazon Data Firehose delivery stream that reads from it, and set the S3 bucket as the destination.",
          "ko": "데이터 수집을 위해 Amazon Kinesis 데이터 스트림을 생성합니다. Kinesis 데이터 스트림을 소스로 사용하는 Amazon Data Firehose 전송 스트림을 생성하고 S3 버킷을 대상으로 지정합니다."
        },
        {
          "k": "B",
          "en": "Create an AWS DMS migration task, use replica EC2 instances as source endpoints and S3 as the target, and enable change data capture.",
          "ko": "AWS DMS 데이터베이스 마이그레이션 작업을 생성하고 EC2 복제 인스턴스를 소스 엔드포인트로, S3 버킷을 대상 엔드포인트로 지정한 뒤 지속적인 변경 사항 복제를 설정합니다."
        },
        {
          "k": "C",
          "en": "Install an AWS DataSync agent on the EC2 instances and configure a task that transfers data from EC2 to the S3 bucket.",
          "ko": "EC2 인스턴스에 AWS DataSync 에이전트를 생성하고 구성한 뒤 EC2 인스턴스에서 S3 버킷으로 데이터를 전송하는 DataSync 작업을 구성합니다."
        },
        {
          "k": "D",
          "en": "Create a Direct Connect connection to the third-party application and have the application put records directly into a Firehose delivery stream with S3 as the destination.",
          "ko": "데이터 수집을 위해 타사 애플리케이션에 대한 AWS Direct Connect 연결을 생성하고 애플리케이션이 Amazon Data Firehose 전송 스트림에 직접 PUT 작업을 수행하도록 하며 S3를 대상으로 지정합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Kinesis Data Streams durably ingests high-volume real-time records from producers. Amazon Data Firehose can read the stream, buffer records, and deliver the raw data automatically to Amazon S3 with little operational management.",
        "ko": "Kinesis Data Streams는 생산자의 대용량 실시간 레코드를 내구성 있게 수집합니다. Amazon Data Firehose는 스트림을 읽고 레코드를 버퍼링한 뒤 운영 관리 부담을 최소화하면서 원시 데이터를 Amazon S3로 자동 전송할 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "DMS replicates data from supported database sources; an EC2 instance itself is not a database source endpoint for arbitrary streaming application data.",
          "ko": "DMS는 지원되는 데이터베이스 소스의 데이터를 복제하며 EC2 인스턴스 자체는 임의의 스트리밍 애플리케이션 데이터를 위한 데이터베이스 소스 엔드포인트가 아닙니다."
        },
        "C": {
          "en": "DataSync performs scheduled or task-based file transfers and is not a continuous real-time event ingestion service.",
          "ko": "DataSync는 예약 또는 작업 기반 파일 전송을 수행하며 지속적인 실시간 이벤트 수집 서비스가 아닙니다."
        },
        "D": {
          "en": "Direct Connect is unnecessary and expensive for this flow, and it does not create the durable decoupled ingestion layer provided by Kinesis Data Streams.",
          "ko": "Direct Connect는 이 흐름에 불필요하고 비용이 크며 Kinesis Data Streams가 제공하는 내구성 있는 분리형 수집 계층을 만들지 않습니다."
        }
      }
    },
    {
      "id": "exam12-697",
      "number": 697,
      "tags": [
        "Amazon Aurora MySQL",
        "Aurora Auto Scaling",
        "Aurora Replicas",
        "Read Scaling",
        "Migration"
      ],
      "question": {
        "en": "A web application uses an Amazon RDS for MySQL primary DB instance and five read replicas. Replicas must not lag the primary by more than 1 second, and the database runs scheduled stored procedures. Traffic growth adds replica latency during peak reads. Which solution minimizes application changes and ongoing operational overhead?",
        "ko": "회사는 AWS에 웹 애플리케이션을 배포할 예정입니다. 백엔드는 기본 DB 인스턴스와 5개의 읽기 전용 복제본이 있는 Amazon RDS for MySQL을 사용합니다. 복제본은 기본 인스턴스보다 1초 이상 지연되면 안 되며 데이터베이스는 정기적으로 예약된 저장 프로시저를 실행합니다. 트래픽 증가로 읽기가 가장 많은 기간에 복제 지연이 발생합니다. 애플리케이션 코드 변경과 지속적인 운영 오버헤드를 최소화하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Migrate to Amazon Aurora MySQL, replace the read replicas with Aurora Replicas, configure Aurora Auto Scaling, and replace stored procedures with Aurora MySQL native functions where required.",
          "ko": "데이터베이스를 Amazon Aurora MySQL로 마이그레이션하고 읽기 전용 복제본을 Aurora 복제본으로 교체한 뒤 Aurora Auto Scaling을 구성합니다. 필요한 저장 프로시저를 Aurora MySQL 기본 함수로 바꿉니다."
        },
        {
          "k": "B",
          "en": "Deploy Amazon ElastiCache for Redis in front of the database, change the application to read from the cache first, and replace stored procedures with Lambda functions.",
          "ko": "데이터베이스 앞에 Redis용 Amazon ElastiCache를 배포하고 애플리케이션이 데이터베이스를 쿼리하기 전에 캐시를 확인하도록 수정하며 저장 프로시저를 AWS Lambda 함수로 바꿉니다."
        },
        {
          "k": "C",
          "en": "Migrate the database to self-managed MySQL on EC2, use large compute-optimized instances for every replica, and maintain the stored procedures on EC2.",
          "ko": "데이터베이스를 Amazon EC2에서 실행되는 자체 관리형 MySQL로 마이그레이션하고 모든 복제본 노드에 컴퓨팅 최적화 대규모 EC2 인스턴스를 선택하며 저장 프로시저를 유지 관리합니다."
        },
        {
          "k": "D",
          "en": "Migrate to DynamoDB, provision sufficient read capacity with on-demand scaling, and replace the stored procedures with DynamoDB Streams processing.",
          "ko": "데이터베이스를 Amazon DynamoDB로 마이그레이션하고 필요한 읽기 용량을 프로비저닝하며 온디맨드 확장을 구성하고 저장 프로시저를 DynamoDB Streams 처리로 바꿉니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Aurora MySQL is MySQL compatible, supports up to 15 low-lag Aurora Replicas that share the cluster volume, and can automatically add or remove replicas with Aurora Auto Scaling. It preserves the relational model while reducing replica management and application changes.",
        "ko": "Aurora MySQL은 MySQL과 호환되고 클러스터 볼륨을 공유하는 지연 시간이 짧은 Aurora 복제본을 최대 15개까지 지원하며 Aurora Auto Scaling으로 복제본을 자동 추가하거나 제거할 수 있습니다. 관계형 모델을 유지하면서 복제본 관리와 애플리케이션 변경을 줄입니다."
      },
      "why_wrong": {
        "B": {
          "en": "Adding a cache and moving stored procedures to Lambda requires substantial application redesign and cache consistency management.",
          "ko": "캐시를 추가하고 저장 프로시저를 Lambda로 옮기면 상당한 애플리케이션 재설계와 캐시 일관성 관리가 필요합니다."
        },
        "C": {
          "en": "Self-managed MySQL on EC2 increases patching, replication, scaling, backup, and recovery operations and does not automatically control lag.",
          "ko": "EC2의 자체 관리형 MySQL은 패치, 복제, 확장, 백업 및 복구 운영을 늘리고 복제 지연을 자동 제어하지 않습니다."
        },
        "D": {
          "en": "Moving from relational MySQL to DynamoDB requires major schema, query, transaction, and stored-procedure redesign.",
          "ko": "관계형 MySQL에서 DynamoDB로 이동하면 스키마, 쿼리, 트랜잭션 및 저장 프로시저를 대폭 재설계해야 합니다."
        }
      }
    },
    {
      "id": "exam12-698",
      "number": 698,
      "tags": [
        "Amazon MSK",
        "Public Access",
        "Mutual TLS",
        "Apache Kafka",
        "Networking"
      ],
      "question": {
        "en": "A real-time data collection solution uses the latest Amazon MSK version in private subnets across three Availability Zones. It must be redesigned for public internet access while encrypting data in transit. Which solution provides the greatest operational efficiency?",
        "ko": "회사가 AWS에서 실시간 데이터 수집 솔루션을 실행합니다. 솔루션은 최신 버전의 Amazon Managed Streaming for Apache Kafka(Amazon MSK)로 구성되고 3개 가용 영역에 걸친 프라이빗 서브넷에 배포됩니다. 인터넷을 통해 공개적으로 사용할 수 있도록 재설계하면서 전송 중 데이터를 암호화해야 합니다. 가장 운영 효율적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure public subnets in the existing VPC, deploy the MSK cluster in them, and update the cluster security settings to enable mutual TLS authentication.",
          "ko": "기존 VPC에 퍼블릭 서브넷을 구성하고 퍼블릭 서브넷에 MSK 클러스터를 배포한 뒤 상호 TLS 인증을 활성화하도록 MSK 클러스터 보안 설정을 업데이트합니다."
        },
        {
          "k": "B",
          "en": "Create a new VPC with public subnets, deploy the MSK cluster there, and enable mutual TLS authentication.",
          "ko": "퍼블릭 서브넷이 있는 새 VPC를 생성하고 퍼블릭 서브넷에 MSK 클러스터를 배포한 뒤 상호 TLS 인증을 활성화합니다."
        },
        {
          "k": "C",
          "en": "Deploy an ALB in private subnets and allow inbound HTTPS from the VPC CIDR block.",
          "ko": "프라이빗 서브넷을 사용하는 ALB를 배포하고 HTTPS 프로토콜에 대한 VPC CIDR 블록의 인바운드 트래픽을 허용합니다."
        },
        {
          "k": "D",
          "en": "Deploy an NLB in private subnets and configure an HTTPS listener for internet communication.",
          "ko": "프라이빗 서브넷을 사용하는 NLB를 배포하고 인터넷을 통한 HTTPS 통신을 위해 NLB 수신기를 구성합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Amazon MSK supports public access for supported clusters through public subnets and encrypted, authenticated client connections. Reusing the existing VPC and enabling mutual TLS avoids operating proxy load balancers or creating an unnecessary additional VPC.",
        "ko": "Amazon MSK는 지원되는 클러스터에서 퍼블릭 서브넷과 암호화되고 인증된 클라이언트 연결을 통해 퍼블릭 액세스를 지원합니다. 기존 VPC를 재사용하고 상호 TLS를 활성화하면 프록시 로드 밸런서를 운영하거나 불필요한 추가 VPC를 만들 필요가 없습니다."
      },
      "why_wrong": {
        "B": {
          "en": "A separate VPC adds peering, routing, and lifecycle administration when the existing VPC can host the public subnets.",
          "ko": "기존 VPC가 퍼블릭 서브넷을 호스팅할 수 있으므로 별도 VPC는 피어링, 라우팅 및 수명 주기 관리만 추가합니다."
        },
        "C": {
          "en": "ALB is an HTTP-layer load balancer and cannot proxy native Kafka broker protocols; a private ALB is not publicly reachable either.",
          "ko": "ALB는 HTTP 계층 로드 밸런서로 기본 Kafka 브로커 프로토콜을 프록시할 수 없으며 프라이빗 ALB는 공개적으로 접근할 수도 없습니다."
        },
        "D": {
          "en": "A private NLB is not internet-facing, and Kafka client connections are not exposed as ordinary HTTPS traffic in this design.",
          "ko": "프라이빗 NLB는 인터넷에 노출되지 않으며 이 설계에서 Kafka 클라이언트 연결은 일반 HTTPS 트래픽으로 제공되지 않습니다."
        }
      }
    },
    {
      "id": "exam12-699",
      "number": 699,
      "tags": [
        "AWS Health API",
        "AWS Business Support",
        "Deployment Automation",
        "Service Health",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company with AWS Business Support must programmatically check AWS infrastructure health before starting every new deployment and pause deployments if an issue is reported. Which solution meets these requirements?",
        "ko": "회사는 AWS Business Support 플랜을 사용합니다. 규정 준수 규칙에 따라 배포 전에 AWS 인프라 상태를 확인해야 하며 새 배포 시작 시 이를 프로그래밍 방식으로 자동화해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Call the AWS Trusted Advisor API at the start of every deployment and pause all new deployments if it returns an issue.",
          "ko": "각 배포를 시작할 때 AWS Trusted Advisor API를 사용하고 API가 문제를 반환하면 모든 새 배포를 일시 중지합니다."
        },
        {
          "k": "B",
          "en": "Call the AWS Health API at the start of every deployment and pause all new deployments if it returns an issue.",
          "ko": "각 배포를 시작할 때 AWS Health API를 사용하고 API가 문제를 반환하면 모든 새 배포를 일시 중지합니다."
        },
        {
          "k": "C",
          "en": "Query the AWS Support API at the start of every deployment and pause all new deployments if it returns an unresolved case.",
          "ko": "각 배포 시작 시 AWS Support API를 쿼리하고 API가 미해결 문제를 반환하면 모든 새 배포를 일시 중지합니다."
        },
        {
          "k": "D",
          "en": "Send an API call to every workload before deployment and pause if any call fails.",
          "ko": "배포 전에 각 워크로드에 API 호출을 보내고 API 호출이 실패하면 배포를 일시 중지합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "The AWS Health API provides programmatic access to account-specific health events shown in AWS Health. A deployment pipeline can query affected services and resources and halt automatically when an active issue could affect deployment.",
        "ko": "AWS Health API는 AWS Health에 표시되는 계정별 상태 이벤트에 프로그래밍 방식으로 액세스하게 해줍니다. 배포 파이프라인은 영향을 받는 서비스와 리소스를 조회하고 활성 문제가 배포에 영향을 줄 수 있을 때 자동으로 중단할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Trusted Advisor checks best-practice posture and quotas rather than providing the authoritative stream of current account-specific service health events.",
          "ko": "Trusted Advisor는 모범 사례 상태와 할당량을 검사하며 현재 계정별 서비스 상태 이벤트의 권위 있는 스트림을 제공하지 않습니다."
        },
        "C": {
          "en": "The Support API manages support cases; an unresolved case does not directly represent current AWS service or resource health.",
          "ko": "Support API는 지원 사례를 관리하며 미해결 사례가 현재 AWS 서비스 또는 리소스 상태를 직접 나타내지는 않습니다."
        },
        "D": {
          "en": "Custom probes for every workload are harder to maintain and cannot identify broader AWS events before individual endpoints fail.",
          "ko": "모든 워크로드에 대한 사용자 지정 검사는 유지 관리가 어렵고 개별 엔드포인트가 실패하기 전에 광범위한 AWS 이벤트를 식별하지 못합니다."
        }
      }
    },
    {
      "id": "exam12-700",
      "number": 700,
      "tags": [
        "Amazon RDS Proxy",
        "Connection Pooling",
        "Amazon RDS",
        "Scalability",
        "High Availability"
      ],
      "question": {
        "en": "A company runs an application connected to Amazon RDS. The application scales during weekends and annual peak periods. The company wants the database to scale more effectively for the application's connections with minimal operational overhead. Which solution meets these requirements?",
        "ko": "회사는 Amazon RDS 데이터베이스에 연결되는 애플리케이션을 AWS에서 실행합니다. 애플리케이션은 주말과 연중 피크 시간대에 확장됩니다. 데이터베이스에 연결하는 애플리케이션을 위해 데이터베이스를 더 효과적으로 확장하려고 합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use DynamoDB with connection pooling alongside the database and change the application to use a DynamoDB endpoint.",
          "ko": "데이터베이스 대상 그룹 구성 및 연결 풀링과 함께 Amazon DynamoDB를 사용하고 DynamoDB 엔드포인트를 사용하도록 애플리케이션을 변경합니다."
        },
        {
          "k": "B",
          "en": "Use Amazon RDS Proxy with the database target group and change the application to use the RDS Proxy endpoint.",
          "ko": "데이터베이스 대상 그룹과 함께 Amazon RDS Proxy를 사용하고 RDS Proxy 엔드포인트를 사용하도록 애플리케이션을 변경합니다."
        },
        {
          "k": "C",
          "en": "Use a custom proxy running on EC2 as the database intermediary and change the application to use the custom proxy endpoint.",
          "ko": "Amazon EC2에서 실행되는 사용자 지정 프록시를 데이터베이스 중개자로 사용하고 사용자 지정 프록시 엔드포인트를 사용하도록 애플리케이션을 변경합니다."
        },
        {
          "k": "D",
          "en": "Use Lambda functions to provide connection pooling to the database target group and change the application to call the functions.",
          "ko": "AWS Lambda 함수를 사용하여 데이터베이스 대상 그룹에 연결 풀링을 제공하고 Lambda 함수를 사용하도록 애플리케이션을 변경합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Amazon RDS Proxy is a fully managed, highly available database proxy that pools and shares established connections. It absorbs connection surges as the application scales, improves failover resilience, and removes the need to run proxy servers.",
        "ko": "Amazon RDS Proxy는 설정된 연결을 풀링하고 공유하는 완전관리형 고가용성 데이터베이스 프록시입니다. 애플리케이션 확장 시 연결 급증을 흡수하고 장애 조치 복원력을 높이며 프록시 서버를 직접 운영할 필요를 없앱니다."
      },
      "why_wrong": {
        "A": {
          "en": "DynamoDB is a different NoSQL database service and cannot act as a connection pool for RDS.",
          "ko": "DynamoDB는 별도의 NoSQL 데이터베이스 서비스이며 RDS의 연결 풀 역할을 할 수 없습니다."
        },
        "C": {
          "en": "A custom EC2 proxy can pool connections but adds provisioning, patching, scaling, and high-availability management.",
          "ko": "사용자 지정 EC2 프록시는 연결을 풀링할 수 있지만 프로비저닝, 패치, 확장 및 고가용성 관리가 추가됩니다."
        },
        "D": {
          "en": "Lambda functions are clients of a database and do not provide a shared managed connection-pooling endpoint for other application clients.",
          "ko": "Lambda 함수는 데이터베이스 클라이언트이며 다른 애플리케이션 클라이언트를 위한 공유 관리형 연결 풀링 엔드포인트를 제공하지 않습니다."
        }
      }
    }
  ]
});
