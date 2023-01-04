import { IProductData } from "../../../types/IProductData";
import { productData } from "../../product-data";

const categoryFilter = () => {
  const filterableData: IProductData[] = productData;
  const productCatalog = document.querySelector('.catalog') as HTMLElement;
  const catalog = document.querySelectorAll('.catalog-card');
  const catalogQueue = Array.from(catalog);
  const output: Element[] = [];

  const categories: NodeListOf<HTMLInputElement> = document.querySelectorAll('.category-filter');

  categories.forEach((category: HTMLInputElement) => {
    category.addEventListener('change', () => {

      const categoryFiltered = filterableData.filter(element => element.category === category.name)
      const filteredIds = categoryFiltered.map(element => `${element.id}`)

      while (productCatalog.firstChild) {
        productCatalog.removeChild(productCatalog.firstChild)
      }

      if (category.checked === true) {
        catalogQueue.forEach(element => {
          if (filteredIds.includes(element.id)) {
            output.push(element)
            output.forEach(node => productCatalog.append(node))
          }
        })
      }
      else if (category.checked === false) {
        output.forEach(element => {
          if (filteredIds.includes(element.id)) {
            output.splice(output.indexOf(element), filteredIds.length)
            output.forEach(node => productCatalog.append(node))
          }
        })

        if (productCatalog.childNodes.length === 0) {
          catalogQueue.forEach(node => {
            productCatalog.append(node)
          })
        }
      }
    })
  })
}
export default categoryFilter;