import getWeather from './getWeather';

const city=document.querySelector("#city")
const search_button=document.querySelector("#search_button")

search_button.addEventListener("click",() => {
    getWeather(city.value);
})