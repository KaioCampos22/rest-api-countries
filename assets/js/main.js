const table = document.querySelector('#table');
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
        const currencyArray = Object.getOwnPropertyNames(country.currencies)
        const caption = document.querySelector('caption')
        caption.innerHTML = 'Countries List'
        const tbody = document.createElement('tbody')

        table.appendChild(tbody)
        tbody.innerHTML = `<tr>
        <td>${country.name.common}</td>
        <td>${country.area}</td>
        <td>${country.capital}</td>
        <td>${currencyArray}</td>
        </tr>`
        tdNome = document.querySelector('.nome');
        tdArea = document.querySelector('.area');
        tdCapital = document.querySelector('.capital');
        tdCurrencies = document.querySelector('.currencies');


        tdNome.innerHTML = 'NAME'
        tdArea.innerHTML = 'AREA'
        tdCapital.innerHTML = 'CAPITAL'
        tdCurrencies.innerHTML = 'CURRENCIES'



        // nome.appendChild(tdNome);
        // area.appendChild(tdArea);
        // capital.appendChild(tdCapital);
        // currencies.appendChild(tdCurrencies);
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

