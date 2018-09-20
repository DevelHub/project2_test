import * as React from 'react';
import './wishlistStyles.css';
import {ItemRow, ItemListing, ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/index';


export class Wishlist extends React.Component
{
    render()
    {
        const wishlistExample = [{
            name: "I Wish I Had This",
            company: ""
        }]
        return (
            <div className="wishlistContainer">
                <ItemRow>
                    <ItemListing>
                        <ItemTitle>Testing Wishlist</ItemTitle>
                        <ItemSubtitle>Test Company</ItemSubtitle>
                        <ItemImage src=""/>
                        <ItemDescription>Test description</ItemDescription>
                        <button>Remove</button>
                        <button>Add To Cart</button>
                    </ItemListing>
                </ItemRow>
            </div>
        )
    }
}