import React from "react"
import { Link } from "gatsby"

import banner_shirt from "../images/banner_shirt.jpg"
import banner from "../images/banner.png"
import banner_campus from "../images/banner_campus.jpg"
import genomic_project from "../images/genomic_project.png"
import "./styles.css"
import Footer from "./footer"
const ProjectsPage = () => (

  <div class="projects">
  
  <h2> These are my original designs</h2>
  <h2>Software Projects</h2>
  <a href="https://github.com/jimmyshi360/Gene-Set-Data-Analysis-Algorithms" >
	<img class="codebase" src={genomic_project}></img>
	</a>
  <h2>Websites</h2>
  <a href="https://jimmyshi360.github.io/f19/" >
	<p><b> My HopHacks Fall 2019 Website Design </b></p>
	</a>
    <iframe class="website" src="https://hophacks.com" scrolling="yes"></iframe>
	   
<a href="https://jimmyshi360.github.io/charmcity/" >
	<p><b> Charm City Murals Machine Learning Project </b></p>
	</a>
	   <iframe class="website" src="https://jimmyshi360.github.io/charmcity/" scrolling="yes"></iframe>
  <h2>Apparel</h2>
   <img class="graphic" src={banner_shirt} ></img>
   <h2>Graphics</h2>
   <p><b>I designed the official JHU Class of 2022 Banner </b></p>
    <img class="graphic" src={banner} ></img>
	<img class="graphic" src={banner_campus}></img>
	<Footer/>
</div>


)

export default ProjectsPage
