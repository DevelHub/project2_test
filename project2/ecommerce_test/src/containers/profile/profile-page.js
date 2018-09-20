import * as React from 'react';
import {ItemCard, ItemRow, ItemListing, ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/index';
import {AccountComponent} from './accountComponent';
import {PreviousPurchases} from './previousPurchases';

export class ProfilePage extends React.Component
{
    render()
    {
        return (
            <ItemCard>
                <div className="pageTitle">
                    <h2>Welcome (username)!</h2>
                </div>
                <div className="profileColumns">
                    <PreviousPurchases />
                    <AccountComponent />
                </div>
                
            </ItemCard>
        )
    }
}