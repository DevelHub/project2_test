import * as React from 'react';
import PropTypes from 'prop-types';
import {ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/';
import './itemStyles.css';

export class ItemListing extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="itemListing" onClick={() => this.props.onClicked(this.props.item)}>
                <ItemTitle>{this.props.item.title}</ItemTitle>
                <ItemSubtitle>{this.props.item.title}</ItemSubtitle>
                <ItemImage src={this.props.item.image}/>
                <ItemDescription>{this.props.item.description}</ItemDescription>
            </div>
        )
        
    }
}