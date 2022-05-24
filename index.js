
function timeFunc() {
    
    const time = new Date();
    
    var h = document.getElementsByClassName("hours").innerHTML = "00";
    var m = document.getElementsByClassName("minutes");
    var s = document.getElementsByClassName("seconds");
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();



    m = checkTime(m);
    s = checkTime(s);    

    setTimeout(timeFunc, 1000);
}