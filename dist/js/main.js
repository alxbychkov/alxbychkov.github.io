"use strict";

document.querySelector(".first-screen .navigation").addEventListener('wheel', function (event) {
  if (event.deltaMode == event.DOM_DELTA_PIXEL) {
    var modifier = 1; // иные режимы возможны в Firefox
  } else if (event.deltaMode == event.DOM_DELTA_LINE) {
    var modifier = parseInt(getComputedStyle(this).lineHeight);
  } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
    var modifier = this.clientHeight;
  }

  if (event.deltaY != 0) {
    // замена вертикальной прокрутки горизонтальной
    this.scrollLeft += modifier * event.deltaY;
    event.preventDefault();
  }
});

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});