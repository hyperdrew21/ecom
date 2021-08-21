import React, { Component } from "react";



import { connect } from "react-redux";

function PurchaseDetailLabel({className, title, value}) {
    return (
        <div className={`${className} purchase-detail-label`}>
            <div className="purchase-detail-label_title">{title}</div>
            <div className="purchase-detail-label_value">{value}</div>
        </div>
        )
}

class PurchaseDetail extends Component {
    render() {
        const { className, orderNumber, orderDate, user, total, creditCard } = this.props;
        const {name, shippingAddress} = user;

        const nameAddress = `${name}  ${shippingAddress}`
        return(        
        <div className={`${className} purchase-detail`}>
            <PurchaseDetailLabel 
            className="purchase-detail_order-number"
            title="Order Number"
            value={orderNumber}/>
            <PurchaseDetailLabel 
            className="purchase-detail_order-date"
            title="Order Date"
            value={orderDate}/>
            <PurchaseDetailLabel 
            className="purchase-detail_shipping-address"
            title="Shipping Address"
            value={nameAddress}/>
            <PurchaseDetailLabel 
            className="purchase-detail_total"
            title="Total"
            value={total}/>
            <PurchaseDetailLabel 
            className="purchase-detail_credit-card"
            title="Credit Card"
            value={creditCard}/>
            <div className="purchase-detail_track-shipment">Track Shipment</div>
            <div className="purchase-detail_print-receipt">Print Receipt</div>
        </div>
        )
    }
}
function mapStateToProps(state) {
    const  { purchaseDetail } = state.user;
    return{
        ...purchaseDetail
    }
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);
export default PurchaseDetail;