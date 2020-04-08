import React from 'react';

import { Link } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';

const Homepage = (props) => {
  return (
    <>

      <NavBar />

      <div className="container has-text-centered">
        <h1 className="title">
          TARTATOUT
              </h1>
        <h2 className="subtitle">
          Libère le potentiel de ton frigo <span>😋</span>
              </h2>
      </div>

      <div className="hero-body">
        <div className="container">
          <figure className="image center">
            <img src="./RNFGG3.png" alt="meals"></img>
          </figure>
        </div>
      </div>

      <div className="columns is-8">
        <div className="title is-3 column is-one-third">
          <div><Link to="/ingredients">
            <h1>Choisis tes ingrédients </h1>
            <img className="img2-homepage" src="../gettyimages-1040578516-612x612.jpg" alt="photo frigo"></img>
          </Link>
          </div>
        </div>

        <div className=" title is-3 column is-one-third">
          <div><Link to="/recipes">
            <h1> Vois ce que tu peux faire</h1>
            <img className="img2-homepage" src="../gettyimages-1159018027-612x612.jpg" alt="help"></img>
          </Link>
          </div>
        </div>

        <div className="title is-3 column is-one-third">
          <div><Link to="/recipes">
            <h1>A toi de jouer </h1>
            <img className="img2-homepage" src="../gettyimages-1140410650-612x612.jpg" alt="photo cooking"></img>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />

    </>
  );
}

export default Homepage;

