import React from 'react';

const ReviewAnalytics = (props) => {

    return(
        <aside>
                <h3>CUSTOMER REVIEWS</h3>
                <span>{props.buildStars(props.averageRating)}  {props.averageRating} out of 5</span>
                <p className="all-reviews" onClick={(e)=> props.handleReviewFilter(e, null)}>
                    {props.totalReviews} reviews
                </p>
                <div>
                    {props.buildRatings()}
                </div>
        </aside>
    )
}

export default ReviewAnalytics