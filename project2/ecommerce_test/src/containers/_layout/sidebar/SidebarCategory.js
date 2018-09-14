import React, {Component} from 'react';
import {Collapse} from 'reactstrap';
import PropTypes from 'prop-types';

export default class SidebarCategory extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
  };
  
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false
    };
  }
  
  toggle() {
    this.setState({collapse: !this.state.collapse});
  }
  
  render() {
    return (
      <div className={`sidebar_category-wrap${this.state.collapse ? ' sidebar_category-wrap--open' : ''}`}>
        <li className='sidebar_link sidebar_category' onClick={this.toggle}>
          {this.props.icon ? <span className={`sidebar_link-icon lnr lnr-${this.props.icon}`}/> : ''}
          <p className='sidebar_link-title'>{this.props.title}</p>
          <span className='sidebar_category-icon lnr lnr-chevron-right'/>
        </li>
        <Collapse isOpen={this.state.collapse} className='sidebar_submenu-wrap'>
          <ul className='sidebar_submenu'>
            <div>
              {this.props.children}
            </div>
          </ul>
        </Collapse>
      </div>
    )
  }
}