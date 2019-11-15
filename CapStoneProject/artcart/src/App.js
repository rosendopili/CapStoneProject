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
import Landing from './Landing';
import Home from './Home';
import Item from './Item';
import ProfilePage from './ProfilePage';
import Logout from './Logout'; 

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
          component={Home}/>

          <Route path="/Landing"
          component={Landing}/>

          <Route path="/Home" component={Home}/>

          <Route path="/Signup"
          component={Signup}/>

          <Route path="/ProfilePage"
          component={ProfilePage}/>

          <Route exact path="/Item"
          component={Item}/>

          <Route path="/Logout"
          component={Logout}/>

          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
 }
}
export default App;
