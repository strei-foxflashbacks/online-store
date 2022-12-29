import { productData } from "../../product-data";
// import clearPage from "../../clearPage";
// import setDefaultPage from "../../defaultPage";
// import getProductCard from "./product-card";
import router from "../../router/router";

const getCatalog = (): HTMLElement => {
  const catalog = document.createElement('section');

  catalog.className = 'catalog';

  // TODO: filterable copy of productData
  // TODO: move catalog.ts from templates?

  productData.forEach(element => {
    const container = document.createElement('div');

    container.innerHTML = `
    <div id="${element.id}" class="container">
      <div class="catalog-card">
        <img src="${element.photo}" alt="${element.name}" class="catalog-card__photo">
        <div class="catalog-card__name">${element.name}</div>
        <div class="catalog-card__price">${element.price} €</div>
        <button class="button">Add to cart</button>
      </div>
    </div>`;

    catalog.append(container);

    container.onclick = (): void => {
      // clearPage();
      router.navigateTo(`/catalog/${element.id}`)
      // setDefaultPage();

      // const main = document.querySelector('main') as HTMLElement;
      // main.append(getProductCard(element));
    }
  })

  return catalog;
}

export default getCatalog;
