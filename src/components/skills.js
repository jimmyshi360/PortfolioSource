import React from "react"
import { Link } from "gatsby"

class Skills extends React.Component{
	
	render(){
		
		return(

 <div className="skills-wrapper" style={{marginTop: '50px', fontSize: '0.9em'}}>
	<h4>Skills</h4>
    <ul>
	<h5>Web Development</h5>
		<li>
        React, Redux, Jest, JavaScript, HTML, CSS/SCSS/Less 3+ years of experience (open-source, several websites including Hophacks Spring and Fall 2019 frontends, the JHU WiCS site, and Department of Defense mission planner site)
      </li>
	   <h5>Backend/Middleware</h5>
      <li>
        Python, Django, Redux-Saga
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
