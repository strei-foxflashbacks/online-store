import {IPromoCode} from "../../../types/IPromoCode";
import {getArrayFromLS} from "../localStorage";
import {promocodeData} from "../../promocode-data";
import {updateSumWithPromo} from "../../templates/header/updateSum";
import {getTotalCount} from "../../templates/header/updateCount";

export function handlePromoInput(event: Event) {
  const promoInput = event.target as HTMLInputElement;

  const containerPromo = document.querySelector('.total__promo-container');
  const promoData: IPromoCode[] = promocodeData;
  const promoArr: IPromoCode[] = getArrayFromLS('promocodes');
  const matchedInDataItem = getMatchedItem(promoInput.value, promoData);
  const matchedInLSItem = getMatchedItem(promoInput.value, promoArr);
  const error = document.querySelector(".promo-error") as HTMLElement;
  error.style.visibility = matchedInLSItem ? 'visible' : 'hidden';


  if (matchedInDataItem && containerPromo && !matchedInLSItem) {
      containerPromo.append(setPromoElement(matchedInDataItem.promoword));
      promoArr.push(matchedInDataItem);
      localStorage.setItem('promocodes', JSON.stringify(promoArr));
      promoInput.value = "";
      updateSumWithPromo();
  }
}


 export function getMatchedItem(promoword: string, array: IPromoCode[]): IPromoCode | null {
    let item = null;
    for (let i = 0; i < array.length; i++) {
      if (array[i].promoword === promoword) {
        item = array[i];
      }
    }
    return item;
  }


export function setPromoElement(promoname: string): HTMLElement {
  const promo = document.createElement('div');

  promo.className = 'total__promo-word';

  const crossButtonInput = document.createElement('img');
  crossButtonInput.src = '../../../assets/cross.svg';
  crossButtonInput.width = 30;
  crossButtonInput.alt = 'cross button';

  const word = document.createElement('span');
  word.innerHTML = promoname;

  promo.append(word, crossButtonInput);
  return promo;
}
