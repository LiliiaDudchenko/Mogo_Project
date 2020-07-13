$(document).ready(function () {
    //прикрепляем клик по заголовкам acc-head
    $('#accordeon .acc-head').on('click', f_acc);
});

function f_acc() {

    $('#accordeon .acc-body').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(500);





}

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    // loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }



});


// $('.navigation').on('click', '.mobile_menu', function () {
//     $(".navigation ul").slideToggle(400);
// });

// $('.header_menu').on('click', function () {
//     $('.header_menu-hamburger').toggleClass('header_menu-hamburger-animate');
//     $('.navigation').toggleClass('navigation-active');
// }) 

$('.header_menu').on('click', function () {
    $('.header_menu-hamburger').toggleClass('header_menu-hamburger-animate');
    $(".navigation ul").slideToggle(400);
})