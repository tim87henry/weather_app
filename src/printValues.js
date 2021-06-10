import setBgAndIcon from './setBgAndIcon';

function printValues(weather_info) {
    document.querySelector("#date").textContent=weather_info['date'];
    document.querySelector("#time").textContent=weather_info['time'];
    //document.querySelector("#icon").innerHTML='<img src="../icons/clear_day.svg" id="weather_icon">';
    setBgAndIcon(weather_info['time'],weather_info['summary']);
    document.querySelector("#degree").textContent=weather_info['temp']+" C";
    document.querySelector("#summary").textContent=weather_info['summary'];
    document.querySelector("#humidity").textContent="Humidity "+weather_info['humidity'];
    document.querySelector("#place").textContent=weather_info['locn'];
}

export default printValues;