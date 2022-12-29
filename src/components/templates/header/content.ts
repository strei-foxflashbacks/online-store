const getContent = (): HTMLElement => {
  const contentContainer = document.createElement('div');

  contentContainer.className = 'content-container';

  contentContainer.innerHTML = `
  <h1 class="logo">Hobby Art</h1>
  <div class="header-elements">
    <div class="cart-container"></div>
    <button type="button" class="button cart-button">Cart</button>
    <span class="cart-counter" id="cartCounter">0</span>
  </div>`

  return contentContainer;
}

export default getContent;
