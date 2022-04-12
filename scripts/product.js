const shopNowBtn = document.querySelector(".product-details-shopNow button");
const sections = document.querySelectorAll("body> section");
const profile = document.getElementById("#profile")

shopNowBtn.addEventListener("click", showProfile);
function showProfile() {
  for (const step of sections) {
    console.log(step.id);
    if (step.id === "profile") {
      step.style.display = "block";
    } else {
      step.style.display = "none";
    }
  }
}
// const greenBtn = document.querySelector(".green");
// greenBtn.addEventListener("mouseover", changeImg);
// const productImage = document.querySelector(".product-images");
// function changeImg(params) {
//   productImage.style.backgroundImage = `url(../assets/green-sweatshirt.png)`;
// }
