
const getModalForPay = () => {
  const modalForPay = document.createElement('div');

  modalForPay.className = 'modal-pay';

  modalForPay.innerHTML = `
  <form action="#">
    <fieldset class="user-data">
        <label for="userFullName" class="user-data__label-item">Your name</label>
        <input type="text" placeholder="2 words of 3 letters each" id="userFullName" class="user-data__input-item" required
        pattern="^[а-яА-Яa-zA-Z]{3,} [а-яА-Яa-zA-Z]{3,}$">
        <label for="phone" class="user-data__label-item">Phone</label>
        <input type="text" name="phone" id="phone" class="user-data__input-item" required
        pattern="\\+\\d{9,}" placeholder="+000000000">
        <label for="email" class="user-data__label-item">E-mail</label>
        <input type="email" name="email" id="email" class="user-data__input-item" required>
        <label for="adress" class="user-data__label-item">Full address</label>
        <input type="text" name="adress" id="adress" class="user-data__input-item" required
        placeholder="at least 3 words of 5 letters">
    </fieldset>
    <fieldset class="payment-card">
        <label for="cardnumber" class="user-data__label-item">Card number</label>
        <input type="number" name="cardnumber" id="cardnumber" class="user-data__input-item" required
        pattern="/[0-9]{16}/g">
        <div class="payment-card__groups">
            <div class="payment-card__group">
                <label for="valid" class="user-data__label-item payment-card__label">Valid until</label>
                <input type="number" id="valid" class="user-data__input-item payment-card__input" required>
            </div>
            <div class="payment-card__group">
                <label for="cvv" class="user-data__label-item payment-card__label">CVV</label>
                <input type="number" id="cvv" class="user-data__input-item payment-card__input" required
                min="0" max="999">
            </div>
            <img src="#" alt="icon payment system" class="icon-payment" id="iconPayment">
        </div>
    </fieldset>
    <button type="submit" class="button_color">Confirm</button>
   </form>
   `

  return modalForPay;
}

export default getModalForPay;
