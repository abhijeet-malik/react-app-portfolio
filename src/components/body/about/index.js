import React from 'react'
import SocialContact from '../../common/social-contact';
import ('./about.css');
function About() {
    return (
        <div className="about">
            <div className="about-top">
            <div className="about-info">
                Hello There 👋, I am <br/>
                <span className="info-name">Abhijeet malik</span>. 
                <br />
                I know how to Google and
                <br />
                love exploring things.
            </div>
            <div className="images">
               <img src={require('../../../images/coding.png')} className="images" alt="coding pic" />
            </div>

            </div>

            <SocialContact />
            

        </div>
    )
}

export default About;
