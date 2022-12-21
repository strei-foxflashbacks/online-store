import { IProductData } from "../types/IProductData";

export class Cart {
  private products: Array<IProductData>;//переделать в { <IProductData> : countInCart }
  constructor() {
    this.products = [];
  }
  countOfProducts() {//уточнить корректно ли считать повторяющиеся продукты
    return this.products.length;
  }
  getSumOfProducts() {
    let sumOfProducts = 0;
    this.products.forEach(product => sumOfProducts = sumOfProducts + product.price);
    return sumOfProducts;
  }
  addProductToCart(product: IProductData) {
    let currentProductName: string = product.name;
    let countThisProducts: number = 1;
    let productCounter = { currentProductName : countThisProducts};
    // if (this.products.includes(product.name)) {
    //
    // }//переделать массив продуктов на массив ключ-продукт - значение-количество на складе
    //добавить сравнение значения (количества продуктов) с остатком на складе

    this.products.push(product);
  }
  deleteProduct(product: IProductData) {
    const productIndex = this.products.indexOf(product);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    }
  }
}
