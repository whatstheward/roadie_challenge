import React from 'react';
import './App.css';
import ProductContainer from './components/ProductContainer';


class App extends React.Component {

  state={
    product: {},
    reviews: []
  }

  componentDidMount(){
    fetch('./data.json')
        .then(res => res.json())
        .then(data => this.setState({product: data.product, reviews:data.reviews}) )
  }

  render(){
    return(
      <>
      <div className="container">
      <div className="header-box" />
        <ProductContainer product={this.state.product} />
      </div>
      </>
    )
  }

}

export default App;
