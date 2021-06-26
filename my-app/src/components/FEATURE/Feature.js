import React from 'react'
import FEATURECONTENT1 from './FeatureContent1'
import FEATURECONTENT2 from './FeatureContent2'
import FEATUREIMAGE from './FeatureImage'
import '../FEATURE/feature.css'
import IMAGE1 from '../../images/feature1.png'
import IMAGE2 from '../../images/feature2.png'
import FEATUREBACKGROUND from '../../images/feature-bg.png'

const title1 = "We are hear to help with you";
const title2 = "interest to work with you";

export default function Feature() {
    return (
        <div className="featureSection">
            <div className="featureSection1">
                <div className="featureSection1Inner">
                    <div className="container">
                        <div className="featureInnerSection">
                            <div className="featureDetails FeatureBgImage">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <FEATURECONTENT1 titleText={title1}/>
                                    </div>
                                    <div className="col-md-6">
                                        <FEATUREIMAGE featureImg={IMAGE1}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featureSection2">
                <div className="container">
                    <div className="featureInnerSection2">
                        <div className="featureDetails">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                <FEATUREIMAGE featureImg={IMAGE2}/>
                                </div>
                                <div className="col-md-6">
                                    <FEATURECONTENT2 titleText={title2}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
