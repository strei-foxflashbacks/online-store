import router from "../../router/router";

const getContent = (): HTMLElement => {
  const contentContainer = document.createElement('div');

  contentContainer.className = 'content-container';

  contentContainer.innerHTML = `
  <h1 class="logo">Hobby Art</h1>
  <div class="header-elements">
    <button type="button" class="button cart-button" id="cartButton">Cart</button>
    <span class="cart-counter" id="cartCounter">0</span>
  </div>`
  if (contentContainer.lastElementChild && contentContainer.lastElementChild.firstElementChild) {
    const buttonCart = contentContainer.lastElementChild.firstElementChild as HTMLElement;
    buttonCart.onclick = (): void => {
      router.navigateTo('/cart')
    }
  }

return contentContainer;
}

export default getContent;
