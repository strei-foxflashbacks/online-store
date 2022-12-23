import { IProductData } from "../types/IProductData";
import {productData} from "./product-data";

export class Cart {
  private productsInCart: Map<IProductData, number>;
  constructor() {
    this.productsInCart = new Map();
  }

  countOfProducts() {//уточнить корректно ли считать повторяющиеся продукты
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
    let iterator = this.productsInCart.entries();//entries - [ключ-продукт, значение-количество]
    for (const productInCart of this.productsInCart) {
      let productObj = iterator.next().value[0];
      let countProductInCart = iterator.next().value[1];
      //если совпали имена текущего добавляемого продукта и уже хранящегося в мапе
      //+ количество на складе не превышает уже добавленное, увеличить количество
      if (productObj.name === product.name && product.stock > countProductInCart) {
        iterator.next().value[1] =+ 1;
      }else{
        //иначе добавить новый один продукт в мапу
        this.productsInCart.set(product, 1);
      }
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
