import { connect } from "react-redux";

import Header from "../components/shared/Header";

const mapStateToProps = state => ({
  cartProducts: state.cartProducts
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
