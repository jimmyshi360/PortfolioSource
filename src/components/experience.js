import React from 'react';
import AOS from 'aos';
import {
  isMobile,
} from 'react-device-detect';
import aplLogo from '../images/apl_logo.jpg';
import semLogo from '../images/sem_logo.png';


import 'aos/dist/aos.css';
import hophacksLogo from '../images/hophacks_logo.png';
import princetonLogo from '../images/princeton_logo.jpg';


class Experience extends React.Component {
	 componentDidMount() {
	  this.aos = AOS;
    this.aos.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <div id="experience-section" style={{ marginTop: '1%',  width: '100%', textAlign: 'center' }}>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
Experience
        </p>
        <div className="experience-container">

          <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <a {... isMobile ? {} : { href: 'https://www.jhuapl.edu/' }} target="_blank">
              <div className="reveal-content">
                <h4>
JHU APL,
                  <br />
							Air Missile Defense
                </h4>
                <h6>Frontend SWE Intern</h6>
              </div>
              <div className="reveal-top">
                <img className="slide-image" src={aplLogo} />
              </div>
            </a>
          </div>

          <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1300"
          >
            <a {... isMobile ? {} : { href: 'https://semester.ly/' }} target="_blank">
              <div className="reveal-content">
                <h4>Semester.ly</h4>
                <h6>Fullstack SWE Intern</h6>
              </div>
              <div className="reveal-top">
                <img className="slide-image" src={semLogo} />
              </div>
            </a>
          </div>
          <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1600"
          >
            <a {... isMobile ? {} : { href: 'https://hophacks.com/' }} target="_blank">
              <div className="reveal-content">
                <h4>HopHacks</h4>
                <h6>Frontend Lead</h6>
              </div>
              <div className="reveal-top">
                <img className="slide-image" src={hophacksLogo} />
              </div>
            </a>
          </div>
          <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1900"
          >
            <a {... isMobile ? {} : { href: 'https://www.princeton.edu/' }} target="_blank">
              <div className="reveal-content">
                <h4>Princeton University</h4>
                <h6>Research Intern</h6>
              </div>
              <div className="reveal-top">
                <img className="slide-image" src={princetonLogo} />
              </div>
            </a>

          </div>

        </div>
      </div>
    );
	 }
}

export default Experience;
