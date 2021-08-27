// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from '../Search';

// == Import components
import IconUser from '../../containers/Nav/IconUser';

// == Import
import './nav.scss';
import hungryTruckLogo from '../../assets/img/logo.png';

// == Composant
const Nav = () => (
  <div className="header">
    <nav className="header-nav">
      <label className="burger" htmlFor="toggle-burger">☰
        <input type="checkbox" id="toggle-burger" />
      </label>
      <NavLink
        to="/"
        className="header-nav--logo"
        activeClassName="header-nav--item_active"
        exact
      >
        <img className="logo" src={hungryTruckLogo} alt="logo hungry truck" />
      </NavLink>
      <div className="header-nav--items">
        <NavLink
          to="/"
          className="header-nav--item"
          activeClassName="header-nav--item_active"
          exact
        >
          Accueil
        </NavLink>
        <NavLink
          to="/search"
          className="header-nav--item"
          activeClassName="header-nav--item_active"
          exact
        >
          Recherche
        </NavLink>
        <NavLink
          to="/contact"
          className="header-nav--item"
          activeClassName="header-nav--item_active"
          exact
        >
          Contact
        </NavLink>
      </div>
      <IconUser />
    </nav>
  </div>
);

// == Export
export default Nav;
