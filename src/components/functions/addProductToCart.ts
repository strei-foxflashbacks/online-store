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


//функции для работы с продуктом из страницы корзины
function getProductFromEvent(event: Event) {
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


export function increaseAndDecreaseHandler(event: Event) {
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

  //нахожу counter для изменения
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

  const objCart = JSON.parse(cart);
  for (let i = 0; i < objCart.length; i++) {
    if (objCart[i].id == idCard) {
      cartProductRecord = objCart[i];
      if (target.classList.contains('plus') && stock > cartProductRecord.count) {
        cartProductRecord.count = cartProductRecord.count + 1;
        counter.innerText = `${cartProductRecord.count}`;
      }
      else if (target.classList.contains('minus') && cartProductRecord.count > 1) {
        cartProductRecord.count = cartProductRecord.count - 1;
        counter.innerText = `${cartProductRecord.count}`;
      }
      else if (target.parentElement && target.parentElement.classList.contains('delete-button')) {
        objCart.splice(i, 1);

        if (product.parentElement) {
          product.parentElement.removeChild(product);
        }
      }
      localStorage.setItem('cart', JSON.stringify(objCart));
      break;
    }
  }
}


