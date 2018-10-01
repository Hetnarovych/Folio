$(window).on("scroll", function () {
    var scro = $(window).scrollTop();
    var scr = 0;
    var scr2 = 449;
    var scr3 = 811;
    var scr4 = 1678;
    var scr5 = 2073;
    if ($(window).scrollTop() >= scr && scro <= scr2) {
        $('a[href="#hm"]').addClass('active');
    } else $('a[href="#hm"]').removeClass('active');
    if (scro > scr2 && scro <= scr3) {
        $('a[href="#sci"]').addClass('active');
    } else $('a[href="#sci"]').removeClass('active');
    if (scro > scr3 && scro <= scr4) {
        $('a[href="#wor"]').addClass('active');
    } else $('a[href="#wor"]').removeClass('active');
    if (scro > scr4 && scro <= scr5) {
        $('a[href="#con"]').addClass('active');
    } else $('a[href="#con"]').removeClass('active');
    if (scro > scr5) {
        $('#m5').addClass('active');
    } else $('#m5').removeClass('active');

});

$(document).on('click', 'div', function () {
    $(this).addClass('change').siblings().removeClass('change')
});
$(document).ready(function () {
    $(window).scroll(function () {
        $('.block').css("opacity", 0.8 - $(window).scrollTop() / 500)
    })
})

$(document).ready(function () {
    $(window).scroll(function () {
        $('.box_anim').css("opacity", 1 - $(window).scrollTop() / 1300)
    });
});

$('.wraper .nav ul li a').click(function () {
    var element = $(this).attr('href');
    var dist = $(element).offset().top;
    $('html, body').animate({
        'scrollTop': dist
    }, 1000);

    return false;
});

AOS.init();

window.onscroll = function () {
    myFunction()
};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset > 400) {
        nav.classList.add("fix");
    } else {
        nav.classList.remove("fix")
    };
};

$(document).ready(function(){
    $('.box_item').tilt({
        maxTilt: 40,
        glare: true,
        maxGlare: .3,
        animation: 1000,
    });
});
                 