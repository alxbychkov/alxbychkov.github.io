$(document).ready(function () {
    $.getScript("js/slider.js", function () {
        slider(".slider");
    });
    $('.navmenu a').click(function () {
        $('.navmenu').find('.active').removeClass('active');
        $(this).addClass('active');

    });
    $('#burger').click(function (e) {
        let display = $('.navmenu').css('display');
        if (display == 'none') {
            console.log('net');
            $('.navmenu').css('display', 'flex');

        }
        if (display == 'flex') {
            console.log('da');
            $('.navmenu').css('display', 'none');
        }
        console.log(display);
    });
    $(window).resize(function () {
        if ($(window).width() > 700) {
            $('.header .navmenu').css('display', 'flex');
        } else {
            $('.header .navmenu').css('display', 'none');
        }
    });

});


