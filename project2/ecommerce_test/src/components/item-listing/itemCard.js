import * as React from 'react';
import './itemStyles.css';

export class ItemCard extends React.Component
{
    render()
    {
        return (
            <div className="itemCard">
                {this.props.children}
            </div>
        )
        
    }
}