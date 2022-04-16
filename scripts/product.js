//Next button to next step
const shopNowNext = document.querySelector(".product-details-shopNow button");
shopNowNext.addEventListener("click", showSection);
//Import object from index.js
import { tshirt } from "./index.js";
//Get inputs colors
const inputColors = document.querySelectorAll(".product-details-colors input");
for (const color of inputColors) {
  color.addEventListener("change", pickColor);
}
//Get inputs sizes
const inputSizes = document.querySelectorAll(".product-details-sizes input");
for (const sizes of inputSizes) {
  sizes.addEventListener("change", pickSize);
}
/*
SHOW SECTION
Show section with display hide/block
*/
function showSection() {
  const nextSection = document.querySelector("#profile");
  const currentSection = document.querySelector("#mainProduct");
  nextSection.style.display = "flex";
  currentSection.style.display = "none";
  timeRegister();
  console.log(tshirt);
}

/*TIMER FUNCTION*/
//CountDown function
function timeRegister(params) {
  //Interval every minute
  const intervalContainer = document.querySelector(".intervalTimer");

  //Span with the countdown
  const minutesTime = document.getElementById("timeMinutes");

  //Countdown timer
  let countDown = 5;

  let timerOneMinute = setInterval(function () {
    intervalContainer.style.display = "block";
    timerDuration();
    countDown -= 1;
    minutesTime.textContent = countDown;
    if (countDown === 0) {
      countDown = 5;
      clearInterval(timerOneMinute);
      timerOver();
    }
  }, 60000);

  function timerDuration() {
    setTimeout(function () {
      intervalContainer.style.display = "none";
    }, 5000);
  }
}

function timerOver() {
  //timer 5 minutes its over
  const intervalContainer2 = document.querySelector(".intervalTimerOver");
  intervalContainer2.style.display = "block";
  setTimeout(function () {
    intervalContainer2.style.display = "none";
    redirectProduct();
  }, 5000);
}

function redirectProduct() {
  const mainProduct = document.querySelector("#mainProduct");
  const sections = document.querySelectorAll("body > section");

  for (const step of sections) {
    if (step.id === mainProduct.id) {
      step.style.display = "flex";
    } else {
      step.style.display = "none";
    }
  }
}
const mainImage = document.querySelector(".product-images");
/*GET INFO PRODUCTS*/
function pickColor(e) {
  let color = e.target.value;
  let colorHex = e.target.dataset.colorHex;
  tshirt.colorProduct = color;
  tshirt.colorHex = colorHex;
  //This should change in other computer JS-SHOP-WIZARD folder only in my local
  //CHANGE URL
  // const newSrc =`../assets/tshirt-front/${color}-sweatshirt.png`;
  const newSrc = `/JS/JS_WIZARD_SHOP-v2/JS-WIZARD-SHOP/assets/tshirt-front/${color}-sweatshirt.png`;
  mainImage.style.backgroundImage = `url("${newSrc}")`;
  changeColorMiniature(color);
}

function pickSize(e) {
  tshirt.sizeProduct = e.target.value;
  console.log(tshirt.sizeProduct);
}

const miniatureImgs = document.querySelectorAll(
  ".product-details-miniature .miniature img"
);

for (const minImg of miniatureImgs) {
  minImg.addEventListener("click", clickMiniature);
}
function clickMiniature(e) {
  console.log(e.target.src);
  mainImage.style.backgroundImage = `url(${e.target.src})`;
}

function changeColorMiniature(color) {
  const regexColors = /orange|blue|green|pink/i;

  for (let minImg of miniatureImgs) {
    let newSrc = minImg.src.replace(regexColors, color);
    minImg.src = newSrc;
  }
}
