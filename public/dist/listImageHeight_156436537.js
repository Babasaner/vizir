"use strict";

(function () {
  var listImages = Array.from(document.querySelectorAll(".list-item__figure--service"));
  setImageHeight();
  window.addEventListener("resize", setImageHeight);

  function setImageHeight() {
    listImages.forEach(function (el) {
      var width = el.offsetWidth;
      el.style.height = width * 0.563 + "px";
    });
  }
})();