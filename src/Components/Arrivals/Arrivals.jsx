import React from 'react';
import './Arrivals.css';
import arrow_icon from '../Assets/arrow.png';
import arrivals_image from '../Assets/arrivals_image.png';

const Arrivals = () => {
  return (
    <div className='arrivals'>
      <div className="arrivals-left">
        <h2>New Arrivals Only</h2>
        <div>
          <p>Daiwa</p>
          <p>Airity</p>
          <p>2024</p>
        </div>
        <div className="arrivals-latest-btn">
          <div>Latest Arrivals</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="arrivals-right">
        <img src={arrivals_image} alt='' />
      </div>
    </div>
  )
}

export default Arrivals;