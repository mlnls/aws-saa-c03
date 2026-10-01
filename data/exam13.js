/* Exam 13 · Topic 1 · 현재 수록 범위: 601~650번 */
window.SAA_EXAMS = window.SAA_EXAMS || [];
window.SAA_EXAMS.push({
  "id": "exam13",
  "title": "Exam 13",
  "note": "Topic 1 · #601–650",
  "questions": [
    {
      "id": "exam12-601",
      "number": 601,
      "tags": [
        "Amazon RDS for PostgreSQL",
        "Amazon Aurora PostgreSQL",
        "Aurora Read Replica",
        "Database Migration",
        "Low Downtime"
      ],
      "question": {
        "en": "A company runs a critical database on Amazon RDS for PostgreSQL. The company wants to migrate to Amazon Aurora PostgreSQL while minimizing downtime and data loss. Which solution meets these requirements with the least operational overhead?",
        "ko": "회사는 PostgreSQL DB 인스턴스용 Amazon RDS에서 중요 데이터베이스를 실행합니다. 회사는 가동 중지 시간과 데이터 손실을 최소화하면서 Amazon Aurora PostgreSQL로 마이그레이션하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a DB snapshot of the RDS for PostgreSQL instance and restore a new Aurora PostgreSQL DB cluster from the snapshot.",
          "ko": "RDS for PostgreSQL DB 인스턴스의 DB 스냅샷을 생성하여 새로운 Aurora PostgreSQL DB 클러스터를 채웁니다."
        },
        {
          "k": "B",
          "en": "Create an Aurora read replica of the RDS for PostgreSQL DB instance and promote the replica to a new Aurora PostgreSQL DB cluster.",
          "ko": "RDS for PostgreSQL DB 인스턴스의 Aurora 읽기 전용 복제본을 생성합니다. Aurora 읽기 복제본을 새로운 Aurora PostgreSQL DB 클러스터로 승격합니다."
        },
        {
          "k": "C",
          "en": "Use data import from Amazon S3 to migrate the database to an Aurora PostgreSQL DB cluster.",
          "ko": "Amazon S3에서 데이터 가져오기를 사용하여 데이터베이스를 Aurora PostgreSQL DB 클러스터로 마이그레이션합니다."
        },
        {
          "k": "D",
          "en": "Back up the RDS for PostgreSQL database with pg_dump and restore the backup to a new Aurora PostgreSQL DB cluster.",
          "ko": "pg_dump 유틸리티를 사용하여 PostgreSQL용 RDS 데이터베이스를 백업합니다. 새 Aurora PostgreSQL DB 클러스터로 백업을 복원합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "An Aurora read replica continuously replicates changes from the RDS for PostgreSQL source. Promoting it after replication catches up provides a managed migration with a short cutover and minimal data loss.",
        "ko": "Aurora 읽기 전용 복제본은 RDS for PostgreSQL 원본의 변경 사항을 계속 복제합니다. 복제가 따라잡은 뒤 승격하면 짧은 전환 시간과 최소한의 데이터 손실로 관리형 마이그레이션을 수행할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A snapshot restore captures a point in time and requires a longer write outage or a separate change-capture process.",
          "ko": "스냅샷 복원은 특정 시점만 캡처하므로 더 긴 쓰기 중단이나 별도 변경 캡처 과정이 필요합니다."
        },
        "C": {
          "en": "S3 import is not the managed continuous replication path for this PostgreSQL migration.",
          "ko": "S3 가져오기는 이 PostgreSQL 마이그레이션을 위한 관리형 연속 복제 경로가 아닙니다."
        },
        "D": {
          "en": "A logical dump and restore is manual and requires more downtime for a critical database.",
          "ko": "논리적 덤프와 복원은 수동 작업이 많고 중요 데이터베이스의 중단 시간이 더 깁니다."
        }
      }
    },
    {
      "id": "exam12-602",
      "number": 602,
      "tags": [
        "AWS Backup",
        "Amazon EBS",
        "Amazon EC2",
        "Disaster Recovery",
        "Restore"
      ],
      "question": {
        "en": "A company's infrastructure consists of hundreds of EC2 instances that use EBS storage. A solutions architect must verify that every instance can be restored after a disaster. What should be done with the least effort?",
        "ko": "회사의 인프라는 Amazon EBS 스토리지를 사용하는 수백 개의 Amazon EC2 인스턴스로 구성됩니다. 솔루션 아키텍트는 재해 발생 후 모든 EC2 인스턴스를 복구할 수 있는지 확인해야 합니다. 최소한의 노력으로 이 요구 사항을 충족하려면 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Snapshot the EBS storage attached to every instance and create a CloudFormation template to launch new instances from the storage.",
          "ko": "각 EC2 인스턴스에 연결된 EBS 스토리지의 스냅샷을 찍습니다. EBS 스토리지에서 새 EC2 인스턴스를 시작하려면 AWS CloudFormation 템플릿을 생성하세요."
        },
        {
          "k": "B",
          "en": "Snapshot every attached EBS volume and use Elastic Beanstalk to create an EC2 template-based environment and attach the storage.",
          "ko": "각 EC2 인스턴스에 연결된 EBS 스토리지의 스냅샷을 찍습니다. AWS Elastic Beanstalk를 사용하여 EC2 템플릿 기반 환경을 설정하고 EBS 스토리지를 연결하세요."
        },
        {
          "k": "C",
          "en": "Use AWS Backup to configure a backup plan for the full group of EC2 instances. Use the AWS Backup API or AWS CLI to automate and parallelize restores.",
          "ko": "AWS Backup을 사용하여 전체 EC2 인스턴스 그룹에 대한 백업 계획을 설정합니다. AWS Backup API 또는 AWS CLI를 사용하여 여러 EC2 인스턴스의 복원 프로세스를 자동화하고 병렬화합니다."
        },
        {
          "k": "D",
          "en": "Snapshot each attached EBS volume and create Lambda functions to copy AMIs, restore them, and attach the EBS storage.",
          "ko": "각 EC2 인스턴스에 연결된 EBS 스토리지의 스냅샷을 찍고 AMI를 복사하는 AWS Lambda 함수를 생성합니다. 복사된 AMI로 복원을 수행하고 EBS 스토리지를 연결하는 또 다른 Lambda 함수를 생성합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "AWS Backup centrally protects EC2 instances and their EBS volumes. Its API and CLI support automated restore workflows across many resources, avoiding custom per-instance orchestration.",
        "ko": "AWS Backup은 EC2 인스턴스와 EBS 볼륨을 중앙에서 보호합니다. API와 CLI로 많은 리소스의 복원 워크플로를 자동화할 수 있어 인스턴스별 사용자 지정 오케스트레이션이 필요 없습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Managing hundreds of snapshots and restoration templates manually creates substantial operational work.",
          "ko": "수백 개의 스냅샷과 복원 템플릿을 직접 관리하면 운영 작업이 크게 늘어납니다."
        },
        "B": {
          "en": "Elastic Beanstalk is an application deployment service and is not a fleet-wide EC2 disaster recovery mechanism.",
          "ko": "Elastic Beanstalk는 애플리케이션 배포 서비스이며 전체 EC2 플릿의 재해 복구 수단이 아닙니다."
        },
        "D": {
          "en": "Custom Lambda functions for AMI copies and volume attachment duplicate capabilities that AWS Backup already manages.",
          "ko": "AMI 복사와 볼륨 연결용 사용자 지정 Lambda 함수는 AWS Backup의 관리형 기능을 불필요하게 재구현합니다."
        }
      }
    },
    {
      "id": "exam12-603",
      "number": 603,
      "tags": [
        "AWS Step Functions",
        "Distributed Map",
        "Amazon S3",
        "Serverless",
        "Parallel Processing"
      ],
      "question": {
        "en": "A company needs a serverless solution for large-scale parallel processing of a semi-structured dataset. The S3 dataset contains logs, media files, sales transactions, and IoT sensor data, with thousands of items to process in parallel. Which solution is most operationally efficient?",
        "ko": "최근 한 회사가 AWS 클라우드로 마이그레이션했습니다. 회사는 반구조화된 데이터 세트의 대규모 병렬 주문형 처리를 위한 서버리스 솔루션을 원합니다. 데이터는 Amazon S3에 저장되는 로그, 미디어 파일, 판매 거래 및 IoT 센서 데이터로 구성됩니다. 회사는 데이터 세트에 있는 수천 개의 항목을 병렬로 처리하는 솔루션을 원합니다. 가장 효율적인 운영 효율성으로 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use an AWS Step Functions Map state in Inline mode to process the data in parallel.",
          "ko": "인라인 모드에서 AWS Step Functions 맵 상태를 사용하여 데이터를 병렬로 처리합니다."
        },
        {
          "k": "B",
          "en": "Use an AWS Step Functions Map state in Distributed mode to process the data in parallel.",
          "ko": "분산 모드에서 AWS Step Functions 맵 상태를 사용하여 데이터를 병렬로 처리합니다."
        },
        {
          "k": "C",
          "en": "Use AWS Glue to process the data in parallel.",
          "ko": "AWS Glue를 사용하여 데이터를 병렬로 처리합니다."
        },
        {
          "k": "D",
          "en": "Use multiple AWS Lambda functions to process the data in parallel.",
          "ko": "여러 AWS Lambda 함수를 사용하여 데이터를 병렬로 처리합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Step Functions Distributed Map is designed for high-concurrency processing of large S3 datasets. It creates child workflow executions and provides managed concurrency, execution tracking, retries, and failure handling.",
        "ko": "Step Functions 분산 맵은 대규모 S3 데이터 세트의 높은 동시성 처리를 위해 설계되었습니다. 하위 워크플로 실행을 생성하고 동시성, 실행 추적, 재시도 및 실패 처리를 관리합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Inline Map has much lower concurrency and execution-history limits and is not intended for thousands of items.",
          "ko": "인라인 맵은 동시성과 실행 기록 제한이 훨씬 낮아 수천 개 항목 처리에 적합하지 않습니다."
        },
        "C": {
          "en": "Glue is suitable for ETL, but Distributed Map more directly provides serverless per-item orchestration for this varied dataset.",
          "ko": "Glue는 ETL에 적합하지만 이 다양한 데이터 세트의 항목별 서버리스 오케스트레이션에는 분산 맵이 더 직접적입니다."
        },
        "D": {
          "en": "Coordinating many Lambda functions directly requires custom concurrency, retry, and progress management.",
          "ko": "여러 Lambda 함수를 직접 조정하면 동시성, 재시도 및 진행 상태를 사용자 지정 관리해야 합니다."
        }
      }
    },
    {
      "id": "exam12-604",
      "number": 604,
      "tags": [
        "AWS Snowball",
        "Amazon S3",
        "Data Migration",
        "Offline Transfer",
        "Bandwidth"
      ],
      "question": {
        "en": "A company must migrate 10 PB of data to Amazon S3 within 6 weeks. The data center has a 500 Mbps internet uplink shared with other applications, and only 80% can be used for this one-time migration. Which solution meets the requirements?",
        "ko": "회사는 6주 안에 10PB의 데이터를 Amazon S3로 마이그레이션할 예정입니다. 현재 데이터 센터에는 인터넷에 대한 500Mbps 업링크가 있습니다. 다른 온프레미스 애플리케이션은 업링크를 공유합니다. 회사는 이 일회성 마이그레이션 작업에 인터넷 대역폭의 80%를 사용할 수 있습니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure AWS DataSync to migrate the data to S3 and automatically validate it.",
          "ko": "데이터를 Amazon S3로 마이그레이션하고 자동으로 데이터를 확인하도록 AWS DataSync를 구성합니다."
        },
        {
          "k": "B",
          "en": "Use rsync to transfer the data directly to Amazon S3.",
          "ko": "rsync를 사용하여 데이터를 Amazon S3로 직접 전송합니다."
        },
        {
          "k": "C",
          "en": "Use the AWS CLI and multiple copy processes to send the data directly to Amazon S3.",
          "ko": "AWS CLI와 여러 복사 프로세스를 사용하여 데이터를 Amazon S3에 직접 보냅니다."
        },
        {
          "k": "D",
          "en": "Order multiple AWS Snowball devices, copy the data to the devices, and ship them to AWS for import into S3.",
          "ko": "여러 AWS Snowball 디바이스를 주문합니다. 데이터를 장치에 복사합니다. 디바이스를 AWS로 보내 데이터를 Amazon S3에 복사합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "At 400 Mbps of usable bandwidth, transferring 10 PB online cannot finish in 6 weeks. Multiple Snowball devices provide parallel offline transfer at petabyte scale without consuming the shared uplink.",
        "ko": "사용 가능한 대역폭이 400Mbps이면 10PB를 6주 내에 온라인으로 전송할 수 없습니다. 여러 Snowball 장치는 공유 업링크를 소모하지 않고 페타바이트 규모 데이터를 병렬 오프라인 전송합니다."
      },
      "why_wrong": {
        "A": {
          "en": "DataSync is still constrained by the available network bandwidth.",
          "ko": "DataSync도 사용 가능한 네트워크 대역폭의 제한을 받습니다."
        },
        "B": {
          "en": "rsync does not directly provide an S3-native transfer and cannot overcome the bandwidth shortfall.",
          "ko": "rsync는 S3 네이티브 직접 전송을 제공하지 않으며 대역폭 부족도 해결하지 못합니다."
        },
        "C": {
          "en": "Parallel CLI copies can improve utilization but cannot exceed the uplink capacity needed to meet the deadline.",
          "ko": "병렬 CLI 복사는 대역폭 활용률을 높일 수 있지만 기한 충족에 필요한 업링크 용량을 초과할 수 없습니다."
        }
      }
    },
    {
      "id": "exam12-605",
      "number": 605,
      "tags": [
        "AWS Storage Gateway",
        "Volume Gateway",
        "Cached Volumes",
        "iSCSI",
        "Hybrid Storage"
      ],
      "question": {
        "en": "A company has several on-premises iSCSI network storage servers. It wants to reduce the number of servers by moving to AWS, provide low-latency access to frequently used data, and minimize infrastructure changes and on-premises dependency. Which solution meets these requirements?",
        "ko": "회사에는 온프레미스 iSCSI 네트워크 스토리지 서버가 여러 대 있습니다. 회사는 AWS 클라우드로 이동하여 이러한 서버의 수를 줄이고 싶어합니다. 솔루션 설계자는 자주 사용되는 데이터에 대한 짧은 대기 시간 액세스를 제공하고 최소한의 인프라 변경으로 온프레미스 서버에 대한 종속성을 줄여야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Deploy an Amazon S3 File Gateway.",
          "ko": "Amazon S3 파일 게이트웨이를 배포합니다."
        },
        {
          "k": "B",
          "en": "Deploy Amazon EBS storage with backups to Amazon S3.",
          "ko": "Amazon S3에 대한 백업과 함께 Amazon EBS 스토리지를 배포합니다."
        },
        {
          "k": "C",
          "en": "Deploy AWS Storage Gateway Volume Gateway configured with stored volumes.",
          "ko": "저장된 볼륨으로 구성된 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다."
        },
        {
          "k": "D",
          "en": "Deploy AWS Storage Gateway Volume Gateway configured with cached volumes.",
          "ko": "캐시된 볼륨으로 구성된 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "Cached Volume Gateway presents iSCSI block volumes, keeps the primary data in AWS, and retains a local cache of frequently accessed blocks for low latency. This preserves the existing storage interface while reducing local capacity needs.",
        "ko": "캐시 볼륨 게이트웨이는 iSCSI 블록 볼륨을 제공하고 기본 데이터를 AWS에 저장하며 자주 액세스하는 블록을 로컬 캐시에 유지합니다. 기존 스토리지 인터페이스를 유지하면서 로컬 용량 요구를 줄입니다."
      },
      "why_wrong": {
        "A": {
          "en": "S3 File Gateway provides file protocols such as NFS and SMB rather than the required iSCSI block interface.",
          "ko": "S3 File Gateway는 필요한 iSCSI 블록 인터페이스 대신 NFS와 SMB 같은 파일 프로토콜을 제공합니다."
        },
        "B": {
          "en": "EBS volumes cannot be attached directly to on-premises servers as an iSCSI replacement.",
          "ko": "EBS 볼륨은 iSCSI 대체용으로 온프레미스 서버에 직접 연결할 수 없습니다."
        },
        "C": {
          "en": "Stored volumes keep the complete primary dataset on premises, so they do not reduce local storage dependency as much as cached volumes.",
          "ko": "저장 볼륨은 전체 기본 데이터 세트를 온프레미스에 유지하므로 캐시 볼륨만큼 로컬 스토리지 의존성을 줄이지 못합니다."
        }
      }
    },
    {
      "id": "exam12-606",
      "number": 606,
      "tags": [
        "Amazon S3",
        "S3 Standard-IA",
        "S3 Lifecycle",
        "Durability",
        "Cost Optimization"
      ],
      "question": {
        "en": "An application lets business users upload objects to Amazon S3. Durability must be maximized and objects must remain readily available. Objects are frequently accessed for the first 30 days and much less frequently afterward. Which solution is most cost-effective?",
        "ko": "솔루션 아키텍트는 비즈니스 사용자가 Amazon S3에 객체를 업로드할 수 있는 애플리케이션을 설계하고 있습니다. 솔루션은 객체 내구성을 극대화해야 하며 객체를 언제든지 쉽게 사용할 수 있어야 합니다. 객체는 업로드 후 처음 30일 이내에 자주 액세스하지만 30일보다 오래된 객체에는 액세스할 가능성이 훨씬 적습니다. 가장 비용 효율적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Store all objects in S3 Standard and use a lifecycle rule to transition them to S3 Glacier after 30 days.",
          "ko": "S3 수명 주기 규칙을 사용하여 모든 객체를 S3 Standard에 저장하여 30일 후에 객체를 S3 Glacier로 전환합니다."
        },
        {
          "k": "B",
          "en": "Store all objects in S3 Standard and use a lifecycle rule to transition them to S3 Standard-Infrequent Access after 30 days.",
          "ko": "모든 객체를 S3 Standard에 저장하고 S3 수명 주기 규칙을 사용하여 30일 후 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다."
        },
        {
          "k": "C",
          "en": "Store all objects in S3 Standard and transition them to S3 One Zone-Infrequent Access after 30 days.",
          "ko": "모든 객체를 S3 Standard에 저장하고 30일 후 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환하는 S3 수명 주기 규칙을 사용합니다."
        },
        {
          "k": "D",
          "en": "Store all objects in S3 Intelligent-Tiering and transition them to S3 Standard-IA after 30 days.",
          "ko": "S3 수명 주기 규칙을 사용하여 모든 객체를 S3 Intelligent-Tiering에 저장하여 30일 후에 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "S3 Standard suits frequent access during the first 30 days. S3 Standard-IA then reduces storage cost while preserving multi-AZ resilience and millisecond access for older objects.",
        "ko": "S3 Standard는 처음 30일의 빈번한 액세스에 적합합니다. 이후 S3 Standard-IA로 전환하면 다중 AZ 내구성과 밀리초 액세스를 유지하면서 오래된 객체의 저장 비용을 줄입니다."
      },
      "why_wrong": {
        "A": {
          "en": "Glacier storage requires a restore workflow and does not provide the same immediate availability.",
          "ko": "Glacier 스토리지는 복원 과정이 필요하여 같은 수준의 즉시 가용성을 제공하지 않습니다."
        },
        "C": {
          "en": "S3 One Zone-IA stores data in one Availability Zone and does not maximize resilience.",
          "ko": "S3 One Zone-IA는 한 가용 영역에 데이터를 저장하므로 복원력을 극대화하지 못합니다."
        },
        "D": {
          "en": "Using Intelligent-Tiering only to force a transition after 30 days adds monitoring overhead and is unnecessary for the known access pattern.",
          "ko": "액세스 패턴이 알려진 상황에서 30일 후 강제 전환을 위해 Intelligent-Tiering을 사용하면 불필요한 모니터링 비용이 추가됩니다."
        }
      }
    },
    {
      "id": "exam12-607",
      "number": 607,
      "tags": [
        "Amazon RDS for Oracle",
        "Amazon S3",
        "BLOB",
        "Database Optimization",
        "Cost Optimization"
      ],
      "question": {
        "en": "A two-tier application uses a Multi-AZ Amazon RDS for Oracle database with 12 TB of General Purpose SSD storage. It stores legacy documents as BLOBs averaging 6 MB. As the database grows, performance degrades and storage cost rises. Which highly available and scalable solution is most cost-effective?",
        "ko": "한 회사가 온프레미스 데이터 센터에서 AWS 클라우드로 2계층 애플리케이션을 마이그레이션했습니다. 데이터 계층은 12TB의 범용 SSD Amazon EBS 스토리지를 갖춘 Oracle용 Amazon RDS의 다중 AZ 배포입니다. 애플리케이션은 평균 문서 크기가 6MB인 이전 대형 객체(BLOB)로 데이터베이스의 문서를 처리하고 저장하도록 설계되었습니다. 데이터베이스 크기가 증가하면서 성능이 저하되고 스토리지 비용이 증가했습니다. 데이터베이스 성능을 개선해야 하며 가용성과 탄력성이 뛰어난 가장 비용 효율적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Reduce the RDS DB instance size, increase storage to 24 TiB, and change the storage type to magnetic.",
          "ko": "RDS DB 인스턴스 크기를 줄입니다. 스토리지 용량을 24TiB로 늘립니다. 스토리지 유형을 마그네틱으로 변경합니다."
        },
        {
          "k": "B",
          "en": "Increase the RDS DB instance size, increase storage to 24 TiB, and change the storage type to Provisioned IOPS.",
          "ko": "RDS DB 인스턴스 크기를 늘립니다. 스토리지 용량을 24TiB로 늘립니다. 스토리지 유형을 프로비저닝된 IOPS로 변경합니다."
        },
        {
          "k": "C",
          "en": "Create an S3 bucket, update the application to store documents in S3, and keep object metadata in the existing database.",
          "ko": "Amazon S3 버킷을 생성합니다. S3 버킷에 문서를 저장하도록 애플리케이션을 업데이트합니다. 기존 데이터베이스에 객체 메타데이터를 저장합니다."
        },
        {
          "k": "D",
          "en": "Create a DynamoDB table, update the application to use it, and use AWS DMS to migrate the Oracle data to DynamoDB.",
          "ko": "Amazon DynamoDB 테이블을 생성합니다. DynamoDB를 사용하도록 애플리케이션을 업데이트합니다. AWS Database Migration Service(AWS DMS)를 사용하여 Oracle 데이터베이스에서 DynamoDB로 데이터를 마이그레이션합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "S3 provides highly durable, elastic, and inexpensive object storage for large documents. Keeping only searchable metadata in RDS reduces database size, I/O pressure, backup volume, and storage cost.",
        "ko": "S3는 대형 문서를 위한 내구성 높고 탄력적이며 저렴한 객체 스토리지를 제공합니다. 검색 가능한 메타데이터만 RDS에 유지하면 데이터베이스 크기, I/O 부하, 백업 용량 및 저장 비용이 줄어듭니다."
      },
      "why_wrong": {
        "A": {
          "en": "Magnetic storage and a smaller instance would further reduce database performance.",
          "ko": "마그네틱 스토리지와 더 작은 인스턴스는 데이터베이스 성능을 더 낮춥니다."
        },
        "B": {
          "en": "Scaling the instance and Provisioned IOPS treats the symptom while retaining expensive BLOB storage and doubles provisioned capacity.",
          "ko": "인스턴스와 프로비저닝된 IOPS 확장은 비싼 BLOB 저장 구조를 유지한 채 용량만 늘리는 방식입니다."
        },
        "D": {
          "en": "A complete relational-to-DynamoDB migration requires major application and data-model changes and is unnecessary for offloading documents.",
          "ko": "관계형 데이터를 DynamoDB로 전면 이전하면 애플리케이션과 데이터 모델을 크게 바꿔야 하며 문서 오프로딩에 불필요합니다."
        }
      }
    },
    {
      "id": "exam12-608",
      "number": 608,
      "tags": [
        "AWS WAF",
        "Application Load Balancer",
        "IP Set",
        "Access Control",
        "Security"
      ],
      "question": {
        "en": "An HTTPS application behind an ALB serves clients at more than 20,000 retail locations worldwide. Each location can register the IP address assigned by its local ISP. The security team wants the endpoint accessible only from registered addresses. What should a solutions architect do?",
        "ko": "회사에는 전 세계 20,000개 이상의 소매점 위치에 배포된 클라이언트에게 서비스를 제공하는 애플리케이션이 있습니다. 애플리케이션은 포트 443에서 HTTPS를 통해 노출되는 백엔드 웹 서버로 구성됩니다. 애플리케이션은 ALB 뒤의 Amazon EC2 인스턴스에서 호스팅됩니다. 소매점은 공용 인터넷을 통해 웹 애플리케이션과 통신합니다. 회사는 각 소매점에서 현지 ISP가 할당한 IP 주소를 등록할 수 있도록 허용합니다. 회사 보안팀에서는 소매점에서 등록한 IP 주소로만 접속을 제한할 것을 권장합니다. 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Associate an AWS WAF web ACL with the ALB. Filter traffic by an IP set and update the set with registered addresses.",
          "ko": "AWS WAF 웹 ACL을 ALB와 연결합니다. ALB의 IP 규칙 세트를 사용하여 트래픽을 필터링합니다. 등록된 IP 주소를 포함하도록 규칙의 IP 주소를 업데이트합니다."
        },
        {
          "k": "B",
          "en": "Use AWS Firewall Manager to configure firewall rules on the ALB and update the rules with registered IP addresses.",
          "ko": "AWS Firewall Manager를 배포하여 ALB로의 트래픽을 제한하는 방화벽 규칙을 관리합니다. 등록된 IP 주소를 포함하도록 방화벽 규칙을 수정합니다."
        },
        {
          "k": "C",
          "en": "Store IP addresses in DynamoDB and configure Lambda authentication on the ALB to check incoming requests.",
          "ko": "Amazon DynamoDB 테이블에 IP 주소를 저장합니다. ALB에서 AWS Lambda 인증 기능을 구성하여 수신 요청이 등록된 IP 주소에서 오는지 확인합니다."
        },
        {
          "k": "D",
          "en": "Configure a network ACL for the ALB public subnets and add an inbound rule for every registered IP address.",
          "ko": "ALB의 공용 인터페이스가 포함된 서브넷에서 네트워크 ACL을 구성합니다. 등록된 각 IP 주소에 대한 항목으로 네트워크 ACL의 수신 규칙을 업데이트합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "AWS WAF integrates directly with an ALB and IP set match rules provide managed allow-list filtering. The registered addresses can be updated programmatically without changing subnet networking.",
        "ko": "AWS WAF는 ALB와 직접 통합되며 IP 세트 일치 규칙으로 관리형 허용 목록 필터링을 제공합니다. 서브넷 네트워크를 변경하지 않고 등록 주소를 프로그래밍 방식으로 갱신할 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Firewall Manager centrally administers policies across accounts and resources; it does not replace the WAF web ACL and IP set needed for this ALB.",
          "ko": "Firewall Manager는 여러 계정과 리소스의 정책을 중앙 관리하지만 이 ALB에 필요한 WAF 웹 ACL과 IP 세트를 대체하지 않습니다."
        },
        "C": {
          "en": "A custom database and Lambda authorization path adds latency, code, and operational overhead.",
          "ko": "사용자 지정 데이터베이스와 Lambda 인증 경로는 지연, 코드 및 운영 부담을 추가합니다."
        },
        "D": {
          "en": "Network ACL rule limits are far below tens of thousands of addresses and NACLs are unsuitable for this dynamic allow list.",
          "ko": "네트워크 ACL 규칙 한도는 수만 개 주소보다 훨씬 작으며 동적 허용 목록에 적합하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-609",
      "number": 609,
      "tags": [
        "AWS Lake Formation",
        "Data Filters",
        "Row-Level Security",
        "Cell-Level Security",
        "Data Lake Security"
      ],
      "question": {
        "en": "A company is building an analytics platform with AWS Lake Formation and collects data from sources such as Amazon S3 and Amazon RDS. It needs to prevent access to portions of data that contain sensitive information. Which solution meets this requirement?",
        "ko": "회사에서 AWS Lake Formation을 사용하여 AWS에 데이터 분석 플랫폼을 구축하고 있습니다. 플랫폼은 Amazon S3 및 Amazon RDS와 같은 다양한 소스에서 데이터를 수집합니다. 회사는 중요한 정보가 포함된 데이터 부분에 대한 액세스를 방지하기 위한 보안 솔루션이 필요합니다."
      },
      "options": [
        {
          "k": "A",
          "en": "Create IAM roles with permission to access the Lake Formation tables.",
          "ko": "Lake Formation 테이블에 액세스할 수 있는 권한이 포함된 IAM 역할을 생성합니다."
        },
        {
          "k": "B",
          "en": "Create data filters to implement row-level and cell-level security.",
          "ko": "데이터 필터를 생성하여 행 수준 보안 및 셀 수준 보안을 구현합니다."
        },
        {
          "k": "C",
          "en": "Create a Lambda function that removes sensitive information before Lake Formation ingests the data again.",
          "ko": "Lake Formation이 다시 데이터를 수집하기 전에 민감한 정보를 제거하는 AWS Lambda 함수를 생성합니다."
        },
        {
          "k": "D",
          "en": "Create a Lambda function that periodically queries Lake Formation tables and removes sensitive information.",
          "ko": "Lake Formation 테이블에서 민감한 정보를 주기적으로 쿼리하고 제거하는 AWS Lambda 함수를 생성합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Lake Formation data filters restrict rows and columns or cells when granting Data Catalog table permissions. This enforces fine-grained access without copying, deleting, or transforming the source data.",
        "ko": "Lake Formation 데이터 필터는 Data Catalog 테이블 권한을 부여할 때 행과 열 또는 셀을 제한합니다. 원본 데이터를 복사, 삭제 또는 변환하지 않고 세분화된 액세스를 적용합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Table-level IAM access does not prevent users from seeing sensitive rows or columns within an allowed table.",
          "ko": "테이블 수준 IAM 액세스는 허용된 테이블 안의 민감한 행이나 열을 보지 못하게 제한하지 않습니다."
        },
        "C": {
          "en": "Preprocessing with Lambda changes the ingestion pipeline and may remove data needed by authorized users.",
          "ko": "Lambda 전처리는 수집 파이프라인을 변경하며 승인된 사용자에게 필요한 데이터까지 제거할 수 있습니다."
        },
        "D": {
          "en": "Periodically deleting sensitive data changes source data, risks inconsistency, and is not access control.",
          "ko": "민감한 데이터를 주기적으로 삭제하면 원본이 변경되고 불일치 위험이 생기며 액세스 제어도 아닙니다."
        }
      }
    },
    {
      "id": "exam12-610",
      "number": 610,
      "tags": [
        "Amazon S3",
        "Gateway VPC Endpoint",
        "AWS Direct Connect",
        "Private Connectivity",
        "Hybrid Network"
      ],
      "question": {
        "en": "A company deploys EC2 instances in a VPC. The instances load source data into S3 for later processing, and regulations prohibit sending the data over the public internet. On-premises servers consume the output of the EC2 application. Which solution meets these requirements?",
        "ko": "회사는 VPC에서 실행되는 Amazon EC2 인스턴스를 배포합니다. EC2 인스턴스는 나중에 데이터를 처리할 수 있도록 소스 데이터를 Amazon S3 버킷에 로드합니다. 규정 준수법에 따라 데이터는 공용 인터넷을 통해 전송되어서는 안 됩니다. 회사의 온프레미스 데이터 센터에 있는 서버는 EC2 인스턴스에서 실행되는 애플리케이션의 출력을 사용합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Deploy an interface VPC endpoint for Amazon EC2 and create a Site-to-Site VPN between the company and the VPC.",
          "ko": "Amazon EC2용 인터페이스 VPC 엔드포인트를 배포합니다. 회사와 VPC 간에 AWS Site-to-Site VPN 연결을 생성합니다."
        },
        {
          "k": "B",
          "en": "Deploy a gateway VPC endpoint for Amazon S3 and configure an AWS Direct Connect connection between the on-premises network and the VPC.",
          "ko": "Amazon S3용 게이트웨이 VPC 엔드포인트를 배포합니다. 온프레미스 네트워크와 VPC 간에 AWS Direct Connect 연결을 설정합니다."
        },
        {
          "k": "C",
          "en": "Configure an AWS Transit Gateway connection from the VPC to the S3 bucket and create a Site-to-Site VPN between the company and the VPC.",
          "ko": "VPC에서 S3 버킷으로의 AWS Transit Gateway 연결을 설정합니다. 회사와 VPC 간에 AWS Site-to-Site VPN 연결을 생성합니다."
        },
        {
          "k": "D",
          "en": "Configure a proxy EC2 instance with a route to a NAT gateway to retrieve S3 data and provide it to the application instances.",
          "ko": "NAT 게이트웨이에 대한 경로가 있는 프록시 EC2 인스턴스를 설정합니다. S3 데이터를 가져오고 애플리케이션 인스턴스에 공급하도록 프록시 EC2 인스턴스를 구성합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "An S3 gateway endpoint lets the EC2 instances reach S3 without an internet or NAT gateway. Direct Connect provides a dedicated private path between the on-premises environment and the VPC for application output.",
        "ko": "S3 게이트웨이 엔드포인트를 사용하면 EC2 인스턴스가 인터넷이나 NAT 게이트웨이 없이 S3에 접근할 수 있습니다. Direct Connect는 온프레미스 환경과 VPC 사이에 애플리케이션 출력을 위한 전용 사설 경로를 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "An EC2 interface endpoint is for EC2 API operations and does not provide private S3 data access.",
          "ko": "EC2 인터페이스 엔드포인트는 EC2 API 작업용이며 S3 데이터에 대한 사설 액세스를 제공하지 않습니다."
        },
        "C": {
          "en": "Transit Gateway cannot attach directly to an S3 bucket.",
          "ko": "Transit Gateway는 S3 버킷에 직접 연결할 수 없습니다."
        },
        "D": {
          "en": "A NAT gateway uses public S3 endpoints and does not satisfy the requirement to avoid the public internet path.",
          "ko": "NAT 게이트웨이는 퍼블릭 S3 엔드포인트를 사용하므로 공용 인터넷 경로를 피해야 하는 요구를 충족하지 못합니다."
        }
      }
    },
    {
      "id": "exam12-611",
      "number": 611,
      "tags": [
        "Amazon Kinesis Data Streams",
        "AWS Lambda",
        "Streaming",
        "Decoupling",
        "Scalability"
      ],
      "question": {
        "en": "An EC2 application has a REST interface that receives near-real-time data from third-party providers, then processes and stores it for analysis. During data surges, compute reaches its limit and requests return 503 errors. Which design provides greater scalability?",
        "ko": "회사에는 제3자 공급업체로부터 거의 실시간으로 데이터를 수신할 수 있는 REST 기반 인터페이스가 있는 애플리케이션이 있습니다. 수신된 데이터는 추가 분석을 위해 처리되고 저장됩니다. 애플리케이션은 Amazon EC2 인스턴스에서 실행됩니다. 데이터 볼륨이 급증하면 컴퓨팅 용량이 최대 한도에 도달하고 모든 요청을 처리할 수 없어 503 오류가 많이 발생합니다. 보다 확장 가능한 솔루션을 제공하려면 어떤 디자인을 권장해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use Amazon Kinesis Data Streams to ingest the data and AWS Lambda functions to process it.",
          "ko": "Amazon Kinesis Data Streams를 사용하여 데이터를 수집합니다. AWS Lambda 함수를 사용하여 데이터를 처리합니다."
        },
        {
          "k": "B",
          "en": "Put Amazon API Gateway in front of the existing application and create a usage plan with per-provider quotas.",
          "ko": "기존 애플리케이션 위에 Amazon API Gateway를 사용합니다. 타사 공급업체에 대한 할당량 제한이 있는 사용량 계획을 만듭니다."
        },
        {
          "k": "C",
          "en": "Use Amazon SNS to ingest the data and place EC2 instances in an Auto Scaling group behind an Application Load Balancer.",
          "ko": "Amazon SNS를 사용하여 데이터를 수집합니다. Application Load Balancer 뒤의 Auto Scaling 그룹에 EC2 인스턴스를 배치합니다."
        },
        {
          "k": "D",
          "en": "Repackage the application as containers and deploy it to Amazon ECS with EC2 launch type and an Auto Scaling group.",
          "ko": "애플리케이션을 컨테이너로 다시 패키징합니다. Auto Scaling 그룹과 함께 EC2 시작 유형을 사용하는 Amazon ECS를 사용하여 애플리케이션을 배포합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Kinesis Data Streams durably buffers bursty events and decouples ingestion from processing. Lambda consumers scale with the stream, preventing a temporary surge from overwhelming fixed application capacity.",
        "ko": "Kinesis Data Streams는 급증하는 이벤트를 내구성 있게 버퍼링하고 수집과 처리를 분리합니다. Lambda 소비자는 스트림에 맞춰 확장되므로 일시적 급증이 고정 애플리케이션 용량을 압도하지 않습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Usage quotas reject or throttle provider data rather than absorbing and processing the surge.",
          "ko": "사용량 할당량은 급증 데이터를 흡수해 처리하는 대신 공급업체 데이터를 거부하거나 제한합니다."
        },
        "C": {
          "en": "SNS is primarily pub/sub messaging and does not provide the ordered, retained stream and scalable consumer processing described here.",
          "ko": "SNS는 주로 게시·구독 메시징이며 필요한 순서 보장, 보존 스트림 및 확장 가능한 소비자 처리를 제공하지 않습니다."
        },
        "D": {
          "en": "Containerizing the same synchronous processing path does not add a durable ingestion buffer and still risks overload during rapid spikes.",
          "ko": "같은 동기 처리 경로를 컨테이너화해도 내구성 있는 수집 버퍼가 생기지 않아 급격한 증가 시 과부하 위험이 남습니다."
        }
      }
    },
    {
      "id": "exam12-612",
      "number": 612,
      "tags": [
        "Amazon S3",
        "VPC Endpoint",
        "Private Subnet",
        "Bucket Policy",
        "Private Connectivity"
      ],
      "question": {
        "en": "An application on EC2 instances in a private subnet processes sensitive data in an S3 bucket. The application must connect to the bucket without using the internet. Which solution meets the requirement?",
        "ko": "회사에는 프라이빗 서브넷의 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. 애플리케이션은 Amazon S3 버킷의 민감한 정보를 처리해야 합니다. 애플리케이션은 S3 버킷에 연결하기 위해 인터넷을 사용해서는 안 됩니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure an internet gateway, permit it in the S3 bucket policy, and update the application to use it.",
          "ko": "인터넷 게이트웨이를 구성합니다. 인터넷 게이트웨이에서의 액세스를 허용하도록 S3 버킷 정책을 업데이트하고 애플리케이션이 새 인터넷 게이트웨이를 사용하도록 업데이트합니다."
        },
        {
          "k": "B",
          "en": "Configure a VPN connection, permit it in the S3 bucket policy, and update the application to use it.",
          "ko": "VPN 연결을 구성합니다. VPN 연결에서 액세스를 허용하도록 S3 버킷 정책을 업데이트하고 애플리케이션이 새 VPN 연결을 사용하도록 업데이트합니다."
        },
        {
          "k": "C",
          "en": "Configure a NAT gateway, permit it in the S3 bucket policy, and update the application to use it.",
          "ko": "NAT 게이트웨이를 구성합니다. NAT 게이트웨이에서의 액세스를 허용하도록 S3 버킷 정책을 업데이트하고 애플리케이션이 새 NAT 게이트웨이를 사용하도록 업데이트합니다."
        },
        {
          "k": "D",
          "en": "Configure a VPC endpoint, permit access from the endpoint in the S3 bucket policy, and update the application to use it.",
          "ko": "VPC 엔드포인트를 구성합니다. VPC 엔드포인트에서의 액세스를 허용하도록 S3 버킷 정책을 업데이트하고 애플리케이션이 새 VPC 엔드포인트를 사용하도록 업데이트합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "An S3 VPC endpoint keeps traffic on the AWS network and allows private-subnet instances to reach S3 without internet or NAT connectivity. The bucket policy can restrict access to the endpoint.",
        "ko": "S3 VPC 엔드포인트는 트래픽을 AWS 네트워크에 유지하며 프라이빗 서브넷 인스턴스가 인터넷이나 NAT 없이 S3에 접근하게 합니다. 버킷 정책은 해당 엔드포인트로 접근을 제한할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "An internet gateway creates an internet path and private instances also require public addressing to use it.",
          "ko": "인터넷 게이트웨이는 인터넷 경로를 만들며 프라이빗 인스턴스가 사용하려면 퍼블릭 주소도 필요합니다."
        },
        "B": {
          "en": "A VPN is for connecting external networks to a VPC and is unnecessary for EC2-to-S3 access within AWS.",
          "ko": "VPN은 외부 네트워크와 VPC 연결용이며 AWS 내부의 EC2-S3 접근에는 불필요합니다."
        },
        "C": {
          "en": "A NAT gateway reaches public service endpoints and adds cost when a private S3 endpoint is available.",
          "ko": "NAT 게이트웨이는 퍼블릭 서비스 엔드포인트에 접근하고, 사설 S3 엔드포인트를 사용할 수 있는데도 비용을 추가합니다."
        }
      }
    },
    {
      "id": "exam12-613",
      "number": 613,
      "tags": [
        "Amazon EKS",
        "AWS KMS",
        "Kubernetes Secrets",
        "Encryption",
        "Security"
      ],
      "question": {
        "en": "A company runs a container application on Amazon EKS. The EKS cluster stores sensitive information in Kubernetes Secret objects. The company wants to verify that the information is encrypted with the least operational overhead. Which solution meets these requirements?",
        "ko": "회사는 Amazon EKS를 사용하여 컨테이너 애플리케이션을 실행합니다. EKS 클러스터는 Kubernetes 비밀 객체에 민감한 정보를 저장합니다. 회사는 정보가 암호화되었는지 확인하기를 원합니다. 최소한의 운영 오버헤드로 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use the container application to encrypt the information with AWS KMS.",
          "ko": "컨테이너 애플리케이션을 사용하여 AWS Key Management Service(AWS KMS)로 정보를 암호화합니다."
        },
        {
          "k": "B",
          "en": "Enable Kubernetes secrets encryption on the EKS cluster by using AWS KMS.",
          "ko": "AWS Key Management Service(AWS KMS)를 사용하여 EKS 클러스터에서 비밀 암호화를 활성화합니다."
        },
        {
          "k": "C",
          "en": "Implement a Lambda function that encrypts the information with AWS KMS.",
          "ko": "AWS KMS(AWS Key Management Service)를 사용하여 정보를 암호화하는 AWS Lambda 함수를 구현합니다."
        },
        {
          "k": "D",
          "en": "Store the information in Systems Manager Parameter Store and encrypt it with AWS KMS.",
          "ko": "AWS Systems Manager Parameter Store를 사용하여 정보를 저장하고 AWS Key Management Service(AWS KMS)를 사용하여 암호화합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "EKS integrates Kubernetes secrets envelope encryption with AWS KMS. Enabling it protects secrets stored in the cluster without adding encryption logic or another secret store to the application.",
        "ko": "EKS는 Kubernetes 비밀의 봉투 암호화를 AWS KMS와 통합합니다. 이를 활성화하면 애플리케이션에 암호화 로직이나 다른 비밀 저장소를 추가하지 않고 클러스터에 저장된 비밀을 보호합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Application-managed encryption requires custom code and key-handling logic.",
          "ko": "애플리케이션 관리 암호화는 사용자 지정 코드와 키 처리 로직이 필요합니다."
        },
        "C": {
          "en": "A separate Lambda encryption function adds an unnecessary service and integration path.",
          "ko": "별도 Lambda 암호화 함수는 불필요한 서비스와 통합 경로를 추가합니다."
        },
        "D": {
          "en": "Parameter Store can hold secrets, but moving them out of Kubernetes requires application changes and more integration work.",
          "ko": "Parameter Store도 비밀을 저장할 수 있지만 Kubernetes 외부로 옮기면 애플리케이션 변경과 추가 통합이 필요합니다."
        }
      }
    },
    {
      "id": "exam12-614",
      "number": 614,
      "tags": [
        "Application Load Balancer",
        "Security Group",
        "Auto Scaling",
        "Multi-Tier Architecture",
        "Network Security"
      ],
      "question": {
        "en": "A new multi-tier web application has web and application servers on EC2 instances in Auto Scaling groups and an RDS DB instance. Access to the application servers must be limited so that only the web servers can reach them. Which solution meets this requirement?",
        "ko": "한 회사는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행되는 웹 및 애플리케이션 서버와 데이터 저장용 Amazon RDS DB 인스턴스로 구성된 새로운 다중 계층 웹 애플리케이션을 설계하고 있습니다. 솔루션 설계자는 웹 서버만 액세스할 수 있도록 애플리케이션 서버에 대한 액세스를 제한해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Deploy AWS PrivateLink in front of the application servers and use a network ACL to allow only the web servers.",
          "ko": "애플리케이션 서버 앞에 AWS PrivateLink를 배포합니다. 웹 서버만 애플리케이션 서버에 액세스할 수 있도록 네트워크 ACL을 구성합니다."
        },
        {
          "k": "B",
          "en": "Deploy a VPC endpoint in front of the application servers and use a security group to allow only the web servers.",
          "ko": "애플리케이션 서버 앞에 VPC 엔드포인트를 배포합니다. 웹 서버만 애플리케이션 서버에 액세스할 수 있도록 보안 그룹을 구성합니다."
        },
        {
          "k": "C",
          "en": "Deploy a Network Load Balancer with the application Auto Scaling group as its target and use a network ACL to allow only the web servers.",
          "ko": "애플리케이션 서버의 Auto Scaling 그룹이 포함된 대상 그룹으로 Network Load Balancer를 배포합니다. 웹 서버만 애플리케이션 서버에 액세스할 수 있도록 네트워크 ACL을 구성합니다."
        },
        {
          "k": "D",
          "en": "Deploy an Application Load Balancer with the application Auto Scaling group as its target and configure security groups so only the web servers can access it.",
          "ko": "애플리케이션 서버의 Auto Scaling 그룹이 포함된 대상 그룹과 함께 Application Load Balancer를 배포합니다. 웹 서버만 애플리케이션 서버에 액세스할 수 있도록 보안 그룹을 구성합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "An internal ALB distributes requests across the application tier as instances scale. Security-group references can allow inbound traffic to the ALB and application servers only from the web-tier security group.",
        "ko": "내부 ALB는 애플리케이션 계층 인스턴스가 확장될 때 요청을 분산합니다. 보안 그룹 참조를 사용하면 웹 계층 보안 그룹에서 오는 트래픽만 ALB와 애플리케이션 서버에 허용할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "PrivateLink is intended for privately exposing services across VPCs and accounts and is unnecessary within this application VPC.",
          "ko": "PrivateLink는 VPC와 계정 간 서비스를 사설로 노출하는 용도이며 이 애플리케이션 VPC 내부에서는 불필요합니다."
        },
        "B": {
          "en": "A generic VPC endpoint is not the load-balancing access layer for an EC2 application tier.",
          "ko": "일반 VPC 엔드포인트는 EC2 애플리케이션 계층의 로드 밸런싱 액세스 계층이 아닙니다."
        },
        "C": {
          "en": "Network ACLs are stateless subnet controls and cannot reference the web-tier security group; they are less suitable for this tier-to-tier rule.",
          "ko": "네트워크 ACL은 상태 비저장 서브넷 제어이며 웹 계층 보안 그룹을 참조할 수 없어 계층 간 규칙에 적합하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-615",
      "number": 615,
      "tags": [
        "Amazon EKS",
        "CloudWatch Container Insights",
        "Metrics",
        "Logs",
        "Observability"
      ],
      "question": {
        "en": "A company runs a critical microservices application on Amazon EKS. It needs to centrally collect, aggregate, and summarize application metrics and logs. Which solution meets these requirements?",
        "ko": "한 회사가 Amazon EKS에서 고객을 대상으로 하는 중요한 마이크로서비스 애플리케이션을 실행하고 있습니다. 회사는 중앙 위치에서 애플리케이션의 측정항목과 로그를 수집, 집계, 요약하는 솔루션을 구현해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Run the Amazon CloudWatch agent in the EKS cluster and view metrics and logs in the CloudWatch console.",
          "ko": "기존 EKS 클러스터에서 Amazon CloudWatch 에이전트를 실행합니다. CloudWatch 콘솔에서 지표와 로그를 봅니다."
        },
        {
          "k": "B",
          "en": "Run AWS App Mesh in the EKS cluster and view metrics and logs in the App Mesh console.",
          "ko": "기존 EKS 클러스터에서 AWS App Mesh를 실행합니다. App Mesh 콘솔에서 지표와 로그를 확인하세요."
        },
        {
          "k": "C",
          "en": "Configure AWS CloudTrail to capture data events and query CloudTrail with Amazon OpenSearch Service.",
          "ko": "데이터 이벤트를 캡처하도록 AWS CloudTrail을 구성합니다. Amazon OpenSearch Service를 사용하여 CloudTrail을 쿼리합니다."
        },
        {
          "k": "D",
          "en": "Configure Amazon CloudWatch Container Insights for the EKS cluster and view metrics and logs in the CloudWatch console.",
          "ko": "기존 EKS 클러스터에 Amazon CloudWatch Container Insights를 구성합니다. CloudWatch 콘솔에서 지표와 로그를 봅니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "CloudWatch Container Insights is purpose-built to collect, aggregate, and summarize container metrics and logs from EKS at cluster, node, pod, and task levels.",
        "ko": "CloudWatch Container Insights는 EKS의 컨테이너 지표와 로그를 클러스터, 노드, 파드 등의 수준에서 수집, 집계 및 요약하도록 설계되었습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A basic agent alone does not provide the same container-aware aggregation and dashboards as Container Insights.",
          "ko": "기본 에이전트만으로는 Container Insights와 같은 컨테이너 인식 집계와 대시보드를 제공하지 못합니다."
        },
        "B": {
          "en": "App Mesh manages and observes service-to-service traffic but is not the central EKS metrics and log collection service.",
          "ko": "App Mesh는 서비스 간 트래픽을 관리하고 관찰하지만 중앙 EKS 지표 및 로그 수집 서비스는 아닙니다."
        },
        "C": {
          "en": "CloudTrail records AWS API activity, not application and container runtime telemetry.",
          "ko": "CloudTrail은 AWS API 활동을 기록하며 애플리케이션과 컨테이너 런타임 원격 측정을 수집하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-616",
      "number": 616,
      "tags": [
        "Amazon GuardDuty",
        "AWS Security Hub",
        "Threat Detection",
        "Security Monitoring",
        "Amazon S3"
      ],
      "question": {
        "en": "A company runs a product on an Auto Scaling group behind an NLB and stores product objects in S3. After a malicious attack, it needs continuous monitoring of malicious account activity, workloads, and S3 access patterns, with suspicious findings shown on a dashboard. Which solution meets these requirements?",
        "ko": "한 회사가 AWS에 최신 제품을 배포했습니다. 제품은 Network Load Balancer 뒤의 Auto Scaling 그룹에서 실행됩니다. 회사는 제품의 객체를 Amazon S3 버킷에 저장합니다. 최근 자사 시스템에 대한 악의적인 공격을 경험했습니다. 회사에는 AWS 계정의 악의적인 활동, 워크로드 및 S3 버킷에 대한 액세스 패턴을 지속적으로 모니터링하는 솔루션이 필요합니다. 또한 솔루션은 의심스러운 활동을 보고하고 대시보드에 정보를 표시해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure Amazon Macie to monitor the results and report them to AWS Config.",
          "ko": "결과를 모니터링하고 AWS Config에 보고하도록 Amazon Macie를 구성합니다."
        },
        {
          "k": "B",
          "en": "Configure Amazon Inspector to monitor the results and report them to AWS CloudTrail.",
          "ko": "결과를 모니터링하고 AWS CloudTrail에 보고하도록 Amazon Inspector를 구성합니다."
        },
        {
          "k": "C",
          "en": "Configure Amazon GuardDuty to monitor activity and report findings to AWS Security Hub.",
          "ko": "결과를 모니터링하고 AWS Security Hub에 보고하도록 Amazon GuardDuty를 구성합니다."
        },
        {
          "k": "D",
          "en": "Configure AWS Config to monitor the results and report them to Amazon EventBridge.",
          "ko": "결과를 모니터링하고 Amazon EventBridge에 보고하도록 AWS Config를 구성합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "GuardDuty continuously analyzes sources such as CloudTrail events, VPC Flow Logs, DNS logs, workload signals, and S3 data events for threats. Security Hub aggregates and displays the findings in a central security dashboard.",
        "ko": "GuardDuty는 CloudTrail 이벤트, VPC 흐름 로그, DNS 로그, 워크로드 신호 및 S3 데이터 이벤트 같은 소스를 지속적으로 분석하여 위협을 탐지합니다. Security Hub는 조사 결과를 중앙 보안 대시보드에 집계하고 표시합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Macie focuses on discovering and protecting sensitive data in S3, while Config is not a threat-finding dashboard.",
          "ko": "Macie는 S3의 민감한 데이터 검색과 보호에 중점을 두며 Config는 위협 조사 결과 대시보드가 아닙니다."
        },
        "B": {
          "en": "Inspector assesses software vulnerabilities and network exposure; CloudTrail records API activity rather than aggregating security findings.",
          "ko": "Inspector는 소프트웨어 취약점과 네트워크 노출을 평가하며 CloudTrail은 보안 조사 결과 집계 대신 API 활동을 기록합니다."
        },
        "D": {
          "en": "Config evaluates resource configuration compliance and EventBridge routes events; this combination does not perform the requested threat detection.",
          "ko": "Config는 리소스 구성 규정 준수를 평가하고 EventBridge는 이벤트를 라우팅하므로 요청된 위협 탐지를 수행하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-617",
      "number": 617,
      "tags": [
        "Amazon EFS",
        "AWS DataSync",
        "NFS",
        "Data Migration",
        "Cost Optimization"
      ],
      "question": {
        "en": "A company must migrate 200 GB from an on-premises NFS storage server to AWS without stopping the existing service. Multiple AWS resources must continue to access the data through NFS. Which two steps are most cost-effective? (Choose two.)",
        "ko": "회사에서 온프레미스 데이터 센터를 AWS로 마이그레이션하려고 합니다. 데이터 센터는 NFS 기반 파일 시스템에 데이터를 저장하는 스토리지 서버를 호스팅합니다. 스토리지 서버는 200GB의 데이터를 보유합니다. 회사는 기존 서비스를 중단하지 않고 데이터를 마이그레이션해야 합니다. AWS의 여러 리소스는 NFS 프로토콜을 사용하여 데이터에 액세스할 수 있어야 합니다. 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (2개 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an Amazon FSx for Lustre file system.",
          "ko": "Lustre 파일 시스템용 Amazon FSx를 생성합니다."
        },
        {
          "k": "B",
          "en": "Create an Amazon Elastic File System file system.",
          "ko": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다."
        },
        {
          "k": "C",
          "en": "Create an Amazon S3 bucket to receive the data.",
          "ko": "데이터를 수신할 Amazon S3 버킷을 생성합니다."
        },
        {
          "k": "D",
          "en": "Use operating-system copy commands to push the data to the AWS destination manually.",
          "ko": "운영 체제 복사 명령을 수동으로 사용하여 데이터를 AWS 대상으로 푸시합니다."
        },
        {
          "k": "E",
          "en": "Install an AWS DataSync agent on premises and run a DataSync task between the on-premises location and AWS.",
          "ko": "온프레미스 데이터 센터에 AWS DataSync 에이전트를 설치합니다. 온프레미스 위치와 AWS 간에 DataSync 작업을 사용합니다."
        }
      ],
      "answer": [
        "B",
        "E"
      ],
      "explanation": {
        "en": "Amazon EFS provides a managed elastic NFS file system for multiple AWS clients. DataSync performs online incremental NFS migration, preserving service availability while efficiently copying and verifying the data.",
        "ko": "Amazon EFS는 여러 AWS 클라이언트를 위한 관리형 탄력적 NFS 파일 시스템을 제공합니다. DataSync는 온라인 증분 NFS 마이그레이션과 검증을 수행하여 기존 서비스 가용성을 유지합니다."
      },
      "why_wrong": {
        "A": {
          "en": "FSx for Lustre is optimized for high-performance computing workloads and is unnecessary for a small general-purpose NFS migration.",
          "ko": "FSx for Lustre는 고성능 컴퓨팅 워크로드에 최적화되어 있으며 소규모 범용 NFS 마이그레이션에는 불필요합니다."
        },
        "C": {
          "en": "S3 is object storage and does not natively provide the required shared NFS file-system semantics.",
          "ko": "S3는 객체 스토리지이며 필요한 공유 NFS 파일 시스템 의미 체계를 기본 제공하지 않습니다."
        },
        "D": {
          "en": "Manual copy commands add operational work and do not provide DataSync's incremental transfer, scheduling, and verification.",
          "ko": "수동 복사는 운영 부담이 크며 DataSync의 증분 전송, 예약 및 검증 기능을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-618",
      "number": 618,
      "tags": [
        "Amazon FSx for Windows File Server",
        "AWS Backup",
        "Vault Lock",
        "Multi-AZ",
        "Cross-Region Backup",
        "Compliance"
      ],
      "question": {
        "en": "A company needs an FSx for Windows File Server SMB share in us-east-1 with a 5-minute RPO for planned maintenance or unplanned outages. The file system must be replicated to us-west-2, and no user may delete the replicated data for 5 years. Which solution meets these requirements?",
        "ko": "한 회사에서는 us-east-1 리전의 볼륨으로 마운트된 SMB 파일 공유가 있는 Amazon EC2 인스턴스에 Amazon FSx for Windows File Server를 사용하려고 합니다. 회사는 계획된 시스템 유지 관리 또는 계획되지 않은 서비스 중단에 대해 5분의 복구 지점 목표(RPO)를 가지고 있습니다. 회사는 파일 시스템을 us-west-2 리전에 복제해야 합니다. 복제된 데이터는 5년 동안 어떤 사용자도 삭제해서는 안 됩니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a Single-AZ 2 file system, copy daily backups to us-west-2, and configure Vault Lock in compliance mode for 5 years.",
          "ko": "단일 AZ 2 배포 유형을 사용하는 us-east-1에 FSx for Windows File Server 파일 시스템을 생성합니다. AWS Backup을 사용하여 백업을 us-west-2에 복사하는 일일 백업 계획을 생성합니다. us-west-2의 대상 볼트에 대해 규정 준수 모드로 AWS Backup Vault Lock을 구성하고 최소 기간을 5년으로 설정합니다."
        },
        {
          "k": "B",
          "en": "Create a Multi-AZ file system, copy daily backups to us-west-2, and configure Vault Lock in governance mode for 5 years.",
          "ko": "다중 AZ 배포 유형이 있는 us-east-1에 FSx for Windows File Server 파일 시스템을 생성합니다. 백업을 us-west-2에 복사하는 일일 백업 계획을 생성합니다. 대상 볼트에 대해 거버넌스 모드로 AWS Backup Vault Lock을 구성하고 최소 기간을 5년으로 설정합니다."
        },
        {
          "k": "C",
          "en": "Create a Multi-AZ file system, copy daily backups to us-west-2, and configure Vault Lock in compliance mode for 5 years.",
          "ko": "다중 AZ 배포 유형이 있는 us-east-1에 FSx for Windows File Server 파일 시스템을 생성합니다. AWS Backup을 사용하여 백업을 us-west-2에 복사하는 일일 백업 계획을 생성합니다. us-west-2의 대상 볼트에 대해 규정 준수 모드로 AWS Backup Vault Lock을 구성하고 최소 기간을 5년으로 설정합니다."
        },
        {
          "k": "D",
          "en": "Create a Single-AZ 2 file system, copy daily backups to us-west-2, and configure Vault Lock in governance mode for 5 years.",
          "ko": "단일 AZ 2 배포 유형이 있는 us-east-1에 FSx for Windows File Server 파일 시스템을 생성합니다. 백업을 us-west-2에 복사하는 일일 백업 계획을 생성합니다. 대상 볼트에 대해 거버넌스 모드로 AWS Backup Vault Lock을 구성하고 최소 기간을 5년으로 설정합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Multi-AZ FSx for Windows provides high availability and supports the short RPO during infrastructure events. Cross-Region AWS Backup copies provide the secondary copy, and Vault Lock compliance mode prevents deletion or retention reduction even by privileged users.",
        "ko": "다중 AZ FSx for Windows는 고가용성과 인프라 이벤트 중 짧은 RPO를 지원합니다. AWS Backup 리전 간 복사본은 보조 복제본을 제공하고 Vault Lock 규정 준수 모드는 권한 있는 사용자도 삭제하거나 보존 기간을 줄이지 못하게 합니다."
      },
      "why_wrong": {
        "A": {
          "en": "A Single-AZ deployment does not meet the availability and short-RPO requirement for unplanned AZ failures.",
          "ko": "단일 AZ 배포는 예기치 않은 AZ 장애의 가용성과 짧은 RPO 요구를 충족하지 못합니다."
        },
        "B": {
          "en": "Governance mode can be bypassed by specially authorized users, so it does not guarantee that no user can delete backups.",
          "ko": "거버넌스 모드는 특별 권한 사용자가 우회할 수 있어 어떤 사용자도 백업을 삭제할 수 없다는 요구를 보장하지 않습니다."
        },
        "D": {
          "en": "This option combines insufficient Single-AZ availability with bypassable governance-mode retention.",
          "ko": "이 선택지는 불충분한 단일 AZ 가용성과 우회 가능한 거버넌스 모드 보존을 함께 사용합니다."
        }
      }
    },
    {
      "id": "exam12-619",
      "number": 619,
      "tags": [
        "AWS Organizations",
        "Service Control Policy",
        "AWS CloudTrail",
        "Governance",
        "Root User"
      ],
      "question": {
        "en": "A company provides each developer an AWS account through AWS Organizations while retaining standard security controls. Developers have root-user-level access to their accounts. The architect must ensure that required CloudTrail configurations cannot be modified. Which action meets the requirement?",
        "ko": "솔루션 아키텍트는 표준 보안 제어를 유지하면서 AWS Organizations를 통해 개발자에게 개별 AWS 계정을 제공하려는 회사를 위한 보안 솔루션을 설계하고 있습니다. 개별 개발자는 자신의 계정에 대해 AWS 계정 루트 사용자 수준 액세스 권한을 가지게 되므로 솔루션 설계자는 새 개발자 계정에 적용되는 필수 AWS CloudTrail 구성이 수정되지 않았는지 확인하려고 합니다. 이러한 요구 사항을 충족하는 작업은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an IAM policy that prevents CloudTrail changes and attach it to the root user.",
          "ko": "CloudTrail 변경을 금지하는 IAM 정책을 생성합니다. 루트 사용자에게 연결합니다."
        },
        {
          "k": "B",
          "en": "Create a new trail in each developer account with organization trail options enabled.",
          "ko": "조직 추적 옵션이 활성화된 개발자 계정 내에서 CloudTrail에 새 추적을 생성합니다."
        },
        {
          "k": "C",
          "en": "Create a service control policy that prevents CloudTrail changes and attach it to the developer accounts.",
          "ko": "CloudTrail 변경을 금지하는 서비스 제어 정책(SCP)을 생성하고 이를 개발자 계정에 연결합니다."
        },
        {
          "k": "D",
          "en": "Create a CloudTrail service-linked role whose policy allows changes only from the management account ARN.",
          "ko": "관리 계정의 Amazon 리소스 이름(ARN)에서만 변경을 허용하는 정책 조건을 사용하여 CloudTrail에 대한 서비스 연결 역할을 생성합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "An Organizations SCP sets the maximum permissions for member accounts and can deny CloudTrail modification even to the member account root user. This centrally protects the mandatory configuration.",
        "ko": "Organizations SCP는 멤버 계정의 최대 권한을 정하며 멤버 계정 루트 사용자에게도 CloudTrail 변경을 거부할 수 있습니다. 따라서 필수 구성을 중앙에서 보호합니다."
      },
      "why_wrong": {
        "A": {
          "en": "IAM policies cannot be attached to or restrict the AWS account root user.",
          "ko": "IAM 정책은 AWS 계정 루트 사용자에게 연결하거나 루트 사용자를 제한할 수 없습니다."
        },
        "B": {
          "en": "Creating a trail does not by itself prevent a developer with root access from changing account-level CloudTrail resources.",
          "ko": "추적 생성만으로는 루트 권한 개발자가 계정 수준 CloudTrail 리소스를 변경하지 못하게 할 수 없습니다."
        },
        "D": {
          "en": "A service-linked role is defined for an AWS service and is not a general control for denying account principals CloudTrail changes.",
          "ko": "서비스 연결 역할은 AWS 서비스용 역할이며 계정 보안 주체의 CloudTrail 변경을 거부하는 일반 제어 수단이 아닙니다."
        }
      }
    },
    {
      "id": "exam12-620",
      "number": 620,
      "tags": [
        "Amazon EBS",
        "Provisioned IOPS SSD",
        "Durability",
        "Low Latency",
        "Block Storage"
      ],
      "question": {
        "en": "A company will deploy a business-critical application in AWS. The application requires durable storage with consistent, low-latency performance. Which storage type should a solutions architect recommend?",
        "ko": "한 회사가 AWS 클라우드에 비즈니스에 중요한 애플리케이션을 배포할 계획입니다. 애플리케이션에는 일관되고 지연 시간이 짧은 성능을 갖춘 내구성 있는 스토리지가 필요합니다. 솔루션 설계자는 어떤 유형의 스토리지를 권장해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Instance store volumes",
          "ko": "인스턴스 스토어 볼륨"
        },
        {
          "k": "B",
          "en": "Amazon ElastiCache for Memcached clusters",
          "ko": "Memcached 클러스터용 Amazon ElastiCache"
        },
        {
          "k": "C",
          "en": "Amazon EBS Provisioned IOPS SSD volumes",
          "ko": "프로비저닝된 IOPS SSD Amazon EBS 볼륨"
        },
        {
          "k": "D",
          "en": "Amazon EBS Throughput Optimized HDD volumes",
          "ko": "처리량 최적화 HDD Amazon EBS 볼륨"
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Provisioned IOPS SSD EBS volumes provide durable block storage with provisioned, consistent I/O performance and low latency for critical workloads.",
        "ko": "프로비저닝된 IOPS SSD EBS 볼륨은 중요 워크로드에 프로비저닝되고 일관된 I/O 성능과 낮은 지연 시간을 제공하는 내구성 있는 블록 스토리지입니다."
      },
      "why_wrong": {
        "A": {
          "en": "Instance store is ephemeral and its data is lost when the underlying instance is stopped or terminated.",
          "ko": "인스턴스 스토어는 임시 스토리지이며 기반 인스턴스가 중지되거나 종료되면 데이터가 손실됩니다."
        },
        "B": {
          "en": "Memcached is an in-memory cache rather than durable primary block storage.",
          "ko": "Memcached는 내구성 있는 기본 블록 스토리지가 아니라 인메모리 캐시입니다."
        },
        "D": {
          "en": "Throughput Optimized HDD is designed for large sequential workloads and does not provide the required low-latency IOPS consistency.",
          "ko": "처리량 최적화 HDD는 대규모 순차 워크로드용이며 필요한 낮은 지연 시간과 일관된 IOPS를 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-621",
      "number": 621,
      "tags": [
        "Amazon S3",
        "Cross-Region Replication",
        "Data Replication",
        "Operational Excellence"
      ],
      "question": {
        "en": "An online photo-sharing company stores photos in an Amazon S3 bucket in us-west-1. The company must store a copy of every new photo in us-east-1. Which solution requires the least operational effort?",
        "ko": "온라인 사진 공유 회사는 us-west-1 리전의 Amazon S3 버킷에 사진을 저장합니다. 회사는 모든 새 사진의 사본을 us-east-1 리전에 저장해야 합니다. 최소한의 운영 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a second S3 bucket in us-east-1 and configure S3 Cross-Region Replication from the existing bucket.",
          "ko": "us-east-1에 두 번째 S3 버킷을 생성하고 기존 버킷에서 S3 교차 리전 복제를 구성합니다."
        },
        {
          "k": "B",
          "en": "Configure CORS on the existing bucket and specify us-east-1 as an AllowedOrigin.",
          "ko": "기존 S3 버킷에 CORS 구성을 생성하고 CORS 규칙의 AllowedOrigin 요소에 us-east-1을 지정합니다."
        },
        {
          "k": "C",
          "en": "Create a second S3 bucket across multiple Availability Zones in us-east-1 and use an S3 Lifecycle rule to store the photos there.",
          "ko": "us-east-1의 여러 가용 영역에 걸쳐 두 번째 S3 버킷을 생성하고 S3 수명 주기 규칙을 사용하여 사진을 두 번째 버킷에 저장합니다."
        },
        {
          "k": "D",
          "en": "Create a second S3 bucket in us-east-1 and invoke a Lambda function from S3 object-created events to copy each photo.",
          "ko": "us-east-1에 두 번째 S3 버킷을 생성하고 S3 객체 생성 이벤트로 AWS Lambda 함수를 호출하여 사진을 복사합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "S3 Cross-Region Replication is the managed feature for asynchronously copying new objects to a bucket in another Region, with no custom processing code. Versioning must be enabled on both buckets.",
        "ko": "S3 교차 리전 복제는 새 객체를 다른 리전의 버킷으로 비동기 복사하는 관리형 기능이므로 사용자 지정 처리 코드가 필요하지 않습니다. 두 버킷 모두 버전 관리를 활성화해야 합니다."
      },
      "why_wrong": {
        "B": {
          "en": "CORS controls browser cross-origin requests; it does not replicate objects between Regions.",
          "ko": "CORS는 브라우저의 교차 출처 요청을 제어하며 리전 간 객체 복제를 수행하지 않습니다."
        },
        "C": {
          "en": "S3 buckets are already Regional and span multiple Availability Zones; lifecycle rules change storage classes rather than copy objects to another Region.",
          "ko": "S3 버킷은 이미 리전 서비스로 여러 가용 영역에 걸쳐 있으며 수명 주기 규칙은 객체를 다른 리전으로 복사하는 대신 스토리지 클래스를 변경합니다."
        },
        "D": {
          "en": "A Lambda copy workflow can work but adds code, retries, monitoring, and operational overhead that managed replication avoids.",
          "ko": "Lambda 복사 방식도 가능하지만 관리형 복제로 피할 수 있는 코드, 재시도, 모니터링 및 운영 부담이 추가됩니다."
        }
      }
    },
    {
      "id": "exam12-622",
      "number": 622,
      "tags": [
        "Amazon DynamoDB",
        "On-Demand Capacity",
        "Amazon S3",
        "Amazon CloudFront",
        "Scalability"
      ],
      "question": {
        "en": "A company is building a subscriber web application with a static single-page tier and a persistent database tier. Usage reaches millions of users during a 4-hour morning period but only thousands otherwise. The schema must evolve quickly. Which two choices provide the greatest scalability? (Choose two.)",
        "ko": "한 회사에서 구독자를 위한 새 웹 애플리케이션을 만들고 있습니다. 애플리케이션은 정적 단일 페이지 계층과 영구 데이터베이스 계층으로 구성됩니다. 아침 4시간 동안 사용자는 수백만 명에 달하지만 나머지 시간에는 수천 명에 불과합니다. 데이터 설계자는 스키마를 빠르게 발전시킬 수 있는 기능을 요청했습니다. 가장 뛰어난 확장성을 제공하는 솔루션은 무엇입니까? (2개 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Deploy Amazon DynamoDB with on-demand capacity mode.",
          "ko": "Amazon DynamoDB를 데이터베이스 솔루션으로 배포하고 온디맨드 용량 모드를 사용합니다."
        },
        {
          "k": "B",
          "en": "Deploy Amazon Aurora and select a serverless database engine mode.",
          "ko": "Amazon Aurora를 데이터베이스 솔루션으로 배포하고 서버리스 DB 엔진 모드를 선택합니다."
        },
        {
          "k": "C",
          "en": "Deploy DynamoDB and enable DynamoDB Auto Scaling.",
          "ko": "Amazon DynamoDB를 데이터베이스 솔루션으로 배포하고 DynamoDB Auto Scaling을 활성화합니다."
        },
        {
          "k": "D",
          "en": "Store the static content in Amazon S3 and use the bucket as the origin for an Amazon CloudFront distribution.",
          "ko": "정적 콘텐츠를 Amazon S3 버킷에 배포하고 S3 버킷을 원본으로 사용하는 Amazon CloudFront 배포를 프로비저닝합니다."
        },
        {
          "k": "E",
          "en": "Run a static-content web server on every EC2 instance in an Auto Scaling group and periodically refresh it from Amazon EFS.",
          "ko": "Auto Scaling 그룹의 모든 Amazon EC2 인스턴스에 정적 콘텐츠용 웹 서버를 배포하고 Amazon EFS 볼륨의 콘텐츠를 주기적으로 새로 고치도록 구성합니다."
        }
      ],
      "answer": [
        "A",
        "D"
      ],
      "explanation": {
        "en": "DynamoDB on-demand provides flexible schema and automatically accommodates highly variable request traffic. S3 and CloudFront deliver static content globally without managing web-server capacity.",
        "ko": "DynamoDB 온디맨드는 유연한 스키마를 제공하고 변동 폭이 큰 요청 트래픽을 자동으로 처리합니다. S3와 CloudFront는 웹 서버 용량을 관리하지 않고 정적 콘텐츠를 전 세계에 확장하여 제공합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Aurora remains a relational database with a defined schema and is less suitable for the requested rapid schema evolution.",
          "ko": "Aurora는 정의된 스키마를 사용하는 관계형 데이터베이스이므로 빠른 스키마 변경 요구에 덜 적합합니다."
        },
        "C": {
          "en": "Provisioned capacity with Auto Scaling can lag behind abrupt traffic changes; on-demand mode better fits the sharp, unpredictable burst.",
          "ko": "Auto Scaling을 사용하는 프로비저닝된 용량은 갑작스러운 트래픽 변화에 늦게 반응할 수 있으므로 급격한 변동에는 온디맨드 모드가 더 적합합니다."
        },
        "E": {
          "en": "EC2 web servers and EFS synchronization add capacity and operational management for content that S3 and CloudFront can serve directly.",
          "ko": "EC2 웹 서버와 EFS 동기화는 S3와 CloudFront가 직접 제공할 수 있는 정적 콘텐츠에 불필요한 용량 및 운영 관리를 추가합니다."
        }
      }
    },
    {
      "id": "exam12-623",
      "number": 623,
      "tags": [
        "Amazon API Gateway",
        "AWS WAF",
        "SQL Injection",
        "Cross-Site Scripting",
        "Security"
      ],
      "question": {
        "en": "A company manages a REST API accessed by third-party service providers through Amazon API Gateway. The API must be protected against SQL injection and cross-site scripting attacks. Which solution is most operationally efficient?",
        "ko": "회사는 Amazon API Gateway를 사용하여 타사 서비스 공급자가 액세스하는 REST API를 관리합니다. 회사는 SQL 주입 및 크로스 사이트 스크립팅 공격으로부터 REST API를 보호해야 합니다. 가장 운영 효율적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure AWS Shield.",
          "ko": "AWS Shield를 구성합니다."
        },
        {
          "k": "B",
          "en": "Configure AWS WAF.",
          "ko": "AWS WAF를 구성합니다."
        },
        {
          "k": "C",
          "en": "Place API Gateway behind CloudFront and configure AWS Shield on CloudFront.",
          "ko": "Amazon CloudFront 배포를 사용하여 API Gateway를 설정하고 CloudFront에서 AWS Shield를 구성합니다."
        },
        {
          "k": "D",
          "en": "Place API Gateway behind CloudFront and configure AWS WAF on CloudFront.",
          "ko": "Amazon CloudFront 배포로 API Gateway를 설정하고 CloudFront에서 AWS WAF를 구성합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "AWS WAF can associate directly with an API Gateway REST API stage and use managed or custom rules to block SQL injection and XSS patterns.",
        "ko": "AWS WAF는 API Gateway REST API 스테이지에 직접 연결할 수 있으며 관리형 또는 사용자 지정 규칙으로 SQL 주입과 XSS 패턴을 차단합니다."
      },
      "why_wrong": {
        "A": {
          "en": "AWS Shield protects primarily against DDoS attacks, not application-layer SQL injection or XSS.",
          "ko": "AWS Shield는 주로 DDoS 공격을 방어하며 애플리케이션 계층의 SQL 주입이나 XSS를 차단하지 않습니다."
        },
        "C": {
          "en": "Adding CloudFront and Shield does not provide the required application-layer request filtering.",
          "ko": "CloudFront와 Shield를 추가해도 필요한 애플리케이션 계층 요청 필터링을 제공하지 않습니다."
        },
        "D": {
          "en": "WAF would protect the API, but the extra CloudFront distribution is unnecessary because WAF can attach directly to API Gateway.",
          "ko": "WAF는 API를 보호하지만 API Gateway에 직접 연결할 수 있으므로 추가 CloudFront 배포는 불필요합니다."
        }
      }
    },
    {
      "id": "exam12-624",
      "number": 624,
      "tags": [
        "SAML 2.0",
        "Identity Federation",
        "Active Directory",
        "AWS IAM",
        "Single Sign-On"
      ],
      "question": {
        "en": "A company has 1,500 users whose access to on-premises resources is managed through Active Directory groups. It wants to grant access to AWS resources without maintaining separate identities while preserving on-premises access. What should a solutions architect do?",
        "ko": "회사에는 1,500명의 사용자가 있으며 회사 네트워크의 Active Directory 사용자 그룹을 통해 온프레미스 리소스 액세스를 관리합니다. 회사는 사용자가 리소스에 액세스하기 위해 다른 ID를 유지하는 것을 원하지 않습니다. 온프레미스 리소스에 대한 액세스를 유지하면서 AWS 리소스에 대한 사용자 액세스를 관리하려면 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an IAM user for every employee and attach an appropriate policy to each user.",
          "ko": "각 사용자에 대해 IAM 사용자를 생성하고 각 사용자에게 적절한 정책을 연결합니다."
        },
        {
          "k": "B",
          "en": "Use Amazon Cognito with the Active Directory user pool and create roles with appropriate policies.",
          "ko": "Active Directory 사용자 풀과 함께 Amazon Cognito를 사용하고 적절한 정책이 연결된 역할을 생성합니다."
        },
        {
          "k": "C",
          "en": "Define cross-account roles with appropriate policies and map the roles to Active Directory groups.",
          "ko": "적절한 정책이 연결된 교차 계정 역할을 정의하고 역할을 Active Directory 그룹에 매핑합니다."
        },
        {
          "k": "D",
          "en": "Configure SAML 2.0 federation, create roles with appropriate policies, and map the roles to Active Directory groups.",
          "ko": "SAML 2.0 기반 페더레이션을 구성하고 적절한 정책이 연결된 역할을 생성한 뒤 역할을 Active Directory 그룹에 매핑합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "SAML 2.0 federation lets users authenticate with the existing corporate directory and assume IAM roles mapped from their Active Directory groups, avoiding duplicate AWS identities.",
        "ko": "SAML 2.0 페더레이션을 사용하면 사용자가 기존 회사 디렉터리로 인증하고 Active Directory 그룹에 매핑된 IAM 역할을 수임할 수 있으므로 별도 AWS ID가 필요하지 않습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Individual IAM users duplicate identities and create substantial lifecycle-management overhead.",
          "ko": "개별 IAM 사용자는 ID를 중복시키고 상당한 수명 주기 관리 부담을 만듭니다."
        },
        "B": {
          "en": "Cognito user pools are designed mainly for application end users and do not directly replace workforce SAML federation with corporate AD.",
          "ko": "Cognito 사용자 풀은 주로 애플리케이션 최종 사용자용이며 회사 AD를 이용한 인력 SAML 페더레이션을 직접 대체하지 않습니다."
        },
        "C": {
          "en": "Cross-account roles address access between AWS accounts; they do not establish authentication federation from Active Directory.",
          "ko": "교차 계정 역할은 AWS 계정 간 액세스를 위한 것이며 Active Directory의 인증 페더레이션을 설정하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-625",
      "number": 625,
      "tags": [
        "Amazon Route 53",
        "Geolocation Routing",
        "Content Distribution",
        "Application Load Balancer"
      ],
      "question": {
        "en": "A company hosts websites behind multiple Application Load Balancers and has different distribution rights for content around the world. Which configuration serves the correct content without violating those rights?",
        "ko": "한 회사가 여러 Application Load Balancer 뒤에 웹사이트를 호스팅하고 있으며 전 세계적으로 콘텐츠에 대해 다양한 배포 권한을 가지고 있습니다. 배포 권한을 위반하지 않고 사용자에게 올바른 콘텐츠가 제공되도록 하려면 어떤 구성을 선택해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure Amazon CloudFront with AWS WAF.",
          "ko": "AWS WAF로 Amazon CloudFront를 구성합니다."
        },
        {
          "k": "B",
          "en": "Configure the Application Load Balancers with AWS WAF.",
          "ko": "AWS WAF로 Application Load Balancer를 구성합니다."
        },
        {
          "k": "C",
          "en": "Configure Amazon Route 53 with a geolocation routing policy.",
          "ko": "지리적 위치 라우팅 정책으로 Amazon Route 53을 구성합니다."
        },
        {
          "k": "D",
          "en": "Configure Amazon Route 53 with a geoproximity routing policy.",
          "ko": "지리 근접 라우팅 정책으로 Amazon Route 53을 구성합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "Route 53 geolocation routing selects records according to the users' geographic origin, allowing the company to enforce territory-specific content distribution rules.",
        "ko": "Route 53 지리적 위치 라우팅은 사용자의 지리적 출처에 따라 레코드를 선택하므로 지역별 콘텐츠 배포 권한을 적용할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "WAF filters malicious requests but does not select licensed content by viewer geography.",
          "ko": "WAF는 악성 요청을 필터링하지만 시청자의 지리적 위치에 따라 허가된 콘텐츠를 선택하지 않습니다."
        },
        "B": {
          "en": "Attaching WAF to ALBs provides request security rather than geographic content-rights routing.",
          "ko": "ALB에 WAF를 연결하면 요청 보안은 제공하지만 지역별 콘텐츠 권한 라우팅은 제공하지 않습니다."
        },
        "D": {
          "en": "Geoproximity routing shifts traffic according to resource and client proximity and optional bias; it is not the policy intended for explicit geographic access boundaries.",
          "ko": "지리 근접 라우팅은 리소스와 클라이언트의 근접성 및 선택적 바이어스에 따라 트래픽을 이동하며 명시적인 지역별 액세스 경계용 정책이 아닙니다."
        }
      }
    },
    {
      "id": "exam12-626",
      "number": 626,
      "tags": [
        "AWS DataSync",
        "Amazon S3",
        "Data Migration",
        "Data Integrity",
        "On-Premises"
      ],
      "question": {
        "en": "A company's on-premises data has exceeded available capacity. The company wants to migrate the data online to Amazon S3 and automatically verify data integrity after transfer. Which solution meets the requirements?",
        "ko": "회사는 온프레미스에 데이터를 저장하지만 데이터 양이 사용 가능한 용량을 초과하고 있습니다. 회사는 온프레미스 위치에서 Amazon S3 버킷으로 데이터를 온라인 마이그레이션하고 전송 후 데이터 무결성을 자동으로 검증해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Order an AWS Snowball Edge device and configure it to perform an online transfer to the S3 bucket.",
          "ko": "AWS Snowball Edge 디바이스를 주문하고 S3 버킷으로 온라인 데이터 전송을 수행하도록 구성합니다."
        },
        {
          "k": "B",
          "en": "Deploy an AWS DataSync agent on premises and configure an online transfer to the S3 bucket.",
          "ko": "AWS DataSync 에이전트를 온프레미스에 배포하고 S3 버킷으로 온라인 데이터 전송을 수행하도록 구성합니다."
        },
        {
          "k": "C",
          "en": "Create an Amazon S3 File Gateway on premises and configure an online transfer to the S3 bucket.",
          "ko": "온프레미스에서 Amazon S3 파일 게이트웨이를 생성하고 S3 버킷으로 온라인 데이터 전송을 수행하도록 구성합니다."
        },
        {
          "k": "D",
          "en": "Configure an Amazon S3 Transfer Acceleration appliance on premises for the online transfer.",
          "ko": "온프레미스에서 Amazon S3 Transfer Acceleration 액셀러레이터를 구성하여 S3 버킷으로 온라인 전송을 수행합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "DataSync is a managed online transfer service. Its agent moves data efficiently to S3 and can verify transferred data against the source after each task.",
        "ko": "DataSync는 관리형 온라인 전송 서비스입니다. 에이전트는 데이터를 S3로 효율적으로 이동하고 각 작업 후 전송된 데이터를 소스와 비교하여 검증할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "Snowball Edge is primarily an offline device-based migration workflow, not the requested online managed transfer.",
          "ko": "Snowball Edge는 주로 오프라인 장치 기반 마이그레이션 방식이며 요청된 온라인 관리형 전송이 아닙니다."
        },
        "C": {
          "en": "S3 File Gateway provides ongoing file access backed by S3; it is not the purpose-built migration and end-to-end verification service.",
          "ko": "S3 File Gateway는 S3 기반의 지속적인 파일 액세스를 제공하며 마이그레이션과 종단 간 검증에 특화된 서비스가 아닙니다."
        },
        "D": {
          "en": "Transfer Acceleration is an S3 endpoint feature, not an on-premises appliance, and it does not provide DataSync's automatic verification workflow.",
          "ko": "Transfer Acceleration은 S3 엔드포인트 기능이지 온프레미스 장비가 아니며 DataSync의 자동 검증 워크플로를 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-627",
      "number": 627,
      "tags": [
        "Amazon Route 53",
        "DNS",
        "Hosted Zones",
        "High Availability",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company wants to migrate two DNS servers that host about 200 zones and receive an average of 1 million requests per day to AWS. Which solution maximizes availability while minimizing management overhead?",
        "ko": "한 회사에서 두 대의 DNS 서버를 AWS로 마이그레이션하려고 합니다. 이 서버는 총 약 200개의 영역을 호스팅하며 매일 평균 100만 건의 요청을 수신합니다. 두 서버의 관리와 관련된 운영 오버헤드를 최소화하면서 가용성을 최대화하려면 무엇을 추천해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create 200 hosted zones by importing the zone files into Amazon Route 53.",
          "ko": "Amazon Route 53 콘솔의 영역 파일 가져오기를 사용하여 200개의 새 호스팅 영역을 만듭니다."
        },
        {
          "k": "B",
          "en": "Run one large EC2 instance, import the zone files, and configure CloudWatch alarms for downtime.",
          "ko": "하나의 대규모 Amazon EC2 인스턴스를 실행하여 영역 파일을 가져오고 다운타임 알림을 위한 Amazon CloudWatch 경보를 구성합니다."
        },
        {
          "k": "C",
          "en": "Use AWS Server Migration Service to migrate the DNS servers and configure CloudWatch alarms for downtime.",
          "ko": "AWS Server Migration Service를 사용하여 서버를 AWS로 마이그레이션하고 다운타임 알림을 위한 Amazon CloudWatch 경보를 구성합니다."
        },
        {
          "k": "D",
          "en": "Run DNS servers in an Auto Scaling group across two Availability Zones, import the zone files, and scale between one and three instances based on CPU utilization.",
          "ko": "두 가용 영역에 걸친 Auto Scaling 그룹에서 Amazon EC2 DNS 서버를 시작합니다. 영역 파일을 가져오고 원하는 용량 1, 최대 용량 3으로 설정한 뒤 CPU 사용률에 따라 확장하도록 구성합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Route 53 is a highly available, scalable managed authoritative DNS service. Importing the existing zone files into hosted zones removes server patching, scaling, failover, and capacity management.",
        "ko": "Route 53은 고가용성과 확장성을 갖춘 관리형 권한 DNS 서비스입니다. 기존 영역 파일을 호스팅 영역으로 가져오면 서버 패치, 확장, 장애 조치 및 용량 관리가 필요하지 않습니다."
      },
      "why_wrong": {
        "B": {
          "en": "One EC2 DNS server is a single point of failure and requires operating-system and DNS-server administration.",
          "ko": "단일 EC2 DNS 서버는 단일 장애 지점이며 운영 체제와 DNS 서버 관리가 필요합니다."
        },
        "C": {
          "en": "Lift-and-shifting both servers preserves their management overhead and does not provide Route 53's managed availability.",
          "ko": "두 서버를 그대로 이전하면 관리 부담이 유지되고 Route 53의 관리형 가용성을 얻지 못합니다."
        },
        "D": {
          "en": "Self-managed DNS on EC2 still requires patching, replication, health, and scaling management; a desired capacity of one also weakens availability.",
          "ko": "EC2의 자체 관리 DNS는 패치, 복제, 상태 및 확장 관리가 계속 필요하며 원하는 용량 1은 가용성도 약화합니다."
        }
      }
    },
    {
      "id": "exam12-628",
      "number": 628,
      "tags": [
        "Amazon S3",
        "S3 Storage Lens",
        "Multipart Upload",
        "AWS Organizations",
        "Cost Optimization"
      ],
      "question": {
        "en": "A global company runs applications in multiple AWS Organizations accounts. The applications use multipart uploads to S3 buckets across Regions. The company wants to report incomplete multipart uploads for cost compliance with minimal operational overhead. Which solution meets the requirement?",
        "ko": "한 글로벌 기업이 AWS Organizations의 여러 AWS 계정에서 애플리케이션을 실행합니다. 애플리케이션은 멀티파트 업로드를 사용하여 여러 AWS 리전의 Amazon S3 버킷에 데이터를 업로드합니다. 회사는 비용 준수 목적으로 불완전한 멀티파트 업로드에 대해 보고하려고 합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure AWS Config with a rule that reports the number of incomplete multipart-upload objects.",
          "ko": "불완전한 멀티파트 업로드 객체 수를 보고하는 규칙으로 AWS Config를 구성합니다."
        },
        {
          "k": "B",
          "en": "Create a service control policy that reports the number of incomplete multipart-upload objects.",
          "ko": "불완전한 멀티파트 업로드 객체 수를 보고하는 서비스 제어 정책(SCP)을 만듭니다."
        },
        {
          "k": "C",
          "en": "Configure S3 Storage Lens to report the number of incomplete multipart-upload objects.",
          "ko": "불완전한 멀티파트 업로드 객체 수를 보고하도록 S3 Storage Lens를 구성합니다."
        },
        {
          "k": "D",
          "en": "Create an S3 Multi-Region Access Point to report the number of incomplete multipart-upload objects.",
          "ko": "S3 다중 리전 액세스 포인트를 생성하여 불완전한 멀티파트 업로드 객체 수를 보고합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "S3 Storage Lens provides organization-wide visibility and metrics across accounts, buckets, and Regions, including incomplete multipart-upload bytes and object counts, without custom code.",
        "ko": "S3 Storage Lens는 사용자 지정 코드 없이 계정, 버킷 및 리전 전반에 걸쳐 불완전한 멀티파트 업로드 바이트와 객체 수를 포함한 조직 전체 지표와 가시성을 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "AWS Config evaluates resource configuration and has no native rule that aggregates incomplete multipart-upload object counts.",
          "ko": "AWS Config는 리소스 구성을 평가하며 불완전한 멀티파트 업로드 객체 수를 집계하는 기본 규칙이 없습니다."
        },
        "B": {
          "en": "SCPs set permission guardrails; they do not collect or report storage metrics.",
          "ko": "SCP는 권한 가드레일을 설정하며 스토리지 지표를 수집하거나 보고하지 않습니다."
        },
        "D": {
          "en": "A Multi-Region Access Point routes S3 requests across Regions and is not an analytics or reporting feature.",
          "ko": "다중 리전 액세스 포인트는 리전 간 S3 요청을 라우팅하며 분석이나 보고 기능이 아닙니다."
        }
      }
    },
    {
      "id": "exam12-629",
      "number": 629,
      "tags": [
        "Amazon RDS for MySQL",
        "Blue/Green Deployments",
        "Database Upgrade",
        "Testing",
        "High Availability"
      ],
      "question": {
        "en": "A company must upgrade the version of a production Amazon RDS for MySQL database for security compliance. The database contains critical data, and the company wants a fast way to upgrade and test the changes without data loss and with minimal operational overhead. Which solution meets the requirements?",
        "ko": "한 회사가 MySQL용 Amazon RDS에서 프로덕션 데이터베이스를 실행하고 있습니다. 보안 규정 준수를 위해 데이터베이스 버전을 업그레이드해야 합니다. 데이터베이스에는 중요한 데이터가 포함되어 있으므로 데이터 손실 없이 기능을 업그레이드하고 테스트할 수 있는 빠른 솔루션을 원합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create a manual RDS snapshot and upgrade it to the new RDS for MySQL version.",
          "ko": "RDS 수동 스냅샷을 생성하고 MySQL용 Amazon RDS의 새 버전으로 업그레이드합니다."
        },
        {
          "k": "B",
          "en": "Use native backup and restore to restore the data to the upgraded RDS for MySQL version.",
          "ko": "기본 백업 및 복원을 사용하여 업그레이드된 새 버전의 MySQL용 Amazon RDS로 데이터를 복원합니다."
        },
        {
          "k": "C",
          "en": "Use AWS Database Migration Service to replicate the data to a new RDS for MySQL instance with the upgraded version.",
          "ko": "AWS Database Migration Service(AWS DMS)를 사용하여 업그레이드된 새 버전의 MySQL용 Amazon RDS에 데이터를 복제합니다."
        },
        {
          "k": "D",
          "en": "Use an Amazon RDS blue/green deployment to deploy and test the production changes.",
          "ko": "Amazon RDS 블루/그린 배포를 사용하여 프로덕션 변경 사항을 배포하고 테스트합니다."
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": {
        "en": "RDS Blue/Green Deployments create a synchronized staging environment where the version upgrade can be tested, then perform a managed switchover with short downtime and no data loss.",
        "ko": "RDS 블루/그린 배포는 버전 업그레이드를 테스트할 수 있는 동기화된 스테이징 환경을 만들고 짧은 중단 시간과 데이터 손실 없이 관리형 전환을 수행합니다."
      },
      "why_wrong": {
        "A": {
          "en": "A snapshot copy is point-in-time and does not remain synchronized with ongoing production changes before cutover.",
          "ko": "스냅샷 복사본은 특정 시점 데이터이며 전환 전까지 계속되는 프로덕션 변경 사항과 동기화되지 않습니다."
        },
        "B": {
          "en": "Manual native backup and restore adds operational work, downtime, and a larger risk of data divergence.",
          "ko": "수동 기본 백업 및 복원은 운영 작업과 중단 시간을 늘리고 데이터 불일치 위험도 높입니다."
        },
        "C": {
          "en": "DMS can replicate data but requires more setup, monitoring, validation, and cutover work than the purpose-built RDS feature.",
          "ko": "DMS도 데이터를 복제할 수 있지만 전용 RDS 기능보다 설정, 모니터링, 검증 및 전환 작업이 더 많이 필요합니다."
        }
      }
    },
    {
      "id": "exam12-630",
      "number": 630,
      "tags": [
        "Amazon ECS",
        "AWS Fargate",
        "Amazon EventBridge Scheduler",
        "Batch Processing",
        "Cost Optimization"
      ],
      "question": {
        "en": "A data-processing job runs once each day and takes up to 2 hours. If interrupted, it must restart from the beginning. What is the most cost-effective way to run the job?",
        "ko": "솔루션 설계자가 매일 한 번 실행되고 완료하는 데 최대 2시간이 걸리는 데이터 처리 작업을 만들고 있습니다. 작업이 중단되면 처음부터 다시 시작해야 합니다. 가장 비용 효율적인 방식으로 이 문제를 해결하려면 어떻게 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Run a local script on an Amazon EC2 Reserved Instance and trigger it with a cron job.",
          "ko": "크론 작업에 의해 트리거되는 Amazon EC2 예약 인스턴스에서 로컬로 실행되는 스크립트를 만듭니다."
        },
        {
          "k": "B",
          "en": "Create an AWS Lambda function triggered by a scheduled Amazon EventBridge event.",
          "ko": "Amazon EventBridge 예약 이벤트에 의해 트리거되는 AWS Lambda 함수를 생성합니다."
        },
        {
          "k": "C",
          "en": "Run an Amazon ECS task on AWS Fargate triggered by Amazon EventBridge Scheduler.",
          "ko": "Amazon EventBridge 예약 이벤트에 의해 트리거되는 Amazon ECS Fargate 작업을 사용합니다."
        },
        {
          "k": "D",
          "en": "Run an Amazon ECS task on Amazon EC2 triggered by Amazon EventBridge Scheduler.",
          "ko": "Amazon EventBridge 예약 이벤트에 의해 트리거된 Amazon EC2에서 실행되는 Amazon ECS 작업을 사용합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "EventBridge Scheduler can start a Fargate task once per day. Fargate supports the 2-hour runtime, charges for task resources while the task runs, and avoids maintaining idle EC2 capacity.",
        "ko": "EventBridge Scheduler는 매일 한 번 Fargate 태스크를 시작할 수 있습니다. Fargate는 2시간 실행을 지원하고 태스크 실행 중 사용한 리소스에 대해 과금하며 유휴 EC2 용량을 관리할 필요가 없습니다."
      },
      "why_wrong": {
        "A": {
          "en": "A Reserved Instance runs and incurs committed cost beyond the short daily job and requires instance administration.",
          "ko": "예약 인스턴스는 짧은 일일 작업 외 시간에도 약정 비용이 발생하며 인스턴스 관리가 필요합니다."
        },
        "B": {
          "en": "A Lambda invocation has a maximum duration of 15 minutes, far below the required 2 hours.",
          "ko": "Lambda 호출의 최대 실행 시간은 15분이므로 필요한 2시간에 크게 못 미칩니다."
        },
        "D": {
          "en": "ECS on EC2 requires provisioning and maintaining cluster instances, making it less cost-effective for a task that runs only 2 hours per day.",
          "ko": "EC2 기반 ECS는 클러스터 인스턴스를 프로비저닝하고 유지해야 하므로 하루 2시간만 실행하는 작업에는 비용 효율성이 떨어집니다."
        }
      }
    },
    {
      "id": "exam12-631",
      "number": 631,
      "tags": [
        "Amazon Neptune",
        "Neptune Streams",
        "Graph Database",
        "Recommendations",
        "Change Data Capture"
      ],
      "question": {
        "en": "A social media company wants to store user profiles, relationships, and interactions in AWS. An application must monitor database changes, analyze relationships between entities, and provide recommendations with minimal operational overhead. Which solution meets the requirements?",
        "ko": "소셜 미디어 회사는 사용자 프로필, 관계 및 상호 작용에 대한 데이터베이스를 AWS 클라우드에 저장하려고 합니다. 회사에는 데이터베이스 변경 사항을 모니터링하는 애플리케이션이 필요합니다. 애플리케이션은 데이터 엔터티 간의 관계를 분석하고 사용자에게 권장 사항을 제공해야 합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Store the information in Amazon Neptune and process database changes with Amazon Kinesis Data Streams.",
          "ko": "Amazon Neptune을 사용하여 정보를 저장하고 Amazon Kinesis Data Streams를 사용하여 데이터베이스 변경 사항을 처리합니다."
        },
        {
          "k": "B",
          "en": "Store the information in Amazon Neptune and process database changes with Neptune Streams.",
          "ko": "Amazon Neptune을 사용하여 정보를 저장하고 Neptune Streams를 사용하여 데이터베이스 변경 사항을 처리합니다."
        },
        {
          "k": "C",
          "en": "Store the information in Amazon QLDB and process database changes with Amazon Kinesis Data Streams.",
          "ko": "Amazon Quantum Ledger Database(Amazon QLDB)를 사용하여 정보를 저장하고 Amazon Kinesis Data Streams를 사용하여 데이터베이스 변경 사항을 처리합니다."
        },
        {
          "k": "D",
          "en": "Store the information in Amazon QLDB and process database changes with Neptune Streams.",
          "ko": "Amazon Quantum Ledger Database(Amazon QLDB)를 사용하여 정보를 저장하고 Neptune Streams를 사용하여 데이터베이스 변경 사항을 처리합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "Neptune is a managed graph database designed to store and query relationships, making it suitable for social graphs and recommendations. Neptune Streams provides a fully managed ordered log of graph changes.",
        "ko": "Neptune은 관계 저장과 쿼리에 최적화된 관리형 그래프 데이터베이스이므로 소셜 그래프와 추천에 적합합니다. Neptune Streams는 그래프 변경 사항의 완전 관리형 순서 로그를 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Kinesis could receive separately published events, but Neptune Streams captures Neptune changes natively with less integration work.",
          "ko": "Kinesis도 별도로 게시된 이벤트를 받을 수 있지만 Neptune Streams가 Neptune 변경 사항을 기본적으로 캡처하므로 통합 작업이 더 적습니다."
        },
        "C": {
          "en": "QLDB is an immutable ledger database and is not optimized for traversing complex entity relationships.",
          "ko": "QLDB는 변경 불가능한 원장 데이터베이스이며 복잡한 엔터티 관계 탐색에 최적화되지 않았습니다."
        },
        "D": {
          "en": "Neptune Streams belongs to Neptune and cannot capture changes from a QLDB database; QLDB is also the wrong data model for relationship analysis.",
          "ko": "Neptune Streams는 Neptune 기능이므로 QLDB 변경 사항을 캡처할 수 없으며 QLDB의 데이터 모델도 관계 분석에 적합하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-632",
      "number": 632,
      "tags": [
        "Amazon EFS",
        "Shared File System",
        "Multi-AZ",
        "Elastic Storage",
        "Amazon EC2"
      ],
      "question": {
        "en": "A new application stores a large volume of data that is analyzed hourly and modified by multiple Amazon EC2 Linux instances across several Availability Zones. Storage requirements will continue to grow for 6 months. Which storage solution should be used?",
        "ko": "한 회사에서 대량의 데이터를 저장할 새로운 애플리케이션을 만들고 있습니다. 데이터는 매시간 분석되며 여러 가용 영역에 배포된 여러 Amazon EC2 Linux 인스턴스에 의해 수정됩니다. 필요한 저장 공간의 양은 향후 6개월 동안 계속 증가할 것입니다. 어떤 스토리지 솔루션을 권장해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Store the data in Amazon S3 Glacier and update the S3 Glacier vault policy to allow access from the application instances.",
          "ko": "Amazon S3 Glacier에 데이터를 저장하고 애플리케이션 인스턴스의 액세스를 허용하도록 S3 Glacier 볼트 정책을 업데이트합니다."
        },
        {
          "k": "B",
          "en": "Store the data on Amazon EBS volumes and attach a volume to each application instance.",
          "ko": "Amazon Elastic Block Store(Amazon EBS) 볼륨에 데이터를 저장하고 애플리케이션 인스턴스에 EBS 볼륨을 탑재합니다."
        },
        {
          "k": "C",
          "en": "Store the data in an Amazon EFS file system and mount it on the application instances.",
          "ko": "Amazon Elastic File System(Amazon EFS) 파일 시스템에 데이터를 저장하고 애플리케이션 인스턴스에 파일 시스템을 마운트합니다."
        },
        {
          "k": "D",
          "en": "Store the data on a Provisioned IOPS EBS volume shared among the application instances.",
          "ko": "애플리케이션 인스턴스 간에 공유되는 Amazon EBS 프로비저닝된 IOPS 볼륨에 데이터를 저장합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "EFS provides an elastic, managed, multi-AZ NFS file system that many Linux EC2 instances can mount concurrently. Capacity grows and shrinks automatically as files change.",
        "ko": "EFS는 여러 Linux EC2 인스턴스가 동시에 마운트할 수 있는 탄력적인 관리형 다중 AZ NFS 파일 시스템입니다. 파일 변화에 따라 용량이 자동으로 증가하거나 감소합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Glacier is archival object storage and cannot provide an actively mounted, frequently modified shared file system.",
          "ko": "Glacier는 아카이브 객체 스토리지이므로 자주 수정되는 활성 공유 파일 시스템으로 마운트할 수 없습니다."
        },
        "B": {
          "en": "Separate EBS volumes do not provide one consistent data set shared by instances across Availability Zones.",
          "ko": "개별 EBS 볼륨은 여러 가용 영역의 인스턴스가 공유하는 하나의 일관된 데이터 세트를 제공하지 않습니다."
        },
        "D": {
          "en": "EBS is scoped to one Availability Zone, and Multi-Attach has instance, file-system, and availability constraints that do not meet this multi-AZ shared-file requirement.",
          "ko": "EBS는 단일 가용 영역 범위이며 Multi-Attach에도 인스턴스, 파일 시스템 및 가용성 제약이 있어 이 다중 AZ 공유 파일 요구를 충족하지 못합니다."
        }
      }
    },
    {
      "id": "exam12-633",
      "number": 633,
      "tags": [
        "Amazon RDS for PostgreSQL",
        "Read Replica",
        "Read Scaling",
        "Database Performance",
        "Multi-AZ"
      ],
      "question": {
        "en": "An application stores data in an Amazon RDS for PostgreSQL Multi-AZ DB instance. Increased traffic is causing performance problems, and database queries are the primary cause. What should a solutions architect do to improve performance?",
        "ko": "회사는 PostgreSQL 다중 AZ DB 인스턴스용 Amazon RDS에 데이터를 저장하는 애플리케이션을 관리합니다. 트래픽 증가로 인해 성능 문제가 발생하며 데이터베이스 쿼리가 성능 저하의 주요 원인입니다. 애플리케이션 성능을 향상시키려면 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Serve read traffic from the Multi-AZ standby replica.",
          "ko": "다중 AZ 대기 복제본에서 읽기 트래픽을 제공합니다."
        },
        {
          "k": "B",
          "en": "Configure the DB instance to use Transfer Acceleration.",
          "ko": "Transfer Acceleration을 사용하도록 DB 인스턴스를 구성합니다."
        },
        {
          "k": "C",
          "en": "Create a read replica from the primary DB instance and serve read traffic from the read replica.",
          "ko": "원본 DB 인스턴스에서 읽기 전용 복제본을 생성하고 읽기 복제본에서 읽기 트래픽을 제공합니다."
        },
        {
          "k": "D",
          "en": "Use Amazon Kinesis Data Firehose between the application and Amazon RDS to increase database-request concurrency.",
          "ko": "애플리케이션과 Amazon RDS 사이에 Amazon Kinesis Data Firehose를 사용하여 데이터베이스 요청의 동시성을 높입니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "An RDS read replica provides a separate readable endpoint and offloads read-only queries from the primary DB instance, improving read scalability.",
        "ko": "RDS 읽기 전용 복제본은 별도의 읽기 가능 엔드포인트를 제공하고 기본 DB 인스턴스의 읽기 전용 쿼리를 분산하여 읽기 확장성을 높입니다."
      },
      "why_wrong": {
        "A": {
          "en": "A traditional Multi-AZ standby is maintained for failover and is not used to serve application reads.",
          "ko": "기존 다중 AZ 대기 복제본은 장애 조치용이며 애플리케이션 읽기를 제공하지 않습니다."
        },
        "B": {
          "en": "Transfer Acceleration is an Amazon S3 data-transfer feature and does not apply to RDS queries.",
          "ko": "Transfer Acceleration은 Amazon S3 데이터 전송 기능이며 RDS 쿼리에 적용되지 않습니다."
        },
        "D": {
          "en": "Firehose is a streaming delivery service and is not a database connection or query-scaling layer.",
          "ko": "Firehose는 스트리밍 전송 서비스이며 데이터베이스 연결 또는 쿼리 확장 계층이 아닙니다."
        }
      }
    },
    {
      "id": "exam12-634",
      "number": 634,
      "tags": [
        "Amazon S3",
        "Cross-Account Access",
        "Bucket Policy",
        "IAM",
        "Data Sharing"
      ],
      "question": {
        "en": "A company collects 10 GB of remote analytics data daily into an S3 bucket in a source account. Multiple consulting agencies need read access for analysis. Which solution shares the source data securely while maximizing operational efficiency?",
        "ko": "한 회사에서 다양한 기계로부터 매일 10GB의 원격 분석 데이터를 수집하여 소스 데이터 계정의 Amazon S3 버킷에 저장합니다. 여러 컨설팅 기관의 분석가가 이 데이터를 읽어야 합니다. 보안과 운영 효율성을 극대화하면서 소스 계정의 데이터를 공유하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure an S3 global table to copy the data for each agency.",
          "ko": "각 기관의 데이터를 복제하도록 S3 글로벌 테이블을 구성합니다."
        },
        {
          "k": "B",
          "en": "Make the S3 bucket public for a limited time and notify only the agencies.",
          "ko": "S3 버킷을 제한된 시간 동안 공개하고 에이전시에만 알립니다."
        },
        {
          "k": "C",
          "en": "Configure cross-account access to the S3 bucket for accounts owned by the agencies.",
          "ko": "대행사가 소유한 계정에 대해 S3 버킷의 교차 계정 액세스를 구성합니다."
        },
        {
          "k": "D",
          "en": "Create an IAM user for every analyst in the source account and grant each user access to the S3 bucket.",
          "ko": "소스 데이터 계정의 각 분석가에 대해 IAM 사용자를 설정하고 각 사용자에게 S3 버킷 액세스 권한을 부여합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "An S3 bucket policy and roles in each agency account can grant least-privilege cross-account read access without copying data or managing external users in the source account.",
        "ko": "S3 버킷 정책과 각 기관 계정의 역할을 사용하면 데이터를 복사하거나 소스 계정에서 외부 사용자를 관리하지 않고 최소 권한의 교차 계정 읽기 액세스를 제공할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "S3 has no global-table feature; copying data also increases cost and creates additional copies to govern.",
          "ko": "S3에는 글로벌 테이블 기능이 없으며 데이터를 복사하면 비용과 관리해야 할 복사본이 늘어납니다."
        },
        "B": {
          "en": "A public bucket exposes the data beyond the authorized agencies and does not provide secure identity-based access.",
          "ko": "공개 버킷은 승인된 기관 외부에도 데이터를 노출하며 안전한 ID 기반 액세스를 제공하지 않습니다."
        },
        "D": {
          "en": "Creating and maintaining source-account IAM users for external analysts adds identity lifecycle overhead and is less secure than account federation.",
          "ko": "외부 분석가용 소스 계정 IAM 사용자를 생성하고 유지하면 ID 수명 주기 부담이 생기며 계정 간 역할보다 비효율적입니다."
        }
      }
    },
    {
      "id": "exam12-635",
      "number": 635,
      "tags": [
        "Amazon FSx for NetApp ONTAP",
        "SnapMirror",
        "Disaster Recovery",
        "Cross-Region Replication",
        "CIFS",
        "NFS"
      ],
      "question": {
        "en": "A company uses Amazon FSx for NetApp ONTAP for CIFS and NFS shares in a primary Region. Applications on EC2 access the shares. The company needs a storage disaster-recovery solution in a secondary Region, and replicated data must be accessible through the same protocols with minimal operational overhead. Which solution meets the requirements?",
        "ko": "한 회사에서 기본 AWS 리전의 CIFS 및 NFS 파일 공유를 위해 NetApp ONTAP용 Amazon FSx를 사용합니다. Amazon EC2 인스턴스에서 실행되는 애플리케이션은 파일 공유에 액세스합니다. 보조 리전에 스토리지 재해 복구(DR) 솔루션이 필요하며 복제된 데이터는 기본 리전과 동일한 프로토콜을 사용하여 액세스해야 합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use a Lambda function to copy the data to an S3 bucket and replicate the bucket to the secondary Region.",
          "ko": "AWS Lambda 함수를 생성하여 데이터를 Amazon S3 버킷에 복사하고 S3 버킷을 보조 리전으로 복제합니다."
        },
        {
          "k": "B",
          "en": "Back up the FSx for ONTAP volumes with AWS Backup, copy them to the secondary Region, and create a new FSx for ONTAP file system from backup.",
          "ko": "AWS Backup을 사용하여 ONTAP용 FSx 볼륨을 백업하고 보조 리전으로 복사한 뒤 백업에서 새 FSx for ONTAP 인스턴스를 생성합니다."
        },
        {
          "k": "C",
          "en": "Create an FSx for ONTAP file system in the secondary Region and use NetApp SnapMirror to replicate data from the primary Region.",
          "ko": "보조 리전에 ONTAP용 FSx 인스턴스를 생성하고 NetApp SnapMirror를 사용하여 기본 리전에서 보조 리전으로 데이터를 복제합니다."
        },
        {
          "k": "D",
          "en": "Create an Amazon EFS volume, migrate the current data to it, and replicate the volume to the secondary Region.",
          "ko": "Amazon EFS 볼륨을 생성하고 현재 데이터를 볼륨으로 마이그레이션한 뒤 보조 리전으로 복제합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "SnapMirror provides efficient block-level replication between FSx for ONTAP file systems across Regions. The destination remains ONTAP storage and exposes the same NFS and SMB/CIFS protocols for DR.",
        "ko": "SnapMirror는 리전 간 FSx for ONTAP 파일 시스템에 효율적인 블록 수준 복제를 제공합니다. 대상도 ONTAP 스토리지이므로 DR 시 동일한 NFS 및 SMB/CIFS 프로토콜을 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "S3 object storage does not preserve the mounted CIFS and NFS file-system interface and requires custom copy code.",
          "ko": "S3 객체 스토리지는 마운트된 CIFS와 NFS 파일 시스템 인터페이스를 유지하지 않으며 사용자 지정 복사 코드가 필요합니다."
        },
        "B": {
          "en": "Cross-Region backups provide point-in-time recovery rather than ongoing replication and require a restore before access.",
          "ko": "리전 간 백업은 지속적인 복제 대신 특정 시점 복구를 제공하며 액세스 전에 복원이 필요합니다."
        },
        "D": {
          "en": "EFS does not provide CIFS/SMB and requires a disruptive migration away from ONTAP.",
          "ko": "EFS는 CIFS/SMB를 제공하지 않으며 ONTAP에서 중단을 수반하는 마이그레이션이 필요합니다."
        }
      }
    },
    {
      "id": "exam12-636",
      "number": 636,
      "tags": [
        "Amazon SNS",
        "Amazon SQS",
        "AWS Lambda",
        "Amazon S3 Events",
        "Decoupling",
        "Scalability"
      ],
      "question": {
        "en": "A development team is building an event-driven application with Lambda functions. S3 creates an event when a file is added, and Amazon SNS is currently the event destination. What should a solutions architect do to process S3 events in a scalable way?",
        "ko": "개발팀에서 AWS Lambda 함수를 사용하는 이벤트 기반 애플리케이션을 만들고 있습니다. Amazon S3 버킷에 파일이 추가될 때 이벤트가 생성됩니다. 개발팀은 현재 Amazon S3의 이벤트 대상으로 Amazon SNS를 구성하고 있습니다. 확장 가능한 방식으로 Amazon S3 이벤트를 처리하려면 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Create an SNS subscription that processes events in Amazon ECS before invoking Lambda.",
          "ko": "이벤트가 Lambda에서 실행되기 전에 Amazon ECS에서 이벤트를 처리하는 SNS 구독을 생성합니다."
        },
        {
          "k": "B",
          "en": "Create an SNS subscription that processes events in Amazon EKS before invoking Lambda.",
          "ko": "이벤트가 Lambda에서 실행되기 전에 Amazon EKS에서 이벤트를 처리하는 SNS 구독을 생성합니다."
        },
        {
          "k": "C",
          "en": "Subscribe an Amazon SQS queue to the SNS topic and configure the queue to trigger the Lambda function.",
          "ko": "이벤트를 Amazon SQS로 전송하는 SNS 구독을 생성하고 Lambda 함수를 트리거하도록 SQS 대기열을 구성합니다."
        },
        {
          "k": "D",
          "en": "Subscribe AWS Server Migration Service to SNS and configure Lambda to poll SMS events.",
          "ko": "AWS Server Migration Service(AWS SMS)로 이벤트를 전송하는 SNS 구독을 만들고 SMS 이벤트를 폴링하도록 Lambda 함수를 구성합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "SNS fans events out to SQS, and SQS durably buffers bursts while Lambda polls and scales its consumers. This decouples ingestion from processing and supports retries.",
        "ko": "SNS는 이벤트를 SQS로 팬아웃하고 SQS는 급증 이벤트를 내구성 있게 버퍼링하며 Lambda 소비자는 자동 확장됩니다. 이 구성은 수집과 처리를 분리하고 재시도를 지원합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Adding ECS before Lambda introduces unnecessary compute management and is not a native SNS subscription-processing pattern.",
          "ko": "Lambda 앞에 ECS를 추가하면 불필요한 컴퓨팅 관리가 생기며 기본 SNS 구독 처리 패턴도 아닙니다."
        },
        "B": {
          "en": "EKS adds cluster administration without providing the simple durable buffering required here.",
          "ko": "EKS는 필요한 단순 내구성 버퍼링 대신 클러스터 관리 부담을 추가합니다."
        },
        "D": {
          "en": "AWS SMS is a server migration service and is unrelated to application event queuing.",
          "ko": "AWS SMS는 서버 마이그레이션 서비스이며 애플리케이션 이벤트 대기열과 관련이 없습니다."
        }
      }
    },
    {
      "id": "exam12-637",
      "number": 637,
      "tags": [
        "Amazon API Gateway",
        "AWS Lambda",
        "Amazon DynamoDB",
        "Serverless",
        "Auto Scaling",
        "Key-Value Database"
      ],
      "question": {
        "en": "A solutions architect is designing a service based on Amazon API Gateway. Requests can change unpredictably from 0 to more than 500 per second. The backend data is under 1 GB, can grow unpredictably, and is queried with simple key-value requests. Which two AWS services meet the requirements? (Choose two.)",
        "ko": "솔루션 설계자가 Amazon API Gateway를 기반으로 새 서비스를 설계하고 있습니다. 요청 패턴은 예측할 수 없으며 초당 0건에서 500건 이상으로 갑자기 변경될 수 있습니다. 백엔드 데이터베이스에 필요한 데이터의 총 크기는 현재 1GB 미만이며 향후 증가를 예측할 수 없습니다. 데이터는 간단한 키-값 요청을 사용하여 쿼리할 수 있습니다. 요구 사항을 충족하는 AWS 서비스 조합은 무엇입니까? (두 가지 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "AWS Fargate",
          "ko": "AWS Fargate"
        },
        {
          "k": "B",
          "en": "AWS Lambda",
          "ko": "AWS Lambda"
        },
        {
          "k": "C",
          "en": "Amazon DynamoDB",
          "ko": "Amazon DynamoDB"
        },
        {
          "k": "D",
          "en": "Amazon EC2 Auto Scaling",
          "ko": "Amazon EC2 Auto Scaling"
        },
        {
          "k": "E",
          "en": "MySQL-compatible Amazon Aurora",
          "ko": "MySQL 호환 Amazon Aurora"
        }
      ],
      "answer": [
        "B",
        "C"
      ],
      "explanation": {
        "en": "Lambda scales from zero with API request volume without server management. DynamoDB is a managed key-value database that automatically scales storage and, with on-demand capacity, handles unpredictable request traffic.",
        "ko": "Lambda는 서버 관리 없이 API 요청량에 따라 0부터 확장됩니다. DynamoDB는 스토리지를 자동 확장하고 온디맨드 용량으로 예측 불가능한 요청을 처리하는 관리형 키-값 데이터베이스입니다."
      },
      "why_wrong": {
        "A": {
          "en": "Fargate removes server management but still requires container and service capacity configuration and is less direct for short API invocations.",
          "ko": "Fargate는 서버 관리를 줄이지만 컨테이너와 서비스 용량 구성이 필요하여 짧은 API 호출에는 덜 직접적입니다."
        },
        "D": {
          "en": "EC2 Auto Scaling requires instance, image, patching, and scaling-policy management and cannot react as directly as Lambda from zero.",
          "ko": "EC2 Auto Scaling은 인스턴스, 이미지, 패치 및 확장 정책 관리가 필요하며 Lambda처럼 0에서 즉시 대응하지 못합니다."
        },
        "E": {
          "en": "Aurora is a relational database and adds more database capacity and schema management than needed for simple key-value data.",
          "ko": "Aurora는 관계형 데이터베이스이며 단순 키-값 데이터에 필요한 수준보다 많은 용량 및 스키마 관리가 필요합니다."
        }
      }
    },
    {
      "id": "exam12-638",
      "number": 638,
      "tags": [
        "Amazon S3",
        "Presigned URL",
        "AWS Lambda",
        "Secure Sharing",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company stores research data in Amazon S3, processes it in AWS, and needs to share it securely with employees worldwide with minimal operational overhead. Which solution meets the requirements?",
        "ko": "한 회사에서 연구 데이터를 수집하여 Amazon S3 버킷에 저장하고 AWS 클라우드에서 처리합니다. 회사는 데이터를 전 세계 직원들과 공유할 것입니다. 운영 오버헤드를 최소화하는 안전한 AWS 클라우드 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use a Lambda function to generate S3 presigned URLs and instruct employees to use the URLs.",
          "ko": "AWS Lambda 함수를 사용하여 S3 사전 지정 URL을 생성하고 직원들에게 해당 URL을 사용하도록 지시합니다."
        },
        {
          "k": "B",
          "en": "Create an IAM user and an S3-access IAM policy for every employee and require employees to use the AWS Management Console.",
          "ko": "각 직원에 대해 IAM 사용자를 만들고 S3 액세스를 허용하는 IAM 정책을 생성한 뒤 AWS 관리 콘솔을 사용하도록 지시합니다."
        },
        {
          "k": "C",
          "en": "Create an S3 File Gateway with upload and download shares and have employees mount the shares locally.",
          "ko": "S3 파일 게이트웨이를 만들고 업로드 및 다운로드 공유를 생성한 뒤 직원이 로컬 컴퓨터에 공유를 마운트하도록 합니다."
        },
        {
          "k": "D",
          "en": "Configure an AWS Transfer Family SFTP endpoint with a custom identity provider backed by Secrets Manager.",
          "ko": "사용자 지정 ID 공급자 옵션을 사용하는 AWS Transfer Family SFTP 엔드포인트를 구성하고 AWS Secrets Manager로 사용자 자격 증명을 관리합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Presigned URLs provide time-limited access to specific private S3 objects without creating AWS identities for every recipient. A Lambda function can generate them on demand with little administration.",
        "ko": "사전 서명 URL은 모든 수신자에게 AWS ID를 만들지 않고 특정 비공개 S3 객체에 시간 제한 액세스를 제공합니다. Lambda 함수가 필요할 때 URL을 생성하므로 관리 부담이 적습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Managing an IAM user and policy for every employee creates significant credential and lifecycle overhead.",
          "ko": "직원마다 IAM 사용자와 정책을 관리하면 자격 증명 및 수명 주기 부담이 큽니다."
        },
        "C": {
          "en": "File Gateway is intended for hybrid on-premises file access and requires gateway infrastructure and client mounts.",
          "ko": "File Gateway는 하이브리드 온프레미스 파일 액세스용이며 게이트웨이 인프라와 클라이언트 마운트가 필요합니다."
        },
        "D": {
          "en": "Transfer Family can provide secure file transfer but adds endpoint and identity-provider administration beyond simple S3 sharing.",
          "ko": "Transfer Family도 안전한 파일 전송을 제공하지만 단순 S3 공유보다 엔드포인트와 ID 공급자 관리가 더 필요합니다."
        }
      }
    },
    {
      "id": "exam12-639",
      "number": 639,
      "tags": [
        "Application Load Balancer",
        "Sticky Sessions",
        "Load Distribution",
        "Amazon EC2",
        "Performance"
      ],
      "question": {
        "en": "A furniture-inventory application runs on multiple EC2 instances across Availability Zones behind an Application Load Balancer. Incoming traffic is concentrated on one instance, causing latency for some requests. What should a solutions architect do?",
        "ko": "한 회사에서 새로운 가구 재고 애플리케이션을 구축하고 있습니다. 애플리케이션은 여러 가용 영역의 여러 Amazon EC2 인스턴스에 배포되며 EC2 인스턴스는 VPC의 Application Load Balancer(ALB) 뒤에서 실행됩니다. 들어오는 트래픽이 하나의 EC2 인스턴스에 편중되어 일부 요청에 지연 시간이 발생합니다. 이 문제를 해결하려면 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Disable session affinity (sticky sessions) on the ALB.",
          "ko": "ALB에서 세션 선호도(스티키 세션)를 비활성화합니다."
        },
        {
          "k": "B",
          "en": "Replace the ALB with a Network Load Balancer.",
          "ko": "ALB를 Network Load Balancer로 교체합니다."
        },
        {
          "k": "C",
          "en": "Increase the number of EC2 instances in each Availability Zone.",
          "ko": "각 가용 영역에서 EC2 인스턴스 수를 늘립니다."
        },
        {
          "k": "D",
          "en": "Adjust the health-check frequency for the ALB target group.",
          "ko": "ALB 대상 그룹의 상태 확인 빈도를 조정합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Sticky sessions repeatedly route a client to the same target and can produce uneven target utilization. Disabling stickiness lets the ALB distribute requests among healthy targets using its normal routing algorithm.",
        "ko": "스티키 세션은 같은 클라이언트를 동일 대상에 반복 라우팅하여 대상 사용량을 불균형하게 만들 수 있습니다. 스티키 세션을 끄면 ALB가 정상 라우팅 알고리즘으로 정상 대상에 요청을 분산합니다."
      },
      "why_wrong": {
        "B": {
          "en": "Changing load balancer type does not address application-level session affinity and can remove needed Layer 7 features.",
          "ko": "로드 밸런서 유형 변경은 애플리케이션 계층 세션 선호도를 해결하지 못하며 필요한 계층 7 기능을 잃을 수 있습니다."
        },
        "C": {
          "en": "Adding instances does not correct traffic concentration if clients remain pinned to particular targets.",
          "ko": "클라이언트가 특정 대상에 계속 고정되면 인스턴스를 추가해도 트래픽 편중을 해결하지 못합니다."
        },
        "D": {
          "en": "Health-check frequency controls target health detection, not the distribution of requests among healthy targets.",
          "ko": "상태 확인 빈도는 대상 상태 탐지를 제어하며 정상 대상 간 요청 분산을 제어하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-640",
      "number": 640,
      "tags": [
        "AWS Lambda",
        "AWS KMS",
        "IAM Execution Role",
        "Key Policy",
        "Least Privilege",
        "Encryption"
      ],
      "question": {
        "en": "A Lambda function downloads and decrypts files from Amazon S3. The files are encrypted with an AWS KMS key. Which two actions correctly provide the required permissions? (Choose two.)",
        "ko": "한 회사에서 AWS Lambda 함수를 사용하여 Amazon S3에서 파일을 다운로드하고 암호를 해독하는 애플리케이션 워크플로가 있습니다. 이러한 파일은 AWS Key Management Service(AWS KMS) 키를 사용하여 암호화됩니다. 필요한 권한이 올바르게 설정되도록 보장하는 작업 조합은 무엇입니까? (두 가지 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Attach kms:Decrypt permission to the Lambda function's resource-based policy.",
          "ko": "Lambda 함수의 리소스 정책에 kms:Decrypt 권한을 첨부합니다."
        },
        {
          "k": "B",
          "en": "In the KMS key policy, grant decrypt permission to the Lambda execution role.",
          "ko": "KMS 키 정책에서 Lambda IAM 실행 역할에 암호 해독 권한을 부여합니다."
        },
        {
          "k": "C",
          "en": "In the KMS key policy, grant decrypt permission to the Lambda resource policy.",
          "ko": "KMS 키 정책에서 Lambda 리소스 정책에 암호 해독 권한을 부여합니다."
        },
        {
          "k": "D",
          "en": "Create a new IAM policy with kms:Decrypt and attach the policy directly to the Lambda function.",
          "ko": "kms:Decrypt 권한이 있는 새 IAM 정책을 만들고 이 정책을 Lambda 함수에 직접 첨부합니다."
        },
        {
          "k": "E",
          "en": "Create an IAM role with kms:Decrypt permission and associate the role with the Lambda function as its execution role.",
          "ko": "kms:Decrypt 권한이 있는 새 IAM 역할을 만들고 실행 역할을 Lambda 함수에 연결합니다."
        }
      ],
      "answer": [
        "B",
        "E"
      ],
      "explanation": {
        "en": "The function calls KMS with its execution role, so that role needs an identity policy allowing kms:Decrypt. The KMS key policy must also permit the role directly or enable the account's IAM policies to grant that access.",
        "ko": "함수는 실행 역할의 자격 증명으로 KMS를 호출하므로 실행 역할에 kms:Decrypt를 허용하는 자격 증명 정책이 필요합니다. KMS 키 정책도 역할을 직접 허용하거나 계정의 IAM 정책이 해당 액세스를 부여하도록 허용해야 합니다."
      },
      "why_wrong": {
        "A": {
          "en": "A Lambda resource policy controls who may invoke or manage the function; it does not grant the function permission to call KMS.",
          "ko": "Lambda 리소스 정책은 함수를 호출하거나 관리할 주체를 제어하며 함수가 KMS를 호출할 권한을 부여하지 않습니다."
        },
        "C": {
          "en": "A key policy grants access to IAM principals such as the execution role, not to another resource-policy document.",
          "ko": "키 정책은 실행 역할 같은 IAM 보안 주체에 액세스를 부여하며 다른 리소스 정책 문서에 권한을 부여하지 않습니다."
        },
        "D": {
          "en": "IAM policies attach to identities such as roles, users, or groups; they are not attached directly to a Lambda function.",
          "ko": "IAM 정책은 역할, 사용자 또는 그룹 같은 ID에 연결하며 Lambda 함수에 직접 연결하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-641",
      "number": 641,
      "tags": [
        "AWS Cost and Usage Report",
        "AWS Organizations",
        "Amazon S3",
        "Amazon Athena",
        "Cost Optimization"
      ],
      "question": {
        "en": "A company wants to monitor AWS costs for financial reviews. The cloud operations team is designing an architecture in the AWS Organizations management account to query AWS Cost and Usage Reports for all member accounts once a month and provide detailed billing analysis. Which approach is the most scalable and cost-effective?",
        "ko": "회사에서 재무 검토를 위해 AWS 비용을 모니터링하려고 합니다. 클라우드 운영팀은 AWS Organizations 관리 계정에서 모든 구성원 계정에 대한 AWS 비용 및 사용량 보고서를 쿼리하는 아키텍처를 설계하고 있습니다. 팀은 이 쿼리를 한 달에 한 번 실행하고 청구서에 대한 자세한 분석을 제공해야 합니다. 가장 확장 가능하고 비용 효율적인 방법은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure Cost and Usage Reports in the management account, deliver the reports to Amazon Kinesis, and use Amazon EMR for analysis.",
          "ko": "관리 계정에서 비용 및 사용량 보고서를 구성하고 Amazon Kinesis로 보고서를 전달한 뒤 Amazon EMR로 분석합니다."
        },
        {
          "k": "B",
          "en": "Enable Cost and Usage Reports in the management account, deliver the reports to Amazon S3, and use Amazon Athena for analysis.",
          "ko": "관리 계정에서 비용 및 사용량 보고서를 활성화하고 Amazon S3로 보고서를 전달한 뒤 Amazon Athena로 분석합니다."
        },
        {
          "k": "C",
          "en": "Enable Cost and Usage Reports in each member account, deliver the reports to Amazon S3, and use Amazon Redshift for analysis.",
          "ko": "각 구성원 계정에서 비용 및 사용량 보고서를 활성화하고 Amazon S3로 보고서를 전달한 뒤 Amazon Redshift로 분석합니다."
        },
        {
          "k": "D",
          "en": "Configure Cost and Usage Reports in each member account, deliver the reports to Amazon Kinesis, and use Amazon QuickSight for analysis.",
          "ko": "각 구성원 계정에서 비용 및 사용량 보고서를 구성하고 Amazon Kinesis로 보고서를 전달한 뒤 Amazon QuickSight로 분석합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "A Cost and Usage Report created in the Organizations management account can include linked-account usage. Storing it in S3 and querying it monthly with serverless Athena scales without maintaining a cluster and charges primarily for stored and scanned data.",
        "ko": "Organizations 관리 계정에서 생성한 비용 및 사용량 보고서에는 연결 계정 사용량을 포함할 수 있습니다. S3에 저장하고 서버리스 Athena로 매월 쿼리하면 클러스터를 관리하지 않고 확장할 수 있으며 주로 저장량과 스캔량에 대해서만 비용을 지불합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Kinesis and an EMR cluster add streaming and cluster-management cost to a monthly batch query.",
          "ko": "Kinesis와 EMR 클러스터는 월별 배치 쿼리에 불필요한 스트리밍 및 클러스터 관리 비용을 추가합니다."
        },
        "C": {
          "en": "Separate member-account reports fragment organization-wide analysis, and Redshift requires more capacity management for a monthly query.",
          "ko": "구성원 계정별 보고서는 조직 전체 분석을 분산시키며 Redshift는 월별 쿼리에 더 많은 용량 관리가 필요합니다."
        },
        "D": {
          "en": "Per-account reports and Kinesis add operational overhead, while QuickSight is a visualization service rather than the primary SQL query engine for raw reports.",
          "ko": "계정별 보고서와 Kinesis는 운영 부담을 늘리며 QuickSight는 원시 보고서의 주 SQL 쿼리 엔진이 아니라 시각화 서비스입니다."
        }
      }
    },
    {
      "id": "exam12-642",
      "number": 642,
      "tags": [
        "Network Load Balancer",
        "Amazon EC2 Auto Scaling",
        "UDP",
        "Elastic Load Balancing",
        "Scalability"
      ],
      "question": {
        "en": "A company will run a game application on Amazon EC2 instances in an Auto Scaling group. The application transmits data using UDP packets and must scale as traffic increases or decreases. What should a solutions architect do?",
        "ko": "회사에서 AWS 클라우드의 Auto Scaling 그룹에 속한 Amazon EC2 인스턴스에서 게임 애플리케이션을 실행하려고 합니다. 응용 프로그램은 UDP 패킷을 사용하여 데이터를 전송합니다. 회사는 트래픽 증가 또는 감소에 따라 애플리케이션이 확장 및 축소될 수 있도록 하려고 합니다. 솔루션 설계자는 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Attach a Network Load Balancer to the Auto Scaling group.",
          "ko": "Auto Scaling 그룹에 Network Load Balancer를 연결합니다."
        },
        {
          "k": "B",
          "en": "Attach an Application Load Balancer to the Auto Scaling group.",
          "ko": "Auto Scaling 그룹에 Application Load Balancer를 연결합니다."
        },
        {
          "k": "C",
          "en": "Deploy an Amazon Route 53 record set with a weighted routing policy.",
          "ko": "트래픽을 라우팅하기 위해 가중치 정책이 있는 Amazon Route 53 레코드 세트를 배포합니다."
        },
        {
          "k": "D",
          "en": "Deploy a NAT instance configured for port forwarding to the EC2 instances in the Auto Scaling group.",
          "ko": "Auto Scaling 그룹의 EC2 인스턴스에 포트 전달로 구성된 NAT 인스턴스를 배포합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "A Network Load Balancer supports UDP, provides high throughput and low latency, and can distribute traffic to instances that scale with the Auto Scaling group.",
        "ko": "Network Load Balancer는 UDP를 지원하고 높은 처리량과 낮은 지연 시간을 제공하며 Auto Scaling 그룹과 함께 확장되는 인스턴스로 트래픽을 분산할 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "An Application Load Balancer handles HTTP and HTTPS traffic and does not accept UDP listeners.",
          "ko": "Application Load Balancer는 HTTP 및 HTTPS 트래픽을 처리하며 UDP 리스너를 지원하지 않습니다."
        },
        "C": {
          "en": "Weighted DNS records do not provide packet-level load balancing or track Auto Scaling instance membership directly.",
          "ko": "가중치 DNS 레코드는 패킷 수준 로드 밸런싱을 제공하거나 Auto Scaling 인스턴스 구성을 직접 추적하지 않습니다."
        },
        "D": {
          "en": "A NAT instance is intended for network address translation and would create a self-managed bottleneck rather than a scalable UDP load balancer.",
          "ko": "NAT 인스턴스는 네트워크 주소 변환용이며 확장 가능한 UDP 로드 밸런서 대신 자체 관리 병목을 만듭니다."
        }
      }
    },
    {
      "id": "exam12-643",
      "number": 643,
      "tags": [
        "Amazon S3",
        "Amazon Athena",
        "Serverless Analytics",
        "SQL",
        "Cost Optimization"
      ],
      "question": {
        "en": "A company operates websites for several brands. Each website produces tens of gigabytes of web traffic logs daily. Developers need a scalable way to analyze traffic patterns across all websites on demand once a week over several months using standard SQL. Which solution is most cost-effective?",
        "ko": "한 회사에서 여러 브랜드를 위해 AWS에서 여러 웹사이트를 운영하고 있습니다. 각 웹사이트는 매일 수십 기가바이트의 웹 트래픽 로그를 생성합니다. 솔루션 설계자는 개발자가 회사의 모든 웹사이트에 걸쳐 트래픽 패턴을 분석할 수 있도록 확장 가능한 솔루션을 설계해야 합니다. 분석은 몇 달에 걸쳐 일주일에 한 번씩 온디맨드 방식으로 수행되며 표준 SQL 쿼리를 지원해야 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Store the logs in Amazon S3 and analyze them with Amazon Athena.",
          "ko": "로그를 Amazon S3에 저장하고 Amazon Athena를 사용하여 분석합니다."
        },
        {
          "k": "B",
          "en": "Store the logs in Amazon RDS and use a database client for analysis.",
          "ko": "로그를 Amazon RDS에 저장하고 데이터베이스 클라이언트를 사용하여 분석합니다."
        },
        {
          "k": "C",
          "en": "Store the logs in Amazon OpenSearch Service and use OpenSearch Service for analysis.",
          "ko": "로그를 Amazon OpenSearch Service에 저장하고 OpenSearch Service를 사용하여 분석합니다."
        },
        {
          "k": "D",
          "en": "Store the logs in an Amazon EMR cluster and use a supported open-source framework for SQL analysis.",
          "ko": "로그를 Amazon EMR 클러스터에 저장하고 SQL 기반 분석을 지원하는 오픈 소스 프레임워크를 사용합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "S3 provides durable, low-cost storage for months of logs. Athena runs standard SQL directly against S3 without a cluster and charges by data scanned, which suits weekly on-demand analysis.",
        "ko": "S3는 수개월치 로그를 내구성 있고 저렴하게 저장합니다. Athena는 클러스터 없이 S3 데이터를 표준 SQL로 직접 쿼리하고 스캔한 데이터에 따라 과금되므로 주간 온디맨드 분석에 적합합니다."
      },
      "why_wrong": {
        "B": {
          "en": "RDS requires database capacity and ingestion management and is less economical for large append-only logs queried weekly.",
          "ko": "RDS는 데이터베이스 용량과 수집 관리가 필요하며 일주일에 한 번 쿼리하는 대규모 추가 전용 로그에 덜 경제적입니다."
        },
        "C": {
          "en": "OpenSearch requires continuously provisioned domain capacity, increasing cost for infrequent analysis.",
          "ko": "OpenSearch는 지속적으로 프로비저닝된 도메인 용량이 필요하여 드문 분석의 비용을 높입니다."
        },
        "D": {
          "en": "EMR adds cluster provisioning and operation that Athena avoids for intermittent SQL queries.",
          "ko": "EMR은 간헐적 SQL 쿼리에서 Athena로 피할 수 있는 클러스터 프로비저닝과 운영 부담을 추가합니다."
        }
      }
    },
    {
      "id": "exam12-644",
      "number": 644,
      "tags": [
        "AWS Certificate Manager",
        "TLS",
        "Wildcard Certificate",
        "DNS Validation",
        "Application Load Balancer"
      ],
      "question": {
        "en": "An international company uses subdomains for countries, such as example.com, country1.example.com, and country2.example.com. Its workloads are behind Application Load Balancers, and the company wants to encrypt website data in transit. Which two steps meet the requirements? (Choose two.)",
        "ko": "국제적인 회사는 회사가 운영되는 각 국가별로 하위 도메인을 가지고 있습니다. 하위 도메인의 형식은 example.com, country1.example.com, country2.example.com입니다. 회사의 워크로드는 Application Load Balancer 뒤에 있습니다. 회사는 전송 중인 웹사이트 데이터를 암호화하려고 합니다. 요구 사항을 충족하는 단계 조합은 무엇입니까? (두 가지 선택)"
      },
      "options": [
        {
          "k": "A",
          "en": "Use AWS Certificate Manager (ACM) to request a public certificate for example.com and a wildcard certificate for *.example.com.",
          "ko": "AWS Certificate Manager(ACM) 콘솔을 사용하여 최상위 도메인 example.com에 대한 퍼블릭 인증서와 *.example.com에 대한 와일드카드 인증서를 요청합니다."
        },
        {
          "k": "B",
          "en": "Use ACM to request a private certificate for example.com and a wildcard certificate for *.example.com.",
          "ko": "AWS Certificate Manager(ACM) 콘솔을 사용하여 최상위 도메인 example.com에 대한 비공개 인증서와 *.example.com에 대한 와일드카드 인증서를 요청합니다."
        },
        {
          "k": "C",
          "en": "Use ACM to request both public and private certificates only for example.com.",
          "ko": "AWS Certificate Manager(ACM) 콘솔을 사용하여 최상위 도메인 example.com에 대한 퍼블릭 및 비공개 인증서를 요청합니다."
        },
        {
          "k": "D",
          "en": "Validate domain ownership by email, then add the required DNS records to convert to DNS validation.",
          "ko": "이메일 주소로 도메인 소유권을 검증한 뒤 필요한 DNS 레코드를 DNS 공급업체에 추가하여 DNS 유효성 검사로 전환합니다."
        },
        {
          "k": "E",
          "en": "Add the required DNS records at the DNS provider to validate domain ownership.",
          "ko": "DNS 공급업체에 필요한 DNS 레코드를 추가하여 도메인의 도메인 소유권을 검증합니다."
        }
      ],
      "answer": [
        "A",
        "E"
      ],
      "explanation": {
        "en": "Public ACM certificates are trusted by browsers. The apex name and wildcard name cover example.com and its first-level country subdomains, and DNS validation proves domain control with low renewal overhead.",
        "ko": "퍼블릭 ACM 인증서는 브라우저에서 신뢰됩니다. 최상위 이름과 와일드카드 이름이 example.com 및 1단계 국가 하위 도메인을 포함하며 DNS 검증은 갱신 부담을 줄이면서 도메인 제어권을 증명합니다."
      },
      "why_wrong": {
        "B": {
          "en": "A private certificate is not publicly trusted by ordinary internet clients.",
          "ko": "비공개 인증서는 일반 인터넷 클라이언트에서 공개적으로 신뢰되지 않습니다."
        },
        "C": {
          "en": "A certificate only for example.com does not cover country1.example.com and other subdomains.",
          "ko": "example.com만 포함하는 인증서는 country1.example.com 같은 하위 도메인을 포함하지 않습니다."
        },
        "D": {
          "en": "ACM validation is selected for a certificate request; email validation is not converted afterward by merely adding DNS records.",
          "ko": "ACM 검증 방식은 인증서 요청에 대해 선택하며 이메일 검증 후 DNS 레코드만 추가해 검증 방식을 전환하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-645",
      "number": 645,
      "tags": [
        "AWS KMS",
        "External Key Store",
        "Encryption",
        "Compliance",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company must use encryption keys from on-premises key managers that remain outside the AWS Cloud for regulatory reasons. It needs to manage encryption and decryption with keys from several supported third-party external key managers with minimal operational overhead. Which solution meets the requirements?",
        "ko": "회사는 온프레미스 키 관리자에서 암호화 키를 사용해야 합니다. 키 관리자는 규제 및 규정 준수 요구 사항으로 인해 AWS 클라우드 외부에 있습니다. 회사는 AWS 클라우드 외부에 보관되어 있고 여러 공급업체의 다양한 외부 키 관리자를 지원하는 암호화 키를 사용하여 암호화 및 암호 해독을 관리하고자 합니다. 최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use an AWS CloudHSM key store backed by a CloudHSM cluster.",
          "ko": "CloudHSM 클러스터로 지원되는 AWS CloudHSM 키 저장소를 사용합니다."
        },
        {
          "k": "B",
          "en": "Use an AWS KMS external key store supported by the external key manager.",
          "ko": "외부 키 관리자가 지원하는 AWS Key Management Service(AWS KMS) 외부 키 저장소를 사용합니다."
        },
        {
          "k": "C",
          "en": "Use the default AWS KMS managed key store.",
          "ko": "기본 AWS Key Management Service(AWS KMS) 관리형 키 저장소를 사용합니다."
        },
        {
          "k": "D",
          "en": "Use a custom key store backed by an AWS CloudHSM cluster.",
          "ko": "AWS CloudHSM 클러스터가 지원하는 사용자 지정 키 저장소를 사용합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "An AWS KMS external key store lets KMS use key material and cryptographic operations held in an external key manager outside AWS. Supported external key store proxies integrate third-party key managers while preserving KMS APIs.",
        "ko": "AWS KMS 외부 키 저장소를 사용하면 KMS가 AWS 외부의 외부 키 관리자에 보관된 키 자료와 암호화 작업을 사용할 수 있습니다. 지원되는 외부 키 저장소 프록시는 KMS API를 유지하면서 타사 키 관리자를 통합합니다."
      },
      "why_wrong": {
        "A": {
          "en": "A CloudHSM-backed store keeps key material in AWS CloudHSM clusters inside AWS, not in the required external managers.",
          "ko": "CloudHSM 기반 저장소는 필요한 외부 관리자가 아니라 AWS 내부의 CloudHSM 클러스터에 키 자료를 보관합니다."
        },
        "C": {
          "en": "The default KMS key store does not keep cryptographic key material in the company's external key managers.",
          "ko": "기본 KMS 키 저장소는 회사의 외부 키 관리자에 암호화 키 자료를 보관하지 않습니다."
        },
        "D": {
          "en": "A CloudHSM custom key store uses AWS-hosted HSMs and does not satisfy the requirement that the external key managers remain outside AWS.",
          "ko": "CloudHSM 사용자 지정 키 저장소는 AWS에 호스팅된 HSM을 사용하므로 외부 키 관리자가 AWS 밖에 있어야 한다는 요구를 충족하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-646",
      "number": 646,
      "tags": [
        "Amazon FSx for Lustre",
        "High Performance Computing",
        "Amazon S3",
        "Shared File System",
        "Performance"
      ],
      "question": {
        "en": "A solutions architect must host an HPC workload on hundreds of EC2 instances. The instances need parallel access to a shared file system for distributed processing of a large dataset, simultaneous access with latency within 1 ms, and manual access to the dataset after processing. Which solution meets the requirements?",
        "ko": "솔루션 설계자는 AWS 클라우드에서 고성능 컴퓨팅(HPC) 워크로드를 호스팅해야 합니다. 워크로드는 수백 개의 Amazon EC2 인스턴스에서 실행되며 대규모 데이터 세트의 분산 처리를 위해 공유 파일 시스템에 대한 병렬 액세스가 필요합니다. 데이터 세트는 여러 인스턴스에서 동시에 액세스되고 1ms 이내의 액세스 지연 시간이 필요합니다. 처리가 완료된 후 엔지니어는 수동 후처리를 위해 데이터 세트에 액세스해야 합니다. 요구 사항을 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use Amazon EFS as the shared file system and access the dataset from EFS.",
          "ko": "공유 파일 시스템으로 Amazon EFS를 사용하고 Amazon EFS에서 데이터 세트에 액세스합니다."
        },
        {
          "k": "B",
          "en": "Mount an Amazon S3 bucket as the shared file system and perform post-processing directly in the bucket.",
          "ko": "공유 파일 시스템으로 사용할 Amazon S3 버킷을 마운트하고 S3 버킷에서 직접 후처리를 수행합니다."
        },
        {
          "k": "C",
          "en": "Use Amazon FSx for Lustre as the shared file system and link it to an Amazon S3 bucket for post-processing.",
          "ko": "공유 파일 시스템으로 Lustre용 Amazon FSx를 사용하고 후처리를 위해 파일 시스템을 Amazon S3 버킷에 연결합니다."
        },
        {
          "k": "D",
          "en": "Use AWS Resource Access Manager to share an Amazon S3 bucket so it can be mounted on all instances for processing and post-processing.",
          "ko": "AWS Resource Access Manager를 구성하여 처리 및 후처리를 위해 모든 인스턴스에 마운트할 수 있도록 Amazon S3 버킷을 공유합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "FSx for Lustre is a parallel file system designed for HPC, with high throughput and sub-millisecond file-operation latency. Its S3 integration supports importing datasets and exporting processed results for later access.",
        "ko": "FSx for Lustre는 HPC용 병렬 파일 시스템으로 높은 처리량과 밀리초 미만의 파일 작업 지연 시간을 제공합니다. S3 통합을 통해 데이터 세트를 가져오고 처리 결과를 내보내 나중에 액세스할 수 있습니다."
      },
      "why_wrong": {
        "A": {
          "en": "EFS is a general-purpose NFS file system and is not the best fit for the required massively parallel HPC access pattern.",
          "ko": "EFS는 범용 NFS 파일 시스템이며 요구되는 대규모 병렬 HPC 액세스 패턴에 가장 적합하지 않습니다."
        },
        "B": {
          "en": "S3 is object storage and does not natively provide the low-latency POSIX parallel file-system semantics required by the workload.",
          "ko": "S3는 객체 스토리지이며 워크로드에 필요한 저지연 POSIX 병렬 파일 시스템 의미 체계를 기본 제공하지 않습니다."
        },
        "D": {
          "en": "AWS RAM does not turn an S3 bucket into a mountable parallel file system.",
          "ko": "AWS RAM은 S3 버킷을 마운트 가능한 병렬 파일 시스템으로 변환하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-647",
      "number": 647,
      "tags": [
        "AWS Global Accelerator",
        "VoIP",
        "UDP",
        "Multi-Region",
        "High Availability",
        "Low Latency"
      ],
      "question": {
        "en": "A game company is building a VoIP application for users worldwide. It requires high availability with automated failover across AWS Regions, minimum user latency, and no dependence on user-device IP address caching. What should a solutions architect do?",
        "ko": "한 게임 회사에서 VoIP(Voice over IP)를 사용하는 애플리케이션을 구축하고 있습니다. 이 애플리케이션은 전 세계 사용자에게 트래픽을 제공합니다. 애플리케이션은 AWS 리전 전체에 걸쳐 자동화된 장애 조치를 통해 가용성이 높아야 합니다. 회사는 사용자 장치의 IP 주소 캐싱에 의존하지 않고 사용자의 대기 시간을 최소화하려고 합니다. 솔루션 설계자는 무엇을 해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Use AWS Global Accelerator with health checks.",
          "ko": "상태 확인과 함께 AWS Global Accelerator를 사용합니다."
        },
        {
          "k": "B",
          "en": "Use Amazon Route 53 with a geolocation routing policy.",
          "ko": "지리적 위치 라우팅 정책과 함께 Amazon Route 53을 사용합니다."
        },
        {
          "k": "C",
          "en": "Create an Amazon CloudFront distribution with multiple origins.",
          "ko": "여러 오리진을 포함하는 Amazon CloudFront 배포를 생성합니다."
        },
        {
          "k": "D",
          "en": "Create an Application Load Balancer that uses path-based routing.",
          "ko": "경로 기반 라우팅을 사용하는 Application Load Balancer를 생성합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Global Accelerator provides static anycast IP addresses, carries UDP over the AWS global network, monitors regional endpoints, and rapidly redirects traffic to healthy endpoints. The static IPs avoid DNS cache dependence.",
        "ko": "Global Accelerator는 고정 애니캐스트 IP 주소를 제공하고 AWS 글로벌 네트워크를 통해 UDP를 전달하며 리전 엔드포인트 상태를 확인하고 정상 엔드포인트로 신속히 트래픽을 전환합니다. 고정 IP이므로 DNS 캐시에 의존하지 않습니다."
      },
      "why_wrong": {
        "B": {
          "en": "Route 53 failover depends on DNS resolution and caching, and geolocation routing selects by location rather than health and lowest network latency alone.",
          "ko": "Route 53 장애 조치는 DNS 확인과 캐싱에 의존하며 지리적 위치 라우팅은 상태와 최저 네트워크 지연만으로 대상을 선택하지 않습니다."
        },
        "C": {
          "en": "CloudFront is a content delivery service and does not proxy arbitrary VoIP UDP traffic.",
          "ko": "CloudFront는 콘텐츠 전송 서비스이며 임의의 VoIP UDP 트래픽을 프록시하지 않습니다."
        },
        "D": {
          "en": "An ALB is regional and performs HTTP/HTTPS Layer 7 routing, not global UDP failover.",
          "ko": "ALB는 리전 서비스이며 글로벌 UDP 장애 조치가 아니라 HTTP/HTTPS 계층 7 라우팅을 수행합니다."
        }
      }
    },
    {
      "id": "exam12-648",
      "number": 648,
      "tags": [
        "Amazon FSx for Lustre",
        "Persistent File System",
        "High Performance Computing",
        "High Availability",
        "Performance"
      ],
      "question": {
        "en": "A weather-forecasting company must process hundreds of gigabytes with sub-millisecond latency. It is extending an on-premises HPC environment and needs highly available cloud storage for sustained processing, with thousands of compute instances accessing and processing the entire dataset concurrently. What should a solutions architect use?",
        "ko": "일기 예보 회사는 수백 기가바이트의 데이터를 밀리초 미만의 지연 시간으로 처리해야 합니다. 이 회사는 데이터 센터에 고성능 컴퓨팅(HPC) 환경을 갖추고 있으며 예보 기능을 확장하려고 합니다. 솔루션 설계자는 대량의 지속적인 처리량을 처리할 수 있는 고가용성 클라우드 스토리지 솔루션을 찾아야 합니다. 솔루션에 저장된 파일은 전체 데이터 세트에 동시에 액세스하고 처리할 수 있는 수천 개의 컴퓨팅 인스턴스에서 액세스할 수 있어야 합니다. 무엇을 사용해야 합니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Amazon FSx for Lustre with a scratch file system.",
          "ko": "Lustre 스크래치 파일 시스템용 Amazon FSx를 사용합니다."
        },
        {
          "k": "B",
          "en": "Amazon FSx for Lustre with a persistent file system.",
          "ko": "Lustre 퍼시스턴트 파일 시스템용 Amazon FSx를 사용합니다."
        },
        {
          "k": "C",
          "en": "Amazon EFS in Bursting Throughput mode.",
          "ko": "버스팅 처리량 모드와 함께 Amazon EFS를 사용합니다."
        },
        {
          "k": "D",
          "en": "Amazon EFS in Provisioned Throughput mode.",
          "ko": "프로비저닝된 처리량 모드와 함께 Amazon EFS를 사용합니다."
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": {
        "en": "A persistent FSx for Lustre file system provides the parallel, low-latency throughput required by large HPC fleets and adds replicated storage and automatic replacement of failed file servers for long-lived, highly available workloads.",
        "ko": "FSx for Lustre 퍼시스턴트 파일 시스템은 대규모 HPC 플릿에 필요한 병렬 저지연 처리량을 제공하며 장기 고가용성 워크로드를 위해 복제 스토리지와 장애 파일 서버 자동 교체 기능을 제공합니다."
      },
      "why_wrong": {
        "A": {
          "en": "Scratch file systems are temporary and do not replicate data, so they do not satisfy the high-availability requirement.",
          "ko": "스크래치 파일 시스템은 임시 용도이며 데이터를 복제하지 않으므로 고가용성 요구를 충족하지 않습니다."
        },
        "C": {
          "en": "EFS Bursting Throughput is a general-purpose NFS option and does not provide the required HPC parallel performance and sub-millisecond latency.",
          "ko": "EFS 버스팅 처리량은 범용 NFS 옵션이며 필요한 HPC 병렬 성능과 밀리초 미만 지연 시간을 제공하지 않습니다."
        },
        "D": {
          "en": "Provisioning EFS throughput does not provide Lustre's massively parallel HPC architecture and latency characteristics.",
          "ko": "EFS 처리량을 프로비저닝해도 Lustre의 대규모 병렬 HPC 아키텍처와 지연 시간 특성을 제공하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-649",
      "number": 649,
      "tags": [
        "Amazon RDS for PostgreSQL",
        "Amazon EBS gp3",
        "Provisioned IOPS",
        "Database Migration",
        "Cost Optimization"
      ],
      "question": {
        "en": "An ecommerce company runs PostgreSQL on premises with high-IOPS block storage. Peak I/O does not exceed 15,000 IOPS. The company will migrate to Amazon RDS for PostgreSQL and wants to provision disk IOPS independently of storage capacity. Which solution is most cost-effective?",
        "ko": "전자 상거래 회사는 온프레미스에서 PostgreSQL 데이터베이스를 운영합니다. 데이터베이스는 높은 IOPS의 Amazon EBS 블록 스토리지와 유사한 스토리지를 사용하며 초당 일일 피크 I/O 트랜잭션은 15,000 IOPS를 초과하지 않습니다. 회사는 데이터베이스를 PostgreSQL용 Amazon RDS로 마이그레이션하고 디스크 스토리지 용량과 무관하게 디스크 IOPS 성능을 프로비저닝하려고 합니다. 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?"
      },
      "options": [
        {
          "k": "A",
          "en": "Configure General Purpose SSD (gp2) storage and provision 15,000 IOPS.",
          "ko": "범용 SSD(gp2) EBS 볼륨 스토리지 유형을 구성하고 15,000 IOPS를 프로비저닝합니다."
        },
        {
          "k": "B",
          "en": "Configure Provisioned IOPS SSD (io1) storage and provision 15,000 IOPS.",
          "ko": "프로비저닝된 IOPS SSD(io1) EBS 볼륨 스토리지 유형을 구성하고 15,000 IOPS를 프로비저닝합니다."
        },
        {
          "k": "C",
          "en": "Configure General Purpose SSD (gp3) storage and provision 15,000 IOPS.",
          "ko": "범용 SSD(gp3) EBS 볼륨 스토리지 유형을 구성하고 15,000 IOPS를 프로비저닝합니다."
        },
        {
          "k": "D",
          "en": "Configure magnetic storage to achieve the maximum IOPS.",
          "ko": "EBS 마그네틱 볼륨 유형을 구성하여 최대 IOPS를 달성합니다."
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": {
        "en": "RDS General Purpose SSD gp3 lets the company provision IOPS independently of storage size and supports the required 15,000 IOPS at lower cost than Provisioned IOPS storage for this workload.",
        "ko": "RDS 범용 SSD gp3는 스토리지 크기와 독립적으로 IOPS를 프로비저닝할 수 있고 이 워크로드의 15,000 IOPS를 Provisioned IOPS 스토리지보다 저렴하게 지원합니다."
      },
      "why_wrong": {
        "A": {
          "en": "gp2 performance is tied to allocated storage size and does not independently provision the requested IOPS.",
          "ko": "gp2 성능은 할당된 스토리지 크기에 연결되며 요청한 IOPS를 독립적으로 프로비저닝하지 못합니다."
        },
        "B": {
          "en": "io1 can meet the IOPS target but costs more than gp3 when gp3 supports the required performance.",
          "ko": "io1은 IOPS 목표를 충족할 수 있지만 gp3가 필요한 성능을 지원하는 경우 더 비쌉니다."
        },
        "D": {
          "en": "Magnetic storage cannot provide the required 15,000 IOPS and is unsuitable for this database workload.",
          "ko": "마그네틱 스토리지는 필요한 15,000 IOPS를 제공하지 못하며 이 데이터베이스 워크로드에 적합하지 않습니다."
        }
      }
    },
    {
      "id": "exam12-650",
      "number": 650,
      "tags": [
        "Amazon RDS for SQL Server",
        "Read Replica",
        "Database Migration",
        "Managed Database",
        "Operational Excellence"
      ],
      "question": {
        "en": "A company wants to migrate an on-premises Microsoft SQL Server Enterprise database to AWS. An online application processes transactions, and the analytics team runs reports against the same production database. The company wants a managed service with the least operational overhead. Which solution meets the requirements?",
        "ko": "한 회사에서 온프레미스 Microsoft SQL Server 엔터프라이즈 에디션 데이터베이스를 AWS로 마이그레이션하려고 합니다. 회사의 온라인 애플리케이션은 이 데이터베이스를 사용하여 트랜잭션을 처리합니다. 데이터 분석 팀은 동일한 프로덕션 데이터베이스를 사용하여 분석 처리를 위한 보고서를 실행합니다. 이 회사는 가능한 한 관리형 서비스로 전환하여 운영 오버헤드를 줄이려고 합니다. 운영 오버헤드가 가장 적으면서 요구 사항을 충족하는 솔루션은 무엇입니까?"
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
          "en": "Migrate to Amazon DynamoDB and use a DynamoDB on-demand replica for reporting.",
          "ko": "Amazon DynamoDB로 마이그레이션하고 보고 목적으로 DynamoDB 온디맨드 복제본을 사용합니다."
        },
        {
          "k": "D",
          "en": "Migrate to Amazon Aurora MySQL and use an Aurora read replica for reporting.",
          "ko": "Amazon Aurora MySQL로 마이그레이션하고 보고 목적으로 Aurora 읽기 복제본을 사용합니다."
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": {
        "en": "Amazon RDS for SQL Server preserves SQL Server compatibility while AWS manages backups, patching, and infrastructure. A read replica can offload reporting reads from the transactional primary with less operational work than self-managing SQL Server on EC2.",
        "ko": "Amazon RDS for SQL Server는 SQL Server 호환성을 유지하면서 AWS가 백업, 패치 및 인프라를 관리합니다. 읽기 복제본은 EC2에서 SQL Server를 직접 관리하는 것보다 적은 운영 부담으로 트랜잭션 기본 인스턴스에서 보고 읽기를 분리할 수 있습니다."
      },
      "why_wrong": {
        "B": {
          "en": "SQL Server on EC2 requires the company to manage the operating system, database installation, patching, backups, and availability configuration.",
          "ko": "EC2의 SQL Server는 운영 체제, 데이터베이스 설치, 패치, 백업 및 가용성 구성을 회사가 관리해야 합니다."
        },
        "C": {
          "en": "DynamoDB is a NoSQL database and would require a major application and data-model rewrite.",
          "ko": "DynamoDB는 NoSQL 데이터베이스이므로 애플리케이션과 데이터 모델을 크게 다시 작성해야 합니다."
        },
        "D": {
          "en": "Aurora MySQL uses a different database engine and would require conversion and compatibility work that RDS for SQL Server avoids.",
          "ko": "Aurora MySQL은 다른 데이터베이스 엔진이므로 RDS for SQL Server로 피할 수 있는 변환 및 호환성 작업이 필요합니다."
        }
      }
    }
  ]
});
