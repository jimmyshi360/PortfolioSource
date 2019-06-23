
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import name_anim from "../images/name_anim.gif"

class NamePlate extends React.Component {
	constructor(props){
    super(props)
  }
  
  componentDidMount() {
	  const elementLogo = document.getElementById('anim');
      elementLogo.src = name_anim+'?'+ new Date().getTime();
  }
  
	 render(){
    return (
<div style={{marginBottom: '50px', marginTop: '10%'}}>

	<div style={{textAlign: 'center'}}>
		<img className="name" id="anim" />
		<br/>
		<div className="name-desc-container">
			<p className="nameplate-role">
				<b>{'<'}software engineer{'/>'}</b>
			</p>
			<p className="nameplate-title"> and <i>web developer</i>
			</p>
		</div>
	</div>
</div>
)
	 }
}

export default NamePlate
