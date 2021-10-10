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