import React from 'react';
import './Product.css'

const ProductContainer = (props) => {
    return(
        <div className="product-card">
            <img src={props.product.image}></img>
            <section>
                <h2>{props.product.name}</h2>
                <p>by <strong>{props.product.company}</strong></p>
                <p>{props.product.description}</p>
                <ul>
                    <li>{props.product.sub_desc}</li>
                </ul>
                <footer>
                    <button className="ui button inverted teal" onClick={()=>props.toggleModalView()}>LEAVE REVIEW</button>
                    <button className="ui button teal">ADD TO CART</button>
                </footer>
            </section>
        </div>
    )
}

export default ProductContainer