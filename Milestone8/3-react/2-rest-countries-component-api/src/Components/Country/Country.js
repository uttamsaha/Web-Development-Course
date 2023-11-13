import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props);
    const {region, area, population,name,flags} = props.country;
    return (

         <div className='country'>
            <img width="250px" src={flags.png} alt="" />
            <h2>Country Name: {name.common}</h2>
            <h5>Populations: {population}</h5>
            <h5>Region: {region}</h5>
            <p>Area: {area}</p>
        </div>


        //receieve multiple data
        // <div className='country'>
        //     <h2>Country Name: {props.country.name.common}</h2>
        //     <h5>Populations: {props.country.population}</h5>
        //     <h5>Region: {props.country.region}</h5>
        //     <p>Area: {props.country.area}</p>
        // </div>



        //Normal way
        // <div className='country'>
        //     <h2>Country Name: {props.name}</h2>
        //     <h5>Populations: {props.population}</h5>
        //     <h5>Region: {props.region}</h5>
        //     <p>Area: {props.area}</p>
        // </div>
    )
}
export default Country;