import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const render = galleryItems.reduce(
  (acc, { description, original, preview }) =>
    acc +
    `<div class="gallery__item"><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a></div>`,
  ''
);
// console.log(render);

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', render);
gallery.addEventListener('click', handleImgClick);

// const instance = basicLightbox.create(`<img class="gallery__image">`);

function handleImgClick(event) {
  event.preventDefault();
  //   if (event.target === event.currentTarget) return;
  if (!event.target.classList.contains('gallery__image')) return;
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  // instance.element().querySelector('.gallery__image').src = event.target.dataset.source;
  instance.show();

  document.addEventListener('keydown', handleDownEscape);
  function handleDownEscape(event) {
    if (event.code !== 'Escape') return;
    if (event.code === 'Escape') instance.close();
    document.removeEventListener('keydown', handleDownEscape);
    // console.log(event.code);
  }
}