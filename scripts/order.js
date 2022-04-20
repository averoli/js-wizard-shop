//Import object from index.js
import { tshirt } from "./index.js";
const orderForm = document.querySelector(".order-details-form");
orderForm.addEventListener("submit", nextSectionOrder);

function nextSectionOrder(e) {
  e.preventDefault();
  const acceptOrder = document.querySelector("#acceptOrder").checked;
  const nextSection = document.querySelector("#thankYou");
  const currentSection = document.querySelector("#order");
  if (acceptOrder) {
    nextSection.style.display = "flex";
    currentSection.style.display = "none";
  }
}

