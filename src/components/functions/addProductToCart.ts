import {ICartProductRecord} from "../../types/types";

//функции для работы кнопки добавить/удалить из каталога
export function toggleProduct(event: Event) {
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
        addProductToCart(objCart, idCard);
        button.innerText = 'Delete from Cart';
      } else {
        deleteProductFromCart(objCart, idCard);
        button.innerText = 'Add to Cart';
      }
    }
  }

function addProductToCart(cart: ICartProductRecord[], idProduct: number) {
  const product: ICartProductRecord = {id: idProduct, count: 1};
  console.log(product);
  console.log(JSON.stringify(cart))
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function deleteProductFromCart(cart: ICartProductRecord[], idProduct: number) {
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    if (element.id === idProduct) {
      cart.splice(i, 1);

      localStorage.setItem('cart', JSON.stringify(cart));
      break;
    }
  }
}

