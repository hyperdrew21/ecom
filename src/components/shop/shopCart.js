import React, { Component } from "react";

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}/>
        </div>
        )
}

function CartContent({className, products}) {
    let count = products.length
    let productsJSX = products.map(product => <h1 key={product}> {product}</h1>);
    return (
        <div className={`${className} cart-content`}>
            <div className="cart-content_title">
                Cart ({count})
            </div>
            <div className="cart-content_product">
                {productsJSX}
            </div>
            <CartFooter className="cart-footer_footer" products={products} />
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
                <CartContent className="shop-cart_content" products={[4]}/>
            </div>
            )
    }
}
export default ShopCart;