import React from 'react'

import wordpressSvg from '../img/icons/wordpress.svg'
import laptopSvg from '../img/icons/laptop.svg'
import octaSvg from '../img/icons/octa.svg'
import mobilePhoneSvg from '../img/icons/mobilePhone.svg'
import paperSvg from '../img/icons/paper.svg'
import searchSvg from '../img/icons/search.svg'

import './service.scss'

const Service = () => {
  return (
    <div className="col-sm-8 col-md-12">
      <div className="row">

        <div className="col-md-6 col-lg-4">
          <div className="service-box">
            <div className="service-icon">
              <img src={laptopSvg} alt="laptop" />
            </div>
            <h3>WEB DESIGN</h3>
            <p className="description">Amet ipsum dolor sit amet, cons adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="service-box">
            <div className="service-icon">
              <img src={octaSvg} alt="octa" />
            </div>
            <h3>WEB DEVELOPMENT</h3>
            <p className="description">Amet ipsum dolor sit amet, cons adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="service-box">
            <div className="service-icon">
              <img src={wordpressSvg} alt="wordpress" />
            </div>
            <h3>WORDPRESS</h3>
            <p className="description">Amet ipsum dolor sit amet, cons adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="service-box">
            <div className="service-icon">
              <img src={mobilePhoneSvg} alt="mobilePhone" />
            </div>
            <h3>RESPONSIVE DESIGN</h3>
            <p className="description">Amet ipsum dolor sit amet, cons adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="service-box">
            <div className="service-icon">
              <img src={paperSvg} alt="paper" />
            </div>
            <h3>WEB RESEARCH</h3>
            <p className="description">Amet ipsum dolor sit amet, cons adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="service-box">
            <div className="service-icon">
              <img src={searchSvg} alt="search" />
            </div>
            <h3>SEO</h3>
            <p className="description">Amet ipsum dolor sit amet, cons adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Service