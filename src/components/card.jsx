import "../assets/card.css";

import React from 'react';

const Card = (props) => {
  return (
    // <div className="bottom-flex">
              
    <div className="card">
      <div className="card-content">
        <div className="box-img">
          <div className="img" style={{backgroundImage : `url(./img/${props.imgName})`, backgroundPosition : `center ${props.position}`}}></div>
        </div>
        <div className="card-content-details">
          <div className="title">{props.title}</div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, et!</p>
          <button>Discover</button>
        </div>
      </div>
    </div>
  
  /* </div> */
  );
}

export default Card;
