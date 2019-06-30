import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import NavBar from "../components/navbar"

class Skills extends React.Component{
	
	render(){
		
		return(

 <div className="skills-wrapper"> 
	<NavBar/>
    <ul>
		<li>
        <h6>Web Development</h6>JS
      </li>
      <li>
        React
      </li>
	  <li>
        Redux
      </li>
	  <li>
	    Jest
	  </li>
	  <li>
        Saga
      </li>
      <li>
        Python
      </li>
      <li>
        Django
      </li>
    </ul>
    <ul>
		<li>
        Java
      </li>
      <li>
        JUnit
      </li>
	  <li>
        C/C++
      </li>
    </ul>
  </div>


);
	}
}

export default Skills
