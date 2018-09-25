import * as React from 'react';
import './registerItemStyles.css';
import {ItemCard, ItemRow, ItemListing, ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/index';
import * as Data from '../../app/item-data';
import store from '../../app/store';


export class RegisterItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.nameChanged = this.nameChanged.bind(this);
        this.priceChanged = this.priceChanged.bind(this);
        this.genderChanged = this.genderChanged.bind(this);
        this.descriptionChanged = this.descriptionChanged.bind(this);
        this.statusChanged = this.statusChanged.bind(this);
        this.insertItem = this.insertItem.bind(this);
        this.typeChanged = this.typeChanged.bind(this);
        const types = store.getState().product.typesList;
        this.state = {
            name: "",
            price: "",
            gender: "men",
            status: "displayed",
            description: "",
            type: 1
        } 
    }

    render()
    {
        const types = store.getState().product.typesList;
        const options = [];
        for(let i = 0; i < types.length; i++)
        {
            options.push(<option value={i+1}>{types[i]}</option>);
        }
        return(
            <ItemCard>
                <div className="registerHeader">
                    <h3>Register New Item</h3>
                </div>

                <div className="registerCols">
                    <div className="sec">
                        <h4>Item Name</h4><hr/>
                        <input onChange={this.nameChanged} className="registerInput" type="text"/><br/>
                    </div>
                    <div className="sec">
                        <h4>Item Gender</h4><hr/>
                        <select onChange={this.genderChanged}>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                    </div>
                    <div className="sec">
                        <h4>Item Price</h4><hr/>
                        <input onChange={this.priceChanged} className="registerInput" type="text"/>
                    </div>
                    <div className="sec">
                        <h4>Item Status</h4><hr/>
                        <select onChange={this.statusChanged}>
                            <option value="displayed">Displayed</option>
                            <option value="hidden">Hidden</option>
                        </select>
                    </div>
                    <div className="sec">
                        <h4>Item Description</h4><hr/>
                        <textarea onChange={this.descriptionChanged} className="registerInput" />
                    </div>
                    <div className="sec">
                        <h4>Item Type</h4><hr/>
                        <select onChange={this.typeChanged}>
                            {options}
                        </select>
                    </div>
                    <div className="sec">
                        <button className="btn btn-primary" onClick={this.insertItem}>Submit</button>
                    </div>
                </div>
            </ItemCard>
        )
    }

    nameChanged(e)
    {
        const target = e.target;
        this.setState({
            ...this.state,
            name: target.value
        })
    }

    priceChanged(e)
    {
        const target = e.target;
        this.setState({
            ...this.state,
            price: target.value
        })
    }

    genderChanged(e)
    {
        const target = e.target;
        const value = target.options[target.selectedIndex].value;
        this.setState({
            ...this.state,
            gender: value
        })
    }

    descriptionChanged(e)
    {
        const target = e.target;
        this.setState({
            ...this.state,
            description: target.value
        })
    }

    statusChanged(e)
    {
        const target = e.target;
        const value = target.options[target.selectedIndex].value;
        this.setState({
            ...this.state,
            status: value
        })
    }

    typeChanged(e)
    {
        const target = e.target;
        const value = target.options[target.selectedIndex].value;
        this.setState({
            ...this.state,
            type: value
        })
    }

    insertItem()
    {
        const user = JSON.parse(localStorage.getItem("user"));
        const companyId = user[0].company.id;
        const item = {
            name: this.state.name,
            gender: this.state.gender,
            price: this.state.price,
            description: this.state.description,
            status: this.state.status,
            companyId: companyId,
            typeId: this.state.type
        }
        Data.insertItem(item);
        alert("Item added");
    }
}