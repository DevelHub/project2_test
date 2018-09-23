import * as React from 'react';
import {ItemCard, ItemRow, ItemListing, ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/index';
import {AccountComponent} from './accountComponent';
import {PreviousPurchases} from './previousPurchases';

export class ProfilePage extends React.Component
{
    render()
    {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        const firstname = user[0].customer.firstname;
        return (
            <ItemCard>
                <div className="pageTitle">
                    <h2>Welcome {firstname}!</h2>
                </div>
                <div className="profileColumns">
                    <PreviousPurchases />
                    <AccountComponent />
                </div>
                
            </ItemCard>
        )
    }
}