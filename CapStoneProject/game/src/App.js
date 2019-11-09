import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Custom Components
import Home from './UserComponent/Home';
import ItemHome from './ItemComponent/ItemHome';
import ProfilePic from './UserProfileComponent/ProfilePic'


class App extends Component {
  render(){
  return (

    <Router>
      <div>
        <nav>
          <Link to="/">Go to Home Page</Link>{' '}
          <Link to="/ItemHome">Check Out Items</Link>{' '}
          <Link to="/ProfilePic">Profile Pic</Link>{' '}
        </nav>
        <Route exact path="/"
        component={Home} />
        <Route path="/ItemHome" component={ItemHome} />
        <Route path="/ProfilePic" component={ProfilePic} />
      </div>
    </Router>
  );
 }
}

export default App;
