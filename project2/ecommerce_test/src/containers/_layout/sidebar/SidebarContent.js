import React, { Component } from 'react';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import store from '../../../app/store';
import { setCurrentProduct, setProductList } from '../../../redux/actions/productActions';

let isGuest = false;

if(!localStorage.getItem('user')){
  isGuest = true;
}
else{
  isGuest = false;
 
}
let userStore = JSON.parse(localStorage.getItem('user'));


class SidebarContent extends Component {
  constructor(props) {
    super(props);
    // console.log("User:");
    // console.log(localStorage.getItem("user"));
  }

  hideSidebar = (e) => {
    this.props.onClick();
    this.setProductList(e.target.innerText);
  };

  // setProductList = (type) => {
  //   fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/item-type/pants`, {
  //     headers: {
  //       "Content-Type":"application/json"
  //     },
  //     method: "GET"
  //   })
  //   .then(resp => {
  //     if(resp.status == 200)
  //     {
  //       return resp.json();
  //     }
  //     throw Error("Could not retrieve item group");
  //   })
  //   .then(items => {
  //     console.log(items);
  //     store.dispatch(setProductList(items.item));
  //     store.dispatch(setCurrentProduct(items));
  //     localStorage.setItem("state", JSON.stringify(store.getState()));
  //   })
  // }

  render() 
  {
    const categoryLinks = [];
    categoryLinks.push(<SidebarLink key={1} title='Hat' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink key={2}title='T-Shirts' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink key={3}title='Polo Shirts' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink key={4}title='SweatShirts' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink key={5}title='SweatPants' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink key={6}title='Dress' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink key={7}title='Jeans' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink key={8}title='Pants' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink key={9}title='Activewear' route='/pages/clothes/' onClick={this.hideSidebar} />);

    const companyLinks = [];
    companyLinks.push(<SidebarLink key={10}title='UNI-QLO' route='/pages/uniqlo' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink key={11}title='OLD-NAVY' route='/pages/old_navy' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink key={12}title='H&M' route='/pages/hm' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink key={13}title='FOREVER21' route='/pages/forever21' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink key={14}title='ZARA' route='/pages/zara' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink key={15}title='BANANA REPUBLIC' route='/pages/banana_republic' onClick={this.hideSidebar} />);

    const menCategory = <SidebarCategory key={16} title="Men">{categoryLinks}</SidebarCategory>;
    const womenCategory = <SidebarCategory key={17} title="Women">{categoryLinks}</SidebarCategory>;
    const clothesCategories = [menCategory, womenCategory];

    const clothesCategory = <SidebarCategory key={18} title="Clothes" icon="store">{clothesCategories}</SidebarCategory>;
    const brandsCategory = <SidebarCategory key={19}title="Brands" icon="diamond">{companyLinks}</SidebarCategory>;

    if(!isGuest&&userStore[0]&&userStore[0].role==='Customer'){
      return (
        <div className='sidebar_content'>
  
          <ul className='sidebar_block'>
            <SidebarLink title='Home' icon='home' route='/pages/customer' onClick={this.hideSidebar} />
          </ul>

          <ul className='sidebar_block'>
            {clothesCategory}
            {brandsCategory}
          </ul>
  
          <ul className='sidebar_block'>     
            <SidebarCategory title='Account' icon='user'>
              <SidebarLink title='Profile' route='/pages/profile' onClick={this.hideSidebar} />
                {/* <SidebarLink title='Register Item' route='/' onClick={this.hideSidebar} /> */}
              </SidebarCategory>
            <SidebarLink title='Log In' icon='exit' route='/log_in' onClick={this.hideSidebar} />
          </ul>
        </div>
      )}

    else if(!isGuest&&userStore[0]&&userStore[0].role==='company'){
      return (
        <div className='sidebar_content'>
  
          <ul className='sidebar_block'>
            <SidebarLink title='Home' icon='home' route='/pages/company' onClick={this.hideSidebar} />
          </ul>

          <ul className='sidebar_block'>
            {/* {clothesCategory} */}
            {brandsCategory}
          </ul>
  
          {/* <ul className='sidebar_block'> */}          
            <SidebarCategory title='Account' icon='user'>
              <SidebarLink title='Profile' route='/pages/profile' onClick={this.hideSidebar} />
              <SidebarLink title='Register Item' route='/' onClick={this.hideSidebar} />
            </SidebarCategory>
            <SidebarLink title='Log In' icon='exit' route='/log_in' onClick={this.hideSidebar} />
          {/* </ul> */}
        </div>
      )
    }
    else{
      return (
        <div className='sidebar_content'>
          <ul className='sidebar_block'>
            <SidebarLink title='Home' icon='home' route='/pages/customer' onClick={this.hideSidebar} />
          </ul>

          <ul className='sidebar_block'>
            {clothesCategory}
            {brandsCategory}
          </ul>
  
          <ul className='sidebar_block'>
            {/* <SidebarCategory title='Account' icon='user'>
              <SidebarLink title='Profile' route='/pages/profile' onClick={this.hideSidebar} />
              <SidebarLink title='Register Item' route='/' onClick={this.hideSidebar} />
            </SidebarCategory> */}
            <SidebarLink title='Log In' icon='exit' route='/log_in' onClick={this.hideSidebar} />
          </ul>
        </div>
      )
    } 
  }
}

export default SidebarContent;