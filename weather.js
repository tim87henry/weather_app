async function getWeather(locn) {
    let p = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+locn+'&units=metric&appid=2d62a90b58e587895e43e52c309887b6',{mode: "cors"})
    return await p.json()
}

document.body.style.background="salmon";
let weather_promise=getWeather("Chennai");
weather_promise.then(function(response) {
    console.log(response.main.temp)
    console.log(response.main.humidity)
    console.log(response.weather[0].main)
    console.log(response.weather[0].description)

    let unix_timestamp = response.dt;
    let local_time=new Date();
    let utc_time=local_time.getTime() + (local_time.getTimezoneOffset()*60000)
    let city_time=new Date(utc_time+response.timezone*1000);
    console.log(city_time)
    console.log(city_time.getDate())
    console.log(city_time.getHours()+":"+city_time.getMinutes())
    console.log()
    console.log(response)
})