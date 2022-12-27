import setDefaultPage from "./defaultPage";
import getMainBanner from "./templates/main/main-banner";
import getSortContainer from "./templates/main/sort-container";
import getMainContainer from "./templates/main/main-container";
import router from "./router/router";

const getMainPage = () => {
  setDefaultPage();
  router.add('/', getMainPage)

  const main = document.querySelector('main') as HTMLElement;

  main.append(getMainBanner(), getSortContainer(), getMainContainer())
}

export default getMainPage;
