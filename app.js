
var sec = document.getElementById('second-hand');
var min = document.getElementById('minute-hand');
var hour = document.getElementById('hour-hand');

setInterval(() => {
    var t = new Date();
    sec.style.transform = `rotate(${t.getSeconds() * 6 - 90}deg)`;
    min.style.transform = `rotate(${t.getMinutes()*6 - 90}deg)`;
    hour.style.transform = `rotate(${t.getHours()*30 - 90}deg)`
}, 1000);