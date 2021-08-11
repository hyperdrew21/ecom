import React, { Component } from "react";

class Details extends Component {

    renderChildren =() => {
        const {links, info } = this.props;
        let children = [];
        if(links) {
           children = links.map(link => {
                return <a key={link._id} onClick={link.onClick} className="details_link">{link.title}</a>
            })
        } else if(info) {
           children = info.map(item => {
                return <div key={item._id} onClick={item.onClick} className="details_item">{item.title}</div>
            })
        }
        return children;
    }
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} details`}>
                <div className="details_title">{title}</div>
                <div className="details_links">
                    {
                        this.renderChildren()
                    }
                </div>

            </div>
            )
    }
}

export default Details;