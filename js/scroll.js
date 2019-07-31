$(window).scroll(function() {
    if ($(this).scrollTop() > 100 ) {
        $('.wsptop:hidden').stop(true, true).fadeIn();
        
        
    } else {
        $('.wsptop').stop(true, true).fadeOut();
    }
 
});

/*SCROLL MENU*/
$('#home').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#section-home').offset().top
    }, 2000);
});

$('#about').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#section-about').offset().top - 70
    }, 2000);
   
});
$('#projects').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#section-feature').offset().top - 70
    }, 2000);
});

$('#services').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#section-service').offset().top - 70
    }, 2000);
});

$('#contact').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#section-contact').offset().top - 70
    }, 2000);
});

$('#btnContact').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#section-contact').offset().top - 70
    }, 2000);
});

$('#btnContactFree').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#section-contact').offset().top - 70
    }, 2000);
});

$('#btnContact3').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#section-contact').offset().top - 70
    }, 2000);
});