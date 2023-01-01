const getSortContainer = (): HTMLElement => {
  const sortButtonContainer = document.createElement('div');

  sortButtonContainer.className = 'sort-button-container';

  sortButtonContainer.innerHTML = `

  <div class="count-products-container">
  <form action="" method="get" class="form">
      <input name="s" placeholder="Enter..." type="search" class="form__input">
      <button type="submit" class="form__search-button"><img src="./assets/search.svg" alt=""></button>
    </form>
    <div class="count-and-sort">
        <div>
            <img src="./assets/3products.svg" alt="icon switching the number of products on the page" class="icon-grid" id="three-cards">
            <img src="./assets/2products.svg" alt="icon switching the number of products on the page" class="icon-grid" id="two-cards">
            <img src="./assets/5products.svg" alt="icon switching the number of products on the page" class="icon-grid" id="five-cards">
        </div>
    <select name="sort-by" class="filter-select">
      <option value="min">Low to High</option>
      <option value="max">High to Low</option>
      <option value="new">Quantity in stock min</option>
      <option value="new">Quantity in stock max</option>
    </select>
    </div>
  </div>`;

  return sortButtonContainer;
}

export default getSortContainer;
