import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import styled from 'styled-components'

const HomeStyles = styled.div`

    .homediv {
      width: 480px;
      height: 300px;
      padding-top: 26px;
      border-radius: 30px;
      margin: 0 auto;
    }
`;

class Home extends Component {
  render(){
    return(
      <HomeStyles>
      <div className="homediv">
      <Login/>
      </div>
      </HomeStyles>
    )
  }
}
export default Home;
