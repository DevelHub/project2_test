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
        let src = this.props.src;
        if(src == undefined)
        {
            src = "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180";
        }
        return (
            <div className="itemImage">
                <img className="image" src={src}/>
            </div>
        )
    }
}