import { IProductData } from "../../../../types/IProductData";
import {productData} from "../../../product-data";
import getProductCardInCart from "./product-card-in-cart";
import getModalForPay from "./modal-for-pay/modal-for-pay";
import {getArrayFromLS} from "../../../functions/localStorage";
import {IPromoCode} from "../../../../types/IPromoCode";
import {setPromoElement} from "../../../functions/cart_functions/handlePromoInput";

const getCart = (): HTMLElement => {
  const productsInCartPage: IProductData[] = [];
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', '[]');
  }
  const storageCart = localStorage.getItem('cart');
  const objCart = JSON.parse(storageCart!);
  for (let i = 0; i < objCart.length; i++) {
    productsInCartPage.push(productData[objCart[i].id - 1]);
  }



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
  productsInCartPage.forEach(element => {
    products.append(getProductCardInCart(element))
    });
  productsAndTotal.append(products);


  //сумма заказа, скидки, промокоды
  const total = document.createElement('div');
  total.className = 'total';

  const table = document.createElement('table');
  table.classList.add('total__counting');
  const tbody = document.createElement('tbody');

  const rowProduct = document.createElement('tr');
  const rowProductHead = document.createElement('th');
  rowProductHead.innerText = 'Product(s), item(s)';

  const rowProductData = document.createElement('td');
  rowProductData.classList.add('total__sum-without-discount');
  rowProductData.innerText = '20€'
  rowProduct.append(rowProductHead, rowProductData);

  const rowPromo = document.createElement('tr');

  const rowPromoHead = document.createElement('th');
  rowPromoHead.innerText = 'Promo code';

  const rowPromoData = document.createElement('td');
  rowPromoData.insertAdjacentHTML('beforeend', `<input type="text" name="promo-code" class="promocode"/>`);
  rowPromo.append(rowPromoHead, rowPromoData);

  const rowApplied = document.createElement('tr');
  rowApplied.insertAdjacentHTML('afterbegin', '<th>Applied:</th>');


  const totalPromoContainer = document.createElement('div');
  totalPromoContainer.classList.add('total__promo-container');
  totalPromoContainer.innerHTML = `<span class="promo-error">already applied</span>`;

  const tdForTotal = document.createElement('td');
  tdForTotal.insertAdjacentElement("beforeend", totalPromoContainer);
  rowApplied.append(tdForTotal);


  const promosInLocalStorage: IPromoCode[] = getArrayFromLS('promocodes');
    promosInLocalStorage.forEach(elem => {
    totalPromoContainer.append(setPromoElement(elem.promoword));
      });

  tbody.append(rowProduct, rowPromo, rowApplied);
  table.append(tbody);
    table.insertAdjacentHTML('beforeend', `
    <tfoot class="total__sum">
        <tr>
            <th>Total to pay</th>
            <td id="totalToPay">30€</td>
        </tr>
    </tfoot>
`);


  //кнопка заказа
  const orderButton = document.createElement('button');
  orderButton.id = 'order';
  orderButton.className = 'button_color';
  orderButton.innerHTML = 'place order';
  total.append(table);
  total.append(orderButton);
  productsAndTotal.append(total);
  cart.append(productsAndTotal);

  return cart;
}

export default getCart;
