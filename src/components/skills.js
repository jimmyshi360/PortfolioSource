import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        style={{
          marginTop: '100px', fontSize: '0.9em', marginLeft: '10vw', marginRight: '10vw',
        }}
      >

        <h4>Skills</h4>
        <ul style={{ listStyle: 'none' }}>
          <h5>Web Development</h5>
          <li>
        <span className="skill-item">React</span><span className="skill-item">Redux</span> 
        <span className="skill-item">Jest</span> <span className="skill-item">JavaScript</span> <span className="skill-item">HTML</span>
        <span className="skill-item">CSS</span><span className="skill-item">SCSS</span><span className="skill-item">LESS</span> 
        <span className="skill-item">MaterialUI</span>
        <span className="skill-item">Open Source</span>
          
          </li>
          <h5>Backend/Middleware</h5>
          <li>
          <span className="skill-item">Python</span><span className="skill-item">Django</span> 
          <span className="skill-item">Redux-Saga</span> <span className="skill-item">WebSockets</span>
          </li>
          <h5>General languages </h5>
          <li>
          <span className="skill-item">Java</span> <span className="skill-item">JUnit</span> <span className="skill-item">C# </span> <span className="skill-item">C</span>
          <span className="skill-item">C++</span> 
          </li>
          <h5>Digital Design Tools</h5>
          <li>
          <span className="skill-item">Adobe Photoshop</span> 
          <span className="skill-item">Adobe Illustrator and After Effects (familiar) </span>
          </li>
        </ul>
      </div>


    );
  }
}

export default Skills;
