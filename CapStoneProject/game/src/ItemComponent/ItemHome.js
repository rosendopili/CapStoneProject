import React, {Component} from 'react';
import Item from './Item';
import PostItem from './PostItem';

class ItemHome extends Component {
  constructor (props) {
  super(props);
  this.state = {
    item: [],
    apiDataLoaded: false
  }

}
componentDidMount(){
  fetch("http://localhost:8081/stats/list")
    .then(res => {
      return res.json();
    })
    .then(res => {
      this.setState({
        stats: res,
        apiDataLoaded: true,
        itemName: "",
        description: "",
        price: ""
      })
    })
}

recordStats = (e) => {
  e.preventDefault();
  fetch("http://localhost:8081/stats", {
    method: 'POST',
    headers: {
      'Accept' : 'application/json, text/plain, */*',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      itemName: this.state.itemName,
      description: this.state.description,
      price: this.state.price
    })
  })
  .then(res=> res.json())
  .then(res => {
    let item = this.state.item;
    item.push(res);
    this.setState({
      item: item
    })
  })
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

renderItem(){
  return this.state.item.map((item, key) => {
      return <Item item={item} key={key}/>
  })
}

  render(){
    return(
      <div>
      {this.state.apiDataLoaded ? ( this.renderItem()
      ):(
        <p> ITEMS </p>
      )}

      <PostItem
        itemName={this.state.itemName}
        description={this.state.description}
        price={this.state.price}
        handleItemNameChange={this.handleItemNameChange}
        handleDesriptionChange={this.handleDescriptionChange}
        handlePriceChange={this.handlePriceChange}
        submitForm={this.submitForm}/>

      </div>

    )
  }
}

export default ItemHome;
