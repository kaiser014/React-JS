import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function footerLink(props) {
    return (
        <div className="footerLinkSection">
            <h5 className="footerLinkHeading">{props.titleText}</h5>
            <div className="footerLinkOption">
                <ul>
                    <li><a href="#">{props.List1}</a></li>
                    <li><a href="#">{props.List2}</a></li>
                    <li><a href="#">{props.List3}</a></li>
                    <li><a href="#">{props.List4}</a></li>
                    <li><a href="#">{props.List5}</a></li>
                </ul>
            </div>
        </div>
    )
}
