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
<div style={{marginTop: '60px', textAlign: 'center'}}>
	<a onClick={()=> {
		$('html, body').animate({
        scrollTop: $("#skills-section").offset().top
    }, 1000);}} 
	style={{ cursor: 'pointer'}}>Skills
	
	<div class="downArrow bounce">
  <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
</div>
</a>
 <div id="skills-section" className="skills-wrapper" style={{marginTop: '150px', fontSize: '0.9em', height: '50vh'}} >
 
	<h4>Skills</h4>
    <ul>
	<h5>Web Development</h5>
		<li>
        React, Redux, Jest, JavaScript, HTML, CSS/SCSS/Less 3+ years of experience (open-source, several websites including Hophacks Spring and Fall 2019 frontends, the JHU WiCS site, and Department of Defense mission planner site)
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
</div>

);
	}
}

export default Skills
