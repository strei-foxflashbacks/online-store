import clearPage from "./clearPage";
import setDefaultPage from "./defaultPage";
import getCart from "./templates/main/cart/cart";
import {handleOrderButton} from "./functions/cart_functions/handleOrderButton";
import {handlePromoInput} from "./functions/cart_functions/getPromoElement";
import {getMainNavigate, goBack} from "./router/routerFuncs";


const getCartPage = () => {
  clearPage();
  setDefaultPage();

  const main = document.querySelector('main') as HTMLElement;

  main.append(getCart());
}

export default getCartPage;