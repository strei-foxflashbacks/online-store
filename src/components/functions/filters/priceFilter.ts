import resetSort from "./resetSort";

const priceFilter = () => {
  const sortingOptions = document.querySelector('.filter-select') as HTMLSelectElement;
  const productCatalog = document.querySelector('.catalog') as HTMLElement;
  const fullCatalog = productCatalog.children;

  resetSort();

  sortingOptions.addEventListener('change', () => {
    if (sortingOptions.value === 'min') {
      for (let i = 0; i < fullCatalog.length; i++) {
        for (let j = i; j < fullCatalog.length; j++) {
          if (Number(fullCatalog[i].getAttribute('data-price')) > Number(fullCatalog[j].getAttribute('data-price'))) {
            const replacedNode = productCatalog.replaceChild(fullCatalog[j], fullCatalog[i]);
            fullCatalog[i].parentNode?.insertBefore(replacedNode, fullCatalog[i].nextSibling)
          }
        }
      }
    }
    if (sortingOptions.value === 'max') {
      for (let i = 0; i < fullCatalog.length; i++) {
        for (let j = i; j < fullCatalog.length; j++) {
          if (Number(fullCatalog[i].getAttribute('data-price')) < Number(fullCatalog[j].getAttribute('data-price'))) {
            const replacedNode = productCatalog.replaceChild(fullCatalog[j], fullCatalog[i]);
            fullCatalog[i].parentNode?.insertBefore(replacedNode, fullCatalog[i].nextSibling)
          }
        }
      }
    }
  })
};
export default priceFilter;