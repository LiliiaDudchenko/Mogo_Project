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




$('.header_menu').on('click', function () {
    $('.header_menu-hamburger').toggleClass('header_menu-hamburger-animate');
    $(".navigation ul").slideToggle(400);
})

//Scroll to anchor
$("a.scrollLink").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 500);
});