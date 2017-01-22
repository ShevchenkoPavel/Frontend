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
	if ( $(window).width() >= 1024) {
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
	
	mail.blur(function(){
		if(mail.val() != ''){
				if(mail.val().search(pattern) == 0){
					$('#valid').text('Подходит');
					$('#submit').attr('disabled', false);
					mail.removeClass('error').addClass('ok');
				}else{
					$('#valid').text('Не подходит');
					$('#submit').attr('disabled', true);
					mail.addClass('ok');
				}
			}else{
				$('#valid').text('Поле e-mail не должно быть пустым!');
				mail.addClass('error');
				$('#submit').attr('disabled', true);
			}
	});
});


$(document).ready(function(){
  var pattern = /^[a-zA-Z]+$/i;
  var mail = $('#lastName');
	
	mail.blur(function(){
		if(mail.val() != ''){
				if(mail.val().search(pattern) == 0){
					$('#valid').text('Подходит');
					$('#submit').attr('disabled', false);
					mail.removeClass('error').addClass('ok');
				}else{
					$('#valid').text('Не подходит');
					$('#submit').attr('disabled', true);
					mail.addClass('ok');
				}
			}else{
				$('#valid').text('Поле e-mail не должно быть пустым!');
				mail.addClass('error');
				$('#submit').attr('disabled', true);
			}
	});
});


$(document).ready(function(){
  var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  var mail = $('#mail');
	
	mail.blur(function(){
		if(mail.val() != ''){
				if(mail.val().search(pattern) == 0){
					$('#valid').text('Подходит');
					$('#submit').attr('disabled', false);
					mail.removeClass('error').addClass('ok');
				}else{
					$('#valid').text('Не подходит');
					$('#submit').attr('disabled', true);
					mail.addClass('ok');
				}
			}else{
				$('#valid').text('Поле e-mail не должно быть пустым!');
				mail.addClass('error');
				$('#submit').attr('disabled', true);
			}
	});
    
  $( function() {
  $( "#datepicker" ).datepicker();
  } );
	
	  Inputmask({"mask": "+7 (999) 999-9999"}).mask("#phone");
  	 
});