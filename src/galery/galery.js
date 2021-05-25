import React, { useState } from 'react'

import grid from 'bootstrap-4-grid'
import classNames from 'classnames'

import plusSvg from '../img/icons/plus.svg'

import './galery.scss'

const Galery = ({ items, menu }) => {
  const [marker, setMarker] = useState('all')
  return (
    <div>
      <div className="portfolio-menu text-center">
        <ul>
          {menu.map((it) => (
            <li key={it.name} className={classNames('button', marker === it.marker && 'active')} onClick={() => setMarker(it.marker)}>{it.name}</li>
          ))}
        </ul>
      </div>

      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-12">
          <div className="row portfolio-items">
            {(marker === 'all') ? items.map((it) => (
              <div className="col-lg-4 col-md-6" key={it.name}>

                <div className="item-content">
                  <img src={it.img} alt="icon" />
                  <div className="item-overlay">
                    <h6 className="text">{it.group}</h6>
                    <div className="icons">
                      <a href={it.img} className="icon"><img className="plus-img" src={plusSvg} alt="+" /></a>
                    </div>
                  </div>
                </div>

              </div>
            )) :
            items.filter((it) => (
              marker === it.group
            )).map((it) => (
              <div className="col-lg-4 col-md-6" key={it.name}>
                <div className="item-content">
                  <img src={it.img} alt="icon" />
                  <div className="item-overlay">
                    <h6 className="text">{it.group}</h6>
                    <div className="icons">
                      <a href={it.img} className="icon"><img className="plus-img" src={plusSvg} alt="+" /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Galery


  // < div className = "col-lg-4 col-md-6" key = { it.name } >
  //   <div className="item-content">
  //     <img src={it.img} alt="icon" />
  //   </div>
  //             </div >