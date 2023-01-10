const nothingFound = () => {
  const productCatalog = document.querySelector('.catalog') as HTMLElement;

  const errorCard = document.createElement('div');
  errorCard.className = 'container';
  errorCard.classList.add('error-card');

  errorCard.innerHTML = `Nothing found! :(`

  productCatalog.append(errorCard);
}
export default nothingFound