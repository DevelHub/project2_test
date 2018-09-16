import * as React from 'react';
import PropTypes from 'prop-types';

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
            <div className="description">
                <p>{this.props.children}</p>
            </div>
        );
    }
}