import React, {PureComponent} from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import TopbarMenuLink from './TopbarMenuLink';
import {Collapse} from 'reactstrap';

const Ava = process.env.PUBLIC_URL + '/img/favicon.png';

export default class TopbarProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  logout()
  {
    this.toggle();
    alert("logged out");
    localStorage.removeItem(`user`);
  }

  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    let role = "guest";
    let name = "Guest";
    let menu = [];

    if(user)
    {
      role = user[0].role.toLowerCase();
    }
   
    if(role === "customer")
    {
      name = user[0].customer.firstname;
      menu.push(<TopbarMenuLink title='Profile' icon='user' path='/pages/profile/'/>);
      menu.push(<div className='topbar_menu-divider'/>);
      menu.push(<TopbarMenuLink title='Log Out' icon='exit' path='/pages/home' onClick={this.logout}/>)
    }
    else if(role === "company")
    {
      name = user[0].username;
      menu.push(<TopbarMenuLink title='Log Out' icon='exit' path='/pages/home' onClick={this.logout}/>)
    }
    else
    {
      menu.push(<TopbarMenuLink title='Log In' icon='exit' path='/log_in'/>)
    }
      
    return (
      <div className='topbar_profile'>
      
        <div className='topbar_avatar' onClick={this.toggle}>
          <img className='topbar_avatar-img' src={Ava} />
          <p className='topbar_avatar-name'>{name}</p>
          <DownIcon className='topbar_icon'/>
        </div>

        {this.state.collapse && <div className='topbar_back' onClick={this.toggle}/>}
        <Collapse isOpen={this.state.collapse} className='topbar_menu-wrap'>
          <div className='topbar_menu'>
            {menu}
          </div>
        </Collapse>

      </div>
    )
  }
}
