import clearPage from "./clearPage"
import setDefaultPage from "./defaultPage";
import getProductCard from "./templates/main/product-card";
import { productData } from "./product-data";
// import router from "./router/router";

const getProductPage = (id: number) => {
  clearPage();
  setDefaultPage();

  // const parsed = Number(path.replace(/(\/|[a-z])/gi, ''));
  const product = productData[id - 1];

  const main = document.querySelector('main') as HTMLElement;

  main.append(getProductCard(product))
  console.log(product)
}
export default getProductPage