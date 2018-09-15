import React, { Component } from 'react';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';


class SidebarContent extends Component {

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className='sidebar_content'>

        <ul className='sidebar_block'>
          <SidebarLink title='Home' icon='home' route='/pages/home' onClick={this.hideSidebar} />
        </ul>
        <ul className='sidebar_block'>
          <SidebarCategory title='Clothes' icon='store'>
            <SidebarCategory title="Categories">
              <SidebarLink title='Hat' route='/pages/clothes/' />
              <SidebarLink title='T-Shirts' route='/pages/clothes/' onClick={this.hideSidebar} />
              <SidebarLink title='Polo Shirts' route='/pages/clothes/' onClick={this.hideSidebar} />
              <SidebarLink title='SweatShirts' route='/pages/clothes/' onClick={this.hideSidebar} />
              <SidebarLink title='SweatPants' route='/pages/clothes/' onClick={this.hideSidebar} />
              <SidebarLink title='Dress' route='/pages/clothes/' onClick={this.hideSidebar} />
              <SidebarLink title='Jeans' route='/pages/clothes/' onClick={this.hideSidebar} />
              <SidebarLink title='Pants' route='/pages/clothes/' onClick={this.hideSidebar} />
              <SidebarLink title='Activewear' route='/pages/clothes/' onClick={this.hideSidebar} />
            </SidebarCategory>
          </SidebarCategory>

          <SidebarCategory title="Brands" icon="diamond">
            <SidebarLink title='UNI-CLO' route='/pages/company/' onClick={this.hideSidebar} />
            <SidebarLink title='OLD-NAVY' route='/pages/company/' onClick={this.hideSidebar} />
            <SidebarLink title='H&M' route='/pages/company/hm' onClick={this.hideSidebar} />
            <SidebarLink title='FOREVER21' route='/pages/company/' onClick={this.hideSidebar} />
            <SidebarLink title='ZARA' route='/pages/company/' onClick={this.hideSidebar} />
            <SidebarLink title='BANANA REPUBLIC' route='/pages/company/' onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>

        <ul className='sidebar_block'>
          <SidebarCategory title='Account' icon='user'>
            <SidebarLink title='Profile' route='pages/profile' onClick={this.hideSidebar} />
            <SidebarLink title='Register Item' route='/' onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarLink title='Log In' icon='exit' route='/log_in' onClick={this.hideSidebar} />

        </ul>


      </div>
    )
  }
}

export default SidebarContent;