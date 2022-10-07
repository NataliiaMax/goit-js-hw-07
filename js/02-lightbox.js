import { galleryItems } from "./gallery-items.js";
// Change code below this line
const divRef = document.querySelector(".gallery");
const largeImageRef = document.querySelector(".gallery__image");

const arrayGallery = galleryItems.map((image) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
            alt="${image.description}"
      />
    </a>
  </div>`;
});
divRef.insertAdjacentHTML("afterbegin", arrayGallery.join(""));
console.log(arrayGallery);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = new SimpleLightbox(".gallery a", {
 captionsData: alt,
  captionDelay:250
});

console.log(galleryItems);
