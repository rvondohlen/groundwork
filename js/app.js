// dot navigation

$(document).ready(function($){
    
    var chapterPosition = [];
    var chapterHeight = [];
    $('.section').each(function() {
        chapterPosition.push($(this).offset().top);
        chapterHeight.push($(this).height());
    });
    
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 750);
        return false;
    });
    
    $(document).on('scroll', function() {
        var position = $(document).scrollTop(),
            index;
        

        for (var i=0; i<chapterPosition.length; i++) {
            if (position <= chapterPosition[i] + chapterHeight[i] -2){
                
                index = i;
                break;
                
                
            }
        }
        
        $('.nav ul li a').removeClass('active');
            $('.nav ul li a:eq('+index+')').addClass('active');

            // n
            $('.section:eq('+index+') div div .sticky').animate({top: "0"}, 500, function() {});
        });
    
        $('.nav ul li a').click(function () {
            $('.nav ul li a').removeClass('active');
                $(this).addClass('active');
        });   

});

// logic for getting current window size for title page scaling

var app = {};

var getWindowSize = function() {
	var w = window,
		d = document,
    	e = d.documentElement,
    	g = d.getElementsByTagName('body')[0],
    	x = w.innerWidth || e.clientWidth || g.clientWidth,
    	y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    	app.x = x;
    	app.y = y;

}

var fullscreenElements = function(matchClass) {
	var elements = document.getElementsByTagName('div'),i;
    for (i in elements) {
        if((" "+elements[i].className+" ").indexOf(" "+matchClass+" ") > -1){
            elements[i].style.width = app.x + "px";
            elements[i].style.height = app.y + "px";
        }
       
    }

}
getWindowSize();
fullscreenElements('full');

window.onresize = function() {
	getWindowSize();
	fullscreenElements('full');
}





