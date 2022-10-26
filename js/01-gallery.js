import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const itemImg = galleryItems.reduce((acc, { preview, original, description }) => acc + `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`, '');

gallery.insertAdjacentHTML('beforeend', itemImg);
gallery.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
  }
  
  const  source = e.target.getAttribute('data-source')
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `)
  instance.show();
  console.log(gallery);

  // document.addEventListener('keydown',onClose);
  // function onClose (e) {
  //   if (e.code !== 'Escape') return;
  //   if (e.code === 'Escape') instance.close();
  //   document.removeEventListener('keydown', onClose);  
  // };
}

