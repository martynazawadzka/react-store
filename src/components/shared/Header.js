import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

function Header({ cartProducts }) {
  const totalPrice = cartProducts
    .map(product => product.price)
    .reduce((previousValue, currentValue) => previousValue + +currentValue, 0);

  return (
    <nav className="navbar">
      <Container>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Container>
      <div className="cart-info">
        <p className="cart-info-line">
          Products in cart: {cartProducts.length}
        </p>
        <p className="cart-info-line">
          Cost: {parseFloat(totalPrice).toFixed(2)}
        </p>
      </div>
    </nav>
  );
}

export default Header;
