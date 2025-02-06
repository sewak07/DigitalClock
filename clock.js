let hrs=document.querySelector(".hrs");
let min=document.querySelector(".min");
let sec=document.querySelector(".sec");
let date=document.querySelector(".date");
let month=document.querySelector(".month");
let day=document.querySelector(".day");
let year=document.querySelector(".year");


function time(){
let currentTime=new Date();     
hrs.textContent=currentTime.getHours();
min.textContent=currentTime.getMinutes();
sec.textContent=currentTime.getSeconds();

date.textContent=currentTime.getDate();
month.textContent=currentTime.getMonth()+1;
year.textContent=currentTime.getFullYear();
}
setInterval(time,1000);
time();



