function printValues(weather_info) {
    //console.log({"temp":temp, "humidity":humidity, "description":description, "day":day, "date":date, "time":time})
    document.querySelector("#date").textContent=weather_info['date'];
    document.querySelector("#time").textContent=weather_info['time'];
    document.querySelector("#degree").textContent=weather_info['temp']+" C";
    document.querySelector("#summary").textContent=weather_info['description'];
    document.querySelector("#humidity").textContent="Humidity "+weather_info['humidity'];
    document.querySelector("#place").textContent=weather_info['locn'];
    console.log("Yeah...")
}

export default printValues;