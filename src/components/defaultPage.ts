import getContacts from "./templates/header/contacts";
import getContent from "./templates/header/content";

const setDefaultPage = (): HTMLElement => {
  const body = document.querySelector('body') as HTMLElement;

  const header = document.createElement('header');
  const main = document.createElement('main');

  header.append(getContacts(), getContent());

  body.append(header, main);

  return body;
}

export default setDefaultPage;