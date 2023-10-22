import { galleryItems } from './gallery-items.js';

let instance = null; 
const imageList = document.querySelector(".gallery");

const images = galleryItems.map(({ original,preview, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      data-source="${original}"
      src="${preview}"
      alt="${description}"
    />
    </a>
</li>
`
).join('');

imageList.insertAdjacentHTML('afterbegin', images);

imageList.addEventListener('click', handlerClick);

document.addEventListener('keydown', handleEscape);

function handlerClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }

  const productId = evt.target.dataset.source;
  
  const product = galleryItems.find(({ original }) => original === productId);

  createModal(product);
}

function createModal(product) {
  if (product) {
    const { original, description } = product;
    instance = basicLightbox.create(`
    <img
      data-source="${original}"
      src="${original}"
      alt="${description}"
    />
  `);
    instance.show();
  }
}

function handleEscape(evt) {
  if (evt.key === 'Escape') {
    if (instance) {
      instance.close();
    }
  }
}
