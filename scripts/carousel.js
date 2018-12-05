function rotateSlides(direction) {
	var $active = $('.active');
	var $next
	var wrap
	if (direction == 'prev') {
		$next = $active.prev('.item')
		wrap = 'last'
	} else {
		$next = $active.next('.item')
		wrap = 'first'
	}
	if (!$next.length) {
		$next = $('.item:' + wrap)
	}
	$next.addClass(direction)
	$active.addClass(direction)
	//Delay to account for .3s transition in css
	setTimeout(function () {
		$next.addClass('active').removeClass(direction);
		$active.removeClass('active').removeClass(direction);
	}, 300);
}

(function () {
	var $item = $('.item');
	$item.each(function(i,e){
		var $next = $(e).next()
		if (!$next.length) {
			$next = $('.item:first')
		}
		$next.find('.slide:first').clone().appendTo($(e))
	});
}());

//Mouse Nav
$('.move-slide').click(function(e){
	e.preventDefault();
	rotateSlides($(this).attr('href').replace('#', ''))
});

//Keyboard Nav
$(document).keydown(function(e){
	if (e.keyCode == 13 && $('.move-slide').is(":focus")) { // Remove KeyDown
		e.preventDefault();
	}	
});
$(document).keyup(function(e){
	if (e.keyCode == 37 || (e.keyCode == 13 && $('#prev-slide').is(":focus"))){ // Left Arrow + Enter
		rotateSlides('prev')
		return false;
	}
	if (e.keyCode == 39 || (e.keyCode == 13 && $('#next-slide').is(":focus"))){ // Right Arrow + Enter
		rotateSlides('next')
		return false;
	}
});

//Mobile Nav
$(document).on("pagecreate",".page-container",function(){
	var $carousel = $('#carousel-inner')
	$carousel.on("swipeleft",function(){
		rotateSlides('next')
	});
	$carousel.on("swiperight",function(){
		rotateSlides('prev')
	});  
});