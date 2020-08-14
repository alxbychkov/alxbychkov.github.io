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
  showObj(objs, 0);
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
    showObj(portfolio, 0);
  }

  if (scroll > advantages.offsetTop) {
    showObj(advantages, 0);
  }
}); // preloader()

function preloader() {
  var images = document.images,
      images_total_count = images.length,
      preloader = document.querySelector('.preloader'),
      perc_display = preloader.querySelectorAll('.preloader_percentage .perc');
  var images_loaded_count = 0;

  for (var i = 0; i < images_total_count; i++) {
    var image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
  }

  function image_loaded() {
    images_loaded_count++;
    perc_display.innerHTML = "".concat(100 / images_loaded_count * images_loaded_count << 0, "%");

    if (images_loaded_count >= images_total_count) {
      setTimeout(function () {// !preloader.classList.contains('done') && preloader.classList.add('done')
      }, 1000);
    }
  }

  move();

  function move() {
    var back = document.querySelector('.preloader_back');
    var width = 1;
    var id = setInterval(function () {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        back.style.width = "".concat(width, "%");
        perc_display.forEach(function (display) {
          display.innerHTML = addZero(width);
        });
      }
    }, 40);
  }
}

function addZero(number) {
  var perc = Math.trunc(number / 10);
  if (perc > 0 && perc < 10) return "0".concat(number);

  switch (perc) {
    case 0:
      return "00".concat(number);

    case 10:
      return number;
  }
}

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