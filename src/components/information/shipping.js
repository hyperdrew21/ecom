import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

// import SignInForm from "./signinForm";
import PageTitle from "../pageTitle";

import { connect } from "react-redux";
import * as actions from "../../actions";


class Shipping extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }
    render() {
        return(
            <div className="sign-in">
                <PageTitle className="sign-in_page-title" title="Shipping Address"/>
                {/* <ShippingForm onSubmit={this.onSubmit} className="sign-in_form" />  */}
            </div>
            )
    }
}

Shipping = connect(null, actions)(Shipping)

export default Shipping;