import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../FEATURE/feature.css'
import {FormControl,Form} from 'react-bootstrap';

const paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi doloribus beatae laudantium expedita quo soluta asperiores similique aut. Explicabo, debitis?";
const paragraph2 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nulla!";

export default function FeatureContent(props) {
    return (
        <div className="container">
            <div className="featureContentSection">
                <h1 className="featureContentHeading">{props.titleText}</h1>
                <p className="featureContentParagraph">{paragraph1}</p>
                <p className="featureContentParagraph">{paragraph2}</p>
                <div className="featureMessageField">
                    <Form.Control className="featureEmail" type="email" placeholder="Enter your email address" />
                    <button className="featureContentButton2">Send</button>
                </div>
            </div>
        </div>
    )
}

