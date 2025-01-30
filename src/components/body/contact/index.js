import React from 'react'
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contact';
import ('./contact.css');

function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Feel free to reach out on any platform !</p>
                    <SocialContact />
                </div>
              <div className="download">
              <a download href={require('../../../images/RESUME_WEB_ABHIJEET.pdf')}>
                      <i class="fi-rr-download"></i>
                      Download Resume 
                  </a>
              </div>
            </div>
            
        </div>
    )
}

export default Contact;
