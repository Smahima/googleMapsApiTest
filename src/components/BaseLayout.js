import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class BaseLayout extends Component {
  render() {

return (

<div className="main">

  <div className="nav">
    <nav className="navbar">
      <NavLink className="navLink" activeClassName="selected" to="/"> About</NavLink>
      <NavLink className="navLink" activeClassName="selected" to="/search"> Search</NavLink>
      <NavLink className="navLink" activeClassName="selected" to="/resources"> Resources</NavLink>
    </nav>
  </div>

  <div className="map">

  </div>

</div>
    );
  }
}
