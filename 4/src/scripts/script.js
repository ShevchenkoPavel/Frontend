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
      
});

