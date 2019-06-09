import { Link } from "gatsby"
import React from "react"

const Footer = ( ) => (
    <div
      style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0px 1.0875rem 1.45rem`,
      paddingTop: 0,
      }}
    >
      <footer>
		<div style={{textAlign: 'center', marginTop: '100px'}}>
			<p style={{fontSize: '1.4em'}}><b>
			<Link to="/">
				Home
			</Link> · <Link to="/about/">
				About
			</Link> · <Link to="/projects/">
				Projects
			</Link> · <Link to="/contact/">
				Contact
			</Link>
			</b>
			
			</p>
		</div>
        © {new Date().getFullYear()} Jimmy Shi
      </footer>
    </div>
)

export default Footer
