import React from 'react';

import Projects from '../components/projects';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

class ProjectsPage extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Projects />
        <NavBar dynamic={false} active={4} />
        <Footer />
      </div>
    );
  }
}

export default ProjectsPage;
