// * Display the following under current weather conditions:
// var for city - global
var cityName = "Charlotte";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=a64814be519a737b6f2ebd5bcead034f"
//  var city =  $("this").attr("data-name");

//get URL for weather app
// add city = activity 6 look are var movie line and query url


$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        console.log(response);
        $("#content-main").append("<p>Date: ", + response.date + "</p>");
        $("#content-main").append("<p>Icon: ", + response.icon + "</p>");
        $("#content-main").append("<p>Icon: ", + response.temperature + "</p>");
        $("#content-main").append("<p>Icon: ", + response.humidity + "</p>");
        $("#content-main").append("<p>Icon: ", + response.windName + "</p>");

        //.then function
        //console.log(response)
        //create an elemement that contains the city name 
        var cityEl = $("<div>");
        var cityEl = $("cityName");
        //response.City
        var cityEl = $("<p>" + response.City + "</p>")

        
        // var cityP = $("<p>" + response.City + "</p>")
        // REPEAT with create and elemement that contains the Date, 
        //Icon (visual representation of weather conditions)
        //Temperature, 
        //Humidity 
        //Wind name 

        //CAN create a container Div
        //var newDiv = $("<div>");
        var newDiv = $("<div>");
        //append newDiv to content-main
        //append city name to newDiv
        //append Date name to newDiv
        //append Icon name to newDiv
        //append Temp name to newDiv
        //append Humidity name to newDiv
        //append Wind speed name to newDiv
    });

//click.event to fire off ajax call (bottom)
$("city-search").on("click", function (event) {
    event.preventDefault();

    var weather = $("#city-search").val().trim();

    
})

