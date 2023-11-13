import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/LocalStorage';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    //3 ways of data load
    //commented object way 1 of data load
    const cosmetics3 = [
        {id: 1, name: 'Alta', price:100},
        {id: 2, name: 'Snow', price:100},
        {id: 3, name: 'Powder', price:200},
        {id: 4, name: 'Lipsticks', price:400},
        {id: 5, name: 'Curi', price:200},
        {id: 6, name: 'Ear-Ring', price:300},
        {id: 7, name: 'Tip', price:500}
    ]

    //JSON created from json generator way 2 of data load
    const cosmetics = [
  {
    "id": "623aa7c31533ffffcbe93f9e",
    "price": 1290,
    "name": "Lolita Mccullough"
  },
  {
    "id": "623aa7c319c456d703a05c4b",
    "price": 3963,
    "name": "Fuller Underwood"
  },
  {
    "id": "623aa7c395f85cce80b23172",
    "price": 2566,
    "name": "Lula Bernard"
  },
  {
    "id": "623aa7c3f3241df40a541c3c",
    "price": 1791,
    "name": "Chang Phelps"
  },
  {
    "id": "623aa7c372878fa333b907ea",
    "price": 910,
    "name": "Christie Snyder"
  },
  {
    "id": "623aa7c3ad29803655ecf7b8",
    "price": 3511,
    "name": "Vang Pitts"
  }
]

//way 3 of data load
    const [cosmetics2, setCosmetics2] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(response => response.json())
        .then(data => setCosmetics2(data))
    },[])

    const total = getTotal(cosmetics); //importing getTotal function & calculating 
    return(
        <div>
            <h1>Welcome to Cosmetics Store</h1>
            <h2>Total price = {total}</h2>
            <h1>From HardCore Object</h1>
              {
                cosmetics3.map(cosmetic => <Cosmetic cosmetic = {cosmetic} key={cosmetic.id}></Cosmetic>)
            }
            <h1>From JSON array of object</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic = {cosmetic} key={cosmetic.id}></Cosmetic>)
            }
            <h1>From Data.json</h1>
              {
                cosmetics2.map(cosmetic => <Cosmetic cosmetic = {cosmetic} key={cosmetic.id}></Cosmetic>)
            }
        </div>
    )
}
export default Cosmetics;