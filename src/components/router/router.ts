import Router from 'vanilla-router';
import getCartPage from '../cartPage';
import getMainPage from '../mainPage';
import { productData } from '../product-data';
import getProductPage from '../productPage';

const router = new Router({
  mode: 'history',
  root: '/',
  hooks: {
    before: function (newPage) {
        console.info('Before page loads hook', newPage);
    }
  },
  page404: function (path) {
    alert('"/' + path + '" Page not found');
  },
})
export default router;


router.add(router.root, getMainPage)
productData.forEach(product => {
  router.add(`/catalog/${product.id}`, () => {
    getProductPage(product.id)
  })
})
router.add('/cart', getCartPage)

export function getMainNavigate() {
  const mainPageNavigate = document.querySelector('#main');
  if (mainPageNavigate) {
    mainPageNavigate.addEventListener('click', () => {
      router.navigateTo(`/`);
    })
  }
}

export function goBack() {
  const back = document.querySelector('#back');
  if (back) {
    back.addEventListener('click', () => {
      router.back();
    })
  }
}
