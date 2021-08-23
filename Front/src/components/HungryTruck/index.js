// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import components which always display
import Nav from '../Nav';
import Footer from '../Footer';

// == Import others components
import Main from '../Main';

import NewAccount from '../Account/NewAccount';
import LegalMentions from '../Footer/LegalMentions';
import Search from '../Search';
import NotFound from '../NotFound';
import LogIn from '../Account/LogIn';
import MyAccount from '../MyAccount';
import MyFoodTruck from '../MyAccount/MyFoodTruck';
import Faq from '../Footer/FAQ';
import Contact from '../Contact';

// == Import
import './styles.scss';

// == Composant
const HungryTruck = () => (
  <div className="hungrytruck">
    <Nav />
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/login" exact>
        <LogIn />
      </Route>
      <Route path="/new-account" exact>
        <NewAccount />
      </Route>
      <Route path="/legal" exact>
        <LegalMentions />
      </Route>
      <Route path="/search" exact>
        <Search />
      </Route>
      <Route path="/my-account" exact>
        <MyAccount />
      </Route>
      <Route path="/my-account/my-foodtruck" exact>
        <MyFoodTruck />
      </Route>
      <Route path="/faq" exact>
        <Faq />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default HungryTruck;
