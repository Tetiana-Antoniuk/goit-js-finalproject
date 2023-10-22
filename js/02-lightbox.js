import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageList = document.querySelector(".gallery");

const images = galleryItems.map(({ original,preview, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
    </a>
</li>
`
).join('');
imageList.insertAdjacentHTML('afterbegin', images);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});