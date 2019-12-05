let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let cpwd =document.getElementById('cpwd');
let login = document.getElementById('login');
let errorMessage = document.getElementById('error-message');
let errorPassword = document.getElementById('error-password');
let errorCPassword = document.getElementById('error-cpassword');

let isEmail = false;
let passValid = false;
let passMatched = false;

const finalValidator = () => {
  if (isEmail && passValid && passMatched) {
    login.disabled = false;
    login.style.cursor = 'pointer';
  } else {
    login.disabled = true;
    login.style.cursor = 'not-allowed';

  }
}

const emailValidator = (email) => {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email)) {
    return true;
  }
  else {
    return false;
  }
}

const pwdValidator = (password) => {
  console.log(password);
  if (password.length < 8) {
    return true;
  } else {
    return false;
  }
}

const cpwdValidator = (cPassword) => {
  if (cPassword === pwd.value){
    return true;
  } else {
    return false;
  }
}

email.addEventListener('input', (e) => {
  if (emailValidator(e.target.value)) {
    isEmail = true;
    errorMessage.innerHTML = 'Email Valid &#10003';
    errorMessage.style.color = '#28a745'
    finalValidator();
  } else {
    isEmail = false;
    errorMessage.innerHTML = 'Email Invalid &#10005';
    errorMessage.style.color = '#dc3545'
    finalValidator();
  }
})

pwd.addEventListener('input', (e) => {
  if (pwdValidator(e.target.value)) {
    passValid = false;
    errorPassword.innerHTML = 'At least 8 character long';
    errorPassword.style.color = '#dc3545'
    finalValidator();
  } else {
    passValid = true;
    errorPassword.innerHTML = '';
    finalValidator();
  }
})

cpwd.addEventListener('input',(e) => {
  if(cpwdValidator(e.target.value)) {
    passMatched = true;
    errorCPassword.innerHTML = 'Password Matched &#10003';
    errorCPassword.style.color = '#28a745';
    finalValidator();
  } else {
    passMatched = false;
    errorCPassword.innerHTML = 'Password Not Matched &#10005';
    errorCPassword.style.color = '#dc3545';
    finalValidator();
  }
})

login.addEventListener('click', (e) => {
  e.preventDefault();
  let key = 'data' + localStorage.length;
  let obj = {
    email : email.value,
    password : pwd.value,
  }
  localStorage.setItem(key, JSON.stringify(obj));
  window.location = 'Login.html';
})
