import * as basicLightbox from 'basiclightbox';
import Andrey_sUrl from '../images/andrey.jpg';
import VadimUrl from '../images/vadim.jpg';
import VikaUrl from '../images/vika.jpg';
import LidiyaUrl from '../images/lidiya.jpg';
import IhorUrl from '../images/ihor.jpg';
import MaksUrl from '../images/maks.jpg';
import AndreyUrl from '../images/andrey.jpg';
import MariyaUrl from '../images/mariya.jpg';
import VolodymirUrl from '../images/volodymir.jpg';
import SlavaUrl from '../images/slava.jpg';
import spriteUrl from '../images/sprite.svg';

const markup = `<div class="team-wrapper"><div class="team-card">
    <img src="${Andrey_sUrl}" alt="Andrey" class="team-image">
    <p class="team-name">Andrey</p>
    <p class="team-role">Team Lead</p>
    <a href="https://github.com/AndreyShyshko/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${VadimUrl}" alt="Vadim" class="team-image">
    <p class="team-name">Vadim</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://github.com/vadym-loik" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
   <img src="${VikaUrl}" alt="Vika" class="team-image">
   <p class="team-name">Vika</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/victoriaviter" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${LidiyaUrl}" alt="Lidiya" class="team-image">
    <p class="team-name">Lidiya</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Lidokl" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${IhorUrl}" alt="Ihor" class="team-image">
    <p class="team-name">Ihor</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/igormos1" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${MaksUrl}" alt="Maks" class="team-image">
    <p class="team-name">Maks</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${AndreyUrl}" alt="Andrey" class="team-image">
    <p class="team-name">Andrey</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${MariyaUrl}" alt="Mariya" class="team-image">
    <p class="team-name">Mariya</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/MariiaKon" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${VolodymirUrl}" alt="Volodymir" class="team-image">
    <p class="team-name">Volodymir</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/vovaukrainets" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${SlavaUrl}" alt="Slava" class="team-image">
    <p class="team-name">Slava</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
</div>`;
const container = document.querySelector('.js-team-modal');
//const markup2 = `<img src="${VikaUrl}"/>`;

container.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
