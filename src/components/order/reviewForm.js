import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormButton } from '../formFields';


import history from "../../history";
import ReviewProducts from "./reviewProducts";

class ReviewForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className={`${className} review-form`}>
                <div className="review-form_legend">
                    <div className="review-form_legend_name">Name</div>
                    <div className="review-form_legend_quantity">Quantity</div>
                    <div className="review-form_legend_price">Price</div>
                </div>
              <ReviewProducts className="review-form_products"/>
                <div className="review-form_line"></div>
                <Field className="review-form_proceed" 
                onClick={() => history.push('/account')}
                type="submit"
                title="Proceed to Checkout" 
                name="proceed"
                component={FormButton}/>
                <Field className="review-form_back" 
                onClick={() => history.push('/shop')}
                type="button"
                title="Back" 
                name="back"
                short={true}
                component={FormButton}/>
                <div className="review-form_details review-details">
                    <div className="review-details_subtotal review-detail">
                        <div className="review-detail_title">Subtotal</div>
                        <div className="review-detail_price">$7.96</div>
                    </div> 
                    <div className="review-details_subtotal review-detail">
                        <div className="review-detail_title">Tax</div>
                        <div className="review-detail_price">$0.16</div>
                    </div>
                    <div className="review-details_subtotal review-detail">
                        <div className="review-detail_title">Shipping</div>
                        <div className="review-detail_price">$0.00</div>
                    </div>
                    <div className="review-details_total review-detail review-detail-green">
                        <div className="review-detail-green_title">Total</div>
                        <div className="review-detail-green_price">$8.12</div>
                    </div>

                </div>
            </form>
        )
    }
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm; 