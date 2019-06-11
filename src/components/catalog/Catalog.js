import React, { useEffect, useState } from "react";
import ProductsService from "../../services/productsService";

import Container from "../shared/Container";
import Title from "../shared/PageTitle";
import SearchPanel from "./SearchPanel";
import ProductContainer from "../../containers/ProductContainer";

const Catalog = ({
  getProducts,
  productsData: { products, isError, isLoading }
}) => {
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (!tempProducts.length && !tempProductsStatus && products.length) {
      setTempProducts(products);
      setTempProductsStatus(true);
    }
  });

  const [tempProducts, setTempProducts] = useState(products);
  const [tempProductsStatus, setTempProductsStatus] = useState(false);

  if (isError) {
    return <h2>Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const updateProducts = (producent, name) => {
    let filteredProducts = products;

    if (producent !== "All") {
      filteredProducts = ProductsService.filterByProducent(
        producent,
        filteredProducts
      );
    }

    if (name) {
      filteredProducts = ProductsService.filterByName(name, filteredProducts);
    }

    setTempProducts(filteredProducts);
  };

  const producentsOptions = ProductsService.getProducents(products);

  return (
    <Container>
      <Title title="Catalog" />
      <div className="catalog">
        <SearchPanel
          onOptionChange={updateProducts}
          producentsOptions={producentsOptions}
        />
        <div className="column-right">
          <div className="products">
            {tempProducts.map(product => (
              <ProductContainer
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
};

export default Catalog;
