import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';

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
              <Route exact path="/" component={Profile} />
          </Switch>
        </Router>
      </Layout>
      <Login/>
      <Signup/>
    </React.Fragment>
  );
 }
}
export default App;
