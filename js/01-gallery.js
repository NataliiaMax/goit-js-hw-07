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
let instance;
divRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
instance = basicLightbox.create(
    `
	<img src = "${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener("keydown", onCloseModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", onCloseModal);
      }
    }
  );
  instance.show();
  
});
function onCloseModal(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
