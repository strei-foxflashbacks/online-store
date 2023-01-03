
export function handleOrderButton() {
  console.log('handle button');

  const modal = document.querySelector('.modal-pay') as HTMLElement;
  const darkBackground = document.querySelector('#darkBackground') as HTMLElement;
  if (modal && darkBackground) {
    modal.style.visibility = 'visible';
    darkBackground.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
  }


  darkBackground.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    darkBackground.style.visibility = 'hidden';
    document.body.style.overflow = 'visible';
  })
}
