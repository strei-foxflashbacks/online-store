const getSortContainer = (): HTMLElement => {
  const sortButtonContainer = document.createElement('div');

  sortButtonContainer.className = 'sort-button-container';

  sortButtonContainer.innerHTML = `
  <div class="path-to-section">
      <a href="index.html" class="path-to-section__item"> Main </a><span class="arrow">→</span><a href="#catalog" class="path-to-section__item" id="catalog"> Catalog </a>
  </div>
  <div class="count-products-container">
    <img src="./assets/3products.svg" alt="icon switching the number of products on the page" class="icon-grid" id="three-cards">
    <img src="./assets/2products.svg" alt="icon switching the number of products on the page" class="icon-grid" id="two-cards">
    <img src="./assets/5products.svg" alt="icon switching the number of products on the page" class="icon-grid" id="five-cards">
    <select name="sort-by" class="filter-select">
      <option value="min">Low to High</option>
      <option value="max">High to Low</option>
      <option value="new">Quantity in stock min</option>
      <option value="new">Quantity in stock max</option>
    </select>
  </div>`;

  return sortButtonContainer;
}

export default getSortContainer;
