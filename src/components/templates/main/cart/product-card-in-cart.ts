import { IProductData } from "../../../../types/IProductData";

const getProductCardInCart = (product: IProductData): HTMLElement => {
  const productCardInCart = document.createElement('div');

  productCardInCart.className = 'product';

  productCardInCart.innerHTML = `
        <img src="${product.collection[0]}" alt="${product.name}" class="product__photo">
        <div class="product__name">"${product.name}"</div>
        <div class="product__price">${product.price}€</div>
        <div class="product-card__btn-group">
            <button class="plus-minus-button plus" id="plus">+</button>
            <button class="plus-minus-button minus" id="minus">-</button>
        </div>
        <div class="product__counter" id="counterInCart">1</div>
        <div class="product__counter">out of ${product.stock}</div>
        <button class="delete-button">
            <img src="../../../../assets/trash.svg" alt="delete icon" class="delete-icon">
        </button>
   `

  return productCardInCart;
}

export default getProductCardInCart;
