import {IPromoCode} from "../../../types/types";


//проверять есть ли уже такой промокод

 export function handlePromoInput() {
   const promoInput = document.querySelector('.promocode') as HTMLInputElement;

    const containerPromo = document.querySelector('.total__promo-container');
    if (isRightPromoCode(promoInput.value)) {
      if (containerPromo) {
        containerPromo.append(getPromoElement());
      }
    }


   function getPromoElement(): HTMLElement {
     const promo = document.createElement('div');

     promo.className = 'total__promo-word';

     const crossButtonInput = document.createElement('img');
     crossButtonInput.src = '../../../assets/cross.svg';
     crossButtonInput.width = 30;
     crossButtonInput.alt = 'cross button';

     const word = document.createElement('span');
     word.innerHTML = promoInput.value;

     promo.append(word, crossButtonInput);
     return promo;
   }

   function isRightPromoCode(promoWord: string): boolean {
     const promo1: IPromoCode = {promoword: '111', discountAmount: 10};
     const promo2: IPromoCode = {promoword: 'rsschool', discountAmount: 20};
     return promoWord === promo1.promoword || promoWord === promo2.promoword;

   }
  }


