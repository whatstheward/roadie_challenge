import React from 'react';

const ReviewCard = (props) => {

    return(
        <div className="review-card">
            <header>
                <h4>{props.review.title}</h4>
                    <span className="star_rating">
                        {props.buildStars(props.review.rating)}
                    </span>
                <p>by {props.review.user} on {props.review.date}</p>
            </header>
            <section>
                <p>{props.review.content}</p>
            </section>
        </div>
    )
}

export default ReviewCard