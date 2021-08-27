import React, { Component } from "react";
import CartProduct from "./cartProduct";

import { connect } from "react-redux";

import * as actions from "../../actions";

import CartButton from "./cartButton";

function CartContent({className, products}) {
    let count = products.length
    let productsJSX = products.map(product => <CartProduct {...product} key={product._id}/>);
    return (
        <div className={`${className} cart-content`}>
            <div className="cart-content_title">
                Cart ({count})
            </div>
            <div className="cart-content_products">
                {productsJSX}
            </div>
            <CartFooter className="cart-content_footer" products={products} />
        </div>
        )
}

function CartFooter({ className, products}) {
    const price = 7.96;
    return(
        <div className={`${className} cart-footer`}>
            <a className="cart-footer_checkout">
                Checkout
            </a>
            <div className="cart-footer_subtotal">
                Subtotal
            </div>
            <div className="cart-footer_price">
                    ${price}
            </div>
        </div>
    )
}


class ShopCart extends Component {

    

    componentDidMount() {
        this.props.fetchCartProducts();
    }

    handleAddToCart = () => {
        if(document.getElementById("shop-cart").classList.contains("cart-hidden")) {
            document.getElementById("shop-cart").classList.remove("cart-hidden");
        } else {
            document.getElementById("shop-cart").classList.add("cart-hidden");
        }
    }

  

    render() {
        const { className } = this.props;
        return(
            <div id="shop-cart" className={`${className} shop-cart cart-hidden`}>
                <CartButton className="shop-cart_toggle" icon="fas fa-times" onClick={this.handleAddToCart}/>
                <CartContent className="shop-cart_content" products={this.props.cartProducts}/>
            </div>
            )
    }
}
function mapStateToProps(state) {
    const { cartProducts } = state.user;
    
    return {
        cartProducts
    }
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;