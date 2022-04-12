const shopNowNext = document.querySelector(".product-details-shopNow button");

shopNowNext.addEventListener("click", showSection);

function showSection() {
  
  const nextSection = document.querySelector("#profile");
  const currentSection = document.querySelector("#mainProduct");
  nextSection.style.display = "block";
  currentSection.style.display = "none";
}


const intervalContainer = document.querySelector(".interval");
const minutesTime = document.getElementById("timeMinutes");
let timeAdria = 0;
let string = "hello";
 
let showEveryMinute = setInterval(function () {
  intervalContainer.style.display="block";
  show2Seconds();
  timeAdria++;
  if (timeAdria === 5) {
    clearInterval(showEveryMinute);
  }
}, 60000);
 
function show2Seconds() {
  setTimeout(function () {
    intervalContainer.style.display="none";
  }, 5000);
}

