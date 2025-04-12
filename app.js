const apiKey = "8e84e6fbc173de7f8f2adf829051a2da";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".search-city").style.display = "none";
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°';
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].id >= 801 && data.weather[0].id <= 804) {
            document.querySelector(".weather-con").innerHTML = "Clouds";
            weatherIcon.src = "img/Assets/weather/clouds.svg";
        } else if (data.weather[0].id === 800) {
            document.querySelector(".weather-con").innerHTML = "Clear";
            weatherIcon.src = "img/Assets/weather/clear.svg";
        } else if (data.weather[0].id >= 500 && data.weather[0].id <= 531) {
            document.querySelector(".weather-con").innerHTML = "Rain";
            weatherIcon.src = "img/Assets/weather/rain.svg";
        } else if (data.weather[0].id >= 300 && data.weather[0].id <= 321) {
            document.querySelector(".weather-con").innerHTML = "Drizzle";
            weatherIcon.src = "img/Assets/weather/drizzle.svg";
        }
        else if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
            document.querySelector(".weather-con").innerHTML = "Snow";
            weatherIcon.src = "img/Assets/weather/snow.svg";
        } else if (data.weather[0].id >= 200 && data.weather[0].id <= 300) {
            document.querySelector(".weather-con").innerHTML = "Thunderstorm";
            weatherIcon.src = "img/Assets/weather/thunderstorm.svg";
        } else if (data.weather[0].id >= 700 && data.weather[0].id <= 781) {
            document.querySelector(".weather-con").innerHTML = "Mist";
            weatherIcon.src = "img/Assets/weather/atmosphere.svg";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".search-city").style.display = "none";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})



/////////////////////////////////////////

let date = new Date();
let dayOfWeek = date.getDay();
let dateNum = date.getDate();
let month = date.getMonth();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let leadingDate = 0;
if (dateNum < 10) {
    leadingDate = "0" + dateNum;
} else {
    leadingDate = dateNum;
}
console.log(leadingDate);

const monthWord = months[date.getMonth()];
const dayWord = days[date.getDay()];

document.querySelector(".current-date").innerHTML = dayWord + "," + " " + leadingDate + " " + monthWord;
console.log(monthWord + ', ' + dayWord);
