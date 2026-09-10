document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.id = 'v4-developer-splash';
  overlay.innerHTML = `
    <div class="v4-dev-card">
      <div class="v4-dev-title">V4 Poker</div>
      <div class="v4-dev-name">개발자: 장규민</div>
      <div class="v4-dev-copy">© 2026</div>
      <button type="button" id="v4-dev-start">시작하기</button>
    </div>`;
  document.body.appendChild(overlay);

  const style = document.createElement('style');
  style.textContent = `
    #v4-developer-splash{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;background:rgba(5,10,7,.94);font-family:system-ui,-apple-system,'Noto Sans KR',sans-serif}
    .v4-dev-card{text-align:center;padding:38px 46px;border-radius:24px;background:#173b28;box-shadow:0 12px 40px rgba(0,0,0,.45);min-width:280px}
    .v4-dev-title{font-size:32px;font-weight:800;margin-bottom:18px}.v4-dev-name{font-size:20px;font-weight:700}.v4-dev-copy{font-size:13px;opacity:.7;margin:6px 0 24px}
    #v4-dev-start{border:0;border-radius:12px;padding:13px 32px;font-size:18px;font-weight:800;background:#fff;color:#173b28;cursor:pointer}
  `;
  document.head.appendChild(style);

  document.getElementById('v4-dev-start').addEventListener('click', () => {
    overlay.remove();
    style.remove();
  });
});
