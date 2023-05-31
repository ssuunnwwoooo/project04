$(function () {
    $('.main_slide').slick({
        arrows: false,
        // vertical 밑에서 위로 올라가는거 
        // fade 깜박거리면서 사라지는거
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });


    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.main_visual .arrows .play').on('click', function () {
        $('.main_slide').slick('play');
        $(this).addClass('on').siblings().removeClass('on')
    });
    $('.main_visual .arrows .pause').on('click', function () {
        $('.main_slide').slick('pause');
        $(this).addClass('on').siblings().removeClass('on')
    });


});
