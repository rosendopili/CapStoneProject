import React, { Component } from 'react';
import styled from 'styled-components';
import LandingBG from './Assets/LandingBG.jpg';

const GalleryStyles = styled.div`

    .galleryPhoto {
      width: 450px;
      height: 550px;
      border: 10px solid black;
      margin-top: 20px;
    }

    .photoFrame {
      width: 500px;
      height: 650px;
      border: 1px solid black;
      margin: 0 auto; 
    }
`;


class GetItems extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      itemLoaded: false
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:8080/items/list", {
      method: 'GET',
      headers: {
        'Authorization':'Bearer ' +
        localStorage.getItem('user'),
        'Content-Type':'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({
          items: res,
          itemLoaded: true,
        })
      })
  }

  render(){
    return(
      <GalleryStyles>
      <div className='galleryFrame'>
        <h4> ArtCart Gallery </h4>
        {this.state.items.length > 0 && this.state.items.map(item => {
          return (
            <div className='photoFrame'>
              <img className='galleryPhoto'
              src={item.photo} />
              <p>{item.itemName}</p>
              <p>{item.description}</p>
            </div>
          )
        })}

      </div>
      </GalleryStyles>
      )
    }
  }
  export default GetItems;
