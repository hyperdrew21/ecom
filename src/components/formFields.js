import React, { Component } from "react";

export class FormInput extends Component {
    render() {
        const { className, title, type, placeholder, input } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className="form-input_label">
                    {title}
                </label>
                <input className="form-input_input" 
                type={type} placeholder={placeholder} {...input}/>
            </div>
                )
    }
}

export class FormButton extends Component {
    render() {
        const { className, title, type, onClick, input, short } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button className={`form-button_button ${short ? 'form-button_gray-button' : ''}`}
                type={type} 
                {...input} 
                onClick={onClick}
                >
                {title}
                </button>
            </div>
                )
    }
}

export class LongGrayButton extends Component {
    render() {
        const { className, title, type, onClick, input, labelTitle } = this.props;
        return (
            <div className={`${className} form-button-long-gray`}>
                <label className="form-button-long-gray_label">
                    {labelTitle}
                </label>
                <button className={`form-button-long-gray_button`}
                type={type} 
                {...input} 
                onClick={onClick}
                >
                {title}
                </button>
            </div>
                )
    }
}