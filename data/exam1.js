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
]
});
