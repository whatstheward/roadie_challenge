import React from 'react';
import './App.css';
import ProductContainer from './components/product/ProductContainer';
import ReviewContainer from './reviews/ReviewContainer';


class App extends React.Component {

  state={
    product: {},
    reviews: [],
    filter: null
  }
  
  componentDidMount(){
    fetch('./data.json')
        .then(res => res.json())
        .then(data => this.setState({product: data.product, reviews:data.reviews}) )
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

  compactRatings=()=>{
    let allReviews = {}
    this.state.reviews.forEach(review=> {
            const rating = review.rating
            if(!Object.keys(allReviews).includes(rating.toString())){
            allReviews[rating]= 1
            }else{
            allReviews[rating] = allReviews[rating]+1
        }
            })
    return allReviews
}

  handleReviewFilter = (e, rating) => {
    this.setState({filter: rating})
  }

  populateReviews=()=>{
    let reviewsToPrint
    if(this.state.filter != null){
      debugger
      reviewsToPrint = this.state.reviews.filter(review=> review.rating == this.state.filter)
    }else{
      reviewsToPrint = this.state.reviews
    }
    return reviewsToPrint
  }

  buildRatings=()=>{
    let ratings = this.compactRatings()
    let bars = []
    Object.keys(ratings).map(rating=> {
        bars.unshift(this.ratingBar(rating, ratings[rating]))
    })
    return bars
}

ratingBar = (rating, key) => {
    return(
        <div className="rating-bar">
            <p onClick={(e)=> this.handleReviewFilter(e, rating)}>{rating} stars</p>
            <progress className="rating-bar" value={key} max={this.state.reviews.length}/>
        </div>
    )
}

  render(){
    return(
      <>
      <div className="container">
      <header className="header-box" />
        <ProductContainer product={this.state.product} />
        <ReviewContainer handleReviewFilter={this.handleReviewFilter} 
                        reviews={this.populateReviews()}
                        totalReviews={this.state.reviews.length}
                        averageRating={this.averageRating()}
                        buildRatings={this.buildRatings}
                        />
      </div>
      </>
    )
  }

}

export default App;
