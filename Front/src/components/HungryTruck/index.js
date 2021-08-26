// == Import npm
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import components which always display
import Nav from '../Nav';
import Footer from '../Footer';

// == Import others components
import Main from '../Main';

import NewAccount from '../../containers/MyAccount/NewAccount';
import LegalMentions from '../Footer/LegalMentions';
import Search from '../../containers/Search';
import WhoAreWe from '../WhoAreWe';
import NotFound from '../NotFound';
import ZoomFT from '../ZoomFT';
import LogIn from '../../containers/MyAccount/LogIn';
import MyAccount from '../MyAccount';
import MyFoodTruck from '../MyAccount/MyFoodTruck';
import NewFoodTruck from '../MyAccount/MyFoodTruck/NewFoodTruck';
import Faq from '../Footer/FAQ';
import Contact from '../Contact';

// == Import
import './styles.scss';

// == Composant
const HungryTruck = () => {
  const [user, setUser] = useState(false);
  const [delAccount, setDelAccount] = useState(false);
  const [addFoodTruck, setAddFoodTruck] = useState(false);
  const [foodtruckDetails, setFoodtruckDetails] = useState(false);

  return (
    <div className="hungrytruck">
      <Nav user={user} setUser={setUser} />
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
        <Route path="/food-truck" exact>
          <ZoomFT />
        </Route>
        <Route path="/who-are-we" exact>
          <WhoAreWe />
        </Route>
        <Route path="/my-account" exact>
          <MyAccount
            delAccount={delAccount}
            setDelAccount={setDelAccount}
          />
        </Route>
        <Route path="/my-account/my-foodtruck" exact>
          <MyFoodTruck
            foodTruckDetails={foodtruckDetails}
            setAddFoodTruckDetails={setFoodtruckDetails}
          />
        </Route>
        <Route path="/my-account/my-foodtruck/new" exact>
          <NewFoodTruck
            addFoodTruck={addFoodTruck}
            setAddFoodTruck={setAddFoodTruck}
          />
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
};

// == Export
export default HungryTruck;
