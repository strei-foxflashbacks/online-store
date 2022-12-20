const getContacts = (): HTMLElement => {
  const contactsContainer = document.createElement('div');

  contactsContainer.className = 'container-contacts';

  contactsContainer.innerHTML = `
  <div class="contacts">
    <div class="contacts__item"><img src="./assets/phone.svg" alt="phone icon" class="icon">
      <div class="contacts__text">+382 020 000 000</div>
    </div>
    <div class="contacts__item"><img src="./assets/map.svg" alt="map icon" class="icon">
      <div>Podgorica, Studentska bb,
        lamela 11
      </div>
    </div>
    <div class="contacts__item"><img src="./assets/clock.svg" alt="clock icon" class="icon">
      <div>Working clock: 08:00 -
        17:00
      </div>
    </div>
  </div>`

  return contactsContainer;
}

export default getContacts;