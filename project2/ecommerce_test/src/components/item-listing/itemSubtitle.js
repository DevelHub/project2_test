import * as React from 'react';
import PropTypes from 'prop-types';
import './itemStyles.css';

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
            <div className="itemSubtitle">
                <p>{this.props.children}</p>
            </div>
        )
    }
}