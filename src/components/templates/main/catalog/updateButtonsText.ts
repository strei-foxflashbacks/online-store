import {ICartProductRecord} from "../../../../types/ICartProductRecord";


export function isProductExistsInCart(id: number, objCart: ICartProductRecord[]): boolean {
  for (let i = 0; i < objCart.length; i++) {
    if (objCart[i].id == id) {
      return true;
    }
  }
  return false;
}
