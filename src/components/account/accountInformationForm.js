import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton, LongGrayButton } from '../formFields';


import history from "../../history";

class AccountInformationForm extends Component {

    constructor() {
        super();

        this.state = {
            showPasswords: false
        }
    }
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


              
            {
                this.state.showPasswords ?
                [
                <Field key={0} className="account-information-form_current" 
                type="password"
                title="Current Password"
                placeholder="Current password" 
                name="current"
                component={FormInput}/>,
                <Field key={1} className="account-information-form_new" 
                type="password"
                title="New Password"
                placeholder="New Password" 
                name="new"
                component={FormInput}/>,
                <Field key={2} className="account-information-form_confirm" 
                type="password"
                title="Confirm Password"
                placeholder="Confirm Password" 
                name="confirm"
                component={FormInput}/>,
                <div key={3} className="account-information-form_line"></div>,
                <Field  key={4}className="account-information-form_update-information" 
                onClick={() => this.setState({ showPasswords: false})}
                type="submit"
                title="Update Information" 
                name="update-information"
                component={FormButton}/>,
                <Field key={5} className="account-information-form_cancel" 
                onClick={() => this.setState({ showPasswords: false})}
                type="button"
                title="Cancel" 
                name="cancel"
                short={true}
                component={FormButton}/>
                ]
                :
                <Field className="account-information-form_change-password" 
                onClick={() => this.setState({ showPasswords: true })}
                type="button"
                labelTitle="Password"
                title="Change Password" 
                name="change-password"
                component={LongGrayButton}/>
            }  
                
               </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm; 

