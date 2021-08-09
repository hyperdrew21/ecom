import React, { Component } from "react";

class Details extends Component {
    render() {
        const {title, links } = this.props;
        return (
            <div className="details">
                <div className="details_title">{title}</div>
                <div className="details_links">
                    {
                        links.map(link => {
                            return <a key={link._id} onClick={link.onClick} className="details_link">{link.title}</a>
                        })
                    }
                </div>

            </div>
            )
    }
}

export default Details;