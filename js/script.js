$(document).ready(function() {	
	$('#slider').anythingSlider({
		resizeContents: false,
		buildStartStop: false,
		buildNavigation: false,
		onSlideInit: function(e, slider) {
			$('.arrow').fadeTo("fast", 0.2);
		},
		onSlideComplete: function(slider) {
			$('.arrow').fadeTo("fast", 1);
		}
	});
	
	$('.picks a').click(function() {
		var h = this.hash;
		$('#slider').anythingSlider(h.substring(1));			
		return false;
	});
});