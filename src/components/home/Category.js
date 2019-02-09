import React from 'react';

import Product from '../shared/Product';

const Category = props => {
  return (
    <section>
      <h2 className="header-small">{props.title}</h2>
      <div className="products">
        {props.products.map(product => (
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

export default Category;
