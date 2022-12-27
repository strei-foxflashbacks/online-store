import Router from 'vanilla-router';

const router = new Router({
  mode: 'history',
  root: '/',
  page404: function (path) {
    alert('"/' + path + '" Page not found');
  }
})
export default router;