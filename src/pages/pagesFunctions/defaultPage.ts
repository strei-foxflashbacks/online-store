import getContacts from "../../components/templates/header/contacts";
import getContent from "../../components/templates/header/content";
import getFooter from "../../components/templates/footer/footer";

const setDefaultPage = (): HTMLElement => {
  const body = document.querySelector('body') as HTMLElement;

  const header = document.createElement('header');
  const main = document.createElement('main');

  header.append(getContent());

  body.append(header, main, getFooter());

  return body;
}

export default setDefaultPage;
