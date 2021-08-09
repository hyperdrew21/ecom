import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import SignInForm from "./signinform";


class SignIn extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }
    render() {
        return(
            <div className="sign-in">
                <SignInForm onSubmit={this.onSubmit} className="sign-in_form" /> 
            </div>
            )
    }
}



export default SignIn;