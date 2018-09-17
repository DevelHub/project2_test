import * as React from 'react';
import './itemStyles.css';

export class ItemRow extends React.Component
{
    render()
    {
        return(
            <div className="itemRow">
                {this.props.children}
            </div>
        )
    }
}