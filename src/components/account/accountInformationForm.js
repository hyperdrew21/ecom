import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';


import history from "../../history";

class AccountInformationForm extends Component {
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
                <div className="sign-in-form_line"></div>
                <Field className="sign-in-form_login" 
                onClick={() => history.push('/account')}
                type="submit"
                title="Login" 
                name="login"
                component={FormButton}/>
                
            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm; 
