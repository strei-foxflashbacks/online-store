 export function handleAddressInput() {
    console.log('');
}

export function handleCVV(event: Event) {

  const cvv = event.target as HTMLInputElement;
//не работает - псевдокласс валид добавляется сам при валидации под капотом
  // if (cvv) {
  //   if (cvv.value.length < 3) {
  //     cvv.classList.add('invalid');
  //     !cvv.checkValidity();
  //   }

  //обрезает длину и пропускает только цифры
    let temp = cvv.value;
    temp = temp.replace(/[\D]/g, '').slice(0,3);
    cvv.value = temp;
}

export function handleCardNumberInput() {
    //добавить картинки платежной системы, пробелы между 4ками
  }

  export function handleValidInput() {
    //добавить палочку между вводом
  }

  export function handleConfirmButton() {
    //   if (event.target) {
    //
    // const button = event.target as HTMLButtonElement;
    // const cvv = document.querySelector('#cvv');
    // if (cvv && cvv.classList.contains('invalid')) {
    //   //может ли технически здесь быть null (внутри обработчика события)???
    //     button.disabled = true;
    // }}


  }
