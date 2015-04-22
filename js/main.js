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


