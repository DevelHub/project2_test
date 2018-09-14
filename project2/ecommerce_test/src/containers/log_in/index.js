import React, {PureComponent} from 'react';
import LogInForm from './components/LogInForm';
import {Link} from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';

export default class LogIn extends PureComponent {
  
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


            {/* login form */}
            <LogInForm onSubmit/>
            <div className='account_or'>
              <p>Or Easily Using</p>
            </div>
            <div className='account_social'>
              <Link className='account_social-btn account_social-btn--facebook'
                    to='/pages/one'><FacebookIcon/></Link>
              <Link className='account_social-btn account_social-btn--google'
                    to='/pages/one'><GooglePlusIcon/></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
