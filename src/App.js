import React  from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import HeaderContainer from "./containers/HeaderContainer";
import HomePage from "./pages/home";
import CatalogPage from "./pages/catalog";
import About from "./components/about/About";
import Footer from "./components/shared/Footer";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <HeaderContainer />
      <Route exact path="/" component={HomePage} />
      <Route path="/catalog" component={CatalogPage} />
      <Route path="/about" component={About} />
      <Footer />
    </Provider>
  );
};

export default App;
