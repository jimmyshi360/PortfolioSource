import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from '../components/skills';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import SEO from '../components/seo';
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
      <>
        <SEO title="Skills" description="Jimmy Shi: Software Engineer and Digital Designer" keywords={['Jimmy Shi', 'Mingze Shi', 'Website', 'Skills']} />

        <NavBar dynamic={false} active={3} />
        <Skills />
        
        <Footer />
      </>
    );
  }
}

export default SkillsPage;
