import React from 'react';
import ReviewCard from './ReviewCard';
import './Review.css'


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
            <aside>
                <h3>CUSTOMER REVIEWS</h3>
                <span>{buildStars(props.averageRating)}  {props.averageRating} out of 5</span>
            </aside>
            {props.reviews.map((review, i) => <ReviewCard buildStars={buildStars} review={review} key={i}/>)}
        </div>
    )
}

export default ReviewContainer