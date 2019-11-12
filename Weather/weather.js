class Weather {
    constructor(city, country) {
        this.apiKey = 'you api key';
        this.city = city
        this.country = country;
    }

    // fetch weather from API
    async getWeather() {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + ',' + this.country + '&appid=' + this.apiKey);
        
        const responseData = await response.json();
       
        // the openweathermap API json data has main object with all the data we need, therefore just return the data in the main
        // return (responseData.main);
        return (responseData);
    }


    // change weather location
    changeLocation(city) {
        this.city = city;
        this.country = country;
    }
}






JavaScript-Basics-and-SmallProjects