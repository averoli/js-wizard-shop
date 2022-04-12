const shopNowNext = document.querySelector(".product-details-shopNow button");

shopNowNext.addEventListener("click", showSection);

function showSection() {
  
  const nextSection = document.querySelector("#profile");
  const currentSection = document.querySelector("#mainProduct");
  nextSection.style.display = "block";
  currentSection.style.display = "none";
}
