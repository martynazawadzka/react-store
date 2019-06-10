import React from "react";
import PropTypes from "prop-types";

const Product = props => {
  return (
    <div className="product">
      <img src={props.image} alt={props.name} />
      <p className="price">${props.price}</p>
      <h3>{props.name}</h3>
      <button className="add-button">Add to cart</button>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string
};

export default Product;
