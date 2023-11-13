import React from 'react';
import './Stock.css';
import img1 from '../../../images/stock/wheel-icon.png';
import img2 from '../../../images/stock/acc-icon.png';
import img3 from '../../../images/stock/git-icon.png';
import img4 from '../../../images/stock/drop-icon.png';

const Stock = () => {
  return (
    <div className='stock-container'>
        <div className='stock'>
            <div className='stock-div'>
                <img src={img1} alt="" />
                <h4>4,850</h4>
                <p className='text-white fw-bold'>VEHICLES IN STOCK</p>
            </div>
            <div className='stock-div'>
                <img src={img2} alt="" />
                <h4>10,500</h4>
                <p className='text-white fw-bold'>HAPPY CUSTOMERS</p>
            </div>
            <div className='stock-div'>
                <img src={img3} alt="" />
                <h4>1,600</h4>
                <p className='text-white fw-bold'>BRANCHES</p>
            </div>
            <div className='stock-div'>
                <img src={img4} alt="" />
                <h4>4,200</h4>
                <p className='text-white fw-bold'>STORES</p>
            </div>
            
        </div>
    </div>
  )
}

export default Stock;