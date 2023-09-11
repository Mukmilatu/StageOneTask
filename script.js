const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();

let currentDay = weekday[d.getDay()];
let day = d.getDay();
let dayUTCTime = d.getUTCMilliseconds();

document.getElementById("currentUTCTime").innerHTML= dayUTCTime;
document.getElementById("currentDayOfTheWeek").innerHTML=currentDay; 
