import React from "react"
import { Link } from "gatsby"
import profile from "../images/profile.jpg"
import 'aos/dist/aos.css'
import AOS from 'aos'
import {
	isMobile
} from "react-device-detect";

class About extends React.Component{
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

  <div id="about-section" style={{textAlign: 'center',
  marginTop: '150px'}}>
  <img className="desc" src={profile} style={{borderRadius: '100%', width: '100px'}} data-aos="fade-up"
		data-aos-duration="1000"
		data-aos-offset="400"
		data-aos-delay="0"></img>
		

 <div className="desc" style={{marginLeft: isMobile ? '10%':'25%', marginRight: isMobile ? '10%':'25%'}} data-aos="fade-up"
		data-aos-duration="1000"
		data-aos-offset="400"
		data-aos-delay="200">
		<p style={{fontSize: isMobile ? '0.7em': '1em'}}>
 Hi! I'm Jimmy, a Sophomore Computer Science Major at Johns Hopkins University. I love fullstack development and I currently
 intern at JHU APL Air Missile Defense as a Software Engineering Intern helping expand their React/Redux/Saga/Jest/Flask codebase- a mission planner for the Missile Defense Agency to be used by Navy Warfighters.
 </p>
 <p style={{fontSize: isMobile ? '0.7em': '1em'}}> I'm a digital designer and I enjoy creating polished experiences for all sorts of applications. Feel free to browse my projects and designs. 
 I hope you like them!</p>
</div>


 <p className="desc" style={{marginLeft: '20%', marginRight: '20%'}} >
<b>E-mail:</b> jimmyshi360@gmail.com <br/>
<b>Phone:</b> (609)-216-0130 <br/>
<b>LinkedIn Username:</b> jimmyshi360

 </p>
</div>


);
	}

}
export default About
