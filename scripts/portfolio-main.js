function checkArrows(target){
	if (target.next().length == 0) {
		$('#next-slide').hide()
	}
	if (target.prev().length == 0) {
		$('#prev-slide').hide()
	}
}

$('.inactive').click(function(){
	var $slide = $(this).find('.tile-content')
	$(this).addClass('active').removeClass('inactive');
	$('body').addClass('modal-open');
	$('.move-slide').show();
	$('#controls').css({'height': $slide.height(), 'width': $slide.width()})
	checkArrows($('.active'))
});

$('.move-slide').click(function(e){
	e.stopPropagation();
	e.preventDefault();
	$('.active').addClass('current')
	$('.move-slide').show();
	var $current = $('.current'),
		$next = $(this).attr('href') == 'next' ? $current.next() : $current.prev();
	checkArrows($next)
	$current.addClass('inactive').removeClass('active current');
	$next.addClass('active').removeClass('inactive')

});

$('#close-slide, #overlay').click(function(e){
	e.stopPropagation();
	e.preventDefault();
	$('.active').removeClass('active').addClass('inactive');
	$('body').removeClass('modal-open');
});

