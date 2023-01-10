import {ICartProductRecord} from "../../types/ICartProductRecord";
import {updateCartCounter} from "../templates/header/updateCount";
import {updateSum} from "../templates/header/updateSum";

//функции для работы кнопки добавить/удалить из каталога и карты товара
export function toggleProduct(event: Event): void {
  event.stopPropagation();
  const button = event.target as HTMLElement;

  if (!(button && button.parentElement)) {
    throw new Error('button and card are not found');
  }
    const idCard = Number(button.parentElement.id);


    const cart = localStorage.getItem('cart');
    if (cart) {
      const objCart = JSON.parse(cart);

      let isFoundInCart = false;
      for (let i = 0; i < objCart.length; i++) {
        if (objCart[i].id === idCard) {
          isFoundInCart = true;
          break;
        }
      }

      if (!isFoundInCart) {
        addProductToCart(objCart, idCard, button);
      } else {
        deleteProductFromCart(objCart, idCard, button);
      }
    }
  }

function addProductToCart(cart: ICartProductRecord[], idProduct: number, button: HTMLElement): void {
  if (!button.parentElement) {
    throw new Error('can\'t get price!');
  }
  const price = Number(button.parentElement.getAttribute('data-price'));
  const product: ICartProductRecord = {id: idProduct, count: 1, price: price};
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCounter();
  updateSum();
  button.innerText = 'Delete from Cart';

}

function deleteProductFromCart(cart: ICartProductRecord[], idProduct: number,  button: HTMLElement): void {
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    if (element.id === idProduct) {
      cart.splice(i, 1);

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCounter();
      updateSum();
      button.innerText = 'Add to Cart';
      break;
    }
  }
}
