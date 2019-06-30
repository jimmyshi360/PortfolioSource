import { Link } from "gatsby"
import React from "react"
import $ from 'jquery/dist/jquery.slim' 
import navbar from "../images/navbar.svg"
import icon from "../images/github_icon.png"

class NavBar extends React.Component{
	
	componentDidMount(){
		var hamburger = document.querySelector(".hamburger");
		hamburger.addEventListener("click", function() {
		hamburger.classList.toggle("is-active");
		});
  
		$(document).ready(function(){
		if( $('.cd-stretchy-nav').length > 0 ) {
			var stretchyNavs = $('.cd-stretchy-nav');
			
			stretchyNavs.each(function(){
				var stretchyNav = $(this),
					stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
				
				stretchyNavTrigger.on('click', function(event){
					event.preventDefault();
					stretchyNav.toggleClass('nav-is-visible');
				});
			});

			$(document).on('click', function(event){
				( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
			});
		}
		});	
	}
	
	render(){
		return (
		<nav className="cd-stretchy-nav">
			<button className="cd-nav-trigger hamburger hamburger--slider"type="button">
				<span className="hamburger-box" >
					<span className="hamburger-inner"></span>
				</span>
			</button>
	  
			<ul>
				<li>
					<Link to="/" className="a active">
						<span>Home<i className="fa fa-home fa-lg nav-icon " aria-hidden="true"></i></span>
					</Link > 
				</li>
				<li> 
					<Link to="/about/" className="a">
						<span>About<i className="fa fa-user-circle-o fa-lg nav-icon" aria-hidden="true"></i></span>
					</Link>  
				</li> 
				<li>
					<Link to="/projects/" className="a">
						<span>Portfolio<i className="fa fa-file-code-o fa-lg nav-icon" aria-hidden="true"></i></span>
					</Link> 
				</li>
				<li>
					<Link to="/contact/" className="a">
						<span>Contact<i className="fa fa-address-book-o fa-lg nav-icon" aria-hidden="true"></i></span>
					</Link> 
				</li>
			</ul>

		   <span aria-hidden="true" className="stretchy-nav-bg"></span>
		</nav>
		)
	}

}
export default NavBar
