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

    const containerForCard = document.createElement('div');
    containerForCard.id = `${element.id}`;
    containerForCard.className = 'container';


      const catalogCard = document.createElement('div');
      catalogCard.className = 'catalog-card';
      catalogCard.innerHTML = `
        <img src="${element.photo}" alt="${element.name}" class="catalog-card__photo">
        <div class="catalog-card__name">${element.name}</div>
        <div class="catalog-card__price">${element.price} €</div>`;

      const addToCartButton = document.createElement('button');
      addToCartButton.className = 'button';
      addToCartButton.innerText = 'Add to cart';
      addToCartButton.id = 'buttonFromCatalog' + `${element.id}`;
        catalogCard.insertAdjacentElement('beforeend', addToCartButton);
        catalogCard.insertAdjacentHTML('beforeend', '</div>');

    containerForCard.append(catalogCard);
    container.append(containerForCard);
    catalog.append(container);

    addToCartButton.addEventListener('click', toggleProduct);
    container.onclick = (): void => {
      router.navigateTo(`/catalog/${element.id}`)
    }
  })

  return catalog;
}

export default getCatalog;
