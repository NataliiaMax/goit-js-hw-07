import { galleryItems } from "./gallery-items.js";
// Change code below this line
const divRef = document.querySelector(".gallery");

const arrayGallery = galleryItems.map((image) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`;
});
divRef.insertAdjacentHTML("afterbegin", arrayGallery.join(""));
console.log(arrayGallery);

divRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  let instance = basicLightbox.create(`
	<img src = "${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  document.addEventListener("keydown", (onCloseModal) => {
    if (onCloseModal.code === "Escape") {
      instance.close();
    }
    document.removeEventListener("keydown", onCloseModal);
  });
});
