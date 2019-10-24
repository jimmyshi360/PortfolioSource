import React from 'react';

import AOS from 'aos';
import LayoutSecret from '../components/layout_secret';
import SEO from '../components/seo';
import 'aos/dist/aos.css';

class SecretPage extends React.Component {
  componentDidMount() {
    this.aos = AOS;
    this.aos.init({
      duration: 2000,
      once: true,
    });
  }

  render() {
    return (
      <LayoutSecret>
        <SEO title="Home" description="Jimmy Shi: Software Engineer and Digital Designer" keywords={['Jimmy Shi', 'Mingze Shi', 'Website', 'jimmyshi', 'jimmy shi']} />


      </LayoutSecret>
    );
  }
}

export default SecretPage;
