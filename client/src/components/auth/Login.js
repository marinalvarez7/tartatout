import React, { Component} from 'react';

import { Link } from 'react-router-dom';

import authService from './auth-service.js';

import Footer from '../Footer';
import NavBar from '../NavBar';

class Login extends Component {
  state = {
    email: "",
    password: "",

    error: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    authService.login(this.state.email, this.state.password)
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
              <label>
                <input className="input" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}></input>
              </label>

            </p>
          </div>

          <div className="field">
            <p className="control">
              <label>
                <input className="input" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
              </label>
            </p>
          </div>

          <div className="field">
            <p className="control">
              <button className="button is-success" onClick={this.handleSubmit}>
                Login
              </button>
            </p>
          </div>
        </form>

        <p>
          <small>If you don't have an account yet, you can create it <Link to="/signup">here</Link></small>
        </p>

        <Footer />
      </>
    );
  }
}

export default Login;