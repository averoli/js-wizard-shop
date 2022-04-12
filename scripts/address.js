const addressForm = document.querySelector("#addressForm");
addressForm.addEventListener("submit", checkInputAddress);
/*Country*/
const countryBornOpt = document.querySelectorAll("#countryBornAddress option");
const countryPhoneOpt = document.querySelectorAll(
  "#countryPhoneAddress option"
);
const countrySelect = document.querySelector("#countryBornAddress");
countrySelect.addEventListener("change", checkCountryBornAddress);
//
function checkInputAddress(e) {
  let checkedForm = true;
  e.preventDefault();
  const firstNameContainer = document.getElementById("firstNameAddress");
  const firstName = document.getElementById("firstNameAddress").value;
  const lastName = document.getElementById("lastNameAddress").value;
  const birthday = document.getElementById("birthdayAddress").value;
  const address1 = document.getElementById("address1").value;
  const address2 = document.getElementById("address2").value;
  const postalCode = document.getElementById("postalCodeAddress").value;

  //   Check first name
  let firstN = checkFirstNameAddres(firstName, firstNameContainer);
  //   Check last name
  let lastN = checkLastNameAddres(lastName);
  //   Check birthday
  let birthD = checkBirthdayAddres(birthday);
  // Check address 1
  let addr1 = checkAddres1(address1);
  // Check address 2
  let addr2 = checkAddres2(address2);
  //   Check postal Code
  let postC = checkPostalCodeAddress(postalCode);
  if (firstN && lastN && birthD && addr1 && addr2 && postC) {
    //Function to show next section or not
    isFormCheckedAddress(checkedForm);
  }
}

function checkFirstNameAddres(firstName, firstNameContainer) {
  if (firstName.length > 20) {
    console.log("Only 20 characters allowed");
    return false;
  } else if (firstName.length === 0) {
    console.log("This field is required");
    return false;
  } else {
    console.log("First name is OK: " + firstName);
    return true;
  }
}

function checkLastNameAddres(lastName) {
  if (lastName.length > 20) {
    console.log("Only 20 characters allowed");
    return false;
  } else if (lastName.length === 0) {
    console.log("lastName is required");
    return false;
  } else {
    console.log("lastName is OK: " + lastName);
    return true;
  }
}

function checkBirthdayAddres(birthday) {
  if (birthday.length === 0) {
    console.log("birthday is required");
    return false;
  } else {
    console.log("Birthday is OK: " + birthday);
    return true;
  }
}
function checkAddres1(address1) {
  if (address1.length > 50) {
    console.log("Only 50 characters allowed");
    return false;
  } else if (address1.length === 0) {
    console.log("address1 is required");
    return false;
  } else {
    console.log("address1 is OK: " + address1);
    return true;
  }
}

function checkAddres2(address2) {
  if (address2.length > 50) {
    console.log("Only 50 characters allowed");
    return false;
  } else if (address2.length === 0) {
    console.log("address2 is required");
    return false;
  } else {
    console.log("address2 is OK: " + address2);
    return true;
  }
}

function checkPostalCodeAddress(postalCode) {
  if (postalCode.length === 0) {
    console.log("postalCode is required");
    return false;
  } else if (postalCode.length > 5) {
    console.log("Only 5 numbers");
    return false;
  } else {
    console.log("postalCode is OK: " + postalCode);
    return true;
  }
}

function checkCountryBornAddress() {
  let pos = 0;
  for (const country of countryBornOpt) {
    if (country.selected === true) {
      countryPhoneOpt[pos].selected = true;
      break;
    }
    pos++;
  }
}

function isFormCheckedAddress() {
  const nextSection = document.querySelector("#shipping");
  const currentSection = document.querySelector("#address");

  nextSection.style.display = "block";
  currentSection.style.display = "none";
}
// TODO error message
// function errorAddress(msg, element) {
// }
