const getFilters = (): HTMLElement => {
  const filters = document.createElement('section');

  filters.className = 'filters';

  filters.innerHTML = `
  <div class="filter-container">
    <form action="#">
      <fieldset class="filter-container__item">
        <legend class="filter-container__title">Category</legend>
        <div class="filter-container__section">
          <input type="checkbox" id="knittingNeedles" name="knittingNeedles">
          <label for="knittingNeedles">Knitting Needles</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="knittingBags" name="knittingBags">
          <label for="knittingBags">Knitting Bags</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="sewingMachines" name="sewingMachines">
          <label for="sewingMachines">Sewing Machines</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="sewingBoxes" name="sewingBoxes">
          <label for="sewingBoxes">Sewing Boxes</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="needleFeltingKits" name="needleFeltingKits">
          <label for="needleFeltingKits">Needle Felting Kits</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="yarn" name="yarn">
          <label for="yarn">Yarn</label>
        </div>
      </fieldset>
      <fieldset class="filter-container__item">
        <legend class="filter-container__title">Brand</legend>
        <div class="filter-container__section">
          <input type="checkbox" id="womensInstitute" name="womensInstitute">
          <label for="womensInstitute">Women's Institute</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="knitcraft" name="knitcraft">
          <label for="knitcraft">Knitcraft</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="pony" name="pony">
          <label for="pony">Pony</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="hayfield" name="hayfield">
          <label for="hayfield">Hayfield</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="peterPan" name="peterPan">
          <label for="peterPan">Peter Pan</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="jamesCBrett" name="jamesCBrett">
          <label for="jamesCBrett">James C Brett</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="hobbyCraft" name="hobbyCraft">
          <label for="hobbyCraft">Hobbycraft</label>
        </div>
        <div class="filter-container__section">
          <input type="checkbox" id="janome" name="janome">
          <label for="janome">Janome</label>
        </div>
        <div class="filter-container__section">
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
