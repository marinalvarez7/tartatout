import React, { Component } from "react";

import { Link, Redirect } from 'react-router-dom';

import logoTartatout from '../img/logoTartatout.png';

class NavBar extends Component {
  render() {
    return (
      <>
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <Link to="/"><img  src={logoTartatout} alt="Logo"/></Link>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item"><Link to="/ingredients">Mes ingrédients</Link></a>
                  <a className="navbar-item"><Link to="/recipes">Mes recettes</Link></a>
                  <a className="navbar-item"><Link to="/signup">Sign up</Link></a>
                  <a className="navbar-item"><Link to="/login">Log in</Link></a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default NavBar;