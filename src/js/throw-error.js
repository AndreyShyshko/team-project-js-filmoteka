const markupError = `<div class="header__error js-header__error">
<<p class="header__error-text">
  Search result not successful. Enter the correct movie name and try again!
</p>
</div>`

const error = document.querySelector('.header__home-content');

export function showError() {
  error.insertAdjacentHTML("beforeend", markupError);
}
export function hideError() {
  error.insertAdjacentHTML("beforeend", "")
}
