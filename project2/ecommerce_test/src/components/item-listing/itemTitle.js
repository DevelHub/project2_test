import * as React from 'react';
import PropTypes from 'prop-types';

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
            <div className="title">
                <p>{this.props.children}</p>
            </div>
        )
    }
}