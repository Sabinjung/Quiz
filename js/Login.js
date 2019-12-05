let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let login = document.getElementById('login');
let errorMessage = document.getElementById('error-message');
let errorPassword = document.getElementById('error-password');
let errorLogin = document.getElementById('error-login');
let register = document.getElementById('register');

let isEmail = false;
let passValid = false;
let isMatch = false;

const finalValidator = () => {
  if (isEmail && passValid) {
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

login.addEventListener('click', (e) => {
  e.preventDefault();
  let regex = /data\d/;
  for(i in localStorage) {
    if(regex.test(i)) {
      data = localStorage.getItem(i);
      parseValue = JSON.parse(data);
      if(parseValue.email === email.value && parseValue.password === pwd.value){
        window.location = 'Quiz.html';
      } else{
        errorPassword.innerHTML = 'Invalid Email or Password';
        errorPassword.style.color = '#dc3545'
      }
    }
  }
})

register.addEventListener('click', (e) => {
  e.preventDefault();
  window.location = 'Register.html';
})