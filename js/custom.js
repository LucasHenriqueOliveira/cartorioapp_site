// --------------------------------------------------------
//	Navigation Bar
// -------------------------------------------------------- 	
$(window).scroll(function(){	
	"use strict";	
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){		
		$(".navbar").addClass("scroll-fixed-navbar");				
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar");
	}
});

// --------------------------------------------------------
//	Smooth Scrolling
// --------------------------------------------------------
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});

$('#post-btn').click( function() {

    if($.trim($('#name').val()) == '' && $.trim($('#email').val()) == ''){
        return false;
    }

    $.ajax({
        url: 'form.php',
        type: 'post',
        data: $('form#myForm').serialize(),
        success: function(data) {
            alert('Obrigado por assinar nossa newsletter.');
            $('#name').val("");
            $('#email').val("");
        }
    });
});
