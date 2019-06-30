import { Link } from "gatsby"
import React from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'
import {
	isMobile
} from "react-device-detect";

class Footer extends React.Component{

	 componentDidMount() {
	  this.aos = AOS;
		this.aos.init({
        duration: 2000
      });
  }
  
	render(){
		
	return(
      <footer data-aos="zoom-in"
			data-aos-delay="0"
			data-aos-duration="2000" style={{position: 'absolute', bottom: '60px', width: '99.5%'}}>
		<div style={{textAlign: 'center'}} 
		>
			<p style={{fontSize: isMobile ? '1em': '1.4em'}}
			
			>
				My portfolio site built from scratch using  
				<a href="https://reactjs.org/" target="_blank"> ReactJS</a>, 
				<a href="https://jquery.com/" target="_blank"> JQuery</a>, 
				<a href="https://www.w3.org/standards/webdesign/htmlcss" target="_blank"> HTML5</a>,
				<a href="http://lesscss.org/" target="_blank"> Less</a>, 
				<a href="https://graphql.org/" target="_blank"> GraphQL</a>, 
				<a href="https://www.gatsbyjs.org/" target="_blank"> GatsbyJS</a>, 
				<a href="https://michalsnik.github.io/aos/" target="_blank"> AOS</a>, 
				<a href="https://www.adobe.com/products/photoshop.html" target="_blank"> Adobe Photoshop</a> and 
				<a href="https://www.adobe.com/products/aftereffects.html" target="_blank"> After Effects</a>

			
			</p>
		</div>
        © {new Date().getFullYear()} Jimmy Shi
      </footer>
);
	}
	
}

export default Footer
