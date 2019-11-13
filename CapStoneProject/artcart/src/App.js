import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css'; 

import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Landing from './Landing';

import Layout from './StyleComponents/Layout';
import { NavBar } from './StyleComponents/NavBar';
import { Banner } from './StyleComponents/Banner';

class App extends Component {
  render(){
  return (
    <React.Fragment>
    <NavBar />
    <Banner />
      <Layout>
        <Router>
          <Switch>
          <Route exact path="/"
          component={Landing}/>

          <Route exact path="/Signup" component={Signup}/>

          <Route exact path="/Profile" component={Profile} />

          <Route exact path="/Login" component={Login} />

          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
 }
}
export default App;
