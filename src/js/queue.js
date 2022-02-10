import { goQueue } from './header-links';
import { renderMarkup } from './main-trending-markup';

export const queueContainerRef = document.querySelector('.queue');
const queueBtn = document.querySelector('#btn__header-queue');

export function renderQueueList() {
  // try {
  const data = JSON.parse(localStorage.getItem('queue'));
  if (data.length == 0) {
    document.querySelector('main').classList.add('empty');
    renderMarkup(data, queueContainerRef);
  } else {
    document.querySelector('main').classList.remove('empty');
    renderMarkup(data, queueContainerRef);
  }
  goQueue();
  // } catch {
  //   console.log('Empty');
  // }
}

queueBtn.addEventListener('click', renderQueueList);
