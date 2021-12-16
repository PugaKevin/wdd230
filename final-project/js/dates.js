//Get date
const copyrightyear = document.getElementById("currentdate");
copyrightyear.textContent = new Date().getFullYear();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const lastmod = document.lastModified; document.getElementById("last").innerHTML = lastmod; 