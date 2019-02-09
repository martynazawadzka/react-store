import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

function Header() {
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
    </nav>
  );
}

export default Header;
