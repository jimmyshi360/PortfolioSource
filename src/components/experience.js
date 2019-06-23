
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import apl_logo from "../images/apl_logo.jpg"
import sem_logo from "../images/sem_logo.png"
import hophacks_logo from "../images/hophacks_logo.png"
import princeton_logo from "../images/princeton_logo.jpg"

class Experience extends React.Component {
	constructor(props){
    super(props)
  }
  
  componentDidMount() {
  }
  
	 render(){
    return (
<div style={{ marginTop: '0%', width: '100%', textAlign: 'center'}}>
	<div className="experience-container">
	
		<div className="box-slide">
			<a href= "https://www.jhuapl.edu/">
				<div className="reveal-content">
					<h4>APL<br/>
					Air Missile Defense</h4>
					<h6>SWE Intern</h6>
				</div>
				<div className="reveal-top">
					<img className="slide-image" src={apl_logo}></img>
				</div>
			</a>
		</div>
		<div className="box-slide">
			<a href= "https://semester.ly/">
				<div className="reveal-content">
					<h4>Semester.ly</h4>
					<h6>Fullstack SWE Intern</h6>
				</div>
				<div className="reveal-top">
					<img className="slide-image" src={sem_logo}></img>
				</div>
			</a>
		</div>
		<div className="box-slide">		
			<a href= "https://hophacks.com/">
				<div className="reveal-content">
					<h4>HopHacks</h4>
					<h6>Frontend Lead</h6>
				</div>
				<div className="reveal-top">
					<img className="slide-image" src={hophacks_logo}></img>
				</div>
			</a>
		</div>
		<div className="box-slide">
			<a href= "https://www.princeton.edu/">
				<div className="reveal-content">
					<h4>Princeton University</h4>
					<h6>Research Intern</h6>
				</div>
				<div className="reveal-top">
					<img className="slide-image" src={princeton_logo}></img>
				</div>
			</a>
		
		</div>
	</div>
</div>
)
	 }
}

export default Experience
