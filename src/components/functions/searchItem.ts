import nothingFound from "./filters/nothingFound";

const searchItem = () => {
  const searchBar = document.querySelector('.form__input') as HTMLInputElement;
  const fullCatalog: NodeListOf<HTMLElement> = document.querySelectorAll('.catalog-card');
  const productCatalog = document.querySelector('.catalog') as HTMLElement;

  searchBar.oninput = () => {
    const typedText = searchBar.value.trim();
    const val = new RegExp(typedText, 'i');
    const errorCard = document.querySelector('.error-card') as HTMLElement;

    if (typedText !== '') {
      fullCatalog.forEach(node => {
        const nodeName = node.children[1] as HTMLElement;

        if (nodeName.textContent?.search(val) === -1) {
          node.classList.add('hidden');
        } else {
          node.classList.remove('hidden');
        }
      });
    } else {
      fullCatalog.forEach(node => {
        node.classList.remove('hidden');
        if (productCatalog.lastChild === errorCard) {
          productCatalog.removeChild(productCatalog.lastChild);
        }
      });
    }

    if([...productCatalog.children].every(node => node.classList.contains('hidden')) && productCatalog.lastChild !== errorCard) {
        nothingFound()
    }
  }
};
export default searchItem;