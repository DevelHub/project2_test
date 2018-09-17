import * as React from 'react';
import PropTypes from 'prop-types';
import './itemStyles.css';

export class ItemDescription extends React.Component
{
    static propTypes = {
        
    }

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="itemDescription">
                <p>{this.props.children}</p>
            </div>
        );
    }
}