import { IProductData } from "../../../types/IProductData";
import { productData } from "../../product-data";

const brandFilter = () => {
  const filterableData: IProductData[] = productData;
  const productCatalog = document.querySelector('.catalog') as HTMLElement;
  const fullCatalog = document.querySelectorAll('.catalog-card');
  const output: Element[] = [];
  let capturedOutput: Element[] = [];
  let capturedLength = 0;

  const brands: NodeListOf<HTMLInputElement> = document.querySelectorAll('.brand-filter');

  brands.forEach((brand: HTMLInputElement) => {
    brand.addEventListener('change', () => {
      const brandFiltered = filterableData.filter(element => element.brand === brand.name);
      const filteredIds = brandFiltered.map(element => `${element.id}`);
      const catalog = document.querySelectorAll('.catalog-card');
      const catalogQueue = Array.from(catalog);

      while (productCatalog.firstChild) {
        productCatalog.removeChild(productCatalog.firstChild);
      }

      if (brand.checked === true) {
        catalogQueue.forEach(element => {
          if (filteredIds.includes(element.id)) {
            capturedOutput = catalogQueue;
            capturedLength = catalogQueue.length
            output.push(element)
            output.forEach(node => productCatalog.append(node))
          }
        })
        history.pushState(null, '', `${window.location.search}/?brand=${brand.name.toLowerCase()}`)
      }
      else if (brand.checked === false) {
        output.forEach(element => {
          if (filteredIds.includes(element.id)) {
            output.splice(output.indexOf(element), filteredIds.length)
            output.forEach(node => productCatalog.append(node))
          }
        })
        if (capturedLength === 30) {
          fullCatalog.forEach(node => {
            productCatalog.append(node)
          })
        } else {
          capturedOutput.forEach(node => {
            productCatalog.append(node)
          })
        }
        history.replaceState(null, '', `${window.location.pathname}`);
      }
    })
  })
}
export default brandFilter;