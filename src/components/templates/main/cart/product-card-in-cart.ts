import { IProductData } from "../../../../types/IProductData";
import {plusMinusDeleteHandler} from "../../../functions/addProductToCart";
import {ICartProductRecord} from "../../../../types/types";


if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', '[]');
}
const cart = localStorage.getItem('cart');

const objCart = JSON.parse(cart!);

  function getCount(id: number, objCart: ICartProductRecord[]): number {
    for (let i = 0; i < objCart.length; i++) {
      if (objCart[i].id == id) {
        return objCart[i].count;
      }
    }
    return 1;
  }

const getProductCardInCart = (product: IProductData): HTMLElement => {
  const productCardInCart = document.createElement('div');

  productCardInCart.className = 'product';
  productCardInCart.id = `${product.id}`;
  productCardInCart.setAttribute('data-count', `${product.stock}`);


  productCardInCart.innerHTML = `
        <img src="${product.collection[0]}" alt="${product.name}" class="product__photo">
        <div class="product__name">"${product.name}"</div>
        <div class="product__price">${product.price}€</div>`

    const btnGroup = document.createElement('div');
    btnGroup.className = 'product-card__btn-group';
    const plusButton = document.createElement('button');
    plusButton.classList.add('plus-minus-button', 'plus');
    plusButton.innerText = '+';

  const minusButton = document.createElement('button');
  minusButton.classList.add('plus-minus-button', 'minus');
  minusButton.innerText = '-';

  btnGroup.append(plusButton, minusButton);

  productCardInCart.insertAdjacentElement('beforeend', btnGroup);

  const counter = document.createElement('div');
  counter.className = 'product__counter';
  counter.classList.add('product__counter', 'counter-number');
  counter.innerText = `${getCount(product.id, objCart)}`;
  productCardInCart.append(counter);

  const stock = document.createElement('div');
  stock.className = 'product__counter';
  stock.innerText = `out of ${product.stock}`;
  productCardInCart.append(stock);

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  const deleteImg = document.createElement('img');
  deleteImg.setAttribute('alt', 'delete icon');
  deleteImg.setAttribute('src', '../../../../assets/trash.svg');
  deleteImg.className = 'delete-icon';
  deleteButton.append(deleteImg);
  productCardInCart.append(deleteButton);

  plusButton.addEventListener('click', plusMinusDeleteHandler);
 minusButton.addEventListener('click', plusMinusDeleteHandler);
  deleteButton.addEventListener('click', plusMinusDeleteHandler);

  return productCardInCart;
}

export default getProductCardInCart;
