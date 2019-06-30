import { Link } from "gatsby"
import React from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'

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
			data-aos-duration="2000">
		<div style={{textAlign: 'center', marginTop: '100px'}} 
		>
			<p style={{fontSize: '1.4em'}} 
			
			>
				My portfolio site built from scratch using  
				<a href="https://reactjs.org/"> ReactJS</a>, 
				<a href="https://jquery.com/"> JQuery</a>, 
				<a href="https://www.w3.org/standards/webdesign/htmlcss"> HTML5</a>,
				<a href="http://lesscss.org/"> Less</a>, 
				<a href="https://graphql.org/"> GraphQL</a>, 
				<a href="https://www.gatsbyjs.org/"> GatsbyJS</a>, 
				<a href="https://michalsnik.github.io/aos/"> AOS</a>, 
				<a href="https://www.adobe.com/products/photoshop.html"> Adobe Photoshop</a> and 
				<a href="https://www.adobe.com/products/aftereffects.html"> After Effects</a>

			
			</p>
		</div>
        © {new Date().getFullYear()} Jimmy Shi
      </footer>
);
	}
	
}

export default Footer
