import React, { useEffect } from "react";
import ProductsService from "../../services/productsService";

import Container from "../shared/Container";
import Title from "../shared/PageTitle";
import Category from "./Category";

const HomeView = ({
  getProducts,
  productsData: { products, isError, isLoading }
}) => {
  useEffect(() => {
    getProducts();
  }, []);

  if (isError) {
    return <h2>Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const desktops = ProductsService.getFeaturedDesktops(products);
  const tablets = ProductsService.getFeaturedTablets(products);

  return (
    <Container>
      <Title title="Welcome to our store" />
      <Category title="Desktops" products={desktops} />
      <Category title="Tablets" products={tablets} />
    </Container>
  );
};

export default HomeView;
