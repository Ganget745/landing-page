import React from 'react'

import './experience.scss'

import frontSvg from '../img/icons/front.svg'

const Experience = () => {
  return (
    <div className="main-line">

      <div className="timeline">
        <div className="timeline-icon">
          <img src={frontSvg} alt="front" />
        </div>
        <div className="timeline-content">
          <span className="date">Apr 2018 - Mar 2020</span>
          <h5 className="title">SOFTWARE ENGINEER</h5>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.</p>
        </div>
      </div>

      <div className="timeline-right">
        <div className="timeline-icon">
          <img src={frontSvg} alt="front" />
        </div>
        <div className="timeline-content">
          <span className="date">Apr 2018 - Mar 2020</span>
          <h5 className="title">WEB DEVELOPER</h5>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.</p>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-icon">
          <img src={frontSvg} alt="front" />
        </div>
        <div className="timeline-content">
          <span className="date">Apr 2018 - Mar 2020</span>
          <h5 className="title">FRONTEND DEVELOPER</h5>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.</p>
        </div>
      </div>
    </div>
  )
}

export default Experience