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


    


    return(
        <div className="review-container">
            <ReviewAnalytics averageRating={props.averageRating} 
                            buildStars={buildStars} 
                            totalReviews={props.totalReviews}
                            buildRatings={props.buildRatings}
                            handleReviewFilter={props.handleReviewFilter}/>
            <div className="review-box">
                {props.reviews.map((review, i) => <ReviewCard buildStars={buildStars} review={review} key={i}/>)}
            </div>
        </div>
    )
}

export default ReviewContainer