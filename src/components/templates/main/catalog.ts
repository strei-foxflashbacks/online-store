const getCatalog = (): HTMLElement => {
  const catalog = document.createElement('section');

  catalog.className = 'catalog';

  catalog.innerHTML = `
  <div class="container">
    <div class="catalog-card">
      <img src="#" alt="">
      <div class="catalog-card__name">Yarn Macrametr 4mm</div>
      <div class="catalog-card__price">3.95 €</div>
      <button class="button">Add to cart</button>
    </div>
  </div>`;

  return catalog;
}

export default getCatalog;
