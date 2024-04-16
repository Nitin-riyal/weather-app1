function searchWeather() {
    var location = document.getElementById("search").value;

    // Replace 'YOUR_API_KEY' with your actual API key
    var apiKey = '80d3aca485217bf1b83d2e454f96e343#';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update weather information
            var weatherInfo = document.getElementById("weather-info");
            weatherInfo.innerHTML = "Temperature: " + (data.main.temp - 273.15).toFixed(2) + "°C<br>";
            weatherInfo.innerHTML += "Weather: " + data.weather[0].main;

            // Set the appropriate image based on weather
            var weatherImage = document.getElementById("weather-image");
            var weather = data.weather[0].main.toLowerCase(); // Get the weather description in lowercase
            var imageUrl;

            if (weather.includes("clear")) {
                imageUrl = "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=2000";
            } else if (weather.includes("cloud")) {
                imageUrl = "https://images.pexels.com/photos/416920/pexels-photo-416920.jpeg?auto=compress&cs=tinysrgb&w=2000";
            } else if (weather.includes("rain")) {
                imageUrl = "https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=2000";
            }
            else if (weather.includes("haze")) {
                imageUrl = "https://images.pexels.com/photos/1776270/pexels-photo-1776270.jpeg?auto=compress&cs=tinysrgb&w=2000";
            }

            else {
                imageUrl = "https://images.pexels.com/photos/4271933/pexels-photo-4271933.jpeg?auto=compress&cs=tinysrgb&w=2000"; // Default image if weather condition is not recognized
            }

            weatherImage.src = imageUrl;
            weatherImage.style.display = "block"; // Display the weather image
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // Display an error message if unable to fetch weather data
            var weatherInfo = document.getElementById("weather-info");
            weatherInfo.innerHTML = '<span style="color: red;">Unable to fetch weather data for the specified location.</span>';
            var weatherImage = document.getElementById("weather-image");
            weatherImage.style.display = "block"; // Hide the weather image
        });
}
