const greenBtn = document.querySelector(".green");
greenBtn.addEventListener("mouseover", changeImg);
const productImage = document.querySelector(".product-images");
function changeImg(params) {
  productImage.style.backgroundImage = `url("../assets/green-sweatshirt.png")!important`;
}
