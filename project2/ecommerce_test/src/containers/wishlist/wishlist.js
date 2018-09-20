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
                <div className="wishlistItem">
                    <div className="wishlistImage">
                    </div>

                    <div className="wishlistTitle"></div>
                </div>
            </div>
        )
    }
}