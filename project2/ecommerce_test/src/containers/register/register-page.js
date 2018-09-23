import React from 'react';
// import {Register} from './components/Register';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {logInActions} from '../../redux/actions/log_in/loginAction';
import { withRouter } from 'react-router';
// import {Redirect} from 'react-router-dom';


class RegisterPage extends React.Component {

constructor(props){
    super(props);
    this.state={
        
        user: {
            username:'',
            password:'',
        },
        customer:{
            firstname:'',
            lastname:'',
            age:0,
            gender:'',
            address:[
                // billing:{
                // type: '',
                // city:'',
                // state:'',
                // zipcode:0,
                // country:'',
                // },
                // shipping:{
                //     shippingType:{type:"shipping"}
                // }
                {type:"billing"},
                {city:"fl"}
                
                
            ]
        },
        submitted: false,
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

} // end of constructor

handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    const {customer} =this.state;
    const {address} =this.state;
    
    switch(name) {
        case "username": case "password":
        this.setState({
            ...this.state,
            user: {
                ...user,
                [name]: value
            }
        }); break;
        case "firstname": case "lastname": case "age": case "gender": case "userid":
        this.setState({
            ...this.state,
            customer: {
                ...customer,
                [name]: value
            }
        }); break;
        // case "type": case"city": case "state": case "zipcode": case"country":
        // this.setState({
        //     ...this.state,
        //         address:[{
        //             ...address,
        //             [name]: value
        //         }]
        //     });break;
    }
}

handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    //const { user } = this.state;
    const user = this.state.user;
    user.customer = this.state.customer;
    // user.customer.address=this.state.address;
    // user.address = this.state.customer.address;
    const { dispatch } = this.props;

    if (user.username && user.password) {
        dispatch(logInActions.register(user), this.props.history);
    }
    // return <Redirect to ='/pages/register/customer'/>
}



  render() {
    const { registering } = this.props;
    const { submitted } = this.state;
    const {user} = this.state;
    const {customer} = this.state;
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
                    <h4 >Credentials</h4>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" name="firstname" value={customer.firstname} onChange={this.handleChange} />
                        {submitted && !customer.firstname &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" name="lastname" value={customer.lastname} onChange={this.handleChange} />
                        {submitted && !customer.lastname &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div >
                        <label htmlFor="age">Age</label>
                        <input type="text" className="form-control" name="age" value={customer.age} onChange={this.handleChange} />
                        {submitted && !customer.age && 
                            <div className="help-block">Age is requiredr</div>
                        }
                    </div>
                    <div>
                        <label htmlFor="age">Gender(male or female)</label>
                        <input type="text" className="form-control" name="gender" value={customer.gender} onChange={this.handleChange} />
                        {submitted && !customer.age && 
                            <div className="help-block">Gender is requiredr</div>
                        }
                    </div>
                    <br></br>

                    {/* <h4>Address</h4>
                    <div>
                        <label htmlFor="type">Type(home or shipping)</label>
                        <input type="text" className="form-control" name="type" value={customer.address.billing.type} onChange={this.handleChange} />
                        {submitted && !customer.address.type && 
                            <div className="help-block">type is requiredr</div>
                        }
                    </div>

                     <div>
                        <label htmlFor="type">City</label>
                        <input type="text" className="form-control" name="city" value={customer.address.billing.city} onChange={this.handleChange} />
                        {submitted && !customer.address.city && 
                            <div className="help-block">city is requiredr</div>
                        }
                    </div>

                     <div>
                        <label htmlFor="type">State</label>
                        <input type="text" className="form-control" name="state" value={customer.address.billing.state} onChange={this.handleChange} />
                        {submitted && !customer.address.state && 
                            <div className="help-block">state is requiredr</div>
                        }
                    </div>

                     <div>
                        <label htmlFor="type">Country</label>
                        <input type="text" className="form-control" name="state" value={customer.address.billing.country} onChange={this.handleChange} />
                        {submitted && !customer.address.state && 
                            <div className="help-block">country is requiredr</div>
                        }
                    </div>

                    <div>
                        <label htmlFor="type">Zipcode</label>
                        <input type="text" className="form-control" name="zipcode" value={customer.address.billing.zipcode} onChange={this.handleChange} />
                        {submitted && !customer.address.zipcode && 
                            <div className="help-block">zipcode is requiredr</div>
                        }
                    </div> */}
                    <br></br>
                    <h4>Username & ID</h4>
                    <div>
                        <label htmlFor="username">username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                        {submitted && !user.username &&
                            <div className="help-block">username is required</div>
                        }
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <br></br>
                    

                    <div className="form-group">
                        <button className="btn btn-primary" >Register</button>
                        {registering}
                         {/* <Link to="/pages/register/customer" onSubmit={this.handleSubmit} className="btn btn-link">Next</Link>  */}
                        
                        
                        <Link to="/log_in" className="btn btn-link">Cancel</Link>
                    </div>
                </form>

          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
    const  {registering} = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = (connect(mapStateToProps)(RegisterPage));
export { connectedRegisterPage as RegisterPage };

