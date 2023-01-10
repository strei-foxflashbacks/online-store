import {changeGrids} from "../../functions/changeNumberCards";
const getSortContainer = (): HTMLElement => {
  const sortButtonContainer = document.createElement('div');

  sortButtonContainer.className = 'sort-button-container';

  sortButtonContainer.innerHTML = `

  <div class="count-products-container">
  <form action="" method="get" class="form">
      <input name="s" placeholder="Enter..." type="search" class="form__input">
      <button type="submit" class="form__search-button" disabled><img src="./assets/search.svg" alt=""></button>
    </form>`

  const countAndSort = document.createElement('div');
  countAndSort.className = 'count-and-sort';

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttons-container';


  const buttonView1 = document.createElement('img');
  buttonView1.setAttribute('src', './assets/3products.svg');
  buttonView1.setAttribute('alt', 'icon switching the number of products on the pag');
  buttonView1.id = 'three-cards';
  buttonView1.className = 'icon-grid';

  const buttonView2 = document.createElement('img');
  buttonView2.setAttribute('src', './assets/2products.svg');
  buttonView2.setAttribute('alt', 'icon switching the number of products on the pag');
  buttonView2.id = 'two-cards';
  buttonView2.className = 'icon-grid';

  const buttonView3 = document.createElement('img');
  buttonView3.setAttribute('src', './assets/5products.svg');
  buttonView3.setAttribute('alt', 'icon switching the number of products on the pag');
  buttonView3.id = 'five-cards';
  buttonView3.className = 'icon-grid';

  const select = document.createElement('select');
  select.className = 'filter-select';
  select.name = 'sort-by';

  const placeholder = document.createElement('option');
  placeholder.setAttribute('selected', 'selected');
  placeholder.value = 'default'
  placeholder.textContent = 'Sort items:';

  const option1 = document.createElement('option');
  option1.value = 'min';
  option1.innerText = 'Low to High';

  const option2 = document.createElement('option');
  option2.value = 'max';
  option2.innerText = 'High to Low';

  const option3 = document.createElement('option');
  option3.value = 'stock-min';
  option3.innerText = 'Quantity in stock min';

  const option4 = document.createElement('option');
  option4.value = 'stock-max';
  option4.innerText = 'Quantity in stock max';

  select.append(placeholder, option1, option2, option3, option4);

  buttonsContainer.append(buttonView1, buttonView2, buttonView3);
  countAndSort.append(buttonsContainer, select);
  sortButtonContainer.insertAdjacentElement('beforeend', countAndSort);

  buttonView1.addEventListener('click', changeGrids);
  buttonView2.addEventListener('click', changeGrids);
  buttonView3.addEventListener('click', changeGrids);


  return sortButtonContainer;
}

export default getSortContainer;
