import * as React from 'react';
import './profilePageStyles.css';

export class AccountComponent extends React.Component
{
    render()
    {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        const username = user[0].username;
        const firstname = user[0].customer.firstname;
        const lastname = user[0].customer.lastname;
        const email = "emailme@email.com"; /// need email from user fetch
        return (
            <div className="accountComponent">
                <h3>Account Info</h3><hr/>
                <div className="infoCols">
                    <div className="pcol">
                        <p>First Name:</p>
                        <p>Last Name:</p>
                        <p>Username:</p>
                        <p>Email:</p>
                    </div>

                    <div className="pcol">
                        <p>{firstname}</p>
                        <p>{lastname}</p>
                        <p>{username}</p>
                        <p>{email}</p>
                    </div>
                </div>

                
                {/* <button className="btn btn-primary">Edit</button> */}
            </div>
        )
    }
    
}