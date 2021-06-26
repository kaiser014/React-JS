import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaArrowRight} from 'react-icons/fa'
import '../SERVICE/service.css'

const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quas.";

export default function serviceColumn(props) {
    return (
        <div className="container">
            <div className="serviceContentDetails">
                <div className="serviceIconDetails">
                    <div className="serviceBackground"></div>
                    <div className="serviceIcon">{props.serviceIcon}</div>
                </div>
                <h5 className="serviceContentHeading">{props.titleText}</h5>
                <p className="serviceContentParagraph">{paragraph}</p>
                <div className="serviceContentLink">
                    <ul>
                        <li><a href="#">Learn More</a></li>
                        <li className="contentIcon"><FaArrowRight /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
