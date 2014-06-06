


// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

    $(document).ready(function($){
        var chapterPosition = [];
        $('.full').each(function() {
            chapterPosition.push($(this).offset().top);
        });
        
        $('a').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            return false;
        });
        
        $(document).on('scroll', function() {
            var position = $(document).scrollTop(),
                index;
            
            for (var i=0; i<chapterPosition.length; i++) {
                if (position - 200 <= chapterPosition[i]) {
                    index = i;
                    break;
                }
            }
            
            $('.nav ul li a').removeClass('active');
            $('.nav ul li a:eq('+index+')').addClass('active');
        });
        
            $('.nav ul li a').click(function () {
            $('.nav ul li a').removeClass('active');
                $(this).addClass('active');
        });   
    });

// logic for getting current window size for title page scaling

var groundwork = {};

var getWindowSize = function() {
	var w = window,
		d = document,
    	e = d.documentElement,
    	g = d.getElementsByTagName('body')[0],
    	x = w.innerWidth || e.clientWidth || g.clientWidth,
    	y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    	groundwork.x = x;
    	groundwork.y = y;

}

var fullscreenElements = function(matchClass) {
	var elements = document.getElementsByTagName('div'),i;
    for (i in elements) {
        if((" "+elements[i].className+" ").indexOf(" "+matchClass+" ") > -1){
            elements[i].style.width = groundwork.x + "px";
            elements[i].style.height = groundwork.y + "px";
        }
       
    }

}
getWindowSize();
fullscreenElements('full');

window.onresize = function() {
	getWindowSize();
	fullscreenElements('full');
}





