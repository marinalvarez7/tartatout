import React, { Component } from "react";

import { Link } from 'react-router-dom';

import logoTartatout from '../img/logoTartatout.png';

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/"><img  src={logoTartatout} alt="Logo"/></Link>
              <a role="button" class="navbar-burger burger" aria-label="menu" is-active>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <div class="buttons">
                  <a className="button is-uppercase strong"><Link to="/ingredients">Mes ingrédients</Link></a>
                  <a className="button is-uppercase strong"><Link to="/recipes">Mes recettes</Link></a>
                  <a className="button is-uppercase strong"><Link to="/signup">Sign up</Link></a>
                  <a className="button is-uppercase strong"><Link to="/login">Log in</Link></a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;