$(".downArrow").click(function() {
	$('html,body').animate({
	    scrollTop: $(".projectsPage").offset().top},
	    'slow');
});