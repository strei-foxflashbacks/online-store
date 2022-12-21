// styles import

import './style.scss';

// assets import

import './assets/yarn-macrame.png';
import './assets/clock.svg';
import './assets/map.svg';
import './assets/phone.svg';
import './assets/logo.svg';
import './assets/search.svg';
import './assets/oval1.svg';
import './assets/oval2.svg';
import './assets/promo.svg';
import './assets/grid3.svg';
import './assets/grid4.svg';
import './assets/rs_school_js.svg'
import './assets/1.jpg';
import './assets/2.jpg';
import './assets/3.jpg';
import './assets/4.jpg';
import './assets/5.jpg';
import './assets/6.jpg';
import './assets/7.jpg';
import './assets/8.jpg';
import './assets/9.jpg';
import './assets/10.jpg';
import './assets/11.jpg';
import './assets/12.jpg';
import './assets/13.jpg';
import './assets/14.jpg';
import './assets/15.jpg';
import './assets/16.jpg';
import './assets/17.jpg';
import './assets/18.jpg';
import './assets/19.jpg';
import './assets/20.jpg';
import './assets/21.jpg';
import './assets/22.jpg';
import './assets/23.jpg';
import './assets/24.jpg';
import './assets/25.jpg';
import './assets/26.jpg';
import './assets/27.jpg';
import './assets/28.jpg';
import './assets/29.jpg';
import './assets/30.jpg';

// app call (temp)

import getMainPage from './components/mainPage';
import { Cart } from "./components/cart";
import {productData} from "./components/product-data";
import {IProductData} from "./types/IProductData";

getMainPage();

console.log('Hello, World!');

const STORE_CARD = new Cart();
const CARD_ARRAY = document.querySelectorAll('catalog-card');
//const CURRENT_CART: IProductData[] = [];
// const TEXT_CART: number | string = document.;


//во время генерации карточек вешать обработчики на кнопку добавления товара в корзину
document.addEventListener('click', (event) => {
  if (!event) {
    throw new Error();
  }
  const target = event.target as HTMLElement;
  if (target.classList.contains('card-button-add-to-cart')) {
    //
    addToCartHandler(target);
  }
});

function addToCartHandler(target: HTMLElement) {

  const parentElement = target.parentElement;
  if (parentElement === null) {
    throw new Error();
  }
  //из элемента кнопки на сработавшем событии узнаем наименование продукта
  // (ввести ли лучше id каждому продукту??)
  let name = getProductName(parentElement);
  productData.forEach(product => {
    if (product.name === name) {
      STORE_CARD.addProductToCart(product);//что делать если несколько одинаковых продуктов в корзине?
    }
  });
//написать метод который при изменении корзины пересчитывает и отображает новую цену и количество товаров
//брать данные из карточки продукта на странице или из базы продуктов?


  function getProductName(parentElement: HTMLElement) {
    for (const child of parentElement.children) {
      if (child.classList.contains('catalog-card__name')) {
        return child.innerHTML;
      }
    }
      throw Error('card name not found!');
  }
}

// function updateCartView() {
//   if () {
//
//   }
// }

