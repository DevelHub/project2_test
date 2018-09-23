import * as React from 'react';

export class Purchase extends React.Component
{
    render()
    {
        const data = this.props.data;
        return (
            <div className="purchase">
                <div className="pcol">
                    <p>{data.name}</p>
                    <p>{data.company}</p>
                </div>

                <div className="pcol">
                    <p>Price: ${data.price}</p>
                    <p>Quantity: {data.quantity}</p>
                </div>

                <div className="pcol">
                    <p>Total</p>
                    <p>{data.price * data.quantity}</p>
                </div>
            </div>
        )
    }
}