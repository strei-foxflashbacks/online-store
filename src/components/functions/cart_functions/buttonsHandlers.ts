//функции для работы с продуктом из страницы корзины
import {ICartProductRecord} from "../../../types/ICartProductRecord";
import {updateCartCounter} from "../../templates/header/updateCount";
import {updateSum} from "../../templates/header/updateSum";

function getProductFromEvent(event: Event): HTMLElement {
  //нахожу айди продукта
  const button = event.target as HTMLElement;
  if (!button) {
    throw new Error('button is not found');
  }
  if (!(button.parentElement) || !(button.parentElement.parentElement)) {
    throw new Error('card is not found');
  }
  const product = button.parentElement.parentElement;
  if (!product.id) {
    throw new Error('id card is not found');
  }
  return product;
}


export function plusMinusDeleteHandler(event: Event) {
  const cart = localStorage.getItem('cart');
  if (!cart) {
    throw new Error('Cart is gone!');
  }
  const product = getProductFromEvent(event);
  const idCard = product.id;
  const stock = Number(product.getAttribute('data-count'));
  if (!stock) {
    throw new Error('stock is not found');
  }

  //найти counter для изменения из элементов продукта
  let counter: HTMLElement | null = null;
  const productElements = product.children;
  for (const child of productElements) {
    if (child.classList.contains('counter-number')) {
      counter = child as HTMLElement;
      break;
    }
  }
  if (!counter) {
    throw new Error('counter is not found!');
  }

  //нажатый элемент ищется в localStorage и увеличивается/уменьшается его количество
  let cartProductRecord: ICartProductRecord;
  const target = event.target as HTMLElement;

  //из localStorage разворачивается массив с продуктами
  const objCart = JSON.parse(cart);
  for (let i = 0; i < objCart.length; i++) {
    if (objCart[i].id == idCard) {
      cartProductRecord = objCart[i];
      //если это плюс и остаток превышает кол-во+1, прибавить количество в localStorage, сменить цифру
      if (target.classList.contains('plus') && stock > cartProductRecord.count) {
        cartProductRecord.count = cartProductRecord.count + 1;
        counter.innerText = `${cartProductRecord.count}`;
      }
      //если это минус и в localStorage > 0
      else if (target.classList.contains('minus') && cartProductRecord.count > 1) {
        //если не 0, убавить
        cartProductRecord.count = cartProductRecord.count - 1;
        counter.innerText = `${cartProductRecord.count}`;
      }
      else if (cartProductRecord.count === 1) {
        objCart.splice(i, 1);

        if (product.parentElement) {
          product.parentElement.removeChild(product);
        }
      }
      //если кнопка delete, удалить из страницы и localStorage
      else if (target.parentElement && target.parentElement.classList.contains('delete-button')) {
        objCart.splice(i, 1);

        if (product.parentElement) {
          product.parentElement.removeChild(product);
        }
      }
      //массив с продуктами заворачивается обратно в localStorage по ключу карт
      localStorage.setItem('cart', JSON.stringify(objCart));
      updateCartCounter();
      updateSum();

      break;
    }
  }
}
