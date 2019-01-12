$(document).ready(function () {

    //AOS-animate on scroll
    AOS.init();

    // MATERIALIZE INITIALIZATION
    $('.sidenav').sidenav()
        .on('click tap', "#mylink", () => {
            $('.sidenav').sidenav('close');
        });

    $(".dropdown-trigger").dropdown();


    // FOR aboutLink and teamLink click to scroll part
    $('#aboutLink').on('click', function () {
        // alert('clicked')
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 64
        }, 1500);
    })
    $('#aboutLinkMob').on('click', function () {
        // alert('clicked')
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 64
        }, 1500);
    })
    $('#teamLinkMob').on('click', function () {
        // alert('clicked')
        $('html, body').animate({
            scrollTop: $("#team").offset().top - 64
        }, 1500);
    })
    $('#teamLink').on('click', function () {
        // alert('clicked')

        $('html, body').animate({
            scrollTop: $("#team").offset().top - 64
        }, 1500);
    })


    //ADDING BLACK BG_COLOR TO NAVBAR AFTER 300px SCROLL FROM TOP
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.nav-wrapper').addClass('black');
            // $('.brand-logo > #mylogo').addClass('animated zoomIn');
        }
        else {
            $('.nav-wrapper').removeClass('black');
            // $('.brand-logo > #mylogo').removeClass('animated zoomIn');
        }
    });

    // FORCE PAGE TO LOAD FROM TOP (0,0) ON EVERY LOAD
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    //CLICK TO SCROLL DOWN
    $('.down').on('click', function () {
        $("html").scrollTop(0);
        // body...
        $('html,body').animate({
            scrollTop: $('main').offset().top - 50
        }, 1000);
    })
});

function toggleDd() {
    // alert();
    $('.dropdown-trigger').removeClass('closed').addClass('opened').dropdown('open');

    if ($('.dropdown-trigger').has('opened')) {
        $('.dropdown-trigger').removeClass('opened').addClass('closed');
        $('.dropdown-trigger').dropdown('close');
    }


}