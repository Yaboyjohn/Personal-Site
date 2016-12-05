import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class About extends Component {
  render () {
    return (
      <div className="page page--projects">
        <div className="project-description-container">
          <h2 className="twitbit-title">TwitBit</h2>
          <p className="twitbit-description">TwitBit is a web application written in Ruby on
          Rails that analyzes users tweets and gives them
          a score based on the number of diction errors in their tweets.
          TwitBit also displays other tweet habits
          such as tweeting time preference and hot spots in an easy to read and visually appealing manner</p>
          <a className="twitbit-link" href="https://github.com/Yaboyjohn/TwitBit">Check it out here>>></a>
        </div>
        <div className="pics-container">
          <img className="twitbit-pic home" src="img/home.png"></img>
          <img className="twitbit-pic score" src="img/score.png"></img>
          <img className="twitbit-pic maps" src="maps.png"></img>
          <img className="twitbit-pic history" src="history.png"></img>
        </div>
        <div className="ubeareats-page">

        </div>
        <Helmet
          title={config.siteTitle}
        />
      </div>
    );
  }
}
