import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Signup from './Components/Signup';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Item from './Components/Item';
import ProfilePage from './Components/ProfilePage';
import Logout from './Components/Logout';

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
