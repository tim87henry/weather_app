import performAPICall from './performAPICall';
import printValues from './printValues';

function getWeather(locn) {
    let weather_promise = performAPICall(locn);
    weather_promise.then(function(response) {
        let temp = response.main.temp;
        let humidity = response.main.humidity;
        //console.log(response.weather[0].main)
        let description = response.weather[0].main;

        let local_time = new Date();
        let utc_time = local_time.getTime() + (local_time.getTimezoneOffset()*60000);
        let city_time = new Date(utc_time+response.timezone*1000);
        const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let day = days[city_time.getDay()];
        let date = months[city_time.getMonth()]+" "+city_time.getDate();;
        let time = city_time.getHours()+":"+city_time.getMinutes();
        printValues({temp, humidity, description, day, date, time, locn});
    }).catch(function(err) {
        console.log("Please enter a valid city "+err)
    })
}

export default getWeather;