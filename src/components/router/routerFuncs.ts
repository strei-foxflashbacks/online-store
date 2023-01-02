import router from "./router";

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
