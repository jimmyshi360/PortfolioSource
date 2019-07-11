import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../components/about';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

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
      <>
         <NavBar dynamic={false} active={2} />
        <About />
       
        <Footer />
      </>
    );
  }
}

export default AboutPage;
