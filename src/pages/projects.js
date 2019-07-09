import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from '../components/projects';
import NavBar from '../components/navbar';

class SkillsPage extends React.Component {
  componentDidMount() {
    this.aos = AOS;
    this.aos.init({
      duration: 2000,
      once: true,
    });
  }

  render() {
    return (
      <div style={{height: '100vh'}}> 
      <Projects/>
      <NavBar/>
      </div>
    );
  }
}

export default SkillsPage;
