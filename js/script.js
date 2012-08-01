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
	
	function wrapInParagraph(txt, price) {
		return '<p>'+txt+'<br />$'+price+'</p><a href="http://www.rw-co.com/" target="_blank"><p><span>SHOP NOW<span><img src="images/black_arrow.gif" /></p></a>';
	}
					 
	$('#picks_pic').mapster({
		fillOpacity: 0.1,
		fillColor: "d42e16",
		mapKey: 'alt',
		areas:  [
			{
		   key: "belt", 
		   toolTip: wrapInParagraph('Red and gold belt','24.00')
			},
			{
			key: "hoops",
			toolTip: wrapInParagraph('Leafy gold hoops','10.00')
			},
			{
			key: "sparkly_rings",
			toolTip: wrapInParagraph('Stackable sparkly rings','10.00')
			},
			{
			key: "rhinestone",
			toolTip: wrapInParagraph('Rhinestone rings','12.00')
			},
			{
			key: "earrings",
			toolTip: wrapInParagraph('Feather drop earrings','10.00')
			}
		],
		showToolTip: true,			
		//toolTipContainer: '<div class="tooltip">...</div>',
		toolTipClose: ["tooltip-click"]
	});	
});