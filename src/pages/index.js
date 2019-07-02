import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'aos/dist/aos.css'
import AOS from 'aos'

class IndexPage extends React.Component{
		constructor(props){
    super(props)
  }
	 componentDidMount() {
	  this.aos = AOS;
		this.aos.init({
        duration: 2000,
		once: true
      });
  }

	render(){
	return(
  <Layout>
    <SEO title="Jimmy Shi" description="Jimmy Shi: Software Engineer and Digital Designer" keywords={[`Jimmy Shi`, `Mingze Shi`, `Website`]} />


  </Layout>
)
}
}

export default IndexPage
