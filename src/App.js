import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './components/pages/homepage/homepage.component';
// import { Hats } from './components/pages/hats/hats.component';
import ShopPage from './components/pages/shop/shop.component';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        {/* <Route exact path='/shop/hats' component={Hats} /> */}
      </Switch>
    </div>
  );
};

export default App;
