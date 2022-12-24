import { IProductData } from "../../../types/IProductData";

const getProductCard = (product: IProductData): HTMLElement => {
  const productCard = document.createElement('section');

  productCard.className = 'product-card';

  productCard.innerHTML = `
   <div class="photo-set">
    <div class="product-card__photos">
        <img src="${product.collection[0]}" alt="first product photo" class="product-card__photo">
        <img src="${product.collection[1]}" alt="second product photo" class="product-card__photo">
        <img src="${product.collection[2]}" alt="third product photo" class="product-card__photo">
    </div>
    <div class="photo-set__button"></div>
    <div class="photo-set__button"></div>
    <div class="photo-set__button"></div>
  </div>
  <div class="product-card__description">
    <h2 class="product-card__product-name">${product.name}</h2>
    <p class="main-banner__text">${product.description}</p>
         <table>
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
    </table>
    <div class="product-card__cart-options">
        <div class="product-card__price">${product.price} €</div>
        <button class="plus-minus-button">+/-</button>
        <button class="button_color"><a href="#"></a>Add to cart</button>
    </div>
  </div>`

  return productCard;
}

export default getProductCard;
