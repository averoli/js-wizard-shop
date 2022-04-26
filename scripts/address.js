import progress from "./utils.js"

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

// Error messages
const smallFirstNameAddress = document.getElementById("errFirstNameAddress");

const inputFormAddress = document.querySelectorAll("#addressForm");

for (const input of inputFormAddress) {
  input.addEventListener("change", validateOnPressKeyAddress);
}

function validateOnPressKeyAddress(e) {
  let input = e.target;
  switch (input.id) {
    case "firstNameAddress":
      checkFirstNameAddres(input);
      break;
    case "lastNameAddress":
      checkLastNameAddres(input);
      break;
    case "birthdayAddress":
      checkBirthdayAddres(input);
      break;
    case "address1":
      checkAddres1(input);
      break;
    case "address2":
      checkAddres2(input);
      break;
    case "postalCodeAddress":
      checkPostalCodeAddress(input);
      break;
    case "phoneNumberAddress":
      checkPhoneNumberAddres(input);
      break;
    default:
      break;
  }
  console.log(e.target);
}

function checkInputAddress(e) {
  let checkedForm = true;
  e.preventDefault();
  const firstName = document.getElementById("firstNameAddress");
  const lastName = document.getElementById("lastNameAddress");
  const birthday = document.getElementById("birthdayAddress");
  const address1 = document.getElementById("address1");
  const address2 = document.getElementById("address2");
  const postalCode = document.getElementById("postalCodeAddress");
  const phoneNumber = document.getElementById("phoneNumberAddress");

  //   Check first name
  let firstN = checkFirstNameAddres(firstName);
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
  // Check phone number
  let phoneN = checkPhoneNumberAddres(phoneNumber);
  if (firstN && lastN && birthD && addr1 && addr2 && postC && phoneN) {
    //Function to show next section or not
    isFormCheckedAddress(checkedForm);
    // progressAddress();
    progress("shipping", 3)
  }
}



function checkFirstNameAddres(firstN) {
  let firstName = firstN.value;
  if (firstName.length > 20) {
    errorMsgAddress("Only 20 characters allowed", firstN);
    return false;
  } else if (firstName.length === 0) {
    errorMsgAddress("First name is required", firstN);
    return false;
  } else {
    checkMsgAddress(firstN);
    return true;
  }
}

function checkLastNameAddres(lastN) {
  let lastName = lastN.value;
  if (lastName.length > 20) {
    errorMsgAddress("Only 20 characters allowed", lastN);
    return false;
  } else if (lastName.length === 0) {
    errorMsgAddress("Last name is required", lastN);
    return false;
  } else {
    checkMsgAddress(lastN);
    return true;
  }
}

function checkBirthdayAddres(birthD) {
  let birthday = birthD.value;
  if (birthday.length === 0) {
    errorMsgAddress("Birthday is required", birthD);
    return false;
  } else {
    checkMsgAddress(birthD);
    return true;
  }
}
function checkAddres1(addr1) {
  let address1 = addr1.value;
  if (address1.length > 50) {
    errorMsgAddress("Only 50 characters allowed", addr1);
    return false;
  } else if (address1.length === 0) {
    errorMsgAddress("Address-1 is required", addr1);
    return false;
  } else {
    checkMsgAddress(addr1);
    return true;
  }
}

function checkAddres2(addr2) {
  let address2 = addr2.value;
  if (address2.length > 50) {
    errorMsgAddress("Only 50 characters allowed", addr2);
    return false;
  } else if (address2.length === 0) {
    errorMsgAddress("Address-2 is required", addr2);
    return false;
  } else {
    checkMsgAddress(addr2);
    return true;
  }
}

function checkPhoneNumberAddres(phoneN) {
  let phoneNumber = phoneN.value;
  if (phoneNumber.length > 9) {
    errorMsgAddress("Only 9 digits allowed", phoneN);
    return false;
  } else if (phoneNumber.length === 0) {
    errorMsgAddress("Phone number is required", phoneN);
    return false;
  } else {
    checkMsgAddress(phoneN);
    return true;
  }
}

function checkPostalCodeAddress(postalC) {
  let postalCode = postalC.value;
  if (postalCode.length === 0) {
    errorMsgAddress("Postal code is required", postalC);
    return false;
  } else if (postalCode.length > 5) {
    errorMsgAddress("Only 5 numbers allowed", postalC);
    return false;
  } else {
    checkMsgAddress(postalC);
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

  nextSection.style.display = "flex";
  currentSection.style.display = "none";
}

function errorMsgAddress(msg, element) {
  element.className = "error-input";
  element.nextElementSibling.textContent = msg;
}
function checkMsgAddress(element) {
  element.className = "check-input";
  element.nextElementSibling.textContent = "";
}
