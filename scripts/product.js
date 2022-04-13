const shopNowNext = document.querySelector(".product-details-shopNow button");
const minutesTime = document.getElementById("timeMinutes");

const intervalContainer = document.querySelector(".interval");
let timeAdria = 5;
let string = "hello";

shopNowNext.addEventListener("click", showSection);

function showSection() {
  const nextSection = document.querySelector("#profile");
  const currentSection = document.querySelector("#mainProduct");
  nextSection.style.display = "flex";
  currentSection.style.display = "none";
  timeRegister();
}

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
