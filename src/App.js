import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './components/pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInAndSignOutPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signIn' component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
};

export default App;
