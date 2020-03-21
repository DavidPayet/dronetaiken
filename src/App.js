import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import BasketPage from './pages/BasketPage';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={HomePage} />
        <Route onUpdate={window.scrollTo(0, 0)} exact path="/basket" component={BasketPage} />
      </Switch>
    </div>
  );
};

export default App;
