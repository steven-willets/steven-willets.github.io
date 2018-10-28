$('.inactive').click(function(){
	$(this).removeClass('inactive').addClass('active')
	$('.page-container').addClass('modal-open')
});
$('.close, #overlay').click(function(e){
	e.stopPropagation()
	e.preventDefault()
	$('.active').removeClass('active').addClass('inactive')
	$('.page-container').removeClass('modal-open')
});