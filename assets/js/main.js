const countries = document.querySelector('#table');
const nome = document.querySelector(".nome");
const area = document.querySelector(".area");
const capital = document.querySelector(".capital");
const currencies = document.querySelector(".currencies");


fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => apiCountries(data))
    .catch(e => console.log("Error: ", e));

function apiCountries(countries) {
    countries.forEach(country => {
        tdNome = document.createElement('tr');
        tdArea = document.createElement('tr');
        tdCapital = document.createElement('tr');
        tdCurrencies = document.createElement('tr');

        const currencyArray = Object.getOwnPropertyNames(country.currencies)

        tdNome.innerHTML = country.name.common;
        tdArea.innerHTML = country.area;
        tdCapital.innerHTML = country.capital;
        tdCurrencies.innerHTML = currencyArray;



        nome.appendChild(tdNome);
        area.appendChild(tdArea);
        capital.appendChild(tdCapital);
        currencies.appendChild(tdCurrencies);
        if (country.capital === undefined) {
            return tdCapital.innerHTML = '-'
        }
        return;
    });
};



// for (let i = 0; i < countriesData; i++) {
//     options += `<option value="${countries.name.common}>${countries[i].name}">A</option>`
// }

// document.getElementById('countries').innerHTML = options;
// console.log(`${countries[2].area}, ${countries[1].aplha3code}`)



// function displayCountryInfo(countryNameCommon) {
//     const countryData = countries.find(country => country.name.common === countryNameCommon);
//     document.getElementById("capital").innerHTML = countryData.capital
//     // document.getElementById("capital").innerHTML = `${countries.capital}`;
//     // document.getElementById("area").innerHTML = `${countries.area}`;
//     // document.getElementById("currencies").innerHTML = `${countries.currencies}`;
// }

