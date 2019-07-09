import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../components/about';
import NavBar from '../components/navbar';

class AboutPage extends React.Component {
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
      <About/>
      <NavBar/>
      </div>
    );
  }
}

export default AboutPage;
