import React from 'react';
import ReviewCard from './ReviewCard';
import './Review.css'
import ReviewAnalytics from './ReviewAnalytics';

const ReviewContainer = (props) => {
    
    const buildStars = (rating) =>{
        const stars = []
        for(let i=0; i<5;i++){
            if(i<rating){
                stars.push(<i class="fas fa-star"></i>)
            }else{
                stars.push(<i class="far fa-star"></i>)
            }
        }
        return stars
    }

    const compactRatings=()=>{
        let allReviews = {}
        props.reviews.forEach(review=> {
                const rating = review.rating
                if(!Object.keys(allReviews).includes(rating.toString())){
                allReviews[rating]= 1
                }else{
                allReviews[rating] = allReviews[rating]+1
            }
                })
        return allReviews
    }

    const buildRatings=()=>{
        let ratings = compactRatings()
        let bars = []
        Object.keys(ratings).map(rating=> {
            bars.unshift(ratingBar(rating, ratings[rating]))
        })
        return bars
    }

    const ratingBar = (rating, key) => {
        return(
            <div className="rating-bar">
                <p>{rating} stars</p>
                <progress className="rating-bar" value={key} max={props.reviews.length}/>
            </div>
        )
    }


    return(
        <div className="review-container">
            <ReviewAnalytics averageRating={props.averageRating} buildStars={buildStars} buildRatings={buildRatings} totalRating={props.reviews.length}/>
            <div className="review-box">
                {props.reviews.map((review, i) => <ReviewCard buildStars={buildStars} review={review} key={i}/>)}
            </div>
        </div>
    )
}

export default ReviewContainer