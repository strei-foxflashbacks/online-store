import { IProductData } from "../../../types/IProductData";
import { productData } from "../../product-data";

const categoryFilter = () => {
  const filterableData: IProductData[] = productData;
  const productCatalog = document.querySelector('.catalog') as HTMLElement;
  const fullCatalog = document.querySelectorAll('.catalog-card');
  const output: Element[] = [];
  let capturedLength = 0;

  const categories: NodeListOf<HTMLInputElement> = document.querySelectorAll('.category-filter');

  categories.forEach((category: HTMLInputElement) => {
    category.addEventListener('change', () => {
      const categoryFiltered = filterableData.filter(element => element.category === category.name);
      const filteredIds = categoryFiltered.map(element => `${element.id}`);
      const catalog = document.querySelectorAll('.catalog-card');
      const catalogQueue = Array.from(catalog);

      while (productCatalog.firstChild) {
        productCatalog.removeChild(productCatalog.firstChild);
      }

      if (category.checked === true) {
        if (output.length === 0) {
          catalogQueue.forEach(element => {
            if (filteredIds.includes(element.id)) {
              capturedLength = catalogQueue.length;
              output.push(element)
              output.forEach(node => productCatalog.append(node))
            }
          })
        } else {
          filteredIds.forEach(id => {
            output.push(fullCatalog[Number(id) - 1])
            output.forEach(node => productCatalog.append(node))
            capturedLength = output.length
          })
        }
        history.pushState(null, '', `${window.location.search}/?category=${category.name.toLowerCase()}`)
      }
      else if (category.checked === false) {
        output.forEach(element => {
          if (filteredIds.includes(element.id)) {
            output.splice(output.indexOf(element), filteredIds.length)
            output.forEach(node => productCatalog.append(node))
            capturedLength = output.length
          }
        })
        if (capturedLength === 0) {
          fullCatalog.forEach(node => {
            productCatalog.append(node)
          })
        } else {
          output.forEach(node => {
            productCatalog.append(node)
          })
        }
        history.replaceState(null, '', `${window.location.pathname}`);
      }
    })
  })
}
export default categoryFilter;