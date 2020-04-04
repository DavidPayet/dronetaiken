import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/panier" component={CartPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
