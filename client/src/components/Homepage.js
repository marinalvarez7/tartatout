import React from 'react';

import Footer from './Footer';
import NavBar from './NavBar';

const Homepage = (props) => {
  return (
    <>

      <NavBar />

      <div className="hero-body">
        <div className="container">
          <figure className="image center">
            <img src="./RNFGG3.png" alt="meals"></img>
          </figure>
        </div>
      </div>

      <div className="container has-text-centered">
        <h1 className="title">
          TARTATOUT
        </h1>
        <h2 className="subtitle">
          Libère le potentiel de ton frigo 😋
        </h2>

      </div>

      <section>
        <p>
          Mettre un truc au milieu
      </p>

      </section>

      <Footer />
    </>
  );
}

export default Homepage;

