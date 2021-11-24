const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=1de9fc6716174ce6e8044634a4474860`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //get ids and set them
        document.getElementById("currently").textContent = jsObject.weather[0].description;
        document.getElementById("temp").textContent = jsObject.main.temp.toFixed(1);
        document.getElementById("speed").textContent = jsObject.wind.speed;
        document.getElementById("humi").textContent = jsObject.main.humidity;
                    /*Calculate Wind chill*/
            let temp = parseFloat(jsObject.main.temp);
            let speed = parseFloat(jsObject.wind.speed);
            // Math time
            let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
            //round down to make sure we dont' get a long number
            let windchill = Math.floor(wc);
            //Output
            if(temp <= 50 && speed > 3){
                let istemp = isNaN(temp);
                let isspeed = isNaN(speed);
                if(istemp === "True" || isspeed === "True"){
                    document.querySelector('#windchilla').innerHTML = `N/A`;
                }else{
                    document.querySelector('#windchilla').innerHTML = `${windchill}`; 
                }
            }else {
                document.querySelector('#windchilla').innerHTML = `N/A`;
            }
});

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=1de9fc6716174ce6e8044634a4474860`;
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecast) => {
        //weekdays and 18:00:00 time
        const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        let timelist = forecast.list.filter(x => x.dt_txt.includes("18:00:00"));
        //adding img,alt,temps using for loop
        for (let day = 0 ; day <= 4; day ++) {
            let newday = new Date(timelist[day].dt_txt);
            document.getElementById(`day${day+1}`).textContent = weekdays[newday.getDay()];
            document.getElementById(`temp${day+1}`).textContent = timelist[day].main.temp.toFixed(1);
            //variables for future changes
            const imgalt = timelist[day].weather[0].description;
            const imglink = 'https://openweathermap.org/img/wn/';
            const endfix = '@2x.png';
            //The setup
            const imagsrc = `${imglink}${timelist[day].weather[0].icon}${endfix}`;
            document.getElementById(`img${day+1}`).setAttribute('src', imagsrc);
            document.getElementById(`img${day+1}`).setAttribute('alt', imgalt);
        }
    });