import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  isMobile,
} from 'react-device-detect';

class Footer extends React.Component {
	 componentDidMount() {
	  this.aos = AOS;
    this.aos.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <footer style={{ marginTop: '5%' }}>
        <hr style={{ margin: '0 25%' }} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: isMobile ? '1em' : '1.2em' }}>
				Built from scratch with
            <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank"> ReactJS</a>
,
            <a href="https://www.w3.org/standards/webdesign/htmlcss" rel="noopener noreferrer" target="_blank"> HTML5</a>
,
            <a href="http://lesscss.org/" rel="noopener noreferrer" target="_blank"> Less</a>
,
            <a href="https://graphql.org/" rel="noopener noreferrer" target="_blank"> GraphQL</a>
,
            <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank"> GatsbyJS</a>
,
            <a href="https://www.adobe.com/products/photoshop.html" rel="noopener noreferrer" target="_blank"> Adobe Photoshop</a>
            {' '}
and
            <a href="https://www.adobe.com/products/aftereffects.html" rel="noopener noreferrer" target="_blank"> After Effects</a>


          </p>
        </div>
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
Jimmy Shi
      </footer>
    );
  }
}

export default Footer;
