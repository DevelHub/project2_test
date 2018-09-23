import * as React from 'react';
import './registerItemStyles.css';
import {ItemCard, ItemRow, ItemListing, ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/index';


export class RegisterItem extends React.Component
{
    render()
    {
        return(
            <ItemCard>
                <div className="registerHeader">
                    <h3>Register New Item</h3>
                </div>

                <div className="registerCols">
                    <div className="col">
                        <div className="sec">
                            <h4>Item Name</h4><hr/>
                            <input className="registerInput" type="text"/><br/>
                        </div>
                        <div className="sec">
                            <h4>Item Price</h4><hr/>
                            <input className="registerInput" type="text"/>
                        </div>
                        <button>Submit</button>
                    </div>

                    <div className="col">
                        <div className="sec">
                            <h4>Item Gender</h4><hr/>
                            <select>
                                <option>Men</option>
                                <option>Women</option>
                            </select>
                        </div>
                        <div className="sec">
                            <h4>Item Description</h4><hr/>
                            <textarea className="registerInput" />
                        </div>
                    </div>
                </div>
                

            </ItemCard>
        )
    }
}