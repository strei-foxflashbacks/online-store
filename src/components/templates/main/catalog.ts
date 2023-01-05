import { productData } from "../../product-data";
import router from "../../router/router";
import {toggleProduct} from "../../functions/addProductToCart";

const getCatalog = (): HTMLElement => {
  const catalog = document.createElement('section');

  catalog.className = 'catalog';

  // TODO: filterable copy of productData
  // TODO: move catalog.ts from templates?

  productData.forEach(element => {
    const container = document.createElement('div');
    container.id = `${element.id}`;
    container.className = 'container';
    container.className = 'catalog-card';
    container.innerHTML = `
        <img src="${element.photo}" alt="${element.name}" class="catalog-card__photo">
        <div class="catalog-card__name">${element.name}</div>
        <div class="catalog-card__price">${element.price} €</div>`;

      const addToCartButton = document.createElement('button');
      addToCartButton.className = 'button';
      addToCartButton.innerText = 'Add to cart';
      addToCartButton.id = 'buttonFromCatalog' + `${element.id}`;
        container.insertAdjacentElement('beforeend', addToCartButton);
        container.insertAdjacentHTML('beforeend', '</div>');

    catalog.append(container);

    addToCartButton.addEventListener('click', toggleProduct);
    container.onclick = (): void => {
      router.navigateTo(`/catalog/${element.id}`)
    }
  })

  return catalog;
}

export default getCatalog;
