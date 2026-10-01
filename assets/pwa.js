(function () {
  const panel = document.getElementById('pwaPanel');
  const install = document.getElementById('pwaInstall');
  const message = document.getElementById('pwaMessage');
  const status = document.getElementById('pwaStatus');
  const standalone = matchMedia('(display-mode: standalone)');
  const supported = 'serviceWorker' in navigator && isSecureContext && /^https?:$/.test(location.protocol);
  let promptEvent = null;
  let ready = false;
  let waiting = false;

  function renderStatus() {
    if (!supported) {
      status.textContent = '앱 설치와 오프라인 학습은 HTTPS 주소에서 사용할 수 있어요.';
    } else if (!navigator.onLine) {
      status.textContent = '오프라인 · 저장된 문제와 워크북을 읽을 수 있어요. 로그인과 서버 기록 저장은 인터넷 연결이 필요합니다.';
    } else if (waiting) {
      status.textContent = '새 버전이 준비됐어요. 학습을 마친 뒤 앱과 이 사이트의 탭을 모두 닫고 다시 열면 적용됩니다.';
    } else {
      status.textContent = ready ? '오프라인 학습 준비 완료 · 로그인과 서버 기록 저장은 인터넷 연결이 필요해요.' : '오프라인 학습에 필요한 파일을 준비하고 있어요.';
    }
  }
  function renderInstall() {
    panel.hidden = standalone.matches || navigator.standalone === true;
    install.hidden = !promptEvent || panel.hidden;
    message.textContent = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
      ? 'iPhone·iPad: 공유 메뉴 → 홈 화면에 추가를 선택하세요.'
      : '브라우저 메뉴의 앱 설치 또는 홈 화면에 추가를 사용하세요.';
  }
  addEventListener('beforeinstallprompt', event => {
    event.preventDefault(); promptEvent = event; renderInstall();
  });
  install.addEventListener('click', async () => {
    const event = promptEvent;
    if (!event) return;
    promptEvent = null; renderInstall();
    try { await event.prompt(); await event.userChoice; } catch (_) { message.textContent = '브라우저 메뉴에서 앱 설치를 다시 선택해 주세요.'; }
  });
  addEventListener('appinstalled', () => { promptEvent = null; panel.hidden = true; });
  standalone.addEventListener('change', renderInstall);
  addEventListener('online', renderStatus);
  addEventListener('offline', renderStatus);
  renderInstall(); renderStatus();
  if (!supported) return;

  navigator.serviceWorker.register('./sw.js', {updateViaCache: 'none'}).then(registration => {
    ready = !!registration.active;
    waiting = !!registration.waiting;
    renderStatus();
    registration.addEventListener('updatefound', () => {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener('statechange', () => {
        if (worker.state === 'installed') {
          waiting = !!navigator.serviceWorker.controller;
          ready = true;
          renderStatus();
        } else if (worker.state === 'redundant') {
          status.textContent = '오프라인 파일을 준비하지 못했어요. 연결을 확인하고 다음 접속 때 다시 시도해 주세요.';
        }
      });
    });
    navigator.serviceWorker.ready.then(() => { ready = true; renderStatus(); });
  }).catch(() => {
    status.textContent = '오프라인 기능을 준비하지 못했어요. 온라인으로 계속 학습할 수 있습니다.';
  });
})();
