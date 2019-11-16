import React, { Component } from 'react';
import PostItem from './PostItem';
import GetItems from './GetItems';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      itemLoaded: false
    }
  }
  CreateItem = (e) => {
    fetch('http://localhost:8082/items', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' +
      localStorage.getItem('user'),

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        itemName: this.state.itemName,
        description: this.state.description,
        price: this.state.price,
        photo: this.state.photo
      })
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
      this.setState({
        item: {...this.state.item},
        itemLoaded: true
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

handleItemNameChange = (e) => {
  this.setState({ itemName: e.target.value })
}
handleDescriptionChange = (e) => {
  this.setState({ description: e.target.value})
}
handlePriceChange = (e) => {
  this.setState({ price: e.target.value})
}
handlePhotoChange = (e) => {
  this.setState({ photo: e.target.value})
}

render(){
  return(

    <div>

    <PostItem
      itemName={this.state.itemName}
      description={this.state.description}
      price={this.state.price}
      photo={this.state.photo}
      handleItemNameChange={this.handleItemNameChange}
      handleDescriptionChange={this.handleDescriptionChange}
      handlePriceChange={this.handlePriceChange}
      handlePhotoChange={this.handlePhotoChange}
      submitForm={e => this.CreateItem(e)}/>

  <GetItems />
    </div>

    )
  }
}
export default Item;
