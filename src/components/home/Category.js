import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/ProductContainer';

const Category = ({title, products}) => {
  return (
    <section>
      <h2 className="header-small">{title}</h2>
      <div className="products">
        {products.map(product => (
          <Product
            image={product.image}
            price={product.amount}
            name={product.name}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
};

Category.propTypes = {
  products: PropTypes.array
};

export default Category;
