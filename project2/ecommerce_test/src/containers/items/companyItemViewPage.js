import * as React from 'react';
import './itemViewStyles.css';
import {connect} from 'react-redux';
import * as Data from '../../app/item-data';

export class CompanyItemViewPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    render()
    {
        console.log("current product");
        console.log(this.props.currentProduct);
        return (
            <div className="itemView">
                <div className="viewImageDiv">
                    <img className="viewImage" src="https://via.placeholder.com/350x150"/>
                </div>

                <div className="cols">
                    <div className="sec bb">
                        <h3>{this.props.currentProduct.name}</h3>
                        <p>{this.props.currentProduct.company}</p>
                    </div>
                    <div className="sec bb">
                        <h3>Set Item Status</h3>
                        <p><select>
                            <option>Displayed</option>
                            <option>Hidden</option>
                        </select></p>
                    </div>
                    <div className="sec bb">
                        <h3>Price</h3>
                        <p>${this.props.currentProduct.price}</p>
                    </div>
                    <div className="sec bb">
                        <h3>Edit Price</h3>
                        <p><input type="text"/></p>
                    </div>
                    <div className="sec bb">
                        <h3>Description</h3>
                        <p>{this.props.currentProduct.description}</p>
                    </div>
                    <div className="sec bb">
                        <h3>Edit Description</h3>
                        <p><input type="text"/></p>
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

    deleteItem()
    {
        const item = this.props.currentProduct;
        Data.updateItemStatus(item.itemId, item.name, "deleted");
    }

    saveChanges()
    {

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
    }

    udateDescription(description)
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