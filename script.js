// XMLHTTPRequest
const URL = "https://restcountries.eu/rest/v2/all";

const getCountries = () => {
    const res = new XMLHttpRequest();

    res.open("GET", URL);
    //res.responseText = "json";

    res.onload = () => {
        const data = res.response;

        const countries = JSON.parse(data)
            .filter((el) => {
                return el.population < 20000000;
            })
            .map((el) => ({
                name: el.name,
                population: el.population,
            }));
        console.log(countries);
    };
    res.send();
};

getCountries();