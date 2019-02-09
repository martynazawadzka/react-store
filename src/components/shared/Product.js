import React from 'react';

const Product = props => {
  return (
    <div className="product">
      <img src={props.image} alt={props.name} />
      <p className="price">${props.price}</p>
      <h3>{props.name}</h3>
    </div>
  );
};

export default Product;
