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
}

export default ProductsService;
