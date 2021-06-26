import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormControl,Form} from 'react-bootstrap';

const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nihil";

export default function footerAddress(props) {
    return (
        <div className="footerAddressSection">
            <div className="footerBrand">
                <ul>
                    <li><a href="#"><img className="footerImage" src={props.footerIcon}></img></a></li>
                    <li><a href="#">uixzone</a></li>
                </ul>
            </div>
            <p className="footerParagraph">{paragraph}</p>
            <h5 className="footerHeading">{props.titleText}</h5>
            <div className="footerMessageField">
                <Form.Control className="footerEmail" type="email" placeholder="Email address" />
                <button className="footerButton">Send</button>
            </div>
        </div>
    )
}
