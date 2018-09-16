import * as React from 'react';
import PropTypes from 'prop-types';
import {ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/';

export class ItemListing extends React.Component
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
            <div className="itemListing">
                {this.props.children}
            </div>
        )
        
    }
}