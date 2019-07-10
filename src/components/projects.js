import React from 'react';

import bannerShirt from '../images/banner_shirt.jpg';
import banner from '../images/banner.png';
import bannerCampus from '../images/banner_campus.jpg';
import genomicProject from '../images/genomic_project.png';
import micropalletProject from '../images/micropallet_project.jpg';
import jsImgProject from '../images/js_img_project.png';
import ccProject from '../images/cc_project.png';
import pirateMapsProject from '../images/pirate_maps.png';

import '../pages/styles.css';

const Projects = () => (

  <div id="projects-section" className="projects" style={{ marginTop: '5%' }}>
    <h4>Projects</h4>

    <a href="https://jimmyshi360.github.io/f19/">
      <p><b> My HopHacks Fall 2019 Website Design </b></p>
	  <h6>{'<React, MeteorJS, JavaScript, HTML5, SCSS, Linux, Git, Adobe Photoshop and After Effects/>'}</h6>
    </a>
    <iframe title="Hophacks Site" className="website" src="https://hophacks.com" scrolling="yes" />

    <a href="https://github.com/jimmyshi360/Gene-Set-Data-Analysis-Algorithms">
      <p><b> Computational Genomics, Princeton University- Highly Parallel Computing Architecture </b></p>
	  <h6>{'<Python, Multiprocessing, Linux, Bash, Git/>'}</h6>
      <img alt="loading" className="codebase" src={genomicProject} />
    </a>

    <a href="https://jimmyshi360.github.io/charmcity/">
      <p><b> Charm City Murals- Training CNN Models on 1 Image </b></p>
	   <h6>{'<Python, TensorFlow, HTML5, Bootstrap, CSS, Flask/>'}</h6>
      <img alt="loading" className="codebase" src={ccProject} />
      <iframe title="Machine Learning Project Site" className="website" src="https://jimmyshi360.github.io/charmcity/" scrolling="yes" />
    </a>

    <a href="https://github.com/jimmyshi360/Micropallet-Image-Analysis">
      <p><b> Image Processing Project (UC Irvine Collab)- Analyzing 32 + Megapixel Images </b></p>
	   <h6>{'<Java, Java Swing, JUnit/>'}</h6>
      <img alt="loading" className="codebase" src={micropalletProject} />
    </a>

    <a href="https://github.com/jimmyshi360/micro-image-transformations">
      <p><b> Node JavaScript Image Processing Microlibrary </b></p>
	   <h6>{'<NodeJS, npm, JavaScript/>'}</h6>
      <img alt="loading" className="codebase" src={jsImgProject} />
    </a>
    <h1> Older Projects</h1>

    <a href="https://play.google.com/store/apps/details?id=com.CSI.HSSPirateMaps&hl=en_US">
      <p><b> Android App- Djikstra's for building navigation</b></p>
	   <h6>{'<Unity Game Engine, C#, Djikstra Shortest path with backtracking/>'}</h6>
      <img alt="loading" className="codebase" src={pirateMapsProject} />
    </a>

    <a href="https://www.youtube.com/watch?v=DyGzAc4K2yg">
      <p><b> Hack and Slash Video Game, built from scratch using C# and Unity 3D </b></p>
	  	   <h6>{'<Unity Game Engine, C#, Vector Physics, Adobe Photoshop and Illustrator/>'}</h6>
    </a>
    <iframe title="Video Game" className="website" src="https://www.youtube.com/embed/DyGzAc4K2yg" frameBorder="0" scrolling="yes" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


    <h2>Apparel</h2>
    <img alt="loading" className="graphic" src={bannerShirt} />
    <h2>Graphics</h2>
    <p><b>I designed the official JHU Class of 2022 Banner </b></p>
		   <h6>{'<Adobe Photoshop and Illustrator/>'}</h6>

    <img alt="loading" className="graphic" src={banner} />
    <br />
    <img alt="loading" className="graphic" src={bannerCampus} />
  </div>


);

export default Projects;
