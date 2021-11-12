const hambutton = document.querySelector('.hammiestyle');
const mainnav = document.querySelector('.navmenu')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//Get date
const copyrightyear = document.getElementById("currentdate");
copyrightyear.textContent = new Date().getFullYear();



const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var d = new Date();
var n = d.toLocaleDateString(); document.getElementById("time").innerHTML = n;
 /*Display banner */
const infobanner = document.querySelector('.infobanner');
const day = d.getDay();
console.log("If you are digging this far into my website, go call the phone number on the page. Promise you will laugh.");
if(day === 5) {
    infobanner.style.display = "block";
}else {
    infobanner.style.display = "none";
}

/*Counter for website */
const count = document.querySelector('#count');
const testingThis = "This is the test";

localStorage.setItem("THISISATEST", JSON.stringify(testingThis));
const myLocalData = JSON.parse(localStorage.getItem("THISISATEST")) ;
console.log(myLocalData) ;
