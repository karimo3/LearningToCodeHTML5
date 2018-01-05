function changeImage() {
    var image = document.getElementById("myImage");
    if (image.src.match("bulbon")) {
        image.src = "../images/pic_bulboff.gif";
    } else {
        image.src = "../images/pic_bulbon.gif";
    }
}

function loginerror(){
    $("logginerror1").click(function(){
        $(this).html("<b>OOPS!</b>");
    });
};


var video;
function play() {
	video.play();
}

function pause() {
	video.pause();
}

function back() {
	video.currentTime -= 10;
}

/* working on canvas element */
var drawCanvas = document.getElementById("drawCanvas");
var ctxt = drawCanvas.getContext("2d");
ctxt.beginPath();
ctxt.moveTo(125,20)
ctxt.bezierCurveTo(0,200,300,300,50,400);
ctxt.lineWidth = 25;
ctxt.strokeStyle = '#0f0';
ctxt.stroke();

var drawingSurface = document.getElementById("ctxt2");
var ctxt2 = drawingSurface.getContext("2d");
ctxt2.lineWidth = 3;
ctxt2.rect(150, 150, 250, 175);
var gradient = ctxt.createRadialGradient(200, 200,5, 250, 250,100);
gradient.addColorStop(0, "Red");
gradient.addColorStop(.5, "Orange");
gradient.addColorStop(1, "Blue");
ctxt2.fillStyle = gradient;
ctxt2.fill();
ctxt2.stroke();

/*SVG element work */

function Red(evt) {
var circle = evt.target;
circle.setAttribute("style", "fill: red");
}
function Green(evt) {
var circle = evt.target;
circle.setAttribute("style", "fill: green");
}
