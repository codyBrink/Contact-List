//global variables for table rows and header colors
var thColor = "#39FF14";
var trEvenColor = "#9900FF";
var trOddColor = "#FF0000";
$(document).ready(function(){
	//ensures that the colors set by the user is updated 
	$("html").mousemove(function(){
		$("th").css("background-color", thColor);
		$("tr:even").css("background-color", trEvenColor);
		$("tr:odd").css("background-color", trOddColor);
	});

	
	//hides the th, ev, and od icons untill they are called
	$("#second_th").hide();
	$("#second_odd").hide();
	$("#second_evn").hide();
	
	//makes the create contact box move up when mouse is not in it's area
	$("#main").mouseleave(function(){
		$(this).animate({top: '-120px'});
	});
	
	//slides the contact box back down for use
	$("#main").mouseover(function(){
		$(this).animate({top: '20px'});
		$(this).stop();
	});
	
	//starts animation for left-side panel
	$("#left-panel").mouseleave(function(){
		$("#orderLabel").hide(700);
		$("#limitLabel").hide(700);
		$("#even_color").slideUp(700);
		$("#odd_color").slideUp(700);
		$("#th_color").slideUp(700);
		$("#second_th").show(700).css("border-color", thColor);
		$("#second_evn").show(700).css("border-color", trEvenColor);
		$("#second_odd").show(700).css("border-color", trOddColor);
	});
	
	//brings back full left-side panel 
	$("#left-panel").mouseenter(function(){
		$("#second_evn").hide(700);
		$("#second_odd").hide(700);
		$("#second_th").hide(700);
		$("#th_color").slideDown(700);
		$("#odd_color").slideDown(700);
		$("#even_color").slideDown(700);
		$("#limitLabel").show(700);
		$("#orderLabel").show(700);
		$(this).stop();
		
	});

``	//ensures colors still are assigned if user pressses enter instead of clicking	
	$("#subbtn").keyup(function(){
		$("th").css("background-color", thColor);
		$("tr:even").css("background-color", trEvenColor);
		$("tr:odd").css("background-color", trOddColor);
	});
	
	//start of color selection for table header
	$("#grn").click(function(){
		thColor = "#39FF14";
		$("th").css("background-color", thColor);
		$("#th_color").css("border-color", thColor);
	});
	$("#red").click(function(){
		thColor = "#FF0000";
		$("th").css("background-color", thColor);
		$("#th_color").css("border-color", thColor);
	});
	$("#blu").click(function(){
		thColor = "#099FFF";
		$("th").css("background-color", thColor);
		$("#th_color").css("border-color", thColor);
	});
	$("#ppl").click(function(){
		thColor = "#9900FF";
		$("th").css("background-color", thColor);
		$("#th_color").css("border-color", thColor);
	});
	$("#pnk").click(function(){
		thColor = "#FF00CC";
		$("th").css("background-color", thColor);
		$("#th_color").css("border-color", thColor);
	});
	$("#org").click(function(){
		thColor = "#FF6600";
		$("th").css("background-color", thColor);
		$("#th_color").css("border-color", thColor);
	});
	$("#ylow").click(function(){
		thColor = "#F2EA02";
		$("th").css("background-color", thColor);
		$("#th_color").css("border-color", thColor);
	});
	//end of table header color selection
	
	//start of color selection for odd table rows
	$("#ogrn").click(function(){
		trOddColor = "#39FF14";
		$("tr:odd").css("background-color", trOddColor);
		$("#odd_color").css("border-color", trOddColor);
	});
	$("#ored").click(function(){
		trOddColor = "#FF0000";
		$("tr:odd").css("background-color", trOddColor);
		$("#odd_color").css("border-color", trOddColor);
	});
	$("#oblu").click(function(){
		trOddColor = "#099FFF";
		$("tr:odd").css("background-color", trOddColor);
		$("#odd_color").css("border-color", trOddColor);
	});
	$("#oppl").click(function(){
		trOddColor = "#9900FF";
		$("tr:odd").css("background-color", trOddColor);
		$("#odd_color").css("border-color", trOddColor);
	});
	$("#opnk").click(function(){
		trOddColor = "#FF00CC";
		$("tr:odd").css("background-color", trOddColor);
		$("#odd_color").css("border-color", trOddColor);
	});
	$("#oorg").click(function(){
		trOddColor = "#FF6600";
		$("tr:odd").css("background-color", trOddColor);
		$("#odd_color").css("border-color", trOddColor);
	});
	$("#oylow").click(function(){
		trOddColor = "#F2EA02";
		$("tr:odd").css("background-color", "yellow");
		$("#odd_color").css("border-color", "yellow");
	});
	//end of color selection for odd table rows
	
	//start of color selection of even table rows
	$("#egrn").click(function(){
		trEvenColor = "#39FF14";
		$("tr:even").css("background-color", trEvenColor);
		$("#even_color").css("border-color", trEvenColor);
	});
	$("#ered").click(function(){
		trEvenColor = "#FF0000";
		$("tr:even").css("background-color", trEvenColor);
		$("#even_color").css("border-color", trEvenColor);
	});
	$("#eblu").click(function(){
		trEvenColor = "#099FFF";
		$("tr:even").css("background-color", trEvenColor);
		$("#even_color").css("border-color", trEvenColor);
	});
	$("#eppl").click(function(){
		trEvenColor = "#9900FF";
		$("tr:even").css("background-color", trEvenColor);
		$("#even_color").css("border-color", trEvenColor);
	});
	$("#epnk").click(function(){
		trEvenColor = "#FF00CC";
		$("tr:even").css("background-color", trEvenColor);
		$("#even_color").css("border-color", trEvenColor);
	});
	$("#eorg").click(function(){
		trEvenColor = "#FF6600";
		$("tr:even").css("background-color", trEvenColor);
		$("#even_color").css("border-color", trEvenColor);
	});
	$("#eylow").click(function(){
		trEvenColor = "#F2EA02";
		$("tr:even").css("background-color", trEvenColor);
		$("#even_color").css("border-color", trEvenColor);
	});
	//end of color selection for even table rows
	
	
});