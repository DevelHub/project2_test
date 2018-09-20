import React, {PureComponent} from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import TopbarMenuLink from './TopbarMenuLink';
import {Collapse} from 'reactstrap';

// const Cart = process.env.PUBLIC_URL + '/img/cart.png';

export default class TopbarCart extends PureComponent {
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
        <button className='topbar_btn' icon='cart' onClick={this.toggle}>

        {/* <img className='topbar_avatar-img' src={Cart} /> */}
          <p className='topbar_avatar-name'>Cart</p>
          <DownIcon className='topbar_icon'/>
        </button>


         {this.state.collapse && <div className='topbar_back' onClick={this.toggle}/>} 
        <Collapse isOpen={this.state.collapse} className='topbar_menu-wrap'>
          <div className='topbar_menu'>
            <TopbarMenuLink title='Wish List'  path='/pages/wishlist'/>
            <TopbarMenuLink title='Cart'  path='/pages/cart'/>
           </div>
        </Collapse>
    </div>

    )
  }


}


