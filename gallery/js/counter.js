/*Counter for website */
const count = document.querySelector('#count');
const date1 = new Date();
const date2 = date1.getDate();  
const currdate = new Date() ; 
const currdate1 = currdate.getDate();
localStorage.setItem("LastDate", JSON.stringify(date2));
const myLocalData = JSON.parse(localStorage.getItem("LastDate")) ;
count.textContent =  Math.round(currdate1 - myLocalData) ; 