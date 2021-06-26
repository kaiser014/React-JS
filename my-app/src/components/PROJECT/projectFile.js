import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './project.css'
import {FaArrowRight} from 'react-icons/fa'

const paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, voluptas.";

export default function projectFile(props) {
    return (
        <div className="pojectFileSection">
            <div className="container">
                <div className="pojectFileSection">
                    <img className="ProjectFileImage" src={props.projectImg}></img>
                    <h5 className="ProjectFileHeading">{props.titleText}</h5>
                    <p className="ProjectFileParagraph">{paragraph}</p>
                    <div className="pojectFileLink">
                        <ul>
                            <li><a href="#">Learn More</a></li>
                            <li><a href="#">{<FaArrowRight />}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
