function getWeather() {
    const apiKey = '057614ed3b58cc64ac6910bccf1edc72';
    const city = document.getElementById('cityInput').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.cod === '404') {
                weatherInfo.innerHTML = 'City not found';
            } else {
                const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
                const description = data.weather[0].description;
                weatherInfo.innerHTML = `Temperature: ${temperature}°C<br>Description: ${description}`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
