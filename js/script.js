$('#copy').click(function(){
	$('#txt').select();
	document.execCommand('copy');
	return false;
})

$('.country_but').click(function(){
   let index = $(this).attr("data-tag") 
   $(".default_tab").fadeOut(0)
   $('.tab' + index).fadeIn(200).css('display', 'flex');
   $('.country_but').removeClass('active')
   $(this).addClass('active')
   return false
})

$('.toggle_switch .page').click(function(){
	$('.toggle_switch .page').removeClass('active')
	$(this).addClass('active')
	return false
})