import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import TopbarCart from './TopbarCart';

export default class Topbar extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func,
    changeSidebarVisibility: PropTypes.func,
  };

  render() {
    let {changeMobileSidebarVisibility, changeSidebarVisibility} = this.props;
    const user = JSON.parse(localStorage.getItem("user"));
    let role = "guest";
    let topbar = [];

    if(user)
    {
      role = user[0].role.toLowerCase();
    }

    if(role === "customer")
    {
      topbar.push(<TopbarCart/>);
    }
    topbar.push(<TopbarProfile/>);

    return (
      <div className='topbar'>
        <div className='topbar_wrapper'>
          <TopbarSidebarButton
            changeMobileSidebarVisibility={changeMobileSidebarVisibility}
            changeSidebarVisibility={changeSidebarVisibility}
          />
          <Link className='topbar_logo' to='/'/>
          <div className='topbar_right'>
            {topbar}
          </div>
        </div>
      </div>
    )
  }
}