// login.js — robust demo login that saves zyraUser and redirects to dashboard.html
(function(){
  const form = document.getElementById('loginForm');
  const emailEl = document.getElementById('email');
  const passwordEl = document.getElementById('password');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) {
    console.error('login.js: loginForm not found');
    alert('login.js: form missing');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailEl ? emailEl.value.trim() : '';
    const pw = passwordEl ? passwordEl.value : '';

    if (!email) { alert('Enter an email'); emailEl && emailEl.focus(); return; }
    if (!pw) { alert('Enter a password'); passwordEl && passwordEl.focus(); return; }

    // friendly name from email (part before @)
    const name = email.split('@')[0] || 'User';

    try {
      localStorage.setItem('zyraUser', JSON.stringify({ name, email }));
    } catch (err) {
      console.error('localStorage error', err);
      alert('Could not save login info in localStorage');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Signing in…';
    }

    // small delay for UX
    await new Promise(r => setTimeout(r, 300));

    // redirect to dashboard.html (must exist in same folder)
    window.location.href = 'dashboard.html';
  });
})();
