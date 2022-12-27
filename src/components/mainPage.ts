import setDefaultPage from "./defaultPage";
import getMainBanner from "./templates/main/main-banner";
import getSortContainer from "./templates/main/sort-container";
import getMainContainer from "./templates/main/main-container";
import clearPage from "./clearPage";
// import router from "./router/router";

const getMainPage = () => {
  clearPage();
  setDefaultPage();
  // router.add('/', getMainPage)

  const main = document.querySelector('main') as HTMLElement;

  main.append(getMainBanner(), getSortContainer(), getMainContainer())
  // console.log(router)
}

export default getMainPage;
