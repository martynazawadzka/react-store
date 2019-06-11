import { connect } from "react-redux";

import Home from "../components/home/Home";

import { getProducts } from "../actions";

const mapStateToProps = state => ({
  productsData: state.productsData
});

const mapDispatchToProps = {
  getProducts
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
