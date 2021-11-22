const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
        .then(function (jsonObject) {
            const towns = jsonObject ["towns"]
            for (let i = 0; i < towns.length; i++) {
                let townfinder = `${towns[i].name}` ; 
                if(townfinder === "Preston") {
                    let h2 = document.createElement("h2");
                    let card = document.createElement("article");
                    let image = document.createElement("img");
                    let year = document.createElement("p");
                    let population = document.createElement("p");
                    let themotto = document.createElement("p");
                    let rain = document.createElement("p");
                    let div = document.createElement("div");
                    let data = document.createElement("div");
                    //pulling from json and attaching information to attributes.
                    image.setAttribute("alt", `${towns[i].name}`);
                    image.setAttribute("src", `../lesson9/images/${towns[i].photo}`);
                    div.setAttribute("class", "image");
                    card.setAttribute("class", `town${i}`);
                    themotto.setAttribute("class", "motto");
                    h2.textContent = towns[i].name;
                    data.setAttribute("class", "content");
                    themotto.textContent = towns[i].motto;
                    population.textContent = `Population: ${towns[i].currentPopulation}`;
                    year.textContent = `Founded in: ${towns[i].yearFounded}`;
                    rain.textContent = `Rain Fall: ${towns[i].averageRainfall}`;
                    //adding information
                    div.appendChild(image);
                    card.appendChild(data);
                    card.appendChild(div);
                    data.appendChild(h2);
                    data.appendChild(themotto);
                    data.appendChild(year);
                    data.appendChild(population);
                    data.appendChild(rain);
                    //output everything to card
                    document.querySelector('section.createtown').appendChild(card);
                } else if (townfinder === "Fish Haven") {
                    let h2 = document.createElement("h2");
                    let card = document.createElement("article");
                    let image = document.createElement("img");
                    let year = document.createElement("p");
                    let population = document.createElement("p");
                    let themotto = document.createElement("p");
                    let rain = document.createElement("p");
                    let div = document.createElement("div");
                    let data = document.createElement("div");
                    //pulling from json and attaching information to attributes.
                    image.setAttribute("alt", `${towns[i].name}`);
                    image.setAttribute("src", `../lesson9/images/${towns[i].photo}`);
                    div.setAttribute("class", "image");
                    card.setAttribute("class", `town${i}`);
                    themotto.setAttribute("class", "motto");
                    h2.textContent = towns[i].name;
                    data.setAttribute("class", "content");
                    themotto.textContent = towns[i].motto;
                    population.textContent = `Population: ${towns[i].currentPopulation}`;
                    year.textContent = `Founded in: ${towns[i].yearFounded}`;
                    rain.textContent = `Rain Fall: ${towns[i].averageRainfall}`;
                    //adding information
                    div.appendChild(image);
                    card.appendChild(data);
                    card.appendChild(div);
                    data.appendChild(h2);
                    data.appendChild(themotto);
                    data.appendChild(year);
                    data.appendChild(population);
                    data.appendChild(rain);
                    //output everything to card
                    document.querySelector('section.createtown').appendChild(card);

                } else if (townfinder === "Soda Springs") {
                    let h2 = document.createElement("h2");
                    let card = document.createElement("article");
                    let image = document.createElement("img");
                    let year = document.createElement("p");
                    let population = document.createElement("p");
                    let themotto = document.createElement("p");
                    let rain = document.createElement("p");
                    let div = document.createElement("div");
                    let data = document.createElement("div");
                    //pulling from json and attaching information to attributes.
                    image.setAttribute("alt", `${towns[i].name}`);
                    image.setAttribute("src", `../lesson9/images/${towns[i].photo}`);
                    div.setAttribute("class", "image");
                    card.setAttribute("class", `town${i}`);
                    themotto.setAttribute("class", "motto");
                    h2.textContent = towns[i].name;
                    data.setAttribute("class", "content");
                    themotto.textContent = towns[i].motto;
                    population.textContent = `Population: ${towns[i].currentPopulation}`;
                    year.textContent = `Founded in: ${towns[i].yearFounded}`;
                    rain.textContent = `Rain Fall: ${towns[i].averageRainfall}`;
                    //adding information
                    div.appendChild(image);
                    card.appendChild(data);
                    card.appendChild(div);
                    data.appendChild(h2);
                    data.appendChild(themotto);
                    data.appendChild(year);
                    data.appendChild(population);
                    data.appendChild(rain);
                    //output everything to card
                    document.querySelector('section.createtown').appendChild(card);
                }
            }
         
     });