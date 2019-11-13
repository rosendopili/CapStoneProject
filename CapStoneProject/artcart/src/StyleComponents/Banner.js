import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
import BannerCropped from '../Assets/BannerCropped.jpg';

const Styles = styled.div`
@import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Text&display=swap');

  .banner {
    background: url(${BannerCropped}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
    font-family: 'Big Shoulders Text', cursive;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

`;

export const Banner = () => (
  <Styles>
    <Jumbotron fluid className ="banner">
      <div className="overlay"></div>
      <Container>
        <h2>let our walls be your canvas</h2>
      </Container>
    </Jumbotron>
  </Styles>
)
