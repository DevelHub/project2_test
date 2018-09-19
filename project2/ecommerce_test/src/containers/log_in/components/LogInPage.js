// import React from 'react';
// import {Field, reduxForm} from 'redux-form';
// import {connect} from 'react-redux';
// import EyeIcon from 'mdi-react/EyeIcon';
// import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
// import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
// import {Link} from 'react-router-dom';
// import {logInActions} from '../../../redux/actions/log_in'

// class LoginPage extends React.Component{
//    constructor(props){
//      super(props);

//     //  this.props.dispatch(logInActions.logout());

//      this.state={
//        username:'',
//        password:'',
//        submitted:false,
//        showPassword:false
//      };
   
//    this.showPassword = this.showPassword.bind(this);
//    this.handleChange = this.handleChange.bind(this);
//    this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e){
//     const{name,value} = e.target;
//     this.setState({[name]:value});
//   }

//   handleSubmit(e){
//     e.preventDefault();

//     this.setState({submitted:true});

   
//     const {username,password} = this.state;
//     const{dispatch} = this.props;


//     if(username&&password){
//       dispatch(logInActions.login(username,password));
//     }
//   }
//   showPassword(e) {
//     e.preventDefault();
//     this.setState({
//       showPassword: !this.state.showPassword
//     })
//   }

//   render() {
//     const {loggingIn} = this.props;
//     const {username,password,submitted,showPassword} = this.state;
    
//     return (
//       <form className='form' onSubmit={this.handleSubmit}>
//         <div className='form_form-group'>
//           <label className='form_form-group-label'>Username</label>
//           <div className='form_form-group-field'>
//             <div className='form_form-group-icon'>
//               <AccountOutlineIcon/>
//             </div>
//             <Field
//               name='username'
//               component='input'
//               type='text'
//               placeholder='Name'
//             />
//           </div>
//         </div>
//         <div className='form_form-group'>
//           <label className='form_form-group-label'>Password</label>
//           <div className='form_form-group-field'>
//             <div className='form_form-group-icon'>
//               <KeyVariantIcon/>
//             </div>
//             <Field
//               name='password'
//               component='input'
//               type={this.state.showPassword ? 'text' : 'password'}
//               placeholder='Password'
//             />
//             <button className={`form_form-group-button${this.state.showPassword ? ' active' : ''}`}
//                     onClick={(e) => this.showPassword(e)}><EyeIcon/></button>
//           </div>
//         </div>
       
//         <Link className='btn btn-primary account_btn account_btn--small' to='/pages/home'>Sign In</Link>
//         <Link className='btn btn-outline-primary account_btn account_btn--small' to='/log_in'>Create Account</Link>
//       </form>
//     )
//   }
// }

// function mapStateToProps(state){
//   const {loggingIn}= state.authentication;
//   return{
//     loggingIn
//   };
  
// }
// const coneectedLoginPage = connect(mapStateToProps)(LoginPage);
// export{coneectedLoginPage as LoginPage};

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logInActions } from '../../../redux/actions/log_in/loginAction';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(logInActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(logInActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const login = state.authentication;
    return {
        login
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 