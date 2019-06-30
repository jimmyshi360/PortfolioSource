import { Link } from "gatsby"
import React from "react"
import $ from 'jquery/dist/jquery.slim' 
import navbar from "../images/navbar.svg"
import icon from "../images/github_icon.png"

class NavBar extends React.Component{
	
	constructor(props) {
		super(props);
		this.state={expanded: false};
	}
	
	componentDidMount(){
		
		let currentComponent = this;
		var hamburger = document.querySelector(".hamburger");
		$(document).ready(function(){
		if( $('.cd-stretchy-nav').length > 0 ) {
			var stretchyNavs = $('.cd-stretchy-nav');
			
			stretchyNavs.each(function(){
				var stretchyNav = $(this),
					stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
				
				stretchyNavTrigger.on('click',(event) =>{
					event.preventDefault();
					stretchyNav.toggleClass('nav-is-visible');
					currentComponent.setState({expanded: !currentComponent.state.expanded});
				});
			});

			$(document).on('click', (event)=>{
				( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
				( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && currentComponent.setState({expanded: false});
				( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && $(hamburger).removeClass("is-active");

			});
		}
		});	
		
		
		hamburger.addEventListener("click", () =>{
			if(currentComponent.state.expanded!==true) {
				$(hamburger).addClass("is-active");
			}
			else {
				$(hamburger).removeClass("is-active");
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
