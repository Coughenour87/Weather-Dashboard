function displayWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=a64814be519a737b6f2ebd5bcead034f"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var main = $("#content-main");
        var newDiv = $("<div>").addClass("card mt-3 p-3");
        var title = $("<h3>").text(response.name + " (" + moment().format('l') + ")");
        var img = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png")
        title.append(img)
        var temp = $("<div>Temp: " + response.main.temp + "°F</div>");
        var wind = $("<div>Wind Speed: " + (response.wind.speed * 1.15078).toFixed(2) + " knots </div>");
        var hum = $("<div>Humidity: " + response.main.humidity + "%</div>");
        newDiv.append(title, temp, wind, hum)
        main.append(newDiv)
    });
}
$("#search-button").on("click", function () {
    var cityName = $("#city-search").val().trim();
    displayWeather(cityName)
})


