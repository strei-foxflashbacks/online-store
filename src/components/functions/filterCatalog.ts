import brandFilter from "./filters/brandFilter";
import categoryFilter from "./filters/categoryFilter";
import resetFilters from "./filters/resetFilters";

const filterCatalog = () => {
  categoryFilter();
  brandFilter();
  resetFilters();
}

export default filterCatalog