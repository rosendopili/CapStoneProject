import React, { Component } from 'react';
import ListItem from './ListItem';
import PostItem from './PostItem';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      user: localStorage.getItem('user'),
      itemLoaded: false,
    }
  }
  CreateItem = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/items", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer' +
        this.state.user
      },
      body: JSON.stringify({
        itemName: this.state.item.itemName,
        description: this.state.item.description,
        price: this.state.item.price,
        photo: this.state.item.photo
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
      itemName={this.state.user.itemName}
      description={this.state.user.description}
      price={this.state.user.price}
      photo={this.state.user.photo}
      handleItemNameChange={this.handleItemNameChange}
      handleDesriptionChange={this.handleDescriptionChange}
      handlePriceChange={this.handlePriceChange}
      submitForm={e => this.CreateItem(e)}/>

    </div>

    )
  }
}
export default Item;
