import React, { Component } from "react";

import { Redirect } from 'react-router-dom';

import authService from './auth-service.js';

import Footer from '../Footer';
import NavBar from '../NavBar';

 class Profile extends Component {

  logout = (event) => {
    authService.logout()
      .then(response => {
        this.props.updateUser(false);
      })
    ;
  }

  handleUpload = (event) => {
    let formData = new FormData();
    formData.append('photo', event.target.files[0]);

    authService.upload(formData)
      .then(response => {
        this.props.updateUser(response);
      })
    ;
  }

  render() {
    return (
      <>
        {!this.props.user._id ? (
          <Redirect to="/" />
        ) : (
            <>

              <NavBar />

              <p class="title is-1 has-text-centered">Mon profil</p>

              <p class="title is-3">Mon email</p>
                  <span>{this.props.user.username}</span>
  
              <div className="field">
                <p className="control">
                  <button className="button is-success">
                    Changer mon mot de passe
                  </button>
                </p>
              </div>
            
              <div>
                <button className="control" onClick={this.logout}>Logout</button>
              </div>
              
              < Footer />

            </>
        
        )}
      </>
    );
  }
}

export default Profile;