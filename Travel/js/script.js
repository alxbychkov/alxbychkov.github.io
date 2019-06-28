// $('.navigation').addClass('navigation-change');
// $('.navigation').css('background','yellow');
// $('.navigation a').css('color','red');
// $('.popup').css('display', 'none');
$('#message-box-button').click(function () {
    console.log();
    $('.popup').fadeIn(700);
    $('.popup').css('display', 'flex');

});
$('.escape').click(function () {
    // $('.popup-content').css('transition','.9s');

    // $('.popup').css('display','none');
    $('.popup').slideUp(700);
});
$('.button a').click(function () {
    $('.popup').slideDown(700);
    $('.popup').css('display', 'flex');
});

//slidetoggle
//this()
//next()
//find()
//parents()
//prev()
//animate

$('.flex-info-item h3').click(function () {
    $(this).next().slideToggle(300);
});

$('.flex-info-item img').click(function () {
    $(this).parents('.flex-info-item').find('p').slideToggle(300);
});

$('#arrow_up').click(function () {
    $('html, body').animate({
        'scrollTop': '0'
    }, 1000);
});

$('.about').click(function () {
    var offset = $('.blog-info').offset();
    $('html, body').animate({
        'scrollTop': offset.top
    }, 1000);
    return false;
});

//скролл до блоков через пункты меню

// $('a').parents('nav').click(function(){
    
// });

// 1) повесить обработчик событий клик на ссылки в теге нав
// 2) Получить содержимое атрибута href
// 3) Найти элемент с индификатором
// 4) Посчитать положение элемента на странице
// 5) Вызвать фунцию скрола для элемента

$('nav a').click(function(){
    let idName = $(this).attr('href');
    let offset = $(idName).offset();
    let idHeight = $('header').innerHeight();
    $('html, body').animate({
        'scrollTop': offset.top - idHeight
    }, 1000);
    console.log(offset.top-idHeight*2);
});

$(document).ready(function () {
    $('.cockie-wrap').slideToggle(2000);
    $('.cockie-button, .cockie-cancel').click(function () {
        $('.cockie-wrap').animate({
            'left' : 2000,
            'height' : 0,
            'opacity' : .4
        },1500);
    });
});