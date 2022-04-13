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

/*GET INFO PRODUCTS*/
function pickColor(e) {
  tshirt.colorProduct = e.target.value;
  console.log(tshirt.colorProduct);
}

function pickSize(e) {
  tshirt.sizeProduct = e.target.value;
  console.log(tshirt.sizeProduct);
}
