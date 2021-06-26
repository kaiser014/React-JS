import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SERVICE/service.css'
import ServiceBody from '../SERVICE/serviceColumn'
import {FaCropAlt} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';
import {FaBezierCurve} from 'react-icons/fa';


export default function Service() {
    return (
        <div className="serviceSection">
            <div className="container">
                <div className="serviceInner">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="service-heading text-center">
                                <h1 className="serviceHeading">Our Service</h1>
                                <p className="serviceParagraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, voluptas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="serviceBodyInner">
                        <div className="row">
                            <div className="col-md-4">
                                <ServiceBody titleText="Web Design" serviceIcon={<FaCropAlt/>}/>
                            </div>
                            <div className="col-md-4">
                                <ServiceBody titleText="UI Design" serviceIcon={<FaEdit/>}/>
                            </div>
                            <div className="col-md-4">
                                <ServiceBody titleText="Graphic Design" serviceIcon={<FaBezierCurve/>}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
