const quantityFilter = () => {
  const sortingOptions = document.querySelector('.filter-select') as HTMLSelectElement;
  const productCatalog = document.querySelector('.catalog') as HTMLElement;
  const fullCatalog = productCatalog.children;

  sortingOptions.addEventListener('change', () => {
    if (sortingOptions.value === 'stock-min') {
      for (let i = 0; i < fullCatalog.length; i++) {
        for (let j = i; j < fullCatalog.length; j++) {
          if (Number(fullCatalog[i].getAttribute('data-stock')) > Number(fullCatalog[j].getAttribute('data-stock'))) {
            const replacedNode = productCatalog.replaceChild(fullCatalog[j], fullCatalog[i]);
            fullCatalog[i].parentNode?.insertBefore(replacedNode, fullCatalog[i].nextSibling)
          }
        }
      }
    }
    if (sortingOptions.value === 'stock-max') {
      for (let i = 0; i < fullCatalog.length; i++) {
        for (let j = i; j < fullCatalog.length; j++) {
          if (Number(fullCatalog[i].getAttribute('data-stock')) < Number(fullCatalog[j].getAttribute('data-stock'))) {
            const replacedNode = productCatalog.replaceChild(fullCatalog[j], fullCatalog[i]);
            fullCatalog[i].parentNode?.insertBefore(replacedNode, fullCatalog[i].nextSibling)
          }
        }
      }
    }
  })
};
export default quantityFilter;