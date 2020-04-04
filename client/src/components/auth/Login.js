import React from 'react';

import { Link } from 'react-router-dom';

import authService from './auth-service.js';

import Footer from '../Footer';
import NavBar from '../NavBar';

export default class extends React.Component {
  state = {
    username: "",
    password: "",

    error: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    authService.login(this.state.username, this.state.password)
      .then(response => {
        this.setState({ error: "" });

        this.props.updateUser(response);
        this.props.history.push('/');
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
      <>

        <NavBar />

        <h1 className= "title is-1 has-text-centered">Login</h1>

        <form onSubmit={this.handleSubmit}>

          {this.state.error && (
            <p className="error">{this.state.error}</p>
          )}

          <div className="field">
            <p className="control">
              <input className="input" type="email" placeholder="Email" value={this.state.username} onChange={this.handleChange}></input>
            </p>
          </div>

          <div className="field">
            <p className="control">
              <input className="input" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
            </p>
          </div>

          <div className="field">
            <p className="control">
              <button className="button is-success">
                Login
              </button>
            </p>
          </div>
        </form>

        <p>
          <small>If you don't have an account yet, you can create your account <Link to="/signup">here</Link></small>
        </p>

        <Footer />
      </>
    );
  }
}