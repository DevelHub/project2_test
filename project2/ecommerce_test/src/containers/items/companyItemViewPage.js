import * as React from 'react';
import './itemViewStyles.css';
import {connect} from 'react-redux';
import * as Data from '../../app/item-data';
import {ItemImage} from '../../components/item-listing/itemImage';

export class CompanyItemViewPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.statusChanged = this.statusChanged.bind(this);
        this.priceChanged = this.priceChanged.bind(this);
        this.descriptionChanged = this.descriptionChanged.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.deleteItem = this.deleteItem.bind(this)
        this.state = {
            diplay: "",
            price: "",
            description: "",
            status: this.props.currentProduct.status
        }
    }

    render()
    {
        console.log("current product");
        console.log(this.props.currentProduct);
        return (
            <div className="itemView">
                <div className="viewImageDiv">
                    <ItemImage gender={this.props.currentProduct.gender} type={this.props.currentProduct.type}/>
                </div>

                <div className="cols">
                    <div className="sec bb">
                        <h3>{this.props.currentProduct.name}</h3>
                        <p>{this.props.currentProduct.company}</p>
                    </div>
                    <div className="sec bb">
                        <h3>Set Item Status</h3>
                        <p><select onChange={this.statusChanged} value={this.state.status}>
                            <option value="displayed">Displayed</option>
                            <option value="hidden">Hidden</option>
                        </select></p>
                    </div>
                    <div className="sec bb">
                        <h3>Price</h3>
                        <p>${this.props.currentProduct.price}</p>
                    </div>
                    <div className="sec bb">
                        <h3>Edit Price</h3>
                        <p><input onChange={this.priceChanged} type="text"/></p>
                    </div>
                    <div className="sec bb">
                        <h3>Description</h3>
                        <p>{this.props.currentProduct.description}</p>
                    </div>
                    <div className="sec bb">
                        <h3>Edit Description</h3>
                        <p><input onChange={this.descriptionChanged} type="text"/></p>
                    </div>
                    <div className="sec">
                        <button className="btn btn-danger" onClick={this.deleteItem}>Delete Item</button>
                    </div>
                    <div className="sec">
                        <button className="btn btn-primary" onClick={this.saveChanges}>Save Changes</button>
                    </div>
                </div>
            </div>
        )
    }

    statusChanged(e)
    {
        const target = e.target;
        const value = target.options[target.selectedIndex].value;
        target.value = value;

        this.setState({
            ...this.state,
            status: value
        })
    }

    priceChanged(e)
    {
        const value = e.target.value;
        this.setState({
            ...this.state,
            price: value
        })
    }

    descriptionChanged(e)
    {
        const value = e.target.value;
        this.setState({
            ...this.state,
            description: value
        })
    }

    deleteItem()
    {
        const item = this.props.currentProduct;
        Data.updateItemStatus(item.itemId, item.name, "deleted");
    }

    saveChanges()
    {
        const status = this.state.status;
        const currentStatus = this.props.currentProduct.status;
        const price = this.state.price;
        const description = this.state.description;
        let updated = false;
        if(status && status != currentStatus)
        {
            this.updateStatus(status);
            updated = true;
        }
        setTimeout(() => {
            if(price)
            {
                this.updatePrice(price);
                updated = true;
            }
            setTimeout(() => {
                if(description)
                {
                    this.updateDescription(description);
                    updated = true;
                }
            }, 1200);
           
        }, 1000);
        
        if(updated)
        {
            Data.fetchItems();
        }
    }

    updateStatus(status)
    {
        const item = this.props.currentProduct;
        Data.updateItemStatus(item.itemId, status);
    }

    updatePrice(price)
    {
        const item = this.props.currentProduct;
        Data.updateItemPrice(item.itemId, price);
        // setTimeout(() => {this.props.history.push("/pages/clothes/product")}, 2000);
    }

    updateDescription(description)
    {
        const item = this.props.currentProduct;
        Data.updateItemDescription(item.itemId, description);
    }

    updateName(name)
    {
        const item = this.props.currentProduct;
        Data.updateItemName(item.itemId, name);
    }
}

// const mapStateToProps = (state) => {
//     return {currentProduct: state.product.currentProduct}
// }

// export default connect(mapStateToProps, null) (CompanyItemViewPage);