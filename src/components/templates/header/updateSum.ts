import {getArrayFromLS} from "../../functions/localStorage";

export function updateSum(): void {
  const cartSum = document.querySelector('#cartButton') as HTMLElement;
  cartSum.innerText = String(getCartSum());
}


export function getCartSum(): number | string {
  const objCart = getArrayFromLS('cart');

  let sum = 0;

  for (let i = 0; i < objCart.length; i++) {
    const productSum = objCart[i].count * objCart[i].price;
    sum = sum + productSum;
    sum = Number(sum.toFixed(1));
  }

  return sum > 0 ? sum : 'Cart';
}

