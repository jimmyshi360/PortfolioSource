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
 Hi! I'm Jimmy, a Sophomore(almost Junior Standing) Computer Science Major at Johns Hopkins University. I love fullstack development and I currently
 intern at JHU APL Air Missile Defense as a Software Engineering Intern helping expand their React/Redux/Saga/Jest/Flask codebase- a mission planner for the Missile Defense Agency to be used by Navy Warfighters.
          </p>
		  <p style={{ fontSize: isMobile ? '0.7em' : '1em' }}>
		  I like to hang out with my friends at Hackathons. Coming up with new ideas and having fun making them is why I love software engineering!
		  </p>
		  <img
          alt="loading"
          className="desc"
          src={nyu}
          style={{  width: '30vw' }}
   
        />
		<h6>Best AWS and Assistive Tech Track at HackNYU</h6>
		<img
          alt="loading"
          className="desc"
          src={stem}
          style={{  width: '30vw' }}
		
        />
		<h6>A picture with some influential people in the video game industry</h6>
		<h6>(left) Emil Pagliarulo, Game Design Director of Skyrim at Bethesday (right) Ed Fries, Former Vice President of publishing at Microsoft</h6>
		 <img
          alt="loading"
          className="desc"
          src={mhsHackathon}
          style={{  width: '30vw' }}
   
        />
		<h6>MY first Hackathon! Best mobile app at HackMHS</h6>
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
