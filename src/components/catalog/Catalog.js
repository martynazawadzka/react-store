import React from 'react';
import ProductsService from '../../services/productsService';

import Container from '../shared/Container';
import Title from '../shared/PageTitle';
import SearchPanel from './SearchPanel';
import Product from '../shared/Product';

const products = ProductsService.getProducts();

class Catalog extends React.Component {
  constructor() {
    super();
    this.state = { products };
  }
  updateProducts = (producent, name) => {
    let filteredProducts = products;

    if (producent !== 'All') {
      filteredProducts = ProductsService.filterByProducent(producent);
    }

    if (name) {
      filteredProducts = ProductsService.filterByName(name, filteredProducts);
    }
    this.setState({ products: filteredProducts });
  };
  render() {
    return (
      <Container>
        <Title title="Catalog" />

        <div className="catalog">
          <SearchPanel onOptionChange={this.updateProducts} />

          <div className="column-right">
            <div className="products">
              {this.state.products.map(product => (
                <Product
                  name={product.name}
                  price={product.amount}
                  image={product.image}
                  key={product.id}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Catalog;
