import * as React from 'react';
import './itemViewStyles.css';

export class ItemViewPage extends React.Component
{
    render()
    {
        return(
            <div className="pageContainer">
                <div className="itemViewImageDiv">
                    <p className="temp">Image Size??</p>
                </div>

                <div className="itemInformation">
                    <div className="itemOptions">
                        <div className="inline">
                            <div className="optionTitle">Item Name<hr className="myHr"/></div>
                            <div className="optionDiv">Company</div>
                        </div>
                        <div className="inline">
                            <div className="optionTitle">Price<hr className="myHr"/></div>
                            <div className="optionDiv">$234.56</div>
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
                        <button className="addToCartButton">Add To Cart</button>
                        </div>
                    </div>
                    
                    <div className="itemDescription">
                        This is a test description for a test item that does not actually exist simply because it is used for testing, therefore this description should not be 
                        taken as a serious method of understanding the properties of the current testing item that is being displayed. If this were not a test item that does not 
                        actually exist, a more serious description of the item that does indeed display acurate properties of the item being displayed would be in this place. 
                    </div>
                </div>
            </div>
        )
    }
}