import React, { Component } from 'react';
import GreenPriceTag from "../greenPriceTag";

class ReviewProduct extends Component {
    render() {
        const { product, quantity } = this.props;
        const { imageUrl, title, price } = product;
        return (
            <div className="review-product">
                <img className="review-product_image" src={imageUrl}/>
                <div className="review-product_title">{title}</div>
                <div className="review-product_quantity">{quantity}</div>
                <GreenPriceTag className="review-product_price" title={price * quantity}/>
            </div>
            )
    }
}

export default ReviewProduct;