import React from 'react';
import './App.css';
import ProductContainer from './components/product/ProductContainer';
import ReviewContainer from './reviews/ReviewContainer';


class App extends React.Component {

  state={
    product: {},
    reviews: []
  }

  averageRating = () => {
    if(this.state.reviews.length > 0){
      const allRatings = this.state.reviews.map(review=> review.rating)
      const totalRatings = allRatings.reduce((acc, el) => acc+el)
      const avg = totalRatings/allRatings.length
      return Math.round(avg)
    }else{
      return 0
    }
  }

  handleReviewFilter = (rating) => {
    console.log(rating)
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
      <header className="header-box" />
        <ProductContainer product={this.state.product} />
        <ReviewContainer reviews={this.state.reviews} averageRating={this.averageRating()}/>
      </div>
      </>
    )
  }

}

export default App;
