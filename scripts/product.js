const shopNowBtn = document.querySelector(".product-details-shopNow button");
// const sections = document.querySelectorAll("body> section");
const profileContainer = document.getElementById("profile");
const productContainer = document.getElementById("mainProduct");
shopNowBtn.addEventListener("click", showProfile);
function showProfile() {
  profileContainer.style.display = "block";
  productContainer.style.display = "none";
}
// const greenBtn = document.querySelector(".green");
// greenBtn.addEventListener("mouseover", changeImg);
// const productImage = document.querySelector(".product-images");
// function changeImg(params) {
//   productImage.style.backgroundImage = `url(../assets/green-sweatshirt.png)`;
// }
