$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});


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

$(".popup, .btn-buy, .shipping-link").fancybox({
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
