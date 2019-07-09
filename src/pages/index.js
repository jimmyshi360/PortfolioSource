import React from 'react';

import AOS from 'aos';
import Layout from '../components/layout';
import SEO from '../components/seo';
import 'aos/dist/aos.css';

class IndexPage extends React.Component {
  componentDidMount() {
    this.aos = AOS;
    this.aos.init({
      duration: 2000,
      once: true,
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Jimmy Shi" description="Jimmy Shi: Software Engineer and Digital Designer" keywords={['Jimmy Shi', 'Mingze Shi', 'Website']} />


      </Layout>
    );
  }
}

export default IndexPage;
