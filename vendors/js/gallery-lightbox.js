// Lightbox Gallery

// query selectors
const lightboxEnabled = document.querySelectorAll(".lightbox-enabled");
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length - 1;
const lightboxContainer = document.querySelector(".lightbox-container");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxBtns = document.querySelectorAll(".lightbox-btn");
const lightboxBtnRight = document.querySelector("#right");
const lightboxBtnLeft = document.querySelector("#left");
const close = document.querySelector("#close");
let activeImage;
// Functions
const showLightBox = () => {
  lightboxContainer.classList.add("active");
};

const hideLightBox = () => {
  lightboxContainer.classList.remove("active");
};

const setActiveImage = (image) => {
  lightboxImage.src = image.dataset.imgsrc;
  activeImage = lightboxArray.indexOf(image);
};

const transitionSlidesLeft = () => {
  lightboxBtnLeft.focus();
  $(".lightbox-image").addClass("slideright");
  setTimeout(function () {
    activeImage === 0
      ? setActiveImage(lightboxArray[lastImage])
      : setActiveImage(lightboxArray[activeImage - 1]);
  }, 250);

  setTimeout(function () {
    $(".lightbox-image").removeClass("slideright");
  }, 500);
};

const transitionSlidesRight = () => {
  lightboxBtnRight.focus();
  $(".lightbox-image").addClass("slideleft");
  setTimeout(function () {
    activeImage === lastImage
      ? setActiveImage(lightboxArray[0])
      : setActiveImage(lightboxArray[activeImage + 1]);
  }, 250);
  setTimeout(function () {
    $(".lightbox-image").removeClass("slideleft");
  }, 500);
};

const transitionSlideHandler = (moveItem) => {
  moveItem.includes("left") ? transitionSlidesLeft() : transitionSlidesRight();
};

// Event Listeners
lightboxEnabled.forEach((image) => {
  image.addEventListener("click", (e) => {
    showLightBox();
    setActiveImage(image);
  });
});
lightboxContainer.addEventListener("click", () => {
  hideLightBox();
});
close.addEventListener("click", () => {
  hideLightBox();
});
lightboxBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    transitionSlideHandler(e.currentTarget.id);
  });
});

lightboxImage.addEventListener("click", (e) => {
  e.stopPropagation();
});
