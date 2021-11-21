const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=1de9fc6716174ce6e8044634a4474860`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsobject) => {
        console.log(js0bject);
        // Get the current weather description, high temperature, wind speed and, humidity and set it to 
        // their respective ID on HTML document
        document.getElementById("current").textContent = jsObject.weather[0].description
        document.getElementById("temp").textContent = jsObject.main.temp;
        document.getElementById("speed").textContent = jsObject.wind.speed;
        document.getElementById("humi").textContent = jsObject.main.humidity

        // Declare variables to get and store high temperature and wind speed from the jsObject file
        let temp = parseFloat(jsObject.main.temp_max);
        let speed = parseFloat(jsObject.wind.speed);

    });
