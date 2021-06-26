import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CLIENTIMAGEFILE from './clientImage'
import CLIENTIMG from '../../images/girl-img.png'
import './client.css'
import CLIENTCONTENT from './clientContent'
import DOTIMG from '../../images/dot.png'

export default function Client() {
    return (
        <div className="clientSection">
            <div className="container">
                <div className="clinetSectionInner">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <CLIENTIMAGEFILE clientImg={CLIENTIMG} dotImage={DOTIMG}/>
                        </div>
                        <div className="col-md-7">
                            <CLIENTCONTENT clientName="carla stevens" clientHead="tecnical director at MotiveZone"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
