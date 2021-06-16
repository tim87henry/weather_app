import setBgAndIcon from './setBgAndIcon';
import temperatureUnit from './temperatureUnit';

function printValues(weather_info) {
    document.querySelector("#date").textContent=weather_info['date'];
    document.querySelector("#time").textContent=weather_info['time'];
    setBgAndIcon(weather_info['time'],weather_info['summary']);
    let displayTemp = weather_info['temp'];
    let unit = "C";
    if (!temperatureUnit.isCelsius) {
        displayTemp = Math.round((displayTemp * 1.8) + 32);
        unit = "F";
    }
    document.querySelector("#degree").textContent=displayTemp+" "+unit;
    document.querySelector("#summary").textContent=weather_info['summary'];
    document.querySelector("#humidity").textContent="Humidity "+weather_info['humidity'];
    document.querySelector("#place").textContent=weather_info['place'];
}

export default printValues;