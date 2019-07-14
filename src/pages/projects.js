import React from 'react';

import Projects from '../components/projects';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import SEO from '../components/seo';
class ProjectsPage extends React.Component {
  render() {
    return (
      <>
        <SEO title="Projects" description="Jimmy Shi: Software Engineer and Digital Designer" keywords={['Jimmy Shi', 'Mingze Shi', 'Website', 'Projects']} />

        <NavBar dynamic={false} active={4} />
        <Projects />
        
        <Footer />
      </>
    );
  }
}

export default ProjectsPage;
