const getContent = (): HTMLElement => {
  const contentContainer = document.createElement('div');

  contentContainer.className = 'content-container';

  contentContainer.innerHTML = `
  <h1>
  <img src="assets/logo.svg" alt="logo" class="logo">
  </h1>
  <div class="header-elements">
    <form action="" method="get" class="form">
      <input name="s" placeholder="Enter..." type="search" class="form__input">
      <button type="submit" class="form__search-button"><img src="./assets/search.svg" alt=""></button>
    </form>
    <div class="cart-container"></div>
    <button type="button" class="button"><span id="totalSum">Cart</span></button>
    <span class="cart-counter" id="cartCounter">0</span>
  </div>`

  return contentContainer;
}

export default getContent;
