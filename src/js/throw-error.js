const error = document.querySelector('.header__error-text');

export function showError() {
  error.classList.remove('is-hidden');
}
export function hideError() {
  error.classList.add('is-hidden');
}
