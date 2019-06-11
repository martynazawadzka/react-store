import { connect } from "react-redux";

import Catalog from "../components/catalog/Catalog";

import { getProducts } from "../actions";

const mapStateToProps = state => ({
    productsData: state.productsData,
});

const mapDispatchToProps = {
    getProducts
};

const CatalogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog);

export default CatalogContainer;