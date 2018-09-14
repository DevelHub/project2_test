import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class TopbarMenuLinks extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  };
  
  render() {
    return (
      <Link className='topbar_link' to={this.props.path}>
        <span className={`topbar_link-icon lnr lnr-${this.props.icon}`}/>
        <p className='topbar_link-title'>{this.props.title}</p>
      </Link>
    )
  }
}