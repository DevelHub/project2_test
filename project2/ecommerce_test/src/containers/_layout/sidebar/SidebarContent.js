import React, { Component } from 'react';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import store from '../../../app/store';
import { setCurrentProduct, setProductList } from '../../../redux/actions/productActions';


let userStore = JSON.parse(localStorage.getItem('user'));

// let userStore ;

class SidebarContent extends Component {
  constructor(props) {
<<<<<<< HEAD
    super(props); 
=======
    super(props);
    console.log("User:");
    console.log(localStorage.getItem("user"));
>>>>>>> 8338e7578aa1d7ac6265dd65172da4d118d28c04
  }

  hideSidebar = (e) => {
    this.props.onClick();
    this.setProductList(e.target.innerText);
  };

  setProductList = (type) => {
    fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/item-type/pants`, {
      headers: {
        "Content-Type":"application/json"
      },
      method: "GET"
    })
    .then(resp => {
      if(resp.status == 200)
      {
        return resp.json();
      }
      throw Error("Could not retrieve item group");
    })
    .then(items => {
      console.log(items);
      store.dispatch(setProductList(items.item));
      store.dispatch(setCurrentProduct(items));
      //localStorage.setItem("state", JSON.stringify(store.getState()));
    })
  }

  render() 
  {
    const categoryLinks = [];
    categoryLinks.push(<SidebarLink title='Hat' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink title='T-Shirts' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink title='Polo Shirts' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink title='SweatShirts' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink title='SweatPants' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink title='Dress' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink title='Jeans' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink title='Pants' route='/pages/clothes/' onClick={this.hideSidebar} />);
    categoryLinks.push(<SidebarLink title='Activewear' route='/pages/clothes/' onClick={this.hideSidebar} />);

    const companyLinks = [];
    companyLinks.push(<SidebarLink title='UNI-CLO' route='/pages/company/' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='OLD-NAVY' route='/pages/company/' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='H&M' route='/pages/company/hm' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='FOREVER21' route='/pages/company/' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='ZARA' route='/pages/company/' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='BANANA REPUBLIC' route='/pages/company/' onClick={this.hideSidebar} />);

    const menCategory = <SidebarCategory title="Men">{categoryLinks}</SidebarCategory>;
    const womenCategory = <SidebarCategory title="Women">{categoryLinks}</SidebarCategory>;
    const clothesCategories = [menCategory, womenCategory];

    const clothesCategory = <SidebarCategory title="Clothes" icon="store">{clothesCategories}</SidebarCategory>;
    const brandsCategory = <SidebarCategory title="Brands" icon="diamond">{companyLinks}</SidebarCategory>;

<<<<<<< HEAD
 
  render() {
=======
>>>>>>> 8338e7578aa1d7ac6265dd65172da4d118d28c04
    if(userStore&&userStore[0].role==='customer'){
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

    else if(userStore&&userStore[0].role==='company'){
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