// Tile Grid

function gridFlexHeight(){
    $('#tile-grid').css('min-height', $('.active-grid').outerHeight(true))
};

$('.grid-tab').click(function(e){
    e.preventDefault();
    
    $('.grid-tab').removeClass('active-tab');
    $('.tile-container').removeClass('active-grid')
    
    $(e.target).addClass('active-tab');
    
    var $activeTab = $('.active-tab');
    var $slideBox = $('#sliding-box');	
    var leftOffset = $activeTab.offset().left - $('.grid-tab:first-child').offset().left;


    $('#' + $activeTab.attr('data-target')).addClass('active-grid')
    gridFlexHeight()
    $slideBox.css('margin-left', leftOffset)
    $slideBox.width($activeTab.outerWidth(true))
});

$(document).ready(function(){
    gridFlexHeight();
});
$(window).load(function(){
    gridFlexHeight();
});


// Lightbox

function checkArrows(target) {
	if (target.next().length == 0) {
		$('#next-slide').hide()
	}
	if (target.prev().length == 0) {
		$('#prev-slide').hide()
	}
}

function sizeControls(target) {
    var $slide = target.find('.tile-content')
    $('#controls').css({ 'height': $slide.height(), 'width': $slide.width() })
}

function openSlide(target){
	target.addClass('active').removeClass('inactive');
	$('body').addClass('modal-open');
	$('.move-slide').show();
	sizeControls(target)
	checkArrows(target)
}

function moveSlide(direction) {
    $('.active').addClass('current')
    $('.move-slide').show();
    var $current = $('.current')
    var $next = direction == 'next' ? $current.next() : $current.prev();
    checkArrows($next)
    sizeControls($next)
    $current.addClass('inactive').removeClass('active current');
    $next.addClass('active').removeClass('inactive')
}

function closeSlide() {
    $('.active').removeClass('active').addClass('inactive');
    $('body').removeClass('modal-open');
}

$('.inactive').click(function(){
	openSlide($(this))
});

$('.move-slide').click(function(e){
	e.stopPropagation();
	e.preventDefault();
    moveSlide($(this).attr('href'))
});

$('#close-slide, #overlay').click(function(e){
	e.stopPropagation();
	e.preventDefault();
    closeSlide()
});

$(window).resize(function () {
    var $active = $('.active')
    if ($active.length) {
        sizeControls($active)
    }
});

//Keyboard navigation

$(document).keydown(function (e) {
    if (e.keyCode == 37 && $('#prev-slide').is(":visible")) { // Left Arrow
        moveSlide('prev')
        return false;
    }
    if (e.keyCode == 39 && $('#next-slide').is(":visible")) { // Right Arrow
        moveSlide('next')
        return false;
    }
    if (e.keyCode == 27 && $('.active').length) { // Escape
        closeSlide()
        return false;
    }
    if (e.keyCode == 13 && $('.inactive').is(":focus")) { // Enter
		openSlide($('.inactive:focus'))
        return false;
    }	
});

// Mobile Navigation

$(document).on("pagecreate",".page-container",function(){
	  $(".tile-content").on("swipeleft",function(){
		if ($(this).parent().next().length) 
			moveSlide('next')
	  });
	  $(".tile-content").on("swiperight",function(){
		if ($(this).parent().prev().length) 
			moveSlide('prev')
	  });  
});