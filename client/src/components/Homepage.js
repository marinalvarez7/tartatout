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
            <img src="https://media.gettyimages.com/photos/collage-of-various-pasta-dishes-picture-id1130524585?b=1&k=6&m=1130524585&s=612x612&w=0&h=7sMAFyCrR9oEetb_iz0UHrF1T1w8pDaZzdOvMvZfxFA=" alt="meals"></img>
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

