// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import components
import IconUser from '../../containers/Nav/IconUser';

// == Import
import './nav.scss';
import hungryTruckLogo from '../../assets/img/logo.png';

// == Composant
const Nav = ({ hiddenNavBar, changeHiddenNavBar }) => (
  <div className="header">
    <nav className="header-nav">
      <label
        className="navbar-burger"
        htmlFor="burgar-bar"
        onClick={() => {
          changeHiddenNavBar();
        }}
      >☰
        <input type="checkbox" className="burger-bar" />
      </label>
      <NavLink
        to="/"
        className="header-nav--logo"
        activeClassName="header-nav--item_active"
        exact
      >
        <img className="logo" src={hungryTruckLogo} alt="logo hungry truck" />
      </NavLink>
      <div className={`header-nav--items ${hiddenNavBar ? 'show-nav--items' : 'hidden-nav--items'}`}>
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

Nav.propTypes = {
  hiddenNavBar: PropTypes.bool.isRequired,
  changeHiddenNavBar: PropTypes.func.isRequired,
};

// == Export
export default Nav;
