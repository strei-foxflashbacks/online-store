export function changeGrids(event: Event) {
  const target = event.target as HTMLElement;

  const CATALOG = document.querySelector('.catalog');
  const PRODUCT_CARDS = document.querySelectorAll('.catalog-card');


    if (target && CATALOG && PRODUCT_CARDS && target.id === 'three-cards') {
      CATALOG.classList.remove('two-cards');
      CATALOG.classList.add('three-cards');
      PRODUCT_CARDS.forEach(card => {
        card.classList.remove('biggest-card');
        card.classList.add('big-card');
      })
    }
    if (target && CATALOG && PRODUCT_CARDS && target.id === 'two-cards') {
      CATALOG.classList.remove('three-cards');
      CATALOG.classList.add('two-cards');
      PRODUCT_CARDS.forEach(card => {
        card.classList.remove('big-card');
        card.classList.add('biggest-card');
      })
    }
    if (target && CATALOG && PRODUCT_CARDS && target.id === 'five-cards') {
      CATALOG.classList.remove('three-cards');
      CATALOG.classList.remove('two-cards');
      PRODUCT_CARDS.forEach(card => {
        card.classList.remove('big-card');
        card.classList.remove('biggest-card');
      })
    }
}

