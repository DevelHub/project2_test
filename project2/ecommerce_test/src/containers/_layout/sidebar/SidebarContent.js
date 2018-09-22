import React, { Component } from 'react';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import store from '../../../app/store';
import {connect} from 'react-redux';
import { setCurrentProduct, setProductList, setAllProducts } from '../../../redux/actions/productActions';

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
  };

  setMenList = (e) => {
    this.props.onClick();
    store.dispatch(setProductList([]));
    this.setProductList(e.target.innerText, "men");
  };

  setWomenList = (e) => {
    this.props.onClick();
    store.dispatch(setProductList([]));
    this.setProductList(e.target.innerText, "women");
  };

  setProductList(type, gender)
  {
    let all = store.getState().product.allProducts;
    let productList = [];

    for(let i = 0; i < all[type].length; i++)
    {
      if(all[type][i].gender === gender)
      {
        productList.push(all[type][i]);
      }
    }

    store.dispatch(setProductList(productList));
  }

  render() 
  {
    const mensCategoryLinks = [];
    const womensCategoryLinks = [];

    let types = this.props.typesList;
    let all = this.props.allProducts;
    console.log("all:");
    console.log(all);
    
    for(let t = 0; t < types.length; t++)
    {
      if(all[types[t]].length != 0)
      {
        let men = false;
        let women = false;
        for(let i = 0; i < all[types[t]].length; i++)
        {
          if(all[types[t]][i].gender === "men")
          {
            men = true;
          }
          else if(all[types[t]][i].gender === "women")
          {
            women = true;
          }
        }
        if(men)
        {
          mensCategoryLinks.push(<SidebarLink title={types[t]} gender="men" route="/pages/clothes/" onClick={this.setMenList}/>);
        }
        if(women)
        {
          womensCategoryLinks.push(<SidebarLink title={types[t]} gender="women" route="/pages/clothes/" onClick={this.setWomenList}/>);
        }
      }
    }

    // for(let i = 0; i < types.length; i++)
    // {
    //   mensCategoryLinks.push(<SidebarLink title={types[i]} gender="men" route="/pages/clothes/" onClick={this.setMenList}/>);
    //   womensCategoryLinks.push(<SidebarLink title={types[i]} gender="women" route="/pages/clothes/" onClick={this.setWomenList}/>);
    // }

    const companyLinks = [];
    companyLinks.push(<SidebarLink title='UNI-CLO' route='/pages/company/' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='OLD-NAVY' route='/pages/company/' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='H&M' route='/pages/company/hm' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='FOREVER21' route='/pages/company/' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='ZARA' route='/pages/company/' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='BANANA REPUBLIC' route='/pages/company/' onClick={this.hideSidebar} />);

    const menCategory = <SidebarCategory title="Men">{mensCategoryLinks}</SidebarCategory>;
    const womenCategory = <SidebarCategory title="Women">{womensCategoryLinks}</SidebarCategory>;
    const clothesCategories = [menCategory, womenCategory];

    const clothesCategory = <SidebarCategory title="Clothes" icon="store">{clothesCategories}</SidebarCategory>;
    const brandsCategory = <SidebarCategory title="Brands" icon="diamond">{companyLinks}</SidebarCategory>;

    if(!isGuest&&userStore[0]&&userStore[0].role==='customer'){
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
            {clothesCategory}
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

const mapStateToProps = (state) => {
  return {
    typesList: state.product.typesList,
    allProducts: state.product.allProducts
  };
}

export default connect(mapStateToProps, null) (SidebarContent);