import performAPICall from './performAPICall';
import printValues from './printValues';

function getWeather(locn) {
    let weather_promise = performAPICall(locn);
    weather_promise.then(function(response) {
        let place = response.name;
        let temp = Math.round(response.main.temp);
        let humidity = response.main.humidity;
        let summary = response.weather[0].main;

        let local_time = new Date();
        let utc_time = local_time.getTime() + (local_time.getTimezoneOffset()*60000);
        let city_time = new Date(utc_time+response.timezone*1000);
        const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let day = days[city_time.getDay()];
        let date = months[city_time.getMonth()]+" "+city_time.getDate();;
        let hour = city_time.getHours();
        let min = city_time.getMinutes();
        hour = (hour.toString().length === 1) ? "0"+hour : hour;
        min = (min.toString().length === 1) ? "0"+min : min;
        let time = hour+":"+min;
        printValues({temp, humidity, summary, day, date, time, place});
    }).catch(function(err) {
        document.querySelector("#icon").textContent="Please enter a valid city";
        document.querySelector("#degree").textContent="";
        document.querySelector("#summary").textContent="";
        document.querySelector("#humidity").textContent="";
        document.querySelector("#place").textContent="";
    })
}

export default getWeather;