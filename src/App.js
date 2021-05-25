import React from 'react'
import grid from 'bootstrap-4-grid'

import Header from './header/header'
import AboutForm from './aboutForm/aboutform'
import Galery from './galery/galery'
import Service from './service/service'
import Experience from './experience/experience'
import Contacts from './contacts/contacts'

import './app.scss'

const App = () => {
  return (
  <div className="landing">
    <Header />
    <div className="home" title="home">
      <div className="container">
        <div className="row text-center align-items-center">
          <div className="col-12">
              <p>Hi there I'm</p>
              <h1>Martin Kupper</h1>
              <h4>Front-end-Developer</h4>
          </div>
        </div>
      </div>
    </div>


    <section className="about" title="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center section-title">About Me</h2>
            </div>
          </div>
          <div className="about__content">
            <AboutForm />
          </div>
        </div>
    </section>

    <section className="portfolio" title="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12">
              <h2 className="text-center section-title">Work I Have Done</h2>
          </div>
        </div>
            <Galery
              menu={[
                {
                  name: "All",
                  marker: "all"
                },
                {
                  name: "Web Design",
                  marker: "Web Design"
                },
                {
                  name: "Development",
                  marker: "Development"
                },
                {
                  name: "Marketing",
                  marker: "Marketing"
                }
              ]}

              items={[
                {
                  name: "1 img",
                  group: "Web Design",
                  img: "http://www.belbridgestructures.co.uk/wp-content/uploads/2015/11/600x500.jpg"
                },
                {
                  name: "2 img",
                  group: "Web Design",
                  img: "http://www.belbridgestructures.co.uk/wp-content/uploads/2015/11/600x500.jpg"
                  },
                  {
                  name: "3 img",
                  group: "Development",
                  img: "http://www.belbridgestructures.co.uk/wp-content/uploads/2015/11/600x500.jpg"
                  },
                  {
                  name: "4 img",
                  group: "Marketing",
                  img: "http://www.belbridgestructures.co.uk/wp-content/uploads/2015/11/600x500.jpg"
                  },
                  {
                  name: "5 img",
                  group: "Web Design",
                  img: "http://www.belbridgestructures.co.uk/wp-content/uploads/2015/11/600x500.jpg"
                  },
                  {
                  name: "6 img",
                  group: "Marketing",
                  img: "http://www.belbridgestructures.co.uk/wp-content/uploads/2015/11/600x500.jpg"
                  }
              ]}
            />
      </div>
    </section>

      <section className="service" title="service">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h2>What i do</h2>
            </div>
              <Service />
          </div>
        </div>
      </section>

      <section className="experience" title="experience">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Experience</h2>
            </div>
              <Experience />
          </div>
        </div>
      </section>

      <section className="contacts" title="contacts">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Contact Me</h2>
            </div>
          </div>
          <Contacts />
        </div>
      </section>

      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </footer>

  </div>
  )
}

export default App
