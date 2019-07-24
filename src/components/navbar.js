import React from 'react';
import $ from 'jquery/dist/jquery.js';
import { Link } from 'gatsby';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  componentDidMount(){
      
  }
  
  render() {
    
    return (
   
        <div className="navbar" style={{   position: 'fixed',
        top: '0px',
        left: '0px'}}>

          <div className="navlist-wrapper">
            <ul>
              <li className={this.props.active === 1 ? 'navbarItem  active' : 'navbarItem '}>
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li className={this.props.active === 2 ? 'navbarItem  active' : 'navbarItem '}>
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>
              <li className={this.props.active === 3 ? 'navbarItem  active' : 'navbarItem '}>
                <Link to="/skills">
                  <span>Skills</span>
                </Link>
              </li>
              <li className={this.props.active === 4 ? 'navbarItem  active' : 'navbarItem '}>
                <Link to="/projects">
                  <span>Projects</span>
                </Link>
              </li>

            </ul>
          </div>
        </div>
     
    );
  }
}
export default NavBar;
