const getCatalog = (): HTMLElement => {
  const catalog = document.createElement('section');

  catalog.className = 'catalog';

  catalog.innerHTML = `
  <div class="container">
    <div class="catalog-card">
      <img src="#" alt="">
      <div class="catalog-card__name">Women\'s Institute Soft Blue Premium Acrylic Yarn 100g</div>
      <div class="catalog-card__price">2.50 €</div>
      <button class="button card-button-add-to-cart">Add to cart</button>
    </div>
  </div>`;

  return catalog;
}

export default getCatalog;
