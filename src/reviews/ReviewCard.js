import React from 'react';

const ReviewCard = (props) => {

    return(
        <div className="review-card">
            <h4>{props.review.title}</h4>
            {props.buildStars(props.review.rating)}
        </div>
    )
}

export default ReviewCard