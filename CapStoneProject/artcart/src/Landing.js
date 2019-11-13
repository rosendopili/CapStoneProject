import React from 'react';
import styled from 'styled-components';
import LandingBG from './Assets/LandingBG.jpg';
import './App.css';
import { Container } from 'react-bootstrap';

const LandingStyles = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Text&display=swap');

  .landingDiv {
      background: url(${LandingBG}) no-repeat fixed bottom;
      background-size: contain;
      color: #ccc;
      height: 280px;
      width: 400px;
      position: relative;
      z-index: -2;
      text-align: center;
      margin-bottom: 30px;
      font-family: 'Big Shoulders Text', cursive;
      letter-spacing: 1px;
      margin: 0 auto;
      box-shadow: 0px 10px 20px gray;
      border: 10px solid #261818;
    }

  p {
    color: white;
    width: 300px;
    margin: 0 auto;
    text-shadow: 0px 3px 5px black;
    font-size: 18px;
    font-weight: bold;
    }

    .overlay {
      background-color: #000;
      opacity: 0.7;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
    h3{
      margin-top: 40px;
      font-weight: bold;
    }

  }
`;

export const Landing = () => (
  <LandingStyles>
    <div className="landingDiv">
      <div className="overlay">
      <Container>
      <h3> About </h3>
      <p> At artcart our goal is to provide artists with a platform for greater outreach and influence.  Join the community and support the work of our talented creators, makers, movers & shakers !</p>
      </Container>
      </div>
    </div>
  </LandingStyles>
)
export default Landing;
