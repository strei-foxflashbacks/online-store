import {Cart} from "../cart";
import {productData} from "../product-data";

document.addEventListener("DOMContentLoaded", () => {
  console.log('addProduct');
  const STORE_CART = new Cart();
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
    if (parentElement.parentElement === null) {
      throw new Error();
    }
    const parentParentElement = parentElement.parentElement;

    //из элемента кнопки на сработавшем событии узнаем наименование продукта
    // (ввести ли лучше id каждому продукту??)
    const idProduct = getProductId(parentParentElement);
    productData.forEach(product => {
      if (product.id === idProduct) {
        STORE_CART.addProductToCart(product);
      }
      updateCartView();
    });
  }
//написать проверку, если такой товар уже добавлен, то добавить в карту + и - (есть ли в тз?)
    //добавить можно только столько сколько есть на складе!!(сравнивать количество с полем продукта stock

    function getProductId(parentElement: HTMLElement) {
      if (parentElement.id) {
          return Number(parentElement.id);
        } else {
      throw Error('card id not found!');
    }
  }

  function updateCartView() {
    const sum = STORE_CART.getSumOfProducts();
    if (TEXT_CART) {
      TEXT_CART.innerHTML = `${sum}€`
    } else throw new Error('Button Cart is not found!');

    if (CART_COUNTER) {
      CART_COUNTER.innerHTML = `${STORE_CART.countOfProducts()}`;
    } else throw new Error('cart counter is not found!');
  }
});
