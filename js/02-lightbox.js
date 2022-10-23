import { galleryItems } from './gallery-items.js';
// Change code below this line



const galaryDiv = document.querySelector('.gallery');

const createGalery = collection => {
    collection.map(({ preview, original, description }) => {
        const markingElement = `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
        galaryDiv.insertAdjacentHTML('afterbegin', markingElement);
    })
}

createGalery(galleryItems)


