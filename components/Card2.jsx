import React from 'react';
import '../styles/card2.scss';


const Card2 = ({ imageSrc }) => {
    return (
      <div className="card">
        <img className='plus' src="../img/plus.png" alt="" />
        <img className="card-image" src={imageSrc} alt="" />
      </div>
    );
  };

export default Card2;
