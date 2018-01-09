$(".aboutText").hide();
$(".reachOutText").hide();
$('#home').css({"color": "#009EDB"});

document.getElementById('home').addEventListener('click', function(event) {
    $(".introText").fadeIn("slow");
    $(".aboutText").fadeOut("slow");
    $(".reachOutText").fadeOut("slow");
    $('#home').css({"color": "#009EDB"});
    $('#about').css({"color": "#777777"});
    $('#reachOut').css({"color": "#777777"});
}, false);

document.getElementById('about').addEventListener('click', function(event) {
    $(".introText").fadeOut("slow");
    $(".reachOutText").fadeOut("slow");
    $(".aboutText").fadeIn("slow");
    $('#home').css({"color": "#777777"});
    $('#about').css({"color": "#009EDB"});
    $('#reachOut').css({"color": "#777777"});
}, false);

document.getElementById('reachOut').addEventListener('click', function(event) {
    $(".introText").fadeOut("slow");
    $(".aboutText").fadeOut("slow");
    $(".reachOutText").fadeIn("slow");
    $('#home').css({"color": "#777777"});
    $('#about').css({"color": "#777777"});
    $('#reachOut').css({"color": "#009EDB"});
}, false);

$(".downArrow").click(function() {
	$('html,body').animate({
	    scrollTop: $(".projectsPage").offset().top},
	    'slow');
});
