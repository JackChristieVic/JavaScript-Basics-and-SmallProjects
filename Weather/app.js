// hard-coded for test purpose
// const weather = new Weather('Victoria', 'Ca');

const ui = new UI();

const storage = new LocalStorage();
const locationData = storage.getLocationData();
const weather = new Weather(locationData.city, locationData.country);


// Get weather when page loads
document.addEventListener('DOMContentLoaded', getWeather);

// get weather using promise and then() functions
function getWeather() {
    weather.getWeather()
        .then((results) => {
            ui.paint(results)
        })
    .catch((error) => console.log(error));
}

// change location and then  close the Modal
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);

    // set location in localstorage
    storage.setLocationData(city, country);
    // get and display weather
    getWeather();

    // close modal when click change location by find the id of the whole modal
    $('#locModal').modal('hide');
})




