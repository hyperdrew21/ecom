import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';


import history from "../../history";
import OrderSummary from "./orderSummary";

import { UnderlinedTitle } from "./infoHelp";

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
       
        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className="payment-form_name" 
                type="name"
                title="Name on Card"
                placeholder="Name" 
                name="name"
                component={FormInput}/>
                 <Field className="payment-form_card" 
                type="card"
                title=" Credit Card Number"
                placeholder=" ____-____-____-____" 
                name="card"
                component={FormInput}/>
                <Field className="payment-form_expiration" 
                type="expiration"
                title="Expiration Date"
                placeholder="Expiration" 
                name="expiration"
                component={FormInput}/>
                <Field className="payment-form_ccv" 
                type="ccv"
                title="CCV"
                placeholder="CCV" 
                name="ccv"
                component={FormInput}/>
                <div className="payment-form_line"></div>
                <Field className="payment-form_pay-complete" 
                onClick={() => history.push('/information/payment')}
                type="submit"
                title="Pay & Complete" 
                name="pay-complete"
                component={FormButton}/>
                <Field className="payment-form_back" 
                onClick={() => history.push('/signin')}
                type="button"
                title="Back" 
                name="back"
                short={true}
                component={FormButton}/>
                <OrderSummary className='payment-form_order-summary'/>
                <div className="payment-form_shipping-info shipping-info">
                    <UnderlinedTitle className="shipping-info_title" title="Shipping To"/>
                    <div className="shipping-info_name small-text">Jordan</div>
                    <div className="shipping-info_address small-text">1234 hight</div>
                </div>
            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm; 