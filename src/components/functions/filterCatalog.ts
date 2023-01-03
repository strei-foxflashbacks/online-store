import brandFilter from "./filters/brandFilter";
import categoryFilter from "./filters/categoryFilter";

const filterCatalog = () => {
  categoryFilter();
  brandFilter();
}

export default filterCatalog