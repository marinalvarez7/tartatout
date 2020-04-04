import React, { Component } from 'react';
import './App.scss';

import {Switch, Route} from 'react-router-dom';

import Homepage from './components/auth/Homepage.js'
import Signup from './components/auth/Signup.js';
import Login from './components/auth/Login.js';
import Profile from './components/auth/Profile.js';

import authService from './components/auth/auth-service.js';

import Ingredients from './components/Ingredients.js';
// import Recipe from './components/Recipe.js';

class App extends Component {
  state = {
    user: {}
  }

  fetchUser = () => {
    if (!this.state.user._id) {
      authService.loggedin()
        .then(data => this.setState({user: data}))
        .catch(err => this.setState({user: {}}))
      ;
    } else {
      console.log('user already in the state')
    }
  };

  updateUser = (data) => {
    this.setState({user: data});
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <Route render={props => (
        <div className="App" data-route={props.location.pathname}> {/* data-route="/" allow us to style pages */}

          <Switch>
            <Route exact path="/" render={(props) => (
              <Homepage user={this.state.user} />
            )} />

            <Route exact path="/signup" render={(props) => (
              <Signup updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/login" render={(props) => (
              <Login updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/profile" render={(props) => (
              <Profile user={this.state.user} updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/ingredients" render={(props) => (
              <Ingredients/>
            )} /> 

            
            {/* <Route exact path="/recipes" render={(props) => (
              <Ingredients/>
            )} />  */}

            {/* last route, ie: 404 */}
            <Route render={() => (<h1>Not Found</h1>)} />
          </Switch>
        </div>
      )} />
    );
  }
}

export default App;
