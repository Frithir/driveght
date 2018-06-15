$(document).ready(function(){

	$('#tours h3.close').next().hide();
	$('#ballpark').show();
	$('#tours h3').css('cursor', 'pointer'); 
	
	$("#packages .link").click(function (e) {
		e.preventDefault();
	});
	
	
				
	$('#tours h3').click(function() {
		$("#tours h3.open").removeClass("open").next().slideUp();
		$(this).addClass("open").next().slideDown();
		if ($(this).next().attr("id") == "cars") {
			$("#cars .windows").hide();
			
			var selectedTrack = track.find("a.link").attr("title").toLowerCase().replace(" ", "-");
			//alert(selectedTrack);
			
			$("#cars ." + selectedTrack).show();
		} else if ($(this).next().attr("id") == "packages") {
			$("#packages .windows:not(:last-child)").remove();
			
			$("#packages .content").html('<h4>For this set up your looking at about <span id="ballpark">$0 cause you need to select a Track and a Car so we can show you what its worth</span></h4>');
			
			car.clone().prependTo($("#packages"));
			track.clone().prependTo($("#packages"));
	
			
			$("#ballpark").html(" $" + (parseInt(car.find(".price").text()) + parseInt(track.find(".price").text())));

			var selectedCar = car.find("a.link").attr("title");
			var selectedTrack = track.find("a.link").attr("title");
			$("#selected-car").val(selectedCar);
			$("#selected-track").val(selectedTrack);
		}
	});
	
	var car = "";
	var track = "";
	// For image links
	
	$("#tracks .link, #tracks .inline").click(function (e) {
		track = $(this).parent();
		$("#cars").prev().click();
		e.preventDefault();
	});
	
	$("#cars .link, #cars .inline").click(function (e) {
		car = $(this).parent();
		$("#packages").prev().click();
		e.preventDefault();
	});
	


});