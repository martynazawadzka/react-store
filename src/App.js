import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/shared/Header';
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import About from './components/about/About';
import Footer from './components/shared/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    );
  }
}

export default App;
