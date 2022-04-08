const username = document.querySelector(".input-profile");

const nextBtn = document.getElementById("next-btn");
const form = document.getElementById("form");

const field = form.querySelectorAll(".input-profile");

function userNameValidation() {
  if (username.value.length < 5) {
    console.log("username less then 5");
  } else if (username.value.length > 20) {
    console.log("username more then 20");
  }git 
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  userNameValidation();
  for (let i = 0; i < field.length; i++) {
    if (field[i].value == false) {
      console.log("Field connot be empty!");
      field[i].style.borderColor = "red";
    } else {
      console.log("All is correct!");
    }
  }
});
