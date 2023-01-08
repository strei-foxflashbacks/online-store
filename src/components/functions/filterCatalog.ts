import brandFilter from "./filters/brandFilter";
import categoryFilter from "./filters/categoryFilter";
import resetFilters from "./filters/resetFilters";
import sortingOptions from "./sortingOptions";

const filterCatalog = () => {
  categoryFilter();
  brandFilter();
  sortingOptions();
  resetFilters();
}

export default filterCatalog