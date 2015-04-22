$('.slider').slick({
    autoplay: true,
    prevArrow : '<span class="slide-nav prev"></span>',
    nextArrow: '<span class="slide-nav next"></span>'
});


$('.reply').slick({
    autoplay: true,
    arrows: false
});

$('.reply-more').click(function() {
    $('.reply').slick('slickNext');
});

$(".popup").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$('.btn-close').click(function(){
    $.fancybox.close();
});


$('.tabs').tabs();


$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $('.topnav').addClass('bg');
        } else {
            $('.topnav').removeClass('bg');
        }
    });
});