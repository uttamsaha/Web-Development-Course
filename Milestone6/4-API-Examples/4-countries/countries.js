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
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p> ${country.capital} </p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        div.classList.add('country');
        countriesContainer.appendChild(div);
    })
}
loadCountries();

const loadCountryByName = name =>{
    const url = `https://restcountries.com/v2/name/${name}
`
    fetch(url)
    .then(response => response.json())
    .then(data => displayCountryDetail(data[0])) //to access array 0 index of object
// console.log(url);
}

const displayCountryDetail = country => {
    // console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h4> ${country.name} </h4>
    <p> Population ${country.population}</p>
    <img width=200px src=" ${country.flag} " >
    `
}