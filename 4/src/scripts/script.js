$(document).ready(function () {

  nunjucks.configure({
    autoescape: true,
    web: {
      async: true
    }
  });

  $.ajax({
    url: "./mockapi/getAllArticles.json",
    success: function(data, status) {
        nunjucks.render('./partials/article.html', data, function (err, res) {
            $('.js-articles').append(res);      
        });        
    }
  });
	
});


function hamburger() {
	if ( $(window).width() >= 768) {
		$( ".burger" ).hide();
		$( ".cross" ).hide();
		$( ".burger-menu" ).hide();
	}
	else { $( ".burger" ).show(); }
}

$(document).ready(hamburger);
$(window).resize(hamburger);
$(window).load(hamburger);

$( ".cross" ).hide();

$( ".burger" ).click(function() {
$( ".burger-menu" ).slideToggle( "slow", function() {
$( ".burger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".burger-menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".burger" ).show();
});
});


$(document).ready(function(){
  var pattern = /^[a-zA-Z]+$/i;
  var mail = $('#firstName');
	var hint = $('#namefirsthint');
	var emptyhint = $('#nameemptyhint');
	hint.addClass('hideobj');
	emptyhint.addClass('hideobj');
	
	mail.blur(function(){
		if(mail.val() != ''){
				if(mail.val().search(pattern) == 0){
					$('#valid').text('Подходит');
					$('#submit').attr('disabled', false);
					mail.removeClass('error').addClass('ok');
					hint.removeClass('showobj').addClass('hideobj');
					emptyhint.removeClass('showobj').addClass('hideobj');
				}else{
					$('#valid').text('Не подходит');
					$('#submit').attr('disabled', true);
					mail.addClass('error');
					hint.removeClass('hideobj').addClass('showobj');
					emptyhint.removeClass('showobj').addClass('hideobj');
				}
			}else{
				$('#valid').text('Поле e-mail не должно быть пустым!');
				mail.addClass('error');
				hint.removeClass('showobj').addClass('hideobj');
				emptyhint.removeClass('hideobj').addClass('showobj');
				$('#submit').attr('disabled', true);
			}
	});
});


$(document).ready(function(){
  var pattern = /^[a-zA-Z]+$/i;
  var mail = $('#lastName');
    var hint = $('#lastnamefirsthint');
	var emptyhint = $('#lastnameemptyhint');
	hint.addClass('hideobj');
	emptyhint.addClass('hideobj');
	
	mail.blur(function(){
		if(mail.val() != ''){
				if(mail.val().search(pattern) == 0){
					$('#valid').text('Подходит');
					$('#submit').attr('disabled', false);
					mail.removeClass('error').addClass('ok');
					hint.removeClass('showobj').addClass('hideobj');
					emptyhint.removeClass('showobj').addClass('hideobj');
				}else{
					$('#valid').text('Не подходит');
					$('#submit').attr('disabled', true);
					mail.addClass('error');
					hint.removeClass('hideobj').addClass('showobj');
					emptyhint.removeClass('showobj').addClass('hideobj');
				}
			}else{
				$('#valid').text('Поле e-mail не должно быть пустым!');
				mail.addClass('error');
				$('#submit').attr('disabled', true);
				hint.removeClass('showobj').addClass('hideobj');
				emptyhint.removeClass('hideobj').addClass('showobj');
			}
	});
});


$(document).ready(function(){
  var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  var mail = $('#mail');
	var hint = $('#mailfirsthint');
	var emptyhint = $('#mailemptyhint');
	hint.addClass('hideobj');
	emptyhint.addClass('hideobj');
	
	mail.blur(function(){
		if(mail.val() != ''){
				if(mail.val().search(pattern) == 0){
					$('#valid').text('Подходит');
					$('#submit').attr('disabled', false);
					mail.removeClass('error').addClass('ok');
					hint.removeClass('showobj').addClass('hideobj');
					emptyhint.removeClass('showobj').addClass('hideobj');
				}else{
					$('#valid').text('Не подходит');
					$('#submit').attr('disabled', true);
					mail.addClass('error');
					hint.removeClass('hideobj').addClass('showobj');
					emptyhint.removeClass('showobj').addClass('hideobj');
				}
			}else{
				$('#valid').text('Поле e-mail не должно быть пустым!');
				mail.addClass('error');
				$('#submit').attr('disabled', true);
				hint.removeClass('showobj').addClass('hideobj');
				emptyhint.removeClass('hideobj').addClass('showobj');
			}
	});
    
  $( function() {
  $( "#datepicker" ).datepicker();
  } );
	
	  Inputmask({"mask": "+7 (999) 999-9999"}).mask("#phone");
  	 
});