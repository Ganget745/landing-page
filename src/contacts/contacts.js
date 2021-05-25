import React from 'react'

import './contacts.scss'

import mailSvg from '../img/icons/mail.svg'
import phoneSvg from '../img/icons/phone.svg'
import gpsSvg from '../img/icons/gps.svg'

const Contacts = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116577.09580939967!2d89.81870701922381!3d24.06509860710598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe05de38dbd583%3A0x13ea9198dbc46e62!2sNagarpur+Upazila!5e0!3m2!1sen!2sbd!4v1553607889162" class="d-block" allowfullscreen></iframe>
        </div>
      </div>
      <div className="address">
        <div className="row text-center">
          <div className="col-md-4 mt_30">
            <img src={gpsSvg} alt="gps" />
            <p>New York, USA</p>
          </div>
          <div className="col-md-4 mt_30">
            <img src={phoneSvg} alt="phone" />
            <p>+47464919181</p>
          </div>
          <div className="col-md-4 mt_30">
            <img src={mailSvg} alt="mail" />
            <p>infoTest@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-12">
          <div className="contact-form">
            <div className="row">
              <div className="col-md-6">
                <div className="input-box">
                  <input type="text" id="name" placeholder="Name*" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-box">
                  <input type="text" id="name" placeholder="Email*" />
                </div>
              </div>
            </div>
            <div className="input-box">
              <textarea id="message" placeholder="Message*" ></textarea>
            </div>
            <button type="submit" className="button">SEND MAIL</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contacts