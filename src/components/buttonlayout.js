import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import github_icon from "../images/github_icon.png"
import linkedin_icon from "../images/linkedin_icon.png"
import resume_icon from "../images/resume_icon.png"
import projects_icon from "../images/projects_icon.png"
import Footer from "./footer"

import AOS from 'aos';
import 'aos/dist/aos.css'

class ButtonLayout extends React.Component{
	
	
	 componentDidMount() {
		 
	  this.aos = AOS;
		this.aos.init({
        duration: 2000
      });
	}
	
	render() {
		
		return (<div className="icons" >
    
	<ul>
		<li className="li-b"
		data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="1000">
			<a href="https://github.com/jimmyshi360" target="_blank">
				<img className="icon hovered git bounce1" src={github_icon}/>
			</a>
		</li>
		<li className="li-b" 	data-aos="fade-up"
                               data-aos-duration="1000"
                                     				data-aos-delay="1000">
			<a href="https://www.linkedin.com/in/jimmyshi360/" target="_blank">
				<img className="icon hovered linked bounce3" src={linkedin_icon}/>
			</a>
		</li>
		<li  className="li-b" 	data-aos="fade-up"
                                     				data-aos-duration="1000"
                                     				data-aos-delay="1000">
			<a href="/resume/" target="_blank">
				<img className="icon hovered resume bounce4" src={resume_icon}/>
			</a>
		</li>
	</ul>
  </div>
)
	}
}

export default ButtonLayout