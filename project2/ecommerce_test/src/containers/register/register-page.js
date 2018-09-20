import React from 'react';
// import {Register} from './components/Register';
import {Link} from 'react-router-dom';
import {logInActions} from '../../redux/actions/log_in/loginAction';


export class RegisterPage extends React.Component {

constructor(props){
    super(props);
    this.state={
        user:{
            firstName:'',
            lastName:'',
            username:'',
            password:'',
            age: Number
            
        },
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

} // end of constructor

handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
}

handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.firstName && user.lastName && user.username && user.password) {
        dispatch(logInActions.register(user),this.props.history);
    }
}


  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className='account'>
        <div className='account_wrapper'>
          <div className='account_card'>
            <div className='account_head'>
              <h3 className='account_title'>Welcome to <span className='account_logo'>JM<span
                className='account_logo-accent'>-Terrelly</span></span></h3>
              <h4 className='account_subhead subhead'>Register Now to have great shopping experience</h4>
            </div>

            <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.age ? ' has-error' : '')}>
                        <label htmlFor="age">Age</label>
                        <input type="age" className="form-control" name="age" value={user.age} onChange={this.handleChange} />
                        {submitted && !user.age && 
                            <div className="help-block">Age is required & must be number</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    

                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering}
                        <Link to="/log_in" className="btn btn-link">Cancel</Link>
                    </div>
                </form>

          </div>
        </div>
      </div>
    )
  }
}

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
