(()=>{"use strict";const e=function(e){(async function(e){let t=await fetch("http://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid=2d62a90b58e587895e43e52c309887b6",{mode:"cors"});return await t.json()})(e).then((function(t){let n=Math.round(t.main.temp),o=t.main.humidity,c=t.weather[0].main,r=new Date,i=r.getTime()+6e4*r.getTimezoneOffset(),u=new Date(i+1e3*t.timezone),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][u.getDay()],d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][u.getMonth()]+" "+u.getDate(),m=u.getHours(),l=u.getMinutes();var y;m=1===m.toString().length?"0"+m:m,l=1===l.toString().length?"0"+l:l,y={temp:n,humidity:o,description:c,day:a,date:d,time:m+":"+l,locn:e},document.querySelector("#date").textContent=y.date,document.querySelector("#time").textContent=y.time,document.querySelector("#icon").innerHTML='<img src="../icons/clear_day.svg" id="weather_icon">',document.querySelector("#degree").textContent=y.temp+" C",document.querySelector("#summary").textContent=y.description,document.querySelector("#humidity").textContent="Humidity "+y.humidity,document.querySelector("#place").textContent=y.locn})).catch((function(e){console.log("Please enter a valid city "+e),document.querySelector("#icon").textContent="Please enter a valid city",document.querySelector("#degree").textContent="",document.querySelector("#summary").textContent="",document.querySelector("#humidity").textContent="",document.querySelector("#place").textContent=""}))},t=document.querySelector("#city");document.querySelector("#search_button").addEventListener("click",(()=>{e(t.value)}))})();