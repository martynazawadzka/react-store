import React from "react";
import PropTypes from "prop-types";

const Product = ({ price, name, image, addToCart }) => {
  const addProductToCart = () => {
    addToCart({ name, price });
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="price">${price}</p>
      <h3>{name}</h3>
      <button className="add-button" onClick={addProductToCart}>
        Add to cart
      </button>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string
};

export default Product;
