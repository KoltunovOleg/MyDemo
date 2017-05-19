$(function() {

//Gallery
$('#thumbs').delegate('img','click', function(){
	$('#largeImage').attr('src',$(this).attr('src').replace('thumb','lg'));
	$('#thumbs img').css('border', '1px solid gray')
	$(this).css('border', '1px solid #e6e6e6');
});
//---------------------------------------------//

//Menu
// $('.main-mnu a').on('click', function(e){
//     e.preventDefault();
//   });
    
//   $('.main-mnu li').hover(function () {
//      clearTimeout($.data(this,'timer'));
//      $('ul',this).stop(true,true).slideDown(200);
//   }, function () {
//     $.data(this,'timer', setTimeout($.proxy(function() {
//       $('ul',this).stop(true,true).slideUp(200);
//     }, this), 100));
//   });
function hideallDropdowns() {
            $(".dropped .submnu").hide();
            $(".dropped").removeClass('dropped');
            $(".dropped .submnu").unbind("click");
        }

        function showDropdown(el) {
            var el_li = $(el).parent().addClass('dropped');
            el_li
                .find('.title')
                .click(function () {
                    hideallDropdowns();
                })
                .html($(el).html());

            el_li.find('.submnu').show();
        }

        $(".drop-down").click(function(){
            showDropdown(this);
        });

        $(document).mouseup(function () {
            hideallDropdowns();
        });
	
//------------------------------------------//

//Toggle Menu

	$(".toggle-mnu").click(function() {
  $(this).toggleClass("active");     	//Добавляется класс active для выполнения кода css
  $(".hidden-mnu").slideToggle();				//Выпадение-скрытие .main-mnu
  return false;
});


	
//------------------------------------------//


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
