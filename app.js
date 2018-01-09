$(".downArrow").click(function() {
	$('html,body').animate({
	    scrollTop: $(".projectsPage").offset().top},
	    'slow');
});

$(".aboutText").hide();
$(".reachOutText").hide();
$('#home').css({"color": "#009EDB"});

document.getElementById('home').addEventListener('click', function(event) {
    $(".introText").show();
    $(".aboutText").hide();
    $(".reachOutText").hide();
    $('#home').css({"color": "#009EDB"});
    $('#about').css({"color": "#777777"});
    $('#reachOut').css({"color": "#777777"});
}, false);

document.getElementById('about').addEventListener('click', function(event) {
    $(".introText").hide();
    $(".reachOutText").hide();
    $(".aboutText").show();
    $('#home').css({"color": "#777777"});
    $('#about').css({"color": "#009EDB"});
    $('#reachOut').css({"color": "#777777"});
}, false);

document.getElementById('reachOut').addEventListener('click', function(event) {
    $(".introText").hide();
    $(".aboutText").hide();
    $(".reachOutText").show();
    $('#home').css({"color": "#777777"});
    $('#about').css({"color": "#777777"});
    $('#reachOut').css({"color": "#009EDB"});
}, false);
