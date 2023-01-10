const resetSort = () => {
  const sortingOptions = document.querySelector('.filter-select') as HTMLSelectElement;
  const productCatalog = document.querySelector('.catalog') as HTMLElement;
  const fullCatalog = productCatalog.children;

  sortingOptions.addEventListener('change', () => {
    if (sortingOptions.value === 'default') {
      for (let i = 0; i < fullCatalog.length; i++) {
        for (let j = i; j < fullCatalog.length; j++) {
          if (Number(fullCatalog[i].id) > Number(fullCatalog[j].id)) {
            const replacedNode = productCatalog.replaceChild(fullCatalog[j], fullCatalog[i]);
            fullCatalog[i].parentNode?.insertBefore(replacedNode, fullCatalog[i].nextSibling)
          }
        }
      }
    }
  })
}
export default resetSort;