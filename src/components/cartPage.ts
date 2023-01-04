import clearPage from "./clearPage";
import setDefaultPage from "./defaultPage";
import getCart from "./templates/main/cart/cart";
import {handleOrderButton} from "./functions/cart_functions/handleOrderButton";
import {handlePromoInput} from "./functions/cart_functions/getPromoElement";
import {getMainNavigate, goBack} from "./router/router";


const getCartPage = () => {
  clearPage();
  setDefaultPage();

  const main = document.querySelector('main') as HTMLElement;

  main.append(getCart());

  const promoInput = document.querySelector('.promocode') as HTMLInputElement;
  if (promoInput) {
    promoInput.addEventListener('input', handlePromoInput);
  }
  goBack();
  getMainNavigate();
}

export default getCartPage;
