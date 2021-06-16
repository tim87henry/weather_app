import getWeather from './getWeather';
import temperatureUnit from './temperatureUnit';

const city=document.querySelector("#city")
const search_button=document.querySelector("#search_button")
const units=document.getElementsByClassName("unit")

search_button.addEventListener("click",() => {
    getWeather(city.value);
});

city.addEventListener("keypress",(e) => {
    if (e.code === "Enter") {
        getWeather(city.value);
    }
});

for (let i=0;i<units.length;i++) {
    units[i].addEventListener("click",(e) => {
        if (i === 0) {
            temperatureUnit.isCelsius = true;
        } else {
            temperatureUnit.isCelsius = false;
        }
        getWeather(city.value);
    })
}