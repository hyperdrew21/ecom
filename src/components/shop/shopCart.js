import React, { Component } from "react";
import CartProduct from "./cartProduct";

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}/>
        </div>
        )
}

function CartContent({className, products}) {
    let count = products.length
    let productsJSX = products.map(product => <CartProduct key={product}/>);
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
    render() {
        const { className } = this.props;
        return(
            <div className={`${className} shop-cart`}>
                <CartButton className="shop-cart_toggle" icon="fas fa-times"/>
                <CartContent className="shop-cart_content" products={[4,45,98,23,546,674,234,124,904,934,801]}/>
            </div>
            )
    }
}
export default ShopCart;