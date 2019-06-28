$(document).ready(function () {
  let i = 1,
    length = 5;
  let fio = $('[name = "fio"]'),
    email = $('[name = "email"]'),
    phone = $('[name = "phone"]'),
    message = $('[name = "message"]');

  $("#burgerup").click(function () {
    $(".navigation-menu a").slideToggle(500);
  });

  $(window).resize(function () {
    let pictureHeight = $(".mainpicture img").height();
    let mapHeight = $(".map img").height();
    if (pictureHeight < 503) {
      $(".mainpicture").css("height", pictureHeight);
      // console.log(pictureHeight);
    }
    if (mapHeight < 500) {
      $(".map").css("height", mapHeight);
    }
    if ($(window).width() > 900) {
      $(".navigation-menu a").css("display", "inline-block");
    } else {
      $(".navigation-menu a").css("display", "none");
    }
  });

  $(".navigation-menu a").click(function () {
    let idName = $(this).attr("href");
    let offset = $(idName).offset();
    $("html, body").animate(
      {
        scrollTop: offset.top
      },
      1000
    );
  });
  $("#button-aboutus").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#info").offset().top
      },
      1000
    );
  });
  $("#button-connect").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".forms").offset().top
      },
      1000
    );
  });

  //                   //
  //  FORMS VALIDATION //
  //                   //

  $("form").submit(function () {
    if (
      fio.val() != "" &&
      email.val() != "" &&
      phone.val() != "" &&
      message.val() != ""
    ) {
      // alert("Good idea!");
    } else {
      if (fio.val() == "") {
        fio.css("border-color", "red");
      } else {
        fio.css("border-color", "");
      }
      if (email.val() == "") {
        email.css("border-color", "red");
      } else {
        email.css("border-color", "");
      }
      if (phone.val() == "") {
        phone.css("border-color", "red");
      } else {
        phone.css("border-color", "");
      }
      if (message.val() == "") {
        message.css("border-color", "red");
      } else {
        message.css("border-color", "");
      }
      return false;
    }
  });

  $(fio).keyup(function () {
    let name = fio.val();
    let firstLetter = name[0];
    let allLetter = name.slice(1);
    // let index = fio.val().length();
    if (fio.val() == "") {
      fio.css("border-color", "red");
    } else {
      let string = firstLetter.toUpperCase() + allLetter.toLowerCase();
      fio.css("border-color", "");
      fio.val(string);
    }
  });
  $(email).keyup(function () {
    if (email.val() == "") {
      email.css("border-color", "red");
    } else {
      email.css("border-color", "");
    }
  });
  $(phone).keyup(function () {
    if (phone.val() == "") {
      phone.css("border-color", "red");
    } else {
      phone.css("border-color", "");
    }
  });
  $(message).keyup(function () {
    if (message.val() == "") {
      message.css("border-color", "red");
    } else {
      message.css("border-color", "");
    }
  });
  $.getScript("../js/slider.js", function () {
    slider(".slider");
  });
});
