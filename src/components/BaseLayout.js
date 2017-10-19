import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class BaseLayout extends Component {
  render() {

return (

      <div className="nav">
        <nav className="navbar">
          <div className="container-fluid">
            <NavLink className="navLink" activeClassName="selected" to="/"> Home</NavLink>
            <NavLink className="navLink" activeClassName="selected" to="/about"> About</NavLink>
            <NavLink className="navLink" activeClassName="selected" to="/allprojects"> Projects </NavLink>
            <NavLink className="navLink" activeClassName="selected" to="/resume"> Resume</NavLink>
          </div>
        </nav>
      </div>
    );
  }
}
