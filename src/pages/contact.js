import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import 'aos/dist/aos.css'
import AOS from 'aos'

class ContactPage extends React.Component {
	constructor(props){
    super(props)
  }
  
 componentDidMount() {
	  this.aos = AOS;
		this.aos.init({
        duration: 2000
      });
  }
  
render(){
	return(
 <div style={{textAlign: 'center',
  marginTop: '250px'}} >
  
  <NavBar/>
  <div data-aos="fade-up" data-aos-duration="1000"
		data-aos-offset="400"
		data-aos-delay="0"  >
 <p className="desc" style={{marginLeft: '20%', marginRight: '20%'}} >
<b>E-mail:</b> jimmyshi360@gmail.com <br/>
<b>Phone:</b> (609)-216-0130 <br/>
<b>LinkedIn Username:</b> jimmyshi360

 </p>
 </div>
 <Footer/>
</div>
);
}
}

export default ContactPage
