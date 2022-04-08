const form = document.getElementById("form");
const field = form.querySelectorAll(".input-profile");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");

const clearBtn = document.getElementById("clear-btn");
const nextBtn = document.getElementById("next-btn");

function userNameValidation() {
  if (username.value.length < 5) {
    console.log("username less then 5");
  } else if (username.value.length > 20) {
    console.log("username more then 20");
  }
}

function emailValidation() {
  // const validSymbols = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.length > 50) {
    console.log("email more then 50");
  }
  // if(email.value.match(validSymbols == false)){
  //     console.log("Invalid email adress!");
  // }
}

function passwordValidation() {
  console.log(password.value);
  const passCheck =
    /(?=.*[0-9](?=.*[!@#$%^&*]))(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,20}/;
  if (password.value.match(passCheck)) {
    console.log("Correct");
  } else {
    console.log("The text must contain at least ...");
  }
}

function confirmPassValidation() {
  if (confirmPass.value !== password.value) {
    console.log("Passwords don t match!");
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  userNameValidation();
  emailValidation();
  passwordValidation();
  confirmPassValidation();
  for (let i = 0; i < field.length; i++) {
    if (field[i].value == false) {
      console.log("Field connot be empty!");
      field[i].style.borderColor = "red";
    } else {
      field[i].style.borderColor = "green";
    }
  }
});
