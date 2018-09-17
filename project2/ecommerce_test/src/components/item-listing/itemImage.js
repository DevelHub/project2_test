import * as React from 'react';
import PropTypes from 'prop-types';
import './itemStyles.css';

export class ItemImage extends React.Component
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
            <div className="itemImage">
                <img className="image" src={this.props.src}/>
            </div>
        )
    }
}