import React from 'react';

const DishCard = ({ name, price, rating, description, image }) => {
  return (
    <div className="dish-card">
      <div className="dish-info">
        <h4>{name}</h4>
        <hr></hr>
        <p style={{display:'flex', justifyContent: 'space-between'}}><div style={{fontWeight: 'bolder'}}>₹{price} </div> <span style={{position: 'absolute', left: '200px'}}> ⭐{rating}</span></p>
        <p>{description}</p>
        
        
      </div>
      <div className="dish-image">
        <img src={image} alt={name} />
        <button>Add</button>
      </div>
    </div>
  );
};

export default DishCard;
