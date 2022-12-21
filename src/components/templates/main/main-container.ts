import getFilters from "./filters";
import getCatalog from "./catalog";
// import setCatalog from "../../setCatalog";

const getMainContainer = (): HTMLElement => {
  const mainContainer = document.createElement('div');

  mainContainer.className = 'main-container';

  mainContainer.append(getFilters(), getCatalog())

  // setCatalog()

  return mainContainer;
}

export default getMainContainer;
