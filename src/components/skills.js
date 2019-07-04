import React from "react"
import { Link } from "gatsby"
import AOS from 'aos';
import 'aos/dist/aos.css'
import $ from 'jquery/dist/jquery.js'
class Skills extends React.Component{
			constructor(props){
    super(props)
  }
	 componentDidMount() {

	  this.aos = AOS;
		this.aos.init({
        duration: 2000
      });
	}
	render(){

		return(

 <div id="skills-section" className="skills-wrapper" style={{marginTop: '100px', fontSize: '0.9em', height: '50vh'}} >

	<h4>Skills</h4>
    <ul>
	<h5>Web Development</h5>
		<li>
        React, Redux, Jest, JavaScript, HTML, CSS/SCSS/Less (open-source, several websites including Hophacks Spring and Fall 2019 frontends, the JHU WiCS site, and Department of Defense mission planner site)
      </li>
	   <h5>Backend/Middleware</h5>
      <li>
        Python, Django, Redux-Saga, WebSockets
      </li>
	  <h5>General languages </h5>
	<li>
		 Java, JUnit, C# (Game programming), C/C++ (Coursework and robotics experience)
	</li>
	<h5>Digital Design Tools</h5>
   <li>
        Adobe Photoshop (designed the JHU banner with), Illustrator and After Effects (familiar)
		</li>
    </ul>
  </div>


);
	}
}

export default Skills
