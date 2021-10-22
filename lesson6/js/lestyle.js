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
/*Calculate Wind chill*/
let temp = parseFloat(document.querySelector('#temp').textContent);
let speed = parseFloat(document.querySelector('#speed').textContent);
// Math time
let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
//round down to make sure we dont' get a long number
let windchill = Math.floor(wc);
//Output
document.querySelector('#windchilla').innerHTML = `${windchill}`; 
