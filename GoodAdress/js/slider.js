function slider(element) {
  let index = 0;
  const $slider = $(element);
  const $sliderFilm = $slider.find(".slider-film");
  const $sliderItem = $sliderFilm.find(".slider-item");
  const length = $sliderItem.length;
  $sliderFilm.css("width", length * 100 + "%");

  $(".slider-next").click(function () {
    if (index < length - 1) {
      index++;
    } else {
      index = 0;
    }
    $sliderFilm.animate(
      {
        left: -100 * index + "%"
      },
      1000
    );
  });

  $(".slider-prev").click(function () {
    if (index > 0) {
      index--;
    } else {
      index = length - 1;
    }
    $sliderFilm.animate(
      {
        left: -100 * index + "%"
      },
      1000
    );
  });

  setInterval(function () {
    $(".slider-next").click();
  }, 9000);
}
