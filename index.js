setInterval(()=>{
    d=new Date();
    var hoursTime=d.getHours();
    var MinutesTime=d.getMinutes();
    var secondsTime=d.getSeconds();
    /* using calculated formulas for hourhand=30*hourstime+minutestime/2 and  minutehand=6*minutestime and secondhand=6*secondstime */
    var hrotation=30*hoursTime+MinutesTime/2;
    var mrotation=6*MinutesTime;
    var srotation=6*secondsTime;

    /* Now to rotate the clock hands according to caculated values we use transform property */
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
},1000);
/* The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).*/