
function timeFunc() {
    
    const time = new Date();
    
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    var day = time.getDay();
    var month = time.getMonth();
    var date = time.getDate();
    var year = time.getFullYear();
    
    m = addZero(m);
    s = addZero(s);
    
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;

    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = month;
    document.getElementById('date').innerHTML = date;
    document.getElementById('year').innerHTML = year;
    
    setTimeout(timeFunc, 1000);

}

timeFunc();

function addZero(t) {
    if (t < 10) {t = "0" + t};
    return t;
}