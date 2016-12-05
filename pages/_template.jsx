import React, { Component, PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import 'css/_index.scss';


export default class Template extends Component {
  render () {
    return (
      <div>
        <Headroom>
          <div className="navbar">
            <div className="navbar__link--wrapper">
              <Link
                to={prefixLink('/')} className="navbar__link"
              >
                Home
              </Link>
            </div>
            <div className="navbar__link--wrapper">
              <Link
                to={prefixLink('/interests/')} className="navbar__link"
              >
                Interests
              </Link>
            </div>
            <div className="navbar__link--wrapper">
              <Link
                to={prefixLink('/projects/')} className="navbar__link"
              >
                Projects
              </Link>
            </div>
            <div className="navbar__link--wrapper">
              <Link
                to={prefixLink('/contact/')} className="navbar__link"
              >
                Contact
              </Link>
            </div>
          </div>
        </Headroom>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.any
};
