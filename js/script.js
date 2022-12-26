//$('#copy').click(function(){
	//$('#txt').select();
	//document.execCommand('copy');
	//return false;
//})

//var copyTextareaBtn = document.querySelector('a.copy');

$('.copy').click(function(){
  var copyTextarea = document.querySelector('.js-copytextarea');
  text = $(this).parent().find('p').text();
  $('.js-copytextarea').val(text);
  copyTextarea.focus();
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    //alert('Copying text command was ' + msg);
  } catch (err) {
    //console.log('Oops, unable to copy');
  }
  return false;
});


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