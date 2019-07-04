import { Link } from "gatsby"
import React from "react"
import $ from 'jquery/dist/jquery.js'
import navbar from "../images/navbar.svg"
import icon from "../images/github_icon.png"

class NavBar extends React.Component{
	
	constructor(props) {
		super(props);
		this.state={expanded: false};
	}
	
	componentDidMount(){
		var $anchor = $("#scroller-anchor");
            var $scroller = $('#scroller');

            var move = function() {
                var st = $(window).scrollTop();
                var ot = $anchor.offset().top;
                if(st > ot) {
                    $scroller.css({
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                    });
                } else {
                    $scroller.css({
                        position: "relative",
                        top: ""
                    });
                }
            };
            $(window).scroll(move);
            move();
	}
	
	render(){
		return (
		<div style={{marginTop: '50px'}}>
		<div id="scroller-anchor" ></div>
		<div id="scroller" className="navbar">

		<div className="navlist-wrapper">
			<ul>
				<li>
					<a  onClick={()=> {$('html, body').animate({scrollTop: 0}, 1500);}}>
						<span>Home</span>
					</a>
				</li>
				<li>
					<a  onClick={()=> {$('html, body').animate({scrollTop: $('#skills-section').offset().top-100}, 1500);}}>
						<span>Skills</span>
					</a>
				</li>
	            <li>
					<a  onClick={()=> {$('html, body').animate({scrollTop: $('#projects-section').offset().top-100}, 1500);}}>
						<span>Projects</span>
					</a>
				</li>
			    <li>
                	<a  onClick={()=> {$('html, body').animate({scrollTop: $('#about-section').offset().top-100}, 1500);}}>
                		<span>About</span>
                	</a>
                </li>
			</ul>
			</div>
		</div>
		</div>
		)
	}

}
export default NavBar
