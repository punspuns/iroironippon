$(window).scroll(function() {
    var winHeight = $(this).height();
    var scrollTop = $(this).scrollTop();
    
    var elemHeight = $(".kanji").height();
    var elementTop = $(".kanji").position().top; 

     
    if (elementTop < scrollTop + winHeight && scrollTop > elementTop + elemHeight){
		$("#samurai").fadeOut();
	}
		
    else{
		$("#samurai").fadeIn();
	}
    
    
});