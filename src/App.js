import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './components/pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './components/pages/shop/shop.component';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
