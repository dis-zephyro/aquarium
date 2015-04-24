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

$(".showcase-image a").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$(".popup, .btn-buy").fancybox({
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


$('.more').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str,300, {offset:-130});
    return false;
});


$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str,300, {offset:-130});
    return false;
});
