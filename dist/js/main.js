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
document.addEventListener('DOMContentLoaded', function () {
  var objs = document.querySelector('.first-screen');
  showObj(objs, 2000);
});

function showObj(name, time) {
  var elements = name.querySelectorAll('.obj');
  setTimeout(function () {
    elements.forEach(function (obj) {
      obj.classList.add('show');
    });
  }, time);
}

document.addEventListener('scroll', function (e) {
  var portfolio = document.querySelector('.portfolio');
  var advantages = document.querySelector('.advantages');
  var scroll = document.documentElement.scrollTop + window.innerHeight;

  if (scroll > portfolio.offsetTop) {
    showObj(portfolio, 600);
  }

  if (scroll > advantages.offsetTop) {
    showObj(advantages, 2000);
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