const getSortContainer = (): HTMLElement => {
  const sortButtonContainer = document.createElement('div');

  sortButtonContainer.className = 'sort-button-container';

  sortButtonContainer.innerHTML = `
  <div class="path-to-section">
      <a href="index.html" class="path-to-section__item"> Main </a><span class="arrow">→</span><a href="#catalog" class="path-to-section__item" id="catalog"> Catalog </a>
  </div>
  <div class="count-products-container">
    <img src="./assets/grid3.svg" alt="icon switching the number of products on the page" class="icon-grid">
    <img src="./assets/grid4.svg" alt="icon switching the number of products on the page" class="icon-grid">
    <select name="sort-by" class="filter-select">
      <option value="min">High to Low</option>
      <option value="min">Low to High</option>
      <option value="max">High to Low</option>
      <option value="new">Quantity in stock</option>
    </select>
  </div>`;

  return sortButtonContainer;
}

export default getSortContainer;
