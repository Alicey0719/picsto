jQuery(function () {
    let pageTop = $('#page_Top'); //ID
    pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { //100pxスクロールで表示
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //500msでもどる
        return false;
    });
});