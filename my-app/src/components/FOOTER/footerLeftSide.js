import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function footerLeftSide(props) {
    return (
        <div className="TermsSection">
            <ul>
                <li><a href="#">{props.Terms}</a></li>
                <li><a href="#">{props.Privacy}</a></li>
                <li><a href="#">{props.security}</a></li>
            </ul>
        </div>
    )
}
