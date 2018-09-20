import * as React from 'react';
import PropTypes from 'prop-types';
import {ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/';
import './itemStyles.css';
import store from '../../app/store';
import {setCurrentProduct} from '../../redux/actions/productActions';

export class ItemListing extends React.Component
{
    constructor(props)
    {
        super(props);
        this.listingClicked = this.listingClicked.bind(this);
    }

    render()
    {
        return (
            <div className="itemListing" onClick={this.listingClicked}>
                {this.props.children}
                {/* <ItemTitle>{this.props.item.name}</ItemTitle>
                <ItemSubtitle>{this.props.item.subtitle}</ItemSubtitle>
                <ItemImage src={this.props.item.image}/>
                <ItemDescription>{this.props.item.description}</ItemDescription> */}
            </div>
        )
        
    }

    listingClicked()
    {
        store.dispatch(setCurrentProduct(this.props.item));
        this.props.history.push("/pages/clothes/product");
    }
}