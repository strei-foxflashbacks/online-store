import { productData } from "../../product-data";

const getCatalog = (): HTMLElement => {
  const catalog = document.createElement('section');

  catalog.className = 'catalog';

  // TODO: filterable copy of productData
  // TODO: move catalog.ts from templates?

  productData.forEach(element => {
    const container = document.createElement('div');

    container.innerHTML = `
    <div class="container">
      <div class="catalog-card">
        <img src="${element.photo}" alt="${element.name}" class="catalog-card__photo">
        <div class="catalog-card__name">${element.name}</div>
        <div class="catalog-card__price">${element.price} €</div>
        <button class="button">Add to cart</button>
      </div>
    </div>`;

    catalog.append(container);
  })

  return catalog;
}

export default getCatalog;
