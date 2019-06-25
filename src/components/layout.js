/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import NamePlate from "./nameplate"
import ButtonLayout from "./buttonlayout"
import Skills from "./skills"
import Experience from "./experience"
import NavBar from "./navbar"
import Footer from "./footer"
import "./layout.css"
import "./css/font-awesome.min.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
		<NavBar/>
		<NamePlate/>
		<ButtonLayout/>
		
		<Experience/>
        <Footer/>
		<main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
