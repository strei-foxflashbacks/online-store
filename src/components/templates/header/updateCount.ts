import {getArrayFromLS} from "../../functions/localStorage";

//написать общую функцию обновления, передавать элемент
export function updateCartCounter() {
  const counter = document.querySelector('#cartCounter') as HTMLElement;
  counter.innerText = `${getTotalCount()} pcs, `;
}

export function updateCounterInTotal() {
  const pcs = document.querySelector('#pcs') as HTMLElement;
  pcs.innerText = `${getTotalCount()} pcs, `;
}


export function getTotalCount(): number{
  const objCart = getArrayFromLS('cart');
  let count = 0;
  for (let i = 0; i < objCart.length; i++) {
    count = count + objCart[i].count;
  }
  return count;
}
