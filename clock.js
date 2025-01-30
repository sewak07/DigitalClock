let hrs=document.querySelector(".hrs");
let min=document.querySelector(".min");
let sec=document.querySelector(".sec");
let date=document.querySelector(".date");
let month=document.querySelector(".month");
let day=document.querySelector(".day");
let year=document.querySelector(".year");

let currentTime=new Date();            //new Date(); it gives current Date
hrs.textContent=currentTime.getHours();
min.textContent=currentTime.getMinutes();
sec.textContent=currentTime.getSeconds();

date.textContent=currentTime.getDate();
month.textContent=currentTime.getMonth()+1;
year.textContent=currentTime.getFullYear();


//updates seconds every 1000 miliSecond i.e sec and others accoredingly.
setInterval(()=>{
    currentTime=new Date();
    sec.textContent=currentTime.getSeconds()
    hrs.textContent=currentTime.getHours();
    min.textContent=currentTime.getMinutes();
    date.textContent=currentTime.getDate();
    month.textContent=currentTime.getMonth()+1;
    year.textContent=currentTime.getFullYear();
},1000);


