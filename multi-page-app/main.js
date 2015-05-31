"use strict";
$(document).ready(function(argument) {
    var pageNum = 0;
    var $pages = $('.page');
    var pageTotalNum = $pages.length;
    $(".main").swipeLeft(function() {// 下一张
        if (pageNum >= pageTotalNum - 1) {
            return;
        }
        var $curr = $pages.eq(pageNum);
        var $next = $pages.eq(pageNum + 1);
        $curr.css({
            left: '-100%'
        });
        $next.css({
            left: 0
        });

        pageNum++;
    }).swipeRight(function() {
        if (pageNum <= 0) {
            return;
        }
        var $curr = $pages.eq(pageNum);
        var $next = $pages.eq(pageNum - 1);
        $curr.css({
            left: '100%'
        });
        $next.css({
            left: 0
        });


        pageNum--;
    });


    // 禁止滚轮
    $(document).on('mousewheel', preventScroll); // 非火狐
    $(document).on('DOMMouseScroll', preventScroll); // firefox
    function preventScroll(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.cancelBubble = false;
        return false;
    }

});
