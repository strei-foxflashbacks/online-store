import setDefaultPage from "./defaultPage";
// import getMainBanner from "./templates/main/main-banner";

const getMainPage = () => {
  setDefaultPage();

  const main = document.querySelector('main') as HTMLElement;

  main.insertAdjacentHTML('afterbegin', `
  <article class="main-banner">
    <img src="assets/oval1.svg" alt="decor" class="main-banner__decor1">
    <img src="assets/promo.svg" alt="decor" class="main-banner__decor3">
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
    </div>
  </article>
  <section>
    <div class="path-to-section">
      <span class="path-to-section__item"> Main <span class="arrow">→</span></span><span class="path-to-section__item" id="catalog"> Catalog </span>
    </div>
    <div class="sort-button-container">
      <div class="count-products-container">
        <div class="icon-12">icon for 12 products</div>
        <div class="icon-9">icon for 9 products</div>
      </div>
      <select name="sort-by">
        <option value="min">Low to High</option>
        <option value="max">High to Low</option>
        <option value="new">Newest Arrival</option>
      </select>
    </div>
    <div class="filter-container">
      <form action="#">
        <fieldset class="filter-container__item">
          <legend class="filter-container__title">Category</legend>
          <div>
            <input type="checkbox" id="knittingNeedles" name="knittingNeedles" checked>
            <label for="knittingNeedles">Knitting Needles</label>
          </div>
          <div>
            <input type="checkbox" id="knittingBags" name="knittingBags">
            <label for="knittingBags">Knitting Bags</label>
          </div>
          <div>
            <input type="checkbox" id="sewingMachines" name="sewingMachines">
            <label for="sewingMachines">Sewing Machines</label>
          </div>
          <div>
            <input type="checkbox" id="sewingBoxes" name="sewingBoxes">
            <label for="sewingBoxes">Sewing Boxes</label>
          </div>
          <div>
            <input type="checkbox" id="needleFeltingKits" name="needleFeltingKits">
            <label for="needleFeltingKits">Needle Felting Kits</label>
          </div>
          <div>
            <input type="checkbox" id="yarn" name="yarn">
            <label for="yarn">Yarn</label>
          </div>
        </fieldset>
        <fieldset class="filter-container__item">
          <legend class="filter-container__title">Brand</legend>
          <div>
            <input type="checkbox" id="womensInstitute" name="womensInstitute">
            <label for="womensInstitute">Women's Institute</label>
          </div>
          <div>
            <input type="checkbox" id="knitcraft" name="knitcraft">
            <label for="knitcraft">Knitcraft</label>
          </div>
          <div>
            <input type="checkbox" id="pony" name="pony">
            <label for="pony">Pony</label>
          </div>
          <div>
            <input type="checkbox" id="hayfield" name="hayfield">
            <label for="hayfield">Hayfield</label>
          </div>
          <div>
            <input type="checkbox" id="peterPan" name="peterPan">
            <label for="peterPan">Peter Pan</label>
          </div>
          <div>
            <input type="checkbox" id="jamesCBrett" name="jamesCBrett">
            <label for="jamesCBrett">James C Brett</label>
          </div>
          <div>
            <input type="checkbox" id="hobbyCraft" name="hobbyCraft">
            <label for="hobbyCraft">Hobbycraft</label>
          </div>
          <div>
            <input type="checkbox" id="janome" name="janome">
            <label for="janome">Janome</label>
          </div>
          <div>
            <input type="checkbox" id="trimits" name="trimits">
            <label for="trimits">Trimits</label>
          </div>
        </fieldset>
        <fieldset class="filter-container__item">
          <legend class="filter-container__title">Price</legend>
          <div class="slider">
            <label for="price">0 - 500€</label>
            <input type="range" min="1" max="100" value="50" class="slider" id="price" name="price">
          </div>
        </fieldset>
        <fieldset class="filter-container__item">
          <legend class="filter-container__title">Quantity in stock</legend>
          <div class="slider">
            <label for="price">0 - 10 000 pieces</label>
            <input type="range" min="0" max="10000" value="4500" class="slider" id="quantity" name="quantity">
          </div>
        </fieldset>
        <button class="button" type="submit">View</button>
        <button class="button" type="button">Copy</button>
        <button class="button" type="reset">Reset</button>
      </form>
    </div>
  <div class="filters-container"></div>
</section>
<section>
  <div class="container">
    <div class="catalog-card">
      <img src="#" alt="">
      <div class="catalog-card__name">Yarn Macrametr 4mm</div>
      <div class="catalog-card__price">3.95 €</div>
      <button class="button">Add to cart</button>
    </div>
  </div>
</section>`)
}

export default getMainPage;