import priceFilter from "./filters/priceFilter";
import quantityFilter from "./filters/quantityFilter";
import resetSort from "./filters/resetSort";

const sortingOptions = () => {
  resetSort();
  priceFilter();
  quantityFilter();
}
export default sortingOptions;