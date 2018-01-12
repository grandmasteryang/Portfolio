$(".upArrow").hide();
var topProjectsDiv = $(".introLine").offset().top;
$(window).scroll(function() {
	if ($(window).scrollTop() > topProjectsDiv) { 
	    $(".upArrow").fadeIn();
	} else if ($(window).scrollTop() < topProjectsDiv) {
		$(".upArrow").fadeOut();
	}
});

$(".goToWork").click(function() {
	$('html,body').animate({
	    scrollTop: $(".projectsPage").offset().top},
	    'slow');
});

$("#reachOut").click(function() {
	$('html,body').animate({
	    scrollTop: $(".contactPage").offset().top},
	    'slow');
});

$(".upArrow").click(function() {
	$('html,body').animate({
	    scrollTop: $(".introPage").offset().top},
	    'slow');
});

