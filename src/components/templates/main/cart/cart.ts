import { IProductData } from "../../../../types/IProductData";
import {productData} from "../../../product-data";
import getProductCardInCart from "./product-card-in-cart";
import getModalForPay from "./modal-for-pay/modal-for-pay";

const testArray: IProductData[] = [productData[0], productData[3], productData[8]];
const getCart = (): HTMLElement => {
  const cart = document.createElement('section');

  //фон для модалки
  const darkBackground = document.createElement('div');
  darkBackground.className = 'dark-background';
  darkBackground.id = 'darkBackground';
  document.body.prepend(darkBackground);
  document.body.prepend(getModalForPay());


//крошки
  cart.className = 'cart-container';
  const breadCrumbs = document.createElement('div');
  breadCrumbs.className = 'path-to-section';
  breadCrumbs.innerHTML = `
    <a href="#" class="path-to-section__item" id="back">Back </a>
      <span class="arrow">←
      </span>
      <a href="#" class="path-to-section__item" id="main"> Main </a><span class="arrow">→
      </span><span class="path-to-section__item" id="cart"> Cart </a>
  `;
  cart.append(breadCrumbs);


  //название страницы
  const title = document.createElement('h2');
  title.className = 'title';
  title.innerHTML = 'My Cart';
  cart.append(title);


  //карточки добавленных в корзину товаров
  const productsAndTotal = document.createElement('div');
  productsAndTotal.className = 'products-total-container';

  const products = document.createElement('div');
  products.className = 'products';
  testArray.forEach(element => {
    products.append(getProductCardInCart(element))
    });
  productsAndTotal.append(products);


  //сумма заказа, скидки, промокоды
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
        <tr>
            <th>Applied:</th>
            <td>
                <div class="total__promo-container"></div>
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
`

  //кнопка заказа
  const orderButton = document.createElement('button');
  orderButton.id = 'order';
  orderButton.className = 'button_color';
  orderButton.innerHTML = 'place order';

  total.append(orderButton);
  productsAndTotal.append(total);
  cart.append(productsAndTotal);

  return cart;
}

export default getCart;
