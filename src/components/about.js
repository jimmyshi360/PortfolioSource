import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {
  isMobile,
} from 'react-device-detect';
import profile from '../images/jimmy.png';
import mhsHackathon from '../images/hackMHS.jpg';
import stem from '../images/stem.jpg';
import nyu from '../images/nyu.jpg';
import hophacks from '../images/hophacks.jpg';
import vienna from '../images/vienna.jpg';
import stemAward from '../images/stemAward.jpg';
import oldman from '../images/oldman.jpg';
import joshan from '../images/joshan.jpg';
import banner from '../images/banner_campus.jpg';
import foobar from '../images/foobar.png';

class About extends React.Component {
	 componentDidMount() {
	  this.aos = AOS;
    this.aos.init({
      duration: 2000,
      once: true,
    });
  }

  render() {
    return (

      <div
        id="about-section"
        style={{
          textAlign: 'center',
          marginTop: '125px',
        }}
      >
        <h4>About</h4>
        <img
          alt="loading"
          className="about-profile"
          src={profile}
        />
        <div
          className="desc"
          style={{ marginLeft: isMobile ? '10%' : '25%', marginRight: isMobile ? '10%' : '25%' }}
        >
          <p >
 Hi! I'm Jimmy, a Sophomore (Junior by credits) Computer Science Major at Johns Hopkins University graduating in May 2022 (will graduate early in May 2021 if need be) and Cohead of Design at HopHacks, JHU's official Hackathon. I love Full Stack development and I currently
 intern at JHU APL Air Missile Defense as a Software Engineering Intern helping expand their React/Redux/Saga/Jest/Flask mission planner for the Department of Defense to be used by Navy Warfighters.
          </p>
          <p>
		  I like to hang out with my friends at Hackathons. Coming up with new ideas and having fun making them is why I love software engineering!
          </p>
        </div>
        <a className="lightbox" href="#img1" id="preimg1">
          <img
            alt="loading"
            src={hophacks}
            className="desc"
            className="about-image"
          />
        </a>
        <div className="lightbox-target" id="img1">
          <img src={hophacks} />
          <a className="lightbox-close" href="#preimg1" />

        </div>

        <h6>2nd Place at HopHacks 2018</h6>


        <a className="lightbox" href="#img2" id="preimg2">
          <img
            alt="loading"
            src={nyu}
            className="desc"
            className="about-image"
          />
        </a>
        <div className="lightbox-target" id="img2">
          <img src={nyu} />
          <a className="lightbox-close" href="#preimg2" />

        </div>
        <h6>Best AWS and Assistive Tech Track at HackNYU 2017</h6>

        <a className="lightbox" href="#img3" id="preimg3">
          <img
            alt="loading"
            src={mhsHackathon}
            className="desc"
            className="about-image"
          />
        </a>
        <div className="lightbox-target" id="img3">
          <img src={mhsHackathon} />
          <a className="lightbox-close" href="#preimg3" />

        </div>
        <h6>My first Hackathon! Best mobile app at HackMHS 2015</h6>
        <div
          className="desc"
          style={{ marginLeft: isMobile ? '10%' : '25%', marginRight: isMobile ? '10%' : '25%' }}
        >
          <p>
		 I was born in Beijing, but lived around Europe mostly in Vienna, Austria. My dad worked in the UN, so we traveled all over the place.  I moved to Princeton Junction, New Jersey when I was seven.
          </p>
        </div>
        <a className="lightbox" href="#img4" id="preimg4">
          <img
            alt="loading"
            src={vienna}
            className="desc"
            className="about-image"
          />
        </a>
        <div className="lightbox-target" id="img4">
          <img src={vienna} />
          <a className="lightbox-close" href="#preimg4" />

        </div>
        <h6>me (left), family friend (right) </h6>
        <div
          className="desc"
          style={{ marginLeft: isMobile ? '10%' : '25%', marginRight: isMobile ? '10%' : '25%' }}
        >
          <p>
          My first experience with tech was on an old iMac in Vienna playing Pac-Man. I was hooked... I knew what I wanted to do in my spare time: make games! (I like to call it digital design)
          </p>
          <p>
          Over the Summer of 2016, I studied game design from industry professionals and freelance developers at Carnegie Mellon University.  My team's final project won a National award founded by Barack Obama: the National STEM Video Game Design Challenge.
          </p>
        </div>

        <a className="lightbox" href="#img5" id="preimg5">
          <img
            alt="loading"
            src={stemAward}
            className="desc"
            className="about-image"
          />
        </a>
        <div className="lightbox-target" id="img5">
          <img src={stemAward} />
          <a className="lightbox-close" href="#preimg5" />

        </div>
        <h6>National STEM Video Game Design Challenge</h6>
        <a className="lightbox" href="#img6" id="preimg6">
          <img
            alt="loading"
            src={stem}
            className="desc"
            className="about-image"
          />
        </a>
        <div className="lightbox-target" id="img6">
          <img src={stem} />
          <a className="lightbox-close" href="#preimg6" />

        </div>

        <div
          className="desc"
          style={{ marginLeft: isMobile ? '10%' : '25%', marginRight: isMobile ? '10%' : '25%' }}
        >
          <h6>
 Emil Pagliarulo, Senior Designer of Skyrim (left), Ed Fries, former Vice President of publishing at Microsoft (right)
          </h6>
        </div>
        <div
          className="desc"
          style={{ marginLeft: isMobile ? '10%' : '25%', marginRight: isMobile ? '10%' : '25%' }}
        >
          <p>
		Outside of game development, I'm on the Johns Hopkins University ICPC Programming team. I've previously competed in the USA Computing Olympiad, UPenn PClassic, Bloomberg CodeCon, and the ACM Intercollegiate Programming Contest.
          </p>

          <a className="lightbox" href="#img9" id="preimg9">
          <img
            alt="loading"
            src={foobar}
            className="desc"
            className="about-image"
          />
        </a>
        <div className="lightbox-target" id="img9">
          <img src={foobar} />
          <a className="lightbox-close" href="#preimg9" />

        </div>

        <h6>Google Foobar challenge</h6>

          <p >
      I used to take art classes from Chinese painter Yong Zhou. I treat everything like it's art: software, websites and even text documents. I believe beautiful design makes everything better!
            {' '}
          </p>
        </div>

        <a className="lightbox" href="#img7" id="preimg7">
          <img
            alt="loading"
            src={joshan}
            className="desc"
            className="about-image"
          />
        </a>
        <div  className="lightbox-target" id="img7">
          <img src={joshan} />
          <a className="lightbox-close" href="#preimg7" />
          
        </div>
        

        <a className="lightbox" href="#img11" id="preimg11">
          <img
            alt="loading"
            src={oldman}
            className="desc"
            className="about-image"
            style={{marginLeft: '1vw', width: '325px'}}
          />
        </a>
        <div className="lightbox-target" id="img11">
          <img src={oldman} />
          <a  className="lightbox-close" href="#preimg11" />
          
        </div>
        <h6>A rough sketch of my friend from the ACM and a painting of mine from last year.</h6>
        <div
          className="desc"
          style={{ marginLeft: isMobile ? '10%' : '25%', marginRight: isMobile ? '10%' : '25%' }}
        >
          <p>
I designed the Official 2022 JHU Class Banner, and I apply my digital design skills in college through web development. I help maintain the WiCS website and I create new responsive frontends each year for HopHacks.
            {' '}
          </p>
        </div>
        <a className="lightbox" href="#img8" id="preimg8">
          <img
            alt="loading"
            src={banner}
            className="desc"
            className="about-image"
          />
        </a>
        <div className="lightbox-target" id="img8">
          <img src={banner} />
          <a className="lightbox-close" href="#preimg8" />

        </div>
        <h6>My winning banner design</h6>

        <div
          className="desc"
          style={{ marginLeft: isMobile ? '10%' : '25%', marginRight: isMobile ? '10%' : '25%' }}
        >


          <p>
            {' '}
I'm a digital designer and I enjoy creating polished experiences for all sorts of applications. Feel free to browse my projects and designs.
 I hope you like them!
          </p>

          <p className="desc" style={{ marginLeft: '20%', marginRight: '20%', fontSize: isMobile ? '0.7em' : '1em' }}>
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
      </div>
    );
  }
}
export default About;
