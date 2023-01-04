import { IProductData } from "../../../types/IProductData";
import {toggleProduct} from "../../functions/addProductToCart";
import {handleOrderButton} from "../../functions/cart_functions/handleOrderButton";
import getModalForPay from "./cart/modal-for-pay/modal-for-pay";

const getProductCard = (product: IProductData): HTMLElement => {
  //модалка
  const darkBackground = document.createElement('div');
  darkBackground.className = 'dark-background';
  darkBackground.id = 'darkBackground';
  document.body.prepend(darkBackground);
  document.body.prepend(getModalForPay());


  const productInfo = document.createElement('div');
  productInfo.className = 'product-info';

  const breadCrumbs = document.createElement('div');
  breadCrumbs.className = 'path-to-section';
  breadCrumbs.innerHTML = `
      <a href="#" class="path-to-section__item" id="back">Back </a>
      <span class="arrow">←
      </span>
      <a href="#" class="path-to-section__item" id="main"> Main </a><span class="arrow">→
      </span><span class="path-to-section__item" id="cart"> ${product.name} </a>
  `;
  productInfo.append(breadCrumbs);


  const productCard = document.createElement('section');
  productCard.className = 'product-card';
  productCard.innerHTML = `
   <div class="photo-set">
    <div class="product-card__photos">
        <img src="${product.collection[0]}" alt="first product photo" class="product-card__photo">
        <img src="${product.collection[1]}" alt="second product photo" class="product-card__photo">
        <img src="${product.collection[2]}" alt="third product photo" class="product-card__photo">
    </div>
  </div>`

    const description = document.createElement('div');
  description.className = 'product-card__description';
  description.innerHTML = `
  <div>
    <h2 class="product-card__product-name">${product.name}</h2>
    <p class="product-card__description">${product.description}</p>
    </div>
         <table class="product-card__table">
        <caption>Parameters</caption>
        <tbody>
            <tr>
                <th>Brand</th>
                <td>${product.brand}</td>
            </tr>
            <tr>
                <th>Category</th>
                <td>${product.category}</td>
            </tr>
            <tr>
                <th>Structure</th>
                <td>100% cotton</td>
            </tr>
            <tr>
                <th>Stock</th>
                <td>${product.stock}</td>
            </tr>
        </tbody>
    </table>`

    const cartOptions = document.createElement('div');
    cartOptions.className = 'product-card__cart-options';

    const price = document.createElement('div');
    price.className = 'product-card__price';
    price.innerText = `${product.price} €`;

    const buyNowButton = document.createElement('button');
  buyNowButton.innerText = 'Buy now';
  buyNowButton.className = 'button_color';
  buyNowButton.id = 'buyNowButton';

  //   const plusButton = document.createElement('button');
  //   plusButton.classList.add('plus-minus-button', 'plus');
  //   plusButton.id = 'plus';
  //   plusButton.innerText = '+';
  //
  // const minusButton = document.createElement('button');
  // minusButton.classList.add('plus-minus-button', 'minus');
  // minusButton.id = 'minus';
  // minusButton.innerText = '-';

  //btnGroup.append(plusButton, minusButton);

  const addingButton = document.createElement('button');
  addingButton.className = 'button';
  addingButton.innerText = 'Add to cart';
  addingButton.id = 'addingButton';


  cartOptions.append(price);
  cartOptions.append(addingButton);
  cartOptions.append(buyNowButton);
  description.append(cartOptions);
  productCard.append(description);
  productInfo.append(productCard);

  addingButton.addEventListener('click', toggleProduct);
  buyNowButton.addEventListener('click', handleOrderButton);

  return productInfo;
}

export default getProductCard;
