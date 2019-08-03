import React from 'react';

import bannerShirt from '../images/banner_shirt.jpg';
import banner from '../images/banner.png';
import bannerCampus from '../images/banner_campus.jpg';
import genomicProject from '../images/genomic_project.png';
import micropalletProject from '../images/micropallet_project.jpg';
import jsImgProject from '../images/js_img_project.png';
import ccProject from '../images/cc_project.png';
import pirateMapsProject from '../images/pirate_maps.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../pages/styles.css';

class Projects extends React.Component {

  componentDidMount() {
    this.aos = AOS;
    this.aos.init({
      duration: 2000,
	   once: true,
    });
  }

  createSkillsList(list){

    return (

      <div
        style={{ display: 'inline-block'}}
      >
      <ul style={{ listStyle: 'none' }}>
      {list.map( (item, i) => {
      return (
        <li style={{ display: 'inline-block'}}>
            <span
              className="skill-item"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={i*50}
             
            >{item}
            </span>
            </li>
      )} )}
      </ul>
      </div>
   );
  }

  render() {
    return(
      <div id="projects-section" className="projects" style={{ marginTop: '5%' }}>
                <h1> Page under construction </h1>
                
                <h1> Software Projects</h1>

        <div className="project-grid-container">
		
           <div className="grid-item"> 
        <iframe title="Hophacks Site" className="website" src="https://hophacks.com" scrolling="yes" />
        </div>
        <div className="grid-item"> 
        <a href="https://jimmyshi360.github.io/f19/">
          <p><b> My HopHacks Fall 2019 Website Design </b></p>
          <p> The Fall 2019 HopHacks site which I coded using a React stack and designed using Adobe products. My Spring and Fall 2019 sites have 11,500+ combined views</p>
            {this.createSkillsList(["React", "MeteorJS", "JavaScript", "HTML5", "LESS", "Linux", "Git", "Adobe Photoshop", "Adobe After Effects"]) }
        </a>
        </div>
      
      
        <div className="grid-item"> 
		<a href="https://github.com/jimmyshi360/Gene-Set-Data-Analysis-Algorithms">
        <img alt="loading" className="codebase" src={genomicProject} />
		</a>
        </div>
        <div className="grid-item"> 
        <a href="https://github.com/jimmyshi360/Gene-Set-Data-Analysis-Algorithms">
          <p><b> Computational Genomics, Princeton University- Highly Parallel Computing Architecture </b></p>
		  <p> I worked on this research project at Princeton University for gene set data analysis. I tackled the challenge of optimizing statistical tests with a high potential for thread-based computing. I designed an architecture that could best minimize overhead and maximize speed.</p>

          {this.createSkillsList(["Python", "Multiprocessing", "Linux", "Bash", "Git"])}
          
        </a>
        </div>


        <div className="grid-item"> 
		 <a href="https://jimmyshi360.github.io/charmcity/">
        <img alt="loading" className="codebase" src={ccProject} />
		 </a>
        </div>


        <div className="grid-item"> 

        <a href="https://jimmyshi360.github.io/charmcity/">
          <p><b> Charm City Murals- Training CNN Models on 1 Image </b></p>
          {this.createSkillsList(["Python", "TensorFlow", "HTML5", "Bootstrap", "CSS", "Flask"])}
          
        </a>
        </div>

        <div className="grid-item"> 
		        <a href="https://github.com/jimmyshi360/Micropallet-Image-Analysis">

        <img alt="loading" className="codebase" src={micropalletProject} />
		 </a>
        </div>
        <div className="grid-item"> 
        <a href="https://github.com/jimmyshi360/Micropallet-Image-Analysis">
          <p><b> Image Processing Project (UC Irvine Collab)- Analyzing 32 + Megapixel Images </b></p>
          {this.createSkillsList(["Java", "Swing", "JUnit"])}
        </a>
        </div>
        <div className="grid-item"> 
		        <a href="https://github.com/jimmyshi360/micro-image-transformations">

        <img alt="loading" className="codebase" src={jsImgProject} />
 </a>
        </div>
        <div className="grid-item"> 
        <a href="https://github.com/jimmyshi360/micro-image-transformations">
          <p><b> Node JavaScript Image Processing Microlibrary </b></p>
          {this.createSkillsList(["NodeJS", "npm", "JavaScript"])}
        </a>
        </div>   
        
      </div>
        <h1> Older Projects</h1>
        <div className="project-grid-container">

        <div className="grid-item"> 
		        <a href="https://play.google.com/store/apps/details?id=com.CSI.HSSPirateMaps&hl=en_US">

        <img alt="loading" className="codebase" src={pirateMapsProject} />
        </a>

        </div>
        <div className="grid-item"> 
        <a href="https://play.google.com/store/apps/details?id=com.CSI.HSSPirateMaps&hl=en_US">
          <p><b> Android App- Djikstra's for building navigation</b></p>
          {this.createSkillsList(["Unity Game Engine", "C#", "Djikstra Shortest path with backtracking"])}
        </a>
        </div>

        <div className="grid-item"> 
        <iframe title="Video Game" className="website" src="https://www.youtube.com/embed/DyGzAc4K2yg" frameBorder="0" scrolling="yes" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

        </div>
        <div className="grid-item"> 
        <a href="https://www.youtube.com/watch?v=DyGzAc4K2yg">
          <p><b> Hack and Slash Video Game, built from scratch using C# and Unity 3D </b></p>
          {this.createSkillsList(["Unity Game Engine", "C#", "Vector Physics", "Adobe Photoshop","Adobe Illustrator"])}
        </a>
        </div>
        </div>
        <h2>Graphics</h2>
        <div className="graphics-grid-container">

        <div className="grid-item"> 
        <img alt="loading" className="graphic" src={bannerShirt} />
        </div>
    
        <div className="grid-item"> 
        <img alt="loading" className="graphic" src={banner} />
        </div>
        <div className="grid-item"> 
        <img alt="loading" className="graphic" src={bannerCampus} />
        </div>

      </div>
      <p><b> Johns Hopkins University Banner and Class T-shirt</b></p>
      </div>
      );
    }

}

export default Projects;
