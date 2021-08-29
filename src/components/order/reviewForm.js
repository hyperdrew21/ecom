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
              <ReviewProducts className="review-form_products"/>
                <div className="review-form_line"></div>
                <Field className="review-form_proceed" 
                onClick={() => history.push('/account')}
                type="submit"
                title="Proceed to Checkout" 
                name="proceed"
                component={FormButton}/>
                <Field className="review-form_back" 
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

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm; 