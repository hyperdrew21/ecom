import React, { Component } from "react";

import PageTitle from "../pageTitle";
import AccountInformationForm from "./accountInformationForm";

class AccountInformation extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }
    render() {
        return (
            <div className= "account-information"> 
                <PageTitle className="account-information" title="Account Information"/>
                <AccountInformationForm onSubmit={this.onsubmit} className="account-information_form"/>
            </div>
                )
    }
}
export default AccountInformation;