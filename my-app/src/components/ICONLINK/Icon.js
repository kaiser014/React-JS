import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BOOKING from '../../images/booking.png'
import GOOGLE from '../../images/google.png'
import INSTACART from '../../images/instacart.png'
import PAYPAL from '../../images/paypal.png'
import './icon.css'

export default function Icon() {
    return (
        <div className="iconDetailsSection">
            <div className="container">
                <div className="iconSectionInner">
                    <div className="row text-center align-items-center">
                        <div className="col-md-3 iconSection">
                            <img className="iconSelect1" src={BOOKING}></img>
                        </div>
                        <div className="col-md-3 iconSection">
                            <img className="iconSelect2" src={INSTACART}></img>
                        </div>
                        <div className="col-md-3 iconSection">
                            <img className="iconSelect3" src={PAYPAL}></img>
                        </div>
                        <div className="col-md-3 iconSection">
                            <img className="iconSelect4" src={GOOGLE}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
