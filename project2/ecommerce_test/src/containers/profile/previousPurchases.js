import * as React from 'react';
import './profilePageStyles.css';

export class PreviousPurchases extends React.Component
{
    
    render()
    {
        const user = localStorage.getItem("user");
        if(user && user[0].userid)
        {
            fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/purchase/${user[0].userid}` , {

            })
        }
        return (
            <div className="previousPurchases">
                <h3>PreviousPurchases</h3><hr/>
            </div>
        )
    }
}