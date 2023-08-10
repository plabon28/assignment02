function checkPasswordMatch() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const passwordMatchError = document.getElementById('password-match-error');
  
    if (password.value !== confirmPassword.value) {
      passwordMatchError.textContent = 'Passwords do not match';
    } else {
      passwordMatchError.textContent = '';
    }
  }
  
  const registrationForm = document.getElementById('registration-form');
  registrationForm.addEventListener('submit', function(event) {
    if (!registrationForm.checkValidity()) {
      event.preventDefault();
    }
  });
  