import {ICartElement} from "../../types/types";

export function toggleProduct(event: Event) {
  event.stopPropagation();
  const button = event.target as HTMLElement;

  if (button && button.parentElement && button.parentElement.parentElement) {
    const idCard = Number(button.parentElement.parentElement.id);
    toggleButtonText(button);

    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', '[]');
    }

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
      } else {
        deleteProductFromCart(objCart, idCard);
      }
    }
  }
}

function toggleButtonText(button: HTMLElement) {
  if (button.innerText === 'Added') {
    button.innerText = 'Add to Cart';
  } else {
    button.innerText = 'Added';
  }
}


function addProductToCart(cart: ICartElement[], idProduct: number) {
  const product: ICartElement = {id: idProduct, count: 1};
  console.log(JSON.stringify(cart))
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function deleteProductFromCart(cart: ICartElement[], idProduct: number) {
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    if (element.id === idProduct) {
      cart.splice(i, 1);

      localStorage.setItem('cart', JSON.stringify(cart));
      break;
    }
  }
}

