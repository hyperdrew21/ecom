import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';
import { FormButton } from "../formFields";

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
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
                <Field className="sign-in-form_login" 
                onClick={() => console.log("trying submit")}
                type="submit"
                title="Login" 
                name="login"
                component={FormButton}/>
                
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm; 

