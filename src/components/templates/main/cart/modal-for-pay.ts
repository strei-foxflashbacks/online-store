
const getModalForPay = () => {
  const modalForPay = document.createElement('div');

  modalForPay.className = 'modal-pay ';

  modalForPay.innerHTML = `
  <form action="#">
    <fieldset class="user-data">
        <label for="userFullName">Your name</label>
        <input type="text" placeholder="first and last name" id="userFullName" class="user-data__input-item">
        <label for="phone" class="user-data__label-item">Phone</label>
        <input type="number" name="phone" id="phone" class="user-data__input-item">
        <label for="adress" class="user-data__label-item">Full adress</label>
        <input type="text" name="adress" id="adress" class="user-data__input-item">
    </fieldset>
    <fieldset class="payment-card">
        <label for="cardnumber" class="payment-card__label">Card number</label>
        <input type="number" name="cardnumber" id="cardnumber" class="payment-card__input">
        <label for="valid" class="payment-card__label">Valid until</label>
        <input type="number" id="valid" class="payment-card__input">
        <label for="cvv" class="payment-card__label">CVV</label>
        <input type="number" id="cvv" class="payment-card__input">
        <img src="#" alt="icon payment system" class="icon-payment" id="iconPayment">
    </fieldset>
    <button type="submit">Confirm</button>
   </form>
   `

  return modalForPay;
}

export default getModalForPay;
