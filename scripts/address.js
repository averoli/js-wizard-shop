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
  e.preventDefault();
  const firstNameContainer = document.getElementById("firstNameAddress");
  const firstName = document.getElementById("firstNameAddress").value;
  const lastName = document.getElementById("lastNameAddress").value;
  const birthday = document.getElementById("birthdayAddress").value;
  const address1 = document.getElementById("address1").value;
  const address2 = document.getElementById("address2").value;
  const postalCode = document.getElementById("postalCodeAddress").value;

  //   Check first name
  checkFirstNameAddres(firstName, firstNameContainer);
  //   Check last name
  checkLastNameAddres(lastName);
  //   Check birthday
  checkBirthdayAddres(birthday);
  // Check address 1
  checkAddres1(address1);
  // Check address 2
  checkAddres2(address2);
  //   Check postal Code
  checkPostalCodeAddress(postalCode);
  //   Check country born
  //   checkCountryBornAddress;
}
// const countryBornOpt = document.querySelectorAll("#countryBorn option");
// const countryPhoneOpt = document.querySelectorAll("#countryPhone option");
// const countrySelect = document.querySelector("#countryBorn");
// countrySelect.addEventListener(
//   "change",
//   checkCountryBornAddress(e, countryBornOpt, countryPhoneOpt)
// );

function checkFirstNameAddres(firstName, firstNameContainer) {
  if (firstName.length > 20) {
    console.log("Only 20 characters allowed");
  } else if (firstName.length === 0) {
    console.log("This field is required");
  } else {
    console.log("First name is OK: " + firstName);
  }
}

function checkLastNameAddres(lastName) {
  if (lastName.length > 20) {
    console.log("Only 20 characters allowed");
  } else if (lastName.length === 0) {
    console.log("lastName is required");
  } else {
    console.log("lastName is OK: " + lastName);
  }
}

function checkBirthdayAddres(birthday) {
  if (birthday.length === 0) {
    console.log("birthday is required");
  } else {
    console.log("Birthday is OK: " + birthday);
  }
}
function checkAddres1(address1) {
  if (address1.length > 50) {
    console.log("Only 50 characters allowed");
  } else if (address1.length === 0) {
    console.log("address1 is required");
  } else {
    console.log("address1 is OK: " + address1);
  }
}

function checkAddres2(address2) {
  if (address2.length > 50) {
    console.log("Only 50 characters allowed");
  } else if (address2.length === 0) {
    console.log("address2 is required");
  } else {
    console.log("address2 is OK: " + address2);
  }
}

function checkPostalCodeAddress(postalCode) {
  if (postalCode.length === 0) {
    console.log("postalCode is required");
  } else if (postalCode > 5) {
    console.log("Only 5 numbers");
  } else {
    console.log("postalCode is OK: " + postalCode);
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

// TODO error message
// function errorAddress(msg, element) {
// }
