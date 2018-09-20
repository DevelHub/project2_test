import * as React from 'react';
import './itemViewStyles.css';
import {connect} from 'react-redux';
import {ItemCard, ItemRow, ItemListing, ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/index';


export class ItemViewPage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <ItemCard>
                <ItemImage src="https://via.placeholder.com/350x150"/>

                <div className="itemInformation">
                    <div className="itemOptions">
                        <div className="inline">
                            <div className="optionTitle">{this.props.currentProduct.name}<hr className="myHr"/></div>
                            <div className="optionDiv">{this.props.currentProduct.company}</div>
                        </div>
                        <div className="inline">
                            <div className="optionTitle">Price<hr className="myHr"/></div>
                            <div className="optionDiv">{this.props.currentProduct.price}</div>
                        </div>
                        <div className="inline">
                            <div className="optionTitle">Choose Color<hr className="myHr"/></div>
                            <div className="optionDiv">
                                <div className="colorCheckBox blue"></div>
                                <div className="colorCheckBox red"></div>
                                <div className="colorCheckBox grey"></div>
                            </div>
                        </div>
                        <div className="inline">
                            <div className="optionTitle">Choose Size<hr className="myHr"/></div>
                            <div className="optionDiv">
                                <div className="sizeSelect">s</div>
                                <div className="sizeSelect">m</div>
                                <div className="sizeSelect">l</div>
                                <div className="sizeSelect">xl</div>
                                <div className="sizeSelect">xxl</div>
                            </div>
                        </div>
                        <div className="inline buttonInline">
                        <button className="addToCartButton" onClick={() => this.props.history.push("/pages/cart")}>Add To Cart</button>
                        </div>
                    </div>
                    
                    <div className="itemDescription">
                        {this.props.currentProduct.description} 
                    </div>
                </div>
            </ItemCard>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {currentProduct: state.product.currentProduct};
}

export default connect(mapStateToProps, null) (ItemViewPage);