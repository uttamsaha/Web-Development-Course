import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Hello from Countries</h1>
            {/* multiple data  */}
             <div className='countries'>
                 {
                countries.map(country => <Country
                 country = {country} key={country.car.cca3}></Country>)
            }
             </div>

            {/* normal way */}
            {/* {
                countries.map(country => <Country name={country.name.common} population = {country.population} area={country.area} region ={country.region}></Country>)
            } */}
        </div>
    )
}

export default Countries;