import { connect } from "react-redux";

import Catalog from "../components/catalog/Catalog";

import { getProducts } from "../actions";

const mapStateToProps = state => ({
    products: state.products,
    isLoading: state.isLoading,
    isError: state.isError
});

const mapDispatchToProps = {
    getProducts
};

const CatalogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog);

export default CatalogContainer;