import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Badge} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class SidebarLink extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    new: PropTypes.bool,
    route: PropTypes.string
  };

  render() {
    return (
      <NavLink to={this.props.route ? this.props.route : '/'} onClick={this.props.onClick}
               activeClassName='sidebar_link-active'>
        <li className='sidebar_link'>
          {this.props.icon ? <span className={`sidebar_link-icon lnr lnr-${this.props.icon}`}/> : ''}
          <p className='sidebar_link-title'>
            {this.props.title}
            {this.props.new ? <Badge className='sidebar_link-badge'><span>New</span></Badge> : ''}
          </p>
        </li>
      </NavLink>
    )
  }
}

export default SidebarLink;