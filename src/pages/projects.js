import React from "react"
import { Link } from "gatsby"

import banner_shirt from "../images/banner_shirt.jpg"
import banner from "../images/banner.png"
import banner_campus from "../images/banner_campus.jpg"
import genomic_project from "../images/genomic_project.png"
import micropallet_project from "../images/micropallet_project.jpg"
import js_img_project from "../images/js_img_project.jpg"
import cc_project from "../images/cc_project.png"

import "./styles.css"
import Footer from "../components/footer"
import NavBar from "../components/navbar"

const ProjectsPage = () => (

  <div class="projects" style={{marginTop: '50px'}}>
  <NavBar/>
  <h2> These are my original designs</h2>
  <h2>Software Projects</h2>

  <a href="https://github.com/jimmyshi360/Gene-Set-Data-Analysis-Algorithms" >
    <p><b> Computational Genomics, Princeton University- Highly Parallel Computing Architecture </b></p>
	<img class="codebase" src={genomic_project}></img>
	</a>
	

	
	  <a href="https://www.youtube.com/watch?v=DyGzAc4K2yg" >
	<p><b> Massive Role Playing Hack and Slash Game, built from scratch </b></p>
	</a>
    <iframe class="website" src="https://www.youtube.com/embed/DyGzAc4K2yg" frameborder="0" scrolling="yes" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
	
	
	<a href="https://jimmyshi360.github.io/charmcity/" >
    <p><b> Machine Learning- Training CNN Models on 1 Image </b></p>
	<img class="codebase" src={charmcity_proj}></img>
	</a>
	
		<a href="https://github.com/jimmyshi360/Micropallet-Image-Analysis" >
    <p><b> Image Processing Project (UC Irvine Collab)- Analyzing 32 + Megapixel Images </b></p>
	<img class="codebase" src={micropallet_project}></img>
	</a>
	
	<a href="https://github.com/jimmyshi360/micro-image-transformations" >
    <p><b> Node JavaScript Image Processing Microlibrary </b></p>
	<img class="codebase" src={js_img_project}></img>
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
    <img class="graphic" src={banner} ></img><br/>
	<img class="graphic" src={banner_campus}></img>
	<Footer/>
</div>


)

export default ProjectsPage
