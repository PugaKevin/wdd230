const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=37.2505&lon=-113.2513&units=imperial&exclude=&appid=1de9fc6716174ce6e8044634a4474860`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //get ids and set them

        document.getElementById("currently").textContent = jsObject.current.weather[0].description;
        document.getElementById("temp").textContent = jsObject.current.temp.toFixed(1);
        document.getElementById("humi").textContent = jsObject.current.humidity;
});

const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=37.2505&lon=-113.2513&units=imperial&exclude=&appid=1de9fc6716174ce6e8044634a4474860`;
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecast) => {
        //weekdays and 18:00:00 time
        console.log(forecast)
        const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
       
        //adding img,alt,temps using for loop
        for (let day = 0 ; day <= 3; day ++) {
            let newday = new Date(forecast.current.dt);
            let currentday = weekdays[newday.getDay()];
            let index = weekdays.indexOf(currentday,0);
            let nextday = weekdays[index+day];
            let newtemp = forecast.daily[index+day].temp.day;
            document.querySelector(`#day${day+1}`).textContent = nextday;
            document.querySelector(`#temp${day+1}`).textContent = newtemp;
            //variables for future changes
            const imgalt = forecast.daily[day].weather[0].description;
            const imglink = 'https://openweathermap.org/img/wn/';
            const endfix = '@2x.png';
            //The setup
            const imagsrc = `${imglink}${forecast.daily[day].weather[0].icon}${endfix}`;
            document.getElementById(`img${day+1}`).setAttribute('src', imagsrc);
            document.getElementById(`img${day+1}`).setAttribute('alt', imgalt);
        }

    
    });