const clearPage = () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
};
export default clearPage;