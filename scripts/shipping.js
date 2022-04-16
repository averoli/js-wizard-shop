//Import object from index.js
import { tshirt } from "./index.js";
///FECHAS DE ENVIOS///
const hoy = new Date();
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const meses = month[hoy.getMonth()];
const fecha = hoy.getDate() + " " + meses + " " + hoy.getFullYear();
const fechaDeEnvio =
  hoy.getDate() + 1 + " " + meses + " " + hoy.getFullYear() + " 20:00hs";
const fechaDeEnvioGratis =
  hoy.getDate() + 2 + " " + meses + " " + hoy.getFullYear() + " 20:00hs";

///FECHAS DE EXTRA///
// const extraDateSend = document.getElementById("extraDateSend");
const datePremium = fecha + " 09:00hs";
const dateFinally = fecha + " 20:00hs";

///FECHAS DE FREE//
// const freeDateSend = document.getElementById("freeDateSend");
const dateExtra = fecha + " 09:00hs";
const dateExtraFinally = fechaDeEnvio;

///FECHAS DE PREMIUM///
// const premiumDateSend = document.getElementById("premiumDateSend");
const dateFree = fecha + " 09:00hs";
const freeDateFinally = fechaDeEnvioGratis;

const inputPremium = document.querySelectorAll(
  ".radioImput input[type='radio']"
);

const containerDate = document.querySelector(".containerDate");
const dateFromEstimate = document.querySelector("#dateFromEstimate");
const dateToEstimate = document.querySelector("#dateToEstimate");

///FECHA DE ENVIO PREMIUM ///
document
  .querySelector("#shipping-premium")
  .addEventListener("change", showPremium);
// const containerPremium = document.querySelector(".containerPremium");
function showPremium(e) {
  //Store variables in object
  tshirt.shippingType = "Premium";
  tshirt.shippingDate = `Between: ${datePremium} and ${dateFinally}`;
  tshirt.shippingPrice = 9.99;
  tshirt.totalPrice = 9.99 + 27.95;
  console.log(e.target);
  if (e.target.id === "shipping-premium") {
    containerDate.style.display = "block";
    // const premiumDate = document.getElementById("premiumDate");
    dateFromEstimate.textContent = `Between: ${datePremium}`;
    dateToEstimate.textContent = `and ${dateFinally}`;
  }
}

///FECHA DE ENVIO 48HS ///

document.querySelector("#extra").addEventListener("change", showExtra);

// const sendExtra = document.querySelector(".containerExtra");

function showExtra(e) {
  //Store variables in object
  tshirt.shippingType = "Extra";
  tshirt.shippingDate = `Between: ${dateExtra} and ${dateExtraFinally}`;
  tshirt.shippingPrice = 4.99;
  tshirt.totalPrice = 4.99 + 27.95;
  console.log(e.target);
  if (e.target.id === "extra") {
    containerDate.style.display = "block";
    // const extraDate = document.getElementById("extraDate");
    dateFromEstimate.textContent = `Between: ${dateExtra}`;
    dateToEstimate.textContent = `and ${dateExtraFinally}`;
  }
}

///FECHA DE ENVIO FREE ///

document.querySelector("#free").addEventListener("change", showFree);

// const sendFree = document.querySelector(".containerFree");

function showFree(e) {
  //Store variables in object
  tshirt.shippingType = "Free";
  tshirt.shippingDate = `Between: ${dateFree} and ${freeDateFinally}`;
  tshirt.shippingPrice = "Gratis";
  tshirt.totalPrice = 27.95;
  console.log(e.target);
  if (e.target.id === "free") {
    containerDate.style.display = "block";
    // const freeDate = document.getElementById("freeDate");
    dateFromEstimate.textContent = `Between: ${dateFree}`;
    dateToEstimate.textContent = `and ${freeDateFinally}`;
  }
}

// VALIDARCION SHIPPING

function validar() {
  let radioInputCheck = inputPremium.value;

  if (radioInputCheck == null || radioInputCheck.length == 0) {
    alert("Error, rellena el campo nombre");
    return false;
  }

  if (!registro.checked) {
    alert("Debe aceptar el registro");
    return false;
  }
}

// VALIDAR GIFT

const giftvalue = document.getElementById("gift-value");
const textAreaShipping = document.getElementById("textAreaShipping");

giftvalue.addEventListener("change", showTextArea);

function showTextArea() {
  console.log("Gift " + giftvalue);
  console.log("textarea " + textAreaShipping);
  if (giftvalue.checked) {
    textAreaShipping.disabled = false;
  } else {
    textAreaShipping.disabled = true;
  }
}

//NEXT BUTTON VALIDATIO

const buttonRadioFree = document.getElementById("free");
const buttonRadioExtra = document.getElementById("extra");
const buttonRadioPremium = document.getElementById("shipping-premium");

const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", ButtonValidationShipping);

function ButtonValidationShipping(e) {
  e.preventDefault();
  if (
    buttonRadioFree.checked ||
    buttonRadioExtra.checked ||
    buttonRadioPremium.checked
  ) {
    const nextSection = document.querySelector("#order");
    const currentSection = document.querySelector("#shipping");
    nextSection.style.display = "flex";
    currentSection.style.display = "none";
    addOrderParameters();
  }
  // else {
  //   return alert("You must choose your shipping type");
  // }
}

// CHANGE BUTTON INPUT FILE

function inputChangeFile() {
  const inputFile = document.getElementById("file-button").files[0].name;
  document.getElementById("info").innerHTML = inputFile;
}

function addOrderParameters(params) {
  let {
    sizeProduct,
    colorHex,
    colorProduct,
    shippingDate,
    shippingType,
    shippingPrice,
    totalPrice,
  } = tshirt;
  console.log(sizeProduct);
  //Title info
  const title = document.querySelector("#orderDetailsColorTitle");
  title.textContent = colorProduct.toUpperCase();
  //size info
  const size = document.querySelectorAll("#orderDetailsSize");
  AddOrderParamsFor(size, sizeProduct);
  const color = document.querySelectorAll("#orderDetailsColor");
  for (const colorSpan of color) {
    colorSpan.style.backgroundColor = colorHex;
  }
  // AddOrderParamsFor(color, colorProduct);
  const date = document.querySelectorAll("#orderEstimatedDate");
  AddOrderParamsFor(date, shippingDate);
  const orderType = document.querySelectorAll("#orderShipType");
  AddOrderParamsFor(orderType, shippingType);
  const orderPrice = document.querySelectorAll("#orderShipPrice");
  AddOrderParamsFor(orderPrice, shippingPrice);
  const finalPrice = document.querySelectorAll("#orderFinalPrice");
  AddOrderParamsFor(finalPrice, totalPrice);

  const orderImage = document.querySelectorAll(".imageSelectedOrder");
  // let src = `../assets/tshirt-back-front/${color}-sweatshirt.png`;
  let src = `/JS/JS_WIZARD_SHOP-v2/JS-WIZARD-SHOP/assets/tshirt-back-front/${colorProduct}-sweatshirt.png`;
  for (const imgSec of orderImage) {
    imgSec.style.backgroundImage = `url("${src}")`;
  }
}
function AddOrderParamsFor(elementHtml, property) {
  for (const e of elementHtml) {
    e.textContent = property;
  }
}
