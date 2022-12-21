import { IProductData } from "../types/IProductData";

export class Cart {
  products: Array<IProductData>;
  constructor() {
    this.products = [];
  }
  countOfProducts(products: Array<IProductData>) {
    return products.length;
  }
  getSumOfProducts() {
    let sumOfProducts = 0;
    this.products.forEach(product => sumOfProducts = sumOfProducts + product.price);
    return sumOfProducts;
  }
  addProductToCart(product: IProductData) {
    this.products.push(product);
  }
  deleteProduct(product: IProductData) {
    const productIndex = this.products.indexOf(product);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    }
  }
}
