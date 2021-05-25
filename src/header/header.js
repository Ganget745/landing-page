import React, { useState } from 'react'
import grid from 'bootstrap-4-grid'

import { Link, animateScroll as scroll } from 'react-scroll'
import classNames from 'classnames'

import menuSvg from '../img/icons/menu.svg'
import closeSvg from '../img/icons/close.svg'

import './header.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-8 text-left">
            <div className="logo">
              <a href="#"> <p>Jh<span>o</span>n</p></a>
            </div>
          </div>
          <div className="col-md-9 col-4">
            <ul className={classNames('menu', isOpen && 'open')} id="menu">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}>Home</Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-45}
                  duration={500}>About</Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}>Works</Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-5}
                  duration={500}>Service</Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}>Experience</Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Contact</Link>
              </li>
            </ul>

            <div className="burger-menu" onClick={() => setIsOpen(!isOpen)} >
              <div className="open-btn">
                {isOpen ? <img src={closeSvg} alt="close" /> : <img src={menuSvg} alt="open" />}
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header