import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class About extends Component {
  render () {
    return (
      <div className="page page--contacts">
        <Helmet
          title={config.siteTitle}
        />
        <h1 className="contacts-caption">
          Let's Connect!
        </h1>
        <ul className="logos-container">
          <a href="https://www.facebook.com/john.ang.315"><li><img src="img/fb.png"></img></li></a>
          <a href="mailto:johnang@berkeley,edu"><li><img src="img/gmail.png"></img></li></a>
          <a href="https://www.linkedin.com/in/john-ang-379315109"><li><img src="img/linkedin.png"></img></li></a>
          <a href="https://github.com/Yaboyjohn"><li className="github"><img className="github-icon" src="img/gtihub.png"></img></li></a>
        </ul>
      </div>
    );
  }
}
