const getFooter = (): HTMLElement => {
  const footer = document.createElement('footer');

  footer.className = 'footer';

  footer.innerHTML = `
  <img src="assets/logo.svg" alt="logo" class="logo">
  <div class="autors-links">
    <a href="https://github.com/inna1305">inna1305</a>
    <a href="https://github.com/strei-foxflashbacks">strei-foxflashbacks</a>
    <div>2022</div>
  </div>
  <img src="assets/rs_school_js.svg" alt="logo rs school" class="rs-logo">`;

  return footer;
}
export default getFooter;