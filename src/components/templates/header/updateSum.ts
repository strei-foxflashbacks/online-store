import {getArrayFromLS} from "../../functions/localStorage";
import {IPromoCode} from "../../../types/IPromoCode";

export function updateSum(): void {
  const cartSum = document.querySelector('#cartButton') as HTMLElement;
  cartSum.innerText = String(getCartSum());
}

export function updateSumWithPromo(): void {
  const finalSum = document.querySelector('#totalToPay') as HTMLElement;
  finalSum.innerText = `${applyPromoToSum(getCartSum())}€`
}


export function getCartSum(): number {
  const objCart = getArrayFromLS('cart');

  let sum = 0;

  for (let i = 0; i < objCart.length; i++) {
    const productSum = objCart[i].count * objCart[i].price;
    sum = sum + productSum;
    sum = Number(sum.toFixed(2));
  }

  return sum;
}


//переписать функции с обходами в одну принимающую колбэки
export function applyPromoToSum(sum: number): number {
  const promos: IPromoCode[] = getArrayFromLS('promocodes');
  let discountAmount = 0;
  promos.forEach(promo => {
    discountAmount += promo.discountAmount;
  })
  const percentOfSum = sum * discountAmount / 100;
  console.log(percentOfSum);
  return Number((sum - percentOfSum).toFixed(2));
}

