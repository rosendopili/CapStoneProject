import React from 'react';
import styled from 'styled-components';
import LandingBG from './Assets/LandingBG.jpg';

const LandingStyles = styled.div`

  .landingDiv {
      background: url(${LandingBG}) no-repeat fixed bottom;
      background-size: cover;
      color: #ccc;
      height: 300px;
      width: 100%;
      position: relative;
      z-index: -2;
      text-align: center;
      margin-bottom: 30px;
    }

  p {
    color: white;
    width: 50%;
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
      margin-top: 5%;
    }

  }
`;

export const Landing = () => (
  <LandingStyles>
    <div className="landingDiv">
      <div className="overlay">
      <h3> About </h3>
      <p> At artcart our goal is to provide artists with a platform for greater outreach and influence.  Join the community and support the work of our talented creators, makers, movers & shakers!</p>
      </div>
    </div>
  </LandingStyles>
)
export default Landing;
