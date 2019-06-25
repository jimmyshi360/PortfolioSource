import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import github_icon from "../images/github_icon.png"
import linkedin_icon from "../images/linkedin_icon.png"
import resume_icon from "../images/resume_icon.png"
import projects_icon from "../images/projects_icon.png"
import Footer from "./footer"

const ButtonLayout = () => (
  <div className="icons" >
    
	<ul>
		<li id="b1" className="li-b">
			<a href="https://github.com/jimmyshi360" target="_blank">
				<img className="icon hovered git bounce1" src={github_icon}/>
			</a>
		</li>
		{/**
		<li id="b2" className="li-b">
			<Link to="/projects/">
				<img className="icon hovered linked bounce2" src={projects_icon}/>
			</Link>
		</li>
		**/}
		<li id="b2" className="li-b">
			<a href="https://www.linkedin.com/in/jimmyshi360/" target="_blank">
				<img className="icon hovered linked bounce3" src={linkedin_icon}/>
			</a>
		</li>
		<li id="b3" className="li-b">
			<Link to="/resume/">
				<img className="icon hovered resume bounce4" src={resume_icon}/>
			</Link>
		</li>
	</ul>
  </div>
)

export default ButtonLayout