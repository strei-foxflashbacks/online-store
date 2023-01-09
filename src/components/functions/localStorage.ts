export function getArrayFromLS(name: string) {
  if (!localStorage.getItem(`${name}`)) {
    localStorage.setItem(`${name}`, '[]');
  }
  const array = localStorage.getItem(`${name}`);

  return JSON.parse(array!)
}
