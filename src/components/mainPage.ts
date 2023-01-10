import setDefaultPage from "./defaultPage";
import getMainBanner from "./templates/main/main-banner";
import getSortContainer from "./templates/main/sort-container";
import getMainContainer from "./templates/main/main-container";
import clearPage from "./clearPage";
import filterCatalog from "./functions/filterCatalog";

const getMainPage = () => {
  clearPage();
  setDefaultPage();

  const main = document.querySelector('main') as HTMLElement;

  main.append(getMainBanner(), getSortContainer(), getMainContainer());

  const viewAll = document.querySelector('.button_color') as HTMLElement;

  viewAll.onclick = () => {
    window.scroll(0, 800)
  }

  filterCatalog();
}

export default getMainPage;
