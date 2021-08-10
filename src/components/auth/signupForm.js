import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from "../details";

import history from "../../history";

class SignUpForm extends Component {
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
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className="sign-up-form_email" 
                type="Email"
                title="Email"
                placeholder="Email" 
                name="Email"
                component={FormInput}/>
                 <Field className="sign-up-form_password" 
                type="password"
                title="Password"
                placeholder="password" 
                name="Password"
                component={FormInput}/>
                <Field className="sign-up-form_confirm-password" 
                type="password"
                title="Confirm Password"
                placeholder="Confirm password" 
                name="Password"
                component={FormInput}/>

                <div className="sign-up-form_line"></div>
                <Field className="sign-up-form_login" 
                onClick={() => console.log("trying submit")}
                type="submit"
                title="Login" 
                name="login"
                component={FormButton}/>
                <Field className="sign-up-form_back" 
                onClick={() => console.log("trying submit")}
                type="button"
                title="Back" 
                name="back"
                short={true}
                component={FormButton}/>
                <Details className="sign-up-form_details" title="Quicklinks" links={links}/>
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm; 
