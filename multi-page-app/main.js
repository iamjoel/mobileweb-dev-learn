"use strict";
$(document).ready(function(argument) {
    var pageNum = 0;
    var $pages = $('.page');
    var pageTotalNum = $pages.length;
    $(".main").swipeUp(function() {
        if (pageNum >= pageTotalNum - 1) {
            return;
        }
        var $curr = $pages.eq(pageNum);
        var $next = $pages.eq(pageNum + 1);
        $curr.css({
            top: '-100%'
        });
        $next.css({
            top: 0
        });

        pagesAnim[pageNum] && pagesAnim[pageNum].hide($curr);
        pagesAnim[pageNum + 1] && pagesAnim[pageNum + 1].show($next);

        pageNum++;
    }).swipeDown(function() {
        if (pageNum <= 0) {
            return;
        }
        var $curr = $pages.eq(pageNum);
        var $next = $pages.eq(pageNum - 1);
        $curr.css({
            top: '100%'
        });
        $next.css({
            top: 0
        });

        pagesAnim[pageNum] && pagesAnim[pageNum].hide($curr);
        pagesAnim[pageNum - 1] && pagesAnim[pageNum - 1].show($next);

        pageNum--;
    });

    var pagesAnim = [{
        show: function($el) {
            $('.describe', $el).addClass('out-look-it');
        },
        hide: function($el) {
            $('.describe', $el).removeClass('out-look-it');
        }
    },
    {
        show: function($el) {
            $('.need-item', $el).css('margin-left',0);
        },
        hide: function($el) {
            $('.need-item', $el).css('margin-left','');
        }
    },
    {
        show: function($el) {
            $('.describe', $el).fadeIn(2000);
        },
        hide: function($el) {
            $('.describe', $el).fadeOut();;
        }
    }];

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
