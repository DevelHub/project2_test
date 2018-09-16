import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import {Link} from 'react-router-dom';
import {userActions} from '../../../redux/actions/userActions'


class LoginPage extends React.Component{
   constructor(props){
     super(props);

     this.props.dispatch(userActions.logout());

     this.state={
       username:'',
       password:'',
       submitted:false,
       showPassword:false
     };
   
   this.showPassword = this.showPassword.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const{name,value} = e.target;
    this.setState({[name]:value});
  }

  handleSubmit(e){
    e.preventDefault();

    this.setState({submitted:true});

    // fetch(`http://localhost:3000/user`)
    const {username,password} = this.state;
    const{dispatch} = this.props;


    if(username&&password){
      dispatch(userActions.login(username,password));
    }
  }
  showPassword(e) {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  render() {
    const {loggingIn} = this.props;
    const {username,password,submitted,showPassword} = this.state;
    
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <div className='form_form-group'>
          <label className='form_form-group-label'>Username</label>
          <div className='form_form-group-field'>
            <div className='form_form-group-icon'>
              <AccountOutlineIcon/>
            </div>
            <Field
              name='username'
              component='input'
              type='text'
              placeholder='Name'
            />
          </div>
        </div>
        <div className='form_form-group'>
          <label className='form_form-group-label'>Password</label>
          <div className='form_form-group-field'>
            <div className='form_form-group-icon'>
              <KeyVariantIcon/>
            </div>
            <Field
              name='password'
              component='input'
              type={this.state.showPassword ? 'text' : 'password'}
              placeholder='Password'
            />
            <button className={`form_form-group-button${this.state.showPassword ? ' active' : ''}`}
                    onClick={(e) => this.showPassword(e)}><EyeIcon/></button>
          </div>
        </div>
       
        <Link className='btn btn-primary account_btn account_btn--small' to='/pages/home'>Sign In</Link>
        <Link className='btn btn-outline-primary account_btn account_btn--small' to='/log_in'>Create Account</Link>
      </form>
    )
  }
}

function mapStateToProps(state){
  const {loggingIn}= state.authentication;
  return{
    loggingIn
  };
  
}
const coneectedLoginPage = connect(mapStateToProps)(LoginPage);
export{coneectedLoginPage as LoginPage};