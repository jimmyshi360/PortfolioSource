import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {
  isMobile,
} from 'react-device-detect';
import profile from '../images/profile.jpg';
import mhsHackathon from '../images/hackMHS.jpg';
import stem from '../images/stem.jpg';
import nyu from '../images/nyu.jpg';
import hophacks from '../images/hophacks.jpg';
import vienna from '../images/vienna.jpg';
import cmu from '../images/cmu.jpg';
import stemAward from '../images/stemAward.jpg';
import joshan from '../images/joshan.jpg';
import banner from '../images/banner_campus.jpg';
import foobar from '../images/foobar.jpg';
class About extends React.Component {
	 componentDidMount() {
	  this.aos = AOS;
    this.aos.init({
      duration: 2000,
    });
  }

  render() {
    return (

      <div
        id="about-section"
        style={{
          textAlign: 'center',
          marginTop: '150px',
        }}
      >
        <h4>About</h4>
        <img
          alt="loading"
          className="desc"
          src={profile}
          style={{ borderRadius: '100%', width: '100px' }}
   
        />


        <div
          className="desc"
          style={{ marginLeft: isMobile ? '10%' : '25%', marginRight: isMobile ? '10%' : '25%' }}

        >
          <p style={{ fontSize: isMobile ? '0.7em' : '1em' }}>
 Hi! I'm Jimmy, a Sophomore(almost Junior Standing) Computer Science Major at Johns Hopkins University. I love Full Stack development and I currently
 intern at JHU APL Air Missile Defense as a Software Engineering Intern helping expand their React/Redux/Saga/Jest/Flask codebase- a mission planner for the Department of Defense to be used by Navy Warfighters.
          </p>
		  <p style={{ fontSize: isMobile ? '0.7em' : '1em' }}>
		  I like to hang out with my friends at Hackathons. Coming up with new ideas and having fun making them is why I love software engineering!
		  </p>
		   <img
          alt="loading"
          className="desc"
          src={hophacks}
          className="about-image"
   
        />
		<h6>2nd Place at HopHacks 2018</h6>
		

		  <img
          alt="loading"
          className="desc"
          src={nyu}
          className="about-image"
   
        />
		<h6>Best AWS and Assistive Tech Track at HackNYU 2017</h6>
		<img
          alt="loading"
          className="desc"
          src={stem}
          className="about-image"
		
        />
		
		<h6>A picture with some influential people in the video game industry<br/>(left) Emil Pagliarulo, Game Design Director of Skyrim at Bethesda (right) Ed Fries, Former Vice President of publishing at Microsoft</h6>
		 <img
          alt="loading"
          className="desc"
          src={mhsHackathon}
          className="about-image"
   
        />
		<h6>My first Hackathon! Best mobile app at HackMHS 2015</h6>
		
		<p style={{ fontSize: isMobile ? '0.7em' : '1em' }}>
		It's certainly been a long journey since I first started in tech. Perhaps you're wondering where I began and where I'm from. I was born in Beijing, but lived around Europe, mostly in Vienna, Austria for the first few years of my life. My dad worked in the UN, so we traveled all over the east.  During my travels, I had my first experience with tech on an old iMac in Vienna playing Pac-Man. I was hooked... I knew what I wanted to do in my spare time: make games!
		</p>
		<img
          alt="loading"
          className="desc"
          src={vienna}
          className="about-image"
   
        />
		<h6>(left) me, (right) family friend</h6>
		
		 <p style={{ fontSize: isMobile ? '0 .7em' : '1em' }}>
          Eventually I enrolled in the National High School Video Game Design Academy at Carnegie Mellon University in the Summer of 2016 where I learned game design from experienced industry and freelance game developers. I met some great lifelong friends along the way!  Our final project won a National award from a game design competition started by Barack Obama: the National STEM Video Game Design Challenge. 
          </p>
		<img
          alt="loading"
          className="desc"
          src={cmu}
          className="about-image"
   
        />
		<h6>The Fence, Carnegie Mellon University</h6>
		<img
          alt="loading"
          className="desc"
          src={stemAward}
          className="about-image"
   
        />
		<h6>National STEM Video Game Design Challenge</h6>
		
		<p style={{ fontSize: isMobile ? '0 .7em' : '1em' }}>
		My career in tech was certainly kick-started by game development. I've spent many hours messing around in the Unity Game Engine. My true beginning in tech however was through my high school's Computer Science curriculum. I'm grateful for the Intro to Java Programming and Advanced Algorithms classes that I took. I got into competition programming, and participated in many competitions like the USA Computing Olympiad, UPenn PClassic, Bloomberg CodeCon, ACM Intecollegiate Programming Contest, and a fun challenge called Google Foobar!
		</p>
		<img
          alt="loading"
          className="desc"
          src={foobar}
          className="about-image2"
   
        />
		<h6>Getting ready for Google Foobar</h6>
		
		<p style={{ fontSize: isMobile ? '0 .7em' : '1em' }}>
		In college, I got into webdesign working for HopHacks and the ACM. I've made the 2019 Spring and Fall Website Frontends and I help maintain the WiCS website.
          </p>
		 <p style={{ fontSize: isMobile ? '0.7em' : '1em' }}>
Did I mention I like to draw? I used to take art classes, but I transitioned my knowledge into the digital realm. I treat everything like it's art: software, websites and even text documents. I believe beautiful design makes everything better!          </p>
		  <img
          alt="loading"
          className="desc"
          src={joshan}
          className="about-image"
   
        />
		<h6>A drawing of my friend from the ACM</h6>
		
		<p style={{ fontSize: isMobile ? '0.7em' : '1em' }}>
		I submitted a digital banner entry for JHU's 2022 Banner Competition, and welp, my classmates voted on it and I got to march my banner through the JHU campus!</p>
         	  <img
          alt="loading"
          className="desc"
          src={banner}
          className="about-image"
   
        />
		<h6>My winning banner design</h6>
		
		<p style={{ fontSize: isMobile ? '0.7em' : '1em' }}>
		As of now, I am working on expanding my knowledge of the Full Stack, while still applying beautiful design to the software projects I work on.  Modular, extensible and technical debt free code is right up my alley.  I especially love designing highly scalable backend systems and responsible clean User Interfaces.  Rest assured that I never forget about those clean end-to-end integration tests!</p>
		
		 <p style={{ fontSize: isMobile ? '0.7em' : '1em' }}>
            {' '}
I'm a digital designer and I enjoy creating polished experiences for all sorts of applications. Feel free to browse my projects and designs.
 I hope you like them!
          </p>
        </div>


        <p className="desc" style={{ marginLeft: '20%', marginRight: '20%',fontSize: isMobile ? '0.7em' : '1em' }}>
          <b>E-mail:</b>
          {' '}
jimmyshi360@gmail.com
          <br />
          <b>Phone:</b>
          {' '}
(609)-216-0130
          <br />
          <b>LinkedIn Username:</b>
          {' '}
jimmyshi360

        </p>
      </div>


    );
  }
}
export default About;
