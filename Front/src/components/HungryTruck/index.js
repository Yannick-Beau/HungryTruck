// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import components which always display
import Nav from '../Nav';
import Footer from '../Footer';

// == Import others components
import Main from '../Main';
import LegalMentions from '../Footer/LegalMentions';
import Search from '../Search';
import NotFound from '../NotFound';
import MyAccount from '../MyAccount';

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
      <Route path="/legal" exact>
        <LegalMentions />
      </Route>
      <Route path="/search" exact>
        <Search />
      </Route>
      <Route path="/my-account" exact>
        <MyAccount />
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
