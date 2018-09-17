import * as React from 'react';
import PropTypes from 'prop-types';
import './itemStyles.css';

export class ItemTitle extends React.Component
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
            <div className="itemTitle">
                <p><h4>{this.props.children}</h4></p>
            </div>
        )
    }
}