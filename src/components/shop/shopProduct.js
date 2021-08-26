import React, { Component } from "react"; 
import Quantity from "../quantity";
import GreenPriceTag from "../greenPriceTag";

class ShopProduct extends Component {
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
                    <div className="shop-product_back_add-to-cart">
                        Add to Cart
                    </div>
                </div>
            </div>
            )
    }
}

export default ShopProduct;