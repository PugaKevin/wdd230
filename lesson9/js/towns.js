const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
        .then(function (jsonObject) {
            const towns = jsonObject ["towns"]
            //calling functions to create towns
            gettowns(towns, 0);
            gettowns(towns, 2);
            gettowns(towns, 6);
    });
function gettowns(list, index) {
    //Creating variables will be used
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
    image.setAttribute("alt", `${list[index].name}`);
    image.setAttribute("src", `../lesson9/images/${list[index].photo}`);
    div.setAttribute("class", "image");
    card.setAttribute("class", `town${index}`);
    themotto.setAttribute("class", "motto");
    h2.textContent = list[index].name;
    data.setAttribute("class", "content");
    themotto.textContent = list[index].motto;
    population.textContent = `Population: ${list[index].currentPopulation}`;
    year.textContent = `Founded in: ${list[index].yearFounded}`;
    rain.textContent = `Rain Fall: ${list[index].averageRainfall}`;
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