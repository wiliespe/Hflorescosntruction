$(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
        $('header').addClass('header-efect ')
    } else {
        $('header').removeClass('header-efect ')
    }
})

var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
var submenu = document.getElementById('submenu');
btnMenu.addEventListener('click', function () {
    nav.classList.toggle('movimiento') 
});

$(document).ready(function () {
    $('.menu_on').click(function () {
        $('#btn-menu').toggleClass('visible_menu');
    })
});

$(document).ready(function () {
    $('.sub-menu').click(function () {
        $('#nav').removeClass('movimiento');
        $('#btn-menu').removeClass('visible_menu');
    })
});

var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});

var classNames = [];
if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) classNames.push('device-ios');
if (navigator.userAgent.match(/android/i)) classNames.push('device-android');

var html = document.getElementsByTagName('html')[0];

if (classNames.length) classNames.push('on-device');
if (html.classList) html.classList.add.apply(html.classList, classNames);
