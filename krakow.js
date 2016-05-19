
 $(document).ready(function() {
  
    $('a').hover(function(){
	  $(this).toggleClass("active");
	}); 	
	
 	 var view = 0; // 0 == main/visit; 1 == culture; 2 == study; 3 == night life;
 
	$("#big-two").css("opacity", 0 );		 
	$("#big-three").css("opacity", 0 ); 
    $("#big-four").css("opacity", 0 );
    
    // $("#visit").css("color", "#FFFF00");	----- the hover' don't work yet after changing the color of the link                                    // I'll try to fix it, the work to be continued...      
	
    $("#culture").bind('click', function () {
		if(view == 0) {
		   $("#big-one").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-two").css("display", "block").fadeTo( "slow", 1 );	
		}
     /*      $("#visit").css("color", "#FFFFFF");
		  $("#culture").css("color", "#FFFF00");
		   
		} else if (view == 2) {
		   $("").fadeTo( "slow", 0 ).css("display", "none");		
		   $("").css("display", "block").fadeTo( "slow", 1 );			   
		}
	view = 1;	*/ 
	});	
	
});