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
import {Cart} from "./components/cart";
import {productData} from "./components/product-data";

getMainPage();

console.log('Hello, World!');

const STORE_CARD = new Cart();
const TEXT_CART = document.querySelector('#totalSum');
const CART_COUNTER = document.querySelector('#cartCounter');


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
  const name = getProductName(parentElement);
  productData.forEach(product => {
    if (product.name === name) {
      STORE_CARD.addProductToCart(product);
    }
    updateCartView();
  });
//написать проверку, если такой товар уже добавлен, то добавить в карту + и - (есть ли в тз?)
  //добавить можно только столько сколько есть на складе!!(сравнивать количество с полем продукта stock

  function getProductName(parentElement: HTMLElement) {
    for (const child of parentElement.children) {
      if (child.classList.contains('catalog-card__name')) {
        return child.innerHTML;
      }
    }
    throw Error('card name not found!');
  }
}

function updateCartView() {
  const sum = STORE_CARD.getSumOfProducts();
  if (TEXT_CART) {
    TEXT_CART.innerHTML = `${sum}€`
  } else throw new Error('Button Cart is not found!');

  if (CART_COUNTER) {
    CART_COUNTER.innerHTML = `${STORE_CARD.countOfProducts()}`;
  } else throw new Error('cart counter is not found!');
}


