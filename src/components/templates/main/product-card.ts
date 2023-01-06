import { IProductData } from "../../../types/IProductData";
import {toggleProduct} from "../../functions/addProductToCart";

const getProductCard = (product: IProductData): HTMLElement => {
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
  </div>
  <div class="product-card__description">
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
  const options = document.createElement('div');
  options.className = 'product-card__cart-options';
  options.innerHTML = `<div class="product-card__price">${product.price} €</div>`;
  options.id = `${product.id}`;

  const addButton = document.createElement('button');
  addButton.className = 'button_color';
  addButton.innerText = 'Add to cart';
  options.append(addButton);

  const orderButton = document.createElement('button');
  orderButton.className = 'button_color';
  orderButton.innerText = 'Buy now';
  options.append(orderButton);

  description.append(options);
  productCard.insertAdjacentElement('beforeend', description);

  productInfo.append(productCard);


  addButton.addEventListener('click', toggleProduct);
  // orderButton.addEventListener('click', )

  return productInfo;
}

export default getProductCard;
