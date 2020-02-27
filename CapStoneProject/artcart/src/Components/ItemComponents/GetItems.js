import React, { Component } from 'react';
import styled from 'styled-components';

const GalleryStyles = styled.div`

    .galleryPhoto {
      width: 450px;
      height: 520px;
      border: 10px solid #2C6AC7;
      box-shadow: 0px 10px 15px #634513;
      margin-top: 20px;
      margin-bottom: 20px;
      border-radius: 20px;
    }

    .photoFrame {
      width: 500px;
      height: 720px;
      box-shadow: 0px 10px 15px gray;
      background-color: #D18D17;
      color: #EDDADA;
      border-radius: 20px;
      padding-bottom: 20px;
      margin-bottom: 20px;
      margin: 0 auto;
      border: 10px solid #8F3DDB;
    }

    .galleryFrame {
      margin-bottom: 20px;
    }

    .textContainer {
      border: 1px solid black;
      width: 450px;
      margin: 0 auto;
      border: 10px solid #2C6AC7;
      border-radius: 20px;
      box-shadow: 0px 5px 10px #634513;
      background-color: #8F3DDB;
      margin-bottom: 40px;
    }

    h4 {
      width: 80%;
      margin: 0 auto;
      margin-bottom: 15px;
      background-color: #8F3DDB;
      border-radius: 8px;
      color: white;
      padding: 8px;
    }

    p {
      margin-top: 10px;
      font-size: 18px;
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
    fetch("http://localhost:8082/items/list", {
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
        {this.state.items.length > 0 && this.state.items.reverse().map(item => {
          return (
            <div className='photoFrame'>
              <img className='galleryPhoto'
              src={item.photo} />
              <div className='textContainer'>
              <p>{item.itemName }</p>
              <p>{item.description}</p>
              </div>
            </div>
          )
        })}

      </div>
      </GalleryStyles>
      )
    }
  }
  export default GetItems;
