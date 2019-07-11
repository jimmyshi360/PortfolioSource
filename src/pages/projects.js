import React from 'react';

import Projects from '../components/projects';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

class ProjectsPage extends React.Component {
  render() {
    return (
      <>
        <NavBar dynamic={false} active={4} />
        <Projects />
        
        <Footer />
      </>
    );
  }
}

export default ProjectsPage;
