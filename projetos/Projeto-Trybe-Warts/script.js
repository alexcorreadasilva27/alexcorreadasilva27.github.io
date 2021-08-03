const loginInput = document.getElementById('input_login');
const passwordInput = document.getElementById('input_senha');
const loginButton = document.getElementById('btn_logar');
const agreementCheck = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

loginButton.addEventListener('click', () => {
  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

window.onload = () => {
  if (!agreementCheck.checked) {
    submitButton.disabled = true;
  }
};

agreementCheck.addEventListener('click', () => {
  if (agreementCheck.checked) {
    submitButton.disabled = false;
  }
});
// https://www.easyprogramming.net/javascript/js_count_characters.php

const textarea = document.getElementById('textarea');
const maximum = document.getElementById('maximum');

textarea.addEventListener('keyup', () => {
  const characters = textarea.value.split('');
  maximum.innerText = characters.length;
});
