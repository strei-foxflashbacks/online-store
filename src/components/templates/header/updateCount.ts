import {getArrayFromLS} from "../../functions/localStorage";
export function updateCartCounter() {
  const counter = document.querySelector('#cartCounter') as HTMLElement;
  counter.innerText = `${getTotalCount()}`;
}


export function getTotalCount(): number{
  const objCart = getArrayFromLS('cart');
  let count = 0;
  for (let i = 0; i < objCart.length; i++) {
    count = count + objCart[i].count;
  }
  return count;
}
