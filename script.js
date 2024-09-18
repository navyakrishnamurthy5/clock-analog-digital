const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function clockTick(){
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000);

setInterval(()=>{
    const time = document.querySelector("#time");
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let day_night = "AM";
if(hours > 12){
    let day_night = "PM";
    hours = hours - 12;
}
if(hours < 10){
    hours = "0" + hours;
}
if( minutes < 10){
    minutes = "0" + minutes;
}
if( seconds < 10){
    seconds = "0" + seconds ;
}
time.textContent = hours + ":" + minutes + ":"+ seconds + " " + day_night;




});