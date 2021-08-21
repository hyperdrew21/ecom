import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';


import history from "../../history";

class AccountInformationForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
                <Field className="account-information-form_name" 
                type="name"
                title="Name"
                placeholder="Name" 
                name="name"
                component={FormInput}/>
                <Field className="account-information-form_email" 
                type="Email"
                title="Email"
                placeholder="Email" 
                name="Email"
                component={FormInput}/>

                <Field className="account-information-form_street-address" 
                type="address"
                title="Street Address"
                placeholder="Street Address" 
                name="address"
                component={FormInput}/>
                <Field className="account-information-form_city" 
                type="city"
                title="City"
                placeholder="City" 
                name="city"
                component={FormInput}/>

                <Field className="account-information-form_state" 
                type="state"
                title="State"
                placeholder="State" 
                name="state"
                component={FormInput}/>
                <Field className="account-information-form_zipcode" 
                type="zipcode"
                title="Zipcode"
                placeholder="Zipcode" 
                name="zipcode"
                component={FormInput}/>


                
                
                {/* <Field className="account-information-form_login" 
                onClick={() => history.push('/account')}
                type="submit"
                title="Login" 
                name="login"
                component={FormButton}/> */}
                
            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm; 

