import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  isMobile,
} from 'react-device-detect';
class Skills extends React.Component {
  componentDidMount() {
    this.aos = AOS;
    this.aos.init({
      duration: 2000,
    });
  }

  render() {
    return (

      <div
        id="skills-section"
        className="skills-wrapper"
      
      >

        <h4
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
Skills
        </h4>
        <p 
        data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0">I'm a digital designer who leverages fullstack tools to create polished experiences. I've recently worked on a lot of React Redux Python stacks for component-based User Interface development.</p>
        <ul style={{ listStyle: 'none' }}>
          <h5
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="1000"
          >
Web Development
          </h5>
          <li>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="0"
            >
React
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="50"
            >
Redux
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
Jest
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="150"
            >
JavaScript/TypeScript
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
HTML
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="250"
            >
CSS
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
            >
SCSS
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="350"
            >
LESS
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
            >
MaterialUI
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="450"
            >
Open Source
            </span>

          </li>
          <h5
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="1000"
          >
Backend/Middleware
          </h5>
          <li>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="650"
            >
Python
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
Django (familiar)
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="550"
            >
Redux-Saga
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="500"
            >
WebSockets
            </span>
          </li>
          <h5
            data-aos="zoom-in"
            data-aos-duration="1100"
            data-aos-delay="1000"
          >
General languages
          </h5>
          <li>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="700"
            >
Java
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="750"
            >
JUnit
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="800"
            >
C#
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="850"
            >
C (familiar)
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="900"
            >
C++ (familiar)
            </span>
          </li>
          <h5
            data-aos="zoom-in"
            data-aos-duration="1100"
            data-aos-delay="1000"
          >
Digital Design
          </h5>
          <li>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="1050"
            >
Adobe Photoshop
            </span>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="1000"
            >
Adobe Illustrator (familiar)
            </span>

            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="950"
            >
Adobe After Effects (familiar)
            </span>
          </li>
        </ul>
      </div>


    );
  }
}

export default Skills;
