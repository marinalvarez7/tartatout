import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer content has-text-centered">

        <div className="columns">
          <div className="column is-half">
            <img className="logo-footer" src="../logoTartatout.png" alt="logo tartatout"></img>
            <br></br>
            <strong>Tartatout</strong>
            <br></br>
            Made in 🇫🇷 by Marina and Emmanuelle
            <br></br>
            with 🐱 and 🍲 in 2020
            <br></br>
            <img className="logo-apple" src="../Download_on_the_App_Store_Badge_FR_RGB_blk_100517.svg" alt="logo apple store"></img>
            <br></br>
            <img className="logo-windows" src="../google-play-badge.png" alt="logo google play"></img>
          </div>
          <div className="column">
            <strong>Company</strong>
            <br></br>
            About us
            <br></br>
            Contact
            <br></br>
            Careers
            <br></br>
            Events
            <br></br>
            Terms
            <br></br>
            Privacy


          </div>
          <div className="column">
            <strong>Connect with us</strong>
            <br></br>
            <img className="logo-social" src="../f_logo_RGB-Blue_58.png" alt="logo facebook"></img>
            Facebook
            <br></br>
            <img className="logo-social" src="../Messenger_Logo_Color_RGB.png" alt="logo facebook messenger"></img>
            Messenger
            <br></br>
            <img className="logo-social" src="../glyph-logo_May2016.png" alt="logo instagram"></img>
            Instagram
            <br></br>
            <img className="logo-social" src="../badgeRGB-244px.png" alt="logo pinterest"></img>
            Pinterest
            <br></br>
            <img className="logo-social" src="../Monogram.png" alt="logo medium"></img>
            Medium
          </div>
        </div>
      </div>

    );
  }
}

export default Footer;


