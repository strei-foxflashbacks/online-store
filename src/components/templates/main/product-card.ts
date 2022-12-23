const getProductCard = (): HTMLElement => {
  const productCard = document.createElement('section');

  productCard.className = 'product-card';

  productCard.innerHTML = `
   <div class="photo-set">
    <div class="product-card__photos">
        <img src="assets/1.jpg" alt="first product photo" class="product-card__photo">
        <img src="assets/1-1.jpg" alt="second product photo" class="product-card__photo">
        <img src="assets/1-2.jpg" alt="third product photo" class="product-card__photo">
    </div>
    <div class="photo-set__button"></div>
    <div class="photo-set__button"></div>
    <div class="photo-set__button"></div>
  </div>
  <div class="product-card__description">
    <h2 class="product-card__product-name"></h2>
    <p class="main-banner__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.</p>
         <table>
        <caption>Parameters</caption>
        <tbody>
            <tr>
                <th>Brand</th>
                <td></td>
            </tr>
            <tr>
                <th>Category</th>
                <td></td>
            </tr>
            <tr>
                <th>Structure</th>
                <td>100% cotton</td>
            </tr>
            <tr>
                <th>Stock</th>
                <td></td>
            </tr>
        </tbody>
    </table>
    <div class="product-card__cart-options">
        <div class="product-card__price"></div>
        <button class="plus-minus-button">+/-</button>
        <button class="button_color"><a href="#"></a>Add to cart</button>
    </div>
  </div>`

  return productCard;
}

export default getProductCard;
