import { IProductData } from "../../../../types/IProductData";

const getProductCardInCart = (product: IProductData): HTMLElement => {
  const productCardInCart = document.createElement('div');

  productCardInCart.className = 'product';

  productCardInCart.innerHTML = `
        <img src="${product.collection[0]}" alt="${product.name}" class="product__photo">
        <div class="product__name">"${product.name}"</div>
        <div class="product__price">${product.price}€</div>`

    const btnGroup = document.createElement('div');
    btnGroup.className = 'product-card__btn-group';
    const plusButton = document.createElement('button');
    plusButton.classList.add('plus-minus-button', 'plus');
    plusButton.id = 'plus';
    plusButton.innerText = '+';

  const minusButton = document.createElement('button');
  minusButton.classList.add('plus-minus-button', 'minus');
  minusButton.id = 'minus';
  minusButton.innerText = '-';

  btnGroup.append(plusButton, minusButton);

  productCardInCart.insertAdjacentElement('beforeend', btnGroup);

  const counter = document.createElement('div');
  counter.className = 'product__counter';
  counter.id = 'counterInCart';
  counter.innerText = '1';
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

  return productCardInCart;
}

export default getProductCardInCart;
