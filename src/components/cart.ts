import { IProductData } from "../types/IProductData";
import {productData} from "./product-data";
//проверить как мапа реагирует на все функции класса
export class Cart {
  private productsInCart: Map<IProductData, number>;
  constructor() {
    this.productsInCart = new Map();
  }

  countOfProducts() {
    let count = 0;
    for (const value of this.productsInCart) {
      count =+ value;
    }
    return count;
  }
  getSumOfProducts() {
    let sumOfProducts = 0;
    //достать из мапы прайс ключа, умножить на количество, вернуть
    let iterator = this.productsInCart.entries();
    for (const productInCart of this.productsInCart) {
      let productObj = iterator.next().value[0];
      let countProductInCart = iterator.next().value[1];
      sumOfProducts = productObj.price * countProductInCart;
    }
    return sumOfProducts;
  }
  addProductToCart(product: IProductData) {
    if (this.productsInCart.has(product)) {
      this.productsInCart.set(product, (this.productsInCart.get(product)! + 1))
    } else {
      this.productsInCart.set(product, 1);
    }
    //добавить сравнение значения (количества продуктов) с остатком на складе

  }

  //сейчас не работает!

  //переделать под мапу
  // deleteProduct(product: IProductData) {
  //   const productIndex = this.productsInCart.indexOf(product);
  //   if (productIndex !== -1) {
  //     this.productsInCart.splice(productIndex, 1);
  //   }
  // }
}
