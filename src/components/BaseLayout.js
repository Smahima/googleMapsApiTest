import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class BaseLayout extends Component {
  render() {

return (

      <div className="nav">
        <nav className="navbar">
          <div className="container-fluid">
            <NavLink className="navLink" activeClassName="selected" to="/"> About</NavLink>
            <NavLink className="navLink" activeClassName="selected" to="/search"> Search</NavLink>
            <NavLink className="navLink" activeClassName="selected" to="/resources"> Resources</NavLink>
          </div>
        </nav>
      </div>
    );
  }
}
