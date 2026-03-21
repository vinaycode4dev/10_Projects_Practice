const result=document.getElementById("timer");

/*
----we need to know
both in milisecond (timestamp) start from 1 jan 1970
1. current date - 
2. olympic start date - 14 july 2028
3. Time period left to start olympic 
--conversion
format: days hours min second
olympic - current date = eg.130005
        /1000              /60
130005  -----> 130second ------>2min
                         ---%60--->10second

130005  -----> 5milisecond------->
        %1000

4. Display result
*/
setInterval(()=>{
//1. Current date
const currentTime=Date.now();
//2. olympic date
const olympicTime= new Date(2028,6,14).getTime();
//3. time period
let period=olympicTime-currentTime;
//Finding milisecond ---s milisecond -> seconds -> min->hrs->day
//a)Into Day
const day=Math.floor((period)/(1000*60*60*24));
period%=1000*60*60*24;
//b)Into Hours
const hrs=Math.floor((period)/(1000*60*60));
period%=1000*60*60;
//c)Into Mintues
const min=Math.floor((period)/(1000*60));
period%=1000*60;
//d)Into seconds
const sec=Math.floor((period)/(1000));
period%=1000;
//4.Displaying result
result.textContent=`${day}:Days ${hrs}:Hours ${min}:Minutes ${sec}:Seconds`;
},1000)
