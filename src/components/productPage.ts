import clearPage from "./clearPage"
import setDefaultPage from "./defaultPage";
import getProductCard from "./templates/main/product-card";
import { productData } from "./product-data";
import './router/routerFuncs'
import {getMainNavigate, goBack} from "./router/routerFuncs";

const getProductPage = (id: number) => {
  window.scroll(0, 0)
  clearPage();
  setDefaultPage();

  const product = productData[id - 1];

  const main = document.querySelector('main') as HTMLElement;

  main.append(getProductCard(product))

  goBack();
  getMainNavigate();
}
export default getProductPage
