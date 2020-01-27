import React from 'react';
import './Product.css'

const ProductContainer = (props) => {
    return(
        <div>
            <img src={props.product.image}></img>
        </div>
    )
}

export default ProductContainer