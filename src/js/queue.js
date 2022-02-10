import { goQueue } from './header-links';
import { renderMarkup } from './main-trending-markup';

export const queueContainerRef = document.querySelector('.queue');
const queueBtn = document.querySelector('#btn__header-queue');

export function renderQueueList() {
  // try {
  const data = JSON.parse(localStorage.getItem('queue'));
  renderMarkup(data, queueContainerRef);
  goQueue();
  // } catch {
  //   console.log('Empty');
  // }
}

queueBtn.addEventListener('click', renderQueueList);
