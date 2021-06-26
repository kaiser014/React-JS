import React from 'react'
import HeroImage from '../../images/hero-illutration.png'

export default function HERO() {
    return (
        <div className="heroSection">
            <div className="row">
                <div className="heroSection-alignment">
                    <div className="col-md-6">
                        <div className="heroHeading-section">
                        <h1 className="heroHeading">We builds brands That Lead & Inspire</h1>
                        <p className="heroParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries</p>
                        <button className="heroButton">Read more</button> 
                        </div>    
                    </div>
                    <div className="col-md-6">
                        <div className="heroImage-section">
                            <img className="heroImage" src={HeroImage}></img>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}
