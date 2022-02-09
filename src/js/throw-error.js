
const markupError = `Search result not successful. Enter the correct movie name and try again!`;

const error = document.querySelector('.header__error');

export function showError() {
  error.innerHTML = markupError;
}
export function hideError() {
  error.innerHTML = "";
}
