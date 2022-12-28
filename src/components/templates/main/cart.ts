const getCart = (): HTMLElement => {
  const cart = document.createElement('section');

  cart.className = 'cart-container';

  cart.innerHTML = `
  <div class="products">
  <h2 class="title">My Cart</h2>
    <div class="product">
        <img src="" alt="product photo" class="product__photo">
        <div class="product__name"></div>
        <div class="product__price"></div>
        <div class="product-card__btn-group">
            <button class="plus-minus-button plus" id="plus">+</button>
            <span class="plus-minus-button__counter" id="counterInCart">1</span>
            <button class="plus-minus-button minus" id="minus">-</button>
        </div>
        <button class="delete-button">
            <img src="" alt="delete icon" class="delete-icon">
        </button>
    </div>
  </div>
  <div class="total">
  <table class="total__counting">
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
  <button class="button_color">place order</button>
  </div>
`
  return cart;
}

export default getCart;
