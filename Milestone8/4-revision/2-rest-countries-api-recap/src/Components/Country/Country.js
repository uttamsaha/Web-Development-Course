import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props);
    const {name, area, population, flags} = props.country;
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} ></img>
            <h4>Population: {population}</h4>
            <h5>Area: {area}</h5>
        </div>
    )
}
export default Country;