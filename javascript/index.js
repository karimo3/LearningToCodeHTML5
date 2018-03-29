///////////////Geolocation API///////////////////////////////////////
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}
////////////////////////////////////////////////////////////////
 

var video = $("#SampleVideo");

 video.on("click", function () {
 	video.play();
 });

 function pause() {
 	video.pause();
 }

 function back() {
 	video.currentTime -= 10;
}
 
    
$("#loginerror").click(function(){
    $(this).html("<b>OOPS!</b>");
    console.log("Login button clicked");
});

$('#sidebarCollapse').on('click', function () {
    $('.sidebar').toggleClass('active');
});

// function changeImage() {
//     var image = document.getElementById("myImage");
//     if (image.src.match("bulbon")) {
//         image.src = "../images/pic_bulboff.gif";
//     } else {
//         image.src = "../images/pic_bulbon.gif";
//     }
// }


$("#myImage").click(function(){
    if($(this).attr("src", "../images/pic_bulbon.gif")){
        $(this).attr("src", "../images/pic_bulbon.gif");
    }
    else{
        $(this).attr("src", "../images/pic_bulboff.gif"); 
    }

});


