import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import authService from './auth-service.js';

import NavBar from '../NavBar';
import Footer from '../Footer';

class Signup extends Component {
  state = {
    username: "",
    password: "",
    campus: "",
    course: "",

    error: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // 1. Signup
    authService.signup(this.state.username, this.state.password)
      .then(() => {
        this.setState({ error: "" });

        // 2. then, update with user infos
        authService.edit(this.state.username, this.state.campus, this.state.course)
          .then(response => {
            this.setState({ error: "" });

            this.props.updateUser(response);
            this.props.history.push('/');
          })
          .catch(err => this.setState({ error: err.response.data.message }))
      })
      .catch(err => this.setState({ error: err.response.data.message }))
      ;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (

      <div>

        <NavBar />

        <h1 className="title is-1 has-text-centered">Sign up</h1>

        <form onSubmit={this.handleSubmit}>

          {this.state.error && (
            <p className="error">{this.state.error}</p>
          )}

          <label class="label">Email</label>
          <div className="field column is-one-quarter">
            <p className="control">
              <input className="input" type="email" name="email" placeholder="toto@gmail.com" value={this.state.username} onChange={this.handleChange}></input>
            </p>
          </div>


          <label class="label">Password</label>
          <div className="field column is-one-quarter">
            <p className="control">
              <input className="input" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
            </p>
          </div>

          <div className="field ">
            <p className="control">
              <button className="button is-success" type="submit" value="Submit">
                Login
              </button>
            </p>
          </div>
        </form>
        <p>
          <small>If you already have an account, you can login from <Link to="/login">here</Link></small>
        </p>

        <Footer />
      </div>

    );
  }
}

export default Signup;