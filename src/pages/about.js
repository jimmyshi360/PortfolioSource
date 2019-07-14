import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../components/about';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import SEO from '../components/seo';

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
        <SEO title="About" description="Jimmy Shi: Software Engineer and Digital Designer" keywords={['Jimmy Shi', 'Mingze Shi', 'Website', 'About']} />

         <NavBar dynamic={false} active={2} />
        <About />
       
        <Footer />
      </>
    );
  }
}

export default AboutPage;
