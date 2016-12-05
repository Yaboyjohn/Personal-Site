import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Scroll from 'react-scroll';

import $ from 'jquery';
import _ from 'lodash';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  scroll (target) {
   scroller.scrollTo(target, {
     duration: 500,
     delay: 100,
     smooth: true,
     offset: -20
   })
 }

  componentDidMount() {}

  render () {
    return (
      <div className="page page--about"
      style={{
              backgroundImage: `url(${prefixLink('/../img/newyork.jpg')})`
            }}>
        <div className="overlay"></div>
          <h1 className="title john">John</h1>
          <h1 className="title ang">Ang</h1>
          <h3 className="description">Student | Programmer | Designer</h3>
          <div className="about-button" onClick={this.scroll.bind(this, "about")}>
            <h3 className="about-button-words">About</h3>
          </div>
        <Element name="about"></Element>
        <div className="about--page">
          <h1 className="about-title">ABOUT</h1>
          <div className="about-line"></div>
          <img className="john" src="john.jpg"></img>
          <h1 className="cal">UC Berkeley '19</h1>
          <h3 className="about-description">Hi! I'm currently a sophomore at UC Berkeley
          originally from Diamond Bar, California.</h3>
        </div>
          <Helmet
            title={config.siteTitle}
          />
        </div>
    );
  }
}
