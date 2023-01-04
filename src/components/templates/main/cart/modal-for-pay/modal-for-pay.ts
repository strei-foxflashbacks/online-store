import {
  handleAddressInput,
  handleCardNumberInput,
  handleCVV,
  handleValidInput,
  handleConfirmButton
} from "../../../../functions/cartPageFunctions/validateModal";


const getModalForPay = () => {
  const modalForPay = document.createElement('div');

  modalForPay.className = 'modal-pay';

  const form = document.createElement('form');
  form.action = '#';
  const fieldsetUserInfo = document.createElement('fieldset');
  fieldsetUserInfo.className = 'user-data';

  fieldsetUserInfo.innerHTML = `
        <label for="userFullName" class="user-data__label-item">Your name</label>
        <input type="text" placeholder="2 words of 3 letters each" id="userFullName" class="user-data__input-item" required
        pattern="^[а-яА-Яa-zA-Z]{3,} [а-яА-Яa-zA-Z]{3,}$">
        <label for="phone" class="user-data__label-item">Phone</label>
        <input type="text" name="phone" id="phone" class="user-data__input-item" required
        pattern="\\+\\d{9,}" placeholder="+000000000">
        <label for="email" class="user-data__label-item">E-mail</label>
        <input type="email" name="email" id="email" class="user-data__input-item" required>
        <label for="adress" class="user-data__label-item">Full address</label>
        `;


  const address = document.createElement('input');
  address.className = 'user-data__input-item';
  address.required = true;
  address.placeholder = 'at least 3 words of 5 letters';
  address.name, address.id = 'address';
  address.type = 'text';
  fieldsetUserInfo.append(address);
  address.addEventListener('input', handleAddressInput);


  const fieldsetPaymentData = document.createElement('fieldset');
  fieldsetPaymentData.className = 'payment-card';
  fieldsetPaymentData.insertAdjacentHTML('afterbegin',
    '<label for="cardnumber" class="user-data__label-item">Card number</label>'
  );

  const cadrnumber = document.createElement('input');
  cadrnumber.name = 'cardnumber';
  cadrnumber.id = 'cardnumber';
  cadrnumber.className = 'user-data__input-item';
  cadrnumber.required = true;
  //cadrnumber.pattern = "[0-9]{16}/g";
  fieldsetPaymentData.append(cadrnumber);
  cadrnumber.addEventListener('input', handleCardNumberInput);

  fieldsetPaymentData.insertAdjacentHTML('beforeend',
    '<div class="payment-card__groups">' +
    '<div class="payment-card__group">' +
    '<label for="valid" class="user-data__label-item payment-card__label">Valid until</label></div>'
  );

  const validUntilInput = document.createElement('input');
  validUntilInput.id = 'valid';
  validUntilInput.classList.add('user-data__input-item', 'payment-card__input');
  validUntilInput.required = true;
  validUntilInput.type = 'number';
  fieldsetPaymentData.append(validUntilInput);
  validUntilInput.addEventListener('input', handleValidInput);

  fieldsetPaymentData.insertAdjacentHTML('beforeend',
    '<div class="payment-card__group">' +
    '<label for="cvv" class="user-data__label-item payment-card__label">CVV</label>');

  const cvvInput = document.createElement('input');
  cvvInput.type = 'text';
  cvvInput.id = 'cvv';
  cvvInput.classList.add('user-data__input-item', 'payment-card__input');
  cvvInput.required = true;
  cvvInput.minLength = 3;
  fieldsetPaymentData.append(cvvInput);
  cvvInput.addEventListener('input', handleCVV);

  fieldsetPaymentData.insertAdjacentHTML('beforeend',
    '</div><img src="#" alt="icon payment system" class="icon-payment" id="iconPayment"></div>');


  const confirmButton = document.createElement('button');
        confirmButton.type = 'submit';
        confirmButton.className = 'button_color';
        confirmButton.innerHTML = 'Confirm';
        confirmButton.id = 'confirm';

  form.append(fieldsetUserInfo, fieldsetPaymentData);
  form.append(confirmButton);

  confirmButton.addEventListener('click', handleConfirmButton);

  modalForPay.append(form);



  return modalForPay;
}

export default getModalForPay;
