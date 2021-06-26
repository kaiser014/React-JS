import React from 'react'
import FOOTERADDRESS from './footerAddress'
import ICON from '../../images/icon.png'
import './footer.css'
import FOOTERLINK from './footerLink'
import FOOTERLEFT from './footerLeftSide'
import FOOTERRIGHT from './footerRightSide'
import FOOTERMIDDLE from './footerMiddleSide'

export default function footer() {
    return (
        <div className="footerSection">
            <div className="container">
                <div className="footerSectionInner">
                    <div className="row justify-content-between">
                        <div className="col-md-3">
                            <FOOTERADDRESS footerIcon={ICON} titleText="interested to work with us"/>
                        </div>
                        <div className="col-md-3">
                            <FOOTERLINK titleText="company" List1="About us" List2="portfolio" List3="page" List4="FAQ" List5="reviews"/>
                        </div>
                        <div className="col-md-3">
                        <FOOTERLINK titleText="support" List1="contact us" List2="privacy policy" List3="terms of use" List4="buy & sell" List5="reviews"/>
                        </div>
                        <div className="col-md-3">
                        <FOOTERLINK titleText="contact" List1="123 Address Details" List2="000 123 456789" List3="Email: email@gmail.com" List4="buy & sell" List5="reviews"/>
                        </div>
                    </div>
                </div>
                <div className="footerDeviderSection">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="dividerSection">
                            <div className="footerDivider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerTermsSection">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <FOOTERLEFT Terms="terms of service" Privacy="privacy policy" security="security"/>
                        </div>
                        <div className="col-md-4 text-center">
                            <FOOTERMIDDLE />
                        </div>
                        <div className="col-md-4 text-right">
                            <FOOTERRIGHT />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
