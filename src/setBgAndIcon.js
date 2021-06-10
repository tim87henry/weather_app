function setBgAndIcon(time,summary) {
    //document.querySelector("#icon").innerHTML='<img src="../icons/clear_day.svg" id="weather_icon">';
    const icon = document.querySelector("#icon");
    const body = document.body;
    const hour = parseInt(time.split(":")[0]);
    const sun = "linear-gradient(rgb(204, 203, 146),rgb(206, 204, 121))";
    const dark = "linear-gradient(rgb(102, 102, 94),rgb(68, 68, 63))";
    const sky = "linear-gradient(rgb(134, 141, 240),rgb(52, 64, 236))";
    let bgColor = sky;
    let iconImage = "clear_day.svg";
    if (hour <= 5 || hour >= 19) {
        bgColor = dark;
        iconImage = "clear_night.svg";
        body.style.color = "white";
    } else {
        bgColor = sun;
        body.style.color = "black";
    }
    if (summary === 'Rain' || summary === 'Drizzle' || summary === 'Thunderstorm') {
        iconImage = "rain.svg";  
    } else if (summary === 'Mist') {
        iconImage = "fog.svg";
    } else if (summary === 'Snow') {
        iconImage = "snow.svg";
    } else if (summary === 'Clouds') {
        iconImage = (hour <= 5 || hour >= 19)? "cloudy_night.svg" : "cloudy_day.svg";
    }
    if (summary === 'Rain' || summary === 'Drizzle' || summary === 'Thunderstorm' || summary === 'Mist' || summary === 'Snow') {
        if (hour > 5 && hour < 19) {
            bgColor = sky;
            body.style.color = "black";
        }
    }
    icon.innerHTML = '<img src="../icons/'+iconImage+'" id="weather_icon">';
    body.style.backgroundImage=bgColor;
}

export default setBgAndIcon;