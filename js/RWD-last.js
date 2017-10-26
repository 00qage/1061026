$(document).ready(function () {
    $('.showmenu').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('menu-show');
        $('.banner-box').fadeToggle(700);
    });
});