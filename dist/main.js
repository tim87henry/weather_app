(()=>{"use strict";document.body.style.background="#C3C8DC",async function(e){let t=await fetch("http://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid=2d62a90b58e587895e43e52c309887b6",{mode:"cors"});return await t.json()}("Chennai").then((function(e){let t=e.main.temp,a=e.main.humidity,n=e.weather[0].main,i=new Date,o=i.getTime()+6e4*i.getTimezoneOffset(),u=new Date(o+1e3*e.timezone),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][u.getDay()],r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][u.getMonth()]+" "+u.getDate(),c=u.getHours()+":"+u.getMinutes();console.log({temp:t,humidity:a,description:n,day:m,date:r,time:c})}))})();