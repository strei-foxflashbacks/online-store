import clearPage from "./clearPage";
import setDefaultPage from "./defaultPage";
import getCart from "./templates/main/cart/cart";

const getCartPage = () => {
  clearPage();
  setDefaultPage();

  const main = document.querySelector('main') as HTMLElement;

  main.append(getCart());
}

export default getCartPage;