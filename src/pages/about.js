import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import profile from "../images/profile.jpg"

const AboutPage = () => (

  <div style={{textAlign: 'center',
  marginTop: '150px'}}>
  
  <img className="desc" src={profile} style={{borderRadius: '100%', width: '100px'}}></img>
 <p className="desc" style={{marginLeft: '20%', marginRight: '20%'}}>
 Hi, my name is Jimmy, a Sophomore standing Computer Science Major at Johns Hopkins University. 
 I designed the Official 2022 JHU Class Banner and I love graphic design. I enjoy working on the full stack and I currently
 intern at Semester.ly as a software engineer helping maintain their open source codebase and deliver thousands of anticipated schedules in the coming year.
 

 </p>
 <Footer/>
</div>


)

export default AboutPage
