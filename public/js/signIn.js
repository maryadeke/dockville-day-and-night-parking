const btn = document.querySelector(".btn");
btn.addEventListener("click", validate);
function validate(e) {
  e.preventDefault();

  //   picking input fields with their IDs

  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");

  // picking error fields

  let emailError = document.getElementById("email-error");
  let passwordError = document.getElementById("password-error");
  let confirmPasswordError = document.getElementById("confirmPassword-error");


  // validating email
  if (email.value == "") {
    email.style.border = "2px solid red";
    emailError.textContent = "Email is required";
    emailError.style =
      "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
    email.focus();
    e++;
  }
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.value.match(emailRegex)) {
    email.style.border = "2px solid red";
    emailError.textContent = "The email address is not valid.";
    emailError.style =
      "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
    email.focus();
    e ++;
  } else {
    email.style.border = "2px solid green";
    emailError.textContent = "";
    password.focus();
  }

  //   validating password
  if (password.value == "") {
    password.style.border = "2px solid red";
    passwordError.innerHTML = "password is required";
    passwordError.style = "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
    password.focus();
    e++;
  }

  else if (password.value.length <= 8) {
    password.style.border = "2px solid red";
    passwordError.innerHTML = "Password must be at least 8 characters";
    passwordError.style = "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
    password.focus();
    e++;
  }
  else if (password.value.length >= 20) {
    password.style.border = "2px solid red";
    passwordError.innerHTML = "Password cannot be more than 20 characters";
    passwordError.style = "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
    password.focus();
    e++;

  }
  else if (password.value === 'password') {
    password.style.border = "2px solid red";
    passwordError.innerHTML = "Password cannot be password";
    passwordError.style = "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
    password.focus();
    e++;

  }
  else {
    password.style.border = "2px solid green";
    passwordError.innerHTML = "";
    confirmPassword.focus();
  }

  // validating confirm password
  if (confirmPassword.value == "") {
    confirmPassword.style.border = "2px solid red";
    confirmPasswordError.innerHTML = "confirm your password";
    confirmPasswordError.style = "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
    confirmPassword.focus();
    e++;
  }

  else if (password.value !== confirmPassword.value) {
    confirmPassword.style.border = "2px solid red";
    confirmPasswordError.innerHTML = "Passwords do not match!";
    confirmPasswordError.style = "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
    confirmPassword.focus();
    e++;
  }
  else {
    confirmPassword.style.border = "2px solid green";
    confirmPasswordError.innerHTML = "";
    submit.focus();
  }

}