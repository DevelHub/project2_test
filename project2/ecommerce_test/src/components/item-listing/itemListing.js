import * as React from 'react';
import PropTypes from 'prop-types';
import {ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/';
import './itemStyles.css';
import store from '../../app/store';

export class ItemListing extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="itemListing" onClick={() => this.props.clicked(this.props.currentProduct)}>
                {this.props.children}
            </div>
        )
        
    }
}