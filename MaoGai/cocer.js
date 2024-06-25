window.addEventListener('scroll', function() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop; // 获取滚动距离
    var parallaxSpeed = 0.5;

    var star1 = document.querySelector('.star1');
    var newTop1 = 980 - scrollPos * parallaxSpeed;
    if (newTop1 < 0) newTop1 = 0;
    cloud1.style.top = newTop1 + 'px';

    var star2 = document.querySelector('.star2');
    var newTop2 = 2600 - scrollPos * parallaxSpeed;
    if (newTop2 < 0) newTop2 = 0;
    cloud2.style.top = newTop2 + 'px';

    var star3 = document.querySelector('.star3');
    var newTop3 = 2300 - scrollPos * parallaxSpeed;
    if (newTop3 < 0) newTop3 = 0;
    cloud3.style.top = newTop3 + 'px';
});
