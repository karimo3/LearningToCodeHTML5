
function loadData() {

    var $streetimg = $('#strimg');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');


    // load streetview
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x200&location=' + address + '';
    $streetimg.append('<img class="bgimg" src="' + streetviewUrl + '">');


    // load nytimes
    
    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
