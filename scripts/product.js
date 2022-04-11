const shopNowBtn = document.querySelector(".product-details-shopNow button");
const sections = document.querySelectorAll("body> section");

shopNowBtn.addEventListener("click", showProfile);
function showProfile(id) {
  for (const step of sections) {
    console.log(step.id);
    if (step.id === id) {
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
