import React from 'react'
import grid from 'bootstrap-4-grid'


import './aboutform.scss'

const AboutForm = () => {
  return (
    <div className="form">

      <div className="form__img">
        <img src="https://oiler.ua/media/stg_employees/resized/_-__243-190x190.jpg" alt="my-photo"/>
      </div>

      <div className="row">
          <div className="col-md-7">
              <p className="aboutText">I am a full stack web developer. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla...</p>
              <button className="button">Download CV</button>
              <button className="button">Hire Me</button>
          </div>
          <div className="col-md-5">
            <ul>
              <li><span>Name:</span> Martin Kupper</li>
              <li><span>Birthday:</span> 10-05-1992</li>
              <li><span>Gender:</span> Male</li>
              <li><span>E-mail:</span> info@gmail.com</li>
              <li><span>Country:</span> New-York,USA</li>
              <li><span>Phone:</span> +55 (77) 100 20 20</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default AboutForm