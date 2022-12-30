document.addEventListener("DOMContentLoaded", () => {
  const THREE_CARDS = document.querySelector('#three-cards');
  const TWO_CARDS = document.querySelector('#two-cards');
  const FIVE_CARDS = document.querySelector('#five-cards');
  const CATALOG = document.querySelector('.catalog');
  const PRODUCT_CARDS = document.querySelectorAll('.catalog-card');

  if (THREE_CARDS !== null) {
    THREE_CARDS.addEventListener('click', changeNumberCards);
  }
  if (TWO_CARDS !== null) {
    TWO_CARDS.addEventListener('click', changeNumberCards);
  }
  if (FIVE_CARDS !== null) {
    FIVE_CARDS.addEventListener('click', changeNumberCards);
  }


  function changeNumberCards(event: Event) {
    console.log('test2');
    if (event.target === THREE_CARDS && CATALOG && PRODUCT_CARDS) {
      CATALOG.classList.remove('two-cards');
      CATALOG.classList.add('three-cards');
      PRODUCT_CARDS.forEach(card => {
        card.classList.remove('biggest-card');
        card.classList.add('big-card');
      })
    }
    if (event.target === TWO_CARDS && CATALOG) {
      CATALOG.classList.remove('three-cards');
      CATALOG.classList.add('two-cards');
      PRODUCT_CARDS.forEach(card => {
        card.classList.remove('big-card');
        card.classList.add('biggest-card');
      })
    }
    if (event.target === FIVE_CARDS && CATALOG) {
      CATALOG.classList.remove('three-cards');
      CATALOG.classList.remove('two-cards');
      PRODUCT_CARDS.forEach(card => {
        card.classList.remove('big-card');
        card.classList.remove('biggest-card');
      })
    }
  }
})
