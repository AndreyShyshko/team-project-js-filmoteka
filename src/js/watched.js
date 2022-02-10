import { renderMarkup } from './main-trending-markup';
import { goWatched } from './header-links';

export const watchedContainerRef = document.querySelector('.watched');
const watchedBtn = document.querySelector('#btn__header-watched');

export function renderWatchedList() {
  // try {
  const data = JSON.parse(localStorage.getItem('watched'));
  if (data.length == 0) {
    document.querySelector('main').classList.add('empty');
    renderMarkup(data, watchedContainerRef);
  } else {
    document.querySelector('main').classList.remove('empty');
    renderMarkup(data, watchedContainerRef);
  }
  goWatched();
  // } catch {
  //   console.log('Empty');
  // }
}

watchedBtn.addEventListener('click', renderWatchedList);
