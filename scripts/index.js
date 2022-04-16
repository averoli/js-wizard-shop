/*Object to store info about product*/
class Product {
  constructor(
    sizeProduct,
    colorProduct,
    colorHex,
    shippingDate,
    shippingType,
    shippingPrice,
    totalPrice
  ) {
    this.sizeProduct = "xs";
    this.colorProduct = "orange";
    this.colorHex = "#fcca81";
    this.shippingDate = shippingDate;
    this.shippingType = shippingType;
    this.shippingPrice = shippingPrice;
    this.totalPrice = totalPrice;
  }
}

let tshirt = new Product();

export { tshirt };
