import { galleryItems } from "./gallery-items.js";
// Change code below this line
const divRef = document.querySelector(".gallery");
const arrayGallery = galleryItems.map((image) => {
  return `<a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
            alt="${image.description}"
      />
    </a>`;
});
divRef.insertAdjacentHTML("afterbegin", arrayGallery.join(""));
console.log(arrayGallery);
divRef.addEventListener("click", (event) => {
  event.preventDefault()
});

let lightbox = new SimpleLightbox(".gallery a", {
 captionsData: "alt",
  captionDelay:250
});


