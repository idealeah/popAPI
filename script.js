let population = "";
let infoText = document.getElementById("data-text");
let year = document.getElementById("year");

//make the API request
function getData() {
    //establish our data API url
    let url = "https://api.worldbank.org/v2/country/br/indicator/SP.POP.TOTL?format=JSON"

    // Use fetch() to make the request to the API
    fetch(url, {}).then(function (result) {
        return result.json()
    }).then(function (json) {
        displayResults(json); //if we get a response, then do this function
    }).catch(function (error) {
        console.log(error);
    });
}

//get the data we want out of the JSON file
function displayResults(json) {
    console.log(json);
    date = year.value;

    //iterate through the file to find the population for the requested date
    for (var i = 0; i < json[1].length; i++) {
        let entry = json[1];
        if (entry[i].date == date) {
            population = entry[i].value;
        }
    }

    console.log(date);
    console.log(population);

    //display it in our HTML
    if (population) {
        infoText.innerText = `Population: ${population}`;
    } else {
        infoText.innerText = `Sorry, that data is not available`;
    }

}