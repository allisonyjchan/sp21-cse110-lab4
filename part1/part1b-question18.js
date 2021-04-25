function getCurrentTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    return time;
}

setInterval(function(){console.log(getCurrentTime());}, 1000);
