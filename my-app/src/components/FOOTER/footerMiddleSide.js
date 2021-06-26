import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

export default function footerMiddleSide() {
    return (
        <div className="footerSocialSection">
            <ul>
                <li><a href=""><div className="socialIcon facebookIcon"><FaFacebookF /> </div></a></li>
                <li><a href=""><div className="socialIcon twitterIcon"><FaTwitter /></div></a></li>
                <li><a href=""><div className="socialIcon youtubeIcon"><FaYoutube /></div></a></li>
            </ul>
        </div>
    )
}
