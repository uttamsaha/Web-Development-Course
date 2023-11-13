const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country);
    // }

    const countriesContainer = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countriesContainer.appendChild(div);
    })
}
loadCountries();