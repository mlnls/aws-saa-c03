(() => {
  const DAYS = [
    {w:1,t:"문장 뼈대와 품사",tag:"RC 기초",min:45,s:"긴 문장도 주어·동사부터 찾으면 구조가 보입니다.",c:[["주어와 동사 먼저 찾기","전치사구와 수식어를 잠시 지우고 누가 무엇을 하는지 찾습니다.","The revised schedule / will be announced / tomorrow."],["빈칸 자리로 품사 결정","관사 뒤, 동사 앞, be동사 뒤처럼 자리의 신호로 명사·형용사·부사를 고릅니다.","The manager gave a clear explanation. → 관사 a 뒤에는 명사구"]],q:["The committee reached a _____ decision.",["final","finally","finalize"],0,"명사 decision을 꾸미는 형용사 final이 필요합니다."]},
    {w:1,t:"명사·대명사·한정사",tag:"Part 5",min:40,s:"명사를 둘러싼 관사와 수 일치를 한 묶음으로 봅니다.",c:[["셀 수 있는 명사","단수 가산명사는 관사나 소유격 없이 혼자 쓰지 않습니다.","an applicant / the applicant / our applicant"],["대명사의 역할","주격은 주어, 목적격은 목적어, 소유격은 뒤의 명사를 한정합니다.","They sent us their revised proposal."]],q:["All _____ must submit an identification card.",["applicant","applicants","application"],1,"All 뒤에서 사람 전체를 가리키므로 복수 명사 applicants가 맞습니다."]},
    {w:1,t:"동사의 시제와 태",tag:"Part 5",min:50,s:"시간 표현과 주어·행위의 관계를 함께 확인합니다.",c:[["시제를 정하는 단서","yesterday, since, by the time 같은 표현이 사건의 시간을 고정합니다.","The branch has operated since 2018."],["능동과 수동","주어가 행동하면 능동, 행동을 받으면 be + p.p.를 사용합니다.","The invoice was approved by the director."]],q:["The new policy _____ to all employees last Monday.",["announced","was announced","has announced"],1,"정책은 발표되는 대상이고 last Monday가 과거를 지정하므로 was announced입니다."]},
    {w:1,t:"수일치와 준동사",tag:"Part 5",min:45,s:"진짜 주어와 동사를 구분하고 to부정사·동명사의 쓰임을 익힙니다.",c:[["가까운 명사에 속지 않기","전치사구 안의 명사가 아니라 문장의 주어와 동사를 일치시킵니다.","The quality of the products is consistent."],["동사 뒤의 형태","목적어로 to부정사를 받는 동사와 동명사를 받는 동사를 묶어 기억합니다.","plan to expand / avoid delaying"]],q:["The results of the survey _____ available online.",["is","are","being"],1,"주어는 복수 results이므로 are가 맞습니다."]},
    {w:1,t:"형용사와 부사",tag:"Part 5",min:40,s:"꾸미는 대상이 명사인지 동사·형용사인지 먼저 판단합니다.",c:[["형용사가 꾸미는 것","형용사는 명사를 설명하거나 연결동사 뒤에서 주어의 상태를 말합니다.","a reliable supplier / The supplier is reliable."],["부사가 꾸미는 것","부사는 동사·형용사·다른 부사 또는 문장 전체를 꾸밉니다.","The order was processed quickly."]],q:["The software is _____ easy to install.",["remarkable","remarkably","remark"],1,"형용사 easy를 꾸미므로 부사 remarkably가 필요합니다."]},
    {w:1,t:"전치사와 접속사",tag:"Part 5",min:50,s:"뒤에 명사구가 오는지 완전한 절이 오는지로 빠르게 나눕니다.",c:[["전치사 뒤","전치사 뒤에는 명사 또는 동명사 형태가 옵니다.","because of the delay / despite being late"],["접속사 뒤","접속사 뒤에는 주어와 동사를 갖춘 절이 옵니다.","because the shipment was delayed"]],q:["_____ the heavy rain, the event continued as planned.",["Although","Despite","Because"],1,"뒤가 명사구 the heavy rain이므로 전치사 Despite가 맞습니다."]},
    {w:1,t:"Part 5 속도 훈련",tag:"RC 적용",min:55,s:"해석 전에 빈칸의 역할을 판별하는 순서를 자동화합니다.",c:[["5초 진단","선택지 모양이 다르면 품사, 비슷하면 문법·어휘 문제로 분류합니다.","success / successful / successfully → 품사 문제"],["막히면 표시 후 이동","한 문장에 오래 머물기보다 근거가 보이는 문제부터 확보합니다.","자리 확인 → 단서 확인 → 선택 → 이동"]],q:["Customers responded _____ to the updated return policy.",["favor","favorable","favorably"],2,"동사 responded를 꾸미는 부사 favorably가 맞습니다."]},
    {w:2,t:"소리 덩어리와 핵심어",tag:"LC 기초",min:40,s:"모든 단어를 번역하지 않고 의미 단위와 강세를 따라갑니다.",c:[["내용어에 집중","명사·본동사·형용사·숫자는 강하게 들리고 핵심 정보를 전달합니다.","MEET the CLIENT at THREE."],["기능어는 약해진다","관사·전치사·조동사는 약하게 연결되므로 안 들려도 문맥으로 복원합니다.","Could you send it to me? → send / me가 핵심"]],q:["Which words carry the main message in ‘The meeting starts at nine’?",["the / at","meeting / starts / nine","The / meeting"],1,"명사, 본동사, 숫자인 meeting, starts, nine이 핵심 내용어입니다."]},
    {w:2,t:"Part 1 사진 묘사",tag:"Listening",min:40,s:"사람의 동작·사물의 상태·위치를 객관적으로 묘사합니다.",c:[["보이는 것만 판단","의도나 감정을 추측하지 않고 사진에서 확인되는 동작과 상태만 고릅니다.","A woman is arranging some folders."],["위치 표현","next to, across from, along, in the background를 장면과 연결합니다.","Several chairs are lined up along the wall."]],q:["사진에 상자가 벽을 따라 놓여 있다면 가장 알맞은 표현은?",["Boxes are being delivered.","Boxes are lined up along the wall.","The wall is being painted."],1,"lined up along the wall이 눈에 보이는 배치 상태를 정확히 설명합니다."]},
    {w:2,t:"Part 2 의문사 응답",tag:"Listening",min:45,s:"첫 단어로 질문의 정보 종류를 잡고 자연스러운 응답을 고릅니다.",c:[["의문사별 기대 정보","Who는 사람, When은 시간, Where는 장소, Why는 이유를 요구합니다.","When is the deadline? — By Friday."],["직접 답변만 찾지 않기","실제 대화에서는 확인, 제안, 모름을 나타내는 간접 응답도 자주 쓰입니다.","Who approved this? — You should ask Mina."]],q:["Where should I leave these packages?",["At the front desk.","About two kilograms.","Yes, I left early."],0,"Where는 장소를 묻고 At the front desk가 장소를 답합니다."],audio:"Where should I leave these packages?"},
    {w:2,t:"Part 2 간접 응답",tag:"Listening",min:45,s:"질문의 단어를 반복하는 오답보다 상황상 자연스러운 반응을 찾습니다.",c:[["Yes/No 질문의 변형","선택·제안·요청형 질문에는 행동이나 대안을 말하는 응답이 자연스럽습니다.","Can you join us? — I have another appointment."],["소리 유사 함정","질문의 단어와 비슷하게 들리는 말만으로 선택하지 않습니다.","report ↔ resort처럼 소리만 닮은 선택지 주의"]],q:["Haven't you submitted the report yet?",["The resort is nearby.","I'll send it this afternoon.","Yes, the printer is new."],1,"아직 제출하지 않았다는 질문에 제출 시점을 답하는 B가 자연스럽습니다."],audio:"Haven't you submitted the report yet?"},
    {w:2,t:"Part 3 대화 구조",tag:"Listening",min:55,s:"대화가 시작될 때 화자·장소·목적을 먼저 세웁니다.",c:[["첫 두 문장이 지도","대화의 초반에는 관계, 문제, 목적이 제시되는 경우가 많습니다.","I'm calling about my hotel reservation."],["다음 행동 예측","제안·약속·요청 뒤에는 누가 무엇을 할지 추적합니다.","I'll check the system and call you back."]],q:["‘I'm calling about an invoice I received yesterday.’의 대화 목적은?",["채용 일정 확인","청구서 문의","배송 주소 변경"],1,"invoice에 관해 전화했다고 직접 목적을 밝힙니다."]},
    {w:2,t:"Part 4 담화 구조",tag:"Listening",min:55,s:"방송·안내·전화 메시지의 전형적인 순서로 정보를 예측합니다.",c:[["장르를 먼저 식별","announcement, advertisement, voicemail마다 반복되는 정보 순서가 있습니다.","인사/상황 → 핵심 안내 → 요청/연락처"],["숫자는 주변 단어와 묶기","시간·가격·날짜만 적지 말고 무엇의 숫자인지 함께 기억합니다.","3 p.m. — revised departure time"]],q:["보이스메일 끝에 ‘Please call me before noon’이 들리면 무엇을 묻기 쉬운가?",["화자의 외모","청자가 해야 할 일","건물의 위치"],1,"끝부분의 요청은 청자의 다음 행동 문제로 연결됩니다."]},
    {w:2,t:"LC 통합 훈련",tag:"LC 적용",min:60,s:"문제와 선택지를 먼저 훑고 들을 정보의 자리를 만들어 둡니다.",c:[["선지에서 질문 예측","사람·장소가 반복되면 화자 관계, 동사가 반복되면 다음 행동 문제일 가능성이 큽니다.","call / email / visit → 다음 행동을 들을 준비"],["놓친 문장은 버리기","한 문장을 되감아 생각하면 다음 근거도 놓칩니다. 즉시 현재 음성으로 복귀합니다.","정답 표시 → 미련 없이 다음 문항 준비"]],q:["LC에서 한 문장을 놓쳤을 때 가장 좋은 대응은?",["머릿속으로 계속 복원한다","현재 들리는 내용으로 즉시 돌아온다","모든 선택지를 다시 읽는다"],1,"음성은 계속 진행되므로 현재 내용으로 복귀해야 연속 실수를 막습니다."]},
    {w:3,t:"Part 6 문맥과 연결",tag:"Reading",min:45,s:"한 문장 문법을 넘어 앞뒤 문장의 논리와 글의 목적을 읽습니다.",c:[["지시어와 연결어","this, these, however, therefore가 가리키는 내용과 논리 방향을 확인합니다.","Sales fell. Therefore, the plan was revised."],["문장 삽입","대명사·반복어·시간 흐름이 앞뒤 문장과 자연스럽게 이어지는 자리를 찾습니다.","this change가 가리킬 변화가 앞에 있어야 함"]],q:["Sales increased significantly. _____, the company hired more staff.",["Therefore","However","Meanwhile"],0,"매출 증가가 채용 확대로 이어지는 인과관계이므로 Therefore가 적절합니다."]},
    {w:3,t:"Part 7 질문 먼저 읽기",tag:"Reading",min:50,s:"지문 전체를 외우지 않고 질문이 요구하는 정보의 위치를 찾습니다.",c:[["질문 유형 분류","목적·세부 정보·추론·의도 문제를 구분하면 읽는 범위가 달라집니다.","According to the notice → 세부 정보 근거 찾기"],["고유명사와 숫자 표지","이름·날짜·가격을 눈에 띄는 표지로 삼아 관련 문장을 빠르게 찾습니다.","March 12 / $45 / Ms. Ortega"]],q:["‘What is the purpose of the email?’ 문제에서 우선 확인할 부분은?",["모든 숫자","제목과 첫 문단","마지막 사람 이름"],1,"글의 목적은 제목과 도입부에 제시되는 경우가 많습니다."]},
    {w:3,t:"이메일·공지·광고",tag:"Part 7",min:55,s:"문서의 형식을 보면 발신자·독자·목적을 빠르게 예측할 수 있습니다.",c:[["이메일","보낸 사람, 제목, 첫 문장과 마지막 요청을 연결합니다.","Subject: Revised Delivery Schedule"],["공지와 광고","공지는 변경·규칙, 광고는 혜택·조건·행동 유도가 핵심입니다.","Offer valid through June 30."]],q:["광고에서 ‘Offer valid through June 30’은 무엇을 알려 주는가?",["할인 적용 기한","배송 장소","직원 이름"],0,"valid through는 해당 날짜까지 유효하다는 뜻입니다."]},
    {w:3,t:"이중·삼중 지문 연결",tag:"Part 7",min:60,s:"각 문서의 역할을 정한 뒤 공통 인물·날짜·사건으로 연결합니다.",c:[["문서별 한 줄 요약","이메일은 요청, 일정표는 시간, 답장은 변경처럼 역할을 먼저 정리합니다.","A: 주문 요청 / B: 영수증 / C: 배송 안내"],["교차 근거","한 문서만으로 답이 안 나오면 다른 문서의 이름·번호·시간과 결합합니다.","invoice #204가 어떤 주문인지 두 문서에서 연결"]],q:["복수 지문을 읽을 때 가장 먼저 할 일은?",["세 지문을 처음부터 번역","각 문서의 종류와 역할 파악","선택지 단어만 검색"],1,"문서별 역할을 잡아야 필요한 근거가 어느 지문에 있는지 예측할 수 있습니다."]},
    {w:3,t:"패러프레이징",tag:"LC · RC",min:50,s:"정답은 지문의 단어를 그대로 반복하기보다 같은 뜻으로 바꾸어 제시됩니다.",c:[["동의 표현 묶기","purchase=buy, postpone=delay처럼 시험에 자주 나오는 표현을 의미로 연결합니다.","The event was postponed. = The event was moved to a later date."],["상황으로 바뀌는 표현","문장 전체 의미가 결과나 행동으로 바뀔 수 있습니다.","The store is closed. → Customers cannot enter now."]],q:["‘The deadline was extended’와 가장 가까운 뜻은?",["마감이 앞당겨졌다","제출 기간이 더 길어졌다","계획이 취소되었다"],1,"extend a deadline은 마감 시점을 뒤로 늦춰 제출 기간을 늘리는 것입니다."]},
    {w:3,t:"RC 시간 배분",tag:"RC 적용",min:55,s:"Part 5·6에서 시간을 확보하고 Part 7의 긴 지문에 충분히 배분합니다.",c:[["개인 기준선 만들기","정해진 만능 시간보다 실제 풀이 기록으로 파트별 제한 시간을 정합니다.","P5·6 종료 시각을 정하고 매회 기록"],["한 문제의 손실 제한","근거가 안 보이면 표시하고 이동해 뒤의 쉬운 문제를 먼저 확보합니다.","두 번 읽어도 근거가 없으면 보류"]],q:["RC 후반 시간 부족을 줄이는 가장 좋은 습관은?",["Part 5 한 문제를 끝까지 고민","파트별 종료 시각을 정하고 기록","지문을 모두 한국어로 번역"],1,"파트별 기준 시간을 기록하면 병목 구간을 찾고 조정할 수 있습니다."]},
    {w:3,t:"실전 루틴과 오답 분석",tag:"최종 점검",min:60,s:"점수보다 틀린 이유를 유형화해 다음 풀이 행동을 바꿉니다.",c:[["오답 원인 네 가지","개념 부족, 단어 부족, 근거 오독, 시간 부족으로 나누어 기록합니다.","정답만 외우지 않고 다음 행동까지 적기"],["실전과 복습 분리","실전에서는 멈추지 않고, 복습에서는 모든 정답의 근거를 다시 찾습니다.","실전: 시간 준수 / 복습: 근거 문장 표시"]],q:["같은 유형을 반복해서 틀릴 때 가장 도움이 되는 기록은?",["정답 번호만 저장","틀린 원인과 다음 풀이 행동","총점만 기록"],1,"원인과 바꿀 행동을 함께 기록해야 다음 문제에서 실제로 교정할 수 있습니다."]}
  ];

  const STORAGE = "toeic.workbook.completed.v1";
  const completed = new Set(JSON.parse(localStorage.getItem(STORAGE) || "[]"));
  const plan = document.getElementById("planView");
  const dayView = document.getElementById("dayView");
  const grid = document.getElementById("dayGrid");
  const tabs = document.getElementById("weekTabs");
  let activeWeek = Math.min(3, Math.floor(completed.size / 7) + 1);
  const esc = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char]);

  function save() { localStorage.setItem(STORAGE, JSON.stringify([...completed].sort((a,b)=>a-b))); }
  function progress() {
    const percent = Math.round(completed.size / DAYS.length * 100);
    const ring = document.getElementById("scoreRing");
    ring.style.setProperty("--progress", `${percent * 3.6}deg`);
    ring.querySelector("strong").textContent = `${percent}%`;
    const next = DAYS.findIndex((_, index) => !completed.has(index + 1)) + 1 || DAYS.length;
    const button = document.getElementById("continueButton");
    button.href = `#/day/${next}`;
    button.textContent = completed.size ? `Day ${next} 이어서` : "Day 1 시작";
  }
  function renderPlan() {
    tabs.innerHTML = [1,2,3].map(week => `<button type="button" role="tab" aria-selected="${week===activeWeek}" class="${week===activeWeek?'on':''}" data-week="${week}">${week}주차 · ${week===1?'RC 기본기':week===2?'LC 집중':'독해·실전'}</button>`).join("");
    grid.innerHTML = DAYS.map((day,index) => ({day,n:index+1})).filter(item => item.day.w === activeWeek).map(({day,n}) => `<a class="day-card ${completed.has(n)?'done':''}" href="#/day/${n}"><span class="day-number">${completed.has(n)?'✓':n}</span><div><h3>Day ${n} · ${esc(day.t)}</h3><p>${esc(day.s)}</p></div><span>${completed.has(n)?'완료':day.min+'분'} →</span></a>`).join("");
    progress();
  }
  function renderDay(number) {
    const day = DAYS[number - 1];
    if (!day) { location.hash = "#/plan"; return; }
    document.getElementById("dayPosition").textContent = `Day ${number} / ${DAYS.length}`;
    document.getElementById("dayContent").innerHTML = `
      <article class="day-hero"><div class="day-hero-meta"><span>${esc(day.tag)}</span><span>약 ${day.min}분</span></div><h1>Day ${number} · ${esc(day.t)}</h1><p>${esc(day.s)}</p><div class="learning-map"><div><b>1. 원리 이해</b><small>왜 그렇게 되는지 읽기</small></div><div><b>2. 예문 적용</b><small>문장 속 단서 확인</small></div><div><b>3. 문제 확인</b><small>근거를 골라 완료</small></div></div></article>
      <div class="lesson-layout"><div class="lesson-list">${day.c.map((concept,index) => `<section class="lesson" id="concept-${index+1}"><span class="lesson-num">CORE CONCEPT ${String(index+1).padStart(2,'0')}</span><h2>${esc(concept[0])}</h2><p>${esc(concept[1])}</p><div class="lesson-example"><small>EXAMPLE</small><b>${esc(concept[2])}</b>${day.audio&&index===0?`<button class="listen-button" type="button" data-speak="${esc(day.audio)}">▶ 문장 듣기</button>`:''}</div></section>`).join('')}
        <section class="checkpoint"><header><div><span>CHECKPOINT</span><h2>배운 내용 확인</h2></div><span>${completed.has(number)?'✓ 완료':'1문제'}</span></header><p class="question">${esc(day.q[0])}</p><div class="answers">${day.q[1].map((answer,index)=>`<button class="answer" type="button" data-answer="${index}">${String.fromCharCode(65+index)}. ${esc(answer)}</button>`).join('')}</div><p class="feedback" role="status">정답의 근거를 생각한 뒤 선택하세요.</p></section>
        <nav class="day-nav">${number>1?`<a href="#/day/${number-1}">← Day ${number-1}</a>`:'<span></span>'}${number<DAYS.length?`<a href="#/day/${number+1}">Day ${number+1} →</a>`:`<a href="#/plan">전체 진도 보기</a>`}</nav></div>
        <aside class="day-aside"><span>TODAY'S CONTENTS</span><h3>학습 목차</h3>${day.c.map((concept,index)=>`<a href="#concept-${index+1}">${index+1}. ${esc(concept[0])}</a>`).join('')}<a href="#checkpoint">확인 문제</a></aside></div>`;
    const checkpoint = document.querySelector(".checkpoint"); checkpoint.id = "checkpoint";
    checkpoint.addEventListener("click", event => {
      const button = event.target.closest("[data-answer]"); if (!button || checkpoint.dataset.answered) return;
      const picked = Number(button.dataset.answer), correct = day.q[2];
      checkpoint.querySelectorAll("[data-answer]").forEach(item => item.classList.remove("correct", "wrong"));
      checkpoint.querySelectorAll("[data-answer]").forEach((item,index) => {
        if (index === correct) item.classList.add("correct");
        else if (index === picked) item.classList.add("wrong");
      });
      const feedback = checkpoint.querySelector(".feedback");
      if (picked === correct) { checkpoint.dataset.answered = "1"; completed.add(number); save(); checkpoint.querySelector("header>span").textContent = "✓ 완료"; feedback.innerHTML = `<b>정답입니다.</b> ${esc(day.q[3])} Day ${number} 학습이 완료됐어요.`; }
      else feedback.innerHTML = `<b>아직 아니에요.</b> 해설을 확인하고 다시 골라보세요. ${esc(day.q[3])}`;
    });
    document.querySelectorAll("[data-speak]").forEach(button => button.addEventListener("click", () => { speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(button.dataset.speak); utterance.lang="en-US"; utterance.rate=.86; speechSynthesis.speak(utterance); }));
  }
  function route() {
    if ((location.hash || "") === "#/today") {
      const next = DAYS.findIndex((_, index) => !completed.has(index + 1)) + 1 || DAYS.length;
      location.replace(`#/day/${next}`); return;
    }
    const match = (location.hash || "#/plan").match(/^#\/day\/(\d+)$/);
    plan.hidden = !!match; dayView.hidden = !match;
    document.querySelectorAll("[data-route]").forEach(link => link.classList.toggle("on", !match && link.dataset.route === "plan"));
    if (match) renderDay(Number(match[1])); else renderPlan();
    scrollTo({top:0,behavior:"instant"});
  }
  tabs.addEventListener("click", event => { const button=event.target.closest("[data-week]"); if(!button)return; activeWeek=Number(button.dataset.week); renderPlan(); });
  document.getElementById("resetProgress").addEventListener("click", () => { if(confirm("TOEIC 학습 진도를 모두 초기화할까요?")){completed.clear();save();activeWeek=1;renderPlan();} });
  const theme = localStorage.getItem("toeic.theme"); if(theme) document.documentElement.dataset.theme=theme;
  document.getElementById("themeToggle").addEventListener("click",()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem("toeic.theme",next);});
  addEventListener("hashchange",route); route();
})();
