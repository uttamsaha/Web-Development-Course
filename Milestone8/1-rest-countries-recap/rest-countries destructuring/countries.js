const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    console.log(allCountriesHTML);

    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');

}
///Option-1
// const getCountryHTML = country => {
//     //Option 1
//     const {name,flags} = country;
//     return `
//      <div class="country">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}">
//      </div>
//     `;
// }


//option 2 parameter destructuring
const getCountryHTML = ({name, flags, area, region}) => {
    return `
     <div class="country">
        <h2>${name.common}</h2>
        <p>Area: ${area}</p>
        <p>Region: ${region}</p>
        <img src="${flags.png}">
     </div>
    `;
}

loadCountries();