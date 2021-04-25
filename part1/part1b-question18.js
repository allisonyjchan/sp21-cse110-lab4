function printNums() {
    console.log(1);
    setTimeout( function() { console.log(2); }, 1000);
    setTimeout( function() { console.log(3); }, 0);
    console.log(4);
}
printNums();

/*
function getCurrentTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    return time;
}

setInterval(function(){console.log(getCurrentTime());}, 1000);
*/