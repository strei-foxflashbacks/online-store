// styles import

import './style.scss';

// assets import

require.context('./assets', false, /\.(?:ico|gif|png|jpg|jpeg|svg|ogg|mp3|wav)$/i)

// app call (temp)

import getMainPage from './components/mainPage';
import './components/functions/changeNumberCards.ts';
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


