const getFilters = (): HTMLElement => {
  const filters = document.createElement('section');

  filters.className = 'filters';

  filters.innerHTML = `
  <div class="filter-container">
    <form action="#">
      <fieldset class="filter-container__item">
        <legend class="filter-container__title">Category</legend>
        <div class="filter-container__section">
          <input class="category-filter" type="checkbox" id="knittingNeedles" name="Knitting Needles">
          <label for="knittingNeedles">Knitting Needles</label>
        </div>
        <div class="filter-container__section">
          <input class="category-filter" type="checkbox" id="knittingBags" name="Knitting Bags">
          <label for="knittingBags">Knitting Bags</label>
        </div>
        <div class="filter-container__section">
          <input class="category-filter" type="checkbox" id="sewingMachines" name="Sewing Machines">
          <label for="sewingMachines">Sewing Machines</label>
        </div>
        <div class="filter-container__section">
          <input class="category-filter" type="checkbox" id="sewingBoxes" name="Sewing Boxes">
          <label for="sewingBoxes">Sewing Boxes</label>
        </div>
        <div class="filter-container__section">
          <input class="category-filter" type="checkbox" id="needleFeltingKits" name="Needle Felting Kits">
          <label for="needleFeltingKits">Needle Felting Kits</label>
        </div>
        <div class="filter-container__section">
          <input class="category-filter" type="checkbox" id="yarn" name="Yarn">
          <label for="yarn">Yarn</label>
        </div>
      </fieldset>
      <fieldset class="filter-container__item">
        <legend class="filter-container__title">Brand</legend>
        <div class="filter-container__section">
          <input class="brand-filter" type="checkbox" id="womensInstitute" name="Women's Institute">
          <label for="womensInstitute">Women's Institute</label>
        </div>
        <div class="filter-container__section">
          <input class="brand-filter" type="checkbox" id="knitcraft" name="Knitcraft">
          <label for="knitcraft">Knitcraft</label>
        </div>
        <div class="filter-container__section">
          <input class="brand-filter" type="checkbox" id="pony" name="Pony">
          <label for="pony">Pony</label>
        </div>
        <div class="filter-container__section">
          <input class="brand-filter" type="checkbox" id="hayfield" name="Hayfield">
          <label for="hayfield">Hayfield</label>
        </div>
        <div class="filter-container__section">
          <input class="brand-filter" type="checkbox" id="peterPan" name="Peter Pan">
          <label for="peterPan">Peter Pan</label>
        </div>
        <div class="filter-container__section">
          <input class="brand-filter" type="checkbox" id="jamesCBrett" name="James C Brett">
          <label for="jamesCBrett">James C Brett</label>
        </div>
        <div class="filter-container__section">
          <input class="brand-filter" type="checkbox" id="hobbyCraft" name="Hobbycraft">
          <label for="hobbyCraft">Hobbycraft</label>
        </div>
        <div class="filter-container__section">
          <input class="brand-filter" type="checkbox" id="janome" name="Janome">
          <label for="janome">Janome</label>
        </div>
        <div class="filter-container__section">
          <input class="brand-filter" type="checkbox" id="trimits" name="Trimits">
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
      <div class="container-for-buttons">
        <button class="button" type="submit">View</button>
        <button class="button" type="button">Copy</button>
        <button class="button" type="reset">Reset</button>
      </div>
    </form>
  </div>
  <div class="filters-container"></div>`;

    return filters;
}

export default getFilters;
