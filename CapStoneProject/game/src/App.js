import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


//Custom Components
import Home from './Home';
import ItemHome from './ItemComponent/ItemHome';
import ProfilePic from './UserProfileComponent/ProfilePic';
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
              <Route exact path="/" component={Home} />
              <Route path="/ItemHome" component={ItemHome} />
              <Route path="/ProfilePic" component={ProfilePic} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
 }
}

export default App;
