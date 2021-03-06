import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from "../details";

import history from "../../history";

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: "Not registered? Create accout here",
                onClick: () => history.push("/signup")
            },
            {
                _id: 1,
                title: "Forgot account email?",
                onClick: () => console.log("forgot email")
            },
            {
                _id: 2,
                title: "Forgot password?",
                onClick: () => console.log("forgot password")
            }
        ]
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className="sign-in-form_email" 
                type="Email"
                title="Email"
                placeholder="Email" 
                name="Email"
                component={FormInput}/>
                 <Field className="sign-in-form_password" 
                type="password"
                title="Password"
                placeholder="password" 
                name="Password"
                component={FormInput}/>
                <div className="sign-in-form_line"></div>
                <Field className="sign-in-form_login" 
               
                type="submit"
                title="Login" 
                name="login"
                component={FormButton}/>
                <Details className="sign-in-form_details" title="Quicklinks" links={links}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm; 

