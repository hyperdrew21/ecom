import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';


import history from "../../history";

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
       
        return (
            <form onSubmit={handleSubmit} className={`${className} shipping-form`}>
                <Field className="shipping-form_name" 
                type="name"
                title="Name"
                placeholder="Name" 
                name="name"
                component={FormInput}/>
                 <Field className="shipping-form_address" 
                type="address"
                title="Street Address"
                placeholder="Street Address" 
                name="address"
                component={FormInput}/>
                <Field className="shipping-form_city" 
                type="city"
                title="City"
                placeholder="City" 
                name="city"
                component={FormInput}/>
                 <Field className="shipping-form_state" 
                type="state"
                title="State"
                placeholder="State" 
                name="state"
                component={FormInput}/>
                 <Field className="shipping-form_zipcode" 
                type="zipcode"
                title="Zipcode"
                placeholder="Zipcode" 
                name="zipcode"
                component={FormInput}/>
                
                

                <div className="shipping-form_line"></div>
                <Field className="shipping-form_use-this-address" 
                onClick={() => history.push('/information/payment')}
                type="submit"
                title="Use This Address" 
                name="use-this-address"
                component={FormButton}/>
                <Field className="shipping-form_back" 
                onClick={() => history.push('/signin')}
                type="button"
                title="Back" 
                name="back"
                short={true}
                component={FormButton}/>
                
            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm; 