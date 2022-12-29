// import clearPage from "../../clearPage";
// import setDefaultPage from "../../defaultPage";
import router from "../../router/router";
// import getCart from "../main/cart/cart";

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
      // clearPage();
      // setDefaultPage();

      // const main = document.querySelector('main') as HTMLElement;
      // main.append(getCart());
    }
  }

return contentContainer;
}

export default getContent;
