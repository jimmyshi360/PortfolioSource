import React from 'react';
import AOS from 'aos';
import {
  isMobile,
} from 'react-device-detect';
import aplLogo from '../images/apl_logo.png';
import semLogo from '../images/sem_logo.png';
import acmLogo from '../images/acm_logo.png';
import icpcLogo from '../images/icpc_logo.png';
import palantirLogo from '../images/palantir_logo.png';
import gpalLogo from '../images/gpal_logo.jpg';
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
      <div id="experience-section" style={{ marginTop: '1%', width: '100%', textAlign: 'center' }}>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          data-aos-delay="700"
        >
          Experience
        </p>
        <div className="experience-container">

        <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="500"
          >
            <a {...isMobile ? {} : { href: 'https://www.global-pal.com/' }} target="_blank">
              <div className="reveal-content">
                <h4>Global Pal
                </h4>
                <h6>Chief Technology Officer</h6>
              </div>
              <div className="reveal-top">
                <img className="slide-image" src={gpalLogo} />
              </div>
            </a>
          </div>

          <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="700"
          >
            <a {...isMobile ? {} : { href: 'https://www.palantir.com/' }} target="_blank">
              <div className="reveal-content">
                <h4>Palantir
                </h4>
                <h6>Software Engineer Intern</h6>
              </div>
              <div className="reveal-top">
                <img className="slide-image" src={palantirLogo} />
              </div>
            </a>
          </div>

          <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="1000"
          >
            <a {...isMobile ? {} : { href: 'https://www.jhuapl.edu/' }} target="_blank">
              <div className="reveal-content">
                <h4>
                  APL,
                  <br />
							Air Missile Defense
                </h4>
                <h6>Software Engineer Intern</h6>
              </div>
              <div className="reveal-top">
                <img className="slide-image" src={aplLogo} />
              </div>
            </a>
          </div>

          <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="1300"
          >
            <a {...isMobile ? {} : { href: 'https://semester.ly/' }} target="_blank">
              <div className="reveal-content">
                <h4>Semester.ly</h4>
                <h6>Software Engineer Intern</h6>
              </div>
              <div className="reveal-top">
                <img className="slide-image" src={semLogo} />
              </div>
            </a>
          </div>
          <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="1600"
          >
            <a {...isMobile ? {} : { href: 'https://hophacks.com/' }} target="_blank">
              <div className="reveal-content">
                <h4>HopHacks</h4>
                <h6>Cohead of Design {'&'} Frontend</h6>
              </div>
              <div className="reveal-top">
                <img className="slide-image" src={hophacksLogo} />
              </div>
            </a>
          </div>

          <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="1900"
          >
            <a {...isMobile ? {} : { href: 'https://www.acm.org/' }} target="_blank">
              <div className="reveal-content">
                <h4>JHU ACM</h4>
                <h6>Former Board Member</h6>
              </div>
              <div className="reveal-top">
                <img className="slide-image" src={acmLogo} />
              </div>
            </a>
          </div>

          <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="2200"
          >
            <a {...isMobile ? {} : { href: 'https://icpc.baylor.edu/' }} target="_blank">
              <div className="reveal-content">
                <h4>ICPC Programming Contest</h4>
                <h6>Team Captain</h6>
              </div>
              <div className="reveal-top">
                <img className="slide-image" src={icpcLogo} />
              </div>
            </a>
          </div>

          <div
            className="box-slide"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="2500"
          >
            <a {...isMobile ? {} : { href: 'https://www.princeton.edu/' }} target="_blank">
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
