import products from '../data/products';

class ProductsService {
  static getProducts() {
    return products;
  }

  static getFeaturedDesktops() {
    return products.filter(
      product => product.category === 'desktop' && product.featured
    );
  }

  static getFeaturedTablets() {
    return products.filter(
      product => product.category === 'tablet' && product.featured
    );
  }

  static getProducents() {
    return products
      .map(product => product.manufacture)
      .filter(
        (manufacture, index, manufactures) =>
          manufactures.indexOf(manufacture) === index
      );
  }

  static filterByProducent(producent) {
    return products.filter(product => product.manufacture === producent);
  }

  static filterByName(name, products) {
    return products.filter(product =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}

export default ProductsService;
