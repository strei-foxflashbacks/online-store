export function updateCartCounter() {
  const counter = document.querySelector('#cartCounter') as HTMLElement;
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', '[]');
  }
  const storageCart = localStorage.getItem('cart');
  const objCart = JSON.parse(storageCart!);

  let count = 0;
  for (let i = 0; i < objCart.length; i++) {
    count = count + objCart[i].count;
  }
  counter.innerText = `${count}`;
}
