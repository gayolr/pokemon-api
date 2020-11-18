import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div className="container">
        <div className="link-container">
          <Link to="/favorites" className="link">Favorites</Link>
        </div>
      </div>
    );
  }

}

export default NavBar;