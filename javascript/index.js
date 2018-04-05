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


// function reportOnlineStatus(){
//     isOnLine = navigator.onLine;
//     $('#onlineStatus').html((isOnLine) ? "Yes" : "No");
// }
////////////////////////////////////////////////////////////////

$("#loginerror").on('click', function () {
    // $(this).html("<b>OOPS!</b>");
    console.log("Login button clicked");
});

$('#sidebarCollapse').on('click', function () {
    $('.sidebar').toggleClass('active');
});

function changeImage() {
    var image = document.getElementById("myImage");
    if (image.src.match("bulbon")) {
        image.src = "../images/pic_bulboff.gif";
    } else {
        image.src = "../images/pic_bulbon.gif";
    }
}



// $("#myImage").on('click', function () {
//     if ($(this).attr("src", "../images/pic_bulbon.gif")) {
//         $(this).attr("src", "../images/pic_bulbon.gif");
//     }
//     else {
//         $(this).attr("src", "../images/pic_bulboff.gif");
//     }

// });


