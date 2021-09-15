import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

  render() {
    return(
      <header>
        <nav className="navigator">
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre</Link>
        </nav>
      </header>
    );
  }
}

export default Nav;