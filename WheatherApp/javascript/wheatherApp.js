/*/const { response } = require("express");
var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries', //api url for country state city
    cKey: 'NHNTVDc4UjhKY1FsNjZBcDZ3NDF1bm9mODJrNnQ1R1NTQ2IwYWl2ZA=='  //the api key
}

var countrySelect = document.querySelector('.country'),
    stateSelect = document.querySelector('.state'),
    citySelect = document.querySelector('.city');

function loadCountries() {
    let apiEndPoint = config.cUrl;

    fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.cKey}})
    .then(Response => Response.json())
    .then(data => {
        //console.log(data);

        data.forEach(country => {
            const option = document.createElement('option')
            option.value = country.iso2
            option.textContent = country.name
            countrySelect.appendChild(option)
        });
    }) 
    .catch(error => console.error('Error loading countries:', error))

    stateSelect.disabled = true
    citySelect.disabled = true
    stateSelect.style.pointerEvents = 'none'
    citySelect.style.pointerEvents = 'none'
}

function loadStates() {
    stateSelect.disabled = false
    citySelect.disabled = true
    stateSelect.style.pointerEvents = 'auto'
    citySelect.style.pointerEvents = 'none'

    const selectedCountryCode = countrySelect.value
    //console.log(selectedCountryCode);
    //"https://api.countrystatecity.in/v1/countries/IN/states"
    stateSelect.innerHTML = '<option value="">Select State</option>'//To clear the existing states

    fetch(`${config.cUrl}/${selectedCountryCode}/states`, {headers: {"X-CSCAPI-KEY": config.cKey}})
    .then(Response => Response.json())
    .then(data => {
        //console.log(data);

        data.forEach(state => {
            const option = document.createElement('option')
            option.value = state.iso2
            option.textContent = state.name
            stateSelect.appendChild(option)
        })
    })
    .catch(error => console.error('Error loading states:', error))
}

function loadCities() {
    citySelect.disabled = false
    citySelect.style.pointerEvents = 'auto'

    const selectedCountryCode = countrySelect.value
    const selectedStateCode = stateSelect.value
    //console.log(selectedCountryCode, selectedStateCode);
    citySelect.innerHTML = '<option value="">Select City</option>'//To clear the existing option

   fetch(`${config.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/cities`, {headers: {"X-CSCAPI-KEY": config.cKey}})
    .then(Response => Response.json())
    .then(data => {
        //console.log(data);

        data.forEach(city => {
            const option = document.createElement('option')
            option.value = city.iso2
            option.textContent = city.name
            citySelect.appendChild(option)
        })
    })
    .catch(error => console.error('Error loading cities:', error))
}

// https://api.countrystatecity.in/v1/countries/[ciso]/states/[siso]/cities
window.onload = loadCountries

const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
//const cityInput = document.getElementById('city');
//the object that will do all of our request work: an XMLHttpRequest
let apiRequest = new XMLHttpRequest();
apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
        if(apiRequest.status === 404 ){
            reportSection.textContent = 'City not found!';
        }
        const response = JSON.parse(apiRequest.response);
        reportSection.textContent = 'The weather in ' + response.name + ' is ' + response.weather[0].main + '.';
    }
};

cityForm.addEventListener('submit', ($event) =>{
    //$event.preventDefault();
    //const chosenCity = cityInput.value;
    const chosenCity = citySelect.value;
    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e');
    apiRequest.send();
});*/

//const { response } = require("express"); // This line is not needed in browser JavaScript

var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    cKey: 'NHNTVDc4UjhKY1FsNjZBcDZ3NDF1bm9mODJrNnQ1R1NTQ2IwYWl2ZA==' // Replace with your actual API key
};

var countrySelect = document.querySelector('.country'),
    stateSelect = document.querySelector('.state'),
    citySelect = document.querySelector('.city');

function loadCountries() {
    fetch(config.cUrl, { headers: { "X-CSCAPI-KEY": config.cKey } })
        .then(Response => Response.json())
        .then(data => {
            countrySelect.innerHTML = '<option value="">Select Country</option>'; // Add default option
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.iso2;
                option.textContent = country.name;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading countries:', error));

    stateSelect.disabled = true;
    citySelect.disabled = true;
    stateSelect.style.pointerEvents = 'none';
    citySelect.style.pointerEvents = 'none';
}

function loadStates() {
    stateSelect.disabled = false;
    citySelect.disabled = true;
    stateSelect.style.pointerEvents = 'auto';
    citySelect.style.pointerEvents = 'none';

    const selectedCountryCode = countrySelect.value;
    stateSelect.innerHTML = '<option value="">Select State</option>';

    fetch(`${config.cUrl}/${selectedCountryCode}/states`, { headers: { "X-CSCAPI-KEY": config.cKey } })
        .then(Response => Response.json())
        .then(data => {
            data.forEach(state => {
                const option = document.createElement('option');
                option.value = state.iso2;
                option.textContent = state.name;
                stateSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading states:', error));
}

function loadCities() {
    citySelect.disabled = false;
    citySelect.style.pointerEvents = 'auto';

    const selectedCountryCode = countrySelect.value;
    const selectedStateCode = stateSelect.value;
    citySelect.innerHTML = '<option value="">Select City</option>';

    fetch(`${config.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/cities`, { headers: { "X-CSCAPI-KEY": config.cKey } })
        .then(Response => Response.json())
        .then(data => {
            data.forEach(city => {
                const option = document.createElement('option');
                option.value = city.name; // Use city name as value
                option.textContent = city.name;
                citySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading cities:', error));
}


window.onload = loadCountries;

countrySelect.addEventListener('change', loadStates);
stateSelect.addEventListener('change', loadCities);

const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');

let apiRequest = new XMLHttpRequest();
apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
        if (apiRequest.status === 404) {
            reportSection.textContent = 'City not found!';
        } else if (apiRequest.status === 200) {
            const response = JSON.parse(apiRequest.response);
            reportSection.textContent = 'The weather in ' + response.name + ' is ' + response.weather[0].main + '.';
        }
    }
};


cityForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const chosenCity = citySelect.value;
    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e');
    apiRequest.send();
});
