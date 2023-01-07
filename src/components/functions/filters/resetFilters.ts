const resetFilters = () => {
  const resetButton = document.querySelector('button[type="reset"]') as HTMLElement;
  const productCatalog = document.querySelector('.catalog') as HTMLElement;
  const fullCatalog = document.querySelectorAll('.catalog-card');

  resetButton.onclick = () => {
    while (productCatalog.firstChild) {
      productCatalog.removeChild(productCatalog.firstChild);
    }
    fullCatalog.forEach(node => {
      productCatalog.append(node)
    })
  }
};
export default resetFilters;