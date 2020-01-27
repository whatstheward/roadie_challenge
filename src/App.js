import React from 'react';
import './App.css';


class App extends React.Component {

  state={
    product: "",
    reviews: []
  }

  componentDidMount(){
    fetch('./data.json')
        .then(res => res.json())
        .then(data => this.setState({product: data.product, reviews:data.productreviews}) )
  }

  render(){
    return(
      <div></div>
    )
  }

}

export default App;
