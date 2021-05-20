
$(window).scroll(function() {
    var winHeight = $(this).height();
    var scrollTop = $(this).scrollTop();
    
    var elemHeight = $("#kanji-1").height();
    var elementTop = $("#kanji-1").position().top; 


     
    if (elementTop < scrollTop + winHeight && scrollTop > elementTop + elemHeight){
		  $("#samurai").fadeOut();
      $("#samurai").hide();
	}
		
    else{
		  $("#samurai").fadeIn();
	}
    
    
});

$(window).scroll(function() {
  var winHeight = $(this).height();
  var scrollTop = $(this).scrollTop();

  var elemHeight2 = $("#kanji-2").height();
  var elementTop2 = $("#kanji-2").position().top; 

  if (elementTop2 < scrollTop + winHeight && scrollTop < elementTop2 + elemHeight2){
    $("#yokai").fadeIn();
}
  
  else{
    $("#yokai").fadeOut();
    $("#yokai").hide();
}
  
  
});

