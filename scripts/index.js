// const nextSection = document.querySelectorAll(".nextSection");
// const sections = document.querySelectorAll("body> section");
// // TODO get all the buttons next and add one event that shows the especific section  and hide
// //TODO export this function to different JS files
// for (const btnNxt of nextSection) {
//   btnNxt.addEventListener("click", showSection);
// }
// function showSection(e) {
//   let idSection = e.target.closest("section").nextElementSibling.id;
//   for (const step of sections) {
//     console.log(step.id);
//     if (step.id === idSection) {
//       step.style.display = "block";
//     } else {
//       step.style.display = "none";
//     }
//   }
// }
// let images = [];

// window.addEventListener("load", (e) => {
//   preload();
// });

// function preload() {
//   for (const imgSrc of arguments) {
//     let img = new Image();
//     img.src = imgSrc;
//     images.push(img);
//   }
// }

// preload(
//   "../JS-WIZARD-SHOP/assets/tshirt-front/blue-sweatshirt.png",
//   "../JS-WIZARD-SHOP/assets/tshirt-front/orange-sweatshirt.png",
//   "../JS-WIZARD-SHOP/assets/tshirt-front/pink-sweatshirt.png",
//   "../JS-WIZARD-SHOP/assets/tshirt-front/green-sweatshirt.png",
//   "../JS-WIZARD-SHOP/assets/tshirt-back/blue-sweatshirt.png",
//   "../JS-WIZARD-SHOP/assets/tshirt-back/orange-sweatshirt.png",
//   "../JS-WIZARD-SHOP/assets/tshirt-back/pink-sweatshirt.png",
//   "../JS-WIZARD-SHOP/assets/tshirt-back/green-sweatshirt.png",
//   "../JS-WIZARD-SHOP/assets/tshirt-back-front/blue-sweatshirt.png",
//   "../JS-WIZARD-SHOP/assets/tshirt-back-front/orange-sweatshirt.png",
//   "../JS-WIZARD-SHOP/assets/tshirt-back-front/pink-sweatshirt.png",
//   "../JS-WIZARD-SHOP/assets/tshirt-back-front/green-sweatshirt.png"
// );
/*Object to store info about product*/
class Product {
  constructor(
    sizeProduct,
    colorProduct,
    shippingDate,
    shippingType,
    shippingPrice,
    totalPrice
  ) {
    this.sizeProduct = sizeProduct;
    this.colorProduct = colorProduct;
    this.shippingDate = shippingDate;
    this.shippingType = shippingType;
    this.shippingPrice = shippingPrice;
    this.totalPrice = totalPrice;
  }
}

let tshirt = new Product();

export { tshirt };
