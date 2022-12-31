import { IProductData } from "../../types/IProductData";
import { productData } from "../product-data"

const filterCatalog = () => {
  const filterableData: IProductData[] = productData;
  const productCatalog = document.querySelector('.catalog') as HTMLElement;
  const catalog = document.querySelectorAll('.catalog-card');
  const catalogQueue = Array.from(catalog);
  const output: Element[] = [];

  const categories: NodeListOf<HTMLInputElement> = document.querySelectorAll('.category-filter');
  const brands: NodeListOf<HTMLInputElement> = document.querySelectorAll('.brand-filter');

  categories.forEach((category: HTMLInputElement) => {
    category.addEventListener('change', () => {

      const categoryFiltered = filterableData.filter(element => element.category === category.name)
      const filteredIds = categoryFiltered.map(element => `${element.id}`)


      if (category.checked === true) {

        while (productCatalog.firstChild) {
          productCatalog.removeChild(productCatalog.firstChild)
        }


        catalogQueue.forEach(element => {
          if (filteredIds.includes(element.id)) {
            output.push(element)
            output.forEach(node => productCatalog.append(node))
          }
        })
      }
      else if (category.checked === false) {

        while (productCatalog.firstChild) {
          productCatalog.removeChild(productCatalog.firstChild)
        }

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

  brands.forEach((brand: HTMLInputElement) => {
    brand.addEventListener('change', () => {
      if (brand.checked === true) {
        console.log(brand.name)
      }
    })
  })
}

export default filterCatalog