(()=>{"use strict";const e=function(e){document.querySelector("#date").textContent=e.date,document.querySelector("#time").textContent=e.time,function(e,t){const n=document.querySelector("#icon"),o=document.body,r=parseInt(e.split(":")[0]),c="linear-gradient(rgb(134, 141, 240),rgb(52, 64, 236))";let i=c,a="clear_day.svg";r<=5||r>=19?(i="linear-gradient(rgb(102, 102, 94),rgb(68, 68, 63))",a="clear_night.svg",o.style.color="white"):(i="linear-gradient(rgb(204, 203, 146),rgb(206, 204, 121))",o.style.color="black"),"Rain"===t||"Drizzle"===t||"Thunderstorm"===t?a="rain.svg":"Mist"===t?a="fog.svg":"Snow"===t?a="snow.svg":"Clouds"===t&&(a=r<=5||r>=19?"cloudy_night.svg":"cloudy_day.svg"),"Rain"!==t&&"Drizzle"!==t&&"Thunderstorm"!==t&&"Mist"!==t&&"Snow"!==t||r>5&&r<19&&(i=c,o.style.color="black"),n.innerHTML='<img src="../icons/'+a+'" id="weather_icon">',o.style.backgroundImage=i}(e.time,e.summary),document.querySelector("#degree").textContent=e.temp+" C",document.querySelector("#summary").textContent=e.summary,document.querySelector("#humidity").textContent="Humidity "+e.humidity,document.querySelector("#place").textContent=e.locn},t=function(t){(async function(e){let t=await fetch("http://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid=2d62a90b58e587895e43e52c309887b6",{mode:"cors"});return await t.json()})(t).then((function(n){let o=Math.round(n.main.temp),r=n.main.humidity,c=n.weather[0].main,i=new Date,a=i.getTime()+6e4*i.getTimezoneOffset(),u=new Date(a+1e3*n.timezone),l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][u.getDay()],m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][u.getMonth()]+" "+u.getDate(),d=u.getHours(),s=u.getMinutes();d=1===d.toString().length?"0"+d:d,s=1===s.toString().length?"0"+s:s,e({temp:o,humidity:r,summary:c,day:l,date:m,time:d+":"+s,locn:t})})).catch((function(e){console.log("Please enter a valid city "+e),document.querySelector("#icon").textContent="Please enter a valid city",document.querySelector("#degree").textContent="",document.querySelector("#summary").textContent="",document.querySelector("#humidity").textContent="",document.querySelector("#place").textContent=""}))},n=document.querySelector("#city");document.querySelector("#search_button").addEventListener("click",(()=>{t(n.value)}))})();