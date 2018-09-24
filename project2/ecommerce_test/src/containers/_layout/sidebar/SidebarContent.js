import React, { Component } from 'react';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import store from '../../../app/store';
import {connect} from 'react-redux';
import { setCurrentProduct, setProductList, setAllProducts } from '../../../redux/actions/productActions';

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    let user = JSON.parse(localStorage.getItem("user"))
    console.log("user");
    console.log(user);
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
    let user = JSON.parse(localStorage.getItem("user"));
    let role = "";
    if(user)
    {
      role = user[0].role;
    }

    let all = store.getState().product.allProducts;
    let productList = [];

    for(let i = 0; i < all[type].length; i++)
    {
      if(role === "company")
      {
        if(all[type][i].companyId === user[0].company.id && all[type][i].gender === gender)
        {
          productList.push(all[type][i]);
        }
      }
      else if(all[type][i].gender === gender)
      {
        productList.push(all[type][i]);
      }
    }

    store.dispatch(setProductList(productList));
  }

  logout()
  {
    this.props.onClick();
    localStorage.removeItem("user");
  }

  render() 
  {
    const user = JSON.parse(localStorage.getItem("user"));
    let role = "guest";
    let isGuest = false;

    // if(!localStorage.getItem('user')){
    //   isGuest = true;
    // }
    // else{
    //   isGuest = false;
    //   let userStorage = JSON.parse(localStorage.getItem('user'));
    //   role = user[0].role.toLowerCase();
    // }

    if(user)
    {
      role = user[0].role.toLowerCase();
    }

    let userCompany = "";
    if(role === "company")
    {
      userCompany = user[0].company.id;
    }

    const mensCategoryLinks = [];
    const womensCategoryLinks = [];

    let types = this.props.typesList;
    let all = this.props.allProducts;
    
    for(let t = 0; t < types.length; t++)
    {
      if(all[types[t]].length != 0)
      {
        
        let men = false;
        let women = false;
        for(let i = 0; i < all[types[t]].length; i++)
        {
          if(role === "company")
          {
            if(all[types[t]][i].companyId === userCompany)
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
          }
          else
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

    const companyLinks = [];
    companyLinks.push(<SidebarLink title='UNI-QLO' route='/pages/uniqlo' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='OLD-NAVY' route='/pages/old_navy' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='H&M' route='/pages/hm' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='FOREVER21' route='/pages/forever21' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='ZARA' route='/pages/zara' onClick={this.hideSidebar} />);
    companyLinks.push(<SidebarLink title='BANANA REPUBLIC' route='/pages/banana_republic' onClick={this.hideSidebar} />);

    const menCategory = <SidebarCategory title="Men">{mensCategoryLinks}</SidebarCategory>;
    const womenCategory = <SidebarCategory title="Women">{womensCategoryLinks}</SidebarCategory>;
    const clothesCategories = [menCategory, womenCategory];

    const clothesCategory = <SidebarCategory key={18} title="Clothes" icon="store">{clothesCategories}</SidebarCategory>;
    const brandsCategory = <SidebarCategory key={19}title="Brands" icon="diamond">{companyLinks}</SidebarCategory>;

    if(role === "customer") // customer view. needs logout, categories and brands
    {
      return (
        <div className='sidebar_content'>
  
          <ul className='sidebar_block'>
            <SidebarLink title='Home' icon='home' route='/pages/customer' onClick={this.hideSidebar} />
          </ul>

          <ul className='sidebar_block'>
            {clothesCategory}
            {brandsCategory}
            <SidebarLink title="Recommended Item" icon ='store' route = "/pages/recommend" onClick={this.hideSideba}/>
          </ul>
  
          <ul className='sidebar_block'>     
            <SidebarCategory title='Account' icon='user'>
              <SidebarLink title='Profile' route='/pages/profile' onClick={this.hideSidebar} />
            </SidebarCategory>
            <SidebarLink title='Log Out' icon='exit' route='/pages/home' onClick={this.logout} />
          </ul>
        </div>
      )}

    else if(role === "company") // company view. needs logout, and categories. no brands
    {
      return (
        <div className='sidebar_content'>
  
          <ul className='sidebar_block'>
            <SidebarLink title='Home' icon='home' route='/pages/company' onClick={this.hideSidebar} />
          </ul>

          <ul className='sidebar_block'>
            {clothesCategory}
            <SidebarLink title='Register Item' route='/pages/register-item' onClick={this.hideSidebar} />
          </ul>
  
          <ul className='sidebar_block'>          
            <SidebarLink title='Log Out' icon='exit' route='/pages/home' onClick={this.logout} />
          </ul>
        </div>
      )
    }
    else //guest view. needs login categories and brands
    {
      return (
        <div className='sidebar_content'>
          <ul className='sidebar_block'>
            <SidebarLink title='Home' icon='home' route='/pages/home' onClick={this.hideSidebar} />
          </ul>

          <ul className='sidebar_block'>
            {clothesCategory}
            {brandsCategory}
          </ul>
  
          <ul className='sidebar_block'>
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