import { IProductData } from "../../../../types/IProductData";
import {productData} from "../../../product-data";
import getProductCardInCart from "./product-card-in-cart";
const testArray: IProductData[] = [productData[0], productData[3], productData[8]];
const getCart = (): HTMLElement => {
  const cart = document.createElement('section');

  cart.className = 'cart-container';

  const title = document.createElement('h2');
  title.className = 'title';
  title.innerHTML = 'My Cart';
  cart.append(title);

  const productsAndTotal = document.createElement('div');
  productsAndTotal.className = 'products-total-container';

  const products = document.createElement('div');
  products.className = 'products';
  testArray.forEach(element => {
    products.append(getProductCardInCart(element))
    });
  productsAndTotal.append(products);


  const total = document.createElement('div');
  total.className = 'total';
  total.innerHTML =
  `<table class="total__counting">
    <tbody>
        <tr>
        <!--    Product(s), $ { totalWithoutDiscount}item(s)-->
            <th>Product(s), item(s)</th>
            <td class="total__sum-without-discount">20€</td>
        </tr>
        <tr>
            <th>Promo code</th>
            <td>
                <input type="text" name="promo-code" class="promocode"/>
            </td>
        </tr>
    </tbody>
    <tfoot class="total__sum">
        <tr>
            <th>Total to pay</th>
            <td>30€</td>
        </tr>
    </tfoot>
  </table>
  <button class="button_color">place order</button>`
  productsAndTotal.append(total);
  cart.append(productsAndTotal);

  return cart;
}

export default getCart;
