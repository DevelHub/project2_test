import * as React from 'react';
import './itemViewStyles.css';
import { connect } from 'react-redux';
import {ItemImage} from '../../components/item-listing/itemImage';
import { environment } from '../../../environment';

export class ItemViewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {
                customerId: 0,
                itemId: 0,
                quantity: 0,
            }
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const { cart } = this.state;
        let user = JSON.parse(localStorage.getItem('user'));
        let userId = user[0].customer.id;
       
        let itemId = this.props.currentProduct.itemId;

        console.log(itemId);
        console.log(userId);

        cart.customerId = userId;
        cart.itemId = itemId;
        // cart.quantity = userId.customer.item.quantity;
        cart.quantity=1;


        fetch(environment.context + 'cart/add', {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart),
            method: "POST"
        });//end fetch

        console.log('post cart done');


        this.props.history.push("/pages/cart");
    }

    render() {
        let src = this.props.currentProduct.src;
        if(!src)
        {
            //src = "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180";
            src = "/img/itemImages/Forever21dress2.jpg";
            console.log(process.env.PUBLIC_URL + "/img/itemImages/Forever21dress2.jpg");
        }
        return (
            <div className="itemView">
                <div className="viewImageDiv">
                    <ItemImage gender={this.props.currentProduct.gender} type={this.props.currentProduct.type}/>
                </div>
                <div className="itemInformation">
                    <div className="itemOptions">
                        <div className="inline">
                            <div className="optionTitle">{this.props.currentProduct.name}<hr className="myHr" /></div>
                            <div className="optionDiv">{this.props.currentProduct.company}</div>
                        </div>
                        <div className="inline">
                            <div className="optionTitle">Price<hr className="myHr" /></div>
                            <div className="optionDiv">${this.props.currentProduct.price}</div>
                        </div>
                        <div className="inline">
                            <div className="optionTitle">Choose Color<hr className="myHr" /></div>
                            <div className="optionDiv">
                                <div className="colorCheckBox blue"></div>
                                <div className="colorCheckBox red"></div>
                                <div className="colorCheckBox grey"></div>
                            </div>
                        </div>
                        <div className="inline">
                            <div className="optionTitle">Choose Size<hr className="myHr" /></div>
                            <div className="optionDiv">
                                <div className="sizeSelect">s</div>
                                <div className="sizeSelect">m</div>
                                <div className="sizeSelect">l</div>
                                <div className="sizeSelect">xl</div>
                                <div className="sizeSelect">xxl</div>
                            </div>
                        </div>
                        <div className="inline buttonInline">
                            <button className="btn btn-primary" onClick={this.handleClick}>Add To Cart</button>
                        </div>
                    </div>

                    <div className="itemDescription">
                        {this.props.currentProduct.description}
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {currentProduct: state.product.currentProduct};
// }

// export default connect(mapStateToProps, null) (ItemViewPage);