import router from "../../router/router";

const getContent = (): HTMLElement => {
  function getCount(): string{
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', '[]');
    }
    const storageCart = localStorage.getItem('cart');
    const objCart = JSON.parse(storageCart!);

    let count = 0;
    for (let i = 0; i < objCart.length; i++) {
      count = count + objCart[i].count;
    }
    return `${count}`;
  }




  const contentContainer = document.createElement('div');

  contentContainer.className = 'content-container';
  contentContainer.innerHTML = `
  <h1 class="logo">Hobby Art</h1>`;

  const headerElements = document.createElement('div');
  headerElements.classList.add('header-elements');

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('id', 'cartButton');
  button.innerText = 'Cart';
  button.classList.add('button', 'cart-button');
  headerElements.append(button);

  const counter = document.createElement('span');
  counter.className = 'cart-counter';
  counter.id = 'cartCounter';
  counter.innerText = getCount();

  headerElements.append(counter);
  contentContainer.insertAdjacentElement('beforeend', headerElements);


  if (button) {
    button.onclick = (): void => {
      router.navigateTo('/cart')
    }
  }

return contentContainer;
}

export default getContent;
