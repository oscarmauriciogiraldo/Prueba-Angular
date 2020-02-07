$(document).ready(function(){
	$(' button:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$(' button ').click(function(){
		$(' button ').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});