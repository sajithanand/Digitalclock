function clockTime(){

    let date=new Date()
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()

    let AMorPM="AM";
    if(hour>=12){
        AMorPM="PM";
    }
    if(hour>12){
        hour=hour-12;
    }
    if(hour<10)
        hour="0"+hour;
    if(minute<10)
        minute="0"+minute;
    if(second<10)
        second="0"+second;


    clock.innerHTML=`${hour}:${minute}:${second} ${AMorPM}`
     
    setTimeout(() =>{clockTime()},1000)
}


clockTime()