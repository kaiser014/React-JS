import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './client.css'
import {FaChevronLeft} from 'react-icons/fa';
import {FaChevronRight} from 'react-icons/fa';


export default function clientContent(props) {
    return (
        <div className="clientContentSection">
            <div className="container">
                <div className="clientContentInner">
                    <h1 className="clientContentName">{props.clientName}</h1>
                    <h5 className="clientContentTitle">{props.clientHead}</h5>
                    <p className="clientContentParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <div className="clientDetailsArrow">
                        <ul>
                            <li><div className="ArrowBg"><div className="Arrow"><FaChevronLeft /></div></div></li>
                            <li><div className="ArrowBg"><div className="Arrow"><FaChevronRight /></div></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
