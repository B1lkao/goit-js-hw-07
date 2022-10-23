import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const render = galleryItems.reduce(
  (acc, { description, original, preview }) =>
    acc +
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`,
  ''
);

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', render);

let galleryNew = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
