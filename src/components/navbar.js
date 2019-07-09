import React from 'react';
import $ from 'jquery/dist/jquery.js';
import { Link } from "gatsby"

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.move = this.move.bind(this);
  }

    move ($anchor, $scroller) {
    const st = $(window).scrollTop();
    const ot = $anchor.offset().top;
    if(this.props.dynamic) {
    if (st > ot) {
      $scroller.css({
        position: 'fixed',
        top: '0px',
        left: '0px',
      });
    } else if (st + window.innerHeight <= ot + 36) {
      $scroller.css({
        position: 'fixed',
        bottom: '0px',
        left: '0px',
      });
    } else {
      $scroller.css({
        position: 'relative',
        top: '',
      });
    }
   }
   else {
    $scroller.css({
      position: 'fixed',
      top: '0px',
      left: '0px',
    });
  }
  }

  componentDidMount() {
    const $anchor = $('#scroller-anchor');
    const $scroller = $('#scroller');

    
    $(window).scroll(this.move($anchor, $scroller));
    this.move($anchor, $scroller);
  }

  render() {
    return (
      <div id="nav-section" style={{ marginTop: '50px' }}>
        <div id="scroller-anchor" />
        <div id="scroller" className="navbar">

          <div className="navlist-wrapper">
            <ul>
              <li>
              <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
			   <li>
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>
              <li>
              <Link to="/skills">
                  <span>Skills</span>
                </Link>
              </li>
              <li>
              <Link to="/projects">
                  <span>Projects</span>
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
