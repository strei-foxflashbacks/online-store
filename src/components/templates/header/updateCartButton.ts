export function updateCartCounter() {
  const counter = document.querySelector('#cartCounter') as HTMLElement;
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', '[]');
  }
  const storageCart = localStorage.getItem('cart');
  const objCart = JSON.parse(storageCart!);
  counter.innerText = objCart.length;
}
