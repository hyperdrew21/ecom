import React, { Component } from "react";

import PageTitle from "../pageTitle";
import Purchases from "./purchases";
import PurchaseDetail from "./purchaseDetail"

class PurchaseHistory extends Component {
    render() {
        return (
            <div className="purchase-history"> 
                <PageTitle className= "purchase-history_page-title" title="Purchase history"/>
                <Purchases className="purchase-history_purchases"/>
                <PurchaseDetail className="purchase-history_detail"/>
                <div className="purchase-history_git statusborder-bottom"></div>
            </div>
                )
    }
}
export default PurchaseHistory;