class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-string');
        this.temp = document.getElementById('w-temp');
        this.humidity = document.getElementById('w-humidity');
        this.visibility = document.getElementById("w-visibility")
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        console.log(weather);
        this.location.textContent = weather.name + ', ' + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.weather[0].main;
        this.humidity.textContent = 'Humidity: ' + weather.main.humidity;
        this.temp.innerHTML = 'Temperature: ' + Math.round(parseFloat(weather.main.temp) - 273.15) + ' &deg;C';
       this.visibility.textContent = "Visibility: " + weather.visibility;
        this.wind.textContent = "Wind Speed: " + weather.wind.speed;
    }
}