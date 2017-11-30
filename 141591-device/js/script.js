var link = document.querySelector(".popup-link");
var popup = document.querySelector(".modal-content");
var mapOpen = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-content-map");
var close = document.querySelector(".modal-content-close");
var mapClose = document.querySelector(".map-modal-content-close");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-content-show");
});

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-content-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});
