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
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`;
});
divRef.insertAdjacentHTML("afterbegin", arrayGallery);
console.log(arrayGallery);

divRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
	<img src = "${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
});
console.log(galleryItems);

document.addEventListener("keydown", (event) => {
  console.log("Keydown: ", event);
});
// const instance = basicLightbox.create(
//   `
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `,
//   {
//     onShow: (instance) => {
//       instance.element().querySelector("a").onclick = instance.close;
//     },
//   }
// );

// instance.show();
