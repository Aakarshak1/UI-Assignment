import React from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css';

import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/page1" exact activeClassName="none">
          <h1>Demo</h1>
        </NavLink>

        <NavLink to="/page1" exact activeClassName="active">
          <h3>Page1</h3>
        </NavLink>

        <NavLink to="/page2" exact activeClassName="active">
          <h3>Page2</h3>
        </NavLink>
      </nav>
      <hr className="divider" />
    </div>
  );
};

export default Layout;
