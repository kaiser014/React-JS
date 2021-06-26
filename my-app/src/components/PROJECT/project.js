import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import IMAGE1 from '../../images/project-img1.png'
import IMAGE2 from '../../images/project-img2.png'
import IMAGE3 from '../../images/project-img3.png'
import PROJECTFILE from './projectFile'
import './project.css'

const heading = "Our latest work"
const paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, voluptas.";

export default function project() {
    return (
        <div className="projectSection">
            <div className="container">
                <div className="projectSectionInner">
                    <div className="projectSectionHeader">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h1 className="projectSectionHeading">{heading}</h1>
                                <p className="projectSectionParagraph">{paragraph}</p>
                            </div>
                        </div>
                    </div>
                    <div className="projectSectionBody">
                        <div className="row">
                            <div className="col-md-4">
                                <PROJECTFILE projectImg={IMAGE1} titleText="business & corporate"/>
                            </div>
                            <div className="col-md-4">
                                <PROJECTFILE projectImg={IMAGE2} titleText="food & restaurant"/>
                            </div>
                            <div className="col-md-4">
                                <PROJECTFILE projectImg={IMAGE3} titleText="Travel & tourism"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
