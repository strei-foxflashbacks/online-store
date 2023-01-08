import brandFilter from "./filters/brandFilter";
import categoryFilter from "./filters/categoryFilter";
import priceFilter from "./filters/priceFilter";
import resetFilters from "./filters/resetFilters";

const filterCatalog = () => {
  categoryFilter();
  brandFilter();
  priceFilter();
  resetFilters();
}

export default filterCatalog