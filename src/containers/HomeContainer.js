import { connect } from "react-redux";

import Home from "../components/home/Home";

import { getProducts } from "../actions";

const mapStateToProps = state => ({
    products: state.products,
    isLoading: state.isLoading,
    isError: state.isError,
});

const mapDispatchToProps = {
    getProducts
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;
