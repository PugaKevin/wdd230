//Get date
const copyrightyear = document.getElementById("currentdate");
copyrightyear.textContent = new Date().getFullYear();

//Get last modified
const lastmod = document.lastModified; document.getElementById("last").innerHTML = lastmod; 