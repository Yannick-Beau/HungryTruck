// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import components
import IconUser from './IconUser';

// == Import
import './nav.scss';
import hungryTruckLogo from '../../assets/img/logo.png';

// == Composant
const Nav = () => (
  <div className="header">
    <nav className="header-nav">
    <label className="burger" for="toggle-burger">☰</label>
    <input type="checkbox" id="toggle-burger" />
    <NavLink
        to="/"
        className="header-nav--logo"
        activeClassName="header-nav--item_active"
        exact
      >
        <img className="logo" src={hungryTruckLogo} alt="logo hungry truck"/>
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
          to="/recherche"
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
