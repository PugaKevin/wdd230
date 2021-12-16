var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

fetch("../final-project/json/business.json")
    .then((response) => response.json())
    .then((business) => {
      console.log(business);
      for(let b = 0; b <= 6; b ++){
        let bname = document.createElement("h2");
        let tel = document.createElement("p");
        let des = document.createElement("p");
        let web = document.createElement("p");
        let address = document.createElement("p");
        let div = document.createElement("div");
        let card = document.createElement("article");
    
    
        bname.textContent = business[b].name;
        tel.textContent = `Phone: ${business[b].tel}`;
        des.textContent = business[b].description;
        web.textContent = business[b].website;
        address.textContent = `Address ${business[b].address}`;
        div.setAttribute("class", "businesscard");
        card.setAttribute("class", "Business1");
        div.appendChild(bname);
        div.appendChild(tel);
        div.appendChild(address);
        div.appendChild(des);
        div.appendChild(web);
        card.appendChild(div);
    
        document.querySelector(`#business${b}`).appendChild(card);
      }

    });

//This code is just incase live server isn't available
/*const business = [
    {
        "name": "Wing Nuts",
        "tel": "435-272-2074",
        "website": "https://www.bakedwingsarebetter.com/st-george.html",
        "address": "250 Red Cliffs Drive #2 St. George UT 84790",
        "description": "All about the wings baby"
    },
    {
        "name": "Southern Utah HOme Builders Association",
        "tel": "435-674-1400",
        "website": "https://www.suhba.com/",
        "address": "2303 N. Coral Canyon Blvd, Ste 100-A Washington, UT 84780",
        "description": "Support Home building industry"
    },
    {
        "name": "Holiday Inn Express & Suites",
        "tel": "435-986-1313",
        "website": "https://www.ihg.com/holidayinnexpress/hotels/us/en/washington/wssut/hoteldetail",
        "address": "2450 N Town Center Dr. Washington, UT 84780",
        "description": "Find a place to stay"
    },
    {
        "name": "Huntsman World Senior Games",
        "tel": "435-674-0550",
        "website": "https://seniorgames.net/",
        "address": "1070 W 1600 Stc A-103 St. George, UT 84770",
        "description": "Sport for Games for seniors"
    },
    {
        "name": "The Crepe Station",
        "tel": "435-627-3161",
        "website": "https://thecrepestation.business.site/",
        "address": "520 W. Telegraph St. ste #2 Washington, UT 84780",
        "description": "Delicious Crepes"
    },
    {
        "name": "Red Cliffs Mall",
        "tel": "435-986-1980 ",
        "website": "https://www.redcliffsmall.com/",
        "address": "1770 E. Red Cliffs Drive, Ste. 114 St. George, UT 84790 ",
        "description": "There is something for everyone"
    }
    ,{
        "name": "Tuacahn Center for the Arts",
        "tel": "435-652-3300",
        "website": "https://www.tuacahn.org/",
        "address": "1100 Tuacahn Drive Ivins, Utah 84738",
        "description": "Theater!"
    }
]
console.log(business);


for(let b = 0; b <= 6; b ++){
    let bname = document.createElement("h2");
    let tel = document.createElement("p");
    let des = document.createElement("p");
    let web = document.createElement("p");
    let address = document.createElement("p");
    let div = document.createElement("div");
    let card = document.createElement("article");


    bname.textContent = business[b].name;
    tel.textContent = `Phone: ${business[b].tel}`;
    des.textContent = business[b].description;
    web.textContent = business[b].website;
    address.textContent = `Address ${business[b].address}`;
    div.setAttribute("class", "businesscard");
    card.setAttribute("class", "Business1");
    div.appendChild(bname);
    div.appendChild(tel);
    div.appendChild(address);
    div.appendChild(des);
    div.appendChild(web);
    card.appendChild(div);

    document.querySelector(`#business${b}`).appendChild(card);
}*/