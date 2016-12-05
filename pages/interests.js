import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class About extends Component {
  render () {
    return (
      <div className="page page--interests">
        <div className="music-overlay"></div>
        <h1 className="music">Music</h1>
        <Helmet
          title={config.siteTitle}
        />
      </div>
    );
  }
}
