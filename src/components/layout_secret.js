/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import NamePlate from './nameplate';
import ButtonLayout from './buttonlayout';
import Skills from './skills';
import Projects from './projects';
import ExperienceSecret from './experience_secret';
import NavBar from './navbar';
import About from './about';
import Footer from './footer';
import './layout.css';
import './css/font-awesome.min.css';

const LayoutSecret = () => {
  
    return(
      <>
        <div style={{ height: '100%', textAlign: 'center' }}>
          
          <NavBar dynamic={false} active={1} />
          <NamePlate />
          <ButtonLayout />
          <ExperienceSecret />


        </div>

        <Footer />
      </>
    );
  
};

LayoutSecret.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutSecret;
