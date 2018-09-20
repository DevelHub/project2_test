import React, {PureComponent} from 'react';
// import {Link} from 'react-router-dom';
import {RegisterPage} from './conponents/register-page';


export default class Registration extends PureComponent {
  
  render() {
    return (
      <div className='account'>
        <div className='account_wrapper'>
          <div className='account_card'>
            <div className='account_head'>
              <h3 className='account_title'>Welcome to <span className='account_logo'>JM<span
                className='account_logo-accent'>-Terrelly</span></span></h3>
              <h4 className='account_subhead subhead'>Buy Clothes With Your Unique Choices</h4>
            </div>

           
            <RegisterPage onSubmit/>


          </div>
        </div>
      </div>
    )
  }
}

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
