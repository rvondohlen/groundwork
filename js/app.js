

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




