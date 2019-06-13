import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import geekLogo from '../images/geek_icon.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/badges">
            <img className="Navbar__brand-logo" src={geekLogo} height="40px" alt="Logo" />
            <span className="font-weight-light">Geek </span>
            <span className="font-weight-bold">{"API"}</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
