export function updateSum(): void {
  const cartSum = document.querySelector('#cartButton') as HTMLElement;
  cartSum.innerText = String(getCartSum());
}


//не работает из карточки товара!!

export function getCartSum(): number | string {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', '[]');
  }
  const storageCart = localStorage.getItem('cart');
  const objCart = JSON.parse(storageCart!);

  let sum = 0;

  for (let i = 0; i < objCart.length; i++) {
    const productSum = objCart[i].count * objCart[i].price;
    sum = sum + productSum;
    sum = Number(sum.toFixed(1));
  }

  return sum > 0 ? sum : 'Cart';
}

