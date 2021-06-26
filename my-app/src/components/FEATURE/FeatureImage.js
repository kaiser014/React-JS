import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../FEATURE/feature.css'


export default function FeatureImage(props) {
    return (
        <div className="container">
            <div className="featureImageSection">
                <img className="featureImage" src={props.featureImg}></img>
            </div>
        </div>
    )
}