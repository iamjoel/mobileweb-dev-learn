$(document).ready(function(argument) {
	var pageNum = 1;
	var pageTotalNum = $('.').length;
    $(".main").swipeUp(function() {
        if(pageNum > pageTotalNum){
        	return;
        }
    }).swipeDown(function() {
        if(pageNum <= 1){
        	return;
        }
    });

    $("body").on('touchmove', function(event) {
        event.preventDefault();
    });
    document.addEventListener("touchstart", function(e) {}, false);

});
