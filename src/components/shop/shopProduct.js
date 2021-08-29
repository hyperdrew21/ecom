import React, { Component } from "react"; 
import Quantity from "../quantity";
import GreenPriceTag from "../greenPriceTag";

import * as actions from "../../actions";
import { connect } from "react-redux";

class ShopProduct extends Component {

    handleAddToCart = () => {
        if(document.getElementById("shop-cart").classList.contains("cart-hidden")) {
           document.getElementById("shop-cart").classList.remove("cart-hidden");
           const {_id, title, description, price, belongsTo, imageUrl} = this.props;
           this.props.addCartProduct({_id, title, description, price, belongsTo, imageUrl});
        } else {
            document.getElementById("shop-cart").classList.add("cart-hidden");
        }
    }
    render() {
        const { _id, title, description, price } = this.props;
        return (
            <div className="shop-product">
                <div className="shop-product_front">
                    <img className="shop-product_front_image" src="http://via.placeholder.com/220x220"/>
                </div>
                <div className="shop-product_front_title">
                    {title}
                </div>
                <div className="shop-product_back">
                    <div className="shop-product_back_title">
                        {title}
                    </div>
                    <div className ="shop-product_back_description">
                        {description}
                    </div>
                    <GreenPriceTag className="shop-product_back_price" title={price}/>
                        
                    
                    <Quantity className="shop-product_back_quantity" quantity={1}/>
                    <a onClick={this.handleAddToCart} className="shop-product_back_add-to-cart">
                        Add to Cart
                    </a>
                </div>
            </div>
            )
    }
}

ShopProduct = connect(null, actions)(ShopProduct);

export default ShopProduct;