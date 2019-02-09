import React from 'react';
import ProductsService from '../../services/productsService';

import Container from '../shared/Container';
import Title from '../shared/PageTitle';
import Category from './Category';

const desktops = ProductsService.getFeaturedDesktops();
const tablets = ProductsService.getFeaturedTablets();

const HomeView = () => {
  return (
    <Container>
      <Title title="Welcome to our store" />
      <Category title="Desktops" products={desktops} />
      <Category title="Tablets" products={tablets} />
    </Container>
  );
};

export default HomeView;
