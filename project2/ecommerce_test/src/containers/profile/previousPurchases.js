import * as React from 'react';
import './profilePageStyles.css';
import {Purchase} from './purchase';

export class PreviousPurchases extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            purchases: []
        }

        const userString = localStorage.getItem("user");
        console.log("userString:");
        console.log(userString);
        const user = JSON.parse(userString);
        console.log("user:");
        console.log(user);
        if(user && user[0].customer.id)
        {
            console.log("customer id:" + user[0].customer.id);
            fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/purchase/${user[0].customer.id}` , {
                headers:
                {
                    "Content-Type":"application/json"
                },
                method: "GET"
            })
            .then(resp => {
                if(resp.status === 200)
                {
                    return resp.json();
                }
                throw Error("Could not retrieve previous purchases");
            })
            .then(purchases => {
                let items = [];
                for(let i = 0; i < purchases.length; i++)
                {
                    let item = {
                        name: purchases[i].item.name,
                        company: purchases[i].item.company.companyName,
                        price: purchases[i].item.price,
                        quantity: purchases[i].quantity
                    };
                    items.push(item);
                }
                this.setState({
                    ...this.state,
                    purchases: items
                })
            })
        }
    }
    render()
    {
        const items = this.state.purchases;
        let purchases = [];
        for(let i = 0; i < items.length; i++)
        {
            purchases.push(<Purchase data={items[i]}/>)
        }
        return (
            <div className="previousPurchases">
                <h3>Previous Purchases</h3><hr/>
                {purchases}
            </div>
        )
    }
}