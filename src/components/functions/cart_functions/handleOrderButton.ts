import getModalForPay from "../../templates/main/cart/modal-for-pay/modal-for-pay";

export function handleOrderButton() {
  document.body.style.overflow = 'hidden';
  const darkBackground = document.createElement('div');
  darkBackground.className = 'dark-background';
  document.body.prepend(darkBackground);
  console.log(darkBackground);
document.body.prepend(getModalForPay());
}
