import React, {PureComponent} from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import TopbarMenuLink from './TopbarMenuLink';
import {Collapse} from 'reactstrap';

const Ava = process.env.PUBLIC_URL + '/img/ava.png';

export default class TopbarProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render() {
    return (
      <div className='topbar_profile'>
        <div className='topbar_avatar' onClick={this.toggle}>
          <img className='topbar_avatar-img' src={Ava} alt='avatar'/>
          <p className='topbar_avatar-name'>Admin</p>
          <DownIcon className='topbar_icon'/>
        </div>
        {this.state.collapse && <div className='topbar_back' onClick={this.toggle}/>}
        <Collapse isOpen={this.state.collapse} className='topbar_menu-wrap'>
          <div className='topbar_menu'>
            <TopbarMenuLink title='Page One' icon='user' path='/pages/one'/>
            <TopbarMenuLink title='Page Two' icon='calendar-full' path='/pages/two'/>
            <div className='topbar_menu-divider'/>
            <TopbarMenuLink title='Log Out' icon='exit' path='/log_in'/>
          </div>
        </Collapse>
      </div>
    )
  }
}
