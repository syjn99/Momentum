const cityName = document.querySelector("#weather div:first-child");
const currentWeather = document.querySelector("#weather div:last-child");
const API_KEY = "efef0dbf1d52ef8833b856b3db8b243b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch(url).then(function(response) {return response.json()}).then(function(data) {return console.log(data.name)});
    fetch(url) 
        .then((response) => response.json())
        .then((data) => {
            const name = data.name;
            const weather = data.weather[0].main;
            const temp = Math.round(data.main.temp);
            cityName.innerText = name;
            currentWeather.innerText = `${weather}\n${temp} °C`;
        }); 
    
}

function onGeoError() {
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);