import * as React from 'react';
import './profilePageStyles.css';

export class AccountComponent extends React.Component
{
    render()
    {
        let data = {
            firstname: "",
            lastname: "",
            username: "",
            email: ""
        }
    
        if(this.props.data)
        {
            if(this.props.data.firstname)
                data.firstname = this.props.data.firstname;
            if(this.props.data.lastname)
                data.lastname = this.props.data.lastname;
            if(this.props.data.username)
                data.username = this.props.data.username;
            if(this.props.data.email)
                data.email = this.props.data.email;
        }
        return (
            <div className="accountComponent">
                <h3>Account Info</h3><hr/>
                <p>First Name:{data.firstname}</p>
                <p>Last Name:{data.lastname}</p>
                <p>Username:{data.username}</p>
                <p>Email:{data.email}</p>
                {/* <button className="btn btn-primary">Edit</button> */}
            </div>
        )
    }
    
}