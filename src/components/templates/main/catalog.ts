import { productData } from "../../product-data";
import router from "../../router/router";

const getCatalog = (): HTMLElement => {
  const catalog = document.createElement('section');

  catalog.className = 'catalog';

  // TODO: filterable copy of productData
  // TODO: move catalog.ts from templates?

  productData.forEach(element => {
    const container = document.createElement('div');

    container.setAttribute('id', `${element.id}`)
    container.className = 'container'
    container.classList.add('catalog-card')

    container.innerHTML = `
    <img src="${element.photo}" alt="${element.name}" class="catalog-card__photo">
    <div class="catalog-card__name">${element.name}</div>
    <div class="catalog-card__price">${element.price} €</div>
    <button class="button">Add to cart</button>`;

    catalog.append(container);

    container.onclick = (): void => {
      router.navigateTo(`/catalog/${element.id}`)
    }
  })

  return catalog;
}

export default getCatalog;
