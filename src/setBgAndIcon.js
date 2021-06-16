function setBgAndIcon(time,summary) {
    const icon = document.querySelector("#icon");
    const body = document.body;
    const hour = parseInt(time.split(":")[0]);
    const sun = "linear-gradient(rgb(204, 203, 146),rgb(206, 204, 121))";
    const dark = "linear-gradient(rgb(173, 173, 162),rgb(151, 151, 142))";
    const sky = "linear-gradient(rgb(190, 192, 235),rgb(127, 134, 233))";
    let bgColor = sky;
    let iconImage = "clear_day.svg";
    if (hour <= 5 || hour >= 19) {
        bgColor = dark;
        iconImage = "clear_night.svg";
    } else {
        bgColor = sun;
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
        }
    }
    icon.innerHTML = '<img src="../icons/'+iconImage+'" id="weather_icon">';
    body.style.backgroundImage=bgColor;
}

export default setBgAndIcon;