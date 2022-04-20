let element = false;

const sectionProfile = document.getElementById("profile");
const sectionAddress = document.getElementById("address");
const formProfile = document.getElementById("formProfile");
const fields = document.querySelectorAll(".input-profile");

const userNameProfile = document.getElementById("userNameProfile");
const emailProfile = document.getElementById("emailProfile");
const passwordProfile = document.getElementById("passwordProfile");
const confirmPassProfile = document.getElementById("confirmPassProfile");

const smallUserNameProfile = document.getElementById("errUserNameProfile");
const smallEmailProfile = document.getElementById("errEmailProfile");
const smallPasswordProfile = document.getElementById("errPasswordProfile");
const smallConfirmPassProfile = document.getElementById(
  "errConfirmPassProfile"
);

for (const input of fields) {
  input.addEventListener("change" , validationChangeProfile);
}

function validationChangeProfile(e) {
  const inputName = e.target.id;
  switch (inputName) {
    case "userNameProfile":
      userNameProfileValidation();
      break;
      case "emailProfile":
        emailProfileValidation();
        break;
        case "passwordProfile":
          passwordProfileValidation();
          break;
          case "confirmPassProfile":
            confirmPassProfileValidation();
            break;

  }

}

const requiredFiel = "This field is required";
// Clear the form - Button Clear
document
  .getElementById("clearBtnProfile")
  .addEventListener("click", function (event) {
    for (let i = 0; i < fields.length; i++) {
      fields[i].value = "";
      fields[i].style.borderColor = "#767676";
    }
    smallUserNameProfile.textContent = "";
    smallEmailProfile.textContent = "";
    smallPasswordProfile.textContent = "";
    smallConfirmPassProfile.textContent = "";
  });

// Errors messages

function errUserNameProfile(msg) {
  userNameProfile.style.borderColor = "red";
  smallUserNameProfile.textContent = msg;
}

function errEmailProfile(msg) {
  emailProfile.style.borderColor = "red";
  smallEmailProfile.textContent = msg;
}

function errPasswordProfile(msg) {
  passwordProfile.style.borderColor = "red";
  smallPasswordProfile.textContent = msg;
}

function errConfirmPassProfile(msg) {
  confirmPassProfile.style.borderColor = "red";
  smallConfirmPassProfile.textContent = msg;
}

// Validation functions

function userNameProfileValidation() {
  if (userNameProfile.value == "") {
    errUserNameProfile(requiredFiel);
  } else if (userNameProfile.value.indexOf(" ") >= 0) {
    errUserNameProfile("Name has spaces");
  } else if (userNameProfile.value.length < 5) {
    errUserNameProfile("username less then 5");
  } else if (userNameProfile.value.length > 20) {
    errUserNameProfile("username more then 20");
  } else {
    userNameProfile.style.borderColor = "green";
    smallUserNameProfile.textContent = "";
  }
}

function emailProfileValidation() {
  if (emailProfile.value == "") {
    errEmailProfile(requiredFiel);
  } else if (emailProfile.value.length > 50) {
    errEmailProfile("email more then 50");
  } else {
    emailProfile.style.borderColor = "green";
    smallEmailProfile.textContent = "";
  }
}

function passwordProfileValidation() {
  const passCheck =
    /(?=.*[0-9](?=.*[!@#$%^&*]))(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,20}/;
  if (passwordProfile.value.match(passCheck)) {
    passwordProfile.style.borderColor = "green";
    smallPasswordProfile.textContent = "";
  } else if (passwordProfile.value == "") {
    errPasswordProfile(requiredFiel);
  } else {
    errPasswordProfile("The password must contain at least ...");
  }
}

function confirmPassProfileValidation() {
  if (confirmPassProfile.value == "") {
    errConfirmPassProfile(requiredFiel);
  } else if (confirmPassProfile.value !== passwordProfile.value) {
    errConfirmPassProfile("Passwords don t match!");
  } else {
    confirmPassProfile.style.borderColor = "green";
    smallConfirmPassProfile.textContent = "";
  }
}

// Submitting the form - Button Next

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  userNameProfileValidation();
  emailProfileValidation();
  passwordProfileValidation();
  confirmPassProfileValidation();

  if (
    userNameProfile.style.borderColor == "green" &&
    emailProfile.style.borderColor == "green" &&
    passwordProfile.style.borderColor == "green" &&
    confirmPassProfile.style.borderColor == "green"
  ) {
    sectionProfile.style.display = "none";
    sectionAddress.style.display = "flex";
    progressProfile();
  }
});

function progressProfile() {
const progressBar = document.querySelector("#address #myBar");
const second = document.querySelector("#address .second");
progressBar.style.animationName = "address-animation";
second.style.backgroundColor = "lightseagreen";
second.style.animation = "profile-stopBackground 2s ease-in-out";
}
