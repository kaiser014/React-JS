import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './client.css'

export default function clientImage(props) {
    return (
        <div>
            <div className="clientImageSection">
                <div className="clientBg">
                    <img className="clientImage" src={props.clientImg}></img>
                    <div className="clientBgDot">
                        <img src={props.dotImage}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
