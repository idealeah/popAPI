let population = "";
let infoText = document.getElementById("data-text");

function getData() {
    let url = "https://api.worldbank.org/v2/country/br/indicator/SP.POP.TOTL?format=JSON"


    // Use fetch() to make the request to the API
    fetch(url, {}).then(function (result) {
        return result.json()
    }).then(function (json) {
        displayResults(json);
    }).catch(function (error) {
        console.log(error);
    });
}

function displayResults(json) {
    population = json[1][0].value;

    console.log(json);
    console.log(population);

    if (population) {
        infoText.innerText = `Population: ${population}`;
    } else {
        infoText.innerText = `Sorry, that data is not available`;
    }

}