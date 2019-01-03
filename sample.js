$(document).ready(function () {
    $('.sidenav').sidenav();

    $('.desktop-dropdown').on('click', function () {
        $('.sidenav').sidenav(close());
    });
    $(".dropdown-trigger").dropdown();

    //
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $('.nav-wrapper').addClass('black');
        }
        else {
            $('.nav-wrapper').removeClass('black');
        }
    });
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    //CLICK TO SCROLL DOWN
    $('.down').on('click', function () {
        $("html").scrollTop(0);
        // body...
        $('html,body').animate({
            scrollTop: $('main').offset().top - 100
        }, 1000);
    })
});