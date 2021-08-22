import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../../actions";

class Shop extends Component {

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: "Login",
                path: "/signin"
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        // fetch shop prodcutson action createStore
        // set header _links
        // navbar _links
        // filter products with links
        
    }
    render() {
       return (
        <div className="shop">
           {/* shop search bar  */}
            {/* shop product */}
            {/* shop cart button                 */}
        </div>    
        ) 
       
    }
}

function mapStateToProps(state) {
    return { state }
}

Shop = connect(mapStateToProps, actions)(Shop);


export default Shop;