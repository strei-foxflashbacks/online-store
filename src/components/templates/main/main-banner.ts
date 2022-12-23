const getMainBanner = (): HTMLElement => {
  const mainBanner = document.createElement('article');

  mainBanner.className = 'main-banner';

  mainBanner.innerHTML = `
  <img src="assets/oval1.svg" alt="decor" class="main-banner__decor1">
  <img src="assets/yarn-macrame.png" alt="three yarn moths" class="main-banner__pic">
  <div class="main-banner__description">
    <h2 class="main-banner__product-name">Yarn Macrametr</h2>
    <p class="main-banner__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.</p>
    <button class="button_color"><a href="#catalog"></a>View all</button>
    <img src="./assets/oval2.svg" alt="decor" class="main-banner__decor2">
  </div>`

  return mainBanner;
}

export default getMainBanner;
