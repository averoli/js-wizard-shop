//Import object from index.js
import { tshirt } from "./index.js";
const orderForm = document.querySelector(".order-details-form");

orderForm.addEventListener("submit", nextSectionOrder);

function nextSectionOrder(e) {
  e.preventDefault();
  console.log(tshirt);
}
