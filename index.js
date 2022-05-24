function timeFunc() {
    let time = new Date();
    
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();


    m = addZero(m);
    s = addZero(s);
    
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;

    setTimeout(timeFunc, 1000);

}

function addZero(t) {
    if (t < 10) {t = "0" + t};
    return t;
}

timeFunc();

function dateFunc() {

    var t = new Date();
    var d = new Date();
    var m = new Date();

    var days_array = new Array(7);
    days_array[0] = "Sunday";
    days_array[1] = "Monday";
    days_array[2] = "Tuesday";
    days_array[3] = "Wednesday";
    days_array[4] = "Thursday";
    days_array[5] = "Friday";
    days_array[6] = "Saturday";

    // const  = new Array["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

    var month_array = new Array(12);
    month_array[0] = "January";
    month_array[1] = "February";
    month_array[2] = "March";
    month_array[3] = "April";
    month_array[4] = "May";
    month_array[5] = "June";
    month_array[6] = "July";
    month_array[7] = "August";
    month_array[8] = "September";
    month_array[9] = "October";
    month_array[10] = "November";
    month_array[11] = "December";

    var day = days_array[d.getDay()];
    var month = month_array[t.getMonth()];
    var date = t.getDate();
    var year = t.getFullYear();
    
    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = month;
    document.getElementById('date').innerHTML = date;
    document.getElementById('year').innerHTML = year;
}
dateFunc();