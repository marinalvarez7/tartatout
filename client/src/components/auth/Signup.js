import React from 'react';

import {Link} from 'react-router-dom';

import Popin from '../Popin.js';
import authService from './auth-service.js';

export default class extends React.Component {
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
        this.setState({error: ""});

        // 2. then, update with user infos
        authService.edit(this.state.username, this.state.campus, this.state.course)
          .then(response => {
            this.setState({error: ""});
            
            this.props.updateUser(response);
            this.props.history.push('/');
          })
          .catch(err => this.setState({error: err.response.data.message}))
      })
      .catch(err => this.setState({error: err.response.data.message}))
    ;
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  } 

  render() {
    return (
      <Popin one={(
        <>
          <h1>Sign up</h1>
          
          <form onSubmit={this.handleSubmit}>

            {this.state.error && (
              <p className="error">{this.state.error}</p>
            )}

            <p>
              <label>
                <em>Username</em>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              </label>
              
            </p>

            <p>
              <label>
                <em>Password</em>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </label>
            </p>

          </form>

          <p>
            <small>If you already have an account, you can login from <Link to="/login">here</Link></small>
          </p>

        </>
      )} />
    );
  }
}