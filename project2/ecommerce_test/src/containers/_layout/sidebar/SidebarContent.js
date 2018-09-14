import React, {Component} from 'react';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import Sidebar from './Sidebar';

class SidebarContent extends Component {

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className='sidebar_content'>
      
        <ul className='sidebar_block'>
          <SidebarCategory title='Clothes' icon='diamond'>
              <SidebarCategory title="Categories">
                <SidebarLink title='Hat' route='/pages/clothes/' oneClick={this.hideSidebar}/>
                <SidebarLink title='T-Shirts' route='/pages/clothes/' onClick={this.hideSidebar}/>
                <SidebarLink title='Polo Shirts' route='/pages/clothes/' onClick={this.hideSidebar}/>
                <SidebarLink title='SweatShirts' route='/pages/clothes/' onClick={this.hideSidebar}/>
                <SidebarLink title='SweatPants' route='/pages/clothes/' onClick={this.hideSidebar}/>
                <SidebarLink title='Dress' route='/pages/clothes/' onClick={this.hideSidebar}/>
                <SidebarLink title='Jeans' route='/pages/clothes/' onClick={this.hideSidebar}/>
                <SidebarLink title='Pants' route='/pages/clothes/' onClick={this.hideSidebar}/>
                <SidebarLink title='Activewear' route='/pages/clothes/' onClick={this.hideSidebar}/>
              </SidebarCategory> 
          </SidebarCategory>
        </ul>

        <ul className='sidebar_block'>
          <SidebarCategory title="Brands" icon="diamond">
                <SidebarLink title='UNI-CLO' route='/pages/company/' onClick={this.hideSidebar}/>
                <SidebarLink title='OLD-NAVY' route='/pages/company/' onClick={this.hideSidebar}/>
                <SidebarLink title='H&M' route='/pages/company/hm' onClick={this.hideSidebar}/>
                <SidebarLink title='FOREVER21' route='/pages/company/' onClick={this.hideSidebar}/>
                <SidebarLink title='ZARA' route='/pages/company/' onClick={this.hideSidebar}/>
                <SidebarLink title='BANANA REPUBLIC' route='/pages/company/' onClick={this.hideSidebar}/>
            </SidebarCategory>
        </ul>

        {/* <ul className='sidebar_block'>
          <SidebarCategory title='Cart' icon='diamond'>
              <SidebarLink title='Wish Lists' route='/pages/cart/' onClick={this.hideSidebar}/>
              <SidebarLink title='Current Cart' route='/pages/cart/' onClick={this.hideSidebar}/>
          </SidebarCategory>
        </ul> */}


          <ul className='sidebar_block'>
          <SidebarLink title='Log In' icon='exit' route='/log_in' onClick={this.hideSidebar}/>
          {/* <SidebarCategory title='Layout' icon='layers'>
            <li className='sidebar_link' onClick={this.props.changeToLight}>
              <p className='sidebar_link-title'>Light Theme</p>
            </li>
            <li className='sidebar_link' onClick={this.props.changeToDark}>
              <p className='sidebar_link-title'>Dark Theme</p>
            </li>
          </SidebarCategory> */}
        </ul>

        
      </div>
    )
  }
}

export default SidebarContent;