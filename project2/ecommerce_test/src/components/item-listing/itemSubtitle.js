import * as React from 'react';
import PropTypes from 'prop-types';

export class ItemSubtitle extends React.Component
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
            <div className="subtitle">
                <p>{this.props.children}</p>
            </div>
        )
    }
}