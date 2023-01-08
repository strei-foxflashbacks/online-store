import brandFilter from "./filters/brandFilter";
import categoryFilter from "./filters/categoryFilter";
import priceFilter from "./filters/priceFilter";
import quantityFilter from "./filters/quantityFilter";
import resetFilters from "./filters/resetFilters";

const filterCatalog = () => {
  categoryFilter();
  brandFilter();
  priceFilter();
  quantityFilter();
  resetFilters();
}

export default filterCatalog