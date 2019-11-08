import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Custom Components
import Home from './UserComponent/Home';
import StatsHome from './StatsComponent/StatsHome';
import PongHome from './GameComponent/PongHome';


class App extends Component {
  render(){
  return (

    <Router>
      <div>
        <nav>
          <Link to="/">Go to Home Page</Link>{' '}
          <Link to="/StatsHome">Check Out Stats</Link>{' '}
          <Link to="/PongHome">Play Pong</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/StatsHome" component={StatsHome} />
        <Route path="/PongHome" component={PongHome} />
      </div>
    </Router>
  );
 }
}

export default App;
