import { galleryItems } from './gallery-items.js';
// Change code below this line
const divRef = document.querySelector('.gallery');
divRef.addEventListener('click', event =>
{
    event.preventDefault();
    if (event.target.nodeName !== "A") {
      return;
    }
    
    console.log(onClick.target.nodeName);
})
// const instance = basicLightbox.create(document.querySelector("#template"));
// instance.show();
console.log(galleryItems);
